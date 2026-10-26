---
title: "Chap 15 Fourier 级数（15.1–15.3 速览）"
description: "数学分析 II课程笔记：Chap 15 Fourier 级数（15.1–15.3 速览）。"
---

<div class="note-meta"><a href="/courses/analysis-2/">数学分析 II目录</a><a href="/courses/analysis-2/chapter-15/">阅读详版</a><a href="/downloads/analysis-2/chapter-15-quick.md" download>下载 Markdown</a></div>

## 15.1 Fourier 级数：基本概念

- **三角函数系** $\{1,\cos x,\sin x,\cdots,\cos nx,\sin nx,\cdots\}$ 的核心特点是**正交性**：$\int_{-\pi}^{\pi}\cos mx\cos nx\,\mathrm{d}x$ 当 $m\neq n$ 为 $0$、$m=n\neq 0$ 为 $\pi$、$m=n=0$ 为 $2\pi$；$\int_{-\pi}^{\pi}\sin mx\sin nx\,\mathrm{d}x$ 当 $m\neq n$ 为 $0$、$m=n$ 为 $\pi$；$\int_{-\pi}^{\pi}\sin mx\cos nx\,\mathrm{d}x=0$。<!-- src: Chapter15.1-3#p006; type: compressed -->
- **Fourier 系数公式**（由正交性导出）：$a_n=\dfrac{1}{\pi}\displaystyle\int_{-\pi}^{\pi}f(x)\cos nx\,\mathrm{d}x\ (n=0,1,2,\cdots)$，$b_n=\dfrac{1}{\pi}\displaystyle\int_{-\pi}^{\pi}f(x)\sin nx\,\mathrm{d}x\ (n=1,2,\cdots)$。<!-- src: Chapter15.1-3#p007; type: compressed -->
- **可积与绝对可积**：$f\in R[-\pi,\pi]$，或瑕积分 $\int_{-\pi}^{\pi}f(x)\,\mathrm{d}x$ 绝对收敛（两条件之一）。<!-- src: Chapter15.1-3#p008; type: compressed -->
- **F 氏级数定义**：$f$ 以 $2\pi$ 为周期、在 $[-\pi,\pi]$ 上可积与绝对可积，以其 Fourier 系数构成的三角级数记为 $f(x)\sim\dfrac{a_0}{2}+\sum_{n=1}^{\infty}(a_n\cos nx+b_n\sin nx)$；注意正确理解"$\sim$"的含义。<!-- src: Chapter15.1-3#p009; type: compressed -->
- **正弦级数**：$f$ 为奇函数 $\Rightarrow a_n=0$，$b_n=\dfrac{2}{\pi}\displaystyle\int_0^{\pi}f(x)\sin nx\,\mathrm{d}x$，$f(x)\sim\sum b_n\sin nx$；若 $f$ 仅在 $[0,\pi]$ 上定义，作**奇延拓**后同此公式。<!-- src: Chapter15.1-3#p010 + Chapter15.1-3#p011; type: compressed -->
- 引例背景：Fourier 级数源于热流问题——分离变量 $T=\varphi(x)\psi(t)$ 得非零特征解对应的 $\lambda_n=(n\pi/l)^2\ (n=1,2,\cdots)$ 与解的叠加，初始条件要求 $f(x)=\sum b_n\sin\frac{n\pi}{l}x$，引出"函数能否展开成三角级数"的问题。<!-- src: Chapter15.1-3#p002 + Chapter15.1-3#p003 + Chapter15.1-3#p004; type: compressed -->

## 15.2 收敛性

- **n 阶 Fourier 多项式**：$S_n(f,x)=\dfrac{a_0}{2}+\sum_{k=1}^{n}(a_k\cos kx+b_k\sin kx)$。<!-- src: Chapter15.1-3#p013; type: compressed -->
- **Dirichlet 积分**：$S_n(f,x)=\dfrac{1}{\pi}\displaystyle\int_0^{\pi}[f(x+u)+f(x-u)]\,D_n(u)\,\mathrm{d}u$，积分核 $D_n(u)=\dfrac{\sin\frac{2n+1}{2}u}{2\sin\frac{u}{2}}$，且 $\dfrac{2}{\pi}\displaystyle\int_0^{\pi}D_n(u)\,\mathrm{d}u=1$。<!-- src: Chapter15.1-3#p014 + Chapter15.1-3#p015; type: compressed -->
- **收敛充要条件**：$S_n(f,x)\to S(x)\iff\dfrac{1}{\pi}\displaystyle\int_0^{\pi}[f(x+u)+f(x-u)-2S(x)]\,D_n(u)\,\mathrm{d}u\to 0$。<!-- src: Chapter15.1-3#p015; type: compressed -->
- **Riemann 引理**：$f$ 在 $[a,b]$ 上可积与绝对可积 $\Rightarrow\displaystyle\lim_{p\to+\infty}\int_a^b f(u)\sin pu\,\mathrm{d}u=0$（$\cos$ 同）。**局部性定理**：F 氏级数在 $x$ 处的收敛性与收敛值仅与 $f$ 在 $U(x)$ 的值相关。<!-- src: Chapter15.1-3#p016; type: compressed -->
- **重要积分**：$\displaystyle\int_0^{+\infty}\frac{\sin x}{x}\,\mathrm{d}x=\frac{\pi}{2}$。<!-- src: Chapter15.1-3#p017; type: compressed -->
- **Dini 定理**：$\dfrac{f(x+u)+f(x-u)-2S(x)}{u}$ 在某 $[0,\delta]$ 上可积与绝对可积 $\Rightarrow S_n(f,x)\to S(x)$。<!-- src: Chapter15.1-3#p018; type: compressed -->
- **Dirichlet 引理**：$g$ 在 $[0,h]$ 上单调（或分段单调、分段单调之和）$\Rightarrow\displaystyle\lim_{p\to+\infty}\int_0^h g(u)\frac{\sin pu}{u}\,\mathrm{d}u=\frac{\pi}{2}g(0+0)$。<!-- src: Chapter15.1-3#p019; type: compressed -->
- **收敛性判别法**（前提：以 $2\pi$ 为周期、在 $[-\pi,\pi]$ 上可积与绝对可积，并满足下列条件之一）：
  - **Dirichlet–Jordan**：$f$ 在 $U(x,\delta]$ 上分段单调或为分段单调函数之和；
  - **Dini–Lipschitz**：$f$ 在 $x$ 处满足指数 $\alpha\in(0,1]$ 的 Hölder 条件 $|f(x\pm u)-f(x\pm 0)|\le Lu^{\alpha}$；
  则 F 氏级数在 $x$ 处收敛于 $\dfrac{f(x+0)+f(x-0)}{2}$。<!-- src: Chapter15.1-3#p020; type: compressed -->
- **和函数取值**（至多有限个第一类间断点 + 有限个严格极值点）：连续点取 $f(x)$；间断点取 $\dfrac{f(x+0)+f(x-0)}{2}$；$x=\pm\pi$ 取 $\dfrac{f(-\pi+0)+f(\pi-0)}{2}$。<!-- src: Chapter15.1-3#p021; type: compressed -->
- **推论**：在 $x$ 处有左、右导数或**拟左、右导数**（$\lim_{u\to 0^+}\frac{f(x-u)-f(x-0)}{-u}$、$\lim_{u\to 0^+}\frac{f(x+u)-f(x+0)}{u}$）$\Rightarrow$ 收敛于 $\dfrac{f(x+0)+f(x-0)}{2}$。<!-- src: Chapter15.1-3#p022; type: compressed -->
- **常用展开结果**：
  - $x^2\sim\dfrac{\pi^2}{3}+4\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^n}{n^2}\cos nx=x^2\ (-\pi\le x\le\pi)$。<!-- src: Chapter15.1-3#p023ex1; type: compressed -->
  - $f=\begin{cases}0,&-\pi<x<0\\ x,&0\le x\le\pi\end{cases}$：$f(x)\sim\dfrac{\pi}{4}+\displaystyle\sum_{n=1}^{\infty}\Bigl\{\frac{(-1)^n-1}{n^2\pi}\cos nx+\frac{(-1)^{n-1}}{n}\sin nx\Bigr\}$，$x=\pm\pi$ 处和为 $\dfrac{\pi}{2}$。<!-- src: Chapter15.1-3#p023ex2; type: compressed -->
  - 方波 $f=\begin{cases}1,&-\pi\le x<0\\ 0,&0\le x<\pi\end{cases}$：$f(x)\sim\dfrac12-\dfrac{2}{\pi}\Bigl(\sin x+\dfrac{\sin 3x}{3}+\dfrac{\sin 5x}{5}+\cdots\Bigr)$，$x=0,\pm\pi$ 处和为 $\dfrac12$；部分和 $S_1,S_5,S_{15}$ 随 $m$ 增大逐渐贴近方波（正弦波叠加）。<!-- src: Chapter15.1-3#p024ex1 + Chapter15.1-3#p024g2; type: compressed -->

## 15.3 性质

- **逐项积分定理**：$f$ 在 $[-\pi,\pi]$ 上分段连续（对可积与绝对可积的 $f$ 也成立）$\Rightarrow\displaystyle\int_0^x f(t)\,\mathrm{d}t=\frac{a_0}{2}x+\sum_{n=1}^{\infty}\Bigl(\frac{a_n}{n}\sin nx-\frac{b_n}{n}\cos nx+\frac{b_n}{n}\Bigr)$，$\forall x\in[-\pi,\pi]$。<!-- src: Chapter15.1-3#p027 + Chapter15.1-3#p028; type: compressed -->
- **必要条件**：$f$ 可积与绝对可积 $\Rightarrow\displaystyle\sum_{n=1}^{\infty}\frac{b_n}{n}$ 收敛（$=\frac{1}{2\pi}\int_{-\pi}^{\pi}\bigl(\int_0^x f(t)\,\mathrm{d}t\bigr)\,\mathrm{d}x$）；故 $\sum\frac{b_n}{n}$ 发散的三角级数必不是 F 氏级数——如 $\displaystyle\sum_{n=2}^{\infty}\frac{\sin nx}{\ln n}$ 点态收敛但不是其和函数的 F 氏级数。<!-- src: Chapter15.1-3#p028 + Chapter15.1-3#p029 + Chapter15.1-3#p029ex1; type: compressed -->
- **逐项微分定理**：$f\in D[-\pi,\pi]$，$f(-\pi)=f(\pi)$，$f'$ 可积与绝对可积 $\Rightarrow f'(x)\sim\displaystyle\sum_{n=1}^{\infty}(nb_n\cos nx-na_n\sin nx)$。<!-- src: Chapter15.1-3#p030; type: compressed -->
- **平方平均偏差距离**：$d(f,g)=\Bigl(\dfrac{1}{\pi}\displaystyle\int_{-\pi}^{\pi}[f(x)-g(x)]^2\,\mathrm{d}x\Bigr)^{1/2}$；$X=\{f\mid f\text{ 在 }[-\pi,\pi]\text{ 上可积与平方可积}\}$。<!-- src: Chapter15.1-3#p031 + Chapter15.1-3#p032; type: compressed -->
- **最佳逼近**：$f\in X\Rightarrow$ 对一切 n 阶三角多项式 $T_n$ 有 $d(f,S_n(x))\le d(f,T_n(x))$（Fourier 部分和最优）。<!-- src: Chapter15.1-3#p032; type: compressed -->
- **Bessel 不等式**：$f\in X\Rightarrow\dfrac{a_0^2}{2}+\displaystyle\sum_{n=1}^{\infty}(a_n^2+b_n^2)\le\frac{1}{\pi}\int_{-\pi}^{\pi}f^2(x)\,\mathrm{d}x$；从而该级数收敛、$a_n\to 0$、$b_n\to 0$。<!-- src: Chapter15.1-3#p032 + Chapter15.1-3#p033; type: compressed -->
- **一致收敛充分条件**：$f$ 除有限点外可导、有限点处单侧可导、$f(-\pi)=f(\pi)$、$f'$ 可积与平方可积 $\Rightarrow$ F 氏级数在 $[-\pi,\pi]$ 上一致收敛于 $f$。<!-- src: Chapter15.1-3#p033; type: compressed -->
- **Parseval 等式**：$f\in X\Rightarrow\{S_n\}$ 平方平均收敛于 $f$（$d(f,S_n)\to 0$），且 $\dfrac{a_0^2}{2}+\displaystyle\sum_{n=1}^{\infty}(a_n^2+b_n^2)=\frac{1}{\pi}\int_{-\pi}^{\pi}f^2(x)\,\mathrm{d}x$；例：对 $x^2$ 的展开用 Parseval 等式求 $\sum\frac{1}{n^4}$。<!-- src: Chapter15.1-3#p034 + Chapter15.1-3#p034ex1; type: compressed -->
- **唯一性**：$f\in C[-\pi,\pi]$ 与三角函数系每一项都正交 $\Rightarrow f\equiv 0$；$f,g\in C[-\pi,\pi]$ 的 F 氏系数相等 $\Rightarrow f\equiv g$。<!-- src: Chapter15.1-3#p035; type: compressed -->
- **乘积积分公式**：$f,g\in X$，系数 $a_n,b_n$ 与 $\bar a_n,\bar b_n\Rightarrow\dfrac{1}{\pi}\displaystyle\int_{-\pi}^{\pi}f(x)g(x)\,\mathrm{d}x=\frac{a_0\bar a_0}{2}+\sum_{n=1}^{\infty}(a_n\bar a_n+b_n\bar b_n)$。<!-- src: Chapter15.1-3#p035; type: compressed -->
