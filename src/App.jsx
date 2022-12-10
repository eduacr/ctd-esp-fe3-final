
import React, { useContext } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Detail from "./Routes/Detail";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact"
import Favs from "./Routes/Favs";
import { routes } from "./Routes/routes";
import { Routes, Route } from "react-router-dom";
import { ContextGlobal } from "./Components/utils/Context";


function App() {
  const { theme } = useContext(ContextGlobal)
  const isDarkMode = theme === "dark" || false

  return (
      <div className={`app ${isDarkMode ? "dark" : "light"}`}>
          <Navbar/>
          <Routes>
            <Route path={routes.home} element={<Home/>}></Route>
            <Route path={routes.dentist} element={<Detail/>}></Route>
            <Route path={routes.contact} element={<Contact/>}></Route>
            <Route path={routes.favs} element={<Favs/>}></Route>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
