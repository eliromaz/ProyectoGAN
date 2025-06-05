import { StrictMode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDom from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/js/bootstrap.bundle.min";

ReactDom.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
