import { useState, useEffect } from "react";
import { UserList } from "./UserList";

export const AppUser = () => {
    const [endPoint, setendPoint] = useState('users');
    const handleFetch = () => {     
        endPoint === 'users' ? setendPoint('comments') : setendPoint('users');
    }

    return (
        <>
            <h1>Lista de Usuarios</h1>
            <UserList endpoint={endPoint} />
            <button onClick={handleFetch}>Buscar {endPoint === 'users' ? 'comentarios' : 'usuarios'}</button>
        </>);
}
