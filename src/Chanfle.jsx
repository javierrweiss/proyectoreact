//import PropTypes from 'prop-types'

const Bar = ({ nombre, apellido, edad }) => {
    return ( <>
    <h1>Saludos, {nombre} {apellido}!!!</h1>
    <p>Tu edad es: {edad}</p>
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