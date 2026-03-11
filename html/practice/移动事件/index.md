要理解**鼠标移动事件**（而非“点击事件”，推测是口误~），需先明确 5 个核心事件的区别。下面结合**分类逻辑**和**代码演示**讲解：  


### 一、5 大鼠标移动事件的核心区别  
先看官方定义（来自你提供的资料），再分类理解：  

| 事件名          | 触发时机                                                                 | 是否冒泡 | 典型场景                     |  
|-----------------|--------------------------------------------------------------------------|----------|------------------------------|  
| `mousemove`     | 鼠标**在元素内部持续移动**时触发（每移动一段距离就触发，频率较高）       | 是       | 绘图、拖拽等实时位置追踪场景 |  
| `mouseenter`    | 鼠标**进入当前 DOM 节点（自身）**时触发，**子元素进入不触发父级的mouseenter** | 否       | 菜单展开/收起（避免子元素干扰）|  
| `mouseleave`    | 鼠标**离开当前 DOM 节点（自身）**时触发，**子元素离开不影响父级的mouseleave** | 否       | 菜单展开/收起（配合mouseenter）|  
| `mouseover`     | 鼠标**进入当前 DOM 节点 或 它的子元素**时触发，**会冒泡**（父级能感知子的进入） | 是       | 需感知“自身+子元素”进入的场景  |  
| `mouseout`      | 鼠标**离开当前 DOM 节点 或 移动到它的子元素**时触发，**会冒泡**（父级能感知子的离开） | 是       | 需感知“自身+子元素”离开的场景  |  


### 二、通俗分类记忆  
为了更清晰，可把 5 个事件分成 3 类：  

#### 1. 持续触发类：`mousemove`  
- 特点：鼠标在元素内**每动一点**就触发（频率高，注意性能），仅关注“移动行为”本身。  
- 类比：你拿笔在纸上画，笔移动一丁点，就记录一次位置。  


#### 2. 「进入/离开」非冒泡类：`mouseenter` / `mouseleave`  
- 特点：只关心**当前元素自身的“进入/离开”**，子元素的操作（比如鼠标进子元素、离分子元素）**不会触发父级的这两个事件**。  
- 类比：你进房间（enter）和出房间（leave），房间里的抽屉（子元素）开关不影响“你是否在房间”的判断。  


#### 3. 「进入/离开」冒泡类：`mouseover` / `mouseout`  
- 特点：不仅关心**当前元素自身**，也关心**子元素的“进入/离开”**（因为事件会“冒泡”到父级）。  
- 类比：你进房间（enter）时，若抽屉（子元素）被打开，房间也会“感知”到你进了抽屉；出房间时同理。  


### 三、代码演示：用嵌套元素看事件触发差异  
下面通过 HTML 嵌套结构 + 控制台日志，直观感受 5 个事件的触发逻辑。  


#### 步骤 1：HTML 结构（3 层嵌套 div）  
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    #outer { padding: 50px; background: lightblue; }
    #middle { padding: 30px; background: lightgreen; }
    #inner { padding: 20px; background: lightcoral; }
  </style>
</head>
<body>
  <div id="outer">外层（outer）
    <div id="middle">中层（middle）
      <div id="inner">内层（inner）</div>
    </div>
  </div>

  <script>
    // 步骤 2：获取 DOM 元素
    const outer = document.getElementById('outer');
    const middle = document.getElementById('middle');
    const inner = document.getElementById('inner');

    // 步骤 3：给每个元素绑定 5 个事件，打印日志
    [outer, middle, inner].forEach((el) => {
      // 1. mousemove：持续触发
      el.addEventListener('mousemove', () => {
        console.log(`${el.id} - mousemove：鼠标在${el.id}内移动`);
      });

      // 2. mouseenter：进入自身时触发
      el.addEventListener('mouseenter', () => {
        console.log(`${el.id} - mouseenter：鼠标进入${el.id}（自身）`);
      });

      // 3. mouseleave：离开自身时触发
      el.addEventListener('mouseleave', () => {
        console.log(`${el.id} - mouseleave：鼠标离开${el.id}（自身）`);
      });

      // 4. mouseover：进入自身或子元素时触发
      el.addEventListener('mouseover', () => {
        console.log(`${el.id} - mouseover：鼠标进入${el.id} 或 它的子元素`);
      });

      // 5. mouseout：离开自身或移到子元素时触发
      el.addEventListener('mouseout', () => {
        console.log(`${el.id} - mouseout：鼠标离开${el.id} 或 移到它的子元素`);
      });
    });
  </script>
</body>
</html>
```  


#### 步骤 2：操作 & 观察控制台日志  
打开浏览器控制台（F12），按以下步骤操作，看日志差异：  

1. **从外部进入外层（outer）**：  
   - 触发 `outer - mouseenter`（仅自身进入）。  
   - 若鼠标直接进 `inner`，还会触发 `outer - mouseover`（因为子元素属于 outer 范围）和 `middle - mouseover`、`inner - mouseenter`。  

2. **在外层内，从中层（middle）移到内层（inner）**：  
   - 触发 `outer - mouseout`（因为鼠标离开 outer 自身，移到子元素 middle → 实际是移到 inner，但 outer 只关心“是否离开自身”，所以触发）。  
   - 触发 `middle - mouseenter`（进入 middle 自身）。  
   - 触发 `middle - mouseover`（进入 middle 自身或子元素 inner）。  
   - 触发 `inner - mouseenter` 和 `inner - mouseover`。  

3. **从内层（inner）移到外层外**：  
   - 触发 `inner - mouseleave`（离开 inner 自身或移到外部）。  
   - 触发 `middle - mouseout`（离开 middle 自身或移到子元素外部 → 这里是移到外部，所以触发）。  
   - 触发 `outer - mouseleave`（离开 outer 自身）。  


### 四、总结：怎么选事件？  
- 做**菜单/弹窗展开收起** → 用 `mouseenter` + `mouseleave`（避免子元素干扰）。  
- 做**绘图/拖拽** → 用 `mousemove`（实时追踪位置）。  
- 需**感知子元素的进入/离开**（如统计子元素交互）→ 用 `mouseover` + `mouseout`。  


通过代码运行时的控制台日志，你可以更直观地理解“冒泡”和“非冒泡”、“自身 vs 子元素”对事件触发的影响~ 🚀