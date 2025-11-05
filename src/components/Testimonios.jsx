import { Link } from "react-router-dom";
import "./Testimonios.css";
function Testimonios() {
  return (
    <>
      <div className="introduccion">
        <h1>Testimonios</h1>
        <p>
          En CodePlay formamos a las nuevas generaciones con una metodología
          innovadora que une el juego y la programación. Padres y alumnos
          confían en nosotros por nuestro compromiso con la educación
          tecnológica divertida y efectiva. Estos son algunos de sus
          comentarios.
        </p>
      </div>

      <div className="testimonios-container">
        <div className="testimonio" id="tes1">
          <p>
            "Mi hija ha aprendido tanto en CodePlay. La combinación de juegos y
            programación la mantiene motivada y emocionada por aprender más."
          </p>
          <h5>- María G.</h5>
        </div>

        <div className="testimonio" id="tes2">
          <p>
            “Aprender con CodePlay es como jugar y descubrir al mismo tiempo.
            Ahora sé hacer mis propios minijuegos y me divierte programar.”
          </p>
          <h5>— Luciana R., 10 años</h5>
        </div>

        <div className="testimonio" id="tes3">
          <p>
            “CodePlay combina el juego con el pensamiento lógico de una forma
            que mantiene a los niños motivados. He visto cómo mejoran su
            concentración y creatividad en pocas semanas.”
          </p>
          <h5>— Prof. Andrea M.</h5>
        </div>

        <div className="testimonio" id="tes4">
          <p>
            “Gracias a CodePlay aprendí a crear páginas web y entender cómo
            funcionan los videojuegos. Lo mejor es que las clases son súper
            dinámicas y divertidas.”
          </p>
          <h5>— Sebastián P., 14 años</h5>
        </div>

        <div className="testimonio" id="tes5">
          <p>
            “Me encanta que en CodePlay no solo enseñan tecnología, sino también
            trabajo en equipo y resolución de problemas. Mi hija ha ganado mucha
            confianza.”
          </p>
          <h5>— Mariela V.</h5>
        </div>

        <div className="testimonio" id="tes6">
          <p>
            “CodePlay representa el futuro de la educación. Su metodología
            práctica y lúdica despierta en los niños el deseo de crear, no solo
            consumir tecnología.”
          </p>
          <h5>— Lic. Verónica Ruiz, Coordinadora Académica</h5>
        </div>
      </div>
    </>
  );
}

export default Testimonios;
