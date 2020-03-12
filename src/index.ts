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
s3 === s4
s1 === s3;
console.log(s3 === s4, s1 === s3);