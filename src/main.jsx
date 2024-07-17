import React from 'react'
import ReactDOM from 'react-dom/client'
import Bar from './componentes/varios/Chanfle'
import Defecto from './componentes/varios/Defecto'
import { Contador } from './componentes/varios/Contador'
import Pokemones  from './componentes/varios/Pokemones'
import Formulario from './componentes/formularios/Formulario'
import { AppUser } from './componentes/varios/AppUser'
import './style.css'
import { HooksApp } from './componentes/varios/HooksApp'
import { FormularioComponent }   from './componentes/formularios/FormularioComponent'
import UsuariosComponent from './componentes/varios/UsuariosComponent'
import Factorial from './componentes/varios/Factorial'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Factorial />
    <Bar nombre="Juliana" apellido="Margarita" edad={ 79 }/>
    <Defecto  />
    <Contador />
    <Pokemones />
    <Formulario />
    <AppUser />
    <HooksApp>  </HooksApp>
    <FormularioComponent />
    <UsuariosComponent></UsuariosComponent>
  </React.StrictMode>,
)
