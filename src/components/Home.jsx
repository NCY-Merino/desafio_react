import React from 'react'
import Header from './Header.jsx'
import CardPizza from './CardPizza.jsx'
import {pizzas} from '../assets/js/pizzas.js'

const Home = () => {
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