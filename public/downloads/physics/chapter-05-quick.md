# 第五章 动量和角动量 · 速览

> Arietids Learn · 个人课程复习笔记
> 在线阅读：https://learn.arietids.net/courses/physics/chapter-05-quick/

## §5.1 动量定理与动量守恒

- 动量 $\vec{p}=m\vec{v}$；牛顿第二定律动量形式 $\vec{F}=\dfrac{d\vec{p}}{dt}$，$\vec{F}\,dt=d\vec{p}$。<!-- src: C05-动量和角动量#p004; type: compressed -->
- 冲量 $\displaystyle\int_{t_1}^{t_2}\vec{F}\,dt$；**质点动量定理** $\displaystyle\int_{t_1}^{t_2}\vec{F}\,dt=\vec{p}_2-\vec{p}_1$（合力冲量＝动量增量）。<!-- src: C05-动量和角动量#p004; type: compressed -->
- **质点系动量定理** $\displaystyle\int_{t_1}^{t_2}\vec{F}\,dt=\vec{p}_2-\vec{p}_1$（$\vec{F}$ 为合外力）；内力成对抵消，不改变系统总动量。<!-- src: C05-动量和角动量#p006; type: compressed -->
- **动量守恒**：孤立系统或合外力为零时 $\vec{p}=\sum m_i\vec{v}_i=$ 常矢量；三分量各自独立——某方向合外力分量为零，则该方向动量分量守恒。<!-- src: C05-动量和角动量#p002 + #p003; type: compressed -->
- 守恒律比牛顿第三定律适用更广（计及场的动量仍成立）；本质对应**空间平移不变性**。<!-- src: C05-动量和角动量#p002; type: compressed -->
- **火箭方程** $v=u\ln\dfrac{M_0}{M_{\mathrm r}}=u\ln\!\left(1+\dfrac{M_{\mathrm f}}{M_{\mathrm r}}\right)$（$u$＝喷气相对箭体速率，$M_0$ 总质量、$M_{\mathrm r}$ 箭体、$M_{\mathrm f}$ 燃料）。<!-- src: C05-动量和角动量#p011; type: compressed -->
- 例题法（斜面接球）：碰撞瞬间冲力≫外力 ⇒ 只在冲力主导方向用动量守恒；平滑段用机械能守恒；异向速度先取投影（$v_m\to v_m\sin\theta$）。<!-- src: C05-动量和角动量#p007 + #p008; type: synthesized -->

## §5.2 两体碰撞

- 碰撞：极短时间内强相互作用、状态显著变化；可当 black box，用守恒律联系初末态。<!-- src: C05-动量和角动量#p012; type: compressed -->
- 分类（按动能）：**弹性** $E_{ki}=E_{kf}$；**非弹性** $E_{ki}\neq E_{kf}$；**完全非弹性**（碰后粘连）动能损失最大。<!-- src: C05-动量和角动量#p018 + #p019 + #p020; type: compressed -->
- 弹性碰撞：动量守恒 + 动能守恒两式联立。<!-- src: C05-动量和角动量#p021; type: compressed -->
- **对心碰撞**（$v_2=0$）：$v_1'=\dfrac{m_1-m_2}{m_1+m_2}v_1$，$v_2'=\dfrac{2m_1}{m_1+m_2}v_1$；$m_1>m_2$ 前进、$m_1<m_2$ 反弹、$m_1=m_2$ 交换速度。<!-- src: C05-动量和角动量#p022; type: compressed -->
- 二维等质量弹性碰撞（$m_1=m_2,\ v_2=0$）：$\vec{v}_1=\vec{v}_1'+\vec{v}_2'$ 且 $v_1^2=v_1'^2+v_2'^2$ ⇒ 碰后两速度**互相垂直**，末端落在以 $\vec{v}_1$ 为直径的散射圆上。<!-- src: C05-动量和角动量#p023; type: compressed -->

## §5.3 质心与质心运动定理

- 质心 $\vec{r}_c=\dfrac{\sum m_i\vec{r}_i}{\sum m_i}$；连续分布 $\vec{r}_c=\dfrac{\int\vec{r}\,dm}{\int dm}$（含三个直角坐标分量）。<!-- src: C05-动量和角动量#p026 + #p027; type: compressed -->
- **质心运动定理** $M\dfrac{d\vec{v}_c}{dt}=\vec{F}_e$（$\vec{F}_e$ 为合外力，内力不影响质心运动）；孤立系统质心匀速直线运动或静止。<!-- src: C05-动量和角动量#p030 + #p025; type: compressed -->
- **质心系**：原点取质心、随质心平动；在该参考系中质心速度为零，$\sum m_i\vec{v}_i=0$（又称**零动量系**）。<!-- src: C05-动量和角动量#p029; type: compressed -->
- 运动分解：任一质点系运动 ＝ 随质心的运动（平动）＋ 相对质心的运动。<!-- src: C05-动量和角动量#p034; type: compressed -->
- 半圆环质心 $x_c=\dfrac{2R}{\pi}\approx0.64R$；质心不一定落在物体本体上。<!-- src: C05-动量和角动量#p028; type: compressed -->
- 例题法（三棱体）：水平无外力 ⇒ $v_{cx}$ 守恒 ⇒ $\sum m_i\Delta x_i=0$，再用「相对位移＋绝对位移」联立解约束体位移。<!-- src: C05-动量和角动量#p032 + #p033; type: synthesized -->

## §5.5 角动量定理与角动量守恒

- 角动量 $\vec{L}=\vec{r}\times m\vec{v}$；力矩 $\vec{M}=\vec{r}\times\vec{F}$，大小 $M=Fr\sin\theta=Fd$（$d=r\sin\theta$ 为力臂）。<!-- src: C05-动量和角动量#p038 + #p042; type: compressed -->
- **质点角动量定理** $d\vec{L}=\vec{M}\,dt$；**质点系** $d\vec{L}=\vec{M}_e\,dt$（沿质点连线的内力矩成对为零，只有外力矩起作用）。<!-- src: C05-动量和角动量#p042 + #p044; type: compressed -->
- **角动量守恒**：$\vec{M}=0$（质点）或 $\vec{M}_e=0$（质点系）⇒ $\vec{L}=$ 常矢量；分量上 $M_z=0\Rightarrow L_z$ 守恒。<!-- src: C05-动量和角动量#p045 + #p050; type: compressed -->
- 自由质点：$v\,r\sin\theta=$ 常量（矢径在相等时间内扫过相等面积）。<!-- src: C05-动量和角动量#p038; type: compressed -->
- 有心力（含万有引力）取力心为原点 $\vec{M}=\vec{r}\times\vec{F}=0$ ⇒ 角动量守恒：轨道为过力心的定平面曲线；面积速度 $\dfrac{dA}{dt}=\dfrac{L}{2m}=$ 常量（开普勒第二定律）。行星角动量守恒，但动量**不**守恒。<!-- src: C05-动量和角动量#p046 + #p047 + #p048; type: compressed -->
- 例题法（半球碗）：合力矩≠0 但 $M_z=0$ ⇒ $L_z$ 守恒 $(rmv_0)\sin\theta_0=rmv$，配机械能守恒 $\tfrac12 mv_0^2=\tfrac12 mv^2+mgr\cos\theta_0$ ⇒ $v_0=\sqrt{\dfrac{2gr}{\cos\theta_0}}$。<!-- src: C05-动量和角动量#p050; type: synthesized -->

## 综合例题 · 例5-7（质心运动定理）

- 判断多体中某物体的运动趋势：对整体用质心运动定理 $\sum\vec{F}_{ext}=(\sum m)\vec{a}_c$；质心加速度由质心坐标对时间二次求导得到，所需角速度/角加速度由子系统机械能守恒提供；临界判据取约束力（绳张力 $T$）减到 $0$。结论：$m\ge\tfrac{3}{2}M$ 时大铁环才可能被向上拉动。<!-- src: C05-动量和角动量#p051ex7 + #p054ex7; ref: 例5-7; type: synthesized -->
