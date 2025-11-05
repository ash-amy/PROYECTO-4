import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <>
      <footer>
        <div class="nombre">
          <p>
            <b>"CODEPLAY"</b>
          </p>
        </div>
        <div class="icons">
          <i class="bi bi-instagram"></i>
          <i class="bi bi-facebook"></i>
          <i class="bi bi-whatsapp"></i>
        </div>
        <div class="author">
          <p>
            “Plataforma educativa para niños de 6 a 10 años, donde aprender
            programación y creatividad es un juego.”
          </p>
          <p>© 2025 CodePlay. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
