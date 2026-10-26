# 数据结构 第二章 线性表

> Arietids Learn · 个人课程复习笔记
> 在线阅读：https://learn.arietids.net/courses/data-structures/chapter-02/

> 课程：数据结构（上海交通大学 人工智能学院 张林峰）


>
> 贯穿本章的核心观点：**算法 + 数据结构 = 程序**。<!-- src: DS-C2-线性表#s2n; type: direct -->

---

## 1. 一元多项式的表示

### 1.1 问题与数学形式

- **一元多项式**：数学形式为 $f(x)=a_0x^0+a_1x^1+a_2x^2+\cdots+a_nx^n$。<!-- src: DS-C2-线性表#s4; type: direct -->
- **主要计算**：多项式之间的加法、减法、乘法。核心问题是「如何在计算机中存储多项式」。<!-- src: DS-C2-线性表#s4; type: direct -->
- 同一个问题可以有**不同的表示**（存全部项 / 只存非零项）和**不同的存储方法**（数组存储 / 链表存储）；它们的共性要求是：对**有序线性序列**的组织和管理。<!-- src: DS-C2-线性表#s18; type: direct -->

### 1.2 方法一：数组存储全部项

- **思路**：数组有第 0 项、第 1 项 … 第 n 项；一元多项式也有 $a_0,a_1,\dots,a_n$。让数组的每个元素（下标 $i$）存放对应项的系数 $a_i$，下标即指数。<!-- src: DS-C2-线性表#s5; type: direct -->
- **示例**：$f(x)=4x^5-3x^2+1$ 用数组 `a` 存为 $[\,1,\,0,\,-3,\,0,\,0,\,4\,]$（下标 0..5，分别是 $x^0\sim x^5$ 的系数）。<!-- src: DS-C2-线性表#s5g1; type: direct -->
- **加法实现**：多项式对应项的系数相加，即数组中对应位置元素相加。<!-- src: DS-C2-线性表#s6; type: direct -->
- **缺点**：<!-- src: DS-C2-线性表#s6; type: direct -->
  - 数组大小需要**预先定义**；
  - 存储成本浪费：若多项式中出现高次稀疏项（如 PPT 中的 $x+3x^{2000}$），仅为存储 $3x^{2000}$ 这一项就必须把数组开辟到 2000 次方那么大，造成大量空间浪费。

<details>
<summary>代码</summary>

```cpp
int num[6];
for (int i = 0; i < 6; i++)
    num[i] = 0;     // 初始化
num[0] = 1;
num[2] = -3;
num[5] = 4;
```

</details>
<!-- src: DS-C2-线性表#s6c1; type: direct -->


### 1.3 方法二：数组存储非零项

- **动机**：书写多项式时会省略系数为 0 的项；存储时也只记录**非零项**。<!-- src: DS-C2-线性表#s7; type: direct -->
- **非零项需要记录两个元素**：系数与指数，因此用类来实现一个项。<!-- src: DS-C2-线性表#s7; type: direct -->

<details>
<summary>代码</summary>

```cpp
class PolyTerm {
    private:
        double coefficient;  // 系数 a_i
        int exponent;        // 指数 i
};
```

</details>
<!-- src: DS-C2-线性表#s7c1; type: direct -->

- **存储布局**：每个 PolyTerm（系数, 指数）按数组下标顺序存入；数组下标只是非零项序号，项内另存该项的系数 $a_i$ 与实际指数。以上述 $P_1=9x^{12}+15x^8+3x^2$、$P_2=26x^{19}-4x^8-13x^6+82$ 为例：<!-- src: DS-C2-线性表#s8; type: direct -->

| 下标 $i$ | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| $P_1$ 系数 $a_i$ | 9 | 15 | 3 | — |
| $P_1$ 指数 $i$ | 12 | 8 | 2 | — |
| $P_2$ 系数 $a_i$ | 26 | -4 | -13 | 82 |
| $P_2$ 指数 $i$ | 19 | 8 | 6 | 0 |

（$P_2$ 的常数项 82 指数为 0）<!-- src: DS-C2-线性表#s8; type: direct -->

- **关键约定**：存储时保证**指数有序**（升序、降序均可），目的是为做加法时的便捷性。<!-- src: DS-C2-线性表#s8 + DS-C2-线性表#s16; type: direct -->

- **两非零项多项式相加（归并法）**：以 $P_1(x)=9x^{12}+15x^8+3x^2$、$P_2(x)=26x^{19}-4x^8-13x^6+82$ 求 $P_3=P_1+P_2$ 为例，逐项比较两表当前首项的指数：<!-- src: DS-C2-线性表#s9 + DS-C2-线性表#s10 + DS-C2-线性表#s11 + DS-C2-线性表#s12 + DS-C2-线性表#s13 + DS-C2-线性表#s14 + DS-C2-线性表#s15; type: synthesized -->
  - 指数较大者直接进入结果（取该项、该表指针后移）；
  - 指数相等时**系数相加**后进入结果（两表指针都后移；若相加为 0 则该项不保留）；
  - 一个表取完后，另一个表剩余项**直接拼接**到结果。
- 上例的归并过程：$12<19$ 取 $26x^{19}$ → $12>8$ 取 $9x^{12}$ → $8=8$ 取 $(15-4)x^8=11x^8$ → $2<6$ 取 $-13x^6$ → $2>0$ 取 $3x^2$ → $P_1$ 取完，拼接 $P_2$ 剩余项 $82$。结果 $P_3=26x^{19}+9x^{12}+11x^8-13x^6+3x^2+82$。<!-- src: DS-C2-线性表#s10 + DS-C2-线性表#s11 + DS-C2-线性表#s12 + DS-C2-线性表#s13 + DS-C2-线性表#s14 + DS-C2-线性表#s15; type: synthesized -->
- **局限**：数组存非零项解决了「全部项」的存储效率问题，但**仍需在计算前定义最大空间**——做加法前只能按最大可能（$P_1$ 的 3 项 + $P_2$ 的 4 项 = 7 项）估计结果大小并预分配，导致空间浪费。<!-- src: DS-C2-线性表#s16; type: direct -->

### 1.4 方法三：链表存储非零项

- **思路**：用链表存储非零元素，可以**不预先定义存储空间大小**。<!-- src: DS-C2-线性表#s17; type: direct -->

<details>
<summary>代码</summary>

```cpp
class PolyNode {
    private:
        double coefficient;  // 系数
        int exponent;        // 指数
        PolyNode* next;      // 指向下一个节点的指针
};
```

</details>
<!-- src: DS-C2-线性表#s17c1; type: direct -->

### 1.5 三种方法小结

| 方法 | 是否需预定义空间 | 空间效率 | 关键特点 |
|---|---|---|---|
| 数组存全部项 | 需要 | 低（稀疏时浪费） | 下标即指数，加法=对应位置相加 <!-- src: DS-C2-线性表#s6 + DS-C2-线性表#s18; type: synthesized --> |
| 数组存非零项 | 需要（按最大估计） | 中（仍有预分配浪费） | 类存 (系数,指数)，按指数有序，加法用归并 <!-- src: DS-C2-线性表#s16 + DS-C2-线性表#s18; type: synthesized --> |
| 链表存非零项 | 不需要 | 高 | 不预先定义空间 <!-- src: DS-C2-线性表#s17 + DS-C2-线性表#s18; type: synthesized --> |

---

## 2. 线性表

### 2.0 线性表的定义

#### 逻辑结构

- **定义**：线性表是由**同类型**的数据元素构成的**有序序列**的线性结构。<!-- src: DS-C2-线性表#s20; type: direct -->
- **长度**：表中元素的个数。没有元素时称为**空表**。<!-- src: DS-C2-线性表#s20; type: direct -->
- **表头 / 表尾**：起始位置为表头，结束位置为表尾。<!-- src: DS-C2-线性表#s20; type: direct -->
- **前驱 / 后继关系**：除表尾外，每个元素**有且仅有一个直接后继**元素；除表头外，每个元素**有且仅有一个直接前驱**元素。<!-- src: DS-C2-线性表#s20; type: direct -->

#### 抽象数据类型（ADT）

- **类型名称**：线性表（List）。**数据对象集**：$n\,(n\ge 0)$ 个同类型元素构成的有序序列。<!-- src: DS-C2-线性表#s21; type: direct -->
- **基本操作**：<!-- src: DS-C2-线性表#s21; type: direct -->

| 操作 | 接口（伪代码） |
|---|---|
| 创建线性表 | `List MakeEmpty()` <!-- src: DS-C2-线性表#s21; type: direct --> |
| 查找第 K 个位置元素的值 | `Type FindKth(int K, List L)` <!-- src: DS-C2-线性表#s21; type: direct --> |
| 查找 X 元素的位置 | `int Find(Type X, List L)` <!-- src: DS-C2-线性表#s21; type: direct --> |
| 在某位置插入元素 | `void Insert(Type X, int i, List L)` <!-- src: DS-C2-线性表#s21; type: direct --> |
| 删除指定位置元素 | `void Delete(int i, List L)` <!-- src: DS-C2-线性表#s21; type: direct --> |
| 返回线性表长度 | `int Length(List L)` <!-- src: DS-C2-线性表#s21; type: direct --> |

### 2.1 线性表的数组存储（顺序存储）

#### 定义

- **思路**：利用数组的**连续存储空间**顺序存放线性表的各元素；序号 0,1,2,…,MAXSIZE-1。<!-- src: DS-C2-线性表#s24; type: direct -->

<details>
<summary>代码</summary>

```cpp
class LinearList {
    private:
        int* data;  // 存储线性表数据(int)的数组
        int size;   // 线性表当前的逻辑大小，上图为 4
};
```

</details>
<!-- src: DS-C2-线性表#s24c1; type: direct -->

- 先用具体的 `int` 版本（`int* data`，对应上图 a0~a3 共 4 个元素）说明顺序存储思路；随后改写为模板版本以支持任意元素类型：<!-- src: DS-C2-线性表#s24 + DS-C2-线性表#s25; type: synthesized -->

<details>
<summary>代码</summary>

```cpp
template <typename T>
class LinearList {
    private:
        T* data;           // 存储线性表数据的动态数组
        int size;          // 线性表当前的逻辑大小
};
```

</details>
<!-- src: DS-C2-线性表#s25c1; type: direct -->


#### 创建与清除（构造 / 析构）

<details>
<summary>代码</summary>

```cpp
// 构造函数
LinearList(int initialCapacity = MAXSIZE) {
    data = new T[initialCapacity];  // 分配空间
    size = 0;                       // 当前元素数量
}
// 析构函数
~LinearList() {
    delete[] data;
}
```

</details>
<!-- src: DS-C2-线性表#s26c1; type: direct -->

- 构造和析构的操作数量与数据规模无关，复杂度 **O(1)**。<!-- src: DS-C2-线性表#s26; type: direct -->
- **为何用 `new T[initialCapacity]` 而不能 `T data[initialCapacity]`**：<!-- src: DS-C2-线性表#s26; type: direct -->
  - ① 语法上，`initialCapacity` 是变量而非常量，C++ 无法以变量声明数组大小；
  - ② 存储上，`new` 构建的数据分配在**堆**上，而 `T data[MAXSIZE]` 声明的数据分配在**栈**上。

##### 延伸：堆与栈的对比

| | 栈（Stack） | 堆（Heap） |
|---|---|---|
| 含义 | 程序运行时自动管理的内存区域，存局部变量、函数调用上下文等；大小程序运行期间固定，通常较小 <!-- src: DS-C2-线性表#s29; type: direct --> | 程序运行时动态分配/释放的较大内存区域，可动态扩展，由程序员手动管理 <!-- src: DS-C2-线性表#s29; type: direct --> |
| 管理方式 | **自动管理**：分配和释放由编译器自动完成 <!-- src: DS-C2-线性表#s29; type: direct --> | **动态管理**：通过 `new`/`malloc` 分配、`delete`/`free` 释放，由程序员决定，灵活 <!-- src: DS-C2-线性表#s29; type: direct --> |
| 大小 | **大小受限**（几百 KB ~ 几 MB），超限导致栈溢出（Stack Overflow） <!-- src: DS-C2-线性表#s29; type: direct --> | **大小灵活**，通常比栈大很多，可存较大数据结构 <!-- src: DS-C2-线性表#s29; type: direct --> |

#### 查找

- **按位置查找** `find_pos(int index)`：访问不合法（`index<0 || index>=size`）返回 NULL，否则返回 `data[index]`；与数据规模无关，复杂度 **O(1)**。<!-- src: DS-C2-线性表#s30; type: direct -->
- **按数值查找** `find_value(int value)`：遍历数组找到则返回下标，**返回 -1 表示未找到**；最差情况要找 N 次，复杂度 **O(N)**。<!-- src: DS-C2-线性表#s31; type: direct -->

<details>
<summary>代码</summary>

```cpp
int find_value(int value) {
    int result = -1;
    for (int i = 0; i < size; i++) {
        if (value == data[i]) { result = i; break; }
    }
    return result;
}
```

</details>
<!-- src: DS-C2-线性表#s31c1; type: direct -->

#### 插入

- **规则**：在指定位置插入元素时必须**先挪后放**——先把该位置及其后的元素整体向后挪一格，再放入新元素，表长度 +1。<!-- src: DS-C2-线性表#s32; type: direct -->
- **易错点**：若**先放后挪**（先写入新元素），会覆盖掉原位置元素，是错误做法。<!-- src: DS-C2-线性表#s33; type: direct -->

<details>
<summary>代码</summary>

```cpp
void insert(int index, const T& value) {
    if (index < 0 || index > size || size == MAXSIZE) {
        cout << "error." << endl;
        return;
    }
    for (int i = size; i > index; --i)
        data[i] = data[i - 1];   // 把元素向后挪
    data[index] = value;
    size++;
    return;
}
```

</details>
<!-- src: DS-C2-线性表#s35c1; type: direct -->


- **复杂度**：参数/空间检查 O(1) + 写入 O(1) + 挪动 O(N) = **O(N)**。运气最好只需挪一次，最差需挪 N 次，按最差估计「挪」为 O(N)。<!-- src: DS-C2-线性表#s35; type: direct -->

#### 删除

- **规则**：删除指定位置元素时，把待删位置**之后的元素依次向前移动一格**（覆盖被删元素），表长度 -1。<!-- src: DS-C2-线性表#s37 + DS-C2-线性表#s38; type: synthesized -->

<details>
<summary>代码</summary>

```cpp
void remove(int index) {
    if (index < 0 || index >= size) {
        cout << "Error: Index out of range for removal." << endl;
        return;
    }
    for (int i = index; i < size - 1; ++i)
        data[i] = data[i + 1];
    size--;
    return;
}
```

</details>
<!-- src: DS-C2-线性表#s38c1; type: direct -->

- **复杂度**：O(1) + O(1) + 挪动 O(N) = **O(N)**。<!-- src: DS-C2-线性表#s38; type: direct -->

### 2.2 线性表的链表存储（链式存储）

#### 定义

- **核心思想**：不要求逻辑上相邻的两个元素物理上也相邻；通过**指针**建立数据元素之间的逻辑关系。<!-- src: DS-C2-线性表#s44; type: direct -->
- 结点结构：`Head → [data|Next] → [data|Next] → … → [data|NULL]`。<!-- src: DS-C2-线性表#s44g1; type: direct -->

<details>
<summary>代码</summary>

```cpp
class Node {
  public:
    int data;       // 数据
    Node* next;     // 指针
    Node(int val) { // 构造函数
        data = val;
        next = NULL;
        return;
    }
};
class LinkedList {
  public:
    Node* head;     // 头指针
};
```

</details>
<!-- src: DS-C2-线性表#s44c1; type: direct -->

#### 构造与析构

<details>
<summary>代码</summary>

```cpp
LinkedList() { head = NULL; }     // 构造函数
~LinkedList() {                   // 析构函数：逐结点释放
    while (head != nullptr) {
        Node* temp = head;
        head = head->next;
        delete temp;
    }
}
```

</details>
<!-- src: DS-C2-线性表#s45c1; type: direct -->

#### 查找

- **按值查找** `search(int val)`：从 head 沿 next 遍历比较，找到返回 true，遍历到 nullptr 返回 false。复杂度 **O(N)**。<!-- src: DS-C2-线性表#s46; type: direct -->
- **按位置查找** `get(int pos)`：先判 `pos < 0 || head == nullptr`（位置为负**或链表为空**）则输出 `"Invalid position or list is empty!"` 返回 -1；否则从 head 沿 next 走 `pos` 步（`count < pos`），若中途 `current == nullptr`（位置越界）输出 `"Position out of range!"` 返回 -1，否则返回该结点数据 `current->data`。复杂度 **O(N)**。<!-- src: DS-C2-线性表#s47; type: direct -->

#### 插入（O(N)）

- 先定位到插入位置的**前驱结点**（走 `pos-1` 步），再做指针接续；`pos==0` 时直接更新 head。<!-- src: DS-C2-线性表#s49; type: direct -->

<details>
<summary>代码</summary>

```cpp
void insert(int pos, int val) {
    if (pos < 0) { cout << "Invalid position!" << endl; return; }
    Node* newNode = new Node(val);
    if (pos == 0) {
        newNode->next = head; head = newNode;
    } else {
        Node* current = head; int count = 0;
        while (current != nullptr && count < pos - 1) { current = current->next; count++; }
        if (current == nullptr) { cout << "Position out of range!" << endl; delete newNode; return; }
        newNode->next = current->next;
        current->next = newNode;
    }
}
```

</details>
<!-- src: DS-C2-线性表#s49c1; type: direct -->

#### 删除（O(N)）—— 详解（以删第 3 个元素 pos=3 为例）

- **定位**：`current=head; count=0;` 循环 `while(current!=nullptr && count<pos-1)` 前移；当 `count=2`，`2<3-1` 为 False 跳出，`current` 停在待删结点的**前驱**。<!-- src: DS-C2-线性表#s53 + DS-C2-线性表#s54 + DS-C2-线性表#s55; type: synthesized -->
- **删除三步**（必须先用 `temp` 保存待删结点）：<!-- src: DS-C2-线性表#s56 + DS-C2-线性表#s57 + DS-C2-线性表#s58; type: direct -->

<details>
<summary>代码</summary>

```cpp
Node* temp;
temp = current->next;        // 保存待删结点
current->next = temp->next;  // 前驱直接指向待删结点的后继
delete temp;                 // 释放
```

</details>
<!-- src: DS-C2-线性表#s56c1; type: direct -->

- 上述三步执行完毕后，待删（第 3 个）结点被正确摘除并释放，**删除成功**；与后文「错误写法」导致删除失败形成正反对照。<!-- src: DS-C2-线性表#s58; type: direct -->

- **错误写法（易错点）**：<!-- src: DS-C2-线性表#s60 + DS-C2-线性表#s61 + DS-C2-线性表#s62; type: synthesized -->

<details>
<summary>代码</summary>

```cpp
current->next = current->next->next;  // 先改前驱指针
delete current->next;                 // 此时再 delete
```

</details>
原因：当 `current->next` 已被改指向后继后，**第三个（待删）元素已经没有任何指针指向它，无法完成删除**（进而造成内存泄漏）。所以必须**先保存 `temp` 再改指针**。<!-- src: DS-C2-线性表#s62; type: synthesized -->


- 完整 `remove(int pos)`：`pos<0 || head==nullptr` 判非法；`pos==0` 直接 `temp=head; head=head->next; delete temp;`；否则先定位前驱再做三步删除，并判 `current==nullptr || current->next==nullptr` 越界。<!-- src: DS-C2-线性表#s51; type: compressed -->


#### 链表实现 vs 数组实现：时间复杂度对比

| 操作 | 数组（顺序存储） | 链表（链式存储） |
|---|---|---|
| 创建数据结构 | O(1) <!-- src: DS-C2-线性表#s66; type: direct --> | O(1) <!-- src: DS-C2-线性表#s66; type: direct --> |
| 删除数据结构 | O(1) <!-- src: DS-C2-线性表#s66; type: direct --> | O(N) <!-- src: DS-C2-线性表#s66; type: direct --> |
| 指定位置插入元素 | O(N) <!-- src: DS-C2-线性表#s66; type: direct --> | O(N) <!-- src: DS-C2-线性表#s66; type: direct --> |
| 指定位置删除元素 | O(N) <!-- src: DS-C2-线性表#s66; type: direct --> | O(N) <!-- src: DS-C2-线性表#s66; type: direct --> |
| 在头部插入元素 | O(N) <!-- src: DS-C2-线性表#s66; type: direct --> | O(1) <!-- src: DS-C2-线性表#s66; type: direct --> |
| 在尾部插入元素 | O(1) <!-- src: DS-C2-线性表#s66; type: direct --> | O(N) <!-- src: DS-C2-线性表#s66; type: direct --> |
| 按位置查找/访问元素 | O(1) <!-- src: DS-C2-线性表#s66; type: direct --> | O(N) <!-- src: DS-C2-线性表#s66; type: direct --> |
| 访问方式 | **随机访问** <!-- src: DS-C2-线性表#s66; type: direct --> | **顺序访问** <!-- src: DS-C2-线性表#s66; type: direct --> |

- **本质原因**：数组采用顺序存储（内存中连续），支持**随机访问**；链表采用链式存储（借助指针指示逻辑关系），支持**顺序访问**。<!-- src: DS-C2-线性表#s66; type: direct -->

#### 课堂练习：反转链表

- **题目**：给定一个链表实现的线性表，如何实现链表的反转？（链表带头结点，见下图）<!-- src: DS-C2-线性表#s67 + DS-C2-线性表#s70g1; type: synthesized -->
- **初始状态**：带头结点的链表 head→头结点→0→1→2→…→99→nil（元素 0..99 的有序单链表）。<!-- src: DS-C2-线性表#s70 + DS-C2-线性表#s70g1; type: direct -->
- **方法（头插法）**：用 `begin`、`end` 两个辅助指针，反复把 `begin` 之后的结点摘下、插到头结点之后，实现就地反转。关键步骤序列：<!-- src: DS-C2-线性表#s71 + DS-C2-线性表#s72 + DS-C2-线性表#s73 + DS-C2-线性表#s74 + DS-C2-线性表#s76; type: synthesized -->
  - `begin = head.next; end = head.next;`
  - `begin.next = end.next;`（把 end 从链上摘下）
  - `end.next = head.next;`（end 指向当前首结点）
  - `head.next = end;`（end 成为新的首结点）
  - `end = begin.next;`（取下一个待移动结点，循环）
- **思考题**：该算法的时间复杂度与空间复杂度是多少？（PPT 提出问题）<!-- src: DS-C2-线性表#s76; type: direct -->

### 2.3 链表变体

#### 单循环链表

- **定义**：末结点的 next 不再指向空，而是**指向头结点**；空单向循环链表只有头结点。<!-- src: DS-C2-线性表#s78; type: direct -->（由空表示意图可见此时头结点的 next 指回自身）<!-- src: DS-C2-线性表#s78g1; type: synthesized -->
- **优点**：从表中任何一个结点出发，都可以顺 next 指针访问到所有结点。<!-- src: DS-C2-线性表#s78; type: direct -->

#### 不带头结点的单循环链表

- 为循环方便，不带头结点的单循环链表居多，head 直接指向首结点；空表时 head 指向空。<!-- src: DS-C2-线性表#s79; type: direct -->
- **典型应用**：约瑟夫环（Josephus 问题）。<!-- src: DS-C2-线性表#s79; type: direct -->

#### 双向链表

- **定义**：每个结点有 `prior` 和 `next` 两个指针，分别指向**直接前驱**和**直接后继**结点；空双向链表只有头、尾结点。<!-- src: DS-C2-线性表#s81; type: direct -->
- **优点**：可根据待查元素在前半段还是后半段，决定自 head 向后还是自 tail 向前查找；需要一个参数 `length` 来辅助判断。<!-- src: DS-C2-线性表#s81; type: direct -->

<details>
<summary>代码</summary>

```cpp
class Node {
  public:
    int data;       // 数据
    Node* next;     // 后一个指针
    Node* prev;     // 前一个指针
    Node(int val) { data = val; next = nullptr; prev = nullptr; }
};
class LinkedList {
  private:
    Node* head;     // 头指针
    Node* tail;     // 尾指针
  public:
    LinkedList() {
        head = new Node(0);
        tail = new Node(0);
        head->next = tail;
        tail->prev = head;
    }
};
```

</details>
<!-- src: DS-C2-线性表#s82c1; type: direct -->

- 构造时 `new Node(0)` 建立头、尾两个哨兵结点，并令 `head->next=tail`、`tail->prev=head`，得到只含头、尾结点的空双向链表。<!-- src: DS-C2-线性表#s82c1; type: synthesized -->

- **插入**（将元素 x 插入到 p 所指结点之后），注意指针赋值顺序：<!-- src: DS-C2-线性表#s85; type: direct -->

<details>
<summary>代码</summary>

```cpp
Node* tmp = new Node(x);  // ① 新建结点并写入数据
tmp->prev = p;
tmp->next = p->next;
tmp->prev->next = tmp;    // ③ 前驱的 next 指向 tmp
tmp->next->prev = tmp;    // ④ 后继的 prev 指向 tmp
```

</details>
<!-- src: DS-C2-线性表#s85c1; type: direct -->


- 必须**先设好 `tmp->prev`、`tmp->next`，再更新相邻结点的指针**；若新结点插入在**首结点位置**，操作又有不同。<!-- src: DS-C2-线性表#s85; type: direct -->

#### 双向循环链表

- **定义**：不带头、尾结点的双向循环链表；空双向链表时 head 指向 NULL。<!-- src: DS-C2-线性表#s83; type: direct -->

<details>
<summary>代码</summary>

```cpp
class Node {
  public:
    int data;
    Node* next;     // 后一个指针
    Node* prev;     // 前一个指针
    Node(int val) { data = val; next = nullptr; prev = nullptr; }
};
class LinkedList {
  private:
    Node* head;     // 头指针
  public:
    LinkedList() { head = nullptr; }
};
```

</details>
<!-- src: DS-C2-线性表#s84c1; type: direct -->

---


## 5. 本章小结

- **四个分析方面**（也是后续讨论任何数据结构的方法与脉络）：逻辑结构、物理结构、基本操作实现、典型应用。<!-- src: DS-C2-线性表#s139; type: direct -->
- **逻辑结构与基本操作分析**：用伪代码书写的抽象数据类型（ADT）描述结构中的元素、元素间关系和常见基本操作；常见基本操作源自生活观察，一般分为：结构构造类、属性类、数据操纵类、遍历类、典型应用类。<!-- src: DS-C2-线性表#s139; type: direct -->
- **物理结构分析**：讨论了**顺序存储法**（连续空间，用存储位置的先后体现元素先后关系）与**链式存储法**（不连续存储，通过对每个元素附加指针来表示元素间关系），并给出两种结构的类型描述；此阶段建议学习者回顾并复习本书采用的 **C++ 语言**语法。<!-- src: DS-C2-线性表#s140; type: direct -->
- **基本操作实现及分析**：对顺序结构与链式结构的典型操作进行算法设计、实现与复杂度分析；掌握设计相对完整程序的**"五步法"**——参数分析、空间检查、核心操作、对其他属性的影响、正确返回；通过复杂度分析了解两种存储结构的优缺点与适用场合。<!-- src: DS-C2-线性表#s141; type: direct -->


---

## 6. 作业

- 通过**链表**存储结构实现一元多项式的：① 八大基础算法（建表、删表、遍历、求表长、增、删、改、查）；② 加法、乘法算法；③ 并分析以上算法的时间、空间复杂度。<!-- src: DS-C2-线性表#s143; type: direct -->


- （选做）通过合适数据结构实现**大整数加法**。<!-- src: DS-C2-线性表#s143; type: direct -->
