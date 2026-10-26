---
title: "线性代数知识集锦：第32-34讲"
description: "线性代数课程笔记：线性代数知识集锦：第32-34讲。"
---

<div class="note-meta"><a href="/courses/linear-algebra/">线性代数目录</a><a href="/downloads/linear-algebra/chapter-4h2.md" download>下载 Markdown</a></div>

## 关键考点总览（本讲速记）

1. ⭐ 内积的定义：$(\alpha, \beta) = \sum_{i=1}^{n} a_i b_i = \beta^T \alpha = \alpha^T \beta$
2. ⭐ 内积三性质：对称性、线性性、正定性
3. ⭐ Cauchy-Schwarz不等式：$|(\alpha, \beta)| \leq |\alpha| \cdot |\beta|$，等号成立当且仅当线性相关
4. ⭐ 正交向量组必线性无关
5. ⭐ Gram-Schmidt正交化公式
6. ⭐ 正交矩阵判定：$A^T A = E \Leftrightarrow A^T = A^{-1}$
7. ⭐ 实对称矩阵特征值全为实数，不同特征值对应的特征向量正交
8. ⭐ 实对称矩阵必可正交相似对角化：$Q^T A Q = \Lambda$
9. ⭐ 正交替换化二次型为标准型，系数为特征值
10. ⭐ 正定二次型等价条件：特征值全大于0、顺序主子式全大于0

---

# 第32讲：正交向量组

## 一、内积

### (1) 定义

- **内积定义**：设 $R^n$ 是实数域上的 $n$ 维线性空间，对任意 $\alpha = (a_1, a_2, \cdots, a_n)^T$，$\beta = (b_1, b_2, \cdots, b_n)^T$，定义
  $$
  (\alpha, \beta) = a_1 b_1 + a_2 b_2 + \cdots + a_n b_n = \sum_{i=1}^{n} a_i b_i
  $$
  
  为 $\alpha$ 和 $\beta$ 的**内积**。[来源：p2，黄框标注]

- **矩阵形式**：$(\alpha, \beta) = \beta^T \alpha = \alpha^T \beta$，结果是一个实数。[来源：p2，黄框标注]

### (2) 性质

⭐ 内积 $(\alpha, \beta)$ 满足以下三条性质：

1. **对称性**：$(\alpha, \beta) = (\beta, \alpha)$ [来源：p3，红框标注]

2. **线性性**：
   - $(\alpha + \gamma, \beta) = (\alpha, \beta) + (\gamma, \beta)$
   - $(k\alpha, \beta) = k(\alpha, \beta)$，这里 $k$ 是实数 [来源：p3，红框标注]

3. **正定性**：$(\alpha, \alpha) \geq 0$，且 $(\alpha, \alpha) = 0$ 当且仅当 $\alpha = 0$ [来源：p3，红框标注]

### (3) 推论/二级结论

- **零向量内积**：$(0, \alpha) = 0$ [来源：p4]

- **内积展开公式**：
  $$
  \left(\sum_{i=1}^{m} k_i \alpha_i, \sum_{j=1}^{n} l_j \beta_j\right) = \sum_{i=1}^{m} \sum_{j=1}^{n} k_i l_j (\alpha_i, \beta_j)
  $$
  
  [来源：p4，黄框标注]

---

## 二、长度（范数）

### (1) 定义

- **长度定义**：对任意 $\alpha$，记 $\sqrt{(\alpha, \alpha)}$ 为 $|\alpha|$，即 $|\alpha| = \sqrt{(\alpha, \alpha)}$，称 $|\alpha|$ 为 $\alpha$ 的**长度**。[来源：p5，黄框标注]

- **单位向量**：长度为1的向量称为**单位向量**。[来源：p5]

- **单位化**：任何非零向量 $\alpha \neq 0$，$\displaystyle\frac{\alpha}{|\alpha|}$ 是单位向量。[来源：p5]

- **距离定义**：$\alpha$ 和 $\beta$ 的**距离**为 $|\alpha - \beta| = \sqrt{(\alpha - \beta, \alpha - \beta)}$ [来源：p5]

### (2) 性质

⭐ 长度的性质：

1. $|\alpha| \geq 0$，且 $|\alpha| = 0$ 当且仅当 $\alpha = 0$ [来源：p6]

2. 对任意实数 $k$ 及向量 $\alpha$：$|k\alpha| = |k| \cdot |\alpha|$ [来源：p6]

3. ⭐ **Cauchy-Schwarz不等式**：对任意两个向量 $\alpha, \beta$，有
   $$
   |(\alpha, \beta)| \leq |\alpha| \cdot |\beta|
   $$
   
   **等号成立当且仅当 $\alpha, \beta$ 线性相关** [来源：p6，黄框标注]

4. **三角不等式**：对任意两个向量 $\alpha, \beta$，有
   $$
   |\alpha + \beta| \leq |\alpha| + |\beta| \quad \text{和} \quad |\alpha - \beta| \geq ||\alpha| - |\beta||
   $$
   
   [来源：p9]

### (4) Cauchy-Schwarz不等式的具体形式

设 $a_i, b_i$ ($i = 1, 2, \cdots, n$) 都是实数，则
$$
\left|\sum_{i=1}^{n} a_i b_i\right| \leq \sqrt{\left(\sum_{i=1}^{n} a_i^2\right)\left(\sum_{i=1}^{n} b_i^2\right)}
$$

[来源：p7，黄框标注]

### (6) 常用技巧

- **Cauchy-Schwarz不等式证明要点**：对任意实数 $x$，由内积正定性有 $|x\alpha - \beta|^2 = (x\alpha - \beta, x\alpha - \beta) \geq 0$，展开得关于 $x$ 的二次函数，由判别式 $\Delta \leq 0$ 得到不等式。[来源：p8]

---

## 三、夹角与正交

### (1) 定义

- **夹角定义**：设 $\alpha$ 和 $\beta$ 是 $V$ 中两个非零向量，由Cauchy-Schwarz不等式，$\displaystyle\left|\frac{(\alpha, \beta)}{|\alpha| \cdot |\beta|}\right| \leq 1$，定义这两个向量的**夹角**为
  $$
  \langle\alpha, \beta\rangle = \arccos\frac{(\alpha, \beta)}{|\alpha| \cdot |\beta|}
  $$
  
  等价地，$\displaystyle\cos\langle\alpha, \beta\rangle = \frac{(\alpha, \beta)}{|\alpha| \cdot |\beta|}$ [来源：p11，黄框标注]

- ⭐ **正交定义**：若 $(\alpha, \beta) = 0$，则称 $\alpha$ 和 $\beta$ **正交**。[来源：p12]

- **零向量正交**：零向量与任意向量都正交。[来源：p12]

- 设 $\alpha$ 和 $\beta$ 是 $V$ 中两个非零向量，$\alpha$ 和 $\beta$ 正交当且仅当 $\langle\alpha, \beta\rangle = \frac{\pi}{2}$。[来源：p12]

### (3) 推论/二级结论

⭐ **正交于子空间（对线性组合封闭）**：如果一个向量与一组向量都正交，则它与这组向量的任何线性组合也正交。

具体地，设对任意的 $i = 1, 2, \cdots, m$，$\alpha$ 与 $\beta_i$ 正交，即 $(\alpha, \beta_i) = 0$，则
$$
\left(\alpha, \sum_{i=1}^{m} k_i \beta_i\right) = \sum_{i=1}^{m} k_i (\alpha, \beta_i) = 0
$$

从而 $\alpha$ 和线性空间 $L(\beta_1, \beta_2, \cdots, \beta_m)$ 中所有向量正交。[来源：p13，标注框]

⭐ **与基正交则为零向量**：设 $\alpha_1, \alpha_2, \cdots, \alpha_n$ 是 $n$ 维空间的一组基，$\alpha$ 是 $V$ 中一个向量。若 $(\alpha, \alpha_i) = 0$ ($i = 1, 2, \cdots, n$)，则 $\alpha = 0$。

**理解**：空间中一个元素，与这个空间中所有元素正交，那么这个元素一定是零元素。[来源：p14，标注框]

---

## 四、Gram行列式

### (1) 定义

设 $\alpha_1, \alpha_2, \cdots, \alpha_m$ 是 $n$ 维空间的 $m$ 个向量，**Gram行列式**（即Gram矩阵的行列式）定义为
$$
G(\alpha_1, \alpha_2, \cdots, \alpha_m) = \begin{vmatrix} (\alpha_1, \alpha_1) & (\alpha_1, \alpha_2) & \cdots & (\alpha_1, \alpha_m) \\ (\alpha_2, \alpha_1) & (\alpha_2, \alpha_2) & \cdots & (\alpha_2, \alpha_m) \\ \vdots & \vdots & \ddots & \vdots \\ (\alpha_m, \alpha_1) & (\alpha_m, \alpha_2) & \cdots & (\alpha_m, \alpha_m) \end{vmatrix}
$$

[来源：p15-16]

### (4) 等价条件

⭐ $\alpha_1, \alpha_2, \cdots, \alpha_m$ **线性相关** $\Leftrightarrow$ $G(\alpha_1, \alpha_2, \cdots, \alpha_m) = 0$ [来源：p15-16]

---

## 五、正交向量组与标准正交基

### (1) 定义

设 $V$ 是 $n$ 维欧氏空间：

- ⭐ **正交向量组**：两两正交的非零向量组 [来源：p17，红字标注]

- ⭐ **标准正交向量组**：两两正交的非零单位向量组 [来源：p17，红字标注]

- ⭐ **正交基**：由正交向量组构成的一组基 [来源：p17，红字标注]

- ⭐ **标准正交基**：由标准正交向量组构成的一组基 [来源：p17，红字标注]

### (2) 性质

⭐ **正交向量组必线性无关**。[来源：p18，红字标注]

⭐ $n$ 维空间中任何由 $n$ 个向量组成的正交向量组都构成它的一组**正交基**；将其单位化即可得到它的一组**标准正交基**。[来源：p18]

⭐ **$n$ 维空间必存在标准正交基，且标准正交基不唯一**。[来源：p23]

### (6) 证明技巧

**正交向量组线性无关的证明**：设 $x_1\alpha_1 + \cdots + x_m\alpha_m = 0$，两边同时与 $\alpha_1$ 做内积，利用正交性得 $x_1(\alpha_1, \alpha_1) = 0$。由于 $\alpha_1$ 是非零向量，由内积正定性 $(\alpha_1, \alpha_1) \neq 0$，故 $x_1 = 0$。类似地，$x_2 = 0, x_3 = 0, \cdots$。[来源：p19，标注框]

---

## 六、Gram-Schmidt正交化

### (2) 定理/方法

⭐ **Gram-Schmidt正交化定理**：对 $n$ 维空间中任何 $m$ 个线性无关的向量 $\alpha_1, \alpha_2, \cdots, \alpha_m$ ($m \leq n$)，可以构造出一个正交向量组 $\beta_1, \beta_2, \cdots, \beta_m$，满足对任意的 $k = 1, 2, \cdots, m$，$\alpha_1, \alpha_2, \cdots, \alpha_k$ 与 $\beta_1, \beta_2, \cdots, \beta_k$ 都是等价的（生成相同的子空间）。[来源：p20-22]

⭐ **正交化公式（第一步：正交化）**：
$$
\beta_1 = \alpha_1
$$

$$
\beta_2 = \alpha_2 - \frac{(\alpha_2, \beta_1)}{(\beta_1, \beta_1)}\beta_1
$$

$$
\beta_3 = \alpha_3 - \frac{(\alpha_3, \beta_1)}{(\beta_1, \beta_1)}\beta_1 - \frac{(\alpha_3, \beta_2)}{(\beta_2, \beta_2)}\beta_2
$$

$$
\vdots
$$

$$
\beta_i = \alpha_i - \frac{(\alpha_i, \beta_1)}{(\beta_1, \beta_1)}\beta_1 - \frac{(\alpha_i, \beta_2)}{(\beta_2, \beta_2)}\beta_2 - \cdots - \frac{(\alpha_i, \beta_{i-1})}{(\beta_{i-1}, \beta_{i-1})}\beta_{i-1}
$$

[来源：p22，红框标注]

**记忆要点**：减去在已经计算出的所有向量上的投影。$\alpha_2$ 在 $\beta_1$ 上的投影为 $\displaystyle\frac{(\alpha_2, \beta_1)}{(\beta_1, \beta_1)}\beta_1$。[来源：p21-22，红框标注]

⭐ **单位化公式（第二步：单位化）**：
$$
\gamma_i = \frac{\beta_i}{|\beta_i|}, \quad i = 1, 2, \cdots, m
$$

则 $\gamma_1, \gamma_2, \cdots, \gamma_m$ 即为一组标准正交基。[来源：p23]

---

# 第33讲：正交矩阵与实对称矩阵的相似对角阵

## 一、正交矩阵

### (1) 定义

**正交矩阵定义**：设 $A$ 为 $n$ 阶实矩阵，若 $A^T A = E$，则称 $A$ 为**正交矩阵**。【整理自PPT】

### (2) 性质

⭐ 正交矩阵的性质：

1. 若 $A$ 为正交阵，则 $|A| = \pm 1$ [来源：p2，黄框标注]

2. ⭐ 实矩阵 $A$ 为正交阵 $\Leftrightarrow$ $A^T = A^{-1}$ [来源：p2，黄框标注]

3. 若 $A, B$ 为 $n$ 阶正交阵，则 $AB$ 也是正交矩阵 [来源：p2，黄框标注]

4. ⭐ 实矩阵 $A$ 为正交阵 $\Leftrightarrow$ $A$ 的**行向量组**是两两正交的单位向量组 [来源：p3，黄框标注]

5. ⭐ 实矩阵 $A$ 为正交阵 $\Leftrightarrow$ $A$ 的**列向量组**是两两正交的单位向量组 [来源：p4，黄框标注]

6. 若 $A$ 为正交阵，则 $A$ 的实特征值只能为 $\pm 1$（$A$ 的特征值模为1）[来源：p5，黄框标注]

### (3) 推论

⭐ 若 $A = (\alpha_1, \alpha_2, \cdots, \alpha_n)$ 是正交矩阵，则
$$
(\alpha_i, \alpha_j) = \alpha_i^T \alpha_j = \begin{cases} 1, & \text{如果 } i = j \\ 0, & \text{如果 } i \neq j \end{cases}
$$

[来源：p3-4]

---

## 二、正交变换

### (1) 定义

设 $A = (a_{ij})_{n \times n}$ 是实正交矩阵，对任何 $n$ 维向量 $x$，考虑变换 $\sigma(x) = Ax$，则 $|x| = |\sigma(x)|$。这样的变换取名叫**正交变换**。[来源：p10]

### (2) 性质

⭐ **正交变换不改变向量长度**。[来源：p10，标注框]

等价地：$A = (a_{ij})_{n \times n}$ 是实正交矩阵 $\Leftrightarrow$ 对任何 $x \in R^n$，都有 $|x| = |Ax|$。[来源：p10]

---

## 三、实对称矩阵的特征值与特征向量

### (2) 定理/性质

⭐ **实对称矩阵的重要性质**：

1. ⭐ **实对称矩阵的特征值全是实数** [来源：p12，黄框标注]

2. **实反对称矩阵的特征值全是0或者纯虚数** [来源：p13，黄框标注]

3. ⭐ **实对称矩阵不同特征值所对应的特征向量正交** [来源：p14]

4. ⭐ **实对称矩阵必可正交相似对角化**：对于 $n$ 阶实对称矩阵 $A$，存在正交矩阵 $Q$，使得
   $$
   Q^T A Q = Q^{-1} A Q = \Lambda
   $$
   
   其中 $\Lambda$ 是一个对角矩阵 $\text{diag}(\lambda_1, \lambda_2, \cdots, \lambda_n)$，$\lambda_1, \lambda_2, \cdots, \lambda_n$ 为 $A$ 的特征值。[来源：p19，黄框标注]

5. ⭐ **实对称矩阵特征值的几何重数等于代数重数**。[来源：p19]

### (6) 证明技巧

**实对称矩阵特征值全为实数的证明**：设 $A\alpha = \lambda\alpha$, $\alpha \neq 0$。两边取共轭，$\overline{A\alpha} = \overline{\lambda\alpha}$，即 $A\bar{\alpha} = \bar{\lambda}\bar{\alpha}$（因为 $A$ 是实对称矩阵，$\bar{A} = A$）。用两种方法计算 $\bar{\alpha}^T A\alpha$，得到 $\bar{\lambda} = \lambda$，故 $\lambda$ 为实数。[来源：p12]

---

## 四、实对称矩阵的相似对角矩阵的求法

### (6) 步骤/技巧

⭐ **用正交矩阵相似对角化实对称矩阵的步骤**：

设 $A$ 为实对称矩阵，试求正交矩阵 $Q$，使得 $Q^T A Q = Q^{-1} A Q$ 是一个对角矩阵。

**Step 1**：求出 $A$ 的所有不同特征值 $\lambda_1, \cdots, \lambda_s$；

**Step 2**：解齐次线性方程组 $(\lambda_i E - A)X = 0$，得到基础解系 $\alpha_{i1}, \alpha_{i2}, \cdots, \alpha_{im_i}$（这里 $m_i$ 是特征值 $\lambda_i$ 的几何重数，必须等于代数重数，$\alpha_{ij}$ 都是列向量）；

**Step 3**：将线性无关的向量组 $\alpha_{i1}, \alpha_{i2}, \cdots, \alpha_{im_i}$ **先正交化，然后单位化**，得到向量组 $\beta_{i1}, \beta_{i2}, \cdots, \beta_{im_i}$（施密特正交化方法）；[来源：p20，红框标注]

**Step 4**：所求矩阵 $Q = (\beta_{11}, \beta_{12}, \cdots, \beta_{1m_1}, \cdots, \beta_{s1}, \beta_{s2}, \cdots, \beta_{sm_s})$

**Step 5**：$Q^T A Q = Q^{-1} A Q = \text{diag}(\underbrace{\lambda_1, \cdots, \lambda_1}_{m_1}, \cdots, \underbrace{\lambda_s, \cdots, \lambda_s}_{m_s})$

[来源：p20]

---

# 第34讲：正交替换化二次型为标准型

## 一、化二次型为标准型的方法

### (1) 三种方法

化二次型为标准型的方法：
1. **正交代换法**：用正交矩阵化实对称矩阵为对角矩阵
2. **配方法**
3. **初等变换法**

[来源：p1]

### (2) 重要性质

⭐ **二次型的标准型不唯一** [来源：p4，红字标注]

⭐ **正交替换**化二次型为标准型以后，平方项的**系数**都是矩阵 $A$ 的**特征值** [来源：p4，红字标注]

⭐ **正交替换具有不改变向量长度的性质**，所以如果需要求椭圆、双曲线的长轴长、焦距等，**必须使用正交替换** [来源：p4]

⭐ **配方法**得到的非退换线性替换**可能会改变向量长度** [来源：p4]

---

## 二、正定二次型

### (1) 定义

**正定二次型**：对于 $n$ 元二次型 $f(x) = x^T A x$（$A$ 为实对称矩阵），若对任意非零向量 $x \neq 0$，都有 $f(x) > 0$，则称 $f$ 为**正定二次型**，$A$ 为**正定矩阵**。【整理自PPT】

**半正定二次型**：若对任意 $x$，都有 $f(x) \geq 0$，则称 $f$ 为**半正定二次型**，$A$ 为**半正定矩阵**。【整理自PPT】

### (2) 判断方法

⭐ **判断二次型是否为正定二次型的方法**：

1. **直接利用定义**（例，$A, B$ 为正定矩阵，则 $A + B$ 正定）

2. **化二次型为标准型**（有正交矩阵法、配方法、初等变换法三种方法），利用定义判断其标准型是否为正定二次型

3. **化二次型为规范标准型**，看其正惯性指数是否为 $n$

[来源：p10]

### (4) 等价条件

⭐ 二次型 $g = x^T A x$ 是**半正定二次型**
- $\Leftrightarrow$ $g$ 的标准型中 $n$ 个平方项的系数全 $\geq 0$
- $\Leftrightarrow$ $g$ 的规范标准型中正惯性指数等于秩 $r$
- $\Leftrightarrow$ $A$ 的特征值全 $\geq 0$
- $\Leftrightarrow$ 存在半正定矩阵 $B$，使得 $A = B^2$
- $\Leftrightarrow$ 存在可逆矩阵 $P$，使得 $A = P^T \begin{pmatrix} E_r & 0 \\ 0 & 0 \end{pmatrix} P$
- $\Leftrightarrow$ 存在 $n$ 阶方阵 $M$，使得 $A = M^T M$
- $\Leftrightarrow$ 存在秩为 $r$ 的 $r \times n$ 矩阵 $M$，使得 $A = M^T M$
- $\Leftrightarrow$ $A$ 的所有主子式都 $\geq 0$

[来源：p14]

⭐ 二次型 $g = x^T A x$ 是**正定二次型**（在上述基础上）：
- $\Leftrightarrow$ **特征值全大于0**
- $\Leftrightarrow$ **存在正定矩阵 $B$**，使得 $A = B^2$
- $\Leftrightarrow$ **所有顺序主子式都大于0**

[来源：p14，红字标注]

---

## 附：关键公式速查

| 公式名称 | 公式内容 |
|---------|---------|
| 内积定义 | $(\alpha, \beta) = \sum_{i=1}^{n} a_i b_i = \alpha^T \beta$ |
| 长度定义 | $\lVert \alpha \rVert = \sqrt{(\alpha, \alpha)}$ |
| 夹角公式 | $\cos\langle\alpha, \beta\rangle = \frac{(\alpha, \beta)}{\lVert \alpha \rVert \cdot \lVert \beta \rVert}$ |
| Cauchy-Schwarz | $\lvert(\alpha, \beta)\rvert \leq \lVert \alpha \rVert \cdot \lVert \beta \rVert$ |
| 施密特正交化 | $\beta_i = \alpha_i - \sum_{j=1}^{i-1} \frac{(\alpha_i, \beta_j)}{(\beta_j, \beta_j)} \beta_j$ |
| 正交矩阵条件 | $A^T A = E$ 或 $A^T = A^{-1}$ |
| 正交相似对角化 | $Q^T A Q = \Lambda$（$A$ 为实对称矩阵）|
