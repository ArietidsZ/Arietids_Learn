# 第8章 机械波

> Arietids Learn · 个人课程复习笔记
> 在线阅读：https://learn.arietids.net/courses/physics/chapter-08/

## §8.1 机械波的产生和传播

### 波与波源

波（wave）由波源（wave source）产生。按性质可分为机械波、电磁波、物质波三类。<!-- src: PH-C08#p001; type: synthesized -->

- 机械波（Mechanical waves）：受牛顿定律支配，只能在物质介质（material medium，介质）中存在。<!-- src: PH-C08#p001; type: translated -->
- 电磁波（Electromagnetic waves）：所有电磁波在真空（vacuum）中以同一速率 $c$ 传播，其存在不需要物质介质。<!-- src: PH-C08#p001; type: synthesized -->
- 物质波（Matter waves）。<!-- src: PH-C08#p001; type: direct -->

### 弹性介质与机械波

机械波在弹性介质中传播。相关概念按"形变—弹性形变—弹性体—弹性介质"逐级界定：<!-- src: PH-C08#p002; type: synthesized -->

- 弹性形变：物体在力的作用下发生形变，外力撤消后形变能够消失。<!-- src: PH-C08#p002; type: direct -->
- 弹性体：具有弹性形变的物体。<!-- src: PH-C08#p002; type: direct -->
- 弹性介质：由弹性体组成的介质。<!-- src: PH-C08#p002; type: direct -->
- 质元：介质中的质点（图中以"质元"标注）。<!-- src: PH-C08#p002 + #p003; type: synthesized -->
- 弹性力：即弹簧的恢复力。<!-- src: PH-C08#p002 + #p003; type: direct -->

以手持弹性绳为例：质元在 $y$ 方向上下振动，波沿 $x$ 方向以速度 $\vec{v}$ 向外传播。<!-- src: PH-C08#p002g + #p003g; type: synthesized -->

### 横波 transverse wave

横波（transverse wave）：以弹性绳为例，各质元在 $y$ 方向上下振动，而波（振动状态）沿 $x$ 方向（即 $\vec{v}$ 方向）传播，质元振动方向与波的传播方向相互垂直。<!-- src: PH-C08#p003 + #p003g; type: synthesized -->

随时间推进的分帧（$t=0,\ \tfrac{T}{4},\ \tfrac{T}{2},\ \tfrac{3T}{4},\ T,\ \tfrac{5T}{4}$）显示：编号 0–15 的各质元依次起振，振动状态沿 $+x$ 方向逐步向后传播，形成横波波形。<!-- src: PH-C08#p004g; type: synthesized -->

### 纵波 longitudinal wave

纵波（longitudinal wave）：以弹簧为例，质元沿弹簧轴向（即波的传播方向）来回振动，质元振动方向与波的传播方向相互平行，介质中出现疏密相间的区域。<!-- src: PH-C08#p005 + #p005g; type: synthesized -->

随时间推进的分帧（$t=0,\ \tfrac{T}{4},\ \tfrac{T}{2},\ \tfrac{3T}{4},\ T,\ \tfrac{5T}{4}$）显示：编号 0–15 的各质元沿传播方向先后振动，振动状态沿传播方向逐步向后传播。<!-- src: PH-C08#p006g; type: synthesized -->

### 振动状态的传播与波长

- 波传播的是振动状态。<!-- src: PH-C08#p004 + #p006; type: direct -->
- 波长 $\lambda$：振动状态在一个周期 $T$ 的时间内传播的距离。<!-- src: PH-C08#p004 + #p006; type: direct -->


## §8.2 简谐波 Harmonic Waves

### 简谐波的定义与周期性

波是振动状态在空间的传播。<!-- src: PH-C08#p007; type: direct -->

简谐波具有时间周期性，相关物理量包括：周期 period $T$、频率 frequency $f$、角频率 angular frequency $\omega$。<!-- src: PH-C08#p007; type: direct -->

简谐波不但具有时间周期性，还具有空间周期性，用波长 wavelength $\lambda$ 来描述波的空间周期性。<!-- src: PH-C08#p007; type: direct -->

波长 $\lambda$：振动状态在一个周期 $T$ 的时间内传播的距离。<!-- src: PH-C08#p007; type: direct -->

波速 $v$：把单位时间内振动状态的传播距离称为波速。<!-- src: PH-C08#p007; type: direct -->

#### 波速与波长、周期、频率的关系

$$
v = \frac{\lambda}{T} = f\lambda = \frac{\omega\lambda}{2\pi}
$$


<!-- src: PH-C08#p007; type: direct -->

### 波阵面与波前

振动状态是由相位确定的。为形象地描述波在空间的传播，通常把某一时刻振动相位相同的各点构成的曲面称为波阵面（简称波面）wave surface；波前 Wave fronts。<!-- src: PH-C08#p008; type: direct -->

#### 平面波

对于平面波，在垂直于波的传播方向的平面上各点皆有相同的振动状态。波面表现为一系列相互平行的平面。<!-- src: PH-C08#p008; type: direct --><!-- src: PH-C08#p008g; type: synthesized -->

#### 球面波（点波源）

对于球面波，在以波源为球心、垂直于波的传播方向的球面上各点皆有相同的振动状态。波面表现为一系列同心球面，由点波源（point source）向外辐射。<!-- src: PH-C08#p008; type: direct --><!-- src: PH-C08#p008g; type: synthesized -->

### 平面简谐波 Plane Harmonic Waves

#### 波函数（波动方程）

在波的传播空间区域内，可将处在空间位置 $\vec{r}$ 处的质元在 $t$ 时刻的振动状态用下列函数表示：

$$
y = y(\vec{r},\,t)
$$


此多元函数称为波函数。<!-- src: PH-C08#p009; type: direct -->

假定机械波沿 $x$ 轴方向传播（平面波），波函数为

$$
y = y(x,\,t)
$$


可作为一维传播问题处理。<!-- src: PH-C08#p009; type: direct -->

#### 沿 x 正向传播波函数的建立

在不考虑介质吸收的条件下，设原点 $O$ 处质元的振动为

$$
y(0,t) = A\cos(\omega t + \varphi)
$$


波沿 $x$ 正方向（波速 $\vec{v}$ 指向 $+x$）传播时，$x$ 处 P 点的振动状态比原点滞后 $\dfrac{x}{v}$ 的时间，即 P 点 $t$ 时刻重复原点 $t-\dfrac{x}{v}$ 时刻的振动，故

$$
y(x,t) = A\cos\!\left[\omega\!\left(t-\frac{x}{v}\right)+\varphi\right]
$$


<!-- src: PH-C08#p010 + #p011; type: synthesized --><!-- src: PH-C08#p010g; type: direct -->

#### 波函数的等价形式与波数

利用关系 $\omega\dfrac{x}{v} = \dfrac{\omega}{v}x$，以及

$$
\frac{\omega}{v} = \frac{2\pi f}{v} = \frac{2\pi}{vT} = \frac{2\pi}{\lambda}
$$


可将波函数改写为

$$
y(x,t) = A\cos\!\left[\omega\!\left(t-\frac{x}{v}\right)+\varphi\right] = A\cos\!\left[(\omega t+\varphi)-\omega\frac{x}{v}\right] = A\cos\!\left[(\omega t+\varphi)-\frac{2\pi}{\lambda}x\right]
$$


<!-- src: PH-C08#p011; type: direct -->

定义角波数（angular wave number）

$$
k = \frac{2\pi}{\lambda}
$$


$\vec{k}$ 称为波矢。<!-- src: PH-C08#p011; type: direct -->

于是沿 $x$ 正向传播的平面简谐波波函数可写为

$$
y(x,t) = A\cos(\omega t + \varphi - kx)
$$


<!-- src: PH-C08#p011; type: direct -->

#### 沿 x 正向与负向传播的波函数对比

在不考虑介质吸收的条件下：

波沿 $x$ 正向传播（$\vec{v}$ 指向 $+x$）：

$$
y(x,t) = A\cos\!\left[\omega\!\left(t-\frac{x}{v}\right)+\varphi\right] = A\cos(\omega t + \varphi - kx)
$$


波沿 $x$ 负向传播（$\vec{v}$ 指向 $-x$）：

$$
y(x,t) = A\cos\!\left[\omega\!\left(t+\frac{x}{v}\right)+\varphi\right] = A\cos(\omega t + \varphi + kx)
$$


即传播方向决定 $x$ 项的正负号：沿 $+x$ 取负号，沿 $-x$ 取正号。<!-- src: PH-C08#p012; type: direct --><!-- src: PH-C08#p012g; type: synthesized -->

### 相速度 Phase velocity

由波函数 $y(x,t) = A\cos(\omega t + \varphi - kx)$，追踪某一确定相位（振动状态）随时间的传播：在 $t$ 与 $t+\Delta t$ 时刻，相位相同的两点满足

$$
\omega t + \varphi - kx = \omega(t+\Delta t) + \varphi - k(x+\Delta x)
$$


化简得

$$
\omega\,\Delta t = k\,\Delta x
$$


故相速度

$$
v = \frac{\Delta x}{\Delta t} = \frac{\omega}{k} = \frac{2\pi f}{\dfrac{2\pi}{\lambda}} = f\lambda
$$


$v$ 即相速度（Phase velocity）。<!-- src: PH-C08#p013; type: direct --><!-- src: PH-C08#p013g; type: synthesized -->

### 例：由两时刻波形图写波函数

已知 $t=0$ 时波形为曲线 I，波沿 $Ox$ 正方向传播，经 $t=\tfrac{1}{2}\,\mathrm{s}$ 后波形变为曲线 II。给定 $A=0.01\,\mathrm{m}$，$\lambda=0.04\,\mathrm{m}$。

通用步骤：

- 由波形沿传播方向平移的距离与时间求波速：$v=\dfrac{x_1-x_0}{t}$；本例 $v=\dfrac{0.01}{1/2}=0.02\ \mathrm{m\cdot s^{-1}}$。<!-- src: PH-C08#p014; type: direct -->
- 由波速与波长求周期、角频率：$T=\dfrac{\lambda}{v}=\dfrac{0.04}{0.02}=2\,\mathrm{s}$，$\omega=\dfrac{2\pi}{T}=\pi\ \mathrm{s^{-1}}$。<!-- src: PH-C08#p014; type: direct -->
- 写原点振动表达式 $y_0=A\cos(\omega t+\varphi)$，由初始条件 $t=0$ 时 $y_0=0$ 得 $0=A\cos\varphi$，故 $\varphi=\pm\dfrac{\pi}{2}$；候选不唯一时须用速度方向定符号。<!-- src: PH-C08#p015; type: direct -->
- 速度 $v_0=-\omega A\sin(\omega t+\varphi)$，$t=0$ 时 $v_0=-\omega A\sin\varphi$；本例原点初速 $v_0<0$，故取 $\varphi=\dfrac{\pi}{2}$，得 $y_0=0.01\cos\!\left(\pi t+\dfrac{\pi}{2}\right)$。<!-- src: PH-C08#p015; type: direct -->
- 由原点振动加上沿 $+x$ 传播的相位滞后 $-kx$（$k=\dfrac{2\pi}{\lambda}$）得波函数：$y=0.01\cos\!\left(\pi t+\dfrac{\pi}{2}-kx\right)=0.01\cos\!\left(\pi t+\dfrac{\pi}{2}-\dfrac{\pi x}{0.02}\right)$。<!-- src: PH-C08#p016; type: direct -->

易错点：确定初相 $\varphi$ 时由 $y_0=0$ 只能得到 $\pm\dfrac{\pi}{2}$ 两个候选，必须再用该点振动速度的正负（即波传播方向决定的运动趋势）才能唯一确定。<!-- src: PH-C08#p015; type: one-step-inferred -->

### 例：沿 x 轴负向传播与坐标原点的平移

一平面简谐波以速度 $v=20\,\mathrm{m/s}$ 沿 $x$ 轴负向传播，已知 $A$ 点振动 $y=3\cos 4\pi t$。

- 波沿 $x$ 负向传播时，离原点越远的质元相位越超前，故相位项取 $+kx$：以 $A$ 为原点 $y=3\cos(4\pi t+kx)$，其中 $k=\dfrac{2\pi}{\lambda}=\dfrac{\omega}{v}=\dfrac{4\pi}{20}=\dfrac{\pi}{5}$，得 $y=3\cos\!\left(4\pi t+\dfrac{\pi}{5}x\right)$。<!-- src: PH-C08#p017; type: direct -->
- 更换坐标原点的方法：先把新原点位置代入旧波函数，求得新原点处质元的振动表达式，再据此重写波函数。本例 $B$ 在距 $A$ 点 $5\,\mathrm{m}$ 处，$y_B=3\cos\!\left(4\pi t-\dfrac{\pi}{5}\times 5\right)=3\cos(4\pi t-\pi)$。<!-- src: PH-C08#p017; type: direct -->
- 以 $B$ 为原点的波函数：$y=3\cos\!\left(4\pi t-\pi+\dfrac{\pi}{5}x\right)$。<!-- src: PH-C08#p017; type: direct -->

易错点：负向传播时相位项符号为 $+kx$（与正向传播的 $-kx$ 相反）；换原点只改变常数初相，不改变 $\omega$、$k$。<!-- src: PH-C08#p017; type: one-step-inferred -->

### 例：参考质元不在原点时写波函数（求 b 处质元振动）

已知波速 $v$ 方向向右，某质元 $a$ 的振动 $y_a=A\cos(\omega t+\alpha)$，$a$ 与原点相距 $x_a$，$b$ 与 $a$ 相距 $l$。通用方法：先由 $a$ 的振动推原点 $O$ 的振动，再写一般点波函数，最后代入 $b$ 的坐标。<!-- src: PH-C08#p018 + #p019; type: synthesized -->

坐标系一（原点 $O$ 取在 $a$ 一侧，$a$ 坐标为 $x_a$，$b$ 坐标 $x=x_a+l$）：

$$
y_0=A\cos\!\left[\omega t+\alpha+kx_a\right]
$$

$$
y=A\cos\!\left[\omega t+\alpha+kx_a-kx\right]
$$

$$
y_b=A\cos\!\left[\omega t+\alpha-kl\right]
$$

<!-- src: PH-C08#p018; type: direct -->

坐标系二（原点取在 $a$、$b$ 之间，$b$ 坐标 $x=-(l-x_a)$）：

$$
y_0=A\cos\!\left[\omega t+\alpha-kx_a\right]
$$

$$
y=A\cos\!\left[\omega t+\alpha-kx_a+kx\right]
$$

$$
y_b=A\cos\!\left[\omega t+\alpha-kl\right]
$$

<!-- src: PH-C08#p019; type: direct -->

关键结论：原点取法不同会使 $kx_a$、$kx$ 前的符号随之改变，但 $b$ 处质元的振动表达式都为 $y_b=A\cos[\omega t+\alpha-kl]$，即同一质元的振动与坐标系（原点位置、轴向）的选取无关。<!-- src: PH-C08#p018 + #p019; type: synthesized -->

### 平面波的波动方程

#### 弦上的横波

设弦的线密度为 $\eta$，取弦上一线元，对应水平长度 $dx$、弦上弧长 $dl$；当 $dx \to dl$（波幅很小）时，该线元质量为
$$
dm = \eta\,dx
$$

<!-- src: PH-C08#p020 + #p021; type: direct -->

波沿弦传播、波幅很小的情况下，线元在水平方向可视为长度无变化、加速度为零；线元两端张力为 $T_1$、$T_2$，与水平方向夹角分别为 $\alpha_1$、$\alpha_2$。
<!-- src: PH-C08#p020; type: direct -->

水平方向（平衡）：
$$
T_2\cos\alpha_2 - T_1\cos\alpha_1 = 0,\qquad T_2\cos\alpha_2 = T_1\cos\alpha_1 = T
$$

<!-- src: PH-C08#p020 + #p021; type: direct -->

竖直（$y$）方向（牛顿第二定律）：
$$
T_2\sin\alpha_2 - T_1\sin\alpha_1 = \eta\,dx\,\frac{d^2 y}{dt^2}
$$

<!-- src: PH-C08#p020 + #p021; type: direct -->

将竖直方向合力用张力水平分量 $T$ 改写，并以斜率表示（$\tan\alpha = \mathrm{d}y/\mathrm{d}x$）：
$$
T_2\sin\alpha_2 - T_1\sin\alpha_1 = \frac{T}{\cos\alpha_2}\sin\alpha_2 - \frac{T}{\cos\alpha_1}\sin\alpha_1 = T(\tan\alpha_2 - \tan\alpha_1)
$$

$$
= T\left(\left.\frac{dy}{dx}\right|_{x+dx} - \left.\frac{dy}{dx}\right|_{x}\right) = T\,d\!\left(\frac{dy}{dx}\right) = T\,\frac{d\!\left(\frac{dy}{dx}\right)}{dx}\,dx = T\,\frac{d^2 y}{dx^2}\,dx
$$

<!-- src: PH-C08#p021; type: direct -->

#### 弦上横波的波动方程与波速

令上面两种表达式相等，并注意 $y = y(x,t)$ 故用偏导数：
$$
T\,\frac{\partial^2 y}{\partial x^2}\,dx = \eta\,dx\,\frac{\partial^2 y}{\partial t^2}
$$

$$
\frac{\partial^2 y}{\partial t^2} = \frac{T}{\eta}\,\frac{\partial^2 y}{\partial x^2}
$$

<!-- src: PH-C08#p022; type: direct -->

写成标准波动方程形式（线性偏微分方程）：
$$
\frac{\partial^2 y}{\partial t^2} = v^2\,\frac{\partial^2 y}{\partial x^2},\qquad \frac{\partial^2 y}{\partial x^2} - \frac{1}{v^2}\,\frac{\partial^2 y}{\partial t^2} = 0
$$

<!-- src: PH-C08#p022; type: direct -->

其中弦上横波的波速由介质的弹性和惯性决定：
$$
v = \sqrt{\frac{T}{\eta}}
$$

该波动方程的解可取 $y(x,t) = A\cos(\omega t + \varphi - kx)$。
<!-- src: PH-C08#p022; type: direct -->

#### 弹性杆中的纵波

以纵波沿均匀细长直棒传播为例，$S$ 为截面积，密度为 $\rho$。取长度为 $dx$ 的体元，质量
$$
dm = \rho S\,dx
$$

体元两端受力分别为 $F(x)$ 与 $F(x+dx)$，应力定义为 $\lim_{\Delta S\to 0}\dfrac{\Delta \vec{f}}{\Delta S} = \dfrac{d\vec{f}}{dS}$。
<!-- src: PH-C08#p023 + #p025 + #p026; type: direct -->

由牛顿第二定律，体元的净力等于质量乘加速度（$a = \partial^2 y/\partial t^2$）：
$$
F(x+dx) - F(x) = (dm)\,a,\qquad dF = F(x+dx) - F(x) = (dm)\,\frac{\partial^2 y}{\partial t^2}
$$

<!-- src: PH-C08#p023 + #p026; type: direct -->

由弹性定理，作用在 $x$ 处横截面上的应力 $\dfrac{F(x)}{S}$ 与该处的相对形变成正比，比例系数为弹性模量 $Y$：
$$
\frac{F(x)}{S} = Y\,\frac{\partial y}{\partial x},\qquad F(x) = SY\,\frac{\partial y}{\partial x}
$$

<!-- src: PH-C08#p024 + #p026; type: direct -->

由此求净力：
$$
dF = F(x+dx) - F(x) = SY\left.\frac{\partial y}{\partial x}\right|_{x+dx} - SY\left.\frac{\partial y}{\partial x}\right|_{x} = d\!\left(SY\frac{\partial y}{\partial x}\right) = \frac{d\!\left(SY\frac{\partial y}{\partial x}\right)}{dx}\,dx = SY\,\frac{\partial^2 y}{\partial x^2}\,dx
$$

<!-- src: PH-C08#p026; type: direct -->

#### 弹性杆纵波的波动方程与波速

将两式联立：
$$
(dm)\,\frac{\partial^2 y}{\partial t^2} = SY\,\frac{\partial^2 y}{\partial x^2}\,dx
$$

代入 $dm = \rho S\,dx$（即 $\dfrac{Y}{dm/(S\,dx)} = \dfrac{Y}{\rho}$）得：
$$
\frac{\partial^2 y}{\partial t^2} = \frac{Y}{\rho}\,\frac{\partial^2 y}{\partial x^2}
$$

<!-- src: PH-C08#p027; type: direct -->

写成标准波动方程并给出波速：
$$
\frac{\partial^2 y}{\partial t^2} = v^2\,\frac{\partial^2 y}{\partial x^2},\qquad \frac{\partial^2 y}{\partial x^2} - \frac{1}{v^2}\,\frac{\partial^2 y}{\partial t^2} = 0
$$

$$
v = \sqrt{\frac{Y}{\rho}}\quad(\text{弹性杆中的纵波波速})
$$

<!-- src: PH-C08#p027; type: direct -->

#### 由平面简谐波函数验证波动方程

平面简谐波函数
$$
y = A\cos(\omega t - kx + \varphi),\qquad v = \frac{\omega}{k},\qquad k = \frac{\omega}{v}
$$

分别对 $x$、$t$ 求二阶偏导：
$$
\frac{\partial^2 y}{\partial x^2} = -\frac{\omega^2}{v^2}A\cos(\omega t - kx + \varphi),\qquad \frac{\partial^2 y}{\partial t^2} = -A\omega^2\cos(\omega t - kx + \varphi)
$$

两者相比即得波动方程
$$
\frac{\partial^2 y}{\partial t^2} = v^2\,\frac{\partial^2 y}{\partial x^2}
$$

与杆中纵波结果 $\dfrac{\partial^2 y}{\partial t^2} = \dfrac{Y}{\rho}\dfrac{\partial^2 y}{\partial x^2}$ 比较，有 $v = \sqrt{\dfrac{Y}{\rho}}$。
<!-- src: PH-C08#p028; type: direct -->

#### 机械波的速度（由介质的弹性和惯性决定）

机械波速度由介质的弹性与惯性决定，三种典型情形如下：

| 情形 | 波速 | 符号说明 |
| --- | --- | --- |
| (1) 弦或绳上的横波 | $v = \sqrt{\dfrac{T}{\eta}}$ | $T$ 张力，$\eta$ 线密度 |
| (2) 细棒中的纵波 | $v = \sqrt{\dfrac{Y}{\rho}}$ | $Y$ 杨氏模量，$\rho$ 体密度 |
| (3) 固体中横波 | $v = \sqrt{\dfrac{G}{\rho}}$ | $G$ 切变模量，$\rho$ 体密度 |

<!-- src: PH-C08#p029; type: direct -->

## §8.3 波的能量和能流

### 1. 平面简谐波的能量密度

#### 弦上横波的线元模型

设弦上的横波，线密度为 $\mu$。考虑弦上距原点 $O$ 为 $x$ 处、原长为 $dx$ 的线元 $ab$。$t$ 时刻线元 $ab$ 偏离平衡位置到 $y$ 处，其振动速度为 $\dfrac{\partial y}{\partial t}$。

线元的动能：
$$
dK = \frac{1}{2}\mu\, dx\left(\frac{\partial y}{\partial t}\right)^2
$$

<!-- src: PH-C08#p030 + #p030g; type: direct -->

#### 线元的势能

线元振动时由原长 $dx$ 伸长为 $dl$：
$$
dl = \left[(dx)^2+(dy)^2\right]^{\frac{1}{2}}
$$

$$
dl-dx = \left[(dx)^2+(dy)^2\right]^{\frac{1}{2}}-dx
$$

<!-- src: PH-C08#p030; type: direct -->

势能等于张力 $T$ 在该线元伸长过程中所做的功：
$$
dU = T\left\{\left[(dx)^2+(dy)^2\right]^{\frac{1}{2}}-dx\right\}
$$

<!-- src: PH-C08#p030; type: direct -->

将根号内提出 $dx$ 并用近似 $(1+\varepsilon)^{1/2}\approx 1+\tfrac{1}{2}\varepsilon$ 展开：
$$
dU = T\left\{dx\left[1+\left(\frac{dy}{dx}\right)^2\right]^{\frac{1}{2}}-dx\right\}=T\left\{dx\left[1+\left(\frac{\partial y}{\partial x}\right)^2\right]^{\frac{1}{2}}-dx\right\}
$$

$$
=T\left\{dx\left[1+\frac{1}{2}\left(\frac{\partial y}{\partial x}\right)^2\right]-dx\right\}
$$

得线元势能：
$$
dU = \frac{1}{2}T\, dx\left(\frac{\partial y}{\partial x}\right)^2
$$

<!-- src: PH-C08#p031; type: direct -->

#### 线元的总能量

$$
dE = dK + dU = \frac{1}{2}\mu\, dx\left(\frac{\partial y}{\partial t}\right)^2 + \frac{1}{2}T\, dx\left(\frac{\partial y}{\partial x}\right)^2
$$

<!-- src: PH-C08#p031 + #p032; type: direct -->

#### 代入平面简谐波

对平面简谐波 $y=A\cos(\omega t-kx)$：
$$
dK = \frac{1}{2}\mu\, dx\,\omega^2 A^2\sin^2(\omega t-kx)
$$

$$
dU = \frac{1}{2}T\, dx\, k^2 A^2\sin^2(\omega t-kx)
$$

利用波速关系
$$
v=\frac{\omega}{k}=\sqrt{\frac{T}{\mu}}
$$

可得动能与势能相等：
$$
dK = dU
$$

<!-- src: PH-C08#p032; type: direct -->

因此线元总能量：
$$
dE = \mu\, dx\,\omega^2 A^2\sin^2(\omega t-kx)
$$

<!-- src: PH-C08#p032 + #p033; type: direct -->

要点：在波动中，同一线元（质元）的动能 $dK$ 与势能 $dU$ 同相位（同时达到最大、同时为零），二者恒相等；因此对波动中的单个质元，其总能量 $dE$ 随时间变化（不守恒），能量随波传播。
<!-- src: PH-C08#p032 + #p033; type: one-step-inferred -->

#### 能量密度

设弦的横截面积为 $S$，则线密度与体密度关系为 $\mu\cdot 1=\rho(S\cdot 1)$，即取沿波传播方向单位长度的体元（长度为 1、截面积为 $S$）。于是
$$
dE = \rho S\, dx\,\omega^2 A^2\sin^2(\omega t-kx)
$$

<!-- src: PH-C08#p033 + #p033g; type: direct -->

能量密度（单位体积内的波动能量）：
$$
w = \frac{dE}{S\,dx} = \rho\,\omega^2 A^2\sin^2(\omega t-kx)
$$

<!-- src: PH-C08#p033; type: direct -->

### 2. 机械波的能流密度

#### 能流密度矢量

定义：单位时间内通过垂直于波传播方向的单位面积的机械波能量，记为 $\vec{S}$。

取截面积为单位面积、沿传播方向长度为 $v$（波速）的体元，单位时间内通过该截面的能量为
$$
S = wv
$$

写成矢量形式（方向沿波传播方向 $\vec{v}$）：
$$
\vec{S} = w\vec{v}
$$

其中 $w$ 为能量密度。
<!-- src: PH-C08#p034 + #p034g; type: direct -->

#### 波的强度（平均能流密度）

机械波的强度 $I$ 定义为能流密度 $S$ 在一个周期内的时间平均值：
$$
I = \langle S\rangle = \frac{1}{T}\int_0^T S\,dt = \frac{v}{T}\int_0^T w\,dt
$$

对平面简谐波 $w=\rho\,\omega^2 A^2\sin^2(\omega t-kx)$，利用 $\sin^2$ 的周期平均值为 $\tfrac{1}{2}$，得
$$
I = \frac{1}{2}\rho\,\omega^2 v A^2
$$

即
$$
I \propto A^2
$$

波的强度正比于振幅的平方。
<!-- src: PH-C08#p034; type: direct -->

### 3. 球面简谐波

#### 球面波振幅随距离衰减

以波源 $O$ 为中心、半径分别为 $r_1$、$r_2$ 的两同心球面，面积分别为 $S_1$、$S_2$；其上波的振幅分别为 $A_1$、$A_2$，强度满足 $I_1\propto A_1^2$、$I_2\propto A_2^2$。

若介质不吸收能量，单位时间内通过两球面的平均能流相等：
$$
I_1\,4\pi r_1^2 = I_2\,4\pi r_2^2
$$

由此
$$
\frac{I_1}{I_2}=\frac{r_2^2}{r_1^2}, \qquad \frac{A_1}{A_2}=\frac{r_2}{r_1}
$$

即
$$
Ar = \text{const.}
$$

取参考球面半径 $r_0$、对应振幅 $A_0$，则距波源 $r$ 处振幅
$$
A = \frac{A_0 r_0}{r}
$$

<!-- src: PH-C08#p035 + #p035g; type: direct -->

球面简谐波的波表达式：
$$
y = \frac{A_0 r_0}{r}\cos(\omega t+\varphi - kr)
$$

<!-- src: PH-C08#p035; type: direct -->

#### 不同波面的振幅—距离关系

对无吸收介质，利用 $I\propto A^2$ 和能量守恒可证明（$r$ 为场点到波源的距离）：

| 波型 | 守恒关系 | 振幅随距离 |
| --- | --- | --- |
| 球面波 | $Ar=\text{const.}$ | $A\propto\dfrac{1}{r}$ |
| 平面波 | $A=\text{const.}$ | — |
| 柱面波 | $A\sqrt{r}=\text{const.}$ | $A\propto\dfrac{1}{\sqrt{r}}$ |

<!-- src: PH-C08#p036; type: direct -->

### 4. 波动能量分布的图示（snapshot）

某一时刻波形（横波快照 snapshot，沿 $+x$ 方向以 $\vec{v}$ 传播，波长 $\lambda$、最大位移 $y_m$）上，用红色标出两个被比较的线元 $dx$：一个位于零位移（平衡位置、波形斜率最大）处，另一个位于波峰（最大位移）处。各质元能量分布的规律为：处于最大位移处的线元没有能量，处于零位移（平衡位置）处的线元具有最大能量。
<!-- src: PH-C08#p037 + #p037g; type: direct -->

随时间推移（$t$、$t+\tfrac{1}{4}T$、$t+\tfrac{1}{2}T$ 三帧），波形整体沿 $+x$ 方向平移；被标记的两个线元（一个原在零位移附近、一个原在波峰/波谷处）所处的位置和能量随之改变，体现能量随波一起向前传播、单个质元能量不守恒。
<!-- src: PH-C08#p038 + #p038g; type: synthesized -->

## §8.4 波的干涉

### 干涉现象与相干条件

两列波在空间相遇，某些点的振动始终加强，另一些点的振动始终减弱，这种现象称为干涉现象。<!-- src: PH-C08#p039 + #p042; type: direct -->

能产生干涉现象的波称为相干波。<!-- src: PH-C08#p039 + #p042; type: direct -->

相干条件（Coherent condition）：

1. 频率相同；
2. 振动方向互相平行；
3. 相位差恒定。

<!-- src: PH-C08#p039 + #p042; type: direct -->

### 两相干波在 P 点的叠加

设两相干波源的振动分别为

$$
y_{10}=A_{10}\cos(\omega t+\varphi_1)
$$

$$
y_{20}=A_{20}\cos(\omega t+\varphi_2)
$$


它们传到 P 点（波源到 P 点的距离分别为 $r_1$、$r_2$）引起的振动为

$$
y_1=A_1\cos(\omega t+\varphi_1-kr_1)
$$

$$
y_2=A_2\cos(\omega t+\varphi_2-kr_2)
$$


<!-- src: PH-C08#p040 + #p043; type: direct -->

P 点的合振动仍为同频率简谐振动：

$$
y=y_1+y_2=A\cos(\omega t+\varphi)
$$


合振幅由下式确定：

$$
A^2=A_1^2+A_2^2+2A_1A_2\cos\Delta\varphi
$$


<!-- src: PH-C08#p040 + #p043; type: direct -->

其中相位差为两分振动初相位与波程引起的相位之差：

$$
\Delta\varphi=(\varphi_1-kr_1)-(\varphi_2-kr_2)=\varphi_1-\varphi_2-k(r_1-r_2)
$$


<!-- src: PH-C08#p040 + #p043; type: direct -->

### 干涉强度与加强、减弱条件

由合振幅可得 P 点的合强度（强度与振幅平方成正比）：

$$
A^2=A_1^2+A_2^2+2A_1A_2\cos\Delta\varphi
$$

$$
I=I_1+I_2+2\sqrt{I_1I_2}\cos\Delta\varphi
$$


相位差仍为

$$
\Delta\varphi=\varphi_1-\varphi_2-k(r_1-r_2)
$$


波的强度表达式：

$$
I=\tfrac{1}{2}\rho\,\omega^2 v A^2
$$


<!-- src: PH-C08#p044; type: direct -->

干涉加强（干涉相长）：当

$$
\Delta\varphi=2n\pi,\qquad n=0,\pm1,\pm2,\dots
$$


时

$$
A=A_1+A_2,\qquad I=I_1+I_2+2\sqrt{I_1I_2}
$$


<!-- src: PH-C08#p044; type: direct -->

干涉减弱（干涉相消）：当

$$
\Delta\varphi=(2n+1)\pi,\qquad n=0,\pm1,\pm2,\dots
$$


时

$$
A=|A_1-A_2|,\qquad I=I_1+I_2-2\sqrt{I_1I_2}
$$


<!-- src: PH-C08#p044; type: direct -->

### 波程差判据

当两波源同相（$\varphi_2=\varphi_1$）时，相位差仅由波程差决定：

$$
\Delta\varphi=k(r_2-r_1)=\frac{2\pi}{\lambda}(r_2-r_1)
$$


<!-- src: PH-C08#p045; type: direct -->

此时以波程差 $r_2-r_1$ 判断：

干涉加强：

$$
r_2-r_1=n\lambda,\qquad n=0,\pm1,\pm2,\dots
$$

$$
A=A_1+A_2,\qquad I=I_1+I_2+2\sqrt{I_1I_2}
$$


干涉减弱：

$$
r_2-r_1=(2n+1)\frac{\lambda}{2},\qquad n=0,\pm1,\pm2,\dots
$$

$$
A=|A_1-A_2|,\qquad I=I_1+I_2-2\sqrt{I_1I_2}
$$


<!-- src: PH-C08#p045; type: direct -->

### 数学附注

页面给出二项式级数展开（作为参考公式）：

$$
(1+x)^{\frac{1}{2}}=1+\frac{1}{2}x-\frac{1}{2\cdot4}x^2+\frac{1\cdot3}{2\cdot4\cdot6}x^3-\frac{1\cdot3\cdot5}{2\cdot4\cdot6\cdot8}x^4+\dots,\qquad |x|\le1
$$


<!-- src: PH-C08#p041; type: direct -->

### 干涉例题一：判定 P 点的干涉结果

题型：已知两相干波源的位置、频率、波速及初相关系，判断空间某点是加强还是减弱（静止）。

已知条件：A、B 为两个相干平面简谐波的波源，振幅均为 $5\,\text{cm}$，频率 $f=100\,\text{Hz}$，波速 $u=10\,\text{m/s}$；几何关系为 $AP=15\,\text{m}$、$AB=20\,\text{m}$。<!-- src: PH-C08#p046; type: direct -->

求解步骤：

- 由几何关系求各波源到 P 点的距离：$BP=\sqrt{20^2+15^2}=25\,\text{m}$。<!-- src: PH-C08#p046; type: direct -->
- 求波长：$\lambda=\dfrac{u}{f}=0.1\,\text{m}$。<!-- src: PH-C08#p046; type: direct -->
- 由初相关系定波源相位差：当 A 点为波峰时 B 点恰为波谷，即 B 比 A 超前 $\pi$，故 $\varphi_B-\varphi_A=\pi$。<!-- src: PH-C08#p046; type: direct -->
- 计算 P 点两列波的相位差：
$$
\Delta\varphi=\varphi_B-\varphi_A-2\pi\frac{BP-AP}{\lambda}=\pi-2\pi\frac{25-15}{0.1}=-199\pi
$$

<!-- src: PH-C08#p046; type: direct -->
- 结果判断：$\Delta\varphi=-199\pi$ 为 $\pi$ 的奇数倍，两波反相位，相互减弱；因两振幅相等，合振幅 $A=0$，P 点静止。<!-- src: PH-C08#p046; type: direct -->

易错点：相位差由"波源初相差"与"波程差引起的相位差 $2\pi\dfrac{BP-AP}{\lambda}$"两部分组成，符号与减号不能丢；波程差取较远者减较近者（此处 $BP-AP$）。<!-- src: PH-C08#p046; type: compressed -->

### 干涉例题二：由相邻静止点反求波长与波源最小相位差

题型：已知两相干波源沿 $x$ 轴相向传播、强度不变，给出两个相邻"因干涉而静止"的点，求波长及两波源间的最小相位差。

已知条件：两相干波源 $S_1$、$S_2$ 间距 $d=30\,\text{m}$，均在 $x$ 轴上，$S_1$ 位于原点 $O$；两列波均沿 $x$ 轴传播、强度保持不变；$x_1=9\,\text{m}$ 与 $x_2=12\,\text{m}$ 处是相邻的两个因干涉而静止的点。设 $S_1$、$S_2$ 的振动相位分别为 $\varphi_1$、$\varphi_2$。<!-- src: PH-C08#p047 + #p048; type: direct -->

各点相位（注意两波源相向到达同一点，传播距离分别为 $x$ 与 $d-x$）：

- 在 $x_1$ 点：来自 $S_1$ 的相位为 $\varphi_1-\dfrac{2\pi}{\lambda}x_1$，来自 $S_2$ 的相位为 $\varphi_2-\dfrac{2\pi}{\lambda}(d-x_1)$。<!-- src: PH-C08#p047; type: direct -->

静止（减弱）条件——相位差为 $\pi$ 的奇数倍：

$$
\left[\varphi_2-\frac{2\pi}{\lambda}(d-x_1)\right]-\left[\varphi_1-\frac{2\pi}{\lambda}x_1\right]=(2k+1)\pi \quad (1)
$$

<!-- src: PH-C08#p047 + #p048; type: direct -->

$x_2$ 点为相邻静止点，故其相位差比 $x_1$ 点多一级：

$$
\left[\varphi_2-\frac{2\pi}{\lambda}(d-x_2)\right]-\left[\varphi_1-\frac{2\pi}{\lambda}x_2\right]=[2(k+1)+1]\pi \quad (2)
$$

<!-- src: PH-C08#p048; type: direct -->

求波长，由 $(2)-(1)$ 消去波源相位：

$$
\frac{4\pi}{\lambda}(x_2-x_1)=2\pi \quad\Rightarrow\quad \lambda=2(x_2-x_1)=2(12-9)=6\,\text{m}
$$

<!-- src: PH-C08#p048; type: direct -->

求波源相位差，代回 $(1)$ 式：

$$
\varphi_2-\varphi_1=(2k+1)\pi+\frac{2\pi}{\lambda}(d-2x_1)=(2k+5)\pi
$$

<!-- src: PH-C08#p048; type: direct -->

当 $k=-2,\,-3$ 时相位差最小，$\varphi_2-\varphi_1=\pm\pi$。<!-- src: PH-C08#p048; type: direct -->

易错点：两波源相向传播时，到 $x$ 点的波程分别取 $x$ 与 $d-x$；相邻静止点相位差相差 $2\pi$（级次差 1），用作差法可直接消去未知初相求出波长。<!-- src: PH-C08#p047 + #p048; type: compressed -->

### 波在两介质分界面的反射与折射、半波损失

在均匀介质中传播的波遇到另外一种介质时，在两种介质的分界面上会发生反射和折射现象。<!-- src: PH-C08#p049; type: direct -->

介质的特性阻抗：

$$
Z=\rho v
$$

<!-- src: PH-C08#p049; type: direct -->

介质分类（按 $\rho v$ 大小）：

| $\rho v$ | 介质名称 | 英文 |
|---|---|---|
| 较小（smaller） | 波疏介质 | undulatory thinner medium |
| 较大（larger） | 波密介质 | undulatory denser medium |

<!-- src: PH-C08#p049; type: direct -->

半波损失（half-wave loss）：当波从波疏介质入射、在与波密介质的分界面上反射时（波疏介质→波密介质），反射波相位发生突变 $\pi$，即产生半波损失。<!-- src: PH-C08#p049; type: direct -->

### 例题：入射波与反射波波函数的写法（无半波损失）

题型：已知距反射面 B 为 L 处的振动规律，反射时无半波损失，写出入射波与反射波的波函数。<!-- src: PH-C08#p050; type: direct -->

已知条件：平面简谐波沿 $x$ 轴正方向传播（题干为"沿 $x$ 轴方向传播"，方向"正"由图中入射 $v$ 箭头指向 $+x$ 佐证），在距反射面 B 为 $L$ 处的振动规律为 $y=A\cos\omega t$，波速为 $v$，反射时无半波损失。<!-- src: PH-C08#p050; type: direct -->

入射波（沿 $+x$ 传播）的波函数：

$$
y=A\cos(\omega t-kx)=A\cos\!\left(\omega t-\frac{\omega}{v}x\right)
$$

<!-- src: PH-C08#p050; type: direct -->

反射面 B 处的入射振动：

$$
y_B=A\cos\!\left(\omega t-\frac{\omega}{v}L\right)
$$

<!-- src: PH-C08#p050; type: direct -->

反射波在原点的振动表达式（无半波损失，反射波由 B 沿 $-x$ 方向再传播距离 $L$ 回到原点，故相位再落后 $\dfrac{\omega}{v}L$）：

$$
y=A\cos\!\left(\omega t-\frac{\omega}{v}L-\frac{\omega}{v}L\right)
$$

<!-- src: PH-C08#p050; type: direct -->

反射波（沿 $-x$ 传播）的波函数：

$$
y=A\cos\!\left(\omega t-\frac{\omega}{v}2L+\frac{\omega}{v}x\right)
$$

<!-- src: PH-C08#p050; type: direct -->

方法要点：以已知振动点为基准向 B 推（落后 $\dfrac{\omega}{v}L$），反射点无半波损失则不附加 $\pi$；反射波沿 $-x$ 传播，波函数中 $x$ 项变号（取 $+\dfrac{\omega}{v}x$），到原点再落后 $\dfrac{\omega}{v}L$，合计 $2L$ 的程差。<!-- src: PH-C08#p050; type: synthesized -->

## §8.5 驻波 (Standing waves)

### 驻波的定义与形成

两列振幅相同的相干波，在同一直线上沿相反方向传播时叠加，形成一种特殊的干涉现象，称为驻波 (standing waves)。<!-- src: PH-C08#p051; type: direct -->

驻波的特征：<!-- src: PH-C08#p051; type: direct -->

- 没有波形的推进；
- 参与波动的各个质元处于稳定的振动状态；
- 具有这种波形特征的波即为驻波。

用图像表述：两列同振幅、同波长 (same amplitude and wavelength) 的简谐波沿一根拉直弦线 (stretched string) 向相反方向 (opposite directions) 传播，二者相互干涉即产生驻波 (standing wave)。图中分别给出 $t=0$、$t=\frac{1}{4}T$、$t=\frac{1}{2}T$、$t=\frac{3}{4}T$、$t=T$ 五个时刻：上行为向右行波、中行为向左行波、下行 ($y$-$x$) 为二者叠加的合成波形，合成波形仅在原位上下起伏而不向左右推进。<!-- src: PH-C08#p053g; type: direct -->

### 各质元振幅特征：波节与波腹

各振动质元的振幅各不相同，但却保持不变。<!-- src: PH-C08#p052; type: direct -->

- 有些点振幅始终为零，称为波节 (node)；<!-- src: PH-C08#p052; type: direct -->
- 有些点振幅始终最大，称为波腹 (antinode)。<!-- src: PH-C08#p052; type: direct -->

图像（黄色、蓝色两条曲线分别对应 $t$ 与 $t+\frac{1}{4}T$ 两个时刻的波形）显示：在波节处各时刻位移恒为零，在波腹处位移幅度最大；波节、波腹的位置不随时间改变。<!-- src: PH-C08#p052g; type: direct -->

### 驻波方程

设两列反向传播的行波分别为：<!-- src: PH-C08#p054 + #p055; type: direct -->

$$
y_1 = A\cos(\omega t - kx)
$$


$$
y_2 = A\cos(\omega t + kx)
$$


叠加得驻波方程：<!-- src: PH-C08#p054 + #p055; type: direct -->

$$
y = y_1 + y_2 = 2A\cos kx\,\cos\omega t = \left(2A\cos\frac{2\pi x}{\lambda}\right)\cos\omega t
$$


其中 $2A\cos\dfrac{2\pi x}{\lambda}$ 为振幅因子，$\cos\omega t$ 为谐振因子。<!-- src: PH-C08#p054; type: direct -->

由方程可知：<!-- src: PH-C08#p054; type: direct -->

- 不同 $x$ 处的质元，振幅不同；
- 不同 $x$ 处的质元，振幅随 $x$ 作周期性变化。

#### 驻波是振动而非波形传播

只要振幅因子的值不改变符号，同一 $x$ 处合成的振动相位为 $\omega t$，这些点的振动相位仅随 $t$ 增加，不随 $x$ 的增加而减少；亦即不是振动状态在空间的传播。各处在振幅因子不变号的范围内，相位 $\omega t$ 相同，没有 $x$ 的变化。<!-- src: PH-C08#p055; type: direct -->

驻波实际上是一种振动，不再是振动状态的传播，"驻波"正是源于此。<!-- src: PH-C08#p055; type: direct -->

### 波腹与波节的坐标及间距

由 $y = \left(2A\cos\dfrac{2\pi}{\lambda}x\right)\cos\omega t$：<!-- src: PH-C08#p056; type: direct -->

波腹坐标（振幅因子取极大）：<!-- src: PH-C08#p056; type: direct -->

$$
x = n\frac{\lambda}{2},\qquad n = 0,\ \pm 1,\ \pm 2,\ \cdots
$$


相邻波腹间距：<!-- src: PH-C08#p056; type: direct -->

$$
x_{n+1} - x_n = (n+1)\frac{\lambda}{2} - n\frac{\lambda}{2} = \frac{\lambda}{2}
$$


波节坐标（振幅因子为零）：<!-- src: PH-C08#p056; type: direct -->

$$
x = (2n+1)\frac{\lambda}{4},\qquad n = 0,\ \pm 1,\ \pm 2,\ \cdots
$$


相邻波节间距：<!-- src: PH-C08#p056; type: direct -->

$$
x_{n+1} - x_n = \frac{\lambda}{2}
$$


### 相位特征

- 相邻波腹（即每一波节两侧）的各质元：振动相位相差 $\pi$，相位相反；<!-- src: PH-C08#p057; type: direct -->
- 相邻波节之间的各质元：振动相位相同。<!-- src: PH-C08#p057; type: direct -->

### 例题：固定端反射形成驻波

入射波 $y_i = A\cos 2\pi\left(\dfrac{t}{T} - \dfrac{x}{\lambda}\right)$，在 $x_0 = 5\lambda$ 处被反射，反射面为固定端。求驻波的波函数以及波节与波腹的坐标。<!-- src: PH-C08#p058ex; type: direct -->

通用方法（固定端半波损失法）：<!-- src: PH-C08#p058ex + #p059ex; type: synthesized -->

1. 入射波写成 $y_i = A\cos\left(\dfrac{2\pi}{T}t - kx\right)$，反射点 $x_0$ 处入射振动 $y_{i0} = A\cos\dfrac{2\pi}{T}t$，相位为 $\dfrac{2\pi}{T}t - kx_0$。
2. 固定端反射有半波损失；反射波从反射点回推到原点时再落后 $kx_0$，故原点处反射波为 $y_{r0} = A\cos\left(\dfrac{2\pi}{T}t - kx_0 - kx_0 + \pi\right)$。代入 $x_0 = 5\lambda$（$kx_0 = 10\pi$）得 $y_{r0} = A\cos\left(\dfrac{2\pi}{T}t - 19\pi\right)$。
3. 反射波（沿 $-x$ 方向传播）由反射点向任意点 $x$ 倒推得 $y_r = A\cos\left(\dfrac{2\pi}{T}t - 19\pi + kx\right) = A\cos\left(\dfrac{2\pi}{T}t + kx - \pi\right)$。

易错点：固定端反射须计入半波损失（额外相位 $\pi$）；反射波沿 $-x$ 方向传播，其相位中 $x$ 项取 "$+kx$"，传播方向决定符号。<!-- src: PH-C08#p058ex; type: one-step-inferred -->

合成驻波：<!-- src: PH-C08#p059ex; type: direct -->

$$
y = y_i + y_r = A\cos\left(\frac{2\pi}{T}t - kx\right) + A\cos\left(\frac{2\pi}{T}t + kx - \pi\right) = 2A\sin\frac{2\pi x}{\lambda}\,\sin\frac{2\pi t}{T}
$$


波腹条件：$\dfrac{2\pi x}{\lambda} = (2n+1)\dfrac{\pi}{2}$，$n = 0,1,2,\cdots$，即<!-- src: PH-C08#p059ex; type: direct -->

$$
x = (2n+1)\frac{\lambda}{4} = \frac{\lambda}{4},\ \frac{3\lambda}{4},\ \frac{5\lambda}{4},\ \cdots,\ \frac{19\lambda}{4}
$$


波节条件：$\dfrac{2\pi x}{\lambda} = n\pi$，$n = 0,1,2,\cdots$，即<!-- src: PH-C08#p059ex; type: direct -->

$$
x = n\frac{\lambda}{2} = 0,\ \frac{\lambda}{2},\ \lambda,\ \frac{3\lambda}{2},\ \cdots,\ 5\lambda
$$


注：固定端 $x_0 = 5\lambda$ 处为波节（$x = 5\lambda$ 落在波节序列末项），与固定端边界条件一致。<!-- src: PH-C08#p059ex; type: one-step-inferred -->


### 能量

#### 总平均能流密度

驻波可视为两列振幅相同、传播方向相反（速度分别为 $v$ 与 $-v$）的行波叠加，二者平均能流密度大小相等、方向相反，叠加后总平均能流密度为零：

$$
\langle w\rangle v + \langle w\rangle(-v) = 0
$$


即平均说来驻波没有能量的传播。 <!-- src: PH-C08#p060 + PH-C08#p061; type: direct -->

驻波波形随时间变化的图示：在 $t=0,\ T/8,\ T/4,\ T/2$ 各时刻波形不同，波节位置固定不动，波腹处合振幅在 $\pm 2A$ 之间变化（$2A$ 为合振幅最大值）。 <!-- src: PH-C08#p060g + PH-C08#p061g; type: direct -->

#### 驻波中动能与势能的分布与转化

驻波中体元的动能和势能有一定的（随位置、随时间的）分布。 <!-- src: PH-C08#p060 + PH-C08#p061; type: direct -->

动能与势能随时间相互转化：在时刻 $t$ 为弹性势能分布，经 $T/4$（$t+\tfrac{1}{4}T$）为动能分布，再经 $T/4$（$t+\tfrac{1}{2}T$）又为弹性势能分布；即每隔 $T/4$ 完成一次动能与势能的相互转化。 <!-- src: PH-C08#p060 + PH-C08#p061 + PH-C08#p063; type: synthesized -->

弹性势能集中在波节附近：在体元处于最大位移的时刻，能量全部为势能，且波节处势能最大、波腹处最小（为零）。 <!-- src: PH-C08#p063; type: synthesized -->

动能集中在波腹附近：在体元经过平衡位置的时刻，能量全部为动能，且波腹处动能最大、波节处最小（为零）。 <!-- src: PH-C08#p063 + PH-C08#p064; type: synthesized -->

当各体元同时到达最大位移（位移分布为正弦曲线、各点瞬时静止）时，动能处处为零，能量全部为弹性势能并集中于波节处；当各体元同时经过平衡位置（位移处处为零）时，势能处处为零，能量全部为动能并集中于波腹处。动能与势能在波节与波腹区域之间往复转移。 <!-- src: PH-C08#p064 + PH-C08#p063; type: synthesized -->

三列对照图示（kinetic energy ｜ displacement ｜ potential energy）展示同一驻波在不同时刻的能量空间分布：当位移处处为零（displacement 为平直线）时，动能曲线呈一排驼峰（极大值位于各波腹处）而势能曲线为零（平直）；当位移取正弦极值（displacement 为正弦曲线）时，动能曲线为零（平直）而势能曲线呈一排驼峰（极大值位于各波节处）。因此动能的驼峰（位于波腹）与势能的驼峰（位于波节）在空间上彼此错开、交替排列——图中动能呈 3 个驼峰、势能呈 4 个驼峰，二者峰位互不重合。该图为示意性曲线，未标注坐标轴与量纲。 <!-- src: PH-C08#p064g; type: direct -->

图示中（驻波某一段，两侧虚线为波节）蓝色竖直箭头表示波腹体元的运动方向，红色水平箭头表示波节附近体元的形变方向。 <!-- src: PH-C08#p063g; type: direct -->

#### 行波中体元随波形的传播（对比图示）

行波以速度 $v$ 沿 $x$ 正方向传播，波长为 $\lambda$，波形随时间（$t,\ t+\tfrac{1}{4}T,\ t+\tfrac{1}{2}T$）整体向 $v$ 方向平移；图中用红色标出两个体元 $\mathrm{d}x$，分别位于波形的不同相位处（一处靠近平衡位置即斜率最大处，一处靠近波峰/波谷即斜率近零处）。 <!-- src: PH-C08#p062g; type: direct -->

### 两端固定弦的简正模与简正频率

两端固定的张紧的弦上形成稳定驻波时，弦长 $L$ 必须等于半波长的整数倍：

$$
n\cdot\frac{\lambda}{2}=L,\qquad n=1,2,3,\cdots
$$


由 $f=\dfrac{u}{\lambda}$，得到各允许频率为

$$
f_n=\frac{u}{\lambda}=\frac{n}{2L}\sqrt{\frac{F_T}{\mu}},\qquad n=1,2,3,\cdots
$$


式中 $u$ 为弦上波速，$F_T$ 为弦的张力，$\mu$ 为弦的线密度。
<!-- src: PH-C08#p065; type: direct -->

上述各种允许频率所对应的驻波称为弦的简正模；相应的频率称为弦的简正频率。
<!-- src: PH-C08#p065; type: direct -->

最低的简正频率为基频：

$$
f_1=\frac{1}{2L}\sqrt{\frac{F_T}{\mu}}\quad(\text{基频})
$$


其余简正频率为基频的整数倍，称为 $n$ 次谐频：

$$
f_n=nf_1=n\cdot\frac{1}{2L}\sqrt{\frac{F_T}{\mu}},\qquad(n>1)
$$

<!-- src: PH-C08#p065; type: direct -->

各简正模对应的波长（弦长 $L$，两端为波节）：

| 模式 | 波长 |
| --- | --- |
| $n=1$ | $\lambda_1=2L$ |
| $n=2$ | $\lambda_2=L$ |
| $n=3$ | $\lambda_3=\dfrac{2L}{3}$ |
| $n=4$ | $\lambda_4=\dfrac{L}{2}$ |

<!-- src: PH-C08#p065g + PH-C08#p066g; type: synthesized -->

### 简正模的叠加

对弦来说，在两端固定的情况下，可以有多个不同的简正频率，每个简正频率对应于一个简正模。
<!-- src: PH-C08#p066; type: direct -->

对于弦上发生的任何可能的一般运动，总可以看成是一系列简正模的线性叠加。
<!-- src: PH-C08#p066; type: direct -->

两个简正模可以合成一个波扰动。以一次模（基频 $f_1$、周期 $T_1$）与二次模（$f_2=2f_1$、周期 $T_2$）为例，二者满足

$$
f_n=nf_1,\qquad f_2=2f_1,\qquad T_1=2T_2
$$


在 $t=0,\ \tfrac{T_2}{4},\ \tfrac{T_2}{2},\ \tfrac{3T_2}{4},\ T_2$（对应 $t=0,\ \tfrac{T_1}{8},\ \tfrac{T_1}{4},\ \tfrac{3T_1}{8},\ \tfrac{T_1}{2}$）各时刻，将两简正模波形叠加，即得弦上合成的波扰动随时间演化的形状。
<!-- src: PH-C08#p067 + PH-C08#p067g; type: synthesized -->

### 受击/受拨位置对激发模式的影响

激发驻波时，凡在受击或受拨点处恰为波节的简正模不会被激发出来。受激发点的位置决定了哪些谐频缺失。
<!-- src: PH-C08#p068; type: compressed -->

- 距一端为 $\dfrac{L}{2}$ 的点（即中点）受击或受拨而振动时：以该点为波节的模式不出现，即 $2$ 次谐频、$2\times2$ 次谐频、$2\times3$ 次谐频、$\cdots$，亦即 $2k$ 次谐频（$k=1,2,3,\cdots$）不出现。
<!-- src: PH-C08#p068; type: direct -->
- 距一端为 $\dfrac{L}{n}$ 的点受击或受拨而振动时：以该点为波节的模式不出现，即 $n$ 次谐频、$n\times2$ 次谐频、$n\times3$ 次谐频、$\cdots$，亦即 $nk$ 次谐频（$k=1,2,3,\cdots$）不出现。
<!-- src: PH-C08#p068; type: direct -->

### 弦乐器实例：小提琴各部位名称

两端固定弦的简正振动是弦乐器发声的基础。下图为一把小提琴实物照片，标注了各主要部位的名称：

- 琴头
- 弦轴、弦轴箱
- 弦枕
- 指板
- 面板
- 音孔
- 琴桥（琴马）
- 微调器
- 拉弦板
- 背板（位于琴背面）
- 侧板
- 尾钮
- 腮托
<!-- src: PH-C08#p069g; type: direct -->

## 两相干波源的远场干涉（极大与极小方向）

### 几何条件与波程差

设 $S_1$、$S_2$ 为两相干波源，$P$ 为观察点，可为极大或极小位置。在远场近似 $R \gg d$ 下，两波到达 $P$ 的波程差可用角度 $\theta$ 表示：
<!-- src: PH-C08#p070; type: direct -->

$$
\Delta L = L_2 - L_1 = d\sin\theta
$$

<!-- src: PH-C08#p070 + #p071; type: direct -->

其中 $d$ 为两源间距，$L_1$、$L_2$ 分别为 $S_1$、$S_2$ 到 $P$ 的距离，$\theta$ 为 $OP$ 方向与两源连线中垂线的夹角（$O$ 为两源连线中点）。
<!-- src: PH-C08#p070 + #p071; type: synthesized -->

### 极大（maxima）方向

波程差为波长整数倍时为极大：
<!-- src: PH-C08#p070; type: direct -->

$$
\Delta L = n\lambda, \quad n = 0, \pm 1, \pm 2, \cdots
$$

<!-- src: PH-C08#p070; type: direct -->

$$
\sin\theta = n\frac{\lambda}{d}, \quad n = 0, \pm 1, \pm 2, \cdots
$$

<!-- src: PH-C08#p070 + #p071; type: direct -->

其中 $n = \pm 1, \pm 2, \cdots$ 对应第 1 级、第 2 级……极大；$n = 0$ 对应 $\theta = 0$，即中央极大。
<!-- src: PH-C08#p071; type: direct -->

### 极小（minima）方向

波程差为半波长奇数倍时为极小：
<!-- src: PH-C08#p071; type: direct -->

$$
\Delta L = (2n+1)\frac{\lambda}{2}, \quad n = 0, \pm 1, \pm 2, \cdots
$$

<!-- src: PH-C08#p071; type: direct -->

$$
\sin\theta = \left(n + \frac{1}{2}\right)\frac{\lambda}{d}, \quad n = 0, \pm 1, \pm 2, \cdots
$$

<!-- src: PH-C08#p071; type: direct -->

### 例题：由相邻极大方向求波长

两相干源相距 $d = 3.0\ \mathrm{cm}$，振动频率相同。沿与两源连线平行、距其 $L = 40.0\ \mathrm{cm}$ 的直线 $L_1$ 观察水波纹；从中央极大（在 $L_1$ 上）到相邻的下一个极大，沿 $L_1$ 移动距离 $D = 8.0\ \mathrm{cm}$，求波长。
<!-- src: PH-C08#p072; type: compressed -->

求解方法：
<!-- src: PH-C08#p072 + #p073; type: synthesized -->

- 由观察屏上的几何关系求下一极大的方向角：$\tan\theta = \dfrac{D}{L} = \dfrac{8.0\ \mathrm{cm}}{40.0\ \mathrm{cm}} = 0.20$，得 $\theta = 11.3^\circ$。
<!-- src: PH-C08#p072; type: direct -->
- 中央极大相邻的下一极大取 $n = 1$，代入 $\sin\theta = n\dfrac{\lambda}{d}$ 得 $\sin\theta = \dfrac{\lambda}{d}$。
<!-- src: PH-C08#p073; type: direct -->
- 解出波长：$\lambda = d\sin\theta = (3.0\ \mathrm{cm})\sin 11.3^\circ = 0.59\ \mathrm{cm}$。
<!-- src: PH-C08#p073; type: direct -->

易错点：方向角 $\theta$ 由观察屏上的 $\tan\theta = D/L$ 求出，而干涉条件用 $\sin\theta$；"相邻的下一个极大"相对中央极大对应 $n=1$。
<!-- src: PH-C08#p072 + #p073; type: one-step-inferred -->

## §8.6 波的衍射 Diffraction

### 衍射现象

波在传播过程中遇到障碍物（孔、缝、边缘等）时，能绕过障碍物边缘、偏离原直线传播方向继续传播。<!-- src: PH-C08#p074g; type: one-step-inferred -->

实验表明：当孔的线度可与波长相比拟时，衍射现象明显；孔越小，衍射越明显。<!-- src: PH-C08#p074; type: direct -->

平面波经孔后波阵面变化与孔径关系：孔较大时，波通过孔后中央部分仍近似沿原方向直线传播，只在孔边缘处波阵面发生弯曲、产生偏向两侧的传播；孔很小（与波长可比拟）时，孔后波阵面近似呈以孔为中心的半圆形（球面）向各方向展开，衍射显著。<!-- src: PH-C08#p074g; type: synthesized -->

### 惠更斯原理 Huygens principle

波动传到的各点都可视为发射球面子波的波源；在其后的任一时刻，这些子波波阵面的包络面就决定新的波阵面。<!-- src: PH-C08#p075; type: direct -->

由原波阵面作图求新波阵面的步骤：在 $t$ 时刻波阵面上各点作为子波源，各自发出球面子波；经 $\Delta t$ 后各子波波阵面（半径由子波传播速度与 $\Delta t$ 决定）的包络面即为 $t+\Delta t$ 时刻的新波阵面。<!-- src: PH-C08#p075g; type: synthesized -->

惠更斯原理对球面波、平面波及波遇到孔（缝）后波阵面弯曲产生衍射的情形均适用：平面波阵面上各点发出的子波，其包络在波阵面中部仍为平面，而在受限边缘（孔/缝，其宽度记为 $a$）处包络面向外弯曲，从而说明衍射现象；当孔（缝）宽 $a$ 与波长可比拟时衍射显著。<!-- src: PH-C08#p075g; type: synthesized -->


## §8.7 多普勒效应

### 现象与定义

当波源静止、观测者静止时，观测频率 = 波源频率。<!-- src: PH-C08#p076; type: direct -->

1842 年由 J. C. Doppler 提出：波源或观测者运动时，观测频率与波源频率不同，这一现象称为多普勒效应（Doppler effect）。<!-- src: PH-C08#p076; type: direct -->

### 三种情形与符号约定

- Case A：波源静止，观测者运动。<!-- src: PH-C08#p077 + #p079; type: direct -->
- Case B：波源运动，观测者静止。<!-- src: PH-C08#p077 + #p079; type: direct -->
- Case C：波源运动，观测者运动。<!-- src: PH-C08#p077 + #p079; type: direct -->

所有速度均相对于介质（取介质参考系）。波源和观测者的运动都发生在它们之间的连线上。<!-- src: PH-C08#p077 + #p079; type: direct -->

符号约定：

- $\vec{v}_s$：介质参考系中波源的速度。<!-- src: PH-C08#p077 + #p079; type: direct -->
- $\vec{v}_r$：介质参考系中观测者的速度。<!-- src: PH-C08#p077 + #p079; type: direct -->
- $\vec{u}$：介质参考系中机械波的波速，由介质的性质决定。<!-- src: PH-C08#p077 + #p079; type: direct -->

图示约定：波源 $s$ 在左、观测者 $r$ 在右，$\vec{v}_s$ 指向右（朝 $r$）、$\vec{v}_r$ 指向左（朝 $s$）。<!-- src: PH-C08#p077 + #p079; type: direct -->

### Case A 观测者运动（A Moving Receiver）

波源静止、观测者运动时，波相对于观测者通过的速度变为 $u'$。原始矢量关系为：<!-- src: PH-C08#p078 + #p080; type: direct -->

$$
\vec{u} = \vec{u}' + \vec{v}_r \qquad\Longrightarrow\qquad \vec{u}' = \vec{u} - \vec{v}_r
$$


将矢量式按连线方向投影即得标量分解（$\vec{v}_r$ 朝向波源运动取正、与 $\vec{u}$ 反向；远离波源运动则反之）：<!-- src: PH-C08#p078 + #p080; type: synthesized -->

$$
u' = u + v_r \quad(\text{观测者向着波源运动})
$$

$$
u' = u - v_r \quad(\text{观测者远离波源运动})
$$


观测者接收到的频率 = 单位时间内通过观测者的完整波长数 = $\dfrac{u'}{\lambda}$。<!-- src: PH-C08#p078 + #p080; type: direct -->

观测者向着波源运动时，波以速度 $u+v_r$ 通过观察者：<!-- src: PH-C08#p078 + #p080; type: direct -->

$$
f_r = \frac{u+v_r}{\lambda} = \frac{u+v_r}{u/f} = \frac{u+v_r}{u}\,f,\qquad f_r > f
$$


观测者远离波源运动时，波以速度 $u-v_r$ 通过观察者：<!-- src: PH-C08#p078 + #p080; type: direct -->

$$
f_r = \frac{u-v_r}{\lambda} = \frac{u-v_r}{u/f} = \frac{u-v_r}{u}\,f,\qquad f_r < f
$$


此处 $\lambda = u/f$（波源静止，波长不变）。<!-- src: PH-C08#p078 + #p080; type: one-step-inferred -->

### Case B 波源运动（A Moving Source）

波源运动时，介质中波速 $\vec{u}$ 仍由介质性质决定（不随波源改变），但波长被改变为 $\lambda'$。<!-- src: PH-C08#p081 + #p082; type: synthesized -->

波源向着观测者运动时，波长缩短：<!-- src: PH-C08#p081; type: direct -->

$$
\lambda' = uT - v_s T
$$

$$
f_r = \frac{u}{\lambda'} = \frac{u}{uT - v_s T} = \frac{u}{u - v_s}\,f,\qquad f_r > f
$$


波源远离观测者运动时，波长伸长：<!-- src: PH-C08#p082; type: direct -->

$$
\lambda' = uT + v_s T
$$

$$
f_r = \frac{u}{\lambda'} = \frac{u}{uT + v_s T} = \frac{u}{u + v_s}\,f,\qquad f_r < f
$$


图示：波源向观测者一侧的波前被压密（波长 $\lambda'<\lambda$），背离一侧的波前被拉疏（波长 $\lambda'>\lambda$）。<!-- src: PH-C08#p081 + #p082; type: direct -->

### Case C：波源与观测者都运动

#### 沿连线方向运动（纵向多普勒效应）

观测者以速度 $v_r$ 相对于介质运动，波相对于观测者的波速变为 $u \pm v_r$（接近时取 $+$，远离时取 $-$）。<!-- src: PH-C08#p083; type: direct -->

波源以速度 $v_s$ 相对于介质运动，波长变为 $uT \mp v_s T$（接近时取 $-$，远离时取 $+$）。<!-- src: PH-C08#p083; type: direct -->

观测者接收到的频率：

$$
f_r = \frac{u \pm v_r}{uT \mp v_s T} = \frac{u \pm v_r}{u \mp v_s}\, f
$$


式中 $f$ 为波源频率；分子 $\pm v_r$ 按观测者接近取 $+$、远离取 $-$；分母 $\mp v_s$ 按波源接近取 $-$、远离取 $+$。<!-- src: PH-C08#p083; type: direct -->

图示纵向多普勒效应：波源 $S$ 与观测者 $r$ 沿二者连线运动，$\vec{v}_s$ 指向 $r$、$\vec{v}_r$ 指向 $S$（即相向接近）。<!-- src: PH-C08#p083g; type: direct -->

#### 运动方向不沿连线方向

当波源和观测者的运动不是沿着它们的连线方向时：

$$
f_r = \frac{u + v_r\cos\theta_r}{u - v_s\cos\theta_s}\, f
$$


其中 $\theta_r$ 为观测者速度 $\vec{v}_r$ 与连线的夹角，$\theta_s$ 为波源速度 $\vec{v}_s$ 与连线的夹角。<!-- src: PH-C08#p083 + #p083g; type: direct -->

### 冲击波与马赫锥

当波源的速度超过波速时，产生冲击波（shock wave），其波前形成马赫锥（Mach cone）。<!-- src: PH-C08#p084; type: direct -->

马赫锥的半顶角（Mach cone angle）满足：

$$
\sin\theta = \frac{u}{v_s}
$$


<!-- src: PH-C08#p084; type: direct -->

即各时刻发出的球面波前的公共包络面构成圆锥面（Surface of Mach cone），锥半角由声速传播距离 $ut$ 与波源移动距离 $v_s t$ 之比确定。<!-- src: PH-C08#p084 + #p084g; type: synthesized -->

当波源的速度趋于波速（$v_s \to u$）时，所有的波面在一点相切，对应声速区。<!-- src: PH-C08#p084 + #p084g; type: direct -->

### 例题：反射屏测速（拍频法）

声源 $S$ 位置固定不动，反射屏 $P$ 以速度大小 $v=0.2\ \text{m/s}$ 向站在 $A$ 点的观察者运动，观察者接收到的拍频为 $4\ \text{Hz}$，空气中声速 $u=340\ \text{m/s}$，求声源频率 $f_0$。<!-- src: PH-C08#p085ex; type: direct -->

方法（两步多普勒 + 拍频）：

- $A$ 直接接收 $S$ 发出的波，频率 $f_1 = f_0$（声源与 $A$ 均静止）。<!-- src: PH-C08#p085ex; type: direct -->
- 反射屏 $P$ 先作为接近波源的运动观测者接收，再作为运动波源（接近 $A$）向 $A$ 发射。<!-- src: PH-C08#p085ex; type: direct -->

$$
f_P = \frac{u+v}{u}\, f_0,\qquad f_2 = \frac{u}{u-v}\, f_P = \frac{u+v}{u-v}\, f_0
$$


- 拍频关系为：<!-- src: PH-C08#p085ex; type: direct -->

$$
\Delta f = f_2 - f_1 = \frac{u+v}{u-v}\, f_0 - f_0,\qquad f_0 = \frac{u-v}{2v}\,\Delta f = 3398\ \text{Hz}
$$


要点：运动反射面在一次往返中相当于"先做运动观测者、再做运动波源"，频移效应叠加；拍频等于两路接收频率之差。<!-- src: PH-C08#p085ex; type: one-step-inferred -->
