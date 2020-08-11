import { ArrayGa } from "./algorithms/array";
import { StringGa } from "./algorithms/string";


let arr1: Array<number> = [1, 2, 3, 4, 5, 3]
let arr2: Array<number> = [3, 6, 4, 8, 9, 3, 3]
let arr5: Array<number> = []
ArrayGa.overlap(arr1, arr2, arr5)
let arr3: Array<number> = arr1.sort((a: number, b: number) => {
  return a - b
})
let arr4: Array<number> = arr2.sort((a: number, b: number) => {
  return a - b
})
let arr6: Array<number> = []
ArrayGa.overlapSort(arr3, arr4, arr6)


let strArr: Array<string> = ['mini', 'mimi', 'miniyellow']
ArrayGa.prefix(strArr)

let arr7: Array<number> = [7, 1, 5, 3, 6, 4]
let arr8: Array<number> = [1, 2, 3, 4, 5, 6]
let arr9: Array<number> = [7, 6, 4, 3, 1]
ArrayGa.stock(arr7)
ArrayGa.stock(arr8)
ArrayGa.stock(arr9)

let arr10: Array<number> = [1, 2, 3, 4, 5, 6, 7]
let k: number = 3
ArrayGa.rotate(arr10, k)

let arr11: Array<number> = [1, 2, 3, 3, 4, 5, 6, 3, 3]
let num: number = 3
ArrayGa.DeleteInPlace(arr11, num)

let arr12: Array<number> = [1, 2, 3, 4, 4, 5, 5, 5, 6, 6, 7, 7, 8]
ArrayGa.RemoveInPlace(arr12)





































