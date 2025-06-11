import { Link } from "react-router-dom";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <nav className="bar fixed-top">
      <div className="container-fluid nav-content">
        <div className="logo-area">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <span className="logo-3d">DrawME</span>
          </a>
        </div>

        {/* Botón "Nosotros" debajo en móvil */}
        <div className="btn-area">
          <Link to="/nosotros">
            <button className="btn btn-outline-success btnR" type="button">
              Nosotros
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
