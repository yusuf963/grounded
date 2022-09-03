export interface IOrder{
  calculateTotal(): number
}

export const calculateTotals= (order:IOrder) => {
  let total = order.calculateTotal()
  const discount = total * 0.1
  total += discount
  const tax = total * .2
  total += tax
  return total
}