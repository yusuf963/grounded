import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import CartCss from "./Cart.module.css";
import { AppStateContext } from "./AppState";

interface Props {}
interface IState {
  isOpen: boolean;
  numberOfPizza: number;
}

export default class Cart extends React.Component<Props, IState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
      numberOfPizza: 12,
    };
  }
  handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };
  render() {
    return (
      <AppStateContext.Consumer>
        {(state) => {
          return (
            <div className={CartCss.cartContainer}>
              <button
                className={CartCss.button}
                type='button'
                onClick={this.handleClick}
              >
                <FiShoppingCart />
                <span>{state.cart.items.length} Pizza(s)</span>
              </button>
              <div
                className={CartCss.cartDropDown}
                style={{
                  display:
                    this.state.isOpen && state.cart.items.length > 0
                      ? "block"
                      : "none",
                }}
              >
                <ul>
                  {state.cart.items.map((pizza) => {
                    return (
                      <li key={pizza.id}>
                        {pizza.name}
                        &nbsp;&times;&nbsp;
                        {pizza.quantity}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        }}
      </AppStateContext.Consumer>
    );
  }
}
