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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Bar nombre="Juliana" apellido="Margarita" edad={ 79 }/>
    <Defecto  />
    <Contador />
    <Pokemones />
    <Formulario />
    <AppUser />
    <HooksApp>  </HooksApp>
    <FormularioComponent />
  </React.StrictMode>,
)
