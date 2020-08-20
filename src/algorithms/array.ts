interface ArrayGa {
  overlap: Function,
  overlapSort: Function,
  prefix: Function,
  stock: Function,
  rotate: Function,
  deleteInPlace: Function,
  removeInPlace: Function,
  addOne: Function,
  twoSum: Function,
  threeSum: Function,
  fourSum: Function,
  zString: Function
}
interface addObj {
  [prop: number]: any
}

// !注释中 *为自己想的  ?为借鉴的
export const ArrayGa: ArrayGa = {
  // 给定两个数组，编写一个函数来计算它们的交集。(输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。我们可以不考虑输出结果的顺序。)
  overlap: (arr1: Array<number>, arr2: Array<number>, arr5: Array<number>) => {
    // 1.将arr1的元素映射到对象中，值为出现次数
    // 2.遍历arr2，将arr2中的元素当做key在对象中取值
    // 3.若值存在且值不为0就将对象中值的出现次数减一，将该元素放到arr5中
    let obj: addObj = {}
    arr1.forEach(item => {
      if (obj[item]) {
        obj[item]++
      } else {
        obj[item] = 1
      }
    })
    arr2.forEach(item => {
      // obj[item] !== 0保证arr1中存在
      if (obj[item] && obj[item] !== 0) {
        obj[item]--
        arr5.push(item)
      }
    })
    console.log(arr5, 'overlap');
    return arr5
  },

  // 如果给定的数组已经排好序呢？将如何优化你的算法呢？
  overlapSort: (arr3: Array<number>, arr4: Array<number>, arr6: Array<number>) => {
    // 1.给两个数组分别设置指针index=0
    // 2.比较数组长度，遍历长的那个
    // 3.比较元素，若相同就push到arr6中，且index3、index4都加1，不相等时，比较元素大小，小的index加1（在开头先判断数组中的元素是否已比较完）
    let index3: number = 0
    let index4: number = 0
    let length3: number = arr3.length
    let length4: number = arr4.length
    let count = length3 > length4 ? length3 : length4
    for (let i = 0; i < count; i++) {
      if (arr3[index3] === undefined || arr4[index4] === undefined) {
        // 当其中一个数组元素比较完后就结束循环
        break
      } else if (arr3[index3] === arr4[index4]) {
        arr6.push(arr3[index3])
        index3++
        index4++
      } else if (arr3[index3] > arr4[index4]) {
        index4++
      } else {
        index3++
      }
    }
    console.log(arr6, 'overlapSort');
    return arr6
  },

  // 数组中最长公共前缀（编写一个函数来查找字符串数组中的最长公共前缀。如果不存在公共前缀，则返回""）
  prefix: (arr: Array<string>) => {
    //数组长度小于2  直接返回空字符串
    if (arr.length < 2) return ""
    // 先将arr按元素的length从小到大排序
    arr = arr.sort((a: string, b: string) => {
      return a.length - b.length
    })
    // 已最短的元素为基准
    let str: string = arr[0]
    //使用递归函数，每次str截取掉最后一位然后和item比较，知道item开头包含str
    let recurrence: Function = (str1: string, item: string) => {
      if (item.startsWith(str1)) {
        str = str1
        return
      } else {
        str1 = str1.substring(0, str1.length - 1)
        recurrence(str1, item)
      }
    }
    //遍历数组执行递归
    arr.forEach(item => {
      recurrence(str, item)
    })
    console.log(str, 'prefix');
    return str
  },

  // 买卖股票的最佳时机
  stock: (arr: Array<number>) => {
    // 思路：1.遍历数组
    // 2.因为要买入的时候数值最小，所以先按降势找到谷值，此时谷值就是买入的最佳时机
    // 3.按升势找到峰值，此时峰值就是卖出的最佳时机
    // 4.多次计算就是差值就是所获得的的最大利润
    let count: number = 0  // 差值数
    let buy: number = 0  //买入时的数
    let sell: number = 0  //卖出时的数
    let isBuy: boolean = true  //判断是否买入状态，默认是买入
    for (let i = 0; i < arr.length; i++) {
      // 设置下个数的index，用来进行比较
      let next = i + 1
      // 若下个数不存在，直接跳出循环
      if (next > arr.length - 1) break
      if (isBuy) {
        if (arr[i] > arr[next]) {
          continue
        } else {
          buy = arr[i]
          isBuy = !isBuy
        }
      } else {
        if (arr[i] < arr[next] && next !== arr.length - 1) {
          continue
        } else {
          sell = arr[i]
          count += (sell - buy)
          isBuy = !isBuy
        }
      }
    }
    console.log(count, 'stock');
    return count
  },

  // 旋转数组(给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。)
  //tips: [1,2,3,4,5] 移动3 -> [3,4,5,1,2]  使用原地算法：即结果替换输出，中间不增加变量
  rotate: (arr: Array<number>, k: number) => {
    k %= arr.length
    // splice不能从后向前数，所以想截取后面的几个需要splice(-k,k)
    arr.splice(0, 0, ...arr.splice(-k, k))
    console.log(arr, 'rotate');
    return arr
  },

  // 原地删除(给定一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，返回移除后数组的新长度。)
  deleteInPlace: (arr: Array<number>, num: number) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === num) {
        arr.splice(i, 1)
        i--
      }
    }
    console.log(arr, 'DeleteInPlace');
    return arr.length
  },

  //原地去重(给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。)
  removeInPlace: (arr: Array<number>) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i + 1]) {
        arr.splice(i, 1)
        i--
      }
    }
    console.log(arr, 'RemoveInPlace');
    return arr.length
  },

  //给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。 [1,2,3] ->[1,2,4]  [2,3,9] ->[2,4,0]
  addOne: (arr: Array<number>) => {
    // 将数组转为数字+1后再转为数组，缺点：数字有大小范围 正负2的53次方-1

    //* 使用递归
    let recursion = (i: number, arr: Array<number>) => {
      if (arr[i] + 1 === 10) {
        arr[i] = 0
        if (i === 0) {
          arr.unshift(1)
        } else {
          i--
          recursion(i, arr)
        }
      } else {
        arr[i] += 1
      }
    }
    let i: number = arr.length - 1
    recursion(i, arr)
    console.log(arr, 'AddOne');
    return arr

    //? 倒着遍历，for循环走完表示返回[1,0,....,0]
    // let length = arr.length
    // for (let i = length - 1; i >= 0; i--) {
    //   arr[i]++
    //   arr[i] %= 10
    //   if (arr[i] !== 0) {
    //     // 此处return会直接跳出循环和函数
    //     console.log(arr, 'AddOne');
    //     return arr
    //   }
    // }
    // // 以下代码表示上面for循环走完了，也就是数组中所有元素都+1，因此应返回[1,0,....,0]
    // arr.unshift(1)
    // console.log(arr, 'AddOne');
    // return arr
  },

  //两数之和(给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。  tips:你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素)
  twoSum: (arr: Array<number>, target: number) => {
    // ?  遍历数组放进对象中，key为元素，value为下标，返回 obj[target-item] 有值的那个value和i即可
    let obj: addObj = {}
    let res: Array<number> = []
    arr.some((item, index) => {
      let num: number = target - item
      if (obj[num] !== undefined) {
        res = [obj[num], index]
        return true
      }
      obj[item] = index
    })
    console.log(res, 'sum');
    return res
  },

  // 三数之和 (给你一个包含 n 个(n>3)整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。注意：答案中不可以包含重复的三元组。)
  threeSum: (arr: Array<number>, target: number) => {
    // ? 先排序 在确定一个固定数 然后找另两个数
    let res: Array<Array<number>> = []
    let order = arr.sort((a, b) => a - b)
    order.some((item, index, array) => {
      // 固定值大于目标值 直接结束循环
      if (item > target) return true
      // 若固定值后面的数小于2个 就不执行以下代码
      if (index < array.length - 2) {
        let left = index + 1
        let right = array.length - 1
        let num = target - item
        // 当固定数重复时 item!==array[index-1] ，跳过 
        if (index === 0 || item !== array[index - 1]) {
          while (left < right) {
            if (array[left] + array[right] === num) {
              // 这三个数符合  放到返回数组中
              res.push([item, array[left], array[right]])
              // 在left小于right情况下，跳过left连续重复的数
              while (left < right && array[left] === array[left + 1]) left++
              // 在left小于right情况下，跳过right连续重复的数
              while (left < right && array[right] === array[right - 1]) right--
              // 左右下标都向中间移动一格
              left++
              right--
            } else if (array[left] + array[right] < num) {
              left++
            } else {
              right--
            }
          }
        }
      }
    })
    console.log(res, 'threeSum');
    return res
  },

  // 四数之和
  fourSum: (arr: Array<number>, target: number) => {
    let res: Array<Array<number>> = []
    let order: Array<number> = arr.sort((a, b) => a - b)
    order.some((item, index, array) => {
      // 两个固定值大于目标值 直接结束循环
      if (item + array[index + 1] > target) return true
      // 若第一个固定值后面的数小于3个 就不执行以下代码
      if (index < array.length - 3) {
        let left = index + 2
        let right = array.length - 1
        let num = target - item - array[index + 1]
        if (index === 0 || !(item === array[index + 1] && array[index + 1] === array[index + 2])) {
          while (left < right) {
            if (array[left] + array[right] === num) {
              res.push([item, array[index + 1], array[left], array[right]])
              while (left < right && array[left] !== array[left + 1]) left++
              while (left < right && array[right] !== array[right - 1]) right--
              left++
              right--
            } else if (array[left] + array[right] < num) {
              left++
            } else {
              right--
            }
          }
        }
      }
    })
    console.log(res, 'fourSum');
    return res
  },

  // Z字形变换
  zString: (str: string, row: number) => {
    // ?  建立个length===row的空字符串数组，遍历字符串，将元素循环正反序放入数组中
    let flag: Boolean = false
    let arr: Array<string> = new Array(row).fill("")
    let count: number = 0
    for (let i = 0; i < str.length; i++) {
      // 正序依次放入
      arr[count] += str[i]
      // 当走到数组的头或尾时，反过来执行
      if (count === 0 || count === arr.length - 1) flag = !flag
      // flag用来判断正反序
      count += flag ? 1 : -1
    }
    let res: string = arr.join("")
    console.log(res, 'zString');
    return res
  }

}