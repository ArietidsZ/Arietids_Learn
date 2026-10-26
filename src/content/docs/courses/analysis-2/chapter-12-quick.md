---
title: "Chap 12 第一类线面积分(速览)"
description: "数学分析 II课程笔记：Chap 12 第一类线面积分(速览)。"
---

<div class="note-meta"><a href="/courses/analysis-2/">数学分析 II目录</a><a href="/courses/analysis-2/chapter-12/">阅读详版</a><a href="/downloads/analysis-2/chapter-12-quick.md" download>下载 Markdown</a></div>

## 第一类曲线积分

- **定义**:$f(x,y)$ 为曲线 $C$ 上的有界函数;若极限存在且与分割、取点无关,则 $\displaystyle\int_C f(x,y)\,\mathrm{d}s=\lim_{\lambda\to 0}\sum_{i=1}^{n} f(\xi_i,\eta_i)\,\Delta s_i$,其中 $\lambda=\max\limits_{1\le i\le n}\Delta s_i$;物理原型为线密度 $\mu(x,y)$ 下弧状质线的质量。<!-- src: Chapter12#p003 + Chapter12#p004; type: compressed -->
- **几何意义**:以 $C$ 为准线、母线平行 $Oz$ 轴、高度为非负函数 $f(x,y)$ 的柱面在 $xOy$ 面以上部分的面积 $A=\int_C f(x,y)\,\mathrm{d}s$。<!-- src: Chapter12#p005; type: compressed -->
- **性质**:与曲线方向无关($\int_{\overset{\frown}{AB}}=\int_{\overset{\frown}{BA}}$);线性性;可加性($C_1,C_2$ 首尾相接成 $C$ 时 $\int_C=\int_{C_1}+\int_{C_2}$);$\int_C 1\,\mathrm{d}s=s_c$(弧长)。<!-- src: Chapter12#p006; type: compressed -->
- **计算公式**($f$ 在光滑曲线 $C$ 上连续):
  - 参数式 $x=x(t),y=y(t),t\in[\alpha,\beta]$:$\displaystyle\int_C f\,\mathrm{d}s=\int_\alpha^\beta f(x(t),y(t))\sqrt{x'^2(t)+y'^2(t)}\,\mathrm{d}t$。<!-- src: Chapter12#p007; type: compressed -->
  - 显式 $y=y(x),x\in[a,b]$:$\displaystyle\int_C f\,\mathrm{d}s=\int_a^b f(x,y(x))\sqrt{1+y'^2(x)}\,\mathrm{d}x$。<!-- src: Chapter12#p007; type: compressed -->
  - 极坐标 $r=r(\theta)$:$\mathrm{d}s=\sqrt{r^2+r'^2}\,\mathrm{d}\theta$。<!-- src: Chapter12#p008; type: direct -->
  - 空间曲线 $x=x(t),y=y(t),z=z(t)$:$\displaystyle\int_L f\,\mathrm{d}s=\int_\alpha^\beta f(x(t),y(t),z(t))\sqrt{x'^2(t)+y'^2(t)+z'^2(t)}\,\mathrm{d}t$(例 4 直接使用)。<!-- src: Chapter12#p009; type: one-step-inferred -->
- **易错点**:$\mathrm{d}s$ 是弧长、取正值,定积分限必须 $\alpha\le\beta$。<!-- src: Chapter12#p007; type: direct -->
- **例题方法**:显式曲线直接代公式(例 1,$\frac{5\sqrt5-1}{12}$);折线按可加性分段(例 2,$\frac32$);半圆周用极坐标弧微分(例 3,质量 $16$);两曲面交线先消元化为柱面型方程再参数化(例 4,$x=1+\cos t,\ y=\sqrt2\sin t,\ z=1-\cos t$,结果 $8\sqrt2\,\pi$)。<!-- src: Chapter12#p008 + Chapter12#p009; type: compressed -->

## 曲面面积

- **微元法**:$\Delta S\,|\cos(\mathbf n,z)|=\Delta\sigma$ ⟹ $\mathrm{d}S=\dfrac{1}{|\cos(\mathbf n,z)|}\,\mathrm{d}\sigma$,$(\mathbf n,z)$ 为切平面法向量与 $z$ 轴方向夹角。<!-- src: Chapter12#p011; type: compressed -->
- **显式曲面** $z=z(x,y)$:$\mathbf n=\{-z_x,-z_y,1\}$,曲面面积元素 $\mathrm{d}S=\sqrt{1+z_x^2+z_y^2}\,\mathrm{d}x\mathrm{d}y$,$S=\iint_D\sqrt{1+z_x^2+z_y^2}\,\mathrm{d}x\mathrm{d}y$。<!-- src: Chapter12#p012; type: compressed -->
- **双参数曲面** $x=x(u,v),y=y(u,v),z=z(u,v)$:$\mathbf n=(x_u,y_u,z_u)\times(x_v,y_v,z_v)\overset{\text{def}}{=}(A,B,C)$;局部投影到 $xOy$ 面且 $C\ne0$ 时由 $\mathrm{d}x\mathrm{d}y=|C|\,\mathrm{d}u\mathrm{d}v$ 过渡,最终 $\mathrm{d}S=\sqrt{A^2+B^2+C^2}\,\mathrm{d}u\mathrm{d}v$,$S=\iint_D\sqrt{A^2+B^2+C^2}\,\mathrm{d}u\mathrm{d}v$。<!-- src: Chapter12#p013; type: compressed -->
- **例题结果**:锥面 $z=\sqrt{x^2+y^2}$ 被 $z^2=2y$ 所截:$\sqrt2\,\pi$;球面 $x^2+y^2+z^2=R^2$ 被 $x^2+y^2=\pm Rx$ 所割(Viviani 曲面):$4\pi R^2-8R^2$;柱面 $x^2+y^2=R^2$ 被 $x\pm z=0\ (x>0,y>0)$ 所截:$2R^2$(投影到 $zOx$ 面的三角形区域)。<!-- src: Chapter12#p014 + Chapter12#p015 + Chapter12#p016; type: compressed -->

## 第一类曲面积分

- **定义**:$f(x,y,z)$ 定义在**分片光滑**曲面 $S$ 上,视为面密度;相应极限存在时,经分割、求和、取极限得曲面质量,记号 $\iint_S f(x,y,z)\,\mathrm{d}S$;有线性、可加性等类似第一类曲线积分的性质。<!-- src: Chapter12#p017; type: compressed -->
- **计算**:
  - 显式 $z=z(x,y)$:$\displaystyle\iint_S f\,\mathrm{d}S=\iint_D f(x,y,z(x,y))\sqrt{1+z_x^2+z_y^2}\,\mathrm{d}x\mathrm{d}y$。<!-- src: Chapter12#p018; type: compressed -->
  - 双参数:$\displaystyle\iint_S f\,\mathrm{d}S=\iint_D f[x(u,v),y(u,v),z(u,v)]\sqrt{A^2+B^2+C^2}\,\mathrm{d}u\mathrm{d}v$,$A=\dfrac{\partial(y,z)}{\partial(u,v)},\ B=\dfrac{\partial(z,x)}{\partial(u,v)},\ C=\dfrac{\partial(x,y)}{\partial(u,v)}$。<!-- src: Chapter12#p019; type: compressed -->
- **例题方法**:上半球面上 $\iint(x+y+z)\mathrm{d}S$ 用关于 $yOz$ 与 $xOz$ 面的对称性消去 $x,y$ 项(例 4,$\pi R^3$);"整个边界"需分块(锥侧面+顶圆盘)再相加(例 5,$\frac{(1+\sqrt2)\pi}{2}$);螺旋面 $x=\rho\cos\theta,y=\rho\sin\theta,z=\theta$($0\le\rho\le a,\ 0\le\theta\le2\pi$)用双参数公式(例 6,$\pi^2(a\sqrt{1+a^2}+\ln(a+\sqrt{1+a^2}))$)。<!-- src: Chapter12#p020 + Chapter12#p021; type: compressed -->
