import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import * as bootstrap from "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import Spinner from "./components/Spinner.jsx";

createRoot(document.getElementById("root")).render(<App />);
