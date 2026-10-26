---
title: "第6章 定积分"
description: "数学分析 I课程笔记：第6章 定积分。"
---

<div class="note-meta"><a href="/courses/analysis-1/">数学分析 I目录</a><a href="/downloads/analysis-1/chapter-06.md" download>下载 Markdown</a></div>

## 关键考点总览

1. **定积分定义**：Riemann和的极限定义，可积的ε-δ表述
2. **可积的充要条件**：三个充要条件（上下积分相等、振幅和趋于零、大振幅区间长度和任意小）
3. **可积的充分条件**：连续函数、有限间断点的有界函数、单调函数
4. **定积分性质**：线性性、可加性、保号性、估值性、绝对值不等式
5. **积分中值定理**：第一中值定理及其推论
6. **微积分基本定理**：变上限积分求导、Newton-Leibniz公式
7. **换元与分部积分**：定积分的换元公式、分部积分公式、Wallis公式
8. **Lebesgue定理**：设 $f$ 在 $[a,b]$ **有界**，则 $f \in R[a,b] \Leftrightarrow D(f)$ 为零测集
9. **积分第二中值定理**：Bonnet型、Weierstrass型
10. **Riemann引理（Riemann–Lebesgue）**：若 $f\in R[a,b]$，则 $\lim_{p\to+\infty}\int_a^b f(x)\sin(px)\,dx=\lim_{p\to+\infty}\int_a^b f(x)\cos(px)\,dx=0$

---

## §6-1 定积分的概念

### 一、曲边梯形面积与变速直线运动位移

#### 1. 分割-近似-取极限的思想

**步骤**：
1. **分割**：用分点 $a = x_0 < x_1 < \cdots < x_n = b$ 将 $[a, b]$ 分为 $n$ 个小区间 $[x_{i-1}, x_i]$，长度 $\Delta x_i = x_i - x_{i-1}$ [来源：§6-1 p3]
2. **作近似和**：取介点 $\xi_i \in [x_{i-1}, x_i]$，面积 $A \approx \sum_{i=1}^{n} f(\xi_i)\Delta x_i$ [来源：§6-1 p3]
3. **取极限**：令 $\|T\| = \max_{1\le i\le n}\Delta x_i$，则 $A = \lim_{\|T\|\to 0}\sum_{i=1}^{n} f(\xi_i)\Delta x_i$ [来源：§6-1 p4]

---

### 二、定积分定义

#### 1. 核心定义

**定义（定积分）** 设 $f: [a,b] \to \mathbf{R}$。任取 $[a,b]$ 分割 $T: a = x_0 < x_1 < \cdots < x_n = b$ 及介点集 $\xi(T) = \{\xi_1, \xi_2, \ldots, \xi_n\}$（$\xi_i \in [x_{i-1}, x_i]$），作Riemann和
$$
\sigma(T, \xi) = \sum_{i=1}^{n} f(\xi_i)\Delta x_i
$$

若 $\lim_{\|T\|\to 0}\sigma(T, \xi) = I$ 存在，则称 $f$ 在 $[a,b]$ **可积**，$I$ 称为 $f$ 在 $[a,b]$ 上的**定积分**，记为
$$
I = \int_a^b f(x)\,dx
$$

[来源：§6-1 p6，定义]

#### 2. 记号约定

| 记号 | 含义 |
|-----|------|
| $\int$ | 积分号 |
| $a, b$ | 积分下限、上限 |
| $[a, b]$ | 积分区间 |
| $f(x)$ | 被积函数 |
| $x$ | 积分变量 |
| $\|T\|$ | 分割的模，$\|T\| = \max_{1\le i\le n}\{\Delta x_i\}$ |
| $\xi(T)$ | 分割 $T$ 下的介点集 |
| $R[a,b]$ | $[a,b]$ 上可积函数全体 |
| $\sigma(T,\xi)$ | Riemann和（积分和） |

[来源：§6-1 p6-7]

#### 3. 重要性质

- **积分变量无关性**：$\int_a^b f(x)\,dx = \int_a^b f(t)\,dt = \int_a^b f(u)\,du$ [来源：§6-1 p8]
- **定积分值仅与积分区间和被积函数有关**，与分割和介点集的选取无关 [来源：§6-1 p8]

#### 4. 不可积判定

若存在两列带标签分割 $(T^{(n)},\xi^{(n)})$ 与 $(\tilde T^{(n)},\tilde\xi^{(n)})$，使 $\|T^{(n)}\|,\|\tilde T^{(n)}\|\to0$，但对应 Riemann 和的极限不同（或其中一列极限不存在），则 $f$ 在 $[a,b]$ 不可积。[来源：§6-1 p8]

---

### 三、重要例子

**例1（Dirichlet函数不可积）** 
$$
D(x) = \begin{cases} 1, & x \in \mathbb{Q} \\ 0, & x \in \mathbb{Q}^c \end{cases}
$$

在 $[0,1]$ 不可积。

**证明思路**：取有理介点时积分和为1，取无理介点时积分和为0，极限不唯一。[来源：§6-1 p8，例1]

**例2（单点跳跃函数可积）** 设 $c \in [a,b]$，
$$
J(x) = \begin{cases} 0, & x \in [a,b]\setminus\{c\} \\ 1, & x = c \end{cases}
$$

则 $\int_a^b J(x)\,dx = 0$ [来源：§6-1 p9，例4]

**例3（利用定积分求和式极限）** 已知 $\int_0^1 x^p\,dx = \frac{1}{p+1}$（$p > 0$），则
$$
\lim_{n\to\infty}\frac{1^p + 2^p + \cdots + n^p}{n^{p+1}} = \frac{1}{p+1}
$$

[来源：§6-1 p9，例3]

---

## §6-2 可积性理论

### 一、可积的必要条件

**定理（必要条件）** 若 $f \in R[a,b]$，则 $f$ 在 $[a,b]$ 有界。[来源：§6-2 p11]

- **有界是可积的必要不充分条件**（反例：Dirichlet函数有界但不可积）
- **无界函数不可积** [来源：§6-2 p11]

---

### 二、Darboux大和与小和

#### 1. 定义

**定义** 设 $f$ 有界，$T: a = x_0 < x_1 < \cdots < x_n = b$ 是 $[a,b]$ 的分割。记
$$
M_i = \sup f([x_{i-1}, x_i]), \quad m_i = \inf f([x_{i-1}, x_i])
$$


- **Darboux大和**：$\overline{S}(T) \stackrel{\text{def}}{=} \sum_{i=1}^{n} M_i \Delta x_i$
- **Darboux小和**：$\underline{S}(T) \stackrel{\text{def}}{=} \sum_{i=1}^{n} m_i \Delta x_i$

[来源：§6-2 p11，定义]

#### 2. 基本关系

$$
\underline{S}(T) \le \sigma(T, \xi) \le \overline{S}(T), \quad \overline{S}(T) - \underline{S}(T) = \sum_{i=1}^{n}\omega_i \Delta x_i
$$

其中 $\omega_i = M_i - m_i$ 为 $f$ 在 $[x_{i-1}, x_i]$ 上的**振幅**。[来源：§6-2 p12，注]

#### 3. 引理

**引理1（加细分割性质）** 设 $T'$ 是分割 $T$ 添加 $l$ 个分点的加细分割，则
$$
\overline{S}(T) - l\omega\|T\| \le \overline{S}(T') \le \overline{S}(T)
$$

$$
\underline{S}(T) \le \underline{S}(T') \le \underline{S}(T) + l\omega\|T\|
$$

其中 $\omega = M - m$ 为 $f$ 在 $[a,b]$ 上的振幅。[来源：§6-2 p12，引理1]

**结论**：加细分割具有"**大和减少，小和增加**"性 [来源：§6-2 p12]

**引理2** 设 $T_1$ 和 $T_2$ 是 $[a,b]$ 的任意两分割，则 $\underline{S}(T_1) \le \overline{S}(T_2)$ [来源：§6-2 p12，引理2]

---

### 三、上积分与下积分

**定义**
- **下积分**：$\underline{\int}_a^b f(x)\,dx \stackrel{\text{def}}{=} \sup_T \underline{S}(T)$
- **上积分**：$\overline{\int}_a^b f(x)\,dx \stackrel{\text{def}}{=} \inf_T \overline{S}(T)$

**结论**：$\underline{S}(T) \le \underline{\int}_a^b f(x)\,dx \le \overline{\int}_a^b f(x)\,dx \le \overline{S}(T)$ [来源：§6-2 p13]

**Darboux定理（上、下积分的逼近）** 设 $f$ 在 $[a,b]$ 有界，定义
$$
\underline{S}(\delta):=\sup_{\|T\|<\delta}\underline{S}(T),\qquad 
\overline{S}(\delta):=\inf_{\|T\|<\delta}\overline{S}(T).
$$

则
$$
\lim_{\delta\to0^+}\underline{S}(\delta)=\underline{\int}_a^b f(x)\,dx,\qquad
\lim_{\delta\to0^+}\overline{S}(\delta)=\overline{\int}_a^b f(x)\,dx.
$$

[来源：§6-2 p13，Darboux定理]

---

### 四、可积的充要条件

#### 第I充要条件

设 $f$ 在 $[a,b]$ 有界，则 $f \in R[a,b]$ 当且仅当
$$
\underline{\int}_a^b f(x)\,dx = \overline{\int}_a^b f(x)\,dx
$$

[来源：§6-2 p14，第I充要条件]

#### 第II充要条件

设 $f$ 在 $[a,b]$ 有界，则 $f \in R[a,b]$ 当且仅当
$$
\forall \varepsilon > 0, \exists \text{分割} T: \overline{S}(T) - \underline{S}(T) = \sum_{i=1}^{n}\omega_i \Delta x_i < \varepsilon
$$

[来源：§6-2 p14，第II充要条件]

**推论** 设 $f$ 在 $[a,b]$ 有界，则 $f \in R[a,b]$ 当且仅当
$$
\lim_{\|T\|\to 0}(\overline{S}(T) - \underline{S}(T)) = \lim_{\|T\|\to 0}\sum_{i=1}^{n}\omega_i \Delta x_i = 0
$$

[来源：§6-2 p14，推论]

#### 第III充要条件

设 $f$ 在 $[a,b]$ 有界，则 $f \in R[a,b]$ 当且仅当
$$
\forall \varepsilon > 0, \forall \sigma > 0, \exists \text{分割} T: \sum_{i \in \Lambda}\Delta x_i < \varepsilon
$$

其中 $\Lambda = \{i \mid \omega_i \ge \sigma\}$。[来源：§6-2 p15，第III充要条件]

**几何意义**：要使 $\sum_{i=1}^{n}\omega_i \Delta x_i < \varepsilon$，或者 $\omega_i$ 很小；或者虽然 $\omega_i$ 不小，但其对应的小区间长度和很小。[来源：§6-2 p15]

---

### 五、可积的充分条件

#### 1. 振幅定义

**引理** 设 $f$ 在 $[a,b]$ 有界，则其振幅
$$
\omega = \sup_{x,y \in [a,b]}|f(x) - f(y)|
$$

[来源：§6-2 p16，引理]

#### 2. 三个充分条件

**定理1** 若 $f \in C[a,b]$，则 $f \in R[a,b]$ [来源：§6-2 p16，定理]

**定理2** 若 $f$ 在 $[a,b]$ 有界，且仅有**有限个**间断点，则 $f \in R[a,b]$ [来源：§6-2 p16，定理]

**定理3** 若 $f$ 在 $[a,b]$ **单调**，则 $f \in R[a,b]$ [来源：§6-2 p16，定理]

---

### 六、可积性证明举例

**例1** 函数 $f(x) = \begin{cases} \frac{1}{n}, & \frac{1}{n+1} < x \le \frac{1}{n}, (n = 1, 2, \ldots) \\ 0, & x = 0 \end{cases}$ 在 $[0,1]$ 可积（单调有界函数；亦可用“间断点集可列 $\Rightarrow$ 零测集”说明）[来源：§6-2 p16，例1]

**例2（Riemann函数可积）** 
$$
R(x) = \begin{cases} 1, & x = 0, 1 \\ \frac{1}{q}, & x = \frac{p}{q} \text{（既约分数）} \\ 0, & x \in \mathbb{Q}^c \end{cases}
$$

- $R(x)$ 在 $[0,1]$ 上可积，且 $\int_0^1 R(x)\,dx = 0$
- $R(x)$ 在无理点连续，在有理点间断
- **重要**：$R(x)$ 在 $[0,1]$ 上不存在原函数

[来源：§6-2 p17，例2]

**例3（可积性关系）** 讨论 $f$、$f^2$、$|f|$ 三者可积性的关系：
- **结论(A)**：$f \in R[a,b] \Rightarrow f^2, |f| \in R[a,b]$，反之不然
- **结论(B)**：$|f| \in R[a,b] \Rightarrow f^2 \in R[a,b]$（因 $f^2=(|f|)^2$ 且 $t\mapsto t^2$ 连续），但 $|f| \in R[a,b] \not\Rightarrow f \in R[a,b]$（如 $f(x)=1$ 当 $x\in\mathbb{Q}$，$f(x)=-1$ 当 $x\notin\mathbb{Q}$）

[来源：§6-2 p18，例3]

**例4** 若 $f \in D[a,b]$，且 $|f'| \in R[a,b]$，则 $f' \in R[a,b]$。

**提示**：证明振幅满足 $\omega_k(f') \le 2\omega_k(|f'|)$，考察 $f'$ 变号、不变号两种情形，变号时利用导函数的介值性。[来源：§6-2 p19，例4]

---

## §6-3 定积分的性质

### 一、运算性质

#### 1. 积分上下限规定

$$
\int_a^b f(x)\,dx = -\int_b^a f(x)\,dx, \quad \int_a^a f(x)\,dx = 0
$$

[来源：§6-3 p21，规定]

#### 2. 线性性

**定理（线性性）** 若 $f, g \in R[a,b]$，则 $\alpha f \pm \beta g \in R[a,b]$，且
$$
\int_a^b[\alpha f(x) \pm \beta g(x)]\,dx = \alpha\int_a^b f(x)\,dx \pm \beta\int_a^b g(x)\,dx
$$

[来源：§6-3 p21，定理]

#### 3. 乘积性

**定理（乘积性）** 若 $f, g \in R[a,b]$，则 $f \cdot g \in R[a,b]$ [来源：§6-3 p21，定理]

#### 4. 有限点改值不变性

**推论** 设 $f \in R[a,b]$，除有限点外 $g(x) = f(x)$，则 $g \in R[a,b]$，且
$$
\int_a^b g(x)\,dx = \int_a^b f(x)\,dx
$$

[来源：§6-3 p21，推论]

#### 5. 区间可加性

**定理（可加性）** 设 $f \in R[a,b]$，则 $f$ 在 $[a,c]$ 和 $[c,b]$ 可积，且
$$
\int_a^b f(x)\,dx = \int_a^c f(x)\,dx + \int_c^b f(x)\,dx
$$

[来源：§6-3 p22，定理]

**命题** 若 $f \in R[a,b]$，则对 $[\alpha, \beta] \subset [a,b]$ 有 $f \in R[\alpha, \beta]$ [来源：§6-3 p22，命题]

---

### 二、不等式性质

#### 1. 保号性

**定理（保号性）** 若 $f \in R[a,b]$，且 $f(x) \ge 0$，则 $\int_a^b f(x)\,dx \ge 0$ [来源：§6-3 p22，定理]

#### 2. 单调性

**推论（单调性）** 若 $f, g \in R[a,b]$，且 $f(x) \le g(x)$，则
$$
\int_a^b f(x)\,dx \le \int_a^b g(x)\,dx
$$

[来源：§6-3 p22，推论]

#### 3. 估值性

**推论（估值性）** 若 $f \in R[a,b]$，且 $m \le f(x) \le M$，则
$$
m(b-a) \le \int_a^b f(x)\,dx \le M(b-a)
$$

[来源：§6-3 p23，推论]

#### 4. 绝对值不等式

**推论（绝对值）** 若 $f \in R[a,b]$，则 $|f| \in R[a,b]$，且
$$
\left|\int_a^b f(x)\,dx\right| \le \int_a^b |f(x)|\,dx
$$

[来源：§6-3 p23，推论]

#### 5. 绝对可积定义

**定义** 若 $|f| \in R[a,b]$，则称 $f$ 在 $[a,b]$ 上**绝对可积** [来源：§6-3 p23，定义]

**问题**：由“$|f|$ 可积/绝对可积”能否导出 $f$ 可积？
- **对 Riemann 定积分：不能**（例如 $f(x)=1$ 当 $x\in\mathbb{Q}$，$f(x)=-1$ 当 $x\notin\mathbb{Q}$，则 $|f|\equiv1$ 可积，但 $f$ 处处不连续从而不可积）
- **对广义积分：能**（绝对收敛 $\Rightarrow$ 收敛，但收敛 $\not\Rightarrow$ 绝对收敛）

---

### 三、重要应用

**例1** 设 $f \in C[a,b]$，$f(x) \ge 0$，且 $\int_a^b f(x)\,dx = 0$，则 $f(x) \equiv 0$ [来源：§6-3 p24，例1]

**推论**：若 $f(x) \ge 0$，且 $\int_a^b f(x)\,dx = 0$，则 $f$ 在连续点处值为0 [来源：§6-3 p24]

**推论**：设 $f \in R[a,b]$，$f(x) > 0$，则 $\int_a^b f(x)\,dx > 0$ [来源：§6-3 p24]

**例2（Cauchy-Schwarz不等式）** 设 $f, g \in R[a,b]$，则
$$
\left(\int_a^b f(x)g(x)\,dx\right)^2 \le \int_a^b f^2(x)\,dx \cdot \int_a^b g^2(x)\,dx
$$

[来源：§6-3 p24，例2]

---

### 四、积分第一中值定理

**定理（积分第一中值定理）** 设 $f \in C[a,b]$，$g \in R[a,b]$ 且不变号，则 $\exists \xi \in [a,b]$ 使
$$
\int_a^b f(x)g(x)\,dx = f(\xi)\int_a^b g(x)\,dx
$$

[来源：§6-3 p25，定理]

**推论** 设 $f \in C[a,b]$，则 $\exists \xi \in [a,b]$ 使
$$
\int_a^b f(x)\,dx = f(\xi)(b-a)
$$

[来源：§6-3 p25，推论]

**几何意义**："化曲为方" [来源：§6-3 p25]

**定义（平均值）** $f$ 在 $[a,b]$ 的**平均值**为 $\frac{1}{b-a}\int_a^b f(x)\,dx$ [来源：§6-3 p25]

---

## §6-4 微积分基本定理

### 一、变限积分函数

#### 1. 定义

**定义** 若 $f \in R[a,b]$，称
$$
F(x) = \int_a^x f(t)\,dt, \quad x \in [a,b]
$$

为 $f$ 在 $[a,b]$ 上的**变上限积分** [来源：§6-4 p28，定义]

#### 2. 连续性

**定理（连续性）** 若 $f \in R[a,b]$，则 $F(x) \in C[a,b]$ [来源：§6-4 p28，定理]

#### 3. 可导性

**定理（可导性）** 若 $f$ 在 $x_0$ 连续，则 $F$ 在 $x_0$ 可导，且
$$
F'(x_0) = f(x_0)
$$

[来源：§6-4 p28，定理]

**推论** 若 $f \in C[a,b]$，则 $F(x) \in D[a,b]$，且
$$
F'(x) = \frac{d}{dx}\int_a^x f(t)\,dt = f(x)
$$

[来源：§6-4 p29，推论]

#### 4. 变限积分求导公式【整理自 PPT】

**一般形式**：设 $f$ 连续，$\alpha(x)$、$\beta(x)$ 可导，则
$$
\frac{d}{dx}\int_{\alpha(x)}^{\beta(x)} f(t)\,dt = f(\beta(x))\beta'(x) - f(\alpha(x))\alpha'(x)
$$


**口诀**：变上限积分求导 = 被积函数上限处值 × 上限求导 [来源：§6-4 p29]

#### 5. 原函数存在定理

**定理（原函数存在定理）** 若 $f \in C[a,b]$，则 $f$ 有原函数 $F(x)$，且
$$
F(x) = \int_a^x f(t)\,dt + C
$$

[来源：§6-4 p30，原函数存在定理]

---

### 二、Newton-Leibniz公式

**Newton-Leibniz公式** 设 $f \in C[a,b]$，且 $F'(x) = f(x)$，则
$$
\int_a^b f(x)\,dx = F(x)\Big|_a^b \stackrel{\text{def}}{=} F(b) - F(a)
$$

[来源：§6-4 p31，Newton-Leibniz公式]

**推广形式** 设 $f \in R[a,b]$，$F \in C[a,b]$ 且 $F'(x) = f(x)$，$x \in (a,b)$，则
$$
\int_a^b f(x)\,dx = F(b) - F(a)
$$

[来源：§6-4 p31，定理]

**问题**：函数可积与存在原函数的关系如何？
- 可积不一定有原函数（如Riemann函数）
- 有原函数不一定可积
- 连续函数既可积又有原函数

---

## §6-5 定积分的计算

### 一、换元积分法

**定理** 设 $f \in C[a,b]$，$x = \varphi(t) \in C^{(1)}[\alpha, \beta]$（或 $[\beta, \alpha]$），且 $\varphi(\alpha) = a$，$\varphi(\beta) = b$，则
$$
\int_a^b f(x)\,dx = \int_\alpha^\beta f(\varphi(t))\varphi'(t)\,dt
$$

[来源：§6-5 p2，定理]

**注意**：$x$ 的积分上、下限与 $t$ 的积分上、下限由 $x = \varphi(t)$ 对应 [来源：§6-5 p2]

---

### 二、对称性与周期性公式

#### 1. 奇偶函数积分

**命题** 设 $f \in C[-a, a]$，则
$$
\int_{-a}^a f(x)\,dx = \begin{cases} 0, & f(x)\text{为奇函数} \\ 2\int_0^a f(x)\,dx, & f(x)\text{为偶函数} \end{cases}
$$

[来源：§6-5 p3，命题]

#### 2. 周期函数积分

**命题** 设 $f$ 是周期为 $T$ 的连续函数，则 $\forall a \in \mathbf{R}$，有
$$
\int_a^{a+T} f(x)\,dx = \int_0^T f(x)\,dx
$$

[来源：§6-5 p3，命题]

#### 3. 三角函数积分公式

**命题** 设 $f$ 为连续函数，证明
$$
\int_0^{\frac{\pi}{2}} f(\sin x, \cos x)\,dx = \int_0^{\frac{\pi}{2}} f(\cos x, \sin x)\,dx
$$

$$
\int_0^\pi f(\sin x)\,dx = 2\int_0^{\frac{\pi}{2}} f(\sin x)\,dx
$$

[来源：§6-5 p4，命题]

---

### 三、分部积分法

**定理** 若 $u'(x), v'(x) \in C[a,b]$，则
$$
\int_a^b u(x)v'(x)\,dx = u(x)v(x)\Big|_a^b - \int_a^b u'(x)v(x)\,dx
$$

[来源：§6-5 p5，定理]

---

### 四、Wallis公式

**命题（Wallis公式）** 
$$
I_n = \int_0^{\frac{\pi}{2}} \sin^n x\,dx = \int_0^{\frac{\pi}{2}} \cos^n x\,dx = \begin{cases} \frac{(n-1)!!}{n!!} \cdot \frac{\pi}{2}, & n\text{为偶数} \\ \frac{(n-1)!!}{n!!}, & n\text{为奇数} \end{cases} \quad (n \in \mathbb{N})
$$

[来源：§6-5 p5，命题]

**推论（Wallis极限公式）** 
$$
\frac{\pi}{2} = \lim_{n\to\infty}\frac{1}{2n+1}\left(\frac{(2n)!!}{(2n-1)!!}\right)^2
$$

[来源：§6-5 p6，推论]

---

### 五、积分余项Taylor公式

**定理** 设 $f \in C^{(n+1)}U(a)$，则对 $\forall x \in U(a)$，有
$$
f(x) = \sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}(x-a)^k + \frac{1}{n!}\int_a^x f^{(n+1)}(t)(x-t)^n\,dt
$$

$$
\stackrel{\text{def}}{=} T_n + R_n
$$

[来源：§6-5 p7，定理]

**Lagrange余项**：
$$
R_n = \frac{f^{(n+1)}(\xi)}{n!}\int_a^x (x-t)^n\,dt = \frac{f^{(n+1)}(\xi)}{(n+1)!}(x-a)^{n+1}
$$

[来源：§6-5 p8]

**Cauchy余项**：
$$
R_n = \frac{f^{(n+1)}(\xi)}{n!}(x-\xi)^n(x-a) = \frac{f^{(n+1)}(a+\theta h)}{n!}(1-\theta)^n h^{n+1}
$$

其中 $\xi = a + \theta(x-a) = a + \theta h$ [来源：§6-5 p8]

---

## §6-6 Lebesgue定理

### 一、零测集

**定义** 设 $A \subset \mathbf{R}$。若 $\forall \varepsilon > 0$，$\exists$ 至多可列个开区间 $I_k$（$k \in \mathbb{N}$），使得
$$
A \subset \bigcup_{k=1}^{\infty} I_k, \quad \text{且} \quad \sum_{k=1}^{\infty}|I_k| < \varepsilon
$$

则称 $A$ 为**零测集**。其中 $|I_k|$ 表示 $I_k$ 的长度。[来源：§6-6 p10，定义1]

**性质**：
- 空集、有限数集为零测集
- 可列数集为零测集（特别地，有理数集 $\mathbb{Q}$ 为零测集）

**命题1** 有限或可列个零测集的并集是零测集。[来源：§6-6 p10，命题1]

---

### 二、振幅

**定义** 函数 $f$ 在 $U(x_0, r)$ 的振幅
$$
\omega_f(x_0, r) \stackrel{\text{def}}{=} \sup_{s,t \in U(x_0, r)}|f(s) - f(t)|
$$


函数 $f$ 在 $x_0$ 处的振幅
$$
\omega_f(x_0) \stackrel{\text{def}}{=} \lim_{r\to 0^+}\omega_f(x_0, r)
$$

[来源：§6-6 p11]

**命题2** 函数 $f$ 在 $x_0$ 处连续的充要条件是 $\omega_f(x_0) = 0$。[来源：§6-6 p11，命题2]

**记号**：
- $D(f)$：$f$ 的不连续点集合
- $D_\delta(f) = \{x \in [a,b] \mid \omega_f(x) \ge \delta\}$

**命题3** $D(f) = \bigcup_{n=1}^{\infty} D_{\frac{1}{n}}(f)$ [来源：§6-6 p11，命题3]

---

### 三、Lebesgue定理

**引理** 设 $f: [a,b] \to \mathbf{R}$，又 $D(f) \subset \bigcup_{k=1}^{\infty}(\alpha_k, \beta_k)$，令
$$
K = [a,b] \setminus \bigcup_{k=1}^{\infty}(\alpha_k, \beta_k)
$$

则 $\forall \varepsilon > 0$，$\exists \delta > 0$，使得 $\forall x \in K$，$y \in [a,b]$，且 $|x - y| < \delta$，有
$$
|f(x) - f(y)| < \varepsilon
$$

[来源：§6-6 p12，引理]

**定理（Lebesgue定理）** 设 $f$ 在 $[a,b]$ 有界，则
$$
f \in R[a,b] \Leftrightarrow D(f)\text{为零测集}
$$

[来源：§6-6 p12，定理]

**推论** 若 $f \in R[a,b]$，则 $|f|, f^2 \in R[a,b]$。[来源：§6-6 p12]

---

## §6-7 积分第二中值定理和Riemann引理

### 一、Abel变换

**定理1（Abel变换）** 设 $a_k, b_k \in \mathbf{R}$（$k = 1, 2, \ldots, n$），记 $B_k = b_1 + b_2 + \cdots + b_k$，则
$$
\sum_{k=1}^{n} a_k b_k = a_n B_n + \sum_{k=1}^{n-1} B_k(a_k - a_{k+1})
$$

[来源：§6-7 p2，定理1]

**几何意义**：带框图形面积 = 竖条面积或横条面积 [来源：§6-7 p2]

---

### 二、积分第二中值定理

**定理2** 设 $f \in R[a,b]$，则有：

**1) Bonnet型（单减非负）** 若 $g$ 在 $[a,b]$ 单减且非负，则 $\exists \xi \in [a,b]$ 使
$$
\int_a^b f(x)g(x)\,dx = g(a)\int_a^\xi f(x)\,dx
$$

[来源：§6-7 p3]

**2) Bonnet型（单增非负）** 若 $g$ 在 $[a,b]$ 单增且非负，则 $\exists \xi \in [a,b]$ 使
$$
\int_a^b f(x)g(x)\,dx = g(b)\int_\xi^b f(x)\,dx
$$

[来源：§6-7 p3]

**3) Weierstrass型** 若 $g$ 在 $[a,b]$ 单调，则 $\exists \xi \in [a,b]$ 使
$$
\int_a^b f(x)g(x)\,dx = g(a)\int_a^\xi f(x)\,dx + g(b)\int_\xi^b f(x)\,dx
$$

[来源：§6-7 p3]

---

### 三、Riemann引理

**定理3（Riemann引理）** 设 $f \in R[a,b]$，则有
$$
\lim_{p\to+\infty}\int_a^b f(x)\sin px\,dx = \lim_{p\to+\infty}\int_a^b f(x)\cos px\,dx = 0
$$

[来源：§6-7 p8，定理3]

**广义形式** 设 $f \in R[a,b]$，$g$ 可积且以 $T$ 为周期，则
$$
\lim_{p\to+\infty}\int_a^b f(x)g(px)\,dx = \frac{1}{T}\int_0^T g(x)\,dx \cdot \int_a^b f(x)\,dx
$$

[来源：§6-7 p10]

---

## §6-8 定积分的几何应用

### 一、元素法

设待求量 $F$ 在 $x$ 的区间 $[a,b]$ 定义，且具有可加性，即 $F = \sum_{i=1}^{n}\Delta F_i$，而 $\Delta F_i \approx f(\xi_i)\Delta x_i$，则
$$
F = \int_a^b f(x)\,dx
$$

[来源：§6-8 p12]

**步骤**：
1. 在 $[a,b]$ 上取长度为 $\Delta x = dx$ 的子区间 $[x, x + dx]$
2. 写出 $[x, x + dx]$ 上部分量 $\Delta F \approx dF = f(x)dx$
3. 结论 $F = \int_a^b f(x)\,dx$

---

### 二、平面图形面积

#### 1. 参数方程

若 $y = f(x) \ge 0$ 的参数方程为 $x = x(t)$，$y = y(t)$，且 $x(\alpha) = a$，$x(\beta) = b$，则曲线与 $x$ 轴所围面积
$$
A = \int_a^b f(x)\,dx \xlongequal{x = x(t)} \int_\alpha^\beta y(t)x'(t)\,dt
$$

[来源：§6-8 p13]

#### 2. 极坐标方程

曲线 $r = r(\theta)$（$\theta \in [\alpha, \beta]$）与射线 $\theta = \alpha$ 及 $\theta = \beta$ 所围面积
$$
A = \frac{1}{2}\int_\alpha^\beta r^2(\theta)\,d\theta
$$

[来源：§6-8 p14]

---

### 三、平行截面面积已知的立体体积

**薄片法** 设立体 $\Omega$ 夹于平面 $x = a$，$x = b$ 间，过点 $(x, 0)$ 且垂直 $x$ 轴平面截 $\Omega$ 的截面面积 $A(x)$，则 $\Omega$ 的体积
$$
V = \int_a^b A(x)\,dx
$$

[来源：§6-8 p15]

**祖暅原理**：夫叠基成立积，缘幂势既同，则积不容异 [来源：§6-8 p15]

**旋转体体积（绕 $x$ 轴）**：曲线 $y = f(x)$ 与 $x = a$，$x = b$ 及 $x$ 轴所围图形绕 $x$ 轴旋转
$$
V_x = \pi\int_a^b f^2(x)\,dx
$$

[来源：§6-8 p15]

**薄壳法（绕 $y$ 轴）**：曲线 $y = f(x)$ 与 $x = a$，$x = b$ 及 $x$ 轴所围图形绕 $y$ 轴旋转所得旋转体体积
$$
V = 2\pi\int_a^b xy\,dx = 2\pi\int_a^b xf(x)\,dx
$$

[来源：§6-8 p17]

---

### 四、平面曲线弧长

**定义** 在曲线 $l$ 上依次取分点 $T: A = M_0, M_1, \ldots, M_n = B$，连内折线。记 $\|T\| = \max_{1\le i\le n}|M_{i-1}M_i|$，则 $l$ 的弧长
$$
s(l) = \lim_{\|T\|\to 0}\sum_{i=1}^{n}|M_{i-1}M_i|
$$

此时 $l$ 称为**可求长曲线** [来源：§6-8 p18，定义]

#### 弧微分公式

$$
ds = \sqrt{1 + f'^2(x)}\,dx = \sqrt{x'^2(t) + y'^2(t)}\,dt
$$

[来源：§6-8 p19]

#### 直角坐标

设 $l: y = f(x) \in C^{(1)}[a, b]$，则
$$
s(l) = \int_a^b \sqrt{1 + f'^2(x)}\,dx
$$

[来源：§6-8 p19，定理]

#### 参数方程

设 $l: x = x(t), y = y(t) \in C^{(1)}[\alpha, \beta]$，则
$$
s(l) = \int_\alpha^\beta \sqrt{x'^2(t) + y'^2(t)}\,dt
$$

[来源：§6-8 p19]

#### 极坐标方程

若 $l: r = r(\theta) \in C^{(1)}[\alpha, \beta]$，则
$$
s(l) = \int_\alpha^\beta \sqrt{r^2(\theta) + r'^2(\theta)}\,d\theta
$$

[来源：§6-8 p20]

---

### 五、旋转曲面侧面积

曲线 $y = f(x) \ge 0$（$a \le x \le b$）绕 $x$ 轴旋转所得曲面的侧面积
$$
S = 2\pi\int_a^b f(x)\sqrt{1 + f'^2(x)}\,dx
$$

[来源：§6-8 p21]

**参数形式**
$$
S = 2\pi\int_\alpha^\beta y(t)\sqrt{x'^2(t) + y'^2(t)}\,dt \quad (\alpha < \beta)
$$

[来源：§6-8 p22]

---

## 概念辨析与易错点

### 1. 可积 vs 存在原函数

| 性质 | 可积 | 存在原函数 |
|-----|------|----------|
| 连续函数 | ✓ | ✓ |
| 有限间断点的有界函数 | ✓ | 不一定 |
| Riemann函数 | ✓（积分为0） | ✗ |
| 单调函数 | ✓ | 不一定 |
| 有界但处处不连续 | ✗（Riemann 不可积） | ✗（不可能为导函数） |

【整理自 PPT】

### 2. 可积 vs 绝对可积

- **Riemann 定积分**：$f$ 可积 $\Rightarrow$ $|f|$ 可积；但 $|f|$ 可积 $\not\Rightarrow$ $f$ 可积（例如 $f(x)=1$ 当 $x\in\mathbb{Q}$，$f(x)=-1$ 当 $x\notin\mathbb{Q}$）
- **广义积分**：绝对可积（$\int |f|<\infty$）$\Rightarrow$ 可积（收敛），但可积（收敛）$\not\Rightarrow$ 绝对可积

### 3. 积分第一中值定理 vs 积分第二中值定理

| 定理 | 条件 | 结论 |
|-----|------|------|
| 第一中值定理 | $f \in C[a,b]$，$g \in R[a,b]$ 且不变号 | $\int_a^b fg = f(\xi)\int_a^b g$ |
| 第二中值定理 | $f \in R[a,b]$，$g$ 单调 | 涉及 $\int_a^\xi f$ 或 $\int_\xi^b f$ |

【整理自 PPT】

### 4. Dirichlet函数 vs Riemann函数

| 函数 | 可积性 | 原因 |
|-----|--------|------|
| Dirichlet函数 $D(x)$ | 不可积 | 不连续点集为 $[0,1]$（非零测集） |
| Riemann函数 $R(x)$ | 可积 | 不连续点集为有理数集（零测集） |

【整理自 PPT】

---

## 重要公式汇总

### 基本积分公式

$$
\int_0^1 x^p\,dx = \frac{1}{p+1} \quad (p > 0)
$$


### Wallis公式

$$
I_n = \int_0^{\frac{\pi}{2}} \sin^n x\,dx = \int_0^{\frac{\pi}{2}} \cos^n x\,dx = \begin{cases} \frac{(n-1)!!}{n!!} \cdot \frac{\pi}{2}, & n\text{偶} \\ \frac{(n-1)!!}{n!!}, & n\text{奇} \end{cases}
$$


### 几何应用公式汇总

| 应用 | 公式 |
|-----|------|
| 绕 $x$ 轴旋转体积 | $V_x = \pi\int_a^b f^2(x)\,dx$ |
| 绕 $y$ 轴旋转体积（薄壳法） | $V_y = 2\pi\int_a^b xf(x)\,dx$ |
| 直角坐标弧长 | $s = \int_a^b\sqrt{1 + f'^2(x)}\,dx$ |
| 参数方程弧长 | $s = \int_\alpha^\beta\sqrt{x'^2 + y'^2}\,dt$ |
| 极坐标弧长 | $s = \int_\alpha^\beta\sqrt{r^2 + r'^2}\,d\theta$ |
| 极坐标面积 | $A = \frac{1}{2}\int_\alpha^\beta r^2\,d\theta$ |
| 旋转曲面侧面积 | $S = 2\pi\int_a^b f(x)\sqrt{1 + f'^2(x)}\,dx$ |

【整理自 PPT】
