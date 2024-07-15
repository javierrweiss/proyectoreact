import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [estado, setEstado] = useState({
        data: null,
        isLoading: true,
        errors: null
    });
  // Si la función de fetch está fuera del useEffect, arroja un error indicando que se 
    // ejecutará cada vez y que hay que incluirlo en las dependencias.
    // Si se incluye en las dependencias, arroja otro error del linter para que se envuelva
    // en un useCallback
    useEffect(() => {
        const fetchData = async () => { 
            if(!url) return;
            try {
                const request = await fetch(url);
                const data = await request.json();
                setEstado({
                    data,
                    isLoading: false,
                    errors: null
                });
            } catch (error) {
                setEstado({
                    data: null,
                    isLoading: false,
                    errors: error
                });
            }
        
        }  
        fetchData().then(() => console.log('ejecutando'))
    }, [url])    

   // return estado;
   return { ...estado };
}
