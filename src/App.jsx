import Bar from './componentes/varios/Chanfle'
import Defecto from './componentes/varios/Defecto'
import { Contador } from './componentes/varios/Contador'
import Pokemones  from './componentes/varios/Pokemones'
import Formulario from './componentes/formularios/Formulario'
import { AppUser } from './componentes/varios/AppUser'
import { HooksApp } from './componentes/varios/HooksApp'
import { FormularioComponent }   from './componentes/formularios/FormularioComponent'
import UsuariosComponent from './componentes/varios/UsuariosComponent'
import Factorial from './componentes/varios/Factorial'
import NavBar from './componentes/varios/NavBar'
import { Routes, Route, Navigate } from 'react-router-dom'
import UsuarioProvider from './componentes/contexto/UsuarioProvider'
import Imagenes from './componentes/varios/Imagenes'

function App() {
    return (  
        <UsuarioProvider>
            <NavBar />       
            <Routes>
                <Route path='/' element={<Bar nombre='Marino' apellido='Mercedes' edad='56'></Bar>}></Route>
                <Route path='/defecto' element={<Defecto></Defecto>}></Route>
                <Route path='/contador' element={<Contador></Contador>}></Route>
                <Route path='/pokemones' element={<Pokemones></Pokemones>}></Route>
                <Route path='/formulario' element={<Formulario></Formulario>}></Route>
                <Route path='/appuser' element={<AppUser></AppUser>}></Route>
                <Route path='/hooksapp' element={<HooksApp></HooksApp>}></Route>
                <Route path='/formulariocomponent' element={<FormularioComponent></FormularioComponent>}></Route>
                <Route path='/usuarioscomponent' element={<UsuariosComponent></UsuariosComponent>}></Route>
                <Route path='/factorial' element={<Factorial></Factorial>}></Route>
                <Route path='/imagenes' element={<Imagenes></Imagenes>}></Route>
                <Route path='/*' element={ <Navigate to='/'></Navigate>}></Route>
            </Routes>
        </UsuarioProvider>
    );
}

export default App;