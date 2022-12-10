import React from "react";
import { Link } from "react-router-dom";


const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
        {/* <img src="/images/doctor.jpg" alt="" /> */}
        <div>
          <Link to={`/dentist/${id}`}><h3>{name}</h3></Link>
          <p>{username}</p>
          <p>Id: {id}</p>
        </div>
  

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;

// - La grilla deberá mostrar una [Card](/src/Components/Card.jsx) por cada dentista devuelto por la API.
// - Cada dentista deberá contener `name` y `username`, junto con un boton `ADD FAV` (para agregar al localStorage como fav) y un `link` que permita su navegacion a la pagina _dentist/:id_ en base al id del dentista.
// - Cada Card debe integrar la funcionalidad de agregar a destacados