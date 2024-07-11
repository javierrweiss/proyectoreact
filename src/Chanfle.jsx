const x = (a, b) => {
    return a + b;
}

const y = (a, b) => {
    return () => {
        return a*a + b*b;
    }
}

const z = y(2,4)

const Bar = () => {
    return ( <>
    <h1>Aquí estamos {z()}</h1>
    </> );
}
 
export default Bar;