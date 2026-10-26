---
title: "第3章 狭义相对论"
description: "大学物理课程笔记：第3章 狭义相对论。"
---

<div class="note-meta"><a href="/courses/physics/">大学物理目录</a><a href="/courses/physics/chapter-03-quick/">阅读速览</a><a href="/downloads/physics/chapter-03.md" download>下载 Markdown</a></div>

## §3.1 经典力学的困难

### 伽利略变换

在两个惯性系中考察同一个物理事件: S系用 $\vec r(x,y,z,t)$ 描述该事件, S'系用 $\vec r{\,}'(x',y',z',t')$ 描述同一事件。
<!-- src: PH-C03#p02; type: direct -->

参考系约定(据图): 两惯性系坐标轴对应平行($y\parallel y'$, $z\parallel z'$), S'相对S以速度 $u$ 沿 $x$($=x'$)正方向运动; 事件点为 P, $\vec r$ 从 O 指向 P、$\vec r{\,}'$ 从 O' 指向 P。
<!-- src: PH-C03#p02g1; type: synthesized -->

正变换(S → S'):
$$
x'=x-ut,\quad y'=y,\quad z'=z,\quad t'=t
$$

<!-- src: PH-C03#p02; type: direct -->

逆变换(S' → S):
$$
x=x'+ut',\quad y=y',\quad z=z',\quad t=t'
$$

<!-- src: PH-C03#p02; type: direct -->

### 伽利略变换的困难

物理规律都是相对于一定参考系表述出来的。
<!-- src: PH-C03#p03; type: direct -->

在经典力学中, 力学基本运动定律对所有惯性系成立。
<!-- src: PH-C03#p03; type: direct -->

人们从长期实践中总结出了电磁场的基本规律(幻灯片在此处标注年代: 1785、1831、1865、1888); 宏观电磁现象的普遍规律可以表为麦克斯韦方程组(Maxwell 方程组)。
<!-- src: PH-C03#p03; type: direct -->

由此提出"参考系"问题: 电磁现象的基本规律究竟适用于什么参考系?
<!-- src: PH-C03#p03; type: direct -->

### 真空中光速与伽利略变换的矛盾

真空中的光速由电磁学常量给出:
$$
c=\frac{1}{\sqrt{\varepsilon_0\mu_0}}
$$

<!-- src: PH-C03#p04; type: direct -->

光沿任意方向的速度值: 在惯性系 S 中, 光沿任意方向的速度值都相同; 在该"特定的惯性系"中有 $v_x=v_y=v_z=c$。
<!-- src: PH-C03#p04; type: direct -->

伽利略速度变换(由坐标变换得到, S'相对S沿 $x$ 以 $u$ 运动):
$$
v_x'=v_x-u,\quad v_y'=v_y,\quad v_z'=v_z
$$

(同页并列重写了坐标变换 $x'=x-ut,\,y'=y,\,z'=z,\,t'=t$。)
<!-- src: PH-C03#p04; type: direct -->

矛盾(困难)结论: 在相对于惯性系 S 运动的其它惯性系 S' 中, 光沿各个方向的速度值并不一定都是相同的。
<!-- src: PH-C03#p04; type: direct -->

### 特定参考系 / 绝对惯性系 / 以太

图示: 存在一系列惯性系 S、S'、S''、…, 它们的原点 O、O'、O'' 沿 $x$ 轴依次排列, S'、S'' 分别以 $\vec u{\,}'$、$\vec u{\,}''$(均沿 $x$ 正向)相对运动; 图中 S 与 S' 之间画出的"…"表示这样相对运动的惯性系有许多个。
<!-- src: PH-C03#p05g1; type: synthesized -->

幻灯片给出该特殊参考系(即 p04 中光速各向同性所要求的"特定的惯性系")的三个名称: 特定的惯性系、绝对惯性系、以太。
<!-- src: PH-C03#p04 + PH-C03#p05; type: synthesized -->

### 恒星的光行差与以太拖曳实验

恒星的光行差: 1728 年, J. Bradley。
<!-- src: PH-C03#p06; type: direct -->

图示关系: 恒星的"真实位置"在正上方(星光沿竖直方向射下); 由于观测者(地球)以速度 $v$ 沿水平方向运动, 望远镜必须沿运动方向倾斜一角度 $\alpha$, 使恒星显现于偏向运动方向一侧的"视位置"。
<!-- src: PH-C03#p06g1; type: synthesized -->

历史上曾利用光行差现象说明: 以太没有被地球拖曳着一起运动。
<!-- src: PH-C03#p06; type: direct -->

斐索实验: 1851 年, H. L. Fizeau。在菲索的原始实验中观测到 0.19 个条纹移动, 相当于拖曳系数等于 0.46。
<!-- src: PH-C03#p06; type: direct -->

1886 年, 迈克耳孙(A. A. Michelson)、莫雷(E. W. Morley)重复了上述实验, 做了更精确的测量, 得到拖曳系数等于 $0.434\pm0.020$。
<!-- src: PH-C03#p06; type: direct -->

结论: 在运动的物质中, 以太受到部分拖曳。
<!-- src: PH-C03#p06; type: direct -->

## §3.2 狭义相对论的基本假设

### 1. 迈克耳孙-莫雷实验

实验所针对的以太理论前提: 在以太参考系中, 光沿任意方向的速度值都等于 $c$; 而在相对于以太运动的其它惯性系中, 光沿各个方向的速度值并不一定都相同。
<!-- src: PH-C03#p07; type: direct -->

实验设想(地球上的测量思路): 如果能在地球上测定各个方向光速值的差异, 就可以由此确定地球相对于以太的运动。
<!-- src: PH-C03#p07; type: direct -->

测量手段为迈克耳孙(A. A. Michelson)干涉仪; 其实验精度达到 $v^2/c^2$ 数量级, 因而可在地球上测定各个方向光速值的差异。
<!-- src: PH-C03#p07; type: compressed -->

1881 年迈克耳孙首次用迈克耳孙干涉仪做了观测实验: 将仪器旋转 $90^\circ$, 应有 0.4 个条纹的移动; 实验结果是根本不存在条纹移动。
<!-- src: PH-C03#p08; type: compressed -->

1887 年迈克耳孙(A. A. Michelson)与莫雷(E. W. Morley)进行了更精密的测量, 即"迈克耳孙-莫雷实验"。
<!-- src: PH-C03#p08; type: direct -->

实验装置示意(1887 年克利夫兰干涉仪, 装在浮于水银上的石台上)给出干涉仪结构元件: 光源(Light source)、可调反射镜(Adjustable mirror)、若干反射镜(Mirrors)、镀银玻璃板(Silvered glass plate)、未镀银玻璃板(Unsilvered glass plate)、望远镜(Telescope)。
<!-- src: PH-C03#p08g1; type: direct -->

### 爱因斯坦 1905 年的论文

爱因斯坦(Albert Einstein)于 1905 年 9 月(任职于伯尔尼的瑞士联邦发明专利局期间), 在《物理学年鉴》(Annalen der Physik)上发表论文《论动体的电动力学》(Zur Elektrodynamik bewegter Körper)。
<!-- src: PH-C03#p09 + PH-C03#p09g1; type: synthesized -->

该工作否定了绝对参考系的存在, 即不存在以太。
<!-- src: PH-C03#p09; type: direct -->

### 2. 爱因斯坦的基本假设

(1) 相对性原理: 一切物理规律在任何惯性系中形式相同, 所有惯性系都是等价的。
<!-- src: PH-C03#p10; type: direct -->

(2) 光速不变原理: 真空中的光速相对于任何惯性系沿任一方向恒为 $c$, 与光源运动无关。
<!-- src: PH-C03#p10; type: direct -->

本节标题处(与"爱因斯坦的基本假设"并列)标出"洛伦兹变换", 表明将由上述两条基本假设出发推导洛伦兹变换。
<!-- src: PH-C03#p10; type: one-step-inferred -->

配套参考系配置图示: 两惯性系 $S$ 与 $S'$, 各轴对应平行 ($x\,/\,x'$ 水平、$y\,/\,y'$ 竖直、$z\,/\,z'$ 斜向), 原点分别为 $O$、$O'$; $S'$ 系相对 $S$ 系沿 $+x$ 方向以速度 $\vec{u}$ 运动(箭头指向右)。$S'$ 系中为一节车厢(图中绿色长条), 前壁、后壁上装有光接收器 $P_1'$、$P_2'$, 其中沿运动方向(右端)的前壁接收器为 $P_1'$、后端后壁接收器为 $P_2'$; 所涉为真空中的光速 $c$。
<!-- src: PH-C03#p10g1 + PH-C03#p10; type: synthesized -->

## §3.3 洛伦兹变换

### 参考系设置与约定

两个惯性系 $S$ 和 $S'$, 坐标轴彼此平行; $S'$ 系相对于 $S$ 系以速度 $u$ 沿 $x$ 轴正方向运动; 两系坐标原点 $O$ 与 $O'$ 重合时同时开始计时(取 $t=t'=0$)。<!-- src: PH-C03#p11; type: direct -->

同一事件 $P$ 在 $S$ 系中的时空坐标记为 $(x,y,z,t)$, 在 $S'$ 系中记为 $(x',y',z',t')$; 图中 $S'$ 系连同 $O'$、$x'$ 轴随速度 $u$ 沿 $x$ 正方向平移, $y'\parallel y$、$z'\parallel z$。<!-- src: PH-C03#p11g1; type: direct -->

### 洛伦兹变换(正变换: S 系 → S' 系)

$$
x'=\frac{x-ut}{\sqrt{1-\dfrac{u^{2}}{c^{2}}}},\qquad y'=y,\qquad z'=z,\qquad t'=\frac{t-\dfrac{u}{c^{2}}x}{\sqrt{1-\dfrac{u^{2}}{c^{2}}}}
$$


其中 $u$ 为 $S'$ 系相对 $S$ 系沿 $+x$ 方向的速度, $c$ 为光速; 横向坐标 $y,z$ 不变, 时间变换中含与 $x$ 耦合的项 $-\dfrac{u}{c^{2}}x$。<!-- src: PH-C03#p11 + PH-C03#p12; type: direct -->

### 洛伦兹变换(逆变换: S' 系 → S 系)

$$
x=\frac{x'+ut'}{\sqrt{1-\dfrac{u^{2}}{c^{2}}}},\qquad y=y',\qquad z=z',\qquad t=\frac{t'+\dfrac{u}{c^{2}}x'}{\sqrt{1-\dfrac{u^{2}}{c^{2}}}}
$$

<!-- src: PH-C03#p11 + PH-C03#p12; type: direct -->

逆变换可由正变换作替换 $u\to -u$ 并互换带撇与不带撇坐标得到; 幻灯片以 $u\to -u$ 标注此关系。<!-- src: PH-C03#p11; type: synthesized -->

### 与伽利略变换的关系

伽利略变换(正/逆):

$$
\begin{aligned}
&x'=x-ut,\quad y'=y,\quad z'=z,\quad t'=t\\
&x=x'+ut',\quad y=y',\quad z=z',\quad t=t'
\end{aligned}
$$

<!-- src: PH-C03#p12; type: direct -->

当 $u\ll c$ 时, $\dfrac{1}{\sqrt{1-\dfrac{u^{2}}{c^{2}}}}\to 1$。<!-- src: PH-C03#p12; type: direct -->

此时洛伦兹变换退化为伽利略变换。<!-- src: PH-C03#p12; type: one-step-inferred -->

### 事件与观测者的操作约定

在两个惯性系中观测同一个物理事件: 洛伦兹变换把惯性系 $S$ 的坐标 $(x,y,z,t)$ 与惯性系 $S'$ 的坐标 $(x',y',z',t')$ 相联系, 二者均为对该事件"测量的结果"。<!-- src: PH-C03#p13; type: compressed -->

#### 观察者在 S 系

在 $S$ 系的空间各点放置无穷系列的时钟, 这些时钟与该惯性系保持相对静止、彼此同步。一个事件的时空坐标 $(x,y,z,t)$ 由该事件发生处的观察者记录: 空间坐标为该事件发生时的空间坐标, 时间为该观察者用该处的时钟记录下来的该事件发生时的时间。<!-- src: PH-C03#p13; type: direct -->

图示 $S$ 系沿 $x$ 轴排布一系列相对静止、彼此同步的时钟(各钟指针朝向一致), 原点为 $O$; 位于 $A$ 点的事件由该处时钟读数 $t_A$ 记录。<!-- src: PH-C03#p13g1; type: direct -->

#### 观察者在 S' 系

在 $S'$ 系的空间各点放置无穷系列的时钟, 这些时钟与该惯性系保持相对静止、彼此同步。一个事件的时空坐标 $(x',y',z',t')$ 由该事件发生处的观察者记录: 空间坐标为该事件发生时的空间坐标, 时间为该观察者用该处的时钟记录下来的该事件发生时的时间。<!-- src: PH-C03#p14; type: direct -->

图示 $S'$ 系沿 $x'$ 轴排布一系列相对静止、彼此同步的时钟, 原点为 $O'$; 位于 $A'$ 点的事件由该处时钟读数 $t'_{A'}$ 记录。<!-- src: PH-C03#p14g1; type: direct -->

#### 校钟方法

校钟方法图示: 在 $A$、$B$ 两处各放一只时钟, 中点 $O$ 处设一光源向两侧发光; $O$ 到 $A$、$O$ 到 $B$ 的距离均为 $l$(两侧等距)。<!-- src: PH-C03#p14g2; type: direct -->

## §3.4 狭义相对论的时空观

### 洛伦兹变换汇总与时空坐标约定

约定:描述事件 $P$ 发生时的时空坐标。设 S′ 系相对 S 系以速度 $u$ 沿 $+x$ 方向匀速运动,两系对应坐标轴平行($x\parallel x'$、$y\parallel y'$、$z\parallel z'$)。约定框中给出:S 系记事件为 $P(x,t)$,S′ 系记为 $P(x',t')$(相对运动沿 $x$ 方向,故通常只用 $x,t$)。<!-- src: PH-C03#p15 + PH-C03#p15g1; type: direct -->

由洛伦兹变换令 $x=t=0$ 即得 $x'=t'=0$,故 $t=t'=0$ 时两原点 $O$、$O'$ 重合。<!-- src: PH-C03#p15; type: one-step-inferred -->

洛伦兹正变换(S 系坐标 → S′ 系坐标):
$$
x'=\frac{x-ut}{\sqrt{1-\dfrac{u^2}{c^2}}},\qquad y'=y,\qquad z'=z,\qquad t'=\frac{t-\dfrac{u}{c^2}x}{\sqrt{1-\dfrac{u^2}{c^2}}}
$$

<!-- src: PH-C03#p15; type: direct -->

洛伦兹逆变换(S′ 系坐标 → S 系坐标),将正变换中 $u$ 换号即可:
$$
x=\frac{x'+ut'}{\sqrt{1-\dfrac{u^2}{c^2}}},\qquad y=y',\qquad z=z',\qquad t=\frac{t'+\dfrac{u}{c^2}x'}{\sqrt{1-\dfrac{u^2}{c^2}}}
$$

<!-- src: PH-C03#p15; type: direct -->

示意图:S 与 S′ 两套直角坐标系,$x$ 轴与 $x'$ 轴共线,$y\parallel y'$、$z\parallel z'$;S′ 系以速度 $u$ 沿 $+x$ 方向平移,原点分别为 $O$、$O'$;同一事件点 $P$ 在 S 系坐标为 $(x,y,z,t)$,在 S′ 系坐标为 $(x',y',z',t')$。<!-- src: PH-C03#p15g1; type: direct -->

### 1. 同时的相对性

#### 同时性判据与两事件的时间差

设有两个事件。S 系中:事件 1 坐标 $(x_1,t_1)$,事件 2 坐标 $(x_2,t_2)$;S′ 系中:事件 1 坐标 $(x_1',t_1')$,事件 2 坐标 $(x_2',t_2')$。两事件在 S 系"同时发生"即 $t_1=t_2$。问题:在 S′ 系中是否仍有 $t_2'=t_1'$?<!-- src: PH-C03#p16; type: direct -->

由时间正变换分别写出两事件在 S′ 系的时刻:
$$
t_1'=\frac{t_1-\dfrac{u}{c^2}x_1}{\sqrt{1-\dfrac{u^2}{c^2}}},\qquad t_2'=\frac{t_2-\dfrac{u}{c^2}x_2}{\sqrt{1-\dfrac{u^2}{c^2}}}
$$

<!-- src: PH-C03#p16; type: direct -->

两者相减得到一般时间差表达式:
$$
t_2'-t_1'=\frac{(t_2-t_1)-\dfrac{u}{c^2}(x_2-x_1)}{\sqrt{1-\dfrac{u^2}{c^2}}}
$$

<!-- src: PH-C03#p16; type: direct -->

当两事件在 S 系同时($t_1=t_2$)时,上式化简为:
$$
t_2'-t_1'=\frac{\dfrac{u}{c^2}(x_1-x_2)}{\sqrt{1-\dfrac{u^2}{c^2}}}
$$

<!-- src: PH-C03#p16; type: direct -->

#### 同地与异地两同时事件的结论

S 系中"同地"发生的两个同时事件:$t_1=t_2$ 且 $x_1=x_2$ $\Rightarrow$ $t_1'=t_2'$,即在 S′ 系中仍然同时。<!-- src: PH-C03#p17; type: direct -->

S 系中"异地"发生的两个同时事件:$t_1=t_2$ 但 $x_1\neq x_2$ $\Rightarrow$ $t_1'\neq t_2'$,即在 S′ 系中不再同时——这就是同时的相对性。具体符号关系:<!-- src: PH-C03#p17; type: direct -->

- $x_1>x_2$ $\Rightarrow$ $t_2'>t_1'$ <!-- src: PH-C03#p17; type: direct -->
- $x_1<x_2$ $\Rightarrow$ $t_2'<t_1'$ <!-- src: PH-C03#p17; type: direct -->

#### 时钟校准是否绝对:提出问题

图示(in S):S 系沿 $x$ 轴排有一长列时钟(标出 $O$、$A$),指针全部指向同一方向,表示在 S 系看来这些时钟均已校准(同步);S′ 系 $x'$ 轴上画有 $O'$、$A'$ 两只时钟。提出问题:当 S 系观察者认为自己所在参考系上所有时钟都已校准时,S′ 系上的各时钟是否也都校准了?<!-- src: PH-C03#p18 + PH-C03#p18g1; type: direct -->

p19 还以相反方向提出同一问题:第二幅图中 S′ 系 $x'$ 轴排有一长列均已校准的时钟、S 系 $x$ 轴上只画 $O$、$A$ 两只时钟,对应的疑问是——当 S′ 系观察者认为自己所在参考系上所有时钟都已校准时,S 系上的各时钟是否也都校准了?<!-- src: PH-C03#p19 + PH-C03#p19g1; type: direct -->

#### 在 S 系中考察 S′ 系的时钟

图示(in S):下排为 S 系时钟 $A,O,B$(在 $x$ 轴上,指针一致,表示在 S 系中已同步);上排为 S′ 系时钟 $A',O',B'$(在 $x'$ 轴上,随 S′ 系以 $\vec u$ 沿 $+x$ 方向运动),三只指示不一致。<!-- src: PH-C03#p20g1; type: direct -->

取 S 系所有时钟读数 $t_A=t_B=0$,位置取 $x_A<0$(在 $O$ 左)、$x_B>0$(在 $O$ 右),用时间正变换求 S′ 系对应时钟读数:
$$
t_{A'}'=\frac{t_A-\dfrac{u}{c^2}x_A}{\sqrt{1-\dfrac{u^2}{c^2}}}\ \Rightarrow\ t_{A'}'>0\quad(t_A=0,\ x_A<0)
$$

$$
t_{B'}'=\frac{t_B-\dfrac{u}{c^2}x_B}{\sqrt{1-\dfrac{u^2}{c^2}}}\ \Rightarrow\ t_{B'}'<0\quad(t_B=0,\ x_B>0)
$$

<!-- src: PH-C03#p20; type: direct -->

结论:在 S 系看来,虽然 S 系自身时钟同步,但 S′ 系各时钟并不同步——后方时钟 $A'$($x<0$)读数为正(超前),前方时钟 $B'$($x>0$)读数为负(滞后)。<!-- src: PH-C03#p20 + PH-C03#p20g1; type: direct -->

#### 在 S′ 系中考察 S 系的时钟

图示(in S′):上排为 S′ 系时钟 $A',O',B'$(在 $x'$ 轴上,指针一致,表示在 S′ 系中已同步);下排为 S 系时钟 $A,O,B$(在 $x$ 轴上,相对 S′ 系以 $-\vec u$ 沿 $-x$ 方向运动),三只指示不一致。<!-- src: PH-C03#p21g1; type: direct -->

取 S′ 系所有时钟读数 $t_{A'}'=t_{B'}'=0$,位置取 $x_{A'}'<0$、$x_{B'}'>0$,用时间逆变换(含 $+\dfrac{u}{c^2}$ 项)求 S 系对应时钟读数:
$$
t_A=\frac{t_{A'}'+\dfrac{u}{c^2}x_{A'}'}{\sqrt{1-\dfrac{u^2}{c^2}}}\ \Rightarrow\ t_A<0\quad(t_{A'}'=0,\ x_{A'}'<0)
$$

$$
t_B=\frac{t_{B'}'+\dfrac{u}{c^2}x_{B'}'}{\sqrt{1-\dfrac{u^2}{c^2}}}\ \Rightarrow\ t_B>0\quad(t_{B'}'=0,\ x_{B'}'>0)
$$

<!-- src: PH-C03#p21; type: direct -->

结论:在 S′ 系看来,虽然 S′ 系自身时钟同步,但 S 系各时钟并不同步——时钟 $A$($x'<0$)读数为负(滞后),时钟 $B$($x'>0$)读数为正(超前)。<!-- src: PH-C03#p21 + PH-C03#p21g1; type: direct -->

该情形与在 S 系考察 S′ 系时钟的情形互为对称,说明时钟校准(同时性)在两惯性系间是相对的。<!-- src: PH-C03#p20 + PH-C03#p21; type: synthesized -->

### 2. 运动时钟的变慢

#### 设置与符号约定

- S′系中在**同一地点** $x_1'$ 先后发生两个事件 $P_1(x_1',t_1')$、$P_2(x_1',t_2')$（第二事件的空间坐标仍为 $x_1'$），且 $t_1'<t_2'$，记该系所测时间间隔 $\Delta t'=t_2'-t_1'$。<!-- src: PH-C03#p22; type: direct -->
- 同样两个事件在 S系测得 $P_1(x_1,t_1)$、$P_2(x_2,t_2)$，记 $\Delta t=t_2-t_1$。<!-- src: PH-C03#p22; type: direct -->
- 符号约定：$u$ 为 S′系相对 S系的运动速度（由 p23 图示，固定于 S′ 的时钟 $O'$ 以 $u$ 沿水平 $+x$ 方向相对 S系运动）。<!-- src: PH-C03#p22 + PH-C03#p23; type: synthesized -->

#### 时间膨胀公式与结论

- 由 Lorentz 逆变换，对两事件分别有
$$
t_1=\frac{t_1'+\dfrac{u}{c^2}x_1'}{\sqrt{1-\dfrac{u^2}{c^2}}},\qquad t_2=\frac{t_2'+\dfrac{u}{c^2}x_1'}{\sqrt{1-\dfrac{u^2}{c^2}}}
$$

因两事件 $x'$ 坐标相同（均为 $x_1'$），空间项 $\dfrac{u}{c^2}x_1'$ 相消，相减得
$$
t_2-t_1=\frac{t_2'-t_1'}{\sqrt{1-\dfrac{u^2}{c^2}}}.
$$

<!-- src: PH-C03#p22; type: direct -->
- 因 $\dfrac{1}{\sqrt{1-u^2/c^2}}>1$，故 $t_2-t_1>t_2'-t_1'$，即 $\Delta t>\Delta t'$（运动时钟变慢 / 时间膨胀）。<!-- src: PH-C03#p22; type: direct -->
- 在**同一地点相继发生两个事件**的惯性系中所测得的时间间隔最短；在与它作相对运动的其它惯性系中，测得的时间间隔就长一些。<!-- src: PH-C03#p22; type: direct -->
- 运动物体上发生的自然过程比起静止物体的同样过程延缓了。<!-- src: PH-C03#p22; type: direct -->

#### 单一运动时钟与两只静止钟的比较（p23 示意）

- 固定在 S′系 $O'$ 处的一个时钟，在 S系看来是**运动时钟**。<!-- src: PH-C03#p23; type: direct -->
- 比较方法：用 S系中沿运动方向放置的两只钟 $O$、$B$（静止于 S系）与单一运动钟 $O'$ 先后相遇来比较读数。<!-- src: PH-C03#p23 + PH-C03#p23g1; type: synthesized -->
  - 时钟 $O'$ 与时钟 $O$ 相遇时：$t_1=t_1'=0$。<!-- src: PH-C03#p23; type: direct -->
  - 时钟 $O'$ 与时钟 $B$ 相遇时：时钟 $O'$ 指向 $t_2'$，时钟 $B$ 指向 $t_2$。<!-- src: PH-C03#p23; type: direct -->
- 于是 $\Delta t'=t_2'-t_1'=t_2'$，$\Delta t=t_2-t_1=t_2$；结论 $\Delta t>\Delta t'$，即 $t_2>t_2'$。<!-- src: PH-C03#p23; type: direct -->
- 图示为两个时刻的快照：上排为 S′系的单钟 $O'$（以 $\vec{u}$ 水平向右运动），下排为 S系的两只固定钟 $O$、$B$；左快照对应 $O'$ 与 $O$ 相遇（读数 $t_1'$、$t_1$），右快照对应 $O'$ 与 $B$ 相遇（读数 $t_2'$、$t_2$）。<!-- src: PH-C03#p23g1; type: synthesized -->
- 结论：S系上的观察者认为运动时钟走得比静止时钟慢一些 ⟹ 运动时钟变慢。<!-- src: PH-C03#p23; type: direct -->

#### 例题：车厢内推球，地面测得所经历时间（一般方法）

- 题设：静止长度为 $l_0$ 的车厢以速度 $u$ 相对地面作匀速直线运动；车厢内从后壁以**恒定速度** $u_0$ 向前推一小球；求地面观察者测得小球从后壁运动到前壁所经历的时间。固定在车厢上的参考系为 S′系，地面为 S系。<!-- src: PH-C03#p24; type: direct -->
- 事件设定：小球从后壁脱离为 $P_1$，坐标 $(x_1,t_1)$/$(x_1',t_1')$；小球与前壁相碰为 $P_2$，坐标 $(x_2,t_2)$/$(x_2',t_2')$。车厢系（S′）中已知 $x_2'-x_1'=l_0$，$t_2'-t_1'=\dfrac{l_0}{u_0}$。<!-- src: PH-C03#p24; type: direct -->
- 关键判断（可迁移方法）：两事件在 S′系**不在同一地点**（$x_2'-x_1'=l_0\neq0$），因此不能直接套用纯时间膨胀公式，必须用完整 Lorentz 逆变换并保留空间项：
$$
t_2-t_1=\frac{1}{\sqrt{1-\dfrac{u^2}{c^2}}}\left[(t_2'-t_1')+\frac{u}{c^2}(x_2'-x_1')\right].
$$

<!-- src: PH-C03#p24; type: direct -->
- 代入结果：
$$
t_2-t_1=\frac{\dfrac{l_0}{u_0}+\dfrac{u}{c^2}l_0}{\sqrt{1-\dfrac{u^2}{c^2}}}=\frac{l_0}{u_0}\cdot\frac{1+\dfrac{u u_0}{c^2}}{\sqrt{1-\dfrac{u^2}{c^2}}}.
$$

<!-- src: PH-C03#p24; type: direct -->
- 易错点：本例的 S′系时间间隔 $\Delta t'=l_0/u_0$ 不是同地点测得（小球前后壁位置不同），所以 $\Delta t\neq \Delta t'/\sqrt{1-u^2/c^2}$，必须额外计入 $\dfrac{u}{c^2}(x_2'-x_1')$ 项。<!-- src: PH-C03#p24; type: one-step-inferred -->

### 3. 运动物体的长度缩短

#### 测量约定与符号

- 沿 $x$ 方向放置一根细棒, 测其两端 A、B 的坐标之差即为棒长。S 系中长度记为 $x_B-x_A$, S′ 系中长度记为 $x_B'-x_A'$; 端点 A 坐标在两系分别为 $(x_A,t_A)$ 与 $(x_A',t_A')$, 端点 B 为 $(x_B,t_B)$ 与 $(x_B',t_B')$。<!-- src: PH-C03#p25 + PH-C03#p26; type: synthesized -->
- S′ 系相对 S 系以速度 $u$ 沿 $+x$ 方向运动(图中 $\vec{u}$ 箭头指向右); 图中 S 与 S′ 两纵轴并列画于左端, O、O′ 标于原点处; $c$ 为光速。<!-- src: PH-C03#p25; type: direct -->
- 测运动棒长必须"同时"测两端: 在哪个参考系中测量, 就要求两端的测量在该系中同时进行(下文中即令对应的时间项相等), 从而消去洛伦兹变换中的时间交叉项。<!-- src: PH-C03#p25 + PH-C03#p26; type: synthesized -->

#### 情形一: 细棒固定在 S′ 系 (在 S 系中测量, 要求 $t_A=t_B$)

- 棒静止于 S′ 系; 在 S 系中"同时"测两端, 即取 $t_A=t_B$。<!-- src: PH-C03#p25g1; type: direct -->
- 对两端分别作洛伦兹变换:
$$
x_A'=\frac{x_A-u t_A}{\sqrt{1-\dfrac{u^2}{c^2}}},\qquad x_B'=\frac{x_B-u t_B}{\sqrt{1-\dfrac{u^2}{c^2}}}
$$

<!-- src: PH-C03#p25; type: direct -->
- 两式相减得一般关系:
$$
x_B'-x_A'=\frac{1}{\sqrt{1-\dfrac{u^2}{c^2}}}\big[(x_B-x_A)-u(t_B-t_A)\big]
$$

<!-- src: PH-C03#p25; type: direct -->
- 代入测量条件 $t_A=t_B$(交叉项 $u(t_B-t_A)=0$), 得:
$$
x_B'-x_A'=\frac{x_B-x_A}{\sqrt{1-\dfrac{u^2}{c^2}}}
$$

<!-- src: PH-C03#p25; type: direct -->
- 因 $\dfrac{1}{\sqrt{1-u^2/c^2}}>1$, 所以 $x_B-x_A<x_B'-x_A'$, 即在 S 系(棒相对运动)测得的长度小于在 S′ 系(棒静止)测得的长度——运动物体的长度收缩, 亦称洛伦兹收缩。<!-- src: PH-C03#p25; type: direct -->

#### 情形二: 细棒固定在 S 系 (在 S′ 系中测量, 要求 $t_A'=t_B'$)

- 棒静止于 S 系; 在 S′ 系中"同时"测两端, 即取 $t_A'=t_B'$。<!-- src: PH-C03#p26g1; type: direct -->
- 对两端分别作逆洛伦兹变换:
$$
x_A=\frac{x_A'+u t_A'}{\sqrt{1-\dfrac{u^2}{c^2}}},\qquad x_B=\frac{x_B'+u t_B'}{\sqrt{1-\dfrac{u^2}{c^2}}}
$$

<!-- src: PH-C03#p26; type: direct -->
- 两式相减得一般关系:
$$
x_B-x_A=\frac{1}{\sqrt{1-\dfrac{u^2}{c^2}}}\big[(x_B'-x_A')+u(t_B'-t_A')\big]
$$

<!-- src: PH-C03#p26; type: direct -->
- 代入测量条件 $t_A'=t_B'$(交叉项 $u(t_B'-t_A')=0$), 得:
$$
x_B-x_A=\frac{x_B'-x_A'}{\sqrt{1-\dfrac{u^2}{c^2}}}
$$

<!-- src: PH-C03#p26; type: direct -->
- 故 $x_B'-x_A'<x_B-x_A$, 即在 S′ 系(棒相对运动)测得的长度小于在 S 系(棒静止)测得的长度——同样得到运动物体的长度收缩(洛伦兹收缩)。<!-- src: PH-C03#p26; type: direct -->

#### 结论

- 物体的长度在与其相对静止的参考系中测得的最长, 在其它参考系中测得的都较短些。<!-- src: PH-C03#p26; type: direct -->
- 由上式可一步整理: 运动方向上, 相对运动参考系中测得的(收缩)长度 = 静止参考系中测得的长度 $\times\sqrt{1-u^2/c^2}$, 例如 $x_B'-x_A'=(x_B-x_A)\sqrt{1-u^2/c^2}$(情形二中棒静止于 S)。<!-- src: PH-C03#p26; type: one-step-inferred -->
- 收缩发生在沿相对运动方向(即 $\vec{u}$ 所在的 $x$ 方向, 棒沿 $x$ 放置)。<!-- src: PH-C03#p25g1 + PH-C03#p26g1; type: synthesized -->

#### 例题: 火车与站台

##### 题设与符号约定

- 火车 A′B′ 在自身参考系内的固有长 $l_0 = 8.64\times10^{11}\,\text{m}$; 火车以 $u = 2.4\times10^{8}\,\text{m/s}$ 从站台旁经过; 站台在其自身静止参考系内有与火车相同的长度(即站台固有长亦为 $l_0$)。<!-- src: PH-C03#p27 + PH-C03#p30; type: direct -->
- 火车车头 B′、车尾 A′ 各有一只彼此同步的钟(在火车系内同步); 站台起点 A、终点 B 也各有一只这样彼此同步的钟(在站台系内同步)。<!-- src: PH-C03#p27; type: direct -->
- 初始事件: 当车头 B′ 与站台起点 A 对齐时, 该处重合的钟指示 12点00分。求 (1) 此时每一只钟指示的时间; (2) 当车尾 A′ 与站台起点 A 对齐时每一只钟指示的时间。<!-- src: PH-C03#p27; type: direct -->
- 参考系约定: 固定在火车上的为 S′ 系, 固定在站台上的为 S 系。<!-- src: PH-C03#p27; type: direct -->
- 几何与方向(图): 火车(蓝条)固定于 S′ 系, 车头 B′ 在右(前方)、车尾 A′ 在左(后方), 速度 $\vec u$ 沿 $+x'$(向右); 站台(棕条)固定于 S 系, 起点 A 在左、终点 B 在右; 从 S′ 系看站台以 $-\vec u$(向左)运动。<!-- src: PH-C03#p27g1 + PH-C03#p28g1; type: synthesized -->

##### 已知量与洛伦兹变换

- $c = 3\times10^{8}\,\text{m/s}$, $\sqrt{1-\dfrac{u^2}{c^2}} = 0.6$。<!-- src: PH-C03#p28 + PH-C03#p31; type: direct -->
- 由上式一步可得 $1-\dfrac{u^2}{c^2}=0.36$, $\beta=\dfrac{u}{c}=0.8$; 后续洛伦兹变换分母统一取 $0.6=\sqrt{1-u^2/c^2}$。<!-- src: PH-C03#p28; type: one-step-inferred -->
- 洛伦兹变换(分母 $0.6=\sqrt{1-u^2/c^2}$; S′ 相对 S 以 $+u$ 沿 x 方向运动):
$$
x' = \frac{x-ut}{0.6},\quad x = \frac{x'+ut'}{0.6},\quad t' = \frac{t-\frac{u}{c^2}x}{0.6},\quad t = \frac{t'+\frac{u}{c^2}x'}{0.6}
$$

<!-- src: PH-C03#p28 + PH-C03#p31; type: direct -->
- 本题关键中间量: $\dfrac{u}{c^2}\,l_0 = 38.4\ \text{分}$; $\dfrac{l_0}{u} = 60\ \text{分}$。<!-- src: PH-C03#p29 + PH-C03#p33; type: synthesized -->

##### (1) 车头 B′ 与站台起点 A 对齐时各钟读数

两参考系对"此时"采用各自的同时性, 因此读数不同; 各钟读数如下:

| 钟 | 在 S 系观察(站台钟同时) | 在 S′ 系观察(火车钟同时) |
|---|---|---|
| 站台起点 A | 12点00分 | 12点00分 |
| 站台终点 B | 12点00分 | 12点38.4分 |
| 车头 B′ | 12点00分 | 12点00分 |
| 车尾 A′ | 12点38.4分 | 12点00分 |

<!-- src: PH-C03#p29 + PH-C03#p32 + PH-C03#p33; type: synthesized -->

- 在 S 系观察: 站台两钟同步 $t_A=t_B=12点00分$; 重合处车头钟 $t'_{B'}=12点00分$; 由 $0=\dfrac{t'+\frac{u}{c^2}(-l_0)}{0.6}$ 得 $t'=38.4分$, 故车尾钟 $t'_{A'}=12点38.4分$。<!-- src: PH-C03#p29 + PH-C03#p32; type: direct -->
- 在 S′ 系观察: 火车两钟同步 $t'_{A'}=t'_{B'}=12点00分$; 重合处站台起点钟 $t_A=12点00分$; 由 $0=\dfrac{t-\frac{u}{c^2}l_0}{0.6}$ 得 $t=38.4分$, 故站台终点钟 $t_B=12点38.4分$。<!-- src: PH-C03#p29 + PH-C03#p32 + PH-C03#p33; type: synthesized -->

##### (2) 车尾 A′ 与站台起点 A 对齐时各钟读数

| 钟 | 在 S′ 系观察(火车钟同时) | 在 S 系观察(站台钟同时) |
|---|---|---|
| 车尾 A′ | 13点00分 | 13点00分 |
| 车头 B′ | 13点00分 | 12点21.6分 |
| 站台起点 A | 12点36分 | 12点36分 |
| 站台终点 B | 13点14.4分 | 12点36分 |

<!-- src: PH-C03#p33 + PH-C03#p34 + PH-C03#p35 + PH-C03#p36; type: synthesized -->

- 在 S′ 系观察: 站台起点 A 相对火车从 B′ 移到 A′(走过火车固有长 $l_0$), 历时 $\Delta t'=\dfrac{l_0}{u}=60分$, 故火车两钟 $t'_{A'}=t'_{B'}=12点00分+60分=13点00分$。<!-- src: PH-C03#p33; type: direct -->
- 在 S′ 系观察(续): 站台起点钟 $t_A=12点36分$(由 $60=\dfrac{t-\frac{u}{c^2}\cdot0}{0.6}$, 或等价地 $t=\dfrac{60+\frac{u}{c^2}(-l_0)}{0.6}$, 得 $t=36分$); 站台终点钟 $t_B=13点14.4分$(由 $60=\dfrac{t-\frac{u}{c^2}l_0}{0.6}$ 得 $t=74.4分$)。<!-- src: PH-C03#p34 + PH-C03#p35; type: synthesized -->
- 在 S 系观察: 站台各钟同步 $t_A=t_B=12点36分$; 重合处车尾钟 $t'_{A'}=13点00分$; 车头钟 $t'_{B'}=12点21.6分$(由 $36=\dfrac{t'+\frac{u}{c^2}\cdot0}{0.6}$ 得 $t'=21.6分$)。<!-- src: PH-C03#p35 + PH-C03#p36; type: synthesized -->

##### 方法与易错点

- 一般方法: 把待求读数看作某事件发生在某钟所在位置, 选定坐标原点与零时刻后, 用洛伦兹时间变换 $t'=\dfrac{t-\frac{u}{c^2}x}{0.6}$ 或 $t=\dfrac{t'+\frac{u}{c^2}x'}{0.6}$ 解出该钟读数; 求"同一时刻各钟读数"前必须先指明采用哪个系的同时性。<!-- src: PH-C03#p29 + PH-C03#p32 + PH-C03#p33; type: synthesized -->
- 同时性的相对性: 在某系内同步、空间相距 $\Delta x$ 的两钟, 在相对其运动的另一系看来读数相差 $\dfrac{u}{c^2}\Delta x$; 本题对全长 $l_0$ 该差值 $=\dfrac{u}{c^2}l_0=38.4分$。<!-- src: PH-C03#p29 + PH-C03#p33; type: synthesized -->
- 易错点1: 火车钟 A′、B′ 仅在 S′ 系内同步, 站台钟 A、B 仅在 S 系内同步; 不可把一个系的同步性套用到另一个系。<!-- src: PH-C03#p29 + PH-C03#p35; type: synthesized -->
- 易错点2: 固有长 $l_0$ 分别是火车在 S′ 系、站台在 S 系中的静止长度; 用 $\Delta t'=l_0/u$ 时, 指的是站台起点 A 在 S′ 系中相对火车走过火车固有长 $l_0$ 所需时间。<!-- src: PH-C03#p33; type: synthesized -->
- 易错点3: 同一对齐事件处的两只重合钟(A 与 B′)读数与参考系无关, 两系观察都为 12点00分; 参考系差异体现在"远端"钟上——S 系看车尾 A′=12点38.4分, S′ 系看站台终点 B=12点38.4分。<!-- src: PH-C03#p29 + PH-C03#p32 + PH-C03#p33; type: synthesized -->

### 4. 高速运动物体的视形状

符号与参考系约定(贯穿本节): S 系为观察者所在参考系; S' 系固连于细棒, 并以速度 $\vec{u}$ 沿 $+x$($x'$)方向相对 S 系运动; 细棒沿 $x'$ 轴放置, A 端在左、B 端在右。$x_A',x_B'$ 为细棒两端在 S' 系中的(不随时间变的)坐标; $x_A,x_B$ 为两端在 S 系中的坐标; $R_A,R_B$ 分别为细棒 A 端、B 端到观察点 P 的距离。
<!-- src: PH-C03#p37g1 + PH-C03#p39g1; type: synthesized -->

#### 测量得到的运动物体长度(洛伦兹收缩)

细棒静止于 S' 系, S' 系以速度 $u$ 沿 $+x$ 方向相对 S 系运动; 在 S 系中同时测两端位置, 即 $t_A=t_B$。两端坐标满足
$$
x_B' - x_A' = \frac{x_B - x_A}{\sqrt{1-\dfrac{u^2}{c^2}}}
$$

其中 $x_B'-x_A'$ 为静止长度(细棒在其静止系 S' 中的长度), $x_B-x_A$ 为运动物体的长度(在 S 系中 $t_A=t_B$ 条件下测得)。
<!-- src: PH-C03#p37; type: direct -->

由上式得 $x_B - x_A < x_B' - x_A'$, 即运动物体的长度收缩。
<!-- src: PH-C03#p37; type: direct -->

幻灯片在此对比两类结果: "测量"的结果 与 "看见(或观看)"的结果?——以问号形式提出, 本节即讨论"看见"会得到怎样的结果。
<!-- src: PH-C03#p37; type: direct -->

#### 看见与测量的区别: 视觉成像原理

当我们"看见"一个物体时, 记录下来的是由该物体上各点发射、并同时到达观察者视网膜的那些光信号。
<!-- src: PH-C03#p38; type: direct -->

成像之所以与测量不同, 基于两点前提:

- 物体表面上各点到观察者视网膜的距离不同;
- 光速有限且为常量。
<!-- src: PH-C03#p38; type: direct -->

因此, 同时到达视网膜的那些光信号, 是物体表面各点在不同时刻发射的; 在发射这些光信号时, 此运动物体的各部分曾处于不同的位置上。于是眼睛看到的运动物体形状是变了形的图像。
<!-- src: PH-C03#p38; type: direct -->

#### "看见"的几何模型: 光信号同时到达 P 点

设观察点为 P, 在 P 点于 $t_0$ 时刻看见细棒; 即细棒两端发射的光信号在 $t_0$ 时刻同时到达 P 点。
<!-- src: PH-C03#p39; type: direct -->

为使光信号同时到达, 两端必须在不同时刻发射(发射时刻按到 P 的距离回推):

- A 端的光信号在 $t_A$ 时刻发射: $t_A = t_0 - \dfrac{R_A}{c}$;
- B 端的光信号在 $t_B$ 时刻发射: $t_B = t_0 - \dfrac{R_B}{c}$。
<!-- src: PH-C03#p39; type: direct -->

故一般有 $t_A \neq t_B$, 且
$$
t_B - t_A = \frac{1}{c}(R_A - R_B)
$$

($R_A,R_B$ 由图中给出: 自细棒 A 端、B 端分别连到 P 点的线段长度)。
<!-- src: PH-C03#p39 + PH-C03#p39g2; type: direct -->

#### 视长度公式的推导

对发射事件用洛伦兹变换(A 端取其发射时刻 $t_A$、B 端取其发射时刻 $t_B$):
$$
x_A' = \frac{x_A - u\,t_A}{\sqrt{1-\dfrac{u^2}{c^2}}},\qquad x_B' = \frac{x_B - u\,t_B}{\sqrt{1-\dfrac{u^2}{c^2}}}
$$

<!-- src: PH-C03#p40; type: direct -->

两式相减:
$$
x_B' - x_A' = \frac{1}{\sqrt{1-\dfrac{u^2}{c^2}}}\big[(x_B - x_A) - u(t_B - t_A)\big]
$$

<!-- src: PH-C03#p40; type: direct -->

代入 $t_B - t_A = \dfrac{1}{c}(R_A - R_B)$ 得:
$$
x_B' - x_A' = \frac{1}{\sqrt{1-\dfrac{u^2}{c^2}}}\Big[(x_B - x_A) - \frac{u}{c}(R_A - R_B)\Big]
$$

<!-- src: PH-C03#p40; type: direct -->

#### 视长度结果与特殊情形

解出在 S 系中两端发射位置之差(即"看见"对应的视长度):
$$
x_B - x_A = (x_B' - x_A')\sqrt{1-\dfrac{u^2}{c^2}} + \frac{u}{c}(R_A - R_B)
$$

即视长度 = 洛伦兹收缩长度 $(x_B'-x_A')\sqrt{1-u^2/c^2}$ 再加上一项 $\dfrac{u}{c}(R_A - R_B)$。
<!-- src: PH-C03#p41; type: direct -->

特殊情形 $R_A = R_B$(P 点到细棒两端等距, 对应图中 P 在细棒正上方的对称三角形): 附加项为零, 此时
$$
x_B - x_A = (x_B' - x_A')\sqrt{1-\dfrac{u^2}{c^2}}
$$

即只有在此对称位置, 视长度才恰好等于洛伦兹收缩长度; 一般情形($R_A \neq R_B$, 图中 P 偏在一侧)视长度还含 $\dfrac{u}{c}(R_A-R_B)$ 项, 与洛伦兹收缩不同。
<!-- src: PH-C03#p41 + PH-C03#p41g1 + PH-C03#p41g2; type: direct -->

#### 文献与结论

- 1905 年, 爱因斯坦(Albert Einstein), 发表于 Annalen der Physik, 《论动体的电动力学》。
- Terrell J. Invisibility of the Lorentz contraction. Phys Rev, 1959(116): 1041.
- V. F. Weisskopf. The Visual Appearance of Rapidly Moving Objects. Phys. Today, 1960, 13(9): 24-27.
<!-- src: PH-C03#p42; type: direct -->

结论: James Terrell 证明了观察者是看不到洛伦兹收缩的。
<!-- src: PH-C03#p42; type: direct -->

即: 由前式可知"看见"对应的视长度 $x_B - x_A$ 一般还含 $\dfrac{u}{c}(R_A-R_B)$ 项, 不等于洛伦兹收缩长度 $(x_B'-x_A')\sqrt{1-u^2/c^2}$, 故高速运动物体的"视形状"并不等于洛伦兹收缩后的形状。
<!-- src: PH-C03#p41 + PH-C03#p42; type: synthesized -->

### 5. 时钟佯谬（双生子佯谬）

时钟佯谬通常又称双生子佯谬。<!-- src: PH-C03#p43; type: direct -->

情景设定：两个双生子王中林、林中王；林中王留在地球上，王中林乘高速飞船到宇宙空间去旅行，经过若干年飞船返回到地球。<!-- src: PH-C03#p43; type: direct -->

佯谬表述——林中王和王中林重逢时，两人各自的结论：

- 地球上的林中王认为：乘飞船航行的王中林比他年轻。<!-- src: PH-C03#p43; type: direct -->
- 飞船上的王中林认为：地球上的林中王比他年轻。<!-- src: PH-C03#p43; type: direct -->

两个结论相互矛盾，即所谓双生子佯谬。<!-- src: PH-C03#p43; type: direct -->

正确的答案：林中王和王中林重逢时，乘飞船航行的王中林比留在地球上的林中王年轻。<!-- src: PH-C03#p43; type: direct -->

#### 用两个时钟比较问题实质

为突出问题的实质，比较两个时钟：

- 时钟 A 留在地球上，选地球为 $S$ 系。<!-- src: PH-C03#p44; type: direct -->
- 时钟 B 固定在飞船上，选飞船为 $S'$ 系。<!-- src: PH-C03#p44; type: direct -->

时钟 A 与时钟 B 相遇时，约定读数：时钟 A 的读数为 $t_A$，时钟 B 的读数为 $t'_B$。<!-- src: PH-C03#p44; type: direct -->

由此产生的矛盾：

- 地球上的观察者认为 $t'_B < t_A$。<!-- src: PH-C03#p44; type: direct -->
- 飞船上的观察者认为 $t_A < t'_B$。<!-- src: PH-C03#p44; type: direct -->

两者相互矛盾，即时钟佯谬。<!-- src: PH-C03#p44; type: direct -->

正确的答案：时钟 A 与时钟 B 相遇时，$t'_B < t_A$。<!-- src: PH-C03#p44; type: direct -->

#### 佯谬的根源

飞船的实际运动过程：静止于惯性系 $S'$ 上 → 减速、转向、再加速 → 静止于惯性系 $S''$ 上。<!-- src: PH-C03#p45g1; type: direct -->

关键是不恰当地运用了狭义相对论。狭义相对论的前提是地球和飞船应是两个完全等价的惯性系，而本问题不满足这一条件。<!-- src: PH-C03#p45; type: direct -->

## §3.5 相对论力学基础

### 1. 质量与速度的关系

经典力学中力的基本方程为

$$
\vec{F} = m\frac{\mathrm{d}\vec{v}}{\mathrm{d}t}
$$


其中质量 $m$ 被认为是常量, 且与参考系无关。<!-- src: PH-C03#p46; type: direct -->

由经典力学的上述方程出发会得到矛盾: 恒力 $\vec{F}$ 持续作用 $\Rightarrow$ 速度 $\vec{v}$ 持续增加 $\Rightarrow$ 速度将超过真空中的光速。但物体的运动速度不能大于真空中的光速。<!-- src: PH-C03#p46; type: direct -->

为消除该矛盾, 结论为: 质量 $m$ 随速率增大而增大, 即 $m=m(v)$。<!-- src: PH-C03#p46; type: direct -->

本页右侧以参考形式列出洛伦兹变换(S系与S'系坐标、时间互换):

$$
x' = \frac{x-ut}{\sqrt{1-\dfrac{u^{2}}{c^{2}}}}, \qquad x = \frac{x'+ut'}{\sqrt{1-\dfrac{u^{2}}{c^{2}}}}
$$


$$
t' = \frac{t-\dfrac{u}{c^{2}}x}{\sqrt{1-\dfrac{u^{2}}{c^{2}}}}, \qquad t = \frac{t'+\dfrac{u}{c^{2}}x'}{\sqrt{1-\dfrac{u^{2}}{c^{2}}}}
$$


式中 $u$ 为两参考系间的相对速度, $c$ 为真空中光速。<!-- src: PH-C03#p46; type: direct -->

### 2. 因果关系与信号速度的限制

设S系中有两个事件 $P_1(x_1,t_1)$、$P_2(x_2,t_2)$, 事件 $P_1$ 引起事件 $P_2$(满足 $t_2>t_1$), 二者具有因果关系; 在S'系中相应记为 $P_1(x_1',t_1')$、$P_2(x_2',t_2')$。<!-- src: PH-C03#p47; type: direct -->

由洛伦兹时间变换写出两事件在S'系中的时刻:

$$
t_1' = \frac{t_1-\dfrac{u}{c^{2}}x_1}{\sqrt{1-\dfrac{u^{2}}{c^{2}}}}, \qquad t_2' = \frac{t_2-\dfrac{u}{c^{2}}x_2}{\sqrt{1-\dfrac{u^{2}}{c^{2}}}}
$$


二者相减得时间间隔:

$$
t_2'-t_1' = \frac{1}{\sqrt{1-\dfrac{u^{2}}{c^{2}}}}\left[(t_2-t_1)-\frac{u}{c^{2}}(x_2-x_1)\right]
$$


<!-- src: PH-C03#p47; type: direct -->

要在S'系中保持因果先后次序, 须有 $t_2'>t_1'$, 由上式可得条件

$$
t_2-t_1 > \frac{u}{c^{2}}(x_2-x_1), \qquad\text{即}\qquad u\,\frac{x_2-x_1}{t_2-t_1} < c^{2}
$$


<!-- src: PH-C03#p47; type: direct -->

由于 $P_1$ 引起 $P_2$, 二者间必然有相互作用或信息以速度

$$
v = \frac{x_2-x_1}{t_2-t_1}
$$


从 $P_1$ 处传到 $P_2$ 处; 代入上面条件即得

$$
\boxed{uv < c^{2}}
$$


<!-- src: PH-C03#p47; type: direct -->

此处 $v$ 是相互作用的传递速度(信号传播速度), 它联系着相关事件; 该页给出通常结论: 信号速度 $v$ 不大于真空中的光速。对给定相对速度 $u$, 只要 $uv<c^{2}$ 成立, 事件之间的因果关系就保证有绝对意义。<!-- src: PH-C03#p47; type: compressed -->
