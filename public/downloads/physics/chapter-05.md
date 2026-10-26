# 第五章 动量和角动量 · 复习资料

> Arietids Learn · 个人课程复习笔记
> 在线阅读：https://learn.arietids.net/courses/physics/chapter-05/

## §5.1 动量定理和动量守恒定律

### 孤立系统中动量守恒的建立（两个质点）

模型：孤立系统（无外力），质点系由 2 个质点组成，分别以 $\vec{v}_1$、$\vec{v}_2$ 运动，相互作用力为内力 $\vec{F}_{12}$（$m_2$ 对 $m_1$ 的力）与 $\vec{F}_{21}$（$m_1$ 对 $m_2$ 的力）。 <!-- src: C05-动量和角动量#p001 + #p001g1; type: direct -->

- 对每个质点分别写出牛顿第二定律（动量形式）：
$$
\frac{d(m_1\vec{v}_1)}{dt}=\vec{F}_{12},\qquad \frac{d(m_2\vec{v}_2)}{dt}=\vec{F}_{21}
$$
 <!-- src: C05-动量和角动量#p001; type: direct -->
- 内力满足牛顿第三定律：$\vec{F}_{12}=-\vec{F}_{21}$。 <!-- src: C05-动量和角动量#p001; type: direct -->
- 两式相加，内力相消：
$$
\frac{d(m_1\vec{v}_1)}{dt}+\frac{d(m_2\vec{v}_2)}{dt}=0\quad\Longrightarrow\quad \frac{d}{dt}(m_1\vec{v}_1+m_2\vec{v}_2)=0
$$
 <!-- src: C05-动量和角动量#p001; type: direct -->
- 定义系统总动量 $\vec{p}=m_1\vec{v}_1+m_2\vec{v}_2$，则 $\dfrac{d\vec{p}}{dt}=0$，即 $\vec{p}=$ 不变量（守恒）。 <!-- src: C05-动量和角动量#p001; type: direct -->

### 孤立系统动量守恒定律（n 个质点）

- 推广到 n 个质点的质点系，系统总动量为各质点动量之和：
$$
\vec{p}=\sum_{i=1}^{n} m_i\vec{v}_i
$$
 <!-- src: C05-动量和角动量#p002; type: direct -->
- 孤立系统满足 $\dfrac{d\vec{p}}{dt}=0$，故 $\vec{p}=$ 不变量，此即**动量守恒定律**。 <!-- src: C05-动量和角动量#p002; type: direct -->
- 适用范围与本质：推导过程中使用了牛顿第三定律，但动量守恒定律比牛顿第三定律适用范围更广；在牛顿第三定律不适用的地方，只要计及场的动量，动量守恒定律仍然适用。 <!-- src: C05-动量和角动量#p002; type: direct -->
- 动量守恒定律对应于**空间的平移不变性**。 <!-- src: C05-动量和角动量#p002; type: direct -->

#### 动量守恒的分量形式（Cartesian coordinate system 直角坐标系）

- 矢量式：$\vec{p}=\sum_{i=1}^{n} m_i\vec{v}_i=$ 不变量。 <!-- src: C05-动量和角动量#p003; type: direct -->
- 三个坐标方向的分量分别独立守恒：
$$
p_x=\sum_{i=1}^{n} m_i v_{xi}=\text{不变量}
$$

$$
p_y=\sum_{i=1}^{n} m_i v_{yi}=\text{不变量}
$$

$$
p_z=\sum_{i=1}^{n} m_i v_{zi}=\text{不变量}
$$
 <!-- src: C05-动量和角动量#p003; type: direct -->
- 适用条件的放宽：当系统与外界有相互作用，即系统是**非孤立系统**时，动量守恒一般不成立；但当**合外力为零**时，上式（动量守恒）仍然成立。 <!-- src: C05-动量和角动量#p003; type: direct -->

> Note：分量形式还给出更细的判断——即使合外力不为零，只要某一坐标方向上的合外力分量为零，该方向的动量分量仍然守恒（由分量式各自独立得到）。 <!-- src: C05-动量和角动量#p003; type: one-step-inferred -->

### 单个质点的动量定理

- 质点动量定义：$\vec{p}=m\vec{v}$。 <!-- src: C05-动量和角动量#p004; type: direct -->
- 牛顿第二定律的动量形式：$\vec{F}=\dfrac{d\vec{p}}{dt}$，等价微分式 $\vec{F}\,dt=d\vec{p}$。 <!-- src: C05-动量和角动量#p004; type: direct -->
- **冲量（impulse）**：$\vec{F}\,dt$ 是力 $\vec{F}$ 在 $t\to t+dt$ 时间内的冲量；其在 $t_1\to t_2$ 时间内的累积为 $\displaystyle\int_{t_1}^{t_2}\vec{F}\,dt$。 <!-- src: C05-动量和角动量#p004; type: direct -->
- 对微分式两端积分（动量从 $\vec{p}_1$ 到 $\vec{p}_2$，时间从 $t_1$ 到 $t_2$）：
$$
\int_{t_1}^{t_2}\vec{F}\,dt=\int_{\vec{p}_1}^{\vec{p}_2} d\vec{p}=\vec{p}_2-\vec{p}_1
$$
 <!-- src: C05-动量和角动量#p004; type: direct -->
- **质点的动量定理**：
$$
\int_{t_1}^{t_2}\vec{F}\,dt=\vec{p}_2-\vec{p}_1
$$

它反映了力在时间上的累积作用对质点产生的效果。 <!-- src: C05-动量和角动量#p004; type: direct -->

#### 动量定理的分量形式与展开式

- 用质量·速度展开：$\displaystyle\int_{t_1}^{t_2}\vec{F}\,dt=m_2\vec{v}_2-m_1\vec{v}_1$（一般写法保留两端质量下标）。 <!-- src: C05-动量和角动量#p005; type: direct -->
- Cartesian coordinate system 三分量式：
$$
\int_{t_1}^{t_2}F_x\,dt=m_2 v_{x2}-m_1 v_{x1}
$$

$$
\int_{t_1}^{t_2}F_y\,dt=m_2 v_{y2}-m_1 v_{y1}
$$

$$
\int_{t_1}^{t_2}F_z\,dt=m_2 v_{z2}-m_1 v_{z1}
$$
 <!-- src: C05-动量和角动量#p005; type: direct -->

#### 一对作用力与反作用力的冲量之和

- 一对作用力与反作用力是一对大小相等、方向相反的力：$\vec{f}_{ij}=-\vec{f}_{ji}$。 <!-- src: C05-动量和角动量#p005; type: direct -->
- 它们在同一 $dt$ 内的冲量之和为零：
$$
\vec{f}_{ij}\,dt+\vec{f}_{ji}\,dt=0
$$
 <!-- src: C05-动量和角动量#p005; type: direct -->

### 质点系的动量定理

- 模型：n 个质点组成质点系，系内每个质点受到的力分为**内力**与**外力**两类；$\vec{f}_i$ 表示内力，$\vec{F}_i$ 表示外力。 <!-- src: C05-动量和角动量#p006 + #p006g1; type: direct -->
- 对第 $i$ 个质点写动量定理微分式：$(\vec{f}_i+\vec{F}_i)\,dt=d\vec{p}_i$。 <!-- src: C05-动量和角动量#p006; type: direct -->
- 对全部质点求和：
$$
\sum_{i=1}^{n}(\vec{f}_i+\vec{F}_i)\,dt=\sum_{i=1}^{n} d\vec{p}_i
$$
 <!-- src: C05-动量和角动量#p006; type: direct -->
- 拆开后，所有内力的矢量和为零（内力成对抵消）：$\displaystyle\sum_{i=1}^{n}\vec{f}_i\,dt=0$，于是
$$
\Big(\sum_{i=1}^{n}\vec{F}_i\Big)dt=d\Big(\sum_{i=1}^{n}\vec{p}_i\Big)
$$
 <!-- src: C05-动量和角动量#p006; type: direct -->
- 记系统合外力 $\displaystyle\vec{F}=\sum_{i=1}^{n}\vec{F}_i$，系统总动量 $\displaystyle\vec{p}=\sum_{i=1}^{n}\vec{p}_i$，得 $\vec{F}\,dt=d\vec{p}$。 <!-- src: C05-动量和角动量#p006; type: direct -->
- **质点系的动量定理**（积分形式）：
$$
\int_{t_1}^{t_2}\vec{F}\,dt=\vec{p}_2-\vec{p}_1
$$

即系统所受合外力的冲量等于系统总动量的增量，内力不改变系统总动量。 <!-- src: C05-动量和角动量#p006; type: direct -->

### 例题：斜面小车接住下落钢球（动量守恒 + 机械能守恒）

#### 题面模型
- 光滑斜面高 $H$、倾角 $\theta$；小车质量 $M$ 从斜面顶端无初速下滑，滑到斜面中点时，恰好有一钢球 $m$ 从其上方 $h$ 高度自由落下并落入小车。求小车到达斜面底部时的速度 $V$。<!-- src: C05-动量和角动量#p007ex1; type: direct -->
- 图示：钢球 $m$ 竖直下落（落入瞬间速度 $\vec{v}_m$ 竖直向下），小车在斜面上的速度 $\vec{v}_M$ 沿斜面方向；过程分为"下滑—碰撞—碰后下滑"三段。<!-- src: C05-动量和角动量#p007g1; type: direct -->
- 碰撞瞬间受力分解（图示）：小车受斜面法向支持力 $\vec{N}$、重力 $M\vec{g}$ 与钢球施加的向下冲击力 $\vec{f}$；钢球受反作用冲击力（向上）$\vec{f}$ 与重力 $m\vec{g}$。冲击力 $\vec{f}$、$-\vec{f}$ 为这一对作用-反作用内力，其量值远大于重力，故碰撞极短时间内只需在斜面方向用动量守恒。<!-- src: C05-动量和角动量#p007g2 + #p008g1; type: direct -->

#### 第一段：碰撞前各自的运动（地球系，机械能守恒）
- 小车从顶端滑到中点（下降高度 $H/2$）：$Mg\dfrac{H}{2}=\dfrac{1}{2}Mv_M^{2}\;\Rightarrow\; v_M=\sqrt{gH}$，方向沿斜面向下。<!-- src: C05-动量和角动量#p007; type: direct -->
- 钢球自 $h$ 高度自由下落：$mgh=\dfrac{1}{2}mv_m^{2}\;\Rightarrow\; v_m=\sqrt{2gh}$，方向竖直向下。<!-- src: C05-动量和角动量#p007; type: direct -->

#### 第二段：碰撞（钢球落入小车，沿斜面方向动量守恒）
- 关键判断：碰撞瞬间 $m$ 与 $M$ 间的冲击作用力远大于重力沿斜面的分量，故碰撞过程中重力可忽略，只在**斜面方向**动量守恒。<!-- src: C05-动量和角动量#p008; type: direct -->
- 钢球竖直速度 $v_m$ 在斜面方向的投影为 $v_m\sin\theta$，与小车速度 $v_M$ 同向；碰后两者以共同速度 $v'$ 沿斜面运动（完全非弹性式合并）：
$$
Mv_M+mv_m\sin\theta=(M+m)v'
$$
<!-- src: C05-动量和角动量#p008; type: direct -->

#### 第三段：碰后到底部（机械能守恒）
- 碰撞之后 $m$、$M$、地球系统机械能守恒；合并体由斜面中点（剩余高度 $H/2$）下滑到底部：
$$
\dfrac{1}{2}(M+m)v'^{2}+(M+m)g\dfrac{H}{2}=\dfrac{1}{2}(M+m)V^{2}
$$
<!-- src: C05-动量和角动量#p008; type: direct -->
- 代入 $v_M=\sqrt{gH}$、$v_m=\sqrt{2gh}$ 得末速度：
$$
V=\sqrt{\,gH+\left(\dfrac{M\sqrt{gH}+m\sqrt{2gh}\,\sin\theta}{M+m}\right)^{2}}
$$
<!-- src: C05-动量和角动量#p008; type: direct -->

#### 方法要点（可迁移）
- 把一个完整过程拆成"碰撞前 → 碰撞 → 碰撞后"三段，分别选取合适守恒律。<!-- src: C05-动量和角动量#p007 + #p008; type: synthesized -->
- 碰撞瞬间用动量守恒（冲力远大于外力时外力冲量可忽略），且仅在冲力主导的方向上守恒；碰撞前后的平滑下滑段用机械能守恒。<!-- src: C05-动量和角动量#p008; type: synthesized -->
- 不同方向的速度参与某方向动量守恒时，须先取该方向投影（此处 $v_m\to v_m\sin\theta$）。<!-- src: C05-动量和角动量#p008; type: compressed -->

### 火箭飞行原理与火箭方程（变质量动量守恒）

#### 物理背景
- 火箭飞行依靠火箭喷出气体的反推动力。<!-- src: C05-动量和角动量#p009; type: direct -->
- 核心问题：要达到某一速度需要多少燃料？<!-- src: C05-动量和角动量#p009; type: direct -->

#### 建模与参考系（地面参考系）
- 取地面参考系。$t$ 时刻火箭（箭体含未喷燃料）质量 $M(t)=M+\mathrm{d}m$，速度为 $v$；$t+\mathrm{d}t$ 时刻喷出质量 $\mathrm{d}m$，箭体质量变为 $M(t+\mathrm{d}t)=M$，速度变为 $v+\mathrm{d}v$。<!-- src: C05-动量和角动量#p010g1; type: direct -->
- 喷出质量 $\mathrm{d}m$ 相对于箭体的速度大小为 $u$。<!-- src: C05-动量和角动量#p010; type: direct -->
- 喷出质量 $\mathrm{d}m$ 相对于地面的速度为 $(v+\mathrm{d}v)-u$。<!-- src: C05-动量和角动量#p010; type: direct -->
- 把箭体与 $\mathrm{d}m$ 看作两个质点构成的质点系；忽略重力等其它作用，视为孤立系统，动量守恒。<!-- src: C05-动量和角动量#p010; type: direct -->

#### 动量守恒推出基本关系
- 喷气前后动量守恒：
$$
(M+\mathrm{d}m)\,v=\mathrm{d}m\,(v+\mathrm{d}v-u)+M\,(v+\mathrm{d}v)
$$
<!-- src: C05-动量和角动量#p010; type: direct -->
- 展开得 $0=\mathrm{d}m\,\mathrm{d}v-u\,\mathrm{d}m+M\,\mathrm{d}v$；略去二阶小量 $\mathrm{d}m\,\mathrm{d}v$ 后，即
$$
u\,\mathrm{d}m=M\,\mathrm{d}v
$$
<!-- src: C05-动量和角动量#p010; type: direct -->
- 写成速率形式：$u\dfrac{\mathrm{d}m}{\mathrm{d}t}=M\dfrac{\mathrm{d}v}{\mathrm{d}t}$，其中 $\dfrac{\mathrm{d}m}{\mathrm{d}t}$ 为单位时间内喷出的燃料质量。<!-- src: C05-动量和角动量#p010; type: direct -->

#### 求解火箭速度方程
- 喷出燃料质量与箭体质量变化的关系：$\mathrm{d}m=M(t)-M(t+\mathrm{d}t)=-\mathrm{d}M$，故 $u\,\mathrm{d}m=M\,\mathrm{d}v$ 化为
$$
\mathrm{d}v=u\dfrac{\mathrm{d}m}{M}=-u\dfrac{\mathrm{d}M}{M}
$$
<!-- src: C05-动量和角动量#p011; type: direct -->
- 初始条件：开始时 $v=0$，初始总质量 $M_0=M_{\mathrm r}+M_{\mathrm f}$，其中 $M_{\mathrm r}$ 为箭体（空壳）质量、$M_{\mathrm f}$ 为燃料质量。<!-- src: C05-动量和角动量#p011; type: direct -->
- 燃料燃烧完时，火箭达到速度 $v$，质量为 $M_{\mathrm r}$。<!-- src: C05-动量和角动量#p011; type: direct -->
- 积分：
$$
\int_{0}^{v}\mathrm{d}v=\int_{M_0}^{M_{\mathrm r}}\left(-u\dfrac{\mathrm{d}M}{M}\right)\;\Rightarrow\; v=u\ln\dfrac{M_0}{M_{\mathrm r}}
$$
<!-- src: C05-动量和角动量#p011; type: direct -->
- 用初末质量表示（火箭公式）：
$$
v=u\ln\!\left(\dfrac{M_{\mathrm r}+M_{\mathrm f}}{M_{\mathrm r}}\right)=u\ln\!\left(1+\dfrac{M_{\mathrm f}}{M_{\mathrm r}}\right)
$$
<!-- src: C05-动量和角动量#p011; type: direct -->
- 结论：火箭末速度由喷气相对速度 $u$ 与质量比 $\dfrac{M_{\mathrm f}}{M_{\mathrm r}}$（燃料质量与箭体质量之比）共同决定，呈对数关系。<!-- src: C05-动量和角动量#p011; type: one-step-inferred -->

## §5.2 两体碰撞

### 碰撞（collision）的定义与基本图像

- 碰撞（collision）：当两个物体或质点相互接近时，在**极短的时间内**产生**强烈的相互作用**，使它们的运动状态发生**显著的变化**。<!-- src: C05-动量和角动量#p012; type: direct -->
- 碰撞过程用 initial state（初态）→ final state（末态）描述：初态两物体相向运动（动量箭头相对），末态两物体以新的方向、速度分开。<!-- src: C05-动量和角动量#p012g1; type: direct -->
- 碰撞过程可视为一个 **black box（黑箱）**：只关注初末态而不追究相互作用的具体细节。<!-- src: C05-动量和角动量#p012; type: direct -->
- 研究方式：已知初态、末态信息（known $i, f$），将碰撞过程当作 black box 处理，用守恒律联系初末态。<!-- src: C05-动量和角动量#p012; type: direct -->

### 碰撞研究的实际背景（粒子对撞实验）

- 现代高能物理用大型对撞机实现粒子两体碰撞的实验研究，例如 CERN 的 LHC，其加速环位于法国和瑞士边境地下约 100 米深处、长达 27 公里的环形隧道。<!-- src: C05-动量和角动量#p013 + #p014; type: direct -->
- 对撞产生的末态由探测器（如 CMS、ATLAS）测量；本节用碰撞模型处理两束粒子相向运动后发生强烈相互作用的过程。<!-- src: C05-动量和角动量#p015 + #p016 + #p017; type: direct -->

### 碰撞分类（Classification of collisions）

碰撞按动能是否守恒分类，三种类型对应的判据如下：

#### 弹性碰撞（elastic collision）
- 若两个相碰物体的全部初始动能都转化为碰后物体的动能，即碰撞过程中动能（kinetic energy）守恒，则称该碰撞为 elastic（弹性碰撞）。<!-- src: C05-动量和角动量#p018; type: direct -->
- 判据：$E_{ki} = E_{kf}$（碰前总动能等于碰后总动能）。<!-- src: C05-动量和角动量#p018; type: direct -->

#### 非弹性碰撞（inelastic collision）
- 当碰撞前后动能不守恒时，称该碰撞为 inelastic（非弹性碰撞）。<!-- src: C05-动量和角动量#p019; type: direct -->
- 判据：$E_{ki} \neq E_{kf}$。<!-- src: C05-动量和角动量#p019; type: direct -->

#### 完全非弹性碰撞（perfectly inelastic collision）
- 两物体相碰后合并（collide and coalesce）、粘在一起（stick together）一起运动的情形，称为 perfectly inelastic（完全非弹性碰撞）。例如车祸（car crashes）、碰后粘连等。<!-- src: C05-动量和角动量#p020; type: direct -->
- 完全非弹性碰撞对应动能的最大损失（It corresponds to the maximum loss of kinetic energy）。<!-- src: C05-动量和角动量#p020; type: direct -->

### 两个粒子的弹性碰撞（一般情形）

两粒子弹性碰撞同时满足动量守恒与动能守恒两个条件。<!-- src: C05-动量和角动量#p021; type: compressed -->

- 动量守恒（Conservation of Momentum）：
$$
m_1\vec{v}_1 + m_2\vec{v}_2 = m_1\vec{v}_1' + m_2\vec{v}_2'
$$

其中带撇量为碰后速度。<!-- src: C05-动量和角动量#p021; type: direct -->
- 动能守恒（Conservation of kinetic energy）：
$$
\tfrac{1}{2}m_1 v_1^2 + \tfrac{1}{2}m_2 v_2^2 = \tfrac{1}{2}m_1 v_1'^2 + \tfrac{1}{2}m_2 v_2'^2
$$

<!-- src: C05-动量和角动量#p021; type: direct -->
- 典型应用场景：加速器的粒子实验中，入射粒子运动而靶上粒子静止，即 $\vec{v}_1 \neq 0$，$\vec{v}_2 = 0$。<!-- src: C05-动量和角动量#p021; type: direct -->
- 配图（碰前→碰后矢量示意）：$m_1$ 以 $\vec{v}_1$ 入射、$m_2$ 以 $\vec{v}_2$ 反向入射，两球在中心相碰后分别沿不同方向以 $\vec{v}_1'$、$\vec{v}_2'$ 散开，说明一般情形下碰后速度方向可不共线。<!-- src: C05-动量和角动量#p021g1; type: synthesized -->

### 正碰（对心碰撞，一维问题）

前提：速度方向都是平行的；且取靶粒子静止 $\vec{v}_1 \neq 0$、$\vec{v}_2 = 0$，问题退化为一维（标量）。<!-- src: C05-动量和角动量#p022; type: direct -->

- 动量守恒（一维，$v_2=0$）：$m_1 v_1 = m_1 v_1' + m_2 v_2'$。<!-- src: C05-动量和角动量#p022; type: direct -->
- 动能守恒（一维，$v_2=0$）：$m_1 v_1^2 = m_1 v_1'^2 + m_2 v_2'^2$。<!-- src: C05-动量和角动量#p022; type: direct -->
- 由两式分别整理得 $m_1(v_1 - v_1') = m_2 v_2'$ 与 $m_1(v_1^2 - v_1'^2) = m_2 v_2'^2$。<!-- src: C05-动量和角动量#p022; type: direct -->
- 两式相除可得关系：$v_2' = v_1 + v_1'$。<!-- src: C05-动量和角动量#p022; type: direct -->

#### 对心碰撞碰后速度公式
$$
v_1' = \frac{m_1 - m_2}{m_1 + m_2}\, v_1 \qquad v_2' = \frac{2m_1}{m_1 + m_2}\, v_1
$$

<!-- src: C05-动量和角动量#p022; type: direct -->

#### 三种质量情形的讨论
- $m_1 > m_2 \Rightarrow v_1' > 0$（入射粒子碰后继续前进）。<!-- src: C05-动量和角动量#p022; type: direct -->
- $m_1 < m_2 \Rightarrow v_1' < 0$（入射粒子碰后被反弹）。<!-- src: C05-动量和角动量#p022; type: direct -->
- $m_1 = m_2 \Rightarrow v_1' = 0,\ v_2' = v_1$（等质量正碰，速度互相交换）。<!-- src: C05-动量和角动量#p022; type: direct -->

### 速度方向不平行（二维问题）

前提：速度方向不平行，需作为二维问题处理；这里取 $m_1 = m_2$、$\vec{v}_2 = 0$。<!-- src: C05-动量和角动量#p023; type: direct -->

- 动量守恒：$m_1\vec{v}_1 + m_2\vec{v}_2 = m_1\vec{v}_1' + m_2\vec{v}_2'$。<!-- src: C05-动量和角动量#p023; type: direct -->
- 动能守恒：$\tfrac{1}{2}m_1 v_1^2 + \tfrac{1}{2}m_2 v_2^2 = \tfrac{1}{2}m_1 v_1'^2 + \tfrac{1}{2}m_2 v_2'^2$。<!-- src: C05-动量和角动量#p023; type: direct -->
- 在 $m_1 = m_2$、$\vec{v}_2 = 0$ 条件下由动量守恒得矢量关系：$\vec{v}_1 = \vec{v}_1' + \vec{v}_2'$。<!-- src: C05-动量和角动量#p023; type: direct -->
- 由动能守恒得标量关系：$v_1^2 = v_1'^2 + v_2'^2$。<!-- src: C05-动量和角动量#p023; type: direct -->
- 结论：上两式表明 $\vec{v}_1'$ 与 $\vec{v}_2'$ 互相垂直——$\vec{v}_1$、$\vec{v}_1'$、$\vec{v}_2'$ 构成直角三角形（$\vec{v}_1$ 为斜边），碰后两粒子速度末端落在以 $\vec{v}_1$ 为直径的圆（散射圆）上。<!-- src: C05-动量和角动量#p023g1; type: synthesized -->

#### 实验应用
- 该等质量弹性散射在实验中很有实用价值。<!-- src: C05-动量和角动量#p023; type: direct -->
- 例：高能质子束射向靶，两侧各置计数器探测碰后两质子；矢量图给出 $\vec{v}_1' + \vec{v}_2' = \vec{v}_1$ 的"散射圆"几何关系。<!-- src: C05-动量和角动量#p023g1; type: direct -->

## §5.3 质心和质心运动定理

### 质心位置矢量的引入（两体孤立系统）

对由 $m_1$、$m_2$ 组成的孤立系统（isolated system），动量守恒，即 $\dfrac{d\vec{p}}{dt}=0$。<!-- src: C05-动量和角动量#p024; type: direct -->

系统总动量可改写为质心位矢的导数形式（全过程不考虑相对论效应）： <!-- src: C05-动量和角动量#p024; type: direct -->
$$
\vec{p}=m_1\vec{v}_1+m_2\vec{v}_2=m_1\frac{d\vec{r}_1}{dt}+m_2\frac{d\vec{r}_2}{dt}=\frac{d}{dt}\left(m_1\vec{r}_1+m_2\vec{r}_2\right)
$$

<!-- src: C05-动量和角动量#p024; type: direct -->

$$
\vec{p}=(m_1+m_2)\,\frac{d}{dt}\!\left(\frac{m_1\vec{r}_1+m_2\vec{r}_2}{m_1+m_2}\right)=(m_1+m_2)\frac{d\vec{r}_c}{dt}=\text{不变量（常矢量）}
$$

<!-- src: C05-动量和角动量#p024; type: direct -->

由此定义两质点系统的**质心位置矢量**（center of mass）： <!-- src: C05-动量和角动量#p024 + #p025; type: direct -->
$$
\vec{r}_c=\frac{m_1\vec{r}_1+m_2\vec{r}_2}{m_1+m_2}
$$

<!-- src: C05-动量和角动量#p024; type: direct -->

> 图示（p024g1 / p025g1）：两质点 $m_1$、$m_2$ 的位矢分别为 $\vec{r}_1$、$\vec{r}_2$，速度分别为 $\vec{v}_1$、$\vec{v}_2$；质心 $C$ 由位矢 $\vec{r}_c$ 定出，位于二者之间。 <!-- src: C05-动量和角动量#p024g1 + #p025g1; type: synthesized -->

### 质心运动定理（孤立系统）

孤立系统总动量为常矢量，故 $(m_1+m_2)\dfrac{d^2\vec{r}_c}{dt^2}=0$，即 $\dfrac{d^2\vec{r}_c}{dt^2}=0$，$\vec{v}_c=\text{const. vector}$。 <!-- src: C05-动量和角动量#p025; type: direct -->

对 $n$ 个质点组成的孤立系统，同样有 $\dfrac{d^2\vec{r}_c}{dt^2}=0$，$\vec{v}_c=\text{const. vector}$。 <!-- src: C05-动量和角动量#p025; type: direct -->

**质心运动定理**：孤立系统的质心做匀速直线运动或处于静止状态。 <!-- src: C05-动量和角动量#p025; type: direct -->

### 多质点系统质心位置矢量

$n$ 个质点系统的质心位置矢量： <!-- src: C05-动量和角动量#p025 + #p026; type: direct -->
$$
\vec{r}_c=\frac{\displaystyle\sum_{i=1}^{n}m_i\vec{r}_i}{\displaystyle\sum_{i=1}^{n}m_i}
$$

<!-- src: C05-动量和角动量#p026; type: direct -->

在 Cartesian coordinate system（直角坐标系）中分解为三个分量： <!-- src: C05-动量和角动量#p026; type: direct -->
$$
x_c=\frac{\displaystyle\sum_{i=1}^{n}m_i x_i}{\displaystyle\sum_{i=1}^{n}m_i},\qquad y_c=\frac{\displaystyle\sum_{i=1}^{n}m_i y_i}{\displaystyle\sum_{i=1}^{n}m_i},\qquad z_c=\frac{\displaystyle\sum_{i=1}^{n}m_i z_i}{\displaystyle\sum_{i=1}^{n}m_i}
$$

<!-- src: C05-动量和角动量#p026; type: direct -->

> 图示（p026g1）：质心 $C$ 由位矢 $\vec{r}_c$ 在直角坐标系 $O\text{-}xyz$ 中确定，其坐标投影为 $x_c$、$y_c$、$z_c$。 <!-- src: C05-动量和角动量#p026g1; type: direct -->

### 质量连续分布物体的质心

当物体质量连续分布时，求和化为积分（$dm$ 为质元的质量，$\vec{r}$ 为质元位矢，对应体元 $dV$）： <!-- src: C05-动量和角动量#p027 + #p027g1; type: direct -->
$$
\vec{r}_c=\frac{\displaystyle\int \vec{r}\,dm}{\displaystyle\int dm}
$$

<!-- src: C05-动量和角动量#p027; type: direct -->

直角坐标分量形式： <!-- src: C05-动量和角动量#p027; type: direct -->
$$
x_c=\frac{\displaystyle\int x\,dm}{\displaystyle\int dm},\qquad y_c=\frac{\displaystyle\int y\,dm}{\displaystyle\int dm},\qquad z_c=\frac{\displaystyle\int z\,dm}{\displaystyle\int dm}
$$

<!-- src: C05-动量和角动量#p027; type: direct -->

### 例题：半圆环的质心

**模型**：已知半圆环半径为 $R$，求其质心。线密度记为 $\rho_l$，质元 $dm=\rho_l\,dl=\rho_l R\,d\theta$，$\theta$ 为质元位矢与 $y$ 轴的夹角。 <!-- src: C05-动量和角动量#p028ex1; type: direct -->

**关键步骤**：用 $x_c=\dfrac{\int x\,dm}{m}$，并将质元横坐标写为 $x=R\sin\theta$，对 $\theta$ 从 $0$ 到 $\pi$ 积分；分母为半圆环总质量 $m=\pi R\rho_l$。 <!-- src: C05-动量和角动量#p028ex1; type: synthesized -->
$$
x_c=\frac{\displaystyle\int_0^{\pi} R\sin\theta\,\rho_l R\,d\theta}{\pi R\rho_l}=\frac{R}{\pi}\int_0^{\pi}\sin\theta\,d\theta=\frac{2R}{\pi}
$$

<!-- src: C05-动量和角动量#p028ex1; type: direct -->

**结论 / 易错点**：质心不一定位于物体（导线）本体上——半圆环质心落在对称轴 $x$ 轴上、半圆弧所围区域内，$x_c=2R/\pi\approx0.64R$。 <!-- src: C05-动量和角动量#p028; type: one-step-inferred -->

> 由对称性，$y_c=0$（质心落在对称轴 $x$ 轴上）。 <!-- src: C05-动量和角动量#p028g1; type: one-step-inferred -->

### 质心系（center of mass frame）

**定义**：将参考系坐标原点选在质点系的质心上，并使该参考系以与质心相同的速度作平移，这个参考系称为**质心系**。 <!-- src: C05-动量和角动量#p029; type: direct -->

此处讨论对象为一般质点系（非孤立系统）。 <!-- src: C05-动量和角动量#p029; type: direct -->

质心速度由质心位矢求导得到： <!-- src: C05-动量和角动量#p029; type: direct -->
$$
\vec{v}_c=\frac{d\vec{r}_c}{dt}=\frac{d}{dt}\!\left(\frac{\sum_{i=1}^{n}m_i\vec{r}_i}{\sum_{i=1}^{n}m_i}\right)=\frac{1}{\sum_{i=1}^{n}m_i}\sum_{i=1}^{n}m_i\frac{d\vec{r}_i}{dt}=\frac{1}{\sum_{i=1}^{n}m_i}\sum_{i=1}^{n}m_i\vec{v}_i
$$

<!-- src: C05-动量和角动量#p029; type: direct -->

**质心系的特征**：在质心系中质心速度为零，故在该参考系中 $\displaystyle\sum_{i=1}^{n}m_i\vec{v}_i=0$，因此质心系又称**零动量系**。 <!-- src: C05-动量和角动量#p029; type: direct -->

质心加速度与系统所受合外力的关系： <!-- src: C05-动量和角动量#p029; type: direct -->
$$
\frac{d\vec{v}_c}{dt}=\frac{1}{\sum_{i=1}^{n}m_i}\sum_{i=1}^{n}m_i\frac{d\vec{v}_i}{dt}=\frac{1}{\sum_{i=1}^{n}m_i}\sum_{i=1}^{n}\vec{F}_i
$$

<!-- src: C05-动量和角动量#p029; type: direct -->

### 质心运动定理的导出

质点系中每个质点所受的力可分为外力 $\vec{F}_{ie}$ 与内力 $\vec{f}_{iI}$ 两部分： $\vec{F}_i = \vec{F}_{ie} + \vec{f}_{iI}$。<!-- src: C05-动量和角动量#p030; type: direct -->

质点系的内力成对出现、大小相等、方向相反，故内力的矢量和为零：
$$
\sum_{i=1}^{n}\vec{f}_{iI}=0
$$

<!-- src: C05-动量和角动量#p030; type: direct -->

由 $\dfrac{d\vec{v}_c}{dt}=\dfrac{1}{\sum_{i=1}^{n}m_i}\sum_{i=1}^{n}\vec{F}_i$，因内力之和为零，可只保留外力，得
$$
\frac{d\vec{v}_c}{dt}=\frac{1}{\sum_{i=1}^{n}m_i}\sum_{i=1}^{n}\vec{F}_{ie}
$$

<!-- src: C05-动量和角动量#p030; type: synthesized -->

记总质量 $M=\sum_{i=1}^{n}m_i$，系统所受外力的合力 $\vec{F}_e=\sum_{i=1}^{n}\vec{F}_{ie}$。<!-- src: C05-动量和角动量#p030; type: direct -->

**质心运动定理**：
$$
M\,\frac{d\vec{v}_c}{dt}=\vec{F}_e
$$

即质心的运动如同一个质量为系统总质量、受力为系统所受合外力的质点。<!-- src: C05-动量和角动量#p030; type: direct -->

**质心系**（以质心为原点的参考系）中，系统的总动量为零（下式中的 $\vec{v}_i$ 为质心系中的速度）：
$$
\sum_{i}m_i\vec{v}_i=0
$$

<!-- src: C05-动量和角动量#p030 + #p034; type: direct -->

### 例题：三棱体 C 与滑块 A、B 系统（质心运动定理的应用）

模型：三棱体 C 与其上两个斜面上的滑块 A、B 经定滑轮上的绳连接，各面均光滑（无摩擦），三棱体置于光滑水平地面。已知 $m_C=4m_A=16m_B$，两斜面倾角 $\alpha=30^\circ$、$\beta=60^\circ$。求 A 沿斜面下降 $h=10\text{ cm}$ 时三棱体 C 在水平方向的位移。<!-- src: C05-动量和角动量#p031ex1; type: direct -->

取三棱体 C、滑块 A、滑块 B 为一个系统进行分析。<!-- src: C05-动量和角动量#p031ex1; type: direct -->

水平方向（取沿地面的 $x$ 轴）：系统在该方向无外力（重力竖直、地面支持力竖直），故质心运动定理的 $x$ 分量为
$$
M\,\frac{dv_{cx}}{dt}=F_{ex}=0\quad\Rightarrow\quad \frac{dv_{cx}}{dt}=0\quad\Rightarrow\quad v_{cx}=\text{const.}
$$

<!-- src: C05-动量和角动量#p032ex1; type: synthesized -->

初始时刻系统静止，故 $v_{cx}=0$ 恒成立，质心 $x$ 坐标不变，即质心水平位移 $\Delta x_c=0$。<!-- src: C05-动量和角动量#p032ex1; type: direct -->

由质心坐标 $x_c=\dfrac{\sum_{i=1}^{n}m_i x_i}{\sum_{i=1}^{n}m_i}$ 且分母为常数，$\Delta x_c=0$ 等价于
$$
\Delta\!\left(\sum_{i=1}^{n}m_i x_i\right)=0\quad\Rightarrow\quad \sum_{i=1}^{n}m_i\,\Delta x_i=0
$$

即各质点质量加权的水平位移之和为零。<!-- src: C05-动量和角动量#p032ex1 + #p033ex1; type: synthesized -->

#### 关键解法步骤（相对位移与绝对位移的关系）

设地面参考系中三棱体 C 的位移为 $\Delta x$。在地面系中，A、B 的有向位移等于三棱体自身位移加相对三棱体的有向位移；按图中正方向，$\Delta x'_A,\ \Delta x'_B$ 记作正的相对水平位移量，故 A、B 对地位移分别为 $\Delta x-\Delta x'_A$、$\Delta x-\Delta x'_B$，代入 $\sum m_i\Delta x_i=0$ 得
$$
m_A(\Delta x-\Delta x'_A)+m_B(\Delta x-\Delta x'_B)+m_C\,\Delta x=0
$$

这里撇号量为在三棱体参考系中 A、B 的水平位移量。<!-- src: C05-动量和角动量#p033ex1; type: direct -->

在三棱体参考系中，A 沿倾角 $\alpha$ 斜面下降 $h$，其水平位移
$$
\Delta x'_A=\frac{h}{\tan\alpha}
$$

绳不可伸长，A 沿斜面位移大小与 B 沿斜面位移大小相等，B 在倾角 $\beta$ 斜面上对应的水平位移
$$
\Delta x'_B=\left(\frac{h}{\sin\alpha}\right)\cos\beta
$$

<!-- src: C05-动量和角动量#p033ex1; type: direct -->

解出三棱体 C 的水平位移：
$$
\Delta x=\frac{m_A\,\Delta x'_A+m_B\,\Delta x'_B}{m_A+m_B+m_C}=3.8\ (\text{cm})
$$

<!-- src: C05-动量和角动量#p033ex1; type: direct -->

### 质心系与运动分解

质心位置矢量与质心速度的定义：
$$
\vec{r}_c=\frac{\sum_{i=1}^{n}m_i\vec{r}_i}{\sum_{i=1}^{n}m_i},\qquad \vec{v}_c=\frac{1}{\sum_{i=1}^{n}m_i}\sum_{i=1}^{n}m_i\vec{v}_i
$$

<!-- src: C05-动量和角动量#p034; type: direct -->

**运动分解原理**：任何一个质点系的运动都可以分解为各质点随质心的运动和相对于质心的运动两个部分。<!-- src: C05-动量和角动量#p034; type: direct -->

图示（地面上直线滚动的车轮）：车轮的实际运动 = 「轮随质心的运动（即平动）」+「轮相对于质心的转动」两部分的叠加；幻灯片用三幅速度矢量图表示——实际滚动时轮缘各点速度大小不一（与地面接触点瞬时速度为零、顶端最大），随质心平动时各点速度矢量等长同向，相对质心转动时各点速度沿切向、大小随到质心的距离增大。<!-- src: C05-动量和角动量#p034g1; type: synthesized -->

### 质心的概念

**质心**是与质量分布有关的一个代表点，它的位置在平均意义上代表着质量分布的中心。<!-- src: C05-动量和角动量#p035; type: direct -->

物体（如被抛出的三角板、抛掷的扳手）在空间翻滚运动时，尽管整体姿态不断变化，其质心 C 仍沿一条平滑的抛物线轨迹运动，体现质心如同一受合外力（重力）作用的质点。<!-- src: C05-动量和角动量#p035g1 + #p037g1; type: synthesized -->

## §5.5 角动量定理和角动量守恒定律

### 自由质点的角动量守恒（矢径在相等时间内扫过相等面积）

讨论前提：**自由质点（不受力）**，且**在惯性系中观察**。<!-- src: C05-动量和角动量#p038; type: direct -->

- 在相等的时间间隔 $\Delta t$ 内，矢径 $\vec{r}$ 扫过的那些小三角形具有公共的高线 $OH$，因而具有相等的面积。<!-- src: C05-动量和角动量#p038g1; type: direct -->
- 由几何关系得（小三角形面积 = 常量）：
$$
\frac{1}{2}\,\Delta l\cdot r\sin\theta = \text{常量}
$$

其中 $\Delta l$ 为质点在 $\Delta t$ 内沿轨迹移动的弦长，$\theta$ 为 $\vec{r}$ 与位移方向的夹角。<!-- src: C05-动量和角动量#p038; type: direct -->
- 由 $v=\dfrac{\Delta l}{\Delta t}$，两边除以 $\Delta t$ 得：
$$
v\,r\sin\theta = \text{常量}
$$
<!-- src: C05-动量和角动量#p038; type: direct -->
- 上式等价于矢量形式：$\vec{r}\times\vec{v}=\text{不变量}$，$\vec{r}\times m\vec{v}=\text{不变量}$。<!-- src: C05-动量和角动量#p038; type: direct -->
- 定义**角动量（angular momentum）** $\vec{L}=\vec{r}\times m\vec{v}$，故对自由质点 $\vec{L}=\text{不变量}$（角动量守恒）。图中标出 $\vec{L}=\vec{r}\times\vec{v}$ 的方向，垂直于 $\vec{r}$ 与 $\vec{v}$ 所在平面（方向按叉积右手定则）。<!-- src: C05-动量和角动量#p038 + #p038g1; type: direct -->

### 单个质点的角动量定义

- 单个质点的角动量：$\vec{r}\times m\vec{v}$，即
$$
\vec{L}=\vec{r}\times m\vec{v}
$$
<!-- src: C05-动量和角动量#p041 + #p042; type: direct -->

### 孤立系统（两质点）角动量守恒的推导

模型：**孤立系统**，**质点系，2 个质点** $m_1,\ m_2$，相对参考点 $O$ 的矢径分别为 $\vec{r}_1,\ \vec{r}_2$，仅有相互作用内力 $\vec{F}_{12}$（$m_2$ 对 $m_1$）与 $\vec{F}_{21}$（$m_1$ 对 $m_2$）。<!-- src: C05-动量和角动量#p039g1; type: direct -->

- 各质点的动量定理：
$$
\frac{d(m_1\vec{v}_1)}{dt}=\vec{F}_{12},\qquad \frac{d(m_2\vec{v}_2)}{dt}=\vec{F}_{21}
$$

且 $\vec{F}_{12}=-\vec{F}_{21}$（牛顿第三定律）。<!-- src: C05-动量和角动量#p039; type: direct -->
- 第一式两边左叉乘 $\vec{r}_1$：$\ \vec{r}_1\times\dfrac{d(m_1\vec{v}_1)}{dt}=\vec{r}_1\times\vec{F}_{12}$。<!-- src: C05-动量和角动量#p039; type: direct -->
- 关键恒等式（叉积求导）：
$$
\frac{d}{dt}(\vec{r}_1\times m_1\vec{v}_1)=\vec{r}_1\times\frac{d(m_1\vec{v}_1)}{dt}+\frac{d\vec{r}_1}{dt}\times(m_1\vec{v}_1)
$$

其中末项 $\dfrac{d\vec{r}_1}{dt}\times(m_1\vec{v}_1)=\vec{v}_1\times m_1\vec{v}_1=0$（两平行矢量叉积为零）。<!-- src: C05-动量和角动量#p039; type: direct -->
- 故 $\ \vec{r}_1\times\dfrac{d(m_1\vec{v}_1)}{dt}=\dfrac{d}{dt}(\vec{r}_1\times m_1\vec{v}_1)$，得：
$$
\frac{d}{dt}(\vec{r}_1\times m_1\vec{v}_1)=\vec{r}_1\times\vec{F}_{12},\qquad \frac{d}{dt}(\vec{r}_2\times m_2\vec{v}_2)=\vec{r}_2\times\vec{F}_{21}
$$
<!-- src: C05-动量和角动量#p039 + #p040; type: direct -->
- 两式相加：
$$
\frac{d}{dt}(\vec{r}_1\times m_1\vec{v}_1+\vec{r}_2\times m_2\vec{v}_2)=\vec{r}_1\times\vec{F}_{12}+\vec{r}_2\times\vec{F}_{21}
$$
<!-- src: C05-动量和角动量#p040; type: direct -->
- 用 $\vec{F}_{21}=-\vec{F}_{12}$ 化简右端：
$$
\vec{r}_1\times\vec{F}_{12}-\vec{r}_2\times\vec{F}_{12}=(\vec{r}_1-\vec{r}_2)\times\vec{F}_{12}=0
$$

因内力 $\vec{F}_{12}$ 沿两质点连线方向，与 $(\vec{r}_1-\vec{r}_2)$ 平行，叉积为零。<!-- src: C05-动量和角动量#p040 + #p040g1; type: direct -->
- 结论：
$$
\frac{d}{dt}(\vec{r}_1\times m_1\vec{v}_1+\vec{r}_2\times m_2\vec{v}_2)=0
$$
<!-- src: C05-动量和角动量#p040; type: direct -->

### 质点系的角动量与角动量守恒定律

- **质点系的角动量**（两质点）：$\vec{L}=\vec{r}_1\times m_1\vec{v}_1+\vec{r}_2\times m_2\vec{v}_2$。<!-- src: C05-动量和角动量#p041; type: direct -->
- 对孤立系统由上一节结论得 $\dfrac{d\vec{L}}{dt}=0$，故 $\vec{L}=\text{不变量}$，即**角动量守恒**。<!-- src: C05-动量和角动量#p041; type: direct -->
- 推广到**孤立系统，$n$ 个质点**，质点系角动量为各质点角动量之和：
$$
\vec{L}=\sum_{i=1}^{n}\vec{L}_i=\sum_{i=1}^{n}\vec{r}_i\times m_i\vec{v}_i
$$
<!-- src: C05-动量和角动量#p041; type: direct -->
- 孤立系统满足 $\dfrac{d\vec{L}}{dt}=0$，$\vec{L}=\text{不变量}$，即**质点系的角动量守恒**。<!-- src: C05-动量和角动量#p041; type: direct -->

### 质点的角动量定理与力矩

针对**单个质点**，由角动量定义 $\vec{L}=\vec{r}\times m\vec{v}$ 出发。<!-- src: C05-动量和角动量#p042; type: direct -->

- 对时间求导：
$$
\frac{d\vec{L}}{dt}=\frac{d}{dt}(\vec{r}\times m\vec{v})=\frac{d\vec{r}}{dt}\times m\vec{v}+\vec{r}\times\frac{d(m\vec{v})}{dt}
$$

首项 $\dfrac{d\vec{r}}{dt}\times m\vec{v}=\vec{v}\times m\vec{v}=0$。<!-- src: C05-动量和角动量#p042; type: direct -->
- 故得：$\dfrac{d\vec{L}}{dt}=\vec{r}\times\vec{F}$。<!-- src: C05-动量和角动量#p042; type: direct -->
- 定义**力矩** $\vec{M}=\vec{r}\times\vec{F}$：质点所受合力 $\vec{F}$ 对参考点 $O$ 的力矩。<!-- src: C05-动量和角动量#p042; type: direct -->
- 力矩大小：
$$
M=\left|\vec{M}\right|=Fr\sin\theta=Fd
$$

其中 $\theta$ 为 $\vec{r}$ 与 $\vec{F}$ 的夹角，$d=r\sin\theta$ 为**力臂**。力矩 $\vec{M}$ 方向垂直于 $\vec{r}$、$\vec{F}$ 所在平面（图中向上）。<!-- src: C05-动量和角动量#p042 + #p042g1; type: direct -->
- **质点的角动量定理**（微分形式）：
$$
\frac{d\vec{L}}{dt}=\vec{M},\qquad d\vec{L}=\vec{M}\,dt
$$

其中 $\vec{M}\,dt$ 为合力矩在 $t$ 到 $t+dt$ 时间内的**角冲量**。<!-- src: C05-动量和角动量#p042; type: direct -->
- **质点的角动量定理**（积分形式）：
$$
\vec{L}_2-\vec{L}_1=\int_{t_1}^{t_2}\vec{M}\,dt
$$

右端为合力矩在 $t_1$ 到 $t_2$ 时间内的**角冲量**。<!-- src: C05-动量和角动量#p042; type: direct -->

### 质点系的力矩：外力矩与内力矩

针对**质点系，$n$ 个质点**。<!-- src: C05-动量和角动量#p043; type: direct -->

- 质点系所受合力矩为各质点力矩之和：
$$
\vec{M}=\sum_{i=1}^{n}\vec{M}_i=\sum_{i=1}^{n}\vec{r}_i\times\vec{F}_i
$$
<!-- src: C05-动量和角动量#p043; type: direct -->
- 每个质点所受力 $\vec{F}_i$ 分为**外力** $\vec{F}_{ie}$ 与**内力** $\vec{f}_{iI}$；相应地合力矩分为外力矩与内力矩：
$$
\vec{M}=\vec{M}_e+\vec{M}_I\quad(\text{外力矩}\ \vec{M}_e,\ \text{内力矩}\ \vec{M}_I)
$$
<!-- src: C05-动量和角动量#p043 + #p043g1; type: direct -->
- **一对沿两质点连线的作用力与反作用力的力矩之和为零**：由 $\vec{F}_{ij}=-\vec{F}_{ji}$，
$$
\vec{r}_i\times\vec{F}_{ij}+\vec{r}_j\times\vec{F}_{ji}=(\vec{r}_i-\vec{r}_j)\times\vec{F}_{ij}=0
$$

因内力 $\vec{F}_{ij}$ 沿 $i$、$j$ 连线方向，与 $(\vec{r}_i-\vec{r}_j)$ 平行。<!-- src: C05-动量和角动量#p043 + #p043g2; type: direct -->
- 故在上述中心内力模型中，**内力矩总和为零**：
$$
\vec{M}_I=\sum_{i=1}^{n}\Big(\vec{r}_i\times\sum_{j\neq i}\vec{F}_{ij}\Big)=0
$$
<!-- src: C05-动量和角动量#p043; type: direct -->
- 结论：质点系合力矩只由外力矩贡献：
$$
\vec{M}=\vec{M}_e+\vec{M}_I=\vec{M}_e
$$
<!-- src: C05-动量和角动量#p043; type: direct -->

### 质点系的角动量定理

- 对**第 $i$ 个质点**，牛顿第二定律：
$$
\vec{F}_{ie}+\sum_{j\neq i}\vec{F}_{ij}=\frac{d(m_i\vec{v}_i)}{dt}
$$
<!-- src: C05-动量和角动量#p044; type: direct -->
- 两边左叉乘 $\vec{r}_i$：
$$
\vec{r}_i\times\vec{F}_{ie}+\vec{r}_i\times\sum_{j\neq i}\vec{F}_{ij}=\vec{r}_i\times\frac{d(m_i\vec{v}_i)}{dt}
$$
<!-- src: C05-动量和角动量#p044; type: direct -->
- 对所有质点求和（右端用叉积求导恒等式，$\vec{r}_i\times\dfrac{d(m_i\vec{v}_i)}{dt}=\dfrac{d}{dt}(\vec{r}_i\times m_i\vec{v}_i)$）：
$$
\sum_{i=1}^{n}\vec{r}_i\times\vec{F}_{ie}+\sum_{i=1}^{n}\Big(\vec{r}_i\times\sum_{j\neq i}\vec{F}_{ij}\Big)=\sum_{i=1}^{n}\frac{d}{dt}(\vec{r}_i\times m_i\vec{v}_i)
$$

其中内力矩项 $\displaystyle\sum_{i=1}^{n}\Big(\vec{r}_i\times\sum_{j\neq i}\vec{F}_{ij}\Big)=0$。<!-- src: C05-动量和角动量#p044; type: direct -->
- 得：
$$
\sum_{i=1}^{n}\vec{r}_i\times\vec{F}_{ie}=\frac{d}{dt}\sum_{i=1}^{n}(\vec{r}_i\times m_i\vec{v}_i)
$$
<!-- src: C05-动量和角动量#p044; type: direct -->
- 定义**质点系所受的外力矩** $\displaystyle\vec{M}_e=\sum_{i=1}^{n}\vec{r}_i\times\vec{F}_{ie}$，**质点系的角动量** $\displaystyle\vec{L}=\sum_{i=1}^{n}(\vec{r}_i\times m_i\vec{v}_i)$。<!-- src: C05-动量和角动量#p044; type: direct -->
- **质点系的角动量定理**：
$$
\vec{M}_e=\frac{d\vec{L}}{dt},\qquad d\vec{L}=\vec{M}_e\,dt
$$

即质点系角动量的变化率等于系统所受**外力矩**（在上述中心内力模型中，内力矩不改变系统总角动量）。<!-- src: C05-动量和角动量#p044; type: direct -->

### 角动量定理与角动量守恒定律（汇总）

#### 单个质点

质点角动量定理（微分形式与积分形式）：

$$
\mathrm{d}\vec{L} = \vec{M}\,\mathrm{d}t \qquad \vec{L}_2 - \vec{L}_1 = \int_{t_1}^{t_2}\vec{M}\,\mathrm{d}t
$$


其中 $\vec{M}$ 为作用在质点上的（相对同一参考点的）合力矩。<!-- src: C05-动量和角动量#p045; type: direct -->

质点的角动量守恒定律：如果 $\vec{M}=0$，则 $\vec{L}=$ 不变量。<!-- src: C05-动量和角动量#p045; type: direct -->

#### 质点系（n 个质点）

质点系角动量定理：

$$
\mathrm{d}\vec{L} = \vec{M}_e\,\mathrm{d}t \qquad \vec{L}_2 - \vec{L}_1 = \int_{t_1}^{t_2}\vec{M}_e\,\mathrm{d}t
$$


其中 $\vec{M}_e$ 为外力的合力矩（下标 $e$ 指外力；在上述中心内力模型中，内力矩成对抵消，故只有外力矩改变系统总角动量）。<!-- src: C05-动量和角动量#p045; type: one-step-inferred -->

质点系的角动量守恒定律：如果 $\vec{M}_e=0$，则总角动量

$$
\vec{L} = \sum_{i=1}^{n}\vec{L}_i = \text{不变量}
$$


即合外力矩为零时质点系总角动量守恒。<!-- src: C05-动量和角动量#p045; type: direct -->

### 应用一：行星绕太阳的运动（有心力下的角动量守恒）

#### 模型与守恒结论

取太阳为坐标原点；行星受太阳的引力作用。<!-- src: C05-动量和角动量#p046g1; type: direct -->

引力为有心力（central force）。相对于坐标原点（力心）的力矩为

$$
\vec{M} = \vec{r}\times\vec{F} = 0
$$


（因 $\vec{F}$ 沿 $\vec{r}$ 方向，二者平行，叉乘为零）。<!-- src: C05-动量和角动量#p046; type: direct -->

由 $\mathrm{d}\vec{L}=\vec{M}\,\mathrm{d}t$ 得 $\mathrm{d}\vec{L}=0$，故 $\vec{L}=$ 不变量。<!-- src: C05-动量和角动量#p046; type: direct -->

结论：行星的角动量守恒；但行星的动量不守恒。<!-- src: C05-动量和角动量#p046; type: direct -->

推广（旁注）：不仅引力，对于任何有心力的作用，若取力心为坐标原点，则质点的角动量是不变量。<!-- src: C05-动量和角动量#p046; type: direct -->

#### 由角动量守恒推知的两条结论

1. 行星轨道处在一确定的平面上，是一条平面曲线。其依据为 $\vec{L}=\vec{r}\times m\vec{v}$（$\vec{L}$ 方向恒定，$\vec{r}$、$\vec{v}$ 始终垂直于 $\vec{L}$，故运动限于过力心的固定平面内）。<!-- src: C05-动量和角动量#p047; type: one-step-inferred -->

2. 行星和太阳之间的连线在单位时间内扫过的面积为常量（即开普勒第二定律 / 面积速度恒定）。<!-- src: C05-动量和角动量#p047; type: direct -->

#### 面积速度与角动量的关系（推导）

设行星与太阳连线在 $\mathrm{d}t$ 时间内扫过的面积为 $\mathrm{d}A$，$\mathrm{d}t$ 内行星走过的路程为 $\mathrm{d}l$，$\theta$ 为 $\vec{r}$ 与位移（动量 $\vec{p}$ 方向）之间的夹角。<!-- src: C05-动量和角动量#p047g1; type: direct -->

微元扫过面积（底为 $\mathrm{d}l$、高为 $r\sin\theta$ 的三角形）：

$$
\mathrm{d}A = \frac{1}{2}\,\mathrm{d}l\cdot r\sin\theta, \qquad v=\frac{\mathrm{d}l}{\mathrm{d}t}
$$

<!-- src: C05-动量和角动量#p047; type: direct -->

角动量大小：

$$
L = |\vec{r}\times\vec{p}| = rp\sin\theta = rmv\sin\theta = m\,\frac{\mathrm{d}l}{\mathrm{d}t}\,r\sin\theta
$$

<!-- src: C05-动量和角动量#p047; type: direct -->

将面积速度代入，得角动量与面积速度的关系：

$$
L = 2m\,\frac{\mathrm{d}A}{\mathrm{d}t} = \text{不变量} \quad\Longrightarrow\quad \frac{\mathrm{d}A}{\mathrm{d}t}=\text{不变量}
$$


其中 $\dfrac{\mathrm{d}A}{\mathrm{d}t}$ 即行星与太阳连线在单位时间内扫过的面积。<!-- src: C05-动量和角动量#p048; type: direct -->

几何表述（开普勒第二定律）：相同时间间隔 $\Delta t$ 内扫过的面积相等，$\Delta A_1=\Delta A_2$（近日处弧长大、远日处弧长小，面积相同）。<!-- src: C05-动量和角动量#p048g1; type: synthesized -->

### 应用二：半球形碗内的水平投射（例题方法）

#### 题设

质点沿半径为 $r$ 的光滑半球形碗（碗保持静止）内面水平地投射，$v_0$ 是质点恰好能达到碗口所需的初速率，$\theta_0$ 为质点的初始角位置。要求：(1) 质点为什么能到达碗口；(2) $v_0$ 与 $\theta_0$ 的关系。<!-- src: C05-动量和角动量#p049ex1; type: direct -->

#### (1) 质点为何能到达碗口——受力分析法

质点受重力 $m\vec{g}$ 与碗面法向支持力 $\vec{N}$。把 $\vec{N}$ 分解到竖直与水平方向：<!-- src: C05-动量和角动量#p049ex1g1; type: direct -->

- 竖直方向分量平衡条件：$N\cos\theta_0 = mg$（此时质点恰在初始水平面内做匀速圆周运动）。<!-- src: C05-动量和角动量#p049ex1; type: direct -->
- 水平方向提供向心力：$N\sin\theta_0 = \dfrac{m v_0^{2}}{r\sin\theta_0}$（向心半径为 $r\sin\theta_0$）。<!-- src: C05-动量和角动量#p049ex1; type: direct -->

判断：当 $N\cos\theta_0 > mg$ 时，质点将向上加速、沿碗面螺旋上升，从而能向碗口运动。<!-- src: C05-动量和角动量#p049ex1; type: direct -->

#### (2) $v_0$ 与 $\theta_0$ 的关系——角动量分量守恒 + 机械能守恒

对 O 点：合力矩 $\vec{M}\neq 0$，故质点的角动量不守恒。<!-- src: C05-动量和角动量#p050ex1; type: direct -->

关键判断：但力矩沿 $z$ 轴的分量 $M_z=0$，故角动量沿 $z$ 轴的分量守恒，$L_z=\text{const.}$。<!-- src: C05-动量和角动量#p050ex1; type: direct -->

在 Cartesian system 中角动量定理分量式为：

$$
\mathrm{d}L_x = M_x\,\mathrm{d}t,\quad \mathrm{d}L_y = M_y\,\mathrm{d}t,\quad \mathrm{d}L_z = M_z\,\mathrm{d}t
$$


（由 $\mathrm{d}\vec{L}=\vec{M}\,\mathrm{d}t$ 投影得到）。<!-- src: C05-动量和角动量#p050ex1; type: direct -->

由 $L_z$ 守恒（初态速率 $v_0$、初始向心半径 $r\sin\theta_0$；到碗口处 $r\sin90^\circ=r$、速率 $v$）：

$$
(rmv_0)\sin\theta_0 = rmv
$$

<!-- src: C05-动量和角动量#p050ex1; type: direct -->

由于碗面光滑、$m$ 与地球间机械能守恒（取碗口与初始位置的高度差，初始低于碗口 $r\cos\theta_0$）：

$$
\frac{1}{2}mv_0^{2} = \frac{1}{2}mv^{2} + mgr\cos\theta_0
$$

<!-- src: C05-动量和角动量#p050ex1; type: direct -->

联立解得初速率：

$$
v_0 = \sqrt{\dfrac{2gr}{\cos\theta_0}}
$$

<!-- src: C05-动量和角动量#p050ex1; type: direct -->

> 方法要点：合力矩不为零（角动量不守恒）时，若某一坐标轴方向的力矩分量为零，则该轴方向的角动量分量守恒（$M_z=0\Rightarrow L_z=\text{const.}$），再结合机械能守恒联立求解。<!-- src: C05-动量和角动量#p050ex1; type: synthesized -->

## 综合例题 · 例5-7：大铁环—双小铁环系统（应用质心运动定理）

### 模型与受力分析
- 题面模型：质量为 $M$ 的大铁环用质量可忽略的绳子系在屋顶；大铁环上套着两个相同的、质量均为 $m$ 的小铁环，小铁环由静止从大铁环顶端向两边对称、无摩擦下滑。问大铁环是否可能向上运动、需满足什么条件。<!-- src: C05-动量和角动量#p051ex7; ref: 例5-7; type: direct -->
- 取由三个铁环组成的系统，其所受外力为：三个铁环各自的重力，以及绳子给大铁环的拉力 $\vec{T}$（方向竖直向上）。<!-- src: C05-动量和角动量#p051ex7; ref: 例5-7; type: direct -->
- 受力图（#p051g1）：大铁环顶端受拉力 $T$ 向上，大铁环重力 $Mg$ 向下；两个小铁环对称位于环上，各受重力 $mg$ 向下，半径与竖直方向夹角为 $\theta$。<!-- src: C05-动量和角动量#p051g1 + #p052g1; ref: 例5-7; type: synthesized -->
- 小铁环下滑时系统质心向下运动；以大铁环圆心为坐标原点、纵轴为 $z$ 轴建立坐标系。<!-- src: C05-动量和角动量#p051ex7; ref: 例5-7; type: direct -->

### 第一步：用几何关系写出质心坐标、速度、加速度
- 质心纵坐标（大铁环本身质心在原点，仅两小铁环贡献）：
$$
z_c=\frac{2mR\cos\theta}{M+2m}
$$

<!-- src: C05-动量和角动量#p051ex7; ref: 例5-7; type: direct -->
- 质心速度（对 $t$ 求导，$\theta$ 随时间增大故为负，质心向下）：
$$
v_c=-\frac{2mR\sin\theta}{M+2m}\,\frac{\mathrm{d}\theta}{\mathrm{d}t}
$$

<!-- src: C05-动量和角动量#p051ex7; ref: 例5-7; type: direct -->
- 质心加速度（再求导）：
$$
a_c=-\frac{2mR}{M+2m}\left(\sin\theta\,\frac{\mathrm{d}^2\theta}{\mathrm{d}t^2}+\cos\theta\left(\frac{\mathrm{d}\theta}{\mathrm{d}t}\right)^2\right)
$$

<!-- src: C05-动量和角动量#p052ex7; ref: 例5-7; type: direct -->

### 第二步：对两小铁环用机械能守恒求角速度、角加速度
- 在大铁环向上运动之前，两个小铁环和地球组成一个系统，该系统机械能守恒。<!-- src: C05-动量和角动量#p052ex7; ref: 例5-7; type: direct -->
- 能量方程（两小铁环从顶端下滑，下降高度对应 $R(1-\cos\theta)$，速率 $v_m=R\,\mathrm{d}\theta/\mathrm{d}t$）：
$$
2mgR(1-\cos\theta)=2\left(\tfrac12 mv_m^2\right)=mR^2\left(\frac{\mathrm{d}\theta}{\mathrm{d}t}\right)^2
$$

$$
\Rightarrow\quad 2g(1-\cos\theta)=R\left(\frac{\mathrm{d}\theta}{\mathrm{d}t}\right)^2
$$

<!-- src: C05-动量和角动量#p052ex7; ref: 例5-7; type: direct -->
- 对上式两边求导得角加速度关系：
$$
2g\sin\theta\,\frac{\mathrm{d}\theta}{\mathrm{d}t}=2R\,\frac{\mathrm{d}\theta}{\mathrm{d}t}\,\frac{\mathrm{d}^2\theta}{\mathrm{d}t^2}\quad\Rightarrow\quad g\sin\theta=R\,\frac{\mathrm{d}^2\theta}{\mathrm{d}t^2}
$$

<!-- src: C05-动量和角动量#p052ex7; ref: 例5-7; type: direct -->

### 第三步：回代得到质心加速度的纯角度表达式
$$
a_c=-\frac{2mR}{M+2m}\left(\sin\theta\,\frac{g\sin\theta}{R}+\cos\theta\,\frac{2g(1-\cos\theta)}{R}\right)
$$

$$
=-\frac{2mg}{M+2m}\left(\sin^2\theta+2\cos\theta(1-\cos\theta)\right)
$$

$$
=-\frac{2mg}{M+2m}\left(1-\cos^2\theta+2\cos\theta(1-\cos\theta)\right)
$$

<!-- src: C05-动量和角动量#p053ex7; ref: 例5-7; type: direct -->

### 第四步：对三环系统用质心运动定理 + 临界条件
- 对三个铁环组成的系统，由质心运动定理（竖直方向，向上为正）得：
$$
T-(M+2m)g=(M+2m)a_c
$$

<!-- src: C05-动量和角动量#p053ex7 + #p054ex7; ref: 例5-7; type: direct -->
- 关键判断：拉力 $T=0$ 是大铁环开始向上运动的临界条件；此时 $a_c=-g$。<!-- src: C05-动量和角动量#p054ex7; ref: 例5-7; type: direct -->

### 第五步：求临界角与可行条件
- 由 $a_c=-g$ 代入得临界角满足方程：
$$
1=\frac{2m}{M+2m}\bigl(1+(2-3\cos\theta)\cos\theta\bigr)
$$

<!-- src: C05-动量和角动量#p054ex7; ref: 例5-7; type: direct -->
- 化简过程：
$$
M+2m=2m\bigl(1+(2-3\cos\theta)\cos\theta\bigr)\;\Rightarrow\;M=4m\cos\theta-6m\cos^2\theta
$$

$$
\Rightarrow\;6m\cos^2\theta-4m\cos\theta+M=0\;\Rightarrow\;\cos\theta=\frac{2m\pm\sqrt{4m^2-6mM}}{6m}
$$

<!-- src: C05-动量和角动量#p054ex7; ref: 例5-7; type: direct -->
- 实根存在条件 $4m^2-6mM\ge0$，得大、小铁环质量需满足：
$$
m\ge\frac{3}{2}M
$$

即只有当每个小铁环质量不小于大铁环质量的 $3/2$ 倍时，大铁环才可能被向上拉动。<!-- src: C05-动量和角动量#p054ex7; ref: 例5-7; type: direct -->

### 可迁移方法要点
- 多体系统判断某物体运动趋势：对“整体系统”用质心运动定理 $\sum\vec{F}_{ext}=(\sum m)\,\vec{a}_c$，把外力（含约束力/绳张力）与质心加速度联系起来。<!-- src: C05-动量和角动量#p053ex7 + #p054ex7; ref: 例5-7; type: synthesized -->
- 质心加速度由几何约束（质心坐标对时间二次求导）给出，其中所需的角速度、角加速度用“子系统机械能守恒”及其对时间求导得到。<!-- src: C05-动量和角动量#p051ex7 + #p052ex7; ref: 例5-7; type: synthesized -->
- 临界判据：约束力（绳张力 $T$）减到 $0$ 是物体即将“脱离/反向运动”的临界条件，代入后解出临界角与参数可行域。<!-- src: C05-动量和角动量#p054ex7; ref: 例5-7; type: compressed -->
