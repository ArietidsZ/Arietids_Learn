---
title: "第9章 热力学平衡态（气体动理论）·速览"
description: "大学物理课程笔记：第9章 热力学平衡态（气体动理论）·速览。"
---

<div class="note-meta"><a href="/courses/physics/">大学物理目录</a><a href="/courses/physics/chapter-09/">阅读详版</a><a href="/downloads/physics/chapter-09-quick.md" download>下载 Markdown</a></div>

## §9.1 热运动的描述

- 研究对象：热力学系统（简称系统）；外界即系统之外的部分，二者以物理的或想象的边界相隔。本章只讨论气体。<!-- src: C09-气体动理论#p002; type: compressed -->
- 两种方法：宏观方法（热力学，由实验定律出发演绎，结果可靠普遍）；微观方法（经典统计物理学，其初级理论称分子动理论，从微观粒子总体行为借统计规律得宏观性质，结果近似、受模型局限）。<!-- src: C09-气体动理论#p002 + C09-气体动理论#p005; type: compressed -->
- 统计规律是大量偶然事件整体反映的规律性，三特征：只对大量偶然事件有意义；是不同于个体规律的整体规律；总伴随涨落。伽耳顿板演示：单球落槽偶然，多次后趋于稳定的钟形平均分布。<!-- src: C09-气体动理论#p003 + C09-气体动理论#p003g1; type: compressed -->
- 平衡态（理想模型）：孤立系统经充分长时间后达到的宏观性质不随时间变化的稳定状态；等价表述为不受外界影响时宏观性质不随时间变化。<!-- src: C09-气体动理论#p006; type: direct -->
- 易错区分：平衡态与稳定态都"宏观性质不随时间变化"，关键看是否受外界影响——两侧接触不同温度热源（$T_1>T_2$）的系统是稳定态而非平衡态。<!-- src: C09-气体动理论#p006g1; type: synthesized -->
- 平衡态微观图像：大量分子仍作无规则运动、速度因碰撞不断变化，但平均效果不随时间变化，宏观即表现为平衡态。<!-- src: C09-气体动理论#p007; type: compressed -->
- 状态参量（描写平衡态的宏观量）：体积 $V$（几何）、压强 $p$（力学，内部假想截面 $\Delta S$ 上的法向应力）、温度 $T$、物质的量 $\nu=\dfrac{m}{M}$。一组状态参量对应一个平衡态；给定 $m,M$ 时气体状态 $(p,V,T)$ 即平衡态。<!-- src: C09-气体动理论#p008; type: compressed -->

## §9.2 理想气体的状态方程与微观模型

- 理想气体状态方程（一定质量 $m,M$，压强趋于零的极限严格遵从）：

$$
pV=\frac{m}{M}RT
$$


其中 $\nu=\dfrac{m}{M}$，$R=8.31\,\mathrm{J\cdot mol^{-1}\cdot K^{-1}}$；$p,V,T$ 中任两个确定即定状态。<!-- src: C09-气体动理论#p009 + C09-气体动理论#p010; type: compressed -->
- 常量与符号：$N_A=6.022\times10^{23}\,\mathrm{mol^{-1}}$，$k=\dfrac{R}{N_A}=1.38\times10^{-23}\,\mathrm{J\cdot K^{-1}}$；分子质量 $\mu$、分子数 $N$、数密度 $n=\dfrac{N}{V}$，且 $m=\mu N$、$M=\mu N_A$。<!-- src: C09-气体动理论#p011; type: compressed -->
- 由 $m=\mu N$、$M=\mu N_A$、$R=kN_A$ 代入得 $pV=NkT$，即

$$
p=nkT
$$


<!-- src: C09-气体动理论#p011; type: compressed -->
- 微观模型三假设：(1) 分子线度相对分子间距可忽略，视为质点；(2) 除碰撞瞬间外忽略分子间及分子与器壁间作用力，且忽略重力；(3) 遵守经典力学规律、碰撞为弹性碰撞。分子数巨大无法逐一求解，采用统计方法。<!-- src: C09-气体动理论#p012; type: compressed -->
- 平衡态统计假设两条：(1) 任一位置数密度不占优势；(2) 沿任一方向运动不占优势。由此得（上划线为对全部分子平均）$\overline{v_x}=\overline{v_y}=\overline{v_z}=0$，且

$$
\overline{v_x^{\,2}}=\overline{v_y^{\,2}}=\overline{v_z^{\,2}}=\frac{1}{3}\,\overline{v^{2}}
$$


<!-- src: C09-气体动理论#p013; type: compressed -->

## §9.3 理想气体压强公式

- 压强公式（由单分子碰壁冲量 $2\mu v_{ix}$、斜柱体碰撞数 $n_i v_{ix}\mathrm{d}t\,\mathrm{d}A$，结合 $\overline{v_x^2}=\tfrac13\overline{v^2}$ 导出）：

$$
p=\frac{1}{3}\mu n\,\overline{v^{2}}=\frac{2}{3}n\,\overline{\varepsilon}_k
$$


由数密度 $n$ 与平均平动动能 $\overline{\varepsilon}_k$ 两统计平均量决定。<!-- src: C09-气体动理论#p017 + C09-气体动理论#p018; type: compressed -->
- 平均平动动能定义 $\overline{\varepsilon}_k=\dfrac{1}{2}\mu\,\overline{v^{2}}$。<!-- src: C09-气体动理论#p018; type: direct -->
- 温度微观意义：联立 $p=nkT$ 与 $p=\tfrac23 n\overline{\varepsilon}_k$ 得

$$
\overline{\varepsilon}_k=\frac{3}{2}kT
$$


温度是分子无规则运动平均平动动能（热运动强度）的量度，是大量分子的集体性质，对个别分子无意义。<!-- src: C09-气体动理论#p018; type: compressed -->
- 方均根速率：

$$
\sqrt{\overline{v^{2}}}=\sqrt{\frac{3kT}{\mu}}=\sqrt{\frac{3RT}{M}}
$$


易错点：区分分子质量 $\mu$ 与摩尔质量 $M$，二者满足 $M=\mu N_A$、$kN_A=R$，故 $\dfrac{k}{\mu}=\dfrac{R}{M}$。<!-- src: C09-气体动理论#p019; type: compressed -->

## §9.4 麦克斯韦速率分布

- 速率分布函数定义 $\dfrac{\mathrm{d}N}{N}=f(v)\,\mathrm{d}v$，$f(v)$ 表示速率在 $v$ 附近单位速率区间内分子数占总数的比率（概率）。<!-- src: C09-气体动理论#p021; type: compressed -->
- 区间比率 $\displaystyle\int_{v_1}^{v_2}f(v)\,\mathrm{d}v=\dfrac{\Delta N}{N}$；归一化 $\displaystyle\int_0^{\infty}f(v)\,\mathrm{d}v=1$（$f$-$v$ 曲线下总面积为 $1$，区间面积为该区间分子数比率）。<!-- src: C09-气体动理论#p022; type: compressed -->
- 麦克斯韦速率分布函数（平衡态理想气体）：

$$
f(v)=4\pi\left(\frac{\mu}{2\pi kT}\right)^{3/2}e^{-\frac{\mu v^{2}}{2kT}}\,v^{2}
$$


温度越高，速率大的分子越多，峰右移、降低变宽。<!-- src: C09-气体动理论#p023 + C09-气体动理论#p023g1; type: compressed -->
- 三种特征速率（$v_p$ 由 $\tfrac{\mathrm{d}}{\mathrm{d}v}f=0$ 求得；$\sqrt{\overline{v^2}}$、$\bar v$ 由 $\overline{v^2}=\int_0^\infty v^2 f\,\mathrm{d}v$、$\bar v=\int_0^\infty v f\,\mathrm{d}v$ 求得）：

| 特征速率 | 用 $k,\mu$ | 用 $R,M$ |
| --- | --- | --- |
| 最概然速率 $v_p$ | $\sqrt{\dfrac{2kT}{\mu}}$ | $\sqrt{\dfrac{2RT}{M}}$ |
| 平均速率 $\bar v$ | $\sqrt{\dfrac{8kT}{\pi\mu}}$ | $\sqrt{\dfrac{8RT}{\pi M}}$ |
| 方均根速率 $\sqrt{\overline{v^{2}}}$ | $\sqrt{\dfrac{3kT}{\mu}}$ | $\sqrt{\dfrac{3RT}{M}}$ |

<!-- src: C09-气体动理论#p024 + C09-气体动理论#p025; type: compressed -->
- 大小关系：$v_p<\bar v<\sqrt{\overline{v^{2}}}$。任意力学量平均值 $\bar G=\int_a^b G(x)f(x)\,\mathrm{d}x$。<!-- src: C09-气体动理论#p025; type: compressed -->
- 区间分子数 $\Delta N=\int_{v_1}^{v_2}N f(v)\,\mathrm{d}v$；区间内平均速率（易错：分母为该区间分子数，不为 $1$）：

$$
\bar v_{v_1\to v_2}=\frac{\int_{v_1}^{v_2}v f(v)\,\mathrm{d}v}{\int_{v_1}^{v_2}f(v)\,\mathrm{d}v}
$$


<!-- src: C09-气体动理论#p026; type: compressed -->
- 速度分布：在速度空间中速率 $v\sim v+\mathrm{d}v$ 对应体积 $4\pi v^2\,\mathrm{d}v$ 的球壳，球壳内单位体积末端点数均匀；导出麦克斯韦速度分布函数

$$
f(v_x,v_y,v_z)=\left(\frac{\mu}{2\pi kT}\right)^{3/2}e^{-\frac{\mu\left(v_x^{2}+v_y^{2}+v_z^{2}\right)}{2kT}}
$$


满足 $\dfrac{\mathrm{d}N(v_x,v_y,v_z)}{N}=f(v_x,v_y,v_z)\,\mathrm{d}v_x\mathrm{d}v_y\mathrm{d}v_z$。<!-- src: C09-气体动理论#p035 + C09-气体动理论#p036; type: compressed -->
- 可迁移方法：(1) 两气体特征速率之比用 $v_p=\sqrt{2RT/M}$ 套比，$v_p$ 大者分布峰偏右，且摩尔质量 $=$ 分子量 $\times10^{-3}\,\mathrm{kg}$；(2) 分段线性 $f(v)$ 由归一化 $\int_0^\infty f\,\mathrm{d}v=1$ 定常数、由 $\bar v=\int v f\,\mathrm{d}v$ 求平均、区间平均用上式分母不为 $1$；(3) 两气体混合 $f(v)=\dfrac{N_A f_A(v)+N_B f_B(v)}{N_A+N_B}$。<!-- src: C09-气体动理论#p029ex1 + C09-气体动理论#p031ex1 + C09-气体动理论#p032ex1; type: compressed -->

## §9.5 玻尔兹曼能量分布律

- 重力场（等温）取薄层力平衡 $\mathrm{d}p=-\mu g n\,\mathrm{d}z$，结合 $p=nkT$ 积分（边界 $n(0)=n_0$）得数密度按高度分布：

$$
n(z)=n_0\,e^{-\frac{\mu g z}{kT}}
$$


并由 $p=nkT$ 得等温气压公式 $p(z)=p_0\,e^{-\frac{\mu g z}{kT}}=p_0\,e^{-\frac{Mgz}{RT}}$。<!-- src: C09-气体动理论#p041 + C09-气体动理论#p042; type: compressed -->
- 重力场中按高度的归一化分布函数（由 $N=\int_0^\infty n_0 e^{-\mu g z/kT}\mathrm{d}z\,\mathrm{d}S=\dfrac{n_0 kT}{\mu g}\mathrm{d}S$ 求得）：

$$
f(z)=\frac{\mathrm{d}N}{N\,\mathrm{d}z}=\frac{\mu g}{kT}\,e^{-\frac{\mu g z}{kT}}
$$


<!-- src: C09-气体动理论#p055; type: compressed -->
- 玻尔兹曼密度分布律（推广到任意外场，$\mu g z\to\varepsilon_p(\vec r)$ 为粒子势能）：

$$
n(\vec r)=n_0\,e^{-\frac{\varepsilon_p(\vec r)}{kT}}
$$


<!-- src: C09-气体动理论#p043; type: direct -->
- 三个分布律：按位置 $f_B(\vec r)=f_0 e^{-\varepsilon_p(\vec r)/kT}$；按高度 $f(z)=\dfrac{\mu g}{kT}e^{-\mu g z/kT}$；按速度 $f(\vec v)=\left(\dfrac{\mu}{2\pi kT}\right)^{3/2}e^{-\mu v^2/2kT}$，其中 $\tfrac12\mu v^2=\varepsilon_k$。<!-- src: C09-气体动理论#p043; type: direct -->
- 麦克斯韦-玻尔兹曼能量分布律（速度与位置分布相互独立，相乘；$\varepsilon=\varepsilon_k+\varepsilon_p$）：

$$
f_{MB}(\vec r,\vec v)=f_0\left(\frac{\mu}{2\pi kT}\right)^{3/2}e^{-\frac{\varepsilon_k+\varepsilon_p}{kT}}
$$


<!-- src: C09-气体动理论#p044; type: compressed -->
- 可迁移方法：大气层分子平均势能 $\bar\varepsilon_p=\dfrac{\int_0^\infty \mu g z\,n\,\mathrm{d}z}{\int_0^\infty n\,\mathrm{d}z}=kT$（$n_0$、$\Delta S$ 相消，只由温度决定）。<!-- src: C09-气体动理论#p045ex1; type: compressed -->

## §9.6 能量按自由度均分定理和理想气体的内能

- 自由度（确定空间位置所需独立坐标数）：

| 分子类型 | 平动 | 转动 | 振动 | 总数 |
| --- | --- | --- | --- | --- |
| 单原子（质点） | 3 | 0 | 0 | 3 |
| 刚性双原子 | 3 | 2 | 0 | 5 |
| 刚性自由多原子 | 3 | 3 | 0 | 6 |
| $n$ 原子（最多） | 3 | 3 | $3n-6$ | $3n$ |

<!-- src: C09-气体动理论#p046 + C09-气体动理论#p047 + C09-气体动理论#p048; type: compressed -->
- 能量均分定理：温度 $T$ 平衡态下每个自由度具有平均动能 $\dfrac{1}{2}kT$（是统计平均结果）。设 $t$ 平动、$r$ 转动、$s$ 振动自由度，平均动能 $\bar\varepsilon_k=(t+r+s)\tfrac12 kT$，每个振动自由度另均分 $\tfrac12 kT$ 势能，故平均能量：

$$
\bar\varepsilon=\frac{i}{2}kT,\qquad i=t+r+2s
$$


（振动自由度在动能与势能各占 $\tfrac12 kT$，故在 $i$ 中按 2 计入）。<!-- src: C09-气体动理论#p049 + C09-气体动理论#p050 + C09-气体动理论#p051; type: compressed -->
- 理想气体内能（分子间无相互作用，内能为全部分子热运动总能量，仅是温度的单值函数）：

$$
E=\frac{m}{M}\,\frac{i}{2}RT
$$


<!-- src: C09-气体动理论#p052; type: compressed -->
- 可迁移方法（容器以 $u$ 定向运动突停，定向机械能转化为内能 $\tfrac12 mu^2=\Delta E$）：单原子 $i=3$ 得 $\Delta\overline{v^2}=u^2$；双原子 $i=5$ 得 $\Delta\overline{v^2}=\dfrac{3}{5}u^2$。易错点：$\overline{v^2}$ 只联系 3 个平动自由度（对应 $\tfrac32 RT$，即 $\tfrac12 M\overline{v^2}=\tfrac32 RT$），双原子须先按 $i=5$ 写 $E=\dfrac{5}{6}m\overline{v^2}$ 再代入，不能直接令 $\tfrac12 mu^2=\Delta(\tfrac12 m\overline{v^2})$。<!-- src: C09-气体动理论#p053ex1 + C09-气体动理论#p054ex1; type: compressed -->

## §9.7 气体内分子的碰撞

- 自由程：分子任意两次连续碰撞之间所经路程，长短具偶然性；各段平均值为平均自由程 $\bar\lambda$。平均碰撞频率 $\bar Z$：单位时间内受到的平均碰撞次数。关系：

$$
\bar Z=\frac{\bar v}{\bar\lambda},\qquad \bar\lambda=\frac{\bar v}{\bar Z}
$$


<!-- src: C09-气体动理论#p056 + C09-气体动理论#p057; type: compressed -->
- 曲折圆柱体模型：引入分子有效直径 $d$（中心间距 $\le d$ 才相碰），设其他分子不动、$A$ 以平均相对速率 $\bar u$ 运动，得 $\bar Z=n\pi d^{2}\bar u$。<!-- src: C09-气体动理论#p058; type: compressed -->
- 麦克斯韦速率分布下平均相对速率 $\bar u=\sqrt2\,\bar v$；可用 $\overline{u^2}=\overline{v_1^2}+\overline{v_2^2}=2\overline{v^2}$、交叉项 $\overline{\vec v_1\cdot\vec v_2}=0$ 作近似说明。<!-- src: C09-气体动理论#p059; type: compressed -->
- 代入得平均碰撞频率与平均自由程：

$$
\bar Z=\sqrt2\,\pi d^{2}\bar v\,n,\qquad \bar\lambda=\frac{1}{\sqrt2\,\pi d^{2}n}=\frac{kT}{\sqrt2\,\pi d^{2}p}
$$


$\bar\lambda$ 与 $d^2$、$n$ 成反比，与 $\bar v$ 无关；低压时 $\bar\lambda$ 可大于容器线度，此时取容器线度。<!-- src: C09-气体动理论#p060; type: compressed -->

## §9.8 范德瓦耳斯气体状态方程

- 分子力（球对称，斥力 $f_r=\dfrac{A}{r^{s}}$、引力 $f_a=-\dfrac{B}{r^{t}}$）：

$$
f=\frac{A}{r^{s}}-\frac{B}{r^{t}}
$$


$s=10\sim13$，范德瓦耳斯力 $t=7$；$s>t$ 故斥力比引力随距离增大衰减更快、有效作用距离更短，分子力具有一定有效作用距离 $R$。合力在 $r<r_0$ 为斥、$r=r_0$ 为零、$r>r_0$ 为引并经极小后趋零。<!-- src: C09-气体动理论#p061 + C09-气体动理论#p065g2; type: compressed -->
- 分子势能（由 $f=-\mathrm{d}U/\mathrm{d}r$ 积分）：

$$
U=U_r+U_a=\frac{A}{s-1}\cdot\frac{1}{r^{\,s-1}}-\frac{B}{t-1}\cdot\frac{1}{r^{\,t-1}}
$$


总势能在 $r=r_0$ 处取极小（势阱底）。<!-- src: C09-气体动理论#p062; type: compressed -->
- 平衡位置由 $\dfrac{\mathrm{d}U}{\mathrm{d}r}=0$ 得 $r_0=\left(\dfrac{B}{A}\right)^{\frac{1}{t-s}}$；势阱深度 $\varepsilon$ 满足 $U(r_0)=-\varepsilon$。<!-- src: C09-气体动理论#p063; type: compressed -->
- 兰纳-琼斯势（取 $t=7,s=13$；令 $U(\sigma)=0$ 则 $r_0=2^{1/6}\sigma$，提出于 1924 年）：

$$
U(r)=\varepsilon\left[\left(\frac{r_0}{r}\right)^{12}-2\left(\frac{r_0}{r}\right)^{6}\right]=4\varepsilon\left[\left(\frac{\sigma}{r}\right)^{12}-\left(\frac{\sigma}{r}\right)^{6}\right]
$$


<!-- src: C09-气体动理论#p064 + C09-气体动理论#p065; type: compressed -->
- 几种势能模型：兰纳-琼斯（排斥壁较"软"，$d$ 处过零、$r_0$ 处势阱极小）；苏则朗（$r=d$ 竖直硬壁，$r>d$ 有引力势阱）；钢球/克劳修斯（$r=d$ 硬壁，$r>d$ 时 $U\equiv0$ 无势阱）。<!-- src: C09-气体动理论#p066g1 + C09-气体动理论#p071g1; type: compressed -->
- 体积修正（克劳修斯方程）：分子有体积，自由活动空间由 $V_m$ 减为 $V_m-b$，得 $p=\dfrac{RT}{V_m-b}$；$b$ 为 1 mol 气体最小体积，几何上 $b=4N_A\cdot\dfrac{4}{3}\pi\left(\dfrac{d}{2}\right)^3$（禁区为分子体积 8 倍、两分子分摊为 4 倍）。<!-- src: C09-气体动理论#p067 + C09-气体动理论#p068; type: compressed -->
- 引力修正：近壁分子受指向内部净引力使器壁压强减小 $\Delta p$；因 $\Delta k\propto f\propto n$ 且碰壁分子数 $\propto n$，故 $\Delta p\propto n^2\propto\dfrac{1}{V_m^2}$，取 $\Delta p=\dfrac{a}{V_m^2}$（$a$ 为范德瓦耳斯修正量，由实验定）。<!-- src: C09-气体动理论#p073 + C09-气体动理论#p070; type: compressed -->
- 范德瓦耳斯方程（1 mol）：

$$
\left(p+\frac{a}{V_m^{2}}\right)(V_m-b)=RT
$$


一般质量 $m$（$V_m=\dfrac{M}{m}V$）：

$$
\left[p+\left(\frac{m}{M}\right)^{2}\frac{a}{V^{2}}\right]\left(V-\frac{m}{M}\,b\right)=\frac{m}{M}\,RT
$$


<!-- src: C09-气体动理论#p070 + C09-气体动理论#p075; type: compressed -->
