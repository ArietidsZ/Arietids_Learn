---
title: "数据结构 第二章 线性表 · 速览"
description: "数据结构课程笔记：数据结构 第二章 线性表 · 速览。"
---

<div class="note-meta"><a href="/courses/data-structures/">数据结构目录</a><a href="/courses/data-structures/chapter-02/">阅读详版</a><a href="/downloads/data-structures/chapter-02-quick.md" download>下载 Markdown</a></div>

## 一元多项式

- 一元多项式 $f(x)=a_0x^0+\cdots+a_nx^n$；三种存储：数组存全部项 / 数组存非零项 / 链表存非零项。<!-- src: DS-C2-线性表#s4 + DS-C2-线性表#s18; type: compressed -->
- **数组存全部项**：下标即指数，加法 = 对应位置系数相加；缺点：须预定义大小，高次稀疏项（如 $x+3x^{2000}$）极度浪费空间。<!-- src: DS-C2-线性表#s5 + DS-C2-线性表#s6; type: compressed -->
- **数组存非零项**：用类 PolyTerm 存 (系数, 指数)，**按指数有序**存放（便于加法）；加法用**归并**：比较两表当前首项指数，大者直接取、相等则系数相加、一表取完拼接另一表剩余项；缺点仍须按最大可能（m+n 项）预分配。<!-- src: DS-C2-线性表#s7 + DS-C2-线性表#s8 + DS-C2-线性表#s16; type: compressed -->
- **链表存非零项**：PolyNode{coefficient, exponent, next}，**不需预定义空间**。<!-- src: DS-C2-线性表#s17; type: compressed -->

## 线性表定义

- **线性表**：同类型元素构成的有序序列；长度 = 元素个数；无元素为空表；除表尾每元素有唯一直接后继，除表头每元素有唯一直接前驱。<!-- src: DS-C2-线性表#s20; type: compressed -->
- **ADT 操作**：MakeEmpty、FindKth(按位置)、Find(按值)、Insert、Delete、Length。<!-- src: DS-C2-线性表#s21; type: compressed -->

## 数组存储（顺序存储）

- 连续空间顺序存放；`LinearList{ T* data; int size; }`，`new` 分配在**堆**。构造/析构 O(1)。<!-- src: DS-C2-线性表#s24 + DS-C2-线性表#s26; type: compressed -->
- 用 `new T[n]` 而非 `T data[n]`：① 变量不能作数组大小；② `new` 在堆、栈数组在栈。**栈**：自动管理、大小受限（溢出 Stack Overflow）；**堆**：手动 new/delete、灵活大。<!-- src: DS-C2-线性表#s26 + DS-C2-线性表#s29; type: compressed -->
- 按位置查找 O(1)（随机访问，越界返 NULL）；按值查找 O(N)（未找到返 -1）。<!-- src: DS-C2-线性表#s30 + DS-C2-线性表#s31; type: compressed -->
- **插入** O(N)：**先挪后放**——先把该位及其后元素向后挪一格再写入（先放会覆盖，错）；越界/满则报错。<!-- src: DS-C2-线性表#s32 + DS-C2-线性表#s33 + DS-C2-线性表#s35; type: compressed -->
- **删除** O(N)：把待删位之后元素依次前移一格覆盖，长度 -1。<!-- src: DS-C2-线性表#s37 + DS-C2-线性表#s38; type: compressed -->

## 链表存储（链式存储）

- 逻辑相邻不要求物理相邻，靠指针建立关系；`Node{int data; Node* next;}`、`LinkedList{Node* head;}`。<!-- src: DS-C2-线性表#s44; type: compressed -->
- 按值查找、按位置查找均 O(N)；插入、删除均 O(N)（须先定位**前驱**，走 pos-1 步）。<!-- src: DS-C2-线性表#s46 + DS-C2-线性表#s47 + DS-C2-线性表#s49; type: compressed -->
- **删除三步（易错）**：`temp=current->next; current->next=temp->next; delete temp;`——**必须先用 temp 保存**待删结点，否则先改前驱指针会使待删结点失去引用、无法删除（内存泄漏）。<!-- src: DS-C2-线性表#s56 + DS-C2-线性表#s62; type: compressed -->


### 数组 vs 链表 复杂度（必背）

| 操作 | 数组 | 链表 |
|---|---|---|
| 创建 | O(1) | O(1) <!-- src: DS-C2-线性表#s66; type: direct --> |
| 删除结构 | O(1) | O(N) <!-- src: DS-C2-线性表#s66; type: direct --> |
| 指定位置 插入/删除 | O(N)/O(N) | O(N)/O(N) <!-- src: DS-C2-线性表#s66; type: direct --> |
| 头部插入 | O(N) | O(1) <!-- src: DS-C2-线性表#s66; type: direct --> |
| 尾部插入 | O(1) | O(N) <!-- src: DS-C2-线性表#s66; type: direct --> |
| 按位置查找/访问元素 | O(1) | O(N) <!-- src: DS-C2-线性表#s66; type: direct --> |
| 访问 | 随机访问 | 顺序访问 <!-- src: DS-C2-线性表#s66; type: direct --> |

- 数组顺序存储（连续）→ 随机访问；链表链式存储（指针）→ 顺序访问。<!-- src: DS-C2-线性表#s66; type: direct -->
- **反转链表（头插法）**：begin、end 辅助指针，反复把 begin 之后结点摘下插到头结点后；就地反转。<!-- src: DS-C2-线性表#s71 + DS-C2-线性表#s76; type: compressed -->

## 链表变体

- **单循环链表**：末结点 next 指向头结点；从任一结点出发可遍历全部。<!-- src: DS-C2-线性表#s78; type: compressed -->
- **不带头结点单循环链表**：head 直接指首结点；典型应用**约瑟夫环**。<!-- src: DS-C2-线性表#s79; type: compressed -->
- **双向链表**：每结点有 prev、next；可按元素在前/后半段决定从 head 向后或从 tail 向前查（需 length 辅助）。插入到 p 之后须**先设 tmp 的 prev/next，再改相邻结点指针**；插在首结点位置操作不同。<!-- src: DS-C2-线性表#s81 + DS-C2-线性表#s85; type: compressed -->
- **双向循环链表**：不带头尾结点。<!-- src: DS-C2-线性表#s83; type: compressed -->


## 方法论小结

- 研究任何数据结构的四方面：逻辑结构、物理结构、基本操作实现、典型应用；操作分结构构造/属性/数据操纵/遍历/典型应用类。<!-- src: DS-C2-线性表#s139; type: compressed -->
- 设计完整程序的**五步法**：参数分析、空间检查、核心操作、对其他属性的影响、正确返回。<!-- src: DS-C2-线性表#s141; type: direct -->
