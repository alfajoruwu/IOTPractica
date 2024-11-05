import React from 'react'
import Navbar from '../../../../Componentes/Elementos comunes/Navbar/Navbar'
import '../MenuInicial/MenuInicial.css'

const MenuInicial = () => {
  return (
    <>
    <Navbar titulo={"Menu inicial"}/>

    <div className='MenuInicial'>
    
    <button>Resumen</button>
    <button>Estaciones</button>
    <button>Actuadores</button>
    <button>Notificaciones</button>

    </div>

    </>
  )
}

export default MenuInicial