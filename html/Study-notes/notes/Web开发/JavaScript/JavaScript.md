认识 Javascript

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766050432997-56af1b19-dc6d-41b1-8d2b-a5b49e5d86a8.png)

javaScript 主要由三部分组成：

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766052712679-5421aa11-d54d-4016-a6cd-8fa5e3b27602.png)

## 核心（ECMAScript）
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766052774878-77120052-a6d0-44d2-b994-36f9815ea687.png)

## 文档对象模型（DOM）
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766052851536-2d79dce2-eb87-49ce-9b3a-2ebfc15b2caa.png)

## 浏览器对象模型（BOM）
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766053004955-8700993e-9218-485a-a6ef-420f4a721216.png)

# 在 HTML 中使用 JavaScript
## JavaScript 的书写位置
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766053169197-381c97fc-b117-4303-bbfc-274a188b8913.png)

### Javascript 写在 HTML内部
#### 1.使用script标签嵌入JavaScript
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766053427929-74e5dc5a-79f2-435e-81e4-6aa26bdf7bf5.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766053470966-cdab1e25-2762-4d39-90cd-e24bad564139.png)

#### 2.注意script标签在HTML文件中的位置
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766053582095-9852a9ad-ef05-4995-a24e-9b419a5c67c6.png)

script标签在HTML文件中的位置很随意,可以说写在哪里都无所谓,但是在学习Javascript的DOM的时候,如果不注意script标签的位置,会出现你意想不到的报错.

### Javascript写在HTML外部
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766053731473-eb0edd78-8564-4323-b413-cf8127a64efb.png)

# Javascript 入门
## Javascript 注释
### 单行注释
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766053930274-4f8e219e-0b36-4f6f-a14a-d8fa2cf8420d.png)

### 块级注释
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766053963190-0109f9ed-715b-4bea-87ee-4a4377229213.png)

## 字符串
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766054040987-6493b7ec-3080-4aba-8908-ff49fd8310bf.png)

和正常的 python 代码一样

### 模板字符串
这是一种简化了的字符串写法。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766066228821-af293bb4-4406-427d-97b4-2f3bc96232ac.png)

```javascript
let firstName = "胡";
let lastName = "雪岩";

let say = `大家好，我姓${firstName}，名${lastName}`;

console.log(say);
```

### 转义符（\）
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766066484784-aae20e62-ef61-4e91-8301-a2020f1fa1bd.png)

但这种写法是错误的

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766066558495-74e2ab8c-0a0b-4e18-929c-c3c140535925.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766066607699-9506ff1f-a49b-48c2-83b7-397108e8d46f.png)

### 多行字符串拼接
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766066752119-56b0d6ba-edf8-4eb7-8508-2b390b8502dd.png)

可以省去 \n 

在字符串中使用表达式

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766066974483-2362342f-d300-4fa4-a407-66769cf69ce8.png)

有点像 python 中的{表达式 \ 表达式}

### 在模板字符串中使用三元表达式、
什么是三元表达式？

条件？内容：内容

和 C语言中的三元表达式是一样的。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766067170081-cd4fd2e6-c030-4a7d-8e20-412a25c97348.png)



## console 访问控制台
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766054204271-929b6c9d-be7d-4ecf-b810-cfb81e72a505.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766054252701-ff231ed6-ffea-4eab-8441-6c28377267a4.png)



# 基础数据类型
## Javascript 变量
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766067777872-d092c70e-e1d0-4c13-867b-2fb597b4f06a.png)

### 使用 let 定义变量
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766067824253-43c32f2e-d84d-4011-b2be-8b8027b2f54f.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766068188998-75b9cf57-194e-4ff7-b585-26f3162848e5.png)

### 使用 const 定义变量
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766068252530-93c1749a-0a56-48de-ab5f-34c8241f0a9f.png)

### const 和 let 的异同
#### 一：
const 只能被赋值一次，有点像 c 语言的 const 常量

let 就是正常变量

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766068315318-f3ff96ba-8dd9-47e4-b29b-f09660443605.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766068325454-3a01d9d7-6401-4c7b-8b59-fb5061b1da38.png)

#### 二：
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766068449569-e519553f-e1ed-4ae3-80c9-27b7e389200a.png)

## 数值类型
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766226450062-4a0f271a-26f6-49b6-94ce-3afae4564aa7.png)

### 整数
正常和 Java 中的一样

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766226562183-aebcaff5-5769-48d6-badc-9c356d45eb22.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766226546810-1e55494e-c715-416d-96f0-9d20698ff73e.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766226572475-5f96fe64-5130-4afb-ba77-7cc008d317f0.png)

### 浮点数
在 JavaScript 中.2 也算正确，但并不推荐这种写法

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766226630432-a6db15ec-72fb-4492-b68e-321fe34d14dd.png)

#### 浮点数的精度丢失现象
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766226770861-61d49f02-504e-4de5-85df-7234fbcb031f.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766226820595-c02e30a4-1214-4a49-b79c-4cc8c98f1637.png)

这种情况怎么解决？

四种解决办法

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766227162000-b12af3df-a9c0-46c5-96e2-8ba4bd1b4385.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766227214121-ad0b36f0-2a1a-4fa3-aabe-ec47f6b0c543.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766227273090-1632b7dd-f362-426f-b447-35629e75234c.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766227307818-a1c72a8a-cbfe-4efc-b989-c7413e0f066e.png)

### NaN 非数值
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766226915412-6d25b1e9-5006-4142-9583-5d92f402a5af.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766227026752-f5b620d3-9aba-4f96-ae76-572f03d0db67.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766227073179-a2e2b3c0-f373-477a-af90-f09c424e9d04.png)

## 类型转换和字符串拼接
转换类型主要分两种，强制转换和隐式转换

### 隐式转换
在做字符串和数值的加法运算时，字符串的 优先级是高于数值的，结果会显示为字符串相加

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766227781493-cf310a99-df95-4830-ad19-9461764a61d9.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766227873611-75246aa7-ef7e-4604-910d-d070634ffaa5.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766227884960-7ad13054-fac3-49ec-933e-60804e25e662.png)

### 强制类型转换
#### parseInt
意思是转换为整数类型

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766228246670-00bb77cd-0b32-4e4b-8e1c-0086291a5669.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766228256456-3634d91d-4e27-431a-b3f0-8494716b3fe9.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766228281125-1e926d3f-cae9-42a0-8e6e-71aa0f531eef.png)

#### parseFloat
意思是转换成小数

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766228518525-5d644e88-e1b6-4729-9a42-bb55cfa6d50f.png)

但 parseFloat 不能把整数字符串转换成小数，不能把整数转换成小数，小数类如 20.0 这种小数不能转换成小数

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766228758958-52d4d50a-0e5b-4c5b-a895-81ff104a03c0.png)<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766228781385-21949902-8e58-459c-9ea4-f9fd5812b2ce.png)

### 字符串拼接
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766228962345-dad0224f-d5f2-44c6-8f12-b8da032460cc.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766228983994-f1799c1f-f414-4f5f-a9f2-f894bbb84476.png)



## 运算符
###  相等/全等
全等是即要值相等，又要类型相等

 <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766231385603-70b45de6-f9b4-42cd-a6bb-f296f4490aed.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766231439085-7ad220d4-3c23-4baf-b918-2b82de019e7a.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766231546321-43c4d7a8-e311-410c-883e-b999cf91785b.png)

这里的全等要重点记忆

### 自增自减
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766231665443-fae997bf-3ebc-4f14-a5f6-44509e77794a.png)



# 布尔类型/条件判断
## 布尔类型
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766231985621-98bbd4eb-e14d-44fa-9ecb-331d58dcd187.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766232018360-3af06fad-77e1-4348-a530-7cac095bfc4f.png)

就和 C语言的逻辑运算是一样的

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766233794850-5bbfe82a-d805-4107-8ebf-6b985c1775cd.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766233847806-d6f2bf8f-3853-4c2b-9a18-a614ea2849c1.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766233858307-e94df505-97c9-4f49-9e85-99d88318a3ab.png)

## 条件判断
### if
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766234604389-020cdd53-3596-42da-9971-6ff0590166e6.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766234626488-c4c6bab0-9945-49b8-a165-72727c001f9a.png)

### if-else
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766234741623-4ffb42d9-ea77-484e-9eee-c066703d9e17.png)

### if-else-if
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766234760888-fd98e7cc-ff81-468b-8b4d-6e47f3194eb0.png)

### switch
不过多解释，和 C 语言的基本一样

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766234821768-03d879c2-401f-43a8-bd60-09c730f70e21.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766234886030-f4ee5e47-c827-479b-98a7-8d00e24577e0.png)

# 数组
## 数组的表示方法
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766235956794-d31da8f6-b7e4-4cd5-aed8-31092c1d4b65.png)

Js 中的数组类似于 python 中的列表，不用去定义类型，数组中可以存放不同类型的数据



<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766236097513-26c92458-9d76-4465-88a7-252801c8e0ef.png)

这种方式类似于 Java 的数组定义

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766237016155-ccd7b465-1f7d-405f-b592-d202f07f900a.png)

## 数组索引
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766237125951-d244235a-75fe-4c41-b835-d93ed3f2a282.png)

索取下标对应的值

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766237141646-4fa79e15-0536-4175-b484-89104bdda5a1.png)

更改对应位置的值

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766237157525-f0c7dccc-ccb8-4578-833a-880ce7c6cd4e.png)

在新位置上插值

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766237259241-3147a5e4-573d-4429-bfff-7f68b4763888.png)

## 数组元素操作（增删改查）
Js 中的数组更像 JAVA中的 ArrayList

### push()从尾部添加
和 JAVA 中的 add（）作用相同

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766242601064-f34cbb1a-8bc3-4e65-a730-d8c2bef6ce35.png)

### unshift()从头加
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766243133857-d2e07506-b454-4a5a-89ab-d908f6be2b37.png)

### pop（）从后往前删除
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766243203513-1e2f0321-07c9-4a54-a86c-a5aaea654cfc.png)

### shift（）从前往后删除
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766243287428-95f20741-a1b7-4b1a-b916-bc99a31e8a4f.png)

### splice（）指定位置删除
相当于改元素时改为空元素

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766243353398-9bce4ec4-ecfa-467b-80ba-4f008addcbe5.png)

### splice（）修改指定位置元素
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766243671942-be45f706-4b47-40a4-9844-41e5cc5a0045.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766243713050-68b95ca9-0f44-40dc-850e-20a3abed56a6.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766243742328-830d3db8-9766-467b-aae3-ec0a83c5c153.png)

### indexOf（）查找指定元素位置
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766243919304-98d8df05-1435-4e76-92e4-8ab2da8c1a40.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766243964456-fe271d4b-20be-44b0-ba11-3572bea5d0e8.png)

## 二维数组
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766245095274-7c45729a-05b0-4239-82d4-9de68136f4bc.png)

#### 二维数组如何取值
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766245223393-ab275e90-e457-43b1-a167-96f2aaafdd8e.png)

#### 二维数组如何存值
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766245332617-6c495cc5-fa7b-4b00-a056-b51d64296712.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766245367962-46b83feb-d69d-4d51-9274-867fb088fd56.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766245411997-c9fbb717-0ed4-408f-bac5-6434425eb348.png)

### 二维数组如何替换元素
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766245539979-aa817682-2149-408c-a822-787074fb9205.png)

# 循环
## for 循环
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766246995758-b4dc7aec-7080-40bb-bb95-92a8433dc53c.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766247010447-2178fac2-5ad2-452a-b48a-f420ca73cb4e.png)

## for...n和for...of 的写法
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766247108331-90d749c0-c7da-47a4-9185-24a6c1c8ba18.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766247120961-8a98bd71-e6d5-4c92-9195-761bb463e5c3.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766247132164-aaea0669-825c-4686-b629-38d0eecb12e3.png)

## while 循环
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766247992622-1606f0dd-6100-45e1-89a6-7f168b95ba49.png)



## do while 循环
do while 循环是先执行后判断

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766248100795-1fdeea72-2ba5-4eca-9baf-4ca3f0d89d85.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766248228534-d38dec59-e2e9-4fe9-98f4-73b688000d11.png)

## 跳出循环
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766493653831-db085d79-2872-4fc6-b067-22879fd5d68c.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766493717486-a0c828d3-ad67-4102-8649-61927509929e.png)<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766493737915-3d669b62-cc1e-426f-9689-dd21f264dff7.png)



# 函数
## 随机函数
```javascript
// num1 的范围是 [0.1, 1)
const num1 = Math.random() * 0.9 + 0.1;
// num2 的范围是 [100, 1000)
const num2 = Math.floor(num1 * 1000);

console.log(num2);
```

## 自定义函数
### 函数的声明
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766496436183-ebe205d2-fc6a-4b2a-bcd6-0f537ed4ea44.png)<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766496458761-aee7b4de-846b-4d14-bec5-6138fcf31376.png)

### 函数的调用
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766496517123-69c94e59-a4c8-44ca-a014-ab2b2baffb5a.png)

### 用函数表达式声明
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766496580867-f9bf2986-5f9d-4464-b8eb-be049a1f4408.png)

这里利用的是编程里面向对象的概念，把函数也当作对象

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766496677632-aa748093-fe24-4d5e-823a-c77b2f16c549.png)

###  函数声明的提升
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766496770939-d2aa9546-db80-4193-9724-9400e7bf958c.png)

> 但注意在使用函数表达式声明的时候不存在函数声明提升,编译的时候就会
>
> 报错。
>

### 两种声明的区别
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766496912215-d253373f-b146-40fe-9e99-4a33f9821d6e.png)

### 函数的重复声明
重复声明有覆盖性

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766496976669-e0a33fab-fac6-4dcc-ac53-6e92689c4f81.png)

### 立即执行函数
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766497018189-409f425d-0f5e-4697-b360-34b2a635a9b1.png)

注意格式

## 函数参数
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766498730762-5e3675cb-373e-4f5d-ace2-c09fce17c993.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766498759790-cd8ed58c-944d-4892-ae75-2d5b4320bacc.png)

### 默认参数值
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766498835142-01344113-ab17-40f1-9c85-a164e0e68d18.png)

## 函数的返回值
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766501725554-1d6d949c-3f7b-4995-83f8-1e20de3dc1c5.png)

## 内置函数——计时器 1
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766503663859-931aeb28-44d3-487b-abe2-284c038e53fd.png)

### 延时执行 setTimeout()
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766592752248-99ce098b-d95d-4bd8-85aa-f5c32dde53d9.png)

语法

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766592775807-039a6d04-1ab1-4a9b-8fdb-5380ef033616.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766593027880-e42c6f3f-b286-4e1e-9505-faf73a55e3c5.png)

怎么做一个倒计时器？

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766593152213-1065c28f-d832-4ab9-aa07-64312b8eb81f.png)

### 回调函数
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766593318690-71b4587b-9e87-4fcd-b2a0-88f9104bc01c.png)

## 内置函数——计时器 2
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766594178296-e8754a8a-9a6e-4c44-8c1f-c208e38053ab.png)

语法

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766594204783-7c394d22-ef62-4642-b423-190b9f26408b.png)

倒计时器的编写

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766594364768-787062d0-6040-4981-b5f2-e811aa3fd9f9.png)

区别

setTimeout，每调用一次只能执行一次

setInterval，调用一次 之后只要不停止会一直持续执行下去

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766595601467-3b15890f-6674-4b6e-943f-d30fefbacc1b.png)<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766595611504-60ce3ce6-964e-411e-adc5-ce646b0c5904.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766595625606-c0b9f0f1-6f9d-404a-984c-4c7fae007c24.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766595636134-27612758-7428-4f41-9ef1-9c45e4e4412c.png)



# 对象
## 对象的概述
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766675266702-32e1ddf6-3bcd-4c0d-9cc1-928b9956eff2.png)

储存方式类似于指针变量

### 键名
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766675334351-d08ab324-b88c-4c9e-8a23-65df0f367f99.png)

### 方法
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766675438904-f1f21345-0da4-4fa7-bc10-8a67597ce334.png)

把函数当值来用，称为方法.类比面向对象中的概念。

### 对象的创建
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766675730856-7232135a-8d68-474e-a4c6-b5fdaddf40fc.png)

对代码的解释

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766675784017-a1250627-1350-48b5-bf96-fad6c264f5a4.png)

## 自定义对象的属性操作
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766677398853-8a744c2f-3a28-49fa-b5d6-9f79d735d4a1.png)

### 属性的读取
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766677441586-4b4e8a4b-b9f3-4b5c-941b-fd786516b159.png)

```javascript
let person = {
  name: 'henry',
  age: 18
}

console.log(person.name);
console.log(person['name']);
```

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766677559428-aeee88b0-307c-4aa5-8c65-faf3b7e5e13a.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766677595447-be43a975-c053-4d53-bf38-23bfe13c58a0.png)

```javascript
let person = {
  name: 'henry',
  age: 18
}

let variable = 'name';
console.log(person[variable]);

variable = 'age';
console.log(person[variable]);
```

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766677734738-921e1134-a8a3-43b4-a9dd-db52762a1727.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766677790860-23c15435-1214-4212-8a8d-df136b73007d.png)

对于某对象中的某个键的值是对象这种情况，怎么读取值？

```javascript
let person = {
  name: 'henry',
  age: 18,
  parents: {
    papa: 'jack',
    mama: 'mary'
  }
}

console.log(person.parents.papa);
console.log(person['parents']['mama']);
```

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766677936915-a38d2339-b50c-4daf-979b-c7b479aa684c.png)

### 属性的赋值
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766678573613-a0ee6b75-a774-47ee-9efe-75f4471219c0.png)

### 属性的看查
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766678643705-4d54b9c7-d87a-4877-8c50-49307479a40a.png)

运行结果

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766678675754-edf206a2-a7f2-4570-ac7c-bcff5737a323.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766678662220-25b035aa-6569-48d4-843f-534703192a37.png)

### 属性的删除和增加
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766679075740-8d1127d4-0018-483a-81cb-79080388142b.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766679086976-825947d0-5e1f-41bd-bcb7-7993fccc6f46.png)

## 遍历对象属性
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766843098660-1cb1091f-c010-4540-bb0f-5a598440e67e.png)

### 用 for 循环遍历
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766843155950-30ebf6bc-a93a-4b5b-af71-6316f9eecda0.png)

### Object.keys 遍历属性
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766843271203-d4c7c192-1758-408b-9e58-501d8e210d9e.png)

## 对象的继承
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766844356187-50b8ac26-1ee9-4ecc-b232-9d3c973ba3a5.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766909675768-4de494ce-f978-40ba-b414-dd2f6f930809.png)

### 原型
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766909756200-abcd16b8-8a6b-4ef3-89a7-90fe668086df.png)

### 属性是否存在：in
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766909849701-83743875-125d-4513-9fee-2a88f1f5f0b1.png)

 返回值是一个布尔值

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766910077999-89bfcf36-eacc-41e9-b759-18963fa858c1.png)

### 自身属性是否存在：hasOwnProperty
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766910212285-527dbfbc-66b7-4f59-b919-dc6b56c67693.png)

### Object与 JSON、Map的区别
#### JSON
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766910288190-c2bcee20-7071-4e24-9713-ee425492261d.png)

#### JSON 格式转化为 Javascript 对象
1. JSON.parse(): JSON 格式=>JavaScript 对象

```javascript
// 一个 JSON 字符串
const jsonStr =
  '{"sites":[{"name":"Runoob", "url":"www.runoob.com"},{"name":"Google", "url":"www.google.com"},{"name":"Taobao", "url":"www.taobao.com"}]}';

// 转成 JavaScript 对象
const obj = JSON.parse(jsonStr);
```

2. JSON.stringify(): JavaScript 对象=>JSON格式

```javascript
const jsonStr2 = JSON.stringify(obj)；
```

#### Map
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766910671537-27d41ba7-7079-449a-9d59-3739e1e8dbef.png)

Map 不能直接转化为 JSON 直接使用

练习：

```javascript
let myObj = new Object();
let rand = 'random';

myObj.type = 'Dot syntax';
myObj['str'] = 'String value';
myObj[rand] = 'Random Number';

for (const key in myObj) {
  if (myObj.hasOwnProperty(key)) {
    console.log(key + ': ' + myObj[key]);
  }
}

console.log('toString' in myObj);
console.log(myObj.hasOwnProperty('toString'));
```



---



## JavaScript 内置对象
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766911607224-6f2cc409-722a-4ba7-9e55-7ac43e91425f.png)

### Math
#### Math 中提供的常量
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766912726688-f32cb11a-c39a-4edc-b7d4-b97a5d233a54.png)

#### Math 中提供的静态方法
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766912775910-d777d866-58e6-482c-9454-93e98e30afcc.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766912994779-9847bd3d-eefb-49fa-8a21-9821f18d182e.png)

---

---





### Storage
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766913646489-99e4130f-1e15-400d-8874-46834d24276d.png)

#### 数据的存入：setltem
写法：

```javascript
window.localStorage.setItem('myLocalStorage', 'storage Value');
```

window.localStorage.setltem('key','value')方法接受两个参数:

两个参数都是字符串,不是字符串的参数会被转成字符串后再存入浏览器。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766914059182-09022289-b420-4aed-acf5-ee827a24ea93.png)

JSON 数据是字符串

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766914103663-158673b1-3244-4609-ab9d-406a22bd5456.png)

#### 读取数据：getltem
写法：

```javascript
window.localStorage.getItem('myLocalStorage');
```

#### 清除缓存：clear
```javascript
window.localStorage.clear();
```

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766914366384-e3d89896-2e93-4bd7-86f6-f3792388611b.png)



---

### String
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766916023457-792a573d-3632-4391-a4b0-2eff0ec0d93c.png)

#### 字符串长度：length
```javascript
let len = 'here is an apple'.length;
```

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766917215508-b48b0421-a70e-4e3a-897a-511fad96c8ce.png)

所以空格也是计算在内的

#### 查找字符：indexOf（）
```javascript
let str = 'here is an apple';
const index = str.indexOf('an');
console.log(index);
```

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766917340842-77c799d8-1598-4362-b9b3-a3fce41e4221.png)

#### 去掉两端空格：trim（）
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766917394830-be716e67-741c-4c40-a868-3d2e3fb3d5f1.png)

```javascript
// 'here' 之前有一个空格，'apple' 之后有三个空格
let str = ' here is an apple   ';
const trimedStr = str.trim();
console.log(str.length);
console.log(trimedStr.length);
```

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766917448479-4a2aafae-2d8d-43d0-b8c7-63f767ba3bb1.png)

所以我如果再次打印 str 依然开头和结尾有空格

#### 截取字符串：substring/substr
用法：

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766917690474-25173453-a9c0-4fe3-9a79-75ed3191df21.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766917709465-38782a1e-c8a5-41d9-a784-bde100c6efc7.png)

它们和trim（）一样都不会改变原字符串,而是返回处理后的字符串。

实例：

```javascript
let url = 'https://www.youkeda.com/userhome#collect';

// 首先找到 # 后第一个字母的下标
const index = url.indexOf('#') + 1;

// 有 hash 才能进行截取，没有就直接提示不存在
if (index) {
  // 用 substring 截取字符串
  const hash1 = url.substring(index, url.length);

  // 计算 hash 的长度
  const lenHash = url.length - index;
  // 用 substr 截取字符串
  const hash2 = url.substr(index, lenHash);

  console.log(hash1);
  console.log(hash2);
} else {
  console.log('不存在 hash');
}
```

#### 分割字符串：split
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766917802925-2bf370e0-ab28-40f5-823f-27d3155b6f51.png)

split也不会改变原字符串,而是返回一个由分割出来的子字符串组成的数组。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766917979837-62a20974-f79c-458d-b5cb-16ce0c30c432.png)

#### **<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">一、原生对象（Native Objects）</font>**
##### <font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">定义</font>
<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">原生对象是 JavaScript 语言</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">内置的标准对象</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">，由 ECMAScript 规范明确定义，不依赖宿主环境（如浏览器或 Node.js）。它们在脚本启动时就已存在。</font>

##### <font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">特点</font>
1. **<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">独立于宿主环境</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">：无论运行在浏览器还是 Node.js 中，这些对象都存在。</font>
2. **<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">可直接使用</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">：通过字面量或构造函数创建。</font>
3. **<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">分类</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">：</font>
    - **<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">内置对象（Built-in Objects）</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">：全局可用的对象（如</font><font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);"> </font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">Object</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">,</font><font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);"> </font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">Array</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">,</font><font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);"> </font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">Date</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">）。</font>
    - **<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">基本包装类型</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">：</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">String</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">,</font><font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);"> </font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">Number</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">,</font><font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);"> </font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">Boolean</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">（用于临时包装基本类型值）。</font>

##### <font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">常见原生对象</font>
| <font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">类型</font> | <font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">说明</font> | <font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">示例</font> |
| :---: | :---: | :---: |
| **<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">Object</font>** | <font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">所有对象的基类</font> | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">{}</font>`<br/><font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">,</font><font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);"> </font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">new Object()</font>` |
| **<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">Array</font>** | <font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">数组</font> | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">[1, 2]</font>`<br/><font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">,</font><font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);"> </font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">new Array()</font>` |
| **<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">Function</font>** | <font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">函数</font> | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">function(){}</font>`<br/><font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">,</font><font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);"> </font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">()=>{}</font>` |
| **<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">Date</font>** | <font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">日期时间</font> | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">new Date()</font>` |
| **<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">RegExp</font>** | <font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">正则表达式</font> | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">/abc/g</font>`<br/><font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">,</font><font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);"> </font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">new RegExp()</font>` |
| **<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">Error</font>** | <font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">错误对象</font> | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">new Error("Oops!")</font>` |
| **<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">Math</font>** | <font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">数学工具（静态对象）</font> | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">Math.PI</font>`<br/><font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">,</font><font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);"> </font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">Math.random()</font>` |
| **<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">JSON</font>** | <font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">JSON 处理（静态对象）</font> | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">JSON.parse()</font>`<br/><font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">,</font><font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);"> </font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">JSON.stringify()</font>` |


---

#### **<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">二、包装对象（Wrapper Objects）</font>**
##### <font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">定义</font>
<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">包装对象是 JavaScript 为</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">基本数据类型（</font>**`**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">string</font>**`**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">,</font>****<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);"> </font>**`**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">number</font>**`**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">,</font>****<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);"> </font>**`**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">boolean</font>**`**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">）</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);"> 临时创建的</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">临时对象</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">。当访问基本类型的属性或方法时，JS 会自动将其转换为对应的包装对象（如</font><font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);"> </font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">String</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">,</font><font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);"> </font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">Number</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">,</font><font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);"> </font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">Boolean</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">），操作完成后立即销毁该对象。</font>

##### <font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">核心机制：自动装箱（Boxing）</font>
```javascript
const str = "hello";  // 基本类型 string
console.log(str.length); // 访问属性 → 触发自动装箱

// 等价于：
const temp = new String(str); // 创建包装对象=>这一步就相当于显性创建包对象
console.log(temp.length);     // 3
temp = null;                  // 销毁临时对象
```

##### <font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">显式创建包装对象</font>
```javascript
const numObj = new Number(42);   // 显式创建 Number 包装对象
const boolObj = new Boolean(true); // 显式创建 Boolean 包装对象
const strObj = new String("hi");  // 显式创建 String 包装对象
```

##### <font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">关键特性</font>
1. **<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">临时性</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">：自动创建的包装对象在语句执行后立即销毁。</font>
2. **<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">可访问属性和方法</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">：基本类型通过包装对象获得方法（如</font><font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);"> </font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">"abc".toUpperCase()</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">）。</font>
3. **<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">与基本类型的区别</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">：</font>

```javascript
const primitive = "hello";
const object = new String("hello");

typeof primitive; // "string"（基本类型）
typeof object;     // "object"（包装对象）

primitive instanceof String; // false
object instanceof String;     // true
```

---

#### **<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">三、包装对象 vs 原生对象</font>**
| **<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">特性</font>** | **<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">包装对象</font>** | **<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">原生对象</font>** |
| :---: | :---: | :---: |
| **<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">本质</font>** | <font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">临时对象，用于包装基本类型值</font> | <font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">语言内置的标准对象</font> |
| **<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">生命周期</font>** | <font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">自动创建并立即销毁（单次操作有效）</font> | <font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">长期存在（除非手动解除引用）</font> |
| **<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">创建方式</font>** | <font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">自动装箱（隐式）或</font><font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);"> </font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">new String/Number/Boolean</font>`<br/><font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">（显式）</font> | <font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">字面量或</font><font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);"> </font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">new Object/Array/Date</font>`<br/><font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);"> </font><font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">等</font> |
| **<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">用途</font>** | <font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">使基本类型能访问属性和方法</font> | <font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">实现复杂数据结构或功能</font> |
| **<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">是否推荐显式使用</font>** | <font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">❌</font><font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);"> 避免显式创建（易引发混淆）</font> | <font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">✅</font><font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);"> 推荐使用</font> |


---

#### **<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">四、经典面试题解析</font>**
##### <font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">问题：</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">new String('a') === 'a'</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);"> 的结果是什么？</font>
```javascript
const a = new String("a");
const b = "a";

console.log(a == b);  // true（== 触发隐式转换）
console.log(a === b); // false（类型不同：object vs string）
```

##### <font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">问题：为什么 </font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">'foo' instanceof String</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);"> 返回 </font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">false</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">？</font>
```javascript
// 'foo' 是基本类型 string，不是对象
'foo' instanceof String; // false

// 显式创建包装对象后返回 true
new String('foo') instanceof String; // true
```

+ **<font style="color:rgba(0, 0, 0, 0.4);background-color:rgb(246, 246, 246);">原生对象</font>**<font style="color:rgba(0, 0, 0, 0.4);background-color:rgb(246, 246, 246);">是 JS 的“永久居民”（如</font><font style="color:rgba(0, 0, 0, 0.4);background-color:rgb(246, 246, 246);"> </font>`<font style="color:rgba(0, 0, 0, 0.4);background-color:rgb(246, 246, 246);">Array</font>`<font style="color:rgba(0, 0, 0, 0.4);background-color:rgb(246, 246, 246);">,</font><font style="color:rgba(0, 0, 0, 0.4);background-color:rgb(246, 246, 246);"> </font>`<font style="color:rgba(0, 0, 0, 0.4);background-color:rgb(246, 246, 246);">Date</font>`<font style="color:rgba(0, 0, 0, 0.4);background-color:rgb(246, 246, 246);">）。</font>
+ **<font style="color:rgba(0, 0, 0, 0.4);background-color:rgb(246, 246, 246);">包装对象</font>**<font style="color:rgba(0, 0, 0, 0.4);background-color:rgb(246, 246, 246);">是基本类型的“临时替身”（用完即焚）。</font>



---

### Array
#### 连接数组：join（）
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766919462145-be7d6080-0ea7-4778-b26a-8315d2cc450e.png)

join()方法不会改变原数组。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766919762339-81306069-b6a3-47b3-b716-4c394fb49dd0.png)

#### 倒序排列：reverse（）
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766919990784-c3b3f181-4a04-4d5d-b651-2c3fe67b26b8.png)

#### 排序：sort（）
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766920182730-e99683fd-db61-463f-99a5-91a3b82e806c.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766920193443-57ed5a30-3dc2-4a0b-9545-1e256e5ea057.png)

##### <font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">一、基本用法与默认排序</font>
###### **<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">默认字符串排序</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">  
</font><font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">默认情况下，</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">sort()</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);"> 将数组元素转换为字符串，并按 Unicode 码点顺序排序。例如：</font>
```javascript
let arr = [10, 3, 1, 20](@ref);
arr.sort(); // [1, 10, 20, 3](@ref)（数字按字符串顺序排序）
```

    1. **<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">数字排序需自定义比较函数</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">  
</font><font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">为正确排序数字，需传入比较函数 </font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">(a, b) => a - b</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">（升序）或 </font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">(a, b) => b - a</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">（降序）：</font>

```javascript
let numbers = [10, 3, 20, 5](@ref);
numbers.sort((a, b) => a - b); // 升序：[3, 5, 10, 20](@ref)
```

---

##### <font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">二、高级排序场景</font>
##### **<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">对象数组排序</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">  
</font><font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">根据对象的某个属性排序（如年龄、名称）：</font>
```javascript
let users = [
  { name: 'John', age: 25 },
  { name: 'Alice', age: 30 }
];
users.sort((a, b) => a.age - b.age); // 按年龄升序
```

    1. **<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">多重排序条件</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">  
</font><font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">先按主条件排序，条件相同时按次条件排序：</font>

```javascript
users.sort((a, b) => {
  if (a.age === b.age) {
    return a.name.localeCompare(b.name); // 年龄相同则按名称排序
  }
  return a.age - b.age;
});
```

    2. **<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">非 ASCII 字符排序</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">  
</font><font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">使用 </font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">localeCompare()</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);"> 处理多语言或特殊字符（如德语中的 </font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">ä</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">）：</font>

```javascript
let words = ['ä', 'a', 'z'](@ref);
words.sort((a, b) => a.localeCompare(b)); // [ 'a', 'ä', 'z' ](@ref)
```

---

##### <font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">三、关键注意事项</font>
##### **<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">原地排序</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">  
</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">sort()</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);"> </font><font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">会直接修改原数组，若需保留原数组，需先复制：</font>
```javascript
let sortedArr = [...arr](@ref).sort((a, b) => a - b);
```

##### <font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">四、自定义比较函数详解</font>
<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">比较函数需返回以下值：</font>

+ **<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">负数</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">：</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">a</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);"> </font><font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">排在</font><font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);"> </font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">b</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);"> </font><font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">前。</font>
+ **<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">正数</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">：</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">b</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);"> </font><font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">排在</font><font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);"> </font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">a</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);"> </font><font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">前。</font>
+ **<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">0</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">：顺序不变。</font>

**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">示例</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">：奇偶数交替排序</font>

```javascript
let arr = [3, 1, 2, 4, 5](@ref);
arr.sort((a, b) => {
  const isAOdd = a % 2, isBOdd = b % 2;
  if (isAOdd === isBOdd) return 0; // 同奇偶保持原序
  return isAOdd ? -1 : 1; // 奇数在前
});
// 结果：[3, 1, 5, 2, 4](@ref)
```

##### <font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">五.常见误区</font>
+ **<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">默认排序的陷阱</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">：直接对数字数组使用</font><font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);"> </font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">sort()</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);"> </font><font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">会导致错误结果。</font>
+ **<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">修改原数组</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">：需注意</font><font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);"> </font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">sort()</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);"> </font><font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">的副作用，必要时复制数组。</font>
+ **<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">性能问题</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">：对超大数据集（如 10 万+元素）时，需优化算法或分块处理。</font>

#### <font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">遍历：map/forEach</font>
#### <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766921504908-128cff37-57c1-4920-9ff2-69f37db0a8e2.png)
##### <font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">有返回值的遍历：map</font>
##### <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766921830309-20055f16-3281-4f7f-95fe-34b0d9aa6e3b.png)<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">  
</font>
```javascript
let arr = [
  { name: "jenny", age: 18 },
  { name: "tom", age: 10 },
  { name: "mary", age: 40 },
];

// elem: 数组成员
// index: 成员下标
// a: 整个数组
const handledArr = arr.map(function (elem, index, a) {
  elem.age += 1;
  console.log(elem, index, a);
  return elem.name;
});

console.log(arr);
console.log(handledArr);
```

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766921854244-4d123842-644a-4d42-8b06-7f24ac6eddfb.png)<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">  
</font><font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);"> </font>

##### 无返回值的遍历：forEach
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766922193487-9d938771-008e-4ca2-be80-223982c1c302.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766922203012-84fc1022-b1e2-4ea7-a45d-802943f37355.png)

---



### Date
在网页中经常会出现时间这个元素 JS 中有专门处理时间的原生对象（内置对象）Date

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766922956885-047c9800-ed49-4687-8307-a3e0db270cbb.png)

#### 获取当前时间： new Date()
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766923182311-b130ffd0-0b1c-4987-819c-e60d04314c13.png)

```javascript
let now = new Date();
console.log(now);
```

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766923265349-6455daa3-064b-4688-8f21-6c7134a06b0d.png)

```javascript
// 传入表示“年月日时分秒”的数字
let dt1 = new Date(2020, 0, 6, 0, 0, 0);
console.log(dt1);

// 传入日期字符串
let dt2 = new Date("2020-1-6");
console.log(dt2);

// 传入距离国际标准时间的毫秒数
let dt3 = new Date(1578240000000);
console.log(dt3);
```

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766923355826-026a7715-0dcb-49c3-a859-0b3a424e388a.png)

#### 日期的运算
时间差：毫秒数

```javascript
let dt1 = new Date(2020, 2, 1);
let dt2 = new Date(2020, 3, 1);

// 求差值
let diff = dt2 - dt1;

// 一天的毫秒数
let ms = 24 * 60 * 60 * 1000;

console.log(diff / ms); // 31
```

时间早晚比较：大小于符号

```javascript
let dt1 = new Date(2020, 2, 1);
let dt2 = new Date(2020, 3, 1);

console.log(dt1 > dt2); // false
console.log(dt1 < dt2); // true
```

#### 解析日期字符串：Date.parse()
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766923644232-51a6a730-39bd-4a07-a528-ac53d8e1a65c.png)

```javascript
let dt = Date.parse("2020-1-6");
console.log(dt); // 1578240000000
```

Date.parse ()  方法可以把日期字符串转成距离时间零点的毫秒数。

#### 时间对象转时间字符串：to 方法
#### <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766923903508-eb74fbd6-4d6a-49ea-b785-b2191bb49840.png)
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766924524485-90241d12-eebf-4160-805b-b2278f1125c2.png)

`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">Date</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">对象的</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">to</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">方法主要分为</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">本地化格式</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">、</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">UTC/标准化格式</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">、</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">日期/时间拆分</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">三类，具体如下：</font>

| <font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">方法</font> | <font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">功能描述</font> |
| :---: | :---: |
| `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">toString()</font>` | <font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">将</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">Date</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">对象转换为</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">本地时区</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">的完整</font><br/><font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">日期时间字符串（包含星期、年月日、时分秒、时区）。</font> |
| `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">toDateString()</font>` | <font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">仅返回</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">Date</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">对象的</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">本地时区</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">日期部分字符串（包含星期、年月日）。</font> |
| `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">toTimeString()</font>` | <font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">仅返回</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">Date</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">对象的</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">本地时区</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">时间部分字符串（包含时分秒、时区）。</font> |
| `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">toLocaleString()</font>` | <font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">根据</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">本地语言环境</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">（如中文、英文）格式化日期时间（包含日期和时间）。</font> |
| `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">toLocaleDateString()</font>` | <font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">根据</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">本地语言环境</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">格式化日期部分（仅日期）。</font> |
| `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">toLocaleTimeString()</font>` | <font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">根据</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">本地语言环境</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">格式化时间部分（仅时间）。</font> |
| `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">toISOString()</font>` | <font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">将</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">Date</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">对象转换为</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">UTC时间</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">的ISO 8601</font><br/><font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">标准字符串（格式：</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">YYYY-MM-DDTHH:m:ss.sssZ</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">）。</font> |
| `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">toUTCString()</font>` | <font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">将</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">Date</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">对象转换为</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">UTC时间</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">的</font><br/><font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">字符串（格式：</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">Day, DD Mon YYYY HH:mm:ss GMT</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(246, 246, 246);">）。</font> |


#### 获取时间对象的年/月/日：get 方法
Date 对象提供了一系列get方法,用来获取实例对象某个方面的值:

```javascript
let dt = new Date();
dt.getTime(); // 返回实例距离1970年1月1日00:00:00的毫秒数。
dt.getDate(); // 返回实例对象对应每个月的几号（从1开始）。
dt.getDay(); // 返回星期几，星期日为0，星期一为1，以此类推。
dt.getFullYear(); // 返回四位的年份。
dt.getMonth(); // 返回月份（0表示1月，11表示12月）。
dt.getHours(); // 返回小时（0-23）。
dt.getMilliseconds(); // 返回毫秒（0-999）。
dt.getMinutes(); // 返回分钟（0-59）。
dt.getSeconds(); // 返回秒（0-59）。
```

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766924659216-a2c6b9d0-0428-414e-ad87-d84c8ab5c7cf.png) <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766924687120-74197161-187d-4e53-9256-0f1234346dc1.png)

#### 设置时间对象的年/月/日：set 方法
set 方法和get方法正好相反,它能够设置时间对象的某个方面的值。

```javascript
let dt = new Date();
dt.setTime(ms); // 设置实例距离1970年1月1日00:00:00的毫秒数。
dt.setDate(date); // 设置实例对象对应每个月的几号（从1开始）。
dt.setFullYear(year); // 设置四位的年份。
dt.setMonth(month); // 设置月份（0表示1月，11表示12月）。
dt.setHours(hour); // 设置小时（0-23）。
dt.setMilliseconds(ms); // 设置毫秒（0-999）。
dt.setMinutes(min); // 设置分钟（0-59）。
dt.setSeconds(sec); // 设置秒（0-59）。
```

> <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766924819749-e3a88e7a-bf36-4ed3-806a-8d560fcb4aa3.png)
>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766924841944-2e237aa5-c523-4773-a4a0-a049aa941e58.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766924858698-5c325c1c-f5a8-49b8-adbd-1cec4e2efea6.png)

---

---

## BOM
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766927976151-a7f2604b-57ea-4fed-94db-ddf03bd0e8c6.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766928033561-e71e8107-953d-41a1-9e04-bfbfa3541d51.png)

### BOM 对象
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766928102461-b021d748-a607-4da6-80a9-d282446f2629.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766928112322-03cf72db-53a8-47cf-ba38-cb26425662ec.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766928172834-a637625f-b10a-4287-92e9-15301dccc0c9.png)

### window
#### HTML 中接入 Javascript
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766928273062-a975130e-48b5-447c-9e58-0e7fd6103d20.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766928471005-a405b421-6678-4caa-888b-2ec43f519986.png)

[https://developer.mozilla.org/zh-CN/docs/Web/API/Window](https://developer.mozilla.org/zh-CN/docs/Web/API/Window)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766928702271-0ede6713-f1e4-487c-9379-e875f0e862a4.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766928724850-1263c5de-d90c-430d-ab65-53cc34f57e08.png)



### Location
属性：

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766930199121-daae2c82-8fe3-4c7e-9fec-68bebac74626.png)

此文档用来查询 Location 对象的方法和属性

[https://developer.mozilla.org/zh-CN/docs/Web/API/Location](https://developer.mozilla.org/zh-CN/docs/Web/API/Location)

| 属性 | 值 | 解释 |
| --- | --- | --- |
| href | [https://resource.youkeda.com/wss_test/5dc54e230f101ed7c2256d0d/5e33d104680dca7ebc7a223b/index.html?time=1580454161498](https://resource.youkeda.com/wss_test/5dc54e230f101ed7c2256d0d/5e33d104680dca7ebc7a223b/index.html?time=1580454161498) | href 是整个网页地址 |
| hostname | resource.youkeda.com | hostname 是网页域名 |
| host | resource.youkeda.com | host 是网页域名 + 端口信息（默认端口 80 省略时与 hostname 相同） |
| protocol | https | protocol 代表协议信息 |
| origin | [https://resource.youkeda.com](https://resource.youkeda.com) | origin 页面来源的域名的标准形式 |
| pathname | /5dc54e230f101ed7c2256d0d/5e33d104680dca7ebc7a223b/index.html | pathname 包含 url 路径部分 |
| search | ?time=1580454161498 | search 表示 URL 参数 |


<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766936096626-9cfa5db0-5b0d-4439-a6c8-2efa04a32fd7.png)

方法：

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766936262133-2ec20e4d-c5ba-46de-af46-ad8392ec56a7.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766936281229-f43349b6-784d-4055-9461-30cac6d6644b.png)

```javascript
setTimeout(function() {
    window.location =
      window.location.origin + window.location.pathname + '?spm=youkeda';
  }, 3000);
```

在 JavaScript 中，可以通过 `window.location`对象（通常简写为 `location`）来获取和操作当前页面的 URL 信息。以下是常用的方法和示例：

#### **一、**`**location**`**对象的常用属性**
`location`对象包含多个属性，用于获取 URL 的不同部分：

| 属性 | 说明 | 示例（假设当前 URL 为 `https://www.example.com:8080/path/page?name=test#hash`） |
| --- | --- | --- |
| `href` | 完整的 URL | `https://www.example.com:8080/path/page?name=test#hash` |
| `protocol` | 协议（包含冒号 `:`） | `https:` |
| `host` | 主机名 + 端口号（若有） | `www.example.com:8080` |
| `hostname` | 主机名（不含端口号） | `www.example.com` |
| `port` | 端口号（若未显式指定则为空字符串） | `8080` |
| `pathname` | URL 路径（以 `/`开头） | `/path/page` |
| `search` | 查询参数（以 `?`开头，包含 `?`） | `?name=test` |
| `hash` | 锚点（以 `#`开头，包含 `#`） | `#hash` |
| `origin` | 协议 + 主机名 + 端口号（只读，现代浏览器支持） | `https://www.example.com:8080` |


#### **二、代码示例**
直接在浏览器控制台或 `<script>`标签中运行以下代码，即可获取当前页面的 URL 信息：

```javascript
// 完整 URL
console.log(location.href); 
// 输出：当前页面的完整 URL（如 https://www.baidu.com/s?wd=test）

// 协议（http: 或 https:）
console.log(location.protocol); 
// 输出：https:

// 主机名+端口（如 www.baidu.com:443 或 localhost:3000）
console.log(location.host); 

// 主机名（不含端口）
console.log(location.hostname); 

// 端口号（若 URL 中无端口则输出空字符串）
console.log(location.port); 

// 路径部分（如 /s 或 /user/list）
console.log(location.pathname); 

// 查询参数（如 ?wd=test&page=1）
console.log(location.search); 

// 锚点（如 #top 或 #section1）
console.log(location.hash); 

// 源（协议+主机名+端口，如 https://www.baidu.com）
console.log(location.origin);
```

#### **三、**`**location**`**对象的方法**
除了获取 URL 信息，`location`还提供了修改 URL 的方法：

| 方法 | 说明 |
| --- | --- |
| `assign(url)` | 跳转到指定 URL（会在浏览器历史记录中生成一条新记录，可通过“后退”返回） |
| `replace(url)` | 替换当前 URL（不会生成新的历史记录，无法通过“后退”返回原页面） |
| `reload()` | 重新加载当前页面（可选参数 `true`表示强制从服务器刷新，忽略缓存） |


#### 方法示例： 
```javascript
// 跳转到新页面（保留历史记录）
location.assign('https://www.youkeda.com');

// 替换当前页面（不保留历史记录）
location.replace('https://www.youkeda.com');

// 刷新当前页面（默认从缓存加载）
location.reload(); 
// 强制从服务器刷新（忽略缓存）
location.reload(true);
```

#### **四、注意事项**
1. `**location**`**是 **`**window**`**的属性**：可以直接使用 `location`，也可以写成 `window.location`（两者等价）。
2. **修改 **`**location**`**属性会跳转页面**：例如修改 `location.href`或 `location.pathname`会导致页面重定向：

```javascript
location.href = 'https://www.youkeda.com'; // 跳转到指定 URL
location.pathname = '/new-path'; // 跳转到当前域名下的 /new-path 路径
```

3. **兼容性**：`origin`属性在 IE 中不支持（IE11 及以下），其他现代浏览器均支持。



---

### History
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766936411896-2ec888d3-9c49-4741-bcc1-9d55fb355897.png)





---

### Navigator
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766938448483-8fa86afa-031e-4e83-a477-149838cf0ee0.png)

`Navigator`是 JavaScript 中的一个**只读全局对象**（属于 `window`对象的一部分），它提供了关于**浏览器本身的信息**（如浏览器名称、版本、运行平台、网络状态等）。这些信息通常用于**客户端检测**（比如判断用户设备类型、浏览器能力），但需注意：**不要过度依赖它做关键逻辑**（因为信息可能被篡改或不准确）。

#### **一、如何访问 Navigator 对象？**
直接通过 `window.navigator`或简写为 `navigator`访问：

```javascript
// 两种方式等价
console.log(window.navigator);
console.log(navigator);
```

#### **二、Navigator 对象的常用属性**
以下是开发中常用的属性（按实用性排序）：

##### 1. `**userAgent**`**：浏览器用户代理字符串**
**作用**：返回浏览器的“身份标识”字符串（包含浏览器名称、版本、操作系统等信息）。

**示例**（Chrome 浏览器）：

```javascript
console.log(navigator.userAgent);
// 输出："Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
```

**用途**：通过解析 `userAgent`判断浏览器类型（如 Chrome、Firefox）、设备（手机/电脑）、操作系统（Windows/macOS）。

⚠️ **注意**：`userAgent`可被用户手动修改，不可完全信任（比如模拟移动端调试时会篡改）。

##### 2. `**platform**`**：浏览器运行的平台**
**作用**：返回浏览器运行的**操作系统平台**（如 Windows、macOS、Linux、iPhone 等）。

**示例**：

```javascript
console.log(navigator.platform);
// 可能的输出："Win32"（Windows）、"MacIntel"（macOS）、"Linux x86_64"、"iPhone"
```

**用途**：快速判断用户设备类型（如 PC 端还是移动端）。

##### 3. `**language**`**/ **`**languages**`**：浏览器语言设置**
+ `language`：返回用户偏好的**主要语言**（如 `zh-CN`、`en-US`）。
+ `languages`：返回用户偏好语言的**数组**（按优先级排序）。

**示例**：

```javascript
console.log(navigator.language); // "zh-CN"（中文简体）
console.log(navigator.languages); // ["zh-CN", "zh", "en-US", "en"]
```

**用途**：根据用户语言显示对应语言的内容（国际化场景）。

##### 4. `**onLine**`**：网络连接状态**
**作用**：返回一个布尔值，表示浏览器是否联网（`true`在线，`false`离线）。

**示例**：

```javascript
console.log(navigator.onLine); // true（在线）或 false（离线）
```

**用途**：监听网络状态变化（需配合事件 `online`/`offline`）：

```javascript
// 监听网络恢复
window.addEventListener('online', () => {
  console.log('网络已连接！');
});

// 监听网络断开
window.addEventListener('offline', () => {
  console.log('网络已断开！');
});
```

##### 5. `**cookieEnabled**`**：Cookie 是否启用**
**作用**：返回布尔值，表示浏览器是否允许存储 Cookie（`true`启用，`false`禁用）。

**示例**：

```javascript
console.log(navigator.cookieEnabled); // true（允许）或 false（禁止）
```

##### 6. `**geolocation**`**：地理位置 API**
**作用**：返回一个 `Geolocation`对象，可用于获取用户的地理位置（需用户授权）。

**示例**：

```javascript
if (navigator.geolocation) {
  // 获取当前位置（成功回调、失败回调、配置项）
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log('纬度：', position.coords.latitude);
      console.log('经度：', position.coords.longitude);
    },
    (error) => {
      console.log('获取位置失败：', error.message);
    }
  );
} else {
  console.log('浏览器不支持地理位置 API');
}
```

#### **三、Navigator 对象的常用方法**
##### 1. `**sendBeacon(url, data)**`**：发送数据到服务器**
**作用**：异步向服务器发送少量数据（如用户行为日志），**不会阻塞页面卸载**（适合在 `beforeunload`事件中发送数据）。

**示例**：

```javascript
// 页面关闭前发送统计数据
window.addEventListener('beforeunload', () => {
  const data = { action: 'page_leave', time: Date.now() };
  navigator.sendBeacon('/log', JSON.stringify(data));
});
```

**优势**：相比 `XMLHttpRequest`或 `fetch`，`sendBeacon`能保证数据在页面卸载前发送成功，且不影响页面性能。

##### 2. `**vibrate(pattern)**`**：设备震动（移动端）**
**作用**：控制设备震动（仅移动设备支持），`pattern`可以是震动时长（毫秒）或震动/暂停的交替数组。

**示例**：

```javascript
// 震动 200ms
navigator.vibrate(200);

// 震动 100ms → 暂停 50ms → 震动 100ms
navigator.vibrate([100, 50, 100]);
```

#### **四、注意事项**
1. **信息可能被篡改**：`navigator`对象的属性（如 `userAgent`）可被用户或插件修改，因此**不能用于安全校验**（如判断用户是否为管理员）。
2. **隐私限制**：现代浏览器对 `navigator`的部分属性（如 `geolocation`、`camera`）有严格的权限控制，需用户主动授权才能访问。
3. **兼容性**：部分属性（如 `userAgentData`）仅在较新的浏览器中支持，使用前需检查兼容性（可通过 `if (navigator.xxx)`判断）。

#### **总结**
`Navigator`对象是获取浏览器/设备信息的“入口”，常用于：

+ 判断用户设备类型（PC/移动端）；
+ 获取用户语言偏好（国际化）；
+ 监听网络状态；
+ 发送统计数据（如 `sendBeacon`）。

但需避免过度依赖其属性做关键逻辑，优先考虑更可靠的方案（如 CSS 媒体查询判断设备类型）。



---

### Screen
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1766938485524-7e53b243-55a0-4ec4-9d1b-6a7d8d7e11ed.png)

`Screen`是 JavaScript 中的一个**只读全局对象**（属于 `window`对象的一部分），它提供了关于**用户屏幕（显示器）的物理和信息属性**（如屏幕尺寸、颜色深度、像素密度等）。这些信息通常用于**适配不同屏幕的设备**（如响应式布局、高清屏优化），但无法直接获取屏幕上的“可见区域”（可见区域需用 `window.innerWidth`等属性）。

#### **一、如何访问 Screen 对象？**
直接通过 `window.screen`或简写为 `screen`访问：

```javascript
// 两种方式等价
console.log(window.screen);
console.log(screen);
```

#### **二、Screen 对象的常用属性**
以下是开发中常用的属性（按实用性排序）：

##### 1. `**width**`**/ **`**height**`**：屏幕总尺寸（物理像素）**
**作用**：返回屏幕的**总宽度/高度**（单位：物理像素，即屏幕实际的像素点数）。

**示例**（假设屏幕分辨率为 1920×1080）：

```javascript
console.log(screen.width);   // 1920（屏幕横向总像素）
console.log(screen.height);  // 1080（屏幕纵向总像素）
```

**注意**：不包含系统任务栏、浏览器边框等非显示区域（这些是“可用屏幕区域”，见下文 `availWidth`/`availHeight`）。

##### 2. `**availWidth**`**/ **`**availHeight**`**：屏幕可用尺寸（物理像素）**
**作用**：返回屏幕**实际可用于显示内容的宽度/高度**（扣除任务栏、 Dock 栏等系统占用区域后的像素值）。

**示例**（假设屏幕总高 1080px，任务栏占 40px）：

```javascript
console.log(screen.availWidth);   // 1920（通常与 screen.width 一致，除非侧边栏占用宽度）
console.log(screen.availHeight);  // 1040（1080 - 40，扣除任务栏高度）
```

##### 3. `**colorDepth**`**：屏幕颜色深度**
**作用**：返回屏幕每个像素的颜色位数（即支持的颜色数量），通常为 24 或 32（32 位包含透明度通道 Alpha）。

**示例**：

```javascript
console.log(screen.colorDepth);  // 24 或 32（表示支持 2²⁴ 或 2³² 种颜色）
```

**用途**：判断是否需要为高色深屏幕提供高清图片（如 Retina 屏）。

##### 4. `**pixelDepth**`**：屏幕像素深度**
**作用**：返回屏幕的像素深度（通常与 `colorDepth`相同，部分系统中可能不同，但现代浏览器中几乎一致）。

**示例**：

```javascript
console.log(screen.pixelDepth);  // 通常与 colorDepth 结果相同（如 24 或 32）
```

##### 5. `**devicePixelRatio**`**：设备像素比（重要！）**
**作用**：返回**物理像素与 CSS 像素的比例**（简称 DPR），用于判断屏幕是否为高清屏（如 Retina 屏）。

+ 普通屏：`devicePixelRatio = 1`（1 个 CSS 像素 = 1 个物理像素）；
+ Retina 屏（MacBook、iPhone 等）：`devicePixelRatio = 2`或 `3`（1 个 CSS 像素 = 2/3 个物理像素）。

**示例**：

```javascript
console.log(screen.devicePixelRatio);  // 1（普通屏）、2（Retina 屏）或 3（高清屏）
```

**用途**：动态加载高清图片（如 `image@2x.png`对应 DPR=2 的屏幕）。

#### **三、代码示例：获取屏幕信息**
在浏览器控制台或 `<script>`标签中运行以下代码，查看当前屏幕的关键信息：

```javascript
// 屏幕总尺寸（物理像素）
console.log('屏幕总宽：', screen.width, 'px');
console.log('屏幕总高：', screen.height, 'px');

// 屏幕可用尺寸（物理像素，扣除任务栏等）
console.log('可用宽度：', screen.availWidth, 'px');
console.log('可用高度：', screen.availHeight, 'px');

// 颜色深度和像素深度
console.log('颜色深度：', screen.colorDepth, '位');
console.log('像素深度：', screen.pixelDepth, '位');

// 设备像素比（判断是否高清屏）
console.log('设备像素比：', screen.devicePixelRatio);
if (screen.devicePixelRatio > 1) {
  console.log('当前屏幕是高清屏（Retina 屏）');
} else {
  console.log('当前屏幕是普通屏');
}
```

#### **四、Screen 对象的应用场景**
##### 1. **响应式布局辅助**
虽然现代响应式布局更依赖 CSS 媒体查询（如 `@media (min-width: 768px)`），但 `screen.width`可用于 JavaScript 动态调整布局（如大屏显示更多内容）。

```javascript
if (screen.width >= 1920) {
  // 大屏设备：显示侧边栏
  document.body.classList.add('large-screen');
}
```

##### 2. **高清屏图片适配**
通过 `devicePixelRatio`判断是否需要加载高清图片，避免模糊：

```javascript
const dpr = screen.devicePixelRatio || 1;
const img = new Image();
img.src = `logo@${dpr}x.png`; // 根据 DPR 加载对应倍数的图片（如 logo@2x.png）
document.body.appendChild(img);
```

##### 3. **全屏应用适配**
结合 `screen.availWidth`和 `screen.availHeight`计算全屏应用的尺寸（扣除系统任务栏）：

```javascript
const fullscreenWidth = screen.availWidth;
const fullscreenHeight = screen.availHeight;
console.log(`全屏尺寸：${fullscreenWidth}×${fullscreenHeight}`);
```

#### **五、注意事项**
1. `**Screen**`**是屏幕属性，不是窗口属性**：`screen.width`是屏幕的总宽度，而 `window.innerWidth`是当前浏览器窗口的宽度（可见区域），两者不要混淆。
    - 示例对比：

```javascript
console.log('屏幕总宽：', screen.width);       // 1920（屏幕物理宽度）
console.log('窗口可视宽：', window.innerWidth); // 1200（浏览器窗口内部宽度）
```

2. **多显示器环境**：`Screen`对象反映的是**当前窗口所在屏幕**的属性（若用户连接多个显示器，拖动窗口到不同屏幕时，`screen`的值会变化）。
3. **只读属性**：`Screen`的所有属性都是只读的，无法修改（如不能通过 `screen.width = 2000`改变屏幕分辨率）。

#### **总结**
`Screen`对象是获取屏幕硬件信息的“窗口”，核心作用是：

+ 了解屏幕分辨率和可用区域；
+ 判断是否为高清屏（通过 `devicePixelRatio`）；
+ 辅助响应式布局和高清资源加载。

但实际开发中，**优先使用 CSS 媒体查询处理响应式**，JavaScript 中的 `Screen`更多用于需要精确控制像素的场景（如 Canvas 绘图、高清图片适配）。



---

---

## DOM 和 DOM 操作
### 初识 DOM
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1767061385250-06336441-3031-4feb-83e5-45b9c8c1d63b.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1767061449879-1a323759-4071-4410-b0c1-f433930db2e8.png)

文档对象模型(DOM)可以将web页面 与 脚本或编程语言 连接起来

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1767061508890-29872e3d-2fc1-4ac4-ba71-d0af617d9e55.png)

#### DOM 映射
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1767062010890-e8fe916e-a943-47bf-b686-88dac4b31cb0.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1767062019129-98f1f8cb-78f8-45a4-8fe0-2a4bdc083d91.png)

我们总结下DOM树特性:  

1. 树根是DOCUMENT,也可以称为整个页面文档 

2.每个HTML标签我们称之为**DOM节点**,英文为**Node**或者** ELement **

3.每个HTML标签包裹的子标签,在树上体现为分支,称为儿子节 点。比如上图,P和H1都是DIV的**儿子节点。** BODY 的儿子节点。 

4. 儿子节点类推可以得知P,H1是BODY的**孙子节点。** 

5.所有P,H1的长辈,我们称为P和H1的**祖先节点。** 

6. P,H1 是亲兄弟,我们称为**兄弟节点**。  

注意上面的特性中的粗体,这些不是开玩笑的父子游戏,这是专业术语 哈!  DIV  同样也是



### 访问 DOM(光看没用得大量实操才能找到 DOM 的精华)
#### 获取 DOCUMENT
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1767062553537-7d658894-30b2-44e6-9908-d4871809916f.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1767063658756-fcdc0a22-0e33-477f-bf5f-898e42b7e5c7.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1767063678513-0880514a-dedb-4963-9ff4-d6958cd2fc3e.png)

#### Chrome 调试工具
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1767065391222-fbe476ba-c277-4ab8-8e1b-609da5d6d4cf.png)

#### 选择器查询
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1767065686931-6192f28e-f5a1-4e38-a7f3-c60da201bc40.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1767065710808-0c6eceb3-1770-4fab-a89a-64dcf3459e31.png)

<font style="color:rgb(0, 0, 0);background-color:rgb(245, 245, 245);">querySelector()</font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1767065807078-b9c01345-9fe2-405f-9055-297f026b3ede.png)

```javascript
//基础筛选条件
'.subtitle';

//加强版本，加上父亲筛选， 筛选 main标签下面 -> class为core的节点下面 -> class为subtitle的节点
'main .core .subtitle';
document.querySelector('main .core .subtitle');
```

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1767065947674-9d8d2fa9-6106-471a-8024-ed9c55b95953.png)

#### 选择器全量查询
上述选择器查询方式只能查询到第一个满足条件的节点，该如何查询所有满足条件的节点?

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1767066763330-a3e3e51c-1328-4e30-92e6-ac048ae7e6a7.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1767066818030-ffef516c-000d-4e60-8e30-b8da2c2d0c03.png)

> 类数组,顾名思义类似数组形式,(可以通过索引访问的对象我们都可 以称之为类数组),从JSConsole中我们实际得到的是NodeList对 象。
>

#### 其他筛选方法
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1767066928331-8225d774-8cdb-4f7a-bd85-5a2485e0f9c7.png)

> querySelector 查询出来的元素是拷贝的原始数据,不会再随着页面 DOM 节点的改变而变化get 系列方法 查询出来的元素就是原始数据, 所以会随着页面的DOM节点的改变而变化
>

### 访问 DOM 属性
#### DOM 种类
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1767068735158-29bf5c88-9eab-4a72-9b01-02630480ec0d.png)

[https://developer.mozilla.org/zh-CN/docs/Web/API](https://developer.mozilla.org/zh-CN/docs/Web/API)

#### DOM 属性
##### DOM 类别
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1767068963793-412a4434-033e-4ffa-b410-5a173f40d856.png)

html 代码

```html
<!DOCTYPE html>
<head>
  <meta charset="UTF-8" />
  <title>优课达</title>
</head>
<body>
  <div id="test">优课达</div>
  <script src="./index.js"></script>
</body>
```

js 代码

```javascript
let divDom = document.querySelector('div#test');
console.log(divDom.nodeType, divDom.nodeName, divDom.nodeValue);

// 获取DIV节点的第一个儿子节点，代表 '优课达' 这个字符串
let txtDom = divDom.firstChild;
console.log(txtDom.nodeType, txtDom.nodeName, txtDom.nodeValue);

// 获取DIV节点的id属性
let attDom = divDom.attributes.id;
console.log(attDom.nodeType, attDom.nodeName, attDom.nodeValue);
```

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1767069475177-ee8f63d1-aa17-4ae2-b049-2bbba19960fd.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1767069642485-80f53360-2884-42ed-aba5-fb9ced40145a.png)

##### DOM 内容
```html
<!DOCTYPE html>
<head>
  <meta charset="UTF-8" />
  <title>优课达</title>
</head>
<body>
  <div id="test">
    优课达
    <p>youkeda</p>
    <p>学的比别人好一点</p>
  </div>
  <script src="./index.js"></script>
</body>
```

```javascript
let divDom = document.querySelector('div#test');
console.log(divDom.outerHTML, divDom.innerHTML, divDom.innerText);
```

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1767069785109-4b9b726f-b6bd-4b67-9604-2232f872ce31.png)

##### DOM 亲属
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1767075800512-34a7efed-fc8f-468f-9472-9a93ca0b2abb.png)

```javascript
let divDom = document.querySelector('div#test');
console.log(divDom.firstChild, divDom.lastChild);
console.log('-----');
console.log(divDom.childNodes);
console.log('-----');
console.log(divDom.parentNode);
```

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1767075891155-50b68938-2d6c-4bf3-ae2d-dabce3908cda.png)

> 注意: 
>
> 选择一个父节点的子节点时,非IE浏览器 如FireFox、Chrome 等,会 把换行符也当做一个元素。也就是说,不同浏览器的表现是不一样的。 本例子中,lastChild 的值为  text  实际上就是换行符。
>

##### DOM 样式
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1767076167163-8b72e3ab-67a8-48dd-a478-9a5ebe8486d1.png)

html 代码:

```html
<!DOCTYPE html>
<head>
  <meta charset="UTF-8" />
  <title>优课达</title>
</head>
<body>
  <h1 class="test youkeda" style="color: #FF3300; font-size: 24px;">优课达</h1>
  <script src="./index.js"></script>
</body>
```

js 代码:

```javascript
const h1Dom = document.querySelector('h1');
console.log(h1Dom.classList);
console.log(h1Dom.style);
console.log(h1Dom.style.color);
```

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1767076378203-d1d806a2-1783-4153-b189-09fb044b2b0b.png)

##### DOM 数据属性
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1767076457636-5d708d23-b8e2-42f8-ae99-a51cd60aa53e.png)

```html
<!DOCTYPE html>
<head>
  <meta charset="UTF-8" />
  <title>优课达</title>
</head>
<body>
  <article data-parts="3" data-words="1314" data-category="python">
    ...
  </article>
  <script src="./index.js"></script>
</body>
```

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1767076850183-0e6c4342-d6c7-482d-8f2f-91c0c3b0e1dd.png)

```javascript
const article = document.querySelector('article');
console.log(article.dataset);
```

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1767076917691-d2ed0ee0-825e-4cb8-a0e6-e3040d4874ab.png)

例题:

怎么用 dom 获取 img 中的 src 属性中的内容

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1767077948079-5a30a965-9254-41a6-8f67-c1dfd070909c.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1767077889538-3c722cf3-011b-496e-9a87-4de86595a9b7.png)

### DOM 操作（一）
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1767078949876-b316c657-fdd0-4e3f-b570-c5becbb72d95.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1767078985934-ad088536-c2cc-4faa-a400-7debbd42f5d1.png)

html 代码

```html
<!DOCTYPE html>
<head>
  <meta charset="utf-8" />
  <link rel="stylesheet" type="text/css" href="./post.css" />
  <title>优课达</title>
</head>
<body>
  <section class="box">
    <img
      class="java"
      src="https://document.youkeda.com/new-learn-path/Bitmap.png"
    />
    <div class="title">Java</div>
    <div class="select"></div>
  </section>

  <script src="./post.js"></script>
</body>
```

```javascript
// 保存当前是否选中的状态
let isSelected = false;

// 获取整个元素的节点
const box = document.querySelector('.box');

// 获取select框节点
const select = document.querySelector('.select');

// 给整个元素添加点击事件【大家可以先忽略这部分】
box.addEventListener('click', function () {
  // 点击以后触发这个函数

  // 修改当前选中状态，取反即可
  isSelected = !isSelected;

  // 如果当前是选中状态、则添加img到select中
  if (isSelected) {
    // 创建一个img标签节点
    const img = document.createElement('img');

    // 设置img的src属性和样式，让其撑满select框
    img.src = 'https://style.youkeda.com/img/sandwich/check.png';
    img.setAttribute('style', 'width: 100%; height: 100%;');

    // 将这个节点添加到select框中
    select.appendChild(img);
  } else {
    // 如果不是选择状态，则清空内部子元素
    select.innerHTML = '';
  }
});
```

1.创建标签节点

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1767085686417-733fa25e-9e97-401a-bd83-2c5398aa0bd0.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1767085720894-fb1ae9a9-3590-4ba6-b55f-3c8ea94b97ff.png)

2.新添节点

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1767085809559-a8627d84-7023-456c-9e53-146f95107723.png)

eg:

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1767085844798-7ffec4d3-26ec-4b4d-a411-1d82337b12d4.png)

```html
<!DOCTYPE html>
<head>
  <meta charset="utf-8" />
  <title>优课达</title>
</head>
<body>
  <ul class="root">
    <li class="sars">SARS</li>
  </ul>
  <script src="./index.js"></script>
</body>
```

```javascript
function createDisease(txt) {
  const dom = document.createElement('li');
  const domTxt = document.createTextNode(txt);
  dom.appendChild(domTxt);
  return dom;
}

const root = document.querySelector('ul.root');
const sars = document.querySelector('li.sars');

// 创建 H1N1
const H1N1 = createDisease('H1N1');
root.appendChild(H1N1);

// 创建 新型冠状病毒
const nCoV = createDisease('新型冠状病毒');
root.insertBefore(nCoV, sars);
```

3.设置样式,属性

和上回作业一样要获取标签内的属性不论是 id 还是 src 都要用 attribute()

我们要用 setAttribute()来设置样式和属性

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1767086452031-b77cfc71-1182-4ea5-8a1e-7303eadc4d7f.png)  
 

### DOM 操作（二）


## DOM 事件
DOM（文档对象模型）事件是网页中与用户交互或浏览器状态变化相关的动作触发的信号。例如点击按钮、鼠标移动、键盘输入等操作都会触发对应的DOM事件。理解DOM事件机制是前端开发的核心技能之一，涉及事件流、事件处理、事件对象等关键概念。

### **一、常见事件类型**
DOM事件按功能可分为多类，常见类型包括：

| **<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">类别</font>** | **<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">典型事件</font>** |
| --- | --- |
| **<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">鼠标事件</font>** | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">click</font>`<br/><font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">（点击）、</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">dblclick</font>`<br/><font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">（双击）、</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">mousedown</font>`<br/><font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">（按下）、</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">mouseup</font>`<br/><font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">（释放）、</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">mousemove</font>`<br/><font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">（移动）、</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">mouseover</font>`<br/><font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">（移入）、</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">mouseout</font>`<br/><font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">（移出）</font> |
| **<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">键盘事件</font>** | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">keydown</font>`<br/><font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">（键按下）、</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">keyup</font>`<br/><font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">（键释放）、</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">keypress</font>`<br/><font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">（字符键按下，已逐渐被弃用）</font> |
| **<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">表单事件</font>** | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">submit</font>`<br/><font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">（表单提交）、</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">change</font>`<br/><font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">（值改变）、</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">input</font>`<br/><font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">（实时输入）、</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">focus</font>`<br/><font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">（聚焦）、</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">blur</font>`<br/><font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">（失焦）</font> |
| **<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">窗口事件</font>** | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">load</font>`<br/><font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">（页面/资源加载完成）、</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">resize</font>`<br/><font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">（窗口大小改变）、</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">scroll</font>`<br/><font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">（滚动）、</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">unload</font>`<br/><font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">（页面卸载）</font> |
| **<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">触摸事件</font>** | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">touchstart</font>`<br/><font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">（触摸开始）、</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">touchmove</font>`<br/><font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">（触摸移动）、</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">touchend</font>`<br/><font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">（触摸结束）（移动端常用）</font> |


### **二、事件流：事件的传播过程**
当一个事件触发时，它会在DOM树中**逐级传播**，分为三个阶段（W3C标准）：

1. **捕获阶段（Capture Phase）**：  
事件从最顶层的祖先元素（如`window`）向下传播到目标元素的父节点，直到到达目标元素的直接父节点。  
_目的：允许上层元素提前拦截事件。_
2. **目标阶段（Target Phase）**：  
事件到达**实际触发事件的目标元素**（如点击的按钮），在此阶段处理事件。
3. **冒泡阶段（Bubble Phase）**：  
事件从目标元素开始，向上传播回最顶层的祖先元素（如`window`），类似于“气泡上浮”。  
_大多数事件支持冒泡（如_`_click_`_），少数不支持（如_`_focus_`_）。_

### **三、事件处理程序的绑定**
为元素绑定事件处理函数（响应事件的逻辑），常见方式有4种：

#### 1. HTML内联属性（不推荐）
直接在HTML标签中通过`onXXX`属性绑定函数（如`onclick`）：

```javascript
<button onclick="handleClick()">点击</button>
  <script>
  function handleClick() {
    alert("按钮被点击");
  }
  </script>
```

_缺点：逻辑与结构耦合，难以维护。_

#### 2. DOM0级事件（传统方式）
通过JavaScript为元素的`onXXX`属性赋值函数：

```javascript
const btn = document.querySelector('button');
btn.onclick = function() {
  alert("按钮被点击");
};
// 移除事件：设为null
btn.onclick = null;
```

_特点：同一事件只能绑定一个处理函数（后绑定的覆盖之前的）。_

#### 3. DOM2级事件（推荐）
使用`addEventListener()`和`removeEventListener()`，支持绑定多个处理函数，并可控制事件阶段（捕获/冒泡）：

```javascript
const btn = document.querySelector('button');
function handleClick() { alert("第一次点击"); }
function handleClickAgain() { alert("第二次点击"); }

// 绑定事件（默认冒泡阶段）
btn.addEventListener('click', handleClick);
btn.addEventListener('click', handleClickAgain);

// 移除事件（需传入相同的函数引用）
btn.removeEventListener('click', handleClick);
```

+ 第三个参数`useCapture`：`true`表示在捕获阶段触发，`false`（默认）表示冒泡阶段。
+ 优点：支持多个处理函数，灵活控制事件阶段。

#### 4. IE兼容模式（已淘汰）
IE8及以下使用`attachEvent()`和`detachEvent()`，语法类似但存在兼容性问题（如`this`指向`window`）：

```javascript
btn.attachEvent('onclick', function() { /* ... */ }); // 注意事件名带"on"
```

### **四、事件对象（Event Object）**
事件触发时，浏览器会生成一个**事件对象**，包含事件的具体信息（如鼠标坐标、按键状态）。处理函数可通过参数接收该对象（旧版IE中为`window.event`）。

#### 常用属性/方法：
| **<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">属性/方法</font>** | **<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">说明</font>** |
| --- | --- |
| `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">event.type</font>` | <font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">事件类型（如</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">'click'</font>`<br/><font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">）</font> |
| `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">event.target</font>` | **<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">实际触发事件的元素</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">（事件源，如点击的按钮）</font> |
| `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">event.currentTarget</font>` | **<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">当前处理事件的元素</font>**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">（绑定处理函数的元素，通常与</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">this</font>`<br/><font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">一致）</font> |
| `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">event.preventDefault()</font>` | <font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">阻止事件的默认行为（如表单提交的跳转、</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">a</font>`<br/><font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">标签的跳转）</font> |
| `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">event.stopPropagation()</font>` | <font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">停止事件传播（阻止冒泡或捕获）</font> |
| `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">event.clientX/clientY</font>` | <font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">鼠标相对于视口的坐标</font> |
| `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">event.key</font>` | <font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">键盘事件中按下的键（如</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">'Enter'</font>`<br/><font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0);">）</font> |


### **五、事件委托（事件代理）**
**原理**：利用事件冒泡，将事件处理函数绑定在父元素上，通过`event.target`判断具体触发事件的子元素。  
**优势**：

+ 减少事件处理函数数量，提升性能（尤其对动态生成的子元素）。
+ 无需为每个子元素单独绑定/解绑事件。

**示例**：为动态添加的列表项（`li`）绑定点击事件，只需绑定在父元素`ul`上：

```javascript
<ul id="list">
  <li>项目1</li>
  <li>项目2</li>
  <li>项目3</li>
  </ul>

  <script>
  const list = document.getElementById('list');
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') { // 判断触发事件的是否是li
    alert(`点击了：${e.target.textContent}`);
  }
});
</script>
```

### **六、自定义事件**
除了浏览器预定义的事件，还可以创建**自定义事件**，用于组件间通信或特定场景的状态通知。

#### 创建与触发自定义事件：
```javascript
// 创建事件（可选参数：事件名、配置对象）
const myEvent = new Event('myEvent', { bubbles: true, cancelable: true });

// 监听事件
document.addEventListener('myEvent', function(e) {
  console.log('自定义事件触发！', e.detail); // e.detail可携带额外数据
});

// 触发事件（在目标元素上派发）
document.dispatchEvent(myEvent);

// 携带数据的自定义事件（使用CustomEvent）
const customEvent = new CustomEvent('userLogin', {
  detail: { username: '张三' } // 自定义数据
});
document.dispatchEvent(customEvent);
```

### **七、注意事项**
1. `**this**`**指向**：
    - DOM0级和`addEventListener`中，`this`指向当前元素（`event.currentTarget`）。
    - IE的`attachEvent`中，`this`指向`window`。
2. **阻止默认行为与冒泡**：
    - 阻止默认行为：`event.preventDefault()`（如禁止表单提交跳转）。
    - 阻止冒泡：`event.stopPropagation()`（避免父元素重复响应）。
    - 同时阻止两者：`event.stopImmediatePropagation()`（阻止后续所有同元素事件）。
3. **事件性能的优化**：
    - 避免在频繁触发的事件（如`scroll`、`resize`）中执行复杂操作，可使用防抖（debounce）或节流（throttle）。



---

### DOM 绑定事件
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1767099168365-b436b9e6-0bdd-46f7-ad6f-437a2236a41c.png)

不推荐的写法:

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1767099297087-e771e112-95eb-4995-bc0e-7111ae541daa.png)

[https://developer.mozilla.org/zh-CN/docs/Web/Events](https://developer.mozilla.org/zh-CN/docs/Web/Events)

### DOM 事件
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1767099639949-aa7e13c8-a66b-4450-a4ff-cf2839801c3b.png)

### 点击事件
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1767099730620-d0d89aaa-1058-4b89-974a-861673386c21.png)

案例:

UCode 案例

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/gif/60716356/1767099900773-610ff62f-6a38-4ed1-b7a6-6095c81e2c19.gif)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1767099921809-1dddfa7c-1bdd-44da-90b2-9fe2b877c6e9.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1767101151720-4a470e63-f64a-4a15-a38a-806364f573c1.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1767101198301-49555c29-0328-43e3-be38-37ff5c2b9ae7.png)

```javascript
// 默认是未点击喜欢
let hasLike = false;

const likeBtn = document.querySelector(".like-btn");
const likeBtnRight = likeBtn.querySelector(".right");
likeBtn.addEventListener("click", function () {
  // 点击事件
  hasLike = !hasLike;
  if (hasLike) {
    likeBtn.classList.add("has-like");
    likeBtnRight.innerHTML = parseInt(likeBtnRight.innerText.trim()) + 1;
  } else {
    likeBtn.classList.remove("has-like");
    likeBtnRight.innerHTML = parseInt(likeBtnRight.innerText.trim()) - 1;
  }
});
```

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/gif/60716356/1767101248964-1f6d8f36-3712-46b0-af99-2f599b5e30f0.gif)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1767101288262-7a95a417-b4e5-4319-90cd-c243191b514b.png)

```javascript
let showMore = false;
const moreBtn = document.querySelector(".workspace-item-more .select");
const morePanel = document.querySelector(".workspace-item-more .options");
moreBtn.addEventListener("click", function () {
  showMore = !showMore;

  // 控制morePanel的显示和隐藏
  if (showMore) {
    morePanel.style.display = "block";
  } else {
    morePanel.style.display = "none";
  }
});
```

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/60716356/1767101361884-9fc5a8ba-b2de-4d9e-81b8-81c7e1fcefe2.png)





