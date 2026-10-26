# 第8章 数项级数

> Arietids Learn · 个人课程复习笔记
> 在线阅读：https://learn.arietids.net/courses/analysis-1/chapter-08/

## 关键考点总览

1. **级数收敛的定义**：部分和数列收敛
2. **Cauchy收敛准则**：级数收敛的充要条件
3. **级数收敛的必要条件**：$\lim_{n\to\infty} a_n = 0$
4. **正项级数判别法**：比较判别法、根值判别法、比值判别法、积分判别法、Raabe判别法
5. **p-级数敛散性**：$p>1$ 收敛，$p\leq 1$ 发散
6. **交错级数Leibniz判别法**
7. **Abel-Dirichlet判别法**
8. **绝对收敛与条件收敛的定义及关系**
9. **上、下极限的定义与性质**
10. **重排级数与Cauchy乘积**

---

## §8-1 数项级数概念和性质

### 一、数项级数的概念

#### 1. 定义

- **无穷级数（级数）**：设 $a_1, a_2, \ldots, a_n, \ldots$ 是一个数列，形式和 $\displaystyle\sum_{n=1}^{\infty} a_n = a_1 + a_2 + \cdots + a_n + \cdots$ 称为**无穷级数**（简称级数），$a_n$ 称为级数的**通项**。[来源：§8-1 p4，定义]

- **部分和**：$\displaystyle S_n = \sum_{k=1}^{n} a_k = a_1 + a_2 + \cdots + a_n$ 称为级数的前 $n$ 项**部分和**。[来源：§8-1 p4，定义]

- **级数收敛**：若 $\displaystyle\lim_{n\to\infty} S_n = S$，则称级数 $\displaystyle\sum_{n=1}^{\infty} a_n$ **收敛**，且收敛于 $S$，$S$ 称为级数的**和**，记为 $\displaystyle\sum_{n=1}^{\infty} a_n = S$。[来源：§8-1 p4，定义]

- **级数发散**：若 $\{S_n\}$ 发散，则称级数 $\displaystyle\sum_{n=1}^{\infty} a_n$ **发散**。若 $\displaystyle\lim_{n\to\infty} S_n = +\infty(-\infty)$，也称级数发散到 $+\infty(-\infty)$。[来源：§8-1 p5，定义]

#### 2. 重要例子

- **几何级数**：$\displaystyle\sum_{n=1}^{\infty} aq^{n-1}$（$a \neq 0$）
  - 当 $|q| < 1$ 时收敛，和为 $\dfrac{a}{1-q}$
  - 当 $|q| \geq 1$ 时发散
  【整理自 PPT】[来源：§8-1 例1]

- **调和级数**：$\displaystyle\sum_{n=1}^{\infty} \frac{1}{n}$ **发散**。[来源：§8-1 例2]

#### 3. Cauchy收敛准则

$$
\sum_{n=1}^{\infty} a_n \text{ 收敛} \Leftrightarrow \forall\varepsilon > 0,\ \exists N \in \mathbf{N},\ \forall n \ge N,\ \forall p \in \mathbf{N},\ p\ge 1:\ \left|\sum_{k=n+1}^{n+p} a_k\right|<\varepsilon
$$


[来源：§8-1 p6，Cauchy收敛准则]

**Cauchy发散准则**：$\exists \varepsilon_0 > 0$，$\forall N \in \mathbf{N}$，$\exists n > N$，$\exists p \in \mathbf{N}$：$|a_{n+1} + \cdots + a_{n+p}| \geq \varepsilon_0$。【整理自 PPT】[来源：§8-1 p6，想一想]

#### 4. 推论

**推论**：将级数增加、删减、改换有限项，不改变敛散性。[来源：§8-1 p6，推论]

---

### 二、级数的基本性质

#### 1. 线性性

若级数 $\displaystyle\sum_{n=1}^{\infty} a_n = S$，$\displaystyle\sum_{n=1}^{\infty} b_n = T$，则级数 $\displaystyle\sum_{n=1}^{\infty} (\alpha a_n + \beta b_n) = \alpha S + \beta T$。[来源：§8-1 p7，线性性]

**注意**：若 $\displaystyle\sum_{n=1}^{\infty} a_n$，$\displaystyle\sum_{n=1}^{\infty} b_n$ 均发散，则 $\displaystyle\sum_{n=1}^{\infty} (a_n + b_n)$ 敛散性不确定。【整理自 PPT】[来源：§8-1 p7，问题]

#### 2. 结合律

若级数收敛于和 $S$，则将相邻若干项加括号成一项所得新级数仍收敛于 $S$。[来源：§8-1 p7，结合律]

**注**：
- 可用于判级数发散（加括号后发散 $\Rightarrow$ 原级数发散）
- 其逆命题不成立（加括号后收敛 $\not\Rightarrow$ 原级数收敛）
[来源：§8-1 p7，注]

#### 3. 级数收敛的必要条件

若级数 $\displaystyle\sum_{n=1}^{\infty} a_n$ 收敛，则 $\displaystyle\lim_{n\to\infty} a_n = 0$。[来源：§8-1 p8，必要条件]

**注意**：
- $\displaystyle\lim_{n\to\infty} a_n \neq 0$ 或不存在 $\Rightarrow$ $\displaystyle\sum_{n=1}^{\infty} a_n$ 发散
- $\displaystyle\lim_{n\to\infty} a_n = 0$ **不一定能导出** $\displaystyle\sum_{n=1}^{\infty} a_n$ 收敛（如调和级数）
[来源：§8-1 p8，注意]

---

### 三、级数的应用——Koch雪花

**Koch雪花曲线**：
- 长度：$\displaystyle s = \lim_{n\to\infty}\left[(3\times 4^n) \times \frac{1}{3^n}\right] = +\infty$
- 面积：$\displaystyle S = \frac{\sqrt{3}}{4} + \frac{3\sqrt{3}}{16}\sum_{n=1}^{\infty}\left(\frac{4}{9}\right)^n = \frac{2\sqrt{3}}{5}$

**结论**：Koch雪花曲线长度无穷，但所围面积有限（"无中生有"）。[来源：§8-1 p9-14，应用]

---

## §8-2 数列的上、下极限

### 一、上、下极限的概念

#### 1. 定义

设数列 $\{x_n\}$ 为实数列（允许无界），记 $\alpha_n = \inf_{k\geq n}\{x_k\}$，$\beta_n = \sup_{k\geq n}\{x_k\}$（允许取值为 $\pm\infty$），则 $\{\alpha_n\}$ 单增，$\{\beta_n\}$ 单减。

- **上极限**：若 $\{x_n\}$ 有上界，则称 $\displaystyle\overline{\lim_{n\to\infty}} x_n = \lim_{n\to\infty} \beta_n = \lim_{n\to\infty} \sup_{k\geq n}\{x_k\}$ 为 $\{x_n\}$ 的**上极限**。若 $\{x_n\}$ 无上界，则规定 $\displaystyle\overline{\lim_{n\to\infty}} x_n = +\infty$。[来源：§8-2 p17，定义]

- **下极限**：$\displaystyle\underline{\lim_{n\to\infty}} x_n = \lim_{n\to\infty} \alpha_n = \lim_{n\to\infty} \inf_{k\geq n}\{x_k\}$。若 $\{x_n\}$ 无下界，则规定 $\displaystyle\underline{\lim_{n\to\infty}} x_n = -\infty$。【整理自 PPT】[来源：§8-2 p17，想一想]

---

### 二、上、下极限的性质

#### 定理1

1. $\displaystyle\underline{\lim_{n\to\infty}} x_n \leq \overline{\lim_{n\to\infty}} x_n$

2. $\displaystyle\overline{\lim_{n\to\infty}} (-x_n) = -\underline{\lim_{n\to\infty}} x_n$，$\displaystyle\underline{\lim_{n\to\infty}} (-x_n) = -\overline{\lim_{n\to\infty}} x_n$

3. 当 $x_n > 0$ 时，$\displaystyle\overline{\lim_{n\to\infty}} \frac{1}{x_n} = \frac{1}{\underline{\lim_{n\to\infty}} x_n}$，$\displaystyle\underline{\lim_{n\to\infty}} \frac{1}{x_n} = \frac{1}{\overline{\lim_{n\to\infty}} x_n}$

[来源：§8-2 p18，定理1]

#### 定理2

1. 若 $x_n \leq y_n$，则 $\displaystyle\overline{\lim_{n\to\infty}} x_n \leq \overline{\lim_{n\to\infty}} y_n$，$\displaystyle\underline{\lim_{n\to\infty}} x_n \leq \underline{\lim_{n\to\infty}} y_n$

2. $\displaystyle\underline{\lim_{n\to\infty}} x_n + \underline{\lim_{n\to\infty}} y_n \leq \underline{\lim_{n\to\infty}} (x_n + y_n) \leq \begin{cases} \underline{\lim_{n\to\infty}} x_n + \overline{\lim_{n\to\infty}} y_n \\ \overline{\lim_{n\to\infty}} x_n + \underline{\lim_{n\to\infty}} y_n \end{cases} \leq \overline{\lim_{n\to\infty}} (x_n + y_n) \leq \overline{\lim_{n\to\infty}} x_n + \overline{\lim_{n\to\infty}} y_n$

3. 当 $x_n > 0$，$y_n > 0$ 时，乘法有类似不等式链

[来源：§8-2 p19，定理2]

#### 定理3（上极限的充要条件）

$$
\overline{\lim_{n\to\infty}} x_n = a \Leftrightarrow \begin{cases} (1) \exists\{x_n\}\text{的子列}\{x_{n_k}\}\text{使}\lim_{k\to\infty} x_{n_k} = a \\ (2) \forall\{x_n\}\text{的收敛子列}\{x_{n'_k}\}\text{有}\lim_{k\to\infty} x_{n'_k} = a' \leq a \end{cases}
$$


**结论**：上、下极限是收敛子列中的**最大、最小极限**。[来源：§8-2 p20，定理3]

#### 定理4（极限存在的充要条件）

$$
\lim_{n\to\infty} x_n = a \Leftrightarrow \overline{\lim_{n\to\infty}} x_n = a = \underline{\lim_{n\to\infty}} x_n
$$


[来源：§8-2 p20，定理4]

**推论**：若 $\displaystyle\lim_{n\to\infty} y_n = a > 0$，则 $\displaystyle\overline{\lim_{n\to\infty}} (x_n \cdot y_n) = a \cdot \overline{\lim_{n\to\infty}} x_n$。[来源：§8-2 p20，结论]

#### 重要不等式（例3）

设 $\{x_n\}$ 为正数列，则
$$
\underline{\lim_{n\to\infty}} \frac{x_{n+1}}{x_n} \leq \underline{\lim_{n\to\infty}} \sqrt[n]{x_n} \leq \overline{\lim_{n\to\infty}} \sqrt[n]{x_n} \leq \overline{\lim_{n\to\infty}} \frac{x_{n+1}}{x_n}
$$


**推论**：$\displaystyle\lim_{n\to\infty} \frac{x_{n+1}}{x_n} = a \Rightarrow \lim_{n\to\infty} \sqrt[n]{x_n} = a$（反之不然）[来源：§8-2 p21，例3及推论]

**上极限的必要不充分条件**：$\displaystyle\overline{\lim_{n\to\infty}} x_n = \beta \Rightarrow \forall\varepsilon > 0, \exists N \in \mathbf{N}, \forall n > N: x_n < \beta + \varepsilon$。[来源：§8-2 p21，注]

---

## §8-3 正项级数

### 一、正项级数的概念

#### 1. 定义

若级数 $\displaystyle\sum_{n=1}^{\infty} a_n$ 满足 $a_n \geq 0$，则称之为**正项级数**。[来源：§8-3 p23，定义]

#### 2. 收敛原理

**定理（收敛原理）**：设 $a_n \geq 0$，则
$$
\sum_{n=1}^{\infty} a_n \text{ 收敛} \Leftrightarrow \text{部分和 } \{S_n\} \text{ 有上界}
$$


**注**：若 $\{S_n\}$ 无上界，则 $\displaystyle\sum_{n=1}^{\infty} a_n = +\infty$。[来源：§8-3 p23，定理]

#### 3. p-级数

**p-级数**：$\displaystyle\sum_{n=1}^{\infty} \frac{1}{n^p}$
- 当 $p > 1$ 时**收敛**
- 当 $p \leq 1$ 时**发散**
[来源：§8-3 例1]

---

### 二、正项级数敛散性判别法

#### 1. 比较判别法

**定理1（不等式形式）**：若级数 $\displaystyle\sum_{n=1}^{\infty} a_n$ 与 $\displaystyle\sum_{n=1}^{\infty} b_n$ 均为正项级数，且 $a_n \leq b_n$，则
- $\displaystyle\sum_{n=1}^{\infty} b_n$ 收敛 $\Rightarrow$ $\displaystyle\sum_{n=1}^{\infty} a_n$ 收敛
- $\displaystyle\sum_{n=1}^{\infty} a_n$ 发散 $\Rightarrow$ $\displaystyle\sum_{n=1}^{\infty} b_n$ 发散
[来源：§8-3 p24，定理1]

**推论1（极限形式）**：设 $a_n \geq 0$，$b_n > 0$，且 $\displaystyle\lim_{n\to\infty} \frac{a_n}{b_n} = l$，则
- 当 $0 < l < +\infty$ 时，$\displaystyle\sum_{n=1}^{\infty} a_n$ 与 $\displaystyle\sum_{n=1}^{\infty} b_n$ **同敛散**
- 当 $l = 0$ 时，$\displaystyle\sum_{n=1}^{\infty} b_n$ 收敛 $\Rightarrow$ $\displaystyle\sum_{n=1}^{\infty} a_n$ 收敛
- 当 $l = +\infty$ 时，$\displaystyle\sum_{n=1}^{\infty} b_n$ 发散 $\Rightarrow$ $\displaystyle\sum_{n=1}^{\infty} a_n$ 发散
[来源：§8-3 p25，推论1]

**说明**：
1. 常选择**几何级数**与**p级数**作参照级数
2. 常估计通项无穷小 $\{a_n\}$ 对 $1/n$ 的阶
[来源：§8-3 p25，说明]

**推论2（p-判别法）**：设 $a_n \geq 0$，且 $\displaystyle\lim_{n\to\infty} n^p a_n = l$，则
- 当 $0 \leq l < +\infty$，且 $p > 1$ 时，$\displaystyle\sum_{n=1}^{\infty} a_n$ **收敛**
- 当 $0 < l \leq +\infty$，且 $p \leq 1$ 时，$\displaystyle\sum_{n=1}^{\infty} a_n$ **发散**
[来源：§8-3 p26，推论2]

**推论3（比较判别法二）**：若级数 $\displaystyle\sum_{n=1}^{\infty} a_n$ 与 $\displaystyle\sum_{n=1}^{\infty} b_n$ 均为正项级数，且存在 $N\in\mathbf{N}$ 使得对一切 $n\ge N$ 都有 $a_n>0,\ b_n>0$ 并满足 $\dfrac{a_{n+1}}{a_n} \leq \dfrac{b_{n+1}}{b_n}$，则
- $\displaystyle\sum_{n=1}^{\infty} b_n$ 收敛 $\Rightarrow$ $\displaystyle\sum_{n=1}^{\infty} a_n$ 收敛
- $\displaystyle\sum_{n=1}^{\infty} a_n$ 发散 $\Rightarrow$ $\displaystyle\sum_{n=1}^{\infty} b_n$ 发散
[来源：§8-3 p27，推论3]

#### 2. Cauchy根值判别法

若正项级数 $\displaystyle\sum_{n=1}^{\infty} a_n$ 满足 $\displaystyle\overline{\lim_{n\to\infty}} \sqrt[n]{a_n} = \rho$，则
- 当 $0 \leq \rho < 1$ 时，$\displaystyle\sum_{n=1}^{\infty} a_n$ **收敛**
- 当 $\rho > 1$ 时，$\displaystyle\sum_{n=1}^{\infty} a_n$ **发散**

**注**：当 $\rho = 1$ 时，判别法失效。如 $\displaystyle\sum_{n=1}^{\infty} \frac{1}{n}$ 与 $\displaystyle\sum_{n=1}^{\infty} \frac{1}{n^2}$。[来源：§8-3 p28，根值判别法]

#### 3. 比值判别法

设 $a_n > 0$，则
- 当 $\displaystyle\overline{\lim_{n\to\infty}} \frac{a_{n+1}}{a_n} = \rho < 1$ 时，$\displaystyle\sum_{n=1}^{\infty} a_n$ **收敛**
- 当 $\displaystyle\underline{\lim_{n\to\infty}} \frac{a_{n+1}}{a_n} = \rho > 1$ 时，$\displaystyle\sum_{n=1}^{\infty} a_n$ **发散**

**注**：当 $\displaystyle\lim_{n\to\infty} \frac{a_{n+1}}{a_n} = 1$ 时，判别法失效。[来源：§8-3 p29，比值判别法]

#### 4. 积分判别法

**定理**：若非负函数 $f$ 在 $[1,+\infty)$ 上单减，则无穷级数 $\displaystyle\sum_{n=1}^{\infty} f(n)$ 与无穷积分 $\displaystyle\int_1^{+\infty} f(x)\mathrm{d}x$ **同敛散**。[来源：§8-3 p30，积分判别法]

**重要结论**：$\displaystyle\sum_{n=2}^{\infty} \frac{1}{n(\ln n)^p}$ 当 $p > 1$ 时收敛，当 $p \leq 1$ 时发散。[来源：§8-3 例8]

#### 5. Raabe判别法

设 $a_n > 0$，则
- 若 $\exists r > 1$，$N \in \mathbf{N}$，使 $\forall n > N$：$n\left(\dfrac{a_n}{a_{n+1}} - 1\right) \geq r$，则 $\displaystyle\sum_{n=1}^{\infty} a_n$ **收敛**
- 若 $\exists N \in \mathbf{N}$，使 $\forall n > N$：$n\left(\dfrac{a_n}{a_{n+1}} - 1\right) \leq 1$，则 $\displaystyle\sum_{n=1}^{\infty} a_n$ **发散**
[来源：§8-3 p31，Raabe判别法]

**推论（Raabe极限形式）**：设 $a_n > 0$，则
- 若 $\displaystyle\underline{\lim_{n\to\infty}} n\left(\frac{a_n}{a_{n+1}} - 1\right) = r > 1$，则 $\displaystyle\sum_{n=1}^{\infty} a_n$ **收敛**
- 若 $\displaystyle\overline{\lim_{n\to\infty}} n\left(\frac{a_n}{a_{n+1}} - 1\right) = r < 1$，则 $\displaystyle\sum_{n=1}^{\infty} a_n$ **发散**

**注**：$r = 1$ 时，判别法失效。反例：$\displaystyle\sum_{n=2}^{\infty} \frac{1}{n\ln n}$ 和 $\displaystyle\sum_{n=2}^{\infty} \frac{1}{n\ln^2 n}$。[来源：§8-3 p32，推论]

---

## §8-4 任意项级数

### 一、绝对收敛与条件收敛

#### 1. 定义

- **绝对收敛**：若级数 $\displaystyle\sum_{n=1}^{\infty} |a_n|$ 收敛，则称 $\displaystyle\sum_{n=1}^{\infty} a_n$ **绝对收敛**。[来源：§8-4 p34，定义]

- **条件收敛**：若 $\displaystyle\sum_{n=1}^{\infty} |a_n|$ 发散，而 $\displaystyle\sum_{n=1}^{\infty} a_n$ 收敛，则称 $\displaystyle\sum_{n=1}^{\infty} a_n$ **条件收敛**。[来源：§8-4 p34，定义]

#### 2. 命题

**命题**：若级数 $\displaystyle\sum_{n=1}^{\infty} a_n$ 绝对收敛，则 $\displaystyle\sum_{n=1}^{\infty} a_n$ 必收敛。[来源：§8-4 p34，命题]

**问题**：若 $\displaystyle\sum_{n=1}^{\infty} a_n$ 绝对收敛，$\displaystyle\sum_{n=1}^{\infty} b_n$ 条件收敛，则 $\displaystyle\sum_{n=1}^{\infty} (a_n + b_n)$ 是**条件收敛**。【整理自 PPT】[来源：§8-4 p34，问题]

---

### 二、交错级数收敛性判别法

#### 1. 交错级数

正负项相间的级数称为**交错级数**，其形式为 $\displaystyle\sum_{n=1}^{\infty} (-1)^{n-1} a_n$ 或 $\displaystyle\sum_{n=1}^{\infty} (-1)^n a_n$（其中 $a_n > 0$）。[来源：§8-4 p35，定义]

#### 2. Leibniz判别法

若交错级数 $\displaystyle\sum_{n=1}^{\infty} (-1)^{n-1} a_n$（其中 $a_n > 0$）满足：
1. $a_{n+1} \leq a_n$（单调递减）
2. $\displaystyle\lim_{n\to\infty} a_n = 0$

则级数 $\displaystyle\sum_{n=1}^{\infty} (-1)^{n-1} a_n$ **收敛**，且 $\displaystyle 0 \leq \sum_{n=1}^{\infty} (-1)^{n-1} a_n \leq a_1$。[来源：§8-4 p35，Leibniz判别法]

---

### 三、A-D判别法

#### 1. Abel变换

**定理**：设有 $\{a_n\}$，$\{b_n\}$，记 $B_k = b_1 + b_2 + \cdots + b_k$，则 $\forall n \in \mathbf{N}$：
$$
\sum_{k=1}^{n} a_k b_k = a_n B_n + \sum_{k=1}^{n-1} B_k (a_k - a_{k+1})
$$

[来源：§8-4 p37，Abel变换]

**Abel引理**：设 $\{a_n\}$ 单调，且 $|B_k| \leq M$，则
$$
\left|\sum_{k=1}^{n} a_k b_k\right| \leq M(|a_1| + 2|a_n|)
$$

[来源：§8-4 p37，Abel引理]

#### 2. A-D判别法

设 $\{a_n\}$，$\{b_n\}$ 满足下两组条件之一，则 $\displaystyle\sum_{n=1}^{\infty} a_n b_n$ **收敛**：

**(Abel)** $\{a_n\}$ 单调有界，$\displaystyle\sum_{n=1}^{\infty} b_n$ 收敛

**(Dirichlet)** $\{a_n\}$ 单调趋于 $0$，$\displaystyle\sum_{n=1}^{\infty} b_n$ 部分和有界

[来源：§8-4 p38，A-D判别法]

**重要结论**：$\displaystyle\sum_{n=1}^{\infty} \frac{\sin n}{n}$ **条件收敛**。[来源：§8-4 例4]

---

## §8-5 收敛级数的运算性质*

### 一、重排级数

#### 1. 正部和负部

设有任意项级数 $\displaystyle\sum_{n=1}^{\infty} a_n$，称
$$
a_n^+ = \frac{|a_n| + a_n}{2} \quad \text{和} \quad a_n^- = \frac{|a_n| - a_n}{2}
$$

为 $a_n$ 的**正部**和**负部**。[来源：§8-5 p40，定义]

**简单事实**：$a_n = a_n^+ - a_n^-$，$|a_n| = a_n^+ + a_n^-$。[来源：§8-5 p40]

**命题**：
- 若 $\displaystyle\sum_{n=1}^{\infty} a_n$ 绝对收敛，则 $\displaystyle\sum_{n=1}^{\infty} a_n^+$ 和 $\displaystyle\sum_{n=1}^{\infty} a_n^-$ 都收敛
- 若 $\displaystyle\sum_{n=1}^{\infty} a_n$ 条件收敛，则 $\displaystyle\sum_{n=1}^{\infty} a_n^+$ 和 $\displaystyle\sum_{n=1}^{\infty} a_n^-$ 都发散至 $+\infty$
[来源：§8-5 p40，命题]

#### 2. 重排级数定义

设有级数 $\displaystyle\sum_{n=1}^{\infty} a_n$，$f: \mathbf{N} \to \mathbf{N}$ 为双射，则称 $\displaystyle\sum_{n=1}^{\infty} a_{f(n)}$ 是 $\displaystyle\sum_{n=1}^{\infty} a_n$ 的一个**重排级数**。[来源：§8-5 p41，定义]

#### 3. 重排级数定理

**定理**：设 $a_n \geq 0$，则 $\displaystyle\sum_{n=1}^{\infty} a_n$ 的任意重排级数 $\displaystyle\sum_{n=1}^{\infty} a_{f(n)}$ 与 $\displaystyle\sum_{n=1}^{\infty} a_n$ 具有相同的敛散性，且收敛时和不变。[来源：§8-5 p41，定理]

**定理**：设 $\displaystyle\sum_{n=1}^{\infty} a_n$ **绝对收敛**，则其任意重排级数 $\displaystyle\sum_{n=1}^{\infty} a_{f(n)}$ 也绝对收敛，且和不变。[来源：§8-5 p42，定理]

**定理（Riemann）**：设 $\displaystyle\sum_{n=1}^{\infty} a_n$ **条件收敛**，则对 $\forall a \in [-\infty, +\infty]$，存在重排级数 $\displaystyle\sum_{n=1}^{\infty} a_{f(n)}$，满足 $\displaystyle\sum_{n=1}^{\infty} a_{f(n)} = a$。[来源：§8-5 p42，Riemann定理]

---

### 二、级数乘积

#### 1. Cauchy乘积（对角线乘积）

记 $\displaystyle c_n = \sum_{k=1}^{n} a_k b_{n+1-k}$，则称 $\displaystyle\sum_{n=1}^{\infty} c_n$ 为 $\displaystyle\sum_{n=1}^{\infty} a_n$ 和 $\displaystyle\sum_{n=1}^{\infty} b_n$ 的**对角线乘积**（或**Cauchy乘积**）。[来源：§8-5 p44，定义]

#### 2. Mertens定理

**定理（Mertens）**：设 $\displaystyle\sum_{n=1}^{\infty} a_n = A$，$\displaystyle\sum_{n=1}^{\infty} b_n = B$，且**至少其一绝对收敛**，则它们的Cauchy乘积收敛，且 $\displaystyle\sum_{n=1}^{\infty} c_n = AB$。[来源：§8-5 p45，Mertens定理]

#### 3. Abel定理

**定理（Abel）**：设 $\displaystyle\sum_{n=1}^{\infty} a_n = A$，$\displaystyle\sum_{n=1}^{\infty} b_n = B$。若它们的Cauchy乘积收敛，且 $\displaystyle\sum_{n=1}^{\infty} c_n = C$，则 $C = AB$。[来源：§8-5 p47，Abel定理]

#### 4. 绝对收敛级数乘积

**定理**：设 $\displaystyle\sum_{n=1}^{\infty} a_n$，$\displaystyle\sum_{n=1}^{\infty} b_n$ **绝对收敛**，则将 $a_i b_j$（$i, j = 1, 2, \ldots$）任意排序所得级数绝对收敛，且和为 $\displaystyle\left(\sum_{n=1}^{\infty} a_n\right)\left(\sum_{n=1}^{\infty} b_n\right)$。[来源：§8-5 p48，定理]

---

### 三、无穷乘积

#### 1. 定义

设有非零数列 $\{p_n\}$，称 $\displaystyle\prod_{n=1}^{\infty} p_n = p_1 p_2 \cdots p_k \cdots$ 为**无穷乘积**。记部分乘积 $\displaystyle P_n = \prod_{k=1}^{n} p_k = p_1 p_2 \cdots p_n$。若 $\displaystyle\lim_{n\to\infty} P_n = P \neq 0$，则称无穷乘积**收敛**，否则称其**发散**。[来源：§8-5 p49，定义]

#### 2. 必要条件

**定理（必要条件）**：若 $\displaystyle\prod_{n=1}^{\infty} p_n$ 收敛，则有 $\displaystyle\lim_{n\to\infty} p_n = 1$。[来源：§8-5 p49，定理]

#### 3. 敛散性判别

**定理**：设对一切充分大的 $n$ 都有 $1+a_n>0$（即 $a_n>-1$，从而 $\ln(1+a_n)$ 有定义），则无穷乘积 $\displaystyle\prod_{n=1}^{\infty} (1 + a_n)$ 收敛 $\Leftrightarrow$ $\displaystyle\sum_{n=1}^{\infty} \ln(1 + a_n)$ 收敛。

收敛时，有 $\displaystyle\prod_{n=1}^{\infty} (1 + a_n) = \mathrm{e}^{\sum_{n=1}^{\infty} \ln(1+a_n)}$。[来源：§8-5 p50，定理]

---

## 敛散性判别体系总结

### 正项级数判别法

| 判别法 | 条件 | 结论 |
|--------|------|------|
| **收敛原理** | $a_n \geq 0$ | 部分和有界 $\Leftrightarrow$ 收敛 |
| **比较判别法** | $a_n \leq b_n$ | $\sum b_n$ 收敛 $\Rightarrow$ $\sum a_n$ 收敛 |
| **比较判别法（极限形式）** | $\lim \frac{a_n}{b_n} = l \in (0,+\infty)$ | 同敛散 |
| **p-判别法** | $\lim n^p a_n = l$ | $p > 1$ 且 $l < +\infty$：收敛；$p \leq 1$ 且 $l > 0$：发散 |
| **根值判别法** | $\overline{\lim} \sqrt[n]{a_n} = \rho$ | $\rho < 1$：收敛；$\rho > 1$：发散 |
| **比值判别法** | $\overline{\lim} \frac{a_{n+1}}{a_n} = \rho$ | $\rho < 1$：收敛；$\underline{\lim} > 1$：发散 |
| **积分判别法** | $f$ 非负单减 | $\sum f(n)$ 与 $\int_1^{+\infty} f(x)\mathrm{d}x$ 同敛散 |
| **Raabe判别法** | $\lim n\left(\frac{a_n}{a_{n+1}}-1\right) = r$ | $r > 1$：收敛；$r < 1$：发散 |

【整理自 PPT】

### 任意项级数判别法

| 判别法 | 条件 | 结论 |
|:---|:---|:---|
| **绝对收敛判别** | $\sum \left\vert a_n\right\vert$ 收敛 | $\sum a_n$ **绝对收敛**（从而收敛） |
| **Leibniz 判别法** | $a_n\ge 0$，$a_{n+1}\le a_n$（单调不增），且 $a_n\to 0$ | $\sum (-1)^{n-1}a_n$ 收敛 |
| **Abel 判别法** | $\{a_n\}$ 单调有界（等价地：单调且收敛），且 $\sum b_n$ 收敛 | $\sum a_n b_n$ 收敛 |
| **Dirichlet 判别法** | $\{a_n\}$ 单调趋于 $0$，且 $B_n=\sum_{k=1}^n b_k$（部分和）有界 | $\sum a_n b_n$ 收敛 |

【整理自 PPT】

---

## 重要级数敛散性速查

| 级数 | 敛散性 | 备注 |
|:---|:---|:---|
| $\displaystyle\sum_{n=1}^{\infty} aq^{n-1}$ | $\left\lvert q\right\rvert<1$ 收敛，$\left\lvert q\right\rvert\ge 1$ 发散 | 几何级数 |
| $\displaystyle\sum_{n=1}^{\infty} \frac{1}{n^p}$ | $p>1$ 收敛，$p\le 1$ 发散 | p-级数 |
| $\displaystyle\sum_{n=1}^{\infty} \frac{1}{n}$ | 发散 | 调和级数 |
| $\displaystyle\sum_{n=2}^{\infty} \frac{1}{n(\ln n)^p}$ | $p>1$ 收敛，$p\le 1$ 发散 | [来源：§8-3 例8] |
| $\displaystyle\sum_{n=1}^{\infty} \frac{(-1)^{n-1}}{n}$ | 条件收敛，和为 $\ln 2$ | [来源：§8-5 例1] |
| $\displaystyle\sum_{n=1}^{\infty} \frac{\sin n}{n}$ | 条件收敛 | [来源：§8-4 例4] |

【整理自 PPT】
