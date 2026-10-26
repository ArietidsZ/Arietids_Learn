---
title: "第37讲：欧氏空间"
description: "线性代数课程笔记：第37讲：欧氏空间。"
---

<div class="note-meta"><a href="/courses/linear-algebra/">线性代数目录</a><a href="/downloads/linear-algebra/chapter-5h2.md" download>下载 Markdown</a></div>

## 关键考点总览（本讲速记）

1. ⭐ 内积的三条公理：对称性、线性性、正定性
2. ⭐ 欧氏空间的定义：定义了内积的实数域上的线性空间
3. ⭐ Cauchy-Schwarz不等式：$|(\alpha,\beta)| \leq |\alpha| \cdot |\beta|$，等号成立当且仅当$\alpha, \beta$线性相关
4. ⭐ 三角不等式：$|\alpha + \beta| \leq |\alpha| + |\beta|$
5. ⭐ 正交的定义：$(\alpha, \beta) = 0$
6. ⭐ 度量矩阵是正定矩阵
7. ⭐ 正交向量组必线性无关
8. ⭐ Gram-Schmidt正交化公式
9. ⭐ n维欧氏空间必存在标准正交基（且不唯一）
10. 正交/标准正交向量组可扩充为正交基/标准正交基

---

## 一、内积与欧氏空间

### (1) 定义

- **内积**：设 $V$ 是实数域上的线性空间。若对任意两个向量 $\alpha$ 和 $\beta$，按照一定的法则，存在唯一的一个实数与 $\alpha$ 和 $\beta$ 对应，记这个实数为 $(\alpha, \beta)$。进一步，如果满足下列三条公理，则称 $(\alpha, \beta)$ 是 $\alpha$ 和 $\beta$ 的内积：
  - (1) $(\alpha, \beta) = (\beta, \alpha)$（**对称性**）[来源：p2，红框标注]
  - (2) **线性性**：$(\alpha + \gamma, \beta) = (\alpha, \beta) + (\gamma, \beta)$；$(k\alpha, \beta) = k(\alpha, \beta)$，这里 $k$ 是一个实数 [来源：p2，黄色高亮]
  - (3) $(\alpha, \alpha) \geq 0$，且 $(\alpha, \alpha) = 0$ 当且仅当 $\alpha = 0$（**正定性**）[来源：p2，红框标注]

- **欧氏空间**：定义了内积的实数域上的线性空间称为欧氏空间。[来源：p3]

### (2) 内积的典型例子

- **$\mathbb{R}^n$ 中的标准内积**：对任意 $\alpha = (a_1, a_2, \cdots, a_n)^T$，$\beta = (b_1, b_2, \cdots, b_n)^T$，
  $$
  (\alpha, \beta) = a_1 b_1 + a_2 b_2 + \cdots + a_n b_n = \sum_{i=1}^{n} a_i b_i = \beta^T \alpha = \alpha^T \beta
  $$
  
  [来源：p3，黄色高亮]

- **$\mathbb{R}^n$ 中的另一种内积**：$(\alpha, \beta) = a_1 b_1 + 2a_2 b_2 + \cdots + n a_n b_n = \sum_{i=1}^{n} i \cdot a_i b_i$ [来源：p3]

- **矩阵内积**：在 $\mathbb{R}^{m \times n}$ 中，对 $A = (a_{ij})_{m \times n}$，$B = (b_{ij})_{m \times n}$，
  $$
  (A, B) = \sum_{i=1}^{m} \sum_{j=1}^{n} a_{ij} b_{ij}
  $$
  
  [来源：p4]

- **函数内积**：在 $C([a,b])$ 中，对任意 $f(x), g(x) \in C([a,b])$，
  $$
  (f(x), g(x)) = \int_a^b f(t)g(t) \, dt
  $$
  
  [来源：p4]

- **多项式内积**：在 $\mathbb{R}[x]_{n+1}$ 中，对 $p(x) = a_0 x^n + a_1 x^{n-1} + \cdots + a_n$，$q(x) = b_0 x^n + b_1 x^{n-1} + \cdots + b_n$，
  $$
  (p(x), q(x)) = \sum_{i=0}^{n} a_i b_i
  $$
  
  [来源：p5]

---

## 二、长度（范数）

### (1) 定义

- **长度（范数）**：设 $V$ 是欧氏空间，对任意 $\alpha \in V$，记 $\sqrt{(\alpha, \alpha)}$ 为 $|\alpha|$，即
  $$
  |\alpha| = \sqrt{(\alpha, \alpha)}
  $$
  
  称 $|\alpha|$ 为 $\alpha$ 的长度（或范数）。[来源：p6，黄色高亮]

- **单位向量**：长度为 1 的向量称为单位向量。[来源：p6]

- **单位化**：任何一个非零向量都可以单位化，即对任意 $\alpha \neq 0$，$\dfrac{\alpha}{|\alpha|}$ 是一个单位向量。[来源：p6，黄色高亮]

### (2) 长度的性质

- (1) $|\alpha| \geq 0$，且 $|\alpha| = 0$ 当且仅当 $\alpha = 0$；[来源：p7]

- (2) 对任意的实数 $k$ 及向量 $\alpha$，$|k\alpha| = |k| \cdot |\alpha|$；[来源：p7]

- (3) ⭐ **Cauchy-Schwarz 不等式**：对任意两个向量 $\alpha, \beta$，
  $$
  |(\alpha, \beta)| \leq |\alpha| \cdot |\beta|
  $$
  
  **等号成立当且仅当 $\alpha, \beta$ 线性相关**。[来源：p7，黄色高亮]

- (4) **三角不等式**：对任意两个向量 $\alpha, \beta$，
  $$
  |\alpha + \beta| \leq |\alpha| + |\beta| \quad \text{且} \quad |\alpha - \beta| \geq \big||\alpha| - |\beta|\big|
  $$
  
  [来源：p9]

### (3) Cauchy-Schwarz 不等式的应用

- **实数形式**：设 $a_i, b_i$（$i = 1, 2, \cdots, n$）都是实数，那么
  $$
  \left| \sum_{i=1}^{n} a_i b_i \right| \leq \sqrt{\left( \sum_{i=1}^{n} a_i^2 \right) \left( \sum_{i=1}^{n} b_i^2 \right)}
  $$
  
  [来源：p8，黄色高亮]

- **积分形式**：设 $f(x), g(x) \in C([a,b])$，那么
  $$
  \left| \int_a^b f(t)g(t) \, dt \right| \leq \sqrt{\int_a^b f^2(x) \, dx \cdot \int_a^b g^2(x) \, dx}
  $$
  
  [来源：p8，黄色高亮]

---

## 三、夹角与正交

### (1) 定义

- **夹角**：设 $\alpha$ 和 $\beta$ 是 $V$ 中两个非零向量，这两个向量的夹角定义为
  $$
  \langle \alpha, \beta \rangle = \arccos \frac{(\alpha, \beta)}{|\alpha| \cdot |\beta|}
  $$
  
  即 $\cos \langle \alpha, \beta \rangle = \dfrac{(\alpha, \beta)}{|\alpha| \cdot |\beta|}$。[来源：p10-11，黄色高亮]

  > **注**：由 Cauchy-Schwarz 不等式，$\left| \dfrac{(\alpha, \beta)}{|\alpha| \cdot |\beta|} \right| \leq 1$，所以夹角定义是良定的。

- **正交**：若 $(\alpha, \beta) = 0$，则称 $\alpha$ 和 $\beta$ **正交**（对应几何中的垂直，夹角 90 度）。[来源：p11]

### (2) 正交的性质

- 零向量与任意向量都正交。[来源：p11]

- 设 $\alpha$ 和 $\beta$ 是 $V$ 中两个非零向量，$\alpha$ 和 $\beta$ 正交当且仅当 $\langle \alpha, \beta \rangle = \dfrac{\pi}{2}$。[来源：p11]

### (3) 推论/二级结论

- ⭐ 若 $\alpha$ 与 $\beta_1, \beta_2, \cdots, \beta_m$ 都正交，则 $\alpha$ 与它们的任意线性组合也正交，即
  $$
  \left( \alpha, \sum_{i=1}^{m} k_i \beta_i \right) = 0
  $$
  
  [来源：p12，黄色高亮]

- ⭐ 设 $\alpha_1, \alpha_2, \cdots, \alpha_n$ 是 $n$ 维欧氏空间的一组基，$\alpha$ 是 $V$ 中一个向量。若 $(\alpha, \alpha_i) = 0$（$i = 1, 2, \cdots, n$），则 $\alpha = 0$。
  
  **【解读】**：与一组基中所有向量都正交的向量只能是零向量。[来源：p13，黄色高亮]

---

## 四、度量矩阵（Gram 矩阵）

### (1) 定义

- **度量矩阵**：设 $\alpha_1, \alpha_2, \cdots, \alpha_n$ 是 $n$ 维欧氏空间的一组基，令
  $$
  A = \begin{pmatrix} (\alpha_1, \alpha_1) & (\alpha_1, \alpha_2) & \cdots & (\alpha_1, \alpha_n) \\ (\alpha_2, \alpha_1) & (\alpha_2, \alpha_2) & \cdots & (\alpha_2, \alpha_n) \\ \vdots & \vdots & \ddots & \vdots \\ (\alpha_n, \alpha_1) & (\alpha_n, \alpha_2) & \cdots & (\alpha_n, \alpha_n) \end{pmatrix}
  $$
  
  则称 $A$ 为**度量矩阵**（Gram 矩阵）。[来源：p14]

### (2) 定理/性质

- **内积的矩阵表示**：设 $\alpha, \beta$ 是 $n$ 维欧氏空间的任意两个向量，$\alpha_1, \alpha_2, \cdots, \alpha_n$ 是一组基，
  $$
  \alpha = (\alpha_1, \alpha_2, \cdots, \alpha_n) x, \quad \beta = (\alpha_1, \alpha_2, \cdots, \alpha_n) y
  $$
  
  $A$ 为度量矩阵，那么
  $$
  (\alpha, \beta) = x^T A y
  $$
  
  [来源：p15]

- ⭐ **度量矩阵 $A$ 是正定矩阵**。[来源：p15，黄色高亮框]

- ⭐ **确定了一组基的度量矩阵 $A$，就确定了内积**。[来源：p15，黄色高亮框]

---

## 五、正交向量组与标准正交基

### (1) 定义

在 $n$ 维欧氏空间中：

- **正交向量组**：两两正交的非零向量组。[来源：p16]

- **标准正交向量组**：两两正交的非零单位向量组。[来源：p16]

- **正交基**：由正交向量组构成的一组基。[来源：p16]

- **标准正交基**：由标准正交向量组构成的一组基。[来源：p16]

### (2) 性质/定理

- ⭐ **正交向量组必线性无关**。[来源：p17]

- ⭐ $n$ 维欧氏空间中任何由 $n$ 个向量组成的正交向量组都构成它的一组**正交基**；将其单位化即可得到它的一组**标准正交基**。[来源：p17]

- ⭐ $n$ 维欧氏空间**必存在标准正交基，且标准正交基不唯一**。[来源：p20]

---

## 六、Gram-Schmidt 正交化过程

### (1) 定理

对 $n$ 维欧氏空间 $V$ 中任何 $m$ 个线性无关的向量 $\alpha_1, \alpha_2, \cdots, \alpha_m$（$m \leq n$），我们可以构造出一个正交向量组 $\beta_1, \beta_2, \cdots, \beta_m$，满足对任意的 $k = 1, 2, \cdots, m$，$\alpha_1, \alpha_2, \cdots, \alpha_k$ 与 $\beta_1, \beta_2, \cdots, \beta_k$ **等价**。[来源：p18]

### (2) 正交化公式（第一步：正交化）⭐

设 $\alpha_1, \alpha_2, \cdots, \alpha_m$（$m \leq n$）是 $n$ 维欧氏空间中 $m$ 个线性无关的向量：

$$
\beta_1 = \alpha_1
$$


$$
\beta_2 = \alpha_2 - \frac{(\alpha_2, \beta_1)}{(\beta_1, \beta_1)} \beta_1
$$


$$
\beta_3 = \alpha_3 - \frac{(\alpha_3, \beta_1)}{(\beta_1, \beta_1)} \beta_1 - \frac{(\alpha_3, \beta_2)}{(\beta_2, \beta_2)} \beta_2
$$


$$
\vdots
$$


$$
\beta_i = \alpha_i - \frac{(\alpha_i, \beta_1)}{(\beta_1, \beta_1)} \beta_1 - \frac{(\alpha_i, \beta_2)}{(\beta_2, \beta_2)} \beta_2 - \cdots - \frac{(\alpha_i, \beta_{i-1})}{(\beta_{i-1}, \beta_{i-1})} \beta_{i-1}
$$


$$
\vdots
$$


$$
\beta_m = \alpha_m - \frac{(\alpha_m, \beta_1)}{(\beta_1, \beta_1)} \beta_1 - \frac{(\alpha_m, \beta_2)}{(\beta_2, \beta_2)} \beta_2 - \cdots - \frac{(\alpha_m, \beta_{m-1})}{(\beta_{m-1}, \beta_{m-1})} \beta_{m-1}
$$


则 $\beta_1, \beta_2, \cdots, \beta_m$ 为一组**正交向量组**（当 $m=n$ 时它们构成 $V$ 的一组**正交基**）。[来源：p19，红框标注]

### (3) 单位化公式（第二步：单位化）

$$
\gamma_i = \frac{\beta_i}{|\beta_i|}, \quad i = 1, 2, \cdots, m
$$


则 $\gamma_1, \gamma_2, \cdots, \gamma_m$ 为一组**标准正交向量组**（当 $m=n$ 时它们构成 $V$ 的一组**标准正交基**）。[来源：p20]

---

## 七、正交向量组的扩充定理

### (1) 线性无关向量组的扩充（参见前面讲次）

设 $\alpha_1, \alpha_2, \cdots, \alpha_k$ 是 $n$ 维欧氏空间 $V$ 中**线性无关的向量组**，$k < n$，那么必存在 $V$ 中的向量 $\beta_1, \beta_2, \cdots, \beta_{n-k}$，使得 $\alpha_1, \alpha_2, \cdots, \alpha_k, \beta_1, \beta_2, \cdots, \beta_{n-k}$ 为 $V$ 的**一组基**。[来源：p21，黄色高亮]

### (2) 正交向量组的扩充

设 $\alpha_1, \alpha_2, \cdots, \alpha_k$ 是 $n$ 维欧氏空间 $V$ 中的**正交向量组**，$k < n$，那么必存在 $V$ 中的向量 $\beta_1, \beta_2, \cdots, \beta_{n-k}$，使得 $\alpha_1, \alpha_2, \cdots, \alpha_k, \beta_1, \beta_2, \cdots, \beta_{n-k}$ 为 $V$ 的**一组正交基**。[来源：p21，橙色高亮]

### (3) 标准正交向量组的扩充

设 $\alpha_1, \alpha_2, \cdots, \alpha_k$ 是 $n$ 维欧氏空间 $V$ 中的**标准正交向量组**，$k < n$，那么必存在 $V$ 中的向量 $\beta_1, \beta_2, \cdots, \beta_{n-k}$，使得 $\alpha_1, \alpha_2, \cdots, \alpha_k, \beta_1, \beta_2, \cdots, \beta_{n-k}$ 为 $V$ 的**一组标准正交基**。[来源：p21，橙色高亮]

---

## 八、欧氏空间的同构

### (1) 同构映射的定义

设 $V$ 是实数域 $\mathbb{R}$ 上的欧氏空间，取定 $V$ 中一组**标准正交基**为 $\alpha_1, \alpha_2, \cdots, \alpha_n$。对任何 $\alpha \in V$，设 $\alpha$ 在基 $\alpha_1, \alpha_2, \cdots, \alpha_n$ 下坐标为 $x$，即 $\alpha = (\alpha_1, \alpha_2, \cdots, \alpha_n)x$，而 $x \in P^n$ 是一个 $n$ 维列向量。

这样得到一个映射 $\phi: V \to P^n$：对任何 $\alpha \in V$，$\phi(\alpha) = x$。

映射 $\phi: V \to P^n$ 是一一对应，且有性质：
- $\phi(\alpha + \beta) = \phi(\alpha) + \phi(\beta)$（保持加法）
- $\phi(k\alpha) = k\phi(\alpha)$（保持数乘）

由于所取 $\alpha_1, \alpha_2, \cdots, \alpha_n$ 为标准正交基，上述映射 $\phi$ 保持内积，即 $(\phi(\alpha), \phi(\beta)) = (\alpha, \beta)$（其中 $\mathbb{R}^n$ 取标准内积）。因此 $\phi$ 是一个欧氏空间的**同构映射**，欧氏空间 $V$ 和 $\mathbb{R}^n$（标准内积）**同构**。[来源：p22]

---

## 九、常用技巧

### (1) Gram-Schmidt 正交化的记忆技巧

每一步 $\beta_i$ 的构造：用 $\alpha_i$ 减去它在前面所有 $\beta_j$（$j < i$）方向上的投影。投影系数为 $\dfrac{(\alpha_i, \beta_j)}{(\beta_j, \beta_j)}$。【整理自PPT】

### (2) 验证正交的技巧

验证向量组正交，只需计算所有不同向量对的内积，验证它们都等于零。【整理自PPT】

### (3) 由度量矩阵判断内积性质

度量矩阵 $A$ 必为对称正定矩阵；因此判断一个给定矩阵（或对应双线性形式）是否定义内积，只需验证其对称且正定（如用顺序主子式全正的判别法）。【整理自PPT】

---

## 附：重要公式速查表

| 概念 | 公式 |
|:---|:---|
| 内积（$\mathbb{R}^n$ 标准） | $(\alpha,\beta)=\sum_{i=1}^n a_i b_i=\alpha^{\mathsf T}\beta$ |
| 长度 | $\left\Vert\alpha\right\Vert=\sqrt{(\alpha,\alpha)}$ |
| 单位化 | $\displaystyle\frac{\alpha}{\left\Vert\alpha\right\Vert}\ (\alpha\ne 0)$ |
| 夹角 | $\displaystyle\cos\langle\alpha,\beta\rangle=\frac{(\alpha,\beta)}{\left\Vert\alpha\right\Vert\cdot\left\Vert\beta\right\Vert}$ |
| 正交条件 | $(\alpha,\beta)=0$ |
| 内积的矩阵表示 | $(x,y)=x^{\mathsf T}Ay$ |
| Cauchy-Schwarz | $\left\vert(\alpha,\beta)\right\vert\le \left\Vert\alpha\right\Vert\cdot\left\Vert\beta\right\Vert$ |
| 三角不等式 | $\left\Vert\alpha+\beta\right\Vert\le \left\Vert\alpha\right\Vert+\left\Vert\beta\right\Vert$ |
