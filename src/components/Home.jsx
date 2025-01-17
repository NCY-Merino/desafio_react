import React, { useState, useEffect } from 'react'
import Header from './Header.jsx'
import CardPizza from './CardPizza.jsx'
// import {pizzas} from '../assets/js/pizzas.js'

const Home = () => {
  const [pizzas, setInfo] = useState([]);

  useEffect(() => {
    getPizzas();
  }, []);

  const getPizzas = async () => {
    const url = "http://localhost:5000/api/pizzas";
    const response = await fetch(url);
    const pizzas = await response.json();
    setInfo(pizzas);
  };
  
  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="productos d-flex flex-column flex-md-row flex-wrap" >
        {pizzas.map((pizza, i) => <CardPizza pizza={pizza} key={i}/>)}
        </div>
      </div>
    </>
  )
}

export default Home