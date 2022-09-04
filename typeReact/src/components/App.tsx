import React from 'react';
import data from '../data/data.json'
import AppCss from './App.css'
import PizzaLogo from '../assets/svg/pizza.svg'

import Pizza from './Pizza'
import Cart from './Cart'


const App: React.FC = () => {
  return (
    <div className={AppCss.container}>
      <div className={AppCss.header}>
        <PizzaLogo width="150px" height="150px" />
        <Cart/>
        <div className={AppCss.siteTitle}>Delicious Pizza</div>
            {data.map((pizza) =>{
              return <Pizza key={pizza.id} pizza={pizza} />
            })}
      </div>
    </div>
  )
}

export default App;