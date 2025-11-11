import {useState, useEffect} from "react";
import {getAuth} from "firebase/auth"; 
import {db} from "../firebase";

function Promociones() {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [cargando, setCargando] = useState(true);

    useEffect(()=>{
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) {
            setEmail(user.email);
           
            if (user.displayName) {
                setNombre(user.displayName);
                setCargando(false);
            }
        }
    }, []);
    
    return (
        <>
        <h1>Promociones y Descuentos</h1>
        <p>Bienvenido {nombre}</p>
        <p>Correo ingresado: {email}</p>
        </>
    )
}

export default Promociones; 
