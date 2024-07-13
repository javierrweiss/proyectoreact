import React from 'react'
import ReactDOM from 'react-dom/client'
import Bar from './componentes/varios/Chanfle'
import Defecto from './componentes/varios/Defecto'
import { Contador } from './componentes/varios/Contador'
import Pokemones  from './componentes/varios/Pokemones'
import Formulario from './componentes/formularios/Formulario'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Bar nombre="Julian" apellido="Margarita" edad={ 59 }/>
    <Defecto  />
    <Contador />
    <Pokemones />
    <Formulario />
  </React.StrictMode>,
)
