import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/Context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Navbar = () => {
  // const {dispatch} = useGlobalState()
  const { theme, setDarkTheme, setLightTheme } = useContext(ContextGlobal);
  const isDarkMode = theme === "dark" || false;

  const changeTheme = () => {
    if (isDarkMode) setLightTheme();
    else setDarkTheme();
  };

  return (
    <nav >
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <div>
        <button><Link to="/">Home</Link></button>
        <button><Link to="/contacto">Contacto</Link></button>
        <button><Link to="/favs">Favs</Link></button>
      </div>
      <button onClick={changeTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar