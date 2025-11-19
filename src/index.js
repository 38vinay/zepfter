import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// ✅ Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// ✅ Bootstrap JS (this is required for dropdown, modal, navbar toggle, etc.)
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// your global styles
import "./styles/global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
