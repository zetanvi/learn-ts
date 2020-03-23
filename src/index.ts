let a: number = 222
console.log(a);

let b = 222

let c: boolean = false

let str: "miniYellow"
let u: undefined = undefined
let n: null = null
let rr: [number, number]
rr = [1, 2]
let tt: Array<string> = ['1', '2']
let tuple: [number, string, boolean]
tuple = [1, '2', true]


let some: any = '111'
some = 2
some = { a: 1 }

let v: void = undefined

let s1 = Symbol("miniYellow");
let s2 = Symbol("miniYellow");
let s3 = Symbol.for("miniYellow");
let s4 = Symbol.for("miniYellow");
console.log(s3 === s4, s1 === s3);


let age = Symbol('mini')
console.log(typeof age);
let obj = {
  [age]: 19,
  name: 'miniYellow'
}
for (const key in obj) {
  console.log(key); //name
}
let ss = Object.getOwnPropertySymbols(obj)
console.log(ss, 'obj.symbol');  //[Symbol(mini)]
let ssr = Reflect.ownKeys(obj)
console.log(ssr);  //["name",Symbol(mini)]


const uniSym: unique symbol = Symbol()
let uniObj = {
  [uniSym]: 222
}
console.log(uniObj[uniSym]);


enum Status {
  error = 500,
  success = 200,
  failed = 400
}
console.log(Status.error);
console.log(Status.success);
console.log(Status.failed);


// !断言类型
let getLength = (target: string | number): number => {
  if ((target as string).length) {
    return (target as string).length
  } else {
    return target.toString().length
  }
}

// !接口
let getName = ({ firstName, lastName }: info): string => {
  return `${firstName}${lastName}`
}

getName({ firstName: 'mini', lastName: 'yellow' })

interface info {
  firstName: string,
  lastName: string,
  show?: boolean
}
let aaa = { firstName: '44', lastName: '00' }
getName(aaa)