import React from 'react';
import PizzaCss from './Pizza.module.css'
// create interface fir the object
interface IPizza{
  id: number
  name: string
  description: string
  price: number
}

// define the interface of teh props for passing it to the jsx component
interface Props{
  pizza: IPizza
}


const Pizza: React.FC<Props> = ({ pizza }) => {
  return (
    <li className={PizzaCss.container} key={pizza.id}>
      <h2>{ pizza.name}</h2>
      <p>{ pizza.description }</p>
      <p>£{ pizza.price }</p>
    </li>
  )
}

export default Pizza

interface IProps{
  title: string
  price: number
}
const Product: React.FC<IProps> = (title, price) => {
    return <li>{title} - {price}</li>;
};