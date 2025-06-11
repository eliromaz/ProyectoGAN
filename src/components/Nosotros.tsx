import NavBar from "./NavBar";
import { Link } from "react-router-dom";

function Nosotros() {
  return (
    <>
      <NavBar />
      <div className="container mt-5 text-center">
        <h1>Nosotros</h1>
        <p className="text-justify">
          Somos Sebastián Elí Román Álvarez y Gerardo Arias Magaña, estudiantes
          de la carrera de Ingeniería en Sistemas Computacionales en la UPIIZ —
          Unidad Profesional Interdisciplinaria de Ingeniería Campus Zacatecas,
          perteneciente al Instituto Politécnico Nacional (IPN). Actualmente
          cursamos el octavo semestre y hemos desarrollado este proyecto como
          parte de nuestra formación académica y profesional. Nos apasionan las
          tecnologías que integran inteligencia artificial, interfaces
          intuitivas y experiencias innovadoras. Este proyecto refleja nuestro
          interés por las redes neuronales generativas y su aplicación en la
          creación de retratos faciales personalizados.
        </p>

        <Link to="/" className="btn btn-dark mt-3">
          Volver al inicio
        </Link>
      </div>
    </>
  );
}

export default Nosotros;
