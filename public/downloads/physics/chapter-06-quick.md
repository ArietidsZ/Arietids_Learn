# 第6章 刚体力学基础 · 速览

> Arietids Learn · 个人课程复习笔记
> 在线阅读：https://learn.arietids.net/courses/physics/chapter-06-quick/

## §6.1 刚体的运动

### 基本概念与运动形式

- 刚体：所研究问题中不发生形变的物体；考虑质量、形状、大小，忽略形变。可视为质量连续分布、任意两质元间距不变的特殊质点系（理想模型）。<!-- src: PH-C06#p002; type: compressed -->
- 平动：刚体内任一直线在运动中始终保持方向不变；所有点运动相同，可当一个质点处理。<!-- src: PH-C06#p002; type: compressed -->
- 转动：各质元都绕同一直线（转轴）作圆周运动。分定轴转动（门、窗）与定点转动（陀螺）。<!-- src: PH-C06#p003; type: compressed -->
- 定轴转动：取垂直于转轴的平面为转动平面；$\vec{\omega}$ 沿转轴（z 轴），指向由右手螺旋法则定；各质元角速度相同。<!-- src: PH-C06#p004; type: compressed -->

### 角量与线量关系

- 角速度 $\omega = \dfrac{\mathrm{d}\varphi}{\mathrm{d}t}$；角加速度 $\alpha = \dfrac{\mathrm{d}\omega}{\mathrm{d}t}$。<!-- src: PH-C06#p005 + #p006; type: direct -->
- 线速度矢量关系 $\vec{v} = \vec{\omega}\times\vec{r}$，大小 $v = r\omega$。<!-- src: PH-C06#p005 + #p006; type: direct -->
- 切向加速度 $a_t = \dfrac{\mathrm{d}v}{\mathrm{d}t} = r\alpha$（沿切向）；法向加速度 $a_n = \dfrac{v^2}{r} = r\omega^2$（指向转轴、向心）。<!-- src: PH-C06#p006; type: direct -->

## §6.2 刚体的定轴转动定理

### 力矩

- 内力矩之和为零 $\vec{M}_I = \sum_i\left(\vec{r}_i\times\sum_{j\neq i}\vec{F}_{ij}\right)=0$；合力对 O 点力矩 = 合外力对 O 点外力矩。<!-- src: PH-C06#p007; type: compressed -->
- 只需考虑外力垂直于转轴的分量产生的沿轴力矩。质元力矩沿 z 分量 $M_{iz}=|\vec{R}_i\times\vec{F}_i|=R_iF_i\sin\delta_i$，其中 $\vec{R}_i$ 为轴到质元的垂直矢量，$\delta_i$ 为 $\vec{R}_i$ 与 $\vec{F}_i$ 夹角。<!-- src: PH-C06#p008; type: compressed -->
- 外力对转轴的合力矩 $M_z = \sum_i R_i F_i \sin\delta_i$。<!-- src: PH-C06#p009; type: direct -->

### 角动量与转动惯量

- 角动量沿 z 分量 $L_z = \left(\sum_i R_i^2\Delta m_i\right)\omega = J\omega$（利用 $v_i=R_i\omega$）。<!-- src: PH-C06#p010 + #p011; type: compressed -->
- 转动惯量：离散 $J=\sum_i r_i^2\Delta m_i$；连续 $J=\int r^2\,\mathrm{d}m$，$\mathrm{d}m=\rho\,\mathrm{d}V$，$r$ 为质量元到转轴的垂直距离。<!-- src: PH-C06#p011 + #p014; type: direct -->
- 平行轴定理 $J_A = J_C + md^2$（$J_C$ 为过质心平行轴，$d$ 为两平行轴间距）。<!-- src: PH-C06#p015; type: direct -->
- 组合定理 $J = J_{A_1}+J_{A_2}$（各部分对同轴的转动惯量求和）。<!-- src: PH-C06#p015; type: direct -->
- 均质棒（m、l）：过中心垂直轴 $J=\dfrac{1}{12}ml^2$；过一端 $J=\dfrac{1}{12}ml^2+m\left(\dfrac{l}{2}\right)^2=\dfrac{1}{3}ml^2$。<!-- src: PH-C06#p016ex1; type: compressed -->

### 定轴转动定理

- 由质点系角动量定理 $\vec{M}=\dfrac{\mathrm{d}\vec{L}}{\mathrm{d}t}$，转动中 J 不变，故 $M_z=J\dfrac{\mathrm{d}\omega}{\mathrm{d}t}=J\alpha$，即 $\vec{M}=J\vec{\alpha}$。<!-- src: PH-C06#p013; type: compressed -->

### 例题：定滑轮与两物体

- 模型方程：$m_1g-T_1=m_1a$，$T_2-m_2g=m_2a$，$T_1r-T_2r=J\alpha$，约束 $a=r\alpha$。<!-- src: PH-C06#p017ex1; type: compressed -->
- 结果：$a=\dfrac{(m_1-m_2)r^2g}{(m_1+m_2)r^2+J}$，$\alpha=\dfrac{(m_1-m_2)rg}{(m_1+m_2)r^2+J}$；$T_1=\dfrac{(2m_2r^2+J)m_1g}{(m_1+m_2)r^2+J}$，$T_2=\dfrac{(2m_1r^2+J)m_2g}{(m_1+m_2)r^2+J}$。<!-- src: PH-C06#p018ex1; type: direct -->

### 例题：均质细棒受水平冲力——轴反力与打击中心

- 棒 m、l 对水平轴 O（上端）$J=\dfrac{ml^2}{3}$，铅直位置受距 O 为 $l'$ 的水平冲力 F。方法：转动定理 $Fl'=J\alpha$；质心运动定理 $F+N_x=m\dfrac{l}{2}\alpha$，$N_y-mg=m\dfrac{l}{2}\omega^2=0$。<!-- src: PH-C06#p019ex1; type: compressed -->
- 结果：$N_x=F\left(\dfrac{3l'}{2l}-1\right)$，$N_y=mg$。<!-- src: PH-C06#p019ex1; type: compressed -->
- 讨论：$l'=\dfrac{2l}{3}\Rightarrow N_x=0$（打击中心）；$l'>\dfrac{2l}{3}\Rightarrow N_x>0$；$l'<\dfrac{2l}{3}\Rightarrow N_x<0$。<!-- src: PH-C06#p019ex1; type: direct -->

## §6.3 刚体定轴转动中的功能关系

### 转动动能与力矩的功

- 转动动能 $T=\dfrac{1}{2}J\omega^2$（由 $T=\sum_i\frac{1}{2}\Delta m_i r_i^2\omega^2$，$v_i=r_i\omega$）。<!-- src: PH-C06#p020 + #p021; type: compressed -->
- 内力不做功（各质元相对距离不变），仅算外力功。<!-- src: PH-C06#p021; type: direct -->
- 力矩的功：元功 $\mathrm{d}A=M\,\mathrm{d}\varphi$（$M=\sum_i r_iF_i\sin\alpha_i$）；总功 $A=\displaystyle\int_{\varphi_1}^{\varphi_2}M\,\mathrm{d}\varphi$。<!-- src: PH-C06#p022; type: compressed -->
- 动能定理：$\displaystyle\int_{\varphi_1}^{\varphi_2}M\,\mathrm{d}\varphi=\dfrac{1}{2}J\omega_2^2-\dfrac{1}{2}J\omega_1^2$。<!-- src: PH-C06#p022; type: direct -->

### 重力势能与功能原理

- 刚体重力势能 $U=mgz_c$（地面为零点，$z_c$ 为质心高度）。<!-- src: PH-C06#p023; type: direct -->
- 功能原理（$M$ 为除重力外其它外力的合力矩，$M_p$ 为重力矩，$\displaystyle\int M_p\,\mathrm{d}\varphi=-(mgz_{c2}-mgz_{c1})$）：$\displaystyle\int_{\varphi_1}^{\varphi_2}M\,\mathrm{d}\varphi=\left(mgz_{c2}+\dfrac{1}{2}J\omega_2^2\right)-\left(mgz_{c1}+\dfrac{1}{2}J\omega_1^2\right)$。<!-- src: PH-C06#p024 + #p027; type: compressed -->
- 机械能 $E=mgz_c+\dfrac{1}{2}J\omega^2$。<!-- src: PH-C06#p027; type: direct -->

### 绳绕轮缘张力关系

- 轻绳绕轮缘（摩擦系数 $\mu$，包角 $\varphi$，线密度 $\lambda$，角速度 $\omega$）：$T_A=(T_B-\lambda\omega^2r^2)e^{-\mu\varphi}+\lambda\omega^2r^2$；极限 $\mu=0\Rightarrow T_A=T_B$。<!-- src: PH-C06#p025; type: compressed -->
- 绳元对轮缘摩擦力矩之和即作用于滑轮的外力矩，数值为 $T_1r-T_2r$。<!-- src: PH-C06#p026; type: compressed -->

### 机械能守恒

- 若 $M=0$（除重力外其它外力合力矩为零），则 $mgz_c+\dfrac{1}{2}J\omega^2=$ 不变量。<!-- src: PH-C06#p028; type: direct -->
- 系统机械能守恒条件：一切外力均不做功、非保守内力不做功。<!-- src: PH-C06#p028; type: direct -->

## §6.4 角动量定理和角动量守恒定律

### 角动量定理与守恒

- 微分式 $\vec{M}\,\mathrm{d}t=\mathrm{d}\vec{L}$；积分式 $\displaystyle\int_{t_1}^{t_2}\vec{M}\,\mathrm{d}t=\vec{L}_2-\vec{L}_1$（$\vec{M}\,\mathrm{d}t$ 为角冲量，$\vec{L}=J\vec{\omega}$）。<!-- src: PH-C06#p029; type: compressed -->
- 守恒：$M=0\Rightarrow L=J\omega=$ 不变量。<!-- src: PH-C06#p029; type: direct -->

### 例题：转动细棒 A 与静止物块 B 弹性碰撞

- 细棒 A（m、L，绕水平 O 轴）水平静止释放；物块 B（m）在 O 正下方、碰撞点距 O 为 L。三步法：<!-- src: PH-C06#p035; type: compressed -->
  - 碰前（棒+地球机械能守恒）：$mg\dfrac{L}{2}=\dfrac{1}{2}J\omega_1^2$，$J=\dfrac{1}{3}mL^2\Rightarrow\omega_1=\sqrt{\dfrac{3g}{L}}$。<!-- src: PH-C06#p035; type: direct -->
  - 碰撞（棒+物块，角动量守恒 + 弹性碰撞动能守恒）：$J\omega_1=J\omega_2+Lmv_B$，$\dfrac{1}{2}J\omega_1^2=\dfrac{1}{2}J\omega_2^2+\dfrac{1}{2}mv_B^2$。解得 $v_B=\dfrac{1}{2}\sqrt{3gL}$，$\omega_2=-\dfrac{1}{2}\sqrt{\dfrac{3g}{L}}$（负号表示棒反向弹回）。<!-- src: PH-C06#p036; type: compressed -->
  - 碰后（棒+地球机械能守恒）：$\dfrac{1}{2}J\omega_2^2=mg\left(\dfrac{L}{2}-\dfrac{L}{2}\cos\theta_{\max}\right)\Rightarrow\cos\theta_{\max}=\dfrac{3}{4}$，$\theta_{\max}=41.1^\circ$。<!-- src: PH-C06#p036; type: direct -->

### 例题：均匀细棒与垂直落球弹性碰撞

- 棒（M、长 2l，绕中点水平轴 O，初始水平），小球 m 以 u 垂直落于端点。角动量守恒（球回跳取 $-lmv$）$lmu=J\omega-lmv$，$J=\dfrac{1}{3}Ml^2$；动能守恒 $\dfrac{1}{2}mu^2=\dfrac{1}{2}mv^2+\dfrac{1}{2}J\omega^2$。<!-- src: PH-C06#p037; type: compressed -->
- 结果：$v=\dfrac{u(M-3m)}{M+3m}$，$\omega=\dfrac{6mu}{(M+3m)l}$。<!-- src: PH-C06#p037; type: direct -->

## §6.5 刚体的进动

### $\vec{L}$ 与 $\vec{\omega}$ 的方向

- 定轴转动 $\vec{L}=J\vec{\omega}$，对转轴 $\vec{L}\parallel\vec{\omega}$；但对轴上任一点 $\vec{L}$ 不一定平行于 $\vec{\omega}$。<!-- src: PH-C06#p038; type: compressed -->
- 质量分布对称且绕对称轴转动 $\Rightarrow$ 对轴上任一点 $\vec{L}\parallel\vec{\omega}\parallel$ 转轴，此时 $\vec{L}=J\vec{\omega}$；不对称则 $\vec{L}\not\parallel\vec{\omega}$。<!-- src: PH-C06#p039; type: compressed -->

### 进动角速度

- 陀螺立而不倒：重力作用线过支点 $\Rightarrow M=0\Rightarrow\vec{L}=J\vec{\omega}=$ 恒矢量，$\vec{\omega}$ 恒定。<!-- src: PH-C06#p041; type: compressed -->
- 倾斜陀螺：$\vec{L}=J\vec{\omega}$，$\vec{M}=\vec{r}_c\times m\vec{g}$，$\mathrm{d}\vec{L}=\vec{M}\,\mathrm{d}t$。$\vec{L}$ 与轴成 $\theta$ 角，$|\mathrm{d}\vec{L}|=L\sin\theta\,\mathrm{d}\Theta$。<!-- src: PH-C06#p042 + #p043; type: compressed -->
- 进动角速度（$\Omega=\dfrac{\mathrm{d}\Theta}{\mathrm{d}t}$，由 $\dfrac{|\mathrm{d}\vec{L}|}{\mathrm{d}t}=M$）：$M=L\sin\theta\cdot\Omega$，故 $\Omega=\dfrac{M}{L\sin\theta}=\dfrac{M}{J\omega\sin\theta}\propto\dfrac{1}{\omega}$；$\omega\uparrow\to\Omega\downarrow$（自转越快进动越慢）。<!-- src: PH-C06#p043; type: compressed -->

### 进动近似与章动

- 总角速度 $\vec{\omega}_{\text{总}}=\vec{\omega}+\vec{\Omega}$；只有高速自转 $\omega\gg\Omega$ 时才有 $\vec{\omega}_{\text{总}}\approx\vec{\omega}$、$\vec{L}_O\approx J\vec{\omega}$（前面讨论为近似）。<!-- src: PH-C06#p044; type: compressed -->
- 章动：质量分布偏离轴对称或计入 $\vec{\Omega}$ 贡献时，自转轴在进动中还出现微小上下周期性摆动。<!-- src: PH-C06#p044; type: direct -->

## §6.6 刚体的平面平行运动

### 定义与分解

- 平面平行运动：所有质元的轨道平面都平行于某一固定平面；垂直于该平面的任一直线始终垂直于它，同一直线上各点运动状态相同。只需取任一参考平面研究（简化为二维）。<!-- src: PH-C06#p049; type: compressed -->
- 特例：两自由度纯平动、定轴转动。基点：参考平面上选定一点；基轴：过基点垂直于参考平面的直线（通常选过质心）。<!-- src: PH-C06#p050; type: compressed -->
- 分解：平面平行运动 = 质心平动 + 相对过质心垂直参考平面轴的转动。<!-- src: PH-C06#p050 + #p052; type: compressed -->

### 速度关系与角速度绝对性

- 各点速度（基点取质心）：$\vec{v}=\vec{v}_C+\vec{\omega}\times\vec{R}$。<!-- src: PH-C06#p051; type: direct -->
- 角速度绝对性：刚体绕基轴转动的角速度与基轴选择无关，$\vec{\omega}=\vec{\omega}'$。<!-- src: PH-C06#p051 + #p052; type: compressed -->

### 角动量与角动量定理

- 角动量分解 $\vec{L}=\vec{L}_p+\vec{r}_p\times M\vec{v}_c$（$\vec{L}_p=\int\vec{r}'\times\vec{v}\,\mathrm{d}m$，$\int\vec{v}\,\mathrm{d}m=M\vec{v}_c$）。<!-- src: PH-C06#p055; type: compressed -->
- 力矩分解 $\vec{M}=\vec{M}_p+\vec{r}_p\times\vec{F}$；一般式 $\dfrac{\mathrm{d}\vec{L}_p}{\mathrm{d}t}=\vec{M}_p-\vec{v}_p\times M\vec{v}_c$。<!-- src: PH-C06#p056; type: compressed -->
- 当满足 ① $p$ 点速度始终平行于质心速度，或 ② $p$ 点静止，或 ③ $p$ 为质心（质心系观察）时，$\dfrac{\mathrm{d}\vec{L}_p}{\mathrm{d}t}=\vec{M}_p$。瞬心即 $p$ 点瞬时速度为零（如纯滚动接触点）。<!-- src: PH-C06#p056; type: compressed -->

### 滚动与瞬心

- 滚动分有滑动滚动与无滑动滚动（纯滚动）。纯滚动时存在瞬时速度为零的瞬心（瞬时转轴）。<!-- src: PH-C06#p057; type: compressed -->
- 瞬心条件：由 $\vec{v}_P=\vec{v}_C+\vec{\omega}\times\vec{r}_P=0$ 得 $v_C=r_P\omega$。半径 R 圆柱瞬心在底部接触点（$r_P=R$）：$v_C=R\omega$，$a_C=R\alpha$。<!-- src: PH-C06#p057 + #p058; type: compressed -->

### 匀质实心圆柱体斜面纯滚动

- 坐标 x 沿斜面向下、y 垂直斜面；受 $N$（垂直斜面外）、$f_r$（沿斜面上）、$mg$（竖直下），倾角 $\varphi$。对质心联立：$mg\sin\varphi-f_r=ma_{Cx}$，$N-mg\cos\varphi=0$，$f_r R=J\beta$，$a_{Cx}=R\beta$。<!-- src: PH-C06#p060; type: compressed -->
- 一般结果：$a_{Cx}=\dfrac{g\sin\varphi}{1+\dfrac{J}{mR^2}}$，$f_r=\dfrac{J}{mR^2+J}mg\sin\varphi$，$N=mg\cos\varphi$（对瞬心 P，$J_P=J+mR^2$ 可一步得 $\beta$）。<!-- src: PH-C06#p060 + #p061; type: compressed -->
- 代入实心圆柱 $J=\dfrac{1}{2}mR^2$：$a_{Cx}=\dfrac{2}{3}g\sin\varphi$，$\beta=\dfrac{2g\sin\varphi}{3R}$，$f_r=\dfrac{1}{3}mg\sin\varphi$，$N=mg\cos\varphi$。<!-- src: PH-C06#p062; type: direct -->
- 滚下高度 h（$h=x\sin\varphi$）：$\dfrac{1}{2}mv^2=\dfrac{2}{3}mgh$，$v=\sqrt{\dfrac{4gh}{3}}$。<!-- src: PH-C06#p062; type: compressed -->
- 对比光滑斜面（$f_r=0$）：$a_{Cx}=g\sin\varphi$，$\beta=0$，$\omega=0$，$N=mg\cos\varphi$，$v=\sqrt{2gh}$。<!-- src: PH-C06#p063; type: compressed -->
