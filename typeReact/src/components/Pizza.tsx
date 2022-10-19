import React from "react";
import PizzaCss from "./Pizza.module.css";
import { useSetState } from "./AppState";

interface IPizza {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
}
interface IProps {
  pizza: IPizza;
}

const Pizza: React.FC<IProps> = ({ pizza }): JSX.Element => {
  const setState = useSetState();
  const handelToCartClick = () => {
    setState((state) => {
      const checkItemExists = state.cart.items.find(
        (item) => item.id === pizza.id
      );
      checkItemExists;
      return {
        ...state,
        cart: {
          ...state.cart,
          items: checkItemExists
            ? state.cart.items.map((item) => {
              if (item.id === pizza.id) {
                  return { ...item, quantity: item.quantity + 1 };
              }
              return item
              })
            : [
                ...state.cart.items,
                {
                  id: pizza.id,
                  name: pizza.name,
                  price: pizza.price,
                  quantity: 1,
                },
              ],
        },
      };
    });
  };

  return (
    <div className={PizzaCss.container}>
      <p>{pizza.name}</p>
      <p>{pizza.description}</p>
      <p>${pizza.price}</p>
      <button onClick={handelToCartClick}>Add Pizza</button>
    </div>
  );
};
export default Pizza;
