import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
//Importamos Firebase
import app from './firebase'
//Autentication
import { getAuth, signOut } from 'firebase/auth';


import Navbar from "./components/Navbar";
import Inicio from "./components/Inicio";
import Nosotros from "./components/Nosotros";
import Juegos from "./components/Juegos";
import Contacto from "./components/Contacto";
import Testimonios from "./components/Testimonios";
import Footer from "./components/Footer";
import Filter from "./components/Filter";

//Iniciar sesión y registrarse
import Login from "./components/Login";
import RegistrarUsuario from "./components/RegistrarUsuario";

function App() {
  const [mostrarBuscador, setMostrarBuscador] = useState(false);
  const servicios = ["Matrícula", "Juegos", "Cuestionario de Programación"];

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div>
          {/* 🔘 Botón que alterna el buscador */}
          <button
            onClick={() => setMostrarBuscador(!mostrarBuscador)}
            style={{
              padding: "10px 15px",
              marginBottom: "15px",
              borderRadius: "8px",
              background: "#2563eb",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            {mostrarBuscador ? "Cerrar" : "Buscar"}
          </button>

          {/* 🪄 Mostrar el buscador sólo si mostrarBuscador es true */}
          {mostrarBuscador && (
            <Filter items={servicios} placeholder="Buscar servicio..." />
          )}
        </div>

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Juegos" element={<Juegos />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Testimonios" element={<Testimonios />} />
          <Route path="/Formulario" element={<h1>Formulario</h1>} />
          <Route path="/Prueba" element={
            <>
            <Login />
            </>
          } />
          <Route path="/Prueba1" element={
            <>
            <RegistrarUsuario />
            </>
          } />



        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
