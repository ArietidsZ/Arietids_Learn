---
title: "Chap 15 Fourier 级数（15.1–15.3）"
description: "数学分析 II课程笔记：Chap 15 Fourier 级数（15.1–15.3）。"
---

<div class="note-meta"><a href="/courses/analysis-2/">数学分析 II目录</a><a href="/courses/analysis-2/chapter-15-quick/">阅读速览</a><a href="/downloads/analysis-2/chapter-15.md" download>下载 Markdown</a></div>

## 引例：杆状物热流问题与三角级数的提出

- **背景**：1807 年，Fourier 研究杆状物热流问题。<!-- src: Chapter15.1-3#p002; type: direct -->
- **定解问题**：$T = T(x,t)$ 表示 $t$ 时刻杆子 $x$ 处的温度，满足

$$
\begin{cases}
\dfrac{\partial^2 T}{\partial x^2} = \dfrac{\partial T}{\partial t}, & T = T(x,t),\\[2mm]
T(0,t) = T(l,t) = 0, & t>0 \quad (\text{边界条件}),\\[1mm]
T(x,0) = f(x), & 0<x<l \quad (\text{初始条件}).
\end{cases}
$$


<!-- src: Chapter15.1-3#p002; type: direct -->

- **分离变量**：设 $T(x,t)=\varphi(x)\,\psi(t)$，则 $\varphi''(x)\psi(t)=\varphi(x)\psi'(t)$，从而 $\dfrac{\varphi''(x)}{\varphi(x)}=\dfrac{\psi'(t)}{\psi(t)}=-\lambda\quad(\lambda>0)$。<!-- src: Chapter15.1-3#p002; type: direct -->
- **导出方程组**：

$$
\begin{cases}
\varphi''(x)+\lambda\varphi(x)=0, & \cdots(1)\\
\varphi(0)=\varphi(l)=0, & \\
\psi'(t)+\lambda\psi(t)=0. & \cdots(2)
\end{cases}
$$


<!-- src: Chapter15.1-3#p003; type: direct -->

- **解方程 (1)**：得 $\varphi(x)=b\sin\sqrt{\lambda}\,x+c\cos\sqrt{\lambda}\,x$；由 $\varphi(0)=0$ 得 $c=0$；由 $\varphi(l)=0$ 得 $\sin\sqrt{\lambda}\,l=0$，导出 $\sqrt{\lambda}\,l=n\pi \Rightarrow \lambda_n=\left(\dfrac{n\pi}{l}\right)^2$，非零解取 $n=1,2,\cdots$，于是 $\varphi(x)=b_n\sin\dfrac{n\pi}{l}x$。<!-- src: Chapter15.1-3#p003; type: compressed -->
- **解方程 (2)**：得 $\psi(t)=C e^{-\lambda t}$，取 $C=1$（课件设问：为什么可以？）。<!-- src: Chapter15.1-3#p003; type: direct -->
- **得一个解**：$T_n(x,t)=b_n\exp\!\left(-\left(\dfrac{n\pi}{l}\right)^2 t\right)\sin\dfrac{n\pi}{l}x$；**叠加得** $T(x,t)=\displaystyle\sum_{n=1}^{\infty} b_n\exp\!\left(-\left(\dfrac{n\pi}{l}\right)^2 t\right)\sin\dfrac{n\pi}{l}x$；令 $t=0$ 有 $f(x)=\displaystyle\sum_{n=1}^{\infty}b_n\sin\dfrac{n\pi}{l}x$，进而确定 $b_n$。<!-- src: Chapter15.1-3#p004; type: compressed -->
- **问题**：$[0,l]$ 上函数 $f(x)$ 总能表示成三角函数之和？即

$$
f(x)=\frac{a_0}{2}+\sum_{n=1}^{\infty}\left(a_n\cos\frac{n\pi}{l}x+b_n\sin\frac{n\pi}{l}x\right)
$$


右端称为**三角级数**，其中 $a_0,a_n,b_n\ (n=1,2,\cdots)$ 称为**系数**。**思考**：如何确定系数 $a_0,a_n,b_n$？<!-- src: Chapter15.1-3#p004; type: direct -->

## 15.1 Fourier 级数

### 一、三角函数系

- **三角函数系**：函数集合 $\{1,\cos x,\sin x,\cdots,\cos nx,\sin nx,\cdots\}$。<!-- src: Chapter15.1-3#p006; type: direct -->
- **三角函数系的特点：正交性**：

$$
1)\ \int_{-\pi}^{\pi}\cos mx\cos nx\,\mathrm{d}x=
\begin{cases}
0, & m\neq n\\
\pi, & m=n\neq 0\\
2\pi, & m=n=0
\end{cases}
\quad (m,n=0,1,2,\cdots)
$$


$$
2)\ \int_{-\pi}^{\pi}\sin mx\sin nx\,\mathrm{d}x=
\begin{cases}
0, & m\neq n\\
\pi, & m=n
\end{cases}
\quad (m,n=1,2,\cdots)
$$


$$
3)\ \int_{-\pi}^{\pi}\sin mx\cos nx\,\mathrm{d}x=0
\quad (m=1,2,\cdots;\ n=0,1,\cdots)
$$


<!-- src: Chapter15.1-3#p006; type: direct -->

- 注：第 1) 式按正交性应允许 $m,n=0$；课件右侧范围标注印作 $(m,n=1,2,\cdots)$。<!-- src: Chapter15.1-3#p006; type: one-step-inferred -->

### 二、Fourier 级数

- **展开假设**：设在 $[-\pi,\pi]$ 上函数 $f(x)$ 可展开为三角级数，即 $f(x)=\dfrac{a_0}{2}+\displaystyle\sum_{n=1}^{\infty}(a_n\cos nx+b_n\sin nx)$。**问题**：级数的系数 $a_n,b_n$ 与 $f(x)$ 有什么关系？<!-- src: Chapter15.1-3#p007; type: direct -->
- **结论（Fourier 系数公式）**：利用正交性，可得

$$
a_n=\frac{1}{\pi}\int_{-\pi}^{\pi}f(x)\cos nx\,\mathrm{d}x,\quad n=0,1,2,\cdots;
\qquad
b_n=\frac{1}{\pi}\int_{-\pi}^{\pi}f(x)\sin nx\,\mathrm{d}x,\quad n=1,2,\cdots.
$$


<!-- src: Chapter15.1-3#p007; type: direct -->

- **可积与绝对可积**：函数 $f$ 满足下两条件之一：① $f\in R[-\pi,\pi]$；② 瑕积分 $\int_{-\pi}^{\pi}f(x)\,\mathrm{d}x$ 绝对收敛。<!-- src: Chapter15.1-3#p008; type: direct -->
- **定义（Fourier 级数）**：设 $f(x)$ 以 $2\pi$ 为周期，且在 $[-\pi,\pi]$ 上可积与绝对可积，以 $f$ 的 Fourier 系数 $a_n,b_n$ 为系数的三角级数称为 $f(x)$ 的 Fourier 级数（F 氏级数），记为

$$
f(x)\sim\frac{a_0}{2}+\sum_{n=1}^{\infty}(a_n\cos nx+b_n\sin nx)
$$


<!-- src: Chapter15.1-3#p009; type: direct -->

- **注意**：正确理解符号"$\sim$"的含义！<!-- src: Chapter15.1-3#p009; type: direct -->
- **例 1**：求 $f(x)=\begin{cases}0, & -\pi<x<0,\\ x, & 0\le x<\pi\end{cases}$ 的 F 氏级数。<!-- src: Chapter15.1-3#p009ex1; type: direct -->
  - 该函数的 F 氏级数展开式及和函数见 15.2 节例 2。<!-- src: Chapter15.1-3#p009ex1 + Chapter15.1-3#p023ex2; type: synthesized -->

### 三、正弦和余弦级数

- **正弦级数（奇函数情形）**：设 $f(x)$ 在 $[-\pi,\pi]$ 上可积与绝对可积，且为**奇函数**，则其 Fourier 系数中 $a_n=0$，

$$
b_n=\frac{1}{\pi}\int_{-\pi}^{\pi}f(x)\sin nx\,\mathrm{d}x=\frac{2}{\pi}\int_{0}^{\pi}f(x)\sin nx\,\mathrm{d}x
$$


其 Fourier 级数 $f(x)\sim\displaystyle\sum_{n=1}^{\infty}b_n\sin nx$ 称为**正弦级数**。<!-- src: Chapter15.1-3#p010; type: direct -->

- **想一想**：余弦级数的定义？<!-- src: Chapter15.1-3#p010; type: direct -->
- **约定（奇延拓）**：若 $f$ 仅在 $[0,\pi]$（或 $[-\pi,0]$）上可积与绝对可积，对 $f$ 作**奇延拓**后所得函数 $f_o$ 的 F 氏（正弦）级数也称为 $f$ 的**正弦级数**，此时

$$
b_n=\frac{2}{\pi}\int_{0}^{\pi}f(x)\sin nx\,\mathrm{d}x
$$


<!-- src: Chapter15.1-3#p011; type: direct -->

- **想一想**：仅在 $[0,\pi]$ 上定义的函数的余弦级数？<!-- src: Chapter15.1-3#p011; type: direct -->
- **例 2**：求 $f(x)=x^2\ (x\in[0,\pi])$ 的正弦和余弦级数。<!-- src: Chapter15.1-3#p011ex1; type: direct -->

## 15.2 Fourier 级数的收敛性

### 一、Dirichlet 积分

- **n 阶 Fourier 多项式（部分和函数）**：设 $f$ 以 $2\pi$ 为周期，在 $[-\pi,\pi]$ 上可积与绝对可积，且 $f(x)\sim\dfrac{a_0}{2}+\displaystyle\sum_{n=1}^{\infty}(a_n\cos nx+b_n\sin nx)$，其部分和函数

$$
S_n(f,x)=\frac{a_0}{2}+\sum_{k=1}^{n}(a_k\cos kx+b_k\sin kx)
$$


称为 $f$ 的 **n 阶 Fourier 多项式**。<!-- src: Chapter15.1-3#p013; type: direct -->

- **结论（Dirichlet 积分）**：

$$
S_n(f,x)=\frac{1}{\pi}\int_{-\pi}^{\pi}f(x+u)\,\frac{\sin\dfrac{2n+1}{2}u}{2\sin\dfrac{u}{2}}\,\mathrm{d}u
=\frac{1}{\pi}\int_{0}^{\pi}\bigl[f(x+u)+f(x-u)\bigr]\,\frac{\sin\dfrac{2n+1}{2}u}{2\sin\dfrac{u}{2}}\,\mathrm{d}u
$$


其中 $D_n(u)\overset{\text{def}}{=}\dfrac{\sin\dfrac{2n+1}{2}u}{2\sin\dfrac{u}{2}}$ 称为 **Dirichlet 积分核**。<!-- src: Chapter15.1-3#p014; type: direct -->

- **简单事实**：

$$
\frac{2}{\pi}\int_{0}^{\pi}D_n(u)\,\mathrm{d}u=\frac{2}{\pi}\int_{0}^{\pi}\left(\frac{1}{2}+\sum_{k=1}^{n}\cos ku\right)\mathrm{d}u=1
$$


<!-- src: Chapter15.1-3#p015; type: direct -->

- **命题（收敛于 $S(x)$ 的充要条件）**：设 $S(x)$ 是任一给定函数，则

$$
\lim_{n\to\infty}S_n(f,x)=S(x)
\iff
\lim_{n\to\infty}\frac{1}{\pi}\int_{0}^{\pi}\bigl[f(x+u)+f(x-u)-2S(x)\bigr]\,D_n(u)\,\mathrm{d}u=0
$$


<!-- src: Chapter15.1-3#p015; type: direct -->

### 二、局部性定理

- **Riemann 引理**：设 $f$ 在 $[a,b]$ 上可积与绝对可积，则

$$
\lim_{p\to+\infty}\int_{a}^{b}f(u)\sin pu\,\mathrm{d}u=0=\lim_{p\to+\infty}\int_{a}^{b}f(u)\cos pu\,\mathrm{d}u
$$


<!-- src: Chapter15.1-3#p016; type: direct -->

- **定理（局部性）**：设 $f(x)$ 以 $2\pi$ 为周期，在 $[-\pi,\pi]$ 上可积与绝对可积，则 $f$ 的 F 氏级数在 $x$ 处的收敛性及收敛时的值仅与 $f$ 在 $U(x)$ 的值相关。<!-- src: Chapter15.1-3#p016; type: direct -->
- **推论 1**：同局部性定理假设，则 $\forall\delta>0$：

$$
\lim_{n\to\infty}\frac{1}{\pi}\int_{0}^{\delta}\frac{f(x+u)+f(x-u)-2S(x)}{2\sin\dfrac{u}{2}}\cdot\sin\frac{2n+1}{2}u\,\mathrm{d}u
=\lim_{n\to\infty}\frac{1}{\pi}\int_{0}^{\delta}\frac{f(x+u)+f(x-u)-2S(x)}{u}\cdot\sin\frac{2n+1}{2}u\,\mathrm{d}u
$$


注：假设该极限存在。<!-- src: Chapter15.1-3#p017; type: direct -->

- **推论 2**：

$$
\int_{0}^{+\infty}\frac{\sin x}{x}\,\mathrm{d}x=\frac{\pi}{2}
$$


<!-- src: Chapter15.1-3#p017; type: direct -->

- **定理（Dini）**：设 $f$ 满足局部性定理条件，且 $\exists\,\delta\in(0,\pi)$ 使 $\dfrac{f(x+u)+f(x-u)-2S(x)}{u}$ 在 $[0,\delta]$ 上可积与绝对可积，则 $\displaystyle\lim_{n\to\infty}S_n(f,x)=S(x)$。<!-- src: Chapter15.1-3#p018; type: direct -->

### 三、F 氏级数收敛性判别法

- **Dirichlet 引理**：设 $g$ 在 $[0,h]$ 上单调，则

$$
\lim_{p\to+\infty}\int_{0}^{h}\frac{g(u)-g(0+0)}{u}\sin pu\,\mathrm{d}u=0 \qquad (\Delta)
$$


**等价形式**：$\displaystyle\lim_{p\to+\infty}\int_{0}^{h}g(u)\,\frac{\sin pu}{u}\,\mathrm{d}u=\frac{\pi}{2}\,g(0+0)$。<!-- src: Chapter15.1-3#p019; type: direct -->

- **定义（分段单调函数）**：设 $f:[a,b]\to\mathbb{R}$，若可将 $[a,b]$ 分为有限个子区间，使 $f$ 在每个开子区间上单调有界，则称 $f$ 为**分段单调函数**。<!-- src: Chapter15.1-3#p019; type: direct -->
- **推论**：若 $g$ 在 $[0,h]$ 上为分段单调或为分段单调函数之和，则 $(\Delta)$ 式仍成立。<!-- src: Chapter15.1-3#p019; type: direct -->
- **定理（收敛性判别法）**：设 $f$ 以 $2\pi$ 为周期，在 $[-\pi,\pi]$ 上可积与绝对可积，且满足下面两条件之一，则 $f$ 的 F 氏级数在 $x$ 处收敛于 $\dfrac{f(x+0)+f(x-0)}{2}$：
  - **(Dirichlet–Jordan)** $f$ 在 $U(x,\delta]$ 上分段单调或为分段单调函数之和；
  - **(Dini–Lipschitz)** $f$ 在 $x$ 处满足指数为 $\alpha\in(0,1]$ 的 Hölder 条件，即 $|f(x\pm u)-f(x\pm 0)|\le L u^{\alpha}$。<!-- src: Chapter15.1-3#p020; type: direct -->
- **推论 1（和函数表达式）**：设 $f$ 以 $2\pi$ 为周期，在 $[-\pi,\pi]$ 上至多有限个第一类间断点，且仅有有限个严格极值点，则

$$
f(x)\sim\frac{a_0}{2}+\sum_{n=1}^{\infty}(a_n\cos nx+b_n\sin nx)
=\begin{cases}
f(x), & x\ \text{为连续点},\\[1mm]
\dfrac{f(x+0)+f(x-0)}{2}, & x\ \text{为间断点},\\[2mm]
\dfrac{f(-\pi+0)+f(\pi-0)}{2}, & x=\pm\pi
\end{cases}
\;=S(x)
$$


**思考**：如何求 $S(x)$ 在 $[-\pi,\pi]$ 以外点处的值？<!-- src: Chapter15.1-3#p021; type: direct -->

- **推论 2**：设 $f$ 以 $2\pi$ 为周期，在 $[-\pi,\pi]$ 上可积与绝对可积，且在 $x$ 处有左、右导数（或**拟左、右导数**），则 $f$ 的 F 氏级数在 $x$ 处收敛于 $\dfrac{f(x+0)+f(x-0)}{2}$。<!-- src: Chapter15.1-3#p022; type: direct -->
- **定义（拟左、右导数）**：$f$ 在 $x$ 处的拟左、右导数分别定义为

$$
\lim_{u\to 0^{+}}\frac{f(x-u)-f(x-0)}{-u}
\quad\text{和}\quad
\lim_{u\to 0^{+}}\frac{f(x+u)-f(x+0)}{u}
$$


<!-- src: Chapter15.1-3#p022; type: direct -->

### 例题：和函数的写出

- **例 1**：写出 $f(x)=x^2\ (x\in[-\pi,\pi])$ 的 F 氏级数的和函数在 $[-\pi,\pi]$ 上的表达式：

$$
x^2\sim\frac{\pi^2}{3}+4\sum_{n=1}^{\infty}\frac{(-1)^n}{n^2}\cos nx=x^2\quad(-\pi\le x\le\pi)
$$


<!-- src: Chapter15.1-3#p023ex1; type: direct -->

- **例 2**：写出 $f(x)=\begin{cases}0, & -\pi<x<0,\\ x, & 0\le x\le\pi\end{cases}$ 的 F 氏级数的和函数在 $[-\pi,\pi]$ 上的表达式：

$$
f(x)\sim\frac{\pi}{4}+\sum_{n=1}^{\infty}\left\{\frac{(-1)^n-1}{n^2\pi}\cos nx+\frac{(-1)^{n-1}}{n}\sin nx\right\}
=\begin{cases}
0, & -\pi<x<0,\\
x, & 0\le x<\pi,\\[1mm]
\dfrac{\pi}{2}, & x=\pm\pi.
\end{cases}
$$


<!-- src: Chapter15.1-3#p023ex2; type: direct -->

- **例 3**：求 $f(x)=\begin{cases}1, & -\pi\le x<0,\\ 0, & 0\le x<\pi\end{cases}$ 的 F 氏级数，并写出和函数：

$$
f(x)\sim\frac{1}{2}+\frac{1}{\pi}\sum_{n=1}^{\infty}\frac{(-1)^n-1}{n}\sin nx
=\frac{1}{2}-\frac{2}{\pi}\left(\sin x+\frac{\sin 3x}{3}+\frac{\sin 5x}{5}+\cdots\right)
$$


$$
S(x)=\begin{cases}
1, & -\pi<x<0,\\[1mm]
\dfrac{1}{2}, & x=0,\pm\pi,\\[1mm]
0, & 0<x<\pi.
\end{cases}
$$


<!-- src: Chapter15.1-3#p024ex1; type: direct -->

- **图（电工学方波）**：$f$ 的图像为方波：$(-\pi,0)$ 上取值 1，$(0,\pi)$ 上取值 0，跳跃点处用空心/实心点标示端点取值。<!-- src: Chapter15.1-3#p024g1; type: synthesized -->
- **图（正弦波叠加）**：部分和 $S_m(x)=\dfrac{1}{2}+\dfrac{1}{\pi}\displaystyle\sum_{n=1}^{m}\frac{(-1)^n-1}{n}\sin nx$，图中绘出 $S_1,S_5,S_{15}$ 三条曲线围绕方波振荡，$m$ 越大曲线越贴近方波，跳跃点处部分和曲线穿过中点值。<!-- src: Chapter15.1-3#p024g2; type: synthesized -->
- **图（时域—频域分解示意）**：整页图示：右侧"时域图像"为方波信号；左侧"频域图像"为各频率分量幅值的离散谱（杆状图）；中间沿"频率方向"排开不同频率的正弦波分量，沿"时间方向"观察各分量叠加即合成时域方波——直观表达方波可分解为不同频率正弦波的叠加、时域信号与频域谱的对应关系。<!-- src: Chapter15.1-3#p025g1; type: synthesized -->

## 15.3 Fourier 级数的性质

### 一、F 氏级数的分析性质

- **分段连续函数**：$f$ 在 $[a,b]$ 上仅有限个第一类间断点。<!-- src: Chapter15.1-3#p027; type: direct -->
- **定理（逐项积分）**：设 $f$ 在 $[-\pi,\pi]$ 上分段连续，又 $f(x)\sim\dfrac{a_0}{2}+\displaystyle\sum_{n=1}^{\infty}(a_n\cos nx+b_n\sin nx)$，则 $\forall x\in[-\pi,\pi]$ 有

$$
\int_{0}^{x}f(t)\,\mathrm{d}t=\frac{a_0}{2}x+\sum_{n=1}^{\infty}\int_{0}^{x}(a_n\cos nt+b_n\sin nt)\,\mathrm{d}t
=\frac{a_0}{2}x+\sum_{n=1}^{\infty}\left(\frac{a_n}{n}\sin nx-\frac{b_n}{n}\cos nx+\frac{b_n}{n}\right)
$$


<!-- src: Chapter15.1-3#p027; type: direct -->

- **说明**：上述（逐项积分）定理对 $[-\pi,\pi]$ 上可积与绝对可积函数 $f$ 也成立！<!-- src: Chapter15.1-3#p028 + Chapter15.1-3#p027; type: synthesized -->
- **推论（必要条件）**：设 $f$ 在 $[-\pi,\pi]$ 上可积与绝对可积，又 $f(x)\sim\dfrac{a_0}{2}+\displaystyle\sum_{n=1}^{\infty}(a_n\cos nx+b_n\sin nx)$，则 $\displaystyle\sum_{n=1}^{\infty}\frac{b_n}{n}$ 收敛，且

$$
\sum_{n=1}^{\infty}\frac{b_n}{n}=\frac{1}{2\pi}\int_{-\pi}^{\pi}\left(\int_{0}^{x}f(t)\,\mathrm{d}t\right)\mathrm{d}x.
$$


<!-- src: Chapter15.1-3#p028; type: direct -->

- **结论（非 F 氏级数的判别）**：若 $\displaystyle\sum_{n=1}^{\infty}\frac{b_n}{n}$ 发散，则三角级数 $\dfrac{a_0}{2}+\displaystyle\sum_{n=1}^{\infty}(a_n\cos nx+b_n\sin nx)$ 必不是 F 氏级数。<!-- src: Chapter15.1-3#p029; type: direct -->
- **例 1**：证明三角级数 $\displaystyle\sum_{n=2}^{\infty}\frac{\sin nx}{\ln n}$ 点态收敛；记 $S(x)=\displaystyle\sum_{n=2}^{\infty}\frac{\sin nx}{\ln n}$，说明该三角级数不是其和函数 $S(x)$ 的 F 氏级数。<!-- src: Chapter15.1-3#p029ex1; type: direct -->
  - 该例与上方"结论"衔接：此处 $b_n=\dfrac{1}{\ln n}$，判别的入口是检验 $\displaystyle\sum\frac{b_n}{n}$ 的敛散性。<!-- src: Chapter15.1-3#p029 + Chapter15.1-3#p029ex1; type: one-step-inferred -->
- **定理（逐项微分）**：设 $f\in D[-\pi,\pi]$，且 $f(-\pi)=f(\pi)$，若 $f'(x)$ 可积与绝对可积，则

$$
f'(x)\sim\sum_{n=1}^{\infty}\frac{\mathrm{d}}{\mathrm{d}x}(a_n\cos nx+b_n\sin nx)
=\sum_{n=1}^{\infty}(n b_n\cos nx-n a_n\sin nx)
$$


<!-- src: Chapter15.1-3#p030; type: direct -->

### 二、F 氏级数的逼近和 Bessel 不等式

- **n 阶三角多项式集合**：

$$
T=\left\{T_n(x)\,\middle|\,T_n(x)=\frac{\alpha_0}{2}+\sum_{k=1}^{n}(\alpha_k\cos kx+\beta_k\sin kx)\right\}
$$


<!-- src: Chapter15.1-3#p031; type: direct -->

- **函数类 $X$**：$X=\bigl\{f(x)\,\big|\,f\ \text{在}\ [-\pi,\pi]\ \text{上可积与平方可积}\bigr\}$。<!-- src: Chapter15.1-3#p031; type: direct -->
- **问题**：$\forall f(x)\in X$，是否存在 $T_n(x)\in T$ 使得 $T_n(x)$ 是 $f(x)$ 的最佳逼近？**思考**：如何刻划两个函数的逼近（接近）程度？<!-- src: Chapter15.1-3#p031; type: direct -->
- **定义（平方平均偏差距离）**：函数 $f$ 和 $g$ 的（平方平均偏差）距离为

$$
d(f,g)=\left(\frac{1}{\pi}\int_{-\pi}^{\pi}\bigl[f(x)-g(x)\bigr]^2\,\mathrm{d}x\right)^{\frac{1}{2}}
$$


<!-- src: Chapter15.1-3#p032; type: direct -->

- **定理（$S_n$ 最佳逼近）**：设 $f\in X$，则对 $\forall T_n\in T$ 有 $d\bigl(f,S_n(x)\bigr)\le d\bigl(f,T_n(x)\bigr)$。<!-- src: Chapter15.1-3#p032; type: direct -->
- **推论（Bessel 不等式）**：设 $f\in X$，则 $f$ 的 Fourier 系数满足

$$
\frac{a_0^2}{2}+\sum_{n=1}^{\infty}(a_n^2+b_n^2)\le\frac{1}{\pi}\int_{-\pi}^{\pi}f^2(x)\,\mathrm{d}x
$$


<!-- src: Chapter15.1-3#p032; type: direct -->

- **推论（系数趋零）**：设 $f\in X$，则级数 $\dfrac{a_0^2}{2}+\displaystyle\sum_{n=1}^{\infty}(a_n^2+b_n^2)$ 收敛，从而 $\displaystyle\lim_{n\to\infty}a_n=0=\lim_{n\to\infty}b_n$，其中 $a_n,b_n$ 是 $f$ 的 Fourier 系数。<!-- src: Chapter15.1-3#p033; type: direct -->
- **推论（一致收敛的充分条件）**：设 $f$ 在 $[-\pi,\pi]$ 上除有限点外可导，在这有限点处单侧可导，且 $f(-\pi)=f(\pi)$，又 $f'(x)$ 可积与平方可积，则 $f$ 的 F 氏级数在 $[-\pi,\pi]$ 上一致收敛于 $f(x)$。<!-- src: Chapter15.1-3#p033; type: direct -->
- **定理（平方平均收敛与 Parseval 等式）**：设 $f\in X$，则 $\{S_n(x)\}$ 平方平均收敛于 $f$，即 $\displaystyle\lim_{n\to\infty}d(f,S_n)=0$；或 **Parseval 等式**成立，即 $f$ 的 Fourier 系数满足

$$
\frac{a_0^2}{2}+\sum_{n=1}^{\infty}(a_n^2+b_n^2)=\frac{1}{\pi}\int_{-\pi}^{\pi}f^2(x)\,\mathrm{d}x
$$


<!-- src: Chapter15.1-3#p034; type: direct -->

- **例 2**：已知 $x^2=\dfrac{\pi^2}{3}+4\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^n}{n^2}\cos nx$，求 $\displaystyle\sum_{n=1}^{\infty}\frac{1}{n^4}$。<!-- src: Chapter15.1-3#p034ex1; type: direct -->
  - 该例置于 Parseval 等式之下：方法入口是对所给展开式应用 Parseval 等式。<!-- src: Chapter15.1-3#p034 + Chapter15.1-3#p034ex1; type: one-step-inferred -->
- **推论（与三角函数系正交 $\Rightarrow$ 恒为零）**：设 $f\in C[-\pi,\pi]$，且 $f$ 与三角函数系 $\{1,\cos x,\sin x,\cdots,\cos nx,\sin nx,\cdots\}$ 中的每一个都正交，则 $f(x)\equiv 0$。进而：若 $f,g\in C[-\pi,\pi]$，且 F 氏系数相等，则 $f(x)\equiv g(x)$。<!-- src: Chapter15.1-3#p035; type: direct -->
- **推论（乘积积分与 F 氏系数的关系）**：设 $f,g\in X$，其 F 氏系数分别为 $a_n,b_n$ 和 $\bar{a}_n,\bar{b}_n$，则

$$
\frac{1}{\pi}\int_{-\pi}^{\pi}f(x)g(x)\,\mathrm{d}x=\frac{a_0\bar{a}_0}{2}+\sum_{n=1}^{\infty}\left(a_n\bar{a}_n+b_n\bar{b}_n\right).
$$


<!-- src: Chapter15.1-3#p035; type: direct -->
