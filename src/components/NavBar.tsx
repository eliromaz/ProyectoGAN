import { Link } from "react-router-dom";
import "../styles/NavBar.css";
function NavBar() {
  return (
    <nav className="bar fixed-top">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <span className="logo-3d">DrawME</span>
          </a>
        </div>

        {/* Botón "Nosotros" a la derecha */}
        <div className="d-block">
          <Link to="/nosotros">
            <button className="btn btn-outline-success" type="button">
              Nosotros
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
