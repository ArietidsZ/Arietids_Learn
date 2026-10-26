---
title: "第5章 不定积分"
description: "数学分析 I课程笔记：第5章 不定积分。"
---

<div class="note-meta"><a href="/courses/analysis-1/">数学分析 I目录</a><a href="/downloads/analysis-1/chapter-05.md" download>下载 Markdown</a></div>

## 关键考点总览

1. 原函数与不定积分的定义及其关系
2. 不定积分与微分的互逆运算性质
3. 基本积分表（13个公式）的熟练运用
4. 第一换元法（凑微分法）的运算步骤与技巧
5. 第二换元法（三角代换、倒代换）的适用情形
6. 分部积分法的公式与选取 $u,\mathrm{d}v$ 的经验顺序（通常：对数/反三角作$u$；$\mathrm{d}v$ 可优先取指数→三角→幂
7. 有理函数积分：真分式分解为简单分式之和
8. 三角函数有理式积分：万能变换 $t = \tan(x/2)$
9. 无理函数积分：第二换元法去根式
10. "积不出"的函数（原函数非初等函数）

---

## §5-1 不定积分的概念和性质

### 一、原函数与不定积分

#### 1. 定义

- **原函数定义**：设 $f: I \to \mathbf{R}$，若 $\exists F$ 使 $F'(x) = f(x)$（$\forall x \in I$），则称 $F$ 是 $f$ 的一个**原函数**。  
  [来源：§5-1 p3，定义]

- **不定积分定义**：设 $f(x)$ 存在原函数，则 $f(x)$ 的全体原函数称为 $f(x)$ 的**不定积分**，记作 $\displaystyle\int f(x)\mathrm{d}x$。  
  其中：$\int$ —不定积分号，$f(x)$—被积函数，$x$—积分变量。  
  [来源：§5-1 p3，定义]

#### 2. 定理/命题

- **定理1（原函数全体的结构）**：设 $F$ 是 $f$ 的一个原函数，则 $F(x) + C$（$C \in \mathbf{R}$）为 $f$ 的全体原函数。  
  [来源：§5-1 p3，定理1]

- **定理2（不定积分的表达式）**：设 $F(x)$ 是 $f(x)$ 的一个原函数，则
  $$
  \int f(x)\mathrm{d}x = F(x) + C
  $$
  
  [来源：§5-1 p4，定理2]

---

### 二、不定积分的性质

#### 1. 定理/命题

- **定理3（不定积分与微分互逆）**：
  1. 设 $f(x)$ 存在原函数，则 $\displaystyle\left(\int f(x)\mathrm{d}x\right)' = f(x)$，即 $\displaystyle\mathrm{d}\left(\int f(x)\mathrm{d}x\right) = f(x)\mathrm{d}x$
  2. 设 $f(x)$ 可导，则 $\displaystyle\int f'(x)\mathrm{d}x = f(x) + C$，即 $\displaystyle\int \mathrm{d}f(x) = f(x) + C$
  
  **结论**：不定积分与微分是**互逆运算**。  
  [来源：§5-1 p4，定理3]

- **定理4（线性性质）**：设 $f, g$ 存在原函数，$a$ 为常数，则
  $$
  \int af(x)\mathrm{d}x = a\int f(x)\mathrm{d}x
  $$
  
  $$
  \int [f(x) \pm g(x)]\mathrm{d}x = \int f(x)\mathrm{d}x \pm \int g(x)\mathrm{d}x
  $$
  
  [来源：§5-1 p5，定理4]

---

### 三、基本积分表

以下公式必须熟记：

| 序号 | 公式 | 条件 |
|:---:|:---|:---:|
| (1) | $\displaystyle\int x^\alpha \,\mathrm{d}x = \frac{x^{\alpha+1}}{\alpha+1} + C$ | $\alpha \neq -1$；在 $x^\alpha$ 有定义且可导的区间内（如 $\alpha\notin\mathbb Z$ 时取 $x>0$） |
| (2) | $\displaystyle\int \frac{1}{x}\,\mathrm{d}x = \ln\left\vert x\right\vert + C$ | $x\neq 0$ |
| (3) | $\displaystyle\int a^x \,\mathrm{d}x = \frac{a^x}{\ln a} + C$ | $a>0,\ a\neq 1$ |
| (4) | $\displaystyle\int \mathrm{e}^x \,\mathrm{d}x = \mathrm{e}^x + C$ |  |
| (5) | $\displaystyle\int \sin x \,\mathrm{d}x = -\cos x + C$ |  |
| (6) | $\displaystyle\int \cos x \,\mathrm{d}x = \sin x + C$ |  |
| (7) | $\displaystyle\int \sec^2 x \,\mathrm{d}x = \tan x + C$ | $\cos x \neq 0$ |
| (8) | $\displaystyle\int \sec x\tan x \,\mathrm{d}x = \sec x + C$ | $\cos x \neq 0$ |
| (9) | $\displaystyle\int \frac{\mathrm{d}x}{\sqrt{a^2-x^2}} = \arcsin\frac{x}{a} + C$ | $a>0,\ \left\vert x\right\vert<a$ |
| (10) | $\displaystyle\int \frac{\mathrm{d}x}{a^2+x^2} = \frac{1}{a}\arctan\frac{x}{a} + C$ | $a\neq 0$ |
| (11) | $\displaystyle\int \frac{\mathrm{d}x}{x^2-a^2} = \frac{1}{2a}\ln\left\vert\frac{x-a}{x+a}\right\vert + C$ | $a\neq 0,\ x\neq \pm a$ |
| (12) | $\displaystyle\int \frac{\mathrm{d}x}{\sqrt{x^2\pm a^2}} = \ln\left\vert x+\sqrt{x^2\pm a^2}\right\vert + C$ | $a>0$；取“$-$”时需 $\left\vert x\right\vert>a$ |
| (13) | $\displaystyle\int \sec x \,\mathrm{d}x = \ln\left\vert \sec x+\tan x\right\vert + C$ | $\cos x \neq 0$ |

[来源：§5-1 p5-6，基本积分表]

---

## §5-2 不定积分法

### 一、第一换元法（凑微分法）

#### 1. 定理

- **第一换元法定理**：设 $\displaystyle\int f(u)\mathrm{d}u = F(u) + C$，$\varphi(x)$ 可导，则
  $$
  \int f(\varphi(x))\varphi'(x)\mathrm{d}x = F(\varphi(x)) + C
  $$
  
  或写成
  $$
  \int f(\varphi(x))\mathrm{d}\varphi(x) = F(\varphi(x)) + C
  $$
  
  [来源：§5-2 p9，定理]

#### 2. 计算方法/技巧

- **凑微分法运算步骤**：
  $$
  \int f(\varphi(x))\varphi'(x)\mathrm{d}x = \int f(\varphi(x))\mathrm{d}\varphi(x) \xrightarrow{u=\varphi(x)} \int f(u)\mathrm{d}u = F(u) + C \xrightarrow{\text{回代}} F(\varphi(x)) + C
  $$
  
  [来源：§5-2 p9，运算步骤]

- **常用凑微分形式**：$\displaystyle\int \frac{ax+b}{Ax^2+Bx+D}\mathrm{d}x$：先把分子写成分母导数的线性组合，化为“$\ln|Ax^2+Bx+D|$ 项 + $\displaystyle\int\frac{\mathrm{d}x}{Ax^2+Bx+D}$ 项”；其中后者按判别式 $\Delta=B^2-4AD$ 分三种：$\Delta<0$ 给 $\arctan$；$\Delta>0$ 给对数（或 $\operatorname{artanh}$）形式；$\Delta=0$ 给 $\displaystyle -\frac{2}{2Ax+B}$。  
  [来源：§5-2 p10，想一想]

---

### 二、第二换元法

#### 1. 定理

- **第二换元法定理**：设 $\displaystyle\int f(\varphi(t))\varphi'(t)\mathrm{d}t = F(t) + C$，令 $x = \varphi(t)$，并假设 $\varphi$ 在所考察区间上可逆（如单调可导）且 $\varphi'(t) \neq 0$，则
  $$
  \int f(x)\mathrm{d}x = F(\varphi^{-1}(x)) + C
  $$
  
  [来源：§5-2 p11，定理]

#### 2. 计算方法/技巧

- **第二换元法运算步骤**：
  $$
  \int f(x)\mathrm{d}x \xrightarrow{x=\varphi(t)} \int f(\varphi(t))\varphi'(t)\mathrm{d}t \xrightarrow{\text{已知}} F(t) + C \xrightarrow{\text{回代}} F(\varphi^{-1}(x)) + C
  $$
  
  [来源：§5-2 p11，运算步骤]

- **三角代换去根号**：
  | 根式类型 | 代换方式 |
  |:---:|:---:|
  | $\sqrt{a^2 - x^2}$ | $x = a\sin t$ |
  | $\sqrt{x^2 + a^2}$ | $x = a\tan t$ |
  | $\sqrt{x^2 - a^2}$ | $x = a\sec t$ |
  
  [来源：§5-2 p12，三角代换]

- **倒代换**：当被积函数在形式上同时含 $x$ 与 $1/x$（或通过同除 $x^k$ 可化为 $R(x,1/x)$）时，令 $x = 1/t$ 往往能降低次数/化简为有理函数积分。  
  [来源：§5-2 p12，倒代换]

---

### 三、分部积分法

#### 1. 定理

- **分部积分公式**：若 $u'(x), v'(x)$ 连续，则
  $$
  \int u(x)v'(x)\mathrm{d}x = u(x)v(x) - \int v(x)u'(x)\mathrm{d}x
  $$
  
  记忆形式：$\displaystyle\int u(x)\mathrm{d}v(x) = u(x)v(x) - \int v(x)\mathrm{d}u(x)$  
  [来源：§5-2 p13，定理]

#### 2. 计算方法/技巧

- **分部积分中 $u,\mathrm{d}v$ 的经验选取顺序**：通常把**对数函数、反三角函数、幂函数（多项式）**作为 $u(x)$，把**指数函数、三角函数**优先放入 $\mathrm{d}v$（等价地：$u$ 的选择顺序可记为“对数/反三角→幂→三角→指数”）。  
  [来源：§5-2 p13，凑微分顺序]

- **递推公式型积分**：如 $\displaystyle I_n = \int \frac{\mathrm{d}x}{(x^2+a^2)^n}$（$a > 0, n \in \mathbb{N}$），可通过分部积分建立 $I_n$ 与 $I_{n-1}$ 的递推关系。  
  [来源：§5-2 p14，例10]

- **循环积分法**：如 $\displaystyle I = \int \mathrm{e}^x \sin x \mathrm{d}x$，两次分部积分后出现原积分 $I$，解方程求得。  
  [来源：§5-2 p14，例9]

---

## §5-3 特殊初等函数的积分

### 一、有理函数的积分

#### 1. 定义

- **有理函数**：$\displaystyle R(x) = \frac{P_n(x)}{Q_m(x)}$，其中 $P_n(x)$ 和 $Q_m(x)$ 为 $n, m$ 次多项式。  
  [来源：§5-3 p16，有理函数定义]

- **假分式与真分式**：
  - 假分式：$n \geq m$
  - 真分式：$n < m$
  - 转换：假分式 $\xrightarrow{\text{多项式除法}}$ 多项式 + 真分式  
  [来源：§5-3 p16]

#### 2. 定理/命题

- **代数学定理（真分式分解）**：真分式可分解为下两类**简单分式**之和：
  1. $\displaystyle\frac{A}{(x-a)^k}$，$(k \in \mathbb{N})$
  2. $\displaystyle\frac{Bx+D}{(x^2+px+q)^k}$，$(\Delta = p^2 - 4q < 0)$
  
  [来源：§5-3 p16，代数学定理]

#### 3. 分解规则

- 若 $Q(x)$ 有 $k$ 重一次因式 $(x-a)^k$，则 $R(x)$ 的分解式含：
  $$
  \sum_{i=1}^{k} \frac{A_i}{(x-a)^i}
  $$
  

- 若 $Q(x)$ 有 $k$ 重二次因式 $(x^2+px+q)^k$（$\Delta < 0$），则 $R(x)$ 的分解式含：
  $$
  \sum_{i=1}^{k} \frac{B_i x + D_i}{(x^2+px+q)^i}
  $$
  

- 系数 $A_i, B_i, D_i$ 常用**待定系数法**确定。  
  [来源：§5-3 p18，分解规则]

#### 4. 计算方法/技巧

- **第一类简单分式积分**（$k=1$）：$\displaystyle\int\frac{A}{x-a}\mathrm{d}x = A\ln|x-a| + C$

- **第一类简单分式积分**（$k>1$）：$\displaystyle\int\frac{A}{(x-a)^k}\mathrm{d}x = \frac{A}{(1-k)(x-a)^{k-1}} + C$

- **第二类简单分式积分**（$k=1$）：
  $$
  \int\frac{Bx+D}{x^2+px+q}\mathrm{d}x = \frac{B}{2}\ln(x^2+px+q) + \frac{2D-Bp}{\sqrt{-\Delta}}\arctan\frac{2x+p}{\sqrt{-\Delta}} + C
  $$
  
  [来源：§5-3 p17，积分(2)当k=1]

- **第二类简单分式积分**（$k>1$）：拆分为"凑微分项 + $\displaystyle\int\frac{\mathrm{d}u}{(u^2+\alpha^2)^k}$ 型"，后者用递推公式。  
  [来源：§5-3 p17，积分(2)当k>1]

- **赋值法求系数**：对于一次因式 $(x-a)$，等式两边同乘 $(x-a)$ 后令 $x=a$ 可直接求得对应系数 $A$。  
  [来源：§5-3 p20，注]

- **有理式次数较大时**：常用**添项法**和**凑微分法**简化计算。  
  [来源：§5-3 p21，有理式次数较大]

---

### 二、三角函数有理式的积分

#### 1. 定义

- **三角函数有理式**：$R(\sin x, \cos x)$，其中 $R(u,v)$ 为关于 $u, v$ 的有理函数。  
  [来源：§5-3 p21]

#### 2. 计算方法/技巧

- **万能变换**：令 $t = \tan(x/2)$，则
  $$
  \sin x = \frac{2t}{1+t^2}, \quad \cos x = \frac{1-t^2}{1+t^2}, \quad \mathrm{d}x = \frac{2\mathrm{d}t}{1+t^2}
  $$
  
  从而
  $$
  \int R(\sin x, \cos x)\mathrm{d}x = \int R\left(\frac{2t}{1+t^2}, \frac{1-t^2}{1+t^2}\right) \cdot \frac{2}{1+t^2}\mathrm{d}t
  $$
  
  化为**有理函数积分**。  
  [来源：§5-3 p22，万能变换]

- **万能变换适用范围**：对任意三角函数有理式 $R(\sin x,\cos x)$ 都适用；但次数越高，代换后得到的有理函数次数越高、运算量增大，因此多用于次数不高或其它技巧不便时。  
  [来源：§5-3 p22]

- **$\sin x$ 和 $\cos x$ 的偶次有理式**：可化为 $\tan x$ 的有理式，令 $t = \tan x$ 后积分。  
  [来源：§5-3 p21]

---

### 三、无理函数的积分

#### 1. 定义

- **无理函数**：被积函数中含根式的函数。  
  [来源：§5-3 p23]

#### 2. 计算方法/技巧

- **基本方法**：常采用**第二换元法**去根式，化为有理函数积分。  
  [来源：§5-3 p23]

- **含 $\sqrt[n]{ax+b}$ 型**：令 $t = \sqrt[n]{ax+b}$。

- **含多个根式 $\sqrt[m]{x}, \sqrt[n]{x}$ 等**：令 $x = t^k$，其中 $k$ 为各根指数的最小公倍数。  
  【整理自PPT，例6】

---

### 四、"积不出"的函数

#### 1. 重要结论

- 以下函数的原函数**非初等函数**（即"积不出"）：
  $$
  \mathrm{e}^{-x^2}, \quad \frac{\sin x}{x}, \quad \frac{\cos x}{x}, \quad \frac{1}{\ln x}, \quad \sin(x^2), \quad \cos(x^2)
  $$
  
  [来源：§5-3 p23，"积不出"的函数]

---

## 本章小结

根据PPT本章小结页（p25），本章核心内容为：

1. **原函数与不定积分概念**，**基本积分表**（13个公式）  
   [来源：§5-3 p25，本章小结]

2. **不定积分法**：
   - 凑微分法（第一换元法）
   - 换元积分法（第二换元法）
   - 分部积分法  
   [来源：§5-3 p25，本章小结]

3. **有理函数积分步骤**，**三角函数有理式的积分**（万能变换）  
   [来源：§5-3 p25，本章小结]

---

## 附录：重要例题结论

以下结论来自例题，具有一般性：

| 积分类型 | 结论/方法 | 来源 |
|:---|:---|:---:|
| $\displaystyle\int\frac{ax+b}{Ax^2+Bx+D}\,\mathrm{d}x$ | 先配成分母导数：$\ln\left\vert Ax^2+Bx+D\right\vert$ 项 + $\displaystyle\int\frac{\mathrm{d}x}{Ax^2+Bx+D}$ 项（后者按 $\Delta=B^2-4AD$ 分情形） | §5-2 p10 |
| $\displaystyle\int\frac{x^2+1}{x^4+x^2+1}\,\mathrm{d}x$ | 分子分母同除 $x^2$，凑 $x-\frac{1}{x}$ | §5-2 例2 |
| $\displaystyle\int\frac{\cos x}{\sin x+\cos x}\,\mathrm{d}x$ 与 $\displaystyle\int\frac{\sin x}{\sin x+\cos x}\,\mathrm{d}x$ | 联立求解（$I+J$, $I-J$） | §5-2 补充练习(3)(4) |
| $\displaystyle\int\frac{\mathrm{d}x}{(x^2+a^2)^n}$ | 分部积分建立递推公式 | §5-2 例10 |
| $\displaystyle\int\mathrm{e}^x\sin x\,\mathrm{d}x$ | 两次分部积分，循环求解 | §5-2 例9 |
| $\displaystyle\int\frac{1}{x^3+1}\,\mathrm{d}x$ | 因式分解后部分分式展开 | §5-3 例1 |
| $\displaystyle\int\frac{\mathrm{d}x}{x(x^8+1)}$ | 换元 $t=x^8$ 或部分分式 | §5-3 例2 |
| $\displaystyle\int\frac{1}{1+\sqrt{x}+\sqrt{x+1}}\,\mathrm{d}x$ | 有理化或适当换元 | §5-3 例11 |
