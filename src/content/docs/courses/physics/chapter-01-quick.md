---
title: "第1章 质点运动学（速览）"
description: "大学物理课程笔记：第1章 质点运动学（速览）。"
---

<div class="note-meta"><a href="/courses/physics/">大学物理目录</a><a href="/courses/physics/chapter-01/">阅读详版</a><a href="/downloads/physics/chapter-01-quick.md" download>下载 Markdown</a></div>

## §1.1 质点运动的描述

### 质点与参考系、坐标系

- 质点（mass point，particle）：无大小和形状、无内部结构、仅占据空间位置、具有一定质量的点，是一种理想模型。<!-- src: PH-C01#p02 -->
- 可看作质点的条件：$r \gg l$（$l$ 为线度，$r$ 为到观察者的距离）；物体作平动时可看作质点。<!-- src: PH-C01#p03 -->
- 实际物体：质点 → 质点系 → 刚体 → ⋯；刚体是特殊的质点系。<!-- src: PH-C01#p04 -->
- 参考系（reference frame）：研究运动时选定的参考物体；描述运动需引入参考系与坐标系（coordinate system）。<!-- src: PH-C01#p05 -->
- 直角坐标系（Cartesian）：$(x,y,z)$，基矢 $\vec{i}$、$\vec{j}$、$\vec{k}$，$\vec{F}=F_x\vec{i}+F_y\vec{j}+F_z\vec{k}$。<!-- src: PH-C01#p05 -->
- 球坐标系（spherical）：$(r,\theta,\varphi)$，基矢 $\hat{r}$、$\hat{\theta}$、$\hat{\varphi}$。<!-- src: PH-C01#p06 -->
- 平面极坐标系（planar polar）：$(r,\varphi)$，$\varphi$ 自极轴量起，基矢 $\hat{r}$、$\hat{\varphi}$。<!-- src: PH-C01#p06 -->

### 位矢、位移、路程

- 位矢（position vector）：$\vec{r}=x\vec{i}+y\vec{j}+z\vec{k}$；运动方程 $\vec{r}=\vec{r}(t)$；$|\vec{r}|=\sqrt{x^2+y^2+z^2}$；方向由方向余弦 $\cos\alpha=x/|\vec{r}|$ 等给出。<!-- src: PH-C01#p07 -->
- 位移 $\Delta\vec{r}=\vec{r}(t+\Delta t)-\vec{r}(t)$（displacement）；路程 $\Delta s$（path）。<!-- src: PH-C01#p08 -->
- 一般情形 $|\Delta\vec{r}|\neq\Delta s$；取极限 $|\mathrm{d}\vec{r}|=\mathrm{d}s$。<!-- src: PH-C01#p08 -->
- 位矢大小的增量 $\Delta r=|\vec{r}(t+\Delta t)|-|\vec{r}(t)|$；三量必须区分：$\Delta r\neq|\Delta\vec{r}|$，$\mathrm{d}r\neq|\mathrm{d}\vec{r}|$。<!-- src: PH-C01#p08 -->
- 位移与坐标原点选择无关：$\Delta\vec{r}=\Delta\vec{r}'$。<!-- src: PH-C01#p09 -->
- 三个求和：$\left|\sum_{i=1}^{n}\Delta\vec{r}_i\right|=|\vec{r}_B-\vec{r}_A|$；$\sum_{i=1}^{n}\Delta|\vec{r}_i|=|\vec{r}_B|-|\vec{r}_A|$；$\sum_{i=1}^{n}|\Delta\vec{r}_i|\to\int_A^B|\mathrm{d}\vec{r}|=\int_A^B\mathrm{d}s=S_{AB}$（$n\to\infty$）。<!-- src: PH-C01#p11 -->

### 速度

- 平均速度 $\langle\vec{v}\rangle=\dfrac{\Delta\vec{r}}{\Delta t}$（矢量）；平均速率 $\langle v\rangle=\dfrac{\Delta s}{\Delta t}$。<!-- src: PH-C01#p12 -->
- 瞬时速度 $\vec{v}=\lim_{\Delta t\to0}\dfrac{\Delta\vec{r}}{\Delta t}=\dfrac{d\vec{r}}{dt}$，方向沿切线；瞬时速率 $v=\dfrac{ds}{dt}$；由 $|d\vec{r}|=ds$ 得 $|\vec{v}|=v$。<!-- src: PH-C01#p13 -->
- 直角坐标：$\vec{v}=v_x\vec{i}+v_y\vec{j}+v_z\vec{k}$，$v_x=\dfrac{dx}{dt}$ 等；$v=\sqrt{v_x^2+v_y^2+v_z^2}$；方向余弦 $\cos\alpha=v_x/|\vec{v}|$ 等。<!-- src: PH-C01#p14 -->

#### 平面极坐标系中的速度

- 基矢 $\hat{r}=\cos\theta\,\vec{i}+\sin\theta\,\vec{j}$，$\hat{\theta}=-\sin\theta\,\vec{i}+\cos\theta\,\vec{j}$。<!-- src: PH-C01#p15 -->
- 求导：$\dfrac{d\hat{r}}{dt}=\dfrac{d\theta}{dt}\hat{\theta}$，$\dfrac{d\hat{\theta}}{dt}=-\dfrac{d\theta}{dt}\hat{r}$。<!-- src: PH-C01#p15 -->
- 由 $\vec{r}=r\hat{r}$ 得 $\vec{v}=\dfrac{dr}{dt}\hat{r}+r\dfrac{d\theta}{dt}\hat{\theta}=v_r\hat{r}+v_\theta\hat{\theta}$；径向 $v_r=\dfrac{dr}{dt}$，横向 $v_\theta=r\dfrac{d\theta}{dt}$。<!-- src: PH-C01#p16 -->

### 加速度

- 平均加速度 $\langle\vec{a}\rangle=\dfrac{\Delta\vec{v}}{\Delta t}$；瞬时加速度 $\vec{a}=\lim_{\Delta t\to0}\dfrac{\Delta\vec{v}}{\Delta t}=\dfrac{\mathrm{d}\vec{v}}{\mathrm{d}t}$。<!-- src: PH-C01#p17 -->
- 直角坐标：$\vec{a}=a_x\vec{i}+a_y\vec{j}+a_z\vec{k}=\dfrac{\mathrm{d}^2\vec{r}}{\mathrm{d}t^2}$，$a_x=\dfrac{\mathrm{d}v_x}{\mathrm{d}t}=\dfrac{\mathrm{d}^2x}{\mathrm{d}t^2}$ 等。<!-- src: PH-C01#p18 -->
- 切向与法向分解：$\vec{a}=\vec{a}_{\parallel}+\vec{a}_{\perp}$，$\vec{a}_{\parallel}$ 沿切向、$\vec{a}_{\perp}$ 沿法向。术语：切向 tangential、法向 normal、自然坐标系 intrinsic coordinate system。<!-- src: PH-C01#p22 -->

#### 例题：跳水入水深度（$a=v\,dv/dx$ 分离变量）

- 取水面为原点、竖直向下为 $x$ 正向；入水速度 $v_0=\sqrt{2gh}$，减为 10% 即 $v_t=v_0/10$。<!-- src: PH-C01#p21ex -->
- 由 $a=\dfrac{dv}{dt}=-kv^2$，作链式代换 $\dfrac{dv}{dt}=v\dfrac{dv}{dx}$，得 $\dfrac{dv}{v}=-k\,dx$；定积分得 $x=\dfrac{1}{k}\ln 10=5.76\ \text{m}$。<!-- src: PH-C01#p21ex -->

## §1.2 圆周运动和一般曲线运动

### 圆周运动

- 匀速圆周运动（$v=\text{const.}$）：$a=\dfrac{v^2}{r}$，$\vec{a}=\dfrac{v^2}{r}\hat{e}_n$（沿法向指向圆心）。<!-- src: PH-C01#p23 -->
- 变速圆周运动：$\vec{a}=\vec{a}_n+\vec{a}_t$，法向 $\vec{a}_n=\dfrac{v^2}{r}\hat{e}_n$，切向 $\vec{a}_t=\dfrac{\mathrm{d}v}{\mathrm{d}t}\hat{e}_t$。<!-- src: PH-C01#p25 -->
- 大小 $a=\sqrt{a_n^2+a_t^2}=\sqrt{\left(\dfrac{v^2}{r}\right)^2+\left(\dfrac{\mathrm{d}v}{\mathrm{d}t}\right)^2}$；方向 $\tan\theta=\dfrac{a_n}{a_t}$（$\theta$ 为 $\vec{a}$ 与切向夹角）。<!-- src: PH-C01#p25 -->

### 曲线运动与自然坐标系

- 曲率 $K=\lim_{\Delta s\to0}\dfrac{\Delta\theta}{\Delta s}=\dfrac{\mathrm{d}\theta}{\mathrm{d}s}$；曲率半径 $\rho=\dfrac{1}{K}=\dfrac{\mathrm{d}s}{\mathrm{d}\theta}$。<!-- src: PH-C01#p26 -->
- 由圆周运动推广（$r\to\rho$）：$\vec{a}=\vec{a}_n+\vec{a}_t$，$\vec{a}_n=\dfrac{v^2}{\rho}\hat{e}_n$，$\vec{a}_t=\dfrac{\mathrm{d}v}{\mathrm{d}t}\hat{e}_t$，$a=\sqrt{a_n^2+a_t^2}$，$\tan\theta=\dfrac{a_n}{a_t}$。<!-- src: PH-C01#p27 -->
- 推导：$\vec{v}=v\hat{e}_t$，$\vec{a}=\dfrac{\mathrm{d}v}{\mathrm{d}t}\hat{e}_t+v\dfrac{\mathrm{d}\hat{e}_t}{\mathrm{d}t}$，其中 $\dfrac{\mathrm{d}\hat{e}_t}{\mathrm{d}t}=\dfrac{\mathrm{d}\theta}{\mathrm{d}t}\hat{e}_n=\dfrac{v}{\rho}\hat{e}_n$，$\dfrac{\mathrm{d}\theta}{\mathrm{d}t}=Kv=\dfrac{v}{\rho}$；得 $\vec{a}=\dfrac{\mathrm{d}v}{\mathrm{d}t}\hat{e}_t+\dfrac{v^2}{\rho}\hat{e}_n$。<!-- src: PH-C01#p28 -->

### 圆周运动的角量描述

- 选圆心为原点，用 $\theta(t)$ 代替 $\vec{r}(t)$（直线运动用 $x(t)$，圆周运动用 $\theta(t)$）。<!-- src: PH-C01#p29 -->
- $\Delta s=r|\Delta\theta|$，$v=r\omega$；角速率 $\omega=\left|\dfrac{\mathrm{d}\theta}{\mathrm{d}t}\right|$（单位 $\mathrm{rad\cdot s^{-1}}$）。<!-- src: PH-C01#p30 -->
- 角速度矢量 $\vec{\omega}$（右手螺旋法则）：$\vec{v}=\vec{\omega}\times\vec{r}$，$v=r\omega$；角加速度 $\alpha=\left|\dfrac{\mathrm{d}\omega}{\mathrm{d}t}\right|$（单位 $\mathrm{rad\cdot s^{-2}}$）。<!-- src: PH-C01#p31 -->
- 切向有向分量 $a_t=\dfrac{\mathrm{d}v}{\mathrm{d}t}=r\dfrac{\mathrm{d}\omega}{\mathrm{d}t}$，切向加速度大小为 $r\alpha$；法向 $a_n=\dfrac{v^2}{r}=r\omega^2$；$v=r\omega$。<!-- src: PH-C01#p31 + PH-C01#p32 -->

### 抛体运动（projectile motion）

- 前提：物体视为质点；$\vec{g}$ 恒定；忽略空气阻力；运动位于初速度与加速度确定的平面内。<!-- src: PH-C01#p33 -->
- 由 $\vec{a}=\vec{g}$ 积分：$\vec{v}=\vec{v}_0+\vec{g}t$，$\vec{r}=\vec{v}_0t+\dfrac{1}{2}\vec{g}t^2$。<!-- src: PH-C01#p35 + PH-C01#p36 -->
- 取 $y$ 轴向上、$\vec{g}=-g\vec{j}$、原点出发：$v_{0x}=v_0\cos\theta_0$，$v_{0y}=v_0\sin\theta_0$；$v_x=v_0\cos\theta_0$，$v_y=v_0\sin\theta_0-gt$。<!-- src: PH-C01#p37 + PH-C01#p38 -->
- 分量 $x=(v_0\cos\theta_0)t$，$y=(v_0\sin\theta_0)t-\dfrac{1}{2}gt^2$；轨道方程 $y=x\tan\theta_0-\dfrac{gx^2}{2v_0^2\cos^2\theta_0}$。<!-- src: PH-C01#p39 -->
- 同高落地（$y=0$）时，射程 $R=\dfrac{v_0^2}{g}\sin2\theta_0$，最大射程 $R_{\max}=\dfrac{v_0^2}{g}$。<!-- src: PH-C01#p40 -->
- 同高落地时，飞行时间 $T=\dfrac{2v_0}{g}\sin\theta_0$；最大高度 $h=\dfrac{v_0^2\sin^2\theta_0}{2g}$。<!-- src: PH-C01#p40 + PH-C01#p41 -->

## §1.3 伽利略变换

### 伽利略变换与绝对时空观

- 两参考系 S、S′ 相对匀速平动（$\vec{u}$ 沿 $x$）：$\vec{r}=\vec{r}^{\,\prime}+\vec{R}$，速度 $\vec{v}=\vec{v}^{\,\prime}+\vec{u}$，加速度 $\vec{a}=\vec{a}^{\,\prime}$，$t=t'$。<!-- src: PH-C01#p42 -->
- 坐标变换：$x=x'+ut$，$y=y'$，$z=z'$，$t=t'$；矢量形式 $\vec{r}=\vec{r}^{\,\prime}+\vec{u}t$。<!-- src: PH-C01#p43 -->
- 时间间隔绝对：由 $t=t'$ 得 $t_2-t_1=t_2'-t_1'$。<!-- src: PH-C01#p44 -->
- 空间间隔绝对：同时测两端（$t_1=t_2$）得 $x_2-x_1=x_2'-x_1'$，杆长是绝对的。<!-- src: PH-C01#p45 -->

### 例题：A 追 B 相对运动追及（$\vec{v}'=\vec{v}-\vec{u}$、径向投影）

- 设置：地面为 S 系，S′ 系固定在 B 上、以 B 为原点；初始 A 距 B 为 $r_0$，$\vec{v}\perp\vec{u}$，$v>u$，A 始终对准 B。<!-- src: PH-C01#p47ex + PH-C01#p47 -->
- 速度变换 $\vec{v}'=\vec{v}-\vec{u}$；A 在径向的速度分量 $-v+u\cos\theta$，径向方程 $(v-u\cos\theta)\,\mathrm{d}t=-\mathrm{d}r'$。<!-- src: PH-C01#p48 -->
- 积分得 $vt_0-u\int_0^{t_0}\cos\theta\,\mathrm{d}t=r_0$；又 A 沿 B 方向行驶距离等于 B 行驶距离 $\int_0^{t_0}v\cos\theta\,\mathrm{d}t=ut_0$，即 $\int_0^{t_0}\cos\theta\,\mathrm{d}t=\dfrac{ut_0}{v}$。<!-- src: PH-C01#p49 -->
- 代入得 $vt_0-\dfrac{u^2t_0}{v}=r_0$，故 $t_0=\dfrac{vr_0}{v^2-u^2}$（$v>u$），路程 $s=vt_0=\dfrac{v^2r_0}{v^2-u^2}$。<!-- src: PH-C01#p50 -->

## 易混点

- $|\Delta\vec{r}|$（位移大小）、$\Delta s$（路程）、$\Delta r$（位矢大小增量）三者区分：一般 $|\Delta\vec{r}|\neq\Delta s$，$\Delta r\neq|\Delta\vec{r}|$；极限下 $|\mathrm{d}\vec{r}|=\mathrm{d}s$ 但 $\mathrm{d}r\neq|\mathrm{d}\vec{r}|$。<!-- src: PH-C01#p08 -->
- 平面极坐标记号：p6 用 $(r,\varphi)$ 与 $\hat{\varphi}$，而速度推导（p15–16）用 $\theta$ 与 $\hat{\theta}$。<!-- src: PH-C01#p06 -->
- $\omega$、$\alpha$ 均按绝对值定义：$\omega=\left|\dfrac{\mathrm{d}\theta}{\mathrm{d}t}\right|$，$\alpha=\left|\dfrac{\mathrm{d}\omega}{\mathrm{d}t}\right|$。<!-- src: PH-C01#p30 + PH-C01#p31 -->
