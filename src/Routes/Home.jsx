import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/Context'
import axios from 'axios'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  // const {data} = useContextGlobal()
  const [dentist, setDentist] = useState([]);
  console.log(dentist);

  const url = "https://jsonplaceholder.typicode.com/users"
  useEffect (() => {
    axios.get(url)
    .then(res => setDentist(res.data))
  }, [url])


  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid container'>
      {dentist.map((item) => (<Card key={item.id} name={item.name} username={item.username} id={item.id} />))}
      </div>
    </main>
  )
}


export default Home