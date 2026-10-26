---
title: "第三章 栈和队列 · 速览"
description: "数据结构课程笔记：第三章 栈和队列 · 速览。"
---

<div class="note-meta"><a href="/courses/data-structures/">数据结构目录</a><a href="/courses/data-structures/chapter-03/">阅读详版</a><a href="/downloads/data-structures/chapter-03-quick.md" download>下载 Markdown</a></div>

## 一、栈（Stack）

### 定义与操作

- **栈**：操作受限的线性表，只在表尾（栈顶）做插入/删除；**LIFO 后进先出**。插入=入栈 Push，删除=出栈 Pop。<!-- src: DS-C3-StackQueue#s021; type: compressed -->
- **基本操作**：Push（加到栈顶）、Pop（移除并返回栈顶）、Top（返回栈顶不移除）、isEmpty（判空）。<!-- src: DS-C3-StackQueue#s018; type: compressed -->
- **术语**：栈底 bottom（最早到达）；栈顶 top（最晚到达）；插入/删除都必须在栈顶；元素个数为零时为空栈。<!-- src: DS-C3-StackQueue#s022 + DS-C3-StackQueue#s023; type: compressed -->
- **ADT 复杂度**：initialize / isEmpty / top / push / pop 均 $O(1)$；抽象表中 destroy 为 $O(n)$，但具体顺序栈析构本页标 $O(1)$、链式栈析构 $O(N)$。<!-- src: DS-C3-StackQueue#s024 + DS-C3-StackQueue#s029 + DS-C3-StackQueue#s036; type: compressed -->
- **出栈序列**：按 A、B、C 入栈并非所有排列都合法；如**无法得到 CAB**（C 先出则 A 在 B 之下，A 不能早于 B 出）。<!-- src: DS-C3-StackQueue#s025; type: compressed -->

### 顺序栈（seqStack，动态数组）

- 连续空间；栈底在 0 下标；**栈空 `top = -1`**，**栈满 `top = maxSize-1`**。<!-- src: DS-C3-StackQueue#s027; type: compressed -->
- `push`：满则 `doubleSpace()`，`elem[++top_p]=x`；`pop`：`return elem[top_p--]`。<!-- src: DS-C3-StackQueue#s031; type: compressed -->
- `doubleSpace()` 容量翻倍，$O(N)$；**均摊后** push/pop/isEmpty/top 均 $O(1)$（均摊法）。构造/析构本页标 $O(1)$。<!-- src: DS-C3-StackQueue#s030 + DS-C3-StackQueue#s031 + DS-C3-StackQueue#s029; type: compressed -->
- 不做自动扩容则需 `isFull()`；`isEmpty/top` 不改成员，用 `const`。<!-- src: DS-C3-StackQueue#s030 + DS-C3-StackQueue#s032; type: compressed -->

### 链式栈（linkStack，单链表）

- `top_p` 指栈顶=单链表首结点；结点类为私有内嵌类。<!-- src: DS-C3-StackQueue#s034 + DS-C3-StackQueue#s035; type: compressed -->
- `push`：`top_p = new node(x, top_p)`（一行：建结点+指向原顶+顶移到新结点）。<!-- src: DS-C3-StackQueue#s037; type: compressed -->
- push/pop/isEmpty/top 均 $O(1)$；构造 $O(1)$、析构 $O(N)$（逐结点释放）。<!-- src: DS-C3-StackQueue#s036 + DS-C3-StackQueue#s037 + DS-C3-StackQueue#s038; type: compressed -->

### 栈的应用：表达式求值

- 三式：**中缀**（符人类、不符计算机）、**后缀/逆波兰**（符计算机、无需括号）、**前缀/波兰**。<!-- src: DS-C3-StackQueue#s040; type: compressed -->
- **中缀→后缀**：操作数直接输出；`(` 入栈；`)` 弹栈输出直到 `(`（**括号都不输出**）；普通左结合运算符弹出栈顶**优先级≥当前**者再入栈，右结合运算符例外；扫描完弹出剩余。<!-- src: DS-C3-StackQueue#s054 + DS-C3-StackQueue#s063; type: compressed -->
- **易错**：`(` 入栈时优先级最高、在栈内时最低（仅遇 `)` 才弹）。例 `a*(b+c)/d`→`a b c + * d /`。<!-- src: DS-C3-StackQueue#s048 + DS-C3-StackQueue#s053; type: compressed -->
- **后缀计算**：操作数入栈；遇运算符弹**两个**计算后入栈；最终栈顶为结果。例 `5 7 2 3 * - * 8 2 / +`=9。<!-- src: DS-C3-StackQueue#s056 + DS-C3-StackQueue#s057; type: compressed -->
- 两步（转换+计算）可合并为一次扫描。<!-- src: DS-C3-StackQueue#s058; type: compressed -->
- `calc`：枚举顺序 `OPAREN,ADD,SUB,MULTI,DIV,EXP,CPAREN,VALUE,EOL` 蕴含优先级比较（`opStack.top()>=MULTI`）；`EXP` 直接入栈，连续乘方按右结合；`BinaryOp` 先弹 `num2`(右)后弹 `num1`(左)。<!-- src: DS-C3-StackQueue#s059 + DS-C3-StackQueue#s063 + DS-C3-StackQueue#s061 + DS-C3-StackQueue#s064; type: compressed -->

### 栈小结

- 栈=操作受限线性表；用于符号匹配、表达式计算、函数调用/递归；**顺序存储最常用**。<!-- src: DS-C3-StackQueue#s066; type: compressed -->

---

## 二、队列（Queue）

### 定义与操作

- **队列**：一端插入（enQueue 队尾）、另一端删除（deQueue 队首）；**FIFO 先进先出**。<!-- src: DS-C3-StackQueue#s072; type: compressed -->
- **ADT**：initialize / isEmpty / getHead（队首非空）/ enQueue（非满）/ deQueue（非空）/ destroy。<!-- src: DS-C3-StackQueue#s073; type: compressed -->

### 顺序队列与顺序循环队列（seqQueue）

- 三种组织：队头**固定**（出队大量移动）、队头**不固定**（全 $O(1)$ 但浪费空间）、**循环队列**（取模复用空间）。<!-- src: DS-C3-StackQueue#s075 + DS-C3-StackQueue#s077 + DS-C3-StackQueue#s078; type: compressed -->
- 入队 `rear=(rear+1)%MaxSize; elem[rear]=x`；出队 `front=(front+1)%MaxSize`。<!-- src: DS-C3-StackQueue#s080; type: compressed -->
- **牺牲一个单元**：front 指向的单元不存元素（其后一个才是队首）。**队空 `rear==front`**，**队满 `(rear+1)%maxSize==front`**。<!-- src: DS-C3-StackQueue#s083 + DS-C3-StackQueue#s084; type: compressed -->
- 动态数组 + `doubleSpace()`；构造/判空/出队/取队首 $O(1)$，析构 $O(N)$，进队均摊 $O(1)$。<!-- src: DS-C3-StackQueue#s085 + DS-C3-StackQueue#s086 + DS-C3-StackQueue#s087; type: compressed -->

### 链式队列（linkQueue，单链表）

- 单链表即可（不需双链表）；`front` 指队首、`rear` 指队尾。**队空 `front==rear==NULL`，不存在队满**。<!-- src: DS-C3-StackQueue#s089; type: compressed -->
- 判空/取队首/入队/出队均 $O(1)$；构造 $O(1)$、析构 $O(N)$。<!-- src: DS-C3-StackQueue#s091 + DS-C3-StackQueue#s092; type: compressed -->
- **边界**：入队若 `rear==NULL` 须同设 front=rear；出队后若 `front==NULL` 须把 rear 置 NULL。<!-- src: DS-C3-StackQueue#s092; type: compressed -->

### 优先队列（Priority Queue）

- 带**优先数**（一般**越小优先级越高**），高优先级先出，**同级 FIFO**。<!-- src: DS-C3-StackQueue#s095; type: compressed -->
- **顺序**：策略一 进队 $O(1)$/出队找最高 $O(n)$（出队用末元素填空，无需循环；严格同级 FIFO 需额外稳定处理）；策略二 进队按序插入 $O(n)$/出队取队首 $O(1)$。<!-- src: DS-C3-StackQueue#s095 + DS-C3-StackQueue#s098 + DS-C3-StackQueue#s100; type: compressed -->
- **链式**：策略一 进队尾 $O(1)$/出队找最高 $O(n)$；策略二 有序链表（首结点优先级最高）出队 $O(1)$/进队找位插入 $O(n)$（不移动原有元素）。<!-- src: DS-C3-StackQueue#s101; type: compressed -->
- 进队/出队复杂度为 $O(1)$、$O(n)$ 或 $O(n)$、$O(1)$；用**堆**（二叉树）可降到 $O(\log_2 n)$。<!-- src: DS-C3-StackQueue#s115; type: compressed -->

### 队列的应用：排队系统模拟

- **模拟**=计算机仿真现实系统收集统计；优点：无需真实顾客、速度快、结果可重现。<!-- src: DS-C3-StackQueue#s102; type: compressed -->
- **事件驱动**：事件按时间排队，处理完直接拨到下一事件；到达间隔 $[a,b]$、服务时间 $[c,d]$ 均匀分布；统计平均等待时间/队列长度/利用率。<!-- src: DS-C3-StackQueue#s103; type: compressed -->
- **单服务台**：一个队列；① 生成全部到达事件入队；② 队头服务前累计等待时间；③ 返回累计/顾客数。用 `rand()`。<!-- src: DS-C3-StackQueue#s105 + DS-C3-StackQueue#s108; type: compressed -->

### 单调队列

- 满足单调性的**双向队列**；新元素破坏单调性就从队尾弹出直到满足再入队；用于**滑动窗口每 k 个连续数的最值**。<!-- src: DS-C3-StackQueue#s111; type: compressed -->
- 求最小值时队列对应值单调递增、队首即窗口最小值；队中存**下标**，队首下标 `≤ i-k` 则出队。<!-- src: DS-C3-StackQueue#s113; type: compressed -->

### 队列小结

- 队列=两端分别插入/删除的线性表；用于打印队列、进程队列等。<!-- src: DS-C3-StackQueue#s114; type: compressed -->
- 顺序循环存储（进队按动态扩容作均摊分析）与链式存储常见操作均 $O(1)$；考虑链式结点额外开销，**顺序循环队列最常用**。<!-- src: DS-C3-StackQueue#s087 + DS-C3-StackQueue#s114; type: compressed -->
