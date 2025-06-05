import "../styles/ShowImage.css";

interface ShowImageProps {
  imageUrl: string | null;
  isLoading: boolean;
  error?: string | null;
}

function ShowImage({ imageUrl, isLoading, error }: ShowImageProps) {
  const descargarImagen = () => {
    if (imageUrl) {
      const link = document.createElement("a");
      link.href = imageUrl;
      link.download = "imagen_generada.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="text-center p-2">
      {/* Contenedor de la imagen generada */}
      <div className="show-image-container d-flex justify-content-center align-items-center">
        {isLoading ? (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Generando imagen...</span>
          </div>
        ) : imageUrl ? (
          <img src={imageUrl} alt="Imagen generada" className="img-generada" />
        ) : (
          <p className="text-muted">No se ha generado ninguna imagen aún.</p>
        )}
      </div>

      {/* Mensaje de error */}
      {error && (
        <div className="alert alert-danger mt-3 error_message" role="alert">
          {error}
        </div>
      )}

      {/* Botón de descarga */}
      <div>
        <button
          type="button"
          className="btn btn-descargar m-4"
          onClick={descargarImagen}
          disabled={!imageUrl}
        >
          Descargar
        </button>
      </div>
    </div>
  );
}

export default ShowImage;
