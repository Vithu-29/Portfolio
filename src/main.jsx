import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom"; // <-- Change here

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter> {/* <-- Use HashRouter instead of BrowserRouter */}
      <App />
    </HashRouter>
  </StrictMode>
);
