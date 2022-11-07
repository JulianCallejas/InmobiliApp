import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { render } from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./Routes/app";
import InmuNew from "./Routes/inmueble-new";
import Inmu1 from "./Routes/inmueble";
import Login from "./Routes/login";
import Register from "./Routes/register";

import Prueba from "./Routes/botonpruebas";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<App />} />
                    <Route path="inmueble">
                        <Route path=":inmuebleId" element={<Inmu1 />} />
                        <Route index element={<h1>Hola</h1>} />
                        <Route path="new" element={<InmuNew />} />
                    </Route>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="prueba" element={<Prueba />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
