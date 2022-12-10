import React, { useState } from "react";



const Form = () => {
  
  const [user, setUser] = useState({
    nombre: "",
    email: ""
  })
    
    
  const [errors, setErrors] = useState(false)
  const [message, setMessage] = useState(false)
  const validate = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if(user.nombre.length === 0 || user.nombre.length < 5 || !emailRegex.test(user.email)){
      setErrors(true)
    }else{
      setMessage(true)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    validate()
  }

return (
    <div>
        
      <form onSubmit={handleSubmit}>
       
        <input type="text" placeholder="Nombre completo" onChange={(e)=> setUser({...user, nombre:e.target.value})}/>
        <input type="email" placeholder="email" onChange={(e)=> setUser({...user, email:e.target.value})}/>
        {errors && "Por favor verifique su información nuevamente"}
        {message && `Gracias ${user.nombre}, te contactaremos cuanto antes vía email`}
        <button>Send</button>
      </form>
    </div>
  );
};

export default Form
 