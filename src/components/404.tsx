import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center mt-5">
      <h1 className="display-3">404</h1>
      <p className="lead">La página que buscas no existe.</p>
      <Link to="/" className="btn btn-dark mt-3">
        Volver al inicio
      </Link>
    </div>
  );
}

export default NotFound;
