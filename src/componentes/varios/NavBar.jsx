import { Link, NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">Aplicación de Prueba</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link active"  to="/bar">Bar</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/defecto">Defecto</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contador">Contador</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/pokemones">Pokemones</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/formulario">Tareas</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/appuser">Usuario</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/hooksapp">Contador con hooks</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/formulariocomponent">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/usuarioscomponent">Lista usuarios</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/factorial">Calcula factorial</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/imagenes">Imagenes</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>);
}

export default NavBar;