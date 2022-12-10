
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

// Profe: Soy Eduardo Cayupan; le comenté a Belén que tuve algunos inconvenientes para hacer el final estos días, por cuestiones familiares principalemente (me dijo que te iba a comentar para que estuvieras al tanto)
// // No pude terminar el examen porque no me alcanzó el tiempo. Planteé casi todas las interacciones de la página   excepto los conceptos de useReducer y globalContexto (que lo esbocé nada mas). Obviamente los estilos los dejé para el final pero no llegué a tocarlos (dejé las imagenes comentadas para que no interfieran).
// De ser posible me gustaría que me adelantes como va a ser el recuperatorio así puedo empezar a prepararlo. Está demás decir que este examen voy a terminarlo en estos días.
