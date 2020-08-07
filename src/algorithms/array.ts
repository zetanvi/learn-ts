interface ArrayGa {
  overlap: Function,
  overlapSort: Function,
  prefix: Function,
  stock: Function,
  rotate: Function,
}
interface addObj {
  [prop: number]: any
}

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
  // 旋转数组
  rotate(arr: Array<number>, k: number) {
    k %= arr.length
    // splice中-1表示从最后开始截取
    arr.unshift.apply(arr, arr.splice(-1, k))
    console.log(arr, 'rotate');
    return arr
  }
}