import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { id } = useParams()
  const [dentist, setDentist] = useState([])
  console.log(dentist);
  const url = `https://jsonplaceholder.typicode.com/users/${id}`

  useEffect(() => {
    axios.get(url)
    .then(res => setDentist(res.data))
  
      }, [url])
  
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail Dentist id {dentist.id}</h1>
      <ul>
        <li>Name: {dentist.name}</li>
        <li>Email: {dentist.email}</li>
        <li>Phone: {dentist.phone}</li>
        <li>Website: {dentist.website}</li>
      </ul>
    </>
  )
}

export default Detail