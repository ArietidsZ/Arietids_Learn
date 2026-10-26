---
title: "Chap 14 函数项级数 · 速览"
description: "数学分析 II课程笔记：Chap 14 函数项级数 · 速览。"
---

<div class="note-meta"><a href="/courses/analysis-2/">数学分析 II目录</a><a href="/courses/analysis-2/chapter-14/">阅读详版</a><a href="/downloads/analysis-2/chapter-14-quick.md" download>下载 Markdown</a></div>

## 14.1 一致收敛性

- **点态收敛**:$\forall x\in D$,$\lim\limits_{n\to\infty}f_n(x)=f(x)$;$\varepsilon$–$N$ 中 $N=N(x,\varepsilon)$ 依赖 $x$。**一致收敛(定义 3)**:$N=N(\varepsilon)$ 对全体 $x\in D$ 公用,记 $f_n(x)\overset{D}{\rightrightarrows}f(x)$。一致 $\Rightarrow$ 点态,反之不然;一致收敛可传给任意子集。<!-- src: Chapter14.1-2#p003 + Chapter14.1-2#p004 + Chapter14.1-2#p006; type: compressed -->
- **级数语言**:$\sum u_n(x)$ 的收敛性即部分和 $S_n(x)=\sum_{k=1}^n u_k(x)$ 的收敛性,和函数 $S(x)$。<!-- src: Chapter14.1-2#p004; type: compressed -->
- **不一致收敛**:$\exists\varepsilon_0>0$,$\exists\{n_k\}$ 且 $n_k\to\infty$,$\exists x_k\in D$:$|f_{n_k}(x_k)-f(x_k)|\ge\varepsilon_0$(或根本不点态收敛)。<!-- src: Chapter14.1-2#p007; type: compressed -->
- **判别工具**:
  - **Cauchy 准则**:$\forall\varepsilon>0,\exists N,\forall n>N,\forall p\in\mathbb{N},\forall x\in D$:$|f_{n+p}(x)-f_n(x)|<\varepsilon$(和函数难求时用)。<!-- src: Chapter14.1-2#p009; type: compressed -->
  - **确界极限**:$f_n\overset{D}{\rightrightarrows}f\iff\lim\limits_{n\to\infty}\sup\limits_{x\in D}|f_n(x)-f(x)|=0$(极限函数易算时用)。<!-- src: Chapter14.1-2#p010; type: compressed -->
  - **点列极限**:$f_n\overset{D}{\rightrightarrows}f\iff\forall\{x_n\}\subset D$:$|f_n(x_n)-f(x_n)|\to 0$(常用于证不一致:选坏点列)。<!-- src: Chapter14.1-2#p010; type: compressed -->
  - **必要条件**:$\sum u_n(x)$ 一致收敛 $\Rightarrow u_n(x)\overset{D}{\rightrightarrows}0$。<!-- src: Chapter14.1-2#p009; type: compressed -->
- **典型方法(例 7,$f_n=(1+x/n)^n$)**:在 $\mathbb{R}$ 上取 $x_n=n$,$|f_n(x_n)-\mathrm{e}^{x_n}|=\mathrm{e}^n-2^n\to+\infty$ 证不一致;在 $[-1,1]$ 上由 $g_n=\mathrm{e}^x-(1+x/n)^n\ge0$ 的单调性,$\sup\le\max\{g_n(1),g_n(-1)\}\to0$ 证一致。<!-- src: Chapter14.1-2#p011 + Chapter14.1-2#p012; type: compressed -->
- **端点命题**:$u_n\in C[a,b]$,$\sum u_n$ 在 $(a,b)$ 内一致收敛 $\Rightarrow$ 在端点收敛且在 $[a,b]$ 上一致收敛。<!-- src: Chapter14.1-2#p013; type: compressed -->
- **内闭一致收敛(定义 4)**:对 $D$ 中任意闭区间 $I$ 一致收敛;内闭一致 $\Rightarrow$ 点态,但未必在 $D$ 上一致(参看例 9:$x^n$ 在 $(0,1)$)。<!-- src: Chapter14.1-2#p014; type: compressed -->
- **Weierstrass 判别法**:$|u_n(x)|\le M_n$ 且 $\sum M_n$ 收敛(优级数)$\Rightarrow\sum u_n$ 在 $D$ 上一致收敛;绝对一致收敛即 $\sum|u_n|$ 一致收敛。<!-- src: Chapter14.1-2#p015; type: compressed -->
- **A-D 判别法**($\sum u_nv_n$):**Abel** = $\{v_n\}$ 逐点单调 + 一致有界,$\sum u_n$ 一致收敛;**Dirichlet** = $\{v_n\}$ 逐点单调 + 一致趋 $0$,$\sum u_n$ 部分和一致有界。<!-- src: Chapter14.1-2#p016; type: compressed -->
- 易错点:点态收敛的 $N$ 依赖 $x$;一致收敛区间缩小仍一致,但内闭一致 $\ne$ 一致(例 8:$\sum\ln n/n^x$ 在 $(1,+\infty)$ 收敛不一致)。<!-- src: Chapter14.1-2#p006 + Chapter14.1-2#p013 + Chapter14.1-2#p014; type: compressed -->

## 14.2 一致收敛函数级数的性质

- **连续性**:$f_n\in C(D)$,$f_n\overset{D}{\rightrightarrows}f\Rightarrow f\in C(D)$,即 $\lim\limits_{x\to x_0}\lim\limits_{n\to\infty}=\lim\limits_{n\to\infty}\lim\limits_{x\to x_0}$;级数版对一致或内闭一致收敛均成立。**逆否用法**:极限函数不连续 $\Rightarrow$ 不一致收敛。逆命题不成立(反例 $2n\sqrt{x}/(1+n^2x)$ 于 $[0,1]$)。<!-- src: Chapter14.1-2#p019 + Chapter14.1-2#p020; type: compressed -->
- **Dini 定理**:$f_n\in C[a,b]$ + 关于 $n$ 逐点单调 + 点态收敛于连续的 $f$ $\Rightarrow$ 一致收敛(三个条件缺一不可)。应用:例 2*,$f\in C[0,1]$,$f(1)=0\Rightarrow\{x^nf(x)\}$ 一致收敛,特例 $\{x^n(1-x)\}$。<!-- src: Chapter14.1-2#p021 + Chapter14.1-2#p022; type: compressed -->
- **积分号下取极限**:$f_n\in C[a,b]$(可减弱为 $R[a,b]$),$f_n\overset{[a,b]}{\rightrightarrows}f\Rightarrow\lim\int_a^b f_n=\int_a^b f$;级数版 = **逐项可积**:$\int_a^b\sum u_n=\sum\int_a^b u_n$。<!-- src: Chapter14.1-2#p023; type: compressed -->
- **微分号下取极限**:$f_n\xrightarrow{[a,b]}f$(点态即可)+ $f_n'\in C[a,b]$ + $\{f_n'\}$ 一致收敛 $\Rightarrow f'\in C[a,b]$ 且 $\lim f_n'=(\lim f_n)'$;级数版 = **逐项可微**:$S'=\sum u_n'$(注意:一致收敛的是**导数级数**)。<!-- src: Chapter14.1-2#p024; type: compressed -->
- 综合套路(例 3/例 5):整体不一致收敛时,用**内闭一致收敛**证开区间上的连续性与逐项求导。<!-- src: Chapter14.1-2#p025; type: compressed -->

## 14.3 幂级数

- **Cauchy–Hadamard**:$\rho=\varlimsup\limits_{n\to\infty}\sqrt[n]{|a_n|}$,收敛半径 $r=1/\rho$(约定 $1/0=+\infty,\ 1/(+\infty)=0$),收敛区间 $(-r,r)$ 内绝对收敛,$|x|>r$ 发散;比值版 $r=\lim|a_n|/|a_{n+1}|$(广义极限存在时)。**缺项幂级数不能直接用比值法**。收敛域 = 半径 + 端点逐一检验。<!-- src: Chapter14.3-4#p003 + Chapter14.3-4#p004; type: compressed -->
- **Abel I**:在 $x_1\ne0$ 收敛 $\Rightarrow|x|<|x_1|$ 绝对收敛;在 $x_2$ 发散 $\Rightarrow|x|>|x_2|$ 发散。**推论**:条件收敛点到中心的距离 = 收敛半径。<!-- src: Chapter14.3-4#p005; type: compressed -->
- **Abel II**:在 $(-r,r)$ 内闭一致收敛;若 $x=r$ 收敛则在 $[0,r]$ 一致收敛(内闭一致收敛是幂级数特性)。<!-- src: Chapter14.3-4#p006; type: compressed -->
- **Abel III**:在 $(-r,r]$ 收敛 $\Rightarrow$ 和函数在 $x=r$ 左连续:$\lim\limits_{x\to r^-}\sum a_nx^n=\sum a_nr^n$;逆不成立(反例 $\frac{1}{1+x}=\sum(-1)^nx^n$)。<!-- src: Chapter14.3-4#p009; type: compressed -->
- **分析性质**:导数级数 $\sum na_nx^{n-1}$、积分级数 $\sum\frac{a_n}{n+1}x^{n+1}$ 与原级数**同收敛半径**(端点可不同);在 $(-r,r)$ 内和函数连续、可逐项求导、可逐项积分。<!-- src: Chapter14.3-4#p007 + Chapter14.3-4#p008; type: compressed -->
- 求和函数(例 3):$\sum\frac{x^n}{n}$、$\sum n^2x^{n-1}$、$\sum\frac{x^n}{n!}$ —— 通过逐项求导/积分化归已知展开式。<!-- src: Chapter14.3-4#p010 + Chapter14.3-4#p019; type: compressed -->

## 14.4 函数的幂级数展开

- **Taylor 级数**:$f(x)\sim\sum\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n$("$\sim$" 不能随意写 "$=$";$x_0=0$ 为 Maclaurin 级数;反例:$\mathrm{e}^{-1/x^2}$ 型函数)。<!-- src: Chapter14.3-4#p012 + Chapter14.3-4#p013; type: compressed -->
- **= 成立的判据**:定理 1:$f=\sum\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n\iff R_n(x)\to0$;定理 2(充分):各阶导数在 $I$ 上一致有界 $|f^{(n)}(x)|\le M$;定理 3(唯一性):若 $f$ 可展开为幂级数,系数必为 $a_n=\frac{f^{(n)}(x_0)}{n!}$。<!-- src: Chapter14.3-4#p014 + Chapter14.3-4#p015 + Chapter14.3-4#p016; type: compressed -->
- **五个基本展开式**:$\mathrm{e}^x=\sum_{n=0}^{\infty}\frac{x^n}{n!}$($\mathbb{R}$);$\sin x=\sum_{n=1}^{\infty}(-1)^{n-1}\frac{x^{2n-1}}{(2n-1)!}$($\mathbb{R}$);$\cos x=\sum_{n=0}^{\infty}(-1)^n\frac{x^{2n}}{(2n)!}$($\mathbb{R}$);$\ln(1+x)=x-\frac{x^2}{2}+\frac{x^3}{3}-\cdots$($-1<x\le1$);$(1+x)^\alpha=1+\alpha x+\frac{\alpha(\alpha-1)}{2!}x^2+\cdots$($-1<x<1$)。特例:$\frac{1}{1-x}=\sum_{n=0}^{\infty}x^n$($|x|<1$);$\frac{1}{\sqrt{1-x}}=1+\sum_{n=1}^{\infty}\frac{(2n-1)!!}{(2n)!!}x^n$($-1\le x<1$)。<!-- src: Chapter14.3-4#p017 + Chapter14.3-4#p018; type: compressed -->
- **展开方法**:直接法(求 $f^{(n)}(x_0)$ + Taylor 公式)与间接法(已知展开式 + 变量代换 + 逐项导/积);求 $f^{(n)}(x_0)$ 的技巧:由展开式系数读出 $f^{(n)}(x_0)=n!\,a_n$(例 4、Ex)。<!-- src: Chapter14.3-4#p019 + Chapter14.3-4#p020; type: compressed -->
- **Stirling 公式**:$n!=\sqrt{2n\pi}\left(\frac{n}{\mathrm{e}}\right)^n\mathrm{e}^{\theta_n/(12n)}$($0<\theta_n<1$);配套 Wallis 引理 $\frac{\pi}{2}=\lim\limits_{n\to\infty}\frac{1}{2n+1}\left(\frac{(2n)!!}{(2n-1)!!}\right)^2$;应用:$\lim\frac{n}{\sqrt[n]{n!}}$、$\sum\frac{n!\mathrm{e}^n}{n^{n+p}}$ 敛散性。<!-- src: Chapter14.3-4#p021 + Chapter14.3-4#p022; type: compressed -->
- **Euler 公式**:$\mathrm{e}^{\mathrm{i}x}=\cos x+\mathrm{i}\sin x$,取 $x=\pi$ 得 $\mathrm{e}^{\mathrm{i}\pi}+1=0$。<!-- src: Chapter14.3-4#p022; type: compressed -->
