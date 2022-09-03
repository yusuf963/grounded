// optional arg
const suNum = (a: number, b?: number): number => {
  return a+(b ?? 1 ) 
}
suNum(1)

type myFunc = (a: number, b: number) => number

const myFunc1: myFunc = (a, b ) => {
return a+b
}


//Unknown arg number

const sumAll = (arg1?:string, ...numbers: number[]): number => {
  return numbers.reduce((a,b)=> a+ b, 0) 
} 

// sumAll("hello", [1, 3])

//overload

// function calcArea(width: number, height: number): number
// function calcArea(length: number): number

interface FUNCTTYPE { (a:string, ...arg: number[]): number }

const calcArea:FUNCTTYPE =(a, ...args: number[])=>{
  if (args.length === 2) {
    return args[0] * args[1]
  }
  return Math.pow(args[0], 2)
}