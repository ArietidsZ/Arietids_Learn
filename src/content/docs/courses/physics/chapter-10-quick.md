---
title: "第10章 热力学定律 · 速览"
description: "大学物理课程笔记：第10章 热力学定律 · 速览。"
---

<div class="note-meta"><a href="/courses/physics/">大学物理目录</a><a href="/courses/physics/chapter-10/">阅读详版</a><a href="/downloads/physics/chapter-10-quick.md" download>下载 Markdown</a></div>

## §10.1 功、热量和内能

### 过程与准静态过程

- 平衡态：系统状态参量不随时间变化。 <!-- src: PH-C10#p002; type: direct -->
- 过程：系统与外界相互作用使平衡态被破坏，从一平衡态过渡到另一平衡态；中间环节为 平衡态1 → 非平衡态 → 平衡态2。 <!-- src: PH-C10#p002; type: compressed -->
- 非平衡过程：每步可观测微小变化所需时间都小于弛豫时间，中间各态皆非平衡态。 <!-- src: PH-C10#p002; type: direct -->
- 准静态过程（平衡过程）：过程中每一时刻系统都处于平衡态；为理想模型，对应实际过程无限缓慢地进行。 <!-- src: PH-C10#p002; type: compressed -->
- 实现条件：压缩或传热无限缓慢（$\Delta p \to 0$ 或 $\Delta T \to 0$）时为准静态过程；本课程的准静态过程均指无摩擦准静态过程，可用平衡态参量描述系统与外界的相互作用。 <!-- src: PH-C10#p003ex + PH-C10#p005ex + PH-C10#p007; type: compressed -->

### 状态参量与 p-V 图

- 状态参量为 $p$、$V$、$T$，任意两个确定即确定状态；理想气体状态方程 $pV=\dfrac{m}{M}RT$，$p=nkT$。 <!-- src: PH-C10#p006; type: direct -->
- p-V 图：一点表示一个平衡态，一条曲线表示一个准静态过程。 <!-- src: PH-C10#p006; type: direct -->

### 做功

- 做功是系统与外界相互作用的一种方式，可改变系统状态。 <!-- src: PH-C10#p007; type: direct -->
- 准静态元功（系统对外界）：$\delta A = p\,dV$，总功 $A=\displaystyle\int_{V_1}^{V_2} p\,dV$。 <!-- src: PH-C10#p009 + PH-C10#p010; type: compressed -->
- 几何意义：功在数值上等于 p-V 图上过程曲线下的面积；功是过程量，与路径有关。 <!-- src: PH-C10#p010; type: direct -->
- 若以"外界对系统所做的功"计，则 $\delta A=-p\,dV$，$A=-\displaystyle\int_{V_1}^{V_2}p\,dV$。 <!-- src: PH-C10#p008; type: direct -->

### 传递热量与内能

- 热量：利用温度差在系统与外界间传递的能量；与做功并列为相互作用的两种方式；热量是过程量。 <!-- src: PH-C10#p011; type: compressed -->
- 绝热过程：系统被绝热壁隔绝下与外界相互作用，只能以做功交换能量；焦耳实验表明初末态一定时绝热功与过程无关，由此引入态函数内能 $E$：$E_2-E_1=A_{\text{绝}}$。 <!-- src: PH-C10#p012; type: compressed -->
- 内能是态函数：由状态唯一确定，$\Delta E=E_2-E_1$ 与过程无关；做功与传热都可作内能变化的量度。 <!-- src: PH-C10#p014; type: compressed -->
- 理想气体内能 $E=\dfrac{m}{M}\dfrac{i}{2}RT=E(T)$，只与温度有关（焦耳自由膨胀实验）；非理想气体 $E=E(V,T)$。 <!-- src: PH-C10#p015; type: compressed -->

## §10.2 热力学第一定律及热容

### 热力学第一定律

- 有限过程 $Q=\Delta E+A$；元过程 $\delta Q=dE+\delta A$。$Q$、$A$ 为过程量（记 $\delta$），$E$ 为态函数（记 $d$）。 <!-- src: PH-C10#p016; type: compressed -->
- 符号规定：$Q$ 吸热为正、放热为负；$A$ 系统对外做功为正、外界对系统做功为负。 <!-- src: PH-C10#p017; type: direct -->
- 第一类永动机：不输入能量即可周而复始对外做功的机器，不可能制造。 <!-- src: PH-C10#p016; type: compressed -->

### 热容

- 热容 $C=\dfrac{\delta Q}{dT}$（与过程有关）；摩尔热容 $C_m=\dfrac{\delta Q_m}{dT}$（1 mol）。 <!-- src: PH-C10#p018; type: direct -->
- 定压摩尔热容 $C_{p,m}=\left(\dfrac{\delta Q_m}{dT}\right)_p$；定体摩尔热容 $C_{V,m}=\left(\dfrac{\delta Q_m}{dT}\right)_V$。 <!-- src: PH-C10#p019; type: direct -->

## §10.3 理想气体的典型热力学过程

### 四种典型过程对比

下表 $A$ 取系统对外做功，$T_2-T_1$ 为温度增量：

| 过程 | 条件 / 过程方程 | $A$（系统对外） | $Q$ | $\Delta E$ |
| --- | --- | --- | --- | --- |
| 等体 | $V=C$，$dV=0$ | $0$ | $Q_V=\Delta E$ | $\dfrac{m}{M}C_{V,m}(T_2-T_1)$ |
| 等温 | $T=C$，$pV=C$ | $\dfrac{m}{M}RT\ln\dfrac{V_2}{V_1}=\dfrac{m}{M}RT\ln\dfrac{p_1}{p_2}$ | $Q=A$ | $0$ |
| 等压 | $p=C$ | $p(V_2-V_1)=\dfrac{m}{M}R(T_2-T_1)$ | $Q_p=\dfrac{m}{M}C_{p,m}(T_2-T_1)$ | $\dfrac{m}{M}C_{V,m}(T_2-T_1)$ |
| 绝热 | $pV^{\gamma}=C$，$TV^{\gamma-1}=C$，$p^{\gamma-1}T^{-\gamma}=C$ | $\dfrac{p_2V_2-p_1V_1}{1-\gamma}=\dfrac{m}{M}\dfrac{R}{1-\gamma}(T_2-T_1)=-\Delta E$ | $0$ | $\dfrac{m}{M}C_{V,m}(T_2-T_1)$ |

<!-- src: PH-C10#p020 + PH-C10#p026 + PH-C10#p027 + PH-C10#p029 + PH-C10#p031 + PH-C10#p034; type: compressed -->

- 任一过程内能增量均可用 $\Delta E=\dfrac{m}{M}C_{V,m}(T_2-T_1)=\dfrac{m}{M}\dfrac{i}{2}R(T_2-T_1)$ 计算（内能只随温度变）。 <!-- src: PH-C10#p021 + PH-C10#p022; type: compressed -->

### 自由度、摩尔热容与比热容比

- $C_{V,m}=\dfrac{i}{2}R=\dfrac{dE_m}{dT}$；迈耶公式 $C_{p,m}=C_{V,m}+R$；比热容比 $\gamma=\dfrac{C_{p,m}}{C_{V,m}}=\dfrac{i+2}{i}$，$C_{p,m}=\dfrac{i+2}{2}R$。 <!-- src: PH-C10#p022 + PH-C10#p029 + PH-C10#p030; type: compressed -->

| 分子类型 | $i$ | $C_{V,m}$ | $C_{p,m}$ | $\gamma$ |
| --- | --- | --- | --- | --- |
| 单原子 | 3 | $\dfrac{3}{2}R$ | $\dfrac{5}{2}R$ | 1.67 |
| 刚性双原子 | 5 | $\dfrac{5}{2}R$ | $\dfrac{7}{2}R$ | 1.4 |
| 刚性多原子 | 6 | $3R$ | $4R$ | 1.33 |
| 非刚性双原子 | 7 | $\dfrac{7}{2}R$ | $\dfrac{9}{2}R$ | $\dfrac{9}{7}$ |

<!-- src: PH-C10#p023t1 + PH-C10#p030 + PH-C10#p030t1; type: compressed -->

- 量子效应：$\mathrm{H_2}$ 的 $C_{V,m}$ 随温度呈阶梯状——低温 $\dfrac{3}{2}R$（仅平动）→ 常温 $\dfrac{5}{2}R$（激发转动）→ 高温 $\dfrac{7}{2}R$（激发振动）。 <!-- src: PH-C10#p025; type: compressed -->
- $0\,^\circ\mathrm{C}$ 实验测定 $C_{V,m}/R$ 与上表理论值基本符合：单原子气体（He、Ne、Ar 等）约 1.5，双原子气体（$\mathrm{H_2}$、$\mathrm{O_2}$、$\mathrm{N_2}$ 等）约 2.5，多原子气体（$\mathrm{CO_2}$、$\mathrm{H_2O}$、$\mathrm{CH_4}$ 等）约 3 以上。 <!-- src: PH-C10#p024t1; type: compressed -->

### 各过程要点补充

- 等体：$dV=0$，$\delta A=0$，$\delta Q_V=dE$，吸热完全用于增加内能。 <!-- src: PH-C10#p020; type: compressed -->
- 等温：$dE=0$，$\delta Q_T=\delta A$（吸热全部转化为对外做功）。 <!-- src: PH-C10#p026; type: direct -->
- 等压：$\delta Q_p=dE+p\,dV$。 <!-- src: PH-C10#p027; type: direct -->
- 绝热：$\delta Q=0$，$\Delta E=-A$，对外做功完全由内能减少提供。 <!-- src: PH-C10#p031; type: direct -->
- 绝热线比等温线陡：交点处 $\left(\dfrac{dp}{dV}\right)_{\text{绝}}=-\gamma\dfrac{p}{V}$，$\left(\dfrac{dp}{dV}\right)_{T}=-\dfrac{p}{V}$，因 $\gamma>1$ 故绝热线斜率绝对值更大。 <!-- src: PH-C10#p035 + PH-C10#p036; type: compressed -->

### 多方过程

- 过程方程 $pV^{n}=C_1$（$n$ 为多方指数）；多方摩尔热容 $C_{n,m}=\left(\dfrac{\delta Q_m}{dT}\right)_n=\dfrac{nC_{V,m}-C_{p,m}}{n-1}=\dfrac{n-\gamma}{n-1}C_{V,m}$，且 $n=\dfrac{C_{n,m}-C_{p,m}}{C_{n,m}-C_{V,m}}$。 <!-- src: PH-C10#p038 + PH-C10#p040; type: compressed -->
- 功（$n\neq1$）：$A=\dfrac{p_2V_2-p_1V_1}{1-n}$；$\Delta E=\dfrac{m}{M}C_{V,m}(T_2-T_1)$；$Q=A+\Delta E$。 <!-- src: PH-C10#p041; type: direct -->

| $C_{n,m}$ | $n$ | 过程方程 | 过程 |
| --- | --- | --- | --- |
| $C_{p,m}$ | $0$ | $p=C$ | 等压 |
| $C_{V,m}$ | $\to\infty$ | $V=C$ | 等体 |
| $\to\infty$ | $1$ | $pV=C$ | 等温 |
| $0$ | $\gamma$ | $pV^{\gamma}=C$ | 绝热 |

<!-- src: PH-C10#p042t1; type: direct -->

### 典型例题方法

- 用面积表示 $A$、$Q$、$\Delta E$：利用 $E$ 仅依赖温度，把 $A\to B$ 等效为"沿等温线到 $G$、再沿绝热线到 $B$"，分别用曲线下面积表示功与内能变化，$Q=A+\Delta E=S_{ABCDA}-S_{GBCFG}$。 <!-- src: PH-C10#p037ex; type: compressed -->
- 等压加热：内能增量只随温度变，一律用 $C_{V,m}$ 算 $\Delta E$（即使过程为等压）；等压吸热用 $C_{p,m}$；等压下体积比即温度比。 <!-- src: PH-C10#p043ex; type: compressed -->
- 直线 $ab$ 过程（1 mol 单原子，$p=2-\dfrac{V}{20}$）：始末等温（$p_aV_a=p_bV_b$）故 $\Delta E=0$、$Q=A=2000\,\mathrm{J}$；最高温点 $c$ 由"等温线相切"即 $\dfrac{dT}{dV}=0$ 定出 $V_c=20\times10^{-3}\,\mathrm{m^3}$、$T_{\max}=241\,\mathrm{K}$（升温/降温分界）；吸放热分界点 $d$ 由"绝热线相切"或 $\dfrac{\delta Q}{dV}=5-\dfrac{V}{5}=0$ 定出 $V_d=25\times10^{-3}\,\mathrm{m^3}$；$ac$ 吸热、$cd$ 吸热、$db$ 放热（$cd$ 段虽已降温，但对外做功仍超过内能减少，故仍吸热）。 <!-- src: PH-C10#p044 + PH-C10#p045 + PH-C10#p046 + PH-C10#p047 + PH-C10#p048 + PH-C10#p049 + PH-C10#p050; type: compressed -->

## §10.4 循环过程 卡诺循环过程

### 循环过程

- 循环：系统经一系列变化又回到初态，$\Delta E=0$。 <!-- src: PH-C10#p051 + PH-C10#p052; type: compressed -->
- 净功 $A=A_a-A_b$，数值上等于 p-V 图上循环曲线所围的面积。 <!-- src: PH-C10#p052; type: direct -->
- 正循环（顺时针）：从高温吸热 $Q_1$、向低温放热 $Q_2$、对外做净功，$Q_1-Q_2=A$；逆循环（逆时针）：外界做净功，从低温吸热、向高温放热。 <!-- src: PH-C10#p053; type: compressed -->
- 热机：做正循环的设备，其工作物质称工作物质；致冷机：做逆循环的设备。 <!-- src: PH-C10#p054 + PH-C10#p065 + PH-C10#p067; type: compressed -->

### 热机效率与卡诺循环

- 热机效率 $\eta=\dfrac{A}{Q_1}=\dfrac{Q_1-Q_2}{Q_1}=1-\dfrac{Q_2}{Q_1}$。 <!-- src: PH-C10#p054; type: direct -->
- 卡诺循环：工质只与两个恒温热源交换热量，由两个等温过程和两个绝热过程组成（理想气体准静态）。 <!-- src: PH-C10#p057; type: compressed -->
- 各过程：$ab$ 等温 $T_1$ 吸热 $Q_1=\dfrac{m}{M}RT_1\ln\dfrac{V_2}{V_1}$；$cd$ 等温 $T_2$ 放热 $Q_2=\dfrac{m}{M}RT_2\ln\dfrac{V_3}{V_4}$；$bc$、$da$ 绝热 $Q=0$。绝热关系给出 $\dfrac{V_2}{V_1}=\dfrac{V_3}{V_4}$。 <!-- src: PH-C10#p058 + PH-C10#p059; type: compressed -->
- 卡诺热机效率 $\eta=1-\dfrac{T_2}{T_1}$，仅由两热源温度决定。 <!-- src: PH-C10#p059 + PH-C10#p060; type: compressed -->
- 卡诺致冷机致冷系数 $w=\dfrac{Q_2}{A}=\dfrac{Q_2}{Q_1-Q_2}=\dfrac{T_2}{T_1-T_2}$。 <!-- src: PH-C10#p067 + PH-C10#p068; type: compressed -->

### 奥托循环

- 四冲程汽油机理想化：$1\to2$ 绝热压缩，$2\to3$ 等容吸热 $Q_1$，$3\to4$ 绝热膨胀，$4\to1$ 等容放热 $Q_2$。 <!-- src: PH-C10#p061g1; type: synthesized -->
- 效率 $\eta=1-\dfrac{T_4-T_1}{T_3-T_2}=1-\dfrac{T_1}{T_2}=1-\left(\dfrac{V_2}{V_1}\right)^{\gamma-1}$，$\dfrac{V_1}{V_2}$ 为压缩比；取 $\dfrac{V_1}{V_2}\approx5$、$\gamma\approx1.5$ 得 $\eta\approx55\%$，实际约 $25\%$。 <!-- src: PH-C10#p062; type: compressed -->

### 例题与应用

- $AB$、$CD$ 等压 + $BC$、$DA$ 绝热循环：等压用 $\dfrac{T}{V}=\text{const}$、绝热用 $TV^{\gamma-1}=\text{const}$，联立消去 $T_A$、$T_D$，得 $\eta=1-\dfrac{T_C}{T_B}$。 <!-- src: PH-C10#p063ex + PH-C10#p064ex; type: compressed -->
- 家用制冷机（冰箱、空调）为致冷机应用：夏天从室内吸热向室外排出；冬天从室外吸热向室内放出。 <!-- src: PH-C10#p069; type: compressed -->

## §10.5 热力学第二定律

### 热机效率与第二类永动机

- 由 $\eta=1-\dfrac{Q_2}{Q_1}$ 得：①$\eta\le1$；②$Q_2$ 越小 $\eta$ 越接近 1。问题：$\eta$ 能否等于 1（$Q_1$ 全部转化为功）。 <!-- src: PH-C10#p070; type: compressed -->
- 第二类永动机：只与单一热源交换热量的热机（$Q_2=0$、$A=Q_1$、$\eta=1$）；而卡诺循环 $\eta=1-\dfrac{T_2}{T_1}$，因 $T_1>T_2>0$ 故 $\eta<1$。 <!-- src: PH-C10#p071 + PH-C10#p072g1; type: compressed -->

### 两条表述

- 开尔文表述：第二类永动机不可能制成；等价说法——不可能从单一热源吸收热量使之完全转化为功，而不引起其他变化。 <!-- src: PH-C10#p072; ref: 开尔文表述; type: direct -->
- 克劳修斯表述：热量不可能自动地从低温物体传到高温物体；等价说法——不可能把热量从低温物体传向高温物体，而不引起其他变化。 <!-- src: PH-C10#p075; ref: 克劳修斯表述; type: direct -->
- 理想致冷机（$A=0$ 即把热量从低温送回高温）不违背第一定律，但与卡诺热机组合可得第二类永动机；限定语"单一热源／自动地／不引起其他变化"均不可省略。 <!-- src: PH-C10#p073 + PH-C10#p072 + PH-C10#p075; type: compressed -->

## §10.6 热力学过程的不可逆性

### 可逆与不可逆过程

- 可逆过程：系统由初态 $i$ 到末态 $f$ 后，能使系统回到 $i$ 且外界同时复原。 <!-- src: PH-C10#p076; ref: 可逆过程; type: direct -->
- 不可逆过程：系统不能回到 $i$，或系统回到 $i$ 但外界不能同时复原。 <!-- src: PH-C10#p076; ref: 不可逆过程; type: direct -->
- 判据：无摩擦的准静态过程是可逆过程。 <!-- src: PH-C10#p076; type: direct -->

### 第二定律的实质与等价性

- 克劳修斯表述实质指出热传导过程不可逆，开尔文表述实质指出功变热过程不可逆；实质在于一切与热现象有关的实际宏观过程都是不可逆的，且各不可逆过程互相关联。 <!-- src: PH-C10#p077; type: compressed -->
- 例：理想气体向真空自由膨胀是不可逆过程，初末两态温度相同。 <!-- src: PH-C10#p077 + PH-C10#p078; type: compressed -->
- 等价性：由开尔文表述可推出克劳修斯表述、由克劳修斯表述可推出开尔文表述（均用反证，组合装置构造第二类永动机或自动传热），故两表述等价。 <!-- src: PH-C10#p079 + PH-C10#p080; type: compressed -->

### 热机分类与卡诺定理

- 按是否产生可逆循环分为可逆热机、卡诺热机（可逆卡诺）、不可逆热机；每个不可逆过程都可作为第二定律的一种表述。 <!-- src: PH-C10#p081; type: compressed -->
- 卡诺定理(1)：相同两热源间一切可逆卡诺热机效率相等且与工质无关，$\eta=1-\dfrac{T_2}{T_1}$。 <!-- src: PH-C10#p082; ref: 卡诺定理(1); type: direct -->
- 卡诺定理(2)：相同两热源间一切不可逆卡诺热机效率不可能高于可逆卡诺热机，$\eta\le1-\dfrac{T_2}{T_1}$。 <!-- src: PH-C10#p082; ref: 卡诺定理(2); type: direct -->
- 推论：任意可逆循环效率不大于工作于其所经历的最高温热源 $T_m$ 与最低温热源 $T_n$ 之间的可逆卡诺循环效率，$\eta_{\text{任意}}\le1-\dfrac{T_n}{T_m}$。 <!-- src: PH-C10#p083; type: compressed -->
- 证明思路：任意可逆循环可用 $n$ 个微小可逆卡诺循环代替（相邻绝热段重合相消）；每个微小循环 $T_{i1}\le T_m$、$T_{i2}\ge T_n$，故 $\eta_i\le1-\dfrac{T_n}{T_m}$；用热量对各循环求和即得上界。 <!-- src: PH-C10#p085 + PH-C10#p086; type: compressed -->

## §10.7 热力学系统的熵

### 热温比与克劳修斯等式

- 可逆卡诺循环：由 $\eta=1-\dfrac{Q_2}{Q_1}=1-\dfrac{T_2}{T_1}$ 得 $\dfrac{Q_1}{T_1}=\dfrac{Q_2}{T_2}$（绝对值）；取 $Q$ 为代数量（吸正放负）则 $\dfrac{Q_1}{T_1}+\dfrac{Q_2}{T_2}=0$。 <!-- src: PH-C10#p087; type: compressed -->
- 任意可逆循环用大量微小可逆卡诺循环逼近，$\displaystyle\sum\dfrac{\Delta Q_i}{T_i}=0$；$n\to\infty$ 得克劳修斯等式 $\displaystyle\oint\dfrac{\delta Q}{T}=0$（仅对可逆循环成立）。 <!-- src: PH-C10#p088 + PH-C10#p089; type: compressed -->
- 沿可逆过程 $\displaystyle\int_a^b\dfrac{\delta Q}{T}$ 只取决于初末态、与路径无关，故存在态函数熵 $S$。 <!-- src: PH-C10#p090 + PH-C10#p091; type: compressed -->

### 熵的定义与性质

- 熵定义（沿任一可逆过程）：$S_b-S_a=\displaystyle\int_a^b\dfrac{\delta Q}{T}$；可逆微分式 $dS=\dfrac{\delta Q}{T}$。 <!-- src: PH-C10#p091 + PH-C10#p092; ref: 熵的定义; type: compressed -->
- 平衡态熵完全确定，与到达该态的过程无关；不可逆过程的熵变可设计连接同样初末态的可逆过程来算；熵具可加性（系统熵等于各部分熵的代数和）。 <!-- src: PH-C10#p093; type: compressed -->

### T-S 图

- 可逆过程有 $\delta Q=T\,dS$，$Q=\displaystyle\int_a^b T\,dS$；曲线下面积等于热量，可逆循环所围面积等于净热量也等于净功 $Q=A$。 <!-- src: PH-C10#p094; type: compressed -->
- 卡诺循环在 T-S 图上为矩形：$Q_1=T_1\,\Delta S$、$Q_2=T_2\,\Delta S$，$\eta=1-\dfrac{T_2}{T_1}$。 <!-- src: PH-C10#p094g3 + PH-C10#p094; type: compressed -->

### 理想气体熵变

- 一般式（质量 $m$）：$\Delta S=\dfrac{m}{M}C_{V,m}\ln\dfrac{T_2}{T_1}+\dfrac{m}{M}R\ln\dfrac{V_2}{V_1}$；1 mol 时 $\Delta S=C_{V,m}\ln\dfrac{T_2}{T_1}+R\ln\dfrac{V_2}{V_1}$。 <!-- src: PH-C10#p095 + PH-C10#p096 + PH-C10#p097 + PH-C10#p098; type: compressed -->
- 三种可逆路径（先等体后等温、先等温后等体、直接积分 $dS=\dfrac{dE+p\,dV}{T}$）给出同一结果，体现熵变只取决于初末态。 <!-- src: PH-C10#p097; type: compressed -->

### 证明类命题

- 一条绝热线与一条等温线不能相交于两点（反证，否则构成只与单一热源交换热量的循环）。 <!-- src: PH-C10#p100; type: compressed -->
- 两条绝热线不能相交（反证，作一条等温线与之构成闭合循环导出矛盾）。 <!-- src: PH-C10#p101; type: compressed -->

### 例题

- 六过程可逆循环（三段等温 + 三段绝热）：由 $\displaystyle\oint\dfrac{\delta Q}{T}=0$ 得 $\dfrac{Q_1}{T_1}+\dfrac{Q_2}{T_2}+\dfrac{Q_3}{T_3}=0$；代入 $T_1=800,Q_1=1600$；$T_2=400,Q_2=800$；$T_3=200$ 得 $Q_3=-800\,\mathrm{J}$（放热），$A=\sum Q=1600\,\mathrm{J}$，$\eta=\dfrac{A}{Q_1+Q_2}=\dfrac{2}{3}\approx66.7\%$（分母只取吸热）。 <!-- src: PH-C10#p099ex; type: compressed -->
- T-S 图椭圆循环（$S:S_0\to3S_0$，$T:T_0\to3T_0$）：净功 $A=$ 椭圆面积 $=\pi T_0S_0$；上半段吸热 $Q_{\text{吸}}=\left(\dfrac{\pi}{2}+4\right)T_0S_0$；$\eta=\dfrac{2\pi}{\pi+8}$。 <!-- src: PH-C10#p102ex + PH-C10#p103ex; type: compressed -->
- T-S 图顺时针三角循环（点 1$(1000,300)$、2$(500,300)$、3$(500,400)$）：$1\to2$ 等温放热、$2\to3$ 绝热、$3\to1$ 吸热；$Q_{\text{吸}}=\displaystyle\int T\,dS=1.75\times10^{8}\,\mathrm{J}$，$A=$ 三角面积 $=\dfrac{1}{2}\times500\times10^{3}\times100=2.5\times10^{7}\,\mathrm{J}$，$\eta=\dfrac{1}{7}$。 <!-- src: PH-C10#p104ex + PH-C10#p105ex; type: compressed -->

## §10.8 熵增加原理

### 不可逆过程的熵变

- 用熵判断过程方向；方法是先考察不可逆过程的熵变。 <!-- src: PH-C10#p106; type: compressed -->
- 理想气体向真空自由膨胀（温度不变）：设计连接同样初末态的等温可逆膨胀，$\Delta S=\dfrac{m}{M}R\ln\dfrac{V_2}{V_1}>0$。 <!-- src: PH-C10#p106 + PH-C10#p107 + PH-C10#p109; type: compressed -->
- 两相同物体（定压热容 $C_p$，$T_A>T_B$）绝热接触热传导：$T=\dfrac{T_A+T_B}{2}$；$\Delta S_A=C_p\ln\dfrac{T_A+T_B}{2T_A}$、$\Delta S_B=C_p\ln\dfrac{T_A+T_B}{2T_B}$；总 $\Delta S=C_p\ln\dfrac{(T_A+T_B)^2}{4T_AT_B}>0$（因 $(T_A+T_B)^2>4T_AT_B$）。 <!-- src: PH-C10#p110 + PH-C10#p111 + PH-C10#p112 + PH-C10#p113; type: compressed -->
- 例题（绝热容器、导热可滑动隔板，左 1 mol 双原子、右 2 mol 单原子，均 $T_0$）：导热⇒温度恒为 $T_0$，可无摩擦滑动⇒两室压强相等。(1) $V_1=\dfrac{1}{3}V_0$、$V_2=\dfrac{2}{3}V_0$；(2) $\Delta S_1=R\ln\dfrac{2}{3}<0$（左室压缩）、$\Delta S_2=2R\ln\dfrac{4}{3}>0$（右室膨胀）；(3) 去隔板后各自充满 $V_0$，$\Delta S=R\ln3+2R\ln\dfrac{3}{2}>0$（熵增）。 <!-- src: PH-C10#p114ex + PH-C10#p115ex + PH-C10#p116ex; type: compressed -->

### 熵增加原理

- 一切不可逆绝热过程熵总增加，可逆绝热过程熵不变，由此可用熵判断过程可逆与否。 <!-- src: PH-C10#p117; type: compressed -->
- 熵增加原理：系统经绝热过程由一平衡态到另一平衡态，熵永不减少；可逆则不变，不可逆则增加。 <!-- src: PH-C10#p117; ref: 熵增加原理; type: direct -->
- 非平衡态熵：把系统分成许多近似平衡的小部分，各部分熵之和即为该非平衡态的熵。 <!-- src: PH-C10#p117; type: direct -->

### 克劳修斯不等式与合并关系

- 不可逆卡诺 $\eta=1-\dfrac{Q_2}{Q_1}<1-\dfrac{T_2}{T_1}$，得 $\dfrac{Q_1}{T_1}+\dfrac{Q_2}{T_2}<0$（代数量）；推广得克劳修斯不等式 $\displaystyle\oint_{(\text{不可逆})}\dfrac{\delta Q}{T}<0$。 <!-- src: PH-C10#p118; ref: 克劳修斯不等式; type: compressed -->
- 由克劳修斯不等式（初末态均为平衡态）：不可逆 $S_b-S_a>\displaystyle\int_a^b\dfrac{\delta Q}{T}$、$dS>\dfrac{\delta Q}{T}$；与可逆（取等号）合并为 $S_b-S_a\ge\displaystyle\int_a^b\dfrac{\delta Q}{T}$、$dS\ge\dfrac{\delta Q}{T}$（等号对应可逆、大于号对应不可逆）。 <!-- src: PH-C10#p119 + PH-C10#p120; type: compressed -->

### 绝热系统与孤立系统

- 绝热或孤立系统 $\delta Q=0$，故 $dS\ge0$；熵增加原理又表述为：孤立系统的熵永不减少。 <!-- src: PH-C10#p121; ref: 熵增加原理; type: compressed -->
- 孤立系统两种情况：初态平衡则保持平衡 $dS=0$；初态非平衡则自发趋向平衡 $dS>0$（不可逆），达平衡态时熵取最大值。 <!-- src: PH-C10#p122; type: compressed -->
- 绝热中的不可逆过程、孤立系统中的自发过程总朝熵增方向进行，熵取最大值时系统达平衡态。 <!-- src: PH-C10#p123; type: compressed -->

## §10.9 热力学第二定律的统计意义

### 微观状态与宏观状态

- 模型：隔板分容器为左右两半，考察粒子分布；系统含 4 个彼此可区分的粒子，按可区分粒子计数微观状态。 <!-- src: PH-C10#p124g1 + PH-C10#p125g1 + PH-C10#p126g1; type: compressed -->
- 宏观态：仅由左右两半粒子数（左，右）描述，不区分具体粒子；微观态：每个可区分粒子具体落在左半或右半的一种确定排布。 <!-- src: PH-C10#p124g1 + PH-C10#p125g1; type: compressed -->

### 4 个粒子的状态计数

共 5 个宏观态，微观状态总数 $1+4+6+4+1=16=2^{4}$，居中的"左2右2"微观态数最多：

| 宏观态（左, 右） | 微观状态数 |
| --- | --- |
| 4, 0 | 1 |
| 3, 1 | 4 |
| 2, 2 | 6 |
| 1, 3 | 4 |
| 0, 4 | 1 |

<!-- src: PH-C10#p125t1 + PH-C10#p126t1 + PH-C10#p127; type: compressed -->

### 推广与统计意义

- $N$ 个粒子：宏观状态数为 $N+1$，微观状态数为 $2^{N}$。 <!-- src: PH-C10#p127; type: direct -->
- 热力学概率 $\Omega$：一个宏观态所含的微观状态数；微观态数最多的宏观态出现概率最大。 <!-- src: PH-C10#p127 + PH-C10#p128; type: compressed -->
- 取 $N\approx10^{23}$（$N_A=6.022\times10^{23}\,\mathrm{mol^{-1}}$）：$\Omega$ 在 $n=N/2$ 处出现极尖锐高峰；平衡态所含微观态数最大、热力学概率最大。 <!-- src: PH-C10#p128; type: compressed -->
- 第二定律统计意义：孤立系统中一切过程总是由热力学概率小的宏观态向概率大的宏观态进行。 <!-- src: PH-C10#p129; type: compressed -->
- 玻耳兹曼熵 $S=k\ln\Omega$（$\Omega$ 为热力学概率）；$\Omega$ 是系统无序度（混乱度）的量度，平衡态对应最无序状态，熵越大混乱度越高。 <!-- src: PH-C10#p130; ref: 玻耳兹曼熵; type: compressed -->
