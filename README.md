## typescript



#### ts中的基本类型和关键字

1. 字符串：string

2. 数值：number

3. 布尔值：boolean

4. 对象：object

5. undefined：undefined

6. null:null

7. 数组：type[]或Array[type]

8. Symbol:symbol   表示独一无二的值

   ```typescript
   //tips：
   let str:'miniYellow'  //此时给str赋值别的字符串报错  eg. str='111
   ```

   ##### symbol的学习

   

      

   

#### ts中的补充类型

1. 元组      就是具有固定长度和准确的数组元素类型的数组
2. 枚举    给一组数字赋予名字，eg.做角色权限设置时，可以给角色id命名
3. any     任何类型 和未约束类型一样
4. void    表示没有任意类型，在函数没有返回值时可以赋给函数，可以赋值未undefined
5. never  表示永不存在的值得类型，eg.总会抛出异常或根本不会有返回值的函数表达式的返回值类型
6. unknown  未知类型
7. 联合类型
8. 交叉类型





