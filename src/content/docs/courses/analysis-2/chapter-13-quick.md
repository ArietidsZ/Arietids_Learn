---
title: "Chap 13 第二类曲线和曲面积分（速览）"
description: "数学分析 II课程笔记：Chap 13 第二类曲线和曲面积分（速览）。"
---

<div class="note-meta"><a href="/courses/analysis-2/">数学分析 II目录</a><a href="/courses/analysis-2/chapter-13/">阅读详版</a><a href="/downloads/analysis-2/chapter-13-quick.md" download>下载 Markdown</a></div>

## 定向与定侧

- 定向曲线 $L_{AB}$：起点 $A$、终点 $B$；$\boldsymbol{\tau} = \dfrac{\mathbf{r}'(t)}{|\mathbf{r}'(t)|}$ 指向参数增加方向。<!-- src: Chapter13.1-2#p003 + Chapter13.1-2#p004; type: compressed -->
- 简单闭曲线：逆时针 $L^+$，顺时针 $L^-$；区域边界正向 $\partial D^+$：前进时 $D$ 在**左手侧**。<!-- src: Chapter13.1-2#p004 + Chapter13.1-2#p005; type: compressed -->
- 单连通：$D$ 内任一闭曲线所围区域都落在 $D$ 内；否则复连通。<!-- src: Chapter13.1-2#p005; type: compressed -->
- 双侧曲面定侧：正侧 $S^+$ / 负侧 $S^-$；$z = z(x,y)$ 时 $\mathbf{n}^\circ = \pm\dfrac{(-z_x, -z_y, 1)}{\sqrt{1 + z_x^2 + z_y^2}}$，取 $+$ 则 $\cos\gamma > 0$ 指向上侧（正侧）；**封闭曲面外侧为正侧**；Möbius 带是单侧曲面。<!-- src: Chapter13.1-2#p014 + Chapter13.1-2#p015; type: compressed -->

## 两类积分的定义与互化

- 第二类曲线积分：$\int_L \mathbf{F} \cdot d\mathbf{r} = \int_L (\mathbf{F} \cdot \mathbf{e}_\tau)\, ds = \int_L P\,dx + Q\,dy$（$d\mathbf{r} = \mathbf{e}_\tau ds = (dx, dy)$）。<!-- src: Chapter13.1-2#p007; type: compressed -->
- 第二类曲面积分：$\iint_S \mathbf{v} \cdot d\mathbf{S} = \iint_S (\mathbf{v} \cdot \mathbf{n}^\circ)\, dS = \iint_S P\,dy\,dz + Q\,dz\,dx + R\,dx\,dy$（$d\mathbf{S} = \mathbf{n}^\circ dS = (dy\,dz, dz\,dx, dx\,dy)$）。<!-- src: Chapter13.1-2#p017; type: compressed -->
- 反向/反侧变号：$\int_{L_{BA}} = -\int_{L_{AB}}$；$\iint_{S^-} = -\iint_{S^+}$；其余性质（线性性、可加性）同第一类。<!-- src: Chapter13.1-2#p008 + Chapter13.1-2#p018; type: compressed -->
- 物理意义：曲线积分=变力做功（闭曲线为环流量 $\Phi = \oint_L \mathbf{v} \cdot d\mathbf{r}$）；曲面积分=体积流量（封闭曲面为通量）。<!-- src: Chapter13.1-2#p006 + Chapter13.1-2#p008 + Chapter13.1-2#p016 + Chapter13.1-2#p018; type: compressed -->

## 计算公式

- 曲线参数化：$L: x{=}x(t), y{=}y(t),\ t: \alpha \to \beta$ ⟹ $\int_L P\,dx + Q\,dy = \int_\alpha^\beta [P x'(t) + Q y'(t)]\, dt$；$y = y(x), x: a \to b$ 时 $= \int_a^b [P + Q y'(x)]\, dx$；$L$ 平行 $x$ 轴 ⟹ $\int_L Q\,dy = 0$。<!-- src: Chapter13.1-2#p010; type: compressed -->
- 曲面参数化：$\iint_S P\,dy\,dz + Q\,dz\,dx + R\,dx\,dy = \pm\iint_D (PA + QB + RC)\, du\,dv$，其中 $(A,B,C) = \mathbf{r}_u \times \mathbf{r}_v$，$\pm$ 由指定侧法向量定。<!-- src: Chapter13.1-2#p019; type: compressed -->
- 合一投影法（$z = z(x,y)$）：$= \pm\iint_D (-P z_x - Q z_y + R)\, dx\,dy$；只含 $R\,dx\,dy$ 时 $= \pm\iint_D R(x, y, z(x,y))\, dx\,dy$（上侧 $+$ / 下侧 $-$）；母线平行 $z$ 轴柱面上 $\iint_S R\,dx\,dy = 0$。<!-- src: Chapter13.1-2#p019 + Chapter13.1-2#p020; type: compressed -->

## 三大公式

- **Green**：$\oint_{\partial D^+} P\,dx + Q\,dy = \iint_D \left( \dfrac{\partial Q}{\partial x} - \dfrac{\partial P}{\partial y} \right) dx\,dy$（$D$ 为平面有界闭域，$\mathbf{v}=(P,Q)$ 光滑、边界分段光滑）；面积 $S = \dfrac{1}{2}\oint_{\partial D^+} x\,dy - y\,dx$。<!-- src: Chapter13.3-5#p002 + Chapter13.3-5#p003; type: compressed -->
- **Gauss**：$\iint_{\partial\Omega^+} P\,dy\,dz + Q\,dz\,dx + R\,dx\,dy = \iiint_\Omega \left( \dfrac{\partial P}{\partial x} + \dfrac{\partial Q}{\partial y} + \dfrac{\partial R}{\partial z} \right) dV$（$\Omega$ 为空间有界闭域，$\mathbf{v}$ 光滑、$\partial\Omega$ 分片光滑闭曲面）；体积 $V(\Omega) = \dfrac{1}{3}\iint_{\partial\Omega^+} x\,dy\,dz + y\,dz\,dx + z\,dx\,dy$。<!-- src: Chapter13.3-5#p011 + Chapter13.3-5#p013; type: compressed -->
- **Stokes**：$\oint_{\partial S} P\,dx + Q\,dy + R\,dz = \iint_S \left( \frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z} \right) dy\,dz + \left( \frac{\partial P}{\partial z} - \frac{\partial R}{\partial x} \right) dz\,dx + \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) dx\,dy$，$\partial S$ 方向与 $S$ 侧向按**右手法则**；可用行列式（首行 $dy\,dz, dz\,dx, dx\,dy$ 或 $\cos\alpha, \cos\beta, \cos\gamma$ 加 $dS$）记忆。<!-- src: Chapter13.3-5#p019 + Chapter13.3-5#p020; type: compressed -->
- 向量形式：Green（通量场/外法向量形式）$\oint_{\partial D} \mathbf{v} \cdot \mathbf{n}^\circ ds = \iint_D \nabla \cdot \mathbf{v}\, d\sigma$；Gauss $\iint_{\partial\Omega^+} \mathbf{v} \cdot d\mathbf{S} = \iiint_\Omega \operatorname{div} \mathbf{v}\, dV$；Stokes $\oint_{\partial S} \mathbf{v} \cdot d\mathbf{r} = \iint_S \operatorname{rot} \mathbf{v} \cdot d\mathbf{S}$。<!-- src: Chapter13.3-5#p004 + Chapter13.3-5#p017 + Chapter13.3-5#p024; type: compressed -->

## 散度与旋度

- $\operatorname{div} \mathbf{v} = \nabla \cdot \mathbf{v} = \dfrac{\partial P}{\partial x} + \dfrac{\partial Q}{\partial y} + \dfrac{\partial R}{\partial z}$；物理意义 $\operatorname{div} \mathbf{v}(M) = \lim\limits_{\Omega \to M} \dfrac{1}{\operatorname{Vol}(\Omega)} \iint_{\partial\Omega^+} \mathbf{v} \cdot d\mathbf{S}$。<!-- src: Chapter13.3-5#p016 + Chapter13.3-5#p017; type: compressed -->
- $\operatorname{rot} \mathbf{v} = \nabla \times \mathbf{v} = \left( \dfrac{\partial R}{\partial y} - \dfrac{\partial Q}{\partial z},\ \dfrac{\partial P}{\partial z} - \dfrac{\partial R}{\partial x},\ \dfrac{\partial Q}{\partial x} - \dfrac{\partial P}{\partial y} \right)$；物理意义 $\operatorname{rot} \mathbf{v} \cdot \mathbf{n}^\circ \big|_M = \lim\limits_{S \to M} \dfrac{1}{\operatorname{Area}(S)} \oint_{\partial S} \mathbf{v} \cdot d\mathbf{r}$。<!-- src: Chapter13.3-5#p023 + Chapter13.3-5#p024; type: compressed -->

## 路径无关与全微分（单连通区域 $D$ 内光滑场）

- **四条等价**：① 任一闭曲线 $\oint_L P\,dx + Q\,dy = 0$ ⟺ ② 曲线积分与路径无关 ⟺ ③ $P\,dx + Q\,dy = d\varphi$（存在原函数）⟺ ④ $\dfrac{\partial Q}{\partial x} \equiv \dfrac{\partial P}{\partial y}$。<!-- src: Chapter13.3-5#p006; type: compressed -->
- 路径无关时 $\int_A^B \mathbf{v} \cdot d\mathbf{r} = \varphi(B) - \varphi(A)$，$\mathbf{v} = \nabla\varphi$；原函数求法 $\varphi(x,y) = \int_{(x_0,y_0)}^{(x,y)} P\,dx + Q\,dy$（全微分求积）。<!-- src: Chapter13.3-5#p007 + Chapter13.3-5#p008; type: compressed -->
- 全微分方程 $P\,dx + Q\,dy = 0$（判别式 $\partial Q/\partial x = \partial P/\partial y$）：求出原函数 $\varphi$，通解 $\varphi(x,y) = C$。<!-- src: Chapter13.3-5#p009; type: compressed -->

## 易错点与方法提醒

- 第二类积分**变号**规则只随定向/定侧改变，两类积分形式不同；$Q = 0$ 的 $\int_L P\,dx$、$P = Q = 0$ 的 $\iint_S R\,dx\,dy$ 仍是第二类。<!-- src: Chapter13.1-2#p009 + Chapter13.1-2#p018; type: compressed -->
- 用 Green/Gauss 前检查：曲线/曲面是否**封闭**（不闭先补线/补面再扣除）、场在区域内是否**光滑**（含奇点时不能直接用，如 $\dfrac{x\,dy - y\,dx}{x^2 + y^2}$ 在原点、$\dfrac{\cos(\mathbf{r},\mathbf{n})}{\|\mathbf{r}\|^2}$ 在原点）。<!-- src: Chapter13.3-5#p003ex2 + Chapter13.3-5#p004ex3 + Chapter13.3-5#p014ex2 + Chapter13.3-5#p015ex4; type: compressed -->
- 投影法定号：上侧 $+$、下侧 $-$；封闭曲面默认**外侧**为正；Stokes 中 $\partial S$ 与 $\mathbf{n}^\circ$ 按右手法则配套。<!-- src: Chapter13.1-2#p020 + Chapter13.1-2#p015 + Chapter13.3-5#p024; type: compressed -->
- 常用结论性例题答案：椭球面外侧 $\iint x\,dy\,dz + y\,dz\,dx + z\,dx\,dy = 4\pi abc$；包围原点封闭曲面 $\iint_S \dfrac{\cos(\mathbf{r},\mathbf{n})}{\|\mathbf{r}\|^2} dS = 4\pi$。<!-- src: Chapter13.3-5#p013ex1 + Chapter13.3-5#p015ex4; type: compressed -->
