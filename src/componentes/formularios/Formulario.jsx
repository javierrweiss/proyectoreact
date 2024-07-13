import { useState } from "react";
import  { v4 as uuidv4 } from 'uuid';

const onInputChange = ({ target }, setFn ) => {
    setFn(target.value);
}

const onSubmitting = (event , setFn, currentVal, newVal) => {
    event.preventDefault();
    console.log("Array: "+ currentVal);
    console.log("Elemento "+newVal)
    setFn([...currentVal, newVal]);
}

function Formulario() {
    const [insumo, setInsumo] = useState('');
    const [tarea, setTareas] = useState([]);
    return (
        <>
        <h1>Ingrese una tarea</h1>
        <form onSubmit={(e) => {
            onSubmitting(e, setTareas, tarea, insumo);
            setInsumo('');
            }}>
            <input type="text"
                   value={insumo}
                   placeholder="Escriba aquí"
                   onChange={(e) => onInputChange(e, setInsumo) }/>
            <input type="submit" />
        </form>
        <h2><b>Tareas</b></h2>
        <ul>
            {tarea.map(tarea => <li key={uuidv4()}>{tarea}</li>)}
        </ul>
        </>
    );
}

export default Formulario;