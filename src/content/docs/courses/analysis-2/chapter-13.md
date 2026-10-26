---
title: "Chap 13 第二类曲线和曲面积分"
description: "数学分析 II课程笔记：Chap 13 第二类曲线和曲面积分。"
---

<div class="note-meta"><a href="/courses/analysis-2/">数学分析 II目录</a><a href="/courses/analysis-2/chapter-13-quick/">阅读速览</a><a href="/downloads/analysis-2/chapter-13.md" download>下载 Markdown</a></div>

## 13.1 第二类曲线积分

### 13.1.1 曲线的定向

- **定向曲线**：设曲线 $L$ 的端点为 $A, B$，规定其一为起点，这样的曲线称为定向曲线；起点为 $A$、终点为 $B$ 的定向曲线记为 $L_{AB}$。<!-- src: Chapter13.1-2#p003; type: direct -->
- 设平面定向曲线 $L$ 的参数方程为 $\mathbf{r} = \mathbf{r}(t) = x(t)\,\mathbf{i} + y(t)\,\mathbf{j}$，其起点参数为 $\alpha$、终点参数为 $\beta$，则记该定向曲线为

  $$
  \mathbf{r} = \mathbf{r}(t) = x(t)\,\mathbf{i} + y(t)\,\mathbf{j}, \quad t: \alpha \to \beta
  $$
  

  <!-- src: Chapter13.1-2#p003; type: direct -->
- **结论**：$\mathbf{r}'(t) = x'(t)\,\mathbf{i} + y'(t)\,\mathbf{j}$ 是指向参数增加方向的切向量；因此 $\boldsymbol{\tau} \overset{\text{def}}{=} \dfrac{\mathbf{r}'(t)}{|\mathbf{r}'(t)|}$ 是指向参数增加方向的单位切向量。<!-- src: Chapter13.1-2#p004; type: direct -->
- 对简单闭曲线 $L \subset xOy$ 面，通常规定**逆时针方向为正向**，记为 $L^+$；顺时针方向为**负向**，记为 $L^-$。<!-- src: Chapter13.1-2#p004; type: direct -->

#### 连通区域及其边界定向

- **单连通 / 复连通**：设 $D$ 为平面区域，若 $D$ 内的任意一条闭曲线所围区域都落在 $D$ 内，则称 $D$ 为**单连通**的，否则称其为**复连通**的（图示：单连通区域无"洞"，复连通区域有"洞"）。<!-- src: Chapter13.1-2#p005 + Chapter13.1-2#p005g1; type: direct -->
- **边界正向**：当点沿区域 $D$ 的边界朝一个方向前进时，$D$ 总在其**左手侧**，规定此方向为区域 $D$ 诱导的边界正向，记为 $\partial D^+$；与 $\partial D^+$ 相反的方向称为 $D$ 的边界负向，记为 $\partial D^-$（图示：单、复连通区域图的边界上均标注 $\partial D^+$ 方向箭头，复连通时内、外边界绕向相反）。<!-- src: Chapter13.1-2#p005 + Chapter13.1-2#p005g1; type: direct -->

### 13.1.2 第二类曲线的积分定义与计算

- **物理引入（变力做功）**：设光滑平面曲线 $L$ 上有连续作用力（向量场）$\mathbf{F}(x,y) = (P(x,y), Q(x,y))$，求 $\mathbf{F}$ 作用于质点使之沿 $L$ 自起点 $A$ 移动到终点 $B$ 所做的功。考察质点在 $L$ 上任一点 $M$ 处移动一段**弧微元** $ds$ 所作的功：

  $$
  dW = \mathbf{F} \cdot \mathbf{e}_\tau \, ds \;\Rightarrow\; W = \int_L \mathbf{F} \cdot \mathbf{e}_\tau \, ds
  $$
  

  <!-- src: Chapter13.1-2#p006; type: direct -->
- **定义（第二类曲线积分）**：设 $L$ 为定向曲线，向量场 $\mathbf{F} = (P, Q)$ 在 $L$ 上的第二类曲线积分为

  $$
  \text{（向量形式）}\quad \int_L \mathbf{F} \cdot d\mathbf{r} \overset{\text{def}}{=} \int_L (\mathbf{F} \cdot \mathbf{e}_\tau)\, ds
  $$
  

  <!-- src: Chapter13.1-2#p007; type: direct -->
- 由于**定向弧微分** $d\mathbf{r} = \mathbf{e}_\tau\, ds = (\cos\alpha, \cos\beta)\, ds = (dx, dy)$，于是

  $$
  \int_L \mathbf{F} \cdot \mathbf{e}_\tau\, ds = \int_L (P\cos\alpha + Q\cos\beta)\, ds = \int_L P\,dx + Q\,dy
  $$
  

  其中 $\int_L (P\cos\alpha + Q\cos\beta)\, ds$ 与 $\int_L P\,dx + Q\,dy$ 之间的等式给出**两类曲线积分的关系**，最末形式称为**坐标形式**。<!-- src: Chapter13.1-2#p007; type: direct -->
- **环(流)量**：当 $L$ 为闭曲线时，视向量场 $\mathbf{v} = (P, Q)$ 为流体的**流速场**，则积分表示流体沿 $L$ 的环(流)量，可记为

  $$
  \Phi = \oint_L \mathbf{v} \cdot d\mathbf{r} = \oint_L P\,dx + Q\,dy
  $$
  

  <!-- src: Chapter13.1-2#p008; type: direct -->
- **方向性**：第二类曲线积分与曲线的方向有关，且

  $$
  \int_{L_{BA}} P\,dx + Q\,dy = -\int_{L_{AB}} P\,dx + Q\,dy
  $$
  

  其它性质同第一类曲线积分，如线性性和可加性。<!-- src: Chapter13.1-2#p008; type: direct -->
- **注意**：(1) 两类曲线积分的形式不同；(2) 当 $Q = 0$ 时，$\int_L P\,dx$ 仍为第二类曲线积分。此外还有拆分式 $\int_L P\,dx + Q\,dy = \int_L P\,dx + \int_L Q\,dy$。<!-- src: Chapter13.1-2#p009; type: direct -->
- **定理（参数化计算公式）**：若定向曲线 $L$ 为 $x = x(t),\ y = y(t),\ t: \alpha \to \beta$，则

  $$
  \int_L P\,dx + Q\,dy = \int_\alpha^\beta \big[ P(x(t), y(t))\, x'(t) + Q(x(t), y(t))\, y'(t) \big]\, dt
  $$
  

  <!-- src: Chapter13.1-2#p010; type: direct -->
- **特例**：(1) 若曲线 $L$ 的方程为 $y = y(x),\ x: a \to b$，则

  $$
  \int_L P\,dx + Q\,dy = \int_a^b \big[ P(x, y(x)) + Q(x, y(x))\, y'(x) \big]\, dx
  $$
  

  (2) 若 $L$ 为平行 $x$ 轴的定向线段，则 $\int_L Q\,dy = 0$。<!-- src: Chapter13.1-2#p010; type: direct -->

#### 空间第二类曲线积分

- 对于空间定向曲线 $L:\ \mathbf{r} = \mathbf{r}(t) = x(t)\,\mathbf{i} + y(t)\,\mathbf{j} + z(t)\,\mathbf{k},\ t: \alpha \to \beta$，向量场 $\mathbf{F} = (P, Q, R)$ 在 $L$ 上的第二类曲线积分为 $\int_L P\,dx + Q\,dy + R\,dz$；其概念与计算公式如何，原文以「思考与猜测」方式提出。<!-- src: Chapter13.1-2#p012; type: compressed -->

#### 例题

- **例 1**：将第二类曲线积分 $I = \int_L x^2\,dx - xy\,dy$ 化为第一类曲线积分，其中 $L$ 是自点 $(-1, 0)$ 到点 $(1, 0)$ 的上半圆周 $y = \sqrt{1 - x^2}$。题型要点：利用两类曲线积分关系 $\int_L P\,dx + Q\,dy = \int_L (P\cos\alpha + Q\cos\beta)\,ds$ 互化。<!-- src: Chapter13.1-2#p009ex1 + Chapter13.1-2#p007; type: synthesized -->
- **例 2**：计算 $I = \int_L 2xy\,dx + x^2\,dy$，其中 $L$ 是由点 $O(0,0)$ 到点 $B(1,1)$ 的如下路径：(1) 直线 $y = x$；(2) 曲线 $y = x^3$；(3) 由 $O$ 经点 $A(1,0)$ 到 $B$ 的折线。题型要点：同一对端点、不同路径分别用参数化（或 $y=y(x)$ 特例）计算比较。<!-- src: Chapter13.1-2#p011ex2 + Chapter13.1-2#p010; type: synthesized -->
- **例 3**：在力场 $\mathbf{F} = (y, -x, z)$ 作用下，质点沿螺旋线 $L: x = R\cos t,\ y = R\sin t,\ z = t$ 由点 $A(R, 0, 0)$ 运动到点 $B(R, 0, 2\pi)$，求 $\mathbf{F}$ 所做的功。题型要点：空间曲线积分的参数化计算。<!-- src: Chapter13.1-2#p012ex3; type: compressed -->

## 13.2 第二类曲面积分

### 13.2.1 双侧曲面及其定侧

- **双侧曲面**：设 $S$ 为光滑曲面，指定其上点 $P$ 处的法向量 $\mathbf{n}$；当点 $P$ 沿 $S$ 上任意连续闭曲线**不越过 $S$ 的边界**回到起始位置时，法向量 $\mathbf{n}$ 始终保持原来指向——满足此性质的曲面即为双侧曲面。<!-- src: Chapter13.1-2#p014; type: compressed -->
- **Möbius 带**：非双侧曲面（**单侧曲面**）的例子。<!-- src: Chapter13.1-2#p014; type: direct -->
- **定侧曲面**：双侧曲面 $S$ 的侧向由其**法向量组**确定。选定 $S$ 的一侧为**正侧**，记为 $S^+$，则另一侧为**负侧**，记为 $S^-$。<!-- src: Chapter13.1-2#p014; type: direct -->
- **约定**：若曲面 $S$ 的方程为 $z = z(x, y),\ (x, y) \in D$，则其**单位法向量**

  $$
  \mathbf{n}^\circ = \pm\frac{(-z_x, -z_y, 1)}{\sqrt{1 + z_x^2 + z_y^2}}
  $$
  

  选 "$+$" 号时 $\mathbf{n}^\circ = (\cos\alpha, \cos\beta, \cos\gamma)$，其中

  $$
  \cos\gamma = \frac{1}{\sqrt{1 + z_x^2 + z_y^2}} > 0
  $$
  

  故 $\mathbf{n}^\circ$ 与 $z$ 轴正向夹角 $\gamma < 90^\circ$，指向**上侧**，规定为 $S$ 的**正侧**。<!-- src: Chapter13.1-2#p015; type: direct -->
- **注**：封闭曲面规定其**外侧**为正侧。<!-- src: Chapter13.1-2#p015; type: direct -->

### 13.2.2 第二类曲面积分的定义

- **物理引入（流量）**：设均匀流体的流速场 $\mathbf{v} = (P, Q, R)$，流体自光滑曲面 $S$ 负侧流向正侧，求单位时间流体通过 $S$ 的体积流量。**微元法**：考察单位时间流体通过**曲面微元** $dS$ 的体积流量：

  $$
  d\Phi = \mathbf{v} \cdot \mathbf{n}^\circ\, dS \;\Rightarrow\; \Phi = \iint_S \mathbf{v} \cdot \mathbf{n}^\circ\, dS
  $$
  

  其中 $\mathbf{n}^\circ$ 是曲面 $S$ 上**指向正侧**的单位法向量（图示：单位时间内通过 $dS$ 的流体为以 $dS$ 为底、沿 $\mathbf{v}(M)$ 方向的斜柱体）。<!-- src: Chapter13.1-2#p016 + Chapter13.1-2#p016g1; type: direct -->
- **定义（第二类曲面积分）**：设 $S$ 为定侧曲面，向量场 $\mathbf{v} = (P, Q, R)$ 在 $S$ 上的第二类曲面积分为

  $$
  \text{（向量形式）}\quad \iint_S \mathbf{v} \cdot d\mathbf{S} \overset{\text{def}}{=} \iint_S (\mathbf{v} \cdot \mathbf{n}^\circ)\, dS
  $$
  

  <!-- src: Chapter13.1-2#p017; type: direct -->
- 由于**定侧曲面微元** $d\mathbf{S} = \mathbf{n}^\circ\, dS = (\cos\alpha, \cos\beta, \cos\gamma)\, dS = (dy\,dz,\ dz\,dx,\ dx\,dy)$，于是

  $$
  \iint_S \mathbf{v} \cdot d\mathbf{S} = \iint_S (P\cos\alpha + Q\cos\beta + R\cos\gamma)\, dS = \iint_S P\,dy\,dz + Q\,dz\,dx + R\,dx\,dy
  $$
  

  其中 $\iint_S (P\cos\alpha + Q\cos\beta + R\cos\gamma)\, dS$ 与 $\iint_S P\,dy\,dz + Q\,dz\,dx + R\,dx\,dy$ 之间的等式给出**两类曲面积分的关系**，最末形式称为**坐标形式**。<!-- src: Chapter13.1-2#p017; type: direct -->
- **通量**：当曲面 $S$ 封闭时，积分为流体通过 $S$ 的通量，记为

  $$
  \Phi = \iint_S \mathbf{v} \cdot d\mathbf{S} = \iint_S P\,dy\,dz + Q\,dz\,dx + R\,dx\,dy
  $$
  

  （原文此处及后文 Gauss 公式均使用闭曲面积分记号 ∯。）<!-- src: Chapter13.1-2#p018; type: direct -->
- **侧向性**：第二类曲面积分与曲面的侧向有关，且

  $$
  \iint_{S^-} P\,dy\,dz + Q\,dz\,dx + R\,dx\,dy = -\iint_{S^+} P\,dy\,dz + Q\,dz\,dx + R\,dx\,dy
  $$
  

  其它性质同第一类曲面积分，如线性性和可加性。<!-- src: Chapter13.1-2#p018; type: direct -->
- **注意**：(1) 两类曲面积分的形式不同；(2) 当 $P = Q = 0$ 时，$\iint_S R\,dx\,dy$ 仍为第二类曲面积分。<!-- src: Chapter13.1-2#p018; type: direct -->

### 13.2.3 第二类曲面积分的计算

- **定理（参数曲面计算公式）**：若定侧光滑曲面 $S$ 为 $x = x(u,v),\ y = y(u,v),\ z = z(u,v),\ (u,v) \in D$，则

  $$
  \iint_S P\,dy\,dz + Q\,dz\,dx + R\,dx\,dy = \pm\iint_D (PA + QB + RC)\, du\,dv
  $$
  

  <!-- src: Chapter13.1-2#p019; type: direct -->
  其中 $A = \dfrac{\partial(y,z)}{\partial(u,v)},\ B = \dfrac{\partial(z,x)}{\partial(u,v)},\ C = \dfrac{\partial(x,y)}{\partial(u,v)}$，即 $\mathbf{r}_u \times \mathbf{r}_v = (A,B,C)$。**注**：其中 $\pm$ 号选择由 $S$ 指定侧的法向量确定。<!-- src: Chapter13.1-2#p019; type: one-step-inferred -->
- 对照特例 1) 与 13.2.1 的单位法向量约定可见，在 $z = z(x,y)$ 情形 $(A, B, C) = (-z_x, -z_y, 1)$，与该约定中（未单位化的）法向量分量一致。<!-- src: Chapter13.1-2#p019 + Chapter13.1-2#p015; type: one-step-inferred -->
- **特例 1)（合一投影法）**：若曲面 $S$ 的方程为 $z = z(x,y),\ (x,y) \in D$，则

  $$
  \iint_S P\,dy\,dz + Q\,dz\,dx + R\,dx\,dy = \pm\iint_D (-P z_x - Q z_y + R)\, dx\,dy
  $$
  

  <!-- src: Chapter13.1-2#p019; type: direct -->
- **特例 2)**：当 $P = Q = 0$，曲面 $S$ 为 $z = z(x,y),\ (x,y) \in D$ 时

  $$
  \iint_S R(x, y, z)\, dx\,dy = \pm\iint_D R(x, y, z(x,y))\, dx\,dy
  $$
  

  当曲面 $S$ 指定**上侧**时选 $+$ 号，指定**下侧**时选 $-$ 号。<!-- src: Chapter13.1-2#p020; type: direct -->
- **特例 3)**：当曲面 $S$ 为母线平行于 $z$ 轴的柱面时

  $$
  \iint_S R(x, y, z)\, dx\,dy = 0
  $$
  

  <!-- src: Chapter13.1-2#p020; type: direct -->

#### 例题

- **例 1**：计算 $I = \iint_S xyz\, dx\,dy$，其中 $S$ 是单位球面 $x^2 + y^2 + z^2 = 1$ 的部分外侧：1) $z \geq 0$；2) $x \geq 0,\ y \geq 0$。原文给出答案：1) $0$；2) $\dfrac{2}{15}$。题型要点：被积式只含 $R\,dx\,dy$ 项，按指定侧定号后用特例 2) 计算。<!-- src: Chapter13.1-2#p020ex1 + Chapter13.1-2#p020; type: synthesized -->
- **例 2**：设有流速为 $\mathbf{v} = (x, 2xy, -2z)$ 的流体，求单位时间流体经锥面 $z = \sqrt{x^2 + y^2}\ (0 \leq z \leq h)$ **上侧流向下侧**的体积流量。原文给出答案：$\dfrac{5\pi h^3}{3}$。<!-- src: Chapter13.1-2#p021ex2; type: compressed -->

## 13.3 Green 公式及其应用

### 13.3.1 Green 公式

- **定理（Green 公式）**：设 $\mathbf{v} = (P, Q)$ 为平面有界闭域 $D$ 上的**光滑向量场**，$D$ 的边界**分段光滑**，则有

  $$
  \oint_{\partial D^+} P\,dx + Q\,dy = \iint_D \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) dx\,dy
  $$
  

  **注**：这是二重积分与其边界上第二类曲线积分的关系。<!-- src: Chapter13.3-5#p002; type: direct -->
- **证明思路（分析）**：先证 $\oint_{\partial D^+} P\,dx = -\iint_D \dfrac{\partial P}{\partial y}\, dx\,dy$，再证 $\oint_{\partial D^+} Q\,dy = \iint_D \dfrac{\partial Q}{\partial x}\, dx\,dy$，两式相加即证。<!-- src: Chapter13.3-5#p002; type: direct -->
- **推论（面积公式）**：设平面有界闭域 $D$ 的边界分段光滑，则其面积

  $$
  S = \frac{1}{2} \oint_{\partial D^+} x\,dy - y\,dx
  $$
  

  <!-- src: Chapter13.3-5#p003; type: direct -->
- **Green 公式的向量形式**：设 $\mathbf{v} = (Q, -P)$，$\mathbf{e}_\tau = (\cos\alpha, \cos\beta)$ 为 $\partial D^+$ 的单位切向量，$\mathbf{n}^\circ$ 为 $\partial D$ 的单位**外法向量**，则 $\mathbf{n}^\circ = (\cos\beta, -\cos\alpha)$，故有

  $$
  \oint_{\partial D} \mathbf{v} \cdot \mathbf{n}^\circ\, ds = \iint_D \nabla \cdot \mathbf{v}\, d\sigma
  $$
  

  （图示：$\partial D^+$ 上一点处单位切向量 $\mathbf{e}_\tau$ 沿前进方向、单位外法向量 $\mathbf{n}^\circ$ 指向区域外。）<!-- src: Chapter13.3-5#p004 + Chapter13.3-5#p004g1; type: direct -->

#### 例题

- **例 1**：计算 $I = \oint_L (y - x)\,dx + (3x + y)\,dy$，其中 $L$ 为椭圆周 $\dfrac{(x-1)^2}{4} + (y-2)^2 = 1$，取逆时针方向。题型要点：闭曲线上直接用 Green 公式化为二重积分。<!-- src: Chapter13.3-5#p003ex1 + Chapter13.3-5#p002; type: synthesized -->
- **例 2**：计算 $I = \int_{AO} (e^x \sin y - 4x)\,dx + (e^x \cos y - 3)\,dy$，其中 $AO$ 是由 $A(a, 0)$ 到 $O(0, 0)$ 的弧段 $y = \sqrt{ax - x^2}\ (a > 0)$。题型要点：$AO$ 非闭曲线，Green 公式要求闭域边界，需补线成闭曲线后使用。<!-- src: Chapter13.3-5#p003ex2 + Chapter13.3-5#p002; type: synthesized -->
- **例 3**：设 $L$ 是任意一条不过原点 $O$ 的正向光滑闭曲线，求

  $$
  I = \oint_L \frac{x\,dy - y\,dx}{x^2 + y^2}
  $$
  

  题型要点：被积函数分母 $x^2+y^2$ 在原点为零（奇点），题设强调 $L$ 不过原点，需按 $L$ 是否包围原点讨论。<!-- src: Chapter13.3-5#p004ex3 + Chapter13.3-5#p002; type: synthesized -->

### 13.3.2 平面曲线积分与路径无关的条件

- **定义（与路径无关）**：设 $D$ 为平面**单连通**区域。若对任意 $A, B \in D$，以及任意分段光滑曲线 $L_{AB} \subset D$，曲线积分 $\int_{L_{AB}} P\,dx + Q\,dy$ 的值仅与 $A, B$ 有关而与 $L$ 无关，则称在 $D$ 内**曲线积分与路径无关**，此时积分可记为

  $$
  \int_A^B P\,dx + Q\,dy
  $$
  

  <!-- src: Chapter13.3-5#p005; type: direct -->
- **定理（Green）**：设 $\mathbf{v} = (P(x,y), Q(x,y))$ 是单连通区域 $D$ 内的光滑向量场，则下面四条**等价**：
  1. 在 $D$ 内的任一条分段光滑**闭曲线** $L$ 上，$\oint_L P\,dx + Q\,dy = 0$；
  2. 在 $D$ 内曲线积分 $\int_L P\,dx + Q\,dy$ **与路径无关**；
  3. $P\,dx + Q\,dy$ 是某函数 $\varphi(x, y)$ 的**全微分**，即 $\exists\, \varphi$ 使得 $d\varphi = P\,dx + Q\,dy$，此时称 $\varphi$ 是 $P\,dx + Q\,dy$ 的**原函数**；
  4. 在 $D$ 内恒成立 $\dfrac{\partial Q}{\partial x} \equiv \dfrac{\partial P}{\partial y}$。

  <!-- src: Chapter13.3-5#p006; type: direct -->
- **推论**：设 $\mathbf{v}$ 是单连通区域 $D$ 内的光滑向量场，且 $\mathbf{v}$ 在 $D$ 内的曲线积分与路径无关，则对 $\forall A, B \in D$，有

  $$
  \int_A^B \mathbf{v} \cdot d\mathbf{r} = \varphi(B) - \varphi(A)
  $$
  

  其中 $\varphi(x, y)$ 满足 $\mathbf{v} = \nabla\varphi$。<!-- src: Chapter13.3-5#p007; type: direct -->

#### 例题

- **例 4**：计算 $\int_L 2e^{2x}\cos y\,dx - e^{2x}\sin y\,dy$，其中 $L$ 是上半椭圆 $\dfrac{(x-2)^2}{4} + \dfrac{y^2}{9} = 1$ 由 $O(0,0)$ 到 $A(2,3)$ 的弧。题型要点：验证 $\partial Q/\partial x = \partial P/\partial y$ 后利用路径无关换简单路径（或求原函数）计算。<!-- src: Chapter13.3-5#p007ex4 + Chapter13.3-5#p006; type: synthesized -->

### 13.3.3 全微分求积与全微分方程

- **全微分求积**：设 $P(x,y), Q(x,y)$ 在单连通区域 $D$ 有连续偏导数，且 $\dfrac{\partial Q}{\partial x} = \dfrac{\partial P}{\partial y}$，则 $P\,dx + Q\,dy$ 存在原函数 $\varphi(x,y)$，且（$\varphi$ 的求法）

  $$
  \varphi(x, y) = \int_{(x_0, y_0)}^{(x, y)} P\,dx + Q\,dy
  $$
  

  **注**：上述求原函数的过程称为**全微分求积(分)**。<!-- src: Chapter13.3-5#p008; type: direct -->
- **全微分方程**：若 $P(x,y)\,dx + Q(x,y)\,dy$ 是某函数的全微分，则称方程 $P\,dx + Q\,dy = 0$ 为**全微分方程**。**判别式**：$\dfrac{\partial Q}{\partial x} = \dfrac{\partial P}{\partial y}$。**解法**：求出原函数 $\varphi(x, y)$，则通解为 $\varphi(x, y) = C$。<!-- src: Chapter13.3-5#p009; type: direct -->

#### 例题

- **例 5**：求 $\dfrac{x\,dy - y\,dx}{x^2 + y^2}\ (x > 0)$ 的原函数，并计算积分

  $$
  I = \int_{(1,0)}^{(\sqrt{3},3)} \frac{x\,dy - y\,dx}{x^2 + y^2}
  $$
  

  题型要点：在 $x>0$（单连通）区域内全微分求积后用原函数差计算；该被积式与本节例 3 的被积式相同，但例 3 中 $L$ 为闭曲线且区域含奇点。<!-- src: Chapter13.3-5#p009ex5 + Chapter13.3-5#p008 + Chapter13.3-5#p004ex3; type: synthesized -->
- **例 6**：求解方程 $(x^2 + 2xy)\,dx + (x^2 - y^2)\,dy = 0$。题型要点：先用判别式验证为全微分方程，再求原函数 $\varphi$ 得通解 $\varphi(x,y) = C$。<!-- src: Chapter13.3-5#p009ex6; type: compressed -->

## 13.4 Gauss 公式

### 13.4.1 Gauss 公式

- **定理（Gauss 公式）**：设 $\mathbf{v} = (P, Q, R)$ 为空间有界闭域 $\Omega$ 上的**光滑向量场**，$\partial\Omega$ 是**分片光滑**闭曲面，则有

  $$
  \iint_{\partial\Omega^+} P\,dy\,dz + Q\,dz\,dx + R\,dx\,dy = \iiint_\Omega \left( \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z} \right) dV
  $$
  

  **注**：这是三重积分与其边界上第二类曲面积分的关系。<!-- src: Chapter13.3-5#p011; type: direct -->
- **证明思路（分析）**：先证 $\iint_{\partial\Omega^+} R\,dx\,dy = \iiint_\Omega \dfrac{\partial R}{\partial z}\, dV$，再证关于 $P, Q$ 的等式，三式相加即证。<!-- src: Chapter13.3-5#p011; type: direct -->
- **证明分两步**：1) 当 $\Omega$ 是 $xy$ 型区域，即 $\Omega = \{(x,y,z) \mid z_1(x,y) \leq z \leq z_2(x,y),\ (x,y) \in D\}$（图示：$\Omega$ 上下边界为 $z = z_2(x,y)$ 与 $z = z_1(x,y)$，投影域 $D$）；2) 当 $\Omega$ 是一般区域时，用母线平行 $z$ 轴的柱面分成若干 $xy$ 型区域并运用 1) 的结论（图示：分割为 $\Omega_1, \Omega_2, \Omega_3$）。<!-- src: Chapter13.3-5#p012 + Chapter13.3-5#p012g1 + Chapter13.3-5#p012g2; type: compressed -->
- **推论（体积公式）**：设空间有界闭域 $\Omega$ 的边界分片光滑，则其体积

  $$
  V(\Omega) = \frac{1}{3} \iint_{\partial\Omega^+} x\,dy\,dz + y\,dz\,dx + z\,dx\,dy
  $$
  

  <!-- src: Chapter13.3-5#p013; type: direct -->

#### 例题

- **例 1**：计算 $I = \iint_S x\,dy\,dz + y\,dz\,dx + z\,dx\,dy$，其中 $S$ 为椭球面 $\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} + \dfrac{z^2}{c^2} = 1$ 的外侧。原文给出答案：$4\pi abc$。题型要点：封闭曲面外侧直接用 Gauss 公式；被积式与本节体积公式推论的被积式相同。<!-- src: Chapter13.3-5#p013ex1 + Chapter13.3-5#p013; type: synthesized -->
- **例 2**：计算 $I = \iint_S x\,dy\,dz + 2xy\,dz\,dx - 2z\,dx\,dy$，其中 $S$ 为锥面 $z = \sqrt{x^2 + y^2}\ (0 \leq z \leq h)$ 的下侧。原文给出答案：$\dfrac{5\pi h^3}{3}$。题型要点：锥面非封闭，Gauss 公式要求闭曲面，需补面化为封闭曲面后使用。该题与 13.2 节例 2 为同一向量场、同一锥面的流量问题，答案一致。<!-- src: Chapter13.3-5#p014ex2 + Chapter13.3-5#p011 + Chapter13.1-2#p021ex2; type: synthesized -->
- **例 3**：计算

  $$
  I = \iint_S \frac{xz^2\,dy\,dz + (x^2 y - z^3)\,dz\,dx + (2xy + y^2 z)\,dx\,dy}{\sqrt{x^2 + y^2 + z^2}}
  $$
  

  其中 $S$ 是上半球面 $z = \sqrt{R^2 - x^2 - y^2}\ (R > 0)$ 的上侧。原文给出答案：$\dfrac{2\pi R^4}{5}$。题型要点：$S$ 是半径为 $R$ 的球面的一部分，故在 $S$ 上分母 $\sqrt{x^2+y^2+z^2} = R$ 为常数，可先化简被积式。<!-- src: Chapter13.3-5#p014ex3; type: one-step-inferred -->
- **例 4**：计算 $I = \iint_S \dfrac{\cos(\mathbf{r}, \mathbf{n})}{\|\mathbf{r}\|^2}\, dS$，其中 $S$ 是包围原点的封闭光滑曲面，$\mathbf{n}$ 是 $S$ 上点 $(x, y, z)$ 处的外法向量，$\mathbf{r} = (x, y, z)$。原文给出答案：$4\pi$。题型要点：被积场在原点不光滑（奇点），而 $S$ 包围原点，不满足直接用 Gauss 公式的光滑性条件。<!-- src: Chapter13.3-5#p015ex4; type: one-step-inferred -->

### 13.4.2 散度

- **定义（散度）**：向量场 $\mathbf{v} = (P, Q, R)$ 的**散度**定义为

  $$
  \operatorname{div} \mathbf{v} \overset{\text{def}}{=} \nabla \cdot \mathbf{v} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}
  $$
  

  <!-- src: Chapter13.3-5#p016; type: direct -->
- **Gauss 公式的向量形式**：由于 $\iint_{\partial\Omega^+} P\,dy\,dz + Q\,dz\,dx + R\,dx\,dy = \iint_{\partial\Omega^+} \mathbf{v} \cdot d\mathbf{S}$ 且 $\iiint_\Omega \left( \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z} \right) dV = \iiint_\Omega \nabla \cdot \mathbf{v}\, dV$，故有

  $$
  \iint_{\partial\Omega^+} \mathbf{v} \cdot d\mathbf{S} = \iiint_\Omega \nabla \cdot \mathbf{v}\, dV = \iiint_\Omega \operatorname{div} \mathbf{v}\, dV
  $$
  

  <!-- src: Chapter13.3-5#p017; type: direct -->
- **散度的物理意义**：

  $$
  \operatorname{div} \mathbf{v}(M) = \lim_{\Omega \to M} \frac{1}{\operatorname{Vol}(\Omega)} \iint_{\partial\Omega^+} \mathbf{v} \cdot d\mathbf{S}
  $$
  

  <!-- src: Chapter13.3-5#p017; type: direct -->

#### 例题

- **例 5**：求向量场 $\mathbf{v} = (x^2 y,\ y^2 z,\ z^2 x)$ 的散度 $\operatorname{div} \mathbf{v}\big|_{(2,1,-2)}$。原文给出答案：$-8$。<!-- src: Chapter13.3-5#p016ex5; type: compressed -->

## 13.5 Stokes 公式

### 13.5.1 Stokes 公式

- **定理（Stokes 公式）**：设 $\mathbf{v} = (P, Q, R)$ 为空间光滑曲面 $S$ 上的**光滑向量场**，$\partial S$ 是**分段光滑**闭曲线，则有

  $$
  \oint_{\partial S} P\,dx + Q\,dy + R\,dz = \iint_S \left( \frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z} \right) dy\,dz + \left( \frac{\partial P}{\partial z} - \frac{\partial R}{\partial x} \right) dz\,dx + \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) dx\,dy
  $$
  

  其中 $\partial S$ 的方向与 $S$ 的侧向按**右手法则**联系。**注**：这是第二类曲面积分与其边界上第二类曲线积分的关系。<!-- src: Chapter13.3-5#p019; type: direct -->
- **行列式记法**：借助行列式，Stokes 公式可记为

  $$
  \oint_{\partial S} P\,dx + Q\,dy + R\,dz = \iint_S \begin{vmatrix} dy\,dz & dz\,dx & dx\,dy \\ \dfrac{\partial}{\partial x} & \dfrac{\partial}{\partial y} & \dfrac{\partial}{\partial z} \\ P & Q & R \end{vmatrix} = \iint_S \begin{vmatrix} \cos\alpha & \cos\beta & \cos\gamma \\ \dfrac{\partial}{\partial x} & \dfrac{\partial}{\partial y} & \dfrac{\partial}{\partial z} \\ P & Q & R \end{vmatrix}\, dS
  $$
  

  其中 $\partial S$ 定向与 $(\cos\alpha, \cos\beta, \cos\gamma)$ 按右手法则联系。<!-- src: Chapter13.3-5#p020; type: direct -->

#### 例题

- **例 1**：计算 $I = \oint_C z\,dx + x\,dy + y\,dz$，其中 $C$ 是平面 $2x + 3y + z = 6$ 被三个坐标平面所截的三角形 $S$ 的边界，其方向与 $S$ 上侧满足右手法则。原文给出答案：$18$。题型要点：用 Stokes 公式化为三角形面片上的第二类曲面积分。<!-- src: Chapter13.3-5#p021ex1 + Chapter13.3-5#p019; type: synthesized -->
- **例 2**：计算 $I = \oint_C (y - z)\,dx + (z - x)\,dy + (x - y)\,dz$，其中曲线 $C$ 为 $\begin{cases} x^2 + y^2 = R^2 \\ x + z = R \end{cases}$，积分方向从 $Ox$ 轴正向看沿逆时针。原文给出答案：$-4\pi R^2$。题型要点：$C$ 落在平面 $x + z = R$ 上，可取该平面上被 $C$ 围的面片为 $S$ 用 Stokes 公式。<!-- src: Chapter13.3-5#p022ex2 + Chapter13.3-5#p019; type: synthesized -->

### 13.5.2 旋度

- **定义（旋度）**：向量场 $\mathbf{v} = (P, Q, R)$ 的**旋度**定义为

  $$
  \operatorname{rot} \mathbf{v} \overset{\text{def}}{=} \nabla \times \mathbf{v} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ \dfrac{\partial}{\partial x} & \dfrac{\partial}{\partial y} & \dfrac{\partial}{\partial z} \\ P & Q & R \end{vmatrix} = \left( \frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z},\ \frac{\partial P}{\partial z} - \frac{\partial R}{\partial x},\ \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right)
  $$
  

  <!-- src: Chapter13.3-5#p023; type: direct -->
- **Stokes 公式的向量形式**：记 $\mathbf{r} = (x, y, z)$，则 $d\mathbf{r} = (dx, dy, dz)$，Stokes 公式可写成

  $$
  \oint_{\partial S} \mathbf{v} \cdot d\mathbf{r} = \iint_S \operatorname{rot} \mathbf{v} \cdot d\mathbf{S} = \iint_S \operatorname{rot} \mathbf{v} \cdot \mathbf{n}^\circ\, dS
  $$
  

  其中 $\partial S$ 的定向与 $S$ 的定侧（$\mathbf{n}^\circ$）满足右手法则。<!-- src: Chapter13.3-5#p024; type: direct -->
- **旋度的物理意义**：

  $$
  \operatorname{rot} \mathbf{v} \cdot \mathbf{n}^\circ \Big|_M = \lim_{S \to M} \frac{1}{\operatorname{Area}(S)} \oint_{\partial S} \mathbf{v} \cdot d\mathbf{r}
  $$
  

  <!-- src: Chapter13.3-5#p024; type: direct -->

#### 例题

- **例 3**：求向量场 $\mathbf{v} = (xy,\ yz,\ -y^2)$ 的旋度 $\operatorname{rot} \mathbf{v}\big|_{(1,-1,3)}$。原文给出答案：$(3, 0, -1)$。<!-- src: Chapter13.3-5#p023ex3; type: compressed -->

## 本章三大公式总览

| 公式 | 等式 | 联系的两种积分 | 定向/定侧要求 |
|---|---|---|---|
| Green 公式 | $\oint_{\partial D^+} P\,dx + Q\,dy = \iint_D \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) dx\,dy$ <!-- src: Chapter13.3-5#p002; type: direct --> | 二重积分 ↔ 边界上第二类曲线积分 <!-- src: Chapter13.3-5#p002; type: direct --> | 边界正向 $\partial D^+$（区域在左手侧）<!-- src: Chapter13.1-2#p005; type: compressed --> |
| Gauss 公式 | $\iint_{\partial\Omega^+} P\,dy\,dz + Q\,dz\,dx + R\,dx\,dy = \iiint_\Omega \left( \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z} \right) dV$ <!-- src: Chapter13.3-5#p011; type: direct --> | 三重积分 ↔ 边界上第二类曲面积分 <!-- src: Chapter13.3-5#p011; type: direct --> | 闭曲面外侧为正侧 <!-- src: Chapter13.1-2#p015; type: compressed --> |
| Stokes 公式 | $\oint_{\partial S} P\,dx + Q\,dy + R\,dz = \iint_S \operatorname{rot} \mathbf{v} \cdot d\mathbf{S}$ <!-- src: Chapter13.3-5#p019 + Chapter13.3-5#p024; type: compressed --> | 第二类曲面积分 ↔ 边界上第二类曲线积分 <!-- src: Chapter13.3-5#p019; type: direct --> | $\partial S$ 方向与 $S$ 侧向按右手法则 <!-- src: Chapter13.3-5#p019; type: direct --> |

- 向量形式对照：Green（通量场/外法向量形式）$\oint_{\partial D} \mathbf{v} \cdot \mathbf{n}^\circ ds = \iint_D \nabla \cdot \mathbf{v}\, d\sigma$；Gauss $\iint_{\partial\Omega^+} \mathbf{v} \cdot d\mathbf{S} = \iiint_\Omega \operatorname{div} \mathbf{v}\, dV$；Stokes $\oint_{\partial S} \mathbf{v} \cdot d\mathbf{r} = \iint_S \operatorname{rot} \mathbf{v} \cdot d\mathbf{S}$。<!-- src: Chapter13.3-5#p004 + Chapter13.3-5#p017 + Chapter13.3-5#p024; type: synthesized -->
