import { ShoppingCart } from './shopping-cart'
import { calculateTotals } from './calculateTotal'
import {Order} from './order'


const cart = new ShoppingCart()
console.log(calculateTotals(cart))
const order = new Order
console.log(calculateTotals(order))

