---
title: "第20-23讲：n维向量空间与向量组的秩"
description: "线性代数课程笔记：第20-23讲：n维向量空间与向量组的秩。"
---

<div class="note-meta"><a href="/courses/linear-algebra/">线性代数目录</a><a href="/downloads/linear-algebra/chapter-2s4.md" download>下载 Markdown</a></div>

## 关键考点总览（本讲速记）

1. ⭐ n维向量的定义与运算8条性质
2. ⭐ 线性子空间的判定条件（加法+数乘封闭）
3. ⭐ 线性组合、线性表出的定义与方程组解的关系
4. ⭐ 向量组等价的定义（可相互线性表示）与等价关系三性质
5. ⭐ 线性相关/线性无关的定义与判定方法
6. ⭐ m > n 时，n维向量组必线性相关
7. ⭐ 极大线性无关组的定义与向量组的秩
8. ⭐ 定理：矩阵的秩 = 列秩 = 行秩
9. ⭐ 求极大线性无关组的两种方法
10. ⭐ $r(AB) \leq \min\{r(A), r(B)\}$

---

## 第20讲：n维向量空间

### 一、n维向量的定义

#### (1) 定义

- **n维向量**：数域 $F$ 内的n个数 $a_1, a_2, \cdots, a_n$ 组成的有序数组 $(a_1, a_2, \cdots, a_n)$ 或 $\begin{pmatrix} a_1 \\ a_2 \\ \vdots \\ a_n \end{pmatrix}$，称为数域 $F$ 上n维行（或列）向量，数 $a_i$ 叫做此n维向量的第 $i$ 个分量。[来源：p2]

- **行向量**：$\beta = (a_1, a_2, \cdots, a_n)$；**列向量**：$\alpha = \begin{pmatrix} a_1 \\ a_2 \\ \vdots \\ a_n \end{pmatrix}$ [来源：p3]

- **零向量**：$O = (0, 0, \cdots, 0)$ [来源：p3]

- **$R^n$**：实数域 $R$ 上n维向量的全体构成的集合。[来源：p2]

- ⭐ **向量可以视为矩阵的特例，故其运算法则与矩阵的运算法则完全相同。** [来源：p3]

#### (2) n维向量的运算性质

n维向量的运算满足8条性质：[来源：p4]

**加法（4条）**：
1. $\alpha + \beta = \beta + \alpha$（交换律）
2. $(\alpha + \beta) + \gamma = \alpha + (\beta + \gamma)$（结合律）
3. $\alpha + \mathbf{0} = \alpha$（零元存在）
4. $\alpha + (-\alpha) = \mathbf{0}$（负元存在）

**数乘（4条）**：
5. $1\alpha = \alpha$
6. $k(l\alpha) = l(k\alpha) = (kl)\alpha$
7. $k(\alpha + \beta) = k\alpha + k\beta$（数乘对向量加法分配律）
8. $(k + l)\alpha = k\alpha + l\alpha$（数乘对数加法分配律）

---

### 二、n维向量空间的子空间

#### (1) 定义

- **线性子空间**：设 $S \subseteq F^n$，且 $S$ 非空。如果 $S$ 对于加法与数乘运算封闭，那么说 $S$ 是 $F^n$ 的子空间。[来源：p5，黄色高亮]

#### (2) 子空间的判定条件

⭐ 判定 $S$ 是 $F^n$ 的子空间，需验证：
1. $S \subseteq F^n$ 且 $S \neq \emptyset$
2. $\forall \alpha, \beta \in S$，有 $\alpha + \beta \in S$（加法封闭）
3. $\forall \alpha \in S, \forall k \in F$，有 $k\alpha \in S$（数乘封闭）

【整理自PPT】

#### (3) 子空间的例子

- ⭐ **齐次方程组 $AX = 0$ 的实数解向量的全体** $\subseteq R^n$ 构成线性子空间。[来源：p6]
- $V_1 = \{(0, a_2, a_3, \cdots, a_n) | a_i \in R, i = 2, 3, \cdots, n\} \subseteq R^n$ 构成线性子空间。[来源：p6]

#### (4) 生成子空间

- **生成子空间**：设 $\alpha_1, \alpha_2, \cdots, \alpha_s$ 是 $F^n$ 中 $s$ 个元素，令 $L(\alpha_1, \alpha_2, \cdots, \alpha_s) = \{k_1\alpha_1 + k_2\alpha_2 + \cdots + k_s\alpha_s | k_i \in P, i = 1, 2, \cdots, s\}$，称 $L(\alpha_1, \alpha_2, \cdots, \alpha_s)$ 为由 $\alpha_1, \alpha_2, \cdots, \alpha_s$ 生成的线性子空间。[来源：p7]

#### (5) 反例与易错点

- ⭐ $V_2 = \{(1, a_2, a_3, \cdots, a_n) | a_i \in R, i = 2, 3, \cdots, n\} \subseteq R^n$ **不构成子空间**（因为不含零向量 / 加法不封闭）。[来源：p9]
- ⭐ $V_2 = \{x | A_n x = \beta \neq 0\} \subseteq R^n$ **不构成子空间**（非齐次方程组的解集不构成子空间）。[来源：p9]

---

### 三、n维向量空间的子空间的和与交

#### (1) 定义

已知 $U$ 和 $V$ 都是n维向量空间 $F^n$ 的子空间。[来源：p10]

- **子空间的和**：$U + V = \{u + v | u \in U, v \in V\}$
- **子空间的交**：$U \cap V = \{w | w \in U, w \in V\}$

#### (2) 定理/性质

- ⭐ $U + V$ 与 $U \cap V$ 都构成 $F^n$ 的子空间。[来源：p10]
- $U + V$ 称为空间 $U$ 与 $V$ 的和空间；$U \cap V$ 称为空间 $U$ 与 $V$ 的交空间。[来源：p10]

#### (3) 反例与易错点

- ⭐ **一般地，$U \cup V$ 不一定构成 $F^n$ 的子空间。** [来源：p10]

---

## 第21讲：向量的线性表示、线性相关和线性无关

### 一、线性组合与线性表出

#### (1) 定义

- **线性组合**：设 $\alpha_1, \alpha_2, \cdots, \alpha_m$ 是m个向量。对于向量 $\beta$，若存在m个数 $k_1, k_2, \cdots, k_m$，使得 $\beta = k_1\alpha_1 + k_2\alpha_2 + \cdots + k_m\alpha_m$，则称 $\beta$ 是 $\alpha_1, \alpha_2, \cdots, \alpha_m$ 的**线性组合**，或称 $\beta$ 可由 $\alpha_1, \alpha_2, \cdots, \alpha_m$ **线性表出（表示）**，称 $k_1, k_2, \cdots, k_m$ 为**表出系数**。[来源：p2]

#### (2) 等价条件（与方程组的关系）

⭐ **向量的线性表出与线性方程组解的关系**：[来源：p5-6，黄色高亮]

| 向量关系 | 方程组 $\beta = x_1\alpha_1 + x_2\alpha_2 + \cdots + x_m\alpha_m$ |
|---------|----------------------------------------------------------------|
| $\beta$ 可由 $\alpha_1, \cdots, \alpha_m$ 线性表出 | 方程组**有解** |
| $\beta$ 不能由 $\alpha_1, \cdots, \alpha_m$ 线性表出 | 方程组**无解** |
| $\beta$ 可线性表出，且表出系数**唯一** | 方程组有**唯一解** |
| $\beta$ 可线性表出，且表出系数**不唯一** | 方程组有**无穷多组解** |

#### (3) 推论/二级结论

- ⭐ 注意表示法不唯一，可有无数种。**什么情况下会唯一？当 $\alpha_1, \alpha_2, \cdots, \alpha_m$ 线性无关时表出系数唯一。** [来源：p3，p37]

---

### 二、向量组的线性表示

#### (1) 定义

- **向量组的线性表示**：设向量组 $\alpha_1, \alpha_2, \cdots, \alpha_s$，若向量组 $\beta_1, \beta_2, \cdots, \beta_m$ 中的每一个向量都可由 $\alpha_1, \alpha_2, \cdots, \alpha_s$ 线性表出，则称向量组 $\beta_1, \beta_2, \cdots, \beta_m$ 可由向量组 $\alpha_1, \alpha_2, \cdots, \alpha_s$ 线性表出。[来源：p9，红框]

#### (2) 矩阵表示形式

⭐ 若 $\beta_j = k_{1j}\alpha_1 + k_{2j}\alpha_2 + \cdots + k_{sj}\alpha_s$（$j = 1, 2, \cdots, m$），令 $A = (k_{ij})_{s \times m}$，则可写作：

$$
(\beta_1, \beta_2, \cdots, \beta_m) = (\alpha_1, \alpha_2, \cdots, \alpha_s)A
$$


[来源：p9，红框]

#### (3) 性质

- ⭐ **向量组线性表出具有传递性**：若 $(\alpha_1, \cdots, \alpha_s) = (\beta_1, \cdots, \beta_t)A$，$(\beta_1, \cdots, \beta_t) = (\gamma_1, \cdots, \gamma_n)B$，则 $(\alpha_1, \cdots, \alpha_s) = (\gamma_1, \cdots, \gamma_n)BA$，即 $\alpha_1, \cdots, \alpha_s$ 可由 $\gamma_1, \cdots, \gamma_n$ 线性表出。[来源：p10]

---

### 三、向量组的等价

#### (1) 定义

- **向量组的等价**：设有两个向量组 $\alpha_1, \alpha_2, \cdots, \alpha_s$ 和 $\beta_1, \beta_2, \cdots, \beta_t$，若 $\alpha_1, \alpha_2, \cdots, \alpha_s$ 可由 $\beta_1, \beta_2, \cdots, \beta_t$ 线性表出，$\beta_1, \beta_2, \cdots, \beta_t$ 也可由 $\alpha_1, \alpha_2, \cdots, \alpha_s$ 线性表出，则称向量组 $\alpha_1, \alpha_2, \cdots, \alpha_s$ 与向量组 $\beta_1, \beta_2, \cdots, \beta_t$ **等价**。[来源：p11]

- ⭐ **向量组等价意味着可以相互表示。** [来源：p11，红色字体]

#### (2) 性质

⭐ **向量组的等价关系**满足三个性质：[来源：p13]
1. **反身性**：向量组与自身等价
2. **对称性**：若组I与组II等价，则组II与组I等价
3. **传递性**：若组I与组II等价，组II与组III等价，则组I与组III等价

#### (3) 反例与易错点

- **No.**：由 $(\beta_1, \cdots, \beta_t) = (\beta_1, \cdots, \beta_t)AB$ 和 $(\beta_1, \cdots, \beta_t) = (\beta_1, \cdots, \beta_t)E$，**不能直接得到** $E = AB$。需要什么条件？需要 $\beta_1, \cdots, \beta_t$ 线性无关。[来源：p12，"No."标记]

---

### 四、线性相关与线性无关

#### (1) 定义

⭐ **线性相关**：设 $\alpha_1, \alpha_2, \cdots, \alpha_m$ 是m个n维向量，若存在m个**不全为0**的数 $k_1, k_2, \cdots, k_m$，使得 $k_1\alpha_1 + k_2\alpha_2 + \cdots + k_m\alpha_m = 0$，则称 $\alpha_1, \alpha_2, \cdots, \alpha_m$ **线性相关**。（反映这m个向量中存在多余的向量）[来源：p17，p24]

⭐ **线性无关**：否则称他们**线性无关**。即若 $k_1\alpha_1 + k_2\alpha_2 + \cdots + k_m\alpha_m = 0$ 当且仅当 $k_1 = k_2 = \cdots = k_m = 0$ 时成立，则称 $\alpha_1, \alpha_2, \cdots, \alpha_m$ **线性无关**。（反映这m个向量中没有多余的向量）[来源：p17，p24]

#### (2) 几何意义

- 两个2维向量线性相关 ⟺ 几何上：两个向量**共线**（或两个向量成比例）[来源：p18]
- 三个3维向量线性相关 ⟺ 几何上：这三个向量**共面** [来源：p18]

#### (3) 等价条件

⭐ **线性相关/无关与齐次方程组的关系**：[来源：p26，黄色高亮]

$$
\alpha_1, \alpha_2, \cdots, \alpha_m \text{ 线性相关(无关)} \Leftrightarrow \text{齐次方程组 } x_1\alpha_1 + x_2\alpha_2 + \cdots + x_m\alpha_m = 0 \text{ 有非零解(仅有零解)}
$$


⭐ **与矩阵秩的关系**：[来源：p27，黄色高亮]

$$
\alpha_1, \alpha_2, \cdots, \alpha_m \text{ 线性相关} \Leftrightarrow r(A) < m \quad (\text{A的秩} < \text{向量个数} = \text{A的列数})
$$


⭐ **推论1（方阵情形）**：n个n维向量线性相关(无关) $\Leftrightarrow$ $|A| = |\alpha_1, \alpha_2, \cdots, \alpha_n| = 0 (\neq 0)$ [来源：p27]

⭐ **推论2**：设 $m > n$，则 $R^n$ 中任意m个向量都**线性相关**。（向量个数 > 向量的分量个数 ⟹ 线性相关）[来源：p27，黄色高亮]

#### (4) 推论/二级结论

⭐ **一些有关向量线性相关性的结论**：[来源：p19-21，黄色高亮]

1. 一个n维向量 $\alpha$：当 $\alpha = 0$ 时，线性相关；否则线性无关。
2. 两个n维向量线性相关 $\Leftrightarrow$ 对应分量成比例。
3. m个n维向量中，若**含有0向量**，则这m个向量线性相关。
4. 若m个n维向量是线性无关的，则这m个向量中**没有0向量**。
5. m个n维向量中，若有**一部分向量线性相关**，则这m个向量线性相关。
6. 若m个n维向量是线性无关的，则这m个向量中的**任何一部分向量**，放在一起，也是线性无关的。

⭐ **线性相关的等价刻画**：[来源：p21，黄色高亮]

$$
\alpha_1, \alpha_2, \cdots, \alpha_m \text{ 线性相关} \Leftrightarrow \text{其中至少有一个向量可以由其他向量线性表出（至少一个多余的）}
$$


#### (5) 分量增减与线性相关性

- ⭐ 若m个n维向量是**线性无关**的，那么保持这m个n维向量的分量的相对位置的任何**n+k维向量仍然是线性无关**的。（分量增加，方程增多，解空间缩小，原来只有0解）[来源：p28]
- ⭐ 若m个n维向量是**线性相关**的，那么保持这m个n维向量的分量的相对位置的任何**k(≤n)维向量是线性相关**的。（分量减少，方程减少，解空间扩大，原来已有非0解）[来源：p29]

【整理自PPT】记忆口诀：**无关延长还无关，相关缩短还相关**。

#### (6) 基本n维单位向量

$$
\varepsilon_1 = \begin{pmatrix} 1 \\ 0 \\ \vdots \\ 0 \end{pmatrix}, \varepsilon_2 = \begin{pmatrix} 0 \\ 1 \\ \vdots \\ 0 \end{pmatrix}, \cdots, \varepsilon_n = \begin{pmatrix} 0 \\ 0 \\ \vdots \\ 1 \end{pmatrix}
$$


- n个n维向量 $\varepsilon_1, \varepsilon_2, \cdots, \varepsilon_n$ 是**线性无关**的。[来源：p30]
- 任意n维向量 $\alpha = (a_1, a_2, \cdots, a_n)$ 都可以表示为 $\alpha = a_1\varepsilon_1 + a_2\varepsilon_2 + \cdots + a_n\varepsilon_n$。[来源：p30]

---

### 五、判断向量组线性相关（线性无关）的方法

#### (1) 常用技巧

⭐ **基本方法**：[来源：p31]
1. 设表达式 $x_1\alpha_1 + x_2\alpha_2 + \cdots + x_m\alpha_m = 0$
2. 将之看成一个以 $x_1, x_2, \cdots, x_m$ 为未知数的齐次方程组
3. 如果能够求出一个**非0解**，那么 $\alpha_1, \alpha_2, \cdots, \alpha_m$ **线性相关**
4. 如果方程组**只有0解**，那么 $\alpha_1, \alpha_2, \cdots, \alpha_m$ **线性无关**

⭐ **判定条件汇总**：[来源：p33，红色字体]

| 情形 | 线性相关 | 线性无关 |
|------|---------|---------|
| 一般情况 | $r(A) < m$（系数矩阵的秩 < 列数） | $r(A) = m$（系数矩阵的秩 = 列数） |
| 方阵情形 | $|A| = 0$（行列式 = 0） | $|A| \neq 0$（行列式 ≠ 0） |

（联想Cramer法则）

---

## 第22讲：向量组的秩（一）

### 一、极大线性无关组与向量组的秩

#### (1) 定义

⭐ **极大线性无关组**：设有向量组 $\alpha_1, \alpha_2, \cdots, \alpha_m$，若 $\alpha_{i_1}, \alpha_{i_2}, \cdots, \alpha_{i_r}$ 是向量组中的r个向量，且满足：[来源：p2]
1. $\alpha_{i_1}, \alpha_{i_2}, \cdots, \alpha_{i_r}$ 是**线性无关**的（没有多余的）
2. 向量组 $\alpha_1, \alpha_2, \cdots, \alpha_m$ 的**任意一个向量**都可以由 $\alpha_{i_1}, \alpha_{i_2}, \cdots, \alpha_{i_r}$ 线性表出（和原向量组等价）

则称 $\alpha_{i_1}, \alpha_{i_2}, \cdots, \alpha_{i_r}$ 是向量组 $\alpha_1, \alpha_2, \cdots, \alpha_m$ 的一个**极大线性无关组**。

⭐ **两个条件缺一不可**。[来源：p5]

#### (2) 极大线性无关组的等价理解

- 在向量组中逐个挑选向量，始终保持线性无关的性质，所得到向量的**最大个数**。[来源：p6]
- 向量组中如果一个向量能够被其他向量表示出来，那么从中删除掉这个向量，直到找不到可以删除的向量为止。[来源：p7]

#### (3) 向量组的秩

⭐ **定义**：向量组 $\alpha_1, \alpha_2, \cdots, \alpha_m$ 的极大线性无关组所含向量的个数，被称为**向量组的秩**，记作 $r(\alpha_1, \alpha_2, \cdots, \alpha_m) = r$。[来源：p14]

⭐ **规定**：全由零向量组成的向量组的秩为**零**（没有极大线性无关组）。[来源：p8，p14]

#### (4) 定理/命题

⭐ **重要定理**：给定两个向量组 (I) $\alpha_1, \alpha_2, \cdots, \alpha_s$ 和 (II) $\beta_1, \beta_2, \cdots, \beta_t$，如果：[来源：p13]
1. $\alpha_1, \alpha_2, \cdots, \alpha_s$ 可由 $\beta_1, \beta_2, \cdots, \beta_t$ 线性表出
2. $\alpha_1, \alpha_2, \cdots, \alpha_s$ 线性无关

那么 $s \leq t$。（等价形式：线性无关向量组可由另一组表出，则前者个数 ≤ 后者个数）

⭐ **推论1**：两个**线性无关**的**等价**的向量组所含的向量的个数必定**相等**。[来源：p13，p14]

⭐ **推论2**：一个向量组若有两个极大线性无关组，那么他们所含的向量的个数**相等**。[来源：p14]

#### (5) 推论/二级结论

- 显然，如果一个向量组有极大线性无关组，那么它与它的极大线性无关组**等价**。[来源：p2]
- 与原向量组等价的线性无关的向量组。[来源：p9]
- 由向量组等价的传递性，向量组的两个不同的极大线性无关组之间是**等价的**。[来源：p9]

---

### 二、关于向量组的秩的有关结论（好记，常用）

⭐ 以下结论非常重要：[来源：p16，黄色高亮]

1. 向量组 $\alpha_1, \alpha_2, \cdots, \alpha_m$ **线性无关** $\Leftrightarrow$ $r(\alpha_1, \alpha_2, \cdots, \alpha_m) = m$

2. 若 $r(\alpha_1, \alpha_2, \cdots, \alpha_m) = r > 0$，则向量组中任意 $k > r$ 个向量都是**线性相关**的。

3. 若 $r(\alpha_1, \alpha_2, \cdots, \alpha_m) = r > 0$，则向量组任意r个线性无关的向量都是它的一个**极大线性无关组**。

4. ⭐ 若向量组 $\alpha_1, \alpha_2, \cdots, \alpha_m$ 可由向量组 $\beta_1, \beta_2, \cdots, \beta_s$ 线性表出，则 $r(\alpha_1, \alpha_2, \cdots, \alpha_m) \leq r(\beta_1, \beta_2, \cdots, \beta_s)$。

5. ⭐ **等价的向量组有相同的秩。**

---

### 三、向量组的秩与矩阵的秩的关系

#### (1) 定义

- **矩阵的行秩**：矩阵行向量组的秩。
- **矩阵的列秩**：矩阵列向量组的秩。[来源：p19]

#### (2) 定理

⭐ **核心定理**：**矩阵的秩 = 矩阵的列秩 = 矩阵的行秩** [来源：p19，p22，红色字体]

---

### 四、求向量组的秩和极大线性无关组的方法

#### (1) 方法1（利用子式）

[来源：p22]
1. 初等变换得到矩阵的秩为r
2. 在矩阵中找到一个**r级子式不等于0**
3. 这个r级子式对应的行（列），是行（列）向量组的极大线性无关组

#### (2) 方法2（规范行阶梯形）

⭐ [来源：p23]
1. 将向量组**按列摆放**为一个矩阵（如果是列向量，直接按列摆放；如果是行向量，则先转置成列向量，再摆放）
2. 对矩阵**只做行变换**化为**规范的阶梯形矩阵**
3. 所得矩阵中，**非0行数目**就是矩阵的秩，也就是向量组的秩
4. **非0行中第一非0元素1，所对应的列**，放在一起形成极大线性无关组，且容易得到其他向量的表示系数

---

## 第23讲：向量组的秩（二）

### 一、关于向量组的秩的有关结论（续）

⭐ [来源：p8，黄色高亮]

1. 若向量组 $\alpha_1, \alpha_2, \cdots, \alpha_m$ 可由向量组 $\beta_1, \beta_2, \cdots, \beta_s$ 线性表出，则 $r(\alpha_1, \alpha_2, \cdots, \alpha_m) \leq r(\beta_1, \beta_2, \cdots, \beta_s)$。

2. **等价的向量组有相同的秩。**

---

### 二、矩阵乘积的秩

#### (1) 定理

⭐ 设 $A$ 为 $m \times p$ 阵，$B$ 为 $p \times n$ 阵，则：[来源：p9]

$$
r(AB) \leq \min\{r(A), r(B)\}
$$


#### (2) 证明思路

- 矩阵 $AB$ 的**列向量组**可由矩阵 $A$ 的列向量组**线性表示**。[来源：p9]
- 矩阵 $AB$ 的**行向量组**可由矩阵 $B$ 的行向量组**线性表示**。[来源：p10]
- 向量组I可由向量组II线性表示，那么组I的秩**小于或等于**组II的秩。

#### (3) 推论/二级结论

- 局部线性无关的组，总可以增加一些新的向量进去，构成一个极大线性无关组。[来源：p13]

---

## 附：公式速查表

### 线性表出判定

$$
\beta \text{ 可由 } \alpha_1, \cdots, \alpha_m \text{ 线性表出} \Leftrightarrow \text{方程组 } \beta = x_1\alpha_1 + \cdots + x_m\alpha_m \text{ 有解} \Leftrightarrow r(A) = r(A|\beta)
$$


### 线性相关判定

$$
\alpha_1, \cdots, \alpha_m \text{ 线性相关} \Leftrightarrow Ax = 0 \text{ 有非零解} \Leftrightarrow r(A) < m
$$


### n个n维向量

$$
\alpha_1, \cdots, \alpha_n \text{ (n维) 线性相关} \Leftrightarrow |A| = 0
$$


### 向量个数与维数

$$
m > n \Rightarrow m \text{ 个 } n \text{ 维向量必线性相关}
$$


### 向量组的秩

- $r(\alpha_1, \cdots, \alpha_m) = m \Leftrightarrow \alpha_1, \cdots, \alpha_m$ 线性无关
- 组I可由组II表出 $\Rightarrow r(\text{组I}) \leq r(\text{组II})$
- 组I与组II等价 $\Rightarrow r(\text{组I}) = r(\text{组II})$

### 矩阵的秩

$$
r(A) = \text{列秩} = \text{行秩}
$$

$$
r(AB) \leq \min\{r(A), r(B)\}
$$
