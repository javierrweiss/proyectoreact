//import PropTypes from 'prop-types'
import { useContext } from 'react';
import saludoTag from '../../utils/utils'
import { UsuarioContexto } from '../contexto/UsuarioContexto';

const Bar = ({ nombre, apellido, edad }) => {
    const { usuario } = useContext( UsuarioContexto);
    return ( 
    <>
    <h1>Saludos, {nombre} {apellido}!!!</h1>
    <p>Tu edad es: {edad}</p>
    <h2>{saludoTag`¡Saludos, ${usuario.nombre} ${usuario.apellido} ${usuario.edad} !`}</h2>
    </> );
}
/*
Bar.PropTypes = {
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired,
    edad: PropTypes.number.isRequired,
}

// En caso que no se le pase nada

Bar.defaultProps = {
    nombre: 'Marino',
    apellido: 'Mercedes',
    edad: 25
} 
*/   
export default Bar; 