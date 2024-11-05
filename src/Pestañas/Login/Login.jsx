import React, { useState } from 'react';
import Navbar from '../../Componentes/Elementos comunes/Navbar/Navbar';
import '../Login/Login.css';
import api from '../../Utils/Axios/AxiosInstance';
import { Toast } from '@capacitor/toast';

import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
  
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');



    const showToast = async () => {
      try {
        await Toast.show({
          text: 'Error al enviar datos',
          duration: 'short',
          position: 'bottom'
        });
      } catch (error) {
        console.error('Error al mostrar el toast:', error);
      }
    };


    const usarNavigate = () => {
        api.post('/Login', {
            Correo: usuario,
            Contrasena: contrasena
        })
        .then(response => {
            console.log('Datos enviados:', response.data);
            if(response.data.Tipo == "administrador"){
              navigate('/MenuInicialAdmin');
            }

            else if(response.data.Tipo == "usuario"){
              navigate('/MenuInicial');
            };

        })
        .catch(error => {
            console.error('Error al enviar datos:', error);
            showToast();
        });
    };

    return (
        <>
            <div>
                <Navbar titulo="Inicio de sesión" />
            </div>
            
            <div className='Login'>
                <h3>IOT Techos Facilito</h3>
                
                <input 
                    type="text" 
                    placeholder="Usuario" 
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="Contraseña" 
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                />
                
                <button onClick={usarNavigate}>Iniciar sesión</button>
                <button className="forgot-password">Olvidé mi contraseña</button>
            </div>
        </>
    );
};

export default Login;
