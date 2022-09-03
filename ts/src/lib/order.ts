import { IOrder } from "./calculateTotal";

export class Order implements IOrder{
  calculateTotal() {
    return 100
  }
}