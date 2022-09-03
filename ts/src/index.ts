const num: number = 11
const personName: string = "yusuf"
const notSure: undefined = undefined
const nullable: null = null
const isComplete: boolean = true
const unionValue: boolean | number = 1
let unionValue1: any
let assignArray: [string, number]
assignArray= ["d", 1]
let assignArray1: Array<string> = ["d","dwe"]
const arrayOfString: string[] = ["d", "k"]
const arrayOfAny: any[] = ["d", 1, [], {}, true]
const myObj: object = { id: 1, name: ["yusuf", 31], school: "d" }
const myArray: Array<any> = []
const myDate: Date = new Date()
const myMap = new Map
const addNumber = (a:number, b:number): void => {
console.log("adding")
}


enum Color{
  red = "red",
  green= "green",
  blue= "blue"
}

const color = Color.blue
if (color === Color.blue) {
  console.log("your color is blue")
}

//Any
let anyThing: any[] = [undefined, 1, "2", true]

//Type Assertions
// const email = document.getElementById("email")
// if (email) {        // do this or
//   email?.addEventListener("change", e => { // or add the ? sign
//    const input = e.currentTarget as HTMLInputElement //remove this
//   console.log(input.value) // this will complain 
// })
// }
