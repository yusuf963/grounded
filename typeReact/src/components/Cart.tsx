import React from 'react';
import { FiShoppingCart } from 'react-icons/fi'
import CartCss from './Cart.module.css'

interface Props{ }
interface State{
  isOpen: boolean
  numberOfPizza: number
}

export default class Cart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
      this.state = {
        isOpen: false,
        numberOfPizza: 12
      }
  }
  handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    this.setState((prevState)=>({isOpen:!prevState.isOpen}))
  }
  render() {
    return (
      <div className={CartCss.cartContainer}>
        <button
          className={CartCss.button}
          type="button"
          onClick={this.handleClick}
        >
          <FiShoppingCart />
          <span>
            {
            this.state.numberOfPizza > 1
              ? `${this.state.numberOfPizza} pizza(s)`
              : "1 pizza"
            }
          </span>
        </button>
        <div
          className={CartCss.cartDropDown}
          style={{
            display: this.state.isOpen ? 'block' : 'none'
          }}
        >
          <ul>
            <li>Napoletana</li>
            <li>Marinara</li>
          </ul>
        </div>
      </div>
    )
  }
}
