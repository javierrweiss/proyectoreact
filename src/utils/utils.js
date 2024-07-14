const esMayor = (edad) => {
     return edad > 59;
}

const esMujer = (st) => {
    return st.endsWith('a');
}

const saludoTag = (strs, name, lastname, age) => {
    let saludo = () => {
        if(esMayor(age) && esMujer(name)) return 'Sra';
        if(!esMayor(age) && esMujer(name)) return 'señorita';
        if(esMayor(age) && !esMujer(name)) return 'Sr.';
        if(!esMayor(age) && !esMujer(name)) return 'estimado';
    }
    return `${strs[0]} ${saludo()} ${name} ${lastname}`;
}

export default saludoTag;
