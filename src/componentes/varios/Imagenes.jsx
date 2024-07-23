import { useState } from "react";
import sociologia  from '../../assets/sociologia_del_conocimiento_23.jpeg';
import calavera from '../../assets/calavera.jpeg';

function Imagenes() {
    const [imagen, setImagen] = useState(sociologia);
    return (
    <>
    <h1> Esta es una prueba de eventos con imágenes</h1>
    <img src={imagen} 
         alt="Sociologia" 
         onMouseOver={() => setImagen(calavera)}
         onMouseOut={() => setImagen(sociologia)} 
    />
    </>
    );
}

export default Imagenes;