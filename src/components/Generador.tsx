import { useState } from "react";
import ShowImage from "./ShowImage"; // Importamos ShowImage.tsx

function Generador() {
  const [imagenURL, setImagenURL] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const generarImagen = async () => {
    setIsLoading(true);

    const datos = {
      arreglo_binario: [1, 0, 1, 0, 1, 1, 0], // Arreglo de prueba
    };

    const respuesta = await fetch("http://localhost:8000/generar-imagen/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    });

    if (respuesta.ok) {
      const imagenBlob = await respuesta.blob();
      const imagenURL = URL.createObjectURL(imagenBlob);
      setImagenURL(imagenURL);
    } else {
      console.error("Error al generar la imagen");
    }

    setIsLoading(false);
  };

  return (
    <div className="container text-center">
      <button
        className="btn btn-primary m-3"
        onClick={generarImagen}
        disabled={isLoading}
      >
        {isLoading ? "Generando..." : "Generar Imagen"}
      </button>

      {/* Mostrar la imagen generada */}
      <ShowImage imageUrl={imagenURL} isLoading={isLoading} />
    </div>
  );
}

export default Generador;
