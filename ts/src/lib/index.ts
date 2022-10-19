import { ShoppingCart } from './shopping-cart'
import { calculateTotals } from './calculateTotal'
import {Order} from './order'


const cart = new ShoppingCart()
console.log(calculateTotals(cart))
const order = new Order
console.log(calculateTotals(order))

// Generic

// const genericFunction = <G>(x: string):G => {
//   return x
// }

//Union
const someFn = (myArg: string | number| boolean): string| number| boolean => {
  if (typeof myArg === 'string') {
    let x = myArg.toUpperCase()
    return x
  }
  return "c"
  // return myArg + 1
}
interface Cat{
  meow(): void
  walk(): void
}
interface Dog{
  bark(): void
  walk(): void
}

//assertions

const isDog = (someObj: Dog| Cat): someObj is Dog => {
  return (<Dog>someObj).bark !== undefined
}

const CheckAnimal = (pet: Dog | Cat) => {
  if (isDog(pet)) {
    console.log("this is a dog")
  } else {
    console.log("thi is a cat")
  }
  
}

// intersection type

const combine = (objectA: object, objectB: object): object & object =>{
  return {...objectA, ...objectB}
}
const objectA= {a:1}
const objectB = { b: 2 }
const result = combine(objectA, objectB)
console.log(result)