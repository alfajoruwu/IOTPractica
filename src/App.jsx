
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Pestañas/Login/Login'
import MenuInicialAdmin from './Pestañas/Usuarios/Administrador/MenuInicial/MenuInicialAdmin'
import MenuInicial from './Pestañas/Usuarios/Cliente/MenuInicial/MenuInicial'
function App() {

  return (
    <>
      <Router>

      <Routes>
       
        <Route exact path='/' element={<Login />} />
        <Route path='/MenuInicialAdmin' element={<MenuInicialAdmin />} />
        <Route path='/MenuInicial' element={<MenuInicial/>} />

      </Routes>

      </Router>
    </>
  )
}

export default App
