import { ArrayGa } from "./algorithms/array";
import { StringGa } from "./algorithms/string";

// !注释中 *为自己想的  ?为借鉴的

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
ArrayGa.deleteInPlace(arr11, num)

let arr12: Array<number> = [1, 2, 3, 4, 4, 5, 5, 5, 6, 6, 7, 7, 8]
ArrayGa.removeInPlace(arr12)

let arr13: Array<number> = [2, 3, 4, 0, 7, 5, 8]
let arr14: Array<number> = [3, 3, 9, 9]
let arr15: Array<number> = [9, 9, 9]
ArrayGa.addOne(arr13)
ArrayGa.addOne(arr14)
ArrayGa.addOne(arr15)

let arr16: Array<number> = [1, 2, 3, 5, 7, 9, 4]
let arr17: Array<number> = [2, 3, 3, 7, 9, 5]
let target1: number = 14
let target2: number = 6
ArrayGa.twoSum(arr16, target1)
ArrayGa.twoSum(arr17, target2)
ArrayGa.threeSum(arr16, 16)
ArrayGa.fourSum(arr16, 17)





































