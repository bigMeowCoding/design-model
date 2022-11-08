import * as React from "react";
// import "./styles/index.scss";
// import "normalize.css";
import ReactDOM from "react-dom/client";
import App from "./src/App";



const rootElement = document.getElementById("root");
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<App />);
}