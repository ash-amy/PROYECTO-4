import { Link } from 'react-router-dom'
import { getAuth, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

import './Navbar.css'

function NavUsuario() {
    const auth = getAuth();
    const navigate = useNavigate();
    //Función para cerrar sesión
    const cerrarSesion = async() => {
        await signOut(auth);
        navigate("/");
    }

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
              {/* Ícono de búsqueda */}
              <button
                onClick={() => setOpen(!open)}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
              <i className="bi bi-search text-2xl"></i>
              </button>

              {/* Barra de búsqueda animada */}
              <input
                type="text"
                placeholder="Buscar..."
                onBlur={() => setOpen(true)} // 🔙 se cierra al salir
                className={`absolute right-0 top-0 h-10 rounded-full border border-gray-300 pl-4 pr-10 text-gray-700 transition-all duration-300 ease-in-out ${
                  open
                    ? "w-56 opacity-100 pointer-events-auto"
                    : "w-0 opacity-0 pointer-events-none"
                }`}
              />
            </div>
        </div>

        {/* Vincular con los Links correspondientes */}
        <div>
          <button onClick={cerrarSesion} className="boton rounded-2 mx-1 hover:text-gray-300">cerrar sesión
          </button>
        </div>

      </div>
    </nav>
  );
}

export default NavUsuario;