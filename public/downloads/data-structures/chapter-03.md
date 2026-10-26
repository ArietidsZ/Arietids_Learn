# 第三章 栈和队列

> Arietids Learn · 个人课程复习笔记
> 在线阅读：https://learn.arietids.net/courses/data-structures/chapter-03/

## 一、栈（Stack）

### 1.1 括号匹配：问题引入与算法思想

- **引入问题**：编译器遇到括号不匹配的代码会报错（如 `error: expected '}'`），核心问题是"编译器如何快速定位括号匹配错误"。<!-- src: DS-C3-StackQueue#s003; type: direct -->
- **括号匹配规则**：从左往右遍历序列，当遇到右括号时，必须存在一个**最近的、未闭合的左括号**，且两者类型相同；当遍历完整个序列，必须不存在未闭合的左括号。<!-- src: DS-C3-StackQueue#s005; type: direct -->
- **示例**：正确 `()[{}]`；错误 `([)]`、`(()`。<!-- src: DS-C3-StackQueue#s005; type: direct -->
- **能否只靠左右括号数量判断？不能**。仅数量相等不足以判断：`()` `{}` 数量相等且正确，但 `(}{)`（或 `([)]`）数量相等却错误。**不仅要关注数量，还需要关注位置**。<!-- src: DS-C3-StackQueue#s007; type: direct -->
- **核心思路**：每次看到一个右括号时，向左扫描之前最近的左括号是否匹配；一个左括号只能匹配一个右括号；所有左括号都必须被匹配。<!-- src: DS-C3-StackQueue#s007 + DS-C3-StackQueue#s008; type: synthesized -->

#### 括号匹配算法（容器操作抽象）

- 需要一种容器来存储左括号，并执行以下操作：<!-- src: DS-C3-StackQueue#s009; type: direct -->
  - **遇到左括号**：存入容器。<!-- src: DS-C3-StackQueue#s009; type: direct -->
  - **遇到右括号**：取出**最后存入**的元素进行检查；匹配则取出该元素，不匹配则报错并结束。<!-- src: DS-C3-StackQueue#s009; type: direct -->
  - **遍历结束**：容器为空则配对成功，否则报错。<!-- src: DS-C3-StackQueue#s009; type: direct -->
- 该容器所需的特性即"**后进先出**"，这正是**栈**。<!-- src: DS-C3-StackQueue#s017 + DS-C3-StackQueue#s018; type: synthesized -->
- **执行轨迹示例（输入 `(()[])`，容器即栈，自栈底到栈顶书写）**：读 `(` → Push（容器 `(`）；读 `(` → Push（容器 `( (`）；读 `)` → 取最后存入的 `(` 匹配成功，Pop（容器 `(`）；读 `[` → Push（容器 `( [`）；读 `]` → 取最后存入的 `[` 匹配成功，Pop（容器 `(`）；读 `)` → 取最后存入的 `(` 匹配成功，Pop（容器空）；遍历结束容器为空 → 配对成功。<!-- src: DS-C3-StackQueue#s013 + DS-C3-StackQueue#s014 + DS-C3-StackQueue#s015 + DS-C3-StackQueue#s016; type: direct -->

#### 括号匹配的 C++ 实现（使用标准库栈 `std::stack`）

<details>
<summary>代码</summary>

```cpp
#include <stack>
#include <string>
#include <iostream>
using namespace std;

class BracketChecker {
public:
    bool check(const string& str);
};

bool BracketChecker::check(const string& str) {
    stack<char> stack;
    for (char c : str) {
        if (c == '(' || c == '[' || c == '{') {   // 左括号入栈
            stack.push(c);
        }
        else if (c == ')' || c == ']' || c == '}') {
            if (stack.empty()) return false;       // 栈空，匹配失败
            char top = stack.top();                // 取栈顶做匹配检测
            if ((c == ')' && top != '(') ||
                (c == ']' && top != '[') ||
                (c == '}' && top != '{')) {
                return false;
            }
            stack.pop();                           // 匹配成功，出栈
        }
    }
    return stack.empty();   // 最终栈空才算匹配成功
}
```

</details>
<!-- src: DS-C3-StackQueue#s019; type: direct -->

- **时间复杂度**：$T(N)=O(N)$（遍历序列一遍，每个字符常数次栈操作）。<!-- src: DS-C3-StackQueue#s019; ref: 公式; type: direct -->
- **测试用例与输出**（`1` 表示匹配成功，`0` 表示失败）：`()[]{}`→1；`([{}])`→1；`([)]`→0；`{[]}`→1；`(`→0。<!-- src: DS-C3-StackQueue#s020; type: direct -->

---

### 1.2 栈的定义、术语与抽象数据类型

- **栈（Stack / 堆栈）**：具有一定操作约束的线性表，只在表尾一端（称为**栈顶**）做插入、删除。<!-- src: DS-C3-StackQueue#s021; type: direct -->
  - 插入数据：**入栈（Push）**；删除数据：**出栈（Pop）**。<!-- src: DS-C3-StackQueue#s021; type: direct -->
  - **关键特性**：后进先出（Last In First Out, **LIFO**）。<!-- src: DS-C3-StackQueue#s021; type: direct -->
- **基本操作**：Push（入栈，将元素加到栈顶）、Pop（出栈，移除并返回栈顶元素）、Top（查看栈顶，返回栈顶元素但不移除）、isEmpty（判空，检查栈是否为空）。<!-- src: DS-C3-StackQueue#s018; type: direct -->

#### 栈相关术语

- **栈底（bottom）**：栈的首部，即元素最早到达的部分。**栈顶（top）**：栈的尾部，即元素最晚到达的部分。<!-- src: DS-C3-StackQueue#s022; type: direct -->
- 为保证先进后出/后进先出，元素的插入和删除都必须在**栈顶**进行：从栈顶删除元素称**出栈/弹栈（pop）**；在栈顶插入元素称**进栈/压栈（push）**。<!-- src: DS-C3-StackQueue#s022; type: direct -->
- **取栈顶内容（top）**：读取栈顶元素数据值但不修改栈。<!-- src: DS-C3-StackQueue#s023; type: direct -->
- **空栈**：栈中元素个数为零时。<!-- src: DS-C3-StackQueue#s023; type: direct -->

#### 抽象数据类型描述（ADT）

类型名称：栈（Stack）；数据对象集：一个有 0 个或多个元素的有穷线性表。<!-- src: DS-C3-StackQueue#s024; type: direct -->

| 操作 | 前提条件 | 结果 | 时间复杂度 |
|---|---|---|---|
| `initialize()` | 无 | 创建空栈 | $O(1)$ |
| `isEmpty()` | 无 | 返回栈是否为空（True/False） | $O(1)$ |
| `top()` | 栈非空 | 返回栈顶元素（不修改栈） | $O(1)$ |
| `push(x)` | 栈未满，元素 x 已知 | x 入栈成为新栈顶 | $O(1)$ |
| `pop()` | 栈非空 | 移除栈顶元素 | $O(1)$ |
| `destroy()` | 无 | 释放栈内存空间 | $O(n)$ |

<!-- src: DS-C3-StackQueue#s024; type: direct -->

- **注**：抽象 ADT 表将 `destroy()` 记为 $O(n)$；具体实现页中，顺序栈析构按本页标为 $O(1)$，链式栈析构为 $O(N)$。<!-- src: DS-C3-StackQueue#s024 + DS-C3-StackQueue#s029 + DS-C3-StackQueue#s036; type: synthesized -->

#### 出栈序列辨析（课堂练习）

- `push(A), push(B), push(C), pop, pop, pop` → 输出 **CBA**。<!-- src: DS-C3-StackQueue#s025; type: direct -->
- `push(A), pop, push(B), push(C), pop, pop` → 输出 **ACB**。<!-- src: DS-C3-StackQueue#s025; type: direct -->
- **结论**：若三字符按 A、B、C 顺序压栈，**并非所有排列都是合法出栈序列**；例如**无法产生 CAB 序列**。<!-- src: DS-C3-StackQueue#s025; type: direct -->
- 原因（由 LIFO 一步推得）：C 先出栈意味着 A、B 此前都已入栈且 A 在 B 之下，故 A 不可能早于 B 出栈，因而 CAB 不是合法出栈序列。<!-- src: DS-C3-StackQueue#s025; type: one-step-inferred -->

---

### 1.3 顺序栈（seqStack）

- **定义**：用连续空间存储栈中元素；栈底放在数组 0 下标位置，进栈和出栈总在同一端（栈顶）进行。这样存储的栈称**顺序栈**。<!-- src: DS-C3-StackQueue#s027; type: direct -->
- **关键约定**：<!-- src: DS-C3-StackQueue#s027; type: direct -->
  - `bottom` 总是 0，不需要记忆；<!-- src: DS-C3-StackQueue#s027; type: direct -->
  - **栈空标志**：`top = -1`；<!-- src: DS-C3-StackQueue#s027; type: direct -->
  - **栈满标志**：`top = maxSize - 1`；<!-- src: DS-C3-StackQueue#s027; type: direct -->
  - 为防止栈满，可用一个**私有成员函数**实现自动扩容。<!-- src: DS-C3-StackQueue#s027; type: direct -->

#### 类的定义（动态数组实现）

<details>
<summary>代码</summary>

```cpp
template <class elemType>
class seqStack {
private:
    elemType *elem;       // 元素存储数组（动态数组首地址）
    int top_p;            // 栈顶指针（-1 表示空）
    int maxSize;          // 当前最大容量
    void doubleSpace();   // 扩容：空间翻倍（私有，用户不调用）
public:
    seqStack(int initSize = 10); // 构造
    ~seqStack();                 // 析构
    bool isEmpty() const;        // 判空
    void push(const elemType &x);// 入栈（自动扩容）
    elemType pop();              // 弹栈（需非空）
    elemType top() const;        // 取顶（需非空）
};
```

</details>
<!-- src: DS-C3-StackQueue#s028; type: direct -->

- 私有变量：指向动态数组首地址的指针 `*elem`、表示栈顶位置的整型 `top_p`、表示数组规模的整型 `maxSize`。`doubleSpace()` 用于扩展空间，无需用户调用，故为私有成员函数。<!-- src: DS-C3-StackQueue#s028; type: direct -->

#### 构造、析构

<details>
<summary>代码</summary>

```cpp
template <class elemType>
seqStack<elemType>::seqStack(int initSize) {
    elem = new elemType[initSize];
    maxSize = initSize;
    top_p = -1;            // 初始化栈顶指针为 -1，表示栈为空
}

template <class elemType>
seqStack<elemType>::~seqStack() {
    delete[] elem;         // 释放分配的内存
}
```

</details>
<!-- src: DS-C3-StackQueue#s029; type: direct -->

- 构造函数 $T(N)=O(1)$，析构函数 $T(N)=O(1)$（按本页所标）。<!-- src: DS-C3-StackQueue#s029; ref: 公式; type: direct -->

#### 自动扩容 `doubleSpace()`

<details>
<summary>代码</summary>

```cpp
template <class elemType>
void seqStack<elemType>::doubleSpace() {
    elemType *tmp = elem;                 // 保存旧数组
    elem = new elemType[2 * maxSize];     // 分配两倍容量的新数组
    for (int i = 0; i < maxSize; ++i)
        elem[i] = tmp[i];                 // 复制元素
    maxSize *= 2;                         // 更新容量
    delete[] tmp;                         // 释放旧数组
}
```

</details>
<!-- src: DS-C3-StackQueue#s030; type: direct -->

- **时间复杂度** $O(N)$。每次扩容把容量**翻倍**以减少扩容次数。<!-- src: DS-C3-StackQueue#s030; ref: 公式; type: direct -->
- 若不实现自动扩容，则需实现判满函数 `isFull()`。<!-- src: DS-C3-StackQueue#s030; type: direct -->

#### 入栈、出栈

<details>
<summary>代码</summary>

```cpp
template <class elemType>
void seqStack<elemType>::push(const elemType &x) {
    if (top_p == maxSize - 1) doubleSpace();  // 栈满则扩容
    elem[++top_p] = x;                        // 元素入栈
}

template <class elemType>
elemType seqStack<elemType>::pop() {
    return elem[top_p--];                     // 返回并移除栈顶
}
```

</details>
<!-- src: DS-C3-StackQueue#s031; type: direct -->

- `push` 中可能触发 `doubleSpace()`（单次 $O(N)$），但**分摊到单次入栈**后，入栈操作仍为 $O(1)$——这种分析方法称**均摊法（均摊分析）**。出栈操作 $O(1)$。<!-- src: DS-C3-StackQueue#s031; ref: 公式; type: direct -->

#### 判空、取栈顶

<details>
<summary>代码</summary>

```cpp
template <class elemType>
bool seqStack<elemType>::isEmpty() const {
    return top_p == -1;     // 栈顶指针为 -1 时栈空
}

template <class elemType>
elemType seqStack<elemType>::top() const {
    return elem[top_p];     // 返回栈顶元素
}
```

</details>
<!-- src: DS-C3-StackQueue#s032; type: direct -->

- 两者时间复杂度均为 $O(1)$；二者不修改成员变量，故用 `const` 修饰。<!-- src: DS-C3-StackQueue#s032; ref: 公式; type: direct -->

---

### 1.4 链式栈（linkStack）

- **定义**：用不连续的空间和附加指针来存储元素及元素间关系；栈顶指针 `top` 指向栈顶结点，即单链表中的**首结点**。<!-- src: DS-C3-StackQueue#s034; type: direct -->

#### 类的定义（单链表实现）

<details>
<summary>代码</summary>

```cpp
template <class elemType>
class linkStack {
private:
    struct node {
        elemType data;            // 数据
        node *next;               // 后继指针
        node(const elemType &x, node *N = NULL) { data = x; next = N; }
        node() : next(NULL) {}
        ~node() {}
    };
    node *top_p;              // 指向栈顶的指针
public:
    linkStack();
    ~linkStack();
    bool isEmpty() const;
    void push(const elemType &x);
    elemType pop();
    elemType top() const;
};
```

</details>
<!-- src: DS-C3-StackQueue#s035; type: direct -->


- 用单链表实现链式栈；结点类不会被用户使用，故设为**私有的内嵌类**。<!-- src: DS-C3-StackQueue#s035; type: direct -->

#### 构造、析构

<details>
<summary>代码</summary>

```cpp
template <class elemType>
linkStack<elemType>::linkStack() {
    top_p = NULL;
}

template <class elemType>
linkStack<elemType>::~linkStack() {
    node *tmp;
    while (top_p != NULL) {       // 逐结点释放
        tmp = top_p;
        top_p = top_p->next;
        delete tmp;
    }
}
```

</details>
<!-- src: DS-C3-StackQueue#s036; type: direct -->

- 构造函数 $T(N)=O(1)$，析构函数 $T(N)=O(N)$（需逐个释放结点）。<!-- src: DS-C3-StackQueue#s036; ref: 公式; type: direct -->

#### 入栈、出栈、判空、取栈顶

<details>
<summary>代码</summary>

```cpp
template <class elemType>
void linkStack<elemType>::push(const elemType &x) {
    top_p = new node(x, top_p);   // 一行完成：建结点、新结点指向原栈顶、top_p 指向新结点
}

template <class elemType>
elemType linkStack<elemType>::pop() {
    node *tmp = top_p;            // 临时指针指向栈顶
    elemType x = tmp->data;       // 取栈顶值
    top_p = top_p->next;          // 栈顶后移
    delete tmp;                   // 释放原栈顶空间
    return x;
}

template <class elemType>
bool linkStack<elemType>::isEmpty() const {
    return top_p == NULL;
}

template <class elemType>
elemType linkStack<elemType>::top() const {
    return top_p->data;
}
```

</details>
<!-- src: DS-C3-StackQueue#s037 + DS-C3-StackQueue#s038; type: direct -->

- 入栈、出栈、判空、取栈顶时间复杂度**均为 $O(1)$**。<!-- src: DS-C3-StackQueue#s037 + DS-C3-StackQueue#s038; ref: 公式; type: direct -->

---

### 1.5 栈的应用：表达式求值

#### 三种表达式形式

- **目的**：消除优先级和括号的歧义，方便计算机处理。对比：中缀 `(1+2)*3` vs. 后缀 `1 2 + 3 *`。<!-- src: DS-C3-StackQueue#s040; type: direct -->
- **中缀表达式**：运算符在操作数中间，如 `3 + 4 * 2`；符合人类习惯，但不符合计算机处理逻辑。<!-- src: DS-C3-StackQueue#s040; type: direct -->
- **后缀表达式（逆波兰式）**：运算符在操作数后，如 `3 4 2 * +`；符合计算机处理逻辑，不需要括号运算符。<!-- src: DS-C3-StackQueue#s040; type: direct -->
- **前缀表达式（波兰式）**：运算符在操作数前，如 `+ 3 * 4 2`。<!-- src: DS-C3-StackQueue#s040; type: direct -->
- 转换示例：中缀 `(3+4)*2` → 后缀 `3 4 + 2 *`；中缀 `3 + 4 * 2` → 后缀 `3 4 2 * +`。运算数顺序不变，按运算优先级把运算符后移。<!-- src: DS-C3-StackQueue#s040 + DS-C3-StackQueue#s041; type: synthesized -->
- **表达式计算的两方面工作**：① 中缀式转换为后缀式；② 后缀式计算。（运算数顺序不变；按优先级调整运算符顺序，先输出优先级更高的；用栈存储"等待中"的运算符，并将当前运算符与栈内最后一个运算符比较。）<!-- src: DS-C3-StackQueue#s041; type: direct -->

#### 中缀式 → 后缀式（算法）

1. 初始化一个空栈（保存运算符）和一个空输出队列。<!-- src: DS-C3-StackQueue#s054; type: direct -->
2. 从左到右扫描中缀表达式：<!-- src: DS-C3-StackQueue#s054; type: direct -->
   - 遇**操作数**：直接加入输出队列；<!-- src: DS-C3-StackQueue#s054; type: direct -->
   - 遇**左括号 `(`**：入栈；<!-- src: DS-C3-StackQueue#s054; type: direct -->
   - 遇**右括号 `)`**：弹出栈顶元素到输出队列，直到遇到左括号（**左括号出栈但不输出**）；<!-- src: DS-C3-StackQueue#s054; type: direct -->
   - 遇**运算符**：通常弹出栈顶**优先级 ≥ 当前运算符**的元素（到输出队列），再将当前运算符入栈；右结合运算符需例外处理，如本章 `calc` 中乘方 `EXP` 直接入栈。<!-- src: DS-C3-StackQueue#s054 + DS-C3-StackQueue#s063; type: synthesized -->
3. 扫描完成后，将栈中剩余运算符依次弹出到输出队列。<!-- src: DS-C3-StackQueue#s054; type: direct -->

- **易错点**：左括号 `(` 在**入栈时**优先级最高（任何运算符都能压在它上面），但**已在栈内时**优先级最低（只有遇到对应右括号才弹出，普通运算符不会把它弹出）；括号本身不进入后缀式输出。<!-- src: DS-C3-StackQueue#s046 + DS-C3-StackQueue#s048 + DS-C3-StackQueue#s050; type: synthesized -->
- **逐步示例 `a * ( b + c ) / d` → 后缀 `a b c + * d /`**：a 输出 → `*` 入栈 → `(` 入栈（优先级高于 `*`）→ b 输出 → `+` 入栈（在括号内）→ c 输出 → `)` 触发弹栈到 `(` 为止（弹出 `+`，括号不输出）→ `/` 与栈顶 `*` 比较（`*` 先入、优先级不低，弹出 `*`），`/` 入栈 → d 输出 → 读完，弹出栈内剩余（`/`）。<!-- src: DS-C3-StackQueue#s043 + DS-C3-StackQueue#s053; type: synthesized -->
- **跟踪示例**：`5*(7-2*3)+8/2` 转换为后缀 `5 7 2 3 * - * 8 2 / +`。<!-- src: DS-C3-StackQueue#s055; type: direct -->

#### 后缀式计算（算法）

1. 初始化一个空栈（保存操作数）。<!-- src: DS-C3-StackQueue#s056; type: direct -->
2. 从左到右扫描后缀表达式：遇**操作数**入栈；遇**运算符**弹出栈顶**两个**元素，计算后将结果入栈。<!-- src: DS-C3-StackQueue#s056; type: direct -->
3. 最终**栈顶元素即为结果**。<!-- src: DS-C3-StackQueue#s056; type: direct -->

- **跟踪示例**：后缀 `5 7 2 3 * - * 8 2 / +` 计算结果为 **9**。<!-- src: DS-C3-StackQueue#s057; type: direct -->
- **逐步跟踪（运算数栈，自栈底到栈顶）**：读 5 → `[5]`；读 7 → `[5 7]`；读 2 → `[5 7 2]`；读 3 → `[5 7 2 3]`；读 `*`（弹 2、3，2*3=6）→ `[5 7 6]`；读 `-`（弹 7、6，7-6=1）→ `[5 1]`；读 `*`（弹 5、1，5*1=5）→ `[5]`；读 8 → `[5 8]`；读 2 → `[5 8 2]`；读 `/`（弹 8、2，8/2=4）→ `[5 4]`；读 `+`（弹 5、4，5+4=9）→ `[9]`，栈顶 9 即为结果。<!-- src: DS-C3-StackQueue#s057; type: direct -->
- **两步可合并**：中缀转后缀与后缀计算这两个步骤**可以合并**为一次扫描完成。<!-- src: DS-C3-StackQueue#s058; type: direct -->

#### 表达式求值的 C++ 实现（`calc` 类）

- **`token` 枚举**：`enum token { OPAREN, ADD, SUB, MULTI, DIV, EXP, CPAREN, VALUE, EOL };`，从左到右依次表示：开括号、加号、减号、乘号、除号、乘方、闭括号、运算数、行结束符。<!-- src: DS-C3-StackQueue#s059; type: direct -->
- 结合 `result` 中 `opStack.top() >= MULTI` 的比较逻辑可知：枚举的**声明顺序蕴含了运算符优先级比较关系**（此优先级关系并非 s059 直接给出，而是由 s063 的 `result()` 代码反推得到）；`EXP` 分支直接入栈，使连续乘方按**右结合**处理。<!-- src: DS-C3-StackQueue#s059 + DS-C3-StackQueue#s063 + DS-C3-StackQueue#s064; type: synthesized -->

<details>
<summary>代码</summary>

```cpp
class calc {
    char *expression;     // 中缀表达式
    enum token { OPAREN, ADD, SUB, MULTI, DIV, EXP, CPAREN, VALUE, EOL };
    void BinaryOp(token op, seqStack<int> &dataStack); // 执行二元运算
    token getOp(int &value);                           // 取下一个符号/运算数
public:
    calc(const char *s) { expression = new char[strlen(s) + 1]; strcpy(expression, s); }
    ~calc() { delete[] expression; }
    int result();         // 计算结果
};
```

</details>
<!-- src: DS-C3-StackQueue#s059; type: direct -->

- **`getOp(int &value)`**：扫描表达式直到取到一个运算符或运算数；先跳过空格；若是数字则连续读出并转为整型存入 `value`，返回 `VALUE`；否则用 `switch` 按字符返回对应 token；遇 `'\0'` 返回 `EOL`，遇非法字符报错退出。<!-- src: DS-C3-StackQueue#s060; type: direct -->
- **`BinaryOp(token op, dataStack)`**：从运算数栈弹出两个数 `num2`（右操作数，先弹）、`num1`（左操作数，后弹）；按 `op` 执行 `+ - * / ^`（`EXP` 用 `pow`），结果压回栈。**注意弹出顺序**：先弹的是右操作数。<!-- src: DS-C3-StackQueue#s061; type: direct -->
- **出错处理**：两次出栈分别独立判空——第一次 pop（取右操作数 `num2`）前若 `dataStack.isEmpty()` 则报 `" 缺右运算数！"` 并 `exit(1)`；第二次 pop（取左操作数 `num1`）前若栈再次为空则报 `" 缺左运算数！"` 并 `exit(1)`，两条提示可区分缺失的是右操作数还是左操作数。<!-- src: DS-C3-StackQueue#s061; type: direct -->

<details>
<summary>代码</summary>

```cpp
int calc::result() {
    token lastOp, topOp = EOL;
    int result_value, CurrentValue;
    seqStack<token> opStack;   // 运算符栈
    seqStack<int> dataStack;   // 运算数栈
    char *str = expression;
    while ((lastOp = getOp(CurrentValue)) != EOL) {
        switch (lastOp) {
        case VALUE:  dataStack.push(CurrentValue); break;
        case OPAREN: opStack.push(OPAREN); break;
        case CPAREN:               // 闭括号：弹到开括号为止
            topOp = EOL;
            while (!opStack.isEmpty() && (topOp = opStack.pop()) != OPAREN)
                BinaryOp(topOp, dataStack);
            if (topOp != OPAREN) { cerr << " 缺左括号 !" << endl; return 0; }
            break;
        case EXP:    opStack.push(EXP); break;            // 乘方直接入栈
        case MULTI: case DIV:      // 乘除：弹出栈顶 >= MULTI 的，再入栈
            while (!opStack.isEmpty() && opStack.top() >= MULTI)
                BinaryOp(opStack.pop(), dataStack);
            opStack.push(lastOp);
            break;
        case ADD: case SUB:        // 加减：弹到空或遇开括号，再入栈
            while (!opStack.isEmpty() && opStack.top() != OPAREN)
                BinaryOp(opStack.pop(), dataStack);
            opStack.push(lastOp);
            break;
        }
    }
    while (!opStack.isEmpty()) {        // 弹出剩余运算符
        topOp = opStack.pop();
        if (topOp == OPAREN) { cout << " 缺右括号 "; return 0; }
        BinaryOp(topOp, dataStack);
    }
    if (dataStack.isEmpty()) { cout << " 无结果 \n"; return 0; }
    result_value = dataStack.pop();
    if (!dataStack.isEmpty()) { cout << " 缺操作符 "; return 0; }
    expression = str;
    return result_value;
}
```

</details>
<!-- src: DS-C3-StackQueue#s062 + DS-C3-StackQueue#s063; type: direct -->


- `getOp` 和 `BinaryOp` 被 `result` 调用，用户无需调用，故设为 `calc` 类的**私有成员函数**。<!-- src: DS-C3-StackQueue#s062; type: direct -->
- **测试与理论输出**：`3*(1+1)^2^3/(4 - 2) - 10` → **374**；`3*6/9+5` → **7**；`6/3*4+1` → **9**。<!-- src: DS-C3-StackQueue#s064; type: direct -->

---

### 1.6 栈小结

- 栈是在线性表基础上限制插入、删除位置（只能在同一端点进行）的一种**操作受限的线性表**。<!-- src: DS-C3-StackQueue#s066; type: direct -->
- 栈在计算机系统中非常重要：除符号匹配、表达式计算外，系统在**函数调用、递归**中都以栈结构为基础。<!-- src: DS-C3-StackQueue#s066; type: direct -->
- 栈的常见操作：进栈、出栈、求栈顶元素、判栈空、判栈满等。<!-- src: DS-C3-StackQueue#s066; type: direct -->
- 物理实现可用顺序和链式两种存储方式；鉴于操作都在一端进行，**顺序存储是栈最常使用的存储方式**。<!-- src: DS-C3-StackQueue#s066; type: direct -->

---

## 二、队列（Queue）

### 2.1 队列的引入与定义

- **生活原型**：银行叫号系统，顾客按顺序排队办理业务，要"高效管理先来先服务的请求"。需求：动态增删（顾客随时加入队尾，柜员处理队头请求）、顺序维护（先到的顾客优先被服务）。<!-- src: DS-C3-StackQueue#s068; type: direct -->
- **更多应用场景**：操作系统打印任务队列（按提交顺序执行，避免资源竞争）、电商秒杀请求缓冲（异步处理、防止服务器崩溃）、游戏玩家指令队列（按序执行、避免操作冲突）。<!-- src: DS-C3-StackQueue#s071; type: direct -->
- **队列（Queue）定义**：具有一定操作约束的线性表，只能在一端插入，而在另一端删除。<!-- src: DS-C3-StackQueue#s072; type: direct -->
  - 数据插入：**入队（enQueue）**；数据删除：**出队（deQueue）**。<!-- src: DS-C3-StackQueue#s072; type: direct -->
  - **关键特性**：先进先出（First In First Out, **FIFO**）。<!-- src: DS-C3-StackQueue#s072; type: direct -->

#### 抽象数据类型描述（ADT）

类型名称：队列（Queue）；数据对象集：一个有 0 个或多个元素的有穷线性表。<!-- src: DS-C3-StackQueue#s073; type: direct -->

| 操作 | 前提 | 结果 |
|---|---|---|
| `initialize` | 无 | 分配空间及初始化 |
| `isEmpty` | 无 | 返回是否为空 |
| `getHead` | 队列非空 | 返回队首元素 |
| `enQueue` | 队列非满，有数据 | 数据加入队尾 |
| `deQueue` | 队列非空 | 移除队首元素 |
| `destroy` | 无 | 释放队列空间 |

<!-- src: DS-C3-StackQueue#s073; type: direct -->

---

### 2.2 顺序队列与顺序循环队列（seqQueue）

- **顺序队列定义**：用一组连续的空间存储队列中的元素及元素间关系。元素个数最多 `maxSize` 个，下标范围 0 到 `maxSize-1`；用**队首指针 Front** 指示队首元素，**队尾指针 Rear** 指示队尾元素，便于进队/出队。<!-- src: DS-C3-StackQueue#s074; type: direct -->

#### 顺序队列的三种组织方式

| 组织方式 | 特点 | 问题/复杂度 |
|---|---|---|
| 队头位置**固定** | 队头固定在下标 0；用一个变量指出队尾位置；队列空时队尾位置为 -1 | **缺点**：出队会引起大量数据移动 |
| 队头位置**不固定** | 用 front、rear 两个指针；front 随出队后移 | 所有操作都是 $O(1)$，但**浪费空间** |
| **循环队列** | 在"队头不固定"基础上加循环特征，复用空间 | 解决空间浪费问题（详见下文） |

<!-- src: DS-C3-StackQueue#s075 + DS-C3-StackQueue#s077 + DS-C3-StackQueue#s078; type: synthesized -->

#### 顺序循环队列

- **核心思想**：为防止队列后移造成的空间浪费，给数组附加一个**循环特征**，称**顺序循环队列**；指针移动用取模实现。<!-- src: DS-C3-StackQueue#s084; type: direct -->
  - **入队操作**：`rear = (rear + 1) % MaxSize; elem[rear] = x;`<!-- src: DS-C3-StackQueue#s079 + DS-C3-StackQueue#s080; type: direct -->
  - **出队操作**：`front = (front + 1) % MaxSize;`<!-- src: DS-C3-StackQueue#s080; type: direct -->
- **空/满判定的难题**：创建队列时令 `front = rear = 0` 表示空；多次进出队后 front、rear 都不在 0。仅靠 `front == rear` 无法区分队空与队满——出队变空时 `front == rear`，入队变满（rear 绕一圈追上 front）时也满足 `front == rear`，两者混淆。<!-- src: DS-C3-StackQueue#s080 + DS-C3-StackQueue#s081 + DS-C3-StackQueue#s082; type: synthesized -->
- **解决方案**："**牺牲**"一个单元：规定 **front 指向的单元不存储队列元素**，只起标志作用，表示其**后面一个**才是队头元素。<!-- src: DS-C3-StackQueue#s083 + DS-C3-StackQueue#s084; type: direct -->
  - **队空标志**：`rear == front`。<!-- src: DS-C3-StackQueue#s084; type: direct -->
  - **队满标志**：`(rear + 1) % maxSize == front`。<!-- src: DS-C3-StackQueue#s084; type: direct -->

#### 类的定义

<details>
<summary>代码</summary>

```cpp
template <class elemType>
class seqQueue {
private:
    elemType *elem;
    int maxSize;
    int front, rear;
    void doubleSpace();
public:
    seqQueue(int size = 10);
    ~seqQueue();
    bool isEmpty() const;
    void enQueue(const elemType &x);
    elemType deQueue();
    elemType getHead() const;
};
```

</details>
<!-- src: DS-C3-StackQueue#s085; type: direct -->

- 定义时无法预知数组大小，故采用**动态数组**；用 `doubleSpace()` 在队满时扩充。<!-- src: DS-C3-StackQueue#s085; type: direct -->

#### 构造、析构、判空、出队、取队首

<details>
<summary>代码</summary>

```cpp
template <class elemType>
seqQueue<elemType>::seqQueue(int size) {
    elem = new elemType[size];
    maxSize = size;
    front = rear = 0;                 // 初始化头尾指针
}

template <class elemType>
seqQueue<elemType>::~seqQueue() { delete[] elem; }

template <class elemType>
bool seqQueue<elemType>::isEmpty() const { return front == rear; }

template <class elemType>
elemType seqQueue<elemType>::deQueue() {
    front = (front + 1) % maxSize;    // 头指针前移（先移再取，因 front 单元不存元素）
    return elem[front];
}

template <class elemType>
elemType seqQueue<elemType>::getHead() const {
    return elem[(front + 1) % maxSize];   // 队首是 front 的下一个单元
}
```

</details>
<!-- src: DS-C3-StackQueue#s086; type: direct -->

- 析构函数时间复杂度 $O(N)$；构造、判空、出队、取队首均为 $O(1)$。<!-- src: DS-C3-StackQueue#s086; ref: 公式; type: direct -->

#### 进队与 `doubleSpace()`

<details>
<summary>代码</summary>

```cpp
template <class elemType>
void seqQueue<elemType>::enQueue(const elemType &x) {
    if ((rear + 1) % maxSize == front) doubleSpace();  // 队满则扩容
    rear = (rear + 1) % maxSize;
    elem[rear] = x;
}

template <class elemType>
void seqQueue<elemType>::doubleSpace() {
    elemType *tmp = elem;
    elem = new elemType[2 * maxSize];
    for (int i = 1; i < maxSize; ++i)
        elem[i] = tmp[(front + i) % maxSize];  // 按循环顺序复制到新数组
    front = 0;                                 // 重置头指针
    rear = maxSize - 1;                        // 重置尾指针
    maxSize *= 2;
    delete[] tmp;
}
```

</details>
<!-- src: DS-C3-StackQueue#s087; type: direct -->


- 用 `(rear + 1) % MaxSize == front` 判满，若满则自动扩容。`doubleSpace()` 时间复杂度 $O(N)$；按“牺牲一个单元”的约定，扩容时只复制旧队列中的 `maxSize - 1` 个有效元素；均摊到每次进队后，进队操作仍为 $O(1)$。<!-- src: DS-C3-StackQueue#s084 + DS-C3-StackQueue#s087; ref: 公式; type: synthesized -->

---

### 2.3 链式队列（linkQueue）

- **定义**：队列也可用**链表**实现；由于操作只在两端进行，不需双链表，**单链表就足够**。队首指针 `front` 指向队首结点、队尾指针 `rear` 指向队尾结点。<!-- src: DS-C3-StackQueue#s089; type: direct -->
- **队空条件** `front == rear == NULL`；链式队列**不存在队满情况**。<!-- src: DS-C3-StackQueue#s089; type: direct -->

#### 类的定义

<details>
<summary>代码</summary>

```cpp
template <class elemType>
class linkQueue {
private:
    struct node {
        elemType data;
        node *next;
        node(const elemType &x, node *N = NULL) : data(x), next(N) {}
        node() : next(NULL) {}
        ~node() {}
    };
    node *front, *rear;            // 头尾指针
public:
    linkQueue();
    ~linkQueue();
    bool isEmpty() const;
    void enQueue(const elemType &x);
    elemType deQueue();
    elemType getHead() const;
};
```

</details>
<!-- src: DS-C3-StackQueue#s090; type: direct -->

#### 构造、析构

<details>
<summary>代码</summary>

```cpp
template <class elemType>
linkQueue<elemType>::linkQueue() { front = rear = NULL; }

template <class elemType>
linkQueue<elemType>::~linkQueue() {
    node *tmp;
    while (front != NULL) {        // 沿后继指针逐个释放
        tmp = front;
        front = front->next;
        delete tmp;
    }
}
```

</details>
<!-- src: DS-C3-StackQueue#s091; type: direct -->

- 构造函数 $O(1)$；析构函数主体是 while 循环逐个释放结点，时间复杂度 $O(N)$。<!-- src: DS-C3-StackQueue#s091; ref: 公式; type: direct -->

#### 判空、取队首、入队、出队

<details>
<summary>代码</summary>

```cpp
template <class elemType>
bool linkQueue<elemType>::isEmpty() const { return front == NULL; }

template <class elemType>
elemType linkQueue<elemType>::getHead() const { return front->data; }

template <class elemType>
void linkQueue<elemType>::enQueue(const elemType &x) {
    if (rear == NULL) {                       // 入队前为空队列
        front = rear = new node(x);
    } else {
        rear = rear->next = new node(x);      // 接到队尾并更新 rear
    }
}

template <class elemType>
elemType linkQueue<elemType>::deQueue() {
    node *tmp = front;
    elemType value = front->data;
    front = front->next;
    if (front == NULL) rear = NULL;           // 出队后变空，需同步置空 rear
    delete tmp;
    return value;
}
```

</details>
<!-- src: DS-C3-StackQueue#s092; type: direct -->

- 判空、取队首、入队、出队四个函数时间复杂度**都是 $O(1)$**。<!-- src: DS-C3-StackQueue#s092; ref: 公式; type: direct -->
- **边界处理要点**：入队时若 `rear == NULL`（空队）需同时设 `front` 和 `rear`；出队后若 `front == NULL`（队空）需同步把 `rear` 置 NULL。<!-- src: DS-C3-StackQueue#s092; type: compressed -->

---

### 2.4 优先队列（Priority Queue）

- **定义**：进入队列的元素带**优先级**（用一个**优先数**表示，**一般优先数越小优先级越高**）；出队时优先级越高越早出队，优先级越低越晚出队，**优先级相同者按先进先出处理**。这种队列称**优先队列**。<!-- src: DS-C3-StackQueue#s095; type: direct -->
- **存储方式**：顺序存储、链式存储。<!-- src: DS-C3-StackQueue#s095; type: direct -->

#### 顺序优先队列（用数组存放）

两种存放策略：<!-- src: DS-C3-StackQueue#s096; type: direct -->

- **策略一**（进队按时间顺序存放，出队找优先级最高者）：<!-- src: DS-C3-StackQueue#s098; type: direct -->
  - 进队：按下标由小到大直接放队尾，$O(1)$。<!-- src: DS-C3-StackQueue#s098; type: direct -->
  - 出队：从所有元素中找优先级最高者并删除；为避免整队后移浪费空间，**出队时把队列最后一个元素移到出队元素所在位置**，使队列始终从 0 下标连续到某下标、中间无空隙，故**不需要循环技术**；查找最高优先级元素 $O(n)$。<!-- src: DS-C3-StackQueue#s098; type: direct -->
  - 令 rear 指向实际队尾元素的**后一单元**：队空 `rear = 0`，队满 `rear = maxSize`。<!-- src: DS-C3-StackQueue#s098; type: direct -->
  - 若严格要求“同优先级先进先出”，末元素填空会破坏同级元素的到达顺序，需要额外记录到达次序或改用稳定删除策略。<!-- src: DS-C3-StackQueue#s095 + DS-C3-StackQueue#s098; type: one-step-inferred -->
- **策略二**（进队按优先级顺序存放，出队取队首）：<!-- src: DS-C3-StackQueue#s100; type: direct -->
  - 元素按优先数由小到大排列。<!-- src: DS-C3-StackQueue#s100; type: direct -->
  - 进队：先找到合适插入位置、移动后面的元素再插入，$O(n)$。<!-- src: DS-C3-StackQueue#s100; type: direct -->
  - 出队：删队首（0 下标）即可，为避免后面元素移动可采用顺序循环队列，$O(1)$。<!-- src: DS-C3-StackQueue#s100; type: direct -->
  - 令 rear 指向实际队尾后一单元：队空 `rear == front`，队满 `(rear + 1) % maxSize == front`。<!-- src: DS-C3-StackQueue#s100; type: direct -->

#### 链式优先队列

- **策略一**：进队时直接将元素插入队尾 $O(1)$；出队时从所有元素中找优先级最高者删除。<!-- src: DS-C3-StackQueue#s101; type: direct -->
- **策略二**：单链表中结点按元素优先级**递减**（即优先数增大）排成**有序链表**，优先级最高的结点是首结点。<!-- src: DS-C3-StackQueue#s101; type: direct -->
  - 出队即删首结点，$O(1)$。<!-- src: DS-C3-StackQueue#s101; type: direct -->
  - 进队需按优先级找到合适插入位置再插入，$O(n)$，但**不会引起队列中原有元素在内存中移动**（相对顺序存储的优势）。<!-- src: DS-C3-StackQueue#s101; type: direct -->

---

### 2.5 队列的应用：排队系统模拟

- **模拟（simulation）**：用计算机仿真现实系统的操作并收集统计数据，是计算机的重要应用。<!-- src: DS-C3-StackQueue#s102; type: direct -->
- **模拟的优点**：① 不需要真实顾客就能得到统计信息；② 计算机速度快，模拟比真实实现快很多；③ 模拟结果可以简单地重现。（例：模拟有 K 个出纳员的银行系统，确定满足合理服务时间的最小 K 值。）<!-- src: DS-C3-StackQueue#s102; type: direct -->
- **事件驱动模拟**：将事件按发生时间排队，一个事件处理结束后，直接把时间拨到下一事件的发生时间，处理下一事件。<!-- src: DS-C3-StackQueue#s103; type: direct -->
  - 两类核心事件：**到达事件**（顾客到达时间间隔服从 $[a,b]$ 均匀分布）、**离开事件**（服务时间服从 $[c,d]$ 均匀分布）。<!-- src: DS-C3-StackQueue#s103; type: direct -->
  - 统计指标：平均等待时间、队列长度、员工利用率。<!-- src: DS-C3-StackQueue#s103; type: direct -->

#### 单服务台排队系统的实现

- 只需使用**一个队列**；整个模拟由三步组成：<!-- src: DS-C3-StackQueue#s105; type: direct -->
  1. 生成所有顾客到达事件，按到达时间排成一个队列；<!-- src: DS-C3-StackQueue#s105; type: direct -->
  2. 服务员一旦有空，就为队头元素服务，提供服务前先检查该顾客等待了多少时间并记入累计值；<!-- src: DS-C3-StackQueue#s105; type: direct -->
  3. 所有顾客服务完后，返回累计值除以顾客数。<!-- src: DS-C3-StackQueue#s105; type: direct -->

<details>
<summary>代码</summary>

```cpp
class simulator {
    int arrivalLow;      // 到达间隔时间下限
    int arrivalHigh;     // 到达间隔时间上限
    int serviceTimeLow;  // 服务时间下限
    int serviceTimeHigh; // 服务时间上限
    int customNum;       // 模拟的顾客数
public:
    simulator();             // 接受用户输入参数
    int avgWaitTime() const; // 执行模拟并给出平均等待时间
};

int simulator::avgWaitTime() const {
    int currentTime = 0, totalWaitTime = 0, eventTime;
    linkQueue<int> customerQueue;          // 顾客到达事件队列
    for (int i = 0; i < customNum; ++i) {  // 生成所有到达事件
        currentTime += arrivalLow + (arrivalHigh - arrivalLow) * (double)rand() / RAND_MAX;
        customerQueue.enQueue(currentTime);
    }
    currentTime = 0;
    while (!customerQueue.isEmpty()) {     // 处理所有到达事件
        eventTime = customerQueue.deQueue();
        if (eventTime < currentTime)       // 顾客到达时服务台仍忙 → 需等待
            totalWaitTime += currentTime - eventTime;
        else currentTime = eventTime;      // 服务台空闲 → 时钟拨到到达时刻
        currentTime += serviceTimeLow + (serviceTimeHigh - serviceTimeLow) * (double)rand() / RAND_MAX;
    }
    return totalWaitTime / customNum;
}
```

</details>
<!-- src: DS-C3-StackQueue#s106 + DS-C3-StackQueue#s107 + DS-C3-StackQueue#s108; type: direct -->

- 构造函数读入到达间隔上下界、服务时间上下界、顾客数，并 `srand(time(NULL))` 初始化随机数发生器。<!-- src: DS-C3-StackQueue#s108; type: direct -->
- 使用伪随机数 `rand()`（生成 0 到 `RAND_MAX` 的随机数）配合均匀分布生成间隔/服务时间。<!-- src: DS-C3-StackQueue#s108; type: direct -->
- **运行示例**：到达间隔 `0 5`、服务时间 `1 4`、顾客数 `1000` → 平均等待时间约 25（**每次结果可能不同**，因含随机数）。<!-- src: DS-C3-StackQueue#s109; type: direct -->

---

### 2.6 单调队列

- **定义**：一个满足**单调性质**的**双向队列**，队内元素排列顺序满足单调递增或单调递减。<!-- src: DS-C3-StackQueue#s111; type: direct -->
- **维护规则**：如果新入队的元素破坏了单调性，就弹出队内元素，直到满足单调性，再进行入队操作。<!-- src: DS-C3-StackQueue#s111; type: direct -->
- **功能**：对于一个序列，求出每 k 个连续的数中的最大值和最小值（滑动窗口最值）。<!-- src: DS-C3-StackQueue#s111; type: direct -->

#### 课堂练习解答（滑动窗口最小值）

- **题目（洛谷 P1886 滑动窗口）**：给定长为 n 的序列 a 和一个大小为 k 的窗口；窗口从最左端开始，每次向右滑动一个单位，求每次滑动后窗口内的最大值和最小值。<!-- src: DS-C3-StackQueue#s110; type: direct -->
- **输入格式**：第一行两个正整数 n、k；第二行 n 个整数表示序列 a。**输出格式**：共两行，第一行依次输出每个窗口的最小值，第二行依次输出每个窗口的最大值。<!-- src: DS-C3-StackQueue#s110; type: direct -->
- **样例**：输入 `8 3` / `1 3 -1 -3 5 3 6 7`；输出（最小值）`-1 -3 -3 -3 3 3`、（最大值）`3 3 5 5 6 7`。逐窗口（含值）：`[1,3,-1]`→ -1/3；`[3,-1,-3]`→ -3/3；`[-1,-3,5]`→ -3/5；`[-3,5,3]`→ -3/5；`[5,3,6]`→ 3/6；`[3,6,7]`→ 3/7。<!-- src: DS-C3-StackQueue#s110; type: direct -->
- 题源：洛谷 P1886（滑动窗口），链接 `https://www.luogu.com.cn/problem/P1886`。<!-- src: DS-C3-StackQueue#s110; type: direct -->
- 用数组模拟单调队列，`q` 中**存储的是下标（索引）**；`head`、`tail` 为队头/队尾指针。<!-- src: DS-C3-StackQueue#s113; type: direct -->

<details>
<summary>代码</summary>

```cpp
const int MAXN = 1000005;
int n, k;          // n：数组长度；k：滑动窗口大小
int a[MAXN];       // 输入数组
int ans[MAXN];     // 每个窗口的最小值
int main() {
    cin >> n >> k;
    for (int i = 1; i <= n; ++i) cin >> a[i];
    int head = 1, tail = 0, q[MAXN] = {0};         // 单调队列（存下标）
    for (int i = 1; i <= n; ++i) {
        while (head <= tail && a[q[tail]] >= a[i]) --tail; // 维护单调性：弹出 >= 当前值的队尾
        q[++tail] = i;                                     // 入队，存索引
        while (q[head] <= i - k) ++head;                   // 队首"过时"则出队
        if (i >= k) ans[i] = a[q[head]];                   // 窗口最小值 = 队首
    }
    for (int i = k; i <= n; ++i) cout << ans[i] << " ";
    cout << endl;
    return 0;
}
```

</details>
<!-- src: DS-C3-StackQueue#s113; type: direct -->

- **要点**：求最小值时，队列对应值单调**递增**，故队首始终是当前窗口最小值；队尾弹出所有 `>= a[i]` 的元素以保持单调性；队首下标 `<= i - k` 表示已滑出窗口，需出队。<!-- src: DS-C3-StackQueue#s111 + DS-C3-StackQueue#s113; type: synthesized -->

---

### 2.7 队列小结

- 队列是限制了插入、删除操作位置的另一种线性表，元素的插入、删除分别在表的**两端**进行。<!-- src: DS-C3-StackQueue#s114; type: direct -->
- 除日常生活的实际队列外，计算机操作系统中许多对象的管理都用到队列（如打印队列、进程队列等），是一种重要的数据结构。<!-- src: DS-C3-StackQueue#s114; type: direct -->
- 队列常见操作：进队、出队、求队首元素、判空、判满等。<!-- src: DS-C3-StackQueue#s114; type: direct -->
- 队列的**顺序循环存储**（进队按动态扩容作均摊分析）和**链式存储**的常见操作时间复杂度都是 $O(1)$；考虑到链式存储每个结点额外的空间开销，**顺序循环队列是最常用的存储结构**。<!-- src: DS-C3-StackQueue#s087 + DS-C3-StackQueue#s114; type: synthesized -->
- **优先队列**不再按先进先出，**优先级高者先出队**；无论顺序还是链式优先队列，其进队、出队操作的时间复杂度为 $O(1)$、$O(n)$ 或者 $O(n)$、$O(1)$（两端各有一端 $O(1)$、另一端 $O(n)$）。<!-- src: DS-C3-StackQueue#s115; type: direct -->
- 后面章节讨论二叉树后，用二叉树作工具、以**堆**的方式存储优先队列时，时间复杂度能降到 $O(\log_2 n)$。<!-- src: DS-C3-StackQueue#s115; ref: 公式; type: direct -->
