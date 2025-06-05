import NavBar from "./NavBar";
import Slider from "./Slider";

const imagenes = [
  "/imagenes/000001.png",
  "/imagenes/000002.png",
  "/imagenes/000003.png",
];

function Generados() {
  return (
    <>
      <NavBar />
      <div className="main-section w-100 text-center ">
        <h1>Retratos generados con DrawME</h1>
        <div className="carousel-container">
          <div className="carousel-size">
            <Slider imagenes={imagenes} id="miCarrusel" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Generados;
