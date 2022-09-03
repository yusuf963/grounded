interface A{
  id: number;
  name: string
  education?: any[]
}
interface B extends A{
  score: number
}

const myA: A = {
  id: 1,
  name: "Yusuf",
  education: ["s", "w"]
}

const myB: B = { ...myA, score: 1 }

interface Person{
  id: number
  readonly name: string
  age: number
}
const yusuf: Person = { id: 1, name: "yusuf", age: 31 }

// yusuf.name = "c" // it complain because uts read only

interface C{
  some: number
  [key: string]: number
}
const c: C = { some: 1 }

// interface for function

interface Sum {
  (a: number, b: number): number
}

const sum: Sum = (a, b) => {
  return a+ b
}