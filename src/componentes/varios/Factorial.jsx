import { useState, useMemo, useRef } from "react";

function Factorial() {
    const [factorial, setFactorial] = useState();
    const [resultado, setResultado] = useState(0);
    const calcular_factorial = (num) => {
        if (num === 0) {
            setResultado(1)
            return;
        }
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i;
        }
        setResultado(result);
    }
   useMemo(() => {
        calcular_factorial(factorial);
    }, [factorial]);
    return (
        <>
            <h1>Calcule el factorial</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="">Introduzca un número</label>
                <input type="text"
                    value={factorial}
                    onChange={(e) => setFactorial(e.target.value)}/>
                <span>!</span>
                <button onClick={() => {
                    // No sé cómo hacer para que el hook no se active sino con el evento.
                }}>Calcular</button>
            </form>
            <p> Resultado: {resultado}</p>
        </>);
}

export default Factorial;