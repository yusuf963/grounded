import { IOrder } from './calculateTotal'
export class ShoppingCart implements IOrder{
  calculateTotal() {
    return 100
  }
}