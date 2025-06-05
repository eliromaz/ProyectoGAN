from fastapi import FastAPI, Request# type: ignore
from fastapi.responses import StreamingResponse # type: ignore
from pydantic import BaseModel# type: ignore

import os
os.add_dll_directory("C:/Program Files/NVIDIA GPU Computing Toolkit/CUDA/v11.8/bin")

import warnings
warnings.filterwarnings("ignore", message="Failed to build CUDA kernels for upfirdn2d.*", category=UserWarning)
import torch# type: ignore
import numpy as np# type: ignore
import dnnlib
import legacy
import io
from torchvision.utils import save_image# type: ignore
from fastapi.middleware.cors import CORSMiddleware# type: ignore

# Cargar el modelo
 #if torch.cuda.is_available() else 'cpu'
device = torch.device('cuda')  # Usa 'cuda' si tienes soporte
with dnnlib.util.open_url("network-snapshot-000040.pkl") as f:
    G = legacy.load_network_pkl(f)["G_ema"].to(device) # type: ignore

app = FastAPI()

# Permitir peticiones desde el frontend en localhost:5173
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class InputData(BaseModel):
    arreglo_binario: list[int]  # La lista de enteros que recibirás del frontend

def ordenarCaracteristicas(data: InputData):
    arregloInicial = data.arreglo_binario
    arregloPosiciones = [4, 8, 9, 11, 17, 5, 28, 30, 32, 33, 12, 6, 7, 22, 1, 3, 3, 23, 24, 27, 19, 26, 25, 31, 13, 14, 15, 36, 39, 20]
    arregloFinal = [1] * 40  # Inicializa el arreglo con ceros

    for i, pos in enumerate(arregloPosiciones):
        if i < len(arregloInicial):  # Asegura que no haya un índice fuera de rango
            arregloFinal[pos] = arregloInicial[i]

    print(arregloFinal)
    return arregloFinal

@app.post("/generar-imagen/")
def generar_imagen(data: InputData):
    # raise Exception("Simulación de error interno")
    # Llamamos a ordenarCaracteristicas con los datos que llegaron en la solicitud
    arregloBinario = ordenarCaracteristicas(data)

    class_vector = torch.tensor(arregloBinario, dtype=torch.float32, device=device).unsqueeze(0)
    seed = np.random.randint(0, 99999)
    z = torch.from_numpy(np.random.RandomState(seed).randn(1, G.z_dim)).to(device)

    img = G(z, class_vector, truncation_psi=0.8, noise_mode='const')
    img = (img + 1) * 0.5  # Normalizar de [-1,1] a [0,1]

    buffer = io.BytesIO()
    save_image(img, buffer, format="PNG")
    buffer.seek(0)

    return StreamingResponse(buffer, media_type="image/png")
