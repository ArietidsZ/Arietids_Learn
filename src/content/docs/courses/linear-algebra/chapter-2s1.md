---
title: "第14讲：矩阵的分块"
description: "线性代数课程笔记：第14讲：矩阵的分块。"
---

<div class="note-meta"><a href="/courses/linear-algebra/">线性代数目录</a><a href="/downloads/linear-algebra/chapter-2s1.md" download>下载 Markdown</a></div>

## 关键考点总览（本讲速记）

1. ⭐ 分块矩阵的定义与记号
2. ⭐ 分块矩阵的加法、数乘、乘法、转置运算法则
3. ⭐ **基本原则**：不管整体还是局部小块，都必须符合矩阵运算规则
4. ⭐ 矩阵乘积 $C=AB$ 的常用分块形式（按列/按行/按列行混合）
5. ⭐ **重要结论**：若 $AB=O$，则 $B$ 的列都是齐次方程组 $AX=0$ 的解
6. ⭐ 分块对角矩阵的定义、运算与逆矩阵
7. 分块矩阵的初等行（列）变换（三种类型）
8. 标准单位列/行向量的定义与性质
9. 利用矩阵运算表达线性方程组

---

## 一、分块矩阵的概念

### (1) 定义

- **分块矩阵**：将矩阵 $A$ 用若干条纵线和横线分成许多小矩阵，每个小矩阵称为 $A$ 的一个**子块**，以这些子块为元素的形式上的矩阵称为**分块矩阵**。 [来源：p3，定义]

- **分块方法**：对于行数和列数较大的矩阵，经常采用"矩阵分块法"，即将一个大的矩阵看成是一些以小的矩阵为"元素"的矩阵。在运算中，把这些小的矩阵当作"元素"来处理。 [来源：p2]

---

## 二、分块矩阵的运算

### (1) 基本原则

- ⭐ **核心原则**：不管整体，还是局部小块，都必须符合矩阵运算规则。 [来源：p9，红色强调]

### (2) 分块矩阵的加法

- 设 $A=(A_{ij})_{s \times t}$，$B=(B_{ij})_{s \times t}$，对任意的 $i$ 和 $j$，$A_{ij}$ 和 $B_{ij}$ 都是同类型矩阵（有相同行数和列数的矩阵），那么 $A+B=(A_{ij}+B_{ij})_{s \times t}$。 [来源：p7]

### (3) 分块矩阵的数乘

- $A=(A_{ij})_{s \times t}$，$k$ 是一个数，那么 $kA=(kA_{ij})_{s \times t}$。 [来源：p7]

### (4) 分块矩阵的乘法

- 设 $A=(A_{ij})_{s \times r}$，$B=(B_{kl})_{r \times t}$，且 $A_{im}$ 的列数等于 $B_{mj}$ 的行数，那么 $AB=C=(C_{ij})_{s \times t}$，其中 $C_{ij}=\sum_{m=1}^{r}A_{im}B_{mj}$。 [来源：p8]

### (5) 分块矩阵的转置

- 设 $A=(A_{ij})_{s \times t}$，那么 $A^T=(B_{ij})_{t \times s}=(A_{ji}^T)_{t \times s}$。 [来源：p23]
- **要点**：先将分块矩阵整体转置（行变列），再对每个子块取转置。

---

## 三、矩阵乘积的常用分块形式

### (1) 按列分块（反映 $C$ 的列与 $A$ 的列的关系）

设 $A=(\alpha_1, \alpha_2, \cdots, \alpha_p)$（按列分块），则：

$$
C=AB=A(\gamma_1, \gamma_2, \cdots, \gamma_n)=(A\gamma_1, A\gamma_2, \cdots, A\gamma_n)
$$


⭐ **结论**：$C$ 的第 $j$ 列 $=A$ 乘以 $B$ 的第 $j$ 列。 [来源：p11，p15]

### (2) 按行分块（反映 $C$ 的行与 $B$ 的行的关系）

设 $A=\begin{pmatrix}\beta_1\\\beta_2\\\vdots\\\beta_m\end{pmatrix}$（按行分块），则：

$$
C=AB=\begin{pmatrix}\beta_1 B\\\beta_2 B\\\vdots\\\beta_m B\end{pmatrix}
$$


⭐ **结论**：$C$ 的第 $i$ 行 $=A$ 的第 $i$ 行乘以 $B$。 [来源：p12，p18]

### (3) 列-行分块乘积形式

$$
AB=(\alpha_1, \alpha_2, \cdots, \alpha_p)\begin{pmatrix}\theta_1\\\theta_2\\\vdots\\\theta_p\end{pmatrix}=\alpha_1\theta_1+\alpha_2\theta_2+\cdots+\alpha_p\theta_p
$$


⭐ **注意**：这里每个 $\alpha_i$ 和 $\theta_j$ 都是矩阵（而非数），结果是矩阵的和。 [来源：p17，黄色标注"每个都是矩阵"]

### (4) 行-列分块乘积形式（分块展开）

$$
AB=\begin{pmatrix}\beta_1\\\beta_2\\\vdots\\\beta_m\end{pmatrix}(\gamma_1, \gamma_2, \cdots, \gamma_n)=\begin{pmatrix}\beta_1\gamma_1 & \beta_1\gamma_2 & \cdots & \beta_1\gamma_n\\\beta_2\gamma_1 & \beta_2\gamma_2 & \cdots & \beta_2\gamma_n\\\vdots & \vdots & & \vdots\\\beta_m\gamma_1 & \beta_m\gamma_2 & \cdots & \beta_m\gamma_n\end{pmatrix}
$$


[来源：p16]

---

## 四、重要结论：矩阵乘积与齐次方程组

### (1) 核心定理

⭐⭐ **若 $AB=O$，则矩阵 $B$ 的列都是齐次线性方程组 $AX=0$ 的解。** [来源：p20，黄框强调]

**反之**，令 $\alpha_1, \alpha_2, \ldots, \alpha_k$ 都是 $AX=0$ 的解，那么矩阵 $B=(\alpha_1, \alpha_2, \ldots, \alpha_k)$ 满足 $AB=O$。 [来源：p20]

⭐ **这个结果非常重要！牢记！** [来源：p20，红色强调]

### (2) 对偶结论

- 在 $AB=0$ 中，将 $A$ 看成一行一行的，而 $A$ 的行与方程组 $XB=0$ 的关系：$A$ 的行都是 $XB=0$ 的解。 [来源：p20，提示]

---

## 五、矩阵与线性方程组的关系

### (1) 线性方程组的矩阵表示

线性方程组可表示为 $AX=B$，其中：

- $A$ 的列是方程组的**系数向量**
- $A$ 的列数是方程组的**未知量个数**
- $A$ 的行数是方程组的**方程个数**

[来源：p21-22，黄框提问]

### (2) 向量表示

令 $\alpha_1, \alpha_2, \cdots, \alpha_n$ 为 $A$ 的列向量，$\beta$ 为常数列，则方程组 $AX=B$ 可写为：

$$
\alpha_1 x_1 + \alpha_2 x_2 + \cdots + \alpha_n x_n = \beta
$$


[来源：p21]

---

## 六、分块矩阵的初等变换

### (1) 矩阵的初等行（列）变换（三种类型）

1. **交换**：交换矩阵的两行（列），记作 $r_i \leftrightarrow r_j$（$c_i \leftrightarrow c_j$） [来源：p13]

2. **倍乘**：将矩阵的某一行（列）的各个元素乘以同一个非零的数 $k$，记作 $kr_i \rightarrow r_i$（$kc_i \rightarrow c_i$） [来源：p13]

3. **倍加**：将矩阵的某一行（列）的各个元素乘以同一个数 $k$ 后，加到另一行（列）的对应元素上去，记作 $r_j + kr_i \rightarrow r_j$（$c_j + kc_i \rightarrow c_j$） [来源：p13]

### (2) 分块矩阵的初等行（列）变换

1. **交换分块矩阵的两行（列）** [来源：p14]

2. **将分块矩阵的某一行（列）的各个元素乘以同一个可逆矩阵 $P$**
   - ⭐ **注意**：必须乘以**可逆矩阵**（不是数！） [来源：p14，黄色标注"可逆矩阵P"]

3. **将分块矩阵的某一行（列）的各个矩阵乘以同一个矩阵 $Q$ 后，加到另一行（列）的对应矩阵上去**
   - ⭐ **注意**：乘的是**矩阵 $Q$**（不是数！） [来源：p14，黄色标注"矩阵Q"]

---

## 七、分块对角矩阵

### (1) 定义

$$
\text{称} \begin{pmatrix}A_1 & O & \cdots & O\\O & A_2 & \cdots & O\\\vdots & \vdots & \ddots & \vdots\\O & O & \cdots & A_s\end{pmatrix}\text{为分块对角矩阵（或准对角矩阵），其中 }A_i\text{ 都是方阵}
$$


也可记为 $\text{diag}(A_1, A_2, \cdots, A_s)$。 [来源：p24]

### (2) 分块对角矩阵的运算性质

设 $A=\text{diag}(A_1, A_2, \cdots, A_s)$，$B=\text{diag}(B_1, B_2, \cdots, B_s)$，其中 $A_i, B_i$ 都是同阶的方阵，则：

1. **加法**：$A+B=\text{diag}(A_1+B_1, A_2+B_2, \cdots, A_s+B_s)$ [来源：p25]

2. **数乘**：$cA=\text{diag}(cA_1, cA_2, \cdots, cA_s)$ [来源：p25]

3. ⭐ **乘法**：$AB=\text{diag}(A_1B_1, A_2B_2, \cdots, A_sB_s)$ [来源：p25，黄框强调]

4. **转置**：$A^T=\text{diag}(A_1^T, A_2^T, \cdots, A_s^T)$ [来源：p25]

---

## 八、标准单位向量

### (1) 标准单位列向量

$\varepsilon_j$ 是 $n \times 1$ 的矩阵，它的第 $j$ 行元素为 1，其余元素全为 0。

$$
\varepsilon_1=\begin{pmatrix}1\\0\\\vdots\\0\end{pmatrix}, \varepsilon_2=\begin{pmatrix}0\\1\\\vdots\\0\end{pmatrix}, \cdots, \varepsilon_n=\begin{pmatrix}0\\0\\\vdots\\1\end{pmatrix}
$$


[来源：p26-28]

**特点**：
- 任何一个 $n$ 维列向量，可以用这 $n$ 个列向量（线性）表示出来。 [来源：p27]
- 他们中任何一个列向量，都不能被其他向量（线性）表示出来。 [来源：p28]

### (2) 标准单位行向量

$\varepsilon_i$ 是 $1 \times n$ 的矩阵，它的第 $i$ 列元素为 1，其余元素全为 0。

$$
\varepsilon_1=(1, 0, \cdots, 0), \varepsilon_2=(0, 1, \cdots, 0), \cdots, \varepsilon_n=(0, 0, \cdots, 1)
$$


[来源：p29]

**特点**：
- 任何一个 $n$ 维行向量，可以用这 $n$ 个行向量（线性）表示出来。
- 他们中任何一个行向量，都不能被其他向量（线性）表示出来。 [来源：p29]

---

## 九、例题与思考题

### (1) 思考题

设矩阵 $A=\begin{pmatrix}2 & -1 & 3\\4 & -2 & 5\\6 & -3 & 8\end{pmatrix}$，

(1) 试求 $3 \times 4$ 非零矩阵 $B$ 使得 $AB=0$

(2) 试求 $4 \times 3$ 非零矩阵 $C$ 使得 $CA=0$

[来源：p19]

### (2) 证明题

$A$ 为 $n$ 阶方阵，试证：若对任意 $x \in \mathbb{R}^n$，都有 $Ax=0$，那么 $A=O$。 [来源：p30]

**证明思路**：取 $x$ 为标准单位列向量 $\varepsilon_1, \varepsilon_2, \ldots, \varepsilon_n$，则 $A\varepsilon_j$ 恰好是 $A$ 的第 $j$ 列，由 $A\varepsilon_j=0$ 知 $A$ 的每一列都是零向量。【整理自PPT】

---

---

# 第18讲：分块矩阵的初等变换和分块初等矩阵 - 知识集锦

## 关键考点总览（本讲速记）

1. ⭐ 分块矩阵的三种初等变换（与普通初等变换的区别）
2. ⭐ 分块初等矩阵的定义
3. ⭐ **定理**：用分块初等矩阵左（右）乘分块矩阵相当于对分块矩阵实施相应的分块初等变换
4. ⭐⭐ **行列式第一降阶定理**：$|M|=|A| \cdot |D-CA^{-1}B|$
5. ⭐ 分块对角矩阵的逆矩阵公式
6. ⭐ 分块上/下三角矩阵的逆矩阵
7. ⭐ 分块矩阵秩的性质：$r\begin{pmatrix}A & O\\O & B\end{pmatrix}=r(A)+r(B)$
8. ⭐⭐ **Sylvester秩不等式**：$r(AB)+n \geq r(A)+r(B)$
9. 特征多项式关系：$|xE-AB|=x^{m-n}|xE-BA|$

---

## 一、分块矩阵的初等变换

### (1) 定义

对分块矩阵的行列实施下列三种操作之一，称为对分块矩阵实施了一次**分块初等变换**：

1. **交换**：交换分块矩阵的两行，记为 $R_i \leftrightarrow R_j$（$C_i \leftrightarrow C_j$） [来源：p2]

2. **倍乘**：用一个**可逆矩阵** $P$（$Q$）左（右）乘分块的某行的各子块，记为 $PR_i \rightarrow R_i$（$C_iQ \rightarrow C_i$） [来源：p2]

3. **倍加**：用一个**适当阶数的矩阵**左（右）乘分块矩阵某行（列）的各子块后加至另一行（列）的对应子块上去，记为 $R_j+(A_i)R_i \rightarrow R_j$ [来源：p2]

### (2) 与普通初等变换的区别

⭐ **关键区别**：
- 普通初等变换第二类：乘以**非零常数 $k$**
- 分块初等变换第二类：乘以**可逆矩阵 $P$**
- 普通初等变换第三类：乘以**常数 $k$**
- 分块初等变换第三类：乘以**矩阵 $Q$**

【整理自PPT】

### (3) 等价关系

⭐ 对分块矩阵进行初等行（列）变换 $\Leftrightarrow$ 对原矩阵进行有限次初等行（列）变换 [来源：p7]

---

## 二、分块初等矩阵

### (1) 定义

**分块初等矩阵**：分块的单位矩阵**经过一次分块初等变换**所得到的矩阵称为分块初等矩阵。 [来源：p8]

### (2) 三类分块初等矩阵的形式

[详见原PPT p3-p6的矩阵图示]

### (3) 核心定理

⭐ **定理**：用分块初等矩阵左（右）乘分块矩阵相当于对分块矩阵实施相应的分块初等变换。 [来源：p8]

---

## 三、行列式第一降阶定理

### (1) 定理陈述

⭐⭐ 设 $M=\begin{pmatrix}A & B\\C & D\end{pmatrix}$，其中 $A$ 和 $D$ 分别为 $m$ 和 $n$ 阶矩阵，且 $|A| \neq 0$，则：

$$
|M|=|A| \cdot |D-CA^{-1}B|
$$


[来源：p9]

### (2) 对偶形式

若 $|D| \neq 0$，则：

$$
|M|=|D| \cdot |A-BD^{-1}C|
$$


【非PPT直接给出】（由定理形式对称性推得）

### (3) 常用推论

- 当 $C=O$ 时：$\begin{vmatrix}A & B\\O & D\end{vmatrix}=|A| \cdot |D|$ 【整理自PPT】

- 当 $B=O$ 时：$\begin{vmatrix}A & O\\C & D\end{vmatrix}=|A| \cdot |D|$ 【整理自PPT】

---

## 四、分块对角矩阵的逆矩阵

### (1) 定理

设 $A=\text{diag}(A_1, A_2, \cdots, A_s)$，其中 $A_i$ 都是方阵，若 $A_i$ 均可逆，则 $A$ 可逆，且：

$$
A^{-1}=\text{diag}(A_1^{-1}, A_2^{-1}, \cdots, A_s^{-1})
$$


[来源：p11]

---

## 五、分块三角矩阵的逆矩阵

### (1) 分块上三角矩阵

设 $P=\begin{pmatrix}A & B\\O & C\end{pmatrix}$，其中 $A$、$C$ 分别是 $m$ 阶和 $n$ 阶可逆矩阵，$B$ 为 $m \times n$ 阶矩阵，则 $P$ 是可逆矩阵，且：

$$
P^{-1}=\begin{pmatrix}A^{-1} & -A^{-1}BC^{-1}\\O & C^{-1}\end{pmatrix}
$$


[来源：p12，例题结论]

### (2) 分块下三角矩阵

设 $Q=\begin{pmatrix}A & O\\C & D\end{pmatrix}$，其中 $A$、$D$ 可逆，则：

$$
Q^{-1}=\begin{pmatrix}A^{-1} & O\\-D^{-1}CA^{-1} & D^{-1}\end{pmatrix}
$$


【非PPT直接给出】（由分块上三角的对偶形式推得）

---

## 六、分块矩阵秩的性质

### (1) 分块对角矩阵的秩

$$
r\begin{pmatrix}A & O\\O & B\end{pmatrix}=r(A)+r(B)
$$


[来源：p14]

### (2) 一般分块矩阵秩的不等式

$$
r\begin{pmatrix}A & O\\C & B\end{pmatrix} \geq r(A)+r(B)
$$


[来源：p14]

---

## 七、矩阵乘积秩的重要不等式

### (1) Sylvester秩不等式

设 $A$ 是 $m \times n$ 阵，$B$ 是 $n \times p$ 阵，则：

$$
r(AB)+n \geq r(A)+r(B)
$$


[来源：p15]

### (2) 乘积秩的上界

$$
r(AB) \leq \min\{r(A), r(B)\}
$$


[来源：p15]

### (3) $AB=O$ 时的秩关系

若 $AB=O$，则 $r(A)+r(B) \leq n$（其中 $A$ 是 $m \times n$ 阵，$B$ 是 $n \times p$ 阵） [来源：p15]

---

## 八、特征多项式相关结论

### (1) $|xE-AB|$ 与 $|xE-BA|$ 的关系

设 $A$ 为 $m \times n$ 阵，$B$ 为 $n \times m$ 阵，$m \geq n$，则：

$$
|xE_m-AB|=x^{m-n}|xE_n-BA|
$$


[来源：p17]

### (2) 推论

设 $A$ 为 $m \times n$ 阵，$B$ 为 $n \times m$ 阵，试证：若 $E_n-BA$ 可逆，则 $E_m-AB$ 也可逆。 [来源：p17]

**证明思路**：由上述公式可知 $|E_m-AB|=|E_n-BA| \neq 0$。【整理自PPT】

---

## 九、例题与思考题

### (1) 分块对角矩阵的逆矩阵与伴随矩阵

设 $A$ 和 $B$ 是 $n$ 阶可逆矩阵，

(1) 试求矩阵 $\begin{pmatrix}A & O\\O & B\end{pmatrix}$ 的逆矩阵和伴随矩阵

(2) 试求矩阵 $\begin{pmatrix}O & A\\B & O\end{pmatrix}$ 的逆矩阵和伴随矩阵

[来源：p10]

### (2) 特殊行列式计算

设 $A$，$B$ 为 $n$ 阶矩阵，试证：

$$
\begin{vmatrix}A & B\\B & A\end{vmatrix}=|A+B| \cdot |A-B|
$$


[来源：p13]

**证明思路**：对分块矩阵进行分块初等变换，第一行加到第二行，第一列减去第二列。【整理自PPT】

### (3) 存在性问题

设 $A$ 和 $B$ 均为 $n$ 阶方阵，$r(A)+r(B) \leq n$。试证：存在 $n$ 阶可逆方阵 $M$，使得 $AMB=O$。 [来源：p16]

### (4) 特征行列式求解

例：设 $A=(a_1, a_2, \cdots, a_n)$，$B=(b_1, b_2, \cdots, b_n)^T$，试求 $|E_n-BA|$。 [来源：p17]

**提示**：当 $m > n$ 的时候，可利用 $|xE_m-AB|=x^{m-n}|xE_n-BA|$ 进行降阶。这里 $AB$ 是 $1 \times 1$ 矩阵（即数），令 $x=1$ 即可得 $|E_n-BA|=1-AB=1-\sum_{i=1}^n a_i b_i$。【整理自PPT】

---

## 十、常用技巧总结

### (1) 分块初等变换消元

对 $\begin{pmatrix}A & B\\C & D\end{pmatrix}$ 进行分块初等行变换：第二行加上 $(-CA^{-1}) \times$ 第一行，得到 $\begin{pmatrix}A & B\\O & D-CA^{-1}B\end{pmatrix}$，从而可以计算行列式。【整理自PPT】

### (2) 利用矩阵乘积与齐次方程组的关系

若要证明某个矩阵 $B$ 的列都是 $AX=0$ 的解，只需验证 $AB=O$。【整理自PPT】

### (3) 秩不等式的应用

- 证明 $r(A)+r(B) \leq n$：通常找一个矩阵使得 $AB=O$
- 证明存在可逆 $M$ 使 $AMB=O$：利用秩条件构造

【整理自PPT】

---

**文档信息**：本知识集锦基于上海交通大学线性代数课程PPT（第14讲：矩阵的分块，第18讲：分块矩阵的初等变换和分块初等矩阵）整理，仅供学习参考。
