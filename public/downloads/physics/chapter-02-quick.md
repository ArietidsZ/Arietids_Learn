# 第2章 质点动力学 · 速览

> Arietids Learn · 个人课程复习笔记
> 在线阅读：https://learn.arietids.net/courses/physics/chapter-02-quick/

> 正文编号：§2.3=动力学问题处理，§2.4=SI/量纲（与封面目录相反）。<!-- src: C02_质点动力学#p001 + #p025 + #p034; type: synthesized -->

## §2.1 牛顿运动定律

- **第一定律（惯性定律）**：自由质点 $\vec{v}=\text{const.}$（含静止）；力是改变恒定速度的作用；**惯性系**=该定律成立的参考系。仅对部分参考系成立。<!-- src: C02_质点动力学#p002 + #p003; type: compressed -->
- **惯性系等价**：速度变换 $\dfrac{d\vec{r}^{\,\prime}}{dt'}=\dfrac{d\vec{r}}{dt}-\vec{u}$；所有惯性系等价。<!-- src: C02_质点动力学#p004; type: compressed -->
- **第二定律**：$\vec{F}=\dfrac{d(m\vec{v})}{dt}=m\vec{a}$，$\vec{p}=m\vec{v}$；只在惯性系、对质点成立。分量：$F_x=ma_x$，$F_n=m\dfrac{v^2}{\rho}$，$F_t=m\dfrac{dv}{dt}$。<!-- src: C02_质点动力学#p005 + #p006 + #p007; type: compressed -->
- 质量：牛顿力学中 $m$ 为绝对量；相对论 $m=\dfrac{m_0}{\sqrt{1-v^2/c^2}}$。<!-- src: C02_质点动力学#p006; type: compressed -->
- **第三定律**：$\vec{F}_{AB}=-\vec{F}_{BA}$；对接触力总成立、非接触力不一定；不要求惯性系；两力作用在不同物体、不抵消。<!-- src: C02_质点动力学#p008; type: compressed -->
- **伽利略变换**：$x=x'+ut,\ y=y',\ z=z',\ t=t'$；**伽利略相对性原理**：力学规律在一切惯性系形式相同（$\vec{F}^{\,\prime}=\vec{F}$、$\vec{a}=\vec{a}^{\,\prime}$、$m=m'$）。<!-- src: C02_质点动力学#p009; type: compressed -->

## §2.2 万有引力和力学中常见的力

- **万有引力**：$\vec{F}_{21}=-G\dfrac{m_1m_2}{r_{12}^2}\hat{r}_{12}$（负号=吸引，指向施力质点）。<!-- src: C02_质点动力学#p010 + #p014; type: compressed -->
- 平方反比来历：圆轨道近似 + $T\propto r^{3/2}\Rightarrow a\propto1/r^2\Rightarrow F\propto m/r^2$。<!-- src: C02_质点动力学#p012; type: compressed -->
- 月—地检验：同一常数支配 $g$ 与 $a_{\text{月}}$，圆周模型得 $(r')^{3}=\dfrac{R^2gT^2}{4\pi^2}$。<!-- src: C02_质点动力学#p013; type: compressed -->
- **重力**：地表近似 $g=\dfrac{GM}{R^2}$，$\vec{F}=m\vec{g}$（条件 $r-R\ll R$）。<!-- src: C02_质点动力学#p015; type: compressed -->
- **逃逸速度**：$v=\sqrt{v_0^2-2gR+\dfrac{2gR^2}{x}}$；逃逸判据 $v_0^2\ge2gR$，$v_0=\sqrt{2gR}=11.2\,\mathrm{km/s}$；技巧 $\dfrac{dv}{dt}=v\dfrac{dv}{dx}$。<!-- src: C02_质点动力学#p016 + #p017; type: compressed -->
- **胡克定律**：$F=-kx$（$x$ 自平衡位置量起，近似经验式）。<!-- src: C02_质点动力学#p018; type: compressed -->
- **张力**：张力处处相等的条件——绳水平 $\vec{a}=0$ 或轻绳 $m=0$，此时 $T=F$。<!-- src: C02_质点动力学#p019 + #p020; type: compressed -->
- 旋转绳张力（微元法+边界 $T(L)=0$）：$T(r)=\dfrac{M\omega^2(L^2-r^2)}{2L}$。<!-- src: C02_质点动力学#p021 + #p022; type: compressed -->
- **摩擦力**：静摩擦 $0\le f_s\le\mu_sF_N$，$f_{s,\max}=\mu_sF_N$；滑动 $f_k=\mu F_N$，且 $\mu<\mu_s$、$f_k<f_{s,\max}$。<!-- src: C02_质点动力学#p023 + #p024; type: compressed -->

## §2.3 动力学问题的处理

- **方法**：隔离体分别画受力图、以惯性系列牛顿方程联立。<!-- src: C02_质点动力学#p025 + #p026; type: compressed -->
- 阿特伍德机：$a=\dfrac{m_1-m_2}{m_1+m_2}g$，$T_1=T_2=\dfrac{2m_1m_2}{m_1+m_2}g$，滑轮轴 $T=2T_1$，$N=mg+T$；滑轮+两物为变形体。<!-- src: C02_质点动力学#p026 + #p027; type: compressed -->
- 电梯中阿特伍德机：匀速同地面；匀加速上升把 $g\to(a+g)$，$T=\dfrac{2m_1m_2}{m_1+m_2}(a+g)$；自由下落 $a=-g\Rightarrow a_{\mathrm{el}}'=0,\ T=0$。<!-- src: C02_质点动力学#p029 + #p030 + #p031; type: compressed -->
- 绳绕圆柱（绞盘，微元法）：$\dfrac{dT}{T}=-\mu\,d\theta\Rightarrow T_B=T_Ae^{-\mu\varphi}$（$\mu=0\Rightarrow T_B=T_A$）。<!-- src: C02_质点动力学#p033; type: compressed -->

## §2.4 SI 单位和量纲

- SI 力学基本量＝长度、质量、时间（m, kg, s）；量纲 $[Q]=L^pM^qT^s$，如 $[v]=LT^{-1}$、$[a]=LT^{-2}$、$[F]=MLT^{-2}$。<!-- src: C02_质点动力学#p034 + #p035; type: compressed -->
- 单摆周期：$T=\alpha\sqrt{\dfrac{l}{g}}$，与 $m$ 无关、$\alpha$ 不定；原子弹能量估计（$k\sim1$）：$E=k\dfrac{\rho r^5}{t^2}$。<!-- src: C02_质点动力学#p036 + #p039 + #p040; type: compressed -->

## §2.5 非惯性系和惯性力

- **非惯性系 / 惯性力**：$\vec{a}^{\,\prime}=\vec{a}-\dfrac{d\vec{u}}{dt}$；$\vec{F}_{\mathrm{in}}=-m\dfrac{d\vec{u}}{dt}$（平动系 $=-m\vec{a}_0$），引入后 $\vec{F}+\vec{F}_{\mathrm{in}}=m\vec{a}^{\,\prime}$。<!-- src: C02_质点动力学#p041 + #p042 + #p043 + #p044 + #p045; type: compressed -->
- **超重/失重**：上加速超重、下加速失重；自由下落（$m=m_i,\ a=g$）$P=mg-m_ia=0$，完全失重。<!-- src: C02_质点动力学#p046 + #p047; type: compressed -->
- **惯性离心力 / 科里奥利力**：$\vec{F}_{\mathrm{in}}=m\omega^2\vec{r}$；$\vec{F}_c=2m\vec{v}\times\vec{\omega}$；转动系总惯性力 $=m\omega^2\vec{r}+2m\vec{u}\times\vec{\omega}$。<!-- src: C02_质点动力学#p049 + #p050 + #p053; type: compressed -->
- 极坐标加速度：$\vec{a}=\left(\ddot r-r\dot\theta^2\right)\hat{r}+\left(r\ddot\theta+2\dot r\dot\theta\right)\hat{\theta}$；本例 $\vec{a}=-r\omega^2\hat{r}+2u\omega\hat{\theta}$。<!-- src: C02_质点动力学#p052; type: compressed -->
- 傅科摆：摆平面顺时针转动，约 $32$ 小时一周；旋转光滑管：$v=-r\omega_0\Rightarrow r=le^{-\omega_0t}$，$t_1=\dfrac{\ln2}{\omega_0}$，到轴心需 $t=\infty$。<!-- src: C02_质点动力学#p055 + #p056 + #p057 + #p058; type: compressed -->
