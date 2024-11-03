import React from 'react'
import Navbar from '../../Componentes/Elementos comunes/Navbar/Navbar'
import '../Login/Login.css'

import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const usarNavigate = () => { 
		navigate('/MenuInicial'); 
		};

    return (
    <>
    <div>
        <Navbar/>
    </div>
    
    <div className='Login'>

            <h3>IOT Techos Facilito</h3>
            
            <input type="text" placeholder="Usuario" />
            <input type="password" placeholder="Contraseña" />
            
            <button onClick={usarNavigate}>Iniciar sesión</button>
            <button className="forgot-password">Olvidé mi contraseña</button>

    </div>
    </>
    )
}

export default Login