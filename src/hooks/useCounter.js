import { useState } from "react"
 
export const useCounter = (valorInicial = 0) => {
    const [contador, setContador] = useState(valorInicial);
    const inc = () => setContador(contador + 1);
    const dec = () => setContador(contador - 1);
    const reset = () => setContador(0);
    return {
        contador,
        inc,
        dec,
        reset
  }
}