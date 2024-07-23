import { UsuarioContexto } from "./UsuarioContexto";

const usuario = {
    nombre: 'Pedrito',
    apellido: 'Harrison',
    dni: 1223343,
    edad: 26
}

function UsuarioProvider({ children }) {
    return ( 
    <>
    <UsuarioContexto.Provider value={{ usuario }}>
        {children}
    </UsuarioContexto.Provider>
    </> );
}

export default UsuarioProvider;