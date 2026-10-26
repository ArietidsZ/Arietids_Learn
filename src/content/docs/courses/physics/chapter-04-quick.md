---
title: "大学物理 第4章 功和能 · 速览版"
description: "大学物理课程笔记：大学物理 第4章 功和能 · 速览版。"
---

<div class="note-meta"><a href="/courses/physics/">大学物理目录</a><a href="/courses/physics/chapter-04/">阅读详版</a><a href="/downloads/physics/chapter-04-quick.md" download>下载 Markdown</a></div>

## §4.1 动能定理与功

### 质点的动能定理

- 推导前提：不考虑相对论效应，$m$ 为常量，取 $\vec F=m\dfrac{\mathrm d\vec v}{\mathrm dt}$。 <!-- src: PH-C04#p001; type: direct -->
- 核心微分关系（$\tfrac12mv^2$ 即动能 $K$）：
$$
\vec F\cdot\mathrm d\vec r=\mathrm d\!\left(\tfrac12mv^2\right)=\mathrm dK
$$

<!-- src: PH-C04#p001 + #p005; type: direct -->
- 动能 $K=\tfrac12mv^2$。 <!-- src: PH-C04#p001 + #p005; type: synthesized -->

#### 功

- 元功（点积定义，$\theta$ 为 $\vec F$ 与 $\mathrm d\vec r$ 夹角，$|\mathrm d\vec r|=\mathrm ds$）：
$$
\mathrm dA=\vec F\cdot\mathrm d\vec r=(F\cos\theta)\,\mathrm ds
$$

<!-- src: PH-C04#p002; type: direct -->
- 总功为元功沿路径积分；功表征力的空间积累效果，是**过程量**（依赖路径，非状态量）：
$$
A_{AB}=\int_{\vec r_A}^{\vec r_B}\vec F\cdot\mathrm d\vec r
$$

<!-- src: PH-C04#p003; type: direct -->

#### 动能定理

- 积分形式：合外力对质点做的功等于动能增量。
$$
\int_{\vec r_A}^{\vec r_B}\vec F\cdot\mathrm d\vec r=\tfrac12mv_B^2-\tfrac12mv_A^2
$$

<!-- src: PH-C04#p004; type: direct -->
- 微分形式：$\vec F\cdot\mathrm d\vec r=\mathrm d\!\left(\tfrac12mv^2\right)$。 <!-- src: PH-C04#p005; type: direct -->
- 适用范围（易错点）：与参考系有关，**只在惯性系中成立**。 <!-- src: PH-C04#p005; type: direct -->

### 功率

- 功率等于合外力与速度点积，也等于动能对时间的变化率：
$$
P=\frac{\mathrm dA}{\mathrm dt}=\vec F\cdot\vec v=\frac{\mathrm dK}{\mathrm dt}
$$

<!-- src: PH-C04#p005; type: direct -->

### 一对作用力与反作用力的功

- $\vec F_{ij}=-\vec F_{ji}$，其元功之和只与相对位移有关（$\vec r_{ji}=\vec r_i-\vec r_j$）：
$$
\mathrm dA=\vec F_{ij}\cdot\mathrm d\vec r_{ji}
$$

<!-- src: PH-C04#p006 + #p007; type: direct -->
- 该功取决于两受力质点的相对位移，**与参考系无关**。 <!-- src: PH-C04#p007; type: direct -->
- 判据：力有沿相对位移分量（如摩擦力）则做功不为零；垂直于相对位移（如法向力）则为零。一对作用反作用力的功**一般不为零**。 <!-- src: PH-C04#p007; type: direct -->
- 例（楔块光滑、斜面有摩擦）：$\mathrm dA_f=\vec F_f\cdot\mathrm d\vec r_{ji}\neq0$；$\mathrm dA_N=\vec F_N\cdot\mathrm d\vec r_{ji}=0$（$\vec F_N\perp\mathrm d\vec r_{ji}$）。 <!-- src: PH-C04#p007; type: direct -->

### 质点系的动能定理

- 受力分外力、内力。对各质点求和：所有外力与内力做功之和等于系统动能增量。
$$
A_e+A_I=K-K_0
$$

<!-- src: PH-C04#p008 + #p009; type: direct -->
- 要点：与单质点不同，系统动能改变还含内力的功 $A_I$；内力（成对）一般也改变总动能。 <!-- src: PH-C04#p007 + #p009; type: one-step-inferred -->

## §4.2 保守力与势能

### 三种保守力做功（均与路径无关，只取决始末位置）

| 力 | 做功 $\displaystyle\int_a^b\vec F\cdot\mathrm d\vec r$ |
|---|---|
| 重力（$z$ 向上为正，$\vec F=-mg\vec k$） | $-(mgz_b-mgz_a)$ <!-- src: PH-C04#p010; type: direct --> |
| 万有引力（$\vec F=-G\frac{Mm}{r^3}\vec r$，吸引） | $-\left[\left(-G\frac{Mm}{r_b}\right)-\left(-G\frac{Mm}{r_a}\right)\right]$ <!-- src: PH-C04#p011; type: direct --> |
| 弹性力（$\vec F=-kx\vec i$，指向平衡位置） | $-\left(\tfrac12kx_b^2-\tfrac12kx_a^2\right)$ <!-- src: PH-C04#p012; type: direct --> |

### 保守力与非保守力

- 保守力：做功只与始末位置有关、与路径无关（重力、万有引力、弹性力、静电力…）。非保守力：做功与路径有关（摩擦力、回旋力…）。 <!-- src: PH-C04#p013 + #p014; type: direct -->
- 判据：保守力沿任意闭合路径做功为零，等价于做功与路径无关。
$$
\oint_L\vec F\cdot\mathrm d\vec r=0
$$

<!-- src: PH-C04#p015; type: direct -->

### 势能 $U$ 与势能零点

- 保守力做功等于势能增量的负值：
$$
\int_a^b\vec F\cdot\mathrm d\vec r=-(U_b-U_a)
$$

<!-- src: PH-C04#p018; type: direct -->
- 取 $b$ 为势能零点（$U_b=0$）时，$U_a=\displaystyle\int_a^b\vec F\cdot\mathrm d\vec r$。 <!-- src: PH-C04#p019; type: direct -->

| 势能 | 表达式 | 零点 |
|---|---|---|
| 重力势能 | $U=mgz$ | $z=0$ <!-- src: PH-C04#p019; type: direct --> |
| 引力势能 | $U=-G\dfrac{Mm}{r}$ | $r\to\infty$ <!-- src: PH-C04#p020; type: direct --> |
| 弹性势能 | $U=\tfrac12kx^2$ | $x=0$ <!-- src: PH-C04#p020; type: direct --> |

### 保守力与势能的微分关系

- $\vec F\cdot\mathrm d\vec r=-\mathrm dU$，分量 $F_x=-\dfrac{\partial U}{\partial x},\,F_y=-\dfrac{\partial U}{\partial y},\,F_z=-\dfrac{\partial U}{\partial z}$。 <!-- src: PH-C04#p021; type: direct -->
- 梯度算符 $\nabla=\vec i\dfrac{\partial}{\partial x}+\vec j\dfrac{\partial}{\partial y}+\vec k\dfrac{\partial}{\partial z}$，则 $\vec F=-\nabla U$。 <!-- src: PH-C04#p022; type: direct -->
- 径向分量：$F_r=-\dfrac{\partial U}{\partial r}$。 <!-- src: PH-C04#p022; type: compressed -->

### 判断保守力的方法

- 环路积分判据：保守力沿任意闭合路径满足 $\oint_L\vec F\cdot\mathrm d\vec r=0$；若能找到一条闭合路径使积分非零，则非保守。 <!-- src: PH-C04#p023; type: direct --><!-- src: PH-C04#p024ex1; type: one-step-inferred -->
- 平面情形偏导判据：在无奇点、单连通区域且偏导连续时，可用 $\dfrac{\partial F_x}{\partial y}=\dfrac{\partial F_y}{\partial x}$ 判别（来自 $\vec F=-\nabla U$ 与二阶混合偏导相等）。 <!-- src: PH-C04#p025ex1; type: direct --><!-- src: PH-C04#p023g1 + #p025ex1; type: one-step-inferred -->
- 力场判别：均匀平行场、径向场为保守力；杂乱发散场、涡旋（环流）场为非保守力。 <!-- src: PH-C04#p023g1; type: direct -->
- 判别策略：判“保守”须对任意闭合路径成立（取一般路径）；判“非保守”只需举出一条环路积分非零的路径。 <!-- src: PH-C04#p024ex1; type: one-step-inferred -->
- 由势能求功：$A=-(U_b-U_a)$，与路径无关，代入始末坐标即得。 <!-- src: PH-C04#p026ex1; type: one-step-inferred -->

### 势能曲线

- 径向力 $F_r=-\dfrac{\mathrm dU}{\mathrm dr}$；平衡位置在 $\dfrac{\mathrm dU}{\mathrm dr}=0$（势能极小处 $r_0$，$F_r=0$）。 <!-- src: PH-C04#p027; type: direct -->
- 机械能 $E=K+U$，因 $K\ge0$ 故 $E\ge U$，质点只能在 $U\le E$ 区域运动。 <!-- src: PH-C04#p027 + #p029; type: direct -->
- 势能曲线作用：判各位置保守力的大小方向；据曲线形状讨论运动。 <!-- src: PH-C04#p027; type: direct -->
- 一维 $F_x=-\dfrac{\mathrm dU}{\mathrm dx}$，平衡处 $\dfrac{\mathrm dU}{\mathrm dx}=0$；极小点为稳定平衡（有回复力），极大点为不稳定平衡，另有随遇平衡。 <!-- src: PH-C04#p028; type: direct -->
- 极大处为势垒、极小处为势阱，质点可在势阱内振动。 <!-- src: PH-C04#p029; type: one-step-inferred -->

### 由势能曲线求振动周期

- 由 $\tfrac12m\left(\dfrac{\mathrm dx}{\mathrm dt}\right)^2+U(x)=E_2$ 分离变量，往返两段相加得周期：
$$
T=2\sqrt{\frac{m}{2}}\int_{x_1}^{x_2}\frac{\mathrm dx}{\sqrt{E_2-U(x)}}
$$

<!-- src: PH-C04#p030 + #p031; type: direct -->

### 单个质点的机械能守恒

- 当 $\vec F$ 为保守力时，$\int_a^b\vec F\cdot\mathrm d\vec r=-\Delta U=\Delta K$，故 $\Delta(K+U)=0$：
$$
E=K+U=\text{const.}
$$

<!-- src: PH-C04#p032; type: direct -->
- 条件：合力（$\vec F$）为保守力；适用对象为单个质点。 <!-- src: PH-C04#p032; type: direct -->

## §4.3 机械能守恒定律

### 质点系势能与保守内力的功

- 质点系受力分外力与内力，内力又分保守内力、非保守内力。 <!-- src: PH-C04#p033; type: direct -->
- 一对保守内力做功之和只与始末相对位置有关，等于两质点相互作用势能 $U_{ij}$ 增量的负值。 <!-- src: PH-C04#p033; type: direct -->
- 质点系势能为各对相互作用势能之和（取 $j>i$ 避免重复）：
$$
U=\sum_i\sum_{j>i}U_{ij}
$$

<!-- src: PH-C04#p034; type: direct -->
- 质点系保守内力的功：$A_{CI}=-\Delta U$。 <!-- src: PH-C04#p034; type: direct -->

### 功能原理

- 由动能定理 $A_e+A_I=\Delta K$，将内力分为非保守内力 $A_{NI}$ 与保守内力 $A_{CI}=-\Delta U$，机械能 $E=K+U$，移项得功能原理：外力与非保守内力做功之和等于机械能增量。
$$
A_e+A_{NI}=\Delta E
$$

<!-- src: PH-C04#p035; type: direct -->

### 能量守恒与机械能守恒

- 孤立系统（$A_e=0$）：$A_{NI}=\Delta E$，即能量守恒和转换定律。$A_{NI}>0$ 时其他能转为机械能，$A_{NI}<0$ 时机械能转为其他能。 <!-- src: PH-C04#p036; type: direct -->
- 机械能守恒条件：$A_e=0$ 且 $A_{NI}=0$，则 $\Delta E=0$：
$$
K+U=K_0+U_0
$$

<!-- src: PH-C04#p036; type: direct -->

### 质能关系

- 动能增量一般式（$\vec F=\dfrac{\mathrm d(m\vec v)}{\mathrm dt}$，乘积法则展开）：$\mathrm dK=v^2\,\mathrm dm+mv\,\mathrm dv$。 <!-- src: PH-C04#p037; type: direct -->
- 由 $m=\dfrac{m_0}{\sqrt{1-v^2/c^2}}$ 得 $mv\,\mathrm dv=c^2\left(1-\frac{v^2}{c^2}\right)\mathrm dm$，代回后 $v^2$ 项抵消：$\mathrm dK=c^2\,\mathrm dm$。 <!-- src: PH-C04#p038; type: direct -->
- 由 $v=0$ 时 $m=m_0,\,K=0$ 积分，得相对论动能与总能量：
$$
K=mc^2-m_0c^2,\qquad E=K+m_0c^2=mc^2
$$

<!-- src: PH-C04#p039; type: direct -->
- 静止能量 $E_0=m_0c^2$（由静止质量决定），总能量 = 动能 + 静止能量。 <!-- src: PH-C04#p039t1; type: synthesized -->
- 质能关系增量式：$\Delta E=c^2\Delta m$。 <!-- src: PH-C04#p041; type: direct -->
- 质量亏损 $\Delta m=Zm_p+(A-Z)m_n-m$，原子核结合能 $\Delta E=c^2\Delta m$，比结合能 $\dfrac{\Delta E}{A}$。 <!-- src: PH-C04#p041; type: direct -->
- 能量–动量关系：
$$
E^2=p^2c^2+m_0^2c^4
$$

<!-- src: PH-C04#p042; type: direct -->
