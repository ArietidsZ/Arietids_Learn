# 第10章 热力学定律

> Arietids Learn · 个人课程复习笔记
> 在线阅读：https://learn.arietids.net/courses/physics/chapter-10/

## §10.1 功、热量和内能

### 1. 过程

#### 平衡态与过程的产生

- 平衡态：热力学系统处于平衡态时，它的状态参量不随时间变化。 <!-- src: PH-C10#p002; type: direct -->
- 过程的产生：热力学系统和外界之间发生相互作用，平衡态被破坏，系统从原平衡态过渡到另一个平衡态，即系统经历了一个"过程"。 <!-- src: PH-C10#p002; type: compressed -->
- 一个过程的中间环节可表示为：平衡态1 → 非平衡态 → 平衡态2。 <!-- src: PH-C10#p002; type: direct -->

#### 非平衡过程

- 定义：如果在过程进行中的每一步，系统的状态发生一个可被观测出的微小变化的时间都小于弛豫时间，那么系统所经历的一系列中间状态都是非平衡态，这个过程就是非平衡过程。 <!-- src: PH-C10#p002; type: direct -->

#### 准静态过程（平衡过程）

- 准静态过程又称平衡过程：在过程中每一时刻，系统都处于平衡态。 <!-- src: PH-C10#p002; type: direct -->
- 性质：准静态过程是理想模型，对应实际过程无限缓慢地进行。 <!-- src: PH-C10#p002; type: compressed -->

#### 例1 气体的准静态压缩

- 符号约定：$p'$ 为活塞作用于气体的外压强；$p$ 为气体内部压强。 <!-- src: PH-C10#p003ex; type: direct -->
- 处于平衡态时，气体受到的外压强 $p'$ 与气体内部压强 $p$ 大小相等，即 $p' = p$。 <!-- src: PH-C10#p003ex; type: direct -->
- 活塞移动时，$p'$ 与 $p$ 大小不相等；此时气体内部各处的压强 $p$ 不一样，靠近活塞处最大、向里逐渐减少，因而无法用气体的状态参量 $p$ 来表示。 <!-- src: PH-C10#p003ex; type: direct -->
- 用外压强代替内部状态参量的条件：活塞移动越缓慢，$p'$ 越接近 $p$；当活塞移动无限缓慢时 $p' = p$，可视为使过程的每一步都保持平衡态，即为准静态过程。 <!-- src: PH-C10#p003ex; type: direct -->
- 分步压缩图示：气体内部压强按 $p_1 \to p_1+\Delta p \to p_1+2\Delta p \to p_1+3\Delta p \to \cdots \to p_2$ 逐级增大，且 $p_2 = p_1 + n\Delta p$；每一步施加的外压强比当前内部压强大 $\Delta p$（如气体处于 $p_1$ 时外压强为 $p_1+\Delta p$，处于 $p_1+\Delta p$ 时外压强为 $p_1+2\Delta p$，依此类推）。 <!-- src: PH-C10#p004g1; type: direct -->
- 当 $\Delta p \to 0$ 时该过程为准静态过程；本图强调为无摩擦的准静态过程。 <!-- src: PH-C10#p004g1; type: direct -->

#### 例2 准静态传热

- 系统温度按 $T_1 \to T_1+\Delta T \to T_1+2\Delta T \to \cdots \to T_2$ 逐级升高，且 $T_2 = T_1 + n\Delta T$。 <!-- src: PH-C10#p005ex; type: direct -->
- 实现方式（图示）：将系统依次与温度逐次高出 $\Delta T$ 的热源接触——系统 $T_1$ 接触热源 $T_1+\Delta T$；系统 $T_1+\Delta T$ 接触热源 $T_1+2\Delta T$；……；系统 $T_1+(n-1)\Delta T$ 接触热源 $T_1+n\Delta T$。 <!-- src: PH-C10#p005g1; type: direct -->
- 当 $\Delta T \to 0$ 时为准静态过程。 <!-- src: PH-C10#p005ex; type: direct -->

#### 平衡态、状态参量与 p-V 图

- 系统的状态参量：压强、体积、温度；其中任意两个量确定，就可确定系统的状态。 <!-- src: PH-C10#p006; type: direct -->
- 理想气体状态方程：

$$
pV = \frac{m}{M}RT, \qquad p = nkT
$$


<!-- src: PH-C10#p006; type: direct -->

- p-V 图中的一点表示系统的一个平衡态。 <!-- src: PH-C10#p006; type: direct -->
- p-V 图中的一条曲线表示系统的一个准静态过程。 <!-- src: PH-C10#p006; type: direct -->
- 图示：p-V 平面上画出一条 $p$ 随 $V$ 增大而单调减小的曲线，曲线上标出一个平衡态点 $(V_1, p_1)$。 <!-- src: PH-C10#p006g1; type: direct -->

### 2. 做功

- 做功是热力学系统和外界之间相互作用的一种方式。 <!-- src: PH-C10#p007; type: direct -->
- 外界对系统做功会使系统的状态发生改变。 <!-- src: PH-C10#p007; type: direct -->
- 适用范围：本课程仅讨论准静态过程；以气体作准静态压缩为例，在过程中每一时刻系统内部的压强都等于外压强。 <!-- src: PH-C10#p007; type: direct -->
- 本课程所提的准静态过程即无摩擦的准静态过程；如果没有摩擦阻力，在准静态过程中，外界和系统的相互作用可以用描述系统平衡态的状态参量来表示。 <!-- src: PH-C10#p007; type: direct -->

#### 气体准静态压缩的做功公式

- 前提：在过程中每一时刻系统内部的压强都等于外压强，活塞施于气体的压强为 $p$。 <!-- src: PH-C10#p008; type: direct -->
- 元功：当活塞移动距离 $dl$ 时，外界对气体所做的元功为

$$
\delta A = pS\,dl
$$


<!-- src: PH-C10#p008; type: direct -->

- 式中 $S$ 为活塞（气缸）横截面积（由下式 $dV=-S\,dl$ 可知 $S\,dl$ 为体积变化量）。 <!-- src: PH-C10#p008; type: one-step-inferred -->
- 由于气体的体积减少了 $S\,dl$，即 $dV = -S\,dl$，故

$$
\delta A = -p\,dV
$$


<!-- src: PH-C10#p008; type: direct -->

- 气体的体积由 $V_1$ 变为 $V_2$，外界对系统所做的总功（注意 $A$ 为外界对系统所做的功）：

$$
A = \int \delta A = -\int_{V_1}^{V_2} p\,dV
$$


<!-- src: PH-C10#p008; type: direct -->

#### 准静态过程中气体做功的计算

- 模型：气缸内气体压强为 $p$，活塞面积为 $S$，气体准静态膨胀时推动活塞移动 $\mathrm{d}l$，体积由 $V$ 变为 $V+\mathrm{d}V$。 <!-- src: PH-C10#p009g1; type: direct -->
- 元功（气体对外界所做的微小功）：$\delta A = pS\,\mathrm{d}l = p\,\mathrm{d}V$。其中 $S\,\mathrm{d}l = \mathrm{d}V$。 <!-- src: PH-C10#p009; type: direct -->
- 体积由 $V_1$ 变到 $V_2$ 的过程中气体做的总功：$A = \int \delta A = \int_{V_1}^{V_2} p\,\mathrm{d}V$。 <!-- src: PH-C10#p009; type: direct -->

#### 功的 p-V 图意义与过程量性质

- 元功与总功：$\delta A = p\,\mathrm{d}V$，$A = \int \delta A = \int_{V_1}^{V_2} p\,\mathrm{d}V$。 <!-- src: PH-C10#p010; type: direct -->
- 几何意义：系统所做的功在数值上等于 $p\text{-}V$ 图上表示该过程的曲线下的面积。 <!-- src: PH-C10#p010; type: direct -->
- 元功的图示：$p\,\mathrm{d}V$ 对应 $p\text{-}V$ 图上位于 $V$ 到 $V+\mathrm{d}V$ 之间、高度为 $p$ 的窄条面积。 <!-- src: PH-C10#p010g1; type: direct -->
- 功是过程量。 <!-- src: PH-C10#p010; type: direct -->
- 图示佐证（第二个 $p\text{-}V$ 图）：连接同一初态 $(V_1,p_1)$ 与同一末态 $(V_2,p_2)$ 的两条不同路径，其曲线下面积不同，即功的大小与经历的具体过程有关。 <!-- src: PH-C10#p010g1; type: one-step-inferred -->

### 3. 传递热量

- 热量定义：利用温度差在系统与外界之间传递的能量叫热量。 <!-- src: PH-C10#p011; type: direct -->
- 传递热量是热力学系统和外界之间相互作用的一种方式。 <!-- src: PH-C10#p011; type: direct -->
- 作用效果：外界与热力学系统之间通过传递热量可改变系统的状态（平衡态1 → 过程 → 平衡态2）。 <!-- src: PH-C10#p011; type: direct -->
- 热量与具体过程有关，热量是过程量。 <!-- src: PH-C10#p011; type: direct -->
- 做功和传递热量是系统与外界之间相互作用的两种方式。 <!-- src: PH-C10#p011; type: direct -->

### 4. 内能

#### 绝热功与内能的引入

- 历史：焦耳（J. P. Joule）在 1840 年～1879 年做了大量的实验。 <!-- src: PH-C10#p012; type: direct -->
- 绝热过程定义：指热力学系统在被绝热壁与外界隔绝的情况下与外界发生相互作用的过程。 <!-- src: PH-C10#p012; type: direct -->
- 在绝热过程中，系统只能以做功的方式与外界交换能量。 <!-- src: PH-C10#p012; type: direct -->
- 焦耳实验结论：只要热力学系统的初态和末态一定，在以各种不同方式完成的绝热过程中，实验测得的绝热功的数值都相同；即在绝热过程中，外界对系统所做的功与实施绝热过程所经历的过程无关，完全由热力学系统的初态和末态确定。 <!-- src: PH-C10#p012; type: direct -->
- 由此可引入系统的一个态函数——内能 $E$（平衡态1 对应 $E_1$，平衡态2 对应 $E_2$）：$E_2 - E_1 = A_{\text{绝}}$，其中 $A_{\text{绝}}$ 为外界对系统所做的绝热功。 <!-- src: PH-C10#p012; type: direct -->

#### 内能作为态函数的性质

- 系统处于平衡态时，具有一定的、确定的内能。 <!-- src: PH-C10#p014; type: direct -->
- 内能由系统的状态唯一地确定，内能是一个状态量，只和状态有关，随状态变化而变化，与过程无关。 <!-- src: PH-C10#p014; type: direct -->
- 热力学系统从初态（平衡态1）经过一个任意的过程到达末态（平衡态2）时，内能的变化只与初态和末态有关：$\Delta E = E_2 - E_1$。 <!-- src: PH-C10#p014; type: direct -->
- 做功和传递热量是能量传递的两种方式，其量值都可作为内能变化的量度。 <!-- src: PH-C10#p014; type: direct -->

#### 理想气体内能

- 理想气体内能：$E = \dfrac{m}{M}\dfrac{i}{2}RT = E(T)$。其中 $m$ 为气体质量，$M$ 为摩尔质量，$i$ 为分子自由度，$R$ 为摩尔气体常量，$T$ 为热力学温度。 <!-- src: PH-C10#p015; type: direct -->
- 理想气体的内能是温度的单值函数，即只与温度有关。 <!-- src: PH-C10#p015; type: direct -->
- 实验依据：焦耳（J. P. Joule）在 1840 年～1879 年做了大量实验，其中稀薄气体向真空自由膨胀实验表明，理想气体的内能只与温度有关。 <!-- src: PH-C10#p015; type: compressed -->
- 对比：非理想气体内能 $E = E(V, T)$。 <!-- src: PH-C10#p015; type: direct -->

## §10.2 热力学第一定律及热容

### 1. 热力学第一定律

#### 基本表述与公式

- 物理图景：热力学系统由初态经过任意过程到达末态，初态内能 $E_1$、末态内能 $E_2$；系统吸收热量 $Q$，系统对外做功 $A$。 <!-- src: PH-C10#p016; type: direct -->
- 内能增量：$\Delta E = E_2 - E_1$。 <!-- src: PH-C10#p016; type: direct -->
- 热力学第一定律（积分形式 / 有限过程）：$Q = \Delta E + A$，即系统吸收的热量一部分用于增加内能、一部分用于对外做功。 <!-- src: PH-C10#p016; type: direct -->
- 微分形式（元过程）：$\delta Q = dE + \delta A$。 <!-- src: PH-C10#p016; type: direct -->
- 量的性质：$Q$、$A$ 为过程量，与所经历的具体过程有关，故在元过程中写作 $\delta Q$、$\delta A$（变分记号），而内能增量写作全微分 $dE$。 <!-- src: PH-C10#p016; type: direct -->

#### 符号规定（Q、A 均为代数量）

- 热量 $Q$：系统吸收热量时 $Q>0$（为正）；系统放热时 $Q<0$（为负）。 <!-- src: PH-C10#p017; type: direct -->
- 功 $A$：系统对外做功时 $A>0$（为正）；外界对系统做功时 $A<0$（为负）。 <!-- src: PH-C10#p017; type: direct -->

#### 第一类永动机

- 第一类永动机：使系统经过一系列状态变化后再回到原来的状态，在此过程中不需要输入能量就可以周而复始地对外做功的机器。 <!-- src: PH-C10#p016; type: direct -->
- 结论：第一类永动机是不可能制造的。 <!-- src: PH-C10#p016; type: direct -->

### 2. 理想气体的热容

#### 热容与摩尔热容

- 热容（heat capacity）：一定质量的热力学系统在某一过程中温度升高 $1\,\mathrm{K}$ 所吸收的热量，称为系统在该过程中的热容。 <!-- src: PH-C10#p018; type: direct -->
- 热容定义式：$C = \dfrac{\delta Q}{dT}$。（与所经历的过程有关，故 $\delta Q$ 用过程量记号） <!-- src: PH-C10#p018; type: direct -->
- 摩尔热容（molar heat capacity）：把 $1\ \mathrm{mol}$ 物质的热容称为摩尔热容。 <!-- src: PH-C10#p018; type: direct -->
- 摩尔热容定义式：$C_{m} = \dfrac{\delta Q_{m}}{dT}$。 <!-- src: PH-C10#p018; type: direct -->

#### 定压摩尔热容 $C_{p,m}$

- 定义：在压强不变的过程中，$1\ \mathrm{mol}$ 理想气体温度升高 $1\,\mathrm{K}$ 所吸收的热量。 <!-- src: PH-C10#p019; type: direct -->
- 定义式：$C_{p,m} = \left(\dfrac{\delta Q_{m}}{dT}\right)_{p}$（下标 $p$ 表示压强不变）。 <!-- src: PH-C10#p019; type: direct -->

#### 定体摩尔热容 $C_{V,m}$

- 定义：在体积不变的过程中，$1\ \mathrm{mol}$ 理想气体温度升高 $1\,\mathrm{K}$ 所吸收的热量。 <!-- src: PH-C10#p019; type: direct -->
- 定义式：$C_{V,m} = \left(\dfrac{\delta Q_{m}}{dT}\right)_{V}$（下标 $V$ 表示体积不变）。 <!-- src: PH-C10#p019; type: direct -->

## §10.3 理想气体的典型热力学过程

### 1. 等体过程

#### 过程特征

- 等体过程又称定体过程、等容过程。 <!-- src: PH-C10#p020; type: direct -->
- 过程条件：$V =$ 恒量。 <!-- src: PH-C10#p020; type: direct -->
- 等体过程方程：$V = C$（常量）。 <!-- src: PH-C10#p020; type: direct -->
- 微分关系：$dV = 0$。 <!-- src: PH-C10#p020; type: direct -->
- 做功：$\delta A = p\,dV = 0$，等体过程系统不做功。 <!-- src: PH-C10#p020; type: direct -->
- 由第一定律得：$\delta Q_{V} = dE$。 <!-- src: PH-C10#p020; type: direct -->
- $p\text{-}V$ 图：纵轴为 $p$、横轴为 $V$；等体过程是 $V=V_1$ 的竖直线段，连接同一体积 $V_1$ 下的两个状态 $(V_1, p_1)$（下方、压强较小）与 $(V_1, p_2)$（上方、压强较大）；线段两端仅以小圆点标出端点，未画单向箭头指明过程方向。 <!-- src: PH-C10#p020g1; type: direct -->

#### 热量与内能

- 有限过程：$Q_{V} = \Delta E$。在等体过程中，系统吸收的热量完全用来增加系统的内能。 <!-- src: PH-C10#p021; type: direct -->
- 理想气体内能：$E = \dfrac{m}{M}\dfrac{i}{2}RT$（$i$ 为自由度，$m$ 为质量，$M$ 为摩尔质量，$R$ 为摩尔气体常量）。 <!-- src: PH-C10#p021; type: direct -->
- 内能增量：$\Delta E = \dfrac{m}{M}\dfrac{i}{2}R(T_2 - T_1) = \dfrac{i}{2}(p_2 - p_1)V$。 <!-- src: PH-C10#p021; type: direct -->
- 所用状态方程：$pV = \dfrac{m}{M}RT$。 <!-- src: PH-C10#p021; type: direct -->

#### 用定体摩尔热容计算热量

- 由定义 $C_{V,m} = \left(\dfrac{\delta Q_{m}}{dT}\right)_{V}$ 得 $\delta Q_{V,m} = C_{V,m}\,dT$。 <!-- src: PH-C10#p022; type: direct -->
- 元过程：$\delta Q_{V} = \dfrac{m}{M}C_{V,m}\,dT$。 <!-- src: PH-C10#p022; type: direct -->
- 有限过程：$Q_{V} = \displaystyle\int_{T_1}^{T_2}\dfrac{m}{M}C_{V,m}\,dT = \dfrac{m}{M}C_{V,m}(T_2 - T_1)$。 <!-- src: PH-C10#p022; type: direct -->
- 内能微分：由 $\delta Q_{V} = dE$ 得 $dE = \dfrac{m}{M}C_{V,m}\,dT$。 <!-- src: PH-C10#p022; type: direct -->
- 内能增量（设平衡态 1 内能 $E_1$、平衡态 2 内能 $E_2$）：$\Delta E = E_2 - E_1 = \displaystyle\int_{T_1}^{T_2}\dfrac{m}{M}C_{V,m}\,dT = \dfrac{m}{M}C_{V,m}(T_2 - T_1)$。 <!-- src: PH-C10#p022; type: direct -->
- 定体摩尔热容与自由度的关系：$C_{V,m} = \left(\dfrac{\delta Q_{m}}{dT}\right)_{V} = \dfrac{dE_{m}}{dT} = \dfrac{i}{2}R$（$E_m$ 为 $1\ \mathrm{mol}$ 气体内能，$E = \dfrac{m}{M}\dfrac{i}{2}RT$）。 <!-- src: PH-C10#p022; type: direct -->

#### 不同分子理想气体的 $C_{V,m}$

- 通式：$C_{V,m} = \dfrac{i}{2}R$。 <!-- src: PH-C10#p023; type: direct -->

| 分子类型 | 自由度 $i$ | 定体摩尔热容 $C_{V,m}$ |
| --- | --- | --- |
| 单原子分子理想气体 | 3 | $\dfrac{3}{2}R$ |
| 刚性双原子分子理想气体 | 5 | $\dfrac{5}{2}R$ |
| 非刚性双原子分子理想气体 | 7 | $\dfrac{7}{2}R$ |
| 刚性多原子分子理想气体 | 6 | $\dfrac{6}{2}R = 3R$ |

<!-- src: PH-C10#p023t1; type: direct; note: 各 C_{V,m} 值为原文直述；自由度 i 列由本页关系 C_{V,m}=(i/2)R 一步反推，属 one-step-inferred -->

### 常见气体在 0°C 下定体摩尔热容的实验测定值

表中数值为定体摩尔热容与气体常量之比 $C_{V,m}/R$（无量纲），测定温度为 $0\,^\circ\mathrm{C}$。 <!-- src: PH-C10#p024t1; type: compressed -->

单原子分子气体：

| 气体 | He | Ne | Ar | Kr | Xe | N |
| --- | --- | --- | --- | --- | --- | --- |
| $C_{V,m}/R$ | 1.49 | 1.55 | 1.50 | 1.47 | 1.51 | 1.49 |
<!-- src: PH-C10#p024t1; type: direct -->

双原子分子气体：

| 气体 | H₂ | O₂ | N₂ | CO | NO | Cl₂ |
| --- | --- | --- | --- | --- | --- | --- |
| $C_{V,m}/R$ | 2.53 | 2.55 | 2.49 | 2.49 | 2.57 | 3.02 |
<!-- src: PH-C10#p024t1; type: direct -->

多原子分子气体：

| 气体 | CO₂ | H₂O | CH₄ | C₂H₄ | C₃H₆ | NH₃ |
| --- | --- | --- | --- | --- | --- | --- |
| $C_{V,m}/R$ | 3.24 | 3.01 | 3.16 | 4.01 | 6.17 | 3.42 |

<!-- src: PH-C10#p024t1; type: direct -->

### 不同温度下 H₂ 的定体摩尔热容

曲线图：横轴为 $T/\mathrm{K}$（对数刻度，标度 20、50、100、200、500、1000、2000、5000、10000），纵轴为 $C_{V,m}/R$（标度 1、2、3、4，并在 $3/2$、$5/2$、$7/2$ 处画水平虚线）。曲线随温度升高呈阶梯状上升，依次出现三个平台，分别标注为「平动」（约 $3/2$）、「转动」（约 $5/2$）、「振动」（趋于 $7/2$）；曲线旁标注「H₂气」。 <!-- src: PH-C10#p025g1; type: direct -->

量子效应：分子存在能级，在能量足够大时才能激发出相应的自由度。 <!-- src: PH-C10#p025; type: direct -->

- 低温下定体摩尔热容为 $\dfrac{3}{2}R$，表现为仅有整体平动。 <!-- src: PH-C10#p025; type: direct -->
- 常温下定体摩尔热容转变为 $\dfrac{5}{2}R$，激发出转动自由度。 <!-- src: PH-C10#p025; type: direct -->
- 高温下定体摩尔热容转变为 $\dfrac{7}{2}R$，激发出振动自由度。 <!-- src: PH-C10#p025; type: direct -->

### 2. 等温过程

- 特征：温度 $T = \text{恒量}$。 <!-- src: PH-C10#p026; type: direct -->
- 等温过程方程：$pV = C$。 <!-- src: PH-C10#p026; type: direct -->
- 内能不变：$\mathrm{d}E = 0$。 <!-- src: PH-C10#p026; type: direct -->
- 由热力学第一定律得：$\delta Q_T = \delta A$（吸收的热全部转化为对外做功）。 <!-- src: PH-C10#p026; type: direct -->
- p–V 图（等温线）：为一条下降曲线，过程由 $(V_1, p_1, T_1)$ 到 $(V_2, p_2, T_1)$（等温膨胀，$V$ 增大、$p$ 减小）。 <!-- src: PH-C10#p026g1; type: direct -->

做功（用理想气体状态方程 $pV = \dfrac{m}{M}RT$ 代入 $A = \displaystyle\int_{V_1}^{V_2} p\,\mathrm{d}V$）：

$$
A = \int_{V_1}^{V_2} \frac{m}{M} RT \, \frac{\mathrm{d}V}{V} = \frac{m}{M} RT \ln\frac{V_2}{V_1} = \frac{m}{M} RT \ln\frac{p_1}{p_2}
$$


<!-- src: PH-C10#p026; type: direct -->

热量等于做功：

$$
Q = A = \frac{m}{M} RT \ln\frac{V_2}{V_1} = \frac{m}{M} RT \ln\frac{p_1}{p_2}
$$


<!-- src: PH-C10#p027; type: direct -->

### 3. 等压过程

- 特征：压强 $p = \text{恒量}$。 <!-- src: PH-C10#p027; type: direct -->
- 等压过程方程：$p = C$。 <!-- src: PH-C10#p027; type: direct -->
- $\mathrm{d}p = 0$。 <!-- src: PH-C10#p027; type: direct -->
- 热力学第一定律：$\delta Q_p = \mathrm{d}E + p\,\mathrm{d}V$。 <!-- src: PH-C10#p027; type: direct -->
- p–V 图（等压线）：为一条水平直线，过程由 $(V_1, p_1)$ 到 $(V_2, p_1)$。 <!-- src: PH-C10#p027g1; type: direct -->

#### 等压过程的热量与内能

- 定压摩尔热容定义：$C_{p,m} = \left(\dfrac{\delta Q_m}{\mathrm{d}T}\right)_p \;\Rightarrow\; \delta Q_{p,m} = C_{p,m}\,\mathrm{d}T$。 <!-- src: PH-C10#p028; type: direct -->
- 热量微元：$\delta Q_p = \dfrac{m}{M} C_{p,m}\,\mathrm{d}T$。 <!-- src: PH-C10#p028; type: direct -->
- 全过程吸热：

$$
Q_p = \int_{T_1}^{T_2} \frac{m}{M} C_{p,m}\,\mathrm{d}T = \frac{m}{M} C_{p,m}(T_2 - T_1)
$$


<!-- src: PH-C10#p028; type: direct -->

- 内能变化：$\mathrm{d}E = \dfrac{m}{M} C_{V,m}\,\mathrm{d}T \;\Rightarrow\; \Delta E = \dfrac{m}{M} C_{V,m}(T_2 - T_1)$。 <!-- src: PH-C10#p028; type: direct -->
- 用自由度表示内能：$E = \dfrac{m}{M}\dfrac{i}{2}RT \;\Rightarrow\; \Delta E = \dfrac{m}{M}\dfrac{i}{2}R(T_2 - T_1)$。 <!-- src: PH-C10#p029; type: direct -->
- 等压做功（$p$ 不变，提出积分号外）：

$$
A = \int_{V_1}^{V_2} p\,\mathrm{d}V = p(V_2 - V_1) = \frac{m}{M} R(T_2 - T_1)
$$


其中用到 $pV = \dfrac{m}{M}RT$。 <!-- src: PH-C10#p029; type: direct -->

#### 迈耶公式

推导：由定压摩尔热容定义出发，对 1 mol 气体

$$
C_{p,m} = \left(\frac{\delta Q_m}{\mathrm{d}T}\right)_p = \frac{\mathrm{d}E_m + p\,\mathrm{d}V_m}{\mathrm{d}T} = \frac{\mathrm{d}E_m}{\mathrm{d}T} + p\frac{\mathrm{d}V_m}{\mathrm{d}T}
$$


代入 $\mathrm{d}E_m = C_{V,m}\,\mathrm{d}T$ 与 $p\,\mathrm{d}V_m = R\,\mathrm{d}T$，得迈耶公式：

$$
C_{p,m} = C_{V,m} + R
$$


<!-- src: PH-C10#p029; ref: 迈耶公式; type: direct -->

#### 比热容比

- 由迈耶公式与 $C_{V,m} = \dfrac{i}{2}R$：

$$
C_{p,m} = C_{V,m} + R = \frac{i}{2}R + R = \frac{i+2}{2}R, \qquad C_{V,m} = \frac{i}{2}R
$$


<!-- src: PH-C10#p030; type: direct -->

- 热容比（比热容比）定义：

$$
\gamma = \frac{C_{p,m}}{C_{V,m}} = \frac{i+2}{i}
$$


<!-- src: PH-C10#p030; type: direct -->

- 各类理想气体的 $\gamma$ 值：

| 气体类型 | 自由度 $i$ | $\gamma$ |
| --- | --- | --- |
| 单原子气体 | 3 | 1.67 |
| 刚性双原子气体 | 5 | 1.4 |
| 刚性多原子气体 | 6 | 1.33 |

<!-- src: PH-C10#p030t1; type: direct -->

### 4. 绝热过程

- 定义：系统始终不与外界交换热量的过程。 <!-- src: PH-C10#p031; type: direct -->
- 第一定律：$\delta Q = 0$，故 $0 = \delta A + \mathrm{d}E$，即 $\mathrm{d}E = -\delta A$，$\Delta E = -A$（对外做功完全由内能减少提供）。 <!-- src: PH-C10#p031; type: direct -->

#### 绝热过程方程（三式）

配合理想气体状态方程 $pV = \dfrac{m}{M}RT$，三式可相互转换：

$$
pV^{\gamma} = C_1, \qquad TV^{\gamma-1} = C_2, \qquad p^{\gamma-1}T^{-\gamma} = C_3
$$


p–V 图上绝热线为一条下降曲线。 <!-- src: PH-C10#p031; type: direct -->

#### $pV^{\gamma}=C_1$ 的推导

由 $\mathrm{d}E = -\delta A$ 出发：

$$
\frac{m}{M} C_{V,m}\,\mathrm{d}T = -p\,\mathrm{d}V \;\Rightarrow\; \frac{m}{M}\,\mathrm{d}T = -\frac{p\,\mathrm{d}V}{C_{V,m}}
$$


对状态方程 $pV = \dfrac{m}{M}RT$ 微分：$p\,\mathrm{d}V + V\,\mathrm{d}p = \dfrac{m}{M} R\,\mathrm{d}T$。代入上式并用迈耶公式 $R = C_{p,m} - C_{V,m}$：

$$
p\,\mathrm{d}V + V\,\mathrm{d}p = -\frac{R\,p\,\mathrm{d}V}{C_{V,m}} = -\frac{(C_{p,m} - C_{V,m})\,p\,\mathrm{d}V}{C_{V,m}}
$$


<!-- src: PH-C10#p032; type: direct -->

整理：

$$
C_{V,m}(p\,\mathrm{d}V + V\,\mathrm{d}p) = (C_{V,m} - C_{p,m})\,p\,\mathrm{d}V
$$


$$
C_{V,m}\,V\,\mathrm{d}p + C_{p,m}\,p\,\mathrm{d}V = 0
$$


引入 $\gamma = \dfrac{C_{p,m}}{C_{V,m}}$，化为：

$$
\frac{\mathrm{d}p}{p} = -\gamma\frac{\mathrm{d}V}{V}
$$


两边积分：$\ln p = -\gamma \ln V + C$，即 $\ln pV^{\gamma} = C$，故 $pV^{\gamma} = C_1$。 <!-- src: PH-C10#p033; type: direct -->

#### 绝热过程的内能变化与做功

内能变化：

$$
\Delta E = \frac{m}{M}\frac{i}{2}R(T_2 - T_1) = \frac{m}{M} C_{V,m}(T_2 - T_1), \qquad E = \frac{m}{M}\frac{i}{2}RT, \qquad \Delta E = -A
$$


<!-- src: PH-C10#p034; type: direct -->

做功（由 $pV^{\gamma} = C_1$ 得 $p = C_1 V^{-\gamma}$）：

$$
A = \int_{V_1}^{V_2} p\,\mathrm{d}V = \int_{V_1}^{V_2} C_1 V^{-\gamma}\,\mathrm{d}V = C_1\frac{V_2^{1-\gamma} - V_1^{1-\gamma}}{1-\gamma} = \frac{p_2 V_2 - p_1 V_1}{1-\gamma} = \frac{m}{M}\frac{R}{1-\gamma}(T_2 - T_1)
$$


末步用到 $pV = \dfrac{m}{M}RT$。 <!-- src: PH-C10#p034; type: direct -->

#### 绝热线和等温线的比较

绝热过程方程 $pV^{\gamma} = C_1$ 微分：

$$
V^{\gamma}\,\mathrm{d}p + \gamma\, pV^{\gamma-1}\,\mathrm{d}V = 0 \;\Rightarrow\; V\,\mathrm{d}p + \gamma\, p\,\mathrm{d}V = 0 \;\Rightarrow\; \frac{\mathrm{d}p}{\mathrm{d}V} = -\gamma\frac{p}{V}, \quad \gamma > 1
$$


<!-- src: PH-C10#p035; type: direct -->

等温过程方程 $pV = C_2$ 微分：

$$
V\,\mathrm{d}p + p\,\mathrm{d}V = 0 \;\Rightarrow\; \frac{\mathrm{d}p}{\mathrm{d}V} = -\frac{p}{V}
$$


<!-- src: PH-C10#p035; type: direct -->

结论：在等温线和绝热线的交点 $A$ 处（坐标 $(V_A, p_A)$），绝热线斜率的绝对值大于等温线斜率的绝对值（两者相差因子 $\gamma > 1$），即绝热线更陡。 <!-- src: PH-C10#p035g1; type: direct -->

- 在同一张 $p$-$V$ 图上画出等温线（dark-blue 标注"等温线"）与绝热线（orange 标注"绝热线"）两族曲线；纵轴为 $p/(10^5\,\text{Pa})$，横轴为 $V/\text{m}^3$。 <!-- src: PH-C10#p036g1; type: direct -->
- 图中标出 200 K、400 K、800 K、1600 K 四个温度，对应的等温线离原点越远、温度越高。 <!-- src: PH-C10#p036g1; type: direct -->
- 核心结论：在等温线与绝热线的交点处，绝热线斜率的绝对值【大于】等温线斜率的绝对值，即同一点处绝热线比等温线更陡。 <!-- src: PH-C10#p036; type: direct -->

#### 例题：用面积表示准静态过程的 $A$、$Q$、$\Delta E$

- 题型：一定质量理想气体经准静态过程由 $A$ 到 $B$，要求用 $p$-$V$ 图上的面积表示该过程的功 $A$、吸热 $Q$ 与内能增量 $\Delta E$。 <!-- src: PH-C10#p037ex; type: direct -->
- 功用过程曲线下面积表示：$A=\displaystyle\int_A^B p\,\mathrm{d}V=S_{ABCDA}$（$A$ 在体积 $V_D$ 处、$B$ 在体积 $V_C$ 处，即过程路径 $A\to B$ 下方、$V$ 从 $D$ 到 $C$ 的面积）。 <!-- src: PH-C10#p037ex; type: direct -->
- 辅助构造：过 $A$ 作等温线 $T_A$，过 $B$ 作绝热线 $I_B$，二者交于 $G$（$G$ 位于体积 $V_F$ 处）。图中等温线 $T_A$ 为蓝色、绝热线 $I_B$ 为绿色、实际过程曲线 $A\to B$ 为黑色（实际过程既非等温也非绝热，等温线与绝热线只作辅助）。 <!-- src: PH-C10#p037ex; type: direct -->
- 求 $\Delta E$ 的技巧：内能是状态量（理想气体只随温度变），$A$ 与 $G$ 在同一条等温线 $T_A$ 上，故 $E_A=E_G$，从而 $\Delta E_{A\to B}=E_B-E_A=E_B-E_G$。 <!-- src: PH-C10#p037ex; type: one-step-inferred -->
- 沿绝热线 $G\to B$ 有 $Q=0$，由第一定律 $Q=\Delta E+S_{GBCFG}=0$，得 $-\Delta E=S_{GBCFG}$，即 $\Delta E=-S_{GBCFG}$（$S_{GBCFG}$ 为绝热线 $G\to B$ 下方、$V$ 从 $F$ 到 $C$ 的面积）。 <!-- src: PH-C10#p037ex; type: direct -->
- 合成结果：$Q=A+\Delta E=S_{ABCDA}-S_{GBCFG}$。 <!-- src: PH-C10#p037ex; type: direct -->
- 可迁移要点：利用 $E$ 仅依赖温度的性质，把 $A\to B$ 等效为"沿等温线到 $G$、再沿绝热线到 $B$"，从而用曲线下面积分别表示功与内能变化。 <!-- src: PH-C10#p037ex; type: compressed -->

### 5. 多方过程

#### 定义

- 过程方程：$pV^{n}=C_1$，其中 $n$ 称为多方指数，$C_1$ 为常量。 <!-- src: PH-C10#p038; type: direct -->
- 多方过程的摩尔热容：$C_{n,m}=\left(\dfrac{\delta Q_m}{\mathrm{d}T}\right)_n$。 <!-- src: PH-C10#p038; type: direct -->

#### 过程方程 $pV^{n}=C_1$ 的推导

- 第一定律（热量按多方摩尔热容写出）：$\delta Q=\mathrm{d}E+\delta A$，其中 $\delta Q_m=C_{n,m}\,\mathrm{d}T$，$\delta Q=\dfrac{m}{M}C_{n,m}\,\mathrm{d}T$。 <!-- src: PH-C10#p038; type: direct -->
- 代入 $\mathrm{d}E=\dfrac{m}{M}C_{V,m}\,\mathrm{d}T$、$\delta A=p\,\mathrm{d}V$，得 $\dfrac{m}{M}C_{n,m}\,\mathrm{d}T=\dfrac{m}{M}C_{V,m}\,\mathrm{d}T+p\,\mathrm{d}V$。 <!-- src: PH-C10#p038; type: direct -->
- 状态方程 $pV=\dfrac{m}{M}RT$ 微分：$p\,\mathrm{d}V+V\,\mathrm{d}p=\dfrac{m}{M}R\,\mathrm{d}T$。 <!-- src: PH-C10#p038; type: direct -->
- 上式两端乘 $R$：$\dfrac{m}{M}C_{n,m}R\,\mathrm{d}T=\dfrac{m}{M}C_{V,m}R\,\mathrm{d}T+Rp\,\mathrm{d}V$；并用迈耶关系 $C_{p,m}=C_{V,m}+R$。 <!-- src: PH-C10#p039; type: direct -->
- 用 $\dfrac{m}{M}R\,\mathrm{d}T=p\,\mathrm{d}V+V\,\mathrm{d}p$ 替换，并以 $R=C_{p,m}-C_{V,m}$ 代入：$C_{n,m}(p\,\mathrm{d}V+V\,\mathrm{d}p)=C_{V,m}(p\,\mathrm{d}V+V\,\mathrm{d}p)+(C_{p,m}-C_{V,m})p\,\mathrm{d}V$。 <!-- src: PH-C10#p039; type: direct -->
- 整理右端得 $C_{n,m}(p\,\mathrm{d}V+V\,\mathrm{d}p)=C_{V,m}V\,\mathrm{d}p+C_{p,m}p\,\mathrm{d}V$。 <!-- src: PH-C10#p039; type: direct -->
- 移项：$(C_{n,m}-C_{p,m})p\,\mathrm{d}V=(C_{V,m}-C_{n,m})V\,\mathrm{d}p$，即 $\left(\dfrac{C_{n,m}-C_{p,m}}{C_{V,m}-C_{n,m}}\right)\dfrac{\mathrm{d}V}{V}=\dfrac{\mathrm{d}p}{p}$。 <!-- src: PH-C10#p039; type: direct -->
- 改写为 $\dfrac{\mathrm{d}p}{p}=-\left(\dfrac{C_{n,m}-C_{p,m}}{C_{n,m}-C_{V,m}}\right)\dfrac{\mathrm{d}V}{V}$，定义多方指数 $n=\dfrac{C_{n,m}-C_{p,m}}{C_{n,m}-C_{V,m}}$，得 $\dfrac{\mathrm{d}p}{p}=-n\dfrac{\mathrm{d}V}{V}$。 <!-- src: PH-C10#p040; type: direct -->
- 两边积分：$\ln p=-n\ln V+C\;\Rightarrow\;\ln(pV^{n})=C\;\Rightarrow\;pV^{n}=C_1$。 <!-- src: PH-C10#p040; type: direct -->

#### 多方摩尔热容公式

- $C_{n,m}=\dfrac{nC_{V,m}-C_{p,m}}{n-1}=\dfrac{n-\gamma}{n-1}\,C_{V,m}$，其中 $\gamma=C_{p,m}/C_{V,m}$（即 $C_{p,m}=\gamma C_{V,m}$）。 <!-- src: PH-C10#p040; type: direct -->

#### 多方过程的功、内能与热量

- 由 $pV^{n}=C_1$ 求功：$A=\displaystyle\int_{V_1}^{V_2}p\,\mathrm{d}V=\int_{V_1}^{V_2}\dfrac{C_1}{V^{n}}\,\mathrm{d}V=C_1\dfrac{V_2^{\,1-n}-V_1^{\,1-n}}{1-n}=\dfrac{p_2V_2-p_1V_1}{1-n}$（适用于 $n\neq1$）。 <!-- src: PH-C10#p041; type: direct -->
- 内能增量：$\Delta E=\dfrac{m}{M}C_{V,m}(T_2-T_1)$。 <!-- src: PH-C10#p041; type: direct -->
- 吸热：$Q=A+\Delta E=\dfrac{p_2V_2-p_1V_1}{1-n}+\dfrac{m}{M}C_{V,m}(T_2-T_1)$。 <!-- src: PH-C10#p041; type: direct -->

#### 多方过程的特例

- 基本关系回顾：$pV^{n}=C_1$，$n=\dfrac{C_{n,m}-C_{p,m}}{C_{n,m}-C_{V,m}}$，$C_{n,m}=\dfrac{n-\gamma}{n-1}C_{V,m}$。 <!-- src: PH-C10#p042; type: direct -->

下表为四种特例（取不同 $n$ 时多方过程退化为常见过程）：

| 多方摩尔热容 $C_{n,m}$ | 多方指数 $n$ | 过程方程 | 过程名称 |
| --- | --- | --- | --- |
| $C_{n,m}=C_{p,m}$ | $n=0$ | $p=C_1$ | 等压过程 |
| $C_{n,m}=C_{V,m}$ | $n\to\infty$ | $V=C_2$ | 等体过程 |
| $C_{n,m}\to\infty$ | $n=1$ | $pV=C_3$ | 等温过程 |
| $C_{n,m}=0$ | $n=\gamma$ | $pV^{\gamma}=C_4$ | 绝热过程 |

<!-- src: PH-C10#p042t1; type: direct -->

#### 例题：等压加热单原子理想气体

- 题设：侧面与活塞均绝热的气缸内储 1 mol 单原子理想气体，初温 $T_1=273\,\text{K}$；活塞面积 $S=0.02\,\text{m}^2$、质量 $100\,\text{kg}$，活塞上方为大气；活塞初始停在 $l_1=0.2\,\text{m}$；自气缸底部缓缓加热使气体膨胀到 $l_2=0.4\,\text{m}$，求气体吸热 $Q$ 与内能变化 $\Delta E$。 <!-- src: PH-C10#p043ex; type: direct -->
- 关键判断：原文标为等压过程；其物理依据为活塞上方大气压与活塞自重共同维持气体压强，过程中两者不变，故压强 $p$ 恒定。 <!-- src: PH-C10#p043ex; type: compressed -->
- 体积：$V_1=l_1S=0.2\times0.02=0.004\,\text{m}^3$，$V_2=l_2S=0.4\times0.02=0.008\,\text{m}^3$，故 $V_2=2V_1$。 <!-- src: PH-C10#p043ex; type: direct -->
- 温度：由 $pV_1=RT_1$、$p\cdot2V_1=RT_2$（$p$ 恒定，1 mol）得 $\dfrac{T_1}{T_2}=\dfrac12$，即 $T_2=2T_1=2\times273\,\text{K}$；故 $\Delta T=T_2-T_1=T_1=273\,\text{K}$。 <!-- src: PH-C10#p043ex; type: direct -->
- 内能变化（单原子 $C_V=\tfrac32 R$）：$\Delta E=C_V\Delta T=\dfrac32R\Delta T=3403\,\text{J}$。 <!-- src: PH-C10#p043ex; type: direct -->
- 吸热（等压，单原子 $C_p=\tfrac52 R$）：$Q_p=C_p\Delta T=\dfrac52R\Delta T=5671\,\text{J}$。 <!-- src: PH-C10#p043ex; type: direct -->
- 易错点：内能增量只随温度变，用 $C_V$ 计算（即使过程为等压）；而等压吸热须用 $C_p$；体积比即温度比是恒压的直接结论。 <!-- src: PH-C10#p043ex; type: compressed -->

### 例题：1 mol 单原子理想气体沿直线 ab 的准静态过程

#### 题设与状态参量

1 mol 单原子理想气体，由状态 a 经一条 $p$-$V$ 图上的直线段 ab 准静态地到达状态 b，求：（1）功 $A$、内能变 $\Delta E$、热量 $Q$；（2）过程中的最高温度；（3）气体吸热放热的具体情况。 <!-- src: PH-C10#p044; type: direct -->

状态坐标（由 $p$-$V$ 图读出，$p$ 轴单位 $1\times10^{5}\,\mathrm{Pa}$，$V$ 轴单位 $10^{-3}\,\mathrm{m^3}$）：

- 状态 a：$V_a = 10\times10^{-3}\,\mathrm{m^3}$，$p_a = 1.5\times10^{5}\,\mathrm{Pa}$
- 状态 b：$V_b = 30\times10^{-3}\,\mathrm{m^3}$，$p_b = 0.5\times10^{5}\,\mathrm{Pa}$

<!-- src: PH-C10#p044g1; type: direct -->

直线 ab 的过程方程：$p = 2 - \dfrac{V}{20}$（其中 $p$ 以 $10^{5}\,\mathrm{Pa}$ 计、$V$ 以 $10^{-3}\,\mathrm{m^3}$ 计）。 <!-- src: PH-C10#p044; type: direct -->

#### (1) 功 A、内能变 ΔE、热量 Q

体积功（直线段下方面积，由过程方程沿 $V$ 从 $10$ 到 $30$ 积分）：

$$
A = \int_{10}^{30} p\,\mathrm{d}V = \int_{10}^{30}\left(2 - \frac{V}{20}\right)\mathrm{d}V = 2000\,\mathrm{J}
$$


<!-- src: PH-C10#p044; type: direct -->

由理想气体物态方程 $pV = \dfrac{m}{M}RT$，本题 $n=1\,\mathrm{mol}$，故 $pV=RT$。 <!-- src: PH-C10#p044; type: direct -->

由 $p_a V_a = p_b V_b$，两端点温度相等：$T_a = T_b = 180.5\,\mathrm{K}$。 <!-- src: PH-C10#p044; type: direct -->

因始末态温度相等，内能变为零：$\Delta E = C_{V,m}\,\Delta T = 0$。 <!-- src: PH-C10#p044; type: direct -->

由热力学第一定律：$Q = \Delta E + A = 2000\,\mathrm{J}$（净吸热）。 <!-- src: PH-C10#p044; type: direct -->

#### (2) 过程中的最高温度

方法：作一条与直线 ab 相切的等温线，切点记为 c；切点 c 处对应直线 ab 上的最高温度。 <!-- src: PH-C10#p045; type: direct -->

直线 ab 的斜率：$\dfrac{\mathrm{d}p}{\mathrm{d}V} = \dfrac{\mathrm{d}}{\mathrm{d}V}\left(2 - \dfrac{V}{20}\right) = -\dfrac{1}{20}$。 <!-- src: PH-C10#p045; type: direct -->

等温线（$pV=RT$，$T$ 固定）的斜率：$\dfrac{\mathrm{d}p}{\mathrm{d}V} = -\dfrac{p}{V} = -\dfrac{\,2 - \dfrac{V}{20}\,}{V}$。令其等于直线斜率 $-\dfrac{1}{20}$，解得切点： <!-- src: PH-C10#p045; type: direct -->

$$
V_c = 20\times10^{-3}\,\mathrm{m^3},\qquad p_c = 1\times10^{5}\,\mathrm{Pa}
$$


<!-- src: PH-C10#p045; type: direct -->

最高温度：$T_{\max} = \dfrac{p_c V_c}{R} = 241\,\mathrm{K}$。 <!-- src: PH-C10#p045; type: direct -->

另一等价求法（直接对温度求极值）：把过程方程代入 $pV=RT$ 得

$$
\left(2 - \frac{V}{20}\right)V = RT \quad\Longrightarrow\quad T = \frac{2V}{R} - \frac{1}{20}\frac{V^2}{R}
$$


<!-- src: PH-C10#p046; type: direct -->

$$
\frac{\mathrm{d}T}{\mathrm{d}V} = \left(1 - \frac{V}{20}\right)\frac{2}{R}
$$


<!-- src: PH-C10#p046; type: direct -->

令 $\dfrac{\mathrm{d}T}{\mathrm{d}V}=0$ 得 $V = V_c = 20$（即 $20\times10^{-3}\,\mathrm{m^3}$）。 <!-- src: PH-C10#p046; type: direct -->

温度的升降分界：

- 当 $V < V_c$ 时 $\dfrac{\mathrm{d}T}{\mathrm{d}V} > 0$（温度随体积增大而升高）
- 当 $V > V_c$ 时 $\dfrac{\mathrm{d}T}{\mathrm{d}V} < 0$（温度随体积增大而降低）

<!-- src: PH-C10#p046; type: direct -->

故此直线上 $c(p_c, V_c)$ 是升温、降温的分界点。 <!-- src: PH-C10#p046; type: direct -->

#### (3) 气体吸热放热的具体情况

总判据：$Q = \Delta E + A$。 <!-- src: PH-C10#p047; type: direct --> 沿 ab 体积单调增大（$V:10\to30$，单位 $10^{-3}\,\mathrm{m^3}$），故全过程各小段 $A>0$（气体对外做功）。 <!-- src: PH-C10#p047; type: one-step-inferred -->

##### 直线段 ac

气体对外做功（$A>0$），且温度升高（$\Delta E>0$），故必然吸热。 <!-- src: PH-C10#p047; type: direct -->

##### 确定吸放热分界点 d（绝热线相切法）

作一条与直线 ab 相切的绝热线，切点记为 d。 <!-- src: PH-C10#p047; type: direct -->

绝热线（准静态绝热过程）的斜率：$\dfrac{\mathrm{d}p}{\mathrm{d}V} = -\gamma\dfrac{p}{V} = -\gamma\dfrac{\,2-\dfrac{V}{20}\,}{V}$。令其等于直线斜率 $-\dfrac{1}{20}$。 <!-- src: PH-C10#p047; type: direct -->

单原子理想气体 $\gamma = \dfrac{5}{3}$，代入得 $\dfrac{5}{3}\cdot\dfrac{\,2-\dfrac{V}{20}\,}{V} = \dfrac{1}{20}$，解得切点： <!-- src: PH-C10#p047; type: direct -->

$$
p_d = 0.75\times10^{5}\,\mathrm{Pa},\qquad V_d = 25\times10^{-3}\,\mathrm{m^3}
$$


<!-- src: PH-C10#p047; type: direct -->

##### 用几何比较法判断各段吸放热

直线段 cd：与过 c 点的绝热线 cm 比较，d 点在该绝热线上方。沿 cd 气体对外做功多、温度下降少（$\Delta E<0$、$A>0$），故吸热。 <!-- src: PH-C10#p048; type: direct -->

直线段 db：与过 d 点的绝热线 dn 比较，b 点在该绝热线下方。沿 db 气体对外做功少、温度下降多，故放热。 <!-- src: PH-C10#p048; type: direct -->

##### 用 δQ/dV 解析法确认分界点 d

由第一定律微分式与物态方程：

$$
\delta Q = C_{V,m}\,\mathrm{d}T + p\,\mathrm{d}V,\qquad p\,\mathrm{d}V + V\,\mathrm{d}p = R\,\mathrm{d}T
$$


<!-- src: PH-C10#p049; type: direct -->

将 $\mathrm{d}T = \dfrac{p\,\mathrm{d}V + V\,\mathrm{d}p}{R}$ 代入：

$$
\delta Q = C_{V,m}\frac{p\,\mathrm{d}V + V\,\mathrm{d}p}{R} + p\,\mathrm{d}V
$$


<!-- src: PH-C10#p049; type: direct -->

再用过程方程 $p = 2 - \dfrac{V}{20}$（故 $\mathrm{d}p = -\dfrac{1}{20}\mathrm{d}V$）代入：

$$
\delta Q = C_{V,m}\frac{\left(2-\dfrac{V}{20}\right) + V\left(-\dfrac{1}{20}\right)}{R}\mathrm{d}V + \left(2-\frac{V}{20}\right)\mathrm{d}V
$$


<!-- src: PH-C10#p049; type: direct -->

$$
= \left[\,2\left(\frac{C_{V,m}}{R}+1\right) - \frac{V}{20}\left(\frac{2C_{V,m}}{R}+1\right)\right]\mathrm{d}V = \left[5 - \frac{V}{5}\right]\mathrm{d}V
$$


其中单原子理想气体 $C_{V,m} = \dfrac{3}{2}R$。 <!-- src: PH-C10#p049; type: direct -->

于是 $\dfrac{\delta Q}{\mathrm{d}V} = 5 - \dfrac{V}{5}$。令 $\dfrac{\delta Q}{\mathrm{d}V} = 0$ 得 $V = V_d = 25\times10^{-3}\,\mathrm{m^3}$。 <!-- src: PH-C10#p049; type: direct -->

吸放热分界：

- 当 $V < V_d$ 时 $\dfrac{\delta Q}{\mathrm{d}V} > 0$（吸热）
- 当 $V > V_d$ 时 $\dfrac{\delta Q}{\mathrm{d}V} < 0$（放热）

<!-- src: PH-C10#p049; type: direct -->

故此直线上 $d(p_d, V_d)$ 是吸热、放热的分界点。 <!-- src: PH-C10#p049; type: direct -->

##### 结论汇总

沿直线 ab（体积从 $10$ 到 $30$，依次经过 $V_c=20$、$V_d=25$，单位 $10^{-3}\,\mathrm{m^3}$）：

- 直线段 ac：吸热
- 直线段 cd：吸热
- 直线段 db：放热

<!-- src: PH-C10#p050; type: synthesized -->

即 $c$ 为升温/降温分界（$V_c=20\times10^{-3}\,\mathrm{m^3}$），$d$ 为吸热/放热分界（$V_d=25\times10^{-3}\,\mathrm{m^3}$）；在 c 之后虽已开始降温，但 cd 段对外做功仍超过内能减少，故仍吸热，直到 d 点之后才转为放热。 <!-- src: PH-C10#p050; type: synthesized -->

## §10.4 循环过程 卡诺循环过程

### 1. 循环过程

#### 定义

循环过程：系统经历一系列的变化过程又回到初始状态的过程。 <!-- src: PH-C10#p051; type: direct -->

火力发电的循环过程为一个工程实例：在锅炉处吸热 $Q_1$，经汽轮机对外做功 $A_1$ 带动发电机，在冷凝器处放热 $Q_2$，再经水泵输入功 $A_2$ 送回锅炉，构成闭合循环。 <!-- src: PH-C10#p051g1; type: compressed -->

#### 循环过程的特征

热力学系统经历一个循环过程后，内能不变： <!-- src: PH-C10#p052; type: direct -->

$$
\Delta E = 0
$$


<!-- src: PH-C10#p052; type: direct -->

在 $p\text{-}V$ 图上取循环 $A \to a \to B \to b \to A$（$A$ 点为 $(V_A,\,p_A)$，$B$ 点为 $(V_B,\,p_B)$，且 $V_A < V_B$）： <!-- src: PH-C10#p052g1; type: direct -->

- $AaB$ 为膨胀过程，系统做功记为 $A_a$（沿上支曲线 $a$ 由 $A$ 到 $B$，体积增大）。 <!-- src: PH-C10#p052; type: direct -->
- $BbA$ 为压缩过程，系统做功记为 $A_b$（沿下支曲线 $b$ 由 $B$ 到 $A$，体积减小）。 <!-- src: PH-C10#p052; type: direct -->

净功： <!-- src: PH-C10#p052; type: direct -->

$$
A = A_a - A_b
$$


<!-- src: PH-C10#p052; type: direct -->

在任何一个循环过程中，系统所作的净功在数值上等于 $p\text{-}V$ 图上循环曲线所包围的面积。 <!-- src: PH-C10#p052; type: direct -->

#### 正循环与逆循环

在 $p\text{-}V$ 图上循环过程按顺时针进行，称为正循环。 <!-- src: PH-C10#p053; type: direct -->

在 $p\text{-}V$ 图上循环过程按逆时针进行，称为逆循环。 <!-- src: PH-C10#p053; type: direct -->

正循环： <!-- src: PH-C10#p053; type: direct -->

- 系统吸热 $Q_1$，系统放热 $Q_2$。 <!-- src: PH-C10#p053; type: direct -->
- 由热力学第一定律得 $Q_1 - Q_2 = A$。 <!-- src: PH-C10#p053; type: direct -->
- 即：从热源净吸热，对外界做净功。 <!-- src: PH-C10#p053; type: direct -->

热机中的热力学系统称为工作物质。 <!-- src: PH-C10#p054; type: direct -->

#### 热机效率

热机效率：在一次循环过程中，工作物质对外做的净功与它从高温热源吸收的热量之比。 <!-- src: PH-C10#p054; type: direct -->

$$
\eta = \frac{A}{Q_1} = \frac{Q_1 - Q_2}{Q_1} = 1 - \frac{Q_2}{Q_1}
$$


<!-- src: PH-C10#p054; type: direct -->

### 2. 卡诺循环

#### 历史背景

1824 年，卡诺（S. Carnot，1796—1832，法国物理学家、工程师）从理论上研究了一种理想的热机循环过程。 <!-- src: PH-C10#p055; type: direct -->

- 在实践上，它为改进热机指明了方向，找到了提高热机效率的根本途径。 <!-- src: PH-C10#p055; type: direct -->
- 在理论上，它把热力学的发展引向了正确的方向，很快导致了热力学第二定律的建立。 <!-- src: PH-C10#p055; type: direct -->

#### 卡诺循环的定义

卡诺循环：热力学系统（工作物质）只与两个恒温热源交换热量的循环过程，没有另外的散热、漏气等因素存在。 <!-- src: PH-C10#p057; type: direct -->

进行卡诺循环的热机称为卡诺热机。 <!-- src: PH-C10#p057; type: direct -->

理想气体准静态卡诺循环：工作物质为理想气体、各过程为准静态过程；只与两个恒温热源交换热量；由两个等温过程和两个绝热过程组成。 <!-- src: PH-C10#p057; type: direct -->

#### 循环结构与各过程吸放热

循环由 $a \to b \to c \to d \to a$ 四个过程组成（$p\text{-}V$ 图上：$a$ 点 $(V_1,\,p_1)$，$b$ 点 $(V_2,\,p_2)$，$c$ 点 $(V_3,\,p_3)$，$d$ 点 $(V_4,\,p_4)$；$T_1$ 为上方高温等温线、$T_2$ 为下方低温等温线，$T_1 > T_2$）。配套的热机示意图：工作物质在高温热源 $T_1$ 吸热 $Q_1$、对外做功 $A$、向低温热源 $T_2$ 放热 $Q_2$。 <!-- src: PH-C10#p058g1; type: direct -->

$ab$ 过程（沿等温线 $T_1$ 膨胀，吸热）： <!-- src: PH-C10#p058; type: direct -->

$$
Q_1 = \frac{m}{M}\,R\,T_1 \ln \frac{V_2}{V_1}
$$


<!-- src: PH-C10#p058; type: direct -->

$cd$ 过程（沿等温线 $T_2$ 压缩，放热，此式 $Q_2$ 取放热量的数值，$V_3 > V_4$）： <!-- src: PH-C10#p058; type: direct -->

$$
Q_2 = \frac{m}{M}\,R\,T_2 \ln \frac{V_3}{V_4}
$$


<!-- src: PH-C10#p058; type: direct -->

$bc$ 和 $da$ 过程（绝热过程）： <!-- src: PH-C10#p058; type: direct -->

$$
Q = 0
$$


<!-- src: PH-C10#p058; type: direct -->

#### 绝热过程关系与体积比

- $b$、$c$ 间（绝热）：$T_1 V_2^{\gamma-1} = T_2 V_3^{\gamma-1}$。 <!-- src: PH-C10#p059; type: direct -->
- $d$、$a$ 间（绝热）：$T_1 V_1^{\gamma-1} = T_2 V_4^{\gamma-1}$。 <!-- src: PH-C10#p059; type: direct -->

两式相除可得体积比关系： <!-- src: PH-C10#p059; type: direct -->

$$
\frac{V_2}{V_1} = \frac{V_3}{V_4}
$$


<!-- src: PH-C10#p059; type: direct -->

#### 效率结果

将 $Q_1$、$Q_2$ 代入 $\eta = \dfrac{A}{Q_1} = 1 - \dfrac{Q_2}{Q_1}$： <!-- src: PH-C10#p059; type: direct -->

$$
\eta = 1 - \frac{T_2 \ln \dfrac{V_3}{V_4}}{T_1 \ln \dfrac{V_2}{V_1}}
$$


<!-- src: PH-C10#p059; type: direct -->

利用 $\dfrac{V_2}{V_1} = \dfrac{V_3}{V_4}$ 约去对数项，得理想气体准静态卡诺循环的效率： <!-- src: PH-C10#p059; type: compressed -->

$$
\eta = 1 - \frac{T_2}{T_1}
$$


<!-- src: PH-C10#p059; type: direct -->

理想气体准静态卡诺循环的效率仅由两热源的温度决定。 <!-- src: PH-C10#p060; type: direct -->

### 内燃机与奥托循环

#### 四冲程汽油机

不考虑化学成分的变化。 <!-- src: PH-C10#p061; type: direct -->

四冲程汽油机的工作冲程依次为： <!-- src: PH-C10#p061; type: direct -->

1. 吸气冲程 <!-- src: PH-C10#p061; type: direct -->
2. 压缩冲程 <!-- src: PH-C10#p061; type: direct -->
3. 点爆、做功冲程 <!-- src: PH-C10#p061; type: direct -->
4. 排气冲程 <!-- src: PH-C10#p061; type: direct -->

实际机的 $p$-$V$ 示意图（横轴体积在 $V_2$ 与 $V_1$ 之间）：自 $V_1$ 处吸气，沿压缩段升压至 $V_2$ 附近点燃，做功段膨胀回到 $V_1$，随后打开排气阀、排气，构成一个回路。 <!-- src: PH-C10#p061g1; type: compressed -->

#### 奥托循环（理想化模型）

将四冲程汽油机理想化为奥托循环，$p$-$V$ 图上有四个状态点 $1,2,3,4$，其中 $2$、$3$ 在体积 $V_2$ 处，$1$、$4$ 在体积 $V_1$ 处（$V_2<V_1$），循环方向为 $1\to2\to3\to4\to1$。 <!-- src: PH-C10#p061g1; type: compressed -->

各分过程： <!-- src: PH-C10#p061g1; type: synthesized -->

- $1\to2$：绝热压缩，体积 $V_1\to V_2$。 <!-- src: PH-C10#p061g1; type: synthesized -->
- $2\to3$：等容（$V_2$ 不变）升温升压，吸热 $Q_1$。 <!-- src: PH-C10#p061g1; type: synthesized -->
- $3\to4$：绝热膨胀，体积 $V_2\to V_1$。 <!-- src: PH-C10#p061g1; type: synthesized -->
- $4\to1$：等容（$V_1$ 不变）降温降压，放热 $Q_2$。 <!-- src: PH-C10#p061g1; type: synthesized -->

效率定义： <!-- src: PH-C10#p062; type: direct -->

$$
\eta = 1 - \frac{Q_2}{Q_1}
$$


两个等容过程的吸、放热（用定容摩尔热容 $C_{V,m}$）： <!-- src: PH-C10#p062; type: direct -->

$$
Q_1 = \frac{m}{M}C_{V,m}(T_3 - T_2)\qquad Q_2 = \frac{m}{M}C_{V,m}(T_4 - T_1)
$$


代入得： <!-- src: PH-C10#p062; type: direct -->

$$
\eta = 1 - \frac{T_4 - T_1}{T_3 - T_2}
$$


两个绝热过程的关系（$\gamma$ 为比热比）： <!-- src: PH-C10#p062; type: direct -->

$$
T_1 V_1^{\gamma-1} = T_2 V_2^{\gamma-1}\qquad T_3 V_2^{\gamma-1} = T_4 V_1^{\gamma-1}
$$


由此推出温度比关系： <!-- src: PH-C10#p062; type: direct -->

$$
\frac{T_1}{T_2} = \frac{V_2^{\gamma-1}}{V_1^{\gamma-1}}\qquad \frac{T_4}{T_3} = \frac{V_2^{\gamma-1}}{V_1^{\gamma-1}}\qquad \frac{T_1}{T_2} = \frac{T_4}{T_3}\qquad T_4 = \frac{T_1}{T_2}T_3
$$


最终效率： <!-- src: PH-C10#p062; type: direct -->

$$
\eta = 1 - \frac{\dfrac{T_1}{T_2}T_3 - T_1}{T_3 - T_2} = 1 - \frac{T_1 T_3 - T_1 T_2}{(T_3 - T_2)T_2} = 1 - \frac{T_1}{T_2} = 1 - \frac{V_2^{\gamma-1}}{V_1^{\gamma-1}}
$$


即奥托循环效率可写成压缩比 $\dfrac{V_1}{V_2}$ 与 $\gamma$ 的函数：$\eta = 1 - \left(\dfrac{V_2}{V_1}\right)^{\gamma-1}$。 <!-- src: PH-C10#p062; type: one-step-inferred -->

- $\dfrac{V_1}{V_2}$ 称为压缩比。 <!-- src: PH-C10#p062; type: direct -->
- 取 $\dfrac{V_1}{V_2}\approx 5$、$\gamma\approx 1.5$，则 $\eta\approx 55\%$；实际效率约为 $25\%$。 <!-- src: PH-C10#p062; type: direct -->

### 例题：AB、CD 等压与 BC、DA 绝热构成的循环效率

题设：一定量理想气体经历某一循环，其中 $AB$ 与 $CD$ 为等压过程，$BC$ 与 $DA$ 为绝热过程；已知 $B$、$C$ 两点温度分别为 $T_B$、$T_C$，求循环效率。 <!-- src: PH-C10#p063ex; type: direct -->

$p$-$V$ 图：$A$、$B$ 在高压线 $p_1$ 上（$A$ 在左、$B$ 在右），$D$、$C$ 在低压线 $p_2$ 上（$D$ 在左、$C$ 在右），循环方向 $A\to B\to C\to D\to A$。其中 $A\to B$ 为 $p_1$ 等压膨胀（吸热），$B\to C$ 绝热膨胀，$C\to D$ 为 $p_2$ 等压压缩（放热），$D\to A$ 绝热压缩。 <!-- src: PH-C10#p063g1; type: synthesized -->

吸、放热（等压过程用定压摩尔热容 $C_{p,m}$）： <!-- src: PH-C10#p063ex; type: direct -->

$$
Q_1 = \frac{m}{M}C_{p,m}(T_B - T_A)\qquad Q_2 = \frac{m}{M}C_{p,m}(T_C - T_D)
$$


$$
\eta = 1 - \frac{Q_2}{Q_1} = 1 - \frac{T_C - T_D}{T_B - T_A}
$$


求解所用关系： <!-- src: PH-C10#p064ex; type: direct -->

由 $pV = \dfrac{m}{M}RT$，等压过程中 $\dfrac{T}{V} = \dfrac{p}{\frac{m}{M}R} = \text{const.}$，故

$$
\frac{T_A}{V_A} = \frac{T_B}{V_B}\qquad \frac{T_D}{V_D} = \frac{T_C}{V_C}
$$


两个绝热过程： <!-- src: PH-C10#p064ex; type: direct -->

$$
T_A V_A^{\gamma-1} = T_D V_D^{\gamma-1}\qquad T_B V_B^{\gamma-1} = T_C V_C^{\gamma-1}
$$


联立可得： <!-- src: PH-C10#p064ex; type: direct -->

$$
\frac{T_A}{T_B} = \frac{T_D}{T_C}\qquad T_D = \frac{T_A}{T_B}T_C
$$


代入并化简，最终效率仅由 $T_B$、$T_C$ 决定： <!-- src: PH-C10#p064ex; type: direct -->

$$
\eta = 1 - \frac{T_C - \dfrac{T_A}{T_B}T_C}{T_B - T_A} = 1 - \frac{T_C T_B - T_A T_C}{(T_B - T_A)T_B} = 1 - \frac{T_C}{T_B}
$$


关键技巧：等压过程用 $T/V=\text{const}$、绝热过程用 $TV^{\gamma-1}=\text{const}$，两式联立消去未知温度 $T_A$、$T_D$，使含 $T_A$ 的项约去。 <!-- src: PH-C10#p064ex; type: compressed -->

### 正循环与热机

在 $p$-$V$ 图上循环过程按顺时针进行，称为正循环。 <!-- src: PH-C10#p065; type: direct -->

热力学系统做正循环的设备称为热机。 <!-- src: PH-C10#p065; type: direct -->

整个正循环的结果：从高温热源吸热，向低温热源放热，系统对外界做净功。 <!-- src: PH-C10#p065; type: direct -->

热机能量流向（示意）：高温热源 $T_1$ 向工质输入 $Q_1$，工质对外输出净功 $A$，并向低温热源 $T_2$ 排出 $Q_2$。 <!-- src: PH-C10#p065g1; type: compressed -->

对理想气体准静态卡诺循环，热机效率： <!-- src: PH-C10#p065; ref: 卡诺循环; type: direct -->

$$
\eta = \frac{A}{Q_1} = \frac{Q_1 - Q_2}{Q_1} = 1 - \frac{T_2}{T_1}
$$


### 逆循环

在 $p$-$V$ 图上循环过程按逆时针进行，称为逆循环。 <!-- src: PH-C10#p066; type: direct -->

整个逆循环的结果：外界对系统做净功，从低温热源吸热，向高温热源放热。 <!-- src: PH-C10#p066; type: direct -->

能量流向（示意）：外界对工质输入净功 $A$，工质从低温热源 $T_2$ 吸热 $Q_2$，向高温热源 $T_1$ 放热 $Q_1$（方向与正循环相反）。 <!-- src: PH-C10#p066g1; type: compressed -->

### 卡诺致冷机

热力学系统做逆循环的设备称为致冷机。 <!-- src: PH-C10#p067; type: direct -->

符号约定：$A$ 为外界对系统所做的净功，$Q_2$ 为系统总吸热（从低温热源），$Q_1$ 为系统总放热（向高温热源）。 <!-- src: PH-C10#p067; type: direct -->

致冷系数定义： <!-- src: PH-C10#p067; type: direct -->

$$
w = \frac{Q_2}{A} = \frac{Q_2}{Q_1 - Q_2}
$$


其中由热力学第一定律：$Q_1 - Q_2 = A$。 <!-- src: PH-C10#p067; type: direct -->

对理想气体准静态卡诺循环的逆循环，致冷系数： <!-- src: PH-C10#p068; type: direct -->

$$
w = \frac{Q_2}{A} = \frac{Q_2}{Q_1 - Q_2} = \frac{T_2}{T_1 - T_2}
$$


### 家用制冷机——冰箱、空调

家用制冷机（冰箱、空调）是致冷机的应用，分夏天与冬天两种工作方式。 <!-- src: PH-C10#p069; type: direct -->

- 夏天：机器从室内（低温侧）吸热 $Q_2$，外界输入功 $A$，向室外排出 $Q_1$（室内变凉）。 <!-- src: PH-C10#p069g1; type: compressed -->
- 冬天：机器从室外吸热 $Q_2$，外界输入功 $A$，向室内放出 $Q_1$（室内变暖）。 <!-- src: PH-C10#p069g1; type: compressed -->

## §10.5 热力学第二定律

### 热机效率与第二类永动机

热机效率：

$$
\eta = \frac{A}{Q_1} = 1 - \frac{Q_2}{Q_1}
$$


其中 $Q_1$ 为工作物质从高温热源 $T_1$ 吸收的热量，$Q_2$ 为放给低温热源 $T_2$ 的热量，$A$ 为对外界所做的有用功。 <!-- src: PH-C10#p070; type: direct -->

热机能量流向（示意）：高温热源 $T_1$ 把 $Q_1$ 传入工作物质，工作物质对外做功 $A$，并把 $Q_2$ 放给低温热源 $T_2$。 <!-- src: PH-C10#p070g1; type: direct -->

由效率表达式可得两条结论： <!-- src: PH-C10#p070; type: direct -->

- ①热机效率不能大于 1（即 $\eta \le 1$）。 <!-- src: PH-C10#p070; type: direct -->
- ②放给低温热源的热量 $Q_2$ 越小，热机效率就越接近于 1。 <!-- src: PH-C10#p070; type: direct -->

提出的问题：在理论上，热机效率是否可能等于 1？亦即在一个正循环过程中，工作物质能否把它从高温热源吸收的热量 $Q_1$ 百分之百地转变为对外界所做的有用功 $A$？ <!-- src: PH-C10#p070; type: direct --> <!-- src: PH-C10#p071; type: direct -->

#### 第二类永动机

第二类永动机：只与单一热源（高温热源 $T_1$）交换热量的热机（幻灯片标注其为「单一热源」「热机」），其 $Q_2 = 0$、$A(=Q_1)$，即不向低温热源放热、所吸热量全部用于对外做功。 <!-- src: PH-C10#p071g1; type: direct --> <!-- src: PH-C10#p072g1; type: direct -->

代入效率式 $\eta = 1 - Q_2/Q_1$，当 $Q_2 = 0$ 时得 $\eta = 1$。 <!-- src: PH-C10#p071; type: one-step-inferred -->

作为对照，理想气体准静态卡诺循环的效率为

$$
\eta = 1 - \frac{T_2}{T_1}
$$


<!-- src: PH-C10#p071; type: direct -->
两热源满足 $T_1 > T_2 > 0$，故 $\eta < 1$，即卡诺循环达不到 $\eta = 1$。 <!-- src: PH-C10#p071; type: one-step-inferred -->

### 开尔文表述（Kelvin，1851 年）

热力学第二定律的开尔文表述：第二类永动机是不可能制成的。 <!-- src: PH-C10#p072; ref: 开尔文表述; type: direct -->

等价说法：不可能从单一热源吸收热量，使之完全转化为功，而不引起其他变化。 <!-- src: PH-C10#p072; ref: 开尔文表述; type: direct -->

幻灯片以颜色强调限定语「单一热源」与「不引起其他变化」，二者不可省略。 <!-- src: PH-C10#p072; type: direct -->

### 克劳修斯表述（Clausius，1850 年）

#### 致冷机与理想致冷机

致冷机：在外界输入功 $A$ 的条件下，从低温热源 $T_2$ 吸热 $Q_2$，向高温热源 $T_1$ 放热 $Q_1$，满足

$$
A = Q_1 - Q_2
$$


<!-- src: PH-C10#p073g1; type: direct --> <!-- src: PH-C10#p075g1; type: direct -->

理想致冷机：不需外界做功（$A = 0$）即把热量 $Q$ 从低温热源 $T_2$ 传到高温热源 $T_1$。这种理想致冷机并不违背热力学第一定律。 <!-- src: PH-C10#p073g1; type: direct --> <!-- src: PH-C10#p073; type: direct -->

把这种理想致冷机与一部卡诺热机组合使用，就可以得到一部第二类永动机。 <!-- src: PH-C10#p073; type: direct -->

组合示意（理想致冷机 + 卡诺热机）：卡诺热机从 $T_1$ 取热 $Q_1$、对外做功 $A = Q_1 - Q_2$、向 $T_2$ 放热 $Q_2$；理想致冷机把同样的 $Q_2$ 从 $T_2$ 无功地送回 $T_1$。组合后的净效果（等效图）为：只与单一高温热源 $T_1$ 交换热量、把所取热量全部转化为功 $A = Q_1 - Q_2$ 的热机，即第二类永动机；低温热源 $T_2$ 净变化为零。 <!-- src: PH-C10#p074g1; type: synthesized -->

#### 克劳修斯表述的内容

克劳修斯表述：热量不可能自动地从低温物体传到高温物体。 <!-- src: PH-C10#p075; ref: 克劳修斯表述; type: direct -->

等价说法：不可能把热量从低温物体传向高温物体，而不引起其他变化。 <!-- src: PH-C10#p075; ref: 克劳修斯表述; type: direct -->

限定语「自动地」「不引起其他变化」不可省略：在外界做功的致冷机中热量可以由低温传向高温，但伴随了其他变化。 <!-- src: PH-C10#p075g1; type: one-step-inferred -->

## §10.6 热力学过程的不可逆性

### 1. 可逆过程和不可逆过程

#### 可逆过程

若在过程 $P$ 中，系统由初态 $i$ 到达末态 $f$，与此同时外界也发生了变化；如果可以使系统由末态 $f$ 回到初态 $i$，同时外界也恢复到原来的状态，则称过程 $P$ 为可逆过程。 <!-- src: PH-C10#p076; ref: 可逆过程; type: direct -->

#### 不可逆过程

若系统不能回复到初态 $i$，或者系统虽能回复到初态 $i$，但不能同时使外界恢复到原来的状态，则称过程 $P$ 为不可逆过程。 <!-- src: PH-C10#p076; ref: 不可逆过程; type: direct -->

#### 可逆过程的判据

无摩擦的准静态过程是可逆过程。 <!-- src: PH-C10#p076; type: direct -->

#### 过程的 p-V 图示

以 $p$-$V$ 图表示正文所讨论的一般过程 $P$：图中给出一条连接状态 $(V_1, p_1)$ 与状态 $(V_2, p_2)$ 的单调递减曲线（$V_2 > V_1$、$p_2 < p_1$，即体积增大、压强减小）；横轴为体积 $V$、纵轴为压强 $p$，虚线分别引向两坐标轴标出 $p_1, p_2, V_1, V_2$。 <!-- src: PH-C10#p076g1; type: direct -->

### 第二定律的实质与不可逆过程的关联性

#### 两种表述的实质

- 热力学第二定律的克劳修斯表述的实质，是指出了热传导过程的不可逆性。 <!-- src: PH-C10#p077; type: direct -->
- 热力学第二定律的开尔文表述的实质，是指出功变热过程的不可逆性。 <!-- src: PH-C10#p077; type: direct -->
- 热力学第二定律的实质在于指出：一切与热现象有关的实际宏观过程都是不可逆过程。 <!-- src: PH-C10#p077; type: direct -->

#### 不可逆过程的相互关联

自然界中各种不可逆过程都是互相关联的，由某一过程的不可逆性可以推断出另一过程的不可逆性。 <!-- src: PH-C10#p077; type: direct -->

#### 例：理想气体向真空自由膨胀

理想气体向真空自由膨胀是不可逆过程。 <!-- src: PH-C10#p077; type: direct --> <!-- src: PH-C10#p078; type: direct -->

过程示意：初态气体被隔板封闭在容器左半部、右半部为真空，状态为 $(T_1, V_1, p_1)$；抽去（打开）隔板后气体自由膨胀充满整个容器，末态为 $(T_1, V_2, p_2)$，其中 $V_2 > V_1$、$p_2 < p_1$。 <!-- src: PH-C10#p078g1; type: direct -->

结论：理想气体向真空自由膨胀，初、末两态的温度相同（均为 $T_1$）。 <!-- src: PH-C10#p078; type: direct -->

### 两种表述的等价性

#### 从开尔文表述可推断出克劳修斯表述

构造（反证）：假设克劳修斯表述不成立，即存在一台能"自动地（不需外界做功）把热量从低温热源 $T_2$ 传到高温热源 $T_1$"的装置；将它与一台常规热机组合使用。组合后的净效果（等效图）为：一台只与单一高温热源 $T_1$ 交换热量、把所取热量全部转化为功 $A = Q_1 - Q_2$ 的热机（与低温热源 $T_2$ 无热量交换），即第二类永动机——这违反开尔文表述。 <!-- src: PH-C10#p079g1; type: synthesized -->

故由开尔文表述成立，可推断出克劳修斯表述成立。 <!-- src: PH-C10#p079; type: synthesized -->

#### 从克劳修斯表述可推断出开尔文表述

构造（反证）：假设开尔文表述不成立，即存在一台只与单一高温热源 $T_1$ 交换热量、把吸收的热量全部转化为功（$A = Q_1$）的第二类永动机；用它输出的功 $A$ 去驱动一台常规致冷机（从低温热源 $T_2$ 吸热 $Q_2$、向高温热源 $T_1$ 放热 $Q_1 + Q_2$）。组合后的净效果（等效图）为：把热量 $Q_2$ 从低温热源 $T_2$ 传到高温热源 $T_1$，而不引起其他变化（无净功、$T_2$ 仅失去 $Q_2$、$T_1$ 仅得到 $Q_2$）——这违反克劳修斯表述。 <!-- src: PH-C10#p080g1; type: synthesized -->

故由克劳修斯表述成立，可推断出开尔文表述成立。 <!-- src: PH-C10#p080; type: synthesized -->

由以上两个方向的推断可知，热力学第二定律的开尔文表述与克劳修斯表述是等价的。 <!-- src: PH-C10#p079; type: one-step-inferred --> <!-- src: PH-C10#p080; type: one-step-inferred -->

### 热机分类

- 热力学第二定律的表述形式：每一个不可逆过程都可用来作为热力学第二定律的表述；热力学第二定律可以有多种不同的表述形式。 <!-- src: PH-C10#p081; type: direct -->
- 按是否产生可逆循环过程，对热机分类： <!-- src: PH-C10#p081; type: compressed -->
  - 可逆热机：产生可逆循环过程的热机。 <!-- src: PH-C10#p081; type: compressed -->
  - 卡诺热机：以理想气体准静态卡诺循环工作的热机，即可逆卡诺热机。 <!-- src: PH-C10#p081; type: compressed -->
  - 不可逆热机：不能产生可逆循环过程的热机。 <!-- src: PH-C10#p081; type: compressed -->
- 热机能流示意：高温热源（温度 $T_1$）向热机输入热量 $Q_1$，热机对外做功 $A$，并向低温热源（温度 $T_2$）放出热量 $Q_2$。 <!-- src: PH-C10#p081g1; type: direct -->

### 2. 卡诺定理

#### 卡诺定理的两条内容

- 卡诺定理(1)：在相同的高温热源与相同的低温热源之间工作的一切可逆卡诺热机，其效率都相等，且与工作物质无关。 <!-- src: PH-C10#p082; ref: 卡诺定理(1); type: direct -->

$$
\eta = 1 - \frac{T_2}{T_1}
$$


其中 $T_1$ 为高温热源温度，$T_2$ 为低温热源温度。 <!-- src: PH-C10#p082; ref: 卡诺定理(1); type: direct -->

- 卡诺定理(2)：在相同的高温热源与相同的低温热源之间工作的一切不可逆卡诺热机，其效率都不可能高于同样热源之间的可逆卡诺热机的效率。 <!-- src: PH-C10#p082; ref: 卡诺定理(2); type: direct -->

$$
\eta \le 1 - \frac{T_2}{T_1}
$$


<!-- src: PH-C10#p082; ref: 卡诺定理(2); type: direct -->

#### 推论命题：任意可逆循环效率的上界

- 命题：一个任意的可逆循环的效率，不可能大于工作于整个循环中所经历的最高温度热源与最低温度热源之间的可逆卡诺循环的效率。 <!-- src: PH-C10#p083; type: direct -->

#### 证明思路：用微小可逆卡诺循环代替任意可逆循环

- 基本思想：一个任意的可逆循环可用充分多个（$n$ 个）微小的可逆卡诺循环来代替。 <!-- src: PH-C10#p083; type: direct -->
- 几何构造：在任意可逆循环（$p\text{-}V$ 图上的闭合曲线）内作大量等温线与绝热线，把闭合曲线分割为 $n$ 个微小可逆卡诺循环。 <!-- src: PH-C10#p083g1; type: compressed -->
- 关键几何性质：相邻的两个可逆卡诺循环总有一段绝热线是重合的。 <!-- src: PH-C10#p083; type: direct -->
- 代表性单个微小可逆卡诺循环（$p\text{-}V$ 图，橙色阴影区面积 $A$ 表示该卡诺循环对外所做净功）的结构与标注： <!-- src: PH-C10#p083g2; type: direct -->
  - 四个顶点 $a(V_1,p_1)$、$b(V_2,p_2)$、$c(V_3,p_3)$、$d(V_4,p_4)$，坐标值满足 $p_1>p_2>p_4>p_3$、$V_1<V_4<V_2<V_3$。 <!-- src: PH-C10#p083g2; type: direct -->
  - $a\to b$（上边）：沿高温等温线 $T_1$，吸热 $Q_1$。 <!-- src: PH-C10#p083g2; type: direct -->
  - $b\to c$（右边）：绝热线。 <!-- src: PH-C10#p083g2; type: direct -->
  - $c\to d$（下边）：沿低温等温线 $T_2$，放热 $Q_2$。 <!-- src: PH-C10#p083g2; type: direct -->
  - $d\to a$（左边）：绝热线。 <!-- src: PH-C10#p083g2; type: direct -->
- 当 $n$ 充分多时，由各微小卡诺循环的等温线与绝热线交替构成的锯齿形折线逼近原任意可逆循环的闭合曲线。 <!-- src: PH-C10#p084g1; type: direct -->

#### 单个微小卡诺循环替代时的等价关系

- 每个微小卡诺循环由两条等温线与两条绝热线组成（$p\text{-}V$ 图局部，图中标出"等温线"（上方）与"绝热线"（两侧），点标号 $1,2,3,4,5$；原可逆曲线段（图中蓝色粗线）经过 $1,4,2$ 三点）。用经点 $1\to3\to4\to5\to2$ 的微小可逆卡诺循环替代原可逆曲线上经 $1\to4\to2$ 的一段。 <!-- src: PH-C10#p084g1; type: direct -->
- 替代时满足的等价关系： <!-- src: PH-C10#p084g1; type: direct -->
  - $S_{13452}=S_{142}$ <!-- src: PH-C10#p084g1; type: direct -->
  - $Q_{13452}=Q_{142}$ <!-- src: PH-C10#p084g1; type: direct -->
  - $Q_{345}=Q_{142}$ <!-- src: PH-C10#p084g1; type: direct -->

#### 效率比较（关键不等式）

- 记 $T_{i1}$、$T_{i2}$ 分别为第 $i$ 个微小可逆卡诺循环的高温热源温度与低温热源温度。 <!-- src: PH-C10#p085; type: direct -->
- 第 $i$ 个微小可逆卡诺循环的效率： <!-- src: PH-C10#p085; type: direct -->

$$
\eta_i = 1 - \frac{T_{i2}}{T_{i1}}
$$


- 记 $T_m$、$T_n$ 分别为整个循环中所经历的最高热源温度与最低热源温度。 <!-- src: PH-C10#p085; type: direct -->
- 工作于最高温度 $T_m$ 与最低温度 $T_n$ 两个热源之间的可逆卡诺热机的效率： <!-- src: PH-C10#p085; type: direct -->

$$
\eta_{\text{HL卡诺}} = 1 - \frac{T_n}{T_m}
$$


- 对任意选取的第 $i$ 个微小可逆卡诺循环，有 $T_{i1} \le T_m$，$T_{i2} \ge T_n$。 <!-- src: PH-C10#p085; type: direct -->
- 由此 $\dfrac{T_{i2}}{T_{i1}} \ge \dfrac{T_n}{T_m}$，故 <!-- src: PH-C10#p085; type: direct -->

$$
\eta_i = 1 - \frac{T_{i2}}{T_{i1}} \le 1 - \frac{T_n}{T_m} = \eta_{\text{HL卡诺}}
$$


#### 求和得任意可逆循环效率的上界

- 对第 $i$ 个微小可逆卡诺循环用热量表示其效率（卡诺循环 $T_{i2}/T_{i1}=Q_{i2}/Q_{i1}$），得 <!-- src: PH-C10#p086; type: direct -->

$$
1 - \frac{Q_{i2}}{Q_{i1}} \le \eta_{\text{HL卡诺}}
$$


- 移项： <!-- src: PH-C10#p086; type: direct -->

$$
Q_{i1} - Q_{i2} \le \eta_{\text{HL卡诺}}\, Q_{i1}
$$


- 对所有微小循环求和： <!-- src: PH-C10#p086; type: direct -->

$$
\sum_i Q_{i1} - \sum_i Q_{i2} \le \eta_{\text{HL卡诺}} \sum_i Q_{i1}
$$


- 两端同除以 $\sum_i Q_{i1}$： <!-- src: PH-C10#p086; type: direct -->

$$
\frac{\sum_i Q_{i1} - \sum_i Q_{i2}}{\sum_i Q_{i1}} \le \eta_{\text{HL卡诺}}
\quad\Longrightarrow\quad
1 - \frac{\sum_i Q_{i2}}{\sum_i Q_{i1}} \le \eta_{\text{HL卡诺}}
$$


- 左端 $1 - \dfrac{\sum_i Q_{i2}}{\sum_i Q_{i1}}$ 即任意可逆循环的总效率 $\eta_{\text{任意}}$，故 <!-- src: PH-C10#p086; type: one-step-inferred -->

$$
\eta_{\text{任意}} \le \eta_{\text{HL卡诺}}, \qquad \eta_{\text{任意}} \le 1 - \frac{T_n}{T_m}
$$


- 结论：任意一个可逆循环的效率 $\eta_{\text{任意}}$ 不可能大于工作于它所经历的最高温热源与最低温热源之间的卡诺循环的效率。 <!-- src: PH-C10#p086; type: direct -->

## §10.7 热力学系统的熵

### 1. 可逆卡诺循环中的热温比

可逆卡诺热机的效率（此处 $Q_1,Q_2$ 取热量的绝对值，$Q_1$ 为从高温热源吸收的热量，$Q_2$ 为向低温热源放出的热量）：

$$
\eta = 1 - \frac{Q_2}{Q_1} = 1 - \frac{T_2}{T_1}
$$


<!-- src: PH-C10#p087; type: direct -->

由上式可得（绝对值形式）：

$$
\frac{Q_1}{T_1} = \frac{Q_2}{T_2}
$$


<!-- src: PH-C10#p087; type: direct -->

把 $Q$ 视为代数量（吸热取正、放热取负）后，上式化为热温比之和为零：

$$
\frac{Q_1}{T_1} + \frac{Q_2}{T_2} = 0
$$


<!-- src: PH-C10#p087; type: compressed -->

符号约定：系统从高温热源吸取热量为正，系统向低温热源放出热量为负。 <!-- src: PH-C10#p087; type: direct -->

#### 卡诺热机能流示意

高温热源 $T_1$ 向系统输入热量 $Q_1$，系统对外做功 $A$，系统向低温热源 $T_2$ 放出热量 $Q_2$；对应 $p\text{-}V$ 图上为由两条等温线（$T_1$、$T_2$）与两条绝热线围成的卡诺循环，吸热 $Q_1$ 发生在高温等温线、放热 $Q_2$ 发生在低温等温线。 <!-- src: PH-C10#p087g1; type: direct -->

### 2. 任意可逆循环：克劳修斯等式

任意可逆循环过程可用大量微小可逆卡诺循环来逼近（在 $p\text{-}V$ 图上呈锯齿状包络）。 <!-- src: PH-C10#p088g1; type: direct -->

相邻两个可逆卡诺循环之间总有一段绝热线是重合的；图中该重合绝热段上两循环的过程方向相反，故沿该段的贡献相互抵消。 <!-- src: PH-C10#p088g2; type: direct -->

用 $n$ 个微小可逆卡诺循环逼近（每个卡诺循环含两段等温过程，共 $2n$ 段），各段热温比之和为零：

$$
\sum_{i=1}^{2n} \frac{\Delta Q_i}{T_i} = 0
$$


<!-- src: PH-C10#p088; type: direct -->

当 $n \to \infty$ 时，锯齿状包络趋于原光滑的任意可逆循环曲线，求和过渡为沿循环的积分，得克劳修斯等式：

$$
\oint \frac{\delta Q}{T} = 0 \qquad (\text{可逆过程})
$$


<!-- src: PH-C10#p089; type: direct -->

适用范围：仅对可逆循环过程成立。 <!-- src: PH-C10#p089; type: direct -->

### 3. 沿可逆过程的 $\int \delta Q / T$ 与路径无关

在任意可逆循环上取初态 $a$、末态 $b$，循环由过程 1（$a \to b$）与过程 2（$b \to a$）组成，代入克劳修斯等式：

$$
\int_a^b \frac{\delta Q}{T}\bigg|_{(\text{过程1})} + \int_b^a \frac{\delta Q}{T}\bigg|_{(\text{过程2})} = 0
$$


<!-- src: PH-C10#p090; type: direct -->

由于过程 2 可逆，反向积分变号：

$$
\int_b^a \frac{\delta Q}{T}\bigg|_{(\text{过程2})} = -\int_a^b \frac{\delta Q}{T}\bigg|_{(\text{过程2})}
$$


<!-- src: PH-C10#p090; type: direct -->

代回得两条不同可逆路径的积分相等：

$$
\int_a^b \frac{\delta Q}{T}\bigg|_{(\text{过程1})} - \int_a^b \frac{\delta Q}{T}\bigg|_{(\text{过程2})} = 0 \quad\Longrightarrow\quad \int_a^b \frac{\delta Q}{T}\bigg|_{(\text{过程1})} = \int_a^b \frac{\delta Q}{T}\bigg|_{(\text{过程2})}
$$


<!-- src: PH-C10#p090; type: direct -->

结论：沿任一可逆过程的积分 $\displaystyle\int_a^b \frac{\delta Q}{T}$ 只取决于初状态和末状态，与所经过程（路径）无关。 <!-- src: PH-C10#p091; type: direct -->

$p\text{-}V$ 图中 $a \to b$ 之间画出三条不同的可逆路径（标记 1、2、3），沿其中任一条计算 $\displaystyle\int_a^b \frac{\delta Q}{T}$ 结果都相等，体现路径无关。 <!-- src: PH-C10#p091g1; type: direct -->

这意味着热力学系统的平衡态存在一个新的状态函数，称为熵，用 $S$ 表示。 <!-- src: PH-C10#p091; type: direct -->

### 4. 熵的定义

熵在初状态 $a$、末状态 $b$ 之间的差值定义为（沿任一可逆过程）：

$$
S_b - S_a = \int_a^b \frac{\delta Q}{T} \qquad (\text{可逆过程})
$$


<!-- src: PH-C10#p091; ref: 熵的定义; type: direct -->

初状态 $a$、末状态 $b$ 的熵分别记为 $S_a$、$S_b$。在一个可逆过程中，系统从初态 $a$ 变化到末态 $b$，系统熵的增量等于初态 $a$ 与末态 $b$ 之间任意一条可逆过程 $\dfrac{\delta Q}{T}$ 的积分。 <!-- src: PH-C10#p092; type: direct -->

对于充分小的可逆过程，熵的增量（微分式）为：

$$
\mathrm{d}S = \frac{\delta Q}{T}
$$


<!-- src: PH-C10#p092; ref: 熵的微分定义; type: direct -->

### 5. 讨论

1. 当系统达到平衡态时，熵就完全确定了，与通过什么过程到达这一平衡态无关。 <!-- src: PH-C10#p093; type: direct -->

2. 计算初、末两态熵的改变时，其积分路线可以是连接这初、末两态的任一可逆过程。当系统由一个平衡态通过一不可逆过程到达另一个平衡态时，可设计一个连接同样初、末两态的任一可逆过程，计算该初、末两态熵的增量。 <!-- src: PH-C10#p093; type: direct -->

3. 熵具有可加性：对于由多个物体组成的热力学系统，该系统在某一状态的熵等于组成该系统的各物体的熵的代数和。 <!-- src: PH-C10#p093; type: direct -->

### 6. $T\text{-}S$ 图

由微分定义 $\mathrm{d}S = \dfrac{\delta Q}{T}$ 可得可逆过程的吸放热表达式：

$$
\delta Q = T\,\mathrm{d}S \qquad Q = \int_a^b T\,\mathrm{d}S
$$


<!-- src: PH-C10#p094; type: direct -->

$T\text{-}S$ 图：纵轴为温度 $T$，横轴为熵 $S$。一段可逆过程曲线下方、宽为 $\mathrm{d}S$、高为 $T$ 的窄条面积 $T\,\mathrm{d}S$ 等于该微元的热量 $\delta Q$；由 $a$ 到 $b$ 曲线下的总面积等于过程热量 $Q=\int_a^b T\,\mathrm{d}S$。 <!-- src: PH-C10#p094g1; type: direct -->

对一个可逆循环过程，图中闭合曲线标注 $Q=A$（循环净热量等于循环对外所做净功）；结合 $\delta Q = T\,\mathrm{d}S$，该闭合曲线所围面积等于循环吸收的净热量，也等于循环对外所做的净功，即 $Q = A$。 <!-- src: PH-C10#p094g2; type: one-step-inferred -->

卡诺循环在 $T\text{-}S$ 图上为矩形：上边为温度 $T_1$ 的等温吸热过程（沿 $S$ 增大方向，吸热 $Q_1$），下边为温度 $T_2$ 的等温放热过程（沿 $S$ 减小方向，放热 $Q_2$），左右两边为竖直的绝热（等熵）过程，熵变为 $\Delta S$。于是

$$
Q_1 = T_1\,\Delta S, \qquad Q_2 = T_2\,\Delta S
$$


<!-- src: PH-C10#p094g3; type: one-step-inferred -->

$$
\eta = \frac{Q_1 - Q_2}{Q_1} = \frac{T_1\,\Delta S - T_2\,\Delta S}{T_1\,\Delta S} = 1 - \frac{T_2}{T_1}
$$


<!-- src: PH-C10#p094; type: direct -->

### 计算 1 mol 理想气体由 $(T_1,V_1)$ 到 $(T_2,V_2)$ 的熵变

适用前提：1 mol 理想气体；初态 $(T_1,V_1)$ 经某一过程到达末态 $(T_2,V_2)$；假定定体摩尔热容 $C_{V,m}$ 为恒量。 <!-- src: PH-C10#p095; type: direct -->

#### 方法 1：先等体升温，再等温膨胀

路径设计：$(T_1,V_1)\xrightarrow{\text{等体升温}}(T_2,V_1)\;\;\Delta S_1$；$(T_2,V_1)\xrightarrow{\text{等温膨胀}}(T_2,V_2)\;\;\Delta S_2$；$\Delta S=\Delta S_1+\Delta S_2$。 <!-- src: PH-C10#p095; type: direct -->

等体升温段（$V$ 不变，$\delta Q=C_{V,m}\,dT$）：

$$
\Delta S_1=\int\frac{\delta Q}{T}=\int_{T_1}^{T_2}\frac{C_{V,m}\,dT}{T}=C_{V,m}\ln\frac{T_2}{T_1}
$$


<!-- src: PH-C10#p095; type: direct -->

等温膨胀段（$T=T_2$ 不变，$\delta Q=p\,dV$，$p=RT_2/V$）：

$$
\Delta S_2=\frac{1}{T_2}\int\delta Q=\frac{1}{T_2}\int p\,dV=\frac{1}{T_2}\int_{V_1}^{V_2}RT_2\,\frac{dV}{V}=R\ln\frac{V_2}{V_1}
$$


<!-- src: PH-C10#p095; type: direct -->

合并结果：

$$
\Delta S=\Delta S_1+\Delta S_2=C_{V,m}\ln\frac{T_2}{T_1}+R\ln\frac{V_2}{V_1}
$$


<!-- src: PH-C10#p096; type: direct -->

#### 方法 2：先等温膨胀，再等体升温

路径设计：$(T_1,V_1)\xrightarrow{\text{等温膨胀}}(T_1,V_2)\;\;\Delta S_1$；$(T_1,V_2)\xrightarrow{\text{等体升温}}(T_2,V_2)\;\;\Delta S_2$。 <!-- src: PH-C10#p096; type: direct -->

等温膨胀段（$T=T_1$ 不变）：

$$
\Delta S_1=\frac{1}{T_1}\int\delta Q=\frac{1}{T_1}\int p\,dV=\frac{1}{T_1}\int_{V_1}^{V_2}RT_1\,\frac{dV}{V}=R\ln\frac{V_2}{V_1}
$$


<!-- src: PH-C10#p096; type: direct -->

等体升温段：

$$
\Delta S_2=\int\frac{\delta Q}{T}=\int_{T_1}^{T_2}\frac{C_{V,m}\,dT}{T}=C_{V,m}\ln\frac{T_2}{T_1}
$$


<!-- src: PH-C10#p096; type: direct -->

结果与方法 1 相同：$\Delta S=C_{V,m}\ln\dfrac{T_2}{T_1}+R\ln\dfrac{V_2}{V_1}$。 <!-- src: PH-C10#p097; type: direct -->

三种不同可逆路径给出同一熵变结果，表明该熵变只取决于初末态、与所经路径无关。 <!-- src: PH-C10#p097; type: synthesized -->

#### 方法 3：沿任意可逆路径直接积分

直接对 $dS=\dfrac{\delta Q}{T}=\dfrac{dE+p\,dV}{T}$ 积分（理想气体 $dE=C_{V,m}\,dT$，$p/T=R/V$）：

$$
\Delta S=\int\frac{\delta Q}{T}=\int_1^2\frac{dE+p\,dV}{T}=\int_{T_1}^{T_2}\frac{C_{V,m}\,dT}{T}+R\int_{V_1}^{V_2}\frac{dV}{V}=C_{V,m}\ln\frac{T_2}{T_1}+R\ln\frac{V_2}{V_1}
$$


<!-- src: PH-C10#p097; type: direct -->

### 理想气体熵变的一般公式（质量 $m$、摩尔质量 $M$）

状态方程：$pV=\dfrac{m}{M}RT$。 <!-- src: PH-C10#p098; type: direct -->

微分熵（沿可逆路径取热量微元，并用 $dE=\dfrac{m}{M}C_{V,m}\,dT$，$pdV=\dfrac{m}{M}RT\dfrac{dV}{V}$）：

$$
dS=\frac{\delta Q}{T}=\frac{dE+p\,dV}{T}=\frac{\frac{m}{M}C_{V,m}\,dT+\frac{m}{M}RT\frac{dV}{V}}{T}=\frac{m}{M}C_{V,m}\frac{dT}{T}+\frac{m}{M}R\frac{dV}{V}
$$


<!-- src: PH-C10#p098; type: direct -->

积分得总熵变：

$$
\Delta S=\int_{T_1}^{T_2}\frac{m}{M}C_{V,m}\frac{dT}{T}+\int_{V_1}^{V_2}\frac{m}{M}R\frac{dV}{V}=\frac{m}{M}C_{V,m}\ln\frac{T_2}{T_1}+\frac{m}{M}R\ln\frac{V_2}{V_1}
$$


<!-- src: PH-C10#p098; type: direct -->

注：取 $m/M=1$（1 mol）即回到前面的 $\Delta S=C_{V,m}\ln\frac{T_2}{T_1}+R\ln\frac{V_2}{V_1}$。 <!-- src: PH-C10#p098; type: one-step-inferred -->

### 例题：六过程可逆循环 ABCDEFA 求 $Q_3$、$A$、$\eta$

题设：循环 ABCDEFA 由三段等温过程 AB、CD、EF 与三段绝热过程 BC、DE、FA 交替组成（$p$-$V$ 图上 AB 在等温线 $T_1$ 上、CD 在 $T_2$ 上、EF 在 $T_3$ 上）。已知 $T_1=800\,\text{K}$、$Q_1=1600\,\text{J}$；$T_2=400\,\text{K}$、$Q_2=800\,\text{J}$；$T_3=200\,\text{K}$。求 $Q_3$、对外净功 $A$、效率 $\eta$。 <!-- src: PH-C10#p099ex; type: direct -->

关键依据——克劳修斯等式（可逆过程）：$\displaystyle\oint\frac{\delta Q}{T}=0$。 <!-- src: PH-C10#p099; type: direct -->

解法入口：可逆循环熵变 $\Delta S=0$，三段绝热过程不贡献 $\delta Q$，等价于三段等温的热温比之和为零：

$$
\frac{Q_1}{T_1}+\frac{Q_2}{T_2}+\frac{Q_3}{T_3}=0
$$


<!-- src: PH-C10#p099ex; type: direct -->

代入求得 $Q_3=-800\,\text{J}$（负号表示该等温段放热）。 <!-- src: PH-C10#p099ex; type: direct -->

对外净功（一个循环 $\Delta E=0$，$A=\sum Q$）：$A=Q_1+Q_2+Q_3=1600\,\text{J}$。 <!-- src: PH-C10#p099ex; type: direct -->

效率（分母只取吸热 $Q_1+Q_2$，$Q_3$ 为放热不计入吸热）：

$$
\eta=\frac{A}{Q_1+Q_2}=\frac{2}{3}=66.7\%
$$


<!-- src: PH-C10#p099ex; type: direct -->

### 证明：绝热线与等温线不能相交于二点

命题：在 $p$-$V$ 图上，一条绝热线与一条等温线不能相交于两点。 <!-- src: PH-C10#p100; type: direct -->

反证法设定：假设绝热线与等温线相交于两点 A 和 B。 <!-- src: PH-C10#p100; type: direct -->

图示给出两种几何情形（按绝热线相对等温线的位置区分）：左图为"绝热线在等温线下面"，右图为"绝热线在等温线上面"；两条曲线在交点 A、B 之间围成一封闭区域。 <!-- src: PH-C10#p100g1; type: direct -->

### 证明：两条绝热线不能相交

命题：两条绝热线不能相交。 <!-- src: PH-C10#p101; type: direct -->

反证法设定与构造：假设两条绝热线 A、B 相交于点"1"；再作一条等温线 C，使其与这两条绝热线分别相交于点"3"和点"2"（由此 1、2、3 构成一个闭合循环）。 <!-- src: PH-C10#p101; type: direct -->

图示给出两种几何情形：左图为"点'1'在等温线上面"，右图为"点'1'在等温线下面"。 <!-- src: PH-C10#p101g1; type: direct -->

### 例题：T-S 图上椭圆循环热机的效率

题设：某热机循环在 $T$-$S$ 图上为一椭圆，其半短轴、半长轴分别平行于 $T$ 轴和 $S$ 轴。循环中熵的变化范围 $S_0\to 3S_0$，温度的变化范围 $T_0\to 3T_0$。求热机效率。 <!-- src: PH-C10#p102ex; type: direct -->

几何参数：椭圆中心坐标 $(2S_0,\,2T_0)$；半长轴（沿 $S$ 方向）为 $S_0$，半短轴（沿 $T$ 方向）为 $T_0$。 <!-- src: PH-C10#p102ex; type: direct -->

椭圆方程：

$$
\frac{(S-2S_0)^2}{S_0^{2}}+\frac{(T-2T_0)^2}{T_0^{2}}=1
$$


<!-- src: PH-C10#p102ex; type: direct -->

椭圆面积（即闭合循环在 $T$-$S$ 图上所围面积）：$S_{\text{椭圆}}=\pi T_0 S_0$。 <!-- src: PH-C10#p102ex; type: direct -->

热机对外所做的净功等于闭合曲线所围面积：$A=\pi T_0 S_0$。 <!-- src: PH-C10#p102ex; type: direct -->

椭圆上四个特征点：点 1 在最右（$S=3S_0$）、点 4 在最上（$T=3T_0$）、点 3 在最左（$S=S_0$）、点 2 在最下（$T=T_0$）。 <!-- src: PH-C10#p102g1; type: direct -->

吸热分析：沿 $3\to 4\to 1$（椭圆上半段，熵从 $S_0$ 增大到 $3S_0$）过程熵增加，为吸热过程；吸收热量等于该段曲线下的面积（$\int T\,dS$）：

$$
Q_{\text{吸}}=\frac{\pi T_0 S_0}{2}+2T_0\cdot 2S_0=\left(\frac{\pi}{2}+4\right)T_0 S_0
$$


<!-- src: PH-C10#p103ex; type: direct -->

其中 $\dfrac{\pi T_0 S_0}{2}$ 为椭圆上半部分的面积，$2T_0\cdot 2S_0$ 为中心线 $T=2T_0$ 以下、宽 $2S_0$ 的矩形面积。 <!-- src: PH-C10#p103ex; type: one-step-inferred -->

热机效率：

$$
\eta=\frac{A}{Q_{\text{吸}}}=\frac{\pi T_0 S_0}{\left(\frac{\pi}{2}+4\right)T_0 S_0}=\frac{2\pi}{\pi+8}
$$


<!-- src: PH-C10#p103ex; type: direct -->

### 例题：T-S 图上顺时针可逆循环求对外做功与循环效率

题设：理想气体在 $T$-$S$ 图上经历一顺时针可逆循环（如图）。坐标轴为 $T/\text{K}$ 与 $S/(\text{kJ}\cdot\text{K}^{-1})$。三个顶点：点 1 在 $(S=1000,\,T=300)$、点 2 在 $(S=500,\,T=300)$、点 3 在 $(S=500,\,T=400)$。求该循环对外所做的功及循环效率。 <!-- src: PH-C10#p104ex; type: direct -->

各段过程判别：

- $1\to 2$：等温过程（$T=300\,\text{K}$ 不变），熵减少（$S$ 从 1000 减到 500），为放热过程，放出热量 $Q_{\text{放}}=T_1(S_1-S_2)$。 <!-- src: PH-C10#p104ex; type: direct -->
- $2\to 3$：等熵过程（$S$ 不变），即绝热过程。 <!-- src: PH-C10#p104ex; type: direct -->
- $3\to 1$：熵增加过程，为吸热过程；过程方程（直线）$T=-2\times10^{-4}\,S+500$（式中 $S$ 以 $\text{J}\cdot\text{K}^{-1}$ 计）。 <!-- src: PH-C10#p104ex; type: direct -->

吸收的热量（沿 $3\to 1$ 积分，$S$ 从 $S_3=500\times10^{3}$ 到 $S_1=1000\times10^{3}\ \text{J}\cdot\text{K}^{-1}$）：

$$
Q_{\text{吸}}=\int_{S_3}^{S_1}T\,dS=\int_{S_3}^{S_1}\left(-2\times10^{-4}S+500\right)dS=1.75\times10^{8}\ \text{J}
$$


<!-- src: PH-C10#p104ex; type: direct -->

系统在整个循环对外所做的功（等于 $T$-$S$ 图上闭合三角形 1-2-3 所围面积，底沿 $S$ 为 $500\times10^{3}\,\text{J/K}$、高沿 $T$ 为 $100\,\text{K}$）：

$$
A=\Sigma_{1231}=\frac{1}{2}\times500\times10^{3}\times100=2.5\times10^{7}\ \text{J}
$$


<!-- src: PH-C10#p105ex; type: direct -->

循环效率：

$$
\eta=\frac{A}{Q_{\text{吸}}}=\frac{2.5\times10^{7}}{1.75\times10^{8}}=\frac{1}{7}
$$


<!-- src: PH-C10#p105ex; type: direct -->

## §10.8 熵增加原理

- 根据卡诺定理引入了态函数——熵。 <!-- src: PH-C10#p106; type: direct -->
- 本节核心问题：如何用熵来判断过程进行的方向？ <!-- src: PH-C10#p106; type: direct -->
- 研究方法：先考察一个不可逆过程中的熵变。 <!-- src: PH-C10#p106; type: direct -->

### 理想气体向真空自由膨胀（不可逆过程中的熵变）

- 过程描述：理想气体向真空自由膨胀，体积由 $V_1$ 变为 $V_2$；系统初、末两态的温度不变。 <!-- src: PH-C10#p106; type: direct -->
- 图示：初态气体被隔板限制在容器左半部、占体积 $V_1$，容器右半部为真空；抽去隔板后气体自由膨胀充满整个容器，末态占体积 $V_2$（$V_2>V_1$）。 <!-- src: PH-C10#p106g1; type: direct -->
- 计算思路：自由膨胀本身不可逆，但熵是态函数；可设计一个连接相同初态、末态的等温膨胀可逆过程来计算熵变。 <!-- src: PH-C10#p107; type: direct -->

熵变计算（沿设计的等温可逆过程积分）：

$$
\Delta S = \int_1^2 \frac{\delta Q}{T} = \int_1^2 \frac{p\,\mathrm{d}V}{T}, \qquad pV = \frac{m}{M}RT
$$


<!-- src: PH-C10#p107; type: direct -->

$$
\Delta S = \frac{m}{M} R \int_{V_1}^{V_2} \frac{\mathrm{d}V}{V} = \frac{m}{M} R \ln\frac{V_2}{V_1} > 0
$$


<!-- src: PH-C10#p107; type: direct -->

$$
\Delta S = S_2 - S_1 > 0
$$


<!-- src: PH-C10#p109; type: direct -->

- 结论：因 $V_2>V_1$，故 $\Delta S>0$，即理想气体不可逆自由膨胀中系统熵增大。 <!-- src: PH-C10#p109; type: direct -->

### 热传导过程

#### 题设与热平衡温度

- 在一绝热真空容器中有两个完全相同的物体 A、B，温度分别为 $T_A$、$T_B$（$T_A>T_B$），定压热容均为 $C_p$，且为常量。 <!-- src: PH-C10#p110; type: direct -->
- 这两个物体与外界绝热。 <!-- src: PH-C10#p110g1; type: direct -->
- 两物体相互热接触而达到热平衡：物体 A 放热，物体 B 吸热；假设热平衡温度为 $T$。 <!-- src: PH-C10#p110; type: direct -->

热平衡温度（A 放出的热量等于 B 吸收的热量，等压热传导）：

$$
\int_{T_B}^{T} C_p\,\mathrm{d}T = -\int_{T_A}^{T} C_p\,\mathrm{d}T
$$


$$
C_p(T-T_B) + C_p(T-T_A) = 0 \;\Rightarrow\; T = \frac{1}{2}(T_A+T_B)
$$


<!-- src: PH-C10#p110; type: direct -->

#### 各物体熵变与总熵变

- 过程 $T_A\to T$ 与 $T_B\to T$ 都是不可逆过程；计算熵变时可设想一个在等压下进行的（可逆）热传导过程。 <!-- src: PH-C10#p111; type: direct -->
- 符号约定：$S_{A0},\,S_A$ 为物体 A 的初、末态熵；$S_{B0},\,S_B$ 为物体 B 的初、末态熵。 <!-- src: PH-C10#p111; type: direct -->

物体 A 熵变（末态温度 $T=\tfrac{T_A+T_B}{2}$）：

$$
S_A - S_{A0} = \int_{T_A}^{T} \frac{\delta Q}{T} = \int_{T_A}^{T} \frac{C_p\,\mathrm{d}T}{T} = C_p\int_{T_A}^{\frac{T_A+T_B}{2}} \frac{\mathrm{d}T}{T} = C_p\ln\frac{T_A+T_B}{2T_A}
$$


<!-- src: PH-C10#p111; type: direct -->

物体 B 熵变：

$$
S_B - S_{B0} = \int_{T_B}^{T} \frac{\delta Q}{T} = \int_{T_B}^{T} \frac{C_p\,\mathrm{d}T}{T} = C_p\int_{T_B}^{\frac{T_A+T_B}{2}} \frac{\mathrm{d}T}{T} = C_p\ln\frac{T_A+T_B}{2T_B}
$$


<!-- src: PH-C10#p112; type: direct -->

系统总熵变：

$$
\Delta S = (S_A+S_B) - (S_{A0}+S_{B0}) = (S_A-S_{A0}) + (S_B-S_{B0})
$$


$$
= C_p\ln\frac{T_A+T_B}{2T_A} + C_p\ln\frac{T_A+T_B}{2T_B} = C_p\ln\frac{(T_A+T_B)^2}{4T_AT_B}
$$


<!-- src: PH-C10#p112; type: direct --> <!-- src: PH-C10#p113; type: direct -->

#### 证明 $\Delta S>0$

由配方法判断总熵变符号：

$$
(T_A-T_B)^2 = T_A^2 - 2T_AT_B + T_B^2 > 0 \;\Rightarrow\; T_A^2 + T_B^2 > 2T_AT_B
$$


$$
T_A^2 + T_B^2 + 2T_AT_B > 4T_AT_B \;\Rightarrow\; (T_A+T_B)^2 > 4T_AT_B \;\Rightarrow\; \Delta S > 0
$$


<!-- src: PH-C10#p113; type: direct -->

- 结论：$\dfrac{(T_A+T_B)^2}{4T_AT_B}>1$，故不可逆热传导过程中系统熵增大（$\Delta S>0$）。 <!-- src: PH-C10#p113; type: one-step-inferred -->

### 例题：绝热容器中导热隔板分左右两室

#### 题设

- 容积为 $V_0$ 的绝热容器，中央有导热隔板将其分为左右两室：左室储有 $1\,\text{mol}$ 双原子分子理想气体，右室储有 $2\,\text{mol}$ 单原子分子理想气体，温度均为 $T_0$；隔板可无摩擦地左右滑动，初始时位于中央。 <!-- src: PH-C10#p114ex; type: direct -->
- 问：(1) 末态时两室的容积 $V_1$、$V_2$；(2) 两室气体熵变各为多少；(3) 如果将隔板去掉，熵有无变化（并计算）。 <!-- src: PH-C10#p114ex; type: direct -->
- 关键条件解读：隔板导热 → 两室温度始终相等且等于 $T_0$（初态、末态温度均为 $T_0$）；隔板可无摩擦滑动 → 两室压强相等。 <!-- src: PH-C10#p114ex; type: one-step-inferred -->

#### (1) 末态两室容积

- 初态时左室、右室容积均为 $\tfrac{1}{2}V_0$。 <!-- src: PH-C10#p114ex; type: direct -->
- 末态约束：$V_1 + V_2 = V_0$；两室压强相等记为 $p$。 <!-- src: PH-C10#p114ex; type: direct -->
- 状态方程：$pV_1 = RT_0$（左室 $1\,\text{mol}$），$pV_2 = 2RT_0$（右室 $2\,\text{mol}$）。 <!-- src: PH-C10#p114ex; type: direct -->
- 解得：$V_1 = \tfrac{1}{3}V_0$，$V_2 = \tfrac{2}{3}V_0$。 <!-- src: PH-C10#p114ex; type: direct -->
- 即左室由 $\tfrac{1}{2}V_0$ 被压缩到 $\tfrac{1}{3}V_0$，右室由 $\tfrac{1}{2}V_0$ 膨胀到 $\tfrac{2}{3}V_0$。 <!-- src: PH-C10#p114ex; type: direct -->

#### (2) 两室气体熵变

初态和末态温度均为 $T_0$，每室视为等温（可逆）体积变化，$\delta Q = p\,\mathrm{d}V$。 <!-- src: PH-C10#p115ex; type: compressed -->

左室（$pV=RT_0$）：

$$
\Delta S_1 = \int \frac{\delta Q}{T} = \frac{1}{T_0}\int p\,\mathrm{d}V = \frac{1}{T_0}\int_{\frac{1}{2}V_0}^{\frac{1}{3}V_0} RT_0\,\frac{\mathrm{d}V}{V} = R\ln\frac{\tfrac{1}{3}V_0}{\tfrac{1}{2}V_0} = R\ln\frac{2}{3}
$$


<!-- src: PH-C10#p115ex; type: direct -->

右室（$pV=2RT_0$）：

$$
\Delta S_2 = \int \frac{\delta Q}{T} = \frac{1}{T_0}\int p\,\mathrm{d}V = \frac{1}{T_0}\int_{\frac{1}{2}V_0}^{\frac{2}{3}V_0} 2RT_0\,\frac{\mathrm{d}V}{V} = 2R\ln\frac{\tfrac{2}{3}V_0}{\tfrac{1}{2}V_0} = 2R\ln\frac{4}{3}
$$


<!-- src: PH-C10#p115ex; type: direct -->

- 左室被压缩故 $\Delta S_1 = R\ln\tfrac{2}{3} < 0$；右室膨胀故 $\Delta S_2 = 2R\ln\tfrac{4}{3} > 0$。 <!-- src: PH-C10#p115ex; type: one-step-inferred -->

#### (3) 去掉隔板后的熵变

去掉隔板后，两种气体各自膨胀充满整个容器（体积均变为 $V_0$），温度仍为 $T_0$。以 (1)(2) 的末态作为本问初态。 <!-- src: PH-C10#p116ex; type: compressed -->

气体 1（$1\,\text{mol}$，$pV=RT_0$）：状态由 $\left(\tfrac{1}{3}V_0,\,T_0\right)\to (V_0,\,T_0)$

$$
\Delta S_1' = S_1' - S_{10} = \int \frac{\delta Q}{T} = \frac{1}{T_0}\int p\,\mathrm{d}V = \frac{1}{T_0}\int_{\frac{1}{3}V_0}^{V_0} RT_0\,\frac{\mathrm{d}V}{V} = R\ln 3
$$


<!-- src: PH-C10#p116ex; type: direct -->

气体 2（$2\,\text{mol}$，$pV=2RT_0$）：状态由 $\left(\tfrac{2}{3}V_0,\,T_0\right)\to (V_0,\,T_0)$

$$
\Delta S_2' = S_2' - S_{20} = \int \frac{\delta Q}{T} = \frac{1}{T_0}\int p\,\mathrm{d}V = \frac{1}{T_0}\int_{\frac{2}{3}V_0}^{V_0} 2RT_0\,\frac{\mathrm{d}V}{V} = 2R\ln\frac{3}{2}
$$


<!-- src: PH-C10#p116ex; type: direct -->

总熵变：

$$
\Delta S = (S_1'+S_2') - (S_{10}+S_{20}) = (S_1'-S_{10}) + (S_2'-S_{20}) = \Delta S_1' + \Delta S_2' > 0
$$


<!-- src: PH-C10#p116ex; type: direct -->

- 结论：去掉隔板后熵有变化，$\Delta S = R\ln 3 + 2R\ln\tfrac{3}{2} > 0$，即熵增大。 <!-- src: PH-C10#p116ex; type: one-step-inferred -->

### 一切不可逆绝热过程的熵总是增加

大量实验事实表明：一切不可逆绝热过程中的熵总是增加的。 <!-- src: PH-C10#p117; type: direct -->

可逆过程的熵变（一般式）：

$$
S_b - S_a = \int_a^b \frac{\delta Q}{T}\quad(\text{可逆}), \qquad dS = \frac{\delta Q}{T}
$$


<!-- src: PH-C10#p117; type: direct -->

可逆绝热过程中的熵是不变的。 <!-- src: PH-C10#p117; type: direct -->

把不可逆绝热（熵增）与可逆绝热（熵不变）两种情况合在一起，即可利用熵来判断过程是可逆还是不可逆的判据。 <!-- src: PH-C10#p117; type: compressed -->

#### 熵增加原理

热力学系统从一平衡态经过绝热过程到达另一平衡态的过程中，它的熵永不减少。如果过程是可逆的，则熵不变；如果过程是不可逆的，则熵增加。 <!-- src: PH-C10#p117; ref: 熵增加原理; type: direct -->

#### 非平衡态熵的计算方法

热力学系统处于非平衡态时，可把系统分成许多个小部分，每个小部分选得足够小，以至于它们可以近似地认为处在平衡态。计算出每个小部分的熵，它们的和就是这个非平衡态的熵。 <!-- src: PH-C10#p117; type: direct -->

### 不可逆卡诺热机的效率与克劳修斯不等式

工作于高温热源 $T_1$ 和低温热源 $T_2$ 间的不可逆卡诺热机的效率：

$$
\eta = 1 - \frac{Q_2}{Q_1} < 1 - \frac{T_2}{T_1}
$$


<!-- src: PH-C10#p118; type: direct -->

由上式可得：

$$
\frac{Q_1}{T_1} < \frac{Q_2}{T_2}, \qquad \frac{Q_1}{T_1} - \frac{Q_2}{T_2} < 0
$$


<!-- src: PH-C10#p118; type: direct -->

把 $Q$ 视为代数量时，上式写成：

$$
\frac{Q_1}{T_1} + \frac{Q_2}{T_2} < 0
$$


<!-- src: PH-C10#p118; type: direct -->

对任意的不可逆循环，推广得克劳修斯不等式：

$$
\oint_{(\text{不可逆})} \frac{\delta Q}{T} < 0
$$


<!-- src: PH-C10#p118; ref: 克劳修斯不等式; type: direct -->

### 由克劳修斯不等式导出不可逆过程的熵关系

设一闭合循环由两条路径构成：状态 $a$ 经不可逆过程（路径 1）到达状态 $b$，再经可逆过程（路径 2）由 $b$ 回到 $a$。在 $p$-$V$ 图上，路径 1（$a\to b$）画为模糊的波状线，路径 2（$b\to a$）画为光滑曲线并标注「可逆过程」，箭头由 $b$ 指向 $a$；由页面积分标注 $\int_{a1b}$ 为不可逆、$\int_{b2a}$ 为可逆。 <!-- src: PH-C10#p119g1; type: compressed -->

将克劳修斯不等式按两段路径展开：

$$
\oint_{(\text{不可逆})} \frac{\delta Q}{T} = \int_{a1b,(\text{不可逆})} \frac{\delta Q}{T} + \int_{b2a,(\text{可逆})} \frac{\delta Q}{T} < 0
$$


<!-- src: PH-C10#p119; type: direct -->

利用可逆过程积分方向可逆这一性质：

$$
\int_{b2a,(\text{可逆})} \frac{\delta Q}{T} = -\int_{a2b,(\text{可逆})} \frac{\delta Q}{T}
$$


<!-- src: PH-C10#p119; type: direct -->

代入得：

$$
\int_{a1b,(\text{不可逆})} \frac{\delta Q}{T} - \int_{a2b,(\text{可逆})} \frac{\delta Q}{T} < 0
$$


<!-- src: PH-C10#p119; type: direct -->

由于可逆路径 $a2b$ 的积分等于熵差 $S_b - S_a$，故：

$$
S_b - S_a = \int_{a2b,(\text{可逆})} \frac{\delta Q}{T} > \int_{a1b,(\text{不可逆})} \frac{\delta Q}{T}
$$


即对该不可逆过程：

$$
S_b - S_a > \int_a^b \frac{\delta Q}{T}\quad(\text{不可逆})
$$


<!-- src: PH-C10#p119; type: direct -->

### 不可逆与可逆过程熵关系的合并

对于任意的不可逆过程，如果它的初态 $a$ 和末态 $b$ 都是平衡态，则有（前提：初、末态均为平衡态）：

$$
S_b - S_a > \int_a^b \frac{\delta Q}{T}\quad(\text{不可逆})
$$


<!-- src: PH-C10#p120; type: direct -->

对于微小的不可逆过程：

$$
dS > \frac{\delta Q}{T}
$$


<!-- src: PH-C10#p120; type: direct -->

对于可逆过程：

$$
S_b - S_a = \int_a^b \frac{\delta Q}{T}\quad(\text{可逆}), \qquad dS = \frac{\delta Q}{T}
$$


<!-- src: PH-C10#p120; type: direct -->

把可逆（取等号）与不可逆（取大于号）两种情况合在一起：

$$
S_b - S_a \ge \int_a^b \frac{\delta Q}{T}, \qquad dS \ge \frac{\delta Q}{T}
$$


其中等号对应可逆过程，大于号对应不可逆过程。 <!-- src: PH-C10#p120; type: compressed -->

### 绝热系统、孤立系统与熵增加原理

由合并式 $dS \ge \dfrac{\delta Q}{T}$ 出发： <!-- src: PH-C10#p121; type: direct -->

对于绝热系统，$\delta Q = 0$，故：

$$
dS \ge 0
$$


<!-- src: PH-C10#p121; type: direct -->

熵增加原理（绝热过程表述）：热力学系统从一平衡态经过绝热过程到达另一平衡态的过程中，它的熵永不减少。如果过程是可逆的，则熵不变；如果过程是不可逆的，则熵增加。 <!-- src: PH-C10#p121; ref: 熵增加原理; type: direct -->

对孤立系统，同样有 $\delta Q = 0$，故：

$$
dS \ge 0
$$


<!-- src: PH-C10#p121; type: direct -->

熵增加原理又常表述为：一个孤立系统的熵永不减少。 <!-- src: PH-C10#p121; ref: 熵增加原理; type: direct -->

### 孤立系统中过程的两种情况

孤立系统中的过程只可能有两种情况，两者必居其一： <!-- src: PH-C10#p122; type: direct -->

#### 情况一：初始处于平衡态

若初始时系统处于平衡态，则之后随着时间的流逝仍保持平衡态，熵不变：

$$
dS = 0
$$


<!-- src: PH-C10#p122; type: direct -->

#### 情况二：初始处于非平衡态

若初始时系统处于非平衡态，则之后必自发地向平衡态过渡，熵必然增加：

$$
dS > 0
$$


<!-- src: PH-C10#p122; type: direct -->

这种自发过程必是不可逆的，直至达到平衡态为止；达到平衡态时熵达到最大值。 <!-- src: PH-C10#p122; type: direct -->

### 不可逆过程的熵增方向

绝热过程中的不可逆过程总是朝着熵增加的方向进行；系统达到平衡态时熵达到最大值。 <!-- src: PH-C10#p123; type: direct -->

孤立系统中的自发过程总是朝着熵增加的方向进行；熵取最大值时，系统达到平衡态。 <!-- src: PH-C10#p123; type: direct -->

## §10.9 热力学第二定律的统计意义

### 1. 微观状态与宏观状态

#### 模型设定

- 模型：用一容器，中间隔板将其分为左、右两半，考察容器内粒子在左、右两半中的分布（p124 以 5 个方框各演示粒子在两半中的一种分布）。 <!-- src: PH-C10#p124g1; type: direct -->
- 所考察的系统含 4 个粒子。 <!-- src: PH-C10#p126g1; type: direct --> <!-- src: PH-C10#p127; type: direct -->
- 这 4 个粒子彼此可区分（p125 中以 4 种不同颜色的小球表示）；统计微观状态数时按可区分粒子计数。 <!-- src: PH-C10#p125g1; type: compressed -->

#### 宏观状态与微观状态的定义

- 宏观状态（宏观态）：仅由左、右两半中的粒子数目（左侧个数，右侧个数）来描述的状态，不区分具体是哪些粒子。 <!-- src: PH-C10#p124g1; type: compressed -->
- 微观状态：考虑每个（可区分的）粒子具体落在左半还是右半的一种确定排布。 <!-- src: PH-C10#p125g1; type: compressed -->

### 2. 4 个粒子的状态计数

#### 宏观态总数

- 4 个粒子在左右两半的分布共有 5 个宏观状态：左4右0、左3右1、左2右2、左1右3、左0右4。 <!-- src: PH-C10#p124g1; type: direct --> <!-- src: PH-C10#p125g1; type: direct -->

#### 各宏观态对应的微观状态数

下表给出每个宏观态所包含的微观状态数。

| 宏观态（左, 右） | 微观状态数 |
| --- | --- |
| 左4, 右0 | 1 |
| 左3, 右1 | 4 |
| 左2, 右2 | 6 |
| 左1, 右3 | 4 |
| 左0, 右4 | 1 |

<!-- src: PH-C10#p125t1; type: direct --> <!-- src: PH-C10#p126t1; type: direct -->

- 微观状态总数：$1+4+6+4+1 = 16$ 个。 <!-- src: PH-C10#p125g1; type: direct --> <!-- src: PH-C10#p126t1; type: direct -->
- 微观状态总数也可写成 $16 = 2^{4}$。 <!-- src: PH-C10#p127; type: direct -->

#### 分布的柱状图特征

- 以 5 个宏观态为图例、各宏观态的微观状态数为纵轴作柱状图（横轴标题“4个粒子分布”，纵轴刻度 0–6）：柱高依次为 $1,4,6,4,1$，关于中央对称，居中的“左2右2”宏观态柱最高（微观状态数 6），两端“左4右0”“左0右4”最矮（均为 1）。 <!-- src: PH-C10#p126g1; type: direct -->

### 3. 推广到 N 个粒子

- 若系统有 $N$ 个粒子，则该系统的宏观状态数为 $N+1$，微观状态数为 $2^{N}$。 <!-- src: PH-C10#p127; type: direct -->
- 这 $2^{N}$ 个微观状态分属于 $N+1$ 个宏观态。 <!-- src: PH-C10#p127; type: direct -->

### 4. 热力学概率

- 热力学概率：一个宏观态所包含的微观状态数，称为该宏观态的热力学概率。 <!-- src: PH-C10#p127; type: direct -->
- 包含微观状态数最多的宏观态，其出现的概率最大。 <!-- src: PH-C10#p127; type: direct -->
- 微观状态数用 $\Omega$ 表示。 <!-- src: PH-C10#p128; type: direct -->
- 由于宏观态的热力学概率即其所含的微观状态数，故热力学概率也用 $\Omega$ 表示。 <!-- src: PH-C10#p128; type: synthesized -->

#### 宏观系统的数量级

- 阿伏伽德罗常数 $N_{A} = 6.022\times10^{23}\ \mathrm{mol^{-1}}$。 <!-- src: PH-C10#p128; type: direct -->
- 取粒子数 $N = 10^{23}$ 作为宏观系统的典型数量级进行讨论。 <!-- src: PH-C10#p128; type: direct -->

#### $\Omega$ 随左侧粒子数的分布

- 以 $n$（左侧粒子数）为横轴、$\Omega$ 为纵轴：曲线在 $n = N/2$ 处出现一个极尖锐的高峰，在远离 $N/2$（趋向 $n=0$ 或 $n=N$）处迅速趋于很小。 <!-- src: PH-C10#p128g1; type: direct -->
- 对于系统所具有的 $2^{N}$ 个微观状态：平衡态所包含的微观状态数最大，即平衡态的热力学概率最大。 <!-- src: PH-C10#p128; type: direct -->

### 5. 第二定律的统计意义

- 不可逆过程实质上是从一个概率小的宏观态到概率大的宏观态的转变过程。 <!-- src: PH-C10#p129; type: direct -->
- 孤立系统中发生的一切过程，总是由包含微观态数目少的宏观态向包含微观态数目多的宏观态进行；或者说，总是由热力学概率小的宏观态向热力学概率大的宏观态进行。这就是热力学第二定律的统计意义。 <!-- src: PH-C10#p129; type: direct -->

### 6. 玻耳兹曼熵的统计表述

- 玻耳兹曼引入了熵的统计表述： <!-- src: PH-C10#p130; ref: 玻耳兹曼熵; type: direct -->

$$
S = k \ln \Omega
$$


其中 $\Omega$ 为热力学概率。 <!-- src: PH-C10#p130; ref: 玻耳兹曼熵; type: direct -->

- 热力学概率可以作为系统的无序性或混乱度的量度。 <!-- src: PH-C10#p130; type: direct -->
- 平衡态对应的是最无序、最混乱的状态。 <!-- src: PH-C10#p130; type: direct -->
- 熵是系统中分子热运动混乱度的量度；系统的熵越大，则系统中分子热运动的混乱度越高。 <!-- src: PH-C10#p130; type: direct -->
