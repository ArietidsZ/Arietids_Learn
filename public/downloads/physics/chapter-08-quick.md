# 第8章 机械波（速览）

> Arietids Learn · 个人课程复习笔记
> 在线阅读：https://learn.arietids.net/courses/physics/chapter-08-quick/

## §8.1 机械波的产生和传播

### 波的分类
波由波源产生，分机械波、电磁波、物质波。<!-- src: PH-C08#p001; type: synthesized -->
- 机械波：受牛顿定律支配，只能在物质介质中传播。<!-- src: PH-C08#p001; type: translated -->
- 电磁波：在真空中均以同一速率 $c$ 传播，不需介质。<!-- src: PH-C08#p001; type: synthesized -->
- 物质波。<!-- src: PH-C08#p001; type: direct -->

### 弹性介质
弹性形变：外力撤去后形变消失；弹性体具有弹性形变；弹性介质由弹性体组成。质元即介质中的质点；弹性力即恢复力。<!-- src: PH-C08#p002; type: direct -->

### 横波与纵波
- 横波（transverse wave）：质元振动方向与波传播方向垂直（如弹性绳，$y$ 向振动、$x$ 向传播）。<!-- src: PH-C08#p003 + #p003g; type: synthesized -->
- 纵波（longitudinal wave）：质元振动方向与波传播方向平行（如弹簧），介质出现疏密相间区域。<!-- src: PH-C08#p005 + #p005g; type: synthesized -->
- 各质元依次起振，振动状态沿传播方向逐步向后传播。<!-- src: PH-C08#p004g; type: synthesized -->

### 振动状态的传播与波长
波传播的是振动状态。波长 $\lambda$：振动状态在一个周期 $T$ 内传播的距离。<!-- src: PH-C08#p004 + #p006; type: direct -->

## §8.2 简谐波

### 周期性与基本量
简谐波兼具时间周期性（$T$、$f$、$\omega$）与空间周期性（用 $\lambda$ 描述）。波速 $v$ 为单位时间内振动状态传播的距离。<!-- src: PH-C08#p007; type: direct -->

$$
v = \frac{\lambda}{T} = f\lambda = \frac{\omega\lambda}{2\pi}
$$

<!-- src: PH-C08#p007; type: direct -->

### 波阵面与波前
某时刻振动相位相同各点构成波阵面（波面）。平面波波面为平行平面；球面波由点波源向外辐射，波面为同心球面。<!-- src: PH-C08#p008; type: direct -->

### 平面简谐波波函数
波函数 $y=y(\vec{r},t)$；沿 $x$ 传播时记 $y=y(x,t)$。<!-- src: PH-C08#p009; type: direct -->

设原点振动 $y(0,t)=A\cos(\omega t+\varphi)$，$x$ 处比原点滞后 $x/v$，故沿 $+x$ 传播：

$$
y(x,t)=A\cos\!\left[\omega\!\left(t-\frac{x}{v}\right)+\varphi\right]
$$

<!-- src: PH-C08#p010 + #p011; type: synthesized -->

角波数 $k=\dfrac{2\pi}{\lambda}=\dfrac{\omega}{v}$，$\vec{k}$ 为波矢。<!-- src: PH-C08#p011; type: direct -->

传播方向决定 $x$ 项符号（沿 $+x$ 取负、沿 $-x$ 取正）：

$$
y=A\cos(\omega t+\varphi-kx)\ (+x);\qquad y=A\cos(\omega t+\varphi+kx)\ (-x)
$$

<!-- src: PH-C08#p012; type: direct -->

### 相速度
追踪固定相位得 $\omega\,\Delta t=k\,\Delta x$，故相速度

$$
v=\frac{\Delta x}{\Delta t}=\frac{\omega}{k}=f\lambda
$$

<!-- src: PH-C08#p013; type: direct -->

### 例：由两时刻波形图写波函数（通用步骤）
- 由波形平移距离与时间求波速 $v=\dfrac{x_1-x_0}{t}$。<!-- src: PH-C08#p014; type: direct -->
- 由 $v$、$\lambda$ 求 $T=\lambda/v$、$\omega=2\pi/T$。<!-- src: PH-C08#p014; type: direct -->
- 写原点振动 $y_0=A\cos(\omega t+\varphi)$，由初始位移定 $\varphi$ 候选。<!-- src: PH-C08#p015; type: direct -->
- 由初速 $v_0=-\omega A\sin\varphi$ 的正负唯一确定 $\varphi$。<!-- src: PH-C08#p015; type: direct -->
- 加沿 $+x$ 的相位滞后 $-kx$ 得波函数。<!-- src: PH-C08#p016; type: direct -->

易错：$y_0=0$ 只得 $\pm\pi/2$ 两候选，须用振动速度正负（传播方向决定）唯一定 $\varphi$。<!-- src: PH-C08#p015; type: one-step-inferred -->

### 例：沿 x 负向传播与换原点
- 负向传播相位项取 $+kx$，$k=\dfrac{\omega}{v}$。<!-- src: PH-C08#p017; type: direct -->
- 换原点：将新原点代入旧波函数求该点振动表达式，再重写波函数；只改常数初相，不改 $\omega$、$k$。<!-- src: PH-C08#p017; type: one-step-inferred -->

### 例：参考质元不在原点
通用法：由已知质元 $a$ 的振动推原点振动，写一般点波函数，再代入目标点坐标。原点取法不同使 $kx_a$、$kx$ 符号改变，但同一质元振动表达式不变（如 $y_b=A\cos[\omega t+\alpha-kl]$），与坐标系选取无关。<!-- src: PH-C08#p018 + #p019; type: synthesized -->

### 平面波的波动方程
弦上横波：水平张力分量 $T$ 守恒，竖直方向牛顿第二定律 $T\dfrac{\partial^2 y}{\partial x^2}dx=\eta\,dx\dfrac{\partial^2 y}{\partial t^2}$。<!-- src: PH-C08#p020 + #p021; type: direct -->

$$
\frac{\partial^2 y}{\partial t^2}=v^2\frac{\partial^2 y}{\partial x^2},\qquad v=\sqrt{\frac{T}{\eta}}
$$

解可取 $y=A\cos(\omega t+\varphi-kx)$。<!-- src: PH-C08#p022; type: direct -->

弹性杆纵波：$dm=\rho S\,dx$，应力 $\dfrac{F}{S}=Y\dfrac{\partial y}{\partial x}$，得

$$
\frac{\partial^2 y}{\partial t^2}=\frac{Y}{\rho}\frac{\partial^2 y}{\partial x^2},\qquad v=\sqrt{\frac{Y}{\rho}}
$$

<!-- src: PH-C08#p027; type: direct -->

平面简谐波代入二阶偏导可验证波动方程，且 $v=\omega/k$。<!-- src: PH-C08#p028; type: direct -->

机械波速由介质弹性与惯性决定：

| 情形 | 波速 |
| --- | --- |
| 弦/绳横波 | $v=\sqrt{T/\eta}$（$T$ 张力，$\eta$ 线密度） |
| 细棒纵波 | $v=\sqrt{Y/\rho}$（$Y$ 杨氏模量） |
| 固体横波 | $v=\sqrt{G/\rho}$（$G$ 切变模量） |
<!-- src: PH-C08#p029; type: direct -->

## §8.3 波的能量和能流

### 能量密度
弦上横波线元动能 $dK=\tfrac{1}{2}\mu\,dx(\partial y/\partial t)^2$，势能 $dU=\tfrac{1}{2}T\,dx(\partial y/\partial x)^2$。<!-- src: PH-C08#p030 + #p031; type: direct -->

代入 $y=A\cos(\omega t-kx)$，利用 $v=\omega/k=\sqrt{T/\mu}$ 得 $dK=dU$，故

$$
dE=\mu\,dx\,\omega^2A^2\sin^2(\omega t-kx)
$$

<!-- src: PH-C08#p032 + #p033; type: direct -->

要点：同一质元动能与势能同相位、恒相等，单个质元总能量随时间变化（不守恒），能量随波传播。<!-- src: PH-C08#p032 + #p033; type: one-step-inferred -->

能量密度：

$$
w=\frac{dE}{S\,dx}=\rho\,\omega^2A^2\sin^2(\omega t-kx)
$$

<!-- src: PH-C08#p033; type: direct -->

### 能流密度与波强
能流密度矢量 $\vec{S}=w\vec{v}$（单位时间过单位垂直面的能量）。<!-- src: PH-C08#p034 + #p034g; type: direct -->

波强为能流密度的周期平均：

$$
I=\langle S\rangle=\frac{1}{2}\rho\,\omega^2 v A^2\ \propto\ A^2
$$

<!-- src: PH-C08#p034; type: direct -->

### 球面波与振幅衰减
无吸收时各球面平均能流相等 $I_1\,4\pi r_1^2=I_2\,4\pi r_2^2$，得 $Ar=\text{const.}$，$A=\dfrac{A_0r_0}{r}$。<!-- src: PH-C08#p035 + #p035g; type: direct -->

$$
y=\frac{A_0r_0}{r}\cos(\omega t+\varphi-kr)
$$

<!-- src: PH-C08#p035; type: direct -->

| 波型 | 守恒关系 | 振幅 |
| --- | --- | --- |
| 球面波 | $Ar=\text{const.}$ | $A\propto 1/r$ |
| 平面波 | $A=\text{const.}$ | — |
| 柱面波 | $A\sqrt{r}=\text{const.}$ | $A\propto 1/\sqrt{r}$ |
<!-- src: PH-C08#p036; type: direct -->

### 能量分布
最大位移处线元能量为零，零位移（平衡位置）处线元能量最大；能量随波向前传播，单个质元能量不守恒。<!-- src: PH-C08#p037 + #p037g; type: direct -->

## §8.4 波的干涉

### 相干条件
两波相遇某些点振动始终加强、另一些始终减弱即干涉；能产生干涉的波为相干波。相干条件：①频率相同；②振动方向平行；③相位差恒定。<!-- src: PH-C08#p039 + #p042; type: direct -->

### P 点叠加与合振幅
两相干波到 P 点（波程 $r_1$、$r_2$）合成同频简谐振动 $y=A\cos(\omega t+\varphi)$，

$$
A^2=A_1^2+A_2^2+2A_1A_2\cos\Delta\varphi
$$

$$
\Delta\varphi=\varphi_1-\varphi_2-k(r_1-r_2)
$$

<!-- src: PH-C08#p040 + #p043; type: direct -->

### 加强与减弱条件
强度 $I=I_1+I_2+2\sqrt{I_1I_2}\cos\Delta\varphi$，$I=\tfrac{1}{2}\rho\omega^2vA^2$。<!-- src: PH-C08#p044; type: direct -->
- 加强（相长）：$\Delta\varphi=2n\pi$，$A=A_1+A_2$。<!-- src: PH-C08#p044; type: direct -->
- 减弱（相消）：$\Delta\varphi=(2n+1)\pi$，$A=|A_1-A_2|$。<!-- src: PH-C08#p044; type: direct -->

### 波程差判据（两源同相时）
$\Delta\varphi=\dfrac{2\pi}{\lambda}(r_2-r_1)$。<!-- src: PH-C08#p045; type: direct -->
- 加强：$r_2-r_1=n\lambda$。<!-- src: PH-C08#p045; type: direct -->
- 减弱：$r_2-r_1=(2n+1)\dfrac{\lambda}{2}$。<!-- src: PH-C08#p045; type: direct -->

数学附注：$(1+x)^{1/2}=1+\tfrac{1}{2}x-\tfrac{1}{2\cdot4}x^2+\cdots$（$|x|\le1$）。<!-- src: PH-C08#p041; type: direct -->

### 干涉例题一：判定 P 点结果
几何求各波程（如 $BP=\sqrt{20^2+15^2}=25$），$\lambda=u/f$，由初相关系定波源相位差，代入 $\Delta\varphi=\varphi_B-\varphi_A-2\pi\dfrac{BP-AP}{\lambda}$ 判级次。$\Delta\varphi$ 为 $\pi$ 奇数倍则相消，等幅时 $A=0$。<!-- src: PH-C08#p046; type: direct -->

易错：相位差含波源初相差与波程差两部分，符号不可丢；波程差取较远减较近。<!-- src: PH-C08#p046; type: compressed -->

### 干涉例题二：由相邻静止点反求波长与最小相位差
两源相向传播，到 $x$ 点波程分别为 $x$ 与 $d-x$。写两相邻静止点（相位差为 $\pi$ 奇数倍，级次差 1）的减弱条件，作差消去初相得 $\lambda=2(x_2-x_1)$；代回求 $\varphi_2-\varphi_1$，取使其最小的 $k$（本例 $\pm\pi$）。<!-- src: PH-C08#p047 + #p048; type: direct -->

易错：相向传播波程取 $x$ 与 $d-x$；相邻静止点级次差 1（相位差 $2\pi$），作差法消初相。<!-- src: PH-C08#p047 + #p048; type: compressed -->

### 反射、折射与半波损失
波遇异介质分界面发生反射、折射。特性阻抗 $Z=\rho v$：$\rho v$ 较小为波疏介质，较大为波密介质。<!-- src: PH-C08#p049; type: direct -->

半波损失：波由波疏介质入射、在与波密介质分界面反射时，反射波相位突变 $\pi$。<!-- src: PH-C08#p049; type: direct -->

### 例：入射波与反射波波函数（无半波损失）
方法：以已知振动点向反射面 B 推（相位落后 $\dfrac{\omega}{v}L$）；无半波损失则不加 $\pi$；反射波沿 $-x$ 传播，$x$ 项变号取 $+\dfrac{\omega}{v}x$，回原点再落后 $\dfrac{\omega}{v}L$，合计程差 $2L$。<!-- src: PH-C08#p050; type: synthesized -->

$$
y_{\text{反}}=A\cos\!\left(\omega t-\frac{\omega}{v}2L+\frac{\omega}{v}x\right)
$$

<!-- src: PH-C08#p050; type: direct -->

## §8.5 驻波

### 定义与特征
两列振幅相同的相干波沿同一直线反向传播叠加成驻波。特征：波形不推进；各质元处稳定振动状态。<!-- src: PH-C08#p051; type: direct -->

### 波节与波腹
各质元振幅各异但不变：振幅始终为零的点为波节，始终最大的点为波腹；波节、波腹位置不随时间改变。<!-- src: PH-C08#p052; type: direct -->

### 驻波方程
由 $y_1=A\cos(\omega t-kx)$、$y_2=A\cos(\omega t+kx)$ 叠加：

$$
y=2A\cos kx\,\cos\omega t=\left(2A\cos\frac{2\pi x}{\lambda}\right)\cos\omega t
$$

振幅因子 $2A\cos\dfrac{2\pi x}{\lambda}$ 随 $x$ 周期变化，谐振因子 $\cos\omega t$。<!-- src: PH-C08#p054 + #p055; type: direct -->

只要振幅因子不变号，同 $x$ 处相位均为 $\omega t$，不随 $x$ 变化，故驻波是振动而非振动状态的传播。<!-- src: PH-C08#p055; type: direct -->

### 波腹、波节坐标与间距
- 波腹：$x=n\dfrac{\lambda}{2}$，相邻间距 $\dfrac{\lambda}{2}$。<!-- src: PH-C08#p056; type: direct -->
- 波节：$x=(2n+1)\dfrac{\lambda}{4}$，相邻间距 $\dfrac{\lambda}{2}$。<!-- src: PH-C08#p056; type: direct -->

### 相位特征
相邻波节两侧（相邻波腹）质元相位相反（差 $\pi$）；相邻波节之间质元相位相同。<!-- src: PH-C08#p057; type: direct -->

### 例：固定端反射形成驻波（半波损失法）
1. 入射波 $y_i=A\cos(\tfrac{2\pi}{T}t-kx)$，求反射点入射相位。<!-- src: PH-C08#p058ex; type: direct -->
2. 固定端反射加额外相位 $\pi$（半波损失）。<!-- src: PH-C08#p058ex; type: direct -->
3. 反射波沿 $-x$ 传播，$x$ 项取 $+kx$，由反射点倒推。<!-- src: PH-C08#p058ex; type: direct -->

合成 $y=2A\sin\dfrac{2\pi x}{\lambda}\sin\dfrac{2\pi t}{T}$；波腹 $x=(2n+1)\dfrac{\lambda}{4}$，波节 $x=n\dfrac{\lambda}{2}$，固定端处为波节。<!-- src: PH-C08#p059ex; type: direct -->

易错：固定端反射须计半波损失（加 $\pi$）；反射波沿 $-x$ 取 $+kx$。<!-- src: PH-C08#p058ex; type: one-step-inferred -->

### 能量
驻波由反向两行波叠加，平均能流大小相等方向相反，总平均能流为零，平均无能量传播。<!-- src: PH-C08#p060 + PH-C08#p061; type: direct -->

每隔 $T/4$ 动能与势能相互转化。各体元同时达最大位移（瞬时静止）时能量全为势能、集中于波节；同时过平衡位置（位移处处为零）时能量全为动能、集中于波腹。动能驼峰（波腹）与势能驼峰（波节）空间错开交替。<!-- src: PH-C08#p063 + PH-C08#p064; type: synthesized -->

### 两端固定弦的简正模
稳定驻波要求 $n\cdot\dfrac{\lambda}{2}=L$（$n=1,2,\cdots$）。允许频率

$$
f_n=\frac{n}{2L}\sqrt{\frac{F_T}{\mu}}
$$

对应驻波为简正模，频率为简正频率。<!-- src: PH-C08#p065; type: direct -->

基频 $f_1=\dfrac{1}{2L}\sqrt{\dfrac{F_T}{\mu}}$，其余为 $n$ 次谐频 $f_n=nf_1$。<!-- src: PH-C08#p065; type: direct -->

| 模式 | 波长 |
| --- | --- |
| $n=1$ | $2L$ |
| $n=2$ | $L$ |
| $n=3$ | $2L/3$ |
| $n=4$ | $L/2$ |
<!-- src: PH-C08#p065g + PH-C08#p066g; type: synthesized -->

### 简正模叠加
弦的任意一般运动可看作一系列简正模的线性叠加；两简正模可合成一个波扰动（如 $f_2=2f_1$、$T_1=2T_2$）。<!-- src: PH-C08#p066 + #p067; type: synthesized -->

### 受击/受拨位置的影响
受击/受拨点处恰为波节的简正模不被激发。距一端 $\dfrac{L}{n}$ 受激时，$nk$ 次谐频（$k=1,2,\cdots$）缺失（中点对应 $2k$ 次缺失）。<!-- src: PH-C08#p068; type: direct -->

## 两相干波源的远场干涉

### 波程差
远场 $R\gg d$ 时，$\Delta L=L_2-L_1=d\sin\theta$（$\theta$ 为 $OP$ 与两源连线中垂线夹角）。<!-- src: PH-C08#p070 + #p071; type: synthesized -->

### 极大与极小方向
- 极大：$\Delta L=n\lambda$，$\sin\theta=n\dfrac{\lambda}{d}$（$n=0$ 为中央极大）。<!-- src: PH-C08#p070; type: direct -->
- 极小：$\Delta L=(2n+1)\dfrac{\lambda}{2}$，$\sin\theta=\left(n+\dfrac{1}{2}\right)\dfrac{\lambda}{d}$。<!-- src: PH-C08#p071; type: direct -->

### 例：由相邻极大求波长
- 由屏上几何 $\tan\theta=D/L$ 求方向角。<!-- src: PH-C08#p072; type: direct -->
- 相邻下一极大取 $n=1$，$\sin\theta=\lambda/d$。<!-- src: PH-C08#p073; type: direct -->
- $\lambda=d\sin\theta$。<!-- src: PH-C08#p073; type: direct -->

易错：方向角用 $\tan\theta=D/L$ 求，干涉条件用 $\sin\theta$；相邻下一极大对应 $n=1$。<!-- src: PH-C08#p072 + #p073; type: one-step-inferred -->

## §8.6 波的衍射

### 衍射现象
波遇障碍物（孔、缝、边缘）能绕过边缘偏离直线继续传播；孔的线度与波长相比拟时衍射显著，孔越小越明显。<!-- src: PH-C08#p074; type: direct -->

### 惠更斯原理
波动传到的各点都可视为发射球面子波的波源；其后任一时刻这些子波波阵面的包络面决定新波阵面。由此可解释平面波/球面波传播及孔缝处波阵面弯曲产生衍射（$a$ 与 $\lambda$ 可比拟时显著）。<!-- src: PH-C08#p075; type: direct -->

## §8.7 多普勒效应

### 定义
波源与观测者均静止时观测频率等于波源频率；二者有相对运动时观测频率不同，即多普勒效应（Doppler，1842）。<!-- src: PH-C08#p076; type: direct -->

### 符号约定
三种情形：A 观测者动、B 波源动、C 二者均动。所有速度相对介质，运动沿二者连线。$\vec{v}_s$ 波源速度、$\vec{v}_r$ 观测者速度、$\vec{u}$ 波速（由介质决定）。图示约定：源在左、观测者在右。<!-- src: PH-C08#p077 + #p079; type: direct -->

### Case A 观测者运动
波相对观测者速度 $u'=u\pm v_r$（向着波源取 $+$、远离取 $-$），$\lambda=u/f$ 不变：

$$
f_r=\frac{u\pm v_r}{u}\,f
$$

向着波源 $f_r>f$，远离 $f_r<f$。<!-- src: PH-C08#p078 + #p080; type: direct -->

### Case B 波源运动
波速不变，波长改变 $\lambda'=uT\mp v_sT$（接近取 $-$、远离取 $+$）：

$$
f_r=\frac{u}{u\mp v_s}\,f
$$

接近 $f_r>f$（波前压密），远离 $f_r<f$（波前拉疏）。<!-- src: PH-C08#p081 + #p082; type: direct -->

### Case C 二者均动
沿连线（纵向）：

$$
f_r=\frac{u\pm v_r}{u\mp v_s}\,f
$$

分子 $\pm v_r$：观测者接近取 $+$、远离取 $-$；分母 $\mp v_s$：波源接近取 $-$、远离取 $+$。<!-- src: PH-C08#p083; type: direct -->

非沿连线：

$$
f_r=\frac{u+v_r\cos\theta_r}{u-v_s\cos\theta_s}\,f
$$

$\theta_r$、$\theta_s$ 为各速度与连线夹角。<!-- src: PH-C08#p083 + #p083g; type: direct -->

### 冲击波与马赫锥
波源速度超过波速时产生冲击波，波前为马赫锥，半顶角 $\sin\theta=\dfrac{u}{v_s}$。各球面波前的公共包络构成锥面；$v_s\to u$ 时各波面在一点相切。<!-- src: PH-C08#p084; type: direct -->

### 例：反射屏测速（拍频法）
- $A$ 直接接收 $f_1=f_0$。<!-- src: PH-C08#p085ex; type: direct -->
- 反射屏先作运动观测者接收，再作运动波源向 $A$ 发射（两步频移）。<!-- src: PH-C08#p085ex; type: direct -->

$$
f_P=\frac{u+v}{u}f_0,\qquad f_2=\frac{u+v}{u-v}f_0
$$


- 拍频关系（两路频率差）：$\Delta f=f_2-f_1$，$f_0=\dfrac{u-v}{2v}\Delta f$。<!-- src: PH-C08#p085ex; type: direct -->

<!-- src: PH-C08#p085ex; type: one-step-inferred; note: 反射面相当于运动观测者 + 运动波源，拍频为两路频率差 -->
