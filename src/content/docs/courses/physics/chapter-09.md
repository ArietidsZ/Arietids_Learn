---
title: "第9章 热力学平衡态（气体动理论）"
description: "大学物理课程笔记：第9章 热力学平衡态（气体动理论）。"
---

<div class="note-meta"><a href="/courses/physics/">大学物理目录</a><a href="/courses/physics/chapter-09-quick/">阅读速览</a><a href="/downloads/physics/chapter-09.md" download>下载 Markdown</a></div>

## §9.1 热运动的描述

本课程（第9章 热力学平衡态）只讨论气体。<!-- src: C09-气体动理论#p001 + C09-气体动理论#p002; type: synthesized -->

### 1. 热运动的研究方法

研究对象是热力学系统（简称系统）；外界即系统之外的部分。<!-- src: C09-气体动理论#p002; type: direct -->

热力学系统通过物理的或想象的边界与外界相隔。<!-- src: C09-气体动理论#p002; type: direct -->

研究热运动有两种方法：宏观方法与微观方法。<!-- src: C09-气体动理论#p002; type: direct -->

#### (1) 宏观方法（热力学）

热力学是研究热运动的宏观理论。<!-- src: C09-气体动理论#p002; type: direct -->

以实验总结出的定律为基础，研究物体的热运动；得到的结果是可靠的、普遍的。<!-- src: C09-气体动理论#p002; type: direct -->

研究思路（逻辑顺序）：

- 总结实践经验和实验结果，得到一些基本规律。<!-- src: C09-气体动理论#p002; type: direct -->
- 对这些基本规律作演绎推理。<!-- src: C09-气体动理论#p002; type: direct -->
- 得出有关物质各种宏观性质之间的关系、宏观物理过程进行的方向和限度等。<!-- src: C09-气体动理论#p002; type: direct -->

#### (2) 微观方法（经典统计物理学）

经典统计物理学是研究热运动的微观理论。<!-- src: C09-气体动理论#p003; type: direct -->

基本物理图像：热力学系统是由数量很大的微观粒子组成的，微观粒子处于永不停息的无规则热运动中。<!-- src: C09-气体动理论#p003 + C09-气体动理论#p005; type: synthesized -->

由于微观粒子数目巨大，其行为符合统计规律。<!-- src: C09-气体动理论#p003; type: direct -->

从微观粒子（经典物理图像）的总体行为出发，借助统计规律，得到系统的宏观性质；系统的宏观性质即微观粒子热运动的统计平均值。<!-- src: C09-气体动理论#p003; type: compressed -->

统计规律是大量偶然事件从整体上反映出来的一种规律性。<!-- src: C09-气体动理论#p003; type: direct -->

统计规律的三个特征：

- 只对大量偶然事件才有意义。<!-- src: C09-气体动理论#p003; type: direct -->
- 它是不同于个体规律的整体规律。<!-- src: C09-气体动理论#p003; type: direct -->
- 总是伴随着涨落。<!-- src: C09-气体动理论#p003; type: direct -->

微观方法的研究路线：建立微观量与宏观量之间的关系（统计方法）——从物质的微观结构出发，对具体物质的微观结构提出假设、建立微观模型；所得结果是近似的，必须与实验作比较，并受模型局限。<!-- src: C09-气体动理论#p005; type: compressed -->

经典统计物理学的初级理论称为分子动理论。<!-- src: C09-气体动理论#p005; type: direct -->

**伽耳顿板实验（统计规律的演示）**：小球自上方落下，依次经过三角形排布的钉阵（多层钉子），最终落入下方并列的各槽中。<!-- src: C09-气体动理论#p003g1; type: compressed --> 单个小球落入哪一槽是偶然的（个体规律不确定）；随实验次数增多，各槽中小球的"实验分布"逐渐趋近于中间高、两侧低的"平均分布"（钟形分布），从整体上呈现出稳定的统计规律性。<!-- src: C09-气体动理论#p003g1; type: synthesized -->

### 2. 平衡态

平衡态是热力学和经典统计物理学中的一个重要的物理模型（理想模型）。<!-- src: C09-气体动理论#p006; type: direct --> 本课程主要研究平衡态的热运动规律。<!-- src: C09-气体动理论#p006; type: direct -->

定义：如果一个热力学系统是孤立系统，则不论其初始状态如何复杂，经过充分长时间后，系统将达到一种宏观性质不随时间变化的稳定状态，此状态称为平衡态。<!-- src: C09-气体动理论#p006; type: direct -->

等价表述：在不受外界影响的条件下，热力学系统的宏观性质不随时间变化的状态即为平衡态。<!-- src: C09-气体动理论#p006; type: direct -->

**注意区分平衡态与稳定态**（关键在于是否受外界影响）：

- 平衡态：系统被绝热壁包围（孤立、不受外界影响），宏观性质不随时间变化。<!-- src: C09-气体动理论#p006g1; type: synthesized -->
- 稳定态：系统两侧分别与温度不同的两个热源相接（左侧热源1 温度 $T_1$、右侧热源2 温度 $T_2$，且 $T_1 > T_2$，上方标注绝热壁、两侧即为热源），宏观性质虽不随时间变化，但系统受到外界影响（两热源温度不等），故不是平衡态。<!-- src: C09-气体动理论#p006g1; type: synthesized -->

#### 平衡态的微观图像

热力学系统处于平衡态时，宏观上系统的宏观性质（宏观物理量）不随时间改变。<!-- src: C09-气体动理论#p007; type: direct -->

从微观角度看：组成系统的大量分子处于连续不断的无规则运动中，由于碰撞，每个分子的速度在不断变化。<!-- src: C09-气体动理论#p007; type: direct -->

平衡态的宏微观联系：系统的宏观性质不随时间改变，对应大量分子运动的平均效果不随时间改变；这种平均效果的不变，在宏观上就表现为系统达到了平衡态。<!-- src: C09-气体动理论#p007; type: compressed -->

### 3. 热力学系统的状态参量

热力学系统处于平衡态时，为了确定系统的状态，需要一些宏观物理量；这些确定系统状态的宏观物理量称为系统的状态参量。<!-- src: C09-气体动理论#p008; type: direct -->

状态参量是描写平衡态的宏观物理量。<!-- src: C09-气体动理论#p008; type: direct -->

| 状态参量 | 符号 | 性质/说明 |
| --- | --- | --- |
| 体积 | $V$ | 几何状态参量 |
| 压强 | $p$ | 研究热运动的一个重要的力学状态参量 |
| 温度 | $T$ | 研究热运动特有的物理量 |
| 物质的量（摩尔数） | $\nu = \dfrac{m}{M}$ | 气体质量为 $m$、摩尔质量为 $M$ |

<!-- src: C09-气体动理论#p008; type: compressed -->

压强的定义：系统内任意一点处的压强，是指通过该点的内部假想截面 $\Delta S$ 相互作用的法向应力。<!-- src: C09-气体动理论#p008; type: direct -->

状态参量与平衡态的对应关系：一组状态参量描述（对应）一个平衡态。<!-- src: C09-气体动理论#p008; type: direct -->

对于一定质量（即给定 $m$、$M$）的气体，气体状态 $(p,\,V,\,T)$ 即指平衡态。<!-- src: C09-气体动理论#p008; type: direct -->

## §9.2 理想气体的状态方程与微观模型

### 1. 理想气体状态方程

- 设气体的质量为 $m$、摩尔质量为 $M$，则物质的量（摩尔数）$\nu=\dfrac{m}{M}$。 <!-- src: C09-气体动理论#p009; type: direct -->
- 系统处于平衡态时，对于一定质量 $(m,M)$ 的气体，表征气体平衡态的三个状态参量 $p$、$V$、$T$ 之间存在着一定的关系式，称为气体的状态方程：$f(p,V,T)=0$，也可写作含物质的量的形式 $f(p,V,T,\nu)=0$。 <!-- src: C09-气体动理论#p009; type: direct -->
- 系统处于平衡态时，一定质量的气体 $(m,M)$ 在压强趋于零（无限稀薄）的极限情况下，遵从状态方程：

$$
pV=\frac{m}{M}RT
$$


  严格遵从上述状态方程的气体即为理想气体，该方程称为理想气体状态方程。 <!-- src: C09-气体动理论#p009; type: direct -->

各量含义与常量取值：

- $m$：气体的总质量。 <!-- src: C09-气体动理论#p010; type: direct -->
- $M$：气体的摩尔质量。 <!-- src: C09-气体动理论#p010; type: direct -->
- $\nu=\dfrac{m}{M}$：物质的量（摩尔数）。 <!-- src: C09-气体动理论#p010; type: direct -->
- $R$：摩尔气体常量，$R=8.31\,\mathrm{J\cdot mol^{-1}\cdot K^{-1}}$。 <!-- src: C09-气体动理论#p010; type: direct -->
- 根据理想气体状态方程，对于一定质量 $(m,M)$ 的气体，系统的压强 $p$、体积 $V$、温度 $T$ 中任两个量确定，就可确定系统的状态。 <!-- src: C09-气体动理论#p010; type: direct -->

由状态方程导出 $p=nkT$：

- 阿伏伽德罗常量 $N_A=6.022\times10^{23}\,\mathrm{mol^{-1}}$。 <!-- src: C09-气体动理论#p011; type: direct -->
- 玻尔兹曼常量 $k=\dfrac{R}{N_A}=1.38\times10^{-23}\,\mathrm{J\cdot K^{-1}}$。 <!-- src: C09-气体动理论#p011; type: direct -->
- 符号约定：分子质量 $\mu$；气体分子数 $N$；分子数密度 $n$。其中总质量 $m=\mu N$，摩尔质量 $M=\mu N_A$。 <!-- src: C09-气体动理论#p011; type: direct -->
- 将 $m=\mu N$、$M=\mu N_A$ 及 $R=kN_A$ 代入状态方程：

$$
pV=\frac{m}{M}RT=\frac{\mu N}{\mu N_A}\,kN_A\,T=NkT
$$


  进而

$$
p=\frac{N}{V}kT=nkT
$$


  式中 $n=\dfrac{N}{V}$ 为分子数密度。 <!-- src: C09-气体动理论#p011; type: compressed -->

### 2. 理想气体的微观模型

理想气体微观模型的三条假设：

- (1) 分子线度与分子间距相比较可忽略，分子被看作质点。 <!-- src: C09-气体动理论#p012; type: direct -->
- (2) 除了碰撞一瞬间外，忽略分子之间以及分子与容器壁间的相互作用力，且忽略重力的影响。 <!-- src: C09-气体动理论#p012; type: direct -->
- (3) 气体分子的运动遵守经典力学规律，碰撞为弹性碰撞。 <!-- src: C09-气体动理论#p012; type: direct -->
- 分子数目太多，无法解这么多的联立方程；即使能解也无用，因为碰撞太频繁，运动情况瞬息万变。分子数目巨大，符合统计规律性，故采用统计方法处理。 <!-- src: C09-气体动理论#p012; type: direct -->

### 3. 平衡态理想气体的统计假设

当理想气体处在平衡态时，气体分子均匀分布于容器内，具体包含两条统计假设：

- (1) 容器内任一位置处的分子数密度不比其他位置处的分子数密度占优势。 <!-- src: C09-气体动理论#p013; type: direct -->
- (2) 分子沿任一方向的运动不比其他方向的运动占优势。 <!-- src: C09-气体动理论#p013; type: direct -->

由上述假设得到速度分量的统计结论（上划线表示对全部分子取平均）：

- 速度可按直角坐标分解为 $\vec v=\vec v_x+\vec v_y+\vec v_z$；由各方向无优势，各速度分量的平均值为零：$\overline{v_x}=0$，$\overline{v_y}=0$，$\overline{v_z}=0$。 <!-- src: C09-气体动理论#p013; type: direct -->
- 速率平方满足 $v^2=v_x^2+v_y^2+v_z^2$；由各方向运动无优势得：

$$
\overline{v_x^{\,2}}=\overline{v_y^{\,2}}=\overline{v_z^{\,2}}=\frac{1}{3}\,\overline{v^{2}}
$$


<!-- src: C09-气体动理论#p013; type: direct -->

## §9.3 理想气体压强公式

### 1. 理想气体压强公式及其统计意义

#### 物理模型与符号约定

- 容器形状任意，体积 $V$，总分子数 $N$，每个分子的分子质量为 $\mu$。 <!-- src: C09-气体动理论#p014; type: direct -->
- 分子数密度 $n=\dfrac{N}{V}$。 <!-- src: C09-气体动理论#p014; type: direct -->
- 假设分子的速度可以分组：第 $i$ 组分子具有速度 $\vec v_i$，其分子数密度为 $n_i$，且总分子数密度 $n=\sum_i n_i$。 <!-- src: C09-气体动理论#p014; type: direct -->
- 在器壁上取面元 $\mathrm{d}A$，$\mathrm{d}A$ 满足"宏观小、微观大"。 <!-- src: C09-气体动理论#p014; type: direct -->
- 几何示意：器壁为一平面，面元 $\mathrm{d}A$ 与 $x$ 轴垂直；分子沿 $x$ 正向以速度 $\vec v_i$ 射向 $\mathrm{d}A$，碰后被弹回（$x$ 分量反向）；坐标原点 $O$ 在左、$x$ 轴水平指向器壁。 <!-- src: C09-气体动理论#p014g1; type: synthesized -->

#### 单个分子与器壁碰撞：动量增量与冲量

- 一个分子碰撞器壁后，沿 $x$ 方向动量的增量为 $-\mu v_{ix}-\mu v_{ix}=-2\mu v_{ix}$。 <!-- src: C09-气体动理论#p014; type: direct -->
- 由此，一个分子对器壁的冲量为 $2\mu v_{ix}$。 <!-- src: C09-气体动理论#p014; type: direct -->

#### 第 i 组分子在 dt 内对 dA 的冲量

- 在 $\mathrm{d}t$ 内能碰到 $\mathrm{d}A$ 的第 $i$ 组分子，处在以 $\mathrm{d}A$ 为底、沿 $x$ 方向轴长为 $v_{ix}\mathrm{d}t$ 的斜柱体内，其体积为 $(v_{ix}\mathrm{d}t)\,\mathrm{d}A$（图中柱体下沿标注 $v_{ix}\mathrm{d}t$，对应时段 $t\to t+\mathrm{d}t$）。 <!-- src: C09-气体动理论#p015 + #p015g1; type: synthesized -->
- 第 $i$ 组分子在 $\mathrm{d}t$ 内碰撞 $\mathrm{d}A$ 的碰撞分子数为 $n_i v_{ix}\,\mathrm{d}t\,\mathrm{d}A$。 <!-- src: C09-气体动理论#p015; type: direct -->
- 第 $i$ 组分子在 $\mathrm{d}t$ 内给予 $\mathrm{d}A$ 的冲量为 $(2\mu v_{ix})\cdot n_i v_{ix}\,\mathrm{d}t\,\mathrm{d}A=2\mu n_i v_{ix}^2\,\mathrm{d}A\,\mathrm{d}t$。 <!-- src: C09-气体动理论#p015; type: direct -->

#### 各组分子的总冲量

- 各种速度的分子在 $\mathrm{d}t$ 内给 $\mathrm{d}A$ 的总冲量：$\mathrm{d}I=\displaystyle\sum_{i\,(v_{ix}>0)}2\mu n_i v_{ix}^2\,\mathrm{d}A\,\mathrm{d}t$。 <!-- src: C09-气体动理论#p015; type: direct -->
- 上述求和限制在 $v_{ix}>0$ 的分子范围内。 <!-- src: C09-气体动理论#p015; type: direct -->
- 统计前提：对处于平衡态的理想气体，$v_{ix}>0$ 的分子数不比 $v_{ix}<0$ 的分子数占优势。 <!-- src: C09-气体动理论#p015; type: direct -->
- 取消求和中 $v_{ix}>0$ 的限制（改为对全部分子求和）后，得各种速率的总冲量：$\mathrm{d}I=\displaystyle\sum_i \mu n_i v_{ix}^2\,\mathrm{d}A\,\mathrm{d}t$。 <!-- src: C09-气体动理论#p016; type: direct -->
- 该步中因子 $2$ 消去：由平衡态分布的对称性，对全部分子求和恰为对 $v_{ix}>0$ 求和的两倍，与因子 $2$ 抵消。 <!-- src: C09-气体动理论#p015 + #p016; type: one-step-inferred -->

#### 单位时间总冲量与器壁正压力

- 单位时间内气体给予面元 $\mathrm{d}A$ 的总冲量，即气体对 $\mathrm{d}A$ 的正压力：$F=\dfrac{\mathrm{d}I}{\mathrm{d}t}=\displaystyle\sum_i \mu n_i v_{ix}^2\,\mathrm{d}A$。 <!-- src: C09-气体动理论#p016 + #p017; type: direct -->

#### 压强公式与统计假设

- 压强 $p=\dfrac{F}{\mathrm{d}A}=\displaystyle\sum_i \mu n_i v_{ix}^2=\mu\sum_i n_i v_{ix}^2=\mu n\,\frac{\sum_i n_i v_{ix}^2}{n}=\mu n\,\overline{v_x^2}$。 <!-- src: C09-气体动理论#p017; type: direct -->
- 其中 $x$ 方向的方均速率 $\overline{v_x^2}=\dfrac{\sum_i n_i v_{ix}^2}{n}$。 <!-- src: C09-气体动理论#p017; type: direct -->
- 统计假设（各方向等价）：$\overline{v_x^2}=\overline{v_y^2}=\overline{v_z^2}=\dfrac{1}{3}\,\overline{v^2}$。 <!-- src: C09-气体动理论#p017; type: direct -->
- 代入得理想气体压强公式：$p=\dfrac{1}{3}\mu n\,\overline{v^2}$。 <!-- src: C09-气体动理论#p017; type: direct -->

#### 压强与平均平动动能（统计意义）

- 定义分子平均平动动能 $\overline{\varepsilon}_k=\dfrac{1}{2}\mu\,\overline{v^2}$。 <!-- src: C09-气体动理论#p018; type: direct -->
- 压强公式由此可改写为 $p=\dfrac{2}{3}n\,\overline{\varepsilon}_k$。 <!-- src: C09-气体动理论#p018; type: direct -->
- 压强 $p=\dfrac{1}{3}\mu n\,\overline{v^2}=\dfrac{2}{3}n\,\overline{\varepsilon}_k$ 由分子数密度 $n$ 和分子平均平动动能 $\overline{\varepsilon}_k$ 这两个统计平均量决定。 <!-- src: C09-气体动理论#p017 + #p018; type: synthesized -->

### 2. 温度的微观意义

#### 温度与分子平均平动动能

- 联立 $p=nkT$ 与 $p=\dfrac{2}{3}n\,\overline{\varepsilon}_k$。 <!-- src: C09-气体动理论#p018; type: direct -->
- 得分子平均平动动能与温度的关系：$\overline{\varepsilon}_k=\dfrac{3}{2}kT$。 <!-- src: C09-气体动理论#p018; type: direct -->
- 文字表述：温度是物质热运动强度的量度，是分子不规则运动平均平动动能的量度。 <!-- src: C09-气体动理论#p018; type: direct -->
- 温度反映组成热力学系统的大量分子作热运动的集体性质；对个别分子或极少量分子，温度是无意义的。 <!-- src: C09-气体动理论#p018; type: direct -->

#### 方均根速率

- 由 $\overline{\varepsilon}_k=\dfrac{1}{2}\mu\,\overline{v^2}=\dfrac{3}{2}kT$ 得 $\overline{v^2}=\dfrac{3kT}{\mu}$。 <!-- src: C09-气体动理论#p019; type: direct -->
- 方均根速率 $\sqrt{\overline{v^2}}=\sqrt{\dfrac{3kT}{\mu}}$。 <!-- src: C09-气体动理论#p019; type: direct -->
- 利用 $\dfrac{k}{\mu}=\dfrac{kN_A}{\mu N_A}=\dfrac{R}{M}$，方均根速率又可写为 $\sqrt{\overline{v^2}}=\sqrt{\dfrac{3RT}{M}}$。 <!-- src: C09-气体动理论#p019; type: direct -->
- 注意区分：$\mu$ 为分子质量（见模型设定），$M$ 满足 $M=\mu N_A$，二者不同，使用时勿混淆；该关系同时隐含 $kN_A=R$。 <!-- src: C09-气体动理论#p019 + #p014; type: one-step-inferred -->

## §9.4 麦克斯韦速率分布

### 1. 速率分布函数与归一化

- 气体分子的速率从整体上看具有统计规律性，是对总体行为的描述；设气体的总分子数为 $N$。 <!-- src: C09-气体动理论#p020; type: direct -->
- 速率区间 $\mathrm{d}v$ 取"宏观小、微观大"。 <!-- src: C09-气体动理论#p020; type: direct -->
- 速率在 $v \to v+\mathrm{d}v$ 内的分子数记为 $\mathrm{d}N$。 <!-- src: C09-气体动理论#p020; type: direct -->
- $\dfrac{\mathrm{d}N}{N}$ 代表速率在 $v \to v+\mathrm{d}v$ 内的分子数在总分子数 $N$ 中所占的比率，也即分子处于 $v \to v+\mathrm{d}v$ 区间的概率。 <!-- src: C09-气体动理论#p020; type: direct -->
- 在不同的速率 $v$ 附近取相等的间隔 $\mathrm{d}v$，比率 $\dfrac{\mathrm{d}N}{N}$ 的数值一般是不同的，即 $\dfrac{\mathrm{d}N}{N}$ 与速率 $v$ 有关。 <!-- src: C09-气体动理论#p020 + #p021; type: synthesized -->
- 比率 $\dfrac{\mathrm{d}N}{N}$ 既与速率 $v$ 有关（$\dfrac{\mathrm{d}N}{N} \propto f(v)$），又与区间宽度成正比（$v \to v+\mathrm{d}v$ 越大，分布在此区间内的分子数越多，$\dfrac{\mathrm{d}N}{N}$ 越大，$\dfrac{\mathrm{d}N}{N} \propto \mathrm{d}v$），故 $\dfrac{\mathrm{d}N}{N} \propto f(v)\,\mathrm{d}v$。 <!-- src: C09-气体动理论#p021; type: compressed -->
- 速率分布函数的定义：

$$
\frac{\mathrm{d}N}{N} = f(v)\,\mathrm{d}v
$$


  其中 $f(v)$ 称为分子速率分布函数。 <!-- src: C09-气体动理论#p021; type: direct -->
- $f(v)$ 的物理意义：速率在 $v$ 附近单位速率区间内的分子数在总分子数中所占的比率；也即分子处于 $v$ 附近单位速率区间内的概率。 <!-- src: C09-气体动理论#p021; type: direct -->
- 对速率区间积分：

$$
\int_{v_1}^{v_2} f(v)\,\mathrm{d}v = \int_{v_1}^{v_2}\frac{\mathrm{d}N}{N} = \frac{\Delta N}{N}
$$


  表示速率在 $v_1 \sim v_2$ 内的分子数占总分子数的比率。 <!-- src: C09-气体动理论#p022; type: direct -->
- 归一化条件：

$$
\int_{0}^{\infty} f(v)\,\mathrm{d}v = 1
$$


<!-- src: C09-气体动理论#p022; type: direct -->
- $f(v)$–$v$ 曲线（横轴 $v$，纵轴 $f(v)$）：曲线先升后降；区间 $[v_1, v_2]$ 下的面积对应该区间分子数比率 $\dfrac{\Delta N}{N}$，整条曲线下的总面积为 $1$。 <!-- src: C09-气体动理论#p022g1; type: direct -->
- 有了具体的速率分布函数，就能计算任一速率区间内的分子数，以及任一速率区间内分子的各种力学量的平均值。 <!-- src: C09-气体动理论#p022; type: direct -->

### 2. 三种特征速率

#### 麦克斯韦速率分布函数

- 1859 年麦克斯韦（J. C. Maxwell）给出，处于平衡态的理想气体的速率分布函数为：

$$
f(v) = 4\pi \left( \frac{\mu}{2\pi kT} \right)^{3/2} e^{-\frac{\mu v^{2}}{2kT}}\, v^{2}
$$


  称为麦克斯韦速率分布函数。 <!-- src: C09-气体动理论#p023; type: direct -->
- 温度对分布的影响（$\mu$ 一定）：温度越高，速率大的分子数越多。 <!-- src: C09-气体动理论#p023; type: direct -->
- $f(v)$–$v$ 曲线随温度变化（$\mu$ 一定）：图中给出两条曲线对应温度 $T_1$、$T_2$ 且 $T_2 > T_1$；随温度升高，分布峰向右移（最概然速率增大）并降低、变宽，即 $T_1$ 曲线峰更高更靠左、$T_2$ 曲线峰更低更靠右。 <!-- src: C09-气体动理论#p023g1; type: direct -->

#### 最概然速率（最可几速率）$v_p$

- $v_p$ 称最概然速率，又称最可几速率，由分布函数取极大的条件求出：

$$
\frac{\mathrm{d}}{\mathrm{d}v}f(v) = 0
$$


<!-- src: C09-气体动理论#p023 + #p024; type: synthesized -->
- 结果：

$$
v_p = \sqrt{\frac{2kT}{\mu}} = \sqrt{\frac{2RT}{M}}
$$


<!-- src: C09-气体动理论#p024; type: direct -->

#### 方均根速率 $\sqrt{\overline{v^{2}}}$

- 方均根速率由力学量 $v^{2}$ 的平均值求得，$v^{2}$ 的平均值定义为：

$$
\overline{v^{2}} = \frac{\int_{0}^{\infty} v^{2}\,\mathrm{d}N}{N} = \frac{\int_{0}^{\infty} v^{2} N f(v)\,\mathrm{d}v}{N} = \int_{0}^{\infty} v^{2} f(v)\,\mathrm{d}v
$$


<!-- src: C09-气体动理论#p024; type: direct -->
- 结果 $\overline{v^{2}} = \dfrac{3kT}{\mu}$，方均根速率：

$$
\sqrt{\overline{v^{2}}} = \sqrt{\frac{3kT}{\mu}} = \sqrt{\frac{3RT}{M}}
$$


<!-- src: C09-气体动理论#p024; type: direct -->

#### 平均速率 $\bar v$

- 平均速率由力学量 $v$ 的平均值求得：

$$
\bar v = \frac{\int_{0}^{\infty} v\,\mathrm{d}N}{N} = \int_{0}^{\infty} v f(v)\,\mathrm{d}v
$$


<!-- src: C09-气体动理论#p025; type: direct -->
- 结果：

$$
\bar v = \sqrt{\frac{8kT}{\pi \mu}} = \sqrt{\frac{8RT}{\pi M}}
$$


<!-- src: C09-气体动理论#p025; type: direct -->

#### 三种特征速率汇总与关系

- 三种特征速率的两种等价表达（与 $k,\mu$ 或 $R,M$）：

| 特征速率 | 用 $k,\mu$ 表达 | 用 $R,M$ 表达 |
| --- | --- | --- |
| 最概然速率 $v_p$ | $\sqrt{\dfrac{2kT}{\mu}}$ | $\sqrt{\dfrac{2RT}{M}}$ <!-- src: C09-气体动理论#p024; type: direct --> |
| 平均速率 $\bar v$ | $\sqrt{\dfrac{8kT}{\pi \mu}}$ | $\sqrt{\dfrac{8RT}{\pi M}}$ <!-- src: C09-气体动理论#p025; type: direct --> |
| 方均根速率 $\sqrt{\overline{v^{2}}}$ | $\sqrt{\dfrac{3kT}{\mu}}$ | $\sqrt{\dfrac{3RT}{M}}$ <!-- src: C09-气体动理论#p024; type: direct --> |

- 三种特征速率大小关系：

$$
v_p < \bar v < \sqrt{\overline{v^{2}}}
$$


<!-- src: C09-气体动理论#p025; type: direct -->
- $f(v)$–$v$ 曲线上，自左向右依次标出 $v_p$、$\bar v$、$\sqrt{\overline{v^{2}}}$，即三者从小到大排列。 <!-- src: C09-气体动理论#p025g1; type: direct -->

#### 任意力学量的平均值

- 任意力学量 $G(x)$ 的平均值：

$$
\bar G = \int_{a}^{b} G(x) f(x)\,\mathrm{d}x
$$


<!-- src: C09-气体动理论#p025; type: direct -->

### 3. 速率区间内的分子数与平均值

- 速率在 $v_1 \to v_2$ 区间内的分子数：

$$
\Delta N = \int_{v_1}^{v_2} \mathrm{d}N = \int_{v_1}^{v_2} N f(v)\,\mathrm{d}v
$$


<!-- src: C09-气体动理论#p026; type: direct -->
- 速率在 $v_1 \to v_2$ 区间内分子的平均速率（区间加权，分母为该区间分子数）：

$$
\bar v_{v_1 \to v_2} = \frac{\int_{v_1}^{v_2} v\,\mathrm{d}N}{\int_{v_1}^{v_2} \mathrm{d}N} = \frac{\int_{v_1}^{v_2} v N f(v)\,\mathrm{d}v}{\int_{v_1}^{v_2} N f(v)\,\mathrm{d}v} = \frac{\int_{v_1}^{v_2} v f(v)\,\mathrm{d}v}{\int_{v_1}^{v_2} f(v)\,\mathrm{d}v}
$$


<!-- src: C09-气体动理论#p026; type: direct -->

各积分式的物理意义：

- (1) $f(v)\,\mathrm{d}v = \dfrac{\mathrm{d}N}{N}$：速率在 $v \sim v+\mathrm{d}v$ 内的分子数占总分子数的比率（概率）。 <!-- src: C09-气体动理论#p027 + #p021; type: synthesized -->
- (2) $N f(v)\,\mathrm{d}v = \mathrm{d}N$：速率在 $v \sim v+\mathrm{d}v$ 内的分子数。 <!-- src: C09-气体动理论#p027 + #p020; type: synthesized -->
- (3) $\displaystyle\int_{v_1}^{v_2} f(v)\,\mathrm{d}v = \dfrac{\Delta N}{N}$：速率在 $v_1 \sim v_2$ 内的分子数占总分子数的比率。 <!-- src: C09-气体动理论#p027 + #p022; type: synthesized -->
- (4) $\displaystyle\int_{v_1}^{v_2} N f(v)\,\mathrm{d}v = \Delta N$：速率在 $v_1 \sim v_2$ 内的分子数。 <!-- src: C09-气体动理论#p027 + #p022; type: synthesized -->
- (5) $\displaystyle\int_{0}^{\infty} v f(v)\,\mathrm{d}v = \frac{\int_{0}^{\infty} v N f(v)\,\mathrm{d}v}{N} = \frac{\int_{0}^{\infty} v\,\mathrm{d}N}{N} = \bar v$：全部分子的平均速率。 <!-- src: C09-气体动理论#p027 + #p025; type: synthesized -->
- (6) $\displaystyle\frac{\int_{v_1}^{v_2} v f(v)\,\mathrm{d}v}{\int_{v_1}^{v_2} f(v)\,\mathrm{d}v} = \frac{\int_{v_1}^{v_2} v N f(v)\,\mathrm{d}v}{\int_{v_1}^{v_2} N f(v)\,\mathrm{d}v} = \frac{\int_{v_1}^{v_2} v\,\mathrm{d}N}{\int_{v_1}^{v_2} \mathrm{d}N} = \bar v_{v_1 \to v_2}$：速率在 $v_1 \sim v_2$ 区间内分子的平均速率。 <!-- src: C09-气体动理论#p027 + #p026; type: synthesized -->

### 4. 典型例题方法

#### 例题一：两种气体（氦、氧）速率分布对比

- 题型设置：氦气、氧气的总分子数均为 $N$，$T_{\mathrm{O_2}} = 2 T_{\mathrm{He}}$，给出两条速率分布曲线（图中记为 $A$、$B$），阴影面积为 $S$。 <!-- src: C09-气体动理论#p028ex1; type: direct -->
- 图像转写：$f(v)$–$v$ 图中有两条曲线，$A$ 峰较高、较窄、靠左，$B$ 峰较低、较宽、靠右；横轴标出 $v_0$；图中有阴影区，其面积为 $S$。 <!-- src: C09-气体动理论#p028ex1g1; type: direct -->
- 单位换算（解题前置）：摩尔质量 $=$ 分子量 $\times 10^{-3}\ \mathrm{kg}$。 <!-- src: C09-气体动理论#p029ex1; type: direct -->
- (1) 最概然速率之比（用 $v_p = \sqrt{2RT/M}$）：

$$
\frac{v_{p\mathrm{O_2}}}{v_{p\mathrm{He}}} = \sqrt{\frac{T_{\mathrm{O_2}} M_{\mathrm{He}}}{M_{\mathrm{O_2}} T_{\mathrm{He}}}} = \frac{1}{2}, \qquad v_{p\mathrm{He}} = 2\,v_{p\mathrm{O_2}}
$$


<!-- src: C09-气体动理论#p029ex1; type: direct -->
- (2) 判断曲线：$B$ 是氦气（判据：$v_p$ 较大者分布峰偏右，He 的 $v_p$ 较大）。 <!-- src: C09-气体动理论#p029ex1 + #p028ex1g1; type: synthesized -->
- (3) $v_0$ 的意义：$v = v_0$ 时，两种气体分子速率分布函数值相同。 <!-- src: C09-气体动理论#p029ex1; type: direct -->
- (4) 利用归一化拆分积分：

$$
\int_{v_0}^{\infty} N\left[\,f_B(v) - f_A(v)\,\right]\mathrm{d}v = N\left[\int_{v_0}^{\infty} f_B(v)\,\mathrm{d}v - \int_{v_0}^{\infty} f_A(v)\,\mathrm{d}v\right] = N(1 - S)
$$


<!-- src: C09-气体动理论#p029ex1; type: direct -->

#### 例题二：分段（三角形）速率分布函数求常数与平均速率

- 题型设置：$N$ 个粒子的速率分布函数为分段线性：

$$
f(v) = \begin{cases} \dfrac{a}{v_0}\,v & (0 \le v \le v_0) \\[2mm] 2a - \dfrac{a}{v_0}\,v & (v_0 \le v \le 2v_0) \end{cases}
$$


<!-- src: C09-气体动理论#p030ex1; type: direct -->
- 图像转写：$f(v)$ 从原点线性上升到峰点 $(v_0,\ a)$，再线性下降到 $(2v_0,\ 0)$，整体呈三角形。 <!-- src: C09-气体动理论#p030ex1g1; type: direct -->
- (1) 由归一化条件 $\displaystyle\int_{0}^{\infty} f(v)\,\mathrm{d}v = 1$ 确定常数 $a$：

$$
\int_{0}^{v_0} \frac{a}{v_0}\,v\,\mathrm{d}v + \int_{v_0}^{2v_0}\left(2a - \frac{a}{v_0}\,v\right)\mathrm{d}v = 1 \;\Rightarrow\; a = \frac{1}{v_0}
$$


<!-- src: C09-气体动理论#p031ex1; type: direct -->
- (2) 全部粒子的平均速率：

$$
\bar v = \int_{0}^{\infty} v f(v)\,\mathrm{d}v = \int_{0}^{v_0} \frac{a}{v_0}\,v^{2}\,\mathrm{d}v + \int_{v_0}^{2v_0}\left(2a - \frac{a}{v_0}\,v\right)v\,\mathrm{d}v = v_0
$$


<!-- src: C09-气体动理论#p031ex1; type: direct -->
- (3) $0 \sim v_0$ 区间粒子的平均速率（区间加权，分母不是 1）：

$$
\bar v_{0 \sim v_0} = \frac{\int_{0}^{v_0} v f(v)\,\mathrm{d}v}{\int_{0}^{v_0} f(v)\,\mathrm{d}v} = \frac{2}{3}\,v_0
$$


<!-- src: C09-气体动理论#p031ex1; type: direct -->

#### 例题三：两种气体混合后的速率分布函数

- 题型设置：两种理想气体分子数分别为 $N_A$、$N_B$，某一温度下速率分布函数分别为 $f_A(v)$、$f_B(v)$，求该温度下 $A$、$B$ 组成系统的速率分布函数。 <!-- src: C09-气体动理论#p032ex1; type: direct -->
- 方法：对速率在 $v \sim v+\mathrm{d}v$ 内的分子数按两组分相加：

$$
\mathrm{d}N = \mathrm{d}N_A + \mathrm{d}N_B = N_A f_A(v)\,\mathrm{d}v + N_B f_B(v)\,\mathrm{d}v = (N_A + N_B) f(v)\,\mathrm{d}v
$$


<!-- src: C09-气体动理论#p032ex1; type: direct -->
- 结果：

$$
f(v) = \frac{N_A f_A(v) + N_B f_B(v)}{N_A + N_B}
$$


<!-- src: C09-气体动理论#p032ex1; type: direct -->

### 5. 麦克斯韦速度分布

#### 从速率分布到速度分布

速率分布只描述分子按速率大小 $v$ 的分布，其分布形式为 $\dfrac{dN(v)}{N}=f(v)\,dv$，对应速率区间 $v \sim v+dv$。<!-- src: C09-气体动理论#p033 + #p034; type: synthesized -->

速率分布函数（沿用前文结论）为

$$
f(v)=4\pi\left(\frac{\mu}{2\pi kT}\right)^{3/2} e^{-\frac{\mu v^{2}}{2kT}}\, v^{2}
$$


其中 $\mu$ 为分子（气体）质量参量，$k$ 为玻尔兹曼常量，$T$ 为温度。<!-- src: C09-气体动理论#p033; type: one-step-inferred -->

速度是矢量，可分解为三个分量：

$$
\vec v=\vec v_x+\vec v_y+\vec v_z
$$


<!-- src: C09-气体动理论#p033; type: direct -->

要描述分子按速度（含方向）的分布，需同时给定三个速度分量分别落在区间 $v_x \sim v_x+dv_x$、$v_y \sim v_y+dv_y$、$v_z \sim v_z+dv_z$ 内，对应这些区间的分子数记为 $dN(v_x,v_y,v_z)$。<!-- src: C09-气体动理论#p033 + #p036; type: synthesized -->

速度分布函数 $f(v_x,v_y,v_z)$ 由下式定义，称为麦克斯韦速度分布函数：

$$
\frac{dN(v_x,v_y,v_z)}{N}=f(v_x,v_y,v_z)\,dv_x\,dv_y\,dv_z
$$


<!-- src: C09-气体动理论#p033; type: direct -->

#### 速度空间与"末端点"

把三个速度分量 $v_x,\ v_y,\ v_z$ 作为三个相互垂直的坐标轴，构成"速度空间"。每个分子的速度矢量 $\vec v$ 从原点 $O$ 出发，其末端（箭头尖端）对应速度空间中的一个点，称为该分子的"末端点"，其在三个轴上的投影即为 $v_x,\ v_y,\ v_z$。<!-- src: C09-气体动理论#p033g1; type: compressed -->

速度空间示意图：以 $O$ 为原点，$v_x$、$v_y$、$v_z$ 为三条坐标轴；矢量 $\vec v$ 由原点指向其末端处的一个小立方体（速度空间中的体积元 $dv_x\,dv_y\,dv_z$），该末端点的位置由分量 $v_x,\ v_y,\ v_z$（向各轴的虚线投影）确定。落在体积元 $dv_x\,dv_y\,dv_z$ 内的末端点数即为 $dN(v_x,v_y,v_z)$。<!-- src: C09-气体动理论#p036g1 + #p033g1; type: synthesized -->

#### 球壳与体积元：速率分布与速度分布的几何对应

在速度空间中，速率在 $v \sim v+dv$ 之间的分子，其末端点落在以原点为心、半径由 $v$ 到 $v+dv$ 的一层球壳内；该球壳的体积为 $4\pi v^{2}\,dv$。<!-- src: C09-气体动理论#p034g1; type: compressed -->

球壳示意图：在 $v_x,\ v_y,\ v_z$ 速度空间中，以 $O$ 为心画出内半径为 $v$、外半径为 $v+dv$ 的一层球壳（图中标注 $4\pi v^{2}\,dv$、矢量 $v$ 与 $v+dv$），它收集了所有速率介于 $v$ 与 $v+dv$ 之间的末端点；而体积元 $dv_x\,dv_y\,dv_z$ 则收集了速度分量分别落在各自小区间内的末端点。<!-- src: C09-气体动理论#p034g1; type: compressed -->

速率分布（球壳）与速度分布（体积元）的对应关系：

| 比较项 | 速率分布 | 速度分布 |
| --- | --- | --- |
| 描述对象 | 速率 $v$（标量） | 速度三分量 $v_x,\ v_y,\ v_z$（矢量） |
| 取值区间 | $v \sim v+dv$ | $v_x \sim v_x+dv_x,\ v_y \sim v_y+dv_y,\ v_z \sim v_z+dv_z$ |
| 速度空间中的区域 | 球壳，体积 $4\pi v^{2}\,dv$ | 体积元，体积 $dv_x\,dv_y\,dv_z$ |
| 分布关系 | $\dfrac{dN(v)}{N}=f(v)\,dv$ | $\dfrac{dN(v_x,v_y,v_z)}{N}=f(v_x,v_y,v_z)\,dv_x\,dv_y\,dv_z$ |

<!-- src: C09-气体动理论#p034 + #p033; type: synthesized -->

#### 由速率分布导出体积元内的末端点数

将速率分布函数代入，速率在 $v \sim v+dv$ 内的分子数比例为

$$
\frac{dN(v)}{N}=4\pi\left(\frac{\mu}{2\pi kT}\right)^{3/2} e^{-\frac{\mu v^{2}}{2kT}}\, v^{2}\,dv
$$


即

$$
dN(v)=N\left(\frac{\mu}{2\pi kT}\right)^{3/2} e^{-\frac{\mu v^{2}}{2kT}}\,4\pi v^{2}\,dv
$$


<!-- src: C09-气体动理论#p035; type: direct -->

关键论断：球壳内单位体积里的末端点数，在整个球壳内的分布是均匀的。<!-- src: C09-气体动理论#p035; type: direct -->

因此用 $dN(v)$ 除以球壳体积 $4\pi v^{2}\,dv$，得球壳内单位体积所包含的末端点数为

$$
N\left(\frac{\mu}{2\pi kT}\right)^{3/2} e^{-\frac{\mu v^{2}}{2kT}}
$$


<!-- src: C09-气体动理论#p035; type: direct -->

由于末端点在球壳内分布均匀，体积元 $dv_x\,dv_y\,dv_z$ 内的末端点数即为上述单位体积末端点数乘以该体积元：

$$
N\left(\frac{\mu}{2\pi kT}\right)^{3/2} e^{-\frac{\mu v^{2}}{2kT}}\,dv_x\,dv_y\,dv_z
$$


<!-- src: C09-气体动理论#p035; type: direct -->

#### 麦克斯韦速度分布函数

达到平衡态时，气体分子的速度分量分别在 $v_x \sim v_x+dv_x$、$v_y \sim v_y+dv_y$、$v_z \sim v_z+dv_z$ 区间内的分子数为

$$
dN(v_x,v_y,v_z)=N\left(\frac{\mu}{2\pi kT}\right)^{3/2} e^{-\frac{\mu v^{2}}{2kT}}\,dv_x\,dv_y\,dv_z
$$


<!-- src: C09-气体动理论#p036; type: direct -->

由速度矢量分解 $\vec v=\vec v_x+\vec v_y+\vec v_z$，有 $v^{2}=v_x^{2}+v_y^{2}+v_z^{2}$，代入指数得

$$
dN(v_x,v_y,v_z)=N\left(\frac{\mu}{2\pi kT}\right)^{3/2} e^{-\frac{\mu\left(v_x^{2}+v_y^{2}+v_z^{2}\right)}{2kT}}\,dv_x\,dv_y\,dv_z
$$


<!-- src: C09-气体动理论#p036; type: direct -->

代入定义式 $\dfrac{dN(v_x,v_y,v_z)}{N}=f(v_x,v_y,v_z)\,dv_x\,dv_y\,dv_z$，即得麦克斯韦速度分布函数：

$$
f(v_x,v_y,v_z)=\left(\frac{\mu}{2\pi kT}\right)^{3/2} e^{-\frac{\mu\left(v_x^{2}+v_y^{2}+v_z^{2}\right)}{2kT}}
$$


<!-- src: C09-气体动理论#p036; type: direct -->

## §9.5 玻尔兹曼能量分布律

### 重力场中分子数密度按高度的分布

- 不考虑重力时，气体的分子数密度 $n$ 在空间分布均匀。<!-- src: C09-气体动理论#p041; type: direct -->
- 考虑重力时，分子数密度与压强都随高度变化：$n=n(z)$、$p=p(z)$，理想气体满足 $p=nkT$。<!-- src: C09-气体动理论#p041; type: direct -->

推导（取薄层气体元，建立力平衡）：

- 在高度 $z$ 处取截面积为 $\Delta S$、厚度为 $dz$ 的水平薄层气体元；$z$ 轴竖直向上，原点 $O$ 取在地面，薄层下表面在 $z$、上表面在 $z+dz$。薄层受力：下表面向上的压力 $p\,\Delta S$，上表面向下的压力 $(p+dp)\Delta S$，自身重力 $\mu g n\,dz\,\Delta S$ 竖直向下。<!-- src: C09-气体动理论#p041g1; type: direct -->
- 竖直方向力平衡：$p\,\Delta S-(p+dp)\Delta S-\mu g n\,dz\,\Delta S=0$。<!-- src: C09-气体动理论#p041; type: direct -->
- 化简得 $dp=-\mu g n\,dz$。<!-- src: C09-气体动理论#p041; type: direct -->
- 由 $p=nkT$（温度 $T$ 恒定），代入上式得 $dn=-\dfrac{\mu g n\,dz}{kT}$，即 $\dfrac{dn}{n}=-\dfrac{\mu g}{kT}\,dz$。<!-- src: C09-气体动理论#p041; type: compressed -->
- 边界条件：地面处 $z=0$，$n(0)=n_0$。<!-- src: C09-气体动理论#p042; type: direct -->
- 热平衡气体是等温的，对应恒温大气模型。<!-- src: C09-气体动理论#p042; type: direct -->
- 两边积分 $\displaystyle\int_{n_0}^{n}\frac{dn}{n}=-\int_{0}^{z}\frac{\mu g}{kT}\,dz$，得 $\ln\dfrac{n}{n_0}=-\dfrac{\mu g z}{kT}$。<!-- src: C09-气体动理论#p042; type: direct -->

结果：

$$
n(z)=n_0\,e^{-\frac{\mu g z}{kT}}
$$


- 上式为重力场中粒子数密度按高度的分布；$n_0$ 为 $z=0$ 处的粒子数密度。<!-- src: C09-气体动理论#p042; type: direct -->
- 由 $p=nkT$ 得等温气压公式 $p(z)=p_0\,e^{-\frac{\mu g z}{kT}}=p_0\,e^{-\frac{Mgz}{RT}}$；$p_0$ 为 $z=0$ 处的气体压强。<!-- src: C09-气体动理论#p042; type: direct -->

### 重力场中按高度的分布函数 f(z) 及其归一化

- 在高度 $z$ 处取截面积为 $dS$、厚度为 $dz$ 的薄层，层内分子数 $dN(z)=n\,dz\,dS$；代入 $n(z)=n_0\,e^{-\frac{\mu g z}{kT}}$ 得 $dN(z)=n_0\,e^{-\frac{\mu g z}{kT}}\,dz\,dS$。<!-- src: C09-气体动理论#p055; type: direct -->
- 对全高度积分得总分子数：<!-- src: C09-气体动理论#p055; type: direct -->

$$
N=\int dN(z)=\int_{0}^{\infty} n_0\,e^{-\frac{\mu g z}{kT}}\,dz\,dS=\frac{n_0 kT}{\mu g}\,dS
$$


- 故重力场中粒子按高度的归一化分布函数（其归一化系数 $\dfrac{\mu g}{kT}$ 由上式给出）：<!-- src: C09-气体动理论#p055; type: direct -->

$$
f(z)=\frac{dN}{N\,dz}=\frac{\mu g}{kT}\,e^{-\frac{\mu g z}{kT}}
$$


### 玻尔兹曼密度分布律（推广到任意外场）

- $\mu g z$ 是质量为 $\mu$ 的粒子在重力场中的重力势能（即在重力场中的势能）。<!-- src: C09-气体动理论#p043; type: direct -->
- 推广到任意外场：作替换 $\mu g z\to \varepsilon_p(\vec r)$，$\varepsilon_p(\vec r)$ 为质量为 $\mu$ 的粒子在任意外场中的势能。<!-- src: C09-气体动理论#p043; type: direct -->
- 任意外场中粒子数密度按位置的分布（玻尔兹曼密度分布律）：<!-- src: C09-气体动理论#p043; type: direct -->

$$
n(\vec r)=n_0\,e^{-\frac{\varepsilon_p(\vec r)}{kT}}
$$


<!-- src: C09-气体动理论#p043; type: direct -->

### 三个分布律

- 外场中粒子按位置的分布律：$f_B(\vec r)=f_0\,e^{-\frac{\varepsilon_p(\vec r)}{kT}}$，其中 $\varepsilon_p(\vec r)$ 是粒子的势能。<!-- src: C09-气体动理论#p043; type: direct -->
- 重力场中粒子按高度的分布律：$f(z)=\dfrac{dN}{N\,dz}=\dfrac{\mu g}{kT}\,e^{-\frac{\mu g z}{kT}}$。<!-- src: C09-气体动理论#p043; type: direct -->
- 外场中粒子按速度的分布律：$f(\vec v)=\left(\dfrac{\mu}{2\pi kT}\right)^{3/2}e^{-\frac{\mu v^2}{2kT}}$，其中 $\tfrac{1}{2}\mu v^2=\varepsilon_k$ 是粒子的动能。<!-- src: C09-气体动理论#p043; type: direct -->

### 麦克斯韦-玻尔兹曼能量分布律

- 速度区间：$v_x\to v_x+dv_x$，$v_y\to v_y+dv_y$，$v_z\to v_z+dv_z$。<!-- src: C09-气体动理论#p044; type: direct -->
- 位置坐标区域：$x\to x+dx$，$y\to y+dy$，$z\to z+dz$。<!-- src: C09-气体动理论#p044; type: direct -->
- 对应的空间：速度空间、位形空间、相空间。<!-- src: C09-气体动理论#p044; type: direct -->
- 速度分布与位置分布是相互独立的，故两分布相乘：<!-- src: C09-气体动理论#p044; type: direct -->

$$
f_{MB}(\vec r,\vec v)=f(\vec v)\,f_B(\vec r)=f_0\left(\dfrac{\mu}{2\pi kT}\right)^{3/2}e^{-\frac{\varepsilon_k+\varepsilon_p}{kT}}
$$


<!-- src: C09-气体动理论#p044; type: direct -->

- 总能量为动能与势能之和：$\varepsilon=\varepsilon_k+\varepsilon_p$。<!-- src: C09-气体动理论#p044; type: direct -->
- 以总能量 $\varepsilon$（为 $v_x,v_y,v_z,x,y,z$ 六个变量的函数）表示，即麦克斯韦-玻尔兹曼能量分布律（亦称玻尔兹曼能量分布律）：<!-- src: C09-气体动理论#p044; type: direct -->

$$
f_{MB}(\vec r,\vec v)=f_0\left(\dfrac{\mu}{2\pi kT}\right)^{3/2}e^{-\frac{\varepsilon(v_x,v_y,v_z,x,y,z)}{kT}}
$$


<!-- src: C09-气体动理论#p044; type: direct -->

### 例题：大气层分子的平均势能

设大气温度 $T$ 稳定，以地面为重力势能零点，求证大气层分子的平均势能 $\bar{\varepsilon}_p=kT$。<!-- src: C09-气体动理论#p045ex1; type: direct -->

方法与步骤：

- 以地面为 $z$ 轴的坐标原点，向上为正。<!-- src: C09-气体动理论#p045ex1; type: direct -->
- 在高度 $z$ 处取截面积为 $\Delta S$、高为 $dz$ 的小体积元。<!-- src: C09-气体动理论#p045ex1; type: direct -->
- 该体积元内分子数密度 $n=n_0\,e^{-\frac{\mu g z}{kT}}$；分子数为 $n\,dz\,\Delta S$，对应的总势能为 $\mu g z\cdot n\,dz\,\Delta S$。<!-- src: C09-气体动理论#p045ex1; type: direct -->
- 平均势能等于总势能除以总分子数（对全高度积分）：<!-- src: C09-气体动理论#p045ex1; type: compressed -->

$$
\bar{\varepsilon}_p=\dfrac{\displaystyle\int_{0}^{\infty}\mu g z\,n\,dz\,\Delta S}{\displaystyle\int_{0}^{\infty}n\,dz\,\Delta S}=\dfrac{\displaystyle\int_{0}^{\infty}\mu g z\,n_0\,e^{-\frac{\mu g z}{kT}}\,dz}{\displaystyle\int_{0}^{\infty}n_0\,e^{-\frac{\mu g z}{kT}}\,dz}=kT
$$


<!-- src: C09-气体动理论#p045ex1; type: direct -->

- 关键判断：分子分母中的 $n_0$、$\Delta S$ 相消，平均势能只由温度决定，结果 $\bar{\varepsilon}_p=kT$。<!-- src: C09-气体动理论#p045ex1; type: one-step-inferred -->

## §9.6 能量按自由度均分定理和理想气体的内能

### 1. 自由度

自由度是一个力学概念，指确定一个物体的空间位置所需的独立坐标数。 <!-- src: C09-气体动理论#p046; type: direct -->

**(1) 单原子分子**

- 单原子分子可视为质点，确定其空间位置需要三个独立坐标 $(x, y, z)$。 <!-- src: C09-气体动理论#p046; type: direct -->
- 单原子分子有 3 个自由度，全部为平动自由度。 <!-- src: C09-气体动理论#p046; type: direct -->
- 配图：直角坐标系 $x$、$y$、$z$（原点 $O$），把单原子分子画为空间中一个点，其位置由坐标 $(x, y, z)$ 给出。 <!-- src: C09-气体动理论#p046g1; type: direct -->

**(2) 刚性双原子分子**

确定其空间位置需分步进行： <!-- src: C09-气体动理论#p047; type: direct -->

- 确定质心的位置需三个独立坐标。 <!-- src: C09-气体动理论#p047; type: direct -->
- 再确定两原子连线的方位，可用连线与三个坐标轴的夹角 $(\alpha, \beta, \gamma)$ 来确定。 <!-- src: C09-气体动理论#p047; type: direct -->
- 三个方向角满足约束 $\cos^2\alpha + \cos^2\beta + \cos^2\gamma = 1$。 <!-- src: C09-气体动理论#p047; type: direct -->
- 因此上述方位角只有两个独立，故只需两个坐标即可确定其方位。 <!-- src: C09-气体动理论#p047; type: direct -->
- 刚性双原子分子有 5 个自由度：3 个平动自由度 + 2 个转动自由度。 <!-- src: C09-气体动理论#p047; type: direct -->
- 配图：坐标系中两原子以连线相连（哑铃形），质心位于 $(x, y, z)$，两原子连线方向与 $x$、$y$、$z$ 轴的夹角分别标为 $\alpha$、$\beta$、$\gamma$。 <!-- src: C09-气体动理论#p047g1; type: direct -->

**(3) 刚性自由多原子分子**

确定其空间位置需分步进行： <!-- src: C09-气体动理论#p048; type: direct -->

- 确定质心的位置需三个独立坐标。 <!-- src: C09-气体动理论#p048; type: direct -->
- 确定两原子连线的方位需两个独立坐标。 <!-- src: C09-气体动理论#p048; type: direct -->
- 确定绕两原子连线的转动需一个独立坐标。 <!-- src: C09-气体动理论#p048; type: direct -->
- 刚性自由多原子分子有 6 个自由度：3 个平动自由度 + 3 个转动自由度。 <!-- src: C09-气体动理论#p048; type: direct -->

一般地讲，由 $n$ 个原子构成的分子，最多有 $3n$ 个自由度，分配为：3 个平动自由度、3 个转动自由度、$(3n-6)$ 个振动自由度。 <!-- src: C09-气体动理论#p048; type: direct -->

**自由度小结**

| 分子类型 | 平动自由度 | 转动自由度 | 振动自由度 | 总自由度 |
| --- | --- | --- | --- | --- |
| 单原子分子（视为质点） | 3 | 0 | 0 | 3 <!-- src: C09-气体动理论#p046; type: synthesized --> |
| 刚性双原子分子 | 3 | 2 | 0 | 5 <!-- src: C09-气体动理论#p047; type: synthesized --> |
| 刚性自由多原子分子 | 3 | 3 | 0 | 6 <!-- src: C09-气体动理论#p048; type: synthesized --> |
| $n$ 原子分子（一般，最多） | 3 | 3 | $3n-6$ | $3n$ <!-- src: C09-气体动理论#p048; type: synthesized --> |

### 2. 能量均分定理

**由平动动能导出每个平动自由度的能量**

理想气体分子的平均平动动能为 $\bar{\varepsilon}_k = \dfrac{3}{2}kT$，速度可分解为 $\vec v = \vec v_x + \vec v_y + \vec v_z$。 <!-- src: C09-气体动理论#p049; type: direct -->

$$
\bar{\varepsilon}_k = \frac{1}{2}\mu\,\overline{v^2} = \frac{1}{2}\mu\,\overline{v_x^2} + \frac{1}{2}\mu\,\overline{v_y^2} + \frac{1}{2}\mu\,\overline{v_z^2} = \frac{3}{2}kT
$$


<!-- src: C09-气体动理论#p049; type: direct -->

由各方向地位等价，$\overline{v_x^2} = \overline{v_y^2} = \overline{v_z^2}$，故 <!-- src: C09-气体动理论#p049; type: direct -->

$$
\frac{1}{2}\mu\,\overline{v_x^2} = \frac{1}{2}\mu\,\overline{v_y^2} = \frac{1}{2}\mu\,\overline{v_z^2} = \frac{1}{2}kT
$$


<!-- src: C09-气体动理论#p049; type: direct -->

结论：分子在每一个（平动）自由度上有相等的平均平动动能 $\dfrac{1}{2}kT$。 <!-- src: C09-气体动理论#p049; type: direct -->

**推广为能量均分定理**

- 上述结论可推广到转动和振动：在温度为 $T$ 的平衡态下，气体分子的每一个自由度都具有平均动能 $\dfrac{1}{2}kT$。 <!-- src: C09-气体动理论#p050; type: direct -->
- 经典统计物理学证明，上述结论是一个普遍成立的规律，称为能量按自由度均分定理（能量均分定理）。 <!-- src: C09-气体动理论#p050; type: direct -->
- 能量均分定理是对大量分子无规则热运动的统计平均的结果，是统计规律的表现。 <!-- src: C09-气体动理论#p050; type: direct -->

**含振动自由度时的平均动能与平均能量**

对处于平衡态的热力学系统，设气体分子有 $t$ 个平动自由度、$r$ 个转动自由度、$s$ 个振动自由度。 <!-- src: C09-气体动理论#p051; type: direct -->

- 分子热运动的平均动能： $\bar{\varepsilon}_k = (t + r + s)\dfrac{1}{2}kT$。 <!-- src: C09-气体动理论#p051; type: direct -->
- 每个振动自由度上还均分有 $\dfrac{1}{2}kT$ 的平均振动势能。 <!-- src: C09-气体动理论#p051; type: direct -->
- 分子热运动的平均能量： $\bar{\varepsilon} = \bar{\varepsilon}_k + s\cdot\dfrac{1}{2}kT = \dfrac{1}{2}(t + r + 2s)kT$。 <!-- src: C09-气体动理论#p051; type: direct -->

$$
\bar{\varepsilon} = \frac{i}{2}kT, \qquad i = t + r + 2s
$$


<!-- src: C09-气体动理论#p051; type: direct -->

> 说明：振动自由度在动能（计入 $\bar{\varepsilon}_k$）和势能上各均分 $\dfrac{1}{2}kT$，故在总自由度数 $i$ 中每个振动自由度按 2 计入（即 $i = t + r + 2s$）。 <!-- src: C09-气体动理论#p051; type: compressed -->

### 3. 理想气体的内能

**热力学系统内能的一般构成**

热力学系统的内能（气体的内能）= 气体分子的无规则热运动的总能量 + 气体分子之间的相互作用势能。 <!-- src: C09-气体动理论#p052; type: direct -->

**理想气体的特殊性**

- 理想气体分子之间无相互作用。 <!-- src: C09-气体动理论#p052; type: direct -->
- 因此理想气体的内能 $\Rightarrow$ 所有气体分子的无规则热运动的总能量。 <!-- src: C09-气体动理论#p052; type: direct -->

**理想气体内能公式**

$$
E = \frac{m}{M} N_A \cdot \frac{i}{2}kT = \frac{m}{M}\,\frac{i}{2}RT
$$


<!-- src: C09-气体动理论#p052; type: direct -->

$$
\boxed{\,E = \frac{m}{M}\,\frac{i}{2}RT\,}
$$


<!-- src: C09-气体动理论#p052; type: direct -->

其中 $m$ 为气体质量、$M$ 为摩尔质量，$\dfrac{m}{M}N_A$ 为分子总数，并用到 $N_A k = R$。 <!-- src: C09-气体动理论#p052; type: one-step-inferred -->

理想气体的内能仅是温度的单值函数，与气体的压强、体积无关。 <!-- src: C09-气体动理论#p052; type: direct -->

### 4. 例题：容器突然停止后分子速率平方平均值的增量

**问题设定**：容器内贮有质量为 $m$、摩尔质量为 $M$ 的理想气体；容器以速度 $u$ 作定向运动，今使容器突然停止，求容器内理想气体分子速度平方的平均值的增量 $\Delta\overline{v^2}$（分单原子、双原子讨论）。 <!-- src: C09-气体动理论#p053ex1; type: direct -->

**核心物理思想**：定向运动机械能转化为无规则热运动的能量。 <!-- src: C09-气体动理论#p053ex1; type: direct -->

**标准步骤与前置结论**

- 能量守恒方程： $\dfrac{1}{2}mu^2 = \Delta E$，其中内能 $E = \dfrac{m}{M}\dfrac{i}{2}RT$。 <!-- src: C09-气体动理论#p053ex1; type: direct -->
- 平动部分的桥梁关系：由 $\dfrac{1}{2}\mu\overline{v^2} = \dfrac{3}{2}kT$ 两边乘以 $N_A$，并利用 $\mu N_A = M$、$k N_A = R$，得 $\dfrac{1}{2}M\overline{v^2} = \dfrac{3}{2}RT$（$\overline{v^2}$ 只对应 3 个平动自由度）。 <!-- src: C09-气体动理论#p053ex1 + C09-气体动理论#p054ex1; type: synthesized -->

**单原子分子（$i = 3$）**

- $E = \dfrac{m}{M}\dfrac{3}{2}RT = \dfrac{1}{2}m\overline{v^2}$，代入守恒式得 $\dfrac{1}{2}mu^2 = \Delta\!\left(\dfrac{1}{2}m\overline{v^2}\right)$。 <!-- src: C09-气体动理论#p053ex1; type: direct -->
- 结果： $\Delta\overline{v^2} = u^2$。 <!-- src: C09-气体动理论#p053ex1; type: direct -->

**双原子分子（$i = 5$）**

- $E = \dfrac{m}{M}\dfrac{5}{2}RT$，利用 $\dfrac{5}{2}RT = \dfrac{5}{3}\cdot\dfrac{3}{2}RT = \dfrac{5}{3}\cdot\dfrac{1}{2}M\overline{v^2}$，得 $\dfrac{5}{6}M\overline{v^2} = \dfrac{5}{2}RT$，即 $E = \dfrac{5}{6}m\overline{v^2}$。 <!-- src: C09-气体动理论#p054ex1; type: direct -->
- 代入守恒式 $\dfrac{1}{2}mu^2 = \Delta\!\left(\dfrac{5}{6}m\overline{v^2}\right)$。 <!-- src: C09-气体动理论#p054ex1; type: direct -->
- 结果： $\Delta\overline{v^2} = \dfrac{3}{5}u^2$。 <!-- src: C09-气体动理论#p054ex1; type: direct -->

**易错点**：$\overline{v^2}$（速率平方平均值）只联系 3 个平动自由度，对应 $\dfrac{3}{2}RT$；而内能 $E$ 含全部 $i$ 个自由度。双原子时不能直接令 $\dfrac{1}{2}mu^2 = \Delta\!\left(\dfrac{1}{2}m\overline{v^2}\right)$，须按 $i=5$ 的内能写出 $E = \dfrac{5}{6}m\overline{v^2}$ 后再代入。 <!-- src: C09-气体动理论#p054ex1; type: one-step-inferred -->

## §9.7 气体内分子的碰撞

### 自由程与平均自由程

一个气体分子在任意两次连续碰撞之间所经过的自由路程称为**自由程**。 <!-- src: C09-气体动理论#p056; type: direct -->

每个分子在任意两次连续碰撞之间所经过的自由程，其长短和所需时间的多少，具有偶然性（随机性）。 <!-- src: C09-气体动理论#p056; type: direct -->

各段自由程的平均值称为**平均自由程**，记作 $\bar\lambda$。 <!-- src: C09-气体动理论#p056; type: direct -->

自由程示意图：在大量散布的气体分子（图中蓝色圆点）中，任取一个分子 $A$，其运动轨迹为一条红色折线；相邻两个折点（即两次碰撞）之间的每一段直线段就是一段自由程，各段长度与方向均不相同，体现自由程的偶然性。 <!-- src: C09-气体动理论#p056g1; type: compressed -->

### 平均碰撞频率

一个气体分子在单位时间内受到的平均碰撞次数称为**平均碰撞频率**，记作 $\bar Z$。 <!-- src: C09-气体动理论#p057; type: direct -->

设分子运动的平均速率为 $\bar v$，则平均碰撞频率与平均自由程的关系为

$$
\bar Z = \frac{\bar v}{\bar\lambda}, \qquad \bar\lambda = \frac{\bar v}{\bar Z}
$$


<!-- src: C09-气体动理论#p057; type: direct -->

推导平均碰撞频率时的简化假定：除被考察的分子 $A$ 以外，其他气体分子都看作不动；于是分子 $A$ 以相对于其他分子的平均速率（即平均相对速率）$\bar u$ 运动。 <!-- src: C09-气体动理论#p057 + C09-气体动理论#p058; type: synthesized -->

### 平均碰撞频率的推导（曲折圆柱体模型）

引入**分子有效直径** $d$：只有当某分子中心与分子 $A$ 中心之间的距离小于或等于分子有效直径 $d$ 时，该分子才能与分子 $A$ 相碰。 <!-- src: C09-气体动理论#p058; type: direct -->

碰撞判据（几何模型）：凡是中心落在“以分子 $A$ 的运动轨迹为轴、半径等于分子有效直径 $d$、长为 $\bar u$ 的曲折圆柱体”内的分子，在单位时间内都能与分子 $A$ 相碰。 <!-- src: C09-气体动理论#p058; type: direct -->

图像说明：分子 $A$ 沿折线轨迹运动，沿轨迹张成一个半径为 $d$（横向跨度即直径为 $2d$）的曲折圆柱（虚线包络）；单位时间内圆柱沿轴向的长度为平均相对速率 $\bar u$，凡中心进入该圆柱体的其他分子（蓝色圆点）均与 $A$ 发生碰撞。 <!-- src: C09-气体动理论#p058g1; type: compressed -->

由该模型得平均碰撞频率（$n$ 为分子数密度）：

$$
\bar Z = n\,\pi d^{2}\,\bar u
$$


<!-- src: C09-气体动理论#p058; type: direct -->

### 平均相对速率 $\bar u$（麦克斯韦速率分布下）

如果气体分子速率分布满足麦克斯韦速率分布律，则平均相对速率与平均速率之间满足

$$
\bar u = \sqrt{2}\,\cdot\,\bar v
$$


<!-- src: C09-气体动理论#p058 + C09-气体动理论#p059; type: direct -->

推导（以分子 1、分子 2 为例，$\vec u$ 为分子 1 相对分子 2 的速度）：

$$
\vec u = \vec v_1 - \vec v_2
$$


<!-- src: C09-气体动理论#p059; type: direct -->

$$
u^{2} = \vec u\cdot\vec u = (\vec v_1 - \vec v_2)\cdot(\vec v_1 - \vec v_2) = v_1^{2} + v_2^{2} - 2\,\vec v_1\cdot\vec v_2
$$


<!-- src: C09-气体动理论#p059; type: direct -->

取平均时，因两分子速度方向相互独立、各向同性，交叉项平均为零：$\overline{\vec v_1\cdot\vec v_2} = 0$。 <!-- src: C09-气体动理论#p059; type: direct -->

于是

$$
\overline{u^{2}} = \overline{v_1^{2}} + \overline{v_2^{2}} = 2\,\overline{v^{2}}
$$


<!-- src: C09-气体动理论#p059; type: direct -->

其中 $\overline{v^{2}}$ 为分子相对实验室参考系的速度平方的平均值。 <!-- src: C09-气体动理论#p059; type: direct -->

可用均方关系作近似说明：

$$
\bar u \approx \sqrt{\overline{u^{2}}} = \sqrt{2\,\overline{v^{2}}} \approx \sqrt{2}\,\bar v
$$


<!-- src: C09-气体动理论#p059; type: direct -->

图像说明：侧图以坐标系 $O\text{-}xyz$ 画出两分子的位置矢量 $\vec r_1$、$\vec r_2$，二者之差 $\vec R = \vec r_1 - \vec r_2$，用以类比说明相对量（相对速度 $\vec u = \vec v_1 - \vec v_2$）的矢量构成。 <!-- src: C09-气体动理论#p059g1; type: compressed -->

### 平均碰撞频率与平均自由程公式

将 $\bar u = \sqrt{2}\,\bar v$ 代入 $\bar Z = n\pi d^{2}\bar u$，得平均碰撞频率

$$
\bar Z = \sqrt{2}\,\pi d^{2}\,\bar v\,n
$$


<!-- src: C09-气体动理论#p060; type: direct -->

平均自由程

$$
\bar\lambda = \frac{\bar v}{\bar Z} = \frac{1}{\sqrt{2}\,\pi d^{2}\,n}
$$


<!-- src: C09-气体动理论#p060; type: direct -->

性质：平均自由程与分子有效直径的平方 $d^{2}$ 及单位体积内的分子数 $n$ 成反比；与平均速率 $\bar v$ 无关。 <!-- src: C09-气体动理论#p060; type: direct -->

利用 $p = n k T$，平均自由程又可写为

$$
\bar\lambda = \frac{kT}{\sqrt{2}\,\pi d^{2}\,p}
$$


<!-- src: C09-气体动理论#p060; type: direct -->

低压（压强很小）情形：$\bar\lambda$ 有可能大于容器线度，即分子很少与其它分子碰撞，却不断与器壁碰撞；此时其平均自由程可视为容器的线度。 <!-- src: C09-气体动理论#p060; type: direct -->

## §9.8 范德瓦耳斯气体状态方程

### 1. 分子力

假设分子间的相互作用力具有球对称性。<!-- src: C09-气体动理论#p061; type: direct -->

斥力与引力分别表示为：<!-- src: C09-气体动理论#p061; type: direct -->

$$
f_r = \frac{A}{r^{s}}, \qquad f_a = -\frac{B}{r^{t}}
$$


合力（分子力）为斥力与引力之和：<!-- src: C09-气体动理论#p061; type: direct -->

$$
f = f_r + f_a = \frac{A}{r^{s}} - \frac{B}{r^{t}}
$$


其中 $r$ 为两分子中心间的距离；$A$、$B$、$s$、$t$ 都是常量。<!-- src: C09-气体动理论#p061; type: direct -->

幂指数取值：$s = 10 \sim 13$；如果引力为范德瓦耳斯力，则 $t = 7$。<!-- src: C09-气体动理论#p061; type: direct -->

由 $s > t$ 可得 $|f_r|$ 比 $|f_a|$ 随距离增大衰减得更快，因而分子力可以认为具有一定的有效作用距离。<!-- src: C09-气体动理论#p061; type: direct -->

斥力的有效作用距离比引力的有效作用距离小；引力的有效作用距离可视为总的分子力的有效作用距离 $R$。<!-- src: C09-气体动理论#p061 + C09-气体动理论#p071; type: synthesized -->

分子力曲线（坐标：纵轴为力 $f$，横轴为距离 $r$，原点 $O$）：<!-- src: C09-气体动理论#p061g1 + C09-气体动理论#p065g2; type: synthesized -->

- 斥力 $f_r$（恒为正）：在 $r \to 0$ 附近很大，随 $r$ 增大单调减小并趋于 $0$。<!-- src: C09-气体动理论#p065g2; type: direct -->
- 引力 $f_a$（恒为负，位于横轴下方）：随 $r$ 增大由负值趋于 $0$。<!-- src: C09-气体动理论#p065g2; type: direct -->
- 合力 $f$（中间曲线）：当 $r < r_0$ 时为正（斥力占优，$r$ 很小处很大），在 $r = r_0$ 处过零（合力为零），当 $r > r_0$ 时为负（引力占优），并出现一个最负的极小值后随 $r$ 增大趋于 $0$，在 $R$ 附近回到约为 $0$。<!-- src: C09-气体动理论#p065g2; type: direct -->

### 2. 分子势能

由力与势能的关系 $f_r = -\dfrac{\mathrm{d}U_r}{\mathrm{d}r}$，即 $\mathrm{d}U_r = -f_r\,\mathrm{d}r$，积分 $\displaystyle\int_0^{U_r}\mathrm{d}U_r = -\int_\infty^{r} f_r\,\mathrm{d}r$，得斥力势能：<!-- src: C09-气体动理论#p062; type: direct -->

$$
U_r = -\int_\infty^{r}\frac{A}{r^{s}}\,\mathrm{d}r = \frac{A}{s-1}\cdot\frac{1}{r^{\,s-1}}
$$


同理由 $f_a = -\dfrac{\mathrm{d}U_a}{\mathrm{d}r}$，$\mathrm{d}U_a = -f_a\,\mathrm{d}r$，$\displaystyle\int_0^{U_a}\mathrm{d}U_a = -\int_\infty^{r} f_a\,\mathrm{d}r$，得引力势能：<!-- src: C09-气体动理论#p062; type: direct -->

$$
U_a = \int_\infty^{r}\frac{B}{r^{t}}\,\mathrm{d}r = -\frac{B}{t-1}\cdot\frac{1}{r^{\,t-1}}
$$


总势能为两者之和：<!-- src: C09-气体动理论#p062; type: direct -->

$$
U = U_r + U_a = \frac{A}{s-1}\cdot\frac{1}{r^{\,s-1}} - \frac{B}{t-1}\cdot\frac{1}{r^{\,t-1}}
$$


分子力的势能曲线（坐标：纵轴为势能 $U$，横轴为距离 $r$，原点 $O$）：<!-- src: C09-气体动理论#p062g1; type: direct -->

- 斥力势能 $U_r$（恒为正）：随 $r$ 增大单调减小趋于 $0$。<!-- src: C09-气体动理论#p062g1; type: direct -->
- 引力势能 $U_a$（恒为负）：随 $r$ 增大由负值趋于 $0$。<!-- src: C09-气体动理论#p062g1; type: direct -->
- 总势能 $U$（中间曲线）：在 $r$ 很小处为正（很高），随 $r$ 增大下降并过零，在 $r = r_0$ 处取极小值（势阱底部），其后随 $r$ 增大回升趋于 $0$。<!-- src: C09-气体动理论#p062g1 + C09-气体动理论#p063g1; type: synthesized -->

### 3. 平衡位置与势阱深度

平衡位置 $r = r_0$ 由 $\dfrac{\mathrm{d}U(r)}{\mathrm{d}r} = 0$ 确定：<!-- src: C09-气体动理论#p063; type: direct -->

$$
\frac{\mathrm{d}U(r)}{\mathrm{d}r} = 0 \;\Rightarrow\; r_0 = \left(\frac{B}{A}\right)^{\frac{1}{\,t-s\,}}, \qquad B = \frac{r_0^{\,t}}{r_0^{\,s}}\,A
$$


将 $B$ 代回，可把势能用 $r_0$ 表示：<!-- src: C09-气体动理论#p063; type: direct -->

$$
U(r) = \frac{A}{r_0^{\,s-1}}\left[\frac{1}{s-1}\left(\frac{r_0}{r}\right)^{s-1} - \frac{1}{t-1}\left(\frac{r_0}{r}\right)^{t-1}\right]
$$


当 $r = r_0$ 时 $U(r)$ 取最小值，记作 $-\varepsilon$，其中 $\varepsilon$ 为势阱的深度：<!-- src: C09-气体动理论#p063; type: direct -->

$$
-\varepsilon = U(r_0) = \frac{A}{r_0^{\,s-1}}\left[\frac{1}{s-1} - \frac{1}{t-1}\right]
$$


### 4. 兰纳-琼斯势（Lennard-Jones potential）

取 $A = 1$，势阱深度化为：<!-- src: C09-气体动理论#p064; type: direct -->

$$
\varepsilon = \frac{1}{r_0^{\,s-1}}\cdot\frac{s-t}{(s-1)(t-1)}
$$


用 $\varepsilon$ 表示的势能：<!-- src: C09-气体动理论#p064; type: direct -->

$$
U(r) = \varepsilon\left[\frac{t-1}{s-t}\left(\frac{r_0}{r}\right)^{s-1} - \frac{s-1}{s-t}\left(\frac{r_0}{r}\right)^{t-1}\right]
$$


取 $t = 7$、$s = 13$（即 $s-1 = 12$、$t-1 = 6$，系数化为 $1$ 与 $2$），得：<!-- src: C09-气体动理论#p064; type: direct -->

$$
U(r) = \varepsilon\left[\left(\frac{r_0}{r}\right)^{12} - 2\left(\frac{r_0}{r}\right)^{6}\right]
$$


或者令 $r = \sigma$ 时 $U(r) = 0$，则 $r_0 = 2^{1/6}\sigma$，势能写为标准的兰纳-琼斯势形式：<!-- src: C09-气体动理论#p064; type: direct -->

$$
U(r) = 4\varepsilon\left[\left(\frac{\sigma}{r}\right)^{12} - \left(\frac{\sigma}{r}\right)^{6}\right]
$$


该模型称为兰纳-琼斯模型，兰纳-琼斯势（Lennard-Jones potential），提出于 1924 年。<!-- src: C09-气体动理论#p064 + C09-气体动理论#p065; type: synthesized -->

兰纳-琼斯势的势能曲线与分子力曲线相互对应（左：势能曲线 $U$-$r$；右：分子力曲线 $f$-$r$）：<!-- src: C09-气体动理论#p065g1 + C09-气体动理论#p065g2; type: synthesized -->

- 势能曲线上：$U_r$（正，递减趋于 $0$）、$U_a$（负，趋于 $0$）合成总势能 $U$；$U$ 在 $r = r_0$ 处取极小（势阱），$U$ 曲线与 $r$ 轴的交点（$U = 0$）位于 $r_0$ 左侧、记作 $d$。<!-- src: C09-气体动理论#p065g1; type: direct -->
- 分子力曲线上：合力 $f$ 在 $r = r_0$ 处过零（对应势能极小、平衡位置），在 $R$ 处再次趋于 $0$（总分子力的有效作用距离）。<!-- src: C09-气体动理论#p065g2; type: direct -->

### 5. 几种分子力的势能模型

将分子力的势能曲线（纵轴 $U$、横轴 $r$）按模型对比，$d$ 为左侧排斥壁（势能陡升）所在的距离：<!-- src: C09-气体动理论#p066g1 + C09-气体动理论#p071g1; type: synthesized -->

| 模型 | 势能曲线 $U(r)$ 特征 |
| --- | --- |
| 兰纳-琼斯模型 | 排斥壁较“软”：小 $r$ 处为陡峭的排斥支（$U>0$），$U$ 在 $d$ 处过零、在 $r_0$ 处取势阱极小（$U<0$），其后随 $r$ 增大单调上升趋于 $0$ |
| 苏则朗模型 | 在 $r = d$ 处为竖直硬壁（刚性排斥）；$r > d$ 处有低于零的引力势阱，再随 $r$ 增大回升趋于 $0$ |
| 钢球模型 / 克劳修斯模型 | 在 $r = d$ 处为竖直硬壁；$r > d$ 处 $U \equiv 0$（无引力势阱） |

<!-- src: C09-气体动理论#p066g1 + C09-气体动理论#p071g1; type: direct -->

### 6. 分子体积所引起的修正——克劳修斯方程

理想气体不考虑分子的体积，分子被假设成没有体积的质点。<!-- src: C09-气体动理论#p067; type: direct -->

理想气体状态方程中的体积 $V_m$ 就是每个分子可以自由活动的空间体积（即每个分子在运动中可以到达的空间体积），$V_m$ 为气体的摩尔体积：<!-- src: C09-气体动理论#p067 + C09-气体动理论#p072; type: direct -->

$$
pV_m = RT
$$


如果把分子看作有一定体积的刚性球体，则每个分子能到达的空间小于气体的摩尔体积 $V_m$，分子能自由活动的空间体积为 $V_m - b$。<!-- src: C09-气体动理论#p067; type: direct -->

把状态方程中的自由活动空间由 $V_m$ 换成 $V_m - b$，即得克劳修斯方程：<!-- src: C09-气体动理论#p067; type: direct -->

$$
V_m - b = \frac{RT}{p}, \qquad p = \frac{RT}{V_m - b}
$$


修正量 $b$ 的物理意义：当 $p \to \infty$ 时 $V_m \to b$，$b$ 即气体无限压缩所达到的最小体积，也是 1 mol 气体分子所占有的最小体积；$b$ 可用实验方法测定。<!-- src: C09-气体动理论#p067; type: direct -->

#### b 的几何推导

考虑两个分子间的碰撞，分子 $\alpha$ 和分子 $\beta$ 都视为直径为 $d$ 的球体。当分子 $\alpha$ 趋近分子 $\beta$ 时，$\alpha$ 的中心将被排除在直径为 $2d$ 的球形区域之外。<!-- src: C09-气体动理论#p068; type: direct -->

当两分子碰撞时，分子 $\alpha$ 的中心不能进入这个球形区域，其体积为<!-- src: C09-气体动理论#p068; type: direct -->

$$
\frac{4}{3}\pi d^{3} = 8 \times \frac{4}{3}\pi\left(\frac{d}{2}\right)^{3}
$$


即等于一个分子体积的 8 倍。这个体积是 $\alpha$ 中心不能进入的“禁区”，也就是自由活动空间的减少量。<!-- src: C09-气体动理论#p068; type: direct -->

由于碰撞是相互的，这部分减少的自由活动空间应由两个分子分摊，平均每个分子的自由活动空间减少了分子体积的 4 倍。<!-- src: C09-气体动理论#p068; type: direct -->

故 1 mol 气体分子自由活动空间的减少量为<!-- src: C09-气体动理论#p068; type: direct -->

$$
b = 4 N_A \cdot \frac{4}{3}\pi\left(\frac{d}{2}\right)^{3}
$$


禁区示意图：画出两个直径均为 $d$ 的球形分子 $\beta$（左）与 $\alpha$（右）相互接触；以 $\beta$ 球心为中心、直径为 $2d$ 的球面（图中红色圆）即为 $\alpha$ 球心不能进入的禁区，禁区半径等于一个分子直径 $d$。<!-- src: C09-气体动理论#p068g1; type: compressed -->

### 7. 分子间引力所引起的修正

经体积修正后，气体内部的压强为 $\dfrac{RT}{V_m - b}$。但分子间存在引力，靠近器壁的分子受到指向气体内部的合引力，使其实际作用于器壁的压强进一步减小，因而还需作压强修正。<!-- src: C09-气体动理论#p073; type: synthesized -->

近壁分子受力示意图：容器内部远离器壁的分子 $\alpha$ 四周被其他分子对称包围，所受合引力为零；靠近器壁的分子 $\beta$ 的吸引力作用球被器壁截断，受到指向气体内部的净引力 $f$；$s$ 为引力的有效作用距离，坐标自器壁处 $O$ 沿 $x$ 方向量度。<!-- src: C09-气体动理论#p073g1; type: compressed -->

$s$ 为引力的有效作用距离；每一分子均有以 $s$ 为半径的吸引力作用球。<!-- src: C09-气体动理论#p073; type: direct -->

动量分析：分子弹性碰壁后在 $x$ 方向动量的增量为 $-p_{ix} - p_{ix} = -2p_{ix}$，故一个分子对器壁的冲量为 $2p_{ix}$。<!-- src: C09-气体动理论#p073; type: direct -->

由于引力 $f$ 的作用，在垂直于器壁方向上分子的动量减少 $\Delta k$，于是一个分子对器壁的冲量减少 $2\Delta k$。<!-- src: C09-气体动理论#p073; type: direct -->

压强 $p$ 等于气体分子在单位时间内施于单位面积器壁的冲量；由引力引起的压强减小量 $\Delta p$ 等于"单位时间内与单位面积器壁碰撞的分子数"乘以每个分子因引力而减少的冲量 $2\Delta k$。<!-- src: C09-气体动理论#p073; type: direct -->

于是修正后的压强为 $p = \dfrac{RT}{V_m - b} - \Delta p$。<!-- src: C09-气体动理论#p073; type: direct -->

比例关系：$\Delta k \propto f$，而 $f \propto n$，故 $\Delta k \propto n$；又单位时间内与单位面积器壁碰撞的分子数 $\propto n$。两者相乘，得压强减小量<!-- src: C09-气体动理论#p073; type: direct -->

$$
\Delta p \propto n^{2} \propto \frac{1}{V_m^{2}}
$$


### 8. 范德瓦耳斯方程

由分子间引力引起的压强减小量取为<!-- src: C09-气体动理论#p070; type: direct -->

$$
\Delta p = \frac{a}{V_m^{2}}
$$


它是 1 mol 气体在占有体积 $V_m$ 时、由于分子间存在引力而引起的压强减小量；式中 $a$ 称为范德瓦耳斯修正量，其具体数值由实验确定。<!-- src: C09-气体动理论#p070; type: direct -->

将 $\Delta p$ 代入 $p = \dfrac{RT}{V_m-b} - \Delta p$，整理即得 1 mol 气体的范德瓦耳斯方程：<!-- src: C09-气体动理论#p070; type: direct -->

$$
p = \frac{RT}{V_m - b} - \frac{a}{V_m^{2}} \;\Longrightarrow\; \left(p + \frac{a}{V_m^{2}}\right)(V_m - b) = RT
$$


#### 一般质量形式

设体积为 $V$ 的容器内装有一定量的气体，质量为 $m$，摩尔质量为 $M$，则 $V = \dfrac{m}{M} V_m$，即 $V_m = \dfrac{M}{m} V$。<!-- src: C09-气体动理论#p075; type: direct -->

代入 1 mol 方程并整理，即得一般质量 $m$ 气体的范德瓦耳斯方程：<!-- src: C09-气体动理论#p075; type: direct -->

$$
\left[p + \left(\frac{m}{M}\right)^{2}\frac{a}{V^{2}}\right]\left(V - \frac{m}{M}\,b\right) = \frac{m}{M}\,RT
$$
