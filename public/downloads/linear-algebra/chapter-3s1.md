# 第25-26讲：特征值与特征向量性质

> Arietids Learn · 个人课程复习笔记
> 在线阅读：https://learn.arietids.net/courses/linear-algebra/chapter-3s1/

## 关键考点总览（本讲速记）

1. ⭐ 特征值和特征向量的定义：$A\alpha = \lambda\alpha$，$\alpha \neq 0$
2. ⭐ 特征值的等价条件链（特征方程 $|\lambda E - A| = 0$）
3. ⭐（特征值按代数重数计，可在复数域中理解）特征值之和 = 矩阵的迹；特征值之积 = 矩阵的行列式
4. ⭐ 几何重数 ≤ 代数重数
5. ⭐ 属于不同特征值的特征向量线性无关
6. 矩阵变换后的特征值规律（$kA$；$A^m$ 其中 $m\in\mathbb{N}_+$；$A^{-1}$ 与 $A^*$ 需 $A$ 可逆；并明确此处 $A^*$ 为伴随矩阵 adjugate）
7.（$A,B$ 为同阶方阵时）$AB$ 与 $BA$ 有相同的特征值（计代数重数）
8. $A$ 与 $A^T$ 有相同的特征值（计代数重数；但特征向量一般不同）
9. 分块对角矩阵的特征值 = 各块特征值的并集
10. 行元素之和为常数 $a$ 的矩阵，以 $a$ 为特征值，$(1,1,\ldots,1)^T$ 为特征向量

---

## 一、特征值与特征向量的基本概念

### (1) 定义

- **特征值与特征向量**：设 $A$ 为元素都属于数域 $P$ 的 $n$ 阶矩阵。如果存在数域 $P$ 中的数 $\lambda$ 与 $P^n$ 中的 $n$ 维非零列向量 $\alpha$，使得 $A\alpha = \lambda\alpha$，则称 $\lambda$ 为 $A$ 的一个**特征值**，$\alpha$ 为对应于特征值 $\lambda$ 的**特征向量**。[来源：p1-2]

- **特征多项式**：$|\lambda E - A|$ 是关于 $\lambda$ 的 $n$ 次多项式，首项系数为 1，称为 $A$ 的**特征多项式**。[来源：p9]

- **特征方程**：$|\lambda E - A| = 0$ 称为 $A$ 的**特征方程**。[来源：p9]

- **特征子空间**：方阵 $A$ 对应到特征值 $\lambda_0$ 的所有特征向量，再添上零向量，构成一个线性空间。它是齐次线性方程组 $(\lambda_0 E - A)x = 0$ 的解空间，称为 $A$ 的**对应于特征值 $\lambda_0$ 的特征子空间**，记作 $V_{\lambda_0}$。[来源：p7]

- **几何重数**：特征子空间 $V_{\lambda_i}$ 的维数 $m_i = n - r(\lambda_i E - A)$，即对应于特征值 $\lambda_i$ 的线性无关的特征向量的最大个数，称为**几何重数**。[来源：p8，第26讲p9]

- **代数重数**：若特征值 $\lambda_i$ 是特征方程的 $n_i$ 重根，则称 $n_i$ 为特征值 $\lambda_i$ 的**代数重数**。[来源：p8，第26讲p9]

### (2) 定理/命题

- ⭐ **代数学基本定理（用于特征多项式）**：$n$ 阶矩阵 $A$ 的特征多项式 $|\lambda E - A|$ 是 $n$ 次多项式，因此在复数域 $\mathbb{C}$ 中恰有 $n$ 个根（按代数重数计）。[来源：p9]

- ⭐ **特征多项式的分解**：在复数域中，若 $\lambda_1, \lambda_2, \ldots, \lambda_n$ 是方程 $f(\lambda) = |\lambda E - A| = 0$ 的 $n$ 个根（按代数重数计），那么
  $$
  f(\lambda) = (\lambda - \lambda_1)(\lambda - \lambda_2)\cdots(\lambda - \lambda_n)
  $$
  
  [来源：p16]

### (3) 推论/二级结论

- **特征向量的线性组合**：若 $\alpha_1, \alpha_2, \ldots, \alpha_k$ 是方阵 $A$ 的对应到特征值 $\lambda_0$ 的 $k$ 个特征向量，则 $\alpha_1, \alpha_2, \ldots, \alpha_k$ 的**任意不等于0的线性组合**都是 $A$ 的对应到特征值 $\lambda_0$ 的特征向量。[来源：p6]

### (4) 等价条件/充要条件

- ⭐ **特征值的等价刻画**（核心等价条件链）：
  $$
  A\alpha = \lambda_0\alpha, \alpha \neq 0
  $$
  
  $$
  \Leftrightarrow (\lambda_0 E - A)\alpha = 0, \alpha \neq 0
  $$
  
  $$
  \Leftrightarrow \alpha \text{ 是方程组 } (\lambda_0 E - A)x = 0 \text{ 的一个非0解}
  $$
  
  $$
  \Leftrightarrow \text{方程组 } (\lambda_0 E - A)x = 0 \text{ 有非0解}
  $$
  
  $$
  \Leftrightarrow r(\lambda_0 E - A) < n
  $$
  
  $$
  \Leftrightarrow |\lambda_0 E - A| = 0
  $$
  
  $$
  \Leftrightarrow \lambda_0 \text{ 是方程 } |\lambda E - A| = 0 \text{ 的根}
  $$
  
  [来源：p4-5，黄色高亮]

- **非特征值的等价刻画**：
  $$
  \lambda_0 \text{ 不是方阵 } A \text{ 的特征值}
  $$
  
  $$
  \Leftrightarrow \lambda_0 \text{ 不是方程 } |\lambda E - A| = 0 \text{ 的根}
  $$
  
  $$
  \Leftrightarrow |\lambda_0 E - A| \neq 0
  $$
  
  $$
  \Leftrightarrow \text{方阵 } \lambda_0 E - A \text{ 可逆}
  $$
  
  [来源：p5，p14红框]

### (5) 反例与易错点

- **一个特征向量唯一对应一个特征值**：一个非零特征向量只能对应唯一的特征值；而同一特征值对应的特征向量至少包含其所有非零数倍（在 $\mathbb{R}$ 或 $\mathbb{C}$ 上因此有无穷多个）。[来源：p12]

- **几何重数可以小于代数重数**：第25讲p13和第26讲p11的例子中，$\lambda = 1$ 是2重特征值（代数重数为2），但线性无关的特征向量只有1个（几何重数为1）。[来源：p13，第26讲p11]

### (6) 常用技巧

- **求特征值与特征向量的步骤**：
  1. 求出矩阵 $A$ 的特征多项式与所有特征值
  2. 对每一个特征值 $\lambda_i$，求齐次线性方程组 $(\lambda_i E - A)x = 0$ 的基础解系 $\alpha_{i1}, \alpha_{i2}, \ldots, \alpha_{ir_i}$
  3. 对应 $\lambda_i$ 的全部特征向量为 $k_1\alpha_{i1} + k_2\alpha_{i2} + \cdots + k_{r_i}\alpha_{ir_i}$，其中 $k_1, k_2, \ldots, k_{r_i}$ 不同时为0
  [来源：p10]

- ⭐ **行元素之和为常数的矩阵**：如果矩阵 $A$ 的各行元素之和为常数 $a$，那么 $a$ 是矩阵 $A$ 的一个特征值，并且对应特征值 $a$ 的一组特征向量为 $c(1, 1, \ldots, 1)^T$，$c \neq 0$。[来源：p12，黄色高亮]

---

## 二、特征值与矩阵的关系

### (2) 定理/命题

- ⭐ **特征值之和等于矩阵的迹**：设 $n$ 阶矩阵 $A = (a_{ij})$，$A$ 的特征值为 $\lambda_1, \lambda_2, \ldots, \lambda_n$，则
  $$
  \sum_{i=1}^{n} \lambda_i = \text{tr}A = \sum_{i=1}^{n} a_{ii}
  $$
  
  [来源：p15，p18，黄色高亮]

- ⭐ **特征值之积等于矩阵的行列式**：
  $$
  \prod_{i=1}^{n} \lambda_i = |A|
  $$
  
  [来源：p15，p17，黄色高亮]

### (3) 推论/二级结论

- ⭐ **矩阵可逆与0特征值**：矩阵 $A$ 可逆当且仅当0不是 $A$ 的特征值。[来源：p19]

---

## 三、特征值的性质（矩阵变换）

### (2) 定理/命题

设 $\lambda$ 是 $A$ 的特征值，$\alpha$ 是对应于 $\lambda$ 的特征向量，那么：

- ⭐ **数乘**：$k\lambda$ 是 $kA$ 的特征值，$\alpha$ 是对应的特征向量。[来源：p20]

- ⭐ **幂次**：对任意正整数 $m$，$\lambda^m$ 是 $A^m$ 的特征值，$\alpha$ 仍是对应的特征向量。[来源：p20]

- ⭐ **逆矩阵**（$A$ 可逆时）：$\lambda^{-1}$ 是 $A^{-1}$ 的特征值，$\alpha$ 是对应于 $\lambda^{-1}$ 的特征向量。[来源：p19，黄色高亮]

- ⭐ **伴随矩阵（adjugate）**（$A$ 可逆时）：此处 $A^*$ 表示 $A$ 的伴随矩阵（余子式矩阵的转置），满足 $AA^* = A^*A = |A|E$；因此 $\dfrac{|A|}{\lambda}$（即 $\lambda^{-1}|A|$）是 $A^*$ 的特征值，$\alpha$ 仍是对应的特征向量。[来源：p19，黄色高亮]

- ⭐ **多项式**：令 $f(x) = a_0 x^m + a_1 x^{m-1} + \cdots + a_m$，则 $f(\lambda)$ 是矩阵 $f(A) = a_0 A^m + a_1 A^{m-1} + \cdots + a_m E$ 的特征值，$\alpha$ 是对应的特征向量；**若 $f(A) = 0$，则 $f(\lambda) = 0$**。[来源：p20-21，黄色高亮]

### (6) 常用技巧

- **幂等矩阵的特征值**：若 $A^2 = A$，则 $A$ 的特征值只能为0或1。
  - 方法一：由 $A\alpha = \lambda\alpha$ 和 $A^2 = A$，得 $\lambda^2\alpha = \lambda\alpha$，故 $(\lambda^2 - \lambda)\alpha = 0$，由 $\alpha \neq 0$ 知 $\lambda^2 - \lambda = 0$，即 $\lambda = 0$ 或 $\lambda = 1$。
  - 方法二：由 $A^2 = A$ 知 $f(A) = 0$，其中 $f(x) = x^2 - x$。若 $\lambda$ 是 $A$ 的特征值，则 $f(\lambda) = 0$，即 $\lambda^2 - \lambda = 0$。
  - **注意**：只能得到特征值为0或1，不能确定是只有0、只有1、还是0和1都有。[来源：p22]

- **对合矩阵的推论**：若 $A^2 = E$ 且 $A$ 的特征值都是1，则 $A = E$。
  - 证明：由 $A^2 = E$ 得 $(E - A)(E + A) = 0$。若 $A$ 的特征值都是1，则 $-1$ 不是 $A$ 的特征值，故 $E + A$ 可逆。等式两边右乘 $(E + A)^{-1}$ 得 $E - A = 0$，即 $A = E$。[来源：p14]

- **已知特征值求行列式**：设 $n$ 阶矩阵 $A$ 的特征值为 $\lambda_1, \lambda_2, \ldots, \lambda_n$，求 $|f(A)|$ 时，可利用"矩阵的行列式等于矩阵所有特征值的乘积"：
  $$
  |f(A)| = f(\lambda_1) \cdot f(\lambda_2) \cdots f(\lambda_n)
  $$
  
  [来源：p23]

---

## 四、特征向量间的线性关系

### (2) 定理/命题

- ⭐ **不同特征值对应的特征向量线性无关**：$n$ 阶方阵 $A$ 的属于不同特征值的特征向量线性无关。即，设 $\lambda_1, \lambda_2, \ldots, \lambda_s$ 是 $A$ 的 $s$ 个两两不同的特征值，$\alpha_1, \alpha_2, \ldots, \alpha_s$ 分别是它们对应的特征向量，那么 $\alpha_1, \alpha_2, \ldots, \alpha_s$ 线性无关。[来源：第26讲p4，黄色高亮]

  **证明要点**：利用 Vandermonde 矩阵可逆。[来源：第26讲p5-6]

- ⭐ **更一般的结论**：若 $\lambda_1, \lambda_2, \ldots, \lambda_s$ 是 $A$ 的 $s$ 个两两不同的特征值，$\alpha_{i1}, \alpha_{i2}, \ldots, \alpha_{ir_i}$ 是对应特征值 $\lambda_i$ 的一组线性无关的特征向量，那么所有这些特征向量 $\alpha_{11}, \ldots, \alpha_{1r_1}, \alpha_{21}, \ldots, \alpha_{2r_2}, \ldots, \alpha_{s1}, \ldots, \alpha_{sr_s}$ 线性无关。[来源：第26讲p7-8]

### (3) 推论/二级结论

- ⭐ **几何重数 ≤ 代数重数**：矩阵每一个特征值 $\lambda_i$ 的几何重数 $m_i$ ≤ 代数重数 $n_i$。[来源：第26讲p12，黄色高亮]

- ⭐ **线性无关特征向量个数的上界**：设 $n$ 阶矩阵 $A$ 有 $s$ 个两两不同的特征值 $\lambda_1, \lambda_2, \ldots, \lambda_s$，与特征值 $\lambda_i$ 对应的特征子空间的维数为 $m_i$，那么
  $$
  m_1 + m_2 + \cdots + m_s \leq n
  $$
  
  **等号成立当且仅当 $A$ 有 $n$ 个线性无关的特征向量**，此时每一个特征值的几何重数都和代数重数相等。[来源：第26讲p12，红色下划线]

---

## 五、其他重要结论

### (2) 定理/命题

- ⭐ **$AB$ 与 $BA$ 有相同的特征值（计代数重数，$A,B$ 为同阶方阵）**：设 $A, B$ 为 $n$ 阶方阵，则 $AB$ 与 $BA$ 的特征多项式相同，从而特征值（按代数重数计）完全相同。
  - 证明要点（特征多项式恒等式）：由 Sylvester 行列式恒等式 $|E + AB| = |E + BA|$，令 $E$ 为 $n$ 阶单位矩阵，则对任意 $\lambda \neq 0$，
    $$
    |\lambda E - AB|=\lambda^n\left|E-\frac{1}{\lambda}AB\right|
    =\lambda^n\left|E-\frac{1}{\lambda}BA\right|
    =|\lambda E - BA|.
    $$
    
    于是两者特征多项式一致，故特征值（计重数）一致。
  - 备注：也可用“若 $AB\alpha=\lambda\alpha,\,\lambda\neq 0$ 则令 $\beta=B\alpha$ 得 $BA\beta=\lambda\beta$”证明非零特征值相同。
  [来源：p24]

- ⭐ **$A$ 与 $A^T$ 有相同的特征值（计代数重数）**：
  $$
  |\lambda E - A^T| = |(\lambda E - A)^T| = |\lambda E - A|
  $$
  
  但是，$A$ 与 $A^T$ 对应的特征向量**一般不同**。[来源：p25]

- **分块对角矩阵的特征值**：设
  $$
  A = \begin{pmatrix} A_1 & & \\ & A_2 & \\ & & \ddots & \\ & & & A_s \end{pmatrix}
  $$
  
  其中 $A_i$ 为 $n_i$ 阶矩阵，$n_1 + n_2 + \cdots + n_s = n$，那么 $A$ 的特征值就是 $A_1, A_2, \ldots, A_s$ 的特征值的并集。
  $$
  |\lambda E - A| = |\lambda E_{n_1} - A_1| \cdot |\lambda E_{n_2} - A_2| \cdots |\lambda E_{n_s} - A_s|
  $$
  
  [来源：p26]

---

## 附：重数关系总结 【整理自PPT】

| 矩阵类型 | 代数重数与几何重数的关系 |
|---------|------------------------|
| 重数为1的特征值 | 几何重数 = 代数重数 = 1 |
| 重数 $> 1$ 的特征值 | 几何重数 ≤ 代数重数 |
| 所有特征值都有 几何重数 = 代数重数 | 矩阵有 $n$ 个线性无关的特征向量 |

[来源：p11, p13, 第26讲p10-12]
