import { useState } from "react";
import NavBar from "./NavBar";
import Menu from "./Menu";
import ShowImage from "./ShowImage";
import "../styles/Grid.css";

function Grid() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateImage = async (selectedArray: number[]) => {
    console.log("Recibido en Grid.tsx:", selectedArray);
    setIsLoading(true);
    setError(null); // Limpiar error previo

    try {
      const respuesta = await fetch("http://localhost:8000/generar-imagen/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ arreglo_binario: selectedArray }),
      });

      if (!respuesta.ok) {
        throw new Error("No se pudo generar la imagen.");
      }

      const imagenBlob = await respuesta.blob();
      const imagenURL = URL.createObjectURL(imagenBlob);
      setImageUrl(imagenURL);
    } catch (error: unknown) {
      console.error("Error:", error);
      setError(
        "Ocurrió un error al generar la imagen. Verifica tu conexión o intenta de nuevo."
      );

      // Ocultar el mensaje después de 5 segundos (5000 ms)
      setTimeout(() => {
        setError(null);
      }, 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container-fluid content-container mt-5 d-flex flex-column align-items-center">
      <NavBar />

      <div className="metallic-hero text-center p-5 mb-4">
        <h1 className="display-5 fw-semibold">Generador de Retratos</h1>
        <p className="hover-text-ins">
          No se requiere experiencia técnica: selecciona características,
          presiona un botón, ¡y listo! <br />
          Descarga tu retrato y compártelo con quien quieras.
        </p>
      </div>

      <div className="row w-100 justify-content-center flex-md-row">
        <div className="col-md-6 mt-5 justify-content-center">
          <Menu onGenerateImage={handleGenerateImage} />
        </div>
        <div className="col-md-6 mt-4 mb-4 d-flex justify-content-center">
          <ShowImage imageUrl={imageUrl} isLoading={isLoading} error={error} />
        </div>
      </div>
    </div>
  );
}

export default Grid;
