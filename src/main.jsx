import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Pages from "./pages";
import "./assets/styles/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Pages />
  </StrictMode>
);
