---
title: "第7章 振动力学基础 · 速览"
description: "大学物理课程笔记：第7章 振动力学基础 · 速览。"
---

<div class="note-meta"><a href="/courses/physics/">大学物理目录</a><a href="/courses/physics/chapter-07/">阅读详版</a><a href="/downloads/physics/chapter-07-quick.md" download>下载 Markdown</a></div>

## 引入

- 机械振动：物体在一定位置附近来回往复的运动；任一物理量在某数值附近反复变化亦称振动。<!-- src: PH-C07#p03; type: direct -->
- 势阱：势能曲线 $U(x)$ 极小值附近区域；能量条件 $\frac{1}{2}m(dx/dt)^2+U(x)=E$，由动能非负得束缚条件 $E\ge U(x)$。<!-- src: PH-C07#p02; type: direct -->
- 保守力与势能：$F_x=-\dfrac{dU}{dx}$。<!-- src: PH-C07#p02; type: direct -->
- 简谐振动是最简单、最基本的振动，为本课程主要内容。<!-- src: PH-C07#p04; type: direct -->

## §7.1 简谐振动

- 弹簧振子（理想模型）：回复力 $f=-kx$，由牛二得 $-kx=m\dfrac{d^2x}{dt^2}$，即 $\dfrac{d^2x}{dt^2}+\dfrac{k}{m}x=0$；令 $\omega^2=\dfrac{k}{m}$ 得标准式 $\dfrac{d^2x}{dt^2}+\omega^2x=0$。<!-- src: PH-C07#p06; type: direct -->
- 复摆：绕轴 $O$ 转动刚体，质心距轴 $h$，$-mgh\sin\theta=J\dfrac{d^2\theta}{dt^2}$；小角 $\sin\theta\approx\theta$ 线性化，令 $\omega^2=\dfrac{mgh}{J}$ 得 $\dfrac{d^2\theta}{dt^2}+\omega^2\theta=0$。<!-- src: PH-C07#p08; type: direct -->
- 简谐振动定义：满足 $\dfrac{d^2x}{dt^2}+\omega^2x=0$，解 $x=A\cos(\omega t+\varphi)$（SHM）；振动体称谐振子。<!-- src: PH-C07#p09; type: direct -->

### 特征量与关系式
- 振幅 $A$：位移最大值，$-A\le x\le+A$。<!-- src: PH-C07#p10; type: direct -->
- 周期 $T=\dfrac{2\pi}{\omega}$（由 $\omega T=2\pi$）；频率 $f=\dfrac{1}{T}$；角频率 $\omega=2\pi f$。<!-- src: PH-C07#p10 + #p11; type: direct -->
- 相位 $\omega t+\varphi$；初相 $\varphi$（$t=0$ 时相位）。三特征参量：振幅、角频率、相位。一个周期 $T$ 对应 $2\pi$ rad 相位差。<!-- src: PH-C07#p11 + #p12; type: direct -->

### 相位差与同相反相
- 相位差 $\Delta\varphi=(\omega_2t+\varphi_2)-(\omega_1t+\varphi_1)$；同频率时 $\Delta\varphi=\varphi_2-\varphi_1$。<!-- src: PH-C07#p14 + #p15; type: direct -->
- $\pi>\Delta\varphi>0$ 时 $x_2$ 超前 $x_1$（较早到达某状态），$x_1$ 落后。<!-- src: PH-C07#p14; type: direct -->
- 同相：$\Delta\varphi=\pm2k\pi$；反相：$\Delta\varphi=\pm(2k+1)\pi$（$k=0,1,2,\dots$）。<!-- src: PH-C07#p15; type: direct -->

### 速度与加速度
- $v=-\omega A\sin(\omega t+\varphi)=\omega A\cos(\omega t+\varphi+\tfrac{\pi}{2})$，速度超前位移 $\dfrac{\pi}{2}$。<!-- src: PH-C07#p16; type: direct -->
- $a=-\omega^2A\cos(\omega t+\varphi)=\omega^2A\cos(\omega t+\varphi+\pi)$，加速度超前位移 $\pi$（与位移反相）。幅值依次为 $x_m,\omega x_m,\omega^2x_m$。<!-- src: PH-C07#p16; type: direct -->

### 初始条件
- $t=0$ 时 $x_0=A\cos\varphi$，$v_0=-\omega A\sin\varphi$，解出 $A=\sqrt{x_0^2+\dfrac{v_0^2}{\omega^2}}$，$\tan\varphi=-\dfrac{v_0}{\omega x_0}$；$\varphi$ 还需按 $x_0,v_0$ 的符号确定象限。<!-- src: PH-C07#p17; type: direct --><!-- src: PH-C07#p17; type: one-step-inferred -->

### 旋转矢量法
- 振幅矢量 $\vec{A}$ 模为 $A$，以 $\omega$ 绕 $O$ 逆时针匀速旋转；与 $x$ 轴夹角即相位 $\omega t+\varphi$（$t=0$ 时为 $\varphi$）；其在 $x$ 轴投影 $x=A\cos(\omega t+\varphi)$，投影点画出周期 $T$、振幅 $A$ 的余弦曲线。<!-- src: PH-C07#p18 + #p18g; type: synthesized -->
- 求相位的关键：由位移定出两候选相位，再据运动方向（旋转矢量所在象限）剔除多余解。例：质点1在 $x=A/2$ 左行取 $\tfrac{\pi}{3}$，质点2在 $x=-A/2$ 右行取 $\tfrac{4\pi}{3}$，$\Delta\varphi=\pi$。<!-- src: PH-C07#p19ex + #p20ex; type: synthesized -->

### 能量
- 动能 $K=\dfrac{1}{2}kA^2\sin^2(\omega t+\varphi)$，$K_{\max}=\dfrac{1}{2}kA^2$，$K_{\min}=0$。<!-- src: PH-C07#p21; type: direct -->
- 势能 $U=\dfrac{1}{2}kx^2=\dfrac{1}{2}kA^2\cos^2(\omega t+\varphi)$，$U_{\max}=\dfrac{1}{2}kA^2$，$U_{\min}=0$。<!-- src: PH-C07#p21; type: direct -->
- 机械能 $E=K+U=\dfrac{1}{2}kA^2$，为常量、与时间无关，且 $E\propto A^2$。$K$、$U$ 以 $T/2$ 为周期互补起伏，和恒为 $E$。<!-- src: PH-C07#p22; type: direct -->

## §7.2 一维简谐振动的合成

### 同频率合成
- 两同频分振动 $x_1=A_1\cos(\omega t+\varphi_1)$、$x_2=A_2\cos(\omega t+\varphi_2)$，合振动 $x=A\cos(\omega t+\varphi)$ 仍同频。<!-- src: PH-C07#p23; type: direct -->
- $A=\sqrt{A_1^2+A_2^2+2A_1A_2\cos(\varphi_2-\varphi_1)}$，$\tan\varphi=\dfrac{A_1\sin\varphi_1+A_2\sin\varphi_2}{A_1\cos\varphi_1+A_2\cos\varphi_2}$；$\varphi$ 仍需按合矢量象限判定。<!-- src: PH-C07#p23; type: direct --><!-- src: PH-C07#p23; type: one-step-inferred -->
- 几何法：$\vec{A}_1$、$\vec{A}_2$ 首尾相接，合矢量 $\vec{A}$ 投影为合位移。<!-- src: PH-C07#p23g; type: synthesized -->

### 相位差对合振幅
- 同相 $\varphi_2-\varphi_1=2k\pi$：$A=A_1+A_2$（最大）。反相 $=(2k+1)\pi$：$A=|A_1-A_2|$（最小）。一般值：$|A_1-A_2|<A<A_1+A_2$。<!-- src: PH-C07#p24; type: direct -->

### n 个同频率合成（振幅均 $a$、相邻相位差 $\delta$）
- 合振动 $x=a\,\dfrac{\sin\frac{n\delta}{2}}{\sin\frac{\delta}{2}}\cos\!\left(\omega t+\dfrac{n-1}{2}\delta\right)$。<!-- src: PH-C07#p26; type: direct -->
- 几何来源：$a=2R\sin\frac{\delta}{2}$，$A=2R\sin\frac{n\delta}{2}$，相除得图示取向下的合振动系数；一般情形把 $A$ 作为振幅时取非负值，负号并入相位。合初相 $\varphi=\dfrac{n-1}{2}\delta$（相对第一个分振动，须再加 $x_1$ 初相）。<!-- src: PH-C07#p26 + #p28ex; type: direct --><!-- src: PH-C07#p26; type: one-step-inferred -->

### 频率有差别的合成与拍
- $x_1=A\cos(\omega_1t+\varphi)$、$x_2=A\cos(\omega_2t+\varphi)$，和差化积得 $x=2A\cos\dfrac{(\omega_2-\omega_1)t}{2}\cos\!\left(\dfrac{\omega_1+\omega_2}{2}t+\varphi\right)$。<!-- src: PH-C07#p29; type: direct -->
- 当 $\omega_1,\omega_2$ 都大且相近（$\omega_1+\omega_2\approx2\omega_1$）：$x\approx2A\cos\dfrac{(\omega_2-\omega_1)t}{2}\cos(\omega_1t+\varphi)$，即高频振动受低频振幅调制，形成拍。<!-- src: PH-C07#p30; type: direct -->
- 振幅变化周期 $T=\dfrac{2\pi}{|\omega_2-\omega_1|}$（低频调制因子周期之半；源页按 $\omega_2>\omega_1$ 书写）；拍频 $f=\dfrac{|\omega_2-\omega_1|}{2\pi}=|f_2-f_1|$。<!-- src: PH-C07#p30; type: direct --><!-- src: PH-C07#p30; type: one-step-inferred -->

### 频谱
- 周期性振动可分解为频率为基频 $\nu_0$ 整数倍的简谐振动之和；以频率为横轴、振幅为纵轴作图称频谱。<!-- src: PH-C07#p31 + #p32; type: direct -->
- $\nu_0$ 基频，$k\nu_0$ 为 $k$ 倍频；周期性振动为离散谱（分立谱线），非周期性振动为连续谱；此分解方法称频谱分析。<!-- src: PH-C07#p31 + #p32; type: direct -->

## §7.3 二维简谐振动的合成

- 两垂直同频振动 $x=A_1\cos(\omega t+\varphi_1)$、$y=A_2\cos(\omega t+\varphi_2)$，消去 $t$ 得一般轨迹方程 $\dfrac{x^2}{A_1^2}+\dfrac{y^2}{A_2^2}-\dfrac{2xy}{A_1A_2}\cos(\varphi_2-\varphi_1)=\sin^2(\varphi_2-\varphi_1)$，形状由相位差决定。<!-- src: PH-C07#p33; type: direct -->
- 五种相位差轨迹：<!-- src: PH-C07#p33 + #p34 + #p35; type: synthesized -->
  - $\Delta\varphi=2k\pi$：直线 $y=\dfrac{A_2}{A_1}x$（一、三象限，正斜率）。<!-- src: PH-C07#p33; type: direct -->
  - $\Delta\varphi=\pi+2k\pi$：直线 $y=-\dfrac{A_2}{A_1}x$（二、四象限，负斜率）。<!-- src: PH-C07#p34; type: direct -->
  - $\Delta\varphi=\dfrac{\pi}{2}+2k\pi$：正椭圆 $\dfrac{x^2}{A_1^2}+\dfrac{y^2}{A_2^2}=1$，顺时针。<!-- src: PH-C07#p34; type: direct -->
  - $\Delta\varphi=-\dfrac{\pi}{2}+2k\pi$：正椭圆，逆时针。<!-- src: PH-C07#p35; type: direct -->
  - 其它值：斜椭圆（长短轴不沿坐标轴）。<!-- src: PH-C07#p35; type: compressed -->
- 李萨如图形：$\Delta\varphi$ 由 $0$ 连续变化时，轨迹在直线（$0,\pm\pi$）、正椭圆（$\pm\frac{\pi}{2}$）、斜椭圆之间依次过渡；$\Delta\varphi$ 正负对应椭圆绕行方向相反。<!-- src: PH-C07#p36g; type: direct -->

## §7.4 阻尼振动和受迫振动

### 阻尼振动
- 受弹性力 $-kx$ 与阻力 $-\gamma\dfrac{dx}{dt}$，方程 $\dfrac{d^2x}{dt^2}+\dfrac{\gamma}{m}\dfrac{dx}{dt}+\dfrac{k}{m}x=0$；令 $\omega_0^2=\dfrac{k}{m}$（固有角频率），$2\beta=\dfrac{\gamma}{m}$（阻尼系数）得 $\dfrac{d^2x}{dt^2}+2\beta\dfrac{dx}{dt}+\omega_0^2x=0$。<!-- src: PH-C07#p37; type: direct -->
- 欠阻尼（$\beta<\omega_0$）：$x=A e^{-\beta t}\cos(\omega t+\varphi)$，$\omega=\sqrt{\omega_0^2-\beta^2}$，$T=\dfrac{2\pi}{\sqrt{\omega_0^2-\beta^2}}$，振幅按 $Ae^{-\beta t}$ 衰减。<!-- src: PH-C07#p38; type: direct -->
- 过阻尼（$\beta>\omega_0$）：不作往复，缓慢回平衡，解为两衰减指数项之和 $Ae^{-(\beta-\sqrt{\beta^2-\omega_0^2})t}+Be^{-(\beta+\sqrt{\beta^2-\omega_0^2})t}$。<!-- src: PH-C07#p39; type: direct -->
- 临界阻尼（$\beta=\omega_0$）：质点不作往复运动的临界值。<!-- src: PH-C07#p39; type: direct -->

### 受迫振动
- 受弹性力、阻力、驱动力 $F=F_0\cos\omega t$；令 $\omega_0^2=\dfrac{k}{m}$，$\beta=\dfrac{\gamma}{2m}$，$f_0=\dfrac{F_0}{m}$，方程 $\dfrac{d^2x}{dt^2}+2\beta\dfrac{dx}{dt}+\omega_0^2x=f_0\cos\omega t$。<!-- src: PH-C07#p40 + #p41; type: direct -->
- 通解 = 暂态项（$\propto e^{-\beta t}$ 衰减）+ 定态项（按驱动频率持续振动）；$t>\dfrac{5}{\beta}$ 时暂态衰减至起始的 $0.7\%$。<!-- src: PH-C07#p41; type: direct -->
- 定态解 $x=A\cos(\omega t+\varphi)$，振动频率即驱动力频率；$A=\dfrac{f_0}{\sqrt{(\omega_0^2-\omega^2)^2+4\beta^2\omega^2}}$，$\tan\varphi=-\dfrac{2\beta\omega}{\omega_0^2-\omega^2}$。<!-- src: PH-C07#p42; type: direct -->

### 共振
- 振幅与外力频率有关；当 $\omega_0^2>2\beta^2$ 时，令 $\dfrac{dA}{d\omega}=0$ 得位移共振频率 $\omega=\sqrt{\omega_0^2-2\beta^2}$，最大振幅 $A_{\max}=\dfrac{f_0}{2\beta\sqrt{\omega_0^2-\beta^2}}$。<!-- src: PH-C07#p43; type: direct --><!-- src: PH-C07#p43; type: one-step-inferred -->
- 振幅—频率曲线：峰值在 $\omega$ 接近 $\omega_0$ 处；$\gamma$（或 $\beta$）越小峰越高越尖锐，越大越低越平缓。<!-- src: PH-C07#p43g; type: direct -->
- 实例：Tacoma Narrows 悬索桥因湍流风激起驻波于 1940 年坍塌。<!-- src: PH-C07#p44; type: direct -->
