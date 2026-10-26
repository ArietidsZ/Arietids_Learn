# Chap 14 函数项级数

> Arietids Learn · 个人课程复习笔记
> 在线阅读：https://learn.arietids.net/courses/analysis-2/chapter-14/

## 14.1 一致收敛性

### 一、点态收敛

- **收敛点 / 发散点 / 收敛域**:对函数列 $\{f_n(x)\}$,$x\in X$,若数列 $\{f_n(x_0)\}$ 收敛,则称 $x_0$ 为**收敛点**,否则称之为**发散点**;收敛点的全体 $D$ 称为**收敛域**。<!-- src: Chapter14.1-2#p003; type: direct -->
- **定义 1(点态收敛、极限函数)**:设 $\{f_n(x)\}$ 的收敛域为 $D$,且 $\forall x\in D$:$\lim\limits_{n\to\infty}f_n(x)=f(x)$,则称 $\{f_n(x)\}$ 在 $D$ 上(点态)收敛,$f(x)$ 称为**极限函数**,记为 $f_n(x)\xrightarrow{\,D\,}f(x)$。<!-- src: Chapter14.1-2#p003; ref: 定义1; type: direct -->
- **点态收敛的 $\varepsilon$–$N$ 叙述**:$f_n(x)\xrightarrow{\,D\,}f(x)$ 即

$$
\forall x\in D,\ \forall\varepsilon>0,\ \exists N=N(x,\varepsilon)\in\mathbb{N},\ \forall n>N:\ |f_n(x)-f(x)|<\varepsilon.
$$


  <!-- src: Chapter14.1-2#p004; type: direct -->
- 点态收敛中 $N=N(x,\varepsilon)$ 既依赖 $\varepsilon$ 也依赖 $x$;而一致收敛(定义 3)中 $N=N(\varepsilon)$ 只依赖 $\varepsilon$、对一切 $x\in D$ 公用,这是两个概念的本质区别。<!-- src: Chapter14.1-2#p004 + Chapter14.1-2#p006; type: synthesized -->
- **定义 2(函数项级数、部分和、和函数)**:设 $\{u_n(x)\}$ 为函数列,称 $\sum\limits_{n=1}^{\infty}u_n(x)=u_1(x)+u_2(x)+\cdots+u_n(x)+\cdots$ 为**函数项级数**;$S_n(x)=\sum\limits_{k=1}^{n}u_k(x)$ 称为其**部分和函数**。若 $S_n(x)\xrightarrow{\,D\,}S(x)$,则称 $\sum\limits_{n=1}^{\infty}u_n(x)$ 在 $D$ 上(点态)收敛,$S(x)$ 称为**和函数**,记为 $\sum\limits_{n=1}^{\infty}u_n(x)=S(x)$。<!-- src: Chapter14.1-2#p004; ref: 定义2; type: direct -->
- **核心问题**:极限函数 $f(x)$(和函数 $S(x)$)能否保持 $f_n(x)$($u_n(x)$)的"连续性、可导性、可积性"等分析性质?<!-- src: Chapter14.1-2#p005; type: direct -->
- **例 1**:考察函数列 $f_n(x)=x^n,\ x\in[0,1]$ 的极限函数在 $[0,1]$ 上的连续性。<!-- src: Chapter14.1-2#p005; ref: 例1; type: direct -->
- **例 2**:设 $f_n(x)=\dfrac{x^{n+1}}{n+1},\ x\in[0,1]$,考察其极限函数的导数及导数函数列的极限函数。<!-- src: Chapter14.1-2#p005; ref: 例2; type: direct -->
- **例 3**:设 $f_n(x)=nx(1-x^2)^n,\ x\in[0,1]$,考察其极限函数的积分及其积分的极限。<!-- src: Chapter14.1-2#p005; ref: 例3; type: direct -->
- 例 1–3 分别针对"连续性、可导性、可积性"三个性质构造检验对象,用于说明点态收敛下这些性质未必保持,由此引出一致收敛概念。<!-- src: Chapter14.1-2#p005 + Chapter14.1-2#p006; type: one-step-inferred -->

### 二、一致收敛性

- **定义 3(一致收敛)**:设 $\{f_n(x)\}$ 为函数列,若存在 $f(x)$ 使

$$
\forall\varepsilon>0,\ \exists N=N(\varepsilon)\in\mathbb{N},\ \forall n>N,\ \forall x\in D:\ |f_n(x)-f(x)|<\varepsilon,
$$


  则称 $\{f_n(x)\}$ 在 $D$ 上**一致收敛**于 $f(x)$,记为 $f_n(x)\overset{D}{\rightrightarrows}f(x)$。<!-- src: Chapter14.1-2#p006; ref: 定义3; type: direct -->
- 若 $f_n(x)\overset{D}{\rightrightarrows}f(x)$,则 $f_n(x)\xrightarrow{\,D\,}f(x)$;**反之不然**。<!-- src: Chapter14.1-2#p006; type: direct -->
- 若 $f_n(x)\overset{D}{\rightrightarrows}f(x)$,则对任意子集 $D_1\subset D$:$f_n(x)\overset{D_1}{\rightrightarrows}f(x)$。<!-- src: Chapter14.1-2#p006; type: direct -->
- **不一致收敛的肯定叙述**:$f_n(x)$ 在 $D$ 上不一致收敛 $\iff$

$$
\forall f(x),\ \exists\varepsilon_0>0,\ \forall N\in\mathbb{N},\ \exists n_N>N,\ \exists x_N\in D:\ |f_{n_N}(x_N)-f(x_N)|\ge\varepsilon_0.
$$


  <!-- src: Chapter14.1-2#p007; type: one-step-inferred -->
- **不一致收敛判别法**:或者 $\{f_n(x)\}$ 在 $D$ 上不点态收敛;或者虽 $f_n(x)\xrightarrow{\,D\,}f(x)$,但 $\{f_n(x)\}$ 不一致收敛于 $f(x)$,即

$$
\exists\varepsilon_0>0,\ \exists\{n_k\}\subset\mathbb{N},\ n_k\to\infty,\ \exists x_k\in D:\ |f_{n_k}(x_k)-f(x_k)|\ge\varepsilon_0.
$$


  <!-- src: Chapter14.1-2#p007; type: direct -->
- **例 4**:说明 $f_n(x)=\dfrac{nx}{n^2+(n+1)x}$ 在 $(0,+\infty)$ 上不一致收敛。<!-- src: Chapter14.1-2#p008; ref: 例4; type: direct -->
- **例 5**:判断 $f_n(x)=\dfrac{2n\sqrt{x}}{1+n^2x}$ 在 $D$ 上的一致收敛性:(1) $D=[1,+\infty)$;(2) $D=[0,1]$。<!-- src: Chapter14.1-2#p008; ref: 例5; type: direct -->

### 三、一致收敛的判别充要条件

- **定理(Cauchy 一致收敛准则)**:$\{f_n(x)\}$ 在 $D$ 上一致收敛

$$
\iff\ \forall\varepsilon>0,\ \exists N\in\mathbb{N},\ \forall n>N,\ \forall p\in\mathbb{N},\ \forall x\in D:\ |f_{n+p}(x)-f_n(x)|<\varepsilon.
$$


  <!-- src: Chapter14.1-2#p009; ref: Cauchy一致收敛准则; type: direct -->
- **思考**:$\sum\limits_{n=1}^{\infty}u_n(x)$ 在 $D$ 上一致收敛的 Cauchy 准则?<!-- src: Chapter14.1-2#p009; type: direct -->
- **结论(必要条件)**:若 $\sum\limits_{n=1}^{\infty}u_n(x)$ 在 $D$ 上一致收敛,则 $u_n(x)\overset{D}{\rightrightarrows}0$。<!-- src: Chapter14.1-2#p009; type: direct -->
- **定理(确界极限)**:

$$
f_n(x)\overset{D}{\rightrightarrows}f(x)\ \iff\ \lim_{n\to\infty}\sup_{x\in D}|f_n(x)-f(x)|=0.
$$


  <!-- src: Chapter14.1-2#p010; ref: 确界极限定理; type: direct -->
- **定理(点列极限)**:

$$
f_n(x)\overset{D}{\rightrightarrows}f(x)\ \iff\ \forall\{x_n\}\subset D:\ \lim_{n\to\infty}|f_n(x_n)-f(x_n)|=0.
$$


  <!-- src: Chapter14.1-2#p010; ref: 点列极限定理; type: direct -->
- **例 6**:讨论 $f_n(x)=x^n\mathrm{e}^{-n^2x}$ 在 $[0,+\infty)$ 上的一致收敛性。<!-- src: Chapter14.1-2#p010; ref: 例6; type: direct -->
- **注(方法选择)**:极限函数(和函数)难确定时,常用 **Cauchy 准则**;极限函数(和函数)易计算时,常用**定义**或**确界极限**;常用**点列极限**判断**不一致收敛**。<!-- src: Chapter14.1-2#p010; type: direct -->
- **例 7**:判断函数列 $f_n(x)=\left(1+\dfrac{x}{n}\right)^n$ 在 $D$ 上的一致收敛性:1) $D=(-\infty,+\infty)$;2) $D=[-1,1]$。提示:首先 $f_n(x)\xrightarrow{\,\mathbb{R}\,}\mathrm{e}^x$。<!-- src: Chapter14.1-2#p011; ref: 例7; type: direct -->
  - 1) **点列极限法**:取 $x_n=n\in\mathbb{R}$,则 $\left|f_n(x_n)-\mathrm{e}^{x_n}\right|=\mathrm{e}^n-2^n\to+\infty\ (n\to\infty)$,故在 $(-\infty,+\infty)$ 上不一致收敛。<!-- src: Chapter14.1-2#p011; ref: 例7解1); type: compressed -->
  - 2) **确界极限法**:当 $x\in[-1,1]$ 时,$g_n(x)=\mathrm{e}^x-\left(1+\dfrac{x}{n}\right)^n\ge 0$,且 $g_n'(x)\begin{cases}\ge 0,&0\le x\le 1,\\ \le 0,&-1\le x\le 0,\end{cases}$ 故 $\left|f_n(x)-\mathrm{e}^x\right|=\mathrm{e}^x-\left(1+\dfrac{x}{n}\right)^n\le\max\{g_n(1),\,g_n(-1)\}\to 0\ (n\to\infty)$,即在 $[-1,1]$ 上一致收敛。<!-- src: Chapter14.1-2#p012; ref: 例7解2); type: compressed -->
- **命题(端点收敛性)**:设 $u_n(x)\in C[a,b]$,且 $\sum\limits_{n=1}^{\infty}u_n(x)$ 在 $(a,b)$ 内一致收敛,则 $\sum\limits_{n=1}^{\infty}u_n(a)$、$\sum\limits_{n=1}^{\infty}u_n(b)$ 收敛,且 $\sum\limits_{n=1}^{\infty}u_n(x)$ 在 $[a,b]$ 上一致收敛。<!-- src: Chapter14.1-2#p013; ref: 命题; type: direct -->
- **思考**:上述命题对函数列的对应形式?<!-- src: Chapter14.1-2#p013; type: direct -->
- **例 8**:证明函数项级数 $\sum\limits_{n=2}^{\infty}\dfrac{\ln n}{n^x}$ 在 $(1,+\infty)$ 上收敛,但不一致收敛。<!-- src: Chapter14.1-2#p013; ref: 例8; type: direct -->

### 四、内闭一致收敛

- **定义 4(内闭一致收敛)**:设 $D$ 为区间,若对 $\forall$ 闭区间 $I\subset D$,$\{f_n(x)\}$ 总在 $I$ 上一致收敛,则称 $\{f_n(x)\}$ 在 $D$ 上**内闭一致收敛**。<!-- src: Chapter14.1-2#p014; ref: 定义4; type: direct -->
- **结论**:设 $\{f_n(x)\}$ 在 $(a,b)$ 内闭一致收敛,则 $\{f_n(x)\}$ 在 $(a,b)$ 点态收敛。又问:$\{f_n(x)\}$ 在 $(a,b)$ 必定一致收敛吗?<!-- src: Chapter14.1-2#p014; type: direct -->
- **例 9**:考察 $f_n(x)=x^n$ 在 $(0,1)$ 的一致收敛性和内闭一致收敛性。<!-- src: Chapter14.1-2#p014; ref: 例9; type: direct -->

### 五、Weierstrass 判别法

- **定理(Weierstrass 判别法 / 优级数判别法)**:设对 $\forall n\in\mathbb{N}$,$\forall x\in D$ 有 $|u_n(x)|\le M_n$,且 $\sum\limits_{n=1}^{\infty}M_n$ 收敛,则 $\sum\limits_{n=1}^{\infty}u_n(x)$ 在 $D$ 上一致收敛。其中 $\sum\limits_{n=1}^{\infty}M_n$ 称为**优级数**。<!-- src: Chapter14.1-2#p015; ref: Weierstrass判别法; type: direct -->
- **绝对一致收敛**:$\sum\limits_{n=1}^{\infty}u_n(x)$ 绝对一致收敛指 $\sum\limits_{n=1}^{\infty}|u_n(x)|$ 一致收敛。<!-- src: Chapter14.1-2#p015; type: direct -->
- 绝对一致收敛 $\Rightarrow$ $\sum\limits_{n=1}^{\infty}u_n(x)$ 一致收敛(由 $|u_{n+1}(x)+\cdots+u_{n+p}(x)|\le |u_{n+1}(x)|+\cdots+|u_{n+p}(x)|$ 结合 Cauchy 准则即得)。<!-- src: Chapter14.1-2#p015 + Chapter14.1-2#p009; type: one-step-inferred -->
- **问题**:$\sum u_n(x)$ 绝对一致收敛与 "$\sum u_n(x)$ 绝对收敛且一致收敛" 的关系?<!-- src: Chapter14.1-2#p015; type: direct -->
- **例 10**:判断 $\sum\limits_{n=1}^{\infty}x^n(1-x)^2$ 在 $[0,1]$ 上的一致收敛性。<!-- src: Chapter14.1-2#p015; ref: 例10; type: direct -->

### 六、A-D 判别法

- **定理(Abel–Dirichlet 判别法)**:设 $\{u_n(x)\}$、$\{v_n(x)\}$ 满足下列两组条件之一,则 $\sum\limits_{n=1}^{\infty}u_n(x)v_n(x)$ 在 $D$ 上一致收敛:
  - **(Abel)** $\forall x\in D$,$\{v_n(x)\}$ 单调,且在 $D$ 上一致有界;$\sum\limits_{n=1}^{\infty}u_n(x)$ 在 $D$ 上一致收敛。<!-- src: Chapter14.1-2#p016; ref: Abel判别法; type: direct -->
  - **(Dirichlet)** $\forall x\in D$,$\{v_n(x)\}$ 单调,且在 $D$ 上一致趋于 $0$;$\sum\limits_{n=1}^{\infty}u_n(x)$ 的部分和列 $\{S_n(x)\}$ 在 $D$ 上一致有界。<!-- src: Chapter14.1-2#p016; ref: Dirichlet判别法; type: direct -->
- **例 11**:判断 $\sum\limits_{n=1}^{\infty}(-1)^{n-1}\dfrac{x^n}{n(1+x^n)}$ 在 $[0,1]$ 上的一致收敛性。<!-- src: Chapter14.1-2#p017; ref: 例11; type: direct -->
- **例 12**:判断 $\sum\limits_{n=1}^{\infty}\dfrac{\sin x\sin nx}{\sqrt{n+x}}$ 在 $[0,+\infty)$ 上的一致收敛性。<!-- src: Chapter14.1-2#p017; ref: 例12; type: direct -->

## 14.2 一致收敛函数级数的性质

### 连续性

- **定理(连续性)**:设 $f_n(x)\in C(D)$,且 $f_n(x)\overset{D}{\rightrightarrows}f(x)$,则 $f(x)\in C(D)$。<!-- src: Chapter14.1-2#p019; ref: 连续性定理; type: direct -->
- **等价形式(极限次序可交换)**:

$$
\lim_{x\to x_0}\left(\lim_{n\to\infty}f_n(x)\right)=\lim_{n\to\infty}\left(\lim_{x\to x_0}f_n(x)\right).
$$


  <!-- src: Chapter14.1-2#p019; type: direct -->
- **推论**:若 $u_n(x)\in C(D)$,且 $\sum\limits_{n=1}^{\infty}u_n(x)$ 一致收敛(或内闭一致收敛)于 $S(x)$,则 $S(x)\in C(D)$。<!-- src: Chapter14.1-2#p019; type: direct -->
- **逆否命题(不一致收敛的判别)**:若 $f_n(x)\in C(D)$,且 $f_n(x)\xrightarrow{\,D\,}f(x)$,但 $f(x)\notin C(D)$,则 $\{f_n(x)\}$ 在 $D$ 上不一致收敛。<!-- src: Chapter14.1-2#p019; type: direct -->
- **例 1**:讨论 $\sum\limits_{n=1}^{\infty}\dfrac{x^2}{(1+x^2)^n}$ 在 $\mathbb{R}$ 上的一致收敛性。<!-- src: Chapter14.1-2#p020; ref: 例1(14.2); type: direct -->
- **思考**:在 $f_n(x)\in C(D)$ 的前提下,连续性定理的逆命题成立否?**反例**:考察 $f_n(x)=\dfrac{2n\sqrt{x}}{1+n^2x}$ 在 $[0,1]$ 上的情形(极限函数连续但不一致收敛)。<!-- src: Chapter14.1-2#p020; type: direct -->
- **问题**:还要增加什么条件就能得出 $f_n(x)\overset{D}{\rightrightarrows}f(x)$?(由 Dini 定理回答)<!-- src: Chapter14.1-2#p020 + Chapter14.1-2#p021; type: synthesized -->

### Dini 定理

- **定理\*(Dini)**:设 $\{f_n(x)\}$ 满足:(1) $f_n(x)\in C[a,b]$;(2) $\forall x\in[a,b]$,$\{f_n(x)\}$ 关于 $n$ 单调;(3) $f_n(x)\xrightarrow{\,[a,b]\,}f(x)$,且 $f(x)\in C[a,b]$。则 $f_n(x)\overset{[a,b]}{\rightrightarrows}f(x)$。<!-- src: Chapter14.1-2#p021; ref: Dini定理; type: direct -->
- **推论(思考)**:函数项级数的 Dini 定理?<!-- src: Chapter14.1-2#p021; type: direct -->
- **例 2\***:设 $f(x)\in C[0,1]$,$f(1)=0$,记 $g_n(x)=x^nf(x)$。证明:$\{g_n(x)\}$ 在 $[0,1]$ 上一致收敛。**特例**:$\{x^n(1-x)\}$ 在 $[0,1]$ 上一致收敛。<!-- src: Chapter14.1-2#p022; ref: 例2*(14.2); type: direct -->

### 可积性(积分号下取极限)

- **定理(积分号下取极限)**:设 $f_n(x)\in C[a,b]$,且 $f_n(x)\overset{[a,b]}{\rightrightarrows}f(x)$,则

$$
\lim_{n\to\infty}\int_a^b f_n(x)\,\mathrm{d}x=\int_a^b\left(\lim_{n\to\infty}f_n(x)\right)\mathrm{d}x=\int_a^b f(x)\,\mathrm{d}x.
$$


  <!-- src: Chapter14.1-2#p023; ref: 积分号下取极限定理; type: direct -->
- **注**:证明用到连续性定理:$f\in C[a,b]$,从而 $f\in R[a,b]$(可积)。<!-- src: Chapter14.1-2#p023; type: direct -->
- **注(条件减弱)**:条件 "$f_n(x)\in C[a,b]$" 可减弱为 "$f_n(x)\in R[a,b]$"。<!-- src: Chapter14.1-2#p023; type: direct -->
- **推论(逐项可积性)**:设 $u_n(x)\in C[a,b]$,且 $\sum\limits_{n=1}^{\infty}u_n(x)$ 在 $[a,b]$ 上一致收敛,则

$$
\int_a^b\left(\sum_{n=1}^{\infty}u_n(x)\right)\mathrm{d}x=\sum_{n=1}^{\infty}\int_a^b u_n(x)\,\mathrm{d}x.
$$


  <!-- src: Chapter14.1-2#p023; ref: 逐项可积性; type: direct -->

### 可微性(微分号下取极限)

- **定理(微分号下取极限)**:设 $f_n(x)\xrightarrow{\,[a,b]\,}f(x)$,又 $f_n'(x)\in C[a,b]$,且 $\{f_n'(x)\}$ 一致收敛,则 $f'(x)\in C[a,b]$,且

$$
\lim_{n\to\infty}f_n'(x)=\left(\lim_{n\to\infty}f_n(x)\right)'=f'(x).
$$


  <!-- src: Chapter14.1-2#p024; ref: 微分号下取极限定理; type: direct -->
- **推论(逐项可微性)**:设 $\sum\limits_{n=1}^{\infty}u_n(x)$ 满足:(1) $\sum\limits_{n=1}^{\infty}u_n(x)=S(x)$;(2) $u_n'(x)\in C[a,b]$;(3) $\sum\limits_{n=1}^{\infty}u_n'(x)$ 在 $[a,b]$ 上一致收敛。则 $S'(x)\in C[a,b]$,且

$$
S'(x)=\left(\sum_{n=1}^{\infty}u_n(x)\right)'=\sum_{n=1}^{\infty}u_n'(x).
$$


  <!-- src: Chapter14.1-2#p024; ref: 逐项可微性; type: direct -->

### 综合例题

- **例 3**:已证 $\sum\limits_{n=2}^{\infty}\dfrac{\ln n}{n^x}$ 在 $(1,+\infty)$ 上收敛但不一致收敛;现记其和函数为 $f(x)$,证明:$f\in C(1,+\infty)$。<!-- src: Chapter14.1-2#p025; ref: 例3(14.2); type: direct -->
- **例 4**:设 $f(x)=\sum\limits_{n=1}^{\infty}\dfrac{\cos nx}{n^2}$,求 $\displaystyle\int_0^{\pi}f(x)\,\mathrm{d}x$。<!-- src: Chapter14.1-2#p025; ref: 例4(14.2); type: direct -->
- **例 5**:设 $f(x)=\sum\limits_{n=1}^{\infty}n\mathrm{e}^{-nx}$:(1) 求 $f(x)$ 的定义域 $D$;(2) 证明 $\sum\limits_{n=1}^{\infty}n\mathrm{e}^{-nx}$ 在 $D$ 上不一致收敛;(3) 证明 $f(x)\in C(D)$;(4) 证明 $\sum\limits_{n=1}^{\infty}n\mathrm{e}^{-nx}$ 在 $D$ 内可逐项求导,且导函数连续。<!-- src: Chapter14.1-2#p025; ref: 例5(14.2); type: direct -->
- 例 3、例 5 表明:级数在区间上不一致收敛时,仍可借助**内闭一致收敛**得到和函数在开区间上的连续性、可导性。<!-- src: Chapter14.1-2#p025 + Chapter14.1-2#p019; type: one-step-inferred -->

## 14.3 幂级数

### 一、幂级数的收敛半径

- **定义(幂级数、系数)**:形如

$$
\sum_{n=0}^{\infty}a_n(x-x_0)^n=a_0+a_1(x-x_0)+\cdots+a_n(x-x_0)^n+\cdots
$$


  的函数项级数称为**幂级数**,其中 $x_0\in\mathbb{R}$,$a_i$ 称为**系数**。<!-- src: Chapter14.3-4#p002; type: direct -->
- 令 $t=x-x_0$,幂级数变为 $\sum\limits_{n=0}^{\infty}a_nt^n$(故只需研究中心在 $0$ 的情形)。<!-- src: Chapter14.3-4#p002; type: direct -->
- **定理(Cauchy–Hadamard)**:设 $\rho=\varlimsup\limits_{n\to\infty}\sqrt[n]{|a_n|}$,则:
  1. 当 $0<\rho<+\infty$ 时,$\sum\limits_{n=0}^{\infty}a_nx^n$ 在 $\left(-\dfrac{1}{\rho},\dfrac{1}{\rho}\right)$ 内绝对收敛,在 $|x|>\dfrac{1}{\rho}$ 发散;
  2. 当 $\rho=0$ 时,$\sum\limits_{n=0}^{\infty}a_nx^n$ 在 $(-\infty,+\infty)$ 内绝对收敛;
  3. 当 $\rho=+\infty$ 时,$\sum\limits_{n=0}^{\infty}a_nx^n$ 仅在 $x=0$ 处收敛。<!-- src: Chapter14.3-4#p003; ref: Cauchy-Hadamard定理; type: direct -->
- **收敛半径**:$r=\dfrac{1}{\rho}$(约定 $1/0=+\infty,\ 1/(+\infty)=0$);**收敛区间**:$(-r,r)$。<!-- src: Chapter14.3-4#p003; type: direct -->
- **公式(比值法)**:若 $\lim\limits_{n\to\infty}\dfrac{|a_{n+1}|}{|a_n|}$ 存在广义极限,则 $r=\lim\limits_{n\to\infty}\dfrac{|a_n|}{|a_{n+1}|}$。<!-- src: Chapter14.3-4#p004; type: direct -->
- **收敛域求法**:先用比值法或根值法求收敛半径,再考察端点处的敛散性。<!-- src: Chapter14.3-4#p004; type: direct -->
- **例 1**:求下列幂级数的收敛域:(1) $\sum\limits_{n=1}^{\infty}\dfrac{(x-1)^n}{n}$;(2) $\sum\limits_{n=1}^{\infty}(-1)^{n-1}\dfrac{x^{2n-1}}{2^n(2n-1)}$。<!-- src: Chapter14.3-4#p004; ref: 例1(14.3); type: direct -->
- **缺项幂级数**:不能(直接对系数)用比值法求收敛半径!<!-- src: Chapter14.3-4#p004; type: direct -->

### 二、Abel 定理

- **Abel 第 I 定理**:设 $\sum\limits_{n=0}^{\infty}a_nx^n$ 在 $x_1(\ne 0)$ 收敛,则 $|x|<|x_1|$ 时绝对收敛;若 $\sum\limits_{n=0}^{\infty}a_nx^n$ 在 $x_2$ 发散,则 $|x|>|x_2|$ 时发散。<!-- src: Chapter14.3-4#p005; ref: Abel第I定理; type: direct -->
- **例 2**:设 $\sum\limits_{n=0}^{\infty}a_n(x-1)^n$ 在 $x=-1$ 条件收敛,求其收敛半径。<!-- src: Chapter14.3-4#p005; ref: 例2(14.3); type: direct -->
- **结论**:幂级数的条件收敛点(若存在)到中心的距离即为收敛半径。<!-- src: Chapter14.3-4#p005; type: direct -->
- **Abel 第 II 定理**:设 $\sum\limits_{n=0}^{\infty}a_nx^n$ 收敛半径为 $r(>0)$,则它在 $(-r,r)$ 内闭一致收敛;若 $x=r$ 时收敛,则它在 $[0,r]$ 一致收敛,从而在 $(-r,r]$ 内闭一致收敛。<!-- src: Chapter14.3-4#p006; ref: Abel第II定理; type: direct -->
- **思考**:后一情形($x=r$ 收敛)能否用 W-判别法?**试一试**:$x=-r$ 收敛的情形。<!-- src: Chapter14.3-4#p006; type: direct -->
- **注**:内闭一致收敛性是幂级数的特性,一般函数项级数未必具有。考察例子 $\sum\limits_{n=0}^{\infty}\dfrac{nx}{1+n^4x^4}$。<!-- src: Chapter14.3-4#p006; type: direct -->

### 三、幂级数的分析性质

- **定理(三级数同半径)**:幂级数 $\sum\limits_{n=0}^{\infty}a_nx^n$ 与其**导数级数** $\sum\limits_{n=1}^{\infty}na_nx^{n-1}$ 和**积分级数** $\sum\limits_{n=0}^{\infty}\dfrac{a_n}{n+1}x^{n+1}$ 的收敛半径相等。<!-- src: Chapter14.3-4#p007; type: direct -->
- **注意**:三个级数在端点的收敛性未必相同。如:

| 级数 | 收敛域 |
|---|---|
| $\sum\limits_{n=1}^{\infty}\dfrac{x^{n-1}}{n}$ <!-- src: Chapter14.3-4#p007; type: direct --> | $D=[-1,1)$ |
| 导数级数 $\sum\limits_{n=2}^{\infty}\dfrac{(n-1)x^{n-2}}{n}$ <!-- src: Chapter14.3-4#p007; type: direct --> | $D'=(-1,1)$ |
| 积分级数 $\sum\limits_{n=1}^{\infty}\dfrac{x^n}{n^2}$ <!-- src: Chapter14.3-4#p007; type: direct --> | $D_1=[-1,1]$ |

- **定理(和函数的分析性质)**:设 $f(x)=\sum\limits_{n=0}^{\infty}a_nx^n,\ x\in(-r,r)$,则:
  1. $f(x)\in C(-r,r)$(连续);
  2. $f(x)\in D(-r,r)$(可导),且**可逐项求导**,即 $\forall x\in(-r,r)$:

$$
f'(x)=\left(\sum_{n=0}^{\infty}a_nx^n\right)'=\sum_{n=0}^{\infty}\left(a_nx^n\right)'=\sum_{n=1}^{\infty}na_nx^{n-1};
$$


  3. **可逐项积分**,即 $\forall x\in(-r,r)$:

$$
\int_0^x f(t)\,\mathrm{d}t=\int_0^x\left(\sum_{n=0}^{\infty}a_nt^n\right)\mathrm{d}t=\sum_{n=0}^{\infty}\int_0^x a_nt^n\,\mathrm{d}t=\sum_{n=0}^{\infty}\frac{a_n}{n+1}x^{n+1}.
$$


  <!-- src: Chapter14.3-4#p008; type: direct -->
- **Abel 第 III 定理**:设 $f(x)=\sum\limits_{n=0}^{\infty}a_nx^n,\ x\in(-r,r]$(即端点 $x=r$ 处也收敛),则 $f(x)$ 在 $x=r$ 处**左连续**,即

$$
\lim_{x\to r^-}\sum_{n=0}^{\infty}a_nx^n=\sum_{n=0}^{\infty}a_nr^n.
$$


  <!-- src: Chapter14.3-4#p009; ref: Abel第III定理; type: direct -->
- **问题**:若 $\lim\limits_{x\to r^-}f(x)=\lim\limits_{x\to r^-}\sum\limits_{n=0}^{\infty}a_nx^n=S$,能否得出 $\sum\limits_{n=0}^{\infty}a_nr^n$ 收敛?考察例子 $\dfrac{1}{1+x}=\sum\limits_{n=0}^{\infty}(-1)^nx^n,\ x\in(-1,1)$。<!-- src: Chapter14.3-4#p009; type: direct -->
- 该例中 $x\to 1^-$ 时 $\dfrac{1}{1+x}\to\dfrac{1}{2}$ 存在,但 $\sum(-1)^n$ 在 $x=1$ 处发散,故 Abel 第 III 定理的逆不成立。<!-- src: Chapter14.3-4#p009; type: one-step-inferred -->
- **例 3**:求下列幂级数的和函数:(1) $\sum\limits_{n=1}^{\infty}\dfrac{x^n}{n}$;(2) $\sum\limits_{n=1}^{\infty}n^2x^{n-1}$;(3) $\sum\limits_{n=0}^{\infty}\dfrac{x^n}{n!}$。<!-- src: Chapter14.3-4#p010; ref: 例3(14.3); type: direct -->

## 14.4 函数的幂级数展开

### 一、Taylor 级数

- **定义(Taylor 级数 / Maclaurin 级数)**:设 $f(x)$ 在 $x_0$ 无穷次可导,则称

$$
f(x)\sim\sum_{n=0}^{\infty}\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n
$$


  为 $f(x)$ 在 $x_0$ 处的 **Taylor 级数**;$x_0=0$ 时称为 **Maclaurin 级数**。<!-- src: Chapter14.3-4#p012; type: direct -->
- **注意**:记号 "$\sim$" 的含义?能否换为 "$=$"?(Taylor 级数未必收敛于 $f(x)$,见例 1。)<!-- src: Chapter14.3-4#p012 + Chapter14.3-4#p013; type: synthesized -->
- **例 1**:求下列函数的 Maclaurin 级数,并考查其和函数 $S(x)$ 与 $f(x)$ 的关系:
  (1) $f(x)=\begin{cases}\mathrm{e}^{-1/x^2},&x\ne 0,\\ 0,&x=0;\end{cases}$ (2) $f(x)=\sum\limits_{n=0}^{\infty}\dfrac{\sin(2^nx)}{n!}$。<!-- src: Chapter14.3-4#p013; ref: 例1(14.4); type: direct -->
- **问题**:$f(x)$ 满足何条件时,其 Taylor 级数收敛于 $f(x)$?<!-- src: Chapter14.3-4#p013; type: direct -->
- **回顾 Taylor 公式**:

$$
f(x)=\sum_{k=0}^{n}\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k+R_n(x).
$$


  <!-- src: Chapter14.3-4#p014; type: direct -->
- **定理 1(收敛于 $f$ 的充要条件)**:设 $f\in C^{(\infty)}(I)$,其中 $I=(x_0-r,\ x_0+r)$,则在 $I$ 上

$$
f(x)=\sum_{n=0}^{\infty}\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n\ \iff\ \lim_{n\to\infty}R_n(x)=0.
$$


  <!-- src: Chapter14.3-4#p014; ref: 定理1(14.4); type: direct -->
- **注**:由于计算 $\lim\limits_{n\to\infty}R_n(x)$ 困难,为此介绍下面的定理 2。<!-- src: Chapter14.3-4#p014; type: direct -->
- **定理 2(导数一致有界的充分条件)**:设 $f\in C^{(\infty)}(I)$,且 $\forall n\in\mathbb{N}$,$\forall x\in I$:$|f^{(n)}(x)|\le M$,则

$$
f(x)=\sum_{n=0}^{\infty}\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n\quad(\forall x\in I).
$$


  <!-- src: Chapter14.3-4#p015; ref: 定理2(14.4); type: direct -->
- **问题**:若 $f(x)$ 在 $I$ 上是某幂级数的和函数,则该幂级数与其 Taylor 级数有何关系?<!-- src: Chapter14.3-4#p015; type: direct -->
- **定理 3(唯一性)**:若 $f(x)=\sum\limits_{n=0}^{\infty}a_n(x-x_0)^n,\ x\in(x_0-r,x_0+r)$(此时称 $f(x)$ 在 $x_0$ 处**可展开为幂级数**),则必有

$$
a_n=\frac{f^{(n)}(x_0)}{n!}.
$$


  即该幂级数就是 $f(x)$ 在 $x_0$ 处的 Taylor 级数。<!-- src: Chapter14.3-4#p016; ref: 定理3(唯一性); type: direct -->

### 二、初等函数的幂级数展开式

- **基本展开式**:

| 展开式 | 成立范围 |
|---|---|
| $\mathrm{e}^x=1+x+\dfrac{x^2}{2!}+\dfrac{x^3}{3!}+\cdots+\dfrac{x^n}{n!}+\cdots=\sum\limits_{n=0}^{\infty}\dfrac{x^n}{n!}$ <!-- src: Chapter14.3-4#p017; type: direct --> | $x\in\mathbb{R}$ |
| $\sin x=x-\dfrac{x^3}{3!}+\dfrac{x^5}{5!}-\cdots+(-1)^{n-1}\dfrac{x^{2n-1}}{(2n-1)!}+\cdots$ <!-- src: Chapter14.3-4#p017; type: direct --> | $x\in\mathbb{R}$ |
| $\cos x=1-\dfrac{x^2}{2!}+\dfrac{x^4}{4!}-\cdots+(-1)^n\dfrac{x^{2n}}{(2n)!}+\cdots$ <!-- src: Chapter14.3-4#p017; type: direct --> | $x\in\mathbb{R}$ |
| $\ln(1+x)=x-\dfrac{x^2}{2}+\dfrac{x^3}{3}-\dfrac{x^4}{4}+\cdots$ <!-- src: Chapter14.3-4#p017; type: direct --> | $-1<x\le 1$ |
| $(1+x)^{\alpha}=1+\alpha x+\dfrac{\alpha(\alpha-1)}{2!}x^2+\cdots+\dfrac{\alpha(\alpha-1)\cdots(\alpha-n+1)}{n!}x^n+\cdots$ <!-- src: Chapter14.3-4#p018; type: direct --> | $-1<x<1$ |

- **问题**:$(1+x)^{\alpha}$ 展开式端点情形如何?特别地,有:

$$
\frac{1}{1-x}=1+x+x^2+\cdots+x^n+\cdots=\sum_{n=0}^{\infty}x^n\quad(-1<x<1);
$$


$$
\frac{1}{\sqrt{1-x}}=1+\sum_{n=1}^{\infty}\frac{(2n-1)!!}{(2n)!!}x^n\quad(-1\le x<1).\ \text{(c.f. §14.3 例 7)}
$$


  <!-- src: Chapter14.3-4#p018; type: direct -->
- **例 2**:将下列函数在 $x_0=0$ 展成幂级数:1) $\arctan x$;2) $\arcsin x$。<!-- src: Chapter14.3-4#p018; ref: 例2(14.4); type: direct -->

### 三、函数的幂级数展开方法

- **直接法**:先求 $f^{(n)}(x_0)$,再利用 Taylor 公式。<!-- src: Chapter14.3-4#p019; type: direct -->
- **间接法**:利用已知的幂级数展开式,再结合**变量代换**、**逐项可导**、**逐项可积**性。<!-- src: Chapter14.3-4#p019; type: direct -->
- **例 3**:将下列函数在 $x_0$ 处展成幂级数:1) $\dfrac{x}{x^2-2x-3}$,$x_0=2$;2) $\dfrac{1}{x^2}$,$x_0=1$。<!-- src: Chapter14.3-4#p019; ref: 例3(14.4); type: direct -->
- **例 4**:设函数 $f(x)=\sum\limits_{n=0}^{\infty}\dfrac{(-1)^n}{(n!)^2}(x-1)^n$,求级数 $\sum\limits_{n=0}^{\infty}f^{(n)}(1)$ 的和。<!-- src: Chapter14.3-4#p020; ref: 例4(14.4); type: direct -->
- **Ex.**:设 $f(x)=x\mathrm{e}^{x^2}$,求 $f^{(n)}(0)\ (n=0,1,2,\cdots)$。<!-- src: Chapter14.3-4#p020; type: direct -->
- **例 5(考研试题)**:设 $y(x)=\sum\limits_{n=0}^{\infty}a_nx^n$ 适合 $y(0)=0,\ y'(0)=1$ 和 $y''-2xy'-4y=0$:
  1) 证明 $a_{n+2}=\dfrac{2}{n+1}a_n,\ n\in\mathbb{N}$;2) 求 $y(x)$ 的表达式。<!-- src: Chapter14.3-4#p020; ref: 例5(14.4); type: direct -->
- 例 4、Ex 体现的一般方法:利用 Taylor 系数唯一性 $a_n=\dfrac{f^{(n)}(x_0)}{n!}$,由已知展开式的系数反求各阶导数 $f^{(n)}(x_0)=n!\,a_n$。<!-- src: Chapter14.3-4#p016 + Chapter14.3-4#p020; type: synthesized -->

### 四、Stirling 公式

- **引理(Wallis)**(已证):

$$
\frac{\pi}{2}=\lim_{n\to\infty}\frac{1}{2n+1}\left(\frac{(2n)!!}{(2n-1)!!}\right)^2.
$$


  <!-- src: Chapter14.3-4#p021; ref: Wallis引理; type: direct -->
- **定理 4(Stirling 公式)**(课件中作为证明任务给出):

$$
n!=\sqrt{2n\pi}\left(\frac{n}{\mathrm{e}}\right)^n\mathrm{e}^{\frac{\theta_n}{12n}}\quad(0<\theta_n<1).
$$


  <!-- src: Chapter14.3-4#p021; ref: 定理4(Stirling公式); type: direct -->
- **例 6**:求极限 $\lim\limits_{n\to\infty}\dfrac{n}{\sqrt[n]{n!}}$。<!-- src: Chapter14.3-4#p022; ref: 例6(14.4); type: direct -->
- **Ex.**:讨论级数 $\sum\limits_{n=1}^{\infty}\dfrac{n!\,\mathrm{e}^n}{n^{n+p}}\ (p\in\mathbb{R})$ 的敛散性。<!-- src: Chapter14.3-4#p022; type: direct -->
- **Euler 公式**:利用幂级数可导出

$$
\mathrm{e}^{\mathrm{i}x}=\cos x+\mathrm{i}\sin x.
$$


  取 $x=\pi$:$\mathrm{e}^{\mathrm{i}\pi}=-1\ \Rightarrow\ \mathrm{e}^{\mathrm{i}\pi}+1=0$(数学中"最美"等式)。<!-- src: Chapter14.3-4#p022; type: direct -->
