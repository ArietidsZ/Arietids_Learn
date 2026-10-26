# 第7章 广义积分

> Arietids Learn · 个人课程复习笔记
> 在线阅读：https://learn.arietids.net/courses/analysis-1/chapter-07/

## 关键考点总览

1. 无穷积分与瑕积分的定义及收敛/发散判定
2. **p-积分**的敛散性结论（无穷积分：$p>1$ 收敛，$p\le 1$ 发散；瑕积分：$p<1$ 收敛，$p\ge 1$ 发散）
3. **Cauchy准则**（收敛的充要条件）
4. **比较判别法**（不等式形式与极限形式）
5. **p-判别法**的应用
6. **Abel判别法**与**Dirichlet判别法**
7. 绝对收敛与条件收敛的定义及关系
8. **典型积分**：Dirichlet积分、Fresnel积分、Beta函数、Gamma函数、Euler积分
9. 广义积分的换元法与分部积分法
10. 收敛、绝对收敛与平方收敛的关系

---

## §7-1 无穷积分

### 一、基本概念

#### 1. 定义

- **广义积分（反常积分）**：不满足定积分两个条件之一的积分，即区间无限或被积函数无界。包含**无穷积分**（区间无限）和**瑕积分**（被积函数无界）。[来源：§7-1 p2]

- **常义积分**：相对广义积分而言，定积分也称为常义积分。[来源：§7-1 p2]

- **无穷积分定义**：设 $f: [a, +\infty) \to \mathbf{R}$，且 $\forall A > a$，$f \in R[a, A]$，称形式积分 $\int_a^{+\infty} f(x)\mathrm{d}x$ 为 $f$ 在 $[a, +\infty)$ 上的无穷积分。若 $\lim_{A \to +\infty} \int_a^A f(x)\mathrm{d}x = I$（$I$ 为有限实数），则称 $\int_a^{+\infty} f(x)\mathrm{d}x$ **收敛**，且其值定义为
$$
\int_a^{+\infty} f(x)\mathrm{d}x \stackrel{\text{def}}{=} \lim_{A \to +\infty} \int_a^A f(x)\mathrm{d}x = I
$$

若上述极限不存在或为 $\pm\infty$，则称 $\int_a^{+\infty} f(x)\mathrm{d}x$ **发散**。[来源：§7-1 p5，定义]

- **收敛的 $\varepsilon$-$A$ 语言**：$\int_a^{+\infty} f(x)\mathrm{d}x = I$ 即 $\forall \varepsilon > 0$，$\exists A_0 > a$，$\forall A > A_0$：
$$
\left| \int_a^A f(x)\mathrm{d}x - I \right| = \left| \int_A^{+\infty} f(x)\mathrm{d}x \right| < \varepsilon
$$

[来源：§7-1 p6]

- **$(-\infty, b]$ 上的无穷积分**：$\int_{-\infty}^b f(x)\mathrm{d}x \stackrel{\text{def}}{=} \lim_{B \to -\infty} \int_B^b f(x)\mathrm{d}x$。[来源：§7-1 p6]

- **$(-\infty, +\infty)$ 上的无穷积分**：设 $f: \mathbf{R} \to \mathbf{R}$，若 $\exists a \in \mathbf{R}$，使 $\int_{-\infty}^a f(x)\mathrm{d}x$ 和 $\int_a^{+\infty} f(x)\mathrm{d}x$ **同时独立收敛**，则称 $\int_{-\infty}^{+\infty} f(x)\mathrm{d}x$ 收敛，且其值为
$$
\int_{-\infty}^{+\infty} f(x)\mathrm{d}x \stackrel{\text{def}}{=} \int_{-\infty}^a f(x)\mathrm{d}x + \int_a^{+\infty} f(x)\mathrm{d}x
$$

[来源：§7-1 p6，定义]

- **主值收敛**：若 $\lim_{A \to +\infty} \int_{-A}^A f(x)\mathrm{d}x = I$，则称 $\int_{-\infty}^{+\infty} f(x)\mathrm{d}x$ **依主值收敛**，记为 $V.P.\int_{-\infty}^{+\infty} f(x)\mathrm{d}x = I$。[来源：§7-1 p7]

#### 2. 重要结论

- **可加性**：对 $\forall c > a$，$\int_a^{+\infty} f(x)\mathrm{d}x$ 与 $\int_c^{+\infty} f(x)\mathrm{d}x$ 同敛散，收敛时
$$
\int_a^{+\infty} f(x)\mathrm{d}x = \int_a^c f(x)\mathrm{d}x + \int_c^{+\infty} f(x)\mathrm{d}x
$$

[来源：§7-1 p7，可加性]

- **收敛与主值收敛的关系**：收敛 $\Rightarrow$ 主值收敛，反之不然。【整理自 PPT】

#### 3. 典型积分结论

- **p-积分**：$\int_1^{+\infty} \frac{\mathrm{d}x}{x^p}$ 的敛散性：
  - 当 $p > 1$ 时，收敛
  - 当 $p \leq 1$ 时，发散
  
  [来源：§7-1 例1]

---

### 二、无穷积分的性质与计算

#### 1. 线性性

- **线性性1**：$\forall c \neq 0$，$\int_a^{+\infty} f(x)\mathrm{d}x$ 与 $\int_a^{+\infty} cf(x)\mathrm{d}x$ 同敛散，收敛时
$$
\int_a^{+\infty} cf(x)\mathrm{d}x = c\int_a^{+\infty} f(x)\mathrm{d}x
$$

[来源：§7-1 p9，线性性1]

- **线性性2**：若 $\int_a^{+\infty} f(x)\mathrm{d}x$ 与 $\int_a^{+\infty} g(x)\mathrm{d}x$ 收敛，则有
$$
\int_a^{+\infty} [f(x) \pm g(x)]\mathrm{d}x = \int_a^{+\infty} f(x)\mathrm{d}x \pm \int_a^{+\infty} g(x)\mathrm{d}x
$$

[来源：§7-1 p9，线性性2]

#### 2. 计算方法

- **Newton-Leibniz公式**：若 $f \in C[a, +\infty)$，且 $F'(x) = f(x)$（$F$ 为 $f$ 的一个原函数），则
$$
\int_a^{+\infty} f(x)\mathrm{d}x = \lim_{A \to +\infty}\int_a^A f(x)\mathrm{d}x = \lim_{A \to +\infty}\big(F(A)-F(a)\big)
$$

（若上述极限存在且有限，则积分收敛；否则发散。）
[来源：§7-1 p9，N-L公式]

- **分部积分法**：设 $u, v \in C^{(1)}[a, +\infty)$。若 $\lim_{A \to +\infty}u(A)v(A)$ 存在且有限，并且 $\int_a^{+\infty} u(x)v'(x)\mathrm{d}x$ 与 $\int_a^{+\infty} u'(x)v(x)\mathrm{d}x$ 均收敛，则有
$$
\int_a^{+\infty} u(x)v'(x)\mathrm{d}x = u(x)v(x)\Big|_a^{+\infty} - \int_a^{+\infty} u'(x)v(x)\mathrm{d}x
$$

[来源：§7-1 p10，分部积分法]

- **换元积分法**：设 $f \in C[a, +\infty)$，$x = \varphi(t) \in C^{(1)}[\alpha, \beta)$，且 $\varphi$ 在 $[\alpha,\beta)$ 上严格单调、$\varphi(\alpha) = a$、$\lim_{t \to \beta^-} \varphi(t) = +\infty$，则有
$$
\int_a^{+\infty} f(x)\mathrm{d}x = \int_\alpha^\beta f(\varphi(t))\varphi'(t)\mathrm{d}t
$$

[来源：§7-1 p10，换元积分法]

---

### 三、无穷积分敛散性判别

#### 1. Cauchy准则

- **Cauchy准则（充要条件）**：$\int_a^{+\infty} f(x)\mathrm{d}x$ 收敛 $\Leftrightarrow$
$$
\forall \varepsilon > 0, \exists A > a, \forall A', A'' > A: \left| \int_{A'}^{A''} f(x)\mathrm{d}x \right| < \varepsilon
$$

[来源：§7-1 p11，Cauchy准则]

- **发散的Cauchy准则**：$\int_a^{+\infty} f(x)\mathrm{d}x$ 发散 $\Leftrightarrow$ $\exists \varepsilon_0 > 0$，$\forall A > a$，$\exists A', A'' > A$：$\left| \int_{A'}^{A''} f(x)\mathrm{d}x \right| \geq \varepsilon_0$。【非 PPT 直接给出，由Cauchy准则取否定得】

#### 2. 非负函数无穷积分判别法

- **收敛原理**：设 $f(x) \geq 0$，则 $\int_a^{+\infty} f(x)\mathrm{d}x$ 收敛 $\Leftrightarrow$ $F(A) = \int_a^A f(x)\mathrm{d}x$ 在 $[a, +\infty)$ 有上界。[来源：§7-1 p12，收敛原理]

- **比较判别法（不等式形式）**：设 $g(x) \geq f(x) \geq 0$，则
  - (1) $\int_a^{+\infty} g(x)\mathrm{d}x$ 收敛 $\Rightarrow$ $\int_a^{+\infty} f(x)\mathrm{d}x$ 收敛
  - (2) $\int_a^{+\infty} f(x)\mathrm{d}x$ 发散 $\Rightarrow$ $\int_a^{+\infty} g(x)\mathrm{d}x$ 发散
  
  [来源：§7-1 p12，比较判别法]

- **比较判别法（极限形式）**：设 $f(x) \geq 0$，$g(x) > 0$，且 $\lim_{x \to +\infty} \frac{f(x)}{g(x)} = l$，则
  - (1) 当 $0 < l < +\infty$ 时，$\int_a^{+\infty} f(x)\mathrm{d}x$ 与 $\int_a^{+\infty} g(x)\mathrm{d}x$ 同敛散
  - (2) 当 $l = 0$ 时，$\int_a^{+\infty} g(x)\mathrm{d}x$ 收敛 $\Rightarrow$ $\int_a^{+\infty} f(x)\mathrm{d}x$ 收敛
  - (3) 当 $l = +\infty$ 时，$\int_a^{+\infty} g(x)\mathrm{d}x$ 发散 $\Rightarrow$ $\int_a^{+\infty} f(x)\mathrm{d}x$ 发散
  
  [来源：§7-1 p13，极限形式]

- **p-判别法**：设 $f(x) \geq 0$，且 $\lim_{x \to +\infty} x^p f(x) = l$，则
  - (1) 当 $0 \leq l < +\infty$，且 $p > 1$ 时，$\int_a^{+\infty} f(x)\mathrm{d}x$ 收敛
  - (2) 当 $0 < l \leq +\infty$，且 $p \leq 1$ 时，$\int_a^{+\infty} f(x)\mathrm{d}x$ 发散
  - (3) 其余情形（如 $p \leq 1$ 且 $l=0$，或 $p>1$ 且 $l=+\infty$）该判别法不能直接判定，需要另用比较法或更精细估计
  
  [来源：§7-1 p14，p-判别法]

#### 3. 绝对收敛与条件收敛

- **绝对收敛定义**：若 $\int_a^{+\infty} |f(x)|\mathrm{d}x$ 收敛，则称 $\int_a^{+\infty} f(x)\mathrm{d}x$ **绝对收敛**。[来源：§7-1 p15，定义]

- **条件收敛定义**：若 $\int_a^{+\infty} f(x)\mathrm{d}x$ 收敛，但 $\int_a^{+\infty} |f(x)|\mathrm{d}x$ 发散，则称 $\int_a^{+\infty} f(x)\mathrm{d}x$ **条件收敛**。[来源：§7-1 p15，定义]

- **定理11**：若 $\int_a^{+\infty} f(x)\mathrm{d}x$ 绝对收敛，则 $\int_a^{+\infty} f(x)\mathrm{d}x$ 收敛。[来源：§7-1 p15，定理11]

- **命题**：若 $\int_a^{+\infty} f(x)\mathrm{d}x$，$\int_a^{+\infty} g(x)\mathrm{d}x$ 绝收，则 $\int_a^{+\infty} [f(x) + g(x)]\mathrm{d}x$ 绝收。[来源：§7-1 p15，命题]

#### 4. A-D判别法

- **Abel判别法**：若 $\int_a^{+\infty} f(x)\mathrm{d}x$ 收敛，$g(x)$ 在 $[a, +\infty)$ 单调有界，则 $\int_a^{+\infty} f(x)g(x)\mathrm{d}x$ 收敛。[来源：§7-1 p16，Abel]

- **Dirichlet判别法**：若 $F(A) = \int_a^A f(x)\mathrm{d}x$ 在 $[a, +\infty)$ 有界，$g(x)$ 在 $[a, +\infty)$ 单调且 $\lim_{x \to +\infty} g(x) = 0$，则 $\int_a^{+\infty} f(x)g(x)\mathrm{d}x$ 收敛。[来源：§7-1 p16，Dirichlet]

- **积分第二中值定理**：设 $f \in R[a, b]$，$g$ 在 $[a, b]$ 上单调，则 $\exists \xi \in [a, b]$ 使得
$$
\int_a^b f(x)g(x)\mathrm{d}x = g(a)\int_a^\xi f(x)\mathrm{d}x + g(b)\int_\xi^b f(x)\mathrm{d}x
$$

[来源：§7-1 p16，积分第二中值定理]

#### 5. 典型积分

- **Dirichlet积分**：$\int_0^{+\infty} \frac{\sin x}{x}\mathrm{d}x$ 收敛（条件收敛）。[来源：§7-1 例6，例9]

- **Fresnel积分**：$\int_0^{+\infty} \sin(x^2)\mathrm{d}x$ 条件收敛。[来源：§7-1 例10]

---

## §7-2 瑕积分

### 一、基本概念

#### 1. 定义

- **瑕点**：使被积函数无界的点。【整理自 PPT】

- **瑕积分定义（$b$ 为瑕点）**：设 $f: [a, b) \to \mathbf{R}$，且 $b$ 是 $f$ 的瑕点。若 $\forall \varepsilon > 0$，$f \in R[a, b-\varepsilon]$，称形式积分 $\int_a^b f(x)\mathrm{d}x$ 为 $f$ 在 $[a, b)$ 上的瑕积分。若
$$
\lim_{\varepsilon \to 0^+} \int_a^{b-\varepsilon} f(x)\mathrm{d}x = I\ (\text{有限实数})
$$

则称 $\int_a^b f(x)\mathrm{d}x$ **收敛**，且其值定义为
$$
\int_a^b f(x)\mathrm{d}x \stackrel{\text{def}}{=} \lim_{\varepsilon \to 0^+} \int_a^{b-\varepsilon} f(x)\mathrm{d}x = I
$$

若上述极限不存在或为 $\pm\infty$，则称 $\int_a^b f(x)\mathrm{d}x$ **发散**。[来源：§7-2 p19，定义]

- **$a$ 为瑕点时的定义**：$\int_a^b f(x)\mathrm{d}x \stackrel{\text{def}}{=} \lim_{\varepsilon \to 0^+} \int_{a+\varepsilon}^b f(x)\mathrm{d}x$。[来源：§7-2 p20]

- **$c \in (a, b)$ 为瑕点时的定义**：
$$
\int_a^b f(x)\mathrm{d}x \stackrel{\text{def}}{=} \int_a^c f(x)\mathrm{d}x + \int_c^b f(x)\mathrm{d}x
$$

当且仅当右端**同时独立收敛**时，称左端收敛。[来源：§7-2 p20]

#### 2. 典型积分结论

- **p-积分（瑕积分）**：$\int_a^b \frac{\mathrm{d}x}{(b-x)^p}$（$a < b$，$p > 0$，$b$ 为瑕点）的敛散性：
  - 当 $p < 1$ 时，收敛
  - 当 $p \geq 1$ 时，发散
  
  [来源：§7-2 例1]

---

### 二、瑕积分的性质与计算

#### 1. 计算方法

- **分部积分法**：设 $u, v \in C^{(1)}[a, b)$。若 $\lim_{x \to b^-}u(x)v(x)$ 存在且有限，并且 $\int_a^b u(x)v'(x)\mathrm{d}x$ 与 $\int_a^b u'(x)v(x)\mathrm{d}x$ 均收敛，则有
$$
\int_a^b u(x)v'(x)\mathrm{d}x = u(x)v(x)\Big|_a^b - \int_a^b u'(x)v(x)\mathrm{d}x
$$

[来源：§7-2 p21，分部积分法]

- **换元积分法**：设 $f \in C[a, b)$，$x = \varphi(t) \in C^{(1)}[\alpha, \beta)$，且 $\varphi$ 在 $[\alpha,\beta)$ 上严格单调、$\varphi(\alpha) = a$、$\lim_{t \to \beta^-} \varphi(t) = b$，则有
$$
\int_a^b f(x)\mathrm{d}x = \int_\alpha^\beta f(\varphi(t))\varphi'(t)\mathrm{d}t
$$

[来源：§7-2 p21，换元积分法]

---

### 三、瑕积分敛散性判别

#### 1. Cauchy准则

- **Cauchy准则（$b$ 为瑕点）**：$\int_a^b f(x)\mathrm{d}x$ 收敛 $\Leftrightarrow$
$$
\forall \varepsilon > 0, \exists \delta > 0, \forall x', x'' \in (b-\delta, b): \left| \int_{x'}^{x''} f(x)\mathrm{d}x \right| < \varepsilon
$$

[来源：§7-2 p22，Cauchy准则]

#### 2. 非负函数瑕积分判别法

- **收敛原理**：设 $f(x) \geq 0$，则 $\int_a^b f(x)\mathrm{d}x$ 收敛 $\Leftrightarrow$ $F(A) = \int_a^A f(x)\mathrm{d}x$ 在 $[a, b)$ 有上界。[来源：§7-2 p22，收敛原理]

- **比较判别法（不等式形式）**：设 $g(x) \geq f(x) \geq 0$，则
  - (1) $\int_a^b g(x)\mathrm{d}x$ 收敛 $\Rightarrow$ $\int_a^b f(x)\mathrm{d}x$ 收敛
  - (2) $\int_a^b f(x)\mathrm{d}x$ 发散 $\Rightarrow$ $\int_a^b g(x)\mathrm{d}x$ 发散
  
  [来源：§7-2 p23，比较判别法]

- **比较判别法（极限形式）**：设 $f(x) \geq 0$，$g(x) > 0$，且 $\lim_{x \to b^-} \frac{f(x)}{g(x)} = l$，则
  - (1) 当 $0 < l < +\infty$ 时，$\int_a^b f(x)\mathrm{d}x$ 与 $\int_a^b g(x)\mathrm{d}x$ 同敛散
  - (2) 当 $l = 0$ 时，$\int_a^b g(x)\mathrm{d}x$ 收敛 $\Rightarrow$ $\int_a^b f(x)\mathrm{d}x$ 收敛
  - (3) 当 $l = +\infty$ 时，$\int_a^b g(x)\mathrm{d}x$ 发散 $\Rightarrow$ $\int_a^b f(x)\mathrm{d}x$ 发散
  
  [来源：§7-2 p23，极限形式]

- **p-判别法**：设 $f(x) \geq 0$，且 $\lim_{x \to b^-} (b-x)^p f(x) = l$，则
  - (1) 当 $0 \leq l < +\infty$，且 $p < 1$ 时，$\int_a^b f(x)\mathrm{d}x$ 收敛
  - (2) 当 $0 < l \leq +\infty$，且 $p \geq 1$ 时，$\int_a^b f(x)\mathrm{d}x$ 发散
  - (3) 其余情形（如 $p \geq 1$ 且 $l=0$，或 $p<1$ 且 $l=+\infty$）该判别法不能直接判定，需要另用比较法或更精细估计
  
  [来源：§7-2 p24，p-判别法]

#### 3. 绝对收敛与条件收敛

- **绝对收敛定义**：若 $\int_a^b |f(x)|\mathrm{d}x$ 收敛，则称 $\int_a^b f(x)\mathrm{d}x$ **绝对收敛**。[来源：§7-2 p25，定义]

- **条件收敛定义**：若 $\int_a^b f(x)\mathrm{d}x$ 收敛，但 $\int_a^b |f(x)|\mathrm{d}x$ 发散，则称 $\int_a^b f(x)\mathrm{d}x$ **条件收敛**。[来源：§7-2 p25，定义]

- **定理**：若 $\int_a^b f(x)\mathrm{d}x$ 绝对收敛，则 $\int_a^b f(x)\mathrm{d}x$ 收敛。[来源：§7-2 p25，定理]

#### 4. A-D判别法

- **Abel判别法**：若 $\int_a^b f(x)\mathrm{d}x$ 收敛，$g$ 在 $[a, b)$ 单调有界，则 $\int_a^b f(x)g(x)\mathrm{d}x$ 收敛。[来源：§7-2 p26，Abel]

- **Dirichlet判别法**：若 $F(A) = \int_a^A f(x)\mathrm{d}x$ 在 $[a, b)$ 有界，$g$ 在 $[a, b)$ 单调且 $\lim_{x \to b^-} g(x) = 0$，则 $\int_a^b f(x)g(x)\mathrm{d}x$ 收敛。[来源：§7-2 p26，Dirichlet]

#### 5. 典型函数/积分

- **Beta函数**：$B(p, q) \stackrel{\text{def}}{=} \int_0^1 x^{p-1}(1-x)^{q-1}\mathrm{d}x$，当 $p > 0$ 且 $q > 0$ 时收敛。[来源：§7-2 例5]

- **Gamma函数**：$\Gamma(\alpha) \stackrel{\text{def}}{=} \int_0^{+\infty} x^{\alpha-1}e^{-x}\mathrm{d}x$，当 $\alpha > 0$ 时收敛。[来源：§7-2 例6]

- **Euler积分**：$I = \int_0^{\frac{\pi}{2}} \ln\sin x\,\mathrm{d}x$ 收敛，其值为 $-\frac{\pi}{2}\ln 2$。[来源：§7-2 例7]

---

## 渐进性态与重要结论

### 一、收敛与极限的关系

- **问题**：若 $\int_a^{+\infty} f(x)\mathrm{d}x$ 收敛，能否导出 $\lim_{x \to +\infty} f(x) = 0$？

- **答案**：否。若 $f$ 非负连续也是"否"，$f$ 可以无界。[来源：§7-2 p27]

- **定理**：设 $\int_a^{+\infty} f(x)\mathrm{d}x$ 收敛，且 $f$ 满足下列四条件之一，则 $\lim_{x \to +\infty} f(x) = 0$：
  - (1) $f$ 在 $[a, +\infty)$ 上单调
  - (2) $\lim_{x \to +\infty} f(x)$ 存在
  - (3) $f \in U.C[a, +\infty)$（一致连续）
  - (4) $f'$ 在 $[a, +\infty)$ 上有界
  
  [来源：§7-2 p27，定理]

### 二、收敛、绝对收敛与平方收敛的关系

- **无穷积分**：
  - 绝对收敛 $\Rightarrow$ 收敛，反之不然
  - （除“绝对收敛 $\Rightarrow$ 收敛”外）收敛与平方收敛无关；绝对收敛与平方收敛也无关
  
  [来源：§7-2 p28，结论]

- **瑕积分**：
  - 平方收敛 $\Rightarrow$ 绝对收敛 $\Rightarrow$ 收敛，反之不然
  
  [来源：§7-2 p28，结论]

---

## 判别法对比总结

| 判别法 | 无穷积分条件 | 瑕积分条件 |
|--------|------------|----------|
| **p-判别法收敛** | $\lim_{x \to +\infty} x^p f(x) = l$，$0 \leq l < +\infty$，$p > 1$ | $\lim_{x \to b^-} (b-x)^p f(x) = l$，$0 \leq l < +\infty$，$p < 1$ |
| **p-判别法发散** | $\lim_{x \to +\infty} x^p f(x) = l$，$0 < l \leq +\infty$，$p \leq 1$ | $\lim_{x \to b^-} (b-x)^p f(x) = l$，$0 < l \leq +\infty$，$p \geq 1$ |
| **p-积分收敛** | $\int_1^{+\infty} \frac{1}{x^p}\mathrm{d}x$：$p > 1$ | $\int_a^b \frac{1}{(b-x)^p}\mathrm{d}x$：$p < 1$ |

【整理自 PPT】

---

## 易错点与概念辨析

1. **收敛 vs 主值收敛**：收敛 $\Rightarrow$ 主值收敛，但主值收敛 $\not\Rightarrow$ 收敛（如 $\int_{-\infty}^{+\infty} x\mathrm{d}x$ 主值收敛为0，但发散）。

2. **$(-\infty, +\infty)$ 上积分的收敛**：必须两部分**同时独立收敛**，不能用主值收敛代替。

3. **p-判别法临界值**：无穷积分临界值为 $p = 1$（$p > 1$ 收敛），瑕积分临界值也为 $p = 1$（$p < 1$ 收敛），方向相反。

4. **绝对收敛与条件收敛**：绝对收敛一定收敛，条件收敛则不绝对收敛。

5. **Dirichlet积分** $\int_0^{+\infty} \frac{\sin x}{x}\mathrm{d}x$ 是条件收敛的典型例子。

6. **瑕积分中的平方收敛**：与无穷积分不同，瑕积分中平方收敛 $\Rightarrow$ 绝对收敛。
