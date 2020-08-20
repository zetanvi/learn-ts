interface DPGa {
  stairway: Function,
}
// !注释中 *为自己想的  ?为借鉴的
export const DPGa: DPGa = {
  // 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？ **注意：**给定 n 是一个正整数。
  stairway: (n: number) => {
    // ?  假设 n = 5，有5级楼梯要爬
    // ?  每次都有2种选择：爬1级或爬2级。
    // ?  如果爬1级，则剩下4级要爬。
    // ?  如果爬2级，则剩下3级要爬。
    // ?  这分出了2个子问题：爬4级楼梯有几种方式？爬3级楼梯有几种方式？
    // ?  爬 5 级楼梯的方式数 = 爬4级楼梯的方式数 + 爬3级楼梯的方式数
    // ?  状态转移方程：dp[n]=dp[n-1]+dp[n-2]
    // ?  通过解构赋值来交换prev和now的值
    let prev: number = 1
    let now: number = 1
    for (let i = 2; i < n + 1; i++) {
      [prev, now] = [now, now + prev]
    }
    console.log(now, 'stairway');
    return now

    // *使用递归，通过map去掉重复的计算
    // let dp: Map<number, number> = new Map()
    // let recursion: Function = (n: number) => {
    //   if (n < 4) return n
    //   if (dp.has(n)) return dp.get(n)
    //   dp.set(n, recursion(n - 1) + recursion(n - 2))
    //   return recursion(n - 1) + recursion(n - 2)
    // }
    // console.log(recursion(n), 'stairway');
    // recursion(n)
  }
}