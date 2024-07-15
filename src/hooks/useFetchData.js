import { useState, useEffect } from "react";

export const useFetchData = ({ endpoint }) => {
    const [data, setData] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`);
                const datos = await response.json();
                setData(datos);
                setisLoading(false);
            } catch (error) {
                console.error('Hubo un problema: ' + error);
            }
        }).then(() => console.log('ejecutando'))
    }, [ endpoint]);

    return {data, 
           isLoading};
}