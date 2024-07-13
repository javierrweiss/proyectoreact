import React from 'react'
import ReactDOM from 'react-dom/client'
import Bar from './Chanfle'
import Defecto from './Defecto'
import { Contador } from './Contador'
import Pokemones  from './Pokemones'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Bar nombre="Julian" apellido="Margarita" edad={ 59 }/>
    <Defecto  />
    <Contador />
    <Pokemones />
  </React.StrictMode>,
)
