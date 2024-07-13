import { useState, useEffect  } from "react";

export const UserList = ({ endpoint }) => {
    const [listaUsuarios, setListaUsuarios] = useState([]);
    const obtenerUsuarios = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`);
            const datos = await response.json();
            setListaUsuarios(datos);
        } catch (error) {
            console.error('Hubo un problema: ' + error);
        }
    }
     // Si usamos una función para llamar a la función asíncrona, no es necesario el useEffect
    /*
    useEffect(() => {
        obtenerUsuarios();
    }, []);
*/
useEffect(() => {
    obtenerUsuarios();
}, [endpoint]);

    return (
        <>
            <ul>
                {endpoint == 'users' ? 
                listaUsuarios.map(usuario => (
                    <li key={usuario.id}>
                        {usuario.name}
                    </li>
                ))
            :
                listaUsuarios.map(comentario => (
                    <li key={comentario.id}>
                        {comentario.body}
                    </li>
                ))
            }
            </ul>
        </>);
}