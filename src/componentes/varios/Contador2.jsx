import { useCounter } from "../../hooks/useCounter";

export const Contador2 = () => {
   const {contador, inc, dec, reset} = useCounter()
    return ( 
    <>
        <h1>Contador: {contador} </h1>
        <button className="btn btn-primary" onClick={() => inc()}>+1</button>
        <button className="btn btn-danger" onClick={() => reset()}>Reset</button>
        <button className="btn btn-primary" onClick={() => dec()}>-1</button>
    </> 
    );
}