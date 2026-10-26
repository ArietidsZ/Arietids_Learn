---
title: "第6章 刚体力学基础"
description: "大学物理课程笔记：第6章 刚体力学基础。"
---

<div class="note-meta"><a href="/courses/physics/">大学物理目录</a><a href="/courses/physics/chapter-06-quick/">阅读速览</a><a href="/downloads/physics/chapter-06.md" download>下载 Markdown</a></div>

## §6.1 刚体的运动

### 刚体的概念

- 刚体：在所研究的问题中不发生形变的运动物体。<!-- src: PH-C06#p002; type: direct -->
- 既考虑物体的质量，又考虑物体的形状和大小，但忽略物体的形变。<!-- src: PH-C06#p002; type: direct -->
- 刚体可视为质量连续分布的、且任意两质元之间相对距离保持不变的质点系；它是特殊的质点系、理想模型（物理模型）。<!-- src: PH-C06#p002; type: compressed -->

### 刚体的运动形式

#### 平动 translation

- 平动：刚体内任一条直线在运动中始终保持它的方向不变。<!-- src: PH-C06#p002; type: direct -->
- 平动时，刚体上所有点的运动都相同，可作为一个质点处理。<!-- src: PH-C06#p002; type: compressed -->

#### 转动 rotation

- 转动：刚体上各质元都绕同一直线（转轴）作圆周运动。<!-- src: PH-C06#p003; type: direct -->
- a. 定轴转动，如：门、窗的转动等。<!-- src: PH-C06#p003; type: direct -->
- b. 定点转动，如：陀螺的转动。<!-- src: PH-C06#p003; type: direct -->

### 刚体定轴转动 rotation of a rigid body about a fixed axis

- 研究刚体定轴转动时，通常取垂直于转轴的任一平面作为转动平面。<!-- src: PH-C06#p004; type: direct -->
- 在转动平面上任选一质元 P；图示质元 P 在 $t_1 \to t_2$ 内由位置 P 转到 P'。<!-- src: PH-C06#p004g1; type: direct -->
- 角速度 $\vec{\omega}$ 沿转轴（z 轴）方向，其指向由右手螺旋法则确定（图中右手四指沿转动方向弯曲，拇指指向 $\vec{\omega}$）。<!-- src: PH-C06#p004g1; type: direct -->
- 刚体内各质元的角速度是一样的。<!-- src: PH-C06#p004; type: direct -->

### 角速度与线速度

- 在转动平面上，位置矢量 $\vec{r}$ 与某一选定的方向之间的夹角为 $\varphi$。<!-- src: PH-C06#p005; type: direct -->
- 取微元 $t \to t+\mathrm{d}t$、$\varphi \to \varphi+\mathrm{d}\varphi$，则角速度

$$
\omega = \frac{\mathrm{d}\varphi}{\mathrm{d}t}
$$


<!-- src: PH-C06#p005; type: direct -->

- 线速度与角速度的矢量关系：

$$
\vec{v} = \vec{\omega}\times\vec{r} \qquad \vec{v} = -\vec{r}\times\vec{\omega}
$$


<!-- src: PH-C06#p005; type: direct -->

- 线速度大小：$v = \omega r$。<!-- src: PH-C06#p005; type: direct -->

### 角加速度、切向与法向加速度

- 角加速度：

$$
\alpha = \frac{\mathrm{d}\omega}{\mathrm{d}t}
$$


<!-- src: PH-C06#p006; type: direct -->

- 线速度大小：$v = r\omega$。<!-- src: PH-C06#p006; type: direct -->
- 图中角加速度 $\vec{\alpha}$ 与角速度 $\vec{\omega}$ 均沿转轴方向。<!-- src: PH-C06#p006g1; type: direct -->
- 质元加速度（Acceleration of a Point in a Rotating Rigid Body）分为切向与法向分量；图中质元 P 处 $\vec{a}_t$ 沿圆周切向、$\vec{a}_n$ 指向转轴（向心）。<!-- src: PH-C06#p006g1; type: direct -->

切向加速度：

$$
a_t = \frac{\mathrm{d}v}{\mathrm{d}t} = r\frac{\mathrm{d}\omega}{\mathrm{d}t} = r\alpha
$$


<!-- src: PH-C06#p006; type: direct -->

法向加速度：

$$
a_n = \frac{v^2}{r} = r\omega^2
$$


<!-- src: PH-C06#p006; type: direct -->

## §6.2 刚体的定轴转动定理

### 1. 刚体所受的力矩

设直角坐标系 $Oxyz$，取 $z$ 轴为固定转轴。
<!-- src: PH-C06#p007; type: direct -->

(1) 刚体是一个特殊的质点系：所有内力对任意参考点的力矩之和为零。
<!-- src: PH-C06#p007; type: direct -->

$$
\vec{M}_I = \sum_{i=1}^{n}\left(\vec{r}_i \times \sum_{j\neq i}\vec{F}_{ij}\right) = 0
$$

<!-- src: PH-C06#p007; type: direct -->

刚体所受的合力对 $O$ 点的力矩 = 刚体所受的合外力对 $O$ 点的外力矩。
<!-- src: PH-C06#p007; type: direct -->

(2) 只需要考虑外力在垂直于转轴方向的分量所产生的沿转轴方向的力矩 $M_z$。
<!-- src: PH-C06#p008; type: direct -->

设第 $i$ 个质元受外力 $\vec{F}_i$，并假定 $\vec{F}_i$ 垂直于转轴。其对 $O$ 点的力矩为
$$
\vec{M}_i = \vec{r}_i \times \vec{F}_i
$$

位矢分解为沿轴分量 $\overrightarrow{OA}$ 与垂轴分量 $\vec{R}_i$：
$$
\vec{r}_i = \overrightarrow{OA} + \vec{R}_i
$$

<!-- src: PH-C06#p008; type: direct -->

代入展开，两项分别垂直、平行于 $z$ 轴：
$$
\vec{M}_i = (\overrightarrow{OA} + \vec{R}_i)\times \vec{F}_i = \underbrace{\overrightarrow{OA}\times \vec{F}_i}_{\perp\, z\text{轴}} + \underbrace{\vec{R}_i \times \vec{F}_i}_{\parallel\, z\text{轴}}
$$

<!-- src: PH-C06#p008; type: direct -->

力矩沿 $z$ 轴的分量只来自 $\vec{R}_i \times \vec{F}_i$ 一项：
$$
\vec{M}_{iz} = \vec{R}_i \times \vec{F}_i,\qquad M_{iz} = \left|\vec{R}_i \times \vec{F}_i\right| = R_i F_i \sin\delta_i
$$

<!-- src: PH-C06#p008; type: direct -->

图示几何关系：$\vec{\omega}$ 沿 $z$ 轴；$A$ 为转轴上一点，$\overrightarrow{OA}$ 沿轴由 $O$ 指向 $A$；$\vec{R}_i$ 由轴（$A$）垂直指向质元 $\Delta m_i$；$\vec{r}_i$ 由 $O$ 指向 $\Delta m_i$；$\vec{F}_i$ 水平、垂直于转轴；$\delta_i$ 为 $\vec{R}_i$ 与 $\vec{F}_i$ 的夹角；$\vec{M}_i = \vec{r}_i \times \vec{F}_i$ 为倾斜矢量（不沿转轴）。
<!-- src: PH-C06#p008g1; type: direct -->

$\vec{F}_i$ 对 $O$ 点的力矩沿 $z$ 轴的分量，等于 $\vec{F}_i$ 对 $z$ 轴上 $A$ 点的力矩大小；推广为 $\vec{F}_i$ 对转轴上任意一点的力矩在转轴方向上的分量，即 $\vec{F}_i$ 对转轴的力矩大小。
<!-- src: PH-C06#p009; type: compressed -->

对所有质元求和，得刚体受到的外力对转轴的力矩大小（也即对转轴上任意一点的力矩在转轴方向上的分量）：
$$
M_z = \sum_i M_{iz} = \sum_i R_i F_i \sin\delta_i
$$

<!-- src: PH-C06#p009; type: direct -->

### 2. 刚体定轴转动的角动量

质元 $\Delta m_i$ 对 $O$ 点的角动量：
$$
\vec{L}_i = \vec{r}_i \times \Delta m_i \vec{v}_i,\qquad \vec{r}_i = \overrightarrow{OA} + \vec{R}_i
$$

<!-- src: PH-C06#p010; type: direct -->

代入展开，两项分别垂直、平行于 $z$ 轴：
$$
\vec{L}_i = (\overrightarrow{OA} + \vec{R}_i)\times \Delta m_i \vec{v}_i = \underbrace{\overrightarrow{OA}\times \Delta m_i \vec{v}_i}_{\perp\, z\text{轴}} + \underbrace{\vec{R}_i \times \Delta m_i \vec{v}_i}_{\parallel\, z\text{轴}}
$$

<!-- src: PH-C06#p010; type: direct -->

角动量沿 $z$ 轴的分量只来自 $\vec{R}_i \times \Delta m_i \vec{v}_i$ 一项：
$$
\vec{L}_{iz} = \vec{R}_i \times \Delta m_i \vec{v}_i,\qquad L_{iz} = \left|\vec{R}_i \times \Delta m_i \vec{v}_i\right| = R_i \cdot \Delta m_i v_i
$$

<!-- src: PH-C06#p010; type: direct -->

对整个刚体求和，利用各质元 $v_i = R_i\omega$（同一角速度）：
$$
L_z = \sum_i L_{iz} = \sum_i R_i \cdot \Delta m_i v_i = \left(\sum_i R_i^2 \Delta m_i\right)\omega
$$

<!-- src: PH-C06#p011; type: compressed -->

定义刚体对转轴 $z$ 的转动惯量：
$$
J = \sum_i R_i^2 \Delta m_i
$$

<!-- src: PH-C06#p011; type: direct -->

刚体对转轴 $z$ 的角动量：
$$
L_z = J\omega
$$

<!-- src: PH-C06#p011; type: direct -->

### 4. 刚体定轴转动定理

刚体是一个特殊的质点系，由质点系的角动量定理：
$$
\mathrm{d}\vec{L} = \vec{M}\,\mathrm{d}t,\qquad \vec{M} = \frac{\mathrm{d}\vec{L}}{\mathrm{d}t}
$$

<!-- src: PH-C06#p013; type: direct -->

对刚体的定轴转动，取 $z$ 轴分量：
$$
M_z = \frac{\mathrm{d}L_z}{\mathrm{d}t} = \frac{\mathrm{d}(J\omega)}{\mathrm{d}t}
$$

<!-- src: PH-C06#p013; type: direct -->

转动过程中刚体的 $J$ 不变，故
$$
M_z = J\frac{\mathrm{d}\omega}{\mathrm{d}t} = J\alpha
$$

$$
\vec{M} = J\vec{\alpha}\qquad\text{（刚体定轴转动定理）}
$$

<!-- src: PH-C06#p013; type: direct -->

直角坐标系（Cartesian system）下各轴分量形式：
$$
M_x = \frac{\mathrm{d}L_x}{\mathrm{d}t},\qquad M_y = \frac{\mathrm{d}L_y}{\mathrm{d}t},\qquad M_z = \frac{\mathrm{d}L_z}{\mathrm{d}t}
$$

<!-- src: PH-C06#p013; type: direct -->

### 3. 刚体对转轴的转动惯量

转动惯量定义（按质量元离散求和）：

$$
J = \sum_i r_i^2\, \Delta m_i
$$


<!-- src: PH-C06#p014; type: direct -->

若刚体由 n 个质量为 $m_1$、$m_2$、… $m_i$、… $m_n$ 的质点组成：

$$
J = \sum_{i=1}^{n} r_i^2\, m_i
$$


<!-- src: PH-C06#p014; type: direct -->

若刚体的质量连续分布：

$$
J = \int r^2\, dm \qquad dm = \rho\, dV
$$


其中 $\rho$ 为体密度；$r$ 为质量元 $dm$ 到转轴（图中 z 轴）的垂直距离。

<!-- src: PH-C06#p014; type: direct -->

#### 平行轴定理

刚体对 A 轴的转动惯量 $J_A$ 等于刚体对通过质心 C 且与 A 轴平行的 C 轴的转动惯量 $J_C$，加上刚体的质量 m 和两平行轴之间的垂直距离 d 平方的乘积：

$$
J_A = J_C + m d^2
$$


（图：A 轴与过质心 C 的轴平行，间距为 d。）

<!-- src: PH-C06#p015; type: direct -->

#### 组合定理

由多个部分组成的刚体对某轴的转动惯量等于各部分对该轴的转动惯量的和：

$$
J = J_{A_1} + J_{A_2}
$$


<!-- src: PH-C06#p015; type: direct -->

#### 例题：均质棒的转动惯量

均质棒 m、l，计算对通过中心并且与棒垂直的轴的转动惯量。

线密度 $\lambda = \dfrac{m}{l}$，质量元 $dm = \lambda\, dx = \dfrac{m}{l}\, dx$。

以轴（中心 O）为原点，沿棒取坐标 x（图：x 由 $-\tfrac{l}{2}$ 到 $\tfrac{l}{2}$）：

$$
J = \int r^2\, dm = \int x^2\, dm = \int_{-\frac{l}{2}}^{\frac{l}{2}} \frac{m}{l}\, x^2\, dx = \frac{1}{12}\, ml^2
$$


<!-- src: PH-C06#p016ex1; type: compressed -->

将轴移到棒的一端（用平行轴定理，两轴间距 $d=\tfrac{l}{2}$）：

$$
J = \frac{1}{12}\, ml^2 + m\left(\frac{l}{2}\right)^2 = \frac{1}{3}\, ml^2
$$


<!-- src: PH-C06#p016ex1; type: compressed -->

### 例题：定滑轮与两物体的角加速度和绳张力

定滑轮：m、r、J；物体：$m_1$、$m_2$。轻绳不能伸长，无相对滑动。计算滑轮转动的角加速度和绳的张力。

受力图约定（图）：$m_1$ 一侧加速度 a 向下，受 $T_1$（上）、$m_1 g$（下）；$m_2$ 一侧加速度 a 向上，受 $T_2$（上）、$m_2 g$（下）；滑轮受轴的支持力 T（上）及绳的拉力 $T_1$、$T_2$（下）、重力 mg。

两物体的牛顿方程：

$$
m_1 g - T_1 = m_1 a
$$


$$
T_2 - m_2 g = m_2 a
$$


滑轮的转动定理 $\vec{M} = J\vec{\alpha}$：

$$
T_1 r - T_2 r = J\alpha
$$


约束条件（滑轮边缘上的切向加速度大小与物体加速度大小相等）：

$$
a = r\alpha
$$


<!-- src: PH-C06#p017ex1; type: compressed -->

联立解得加速度与角加速度：

$$
a = \frac{(m_1 - m_2)\, r^2 g}{(m_1 + m_2)\, r^2 + J} \qquad \alpha = \frac{(m_1 - m_2)\, r g}{(m_1 + m_2)\, r^2 + J}
$$


<!-- src: PH-C06#p018ex1; type: direct -->

两段绳的张力：

$$
T_1 = \frac{(2 m_2 r^2 + J)\, m_1 g}{(m_1 + m_2)\, r^2 + J} \qquad T_2 = \frac{(2 m_1 r^2 + J)\, m_2 g}{(m_1 + m_2)\, r^2 + J}
$$


<!-- src: PH-C06#p018ex1; type: direct -->

### 例题：均质细棒受水平冲力——轴反力与打击中心

均质细棒 m、l，对水平轴 O：$J = \dfrac{ml^2}{3}$。处于铅直位置时，一水平冲力 F 作用于距 O 为 $l'$ 处，计算 O 轴对棒的作用力（轴反力）。

轴反力分解：$\vec{N} = N_x \vec{i} + N_y \vec{j} = \vec{N}_x + \vec{N}_y$（图：O 在上端，x 向右、y 向上；质心 c 在棒上，$\vec{F}$ 水平、$mg$ 向下）。

转动定理：

$$
F l' = J\alpha
$$


质心运动定理（质心在 $\tfrac{l}{2}$ 处）：

$$
F + N_x = m a_{cx} = m\,\frac{l}{2}\,\alpha
$$


$$
N_y - mg = m a_{cy} = m\,\frac{l}{2}\,\omega^2 = 0
$$


解得：

$$
N_x = F\left(\frac{3 l'}{2 l} - 1\right) \qquad N_y = mg
$$


<!-- src: PH-C06#p019ex1; type: compressed -->

讨论：

- $l' = \dfrac{2l}{3} \Rightarrow N_x = 0$，此时 F 的作用点称打击中心。
- $l' > \dfrac{2l}{3} \Rightarrow N_x > 0$。
- $l' < \dfrac{2l}{3} \Rightarrow N_x < 0$。

<!-- src: PH-C06#p019ex1; type: direct -->

## §6.3 刚体定轴转动中的功能关系

### 1. 刚体定轴转动的动能定理

刚体是一个特殊的质点系，由质点系的动能定理出发：

$$
dA = dT
$$


<!-- src: PH-C06#p020; type: direct -->

第 $i$ 个质元的动能 $T_i = \frac{1}{2}\Delta m_i v_i^2$，整个刚体（绕定轴 $z$，第 $i$ 质元到轴的距离 $r_i$，速度 $\vec{v}_i$，满足 $v_i = r_i\omega$）的动能为：

$$
T = \sum_i \frac{1}{2}\Delta m_i v_i^2 = \sum_i \frac{1}{2}\Delta m_i r_i^2 \omega^2 = \frac{1}{2}\left(\sum_i r_i^2 \Delta m_i\right)\omega^2
$$


<!-- src: PH-C06#p020; type: direct -->
<!-- src: PH-C06#p020g1; type: direct -->

由于 $\sum_i r_i^2 \Delta m_i = J$，得刚体定轴转动的**转动动能**：

$$
T = \frac{1}{2}J\omega^2
$$


<!-- src: PH-C06#p021; type: direct -->

$dA = dT$ 中的功 $A$ 包括外力做的功与内力做的功；由于刚体内各质元间的相对距离保持不变，故**内力不做功**，**仅需考虑外力做的功**：

$$
dA = \sum_i \vec{F}_i \cdot d\vec{r}_i
$$


<!-- src: PH-C06#p021; type: direct -->

#### 力矩的功

设作用在质元 $\Delta m_i$ 上的外力 $\vec{F}_i$ 位于转动平面内。图中 $|d\vec{r}_i| = r_i\, d\varphi$，且 $\cos\theta_i = \sin\alpha_i$（$\theta_i$ 为 $\vec{F}_i$ 与 $d\vec{r}_i$ 的夹角，$\alpha_i$ 为 $\vec{F}_i$ 与 $\vec{r}_i$ 的夹角）：

$$
\vec{F}_i \cdot d\vec{r}_i = F_i\,|d\vec{r}_i|\cos\theta_i = F_i \sin\alpha_i\, r_i\, d\varphi = M_i\, d\varphi
$$


<!-- src: PH-C06#p022; type: direct -->
<!-- src: PH-C06#p022g1; type: direct -->

外力对刚体做的元功（$M$ 为各质元所受外力对轴的合力矩）：

$$
dA = \sum_i M_i\, d\varphi = M\, d\varphi, \qquad M = \sum_i M_i = \sum_i r_i F_i \sin\alpha_i
$$


<!-- src: PH-C06#p022; type: direct -->

力矩在 $\varphi_1 \to \varphi_2$ 上做的功：

$$
A = \int_{\varphi_1}^{\varphi_2} M\, d\varphi
$$


<!-- src: PH-C06#p022; type: direct -->

#### 刚体定轴转动的动能定理

由 $dA = dT$，即 $M\, d\varphi = d\!\left(\frac{1}{2}J\omega^2\right)$，积分得：

$$
\int_{\varphi_1}^{\varphi_2} M\, d\varphi = \frac{1}{2}J\omega_2^2 - \frac{1}{2}J\omega_1^2
$$


<!-- src: PH-C06#p022; type: direct -->

### 2. 刚体的重力势能

刚体和地球组成一个系统，以地面为势能零点（$U=0$）。第 $i$ 个质元（到地面距离 $z_i$）的重力势能 $U_i = \Delta m_i g z_i$，整个刚体：

$$
U = \sum_i \Delta m_i g z_i = mg\,\frac{\sum_i \Delta m_i z_i}{m} = mg z_c
$$


$$
U = mg z_c
$$


其中 $z_c$ 为刚体质心 $C$ 与地面之间的距离。

<!-- src: PH-C06#p023; type: direct -->
<!-- src: PH-C06#p023g1; type: direct -->

### 3. 刚体定轴转动的功能原理

$M$ 为除重力以外的其它外力的合力矩。

<!-- src: PH-C06#p024; type: direct -->

$M_p$ 为重力的力矩，则：

<!-- src: PH-C06#p024; type: one-step-inferred -->

$$
\int_{\varphi_1}^{\varphi_2}(M_p + M)\, d\varphi = \frac{1}{2}J\omega_2^2 - \frac{1}{2}J\omega_1^2
$$


$$
\int_{\varphi_1}^{\varphi_2} M_p\, d\varphi + \int_{\varphi_1}^{\varphi_2} M\, d\varphi = \frac{1}{2}J\omega_2^2 - \frac{1}{2}J\omega_1^2
$$


<!-- src: PH-C06#p024; type: direct -->

### 轻绳绕过轮缘时两端张力的关系（推导）

模型：轻绳绕搭在半径 $r$ 的轮缘上，绳与轮之间摩擦系数为 $\mu$；取张开角为 $d\theta$ 的一段绳质元分析。绳元两端张力为 $T(\theta)$ 与 $T(\theta+d\theta)$（均沿切向），轮对绳元的法向支持力为 $dN$（沿半径向外），摩擦力为 $\mu dN$（沿切向），绳元质量 $dm=\lambda\,dl$（$\lambda$ 为线密度，弧长 $dl=r\,d\theta$）；绳随轮以角速度 $\omega$ 转动，故含 $(dm)\omega^2 r$ 项。坐标取 $O$ 为轮心、$x$-$y$ 平面，质元位于角 $\theta$ 处。
<!-- src: PH-C06#p025g2; type: synthesized -->

切向（沿绳）平衡：
$$
\mu dN + T(\theta+d\theta)\cos\frac{d\theta}{2} - T(\theta)\cos\frac{d\theta}{2} = 0
$$

<!-- src: PH-C06#p025; type: direct -->

法向（沿半径，含 $(dm)\omega^2 r$ 项）平衡：
$$
-dN + T(\theta+d\theta)\sin\frac{d\theta}{2} + T(\theta)\sin\frac{d\theta}{2} - (dm)\omega^2 r = 0
$$

<!-- src: PH-C06#p025; type: direct -->

整理上两式：
$$
[T(\theta+d\theta) - T(\theta)]\cos\frac{d\theta}{2} = -\mu dN
$$

$$
[T(\theta+d\theta) + T(\theta)]\sin\frac{d\theta}{2} = dN + (\lambda dl)\omega^2 r
$$

<!-- src: PH-C06#p025; type: direct -->

小角近似（$d\theta\to 0$）：$\cos\dfrac{d\theta}{2}=1$，$\sin\dfrac{d\theta}{2}=\dfrac{d\theta}{2}$，$T(\theta+d\theta)-T(\theta)=dT$，$T(\theta+d\theta)+T(\theta)=2T(\theta)$。
<!-- src: PH-C06#p025; type: direct -->

代入近似得：
$$
dT = -\mu dN
$$

$$
T d\theta = dN + (\lambda r d\theta)\omega^2 r \quad\Rightarrow\quad (T - \lambda r^2\omega^2)\,d\theta = dN
$$

<!-- src: PH-C06#p025; type: direct -->

联立消去 $dN$、分离变量并积分：
$$
\frac{dT}{T - \lambda r^2\omega^2} = -\mu\, d\theta
$$

$$
\int_{T_B}^{T_A}\frac{d(T - \lambda\omega^2 r^2)}{T - \lambda\omega^2 r^2} = -\mu\int_{\theta_B}^{\theta_A}d\theta
$$

<!-- src: PH-C06#p025; type: direct -->

积分结果（$\varphi=\theta_A-\theta_B$ 为绳在轮上的包角）：
$$
\ln\frac{T_A - \lambda\omega^2 r^2}{T_B - \lambda\omega^2 r^2} = -\mu(\theta_A - \theta_B) = -\mu\varphi
$$

$$
T_A = (T_B - \lambda\omega^2 r^2)\,e^{-\mu\varphi} + \lambda\omega^2 r^2
$$

<!-- src: PH-C06#p025; type: direct -->

极限判据：$\mu = 0 \Rightarrow T_B = T_A$（无摩擦时绳两端张力相等）。
<!-- src: PH-C06#p025; type: direct -->

### 绳对轮缘的摩擦力矩（轻绳）

由 $dT = -\mu dN$，并令摩擦力元 $df_r=\mu dN$，故 $dT = -df_r$，积分：
$$
\int_{T_B}^{T_A} dT = -\int_{f_{rB}}^{f_{rA}} df_r
$$

$$
T_A - T_B = -(f_{rA} - f_{rB})
$$

$$
(T_A - T_B)r = -(f_{rA} - f_{rB})r
$$

<!-- src: PH-C06#p026; type: direct -->

结论：此绳子质元对轮缘的摩擦力形成对轮缘的摩擦力矩，所有质元的摩擦力矩之和就是作用于滑轮上的外力矩，而其数值恰好就是 $T_1 r - T_2 r$。
<!-- src: PH-C06#p026; type: direct -->

### 3. 刚体定轴转动的功能原理

合外力矩做功等于转动动能增量（$M_p$ 为重力矩，$M$ 为除重力以外的其它外力的合力矩）：
$$
\int_{\varphi_1}^{\varphi_2}(M_p + M)\,d\varphi = \frac{1}{2}J\omega_2^2 - \frac{1}{2}J\omega_1^2
$$

$$
\int_{\varphi_1}^{\varphi_2}M_p\, d\varphi + \int_{\varphi_1}^{\varphi_2}M\, d\varphi = \frac{1}{2}J\omega_2^2 - \frac{1}{2}J\omega_1^2
$$

<!-- src: PH-C06#p027; type: direct -->

重力矩作的功等于重力势能增量的负值：
$$
\int_{\varphi_1}^{\varphi_2}M_p\, d\varphi = -(mgz_{c2} - mgz_{c1})
$$

<!-- src: PH-C06#p027; type: direct -->

代入得刚体定轴转动的功能原理：
$$
\int_{\varphi_1}^{\varphi_2}M\, d\varphi = \left(mgz_{c2} + \frac{1}{2}J\omega_2^2\right) - \left(mgz_{c1} + \frac{1}{2}J\omega_1^2\right)
$$

<!-- src: PH-C06#p027; type: direct -->

机械能定义（$z_c$ 为质心高度）：
$$
E = mgz_c + \frac{1}{2}J\omega^2
$$

<!-- src: PH-C06#p027; type: direct -->

### 刚体定轴转动的机械能守恒

功能原理（$M$ 是除重力以外的其它外力的合力矩，机械能 $E = mgz_c + \dfrac{1}{2}J\omega^2$）：
$$
\int_{\varphi_1}^{\varphi_2}M\, d\varphi = \left(mgz_{c2} + \frac{1}{2}J\omega_2^2\right) - \left(mgz_{c1} + \frac{1}{2}J\omega_1^2\right)
$$

<!-- src: PH-C06#p028; type: direct -->

若 $M = 0$，则机械能为不变量，即刚体的机械能守恒定律：
$$
mgz_c + \frac{1}{2}J\omega^2 = \text{不变量}
$$

<!-- src: PH-C06#p028; type: direct -->

系统机械能守恒条件：如果定轴转动的刚体和其它质点以及地球组成一个系统，只要一切外力均不做功、非保守内力不做功，则该系统的机械能守恒。
<!-- src: PH-C06#p028; type: direct -->

## §6.4 定轴转动刚体的角动量定理和角动量守恒定律

### 角动量定理（由质点系角动量定理导出）

刚体是一个特殊的质点系，其角动量定理由质点系的角动量定理导出。<!-- src: PH-C06#p029; type: direct -->

$$
\vec{M}\,\mathrm{d}t = \mathrm{d}\vec{L}
$$


其中 $\vec{M}\,\mathrm{d}t$ 为外力矩在 $t\to t+\mathrm{d}t$ 内的角冲量，等于角动量增量 $\mathrm{d}\vec{L}$。<!-- src: PH-C06#p029; type: direct -->

$$
\int_{t_1}^{t_2}\vec{M}\,\mathrm{d}t = \vec{L}_2 - \vec{L}_1
$$


其中 $\int_{t_1}^{t_2}\vec{M}\,\mathrm{d}t$ 为外力矩在 $t_1\to t_2$ 内的角冲量。<!-- src: PH-C06#p029; type: direct -->

符号说明：$\vec{M} = \vec{r}\times\vec{F}$ 为刚体受到的外力对转轴的力矩；$\vec{L} = J\vec{\omega}$ 为刚体对转轴的角动量。上式即定轴转动刚体的角动量定理。<!-- src: PH-C06#p029; type: direct -->

方向关系（蓝色示意图）：在 $t\to t+\mathrm{d}t$ 内，$mg$ 方向竖直向下，力矩 $\vec{M}$ 方向垂直纸面向外（记为 $\odot$），角动量增量沿 $\vec{M}$ 方向，且 $\mathrm{d}\vec{L}=\vec{M}\,\mathrm{d}t$。<!-- src: PH-C06#p033g1; type: direct -->

### 角动量守恒定律

定轴转动刚体，当 $M = 0$ 时：

$$
L = J\omega = \text{不变量}
$$


此即定轴转动刚体的角动量守恒定律。<!-- src: PH-C06#p029; type: direct -->

### 例题：转动细棒 A 与静止物块 B 的弹性碰撞

题设：细棒 A（质量 $m$，长 $L$，绕水平 $O$ 轴），水平静止；物块 B（质量 $m$）静止于 $O$ 轴正下方、与竖直时棒下端等高（碰撞点距 $O$ 为 $L$）。细棒 A 在竖直位置与物块 B 发生弹性碰撞。求碰撞后：(1) $v_B$；(2) $\omega_2$；(3) $\theta_{\max}$。<!-- src: PH-C06#p035; type: direct -->

第一步——细棒和地球组成一个系统（机械能守恒，求碰撞前细棒到竖直位置的角速度 $\omega_1$）：

$$
mg\left(\frac{L}{2}\right) = \frac{1}{2}J\omega_1^2, \qquad J = \frac{1}{3}mL^2
$$


$$
\omega_1 = \sqrt{\frac{3g}{L}}
$$


<!-- src: PH-C06#p035; type: direct -->

第二步——细棒和物块组成一个系统（角动量守恒；弹性碰撞动能守恒）。受力分析（图示）：$O$ 轴反力 $N_x$（水平）、$N_y$（竖直）作用于 $O$ 轴；棒重 $m_A g$ 作用于棒心；碰撞处反力 $N$；物块重 $m_B g$。<!-- src: PH-C06#p036g1; type: direct -->

角动量守恒：

$$
J\omega_1 = J\omega_2 + Lmv_B
$$


动能守恒（弹性碰撞）：

$$
\frac{1}{2}J\omega_1^2 = \frac{1}{2}J\omega_2^2 + \frac{1}{2}mv_B^2
$$


<!-- src: PH-C06#p036; type: direct -->

解得：

$$
v_B = \frac{1}{2}\sqrt{3gL}, \qquad \omega_2 = -\frac{1}{2}\sqrt{\frac{3g}{L}}
$$


$\omega_2$ 为负，表示碰撞后细棒反向转动（弹回）。<!-- src: PH-C06#p036; type: one-step-inferred -->

第三步——细棒和地球组成一个系统（碰后机械能守恒）。图示细棒弹回至与竖直方向夹角 $\theta_{\max}$（自竖直位置量起，棒心记为 $C$）：

$$
\frac{1}{2}J\omega_2^2 = mg\left(\frac{L}{2} - \frac{L}{2}\cos\theta_{\max}\right)
$$


$$
\cos\theta_{\max} = \frac{3}{4}, \qquad \theta_{\max} = 41.1^\circ
$$


<!-- src: PH-C06#p036; type: direct -->

### 例题：均匀细棒与垂直落下小球的弹性碰撞

题设：均匀细棒 $M$、长 $2l$，绕水平轴 $O$（在棒中点）在竖直平面内转动，开始时细棒处于水平位置。小球 $m$ 以速度 $u$ 垂直落到棒的端点，发生弹性碰撞。求碰撞后小球的回跳速度 $v$、棒的角速度 $\omega$。<!-- src: PH-C06#p037; type: direct -->

小球和细棒组成一个系统。角动量守恒（碰后小球回跳，故取 $-lmv$）：

$$
lmu = J\omega - lmv, \qquad J = \frac{1}{3}Ml^2
$$


动能守恒（弹性碰撞）：

$$
\frac{1}{2}mu^2 = \frac{1}{2}mv^2 + \frac{1}{2}J\omega^2
$$


<!-- src: PH-C06#p037; type: direct -->

解得：

$$
v = \frac{u(M-3m)}{M+3m}, \qquad \omega = \frac{6mu}{(M+3m)l}
$$


<!-- src: PH-C06#p037; type: direct -->

## §6.5 刚体的进动 precession

### 定轴转动中 $\vec{L}$ 与 $\vec{\omega}$ 的方向

- 定轴转动：$\vec{L} = J\vec{\omega}$，$\vec{L} \parallel \vec{\omega}$（对转轴）。 <!-- src: PH-C06#p038; type: direct -->
- 对轴上任一点，$\vec{L}$ 不一定平行于 $\vec{\omega}$。 <!-- src: PH-C06#p038; type: direct -->
- 对轴上某点 $O$，角动量等于各质元角动量之和：

$$
\vec{L} = \vec{r}_1 \times m_1\vec{v}_1 + \vec{r}_2 \times m_2\vec{v}_2 = \vec{L}_1 + \vec{L}_2
$$


<!-- src: PH-C06#p038; type: direct -->

- 当 $m_1 \neq m_2$（不对称）时，对 $O$ 点 $\vec{L} \not\parallel \vec{\omega}$。 <!-- src: PH-C06#p038; type: direct -->
- 模型图：两质点 $m_1$、$m_2$ 由轻杆连接（图示 $m_1 < m_2$），绕竖直轴以 $\vec{\omega}$（向上）转动；$m_1$ 处 $\vec{v}_1$ 出纸面（⊙），$m_2$ 处 $\vec{v}_2$ 入纸面（⊗）；$\vec{r}_1$、$\vec{r}_2$ 由 $O$ 指向各质点。各质元角动量 $\vec{L}_1$、$\vec{L}_2$ 合成的 $\vec{L}$ 偏离转轴方向，故对 $O$ 点 $\vec{L} \not\parallel \vec{\omega}$。 <!-- src: PH-C06#p038g1; type: direct -->

### 质量分布对称对 $\vec{L}$ 方向的影响

- $m_1 \neq m_2$（不对称） $\Rightarrow$ 对 $O$ 点 $\vec{L} \not\parallel \vec{\omega}$。 <!-- src: PH-C06#p039; type: direct -->
- $m_1 = m_2$（对称） $\Rightarrow$ 对 $O$ 点 $\vec{L} \parallel \vec{\omega}$。 <!-- src: PH-C06#p039; type: direct -->
- 图示对比：对称情形（$m_1 = m_2$）合成角动量 $\vec{L}$ 沿转轴向上、平行于 $\vec{\omega}$；不对称情形（$m_1 \neq m_2$）$\vec{L}$ 偏离转轴。 <!-- src: PH-C06#p039g1; type: compressed -->
- 结论：如果质量分布对称、且刚体绕对称轴转动，则对轴上任一点都有 $\vec{L} \parallel \vec{\omega} \parallel$ 转轴。 <!-- src: PH-C06#p039; type: direct -->
- 此时 $\vec{L}$（对点）$= J\vec{\omega}$（对转轴）。 <!-- src: PH-C06#p039; type: direct -->

### 高速旋转的陀螺为什么能够立而不倒？

- a typical case：verticality (upright)。 <!-- src: PH-C06#p041; type: direct -->
- 图示：陀螺尖端支于支点 $O$，$\vec{\omega}$ 沿竖直轴向上，重力 $m\vec{g}$ 沿过 $O$ 的轴线向下（其作用线过支点 $O$）。 <!-- src: PH-C06#p041g1; type: direct -->
- 力矩为零 $\Rightarrow$ 角动量为恒矢量：

$$
\vec{M} = 0 \;\Rightarrow\; \vec{L} = \text{const. vector}
$$


<!-- src: PH-C06#p041; type: direct -->

- 又 $\vec{L} = J\vec{\omega}$，故 $\vec{\omega}$ 为恒矢量：

$$
\vec{L} = J\vec{\omega} \;\Rightarrow\; \vec{\omega} = \text{const. vector}
$$


<!-- src: PH-C06#p041; type: direct -->

### 陀螺的倾斜与力矩（leaning）

- leaning（倾斜情形）：陀螺轴线偏离竖直方向。 <!-- src: PH-C06#p042; type: direct -->
- 图示：支点 $O$ 在下，$\vec{L}$ 沿倾斜的陀螺轴指向斜上方；$\vec{r}_c$ 由 $O$ 指向质心，$m\vec{g}$ 竖直向下；经 $dt$ 后角动量变为 $\vec{L} + d\vec{L}$（蓝色），增量 $d\vec{L}$（红色，近水平方向）使 $\vec{L}$ 端点沿绿色虚线圆周（逆时针）运动。 <!-- src: PH-C06#p042g1; type: direct -->
- 角动量与力矩：

$$
\vec{L} = J\vec{\omega}, \qquad \vec{M} = \vec{r}_c \times m\vec{g}
$$


<!-- src: PH-C06#p042; type: direct -->

- 时间推进 $t \to t + dt$ 时，$\vec{L} \to \vec{L} + d\vec{L}$，且

$$
d\vec{L} = \vec{M}\,dt
$$


<!-- src: PH-C06#p042; type: direct -->

### 进动角速度 $\vec{\Omega}$（precession）

- 角动量矢量沿逆时针方向略微转过一个角度（The angular momentum vector has rotated slightly in a counterclockwise direction）。 <!-- src: PH-C06#p043; type: direct -->
- 图示：$\vec{\Omega}$ 沿竖直轴向上，$\vec{L}$ 与轴成 $\theta$ 角，其水平投影半径为 $L\sin\theta$；$\vec{L}$ 端点在 $dt$ 内转过方位角 $d\Theta$，产生水平增量 $d\vec{L}$（红色），$\vec{L} + d\vec{L}$（蓝色），端点沿绿色虚线圆周（逆时针）进动。 <!-- src: PH-C06#p043g1; type: direct -->
- $t \to t + dt$ 时，角动量增量大小：

$$
|d\vec{L}| = L\sin\theta\, d\Theta
$$


<!-- src: PH-C06#p043; type: direct -->

- 两边除以 $dt$，并定义进动角速度 $\Omega = \dfrac{d\Theta}{dt}$（$\vec{\Omega}$ Angular velocity of the precession）：

$$
\frac{|d\vec{L}|}{dt} = \frac{L\sin\theta\, d\Theta}{dt} = L\sin\theta\cdot\Omega
$$


<!-- src: PH-C06#p043; type: direct -->

- 由 $\dfrac{|d\vec{L}|}{dt} = M$ 得：

$$
M = L\sin\theta\cdot\Omega
$$


<!-- src: PH-C06#p043; type: direct -->

- 解出进动角速度，并代入 $L = J\omega$：

$$
\Omega = \frac{M}{L\sin\theta} = \frac{M}{J\omega\sin\theta} \propto \frac{1}{\omega}
$$


<!-- src: PH-C06#p043; type: direct -->

- 趋势：$\omega \uparrow \;\to\; \Omega \downarrow$（自转越快，进动越慢）。 <!-- src: PH-C06#p043; type: direct -->

### 进动的近似性与章动

前面只是近似讨论，因为当进动发生后，刚体的总角速度为
$$
\vec{\omega}_{\text{总}}=\vec{\omega}+\vec{\Omega}
$$

只有高速自转 $\omega \gg \Omega$ 时，才有 $\vec{\omega}_{\text{总}}\approx\vec{\omega}$，这时才有 $\vec{L}_O \approx J\vec{\omega}$。
<!-- src: PH-C06#p044; type: direct -->

或者当质量分布偏离轴对称、考虑到 $\vec{\Omega}$ 对 $\vec{\omega}_{\text{总}}$ 的贡献时，自转轴在进动时还会出现微小的上下周期性摆动，这种运动叫章动 (nutation)。
<!-- src: PH-C06#p044; type: direct -->

进动几何关系（图示）：竖直虚线轴方向为 $\vec{\Omega}$，角动量 $\vec{L}=J\vec{\omega}$ 由 O 点出发、与竖直轴成夹角 $\theta$。$\vec{L}$ 绕竖直轴扫出半径为 $L\sin\theta$ 的水平圆（绿色虚线圆）。微小时间内 $\vec{L}$ 的增量 $d\vec{L}$（红色）为水平方向，使 $\vec{L}$ 变为 $\vec{L}+d\vec{L}$（紫色），对应进动角增量 $d\Theta$。
<!-- src: PH-C06#p044g1; type: direct -->

### 演示：小行星撞击地球（科幻电影模型）

在一部关于小行星撞击地球的科幻电影建模中（a model Earth / a model asteroid）。取地球自转角动量初值（沿 $\vec{k}$，即 $z$ 轴自转方向）：
$$
\vec{L}_i = J\vec{\omega} = J\omega\vec{k}
$$

撞击力沿 $-\vec{j}$ 方向：
$$
\vec{F} = -F\vec{j}
$$

力矩（力臂 $2R$，方向沿 $\vec{i}$）：
$$
\vec{M} = \vec{r}\times\vec{F} = (2R)F\vec{i}
$$

<!-- src: PH-C06#p045; type: direct -->

在 $t \to t+dt$ 内，角动量由 $\vec{L}_i$ 变为 $\vec{L}_f$：
$$
\vec{L}_f - \vec{L}_i = d\vec{L},\qquad \vec{L}_f = \vec{L}_i + d\vec{L}
$$

其中 $d\vec{L} = \vec{M}\,dt$，且 $d\vec{L} = dL\,\vec{i}$（沿 $\vec{i}$ 方向），故
$$
\vec{L}_f = J\omega\vec{k} + dL\,\vec{i}
$$

<!-- src: PH-C06#p045; type: direct -->

即撞击使原本沿 $\vec{k}$ 的自转角动量叠加一个沿 $\vec{i}$ 的水平分量，自转轴方向随之偏转。
<!-- src: PH-C06#p045; type: one-step-inferred -->

图示：地球绕 $z$ 轴自转（$\vec{\omega},\vec{L}$ 沿 $z$ 向上，标出 N、S 极、O 点及 $x,y,z$ 轴），小行星以速度 $\vec{v}$ 撞向地球；撞击后 $\vec{L}_i$ 与 $\vec{L}_f$ 之间出现偏角，差矢量 $d\vec{L}$ 为水平方向。
<!-- src: PH-C06#p045g1; type: direct -->

### 演示：高速旋转的子弹

$$
\vec{L} = J\vec{\omega},\qquad d\vec{L} = \vec{M}\,dt
$$

图示飞行中的旋转物体，标出阻力 $\vec{f}_r$、角动量 $\vec{L}$ 与速度 $\vec{v}$；右侧为飞行中的弹体。
<!-- src: PH-C06#p047; type: direct -->

## §6.6 刚体的平面平行运动

### 平面平行运动的定义与参考平面

- 刚体的平面平行运动：如果刚体内**所有质元的轨道平面**都平行于**某一固定平面**，所有这些平面相互平行；在平面平行运动中，刚体内每一个质元都在自己对应的一个平面内运动。<!-- src: PH-C06#p049; type: direct -->
- 刚体内**垂直于上述平面的任一直线**在平面平行运动中**始终垂直于上述平面**；**同一直线上各点的运动状态都相同**。<!-- src: PH-C06#p049; type: direct -->
- 参考平面：研究平面平行运动时，只须取上述这些平面中的**任意一个平面**进行研究就够了。三维刚体的平面平行运动简化为**参考平面上各点的二维运动**。<!-- src: PH-C06#p049; type: direct -->

### 特例、基点与基轴

- 平面平行运动的特例：两个自由度的纯平动；定轴转动。<!-- src: PH-C06#p050; type: direct -->
- 基点：选定参考平面上一点作为基点。基轴：通过基点且垂直于参考平面的直线。<!-- src: PH-C06#p050; type: direct -->
- 刚体做平面平行运动时，参考平面上各点的运动 = 基点的平动 + 绕过基点的定轴的转动。<!-- src: PH-C06#p050; type: direct -->
- 从三维空间看，刚体的平面平行运动 = 基轴的平动 + 绕基轴的转动；通常选基轴通过质心。<!-- src: PH-C06#p050; type: direct -->

### 各点速度关系（基点取为质心）

- 假设基点为质心，参考平面上各点的速度可表示为：

$$
\vec{v} = \vec{v}_C + \vec{\omega} \times \vec{R}
$$


$$
\vec{v}_A = \vec{v}_C + \vec{\omega} \times \vec{R}_A \qquad \vec{v}_B = \vec{v}_C + \vec{\omega} \times \vec{R}_B
$$


<!-- src: PH-C06#p051; type: direct -->

### 角速度与基点选择无关（角速度绝对性）

- 命题：刚体绕基轴转动的角速度与基轴选择无关。<!-- src: PH-C06#p051; type: direct -->
- 证明（设两基点 $C$、$C'$，对同一点 $P$）：

$$
\vec{v}_P = \vec{v}_C + \vec{\omega} \times \vec{R} \qquad \vec{v}_P = \vec{v}_{C'} + \vec{\omega}' \times \vec{R}'
$$


其中 $\vec{v}_{C'} = \vec{v}_C + \vec{\omega} \times \vec{R}_{C'}$，$\vec{R} = \vec{R}_{C'} + \vec{R}'$。<!-- src: PH-C06#p051; type: direct -->

- 代入并整理：

$$
\vec{v}_C + \vec{\omega} \times \vec{R} = \vec{v}_{C'} + \vec{\omega}' \times \vec{R}' = \vec{v}_C + \vec{\omega} \times \vec{R}_{C'} + \vec{\omega}' \times \vec{R}' = \vec{v}_C + \vec{\omega} \times (\vec{R} - \vec{R}') + \vec{\omega}' \times \vec{R}'
$$


<!-- src: PH-C06#p051; type: direct -->

- 消去同类项后：

$$
0 = \vec{\omega} \times (-\vec{R}') + \vec{\omega}' \times \vec{R}'
$$


$$
\vec{\omega} \times \vec{R}' = \vec{\omega}' \times \vec{R}' \quad \Rightarrow \quad \vec{\omega} = \vec{\omega}'
$$


即角速度与基点的选择无关。<!-- src: PH-C06#p052; type: direct -->

- 结论：不管选择刚体上任何一点，刚体绕通过该点并垂直于参考平面的轴的角速度矢量都是一样的。在这个意义上，刚体的角速度具有**绝对性**。<!-- src: PH-C06#p052; type: direct -->
- 因此：刚体的平面平行运动 = 刚体质心的平动 + 相对于通过质心并垂直于参考平面的轴的转动。<!-- src: PH-C06#p052; type: direct -->
- 图示：刚体做平面平行运动（被抛出）时，质心 $C$ 沿一条曲线轨迹平动，同时刚体绕质心转动，体现"质心平动 + 绕质心转动"的分解。<!-- src: PH-C06#p054g1; type: synthesized -->

### 平面平行运动的角动量

- 总角动量（位矢分解 $\vec{r} = \vec{r}' + \vec{r}_p$，$\vec{r}_p$ 为 $p$ 点位矢，$\vec{r}'$ 为 $dm$ 相对 $p$ 的位矢）：

$$
\vec{L} = \int \vec{r} \times \vec{v}\, dm = \int (\vec{r}' + \vec{r}_p) \times \vec{v}\, dm = \int \vec{r}' \times \vec{v}\, dm + \int \vec{r}_p \times \vec{v}\, dm
$$


<!-- src: PH-C06#p055; type: direct -->

- 定义相对 $p$ 点的角动量：$\displaystyle \vec{L}_p = \int \vec{r}' \times \vec{v}\, dm$，于是 $\displaystyle \vec{L} = \vec{L}_p + \vec{r}_p \times \int \vec{v}\, dm$。<!-- src: PH-C06#p055; type: direct -->
- 其中（用质心定义）：

$$
\int \vec{v}\, dm = \int \frac{d\vec{r}}{dt}\, dm = \frac{d}{dt}\int \vec{r}\, dm = M\,\frac{d}{dt}\frac{\int \vec{r}\, dm}{M} = M\,\frac{d\vec{r}_c}{dt} = M\vec{v}_c \quad(\text{质心速度})
$$


<!-- src: PH-C06#p055; type: direct -->

- 故角动量分解式：

$$
\vec{L} = \vec{L}_p + \vec{r}_p \times M\vec{v}_c
$$


<!-- src: PH-C06#p055; type: direct -->

- 对时间求导（用 $\dfrac{d\vec{r}_p}{dt} = \vec{v}_p$ 与 $\vec{F} = M\dfrac{d\vec{v}_c}{dt}$）：

$$
\frac{d\vec{L}}{dt} = \frac{d\vec{L}_p}{dt} + \frac{d\vec{r}_p}{dt} \times M\vec{v}_c + \vec{r}_p \times M\frac{d\vec{v}_c}{dt} = \frac{d\vec{L}_p}{dt} + \vec{v}_p \times M\vec{v}_c + \vec{r}_p \times \vec{F}
$$


<!-- src: PH-C06#p055; type: direct -->

### 力矩分解与平面平行运动的角动量定理

- 合外力矩对 $p$ 点分解：

$$
\vec{M} = \sum_i \vec{r} \times \vec{F}_i = \sum_i (\vec{r}' + \vec{r}_p) \times \vec{F}_i = \vec{M}_p + \vec{r}_p \times \sum_i \vec{F}_i
$$


其中 $\displaystyle \vec{M}_p = \sum_i \vec{r}' \times \vec{F}_i$，得 $\vec{M} = \vec{M}_p + \vec{r}_p \times \vec{F}$。<!-- src: PH-C06#p056; type: direct -->

- 由 $\dfrac{d\vec{L}}{dt} = \vec{M}$ 代入两组展开式，消去 $\vec{r}_p \times \vec{F}$ 得：

$$
\frac{d\vec{L}_p}{dt} = \vec{M}_p - \vec{v}_p \times M\vec{v}_c
$$


<!-- src: PH-C06#p056; type: direct -->

- 满足以下任一条件时，$\vec{v}_p \times M\vec{v}_c = 0$，从而 $\dfrac{d\vec{L}_p}{dt} = \vec{M}_p$：<!-- src: PH-C06#p056; type: direct -->
  - ① $p$ 点的速度始终与刚体的质心速度方向平行；<!-- src: PH-C06#p056; type: direct -->
  - ② $p$ 点静止不动。<!-- src: PH-C06#p056; type: direct -->
- 如果 $p$ 点是质心，且在质心系中观察，则 $\dfrac{d\vec{L}_c}{dt} = \vec{M}_c$。<!-- src: PH-C06#p056; type: direct -->
- 瞬心：$p$ 点瞬时速度为零。例：轮子纯滚动时，轮子和地面的接触点的运动速度为零。<!-- src: PH-C06#p056; type: direct -->

### 滚动与瞬心

圆形物体在平面或曲面上的滚动（即刚体在刚性平面/曲面上的滚动），按接触面之间是否有相对滑动分为两类：

- 接触面之间有相对滑动的滚动 = 有滑动滚动
- 接触面之间无相对滑动的滚动 = 无滑动滚动 = 纯滚动

<!-- src: PH-C06#p057; type: direct -->

刚体作纯滚动时，刚体上存在一个特殊点，其瞬时速度为零，该点称为瞬心；瞬心即纯滚动中的瞬时转轴。

<!-- src: PH-C06#p057; type: direct -->

瞬心条件推导（$\vec{r}_P$ 为瞬心的位置矢量）：

$$
\vec{v}_P = \vec{v}_C + \vec{\omega} \times \vec{r}_P
$$


令 $\vec{v}_P = 0$，得 $0 = \vec{v}_C + \vec{\omega} \times \vec{r}_P$，即 $\vec{\omega} \times \vec{r}_P = -\vec{v}_C$。由于 $\vec{\omega} \perp \vec{r}_P$ 且 $\vec{v}_C \perp \vec{r}_P$，故

$$
v_C = r_P\,\omega
$$


<!-- src: PH-C06#p057; type: direct -->

### 圆柱体在平面或曲面上的滚动

刚体作纯滚动时，刚体上与承滚面接触的那一点（线）是瞬时静止的，即瞬心 P（瞬时转轴）。

<!-- src: PH-C06#p058; type: direct -->

由 $\vec{v}_P = \vec{v}_C + \vec{\omega} \times \vec{r}_P$ 及 $\vec{v}_P = 0$，得 $0 = \vec{v}_C + \vec{\omega} \times \vec{r}_P$，$v_C = r_P\omega$。对半径为 $R$ 的圆柱体，瞬心 P 在底部接触点（$r_P = R$）：

- 质心的速度 $v_C = R\omega$
- 质心的加速度 $a_C = R\alpha$

<!-- src: PH-C06#p058; type: direct -->

图示：C 为质心，$\vec{v}_C$ 沿水平方向；$\vec{r}_P$ 由质心 C 竖直向下指向接触点 P；$\omega$ 为角速度（图中圆柱体半径记为 R），地面在下方。

<!-- src: PH-C06#p058g1; type: direct -->

纯滚动的几何关系：在 $t \to t+\Delta t$ 内，圆柱由 C 滚到 C'，转过 $\Delta\theta$。因无滑动，滚过的弧长等于地面位移：

$$
R\Delta\theta = \overset{\frown}{A'B} = AB = CC'
$$


以 $\Delta t$ 除两端：$R\dfrac{\Delta\theta}{\Delta t} = \dfrac{CC'}{\Delta t}$；取 $\Delta t \to 0$，得 $R\omega = v_C$，$R\alpha = a_C$。

<!-- src: PH-C06#p059; type: compressed -->

### 匀质实心圆柱体在斜面上的运动

斜面粗糙，圆柱体向下运动无滑动，在斜面上做纯滚动。运动分解为：刚体质心的平动 + 相对于通过质心并垂直于参考平面的轴的转动。坐标取 x 沿斜面向下、y 垂直斜面向外；受力有 $\vec{N}$（垂直斜面向外）、$\vec{f}_r$（沿斜面向上）、$m\vec{g}$（竖直向下）；斜面倾角 $\varphi$，质心加速度 $\vec{a}_{CX}$ 沿斜面向下，角加速度方向 $\otimes$（指向纸内）。

<!-- src: PH-C06#p060g1; type: direct -->

解法一（对质心）联立方程：

$$
mg\sin\varphi - f_r = ma_{Cx}
$$

$$
N - mg\cos\varphi = 0
$$

$$
f_r \cdot R = J\beta
$$

$$
a_{Cx} = R\beta \quad(\text{纯滚动})
$$


解得一般结果：

$$
a_{Cx} = \frac{R^2 mg\sin\varphi}{J + mR^2}, \quad \beta = \frac{Rmg\sin\varphi}{J + mR^2}, \quad f_r = \frac{J}{mR^2 + J}mg\sin\varphi, \quad N = mg\cos\varphi
$$


<!-- src: PH-C06#p060; type: direct -->

解法二（对瞬心 P，转动惯量 $J_P = J + mR^2$）：

$$
Rmg\sin(\pi - \varphi) = J_P\,\beta \;\Rightarrow\; Rmg\sin\varphi = (J + mR^2)\beta
$$

$$
a_{Cx} = R\frac{Rmg\sin\varphi}{J + mR^2} = \frac{g\sin\varphi}{1 + \dfrac{J}{mR^2}}
$$


一般结果（等价改写形式）：

$$
a_{Cx} = \frac{g\sin\varphi}{1 + \dfrac{J}{mR^2}}, \quad \beta = \frac{g\sin\varphi}{\left(1 + \dfrac{J}{mR^2}\right)R}, \quad f_r = \frac{J}{mR^2 + J}mg\sin\varphi, \quad N = mg\cos\varphi
$$


<!-- src: PH-C06#p061; type: direct -->

代入实心圆柱体 $J = \dfrac{1}{2}mR^2$：

$$
a_{Cx} = \frac{2}{3}g\sin\varphi, \quad \beta = \frac{2}{3}\frac{g\sin\varphi}{R}, \quad f_r = \frac{1}{3}mg\sin\varphi, \quad N = mg\cos\varphi
$$


<!-- src: PH-C06#p062; type: direct -->

该圆柱体从静止开始沿斜面滚下一段距离 x，下降的垂直距离为 $h = x\sin\varphi$，质心所获得的速度为 v：

$$
-f_r x = \frac{1}{2}mv^2 - mgx\sin\varphi \;\Rightarrow\; \frac{1}{2}mv^2 = \frac{2}{3}mgx\sin\varphi = \frac{2}{3}mgh
$$


或者（由匀加速）：

$$
v^2 = 2a_{Cx}x = \frac{4}{3}gx\sin\varphi = \frac{4}{3}gh, \quad v = \sqrt{\frac{4}{3}gh}
$$


<!-- src: PH-C06#p062; type: direct -->

对比：如果斜面是光滑的（$f_r = 0$）：

$$
a_{Cx} = g\sin\varphi, \quad \beta = 0, \quad \omega = 0, \quad N = mg\cos\varphi
$$


如果圆柱体从静止沿斜面下滑距离 x，下降的竖直距离为 $h = x\sin\varphi$，质心所获得的速度为 v：

$$
0 = \frac{1}{2}mv^2 - mgx\sin\varphi \;\Rightarrow\; \frac{1}{2}mv^2 = mgx\sin\varphi = mgh
$$

$$
v^2 = 2a_{Cx}x = 2gx\sin\varphi = 2gh, \quad v = \sqrt{2gh}
$$


<!-- src: PH-C06#p063; type: direct -->
