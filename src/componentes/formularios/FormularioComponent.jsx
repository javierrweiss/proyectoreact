import { useState } from "react";

export const FormularioComponent = () => {
    const [formulario, setFormulario] = useState({
        usuario: '',
        correo: '',
        clave: ''
    })
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(formulario);
    }
    return (
        <>
            <form>
            <div className="mb-3">
                    <label htmlFor="Username" className="form-label">User name</label>
                    <input type="text" className="form-control" 
                           id="Username" 
                           name="usuario" 
                           value={formulario.usuario}
                           onChange={e => setFormulario({...formulario, usuario: e.target.value})}/>
                        
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" 
                           className="form-control" 
                           id="exampleInputEmail1" 
                           name="email"
                           value={formulario.correo}
                           onChange={e => setFormulario({...formulario, correo: e.target.value})}/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" 
                           className="form-control" 
                           id="exampleInputPassword1"
                           name="clave"
                           value={formulario.clave}
                           onChange={e => setFormulario({...formulario, clave: e.target.value})}/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>);
}