import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Grid from "./components/Grid";
import Nosotros from "./components/Nosotros";
import Footer from "./components/Footer";
import NotFound from "./components/404";
import Generados from "./components/Generados";
import "../src/style.css";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100 ">
        <Routes>
          <Route path="/" element={<Grid />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/Generados" element={<Generados />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
