---
title: "第3章 狭义相对论 · 速览"
description: "大学物理课程笔记：第3章 狭义相对论 · 速览。"
---

<div class="note-meta"><a href="/courses/physics/">大学物理目录</a><a href="/courses/physics/chapter-03/">阅读详版</a><a href="/downloads/physics/chapter-03-quick.md" download>下载 Markdown</a></div>

## §3.1 经典力学的困难

- 参考系约定:S、S′轴对应平行,S′相对S以 $u$ 沿 $+x$($=x'$)正向运动。伽利略变换(正/逆):$x'=x-ut,\;y'=y,\;z'=z,\;t'=t$;$x=x'+ut',\;y=y',\;z=z',\;t=t'$。<!-- src: PH-C03#p02; type: direct -->
- 伽利略速度变换:$v_x'=v_x-u,\;v_y'=v_y,\;v_z'=v_z$。<!-- src: PH-C03#p04; type: direct -->
- 真空光速 $c=\dfrac{1}{\sqrt{\varepsilon_0\mu_0}}$;在某"特定惯性系"中光各向同性 $v_x=v_y=v_z=c$。由速度变换知:相对该系运动的其它惯性系 S′ 中光各向速度不一定都相同——与伽利略变换矛盾。<!-- src: PH-C03#p04; type: compressed -->
- 该特殊参考系三名:特定的惯性系 / 绝对惯性系 / 以太。<!-- src: PH-C03#p04 + PH-C03#p05; type: synthesized -->
- 恒星光行差(1728,J. Bradley):地球以 $v$ 运动,望远镜须倾角 $\alpha$ 指向"视位置";曾用以说明以太未被地球拖曳。<!-- src: PH-C03#p06; type: compressed -->
- 以太部分拖曳:斐索(1851,Fizeau)测得拖曳系数 $0.46$;Michelson、Morley(1886)精测 $0.434\pm0.020$。结论:运动物质中以太受部分拖曳。<!-- src: PH-C03#p06; type: compressed -->

## §3.2 狭义相对论的基本假设

- 迈克耳孙-莫雷实验前提(以太说):以太系中光各向为 $c$,相对以太运动的系中光各向速度不一定相同;思路:在地球上测各方向光速差以定地球相对以太的运动。用 Michelson 干涉仪,精度达 $v^2/c^2$ 量级。<!-- src: PH-C03#p07; type: compressed -->
- 1881 Michelson 首测:仪器旋转 $90^\circ$ 应有 0.4 个条纹移动,实测无移动;1887 Michelson 与 Morley 更精密测量(即迈克耳孙-莫雷实验)。<!-- src: PH-C03#p08; type: compressed -->
- Einstein 1905《论动体的电动力学》(Annalen der Physik):否定绝对参考系,即不存在以太。<!-- src: PH-C03#p09; type: compressed -->
- 两条基本假设:(1) 相对性原理——一切物理规律在任何惯性系中形式相同,所有惯性系等价;(2) 光速不变原理——真空光速相对任何惯性系沿任一方向恒为 $c$,与光源运动无关。<!-- src: PH-C03#p10; type: direct -->

## §3.3 洛伦兹变换

- 约定:S、S′轴平行,S′相对S以 $u$ 沿 $+x$ 运动,$O$ 与 $O'$ 重合时取 $t=t'=0$;同一事件在两系分别记 $(x,y,z,t)$ 与 $(x',y',z',t')$,均为对该事件的测量结果。<!-- src: PH-C03#p11 + PH-C03#p13; type: compressed -->
- 正变换(S→S′):
$$
x'=\frac{x-ut}{\sqrt{1-\frac{u^2}{c^2}}},\quad y'=y,\quad z'=z,\quad t'=\frac{t-\frac{u}{c^2}x}{\sqrt{1-\frac{u^2}{c^2}}}
$$

<!-- src: PH-C03#p11 + PH-C03#p12; type: direct -->
- 逆变换(S′→S,即作 $u\to-u$ 并互换带撇/不带撇坐标):
$$
x=\frac{x'+ut'}{\sqrt{1-\frac{u^2}{c^2}}},\quad y=y',\quad z=z',\quad t=\frac{t'+\frac{u}{c^2}x'}{\sqrt{1-\frac{u^2}{c^2}}}
$$

<!-- src: PH-C03#p11 + PH-C03#p12; type: direct -->
- $u\ll c$ 时 $\dfrac{1}{\sqrt{1-u^2/c^2}}\to1$,洛伦兹变换退化为伽利略变换。<!-- src: PH-C03#p12; type: compressed -->
- 观察者/校钟约定:每个惯性系空间布满与之相对静止、彼此同步的钟,事件时空坐标由事发处该处钟记录;校钟法:在等距两端 A、B 的中点 $O$ 放光源向两侧发光。<!-- src: PH-C03#p13 + PH-C03#p14; type: compressed -->

## §3.4 狭义相对论的时空观

- 同时的相对性:S系两事件一般时间差
$$
t_2'-t_1'=\frac{(t_2-t_1)-\frac{u}{c^2}(x_2-x_1)}{\sqrt{1-\frac{u^2}{c^2}}}
$$

当S系同时($t_1=t_2$)时 $t_2'-t_1'=\dfrac{\frac{u}{c^2}(x_1-x_2)}{\sqrt{1-u^2/c^2}}$。同地($x_1=x_2$)仍同时;异地($x_1\neq x_2$)不再同时($x_1>x_2\Rightarrow t_2'>t_1'$,$x_1<x_2\Rightarrow t_2'<t_1'$)。<!-- src: PH-C03#p16 + PH-C03#p17; type: compressed -->
- 在S系看S′各钟不同步:后方($x<0$)读数超前、前方($x>0$)滞后;在S′看S系各钟亦不同步且互为对称⟹时钟校准(同时性)在两系间是相对的。<!-- src: PH-C03#p20 + PH-C03#p21; type: compressed -->
- 运动时钟变慢:S′系同一地点 $x_1'$ 相继发生两事件,空间项相消得
$$
\Delta t=t_2-t_1=\frac{t_2'-t_1'}{\sqrt{1-\frac{u^2}{c^2}}}=\frac{\Delta t'}{\sqrt{1-u^2/c^2}}>\Delta t'
$$

在"同一地点相继发生两事件"的系测得的时间间隔最短;运动物体的自然过程比静止的同样过程延缓。<!-- src: PH-C03#p22 + PH-C03#p23; type: compressed -->
- 长度收缩:沿 $x$ 放棒,须在测量系中"同时"测两端(令该系两端时间相等以消去时间交叉项)。固有长 $l_0$(在与棒相对静止的系中测得,最长),运动系测得 $l=l_0\sqrt{1-\frac{u^2}{c^2}}<l_0$(洛伦兹收缩);收缩沿相对运动($x$)方向。<!-- src: PH-C03#p25 + PH-C03#p26; type: compressed -->
- 可迁移方法(易错):两事件在某系不同地($\Delta x'\neq0$)时不能直接套时间膨胀,须用完整洛伦兹逆变换并保留空间项 $\frac{u}{c^2}\Delta x'$。例(车厢内匀速推球,地面测时):$t_2-t_1=\dfrac{l_0/u_0+\frac{u}{c^2}l_0}{\sqrt{1-u^2/c^2}}$。<!-- src: PH-C03#p24; type: compressed -->
- 火车-站台例题(火车与站台固有长均 $l_0$,$\beta=u/c=0.8$,$\sqrt{1-u^2/c^2}=0.6$):关键量 $\frac{u}{c^2}l_0=38.4$ 分(某系同步、相距 $\Delta x$ 的两钟,在另一系读数差 $=\frac{u}{c^2}\Delta x$)、$\frac{l_0}{u}=60$ 分。求"同一时刻各钟读数"前必须先指明用哪个系的同时性。易错:火车钟 A′、B′ 仅在S′系同步,站台钟 A、B 仅在S系同步,不可混用;同一对齐处两重合钟读数与参考系无关,差异只体现在远端钟。<!-- src: PH-C03#p27 + PH-C03#p28 + PH-C03#p29 + PH-C03#p33 + PH-C03#p35; type: synthesized -->
- 视形状(看见≠测量):成像是同时到达视网膜的光信号,因各点到眼距离不同且光速有限且为常量,故两端在不同时刻发射 $t_B-t_A=\frac{1}{c}(R_A-R_B)$。视长度
$$
x_B-x_A=(x_B'-x_A')\sqrt{1-\frac{u^2}{c^2}}+\frac{u}{c}(R_A-R_B)
$$

仅 $R_A=R_B$(P 在细棒正上方对称位置)时退化为洛伦兹收缩长。Terrell(1959)证明观察者看不到洛伦兹收缩。<!-- src: PH-C03#p38 + PH-C03#p39 + PH-C03#p41 + PH-C03#p42; type: compressed -->
- 双生子(时钟)佯谬:正确答案——乘飞船航行的王中林比留在地球的林中王年轻(时钟相遇时 $t_B'<t_A$)。根源:飞船实际经历减速、转向、再加速,地球与飞船并非两个完全等价的惯性系,不满足狭义相对论前提。<!-- src: PH-C03#p43 + PH-C03#p44 + PH-C03#p45; type: compressed -->

## §3.5 相对论力学基础

- 质量与速度:经典 $\vec F=m\dfrac{\mathrm{d}\vec v}{\mathrm{d}t}$($m$ 为与参考系无关的常量)中恒力持续作用会使 $v$ 超过光速,与"物体速度不能大于真空光速"矛盾;为消除矛盾得 $m=m(v)$,质量随速率增大而增大。<!-- src: PH-C03#p46; type: compressed -->
- 因果关系条件:具因果关系的两事件($P_1$ 引起 $P_2$)在S′系保持先后须 $t_2'>t_1'$,由时间变换得
$$
uv<c^2,\qquad v=\frac{x_2-x_1}{t_2-t_1}
$$

$v$ 为联系两事件的相互作用(信号)传递速度;该页给出通常结论:信号速度 $v$ 不大于光速。对给定 $u$,条件 $uv<c^2$ 成立时,因果关系即有绝对意义。<!-- src: PH-C03#p47; type: compressed -->
