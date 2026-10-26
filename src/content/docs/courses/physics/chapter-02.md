---
title: "第2章 质点动力学"
description: "大学物理课程笔记：第2章 质点动力学。"
---

<div class="note-meta"><a href="/courses/physics/">大学物理目录</a><a href="/courses/physics/chapter-02-quick/">阅读速览</a><a href="/downloads/physics/chapter-02.md" download>下载 Markdown</a></div>

本章目录（按讲义封面）：§2.1 牛顿运动定律；§2.2 万有引力和力学中常见的力；§2.3 SI 单位和量纲；§2.4 动力学问题的求解；§2.5 非惯性系和惯性力。<!-- src: C02_质点动力学#p001; type: direct -->

> 说明：以下按讲义正文幻灯片的实际编号与标题组织（正文中 §2.3 为「动力学问题的处理」、§2.4 为「SI 单位和量纲」，与封面目录的 §2.3/§2.4 次序相反）。<!-- src: C02_质点动力学#p001 + #p025 + #p034; type: synthesized -->

---

## §2.1 牛顿运动定律

牛顿三大运动定律出自《自然哲学的数学原理》（Philosophiæ Naturalis Principia Mathematica），1687 年。<!-- src: C02_质点动力学#p002; type: direct -->

### 一、牛顿第一定律（惯性定律）

- **Newton's first law（牛顿第一定律）= The law of inertia（惯性定律）**。<!-- src: C02_质点动力学#p002; type: direct -->
- **自由运动状态**：物体不受外力作用的运动状态称为「自由运动状态」。<!-- src: C02_质点动力学#p002; type: direct -->
- **自由质点（free particle）**：force-free（不受力）、Force is negligible（力可忽略）或 Forces are cancelled locally（力在局部相互抵消）的质点。<!-- src: C02_质点动力学#p003; type: direct -->
- 第一定律内容：处在自由运动状态的物体必定作「速度恒定」的运动——A free particle moves with constant velocity，即 $\vec{v}=\text{const. vector}$（including zero，包含静止），做匀速直线运动或静止。<!-- src: C02_质点动力学#p002 + #p003; type: compressed -->
- **力的定义**：力是迫使质点改变其恒定速度（constant velocity）的一种作用。<!-- src: C02_质点动力学#p003; type: direct -->
- **惯性（inertia）**：每个物体在不受外力作用时都有"保持其以恒定速度运动的状态"的属性，这就是惯性。<!-- src: C02_质点动力学#p003; type: direct -->
- 重要限制：「自由质点以恒定速度运动」并非对所有参考系都成立（Not true for some frames!），成立与否取决于参考系。<!-- src: C02_质点动力学#p003; type: direct -->
- **惯性参考系（惯性系，inertial system）**：一定存在这样的参考系，相对于它所有不受外力作用的物体都以恒定速度运动；这类特殊的参考系称为惯性参考系。<!-- src: C02_质点动力学#p003; type: direct -->

### 二、惯性系的等价性

- 设 S 与 S′ 均为惯性系，S′ 相对 S 以速度 $\vec{u}$ 沿 $x/x'$ 方向平动；对应坐标轴平行（$x\parallel x'$、$y\parallel y'$、$z\parallel z'$）。空间点 P 在 S 中位矢 $\vec{r}$、在 S′ 中位矢 $\vec{r}\,'$，两原点间位矢 $\vec{R}=\overrightarrow{OO'}$，几何上 $\vec{r}=\vec{R}+\vec{r}\,'$。<!-- src: C02_质点动力学#p004g1; type: one-step-inferred -->
- 速度变换：

  $$
  \frac{d\vec{r}\,'}{dt'}=\frac{d\vec{r}}{dt}-\vec{u}
  $$
  
  <!-- src: C02_质点动力学#p004; type: direct -->
- 等价性论证（双向）：若 $\dfrac{d\vec{r}}{dt}$ 与 $\vec{u}$ 均为常矢量，则 $\dfrac{d\vec{r}\,'}{dt'}$ 亦为常矢量（S′ 中自由质点也作匀速运动）；反之，若 $\dfrac{d\vec{r}}{dt}$ 与 $\dfrac{d\vec{r}\,'}{dt'}$ 均为常矢量，则两惯性系相对速度 $\vec{u}$ 必为常矢量。<!-- src: C02_质点动力学#p004; type: direct -->
- 结论：**All inertial systems are equivalent.**（所有惯性系彼此等价）<!-- src: C02_质点动力学#p004; type: direct -->

### 三、牛顿第二定律

- **文字表述**：运动的变化正比于外力，变化的方向沿外力作用的直线方向。<!-- src: C02_质点动力学#p005; type: direct -->
- **动量形式**：$\vec{F}\propto\dfrac{d(m\vec{v})}{dt}$，取等式 $\vec{F}=\dfrac{d(m\vec{v})}{dt}$；其中动量（momentum）$\vec{p}=m\vec{v}$。该方程形式由欧拉（L. Euler）给出。<!-- src: C02_质点动力学#p005; type: direct -->
- **常用形式**：$\vec{F}=m\vec{a}$，$m$ 为惯性质量（inertial mass）。<!-- src: C02_质点动力学#p005; type: direct -->
- **力的操作性定义 / 惯性质量的操作定义**：在相同的力 $\vec{F}$ 作用下两物体满足 $m_1a_1=m_2a_2$，故 $m_2=m_1\dfrac{a_1}{a_2}$。<!-- src: C02_质点动力学#p005; type: direct -->
- **质量的性质（牛顿力学）**：质量 $m$ 是绝对量，与时间选取、参考系选取、物体速度均无关。<!-- src: C02_质点动力学#p006; type: direct -->
- 实验事实与相对论修正：当 $v$ 接近真空光速 $c$ 时质量大大增加，$m=m(v)=\dfrac{m_0}{\sqrt{1-v^2/c^2}}$（$m_0$ 为静止质量）；$v=0$ 时 $m=m_0$，低速段近似不变，$v/c\to1$ 时 $m\to\infty$。<!-- src: C02_质点动力学#p006 + #p006g1; type: direct -->
- **适用范围**：牛顿第二定律只在惯性系（inertial frames）中成立，且对象为质点（mass point）。<!-- src: C02_质点动力学#p006; type: direct -->

#### 第二定律的分量形式

- 矢量方程：$\vec{F}=m\vec{a}\Rightarrow\displaystyle\sum_{i=1}^{n}\vec{F}_i=m\vec{a}$（合力等于各分力之和）。<!-- src: C02_质点动力学#p007; type: direct -->
- 直角坐标系：$F_x=ma_x$，$F_y=ma_y$，$F_z=ma_z$。<!-- src: C02_质点动力学#p007; type: direct -->
- 自然（内禀）坐标系：法向 $F_n=ma_n=m\dfrac{v^2}{\rho}$（$\rho$ 为曲率半径）；切向 $F_t=ma_t=m\dfrac{dv}{dt}$。<!-- src: C02_质点动力学#p007; type: direct -->

### 四、牛顿第三定律

- **内容**：$\vec{F}_{AB}=-\vec{F}_{BA}$，A 对 B 的作用力与 B 对 A 的作用力大小相等、方向相反。<!-- src: C02_质点动力学#p008; type: direct -->
- 成立性：对接触力（contact forces）总是成立；对非接触力不一定成立。<!-- src: C02_质点动力学#p008; type: direct -->
- 第三定律不涉及运动，因而不要求参考系一定是惯性系。<!-- src: C02_质点动力学#p008; type: direct -->
- 作用力与反作用力性质相同；分别作用在两个物体上，永远不会相互抵消。<!-- src: C02_质点动力学#p008; type: direct -->

### 五、伽利略变换与伽利略相对性原理

- **伽利略变换（Galilean transformation）**：

  $$
  x=x'+ut,\quad y=y',\quad z=z',\quad t=t'
  $$
  

  其中 $u$ 为 S′ 相对 S 的速率；同一事件 P 在 S 系记为 $(x,y,z,t)$、在 S′ 系记为 $(x',y',z',t')$。<!-- src: C02_质点动力学#p009; type: direct -->
- 第二定律在惯性系间形式不变：S 系中 $\vec{F}=m\vec{a}$，S′ 系中 $\vec{F}\,'=m'\vec{a}\,'$；由 $\vec{a}=\vec{a}\,'$、$m=m'$ 得 $\vec{F}\,'=\vec{F}$。<!-- src: C02_质点动力学#p009; type: direct -->
- 第三定律在惯性系间不变：S 系中 $\vec{F}_{AB}=-\vec{F}_{BA}$，S′ 系中 $\vec{F}\,'_{AB}=-\vec{F}\,'_{BA}$。<!-- src: C02_质点动力学#p009; type: direct -->
- **伽利略相对性原理（Galilean relativity principle）**：力学规律在一切惯性系中都可以表示为相同的形式。<!-- src: C02_质点动力学#p009; type: direct -->

---

## §2.2 万有引力和力学中常见的力

### 一、万有引力定律

- **万有引力（Gravitation）**：

  $$
  \vec{F}_{21}=-G\frac{m_1 m_2}{r_{12}^{2}}\hat{r}_{12}
  $$
  

  $\hat{r}_{12}$ 为由 $m_1$ 指向 $m_2$ 的单位矢量；负号表示引力为吸引力（方向沿 $-\hat{r}_{12}$，指向施力质点）。$m_1,m_2$ 为引力质量，$G$ 为引力常量（gravitational constant），$r_{12}$ 为两质点间距。<!-- src: C02_质点动力学#p010 + #p014; type: compressed -->
- 一般式：质量 $m$ 的质点受质量 $M$ 物体的引力 $\vec{F}=-G\dfrac{mM}{r^2}\hat{r}$。<!-- src: C02_质点动力学#p015; type: direct -->
- 历史脉络（背景）：第谷（Tycho Brahe）观测 → 开普勒（Kepler）行星运动定律 → 牛顿《自然哲学的数学原理》万有引力定律。<!-- src: C02_质点动力学#p010f; type: synthesized -->

### 二、由开普勒定律得平方反比律（行星轨道）

- 偏心率 $e$ 越大椭圆越扁，$e=0$ 为圆；由下表可见除水星（.206）、冥王星（.25）外，多数行星偏心率都很小、轨道接近圆形。<!-- src: C02_质点动力学#p011 + #p011g2; type: synthesized -->

| 行星 Planet | 偏心率 $e$ |
|---|---|
| Mercury 水星 | .206 |
| Venus 金星 | .0068 |
| Earth 地球 | .0167 |
| Mars 火星 | .0934 |
| Jupiter 木星 | .0485 |
| Saturn 土星 | .0556 |
| Uranus 天王星 | .0472 |
| Neptune 海王星 | .0086 |
| Pluto 冥王星 | .25 |
<!-- src: C02_质点动力学#p011t1; type: direct -->

- **平方反比推导（椭圆轨道⟶圆轨道近似，面积定律⟶匀速圆周）**：向心加速度 $a=\dfrac{v^2}{r}$，速率 $v=\dfrac{2\pi r}{T}$，由 $T\propto r^{3/2}$ 得 $v\propto r^{-1/2}$，故 $a\propto\dfrac{1}{r^2}$，行星受力 $F=ma\propto\dfrac{m}{r^2}$，引入比例系数 $\alpha$ 得 $F=m\dfrac{\alpha}{r^2}$。<!-- src: C02_质点动力学#p012; type: direct -->
- 结论：若太阳引力是行星运动的原因，则该力应与 $r$ 的平方成反比（$F\propto 1/r^2$）。<!-- src: C02_质点动力学#p012; type: direct -->

### 三、牛顿的月—地检验（可迁移方法）

- **方法**：利用同一引力比例常数 $\alpha'$ 同时支配地面重力与月球运动；对月球用匀速圆周模型，即可由地面量 $R,g$ 和月球周期 $T$ 反求月—地距离。<!-- src: C02_质点动力学#p013; type: compressed -->
- 月球：$F_{\text{月地}}=m_{\text{月}}\dfrac{\alpha'}{(r')^2}=m_{\text{月}} a_{\text{月}}\Rightarrow a_{\text{月}}=\dfrac{\alpha'}{(r')^2}$；地面物体：$F_{\text{物地}}=m_{\text{物}}\dfrac{\alpha'}{R^2}=m_{\text{物}} g\Rightarrow g=\dfrac{\alpha'}{R^2}$。<!-- src: C02_质点动力学#p013; type: direct -->
- 消去 $\alpha'$：$r'=R\sqrt{\dfrac{g}{a_{\text{月}}}}$；再用 $a_{\text{月}}=\dfrac{v^2}{r'}$、$v=\dfrac{2\pi r'}{T}$ 得

  $$
  (r')^{3}=\frac{R^2 g T^2}{4\pi^2}
  $$
  
  <!-- src: C02_质点动力学#p013; type: direct -->
- 代入 $R\approx6400\,\mathrm{km}$、$g=9.8\,\mathrm{m/s^2}$、$T=27.3215$ 天，得 $r'=3.84\times10^{5}\,\mathrm{km}$。<!-- src: C02_质点动力学#p013; type: direct -->
- **核心论点**：地面物体的运动规律与月亮运动规律本质相同（反对亚里士多德"天上、地面是本质不同的两类运动"）；抛体运动与地球卫星运动的差别只在于初始速度不同——初速由小到大依次为近圆轨道、椭圆轨道、不再返回的逃逸轨道。<!-- src: C02_质点动力学#p014 + #p014g1; type: synthesized -->

### 四、重力（gravity）

- 地表附近（$r-R\ll R$，离地高度远小于地球半径 $R$）用 $R$ 代替 $r$：$\vec{F}=-G\dfrac{mM}{R^2}\hat{r}$。<!-- src: C02_质点动力学#p015; type: direct -->
- **重力加速度**：矢量 $\vec{g}=-\dfrac{GM}{R^2}\hat{r}$（指向地心），大小 $g=\dfrac{GM}{R^2}$。<!-- src: C02_质点动力学#p015; type: direct -->
- **重力**：$\vec{F}=m\vec{g}$。<!-- src: C02_质点动力学#p015; type: direct -->

#### 例题：逃逸速度（第二宇宙速度）

> 求竖直上抛物体不再落回地面所需的最小初速度 $v_0$（不计空气阻力）。<!-- src: C02_质点动力学#p016ex1; type: direct -->

- 距地心 $x$ 处引力 $F=G\dfrac{Mm}{x^2}$，用 $g=\dfrac{GM}{R^2}$ 消去 $GM$ 得 $F=\dfrac{mgR^2}{x^2}$。<!-- src: C02_质点动力学#p016ex1; type: direct -->
- 牛顿第二定律（$x$ 竖直向上、引力为负）：$-\dfrac{mgR^2}{x^2}=ma$。**关键技巧**：用 $\dfrac{dv}{dt}=\dfrac{dv}{dx}\dfrac{dx}{dt}=v\dfrac{dv}{dx}$ 消去时间，分离变量 $-\dfrac{gR^2}{x^2}dx=v\,dv$。<!-- src: C02_质点动力学#p016ex1; type: direct -->
- 积分 $\displaystyle\int_{R}^{x}-\frac{gR^2}{x^2}dx=\int_{v_0}^{v}v\,dv$，得 $\dfrac{gR^2}{x}-gR=\dfrac{1}{2}v^2-\dfrac{1}{2}v_0^2$，即

  $$
  v=\sqrt{v_0^2-2gR+\frac{2gR^2}{x}}
  $$
  
  <!-- src: C02_质点动力学#p017ex1; type: direct -->
- **判据**：若 $v_0^2<2gR$，则在 $x=\dfrac{2gR^2}{2gR-v_0^2}$ 处 $v=0$（升到该处停下、不能逃逸）；若 $v_0^2\ge2gR$ 则始终 $v>0$（一直远离不返回）。<!-- src: C02_质点动力学#p017ex1; type: direct -->
- **逃逸速度**：$v_0=\sqrt{2gR}=11.2\times10^{3}\,\mathrm{m/s}$。<!-- src: C02_质点动力学#p017ex1; type: direct -->

### 五、弹性力（Elastic force）

#### ① 恢复力与胡克定律

- **恢复力（restoring force）**：弹簧的恢复力。**胡克定律（Hooke's law）**：$F=-kx$，$x$ 为相对平衡位置（equilibrium position，$O$ 点）的位移（图中 $l_0$ 为弹簧自然长度，$x$ 自 $O$ 起算、不含 $l_0$），$k$ 为劲度系数；负号表示力指向平衡位置、与位移反向。<!-- src: C02_质点动力学#p018 + #p018g1; type: direct -->
- 适用范围：胡克定律 $F=-kx$ 是近似的、经验的（Approximate, empirical）。<!-- src: C02_质点动力学#p018; type: direct -->

#### ② 张力（tension）

- **张力**：存在于被拉伸绳（弦）内部的弹性力。绳两端沿绳向外受力 $f$ 时张紧；在绳内任取截面 $P$ 把绳分为两段，两段在 $P$ 处通过张力 $T$ 相互作用、方向相反，互为作用力与反作用力。<!-- src: C02_质点动力学#p019; type: direct -->
- **绳分段受力分析**：质量为 $M$ 的物块经绳受外力 $\vec{F}$，沿绳取 $A,B,C$ 点把绳分为 $AB$（质量 $m_{AB}$）、$BC$（质量 $m_{BC}$）两段。沿运动方向对各段用牛顿第二定律：$T_B-F_A=m_{AB}\,a$，$F-T_B=m_{BC}\,a$。<!-- src: C02_质点动力学#p019 + #p020; type: synthesized -->
- **张力处处相等的条件**：(1) $\vec{a}=0$（绳水平、加速度为零）；或 (2) $\vec{a}\neq0$ 但绳质量 $m=0$（轻绳）。此时 $T_B=F_A=F$，即绳内各处张力相等且等于外力。<!-- src: C02_质点动力学#p020; type: direct -->

#### 例题：匀速旋转绳中的张力

> 质量均匀的绳，质量 $M$、长 $L$，一端固定在竖直轴上以恒定角速度 $\omega$ 在水平面内旋转（始终伸直、忽略重力），求距轴 $r$ 处张力 $T(r)$。<!-- src: C02_质点动力学#p021; type: direct -->

- **微元法**：距轴 $r$ 处取长 $dr$ 的绳元，质量 $dm=\dfrac{M}{L}dr$（线密度 $M/L$），向心加速度 $a_n=r\omega^2$。径向牛顿第二定律：$T(r)-T(r+dr)=dm\cdot a_n=\dfrac{M}{L}r\omega^2\,dr$。<!-- src: C02_质点动力学#p021; type: direct -->
- 化为微分方程 $dT=-\dfrac{M\omega^2}{L}r\,dr$；**边界条件**：自由端 $T(L)=0$。<!-- src: C02_质点动力学#p022; type: direct -->
- 积分 $\displaystyle\int_{T(r)}^{0}dT=-\int_{r}^{L}\frac{M\omega^2}{L}r\,dr$，得

  $$
  T(r)=\frac{M\omega^2\,(L^2-r^2)}{2L}
  $$
  

  自由端 $r=L$ 处 $T=0$。<!-- src: C02_质点动力学#p022; type: direct -->
- 由该式可见张力在轴端 $r=0$ 处最大。<!-- src: C02_质点动力学#p022; type: one-step-inferred -->

### 六、摩擦力（friction）

- 平动情况下摩擦力 $\vec{f}$ 分为**静摩擦力 $\vec{f}_s$**（static）与**滑动摩擦力 $\vec{f}_k$**（sliding/kinetic）。<!-- src: C02_质点动力学#p023; type: direct -->
- **静摩擦力**：在图示单一水平外力作用且物体仍静止时，与该外力等值反向；一般由平衡条件决定，取值范围 $0\le f_s\le f_{s,\max}$。最大静摩擦力 $f_{s,\max}=\mu_s F_N$，方向与运动趋势相反（$\mu_s$ 静摩擦系数，$F_N$ 正压力）。<!-- src: C02_质点动力学#p023; type: synthesized -->
- **滑动摩擦力**：$f_k=\mu F_N$，方向与相对运动方向相反（$\mu$ 滑动摩擦系数）。<!-- src: C02_质点动力学#p024; type: direct -->
- $f$–$t$ 临界关系：静止阶段 $f_s=F$ 随外力线性增至峰值 $f_{s,\max}$，越过临界点进入滑动阶段后摩擦力下降并维持在 $f_k$，即 $f_k<f_{s,\max}$；且相同接触面时 $\mu<\mu_s$。<!-- src: C02_质点动力学#p023g2 + #p024; type: synthesized -->

---

## §2.3 动力学问题的处理

> 注：本节为讲义正文 §2.3，标题「动力学问题的处理」；对应封面目录的 §2.4「动力学问题的求解」。<!-- src: C02_质点动力学#p025; type: direct -->

### 一、例题：箱中的阿特伍德机（隔离体法）

> 水平桌面上放质量为 $m$ 的空箱，箱内吊一阿特伍德机，定滑轮两侧挂质量 $m_1$、$m_2$ 的物块；滑轮与绳质量可忽略、绳与滑轮光滑、绳不可伸长。求：(1) 绳张力；(2) 物块加速度；(3) 空箱受几个力。<!-- src: C02_质点动力学#p025ex1; type: direct -->

- **方法**：把空箱、滑轮、$m_1$、$m_2$ 分别隔离画受力图，以地面（惯性系）为参考系对各隔离体列方程联立。<!-- src: C02_质点动力学#p025g1 + #p026; type: synthesized -->
- 受力与方程（设 $m_1>m_2$，$m_1$ 向下、$m_2$ 向上加速）：
  - 空箱（$N$ 向上、$T$ 向下、$mg$ 向下，平衡）：$N-T-mg=0$；<!-- src: C02_质点动力学#p026; type: direct -->
  - 滑轮（无质量，$T$ 向上、$T_1,T_2$ 向下）：$T-T_1-T_2=0$；<!-- src: C02_质点动力学#p026; type: direct -->
  - 物块：$m_1g-T_1=m_1a_1$，$T_2-m_2g=m_2a_2$；<!-- src: C02_质点动力学#p026; type: direct -->
  - 约束（绳不可伸长、滑轮与绳无质量且光滑）：$a_1=a_2$，$T_1=T_2$。<!-- src: C02_质点动力学#p026; type: direct -->
- **结果**：

  $$
  a_1=a_2=\frac{m_1-m_2}{m_1+m_2}g,\qquad T_1=T_2=\frac{2m_1m_2}{m_1+m_2}g
  $$
  

  $$
  T=2T_1=\frac{4m_1m_2}{m_1+m_2}g,\qquad N=mg+T=\left(m+\frac{4m_1m_2}{m_1+m_2}\right)g
  $$
  
  <!-- src: C02_质点动力学#p027; type: direct -->
- **易错点（变形体 vs 刚体）**：滑轮+两物体是**变形体**（$m_1,m_2$ 有加速度），不能当刚体用平衡式 $T-m_1g-m_2g=0$；否则错得 $T=(m_1+m_2)g$、$N=(m+m_1+m_2)g$。正确张力 $T=\dfrac{4m_1m_2}{m_1+m_2}g\neq(m_1+m_2)g$。<!-- src: C02_质点动力学#p027g2; type: synthesized -->

### 二、例题：电梯中的阿特伍德机（惯性系 vs 非惯性系）

> 电梯内质量可忽略的滑轮，轻绳挂物体 A（$m_1$）、B（$m_2$），$m_1>m_2$，光滑、绳不可伸长。求 (1) 电梯匀速上升、(2) 电梯匀加速上升时绳张力及 A **相对电梯**的加速度。<!-- src: C02_质点动力学#p028ex1; type: direct -->

- **建模条件**：滑轮无质量+光滑 ⟹ 两侧张力相等；轻绳不可伸长 ⟹ A、B 相对电梯加速度等大反向。注意所求是相对电梯（电梯系）的加速度。<!-- src: C02_质点动力学#p028ex1; type: compressed -->
- **情形 (1) 电梯匀速（S′ 为惯性系）**：物体对电梯的加速度 = 对地面的加速度。$y$ 轴向上时 $T-m_1g=-m_1a_1$，$T-m_2g=m_2a_2$，$a_1=a_2=a_{\mathrm{el}}$，得

  $$
  a_{\mathrm{el}}=\frac{m_1-m_2}{m_1+m_2}g,\qquad T=\frac{2m_1m_2}{m_1+m_2}g
  $$
  
  <!-- src: C02_质点动力学#p029; type: direct -->
- **情形 (2) 电梯以加速度 $a$ 竖直上升（S′ 为非惯性系）**：加速度变换 $\dfrac{d\vec{v}}{dt}=\dfrac{d\vec{v}\,'}{dt'}+\dfrac{d\vec{u}}{dt}$；地面系牛顿方程 $T-m_1g=m_1(-a_1'+a)$，$T-m_2g=m_2(a_2'+a)$，$a_1'=a_2'=a_{\mathrm{el}}'$，得

  $$
  a_{\mathrm{el}}'=\frac{m_1-m_2}{m_1+m_2}(a+g),\qquad T=\frac{2m_1m_2}{m_1+m_2}(a+g)
  $$
  
  <!-- src: C02_质点动力学#p030 + #p031; type: direct -->
- 对比：情形 (2) 相当于把情形 (1) 中的 $g$ 整体替换为 $(a+g)$。<!-- src: C02_质点动力学#p030; type: synthesized -->
- **特例**：$a=-g$（电梯自由下落）时 $a_{\mathrm{el}}'=0$、$T=0$——滑轮与 A、B 同为自由落体，两物体间无相对加速度。<!-- src: C02_质点动力学#p031; type: direct -->

### 三、例题：绳绕圆柱（绞盘）

> 柔绳缠绕固定圆柱，包角 $\varphi$，两端张力 $T_A$、$T_B$，绳与柱摩擦系数 $\mu$，轻绳。求 $T_A$ 与 $T_B$ 的关系。<!-- src: C02_质点动力学#p032ex1; type: direct -->

- **微元法**：取位于角 $\theta$、张角 $d\theta$ 的绳元，两端张力 $T(\theta)$、$T(\theta+d\theta)$ 沿切向，法向支持力 $dN$ 径向向外，摩擦力 $\mu\,dN$ 沿切向。<!-- src: C02_质点动力学#p032g2 + #p033g1; type: synthesized -->
- 切向、法向分量方程：$[T(\theta+d\theta)-T(\theta)]\cos\dfrac{d\theta}{2}=-\mu\,dN$，$[T(\theta+d\theta)+T(\theta)]\sin\dfrac{d\theta}{2}=dN$。<!-- src: C02_质点动力学#p033ex1; type: direct -->
- 小量近似 $dT=T(\theta+d\theta)-T(\theta)$、$T(\theta+d\theta)+T(\theta)=2T$、$\cos\dfrac{d\theta}{2}=1$、$\sin\dfrac{d\theta}{2}=\dfrac{d\theta}{2}$，得 $dT=-\mu\,dN$、$T\,d\theta=dN$，故 $\dfrac{dT}{T}=-\mu\,d\theta$。<!-- src: C02_质点动力学#p033ex1; type: direct -->
- 积分 $\displaystyle\int_{T_A}^{T_B}\frac{dT}{T}=-\mu\int_{\theta_A}^{\theta_B}d\theta$，得 $\ln\dfrac{T_B}{T_A}=-\mu\varphi$，即

  $$
  T_B=T_A\,e^{-\mu\varphi}
  $$
  

  特例 $\mu=0\Rightarrow T_B=T_A$。<!-- src: C02_质点动力学#p033ex1; type: direct -->

---

## §2.4 SI 单位和量纲

> 注：本节为讲义正文 §2.4，标题「SI 单位和量纲」；对应封面目录的 §2.3。<!-- src: C02_质点动力学#p034; type: direct -->

### 一、单位制

- **基本量 / 基本单位**：先选某些物理量直接规定其单位，这些量为基本量、其单位为基本单位。**导出量 / 导出单位**：其它物理量按一定关系从基本量导出。**单位制**：基本单位与导出单位的全体；基本单位选择不同则构成不同单位制。<!-- src: C02_质点动力学#p034; type: direct -->
- 国际单位制简称 **SI**，本课程全部采用 SI。力学基本量为长度、质量、时间，对应基本单位为米（m）、千克（kg）、秒（s）。<!-- src: C02_质点动力学#p034; type: direct -->
- 各物理量通过定义或物理定律相联系，故不必给所有量规定单位；当少数几个基本量的单位规定后，其余量的单位即可由它们导出。<!-- src: C02_质点动力学#p034; type: direct -->

### 二、量纲（dimension）

- **定义**：表示物理量如何由基本量（含幂次）组合的式子，称为该量的量纲。力学基本量量纲符号：$L$（长度）、$M$（质量）、$T$（时间）；任一力学量 $Q$ 的量纲 $[Q]=L^{p}M^{q}T^{s}$。<!-- src: C02_质点动力学#p035; type: direct -->
- 常见量纲：$[v]=LT^{-1}$，$[a]=LT^{-2}$，$[F]=[ma]=MLT^{-2}$。<!-- src: C02_质点动力学#p035; type: direct -->
- **量纲分析的用处**：① 初步检验物理等式的正确性；② 为推导公式提供线索或直接推导公式。<!-- src: C02_质点动力学#p035; type: direct -->

#### 例题：用量纲分析求单摆周期

- 设周期 $T$ 由质量 $m$、重力加速度 $g$、摆长 $l$ 决定（$[m]=M$，$[g]=LT^{-2}$，$[l]=L$），设 $T=\alpha\,m^{\alpha_1}g^{\alpha_2}l^{\alpha_3}$（$\alpha$ 无量纲常数）。<!-- src: C02_质点动力学#p036ex1; type: direct -->
- 量纲匹配 $M^{\alpha_1}L^{\alpha_2+\alpha_3}T^{-2\alpha_2}=T^{1}$，得 $\alpha_1=0$、$\alpha_2+\alpha_3=0$、$-2\alpha_2=1$，解出 $\alpha_1=0,\ \alpha_2=-\tfrac12,\ \alpha_3=\tfrac12$。<!-- src: C02_质点动力学#p036ex1; type: direct -->
- 结果：$T=\alpha\sqrt{\dfrac{l}{g}}$；周期与质量 $m$ 无关，无量纲常数 $\alpha$ 在量纲分析中保持未定。<!-- src: C02_质点动力学#p036ex1; type: one-step-inferred -->

### 三、经典案例：用量纲分析估计原子弹爆炸能量（Taylor）

- 背景：1945-07-16 美国在新墨西哥沙漠试爆首颗原子弹；资料保密。官方公布能量 $(15\text{–}20)\times10^{3}\,\mathrm{t}$（TNT 当量），2016 年修正为 $(22.1\pm2.7)\times10^{3}\,\mathrm{t}$。英国物理学家泰勒（Taylor）仅凭公开爆炸录像，用**量纲分析**估得 $16.8\times10^{3}\,\mathrm{t}$。<!-- src: C02_质点动力学#p037ex1; type: direct -->
- **点源模型**：一点突然释放能量 $E$，爆炸面形成球面以冲击波（shock wave）向外传播，球面位置由"蘑菇云"反映；录像给出不同时刻 $t$ 的球面半径 $r$（附 100 m 标尺）。<!-- src: C02_质点动力学#p038ex1; type: direct -->
- **四条近似假设**：① 点源 $L\ll r$；② 瞬间 $\tau\ll t$；③ 爆炸能量全部转化为空气动能；④ 蘑菇云呈球状分布。<!-- src: C02_质点动力学#p039; type: direct -->
- **量纲分析**：用 $m=\rho V$、$V\sim r^3$、$v\sim r/t$ 凑能量量纲 $[E]=[\rho]\left[\dfrac{r^5}{t^2}\right]$，得 $E=k\dfrac{\rho r^5}{t^2}$；Taylor 分析表明 $k\sim1$，故

  $$
  E=\frac{\rho r^5}{t^2}
  $$
  
  <!-- src: C02_质点动力学#p040; type: direct -->
- 所用常数：空气密度 $\rho=1.25\,\mathrm{kg/m^3}$；换算 $1\times10^3\,\mathrm{t}\,(\text{TNT})=4.184\times10^{12}\,\mathrm{J}$。<!-- src: C02_质点动力学#p040; type: direct -->
- 结果：用 25 组 $(r,t)$ 数据平均得 $E=(8.28\pm1.58)\times10^{13}\,\mathrm{J}=(19.8\pm3.8)\times10^{3}\,\mathrm{t}$（其中由首组数据 $r=11.1\,\mathrm{m},\,t=0.10\,\mathrm{ms}$ 单点代入得 $E_1=2.11\times10^{13}\,\mathrm{J}$，明显偏低）；剔除该组后用 24 组得 $E=(8.54\pm0.94)\times10^{13}\,\mathrm{J}=(20.4\pm2.2)\times10^{3}\,\mathrm{t}$，与实际值 $(22.1\pm2.7)\times10^{3}\,\mathrm{t}$ 相符。<!-- src: C02_质点动力学#p039 + #p040; type: synthesized -->

---

## §2.5 非惯性系和惯性力

### 一、非惯性系与惯性力

- 设惯性系 $S$ 与参考系 $S'$，$S'$ 相对 $S$ 以速度 $\vec{u}(t)$ 平动，$O'$ 相对 $O$ 的位矢 $\vec{R}(t)$。位矢、速度变换：$\vec{r}\,'=\vec{r}-\vec{R}$，$\vec{v}\,'=\vec{v}-\vec{u}(t)$。<!-- src: C02_质点动力学#p041; type: direct -->
- 若 $S'$ 相对惯性系作**变速**运动，则 $S'$ 为**非惯性系**（noninertial frame）；此时牛顿第一、第二定律在 $S'$ 中**不成立**。<!-- src: C02_质点动力学#p041 + #p042; type: direct -->
- 加速度变换：$\vec{a}\,'=\vec{a}-\dfrac{d\vec{u}}{dt}$。惯性系中 $\vec{F}=m\vec{a}$，代入得 $\vec{F}=m\vec{a}\,'+m\dfrac{d\vec{u}}{dt}$，即真实力 $\vec{F}\neq m\vec{a}\,'$。<!-- src: C02_质点动力学#p042 + #p043; type: direct -->
- **惯性力（Inertial force）**：定义

  $$
  \vec{F}_{\mathrm{in}}=-m\frac{d\vec{u}}{dt}
  $$
  

  方向与 $S'$ 相对惯性系的加速度 $\dfrac{d\vec{u}}{dt}$ 相反。引入后牛顿第二定律在 $S'$ 中**形式上成立**：

  $$
  \vec{F}+\vec{F}_{\mathrm{in}}=m\vec{a}\,'
  $$
  
  <!-- src: C02_质点动力学#p043 + #p044 + #p045; type: direct -->
- **惯性力的性质**：无施力物体、无反作用力（非真实相互作用力）。<!-- src: C02_质点动力学#p044; type: direct -->
- **平动非惯性系特例**：若 $S'$ 以加速度 $\vec{a}_0$ 平动（$\dfrac{d\vec{u}}{dt}=\vec{a}_0$），则 $\vec{F}_{\mathrm{in}}=-m\vec{a}_0$，方向与 $\vec{a}_0$ 相反（如加速小车中的小球受向后惯性力）。<!-- src: C02_质点动力学#p044 + #p045g2; type: direct -->

### 二、视重、超重与失重

- **物体的重量**：物体相对地面静止时作用在支撑物（秤）上的力。<!-- src: C02_质点动力学#p046; type: direct -->
- **视重（Apparent weight）**：如图，人站在固定于电梯地板的秤上时秤的示数（电梯加速时支撑物所受的力）。<!-- src: C02_质点动力学#p046g1; type: one-step-inferred -->
- **超重 / 失重（定性）**：电梯以向上加速度 $\vec{a}$ 运动时超重；以向下加速度 $\vec{a}$ 运动时失重。<!-- src: C02_质点动力学#p046; type: direct -->
- **完全失重（定量）**：下落电梯中对质点用含惯性力的平衡式 $m\vec{g}+\vec{P}+(-m_i\vec{a})=0$；竖直方向（$a$、$z$ 向下）投影 $P=mg-m_i a$。当引力质量 $m=$ 惯性质量 $m_i$ 且 $a=g$（自由下落）时 $P=0$，处于完全失重。<!-- src: C02_质点动力学#p047; type: direct -->

### 三、转动参考系：惯性离心力

> 圆盘绕中心以恒定角速度 $\vec{\omega}$ 转动，径向光滑滑槽内质量 $m$ 的小球由轻弹簧连接、相对圆盘静止。<!-- src: C02_质点动力学#p049g1; type: direct -->

- 地面系 $S$（惯性系）观察：小球作匀速圆周运动，向心加速度 $\vec{a}_n=-\omega^2\vec{r}$，弹簧提供向心力 $\vec{F}_n=-m\omega^2\vec{r}$（指向圆心）。<!-- src: C02_质点动力学#p049; type: direct -->
- 圆盘系 $S'$（非惯性系）观察：小球静止 $\vec{a}\,'=0$，须引入惯性力使 $\vec{F}_n+\vec{F}_{\mathrm{in}}=0$。**惯性离心力（inertial centrifugal force）**：

  $$
  \vec{F}_{\mathrm{in}}=m\omega^2\vec{r}
  $$
  

  方向沿径向背离转轴（与向心力反向）。（本节就匀速转动 $\omega=$ const. 的转动系讨论）<!-- src: C02_质点动力学#p049; type: direct -->

### 四、科里奥利力（Coriolis force）

- 现象：圆盘表面光滑（不开滑槽），$\omega=$ const.。地面（惯性）系看小球从盘心沿直线匀速向边缘运动；圆盘系看小球不沿半径、而向一侧偏转作曲线运动。<!-- src: C02_质点动力学#p050; type: direct -->
- **科里奥利力**：

  $$
  \vec{F}_c=2m\vec{v}\times\vec{\omega}
  $$
  

  $\vec{v}$ 为小球相对转动参考系的速度，$\vec{\omega}$ 为角速度。结论：相对惯性系的匀速直线运动，在转动系中表现为曲线运动（需引入科里奥利力解释偏转）；反之亦然。<!-- src: C02_质点动力学#p050 + #p051; type: direct -->

#### 例题：盘心沿径向匀速运动质点（极坐标推导）

> 圆盘系 $S'$ 中质点从盘心沿径向以速度 $\vec{u}$ 匀速运动，$S'$ 以角速度 $\vec{\omega}$ 匀速转动；地面系 $S$ 用平面极坐标。<!-- src: C02_质点动力学#p051ex1; type: direct -->

- 极坐标速度 $\vec{v}=\dfrac{dr}{dt}\hat{r}+r\dfrac{d\theta}{dt}\hat{\theta}$，单位矢量导数 $\dfrac{d\hat{r}}{dt}=\dfrac{d\theta}{dt}\hat{\theta}$、$\dfrac{d\hat{\theta}}{dt}=-\dfrac{d\theta}{dt}\hat{r}$。<!-- src: C02_质点动力学#p051; type: direct -->
- 加速度按径向/横向归并：$\vec{a}=\left[\dfrac{d^2r}{dt^2}-r\left(\dfrac{d\theta}{dt}\right)^2\right]\hat{r}+\left(r\dfrac{d^2\theta}{dt^2}+2\dfrac{dr}{dt}\dfrac{d\theta}{dt}\right)\hat{\theta}$。<!-- src: C02_质点动力学#p052; type: direct -->
- 代入本例条件 $\dfrac{dr}{dt}=u$、$\dfrac{d\theta}{dt}=\omega$、$\dfrac{d^2r}{dt^2}=0$、$\dfrac{d^2\theta}{dt^2}=0$，得地面系加速度

  $$
  \vec{a}=-r\omega^2\hat{r}+2u\omega\hat{\theta}
  $$
  
  <!-- src: C02_质点动力学#p052ex1; type: direct -->
- 惯性系合力 $\vec{F}=m\vec{a}=-mr\omega^2\hat{r}+2mu\omega\hat{\theta}$；圆盘系中小球作匀速直线运动 $\vec{F}\,'=\vec{F}+\vec{F}_{\mathrm{in}}=0$，故须引入

  $$
  \vec{F}_{\mathrm{in}}=-\vec{F}=mr\omega^2\hat{r}-2mu\omega\hat{\theta}=m\omega^2\vec{r}+2m\vec{u}\times\vec{\omega}
  $$
  

  其中 $m\omega^2\vec{r}$ 为惯性离心力，$2m\vec{u}\times\vec{\omega}$ 为科里奥利力。<!-- src: C02_质点动力学#p053ex1; type: direct -->

#### 科里奥利力的应用

- 与地球自转相关：赤道附近的信风、北半球与南半球的旋风（旋向相反）。科里奥利力方向由 $\vec{v}\times\vec{\omega}$ 决定（例：$\vec{\omega}$ 向上、$\vec{v}$ 垂直纸面向里 $\otimes$，则指向右方）。<!-- src: C02_质点动力学#p054; type: direct -->
- **傅科摆（Foucault pendulum）**：傅科 1851 年在巴黎万神殿悬挂单摆（摆长 $67\,\mathrm{m}$、摆锤 $28\,\mathrm{kg}$ 铁球），摆平面顺时针转动、$32$ 小时转一周。其他相关现象：远射程火炮弹道偏转（北纬 $50^{\circ}$、南纬 $50^{\circ}$）。拓展思考：傅科摆摆平面转动角速度与地球自转角速度的关系（可定性或定量讨论）。<!-- src: C02_质点动力学#p055; type: direct -->

### 五、例题：旋转光滑管中的小球

> 长 $l$ 的光滑管一端绕竖直轴以角速度 $\omega_0$ 转动，小球从另一端以 $v_0=l\omega_0$ 向轴心 $O$ 滑来。求 (1) 距 $O$ 为 $r$ 时速度；(2) 滑到 $r=l/2$ 所需时间；(3) 能否到达 $O$。<!-- src: C02_质点动力学#p056; type: direct -->

- **方法**：取转动的管为非惯性参考系，小球受惯性离心力。径向方程 $m\omega_0^2 r=m\dfrac{dv}{dt}$，用 $\dfrac{dv}{dt}=v\dfrac{dv}{dr}$ 消去时间得 $v\,dv=r\omega_0^2\,dr$。<!-- src: C02_质点动力学#p056 + #p057ex1; type: direct -->
- 积分（向内取负）$\displaystyle\int_{-v_0}^{-v}v\,dv=\int_{l}^{r}r\omega_0^2\,dr$，得 $v^2-v_0^2=\omega_0^2(r^2-l^2)$；代入 $v_0=l\omega_0$ 得 $v^2=r^2\omega_0^2$，故 $v=-r\omega_0$（向内）。<!-- src: C02_质点动力学#p057ex1; type: direct -->
- 由 $\dfrac{dr}{dt}=-r\omega_0$ 分离变量积分 $\displaystyle\int_{l}^{r}\frac{dr}{r}=\int_{0}^{t}-\omega_0\,dt$，得 $\ln\dfrac{r}{l}=-\omega_0 t$，即

  $$
  r=l\,e^{-\omega_0 t}
  $$
  

  小球按指数规律趋近转轴。<!-- src: C02_质点动力学#p058ex1; type: direct -->
- 到达半程 $r=\dfrac{l}{2}$：$\dfrac{l}{2}=l\,e^{-\omega_0 t_1}\Rightarrow\omega_0 t_1=\ln2\Rightarrow t_1=\dfrac{\ln2}{\omega_0}$。<!-- src: C02_质点动力学#p058ex1; type: direct -->
- **结论 / 易错点**：要到达端点 $O$（$r=0$）需 $l\,e^{-\omega_0 t}=0$，即 $t=\infty$——小球趋近转轴需无限长时间，**永远到不了 $O$**。<!-- src: C02_质点动力学#p058ex1; type: direct -->
