import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// ✅ Bootstrap CSS (must come first)
import "bootstrap/dist/css/bootstrap.min.css";

// ✅ Bootstrap JS (required for dropdown, modal, navbar toggle, etc.)
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Your global styles (should come after Bootstrap)
import "./styles/global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);