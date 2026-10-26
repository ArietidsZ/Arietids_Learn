# 第1章 质点运动学

> Arietids Learn · 个人课程复习笔记
> 在线阅读：https://learn.arietids.net/courses/physics/chapter-01/

## §1.1 质点运动的描述

### 1. 质点和参考系

#### 理想模型与质点

- 实际物体具有大小、形状、内部结构，且各部分的运动状态并不一定相同。<!-- src: PH-C01#p02; type: direct -->
- 为了突出研究对象的主要性质，暂不考虑一些次要因素，经常引入一些理想化的模型来代替实际物体。<!-- src: PH-C01#p02; type: direct -->
- 质点（mass point，particle）：把实际物体看成是一个无大小和形状、无内部结构、仅占据空间位置、具有一定质量的点。<!-- src: PH-C01#p02; type: direct -->
- 质点是一种理想模型（物理模型）。<!-- src: PH-C01#p02; type: direct -->

#### 物体可看作质点的条件

- 条件：$r \gg l$。其中 $l$ 为物体的空间尺度（线度），$r$ 为物体到观察者的距离。<!-- src: PH-C01#p03; type: direct -->
- 平动：物体作平动时可看作质点。<!-- src: PH-C01#p03; type: one-step-inferred -->

#### 质点系与刚体

- 实际物体：质点 → 质点系 → 刚体 → ⋯。<!-- src: PH-C01#p04; type: direct -->
- 刚体是特殊的质点系。<!-- src: PH-C01#p04; type: direct -->
- 质点系所涉及的相互作用包括：质点系内部各质点之间的相互作用；质点系内部各质点与外界之间的相互作用。<!-- src: PH-C01#p04; type: direct -->

#### 参考系与坐标系

- 物体的运动或静止都是相对于某一个选定的参考物体而言的；研究物体运动时所选定的这个参考物体，称为参考系（reference frame）。<!-- src: PH-C01#p05; type: direct -->
- 描述运动需引入参考系（reference frame）与坐标系（coordinate system）。<!-- src: PH-C01#p05; type: compressed -->

#### 直角坐标系（Cartesian coordinate system）

- 直角坐标系：用坐标 $(x,y,z)$ 描述，又称正交坐标系。<!-- src: PH-C01#p05; type: direct -->
- 点 $P$ 在直角坐标系中记为 $P(x,y,z)$，单位矢量为 $\vec{i}$、$\vec{j}$、$\vec{k}$。<!-- src: PH-C01#p05g1; type: direct -->
- 设用 $\vec{F}$ 表示某一个物理量，则 $\vec{F}=F_x\vec{i}+F_y\vec{j}+F_z\vec{k}$。<!-- src: PH-C01#p05; type: direct -->

#### 球坐标系（spherical coordinate system）

- 球坐标系：用坐标 $(r,\theta,\varphi)$ 描述，点记为 $P(r,\theta,\varphi)$，单位矢量为 $\hat{r}$、$\hat{\theta}$、$\hat{\varphi}$。<!-- src: PH-C01#p06g1; type: direct -->
- 设用 $\vec{F}$ 表示某一个物理量，则 $\vec{F}=F_r\hat{r}+F_\theta\hat{\theta}+F_\varphi\hat{\varphi}$。<!-- src: PH-C01#p06; type: direct -->

#### 平面极坐标系（planar polar coordinate system）

- 平面极坐标系：用坐标 $(r,\varphi)$ 描述，$\varphi$ 自极轴量起，单位矢量为 $\hat{r}$、$\hat{\varphi}$。<!-- src: PH-C01#p06g1; type: direct -->
- 设用 $\vec{F}$ 表示某一个物理量，则 $\vec{F}=F_r\hat{r}+F_\varphi\hat{\varphi}$。<!-- src: PH-C01#p06; type: direct -->

### 2. 位置矢量和位移矢量（Position and Displacement）

#### 2.1 位置矢量（Position Vector，位矢）

- 位置矢量（Position Vector，位矢）：$\vec{r}=x\vec{i}+y\vec{j}+z\vec{k}$。<!-- src: PH-C01#p07; type: direct -->
- 运动方程：$\vec{r}=\vec{r}(t)$。<!-- src: PH-C01#p07; type: direct -->
- 位矢大小（magnitude）：$\left|\vec{r}\right|=\sqrt{x^{2}+y^{2}+z^{2}}$。<!-- src: PH-C01#p07; type: direct -->
- 位矢方向（direction）由方向余弦给出：$\cos\alpha=\dfrac{x}{\left|\vec{r}\right|}$，$\cos\beta=\dfrac{y}{\left|\vec{r}\right|}$，$\cos\gamma=\dfrac{z}{\left|\vec{r}\right|}$。<!-- src: PH-C01#p07; type: direct -->
- 图示：质点位于 $P(x,y,z)$，位矢 $\vec{r}$ 自原点 $O$ 指向 $P$，其在三坐标轴上的分量分别为 $x\vec{i}$、$y\vec{j}$、$z\vec{k}$；$\alpha$、$\beta$、$\gamma$ 分别为 $\vec{r}$ 与 $x$、$y$、$z$ 轴的夹角。<!-- src: PH-C01#p07g1; type: direct -->

#### 2.2 位移矢量（Displacement）、位矢增量与路程

- 位置变化（Position change）：$P\to Q$，时间间隔（time interval）为 $\Delta t$。<!-- src: PH-C01#p08; type: direct -->
- 位置矢量的增量：$\Delta\vec{r}=\vec{r}(t+\Delta t)-\vec{r}(t)$。<!-- src: PH-C01#p08; type: direct -->
- $\Delta\vec{r}$ 即位移（displacement，位移）。<!-- src: PH-C01#p08; type: direct -->
- $\Delta s$ 即路程（path，路程）。<!-- src: PH-C01#p08; type: direct -->
- $\left|\Delta\vec{r}\right|$ 表示位置矢量增量的大小、位移的大小。<!-- src: PH-C01#p08; type: direct -->
- 一般情形下：$\left|\Delta\vec{r}\right|\neq\Delta s$。<!-- src: PH-C01#p08; type: direct -->
- 取极限：$\displaystyle\lim_{\Delta t\to0}\left|\Delta\vec{r}\right|=\lim_{\Delta t\to0}\Delta s$；$\left|\mathrm{d}\vec{r}\right|=\mathrm{d}s$。<!-- src: PH-C01#p08; type: direct -->
- 位置矢量大小的增量：$\Delta r=\left|\vec{r}(t+\Delta t)\right|-\left|\vec{r}(t)\right|$。<!-- src: PH-C01#p08; type: direct -->
- 三个量必须区分：$\Delta r\neq\left|\Delta\vec{r}\right|$，$\mathrm{d}r\neq\left|\mathrm{d}\vec{r}\right|$。<!-- src: PH-C01#p08; type: direct -->

##### 2.2.1 过程的两种描述

| 类别 | 时间设定 |
|---|---|
| 有限过程 | $t\to t+\Delta t$，$\vec{r}(t)\to\vec{r}(t+\Delta t)$ |
| 充分小过程 | $\Delta t\to0$，$t\to t+\mathrm{d}t$，时间间隔为 $\mathrm{d}t$ |

<!-- src: PH-C01#p08; type: direct -->

- 图示：曲线上 $P$、$Q$ 两点，$\vec{r}(t)$、$\vec{r}(t+\Delta t)$ 分别自 $O$ 指向 $P$、$Q$；$P$ 到 $Q$ 的弦为位移 $\Delta\vec{r}$，沿曲线的弧长为路程 $\Delta s$。<!-- src: PH-C01#p08g1; type: direct -->

#### 2.3 位移与坐标原点选择无关

- 位移定义为末位矢减初位矢：$\Delta\vec{r}=\vec{r}_{Q}-\vec{r}_{P}$；在另一坐标系（原点 $O'$）中 $\Delta\vec{r}'=\vec{r}_{Q}'-\vec{r}_{P}'$。<!-- src: PH-C01#p09; type: direct -->
- 结论：$\Delta\vec{r}=\Delta\vec{r}'$，即位移与坐标原点的选择无关。<!-- src: PH-C01#p09; type: direct -->
- 图示：左图在坐标系 $O$ 中，$\vec{r}_{P}$、$\vec{r}_{Q}$ 指向 $P$、$Q$，位移 $\Delta\vec{r}$ 由 $P$ 指向 $Q$；右图同时画出两套坐标系 $O$ 与 $O'$（两原点由 $\vec{b}$ 相连），同一对 $P$、$Q$ 在两系中得到的 $\Delta\vec{r}$ 与 $\Delta\vec{r}'$ 相等。<!-- src: PH-C01#p09g1; type: direct -->

#### 2.4 把 A→B 分成 n 个小过程：三个求和

- 把质点由 $A\to B$ 的有限过程分成 $n$ 个小过程；记 $\vec{r}_{A}=\vec{r}_{0}$，$\vec{r}_{B}=\vec{r}_{n}$。<!-- src: PH-C01#p10; type: direct -->
- 过程的物理↔数学对照：有限过程、充分小过程对应物理；无限小过程对应数学。<!-- src: PH-C01#p10; type: direct -->
- 配图情形：直线运动、速度随时间变化（数轴上 $A$ 到 $B$）。<!-- src: PH-C01#p10; type: direct -->
- 图示：曲线上 $A\to B$ 依次分为小位移 $\Delta\vec{r}_{1}$、$\Delta\vec{r}_{2}$、$\Delta\vec{r}_{3}$、$\Delta\vec{r}_{4}$，各分点位矢为 $\vec{r}_{1}$、$\vec{r}_{2}$、$\vec{r}_{3}$，两端为 $\vec{r}_{A}$、$\vec{r}_{B}$。<!-- src: PH-C01#p10g1; type: direct -->
- 提出三个求和问题：$\left|\displaystyle\sum_{i=1}^{n}\Delta\vec{r}_{i}\right|=?$；$\displaystyle\sum_{i=1}^{n}\Delta\left|\vec{r}_{i}\right|=?$；$\displaystyle\sum_{i=1}^{n}\left|\Delta\vec{r}_{i}\right|=?$。<!-- src: PH-C01#p10; type: direct -->

#### 2.5 三个求和的结果

- 位移矢量和的大小：$\left|\displaystyle\sum_{i=1}^{n}\Delta\vec{r}_{i}\right|=\left|\vec{r}_{B}-\vec{r}_{A}\right|$。<!-- src: PH-C01#p11; type: direct -->
- 位矢大小增量之和：$\displaystyle\sum_{i=1}^{n}\Delta\left|\vec{r}_{i}\right|=\left|\vec{r}_{B}\right|-\left|\vec{r}_{A}\right|$。<!-- src: PH-C01#p11; type: direct -->
- 小位移大小之和（有限过程）：$\displaystyle\sum_{i=1}^{n}\left|\Delta\vec{r}_{i}\right|\approx S_{AB}$。<!-- src: PH-C01#p11; type: direct -->
- $n\to\infty$ 时（充分小过程，$\left|\mathrm{d}\vec{r}\right|=\mathrm{d}s$）：$\displaystyle\sum_{i=1}^{n}\left|\Delta\vec{r}_{i}\right|\to\int_{A}^{B}\left|\mathrm{d}\vec{r}\right|=\int_{A}^{B}\mathrm{d}s=S_{AB}$。<!-- src: PH-C01#p11; type: direct -->

### 3. 速度（Velocity）

#### 3.1 平均速度与平均速率（有限过程）

考察有限过程：质点由 A 到 B，对应时间间隔 $\Delta t$，即 $t \to t+\Delta t$，位矢 $\vec{r}(t) \to \vec{r}(t+\Delta t)$。<!-- src: PH-C01#p12; type: direct -->

位移：$\Delta \vec{r} = \vec{r}(t+\Delta t) - \vec{r}(t)$。<!-- src: PH-C01#p12; type: direct -->

- 平均速度（Average velocity）：$\langle \vec{v}\rangle = \dfrac{\Delta \vec{r}}{\Delta t}$，为矢量。<!-- src: PH-C01#p12; type: direct -->
- 平均速率（Average speed）：$\langle v\rangle = \dfrac{\Delta s}{\Delta t}$，其中 $\Delta s$ 为路程。<!-- src: PH-C01#p12; type: direct -->

图示：曲线轨道上 A、B 两点，$\vec{r}(t)$、$\vec{r}(t+\Delta t)$ 自原点 O 引出；$\Delta\vec{r}$ 为 A 指向 B 的弦（位移），$\Delta s$ 为 A 到 B 沿曲线的弧长（路程）。<!-- src: PH-C01#p12g1; type: direct -->

#### 3.2 瞬时速度与瞬时速率（$\Delta t \to 0$）

由 $\Delta \vec{r} = \vec{r}(t+\Delta t) - \vec{r}(t)$，令 $\Delta t \to 0$：图中割线 $AB$、$AB_1$、$AB_2$、$AB_3$ 的另一端点逐渐趋近 $A$，平均速度 $\langle\vec{v}\rangle = \dfrac{\Delta\vec{r}}{\Delta t}$ 的方向趋于该点切线方向，即瞬时速度 $\vec{v}$。<!-- src: PH-C01#p13g1; type: direct -->

- 瞬时速度（velocity，速度）：$\vec{v} = \lim\limits_{\Delta t \to 0} \dfrac{\Delta \vec{r}}{\Delta t} = \dfrac{d\vec{r}}{dt}$。<!-- src: PH-C01#p13; type: direct -->
- 瞬时速率（speed，速率）：$v = \lim\limits_{\Delta t \to 0} \dfrac{\Delta s}{\Delta t} = \dfrac{ds}{dt}$。<!-- src: PH-C01#p13; type: direct -->
- 由 $|d\vec{r}| = ds$，可得 $|\vec{v}| = v$，即瞬时速率等于瞬时速度的大小。<!-- src: PH-C01#p13; type: direct -->

#### 3.3 直角坐标系（Cartesian system）中的速度

位矢：$\vec{r} = x\vec{i} + y\vec{j} + z\vec{k}$。<!-- src: PH-C01#p14; type: direct -->

速度分量式：
$$
\vec{v}(t) = \frac{d\vec{r}}{dt} = \frac{dx}{dt}\vec{i} + \frac{dy}{dt}\vec{j} + \frac{dz}{dt}\vec{k} = v_x\vec{i} + v_y\vec{j} + v_z\vec{k}
$$

<!-- src: PH-C01#p14; type: direct -->

各分量：$v_x = \dfrac{dx}{dt}$，$v_y = \dfrac{dy}{dt}$，$v_z = \dfrac{dz}{dt}$。<!-- src: PH-C01#p14; type: direct -->

大小（magnitude）：
$$
v = \sqrt{v_x^2 + v_y^2 + v_z^2} = \sqrt{\left(\frac{dx}{dt}\right)^2 + \left(\frac{dy}{dt}\right)^2 + \left(\frac{dz}{dt}\right)^2}
$$

<!-- src: PH-C01#p14; type: direct -->

方向（direction，方向余弦）：$\cos\alpha = \dfrac{v_x}{|\vec{v}|}$，$\cos\beta = \dfrac{v_y}{|\vec{v}|}$，$\cos\gamma = \dfrac{v_z}{|\vec{v}|}$。<!-- src: PH-C01#p14; type: direct -->

### 4. 速度在平面极坐标系中的表达式

#### 单位矢量及其对时间的求导

平面极坐标系中，质点 P 的位置用极角 $\theta$ 与单位矢量 $\hat{r}$、$\hat{\theta}$ 描述；$\theta$ 为位矢 $\vec{r}$ 与极轴（$x$ 轴）的夹角，$\hat{r}$ 沿 $\vec{r}$ 方向，$\hat{\theta}$ 与 $\hat{r}$ 垂直。<!-- src: PH-C01#p15g1; type: direct -->

两个单位矢量用直角坐标基矢表示：

$$
\hat{r}=\cos\theta\,\vec{i}+\sin\theta\,\vec{j}
$$

$$
\hat{\theta}=-\sin\theta\,\vec{i}+\cos\theta\,\vec{j}
$$

<!-- src: PH-C01#p15; type: direct -->

$\hat{r}$ 对时间求导（链式法则 $\dfrac{d\hat{r}}{dt}=\dfrac{d\hat{r}}{d\theta}\dfrac{d\theta}{dt}$）：

$$
\frac{d\hat{r}}{dt}=\frac{d}{d\theta}(\cos\theta\,\vec{i}+\sin\theta\,\vec{j})\frac{d\theta}{dt}=(-\sin\theta\,\vec{i}+\cos\theta\,\vec{j})\frac{d\theta}{dt}=\frac{d\theta}{dt}\,\hat{\theta}
$$


即 $\dfrac{d\hat{r}}{dt}=\dfrac{d\theta}{dt}\,\hat{\theta}$。<!-- src: PH-C01#p15; type: direct -->

$\hat{\theta}$ 对时间求导（链式法则 $\dfrac{d\hat{\theta}}{dt}=\dfrac{d\hat{\theta}}{d\theta}\dfrac{d\theta}{dt}$）：

$$
\frac{d\hat{\theta}}{dt}=\frac{d}{d\theta}(-\sin\theta\,\vec{i}+\cos\theta\,\vec{j})\frac{d\theta}{dt}=(-\cos\theta\,\vec{i}-\sin\theta\,\vec{j})\frac{d\theta}{dt}=-\frac{d\theta}{dt}\,\hat{r}
$$


即 $\dfrac{d\hat{\theta}}{dt}=-\dfrac{d\theta}{dt}\,\hat{r}$。<!-- src: PH-C01#p15; type: direct -->

#### 速度的径向分量与横向分量

位矢写成 $\vec{r}=r\,\hat{r}$。<!-- src: PH-C01#p16; type: direct -->

速度为位矢对时间的导数，对 $r\hat{r}$ 用乘积法则并代入 $\dfrac{d\hat{r}}{dt}=\dfrac{d\theta}{dt}\hat{\theta}$：

$$
\vec{v}=\frac{d\vec{r}}{dt}=\frac{d}{dt}(r\hat{r})=\frac{dr}{dt}\hat{r}+r\frac{d\hat{r}}{dt}=\frac{dr}{dt}\hat{r}+r\frac{d\theta}{dt}\hat{\theta}
$$

<!-- src: PH-C01#p16; type: direct -->

最终结果：

$$
\vec{v}=\frac{dr}{dt}\hat{r}+r\frac{d\theta}{dt}\hat{\theta}=v_r\hat{r}+v_\theta\hat{\theta}
$$

<!-- src: PH-C01#p16; type: direct -->

| 分量 | 表达式 | 名称 |
| --- | --- | --- |
| 径向分量 $v_r$ | $v_r=\dfrac{dr}{dt}$ | 沿 $\hat{r}$ 方向 |
| 横向分量 $v_\theta$ | $v_\theta=r\dfrac{d\theta}{dt}$ | 沿 $\hat{\theta}$ 方向 |

<!-- src: PH-C01#p16; type: direct -->

### 5. 加速度（Acceleration）

#### 5.1 平均加速度与瞬时加速度

- 有限过程：时间从 $t \to t+\Delta t$（time interval $\Delta t$），速度从 $\vec{v}(t)\to\vec{v}(t+\Delta t)$；对应质点由 A → B。<!-- src: PH-C01#p17; type: direct -->
- 速度增量：$\Delta\vec{v}=\vec{v}(t+\Delta t)-\vec{v}(t)$。<!-- src: PH-C01#p17; type: direct -->
- 平均加速度（Average acceleration）：$\langle\vec{a}\rangle=\dfrac{\Delta\vec{v}}{\Delta t}$。<!-- src: PH-C01#p17; type: direct -->
- 取极限 $\Delta t\to 0$（$t\to t+\mathrm{d}t$，time interval $\mathrm{d}t$），得瞬时加速度（Acceleration 加速度）：$\vec{a}=\lim\limits_{\Delta t\to 0}\dfrac{\Delta\vec{v}}{\Delta t}=\dfrac{\mathrm{d}\vec{v}}{\mathrm{d}t}$。<!-- src: PH-C01#p17; type: direct -->
- 图示：沿曲线 A、B 两点的速度矢量 $\vec{v}(t)$、$\vec{v}(t+\Delta t)$ 首尾平移相减得 $\Delta\vec{v}$（矢量三角形）。<!-- src: PH-C01#p17g1; type: direct -->

#### 5.2 直角坐标系中的加速度

- 速度与位矢分量式：$\vec{v}=v_x\vec{i}+v_y\vec{j}+v_z\vec{k}$，$\vec{r}=x\vec{i}+y\vec{j}+z\vec{k}$。<!-- src: PH-C01#p18; type: direct -->
- 加速度分量展开：$\vec{a}=\dfrac{\mathrm{d}\vec{v}}{\mathrm{d}t}=\dfrac{\mathrm{d}v_x}{\mathrm{d}t}\vec{i}+\dfrac{\mathrm{d}v_y}{\mathrm{d}t}\vec{j}+\dfrac{\mathrm{d}v_z}{\mathrm{d}t}\vec{k}=a_x\vec{i}+a_y\vec{j}+a_z\vec{k}$。<!-- src: PH-C01#p18; type: direct -->
- 二阶导数形式：$\vec{a}=\dfrac{\mathrm{d}^2x}{\mathrm{d}t^2}\vec{i}+\dfrac{\mathrm{d}^2y}{\mathrm{d}t^2}\vec{j}+\dfrac{\mathrm{d}^2z}{\mathrm{d}t^2}\vec{k}$。<!-- src: PH-C01#p18; type: direct -->
- 矢量紧凑式：$\vec{a}=\dfrac{\mathrm{d}\vec{v}}{\mathrm{d}t}=\dfrac{\mathrm{d}^2\vec{r}}{\mathrm{d}t^2}$，其中 $\vec{v}=\dfrac{\mathrm{d}\vec{r}}{\mathrm{d}t}$。<!-- src: PH-C01#p18; type: direct -->
- 各分量加速度：$a_x=\dfrac{\mathrm{d}v_x}{\mathrm{d}t}=\dfrac{\mathrm{d}^2x}{\mathrm{d}t^2}$，$a_y=\dfrac{\mathrm{d}v_y}{\mathrm{d}t}=\dfrac{\mathrm{d}^2y}{\mathrm{d}t^2}$，$a_z=\dfrac{\mathrm{d}v_z}{\mathrm{d}t}=\dfrac{\mathrm{d}^2z}{\mathrm{d}t^2}$。<!-- src: PH-C01#p18; type: direct -->
- 图示：直角坐标系中点 $P(x,y,z)$ 沿空间曲线，位矢分量为 $x\vec{i}$、$y\vec{j}$、$z\vec{k}$。<!-- src: PH-C01#p18g1; type: direct -->

#### 例题：跳水运动员入水深度

跳水运动员自 10 m 跳台自由下落，入水后因受水的阻碍而减速。已知加速度 $a=-kv^2$，其中 $k=0.4\ \text{m}^{-1}$，求运动员速度减为入水速度的 10% 时的入水深度。<!-- src: PH-C01#p21ex; type: direct -->

取水面为坐标原点、竖直向下为 $x$ 轴正方向，建立坐标系。<!-- src: PH-C01#p21ex; type: direct -->

跳水运动员入水时的速度 $v_0=\sqrt{2gh}$。<!-- src: PH-C01#p21ex; type: direct -->

入水后速度减为入水速度的 10% 时 $v_t=\dfrac{v_0}{10}$。<!-- src: PH-C01#p21ex; type: direct -->

由加速度的定义，得 $a=\dfrac{dv}{dt}=-kv^2$。<!-- src: PH-C01#p21ex; type: direct -->

变量代换（链式法则）：$\dfrac{dv}{dt}=\dfrac{dv}{dx}\dfrac{dx}{dt}=\dfrac{dv}{dx}\,v$，故 $v\dfrac{dv}{dx}=-kv^2$，分离变量得 $\dfrac{dv}{v}=-k\,dx$。<!-- src: PH-C01#p21ex; type: direct -->

两边定积分（上限 $v_0/10$、下限 $v_0$）：$\displaystyle\int_{v_0}^{\frac{v_0}{10}}\frac{dv}{v}=\int_{0}^{x}(-k)\,dx$，得 $x=\dfrac{1}{k}\ln 10=5.76\ \text{m}$。<!-- src: PH-C01#p21ex; type: direct -->

#### 加速度的切向与法向分量（自然坐标系引入）

质点在 $xy$ 平面内运动，加速度可按直角坐标分解为 $\vec{a}=a_x\vec{i}+a_y\vec{j}$。<!-- src: PH-C01#p22; type: direct -->

左图（直角坐标分解）：$\vec{a}$ 为 $\vec{a}_x$（沿 $x$ 方向）与 $\vec{a}_y$（沿 $y$ 方向）的合矢量，速度 $\vec{v}$ 沿轨道切向。<!-- src: PH-C01#p22g1; type: direct -->

右图（切向与法向分解）：同一加速度 $\vec{a}$ 沿轨道切向与法向分解，$\vec{a}_{\parallel}$ 沿速度 $\vec{v}$ 方向（切向），$\vec{a}_{\perp}$ 垂直于切向（法向）。<!-- src: PH-C01#p22g1; type: direct -->

由右图所示的平行四边形分解可得 $\vec{a}=\vec{a}_{\parallel}+\vec{a}_{\perp}$。<!-- src: PH-C01#p22g1; type: one-step-inferred -->

相关术语（中英对照）：切向 tangential direction；法向 normal direction；切向加速度 tangential acceleration；法向加速度 normal acceleration；自然坐标系 intrinsic coordinate system。<!-- src: PH-C01#p22; type: direct -->

## §1.2 圆周运动和一般曲线运动

### 1. 匀速圆周运动（Uniform Circular Motion）

- 匀速圆周运动条件：速率恒定，$v=\text{const.}$（速度方向仍在变）。<!-- src: PH-C01#p23; type: direct -->
- 位矢大小：$|\vec{r}|=r$（A→B，质点沿圆周运动，圆半径为 $r$）。<!-- src: PH-C01#p23g1; type: direct -->
- 速度增量：$\Delta\vec{v}=\vec{v}(t+\Delta t)-\vec{v}(t)$。<!-- src: PH-C01#p23; type: direct -->
- 加速度定义：$\vec{a}=\lim\limits_{\Delta t\to 0}\dfrac{\Delta\vec{v}}{\Delta t}=\dfrac{\mathrm{d}\vec{v}}{\mathrm{d}t}$。<!-- src: PH-C01#p23; type: direct -->
- 速率：$v=\lim\limits_{\Delta t\to 0}\dfrac{\Delta s}{\Delta t}$。<!-- src: PH-C01#p23; type: direct -->
- 由几何相似（$\Delta t\to 0$）得 $\dfrac{|\Delta\vec{v}|}{v}=\dfrac{\Delta s}{r}$，故 $\dfrac{|\Delta\vec{v}|}{\Delta t}=\dfrac{v}{r}\dfrac{\Delta s}{\Delta t}$。<!-- src: PH-C01#p23; type: direct -->
- 加速度大小：$a=\dfrac{v^{2}}{r}$；矢量式 $\vec{a}=\dfrac{v^{2}}{r}\hat{e}_{n}$（方向沿法向 $\hat{e}_{n}$，指向圆心）。<!-- src: PH-C01#p23g1; type: direct -->

### 2. 变速圆周运动

- 变速圆周运动条件：速率随时间变化，$v$ changes with time。<!-- src: PH-C01#p24; type: direct -->
- 位矢大小：$|\vec{r}|=r$（A→B）。<!-- src: PH-C01#p24g1; type: direct -->
- 速度增量：$\Delta\vec{v}=\vec{v}(t+\Delta t)-\vec{v}(t)$。<!-- src: PH-C01#p24; type: direct -->
- 将 $\Delta\vec{v}$ 分解为法向与切向两部分：$\Delta\vec{v}=\Delta\vec{v}_{n}+\Delta\vec{v}_{t}$。<!-- src: PH-C01#p24; type: direct -->
- 切向分量大小：$|\Delta\vec{v}_{t}|=\big|\vec{v}(t+\Delta t)\big|-\big|\vec{v}(t)\big|=\Delta v$。<!-- src: PH-C01#p24; type: direct -->
- 切向加速度大小的极限：$\lim\limits_{\Delta t\to 0}\left|\dfrac{\Delta\vec{v}_{t}}{\Delta t}\right|=\lim\limits_{\Delta t\to 0}\dfrac{\Delta v}{\Delta t}=\dfrac{\mathrm{d}v}{\mathrm{d}t}$。<!-- src: PH-C01#p24; type: direct -->
- 总加速度按法向、切向分解：$\vec{a}=\lim\limits_{\Delta t\to 0}\dfrac{\Delta\vec{v}}{\Delta t}=\lim\limits_{\Delta t\to 0}\dfrac{\Delta\vec{v}_{n}}{\Delta t}+\lim\limits_{\Delta t\to 0}\dfrac{\Delta\vec{v}_{t}}{\Delta t}=\dfrac{v^{2}}{r}\hat{e}_{n}+\dfrac{\mathrm{d}v}{\mathrm{d}t}\hat{e}_{t}=\vec{a}_{n}+\vec{a}_{t}$。<!-- src: PH-C01#p24; type: direct -->
- 加速度合成：$\vec{a}=\vec{a}_{n}+\vec{a}_{t}$。<!-- src: PH-C01#p25; type: direct -->
- 法向加速度（normal acceleration）：$\vec{a}_{n}=\dfrac{v^{2}}{r}\hat{e}_{n}$。<!-- src: PH-C01#p25; type: direct -->
- 切向加速度（tangential acceleration）：$\vec{a}_{t}=\dfrac{\mathrm{d}v}{\mathrm{d}t}\hat{e}_{t}$。<!-- src: PH-C01#p25; type: direct -->
- 加速度大小：$a=\sqrt{a_{n}^{2}+a_{t}^{2}}=\sqrt{\left(\dfrac{v^{2}}{r}\right)^{2}+\left(\dfrac{\mathrm{d}v}{\mathrm{d}t}\right)^{2}}$。<!-- src: PH-C01#p25; type: direct -->
- 加速度方向：$\tan\theta=\dfrac{a_{n}}{a_{t}}$（$\theta$ 为 $\vec{a}$ 与切向 $\vec{a}_{t}$ 的夹角）。<!-- src: PH-C01#p25g1; type: direct -->

### 曲线运动与自然坐标系（Curvilinear motion / intrinsic coordinate system）

#### 曲率圆与曲率（Curvilinear motion）

- 曲率圆：轨道曲线上 P 点的曲率圆，定义为包括 P 点在内的与轨道曲线依次相交 3 点的圆，当另外两点趋于 P 点时圆之极限。<!-- src: PH-C01#p26; type: direct -->
- $\rho$：曲率半径（radius of curvature），即 P 点处曲率圆的半径（图中曲率圆圆心为 O，P 点速度沿切向 $\vec{v}$）。<!-- src: PH-C01#p26g1; type: direct -->
- 曲率：$K=\lim\limits_{\Delta s\to 0}\dfrac{\Delta\theta}{\Delta s}=\dfrac{\mathrm{d}\theta}{\mathrm{d}s}$。<!-- src: PH-C01#p26; type: direct -->
- 曲率半径：$\rho=\dfrac{1}{K}=\dfrac{\mathrm{d}s}{\mathrm{d}\theta}$。<!-- src: PH-C01#p26; type: direct -->
- 几何图示（A→B）：A、B 为曲线上邻近两点，A、B 处切向单位矢量分别为 $\hat{e}_t(t)$、$\hat{e}_t(t+\Delta t)$，弧 AB 的弧长为 $\Delta s$，半径 OA 与 OB 的夹角为 $\Delta\theta$。<!-- src: PH-C01#p26g1; type: direct -->

#### 自然坐标系（intrinsic coordinate system）

- 自然坐标系单位矢量：切向 $\hat{e}_t$、法向 $\hat{e}_n$（图中 P 点处 $\hat{e}_t$ 沿轨道切向、$\hat{e}_n$ 指向凹侧）。<!-- src: PH-C01#p27g1; type: direct -->
- $\rho$ 曲率半径（radius of curvature）。<!-- src: PH-C01#p27; type: direct -->
- 一般曲线运动由圆周运动推广：把圆周半径 $r$ 换成曲率半径 $\rho$（$r\longrightarrow\rho$）。<!-- src: PH-C01#p27; type: direct -->
- 加速度分解：$\vec{a}=\vec{a}_n+\vec{a}_t$。<!-- src: PH-C01#p27; type: direct -->
- 法向加速度：$\vec{a}_n=\dfrac{v^{2}}{\rho}\hat{e}_n$。<!-- src: PH-C01#p27; type: direct -->
- 切向加速度：$\vec{a}_t=\dfrac{\mathrm{d}v}{\mathrm{d}t}\hat{e}_t$。<!-- src: PH-C01#p27; type: direct -->
- 加速度大小：$a=\sqrt{a_n^{2}+a_t^{2}}=\sqrt{\left(\dfrac{v^{2}}{\rho}\right)^{2}+\left(\dfrac{\mathrm{d}v}{\mathrm{d}t}\right)^{2}}$。<!-- src: PH-C01#p27; type: direct -->
- 方向：$\tan\theta=\dfrac{a_n}{a_t}$。<!-- src: PH-C01#p27; type: direct -->

#### 自然坐标系下加速度的推导

- 速度：$\vec{v}=v\,\hat{e}_t$。<!-- src: PH-C01#p28; type: direct -->
- 加速度：$\vec{a}=\dfrac{\mathrm{d}\vec{v}}{\mathrm{d}t}=\dfrac{\mathrm{d}(v\hat{e}_t)}{\mathrm{d}t}=\dfrac{\mathrm{d}v}{\mathrm{d}t}\hat{e}_t+v\dfrac{\mathrm{d}\hat{e}_t}{\mathrm{d}t}$。<!-- src: PH-C01#p28; type: direct -->
- 切向单位矢量变化率：$\dfrac{\mathrm{d}\hat{e}_t}{\mathrm{d}t}=\lim\limits_{\Delta t\to 0}\dfrac{\Delta\hat{e}_t}{\Delta t}=\lim\limits_{\Delta t\to 0}\dfrac{\Delta\theta}{\Delta t}\hat{e}_n=\dfrac{\mathrm{d}\theta}{\mathrm{d}t}\hat{e}_n=\dfrac{v}{\rho}\hat{e}_n$。<!-- src: PH-C01#p28; type: direct -->
- $\Delta\hat{e}_t=\hat{e}_t(t+\Delta t)-\hat{e}_t(t)$；当 $\Delta t\to 0$，$|\Delta\hat{e}_t|\to\Delta\theta\,|\hat{e}_t(t)|=\Delta\theta$。<!-- src: PH-C01#p28g1; type: direct -->
- 角量与曲率：$\dfrac{\mathrm{d}\theta}{\mathrm{d}t}=\dfrac{\mathrm{d}\theta}{\mathrm{d}s}\dfrac{\mathrm{d}s}{\mathrm{d}t}=Kv=\dfrac{1}{\rho}v$。<!-- src: PH-C01#p28; type: direct -->
- 结论：$\vec{a}=\dfrac{\mathrm{d}v}{\mathrm{d}t}\hat{e}_t+\dfrac{v^{2}}{\rho}\hat{e}_n$，其中 $\vec{a}_t=\dfrac{\mathrm{d}v}{\mathrm{d}t}\hat{e}_t$，$\vec{a}_n=\dfrac{v^{2}}{\rho}\hat{e}_n$。<!-- src: PH-C01#p28; type: direct -->
- 本页同时给出曲率与曲率半径定义：$K=\lim\limits_{\Delta s\to 0}\dfrac{\Delta\theta}{\Delta s}=\dfrac{\mathrm{d}\theta}{\mathrm{d}s}$，$\rho=\dfrac{1}{K}=\dfrac{\mathrm{d}s}{\mathrm{d}\theta}$。<!-- src: PH-C01#p28; type: direct -->

### 3. 圆周运动的角量描述

#### 3.1 用角坐标 θ(t) 描述圆周运动

- 如果选择圆心作为坐标原点，质点的位置就可用位置矢量 $\vec{r}$ 与某一选定方向之间的夹角 $\theta$ 来描述。<!-- src: PH-C01#p29; type: direct -->
- $\theta$ 确定之后 $\Rightarrow$ 质点的位置就完全确定了。<!-- src: PH-C01#p29; type: direct -->
- 可用 $\theta(t)$ 代替 $\vec{r}(t)$。<!-- src: PH-C01#p29; type: direct -->
- 一维运动 Motion in One Dimensions：直线运动用 $x(t)$ 描述，圆周运动用 $\theta(t)$ 描述。<!-- src: PH-C01#p29; type: direct -->

#### 3.2 角速率 ω（Angular speed）

- 设 $t$ 时刻质点在 A，角坐标为 $\theta(t)$；$t+\Delta t$ 时刻质点在 B，角坐标为 $\theta(t+\Delta t)$（A→B）。<!-- src: PH-C01#p30; type: direct -->
- 在 $\Delta t$ 时间内质点运动的路程为 $\Delta s = r\,\lvert \theta(t+\Delta t)-\theta(t)\rvert = r\,\lvert\Delta\theta\rvert$。<!-- src: PH-C01#p30; type: direct -->
- 速率：$v=\lim\limits_{\Delta t\to 0}\dfrac{\Delta s}{\Delta t}=\lim\limits_{\Delta t\to 0}\dfrac{r\,\lvert\Delta\theta\rvert}{\Delta t}=r\lim\limits_{\Delta t\to 0}\dfrac{\lvert\Delta\theta\rvert}{\Delta t}$，得 $v=r\omega$。<!-- src: PH-C01#p30; type: direct -->
- 定义新物理量角速率（Angular speed）：$\omega=\lim\limits_{\Delta t\to 0}\dfrac{\lvert\Delta\theta\rvert}{\Delta t}=\lim\limits_{\Delta t\to 0}\left\lvert\dfrac{\Delta\theta}{\Delta t}\right\rvert=\left\lvert\lim\limits_{\Delta t\to 0}\dfrac{\Delta\theta}{\Delta t}\right\rvert=\left\lvert\dfrac{\mathrm{d}\theta}{\mathrm{d}t}\right\rvert$。<!-- src: PH-C01#p30; type: direct -->
- $\omega$ 即角速度的大小；单位：弧度·秒⁻¹（$\mathrm{rad\cdot s^{-1}}$）。<!-- src: PH-C01#p30; type: direct -->

#### 3.3 角速度矢量 $\vec{\omega}$（angular velocity）

- 定义角速度 angular velocity $\vec{\omega}$：大小等于 $\omega$；方向按右手螺旋法则给定。<!-- src: PH-C01#p31; type: direct -->
- $\vec{v}=\vec{\omega}\times\vec{r}$，其大小 $v=r\omega$。<!-- src: PH-C01#p31; type: direct -->
- 在 $\Delta t$ 时间内 $\omega(t)\to\omega(t+\Delta t)$，$\Delta\omega=\omega(t+\Delta t)-\omega(t)$。<!-- src: PH-C01#p31; type: direct -->
- 定义角加速度的大小：$\alpha=\lim\limits_{\Delta t\to 0}\dfrac{\lvert\Delta\omega\rvert}{\Delta t}=\lim\limits_{\Delta t\to 0}\left\lvert\dfrac{\Delta\omega}{\Delta t}\right\rvert=\left\lvert\lim\limits_{\Delta t\to 0}\dfrac{\Delta\omega}{\Delta t}\right\rvert=\left\lvert\dfrac{\mathrm{d}\omega}{\mathrm{d}t}\right\rvert$；单位：弧度·秒⁻²（$\mathrm{rad\cdot s^{-2}}$）。<!-- src: PH-C01#p31; type: direct -->

#### 3.4 角加速度矢量 $\vec{\alpha}$（angular acceleration）与切向、法向加速度

- $\vec{\alpha}$ 的方向：若 $\omega$ 增加，$\vec{\alpha}$ 和 $\vec{\omega}$ 方向相同；若 $\omega$ 减少，$\vec{\alpha}$ 和 $\vec{\omega}$ 方向相反。<!-- src: PH-C01#p32; type: direct -->
- 切向加速度的有向分量：$a_t=\dfrac{\mathrm{d}v}{\mathrm{d}t}=r\dfrac{\mathrm{d}\omega}{\mathrm{d}t}$；若用角加速度大小 $\alpha=\left|\dfrac{\mathrm{d}\omega}{\mathrm{d}t}\right|$，则切向加速度大小为 $r\alpha$。<!-- src: PH-C01#p31 + PH-C01#p32; type: synthesized -->
- 法向加速度：$a_n=\dfrac{v^2}{r}=\dfrac{(r\omega)^2}{r}\Rightarrow a_n=r\omega^2$。<!-- src: PH-C01#p32; type: direct -->
- $v=r\omega$。<!-- src: PH-C01#p32; type: direct -->

### 4. 抛体运动的描述（Projectile motion）

#### 抛体运动的前提与基本设定

- 物体视为质点（物体 → 质点）。<!-- src: PH-C01#p33; type: direct -->
- 在地球表面附近不太大的范围内，重力加速度可视为恒定的矢量（既有 magnitude，又有 direction）。<!-- src: PH-C01#p33; type: direct -->
- 忽略空气阻力。<!-- src: PH-C01#p33; type: direct -->
- 抛体运动位于初始速度（initial velocity）与加速度（acceleration）所确定的平面内：Projectile motion lies in the plane formed by the initial velocity and acceleration。<!-- src: PH-C01#p33; type: direct -->
- 当物体以恒定加速度运动时，它可以在一个平面内运动（When an object moves with constant acceleration it can move in a plane）。<!-- src: PH-C01#p33; type: direct -->
- 图示：取坐标系 $O\text{-}xyz$，$y$ 轴竖直向上，初速度 $\vec{v}_0$ 自原点 $O$ 斜向上射出，重力加速度 $\vec{g}$ 竖直向下，轨迹为一条平面曲线。<!-- src: PH-C01#p33g1; type: direct -->

#### 高尔夫球例子（A golf ball example）

- 运动中的高尔夫球是抛体（projectile）的一个例子。<!-- src: PH-C01#p34; type: direct -->
- 它以初速度 $\vec{v}_0$、仰角（elevation angle）$\theta_0$ 离开球座（tee）抛出。<!-- src: PH-C01#p34; type: direct -->
- 所求问题：抛体的轨迹（trajectory）是什么？<!-- src: PH-C01#p34; type: direct -->
- 图示：$\vec{v}_0$ 与 $x$ 轴正方向之间的夹角即仰角 $\theta_0$，$\vec{g}$ 竖直向下。<!-- src: PH-C01#p34g1; type: direct -->

#### 由 $\vec{a}=\vec{g}$ 积分求 $\vec{v}$、$\vec{r}$

求速度 $\vec{v}$：

- $\vec{a}=\vec{g}$（constant vector，恒矢量）。<!-- src: PH-C01#p35; type: direct -->
- $\vec{a}=\dfrac{d\vec{v}}{dt}$，$\vec{g}=\dfrac{d\vec{v}}{dt}$。<!-- src: PH-C01#p35; type: direct -->
- $d\vec{v}=\vec{g}\,dt$。<!-- src: PH-C01#p35; type: direct -->
- 初始条件：$t=0\Rightarrow\vec{v}=\vec{v}_0$；$t=t\Rightarrow\vec{v}=\vec{v}$。<!-- src: PH-C01#p35; type: direct -->
- 积分：$\displaystyle\int_{\vec{v}_0}^{\vec{v}}d\vec{v}=\int_0^{t}\vec{g}\,dt$，即 $\vec{v}\big|_{\vec{v}_0}^{\vec{v}}=\vec{g}t\big|_0^{t}$，得 $\vec{v}-\vec{v}_0=\vec{g}t$。<!-- src: PH-C01#p35; type: direct -->
- 速度方程：$\vec{v}=\vec{v}_0+\vec{g}t$。<!-- src: PH-C01#p35; type: direct -->

求位矢 $\vec{r}$：

- $\vec{v}=\dfrac{d\vec{r}}{dt}$，故 $\dfrac{d\vec{r}}{dt}=\vec{v}_0+\vec{g}t$。<!-- src: PH-C01#p35; type: direct -->
- $d\vec{r}=(\vec{v}_0+\vec{g}t)\,dt$。<!-- src: PH-C01#p36; type: direct -->
- 初始条件：$t=0\Rightarrow\vec{r}=0$；$t=t\Rightarrow\vec{r}=\vec{r}$。<!-- src: PH-C01#p36; type: direct -->
- 积分：$\displaystyle\int_0^{\vec{r}}d\vec{r}=\int_0^{t}(\vec{v}_0+\vec{g}t)\,dt$，即 $\vec{r}\big|_0^{\vec{r}}=\left(\vec{v}_0t+\dfrac{1}{2}\vec{g}t^2\right)\Big|_{t=0}^{t=t}$，得 $\vec{r}-0=\left(\vec{v}_0t+\dfrac{1}{2}\vec{g}t^2\right)-0$。<!-- src: PH-C01#p36; type: direct -->
- 运动方程：$\vec{r}=\vec{v}_0t+\dfrac{1}{2}\vec{g}t^2$，即 $\vec{r}=\vec{r}(t)$，为质点的运动方程。<!-- src: PH-C01#p36; type: direct -->

#### 直角坐标分量

把抛体运动分解为水平与竖直分量来描述，并由三维（three dimensions）化简为二维（two dimensions），采用 Cartesian coordinate system。<!-- src: PH-C01#p37; type: direct -->

加速度恒为重力加速度，取 y 轴向上时 $\vec{g}=-g\,\vec{j}$。<!-- src: PH-C01#p37; type: direct -->

初位置取在原点：$x_0=0$，$y_0=0$。<!-- src: PH-C01#p37; type: direct -->

初速度分量（initial velocity）：$v_{0x}=v_0\cos\theta_0$，$v_{0y}=v_0\sin\theta_0$，其中 $\theta_0$ 为初速度与 x 轴的夹角。<!-- src: PH-C01#p37; type: direct -->

初速度矢量：$\vec{v}_0=v_{0x}\,\vec{i}+v_{0y}\,\vec{j}=v_0\cos\theta_0\,\vec{i}+v_0\sin\theta_0\,\vec{j}$。<!-- src: PH-C01#p38; type: direct -->

速度随时间变化：$\vec{v}=\vec{v}_0+\vec{g}t=v_0\cos\theta_0\,\vec{i}+v_0\sin\theta_0\,\vec{j}-gt\,\vec{j}=v_0\cos\theta_0\,\vec{i}+(v_0\sin\theta_0-gt)\,\vec{j}$。<!-- src: PH-C01#p38; type: direct -->

速度分量：$v_x=v_0\cos\theta_0$，$v_y=(v_0\sin\theta_0-gt)$。<!-- src: PH-C01#p38; type: direct -->

#### 轨道方程

位矢（The Trajectory）：$\vec{r}=\vec{v}_0 t+\dfrac{1}{2}\vec{g}t^2$。<!-- src: PH-C01#p39; type: direct -->

展开得 $\vec{r}=(v_0\cos\theta_0\,\vec{i}+v_0\sin\theta_0\,\vec{j})t-\dfrac{1}{2}gt^2\,\vec{j}=(v_0\cos\theta_0)t\,\vec{i}+\Big[(v_0\sin\theta_0)t-\dfrac{1}{2}gt^2\Big]\vec{j}$。<!-- src: PH-C01#p39; type: direct -->

由 $\vec{r}=x\,\vec{i}+y\,\vec{j}$ 得分量式：$x=(v_0\cos\theta_0)t$，$y=(v_0\sin\theta_0)t-\dfrac{1}{2}gt^2$。<!-- src: PH-C01#p39; type: direct -->

消去 $t$ 得轨道方程：$y=x\tan\theta_0-\dfrac{gx^2}{2v_0^2\cos^2\theta_0}$。<!-- src: PH-C01#p39; type: direct -->

#### 射程（Range）

求射程 $R$：在落地处令 $y=0$，代入轨道方程得 $R\tan\theta_0-\dfrac{gR^2}{2v_0^2\cos^2\theta_0}=0$。<!-- src: PH-C01#p40; type: direct -->

解得两根：$R=0$（出发点）与 $R=\dfrac{v_0^2}{g}\sin 2\theta_0$。<!-- src: PH-C01#p40; type: direct -->

最大射程：$R_{\max}=\dfrac{v_0^2}{g}$。<!-- src: PH-C01#p40; type: direct -->

图示同一 $v_0$、不同发射角 $15^\circ$、$45^\circ$、$75^\circ$ 的三条轨迹（Trajectory），$45^\circ$ 时射程最大。<!-- src: PH-C01#p40g1; type: direct -->

#### 飞行时间与最大高度（Flight Time / Maximum Height）

同高落地时的飞行时间（Flight Time）：由 $\vec{v}=v_0\cos\theta_0\,\vec{i}+(v_0\sin\theta_0-gt)\,\vec{j}$，到达最高点时 $v_y=0$，得 $v_0\sin\theta_0-g\Big(\dfrac{T}{2}\Big)=0$，全程飞行时间 $T=\dfrac{2v_0}{g}\sin\theta_0$。<!-- src: PH-C01#p40 + PH-C01#p41; type: synthesized -->

最大高度（Maximum Height）：把到达最高点时刻 $t=\dfrac{v_0}{g}\sin\theta_0$ 代入 $y=(v_0\sin\theta_0)t-\dfrac{1}{2}gt^2$，得 $h=(v_0\sin\theta_0)\dfrac{v_0}{g}\sin\theta_0-\dfrac{1}{2}g\Big(\dfrac{v_0}{g}\sin\theta_0\Big)^2=v_0^2\dfrac{\sin^2\theta_0}{2g}$。<!-- src: PH-C01#p41; type: direct -->

## §1.3 伽利略变换

### 1. 伽利略变换与绝对时空观

**两个相对平动的参考系 S、S′ 相互作匀速运动**（$\vec{u}$ 为 S′ 相对 S 的速度，沿 $x$ 方向；$\vec{R}$ 为由 O 指向 O′ 的位矢）：<!-- src: PH-C01#p42; type: direct -->

- 位矢关系：$\vec{r}=\vec{r}\,'+\vec{R}$。<!-- src: PH-C01#p42; type: direct -->
- 对时间求导：$\dfrac{\mathrm{d}\vec{r}}{\mathrm{d}t}=\dfrac{\mathrm{d}\vec{r}\,'}{\mathrm{d}t}+\dfrac{\mathrm{d}\vec{R}}{\mathrm{d}t}$，得速度关系 $\vec{v}=\vec{v}\,'+\vec{u}$。<!-- src: PH-C01#p42; type: direct -->
- 再对时间求导：$\dfrac{\mathrm{d}\vec{v}}{\mathrm{d}t}=\dfrac{\mathrm{d}\vec{v}\,'}{\mathrm{d}t}+\dfrac{\mathrm{d}\vec{u}}{\mathrm{d}t}$，因 $\dfrac{\mathrm{d}\vec{u}}{\mathrm{d}t}=0$，得加速度关系 $\vec{a}=\vec{a}\,'$。<!-- src: PH-C01#p42; type: direct -->
- 此情形下 $t=t'$。<!-- src: PH-C01#p42; type: direct -->

**伽利略坐标变换**（条件：S 系与 S′ 系的 x 轴和 x′ 轴方向相同且重合；$t=t'=0$ 时 O、O′ 重合）：<!-- src: PH-C01#p43; type: direct -->

$$
x=x'+ut,\quad y=y',\quad z=z',\quad t=t'
$$


<!-- src: PH-C01#p43; type: direct -->

- 矢量形式：由 $\vec{r}=\vec{r}\,'+\vec{R}$ 得 $\vec{r}=\vec{r}\,'+\vec{u}t$，且 $t=t'$。<!-- src: PH-C01#p43; type: direct -->

**事件（event）**：在某时刻、某地点发生的一个现象称为一个事件；一个事件用一组时空坐标来描述。<!-- src: PH-C01#p43; type: direct -->

- 事件 P 在 S 系中记为 $(x,y,z,t)$，在 S′ 系中记为 $(x',y',z',t')$。<!-- src: PH-C01#p43; type: direct -->

**时间间隔的绝对性**：考虑两个事件 $P_1$、$P_2$，在 S 系中为 $(x_1,y_1,z_1,t_1)$、$(x_2,y_2,z_2,t_2)$，在 S′ 系中为 $(x_1',y_1',z_1',t_1')$、$(x_2',y_2',z_2',t_2')$。<!-- src: PH-C01#p44; type: direct -->

- 由 $t=t'$ 得 $t_2-t_1=t_2'-t_1'$，即在伽利略变换下，时间间隔是绝对的。<!-- src: PH-C01#p44; type: direct -->

**杆长（空间间隔）的绝对性**：一根沿 x 轴放置的杆，两端点为事件 $P_1(x_1,0,0,t_1)$、$P_2(x_2,0,0,t_2)$，在两系中同时测量两端（$t_1=t_2$）：<!-- src: PH-C01#p45; type: direct -->

- $x_1=x_1'+ut_1$，$x_2=x_2'+ut_2$。<!-- src: PH-C01#p45; type: direct -->
- 相减：$x_2-x_1=(x_2'-x_1')+u(t_2-t_1)$；因 $t_1=t_2$，故 $x_2-x_1=x_2'-x_1'$，即在伽利略变换下，杆的长度是绝对的。<!-- src: PH-C01#p45; type: direct -->
- 等价地写为 $x_2'-x_1'=x_2-x_1$（in S′ 与 in S 测得相同）。<!-- src: PH-C01#p46; type: direct -->
- 杆长是空间间隔的量度，故在伽利略变换下，空间间隔是绝对的。<!-- src: PH-C01#p46; type: direct -->

### 2. 例题：相对运动追及问题

#### 题目

如图所示，有 A、B 两辆汽车，B 作匀速直线运动，速度为 $\vec{u}$，A 以恒定速率 $v$ 追赶 B。初始时刻，A 距离 B 为 $r_0$，A 的速度 $\vec{v}$ 与 B 的速度 $\vec{u}$ 相互垂直。以后 A 时刻调整行驶方向以保持对准 B 驶去。若 $v>u$，则在多少时间后 A 才能追上 B？追上 B 时，A 已走过的路程有多长？ <!-- src: PH-C01#p47ex; type: direct -->

已知条件：$\vec{u}=\text{const. vector}$（B 速度为恒矢量），$v=\text{const.}$（A 速率恒定）。 <!-- src: PH-C01#p47ex; type: direct -->

参考系设置：以地面为 S 系；S′ 系固定在汽车 B 上，汽车 B 为 S′ 系的坐标原点。 <!-- src: PH-C01#p47; type: direct -->

图示：B 沿水平方向以 $\vec{u}$ 匀速运动；初始时刻 A 在 B 正下方、相距 $r_0$，A 的速度 $\vec{v}$ 竖直向上、与 $\vec{u}$ 垂直；此后 A 始终对准 B，轨迹为一条向 B 弯曲的曲线，$\theta$ 为 A 速度 $\vec{v}$ 与 B 运动方向（水平）间的夹角。<!-- src: PH-C01#p47g1; type: direct -->

#### 在 S′ 系中

汽车 A 相对 B 的速度（速度变换）：$\vec{v}'=\vec{v}-\vec{u}$，其中 $\vec{v}'=\dfrac{\mathrm{d}\vec{r}'}{\mathrm{d}t'}$，$\vec{v}=\dfrac{\mathrm{d}\vec{r}}{\mathrm{d}t}$。 <!-- src: PH-C01#p47 + PH-C01#p48; type: synthesized -->

汽车 A 在径向上的速度分量：$-v-(-u\cos\theta)=-v+u\cos\theta$（$\theta$ 为 A 速度方向与 B 速度方向间的夹角）。 <!-- src: PH-C01#p48; type: direct -->

径向方程：$-v+u\cos\theta=\dfrac{\mathrm{d}r'}{\mathrm{d}t'}$，即 $(v-u\cos\theta)\,\mathrm{d}t=-\mathrm{d}r'$。 <!-- src: PH-C01#p48; type: direct -->

物理含义：初始时刻汽车 A 距坐标原点为 $r_0$，以后汽车 A 在径向上总是以速率 $|-v+u\cos\theta|$ 向坐标原点行驶。 <!-- src: PH-C01#p48; type: direct -->

设 A 追上 B 的时间为 $t_0$，对上式积分：

$$
\int_{0}^{t_0}(v-u\cos\theta)\,\mathrm{d}t=-\int_{r_0}^{0}\mathrm{d}r'
$$


<!-- src: PH-C01#p48; type: direct -->

展开右端积分得：$\displaystyle\int_{0}^{t_0}v\,\mathrm{d}t-\int_{0}^{t_0}u\cos\theta\,\mathrm{d}t=r_0$。 <!-- src: PH-C01#p49; type: direct -->

#### 在 S 系中

由上式得：$vt_0-u\displaystyle\int_{0}^{t_0}\cos\theta\,\mathrm{d}t=r_0$。 <!-- src: PH-C01#p49; type: direct -->

在 $t_0$ 时间内，B 行驶的距离为 $ut_0$。 <!-- src: PH-C01#p49; type: direct -->

在 $t\to t+\mathrm{d}t$ 内，A 在平行于 B 的运动方向上行驶的距离为 $v\cos\theta\,\mathrm{d}t$；在 $t_0$ 时间内 A 在该方向行驶的距离应等于 B 行驶的距离：

$$
\int_{0}^{t_0}v\cos\theta\,\mathrm{d}t=ut_0\quad\Longrightarrow\quad\int_{0}^{t_0}\cos\theta\,\mathrm{d}t=\frac{ut_0}{v}
$$


<!-- src: PH-C01#p49; type: direct -->

#### 求解结果

将 $\displaystyle\int_{0}^{t_0}\cos\theta\,\mathrm{d}t=\dfrac{ut_0}{v}$ 代入 $vt_0-u\displaystyle\int_{0}^{t_0}\cos\theta\,\mathrm{d}t=r_0$，得 $vt_0-u\cdot\dfrac{ut_0}{v}=r_0$。 <!-- src: PH-C01#p50; type: direct -->

追上 B 所需时间：

$$
t_0=\frac{vr_0}{v^2-u^2}\qquad(v>u)
$$


<!-- src: PH-C01#p50; type: direct -->

在 $t_0$ 时间内，A 行驶的路程：

$$
s=vt_0=\frac{v^2 r_0}{v^2-u^2}
$$


<!-- src: PH-C01#p50; type: direct -->
