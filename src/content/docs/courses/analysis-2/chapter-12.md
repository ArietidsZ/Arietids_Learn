---
title: "Chap 12 第一类线面积分"
description: "数学分析 II课程笔记：Chap 12 第一类线面积分。"
---

<div class="note-meta"><a href="/courses/analysis-2/">数学分析 II目录</a><a href="/courses/analysis-2/chapter-12-quick/">阅读速览</a><a href="/downloads/analysis-2/chapter-12.md" download>下载 Markdown</a></div>

## 12.1 第一类曲线积分

### 12.1.1 概念与性质

#### 引入:弧状质线的质量

- **问题**:怎样求一段弧状质线的质量?设 $xOy$ 平面的曲线弧为 $C$,端点 $A,B$,其上 $(x,y)$ 处的线密度为 $\mu(x,y)$。<!-- src: Chapter12#p003; type: direct -->
- **分割**:用分点 $A_1,A_2,\cdots,A_{n-1}$ 将 $C$ 分成 $n$ 小段,记 $A_0=A,\ A_n=B$;第 $i$ 个小弧段 $A_{i-1}A_i$ 的长度为 $\Delta s_i$。<!-- src: Chapter12#p003; type: direct -->
- **近似求和**:在第 $i$ 个小弧段上任取一点 $(\xi_i,\eta_i)$,该小弧段的质量近似为 $\mu(\xi_i,\eta_i)\Delta s_i$,质线的质量近似为 $\sum\limits_{i=1}^{n}\mu(\xi_i,\eta_i)\Delta s_i$。<!-- src: Chapter12#p003 + Chapter12#p004; type: synthesized -->
- **取极限**:记 $\lambda=\max\limits_{1\le i\le n}\Delta s_i$,则弧状质线的质量

  $$
  m=\lim_{\lambda\to 0}\sum_{i=1}^{n}\mu(\xi_i,\eta_i)\Delta s_i
  $$
  

  <!-- src: Chapter12#p004; type: direct -->

#### 第一类曲线积分的定义

- 课件以"试一试"提示:去掉物理背景,取代密度 $\mu(x,y)$ 为定义在曲线 $C$ 上的有界函数 $f(x,y)$,自行给出第一类曲线积分的定义。<!-- src: Chapter12#p004; type: direct -->
- **定义**:对定义在曲线 $C$ 上的**有界函数** $f(x,y)$,若下列极限存在且与分割方式和取点 $(\xi_i,\eta_i)$ 无关,则第一类曲线积分定义为

  $$
  \int_C f(x,y)\,\mathrm{d}s=\lim_{\lambda\to 0}\sum_{i=1}^{n} f(\xi_i,\eta_i)\,\Delta s_i
  $$
  

  <!-- src: Chapter12#p004; type: direct -->

#### 几何意义

- **几何问题:如何求一块柱面的面积?** 设 $C$ 是 $xOy$ 平面上曲线,$S$ 是以 $C$ 为准线、母线平行 $Oz$ 轴的柱面,其高度为非负函数 $f(x,y)$,则 $xOy$ 面以上部分柱面 $S$ 的面积为

  $$
  A=\int_C f(x,y)\,\mathrm{d}s
  $$
  

  这是第一类曲线积分的几何意义。<!-- src: Chapter12#p005; type: direct -->

#### 性质

- **与曲线方向无关**:若曲线 $C$ 为 $\overset{\frown}{AB}$,则 $\int_{\overset{\frown}{AB}} f(x,y)\,\mathrm{d}s=\int_{\overset{\frown}{BA}} f(x,y)\,\mathrm{d}s$。<!-- src: Chapter12#p006; type: direct -->
- **线性性**:$\int_C[\alpha f(x,y)+\beta g(x,y)]\,\mathrm{d}s=\alpha\int_C f(x,y)\,\mathrm{d}s+\beta\int_C g(x,y)\,\mathrm{d}s$。<!-- src: Chapter12#p006; type: direct -->
- **可加性**:设曲线段 $C_1$ 与 $C_2$ 首尾相接成曲线 $C$,则 $\int_C f(x,y)\,\mathrm{d}s=\int_{C_1} f(x,y)\,\mathrm{d}s+\int_{C_2} f(x,y)\,\mathrm{d}s$。<!-- src: Chapter12#p006; type: direct -->
- **弧长**:$\int_C 1\,\mathrm{d}s=s_c$,其中 $s_c$ 为曲线段 $C$ 的弧长。<!-- src: Chapter12#p006; type: direct -->

### 12.1.2 第一类曲线积分的计算

#### 基本公式(平面曲线)

- **参数方程形式**:设函数 $f(x,y)$ 在光滑曲线 $C$ 上连续,$C$ 的参数方程为 $x=x(t),\ y=y(t),\ t\in[\alpha,\beta]$,则

  $$
  \int_C f(x,y)\,\mathrm{d}s=\int_\alpha^\beta f\big(x(t),y(t)\big)\sqrt{x'^2(t)+y'^2(t)}\,\mathrm{d}t
  $$
  

  其中 $\sqrt{x'^2(t)+y'^2(t)}\,\mathrm{d}t$ 即弧微分 $\mathrm{d}s$。<!-- src: Chapter12#p007; type: direct -->
- **注意**:由于 $\mathrm{d}s$ 是弧长,取正值,故定积分限应 $\alpha\le\beta$。<!-- src: Chapter12#p007; type: direct -->
- **显式方程形式**:当曲线 $C$ 形式为 $y=y(x),\ x\in[a,b]$ 时,

  $$
  \int_C f(x,y)\,\mathrm{d}s=\int_a^b f\big(x,y(x)\big)\sqrt{1+y'^2(x)}\,\mathrm{d}x
  $$
  

  <!-- src: Chapter12#p007; type: direct -->
- **极坐标形式(回顾)**:在极坐标 $r=r(\theta)$ 时,$\mathrm{d}s=\sqrt{r^2+r'^2}\,\mathrm{d}\theta$。<!-- src: Chapter12#p008; type: direct -->

#### 空间曲线的推广

- 课件以"思考或猜测"提出:对于空间曲线 $L$:$x=x(t),\ y=y(t),\ z=z(t),\ t\in[\alpha,\beta]$,第一类曲线积分 $\int_L f(x,y,z)\,\mathrm{d}s$ 的概念与计算式如何?对应计算式为

  $$
  \int_L f(x,y,z)\,\mathrm{d}s=\int_\alpha^\beta f\big(x(t),y(t),z(t)\big)\sqrt{x'^2(t)+y'^2(t)+z'^2(t)}\,\mathrm{d}t
  $$
  

  该推广随后在例 4 中直接使用。<!-- src: Chapter12#p009; type: one-step-inferred -->

#### 例题(第一类曲线积分)

- **例 1**:计算曲线积分 $\int_C x\,\mathrm{d}s$,其中 $C$ 是抛物线 $y=x^2$ 上自点 $O(0,0)$ 到 $B(1,1)$ 的弧段;结果为 $\dfrac{5\sqrt{5}-1}{12}$。<!-- src: Chapter12#p008; ref: 例1; type: direct -->
  - 方法:曲线为显式 $y=y(x)$ 形式,用公式 $\int_a^b f(x,y(x))\sqrt{1+y'^2(x)}\,\mathrm{d}x$。<!-- src: Chapter12#p007 + Chapter12#p008; type: one-step-inferred -->
- **例 2**:计算曲线积分 $\int_C x\,\mathrm{d}s$,其中 $C$ 是自点 $O(0,0)$ 至 $A(1,0)$ 再至 $B(1,1)$ 的折线段;结果为 $\dfrac{3}{2}$。<!-- src: Chapter12#p008; ref: 例2; type: direct -->
  - 方法:折线由两直线段首尾相接,按可加性分成 $OA$ 与 $AB$ 两段分别计算后相加。<!-- src: Chapter12#p006 + Chapter12#p008; type: one-step-inferred -->
- **例 3**:质线的线密度为 $\mu=\sqrt{x^2+y^2}$,其曲线 $C$ 为半圆周 $y=\sqrt{4x-x^2},\ x\in[0,4]$,求质线的质量;结果为 $16$。<!-- src: Chapter12#p008; ref: 例3; type: direct -->
  - 方法提示:课件在本页"回顾"极坐标弧微分公式 $\mathrm{d}s=\sqrt{r^2+r'^2}\,\mathrm{d}\theta$,提示将半圆周化为极坐标方程后计算。<!-- src: Chapter12#p008; type: one-step-inferred -->
- **例 4**:计算 $\int_L(x^2+y^2+z^2)\,\mathrm{d}s$,其中曲线 $L$ 是曲面 $x^2+y^2+z^2=4$ 与平面 $z+x=2$ 的交线;结果为 $8\sqrt{2}\,\pi$。<!-- src: Chapter12#p009; ref: 例4; type: direct -->
  - 课件给出关键步骤(将 $L$ 的方程化为参数方程):

    $$
    \begin{cases}x^2+y^2+z^2=4\\ z+x=2\end{cases}\;\Rightarrow\;\begin{cases}(x-1)^2+\dfrac{y^2}{2}=1\\ z+x=2\end{cases}\;\Rightarrow\;\begin{cases}x=1+\cos t\\ y=\sqrt{2}\sin t\\ z=1-\cos t\end{cases}\quad t\in[0,2\pi]
    $$
    

    <!-- src: Chapter12#p009; ref: 例4; type: direct -->
  - 可迁移方法:曲线由两个曲面方程联立给出时,先消元化为柱面型方程(此处为椭圆柱面),再写出参数方程。<!-- src: Chapter12#p009; type: one-step-inferred -->

## 12.2 第一类曲面积分

### 12.2.1 曲面面积

#### 微元法导出

- **问题**:设曲面 $S$: $z=f(x,y),\ (x,y)\in D$,如何定义并求 $S$ 的面积?<!-- src: Chapter12#p011; type: direct -->
- **微元法**:将 $D$ 分割成小区域;设对应 $D$ 上小区域面积为 $\Delta\sigma=\Delta x\Delta y$ 的 $S$ 上小曲面处切平面的面积为 $\Delta S$。由于

  $$
  \Delta S\,|\cos(\mathbf{n},z)|=\Delta\sigma
  $$
  

  其中 $(\mathbf{n},z)$ 是小曲面处切平面法向量与 $z$ 轴方向的夹角,导出

  $$
  \mathrm{d}S=\frac{1}{|\cos(\mathbf{n},z)|}\,\mathrm{d}\sigma
  $$
  

  <!-- src: Chapter12#p011; type: direct -->

#### 显式方程下的面积公式

- 由于 $\mathbf{n}=\{-z_x,\,-z_y,\,1\}$,$z$ 轴方向为 $\{0,0,1\}$,从而得到曲面面积公式:

  $$
  \mathrm{d}S=\sqrt{1+z_x^2+z_y^2}\,\mathrm{d}x\mathrm{d}y,\qquad S=\iint_D\sqrt{1+z_x^2+z_y^2}\,\mathrm{d}x\mathrm{d}y
  $$
  

  其中 $\mathrm{d}S=\sqrt{1+z_x^2+z_y^2}\,\mathrm{d}x\mathrm{d}y$ 为**曲面面积元素**。<!-- src: Chapter12#p012; type: direct -->

#### 双参数方程下的面积公式

- 若 $S$ 为双参数方程 $x=x(u,v),\ y=y(u,v),\ z=z(u,v),\ (u,v)\in D$,则

  $$
  \mathbf{n}=(x_u,y_u,z_u)\times(x_v,y_v,z_v)=\left(\begin{vmatrix}y_u & z_u\\ y_v & z_v\end{vmatrix},\ \begin{vmatrix}z_u & x_u\\ z_v & x_v\end{vmatrix},\ \begin{vmatrix}x_u & y_u\\ x_v & y_v\end{vmatrix}\right)\overset{\text{def}}{=}(A,B,C)
  $$
  

  <!-- src: Chapter12#p012 + Chapter12#p013; type: direct -->
- 在可局部投影到 $xOy$ 面且 $C\ne0$ 时,于是 $\mathrm{d}S=\dfrac{\sqrt{A^2+B^2+C^2}}{|C|}\,\mathrm{d}x\mathrm{d}y$;回顾 $\mathrm{d}x\mathrm{d}y=|C|\,\mathrm{d}u\mathrm{d}v$,得到

  $$
  \mathrm{d}S=\sqrt{A^2+B^2+C^2}\,\mathrm{d}u\mathrm{d}v,\qquad S=\iint_D\sqrt{A^2+B^2+C^2}\,\mathrm{d}u\mathrm{d}v
  $$
  

  <!-- src: Chapter12#p013; type: direct -->
- 图示:曲面上的面积元素 $\mathrm{d}S$ 在 $xOy$ 面区域 $D_{xy}$ 中对应 $\mathrm{d}x\mathrm{d}y$,在参数平面 $(u,v)$ 的区域 $D$ 中对应 $\mathrm{d}u\mathrm{d}v$,三者经投影与换元相互联系。<!-- src: Chapter12#p013g1 + Chapter12#p013g2; type: compressed -->

#### 例题(曲面面积)

- **例 1**:计算锥面 $z=\sqrt{x^2+y^2}$ 被柱面 $z^2=2y$ 所截部分的面积;结果为 $\sqrt{2}\,\pi$。<!-- src: Chapter12#p014; ref: 例1; type: direct -->
- **例 2**:计算球面 $x^2+y^2+z^2=R^2$ 被圆柱面 $x^2+y^2=\pm Rx$ 所割下部分的曲面面积(Viviani 曲面);结果为 $4\pi R^2-8R^2$。<!-- src: Chapter12#p015; ref: 例2; type: direct -->
  - 图示标出点 $(R,0,0)$、$(R/2,0,0)$、$(0,R,0)$、$(0,0,R)$,给出球面、圆柱面与所割曲面的相对位置。<!-- src: Chapter12#p015g1; type: compressed -->
- **例 3**:计算柱面 $x^2+y^2=R^2$ 被两平面 $x\pm z=0\ (x>0,\ y>0)$ 所截下部分曲面的面积;结果为 $2R^2$。<!-- src: Chapter12#p016; ref: 例3; type: direct -->
  - 图示:左图为柱面上介于平面 $z=x$ 与 $z=-x$ 之间的曲面片;右图在 $zOx$ 平面中画出由 $z=x$、$z=-x$ 与 $x=R$ 围成的阴影三角形区域。<!-- src: Chapter12#p016g1 + Chapter12#p016g2; type: compressed -->
  - 该三角形区域即所截曲面片相应的投影区域,可据此设置积分限计算面积。<!-- src: Chapter12#p016g2; type: one-step-inferred -->

### 12.2.2 第一类曲面积分

#### 概念与性质

- **引入(曲面质量)**:设函数 $f(x,y,z)$ 定义在**分片光滑**的曲面 $S$ 上,试将 $f(x,y,z)$ 视为面密度,采用分割、求和、取极限来求这曲面质量;当相应极限存在时,导出第一类曲面积分的定义,其记号为

  $$
  \iint_S f(x,y,z)\,\mathrm{d}S
  $$
  

  <!-- src: Chapter12#p017; type: direct -->
- **性质**:第一类曲面积分有类似于第一类曲线积分的性质,如线性和可加性。<!-- src: Chapter12#p017; type: direct -->

#### 计算法

- **曲面 $S$ 为显式方程** $z=z(x,y),\ (x,y)\in D$:则有 $\mathrm{d}S=\sqrt{1+z_x^2+z_y^2}\,\mathrm{d}x\mathrm{d}y$,从而

  $$
  \iint_S f(x,y,z)\,\mathrm{d}S=\iint_D f\big(x,y,z(x,y)\big)\sqrt{1+z_x^2+z_y^2}\,\mathrm{d}x\mathrm{d}y
  $$
  

  <!-- src: Chapter12#p018; type: direct -->
- **曲面 $S$ 为双参数方程** $x=x(u,v),\ y=y(u,v),\ z=z(u,v),\ (u,v)\in D$:

  $$
  \iint_S f(x,y,z)\,\mathrm{d}S=\iint_D f\big[x(u,v),y(u,v),z(u,v)\big]\sqrt{A^2+B^2+C^2}\,\mathrm{d}u\mathrm{d}v
  $$
  

  其中

  $$
  A=\frac{\partial(y,z)}{\partial(u,v)},\quad B=\frac{\partial(z,x)}{\partial(u,v)},\quad C=\frac{\partial(x,y)}{\partial(u,v)}
  $$
  

  <!-- src: Chapter12#p019; type: direct -->

#### 例题(第一类曲面积分)

- **例 4**:计算曲面积分 $I=\iint_S(x+y+z)\,\mathrm{d}S$,其中 $S$ 为上半球面 $z=\sqrt{R^2-x^2-y^2}$;结果为 $\pi R^3$。课件提示:注意曲面的对称性。<!-- src: Chapter12#p020; ref: 例4; type: direct -->
  - 方法:由曲面关于 $yOz$ 与 $xOz$ 两个坐标面的对称性,$x$、$y$ 两项的积分为零,只需计算 $\iint_S z\,\mathrm{d}S$。<!-- src: Chapter12#p020; type: one-step-inferred -->
- **例 5**:计算曲面积分 $I=\iint_S(x^2+y^2)\,\mathrm{d}S$,其中 $S$ 为锥面 $z=\sqrt{x^2+y^2}$ 与 $z=1$ 所围锥体的**整个边界**;结果为 $\dfrac{(1+\sqrt{2})\,\pi}{2}$。<!-- src: Chapter12#p020; ref: 例5; type: direct -->
  - 方法:整个边界由锥面侧面与平面 $z=1$ 上的圆盘两部分组成,按可加性分别计算后相加。<!-- src: Chapter12#p017 + Chapter12#p020; type: one-step-inferred -->
- **例 6**:计算曲面积分 $I=\iint_S z\,\mathrm{d}S$,其中 $S$ 是螺旋面的一部分:

  $$
  \begin{cases}x=\rho\cos\theta,\\ y=\rho\sin\theta,\\ z=\theta\end{cases}\qquad 0\le\rho\le a,\ 0\le\theta\le 2\pi
  $$
  

  结果为 $\pi^2\left(a\sqrt{1+a^2}+\ln\big(a+\sqrt{1+a^2}\,\big)\right)$。<!-- src: Chapter12#p021; ref: 例6; type: direct -->
  - 方法:曲面由双参数方程给出,用 $\sqrt{A^2+B^2+C^2}\,\mathrm{d}u\mathrm{d}v$ 公式(取 $u=\rho,\ v=\theta$)。<!-- src: Chapter12#p019 + Chapter12#p021; type: one-step-inferred -->
