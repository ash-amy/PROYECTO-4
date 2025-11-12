import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";

import './Navbar.css'

 function SearchBar() {
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);
  const wrapperRef = useRef(null);

  // 🔹 Cierra al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 🔹 Enfoca el input al abrir
  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  return (
    <div ref={wrapperRef} className="relative flex items-center">
      {/* 🔍 Icono */}
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
      >
        <FaSearch size={18} />
      </button>

      {/* 🔎 Input animado */}
      <input
        ref={inputRef}
        type="text"
        placeholder="Buscar..."
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            setOpen(false); // se cierra al presionar Enter
          }
        }}
        className={`absolute right-0 top-0 h-10 rounded-full border border-gray-300 bg-white pl-4 pr-10 text-gray-700 shadow-md outline-none transition-all duration-500 ease-in-out
          ${open ? "w-56 opacity-100 pointer-events-auto" : "w-0 opacity-0 pointer-events-none"}`}
      />
    </div>
  );
}

function NavVisitante() {
    return (
    <nav className="navbar degradado text-black p-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <img
            className="logo"
            src="./Public/logo-largo.png"
            alt="Logo Code Play"
          />
        </div>

        <div>
          <ul className="options flex space-x-6 p-t-2">
          <li className="hover:text-gray-300">
            {" "}
            <Link to="/">Inicio</Link>
          </li>
          <li className="hover:text-gray-300">
            {" "}
            <Link to="/Nosotros">Nosotros</Link>
          </li>
          <li className="hover:text-gray-300">
            {" "}
            <Link to="/Juegos">Juegos y Retos</Link>
          </li>
          <li className="hover:text-gray-300">
            {" "}
            <Link to="/Contacto">Contáctanos</Link>{" "}
          </li>
          <li className="hover:text-gray-300">
            {" "}
            <Link to="/Testimonios">Testimonios</Link>
          </li>
          <li className="hover:text-gray-300">
            {" "}
            <Link to="/Promociones">Promociones</Link>
          </li>
        </ul>
        </div>

        <div>
            <div className="relative flex items-center">
              {/* 🔍 Icono de búsqueda */}
              <button
                onClick={() => setOpen(!open)}
                className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <i className="fas fa-search"></i>
              </button>

              {/* 🔎 Input animado */}
              <input
                type="text"
                placeholder="Buscar..."
                onBlur={() => setOpen(false)}
                className={`absolute right-0 top-0 h-10 rounded-full border border-gray-300 bg-white pl-4 pr-10 text-gray-700 shadow-md outline-none transition-all duration-500 ease-in-out
                  ${open ? "w-56 opacity-100 pointer-events-auto" : "w-0 opacity-0 pointer-events-none"}`}
              />
            </div>
        </div>

        {/* Vincular con los Links correspondientes */}
        <div>
          <button className="boton rounded-2 mx-1 hover:text-gray-300">
          {" "}
          <Link to="/Login">Log in</Link>
          </button>

          <button className="boton rounded-2 mx-1 hover:text-gray-300">
            {" "}
            <Link to="/Registrar">Sign up</Link>
          </button>
        </div>

      </div>
    </nav>
  );
}

export default NavVisitante;