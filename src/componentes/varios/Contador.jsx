import { useState } from "react";

export const Contador = ({ valor = 0 }) => {
    const [contador, setContador] = useState(valor);
    return (<>
        <div>
            <h3>Haga click!</h3>
            <button onClick={ () => setContador(contador + 1)}>
                <span> Van { contador } clicks! </span>
            </button>
            <br />
            <button onClick={ () => setContador(0)}>
                <span>Resetear</span>
            </button>
        </div>

    </>);
}