---
title: "大学物理 第4章 功和能"
description: "大学物理课程笔记：大学物理 第4章 功和能。"
---

<div class="note-meta"><a href="/courses/physics/">大学物理目录</a><a href="/courses/physics/chapter-04-quick/">阅读速览</a><a href="/downloads/physics/chapter-04.md" download>下载 Markdown</a></div>

## §4.1 动能定理与功

### 质点的动能定理

#### 推导前提与基本关系

- 本节推导默认**不考虑相对论效应**,此时取 $\vec F = m\dfrac{\mathrm{d}\vec v}{\mathrm{d}t}$(质量 $m$ 视为常量,可提到微分号外)。 <!-- src: PH-C04#p001; type: direct -->
- 将 $\vec F$ 与位移微元 $\mathrm{d}\vec r$ 作点积并逐步化简: <!-- src: PH-C04#p001; type: direct -->

$$
\vec F\cdot\mathrm{d}\vec r = m\frac{\mathrm{d}\vec v}{\mathrm{d}t}\cdot\mathrm{d}\vec r = m\,\mathrm{d}\vec v\cdot\frac{\mathrm{d}\vec r}{\mathrm{d}t} = m\,\vec v\cdot\mathrm{d}\vec v = \frac12 m\,\mathrm{d}(v^2)
$$

<!-- src: PH-C04#p001; type: direct -->

- 上式中把 $\dfrac{\mathrm{d}\vec r}{\mathrm{d}t}$ 替换为 $\vec v$ 是不可跳过的关键代换:速度 $\vec v=\dfrac{\mathrm{d}\vec r}{\mathrm{d}t}$。 <!-- src: PH-C04#p001; type: one-step-inferred -->
- $\vec v\cdot\mathrm{d}\vec v$ 化为 $\tfrac12\mathrm{d}(v^2)$ 依据的恒等式(对点积求微分): <!-- src: PH-C04#p001; type: direct -->

$$
\vec v\cdot\mathrm{d}\vec v + \vec v\cdot\mathrm{d}\vec v = \mathrm{d}(\vec v\cdot\vec v) = \mathrm{d}(v^2)
$$

<!-- src: PH-C04#p001; type: direct -->

- 由此得到核心微分关系式,其中 $\tfrac12 mv^2$ 即**动能(Kinetic Energy)**: <!-- src: PH-C04#p001; type: direct -->

$$
\vec F\cdot\mathrm{d}\vec r = \mathrm{d}\!\left(\frac12 mv^2\right)
$$

<!-- src: PH-C04#p001; type: direct -->

#### 功的定义(元功)

- 物理情景:一个物体在时刻 $t$ 位于位置 $\vec r$,经历 $\mathrm{d}t$ 后于时刻 $t+\mathrm{d}t$ 移动到位置 $\vec r+\mathrm{d}\vec r$,其间受到力 $\vec F$ 的作用。 <!-- src: PH-C04#p002; type: direct -->
- 图示:在 $O\text{-}xy$ 平面内,质点沿曲线从 $A$ 运动到 $B$;位矢标注为 $\vec r_A$、$\vec r$、$\vec r+\mathrm{d}\vec r$、$\vec r_B$,各点所受力标注为 $\vec F_A$、$\vec F$、$\vec F_B$;$\theta$ 为力 $\vec F$ 与位移微元 $\mathrm{d}\vec r$ 之间的夹角。 <!-- src: PH-C04#p002g1; type: direct -->
- 位移微元的大小等于路程微元:$|\mathrm{d}\vec r| = \mathrm{d}s$。 <!-- src: PH-C04#p002; type: direct -->
- 力 $\vec F$ 在位移 $\mathrm{d}\vec r$ 上所做的功(Work 功)定义为点积: <!-- src: PH-C04#p002; type: direct -->

$$
\mathrm{d}A = \vec F\cdot\mathrm{d}\vec r
$$

<!-- src: PH-C04#p002; type: direct -->

- 功的展开式(用夹角 $\theta$ 与路程 $\mathrm{d}s$ 表示),其中 $F\cos\theta$ 为力沿位移方向的分量: <!-- src: PH-C04#p002; type: direct -->

$$
\vec F\cdot\mathrm{d}\vec r = F\,|\mathrm{d}\vec r|\cos\theta = (F\cos\theta)\,\mathrm{d}s
$$

<!-- src: PH-C04#p002; type: direct -->

- "**元功**"指质点在 $\vec r \longrightarrow \vec r+\mathrm{d}\vec r$ 这一无限小位移过程中力所做的功。 <!-- src: PH-C04#p003; type: direct -->

#### 总功(功是过程量)

- 当物体在力 $\vec F$ 作用下从点 $A$ 运动到点 $B$ 时,力对物体所做的**总功**为元功沿路径的积分: <!-- src: PH-C04#p003; type: direct -->

$$
A_{AB} = \int_{\vec r_A}^{\vec r_B} \vec F\cdot\mathrm{d}\vec r
$$

<!-- src: PH-C04#p003; type: direct -->

- 功**表征力的空间积累的效果**,是一个**过程量**(依赖于运动过程/路径,而非某一时刻的状态)。 <!-- src: PH-C04#p003; type: direct -->

#### 质点的动能定理

- 对微分关系式 $\vec F\cdot\mathrm{d}\vec r = \mathrm{d}\!\left(\tfrac12 mv^2\right)$ 两端沿路径积分,左端从 $\vec r_A$ 到 $\vec r_B$,右端相应从 $v_A$ 到 $v_B$: <!-- src: PH-C04#p004; type: direct -->

$$
\int_{\vec r_A}^{\vec r_B}\vec F\cdot\mathrm{d}\vec r = \int_{v_A}^{v_B}\mathrm{d}\!\left(\frac12 mv^2\right) = \frac12 mv_B^2 - \frac12 mv_A^2
$$

<!-- src: PH-C04#p004; type: direct -->

- 文字表述:质点从 $A$ 运动到 $B$ 的过程中,**合外力对质点所做的功等于质点动能的增量**。此即**质点的动能定理(The theorem of kinetic energy of a mass point)**。 <!-- src: PH-C04#p004; type: direct -->
- 该定理给出两种等价形式: <!-- src: PH-C04#p005; type: compressed -->
  - 微分形式: $\vec F\cdot\mathrm{d}\vec r = \mathrm{d}\!\left(\dfrac12 mv^2\right)$ <!-- src: PH-C04#p005; type: direct -->
  - 积分形式: $\displaystyle\int_{\vec r_A}^{\vec r_B}\vec F\cdot\mathrm{d}\vec r = \dfrac12 mv_B^2 - \dfrac12 mv_A^2$ <!-- src: PH-C04#p005; type: direct -->
- 元功等于动能的微分增量: <!-- src: PH-C04#p005; type: direct -->

$$
\mathrm{d}A = \vec F\cdot\mathrm{d}\vec r = \mathrm{d}K
$$

<!-- src: PH-C04#p005; type: direct -->

- 其中 $K$ 为动能,$K=\tfrac12 mv^2$(即标注为 Kinetic Energy 的 $\tfrac12 mv^2$)。 <!-- src: PH-C04#p001 + #p005; type: synthesized -->

#### 适用范围(易错点)

- 质点的动能定理**与参考系有关,只在惯性系中成立**。 <!-- src: PH-C04#p005; type: direct -->

### 功率

- 功率定义为力做功对时间的变化率,它等于合外力与速度的点积,也等于动能对时间的变化率: <!-- src: PH-C04#p005; type: direct -->

$$
P = \frac{\mathrm{d}A}{\mathrm{d}t} = \vec F\cdot\vec v = \frac{\mathrm{d}K}{\mathrm{d}t}
$$

<!-- src: PH-C04#p005; type: direct -->

### 一对作用力与反作用力的功

一对作用力与反作用力是一对大小相等、方向相反的力，满足 $\vec F_{ij}=-\vec F_{ji}$；本节讨论这一对力的元功之和。 <!-- src: PH-C04#p006; type: direct -->

配图中 $\vec F_{ij}$ 画在质点 $i$ 处、$\vec F_{ji}$ 画在质点 $j$ 处，即 $\vec F_{ij}$ 作用于质点 $i$、$\vec F_{ji}$ 作用于质点 $j$。 <!-- src: PH-C04#p006g1; type: one-step-inferred -->

这一对力的元功之和，等于两个力分别与各自质点的元位移点乘之和： <!-- src: PH-C04#p006; type: compressed -->

$$
\mathrm{d}A=\vec{F}_{ij}\cdot\mathrm{d}\vec{r}_i+\vec{F}_{ji}\cdot\mathrm{d}\vec{r}_j=\vec{F}_{ij}\cdot(\mathrm{d}\vec{r}_i-\mathrm{d}\vec{r}_j)
$$

<!-- src: PH-C04#p006; type: direct -->

利用 $\vec F_{ji}=-\vec F_{ij}$ 合并第二项，再把元位移之差写成相对位矢的微分： <!-- src: PH-C04#p006; type: compressed -->

$$
\mathrm{d}A=\vec{F}_{ij}\cdot\mathrm{d}(\vec{r}_i-\vec{r}_j)=\vec{F}_{ij}\cdot\mathrm{d}\vec{r}_{ji}
$$

<!-- src: PH-C04#p006; type: direct -->

相对位置矢量（相对位矢）： $\vec{r}_{ji}=\vec{r}_i-\vec{r}_j$。 <!-- src: PH-C04#p006; type: direct -->

相对位置矢量的增量（相对位移）： $\mathrm{d}\vec{r}_{ji}=\mathrm{d}(\vec{r}_i-\vec{r}_j)=\mathrm{d}\vec{r}_i-\mathrm{d}\vec{r}_j$。 <!-- src: PH-C04#p006; type: direct -->

于是这对作用力与反作用力的元功之和可写为： <!-- src: PH-C04#p006; type: compressed -->

$$
\mathrm{d}A=\vec{F}_{ij}\cdot\mathrm{d}\vec{r}_{ji}
$$

<!-- src: PH-C04#p006 + #p007; type: direct -->

配图（上图）：以 $O$ 为原点，$\vec r_i$、$\vec r_j$ 分别指向质点 $i$、$j$，两质点各自发生元位移 $\mathrm d\vec r_i$、$\mathrm d\vec r_j$（图中以 $a_i$、$b_i$ 与 $a_j$、$b_j$ 标出位置变化）；相对位矢 $\vec r_{ji}$ 由 $j$ 指向 $i$。 <!-- src: PH-C04#p006g1; type: direct -->

配图（下图）：用 $\vec r_{ji}+\mathrm d\vec r_{ji}$ 与 $\vec r_{ji}$ 之差直观给出 $\mathrm d\vec r_{ji}$，显示该对力的元功只与两质点的相对位移有关。 <!-- src: PH-C04#p006g1; type: synthesized -->

#### 结论：取决于相对位移、与参考系无关

一对作用力与反作用力的功取决于两受力质点的相对位移，与参考系无关。 <!-- src: PH-C04#p007; type: direct -->

#### 例：楔块与滑块

前提：楔块斜面与滑块之间有摩擦力；楔块与水平面之间是光滑的；考察一个充分小的过程。 <!-- src: PH-C04#p007; type: direct -->

配图：三角形楔块置于水平面上，滑块 $i$ 沿斜面以速度 $\vec v$ 运动；滑块受摩擦力 $\vec F_f$ 与法向力 $\vec F_N$，楔块受相应反作用力 $\vec F_f'$、$\vec F_N'$；相对位移 $\mathrm d\vec r_{ji}$ 沿斜面方向。 <!-- src: PH-C04#p007g1; type: direct -->

这对摩擦力（作用力与反作用力）的元功之和不为零（摩擦力有沿相对位移方向的分量）： <!-- src: PH-C04#p007; type: direct -->

$$
\mathrm{d}A_f=\vec{F}_f\cdot\mathrm{d}\vec{r}_{ji}\neq 0
$$

<!-- src: PH-C04#p007; type: direct -->

这对法向力（作用力与反作用力）的元功之和为零（法向力垂直于相对位移）： <!-- src: PH-C04#p007; type: direct -->

$$
\mathrm{d}A_N=\vec{F}_N\cdot\mathrm{d}\vec{r}_{ji}=0,\qquad \vec{F}_N\perp \mathrm{d}\vec{r}_{ji}
$$

<!-- src: PH-C04#p007; type: direct -->

一对作用力与反作用力的功一般不为零。 <!-- src: PH-C04#p007; type: direct -->

可迁移要点：判断成对力做功是否为零，看力与相对位移 $\mathrm d\vec r_{ji}$ 的方向关系——有沿相对位移方向的分量（如摩擦力）则做功不为零；垂直于相对位移（如法向力）则做功为零。 <!-- src: PH-C04#p007; type: one-step-inferred -->

### 质点系的动能定理

质点系：相互作用着的两个以上的质点组成的系统。 <!-- src: PH-C04#p008; type: direct -->

质点系所受的力分为外力（External forces）与内力（Internal forces）。 <!-- src: PH-C04#p008; type: direct -->

符号约定：设第 $i$ 个质点所受外力做的功为 $A_{ie}$、内力做的功为 $A_{iI}$，初速度为 $v_{i0}$，末速度为 $v_i$；系统共含 $n$ 个质点。 <!-- src: PH-C04#p008; type: direct -->

配图：虚线边界围出由 $n$ 个质点组成的质点系，其中第 $i$ 个质点被标出。 <!-- src: PH-C04#p008g1; type: direct -->

对第 $i$ 个质点应用质点的动能定理： <!-- src: PH-C04#p008; type: compressed -->

$$
A_{ie}+A_{iI}=\tfrac{1}{2}m_i v_i^2-\tfrac{1}{2}m_i v_{i0}^2
$$

<!-- src: PH-C04#p008; type: direct -->

对 $n$ 个质点逐一求和： <!-- src: PH-C04#p008; type: compressed -->

$$
\sum_{i=1}^{n}A_{ie}+\sum_{i=1}^{n}A_{iI}=\sum_{i=1}^{n}\tfrac{1}{2}m_i v_i^2-\sum_{i=1}^{n}\tfrac{1}{2}m_i v_{i0}^2
$$

<!-- src: PH-C04#p008 + #p009; type: direct -->

各求和项的含义： <!-- src: PH-C04#p009; type: direct -->

- $A_e=\sum_{i=1}^{n}A_{ie}$：外力对质点系做的功。 <!-- src: PH-C04#p009; type: direct -->
- $A_I=\sum_{i=1}^{n}A_{iI}$：内力对质点系做的功。 <!-- src: PH-C04#p009; type: direct -->
- $K=\sum_{i=1}^{n}\tfrac{1}{2}m_i v_i^2$：质点系末态的动能。 <!-- src: PH-C04#p009; type: direct -->
- $K_0=\sum_{i=1}^{n}\tfrac{1}{2}m_i v_{i0}^2$：质点系初态的动能。 <!-- src: PH-C04#p009; type: direct -->

由此得到质点系的动能定理： <!-- src: PH-C04#p009; type: direct -->

$$
A_e+A_I=K-K_0
$$

<!-- src: PH-C04#p009; type: direct -->

文字表述：所有外力和内力对质点系所做的功之和等于质点系动能的增量。 <!-- src: PH-C04#p009; type: direct -->

要点：与单个质点不同，质点系动能的改变不仅由外力的功决定，还包含内力的功 $A_I$；结合“一对内力（作用力与反作用力）的功一般不为零”，可知系统内力一般也会改变系统的总动能。 <!-- src: PH-C04#p007 + #p009; type: one-step-inferred -->

## §4.2 保守力与势能

### 重力的功 Work done by gravity

设质点在重力作用下由位置 a 运动到位置 b。由图取竖直向上为 z 轴正方向,$\vec k$ 为 z 轴正方向单位矢量,则重力 $\vec F=mg(-\vec k)$(方向竖直向下)。 <!-- src: PH-C04#p010; type: compressed -->

元功:

$$
\mathrm{d}A=\vec F\cdot\mathrm{d}\vec r=mg(-\vec k)\cdot\mathrm{d}\vec r=mg(-\mathrm{d}z)
$$

<!-- src: PH-C04#p010; type: direct -->

由 a 到 b 总功:

$$
A=-\int_{z_a}^{z_b}mg\,\mathrm{d}z=-(mgz_b-mgz_a)
$$

<!-- src: PH-C04#p010; type: direct -->

- 图中:a 点高度为 $z_a$、b 点高度为 $z_b$;$mg$ 竖直向下,$\mathrm{d}\vec r$ 为沿路径的位移元;积分上下限取初位置高度 $z_a$ 到末位置高度 $z_b$。 <!-- src: PH-C04#p010g1; type: direct -->
- 重力做功只取决于质点的始、末位置(高度),与质点所经过的路径无关。 <!-- src: PH-C04#p010; type: compressed -->

### 万有引力的功 Work done by universal gravitational force

质点 m 在质量为 M 的物体的万有引力作用下,从 a 运动到 b。以 M 所在处为原点,$\vec r$ 为由 M 指向 m 的位矢,引力为: <!-- src: PH-C04#p011; type: compressed -->

$$
\vec F=-G\frac{Mm}{r^{3}}\vec r
$$

<!-- src: PH-C04#p011; type: direct -->

元功:

$$
\mathrm{d}A=\vec F\cdot\mathrm{d}\vec r=-G\frac{Mm}{r^{3}}\vec r\cdot\mathrm{d}\vec r=-G\frac{Mm}{r^{3}}r\,\mathrm{d}r
$$

<!-- src: PH-C04#p011; type: direct -->

其中利用了位矢与位移元的点积关系($\theta$ 为 $\vec r$ 与 $\mathrm{d}\vec r$ 之间的夹角):

$$
\vec r\cdot\mathrm{d}\vec r=r\,|\mathrm{d}\vec r|\cos\theta=r\,\mathrm{d}r
$$

<!-- src: PH-C04#p011; type: direct -->

由 a 到 b 总功:

$$
A=\int_{r_a}^{r_b}\left(-G\frac{Mm}{r^{2}}\right)\mathrm{d}r=-\left[\left(-G\frac{Mm}{r_b}\right)-\left(-G\frac{Mm}{r_a}\right)\right]
$$

<!-- src: PH-C04#p011; type: direct -->

- 图中:M 位于原点,m 沿曲线由 a 运动到 b;$\vec r_a$、$\vec r_b$ 分别为始末位矢,$\vec r$ 与 $\vec r+\mathrm{d}\vec r$ 相差位移元 $\mathrm{d}\vec r$,$\theta$ 为 $\vec r$ 与 $\mathrm{d}\vec r$ 的夹角,引力 $\vec F$ 指向 M(吸引);积分上下限取 $r_a$ 到 $r_b$。 <!-- src: PH-C04#p011g1; type: direct -->
- 万有引力做功只取决于质点的始、末位置,与其所经过的路径无关。 <!-- src: PH-C04#p011; type: compressed -->

### 弹性力的功 Work done by elastic force

弹簧自然长度为 $l_0$,以自然长度末端(平衡位置)为原点 O,沿 x 轴正方向,$\vec i$ 为 x 轴正方向单位矢量,形变量为 x,弹性力为: <!-- src: PH-C04#p012; type: compressed -->

$$
\vec F=-kx\,\vec i
$$

<!-- src: PH-C04#p012; type: direct -->

由 a 到 b 总功(元功 $\mathrm{d}A=\vec F\cdot\mathrm{d}\vec r=-kx\,\vec i\cdot\mathrm{d}x\,\vec i$):

$$
A=\int_{a}^{b}\vec F\cdot\mathrm{d}\vec r=-\int_{a}^{b}kx\,\vec i\cdot\mathrm{d}x\,\vec i=-\int_{x_a}^{x_b}kx\,\mathrm{d}x=-\left(\tfrac{1}{2}kx_b^{2}-\tfrac{1}{2}kx_a^{2}\right)
$$

<!-- src: PH-C04#p012; type: direct -->

- 图中:弹簧一端固定于墙,小球位于伸长端;原点 O 取在弹簧自然长度末端,$x_a$、$x_b$ 分别为始、末位置(形变量),$\mathrm{d}\vec r$ 沿 x 轴正方向,弹性力 $\vec F$ 指向原点 O(平衡位置)、与 $\mathrm{d}\vec r$ 反向。 <!-- src: PH-C04#p012g1; type: direct -->
- 弹性力做功只取决于弹簧的始、末位置(始末形变),与弹性形变的具体过程无关。 <!-- src: PH-C04#p012; type: compressed -->

### 保守力与非保守力

- 重力、引力、弹性力做功有一个共同点:做功与路径无关。这类力称为保守力。 <!-- src: PH-C04#p013 + #p014; type: direct -->
- 我们可以把自然界中的力分成两大类。 <!-- src: PH-C04#p013 + #p014; type: direct -->

#### 保守力

- 一类力做功与具体路径无关,只与路径的始、末位置有关,这类力为保守力。 <!-- src: PH-C04#p013 + #p014; type: direct -->
- 举例:重力、万有引力、弹性力、静电力、…。 <!-- src: PH-C04#p013 + #p014; type: direct -->

#### 非保守力

- 另一类力做功与具体的路径有关,这类力为非保守力。 <!-- src: PH-C04#p013 + #p014; type: direct -->
- 举例:摩擦力、回旋力、…。 <!-- src: PH-C04#p013 + #p014; type: direct -->

### 保守力做功与路径无关的等价表述

- 设保守力为 $\vec F$,质点由 $a$ 经两条不同路径 $L_1$、$L_2$ 到达 $b$(图中 $L_1$、$L_2$ 是连接同一对端点 $a$、$b$ 的两条路径,均指向 $a\to b$)。 <!-- src: PH-C04#p015g1; type: direct -->
- 沿 $L_1$ 与沿 $L_2$ 由 $a$ 到 $b$ 做功相等:
$$
\int_{a\,(L_1)}^{b}\vec F\cdot\mathrm{d}\vec r=\int_{a\,(L_2)}^{b}\vec F\cdot\mathrm{d}\vec r
$$

<!-- src: PH-C04#p015; type: direct -->
- 移项得两路径积分之差为零:
$$
\int_{a\,(L_1)}^{b}\vec F\cdot\mathrm{d}\vec r-\int_{a\,(L_2)}^{b}\vec F\cdot\mathrm{d}\vec r=0
$$

<!-- src: PH-C04#p015; type: compressed -->
- 将沿 $L_2$ 由 $a$ 到 $b$ 的积分反向为沿 $-L_2$ 由 $b$ 到 $a$ 的积分(反向使该项变号),两段即拼成由 $a$ 经 $L_1$ 到 $b$、再经 $-L_2$ 回到 $a$ 的闭合回路:
$$
\int_{a\,(L_1)}^{b}\vec F\cdot\mathrm{d}\vec r+\int_{b\,(-L_2)}^{a}\vec F\cdot\mathrm{d}\vec r=0
$$

<!-- src: PH-C04#p015; type: one-step-inferred -->
- 由上,保守力沿闭合回路 $L$($a\xrightarrow{L_1}b\xrightarrow{-L_2}a$)做功为零:
$$
\oint_{L}\vec F\cdot\mathrm{d}\vec r=0
$$

<!-- src: PH-C04#p015; type: direct -->
- 由于路径 $L_1$、$L_2$ 任意,可见"保守力做功与路径无关"等价于"保守力沿任意闭合路径做功为零"。 <!-- src: PH-C04#p015; type: one-step-inferred -->

### 保守力做功与动能增量:不变量的出现

- 保守力 $\vec F$ 从 $a$ 到 $b$ 所做的功等于质点动能的增量:
$$
\int_{a}^{b}\vec F\cdot\mathrm{d}\vec r=\tfrac12 mv_b^2-\tfrac12 mv_a^2
$$

<!-- src: PH-C04#p016; type: direct -->
- 重力做功:
$$
-(mgz_b-mgz_a)=\tfrac12 mv_b^2-\tfrac12 mv_a^2
$$

<!-- src: PH-C04#p016; type: direct -->
- 万有引力做功:
$$
-\left[-G\frac{Mm}{r_b}-\left(-G\frac{Mm}{r_a}\right)\right]=\tfrac12 mv_b^2-\tfrac12 mv_a^2
$$

<!-- src: PH-C04#p016; type: direct -->
- 弹性力做功:
$$
-\left(\tfrac12 kx_b^2-\tfrac12 kx_a^2\right)=\tfrac12 mv_b^2-\tfrac12 mv_a^2
$$

<!-- src: PH-C04#p016; type: direct -->
- 三种保守力做功均写成相应位置函数(末态量减初态量)的相反数(各式做功项前带负号),且都等于动能增量 $\tfrac12 mv_b^2-\tfrac12 mv_a^2$。 <!-- src: PH-C04#p016; type: compressed -->
- 由上述各式可知**存在一个不变量**:动能与一个尚未命名的**新量**之和。 <!-- src: PH-C04#p016; type: direct -->
- 重力情形的不变量关系:
$$
\tfrac12 mv_a^2+mgz_a=\tfrac12 mv_b^2+mgz_b
$$

<!-- src: PH-C04#p016; type: direct -->
- 万有引力情形的不变量关系:
$$
\tfrac12 mv_a^2+\left(-G\frac{Mm}{r_a}\right)=\tfrac12 mv_b^2+\left(-G\frac{Mm}{r_b}\right)
$$

<!-- src: PH-C04#p016; type: direct -->
- 弹性力情形的不变量关系:
$$
\tfrac12 mv_a^2+\tfrac12 kx_a^2=\tfrac12 mv_b^2+\tfrac12 kx_b^2
$$

<!-- src: PH-C04#p016; type: direct -->
- 与动能并列出现在和式中的"新量"按保守力分别为:重力 $mgz$、万有引力 $-G\dfrac{Mm}{r}$(带负号)、弹性力 $\tfrac12 kx^2$。 <!-- src: PH-C04#p016; type: synthesized -->

### 势能 U 的引入

- 这个新量源于保守力做功,与动能项处于平等地位;它仅由质点的空间位置决定,称其为**势能** $U$。 <!-- src: PH-C04#p017 + #p018; type: compressed -->
- 对应于每一种保守力,都相应地存在着一种势能。 <!-- src: PH-C04#p017 + #p018; type: direct -->

三种保守力从 $a$ 运动到 $b$ 所做的功,均可写成某个仅由位置决定的量在末态与初态之差的负值: <!-- src: PH-C04#p018; type: compressed -->

- 重力: <!-- src: PH-C04#p018; type: direct -->
$$
\int_a^b \vec F\cdot\mathrm{d}\vec r = -(mgz_b - mgz_a)
$$

<!-- src: PH-C04#p018; type: direct -->
- 万有引力: <!-- src: PH-C04#p018; type: direct -->
$$
\int_a^b \vec F\cdot\mathrm{d}\vec r = -\left[\left(-G\frac{Mm}{r_b}\right) - \left(-G\frac{Mm}{r_a}\right)\right]
$$

<!-- src: PH-C04#p018; type: direct -->
- 弹性力: <!-- src: PH-C04#p018; type: direct -->
$$
\int_a^b \vec F\cdot\mathrm{d}\vec r = -\left(\tfrac12 kx_b^2 - \tfrac12 kx_a^2\right)
$$

<!-- src: PH-C04#p018; type: direct -->

- 统一写法:保守力从 $a$ 到 $b$ 做的功等于势能增量的负值,其中 $U_b - U_a$ 为势能的增量。 <!-- src: PH-C04#p018; type: direct -->
$$
\int_a^b \vec F\cdot\mathrm{d}\vec r = -(U_b - U_a)
$$

<!-- src: PH-C04#p018; type: direct -->

### 势能函数的定义与势能零点

- 本页同时列出两式:沿任意路径从 $a$ 到 $b$ 有 $\int_a^b \vec F\cdot\mathrm{d}\vec r = -(U_b - U_a)$;沿任意闭合回路 $L$ 有 $\oint_L \vec F\cdot\mathrm{d}\vec r = 0$。 <!-- src: PH-C04#p019; type: compressed -->
- 规定 $U_b = 0$,即取 $b$ 为**势能零点位置**。 <!-- src: PH-C04#p019; type: direct -->
- 在此规定下,质点在任一位置 $a$ 处的势能等于保守力从 $a$ 到势能零点 $b$ 所做的功: <!-- src: PH-C04#p019; type: direct -->
$$
U_a = \int_a^b \vec F\cdot\mathrm{d}\vec r
$$

<!-- src: PH-C04#p019; type: direct -->

#### 重力势能

- 由 $\displaystyle\int_a^b \vec F\cdot\mathrm{d}\vec r = -(mgz_b - mgz_a)$,取 $z_b = 0$ 处为势能零点(即 $U_b = 0$)。 <!-- src: PH-C04#p019; type: direct -->
- 质点在任一位置 $a$ 处的重力势能: <!-- src: PH-C04#p019; type: direct -->
$$
U_a = mgz
$$

<!-- src: PH-C04#p019; type: direct -->

#### 引力势能

- 由 $\displaystyle\int_a^b \vec F\cdot\mathrm{d}\vec r = -\left[\left(-G\dfrac{Mm}{r_b}\right) - \left(-G\dfrac{Mm}{r_a}\right)\right]$,取 $r_b \to \infty$ 处为势能零点(即 $U_b = 0$)。 <!-- src: PH-C04#p020; type: direct -->
- 质点在任一位置 $a$ 处的引力势能: <!-- src: PH-C04#p020; type: direct -->
$$
U_a = -G\frac{Mm}{r}
$$

<!-- src: PH-C04#p020; type: direct -->

#### 弹性势能

- 由 $\displaystyle\int_a^b \vec F\cdot\mathrm{d}\vec r = -\left(\tfrac12 kx_b^2 - \tfrac12 kx_a^2\right)$,取 $x_b = 0$ 处为势能零点(即 $U_b = 0$)。 <!-- src: PH-C04#p020; type: direct -->
- 质点在任一位置 $a$ 处的弹性势能: <!-- src: PH-C04#p020; type: direct -->
$$
U_a = \frac12 kx^2
$$

<!-- src: PH-C04#p020; type: direct -->

### 保守力与势能的微分关系

- 保守力沿元位移所做的元功等于势能微分的负值: <!-- src: PH-C04#p021; type: direct -->
$$
\vec F(\vec r)\cdot\mathrm{d}\vec r = -\mathrm{d}U,\qquad \mathrm{d}U(\vec r) = -\vec F(\vec r)\cdot\mathrm{d}\vec r
$$

<!-- src: PH-C04#p021; type: direct -->
- 在直角坐标系(Cartesian coordinate system)中展开: <!-- src: PH-C04#p021; type: direct -->
$$
\mathrm{d}U(x,y,z) = -(F_x\vec i + F_y\vec j + F_z\vec k)\cdot(\mathrm{d}x\,\vec i + \mathrm{d}y\,\vec j + \mathrm{d}z\,\vec k) = -(F_x\,\mathrm{d}x + F_y\,\mathrm{d}y + F_z\,\mathrm{d}z)
$$

<!-- src: PH-C04#p021; type: direct -->
- 同时,$U$ 作为 $x,y,z$ 的函数,其全微分为: <!-- src: PH-C04#p021; type: direct -->
$$
\mathrm{d}U(x,y,z) = \frac{\partial U}{\partial x}\,\mathrm{d}x + \frac{\partial U}{\partial y}\,\mathrm{d}y + \frac{\partial U}{\partial z}\,\mathrm{d}z
$$

<!-- src: PH-C04#p021; type: direct -->
- 比较两式各分量系数,得保守力各分量等于势能对相应坐标偏导数的负值: <!-- src: PH-C04#p021; type: direct -->
$$
F_x = -\frac{\partial U}{\partial x},\qquad F_y = -\frac{\partial U}{\partial y},\qquad F_z = -\frac{\partial U}{\partial z}
$$

<!-- src: PH-C04#p021; type: direct -->
- 合成为矢量式: <!-- src: PH-C04#p021; type: direct -->
$$
\vec F = F_x\vec i + F_y\vec j + F_z\vec k = -\frac{\partial U}{\partial x}\vec i - \frac{\partial U}{\partial y}\vec j - \frac{\partial U}{\partial z}\vec k = -\left(\vec i\frac{\partial U}{\partial x} + \vec j\frac{\partial U}{\partial y} + \vec k\frac{\partial U}{\partial z}\right)
$$

<!-- src: PH-C04#p021; type: direct -->

### 势能函数的梯度

- 将偏导算符从 $U$ 中提出: <!-- src: PH-C04#p022; type: direct -->
$$
\vec F = -\left(\vec i\frac{\partial U}{\partial x} + \vec j\frac{\partial U}{\partial y} + \vec k\frac{\partial U}{\partial z}\right) = -\left(\vec i\frac{\partial}{\partial x} + \vec j\frac{\partial}{\partial y} + \vec k\frac{\partial}{\partial z}\right)U
$$

<!-- src: PH-C04#p022; type: direct -->
- 定义**梯度算符**(gradient): <!-- src: PH-C04#p022; type: direct -->
$$
\nabla = \vec i\frac{\partial}{\partial x} + \vec j\frac{\partial}{\partial y} + \vec k\frac{\partial}{\partial z}
$$

<!-- src: PH-C04#p022; type: direct -->
- 保守力等于势能函数梯度的负值(势能函数的梯度): <!-- src: PH-C04#p022; type: direct -->
$$
\vec F = -\nabla U
$$

<!-- src: PH-C04#p022; type: direct -->
- 由势能函数即可求出保守力。 <!-- src: PH-C04#p022; type: direct -->
- 各直角坐标分量可由 $\vec F$ 在基矢上的投影得到: <!-- src: PH-C04#p022; type: direct -->
$$
F_x = \vec i\cdot\vec F = -\vec i\cdot\nabla U = -\frac{\partial U}{\partial x},\quad F_y = \vec j\cdot\vec F = -\vec j\cdot\nabla U = -\frac{\partial U}{\partial y},\quad F_z = \vec k\cdot\vec F = -\vec k\cdot\nabla U = -\frac{\partial U}{\partial z}
$$

<!-- src: PH-C04#p022; type: direct -->
- 相应地,$\vec i\cdot\nabla U = \dfrac{\partial U}{\partial x}$、$\vec j\cdot\nabla U = \dfrac{\partial U}{\partial y}$、$\vec k\cdot\nabla U = \dfrac{\partial U}{\partial z}$。 <!-- src: PH-C04#p022; type: direct -->
- 沿径向分量(以单位径矢 $\hat e_r$ 投影): <!-- src: PH-C04#p022; type: compressed -->
$$
F_r = \hat e_r\cdot\vec F = -\hat e_r\cdot\nabla U = -\frac{\partial U}{\partial r}
$$

<!-- src: PH-C04#p022; type: compressed -->

### 如何判断力是否为保守力

- 保守力判据:保守力沿任意闭合路径 $L$ 满足 $\oint_L \vec F\cdot\mathrm d\vec r=0$;若能找到一条闭合路径使环路积分非零,则为非保守力。 <!-- src: PH-C04#p023; type: direct --><!-- src: PH-C04#p024ex1; type: one-step-inferred -->

四种典型力场图示及其判别结果: <!-- src: PH-C04#p023g1; type: direct -->

| 力场图样 | 判别 |
|---|---|
| 方向一致的均匀平行场(如竖直向上) | 保守力 <!-- src: PH-C04#p023g1; type: direct --> |
| 自中心向外的辐射(径向)场 | 保守力 <!-- src: PH-C04#p023g1; type: direct --> |
| 方向杂乱、发散无规的场 | 非保守力 <!-- src: PH-C04#p023g1; type: direct --> |
| 同心圆环流(涡旋)场 | 非保守力 <!-- src: PH-C04#p023g1; type: direct --> |

### 例:用环路积分判别两个力场

设两个力场 $\vec F_1=ay\vec j$($y>0$)、$\vec F_2=bx\vec j$($x>0$),$a,b>0$,判断各为保守力还是非保守力。 <!-- src: PH-C04#p024ex1; type: direct -->

对 $\vec F_1$,取任意闭合路径 $ABCDA$: <!-- src: PH-C04#p024ex1; type: direct -->

$$
\oint_{ABCDA}\vec F_1\cdot\mathrm d\vec r=\oint ay\vec j\cdot(\mathrm dx\,\vec i+\mathrm dy\,\vec j)=\oint ay\vec j\cdot\mathrm dy\,\vec j=\oint ay\,\mathrm dy=0
$$

<!-- src: PH-C04#p024ex1; type: direct -->

故 $\vec F_1$ 为保守力。 <!-- src: PH-C04#p024ex1; type: direct -->

对 $\vec F_2$,取矩形路径 $EFGHE$(顶点 $E(x_1,y_1)$、$F(x_1,y_2)$、$G(x_2,y_2)$、$H(x_2,y_1)$): <!-- src: PH-C04#p024ex1; type: direct -->

$$
\oint_{EFGHE}\vec F_2\cdot\mathrm d\vec r=\int_{EF}bx_1\vec j\cdot\mathrm dy\,\vec j+\int_{GH}bx_2\vec j\cdot\mathrm dy\,\vec j=\int_{EF}bx_1\,\mathrm dy+\int_{GH}bx_2\,\mathrm dy
$$

<!-- src: PH-C04#p024ex1; type: direct -->

$$
=bx_1(y_2-y_1)+bx_2(y_1-y_2)<0
$$

<!-- src: PH-C04#p024ex1; type: direct -->

故 $\vec F_2$ 为非保守力。 <!-- src: PH-C04#p024ex1; type: direct -->

- 方法/易错点:因力沿 $\vec j$,只有竖直段($EF$、$GH$)对环路积分有贡献;水平段($FG$、$HE$)上 $\mathrm d\vec r$ 沿 $\vec i$,$\vec j\cdot\mathrm d\vec r=0$,贡献为零。 <!-- src: PH-C04#p024ex1; type: one-step-inferred -->
- 方法/易错点:$\vec F_1$ 只依赖 $y$,$\oint ay\,\mathrm dy$ 沿闭合路径恒为零;$\vec F_2$ 依赖 $x$,矩形两竖直边处 $x=x_1$ 与 $x=x_2$ 的力大小不同,不能抵消,故环路积分非零。 <!-- src: PH-C04#p024ex1; type: one-step-inferred -->
- 判别策略:判定"保守"须对任意闭合路径都成立(故对 $\vec F_1$ 取一般路径 $ABCDA$);判定"非保守"只需举出一条环路积分非零的路径即可(故对 $\vec F_2$ 取矩形 $EFGHE$)。 <!-- src: PH-C04#p024ex1; type: one-step-inferred -->

### 例:用偏导判据判断保守力并求势能函数

判断 $\vec F=F_x\vec i+F_y\vec j$ 是否为保守力,其中 $F_x=y\cos x+y^2$,$F_y=\sin x+2xy-y$。 <!-- src: PH-C04#p025ex1; type: direct -->

- 保守力判据(平面情形):在无奇点、单连通区域且偏导连续时,可用 $\dfrac{\partial F_x}{\partial y}=\dfrac{\partial F_y}{\partial x}$ 判别。 <!-- src: PH-C04#p025ex1; type: direct --><!-- src: PH-C04#p023g1 + #p025ex1; type: one-step-inferred -->
- 判据来由:由 $\vec F=-\nabla U$ 得 $F_x=-\dfrac{\partial U}{\partial x}$、$F_y=-\dfrac{\partial U}{\partial y}$;于是 $\dfrac{\partial F_x}{\partial y}=-\dfrac{\partial}{\partial y}\dfrac{\partial U}{\partial x}$、$\dfrac{\partial F_y}{\partial x}=-\dfrac{\partial}{\partial x}\dfrac{\partial U}{\partial y}$,因二阶混合偏导相等,故 $\dfrac{\partial F_x}{\partial y}=\dfrac{\partial F_y}{\partial x}$。 <!-- src: PH-C04#p025ex1; type: direct -->
- 代入验证 $\dfrac{\partial F_x}{\partial y}=\cos x+2y$ 与 $\dfrac{\partial F_y}{\partial x}=\cos x+2y$ 相等,故 $\vec F=F_x\vec i+F_y\vec j$ 为保守力。 <!-- src: PH-C04#p025ex1; type: one-step-inferred -->

势能函数计算:由 $\displaystyle\int_a^b\vec F\cdot\mathrm d\vec r=-(U_b-U_a)$,沿折线 $a(0,0)\to b(x,y)$(先沿 $x$ 轴、再沿竖直方向)取积分: <!-- src: PH-C04#p025ex1; type: direct -->

$$
U(x,y)=-\int_0^x F_x(x,0)\,\mathrm dx-\int_0^y F_y(x,y)\,\mathrm dy+C
$$

<!-- src: PH-C04#p025ex1; type: direct -->

- 方法/易错点:第一段沿 $x$ 轴须令 $y=0$ 代入,即用 $F_x(x,0)$;第二段沿竖直方向 $x$ 保持不变,对 $F_y$ 关于 $y$ 积分;$C$ 为对应势能零点选取的积分常数。 <!-- src: PH-C04#p025ex1; type: one-step-inferred -->

### 例:由势能函数求保守力与做功

质点在三维空间中运动,已知相应的势能函数 $U=-ax^2+bxy+cz$,求 (1) 保守力 $\vec F$;(2) 质点由原点运动到 $x=3$、$y=3$、$z=3$ 位置时保守力做的功。 <!-- src: PH-C04#p026ex1; type: direct -->

(1) 保守力 $\vec F=-\nabla U$: <!-- src: PH-C04#p026ex1; type: direct -->

$$
\vec F=-\left(\vec i\frac{\partial}{\partial x}+\vec j\frac{\partial}{\partial y}+\vec k\frac{\partial}{\partial z}\right)(-ax^2+bxy+cz)=(2ax-by)\vec i-bx\vec j-c\vec k
$$

<!-- src: PH-C04#p026ex1; type: direct -->

(2) 质点由原点运动到 $x=3$、$y=3$、$z=3$ 位置,保守力做的功: <!-- src: PH-C04#p026ex1; type: direct -->

$$
A_{ab}=-[U_b(3,3,3)-U_a(0,0,0)]=9a-9b-3c
$$

<!-- src: PH-C04#p026ex1; type: direct -->

- 方法:保守力做功只由始末位置的势能差决定,$A=-(U_b-U_a)$,与路径无关;代入坐标即得结果。 <!-- src: PH-C04#p026ex1; type: one-step-inferred -->

### 势能曲线 (potential energy curve)

由势能函数求径向保守力分量: <!-- src: PH-C04#p027; type: direct -->

$$
F_r=\hat e_r\cdot\vec F=-\hat e_r\cdot\nabla U=-\frac{\partial U}{\partial r}=-\frac{\mathrm dU}{\mathrm dr}
$$

<!-- src: PH-C04#p027; type: direct -->

- 平衡位置:在势能极小处 $r_0$,$F_r(r_0)=-\left(\dfrac{\mathrm dU}{\mathrm dr}\right)_{r_0}=0$。 <!-- src: PH-C04#p027 + #p027g1; type: synthesized -->
- 图示为双原子分子的势能曲线 $U(r)$:在 $r=r_0$ 处 $U$ 取极小值(对应 $F_r=0$ 的平衡位置);横轴上标出 $r_1$、$r_2$、$r_0$、$r_3$ 等位置,并标出三条总能量水平线 $E_1$、$E_2$、$E_3$($E_1$ 最低、位于势阱底部)。 <!-- src: PH-C04#p027g1; type: direct -->
- 机械能关系:$E=U(r)+K$,因 $K\ge 0$,故 $E\ge U$。 <!-- src: PH-C04#p027; type: direct -->
- 由 $E\ge U$ 可知质点只能在 $U(r)\le E$ 的区域内运动。 <!-- src: PH-C04#p027; type: one-step-inferred -->

势能曲线的作用: <!-- src: PH-C04#p027; type: direct -->

- (1) 利用势能曲线,可以判断物体在各个位置所受保守力的大小和方向。 <!-- src: PH-C04#p027; type: direct -->
- (2) 根据势能曲线的形状讨论物体的运动。 <!-- src: PH-C04#p027; type: direct -->

### 势能曲线与平衡位置的判断

一维情形下,力的 $x$ 分量等于势能 $U$ 对坐标导数的负值:

$$
F_x=-\frac{\mathrm{d}U}{\mathrm{d}x}
$$

<!-- src: PH-C04#p028; type: direct -->

- 平衡位置(Equilibrium 平衡):A、B、C、D 各点处 $\dfrac{\mathrm{d}U}{\mathrm{d}x}=0$,因而 $F_x=0$。 <!-- src: PH-C04#p028; type: direct -->
- 稳定平衡(Stable equilibrium 稳定平衡):在 A、C 两点处,该处对应回复力(Restoring force 回复力)。 <!-- src: PH-C04#p028; type: direct -->
- 不稳定平衡(Unstable equilibrium 不稳定平衡):在 B、D 两点处。 <!-- src: PH-C04#p028; type: direct -->
- 随遇平衡(Neutral equilibrium 随遇平衡)。 <!-- src: PH-C04#p028; type: direct -->

势能曲线(图中关系):

- $U(x)$ 曲线自左上方的高点 D 下降到极小点 A,上升到极大点 B,再下降到极小点 C,右侧继续上升;F 点位于 D 与 A 之间的下降段,其上画有向 $+x$ 方向运动的小球。 <!-- src: PH-C04#p028g1; type: direct -->
- 结合左侧分类:极小点 A、C 为稳定平衡,极大点 B、D 为不稳定平衡。 <!-- src: PH-C04#p028g1; type: one-step-inferred -->
- 在 F 点曲线下降,$\dfrac{\mathrm{d}U}{\mathrm{d}x}<0$,故 $F_x=-\dfrac{\mathrm{d}U}{\mathrm{d}x}>0$,力沿 $+x$ 方向。 <!-- src: PH-C04#p028g1; type: direct -->

### 机械能、势垒与势阱的势能曲线

- 机械能:$E=K+U(x)$。 <!-- src: PH-C04#p029; type: direct -->
- 动能用坐标对时间的导数表示:$\dfrac12 m\left(\dfrac{\mathrm{d}x}{\mathrm{d}t}\right)^2+U(x)=E$。 <!-- src: PH-C04#p029; type: direct -->
- 由 $\dfrac12 m\left(\dfrac{\mathrm{d}x}{\mathrm{d}t}\right)^2\ge0$,得 $E\ge U(x)$。 <!-- src: PH-C04#p029; type: direct -->
- 势能曲线隆起(极大)处为势垒,凹陷(极小)处为势阱。 <!-- src: PH-C04#p029; type: one-step-inferred -->
- 由 $F_x=-\dfrac{\mathrm{d}U}{\mathrm{d}x}$,质点可在势阱内作振动。 <!-- src: PH-C04#p029; type: one-step-inferred -->

势能曲线(图中关系):

- $U(x)$ 曲线配有水平能量线,由低到高为 $E_1<E_2<E_3<E_4<E_5$;曲线含一处势垒(极大,峰顶约达 $E_4$ 高度)和一处势阱(极小,谷底约在 $E_1$ 与 $E_2$ 之间);$x$ 轴上自左向右标出 $x_3$、$O$、$x_6$、$x_4$ 以及 $x_1$、$x_5$、$x_2$ 等位置。 <!-- src: PH-C04#p029g1; type: direct -->

### 由势能曲线求振动周期

取机械能为 $E_2$,一维运动满足:

$$
\frac12 m\left(\frac{\mathrm{d}x}{\mathrm{d}t}\right)^2+U(x)=E_2
$$

<!-- src: PH-C04#p030; type: direct -->

- 解出速度(取 $\pm$ 号):$\dfrac{\mathrm{d}x}{\mathrm{d}t}=\pm\sqrt{\dfrac{2}{m}\left[E_2-U(x)\right]}$。 <!-- src: PH-C04#p030; type: direct -->
- 分离变量:$\mathrm{d}t=\dfrac{\mathrm{d}x}{\pm\sqrt{\dfrac{2}{m}\left[E_2-U(x)\right]}}$。 <!-- src: PH-C04#p030; type: direct -->

由 $x_1$ 到 $x_2$ 所需时间(把常因子提出根号):

$$
\int_{t_1}^{t_2}\mathrm{d}t=\sqrt{\frac{m}{2}}\int_{x_1}^{x_2}\frac{\mathrm{d}x}{\sqrt{E_2-U(x)}}\;,\qquad t_2-t_1=\sqrt{\frac{m}{2}}\int_{x_1}^{x_2}\frac{\mathrm{d}x}{\sqrt{E_2-U(x)}}
$$

<!-- src: PH-C04#p030; type: direct -->

- $x_1\to x_2$ 的时间为 $\sqrt{\dfrac{m}{2}}\displaystyle\int_{x_1}^{x_2}\dfrac{\mathrm{d}x}{\sqrt{E_2-U(x)}}$;$x_2\to x_1$ 的时间为同一表达式 $\sqrt{\dfrac{m}{2}}\displaystyle\int_{x_1}^{x_2}\dfrac{\mathrm{d}x}{\sqrt{E_2-U(x)}}$,两者相等。 <!-- src: PH-C04#p031; type: direct -->
- 一个完整振动为往返两段之和,周期为两段相加:$T=2\sqrt{\dfrac{m}{2}}\displaystyle\int_{x_1}^{x_2}\dfrac{\mathrm{d}x}{\sqrt{E_2-U(x)}}$。 <!-- src: PH-C04#p031; type: direct -->
- 周期 $T$ 即质点完成一个运动循环所需的时间。 <!-- src: PH-C04#p031; type: direct -->

### 单个质点的机械能守恒

- 当 $\vec F$ 为保守力(F is conservative)时,其做功等于势能增量的负值:$\displaystyle\int_a^b\vec F\cdot\mathrm{d}\vec r=-\Delta U$。 <!-- src: PH-C04#p032; type: direct -->
- $\vec F$ 做功等于质点动能的增量:$\displaystyle\int_a^b\vec F\cdot\mathrm{d}\vec r=\Delta K$。 <!-- src: PH-C04#p032; type: direct -->
- 两式给出 $\Delta K+\Delta U=0$,即 $\Delta(K+U)=0$。 <!-- src: PH-C04#p032; type: direct -->

$$
E=K+U=\text{const.}
$$

<!-- src: PH-C04#p032; type: direct -->

- 在上述条件($\vec F$ 为保守力)下,机械能是一个不变量。 <!-- src: PH-C04#p032; type: direct -->
- 该结论称为机械能守恒(Conservation of mechanical energy),适用对象为单个质点。 <!-- src: PH-C04#p032; type: direct -->

## §4.3 机械能守恒定律

### 质点系受力的分类

- 质点系受到的力分为外力与内力。<!-- src: PH-C04#p033; type: direct -->
- 内力又分为保守内力与非保守内力两类。<!-- src: PH-C04#p033; type: direct -->

### 一对作用力与反作用力的功

- 一对作用力与反作用力的功(元功)为 $\mathrm{d}A=\vec F_{ij}\cdot\mathrm{d}\vec r_{ji}$。<!-- src: PH-C04#p033; type: direct -->
- 图中符号约定:$\vec r_{ji}$ 为由 $j$ 指向 $i$ 的相对位置矢量;$\mathrm{d}\vec r_{ji}$ 为相对位置矢量的增量(相对位移);$\mathrm{d}\vec r_i$、$\mathrm{d}\vec r_j$ 分别为质点 $i$、$j$ 各自的位移;相对位置矢量由 $\vec r_{ji}$ 改变为 $\vec r_{ji}+\mathrm{d}\vec r_{ji}$。<!-- src: PH-C04#p033g1; type: direct -->

### 保守内力与两质点的相互作用势能

- 当两质点从相对位置矢量 $\vec r_{ji}$ 改变为 $\vec r_{ji}+\mathrm{d}\vec r_{ji}$ 的过程中,两质点之间的一对保守内力做功之和仅与两质点始末的相对位置有关,与两质点的具体运动路径无关。<!-- src: PH-C04#p033; type: direct -->
- 两质点在相互作用的一对保守内力作用下,处在一定相对位置时具有一定的势能,该势能称为两质点的相互作用势能。<!-- src: PH-C04#p033; type: direct -->
- 相对位置改变时,这一对保守内力做功之和 = 两质点的相互作用势能增量的负值。<!-- src: PH-C04#p033; type: direct -->

### 两质点的相互作用势能与质点系势能

- 第 $i$ 和第 $j$ 两质点的相互作用势能记为 $U_{ij}$。<!-- src: PH-C04#p034; type: direct -->
- 质点系的势能为各对质点相互作用势能之和:
  $$
  U=\sum_{i}\sum_{j>i}U_{ij}
  $$
  
  <!-- src: PH-C04#p034; type: direct -->
- 求和中取 $j>i$,是为了在进行逐对计算时避免重复。<!-- src: PH-C04#p034; type: direct -->

### 质点系保守内力的功

- 质点系保守内力的功等于质点系势能增量的负值:
  $$
  A_{CI}=-\Delta U
  $$
  
  <!-- src: PH-C04#p034; type: direct -->

### 质点系的动能定理

- 质点系动能定理:外力的功 $A_e$ 与内力的功 $A_I$ 之和等于质点系动能的增量。
  $$
  A_e+A_I=\Delta K
  $$
  
  <!-- src: PH-C04#p035; type: direct -->
- 将内力的功分为非保守内力的功 $A_{NI}$ 与保守内力的功 $A_{CI}$(其中 $A_{CI}=-\Delta U$),代入得:
  $$
  A_e+A_{NI}+A_{CI}=\Delta K
  $$
  
  <!-- src: PH-C04#p035; type: direct -->
- 将 $A_{CI}=-\Delta U$ 移项,得:
  $$
  A_e+A_{NI}=\Delta K+\Delta U=\Delta(K+U)
  $$
  
  <!-- src: PH-C04#p035; type: direct -->
- 质点系的机械能定义为 $E=K+U$。<!-- src: PH-C04#p035; type: direct -->

### 功能原理

- 功能原理:外力的功与非保守内力的功之和等于质点系机械能的增量。
  $$
  A_e+A_{NI}=\Delta E
  $$
  
  <!-- src: PH-C04#p035; type: direct -->

### 孤立系统与能量守恒和转换定律

- 孤立系统:$A_{NI}=\Delta E$,称为能量守恒和转换定律。<!-- src: PH-C04#p036; type: direct -->
- 由功能原理 $A_e+A_{NI}=\Delta E$ 与孤立系统的 $A_{NI}=\Delta E$ 比较可知,孤立系统中 $A_e=0$。<!-- src: PH-C04#p036; type: one-step-inferred -->
- 当 $A_{NI}>0$ 时 $\Delta E>0$,表示其他形式的能量转化为机械能。<!-- src: PH-C04#p036; type: direct -->
- 当 $A_{NI}<0$ 时 $\Delta E<0$,表示机械能转化为其他形式的能量。<!-- src: PH-C04#p036; type: direct -->

### 机械能守恒定律

- 如果 $A_e=0$ 且 $A_{NI}=0$,则 $\Delta E=0$,即 $E=\text{const.}$,有
  $$
  K+U=K_0+U_0
  $$
  
  <!-- src: PH-C04#p036; type: direct -->
- 上式即机械能守恒定律。<!-- src: PH-C04#p036; type: direct -->

### 质量与能量的关系

考虑一个充分小的过程 $t\to t+\mathrm{d}t$,通过外力作功使质点动能增加,由动能微元出发:<!-- src: PH-C04#p037; type: direct -->

$$
\mathrm{d}K=\vec F\cdot\mathrm{d}\vec r=\vec F\cdot\frac{\mathrm{d}\vec r}{\mathrm{d}t}\mathrm{d}t=\vec F\cdot\vec v\,\mathrm{d}t=\frac{\mathrm{d}(m\vec v)}{\mathrm{d}t}\cdot\vec v\,\mathrm{d}t
$$

<!-- src: PH-C04#p037; type: direct -->

其中外力采用动量形式 $\vec F=\dfrac{\mathrm{d}(m\vec v)}{\mathrm{d}t}$。<!-- src: PH-C04#p037; type: direct -->

将 $m\vec v$ 的微分按乘积法则展开:<!-- src: PH-C04#p037; type: direct -->

$$
\mathrm{d}K=\mathrm{d}(m\vec v)\cdot\vec v=(\mathrm{d}m)\,\vec v\cdot\vec v+m(\mathrm{d}\vec v)\cdot\vec v
$$

<!-- src: PH-C04#p037; type: direct -->

利用矢量点积恒等式(不可跳过的关键步骤),把 $(\mathrm{d}\vec v)\cdot\vec v$ 化为标量微分:<!-- src: PH-C04#p037; type: direct -->

$$
(\mathrm{d}\vec v)\cdot\vec v=\tfrac12\mathrm{d}(\vec v\cdot\vec v)=v\,\mathrm{d}v
$$

<!-- src: PH-C04#p037; type: direct -->

又 $\vec v\cdot\vec v=v^2$,代入得动能增量的一般表达式:<!-- src: PH-C04#p037; type: direct -->

$$
\mathrm{d}K=v^2\,\mathrm{d}m+mv\,\mathrm{d}v
$$

<!-- src: PH-C04#p037; type: direct -->

### 化简 dK 得 c²dm

质量 $m$ 随速度变化,满足:<!-- src: PH-C04#p038; type: direct -->

$$
m=\frac{m_0}{\sqrt{1-\dfrac{v^2}{c^2}}}
$$

<!-- src: PH-C04#p038; type: direct -->

其中 $m_0$ 为静止质量,$c$ 为光速。对 $m$ 求微分得到 $\mathrm{d}m$ 与 $v\,\mathrm{d}v$ 的关系:<!-- src: PH-C04#p038; type: direct -->

$$
\mathrm{d}m=\frac{m_0\,v\,\mathrm{d}v}{c^2\left(1-\dfrac{v^2}{c^2}\right)^{3/2}}
$$

<!-- src: PH-C04#p038; type: direct -->

将上式整理为(把 $\dfrac{m_0}{\sqrt{1-v^2/c^2}}$ 还原为 $m$):<!-- src: PH-C04#p038; type: direct -->

$$
c^2\left(1-\frac{v^2}{c^2}\right)\mathrm{d}m=mv\,\mathrm{d}v
$$

<!-- src: PH-C04#p038; type: direct -->

把这一结果代回 $\mathrm{d}K=v^2\mathrm{d}m+mv\,\mathrm{d}v$,用 $c^2(1-v^2/c^2)\mathrm{d}m$ 替换 $mv\,\mathrm{d}v$,得到极简形式:<!-- src: PH-C04#p038; type: direct -->

$$
\mathrm{d}K=v^2\,\mathrm{d}m+c^2\left(1-\frac{v^2}{c^2}\right)\mathrm{d}m=c^2\,\mathrm{d}m
$$

<!-- src: PH-C04#p038; type: direct -->

要点:展开后 $v^2\mathrm{d}m$ 与 $-v^2\mathrm{d}m$ 抵消,只剩 $c^2\mathrm{d}m$,即动能增量正比于质量增量。<!-- src: PH-C04#p038; type: one-step-inferred -->

### 质能关系 E = mc²

由 $\mathrm{d}K=c^2\mathrm{d}m$ 出发,取初条件:当 $v=0$ 时,$m=m_0$,$K=0$。<!-- src: PH-C04#p039; type: direct -->

对两边积分(动能从 $0$ 到 $K$,质量从 $m_0$ 到 $m$):<!-- src: PH-C04#p039; type: direct -->

$$
\int_0^K\mathrm{d}K=\int_{m_0}^m c^2\,\mathrm{d}m=c^2(m-m_0)
$$

<!-- src: PH-C04#p039; type: direct -->

得相对论动能:<!-- src: PH-C04#p039; type: direct -->

$$
K=mc^2-m_0c^2
$$

<!-- src: PH-C04#p039; type: direct -->

移项写成 $mc^2=K+m_0c^2$,记总能量 $E=K+m_0c^2$,于是:<!-- src: PH-C04#p039; type: direct -->

$$
E=mc^2
$$

<!-- src: PH-C04#p039; type: direct -->

| 符号 | 名称 | 说明 |
|---|---|---|
| $E=mc^2$ | 物体的总能量 | 总能量 = 动能 + 静止能量 |
| $E_0=m_0c^2$ | 物体的静止能量 | 由静止质量 $m_0$ 决定 |
<!-- src: PH-C04#p039t1; type: synthesized -->

上述 $E=mc^2$ 称为物体的质能关系:总能量 $E$ 与质量 $m$ 通过 $c^2$ 一一对应。<!-- src: PH-C04#p039; type: one-step-inferred -->

### 静止能量的量级与举例

由于 $E_0=m_0c^2$ 中 $c^2$ 是个极大的量,各种物体都具有极大的静止能量。<!-- src: PH-C04#p040; type: direct -->

例:1 千克静止质量的任何物体所具有的静止能量<!-- src: PH-C04#p040ex1; type: direct -->

$$
E_0=(1\,\mathrm{kg})(3\times10^8\,\mathrm{m\cdot s^{-1}})^2=9\times10^{16}\,\mathrm{J}
$$

<!-- src: PH-C04#p040ex1; type: direct -->

该能量大约相当于 $2.5\times10^{10}$ 千瓦小时。<!-- src: PH-C04#p040ex1; type: direct -->

可供 100 W 的灯泡点 $10^{10}$ 天以上,大约三千万年,这是一个相当惊人的数字。<!-- src: PH-C04#p040ex1; type: direct -->

### 质量亏损与原子核结合能

由质能关系 $E=mc^2$ 取增量,得能量变化与质量变化的关系:<!-- src: PH-C04#p041; type: direct -->

$$
\Delta E=c^2\Delta m
$$

<!-- src: PH-C04#p041; type: direct -->

原子核相关量约定:核子数为 $A$(其中 $Z$ 个质子,$A-Z$ 个中子);原子核质量为 $m$,质子质量为 $m_p$,中子质量为 $m_n$。<!-- src: PH-C04#p041; type: direct -->

质量亏损(组成核子的质量之和与核质量之差):<!-- src: PH-C04#p041; type: direct -->

$$
\Delta m=Zm_p+(A-Z)m_n-m
$$

<!-- src: PH-C04#p041; type: direct -->

原子核的结合能:<!-- src: PH-C04#p041; type: direct -->

$$
\Delta E=c^2\Delta m
$$

<!-- src: PH-C04#p041; type: direct -->

单位核子的比结合能为 $\dfrac{\Delta E}{A}$。<!-- src: PH-C04#p041; type: direct -->

利用原子核反应可以得到巨大的能量。<!-- src: PH-C04#p041; type: direct -->

### 能量与动量的关系

由动量定义 $\vec p=m\vec v$,作自身点积:<!-- src: PH-C04#p042; type: direct -->

$$
\vec p\cdot\vec p=(m\vec v)\cdot(m\vec v),\qquad p^2=m^2v^2
$$

<!-- src: PH-C04#p042; type: direct -->

两边乘 $c^2$:<!-- src: PH-C04#p042; type: direct -->

$$
p^2c^2=m^2v^2c^2
$$

<!-- src: PH-C04#p042; type: direct -->

构造 $p^2c^2+m_0^2c^4$,再代入 $m=\dfrac{m_0}{\sqrt{1-v^2/c^2}}$ 化简(关键步骤:通分后分子 $m_0^2v^2c^2+m_0^2c^4(1-v^2/c^2)$ 中的 $v^2$ 项相消,只剩 $m_0^2c^4$):<!-- src: PH-C04#p042; type: direct -->

$$
p^2c^2+m_0^2c^4=m^2v^2c^2+m_0^2c^4=\frac{m_0^2v^2c^2+m_0^2c^4\left(1-\dfrac{v^2}{c^2}\right)}{1-\dfrac{v^2}{c^2}}=\frac{m_0^2c^4}{1-\dfrac{v^2}{c^2}}=m^2c^4=E^2
$$

<!-- src: PH-C04#p042; type: direct -->

故得能量–动量关系:<!-- src: PH-C04#p042; type: direct -->

$$
E^2=p^2c^2+m_0^2c^4
$$

<!-- src: PH-C04#p042; type: direct -->
