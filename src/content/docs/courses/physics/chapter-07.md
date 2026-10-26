---
title: "第7章 振动力学基础"
description: "大学物理课程笔记：第7章 振动力学基础。"
---

<div class="note-meta"><a href="/courses/physics/">大学物理目录</a><a href="/courses/physics/chapter-07-quick/">阅读速览</a><a href="/downloads/physics/chapter-07.md" download>下载 Markdown</a></div>

## 引入：振动的概念

### 振动的概念

物体在一定位置附近来回往复的运动，称为**机械振动**。<!-- src: PH-C07#p03; type: direct -->

质点在稳定平衡点附近来回往复的运动，是一种被“束缚”在稳定平衡点附近的运动，这种运动即称为**振动**。<!-- src: PH-C07#p02; type: direct -->

任一物理量（如位移、电压、电流、电场强度、磁感应强度、…）在某一数值附近反复变化，称为**振动**。<!-- src: PH-C07#p03; type: direct -->

振动有各种不同的形式：机械振动、电磁振动、…。<!-- src: PH-C07#p03; type: direct -->

### 势阱与振动的能量条件

图为一维势能曲线 $U(x)$：横轴为 $x$，纵轴为 $U(x)$；画出由低到高的水平能量线 $E_1<E_2<E_3<E_4<E_5$（其中 $E_1,E_2$ 在横轴下方，$E_3,E_4,E_5$ 在横轴上方）；横轴上自左至右标出 $x_3,\ O,\ x_6,\ x_4,\ x_1,\ x_5,\ x_2$。曲线先上升到一个极大值（峰，约达 $E_4$ 高度，位于 $O$ 右侧），再下降穿过横轴到一个极小值（谷，即势阱底部）。<!-- src: PH-C07#p02g; type: direct -->

图中势能曲线 $U(x)$ 极小值附近的区域标注为**势阱**。<!-- src: PH-C07#p02g; type: direct -->

动能与势能之和等于总能量 $E$：<!-- src: PH-C07#p02; type: one-step-inferred -->

$$
\frac{1}{2}m\left(\frac{dx}{dt}\right)^2 + U(x) = E
$$

<!-- src: PH-C07#p02; type: direct -->

由于动能非负：<!-- src: PH-C07#p02; type: direct -->

$$
\frac{1}{2}m\left(\frac{dx}{dt}\right)^2 \ge 0
$$

<!-- src: PH-C07#p02; type: direct -->

因此质点运动被限制在满足下式的区域内，这正是质点被“束缚”在势阱中的能量条件：<!-- src: PH-C07#p02; type: one-step-inferred -->

$$
E \ge U(x)
$$

<!-- src: PH-C07#p02; type: direct -->

保守力 $F_x$ 与势能 $U(x)$ 的关系：<!-- src: PH-C07#p02; type: direct -->

$$
F_x = -\frac{dU}{dx}
$$

<!-- src: PH-C07#p02; type: direct -->

### 振动现象的普遍性与简谐振动

人体本身就是振动现象的一个宝库：心脏在跳动，肺脏在摆动，觉着冷时会颤抖，有时会打鼾；之所以能听和说，是因为耳鼓和喉头在振动；看得见东西是因为光波需要振动；只有摆动双腿才能走动起来；舌头不摆动就说不出“振动”一词；就连组成人体自身的原子也都在振动着。<!-- src: PH-C07#p04; type: compressed -->

参考文献：R. E. D. Bishop. Vibration. New York: Cambridge University Press, 1965；A. P. French. Vibrations and Waves. W. W. Norton & Company, Inc. 1971；A. P. French. 振动与波. 徐绪笃译. 北京：人民教育出版社，1981.<!-- src: PH-C07#p04; type: direct -->

简谐振动是最简单、最基本的振动；本课程主要讨论简谐振动。<!-- src: PH-C07#p04; type: direct -->

## §7.1 简谐振动

### 弹簧振子

弹簧振子（A simple oscillating system，振动系统）是研究简谐振动（§7.1 简谐振动）的理想模型。<!-- src: PH-C07#p05 + #p05g; type: compressed -->

以平衡位置（equilibrium position）为坐标原点 $O$，物块偏离平衡位置的位移为 $x$，弹簧原长为 $l_0$（自由端在 $O$ 处），弹性回复力 $\vec{f}$ 指向平衡位置（与位移 $x$ 反向）。<!-- src: PH-C07#p06g; type: direct -->

弹性回复力与位移成正比、方向相反：

$$
f = -kx
$$


<!-- src: PH-C07#p06; type: direct -->

由牛顿第二定律得运动方程：

$$
-kx = m\frac{\mathrm{d}^2 x}{\mathrm{d}t^2}
$$


<!-- src: PH-C07#p06; type: direct -->

整理为：

$$
\frac{\mathrm{d}^2 x}{\mathrm{d}t^2} + \frac{k}{m}x = 0
$$


<!-- src: PH-C07#p06; type: direct -->

令 $\omega^2 = \dfrac{k}{m}$，方程化为简谐振动的标准形式：

$$
\frac{\mathrm{d}^2 x}{\mathrm{d}t^2} + \omega^2 x = 0
$$


<!-- src: PH-C07#p06; type: direct -->

### 摆：单摆与复摆

摆分为两类：单摆（simple pendulum）与复摆（physical pendulum，compound pendulum）。<!-- src: PH-C07#p07; type: direct -->

单摆模型：悬点 $O$、摆线长 $l$、摆角 $\theta$、摆球质量 $M$，摆球在竖直平面内绕 $O$ 摆动。<!-- src: PH-C07#p07g; type: direct -->

历史：17 世纪伽利略、惠更斯和牛顿；1646 年梅森；1687 年牛顿《自然哲学的数学原理》。<!-- src: PH-C07#p07; type: direct -->

### 复摆（physical pendulum）

复摆为绕固定轴 $O$ 转动的刚体，质心 $C$ 到转轴 $O$ 的距离为 $h$，偏角为 $\theta$，重力 $mg$ 作用于质心 $C$。图中竖直虚线为平衡位置（equilibrium position），即质心 $C$ 位于转轴 $O$ 正下方时的位置。<!-- src: PH-C07#p08g; type: one-step-inferred -->

由转动定律 $\vec{M} = J\vec{\alpha}$，重力对转轴 $O$ 的力矩（负号表示其为回复力矩）：

$$
-mgh\sin\theta = J\frac{\mathrm{d}^2\theta}{\mathrm{d}t^2}
$$


<!-- src: PH-C07#p08; type: direct -->

整理得：

$$
\frac{\mathrm{d}^2\theta}{\mathrm{d}t^2} + \frac{mgh}{J}\sin\theta = 0
$$


<!-- src: PH-C07#p08; type: direct -->

当 $\theta$ 很小时，取近似 $\sin\theta \approx \theta$，方程线性化为：

$$
\frac{\mathrm{d}^2\theta}{\mathrm{d}t^2} + \frac{mgh}{J}\theta = 0
$$


<!-- src: PH-C07#p08; type: direct -->

令 $\omega^2 = \dfrac{mgh}{J}$，得简谐振动标准形式：

$$
\frac{\mathrm{d}^2\theta}{\mathrm{d}t^2} + \omega^2\theta = 0
$$


<!-- src: PH-C07#p08; type: direct -->

### 简谐振动的定义

简谐振动满足的微分方程形式为 $\dfrac{d^2 x}{dt^2}+\omega^2 x=0$（位移型），同型方程也可写为角量型 $\dfrac{d^2\theta}{dt^2}+\omega^2\theta=0$ 等。<!-- src: PH-C07#p09; type: direct -->

该微分方程的解为 $x=A\cos(\omega t+\varphi)$，描述的运动称为简谐振动（SHM，Simple Harmonic Motion）。<!-- src: PH-C07#p09; type: direct -->

作简谐振动的系统称为谐振系统，振动体称为谐振子（harmonic oscillator）。<!-- src: PH-C07#p09; type: direct -->

速度由位移对时间求导给出：$v=\dfrac{dx}{dt}$。<!-- src: PH-C07#p09; type: direct -->

$x$-$t$ 曲线为余弦型曲线，位移随时间在 $+A$ 与 $-A$ 之间周期性往复，一个周期 $T$ 对应曲线上一个完整波形。<!-- src: PH-C07#p09g; type: direct -->

### 振幅

振幅（Amplitude）$A$ 是位移的最大值，位移取值范围为 $-A\le x\le +A$。<!-- src: PH-C07#p10; type: direct -->

### 周期与频率

周期（Period）$T$ 是振动重复一次所需时间，满足 $x(t+T)=x(t)$。<!-- src: PH-C07#p10; type: direct -->

由 $x(t+T)=x(t)$ 得 $A\cos[\omega(t+T)+\varphi]=A\cos(\omega t+\varphi)$，要求 $\omega T=2\pi$，故 $T=\dfrac{2\pi}{\omega}$。<!-- src: PH-C07#p10; type: direct -->

频率（Frequency）$f$ 为单位时间内振动次数，$f=\dfrac{1}{T}$。<!-- src: PH-C07#p11; type: direct -->

角频率（Angular frequency）$\omega$ 与频率的关系为 $\omega=2\pi f$。<!-- src: PH-C07#p11; type: direct -->

### 相位与初相位

相位（Phase）为 $\omega t+\varphi$，表示 $t$ 时刻的相位。<!-- src: PH-C07#p11; type: direct -->

$\varphi$ 为 $t=0$ 时刻的相位，称为初相位。<!-- src: PH-C07#p11; type: direct -->

描述简谐振动的三个特征参量为：振幅、角频率、相位。<!-- src: PH-C07#p12; type: direct -->

在 $x=A\cos(\omega t+\varphi)$ 中，时间 $t$ 改变一个 $T$，对应相位 $\omega t+\varphi$ 改变 $2\pi$。<!-- src: PH-C07#p12; type: direct -->

由于 SHM 每经过一个周期 $T$ 重复一次，而余弦函数每经过 $2\pi$ rad 重复一次，所以一个周期 $T$ 代表 $2\pi$ rad 的相位差（one period $T$ represents a phase difference of $2\pi$ rad）。<!-- src: PH-C07#p12; type: direct -->

### 相位差

对两个简谐振动 $x_1=A_1\cos(\omega_1 t+\varphi_1)$ 与 $x_2=A_2\cos(\omega_2 t+\varphi_2)$，相位差定义为 $\Delta\varphi=(\omega_2 t+\varphi_2)-(\omega_1 t+\varphi_1)$。<!-- src: PH-C07#p14 + #p15; type: direct -->

示例：取 $x_1=A\cos\left(\omega t-\dfrac{\pi}{4}\right)$，$x_2=A\cos\omega t$，则 $\Delta\varphi=\varphi_2-\varphi_1=0-\left(-\dfrac{\pi}{4}\right)=\dfrac{\pi}{4}$。<!-- src: PH-C07#p13; type: direct -->

减小 $\varphi$（Decreasing $\varphi$）使曲线沿 $t$ 轴向右平移（shifts the curve rightward）。<!-- src: PH-C07#p13; type: direct -->

当 $\pi>\Delta\varphi>0$ 时，$x_2$ 的相位比 $x_1$ 的相位超前，即 $x_2$ 比 $x_1$ 较早达到某一振动状态。<!-- src: PH-C07#p14; type: direct -->

相应地，$x_1$ 的相位比 $x_2$ 的相位落后，即 $x_1$ 比 $x_2$ 较晚达到某一振动状态。<!-- src: PH-C07#p14; type: direct -->

### 同频率振动的初相位差、同相与反相

对两个同频率的简谐振动，相位差化为初相位差 $\Delta\varphi=\varphi_2-\varphi_1$。<!-- src: PH-C07#p15; type: direct -->

当 $\Delta\varphi=\pm 2k\pi$（$k=0,1,2,\dots$）时，两振动同相。<!-- src: PH-C07#p15; type: direct -->

当 $\Delta\varphi=\pm(2k+1)\pi$（$k=0,1,2,\dots$）时，两振动反相。<!-- src: PH-C07#p15; type: direct -->

同相时（左图），$x_1$ 与 $x_2$ 步调一致，同时到达各自正向最大、同时过零、同时到达负向最大；反相时（右图），二者步调相反，一个达正向最大时另一个达负向最大。<!-- src: PH-C07#p15g; type: direct -->

### 速度与加速度

位移 $x=A\cos(\omega t+\varphi)$。<!-- src: PH-C07#p16; type: direct -->

速度 $v=\dfrac{dx}{dt}=-\omega A\sin(\omega t+\varphi)=\omega A\cos\left(\omega t+\varphi+\dfrac{\pi}{2}\right)$。<!-- src: PH-C07#p16; type: direct -->

由 $+\dfrac{\pi}{2}$ 的形式可知，速度相位比位移超前 $\dfrac{\pi}{2}$。<!-- src: PH-C07#p16; type: one-step-inferred -->

加速度 $a=\dfrac{d^2 x}{dt^2}=-\omega^2 A\cos(\omega t+\varphi)=\omega^2 A\cos(\omega t+\varphi+\pi)$。<!-- src: PH-C07#p16; type: direct -->

由 $+\pi$ 的形式可知，加速度相位比位移超前 $\pi$（与位移反相）。<!-- src: PH-C07#p16; type: one-step-inferred -->

由图可见 $x$、$v$、$a$ 同周期 $T$ 变化：位移幅值为 $x_m$，速度幅值为 $\omega x_m$，加速度幅值为 $\omega^2 x_m$；当 $x$ 取正向最大时 $a$ 取负向最大、$v$ 为零，三条曲线在时间轴上依次相位错开。<!-- src: PH-C07#p16g; type: synthesized -->

### 初始条件与振幅、初相的确定

简谐振动位移与速度：$x=A\cos(\omega t+\varphi)$，$v=\dfrac{\mathrm{d}x}{\mathrm{d}t}=-\omega A\sin(\omega t+\varphi)$。
<!-- src: PH-C07#p17; type: direct -->

取 $t=0$ 时刻，$x=x_0$、$v=v_0$，称为初始条件。
<!-- src: PH-C07#p17; type: direct -->

将初始条件代入，得 $x_0=A\cos\varphi$，$v_0=-\omega A\sin\varphi$。
<!-- src: PH-C07#p17; type: direct -->

由初始条件解出振幅与初相：

$$
A=\sqrt{x_0^2+\frac{v_0^2}{\omega^2}}\qquad \tan\varphi=-\frac{v_0}{\omega x_0}
$$

<!-- src: PH-C07#p17; type: direct -->

仅由 $\tan\varphi$ 不能唯一确定初相；实际选取 $\varphi$ 时还需同时满足 $x_0=A\cos\varphi$ 与 $v_0=-\omega A\sin\varphi$，即按 $x_0,v_0$ 的符号确定象限。<!-- src: PH-C07#p17; type: one-step-inferred -->

初始条件 $\to$ $A$ 和 $\varphi$，即振幅 $A$ 与初相 $\varphi$ 由初始条件决定。
<!-- src: PH-C07#p17; type: direct -->

### 旋转矢量法（振幅矢量）

引入振幅矢量 $\vec{A}$，其模等于振幅 $A$；该矢量以角速度 $\omega$ 绕原点 $O$ 逆时针匀速旋转。
<!-- src: PH-C07#p18g; type: synthesized -->

$\vec{A}$ 与 $x$ 轴的夹角等于振动的相位 $\omega t+\varphi$；$t=0$ 时夹角为初相 $\varphi$，$t=t$ 时夹角为 $\omega t+\varphi$。
<!-- src: PH-C07#p18 + #p18g; type: synthesized -->

$\vec{A}$ 在 $x$ 轴上的投影即为简谐振动的位移：$x=A\cos(\omega t+\varphi)$。
<!-- src: PH-C07#p18; type: direct -->

旋转矢量端点在圆周上的运动（如图中点 $P_1$、$P_2$ 经 $\omega t+\varphi$ 转过）与其在 $x$ 轴投影点 $P$ 的运动相对应，投影点随时间画出周期为 $T$、振幅为 $A$ 的 $x$-$t$ 余弦曲线。
<!-- src: PH-C07#p18g; type: one-step-inferred -->

### 例题：两质点振动的相位差

两质点在一直线上作同频率的简谐振动，振幅相等。当质点 1 在 $x=A/2$ 处向左运动时，质点 2 在 $x=-A/2$ 处向右运动，求两质点的相位差。
<!-- src: PH-C07#p19ex; type: direct -->

设两质点振动方程：$x_1=A\cos(\omega t+\varphi_1)$，$x_2=A\cos(\omega t+\varphi_2)$。
<!-- src: PH-C07#p19ex; type: direct -->

Particle 1：由 $x_1=A\cos(\omega t+\varphi_1)=\dfrac{A}{2}$ 得 $\cos(\omega t+\varphi_1)=\dfrac{1}{2}$，相位有两个候选 $\omega t+\varphi_1=\dfrac{\pi}{3}$ 或 $\dfrac{5\pi}{3}$。
<!-- src: PH-C07#p19ex; type: direct -->

质点 1 在 $x=A/2$ 处向左运动，旋转矢量位于第一象限（相位取上半），故确定 $\omega t+\varphi_1=\dfrac{\pi}{3}$。
<!-- src: PH-C07#p19ex + #p19g; type: synthesized -->

Particle 2：由 $x_2=A\cos(\omega t+\varphi_2)=-\dfrac{A}{2}$ 得 $\cos(\omega t+\varphi_2)=-\dfrac{1}{2}$，相位有两个候选 $\omega t+\varphi_2=\dfrac{4\pi}{3}$ 或 $\dfrac{2\pi}{3}$。
<!-- src: PH-C07#p20ex; type: direct -->

质点 2 在 $x=-A/2$ 处向右运动，旋转矢量位于第三象限（相位取下半），故确定 $\omega t+\varphi_2=\dfrac{4\pi}{3}$。
<!-- src: PH-C07#p20ex + #p20g; type: synthesized -->

两质点振动的相位差：

$$
\Delta\varphi=(\omega t+\varphi_2)-(\omega t+\varphi_1)=\frac{4\pi}{3}-\frac{\pi}{3}=\pi
$$

<!-- src: PH-C07#p20ex; type: direct -->

判定运动方向并用旋转矢量在象限中的位置剔除多余的相位候选，是此类问题的关键方法。
<!-- src: PH-C07#p19ex + #p20ex; type: synthesized -->

### 简谐振动的能量（水平弹簧振子）

讨论以 $x=A\cos(\omega t+\varphi)$、$v=-\omega A\sin(\omega t+\varphi)$ 描述的水平弹簧振子，利用 $\omega^2=\dfrac{k}{m}$。
<!-- src: PH-C07#p21; type: direct -->

动能 kinetic energy：

$$
K=\frac{1}{2}mv^2=\frac{1}{2}m(-\omega A)^2\sin^2(\omega t+\varphi)=\frac{1}{2}kA^2\sin^2(\omega t+\varphi)
$$

<!-- src: PH-C07#p21; type: direct -->

动能的极值：$K_{\max}=\dfrac{1}{2}kA^2$，$K_{\min}=0$。
<!-- src: PH-C07#p21; type: direct -->

势能 Potential energy：

$$
U=\frac{1}{2}kx^2=\frac{1}{2}kA^2\cos^2(\omega t+\varphi)
$$

<!-- src: PH-C07#p21; type: direct -->

势能的极值：$U_{\max}=\dfrac{1}{2}kA^2$，$U_{\min}=0$。
<!-- src: PH-C07#p21; type: direct -->

### 简谐振动的机械能

机械能 The mechanical energy：

$$
E=K+U=\frac{1}{2}kA^2\sin^2(\omega t+\varphi)+\frac{1}{2}kA^2\cos^2(\omega t+\varphi)=\frac{1}{2}kA^2
$$

<!-- src: PH-C07#p22; type: direct -->

线性振子的机械能为常量，且与时间无关（The mechanical energy of a linear oscillator is constant and independent of time）。
<!-- src: PH-C07#p22; type: direct -->

简谐振动的机械能正比于振幅的平方：$E\propto A^2$。
<!-- src: PH-C07#p22; type: direct -->

能量随时间变化（$E$-$t$ 图）：$K(t)$ 与 $U(t)$ 均按 $\sin^2$、$\cos^2$ 形式随时间起伏、相位互补，二者周期为 $T/2$，其和 $U(t)+K(t)$ 为水平直线 $E$（恒定）；二者在 $0$ 与 $\dfrac{1}{2}kA^2$ 之间交替。
<!-- src: PH-C07#p22g; type: one-step-inferred -->

能量随位置变化（$E$-$x$ 图，$x$ 从 $-x_m$ 到 $x_m$）：势能 $U(x)$ 为开口向上的抛物线、在 $x=\pm x_m$ 处达最大、在 $x=0$ 处为零；动能 $K(x)$ 为开口向下的曲线、在 $x=0$ 处最大、在 $x=\pm x_m$ 处为零；二者之和 $U(x)+K(x)=E$ 为水平直线（恒定）。
<!-- src: PH-C07#p22g; type: one-step-inferred -->

## §7.2 一维简谐振动的合成

### 同频率一维 SHM 合成的基本设定

一质点在一直线上同时进行两个同频率的简谐振动 <!-- src: PH-C07#p23; type: direct -->

$$
x_1 = A_1\cos(\omega t + \varphi_1)
$$

$$
x_2 = A_2\cos(\omega t + \varphi_2)
$$


两分振动同频率 $\omega$，仅振幅与初相不同；相位差定义为 <!-- src: PH-C07#p23; type: direct -->

$$
\Delta\varphi = \varphi_2 - \varphi_1
$$


合振动为两分振动的代数相加 <!-- src: PH-C07#p23; type: direct -->

$$
x = x_1 + x_2 = A_1\cos(\omega t + \varphi_1) + A_2\cos(\omega t + \varphi_2)
$$


合振动仍是同频率 $\omega$ 的简谐振动 <!-- src: PH-C07#p23; type: direct -->

$$
x = A\cos(\omega t + \varphi)
$$


合振幅 $A$ 与合初相 $\varphi$ 由下式给出 <!-- src: PH-C07#p23; type: direct -->

$$
A = \sqrt{A_1^2 + A_2^2 + 2A_1 A_2\cos(\varphi_2 - \varphi_1)}
$$

$$
\tan\varphi = \frac{A_1\sin\varphi_1 + A_2\sin\varphi_2}{A_1\cos\varphi_1 + A_2\cos\varphi_2}
$$


同初始条件求初相一样，$\tan\varphi$ 只确定 $\varphi$ 模 $\pi$ 的值；实际合初相还需由合矢量所在象限（即分子、分母的符号）确定。<!-- src: PH-C07#p23; type: one-step-inferred -->

### 旋转矢量（相量）法的几何解释

用旋转矢量法：分振幅矢量 $\vec{A}_1$（与 $x$ 轴夹角 $\varphi_1$）、$\vec{A}_2$（与 $x$ 轴夹角 $\varphi_2$）首尾相接，合矢量 $\vec{A}$ 与 $x$ 轴夹角为 $\varphi$，其在 $x$ 轴上的投影 $x$ 等于两分量投影 $x_1$、$x_2$ 之和 <!-- src: PH-C07#p23g; type: synthesized -->

矢量 $\vec{A}_2$ 相对 $\vec{A}_1$ 转过的夹角即相位差 $\varphi_2 - \varphi_1$，合振幅 $A$ 由 $\vec{A}_1$、$\vec{A}_2$ 首尾相接构成的三角形的合矢量长度给出 <!-- src: PH-C07#p23g; type: one-step-inferred -->

### 相位差对合振幅的影响（两个同频率分振动）

合振幅 $A$ 随相位差 $\varphi_2 - \varphi_1$ 取值在 $\big|A_1 - A_2\big|$ 与 $A_1 + A_2$ 之间变化，下列为三种典型情形 <!-- src: PH-C07#p24; type: synthesized -->

情形（1）：相位相同（同相），相位差为 $2\pi$ 的整数倍，合振幅取最大值 <!-- src: PH-C07#p24; type: direct -->

$$
\varphi_2 - \varphi_1 = 2k\pi \qquad (k = 0, \pm 1, \pm 2, \cdots)
$$

$$
A = A_1 + A_2
$$


情形（2）：相位相反（反相），相位差为 $\pi$ 的奇数倍，合振幅取最小值 <!-- src: PH-C07#p24; type: direct -->

$$
\varphi_2 - \varphi_1 = (2k + 1)\pi \qquad (k = 0, \pm 1, \pm 2, \cdots)
$$

$$
A = \big|A_1 - A_2\big|
$$


情形（3）：相位差为一般值时，合振幅介于上述两极值之间 <!-- src: PH-C07#p24; type: direct -->

$$
(A_1 + A_2) > A > \big|A_1 - A_2\big|
$$


### n 个同频率简谐振动的合成

一质点在一直线上同时进行 $n$ 个同频率的简谐振动，它们的振幅均为 $a$，相位依次差一个恒量 $\delta$（n SHMs），写出总合振动的表达式 <!-- src: PH-C07#p25 + #p26; type: synthesized -->

各分振动依次为 <!-- src: PH-C07#p25; type: direct -->

$$
x_1 = a\cos\omega t
$$

$$
x_2 = a\cos(\omega t + \delta)
$$

$$
x_3 = a\cos(\omega t + 2\delta)
$$

$$
\cdots
$$

$$
x_n = a\cos[\omega t + (n-1)\delta]
$$


合振动为各分振动之和，仍为同频率简谐振动 <!-- src: PH-C07#p25 + #p26; type: direct -->

$$
x = x_1 + x_2 + x_3 + \cdots + x_n = A\cos(\omega t + \varphi)
$$


### n 个矢量首尾相接的几何求和

旋转矢量法：$n$ 个长度均为 $a$ 的分矢量首尾相接，相邻矢量夹角均为 $\delta$，构成一段折线（内接于半径为 $R$ 的圆弧）；各矢量端点公共圆心为 $C$，$|OC| = |PC| = R$，合矢量 $\vec{A} = \overrightarrow{OP}$ <!-- src: PH-C07#p25g + #p26g; type: synthesized -->

单个分矢量 $a$ 所对的半弦关系为 <!-- src: PH-C07#p26; type: direct -->

$$
\frac{a}{2} = R\sin\frac{\delta}{2} \qquad a = 2R\sin\frac{\delta}{2}
$$


合矢量 $A = OP$ 所对的半弦关系为 <!-- src: PH-C07#p26; type: direct -->

$$
A = 2R\sin\frac{n\delta}{2}
$$


两式相除消去 $R$，得合振幅 <!-- src: PH-C07#p26; type: direct -->

$$
A = a\,\frac{\sin\dfrac{n\delta}{2}}{\sin\dfrac{\delta}{2}}
$$


上式按源页图示取向书写；若用于一般 $\delta$ 并把 $A$ 严格视为振幅，应取非负值，负号可并入相位加 $\pi$。<!-- src: PH-C07#p26; type: one-step-inferred -->

由几何关系（$\angle OCP$ 的处理），合初相满足 <!-- src: PH-C07#p25g + #p26g; type: direct -->

$$
2\varphi = (n-1)\delta \qquad \varphi = \frac{n-1}{2}\,\delta
$$


合振动表达式为 <!-- src: PH-C07#p26; type: direct -->

$$
x = a\,\frac{\sin\dfrac{n\delta}{2}}{\sin\dfrac{\delta}{2}}\cos\!\left(\omega t + \frac{n-1}{2}\delta\right)
$$


### 例题：5 个同频率简谐振动的合成

一质点在一直线上同时进行 5 个同频率的简谐振动，它们分别为，试计算合振动的表达式 <!-- src: PH-C07#p27ex; type: direct -->

$$
x_1 = 4\cos\!\left(120\pi t + \frac{\pi}{6}\right),\quad x_2 = 4\cos\!\left(120\pi t + \frac{\pi}{2}\right),\quad x_3 = 4\cos\!\left(120\pi t + \frac{5\pi}{6}\right)
$$

$$
x_4 = 4\cos\!\left(120\pi t + \frac{7\pi}{6}\right),\quad x_5 = 4\cos\!\left(120\pi t + \frac{9\pi}{6}\right)
$$


各分振动振幅均为 $a = 4$，相邻初相依次差一恒量，相位差 <!-- src: PH-C07#p27ex + #p28ex; type: direct -->

$$
\delta = \frac{\pi}{3}
$$


幻灯片给出一个被划去的错误写法与正确写法的对比：错误写法 $x = 4\cdot\dfrac{\sin\!\left(\frac{5}{2}\cdot\frac{\pi}{3}\right)}{\sin\!\left(\frac{1}{2}\cdot\frac{\pi}{3}\right)}\cos\!\left(120\pi t + \frac{4}{2}\cdot\frac{\pi}{3}\right)$ 漏掉了基准分振动 $x_1$ 的初相 $\frac{\pi}{6}$。通式中的合初相 $\frac{n-1}{2}\delta$ 是相对第一个分振动而言的，须再加上 $x_1$ 的初相 $\frac{\pi}{6}$ <!-- src: PH-C07#p27ex + #p28ex; type: one-step-inferred -->

代入 $n=5$、$a=4$、$\delta=\frac{\pi}{3}$，并以 $x_1$ 的初相 $\frac{\pi}{6}$ 为基准（合初相在通式 $\frac{n-1}{2}\delta$ 基础上加 $\frac{\pi}{6}$） <!-- src: PH-C07#p28ex; type: synthesized -->

$$
x = \frac{4\sin\dfrac{5\pi}{6}}{\sin\dfrac{\pi}{6}}\cos\!\left(120\pi t + \frac{4}{2}\cdot\frac{\pi}{3} + \frac{\pi}{6}\right)
$$


化简得合振动表达式 <!-- src: PH-C07#p28ex; type: direct -->

$$
x = 4\cos\!\left(120\pi t + \frac{5\pi}{6}\right)
$$


该例对应旋转矢量图为 5 个等长 $a$、相邻夹角 $\delta=\frac{\pi}{3}$ 的分矢量首尾相接，合矢量 $\vec{A}=\overrightarrow{OP}$ 由起点 $O$ 指向折线末端 $P$ <!-- src: PH-C07#p28g; type: synthesized -->

### 两个振幅相同、频率有差别的简谐振动的合成

设两个分振动（振幅相同 $A$、初相相同 $\varphi$，仅角频率不同）为：<!-- src: PH-C07#p29; type: direct -->

$$
x_1 = A\cos(\omega_1 t + \varphi) \qquad x_2 = A\cos(\omega_2 t + \varphi)
$$


合振动为两者之和：<!-- src: PH-C07#p29; type: direct -->

$$
x = x_1 + x_2 = A\cos(\omega_1 t + \varphi) + A\cos(\omega_2 t + \varphi)
$$


利用和差化积，可写成两个余弦因子的乘积：<!-- src: PH-C07#p29; type: direct -->

$$
x = 2A\cos\frac{(\omega_2 - \omega_1)t}{2}\,\cos\!\left(\frac{\omega_1 + \omega_2}{2}\,t + \varphi\right)
$$


一种重要的特殊情况：$\omega_1$ 和 $\omega_2$ 都较大，而两者相差不多。<!-- src: PH-C07#p29; type: direct -->

此条件下有近似 $\omega_1 + \omega_2 \approx 2\omega_1$，亦可写为 $\omega_1 + \omega_2 \approx 2\omega_2$。<!-- src: PH-C07#p29; type: direct -->

### 拍（beat）

在上述特殊情况下，合振动近似为：<!-- src: PH-C07#p30; type: direct -->

$$
x \approx 2A\cos\frac{(\omega_2 - \omega_1)t}{2}\,\cos(\omega_1 t + \varphi)
$$


这是两个因子乘积代表的合振动，可理解为一个高频振动受一个低频振动的调制。<!-- src: PH-C07#p30; type: direct -->

其中 $\cos(\omega_1 t + \varphi)$ 为高频因子，$2A\cos\dfrac{(\omega_2-\omega_1)t}{2}$ 为缓慢变化的低频调制因子；实际包络振幅取其绝对值。<!-- src: PH-C07#p30 + #p29; type: one-step-inferred -->

$x$-$t$ 曲线呈现高频振荡，其包络（振幅）随时间周期性地由大变小再变大，形成一组一组的“拍”。<!-- src: PH-C07#p30g; type: direct -->

振幅变化的周期为因子 $2A\cos\dfrac{(\omega_2-\omega_1)t}{2}$ 周期的一半；源页按 $\omega_2>\omega_1$ 书写，一般情形应取频率差的绝对值：<!-- src: PH-C07#p30; type: direct --><!-- src: PH-C07#p30; type: one-step-inferred -->

$$
T = \frac{1}{2}\cdot\frac{2\pi}{\dfrac{|\omega_2 - \omega_1|}{2}} = \frac{2\pi}{|\omega_2 - \omega_1|}
$$


振幅变化频率即拍频（beat frequency）：<!-- src: PH-C07#p30; type: direct --><!-- src: PH-C07#p30; type: one-step-inferred -->

$$
f = \frac{1}{T} = \frac{|\omega_2 - \omega_1|}{2\pi} = |f_2 - f_1|
$$


### 频谱（spectrum）与频谱分析

任一复杂的周期性振动，都可以分解为一系列简谐振动的叠加，这些简谐振动的频率是该周期性振动频率 $\nu_0$ 的整数倍。<!-- src: PH-C07#p31 + #p32; type: direct -->

反之，一系列简谐振动的叠加可以构成任一复杂的周期性振动，这些简谐振动的频率是该周期性振动频率 $\nu_0$ 的整数倍。<!-- src: PH-C07#p31; type: direct -->

以这些简谐振动的频率为横坐标、以相应的振幅为纵坐标所作的图解，称为该振动的频谱。<!-- src: PH-C07#p31 + #p32; type: direct -->

频率成分中，$\nu_0$ 称为基频；$k\nu_0$（$k = 1, 2, 3, \dots$）称为 $k$ 倍频。<!-- src: PH-C07#p31 + #p32; type: direct -->

周期性振动具有离散谱（频谱图上为一系列分立的谱线，对应基频及各倍频）。<!-- src: PH-C07#p31 + #p32; type: direct -->

图示中以一周期性的锯齿波 $x$-$t$ 曲线为例，其频谱由位于基频及各倍频处的一系列分立谱线组成，谱线高度（振幅）随倍频次数增大而总体减小。<!-- src: PH-C07#p31g + #p32g; type: direct -->

这种将任一振动分解为许多简谐振动的方法，称为频谱分析。<!-- src: PH-C07#p32; type: direct -->

非周期性振动的频谱是连续谱。<!-- src: PH-C07#p32; type: direct -->

## §7.3 二维简谐振动的合成

考虑两个相互垂直、频率相同的简谐振动，分别沿 $x$、$y$ 方向，角频率同为 $\omega$，初相分别为 $\varphi_1$、$\varphi_2$： <!-- src: PH-C07#p33; type: direct -->

$$
x = A_1\cos(\omega t + \varphi_1)
$$


$$
y = A_2\cos(\omega t + \varphi_2)
$$


消去时间 $t$ 后，合振动轨迹满足的一般方程为 <!-- src: PH-C07#p33; type: direct -->

$$
\frac{x^2}{A_1^2} + \frac{y^2}{A_2^2} - \frac{2xy}{A_1 A_2}\cos(\varphi_2 - \varphi_1) = \sin^2(\varphi_2 - \varphi_1)
$$


合振动轨迹的形状由两分振动的相位差 $\varphi_2 - \varphi_1$ 决定。 <!-- src: PH-C07#p33 + #p34 + #p35; type: synthesized -->

### 各相位差情形下的轨迹

（1）当 $\varphi_2 - \varphi_1 = 2k\pi$（$k = 0, \pm 1, \pm 2, \ldots$）时，轨迹退化为过原点、斜率为正的直线段： <!-- src: PH-C07#p33; type: direct -->

$$
y = \frac{A_2}{A_1}\,x
$$


该直线段位于第一、第三象限，端点对应 $(A_1, A_2)$ 与 $(-A_1, -A_2)$。 <!-- src: PH-C07#p33g; type: direct -->

（2）当 $\varphi_2 - \varphi_1 = \pi + 2k\pi$（$k = 0, \pm 1, \pm 2, \ldots$）时，轨迹退化为过原点、斜率为负的直线段： <!-- src: PH-C07#p34; type: direct -->

$$
y = -\frac{A_2}{A_1}\,x
$$


该直线段位于第二、第四象限，端点对应 $(-A_1, A_2)$ 与 $(A_1, -A_2)$。 <!-- src: PH-C07#p34g; type: direct -->

（3）当 $\varphi_2 - \varphi_1 = \dfrac{\pi}{2} + 2k\pi$（$k = 0, \pm 1, \pm 2, \ldots$）时，轨迹为正椭圆（长短轴沿坐标轴），质点沿顺时针方向运动： <!-- src: PH-C07#p34; type: direct -->

$$
\frac{x^2}{A_1^2} + \frac{y^2}{A_2^2} = 1
$$


椭圆与 $x$ 轴交于 $A_1$、与 $y$ 轴交于 $A_2$，运动方向为顺时针。 <!-- src: PH-C07#p34g; type: direct -->

（4）当 $\varphi_2 - \varphi_1 = -\dfrac{\pi}{2} + 2k\pi$（$k = 0, \pm 1, \pm 2, \ldots$）时，轨迹同为正椭圆，但质点沿逆时针方向运动： <!-- src: PH-C07#p35; type: direct -->

$$
\frac{x^2}{A_1^2} + \frac{y^2}{A_2^2} = 1
$$


椭圆与 $x$ 轴交于 $A_1$、与 $y$ 轴交于 $A_2$，运动方向为逆时针。 <!-- src: PH-C07#p35g; type: direct -->

（5）当 $\varphi_2 - \varphi_1$ 为其它量值时，轨迹为长短轴不沿坐标轴的斜椭圆。 <!-- src: PH-C07#p35 + #p35g; type: compressed -->

### 李萨如图形随相位差的变化

对上述两垂直同频振动，记相位差 $\Delta\varphi = \varphi_2 - \varphi_1$，轨迹满足同一一般方程，随 $\Delta\varphi$ 取不同值得到一系列轨迹（李萨如图形）。 <!-- src: PH-C07#p36; type: direct -->

随 $\Delta\varphi$ 由 $0$ 连续变化，轨迹依次为：$\Delta\varphi = 0$ 时为第一、三象限的正斜率直线；$\Delta\varphi = \dfrac{\pi}{4}$ 时为偏向该直线方向的斜椭圆；$\Delta\varphi = \dfrac{\pi}{2}$ 时为正椭圆；$\Delta\varphi = \dfrac{3\pi}{4}$ 时为偏向另一方向的斜椭圆；$\Delta\varphi = \pi$（即 $\Delta\varphi = -\pi$）时为第二、四象限的负斜率直线；$\Delta\varphi = -\dfrac{3\pi}{4}$、$-\dfrac{\pi}{2}$、$-\dfrac{\pi}{4}$ 时再依次经斜椭圆、正椭圆、斜椭圆变化。 <!-- src: PH-C07#p36g; type: direct -->

由该序列可见：$\Delta\varphi$ 取直线两端的特殊值（$0$、$\pm\pi$）时轨迹为直线段，取 $\pm\dfrac{\pi}{2}$ 时为正椭圆，介于其间时为斜椭圆；$\Delta\varphi$ 的正负对应椭圆绕行方向相反。 <!-- src: PH-C07#p34 + #p35 + #p36g; type: synthesized -->

## §7.4 阻尼振动和受迫振动

### 阻尼振动 Damped Harmonic Motion

阻尼振动（Damped Harmonic Motion）中物体同时受到弹性力 elastic force 与阻力 damping force 的作用。<!-- src: PH-C07#p37; type: direct -->

弹性力 elastic force 为 $-kx$。<!-- src: PH-C07#p37; type: direct -->

阻力 damping force 为 $-\gamma\dfrac{\mathrm{d}x}{\mathrm{d}t}$，其中 $\gamma$ 为 damping coefficient（阻力系数）。<!-- src: PH-C07#p37; type: direct -->

由牛顿第二定律得运动方程：

$$
-kx-\gamma\frac{\mathrm{d}x}{\mathrm{d}t}=m\frac{\mathrm{d}^2x}{\mathrm{d}t^2}
$$


整理为

$$
\frac{\mathrm{d}^2x}{\mathrm{d}t^2}+\frac{\gamma}{m}\frac{\mathrm{d}x}{\mathrm{d}t}+\frac{k}{m}x=0
$$

<!-- src: PH-C07#p37; type: direct -->

引入记号：$\omega_0^2=\dfrac{k}{m}$，$2\beta=\dfrac{\gamma}{m}$；其中 $\omega_0$ 为 natural frequency（固有角频率），$\beta$ 为 damping factor（阻尼系数）。<!-- src: PH-C07#p37; type: direct -->

代入后得阻尼振动的标准微分方程：

$$
\frac{\mathrm{d}^2x}{\mathrm{d}t^2}+2\beta\frac{\mathrm{d}x}{\mathrm{d}t}+\omega_0^2x=0
$$

<!-- src: PH-C07#p37; type: direct -->

右侧装置示意图：质量为 $m$ 的物体悬挂于弹簧 $k$ 下，并浸入液体中产生 Damping（阻尼）。<!-- src: PH-C07#p37g; type: compressed -->

#### 欠阻尼振动 underdamping（$\beta<\omega_0$）

当 $\beta<\omega_0$ 时为欠阻尼振动 underdamping，解为

$$
x=A\mathrm{e}^{-\beta t}\cos\!\left(\sqrt{\omega_0^2-\beta^2}\,t+\varphi\right)
$$

<!-- src: PH-C07#p38; type: direct -->

定义角频率 $\omega=\sqrt{\omega_0^2-\beta^2}$，解可写为

$$
x=A\mathrm{e}^{-\beta t}\cos(\omega t+\varphi)
$$

<!-- src: PH-C07#p38; type: direct -->

周期为

$$
T=\frac{2\pi}{\sqrt{\omega_0^2-\beta^2}}
$$

<!-- src: PH-C07#p38; type: direct -->

$x$-$t$ 曲线表现为振幅按 $A\mathrm{e}^{-\beta t}$ 包络逐渐衰减的往复振动：位移在正负之间反复变化，峰值随时间单调减小并趋于零。<!-- src: PH-C07#p38g; type: compressed -->

#### 过阻尼 overdamping（$\beta>\omega_0$）

当 $\beta>\omega_0$ 时，振动从最大位移缓慢回到平衡位置，不作往复运动，称为过阻尼 overdamping。<!-- src: PH-C07#p39; type: direct -->

其解为两个衰减指数项之和：

$$
A\mathrm{e}^{-\left(\beta-\sqrt{\beta^2-\omega_0^2}\right)t}+B\mathrm{e}^{-\left(\beta+\sqrt{\beta^2-\omega_0^2}\right)t}
$$

<!-- src: PH-C07#p39g; type: direct -->

$x$-$t$ 曲线表现为位移先升至一个最大值后单调缓慢地回落并趋于平衡位置，全程不越过平衡位置往复。<!-- src: PH-C07#p39g; type: compressed -->

#### 临界阻尼 critical damping（$\beta=\omega_0$）

$\beta=\omega_0$ 是质点不作往复运动的一个临界值，称为临界阻尼 critical damping。<!-- src: PH-C07#p39; type: direct -->

### 受迫振动 Forced Oscillations and Resonance

受迫振动指振动系统在外界周期性驱动力作用下的振动。系统受到三种力：弹性力（elastic force）$-kx$、阻力（damping force）$-\gamma\dfrac{\mathrm{d}x}{\mathrm{d}t}$、以及驱动力（driving force）$F=F_0\cos\omega t$。<!-- src: PH-C07#p40; type: direct -->

其中 $\gamma$ 为阻力系数，$\beta$ 为阻尼系数。<!-- src: PH-C07#p40; type: direct -->

由牛顿第二定律，运动方程为

$$
-kx-\gamma\frac{\mathrm{d}x}{\mathrm{d}t}+F=m\frac{\mathrm{d}^2x}{\mathrm{d}t^2}
$$


<!-- src: PH-C07#p40; type: direct -->

引入符号约定

$$
\omega_0^2=\frac{k}{m},\qquad \beta=\frac{\gamma}{2m},\qquad f_0=\frac{F_0}{m}
$$


<!-- src: PH-C07#p40; type: direct -->

整理得受迫振动的标准微分方程

$$
\frac{\mathrm{d}^2x}{\mathrm{d}t^2}+2\beta\frac{\mathrm{d}x}{\mathrm{d}t}+\omega_0^2x=f_0\cos\omega t
$$


<!-- src: PH-C07#p40 + #p41; type: direct -->

### 通解结构：暂态项与定态项

在阻尼较小时，方程的解由两部分构成

$$
x=A_0e^{-\beta t}\cos\!\left(\sqrt{\omega_0^2-\beta^2}\,t+\varphi_0\right)+A\cos(\omega t+\varphi)
$$


<!-- src: PH-C07#p41; type: direct -->

第一项为暂态项（transient state），随时间按 $e^{-\beta t}$ 衰减；第二项为定态项（stationary state），持续按驱动力频率振动。<!-- src: PH-C07#p41; type: direct -->

当 $t>\dfrac{5}{\beta}$ 时，暂态项已衰减到起始振幅的 $0.7\%$。<!-- src: PH-C07#p41; type: direct -->

### 定态解的复数法求解

定态解写成简谐形式 $x=A\cos(\omega t+\varphi)$，并用复数表示 $x=Ae^{i(\omega t+\varphi)}$，将驱动力写为 $f_0e^{i\omega t}$。<!-- src: PH-C07#p41; type: direct -->

代入方程得到代数关系

$$
(-\omega^2+i2\beta\omega+\omega_0^2)\,x=f_0e^{i\omega t}
$$


<!-- src: PH-C07#p41; type: direct -->

解出复振幅

$$
x=\frac{f_0}{(\omega_0^2-\omega^2)+i2\beta\omega}\,e^{i\omega t}
$$


<!-- src: PH-C07#p42; type: direct -->

由此得到定态受迫振动的振幅与初相

$$
A=|x|=\frac{f_0}{\sqrt{(\omega_0^2-\omega^2)^2+4\beta^2\omega^2}},\qquad \tan\varphi=-\frac{2\beta\omega}{\omega_0^2-\omega^2}
$$


<!-- src: PH-C07#p42; type: direct -->

定态时的受迫振动按简谐振动的规律变化 $x=A\cos(\omega t+\varphi)$，其振动频率即驱动力的频率（the frequency of the driving force）。<!-- src: PH-C07#p42; type: direct -->

### 共振 Resonance（位移共振）

振幅表达式可用阻力系数 $\gamma$ 等价写出（$\beta=\dfrac{\gamma}{2m}$）

$$
A=\frac{f_0}{\sqrt{(\omega_0^2-\omega^2)^2+4\beta^2\omega^2}}=\frac{F_0}{\sqrt{m^2(\omega^2-\omega_0^2)^2+\gamma^2\omega^2}}
$$


<!-- src: PH-C07#p43; type: direct -->

受迫振动一个最重要的特点：振幅和外力的频率有关。<!-- src: PH-C07#p43; type: direct -->

在 $\omega_0^2>2\beta^2$ 时，令 $\dfrac{\mathrm{d}A}{\mathrm{d}\omega}=0$，求得使振幅取极大的位移共振频率。若不满足该条件，则无正频率处的位移共振峰。<!-- src: PH-C07#p43; type: direct --><!-- src: PH-C07#p43; type: one-step-inferred -->

$$
\omega=\sqrt{\omega_0^2-2\beta^2}
$$


<!-- src: PH-C07#p43; type: direct -->

此时的最大振幅为

$$
A_{\max}=\frac{f_0}{2\beta\sqrt{\omega_0^2-\beta^2}}
$$


<!-- src: PH-C07#p43; type: direct -->

这种振幅随驱动频率出现极大的现象称为共振（resonance），此处为位移共振。<!-- src: PH-C07#p43; type: direct -->

振幅—频率曲线（纵轴 Amplitude (m)，横轴 Frequency (rad/s)，范围约 $0$ 到 $2\omega_0$，虚线标在 $\omega_0$）显示：峰值出现在驱动频率接近 $\omega_0$ 处；阻力系数 $\gamma$ 越小，共振峰越高越尖锐（如 $\gamma=0.01\,\text{kg/s}$ 峰最高），$\gamma$ 越大峰越低越平缓（$\gamma=0.05\,\text{kg/s}$、$\gamma=0.2\,\text{kg/s}$ 依次降低、展宽）。<!-- src: PH-C07#p43g; type: direct -->

### 实例：Tacoma Narrows 大桥

湍流风（turbulent winds）在 Tacoma Narrows 悬索桥（suspension bridge）上激起了驻波（standing waves），导致大桥于 1940 年 11 月 7 日坍塌，此时距其通车仅四个月。<!-- src: PH-C07#p44; type: direct -->

页面配以大桥坍塌的影像画面，并给出卡尔曼涡街（Karman vortex street，卡尔曼涡街）的涡街图样。<!-- src: PH-C07#p45g; type: direct -->
