---
title: "离散数学 · 图论 · 速览"
description: "离散数学课程笔记：离散数学 · 图论 · 速览。"
---

<div class="note-meta"><a href="/courses/discrete-math/">离散数学目录</a><a href="/courses/discrete-math/chapter-01/">阅读详版</a><a href="/downloads/discrete-math/chapter-01-quick.md" download>下载 Markdown</a></div>

## Graphs and Degree

- **Graph** $(V,E)$: $V$ vertices, $E$ edges; each edge has two **endpoints** (possibly identical) and **connects** them. <!-- src: DM-N-302#p001; ref: Definition 1; type: compressed -->
- Three classification axes: directed/undirected; multiple edges（重边/平行边）or not; loops（自环）or not. <!-- src: DM-N-302#p002; type: compressed -->
- In an **undirected** graph: $u,v$ **adjacent** (neighbours) ⇔ some edge has endpoints $u,v$; that edge is **incident** with $u,v$; $\mathcal{N}(v)$ = all neighbours, $\mathcal{N}(A)=\bigcup_{v\in A}\mathcal{N}(v)$. <!-- src: DM-N-302#p002; ref: Definitions 2-3; type: compressed -->
- In an **undirected** graph: $\deg(v)$（度）= number of incident edges, **a loop counts twice**. <!-- src: DM-N-302#p002; ref: Definition 4; type: compressed -->
- **Handshaking（握手定理）**: finite undirected ⇒ $2|E| = \sum_{v\in V}\deg(v)$ (proof: swap summation order over $v$ and $e$). ⇒ number of odd-degree vertices is **even**. <!-- src: DM-N-302#p002; ref: Theorem 5 + Corollary 6; type: compressed -->
- Directed edge $u \to v$: $u$ adjacent to $v$, $v$ adjacent from $u$; $u$ **initial**, $v$ **terminal** vertex; $\deg^-(v)$ in-degree, $\deg^+(v)$ out-degree; finite directed ⇒ $|E| = \sum\deg^+(v) = \sum\deg^-(v)$. <!-- src: DM-N-302#p002; ref: Definitions 7-8, Theorem 9; type: compressed -->
- **Path** of length $n\geqslant 0$ from $u$ to $v$: edges $e_1,\ldots,e_n$ with vertices $u=x_0,\ldots,x_n=v$, endpoints of $e_i$ are $x_{i-1},x_i$ (directed: $e_i$ from $x_{i-1}$ to $x_i$); **simple** = no duplicate edges; **circuit** = path of **positive** length $u$ to $u$. <!-- src: DM-N-302#p003; ref: Definitions 10-15; type: compressed -->

## Connectivity

- $u,v$ **connected** ⇔ path from $u$ to $v$; connectivity holds to itself, is symmetric and transfers along chains; **connected graph（连通图）** ⇔ every pair connected. <!-- src: DM-N-309#p001; ref: Definitions 1, 3, Theorem 2; type: compressed -->
- **Subgraph（子图）**: $V'\subseteq V$, $E'\subseteq E$; **proper** if $\neq G$; **induced（导出子图）** by $W$: all vertices of $W$ + all edges with both endpoints in $W$. <!-- src: DM-N-309#p001; ref: Definitions 4, 7; type: compressed -->
- A path induces a connected subgraph; two connected subgraphs sharing a vertex have a connected union. <!-- src: DM-N-309#p001; ref: Theorems 5-6; type: compressed -->
- **Connected component（连通块）** = connected subgraph not a proper subgraph of another connected subgraph; each is an induced subgraph of $\{v : v \text{ connected to } u\}$. <!-- src: DM-N-309#p001; ref: Definition 8, Theorem 9; type: compressed -->
- **Strongly connected（强连通）** directed graph: paths both ways for every pair; **strongly-connected component（强连通块）** = strongly-connected subgraph not a proper subgraph of another one, each an induced subgraph of $\{v : v \text{ mutually reachable from } u\}$; mutual reachability holds reflexively, symmetrically, transitively. <!-- src: DM-N-309#p002; ref: Definitions 10-13, Theorems 14-15; type: compressed -->
- Between two strongly-connected components reachability is uniform ($v_1$ reachable from $u_1$ iff $v_2$ from $u_2$); a circuit's edges and vertices lie in one strongly-connected component. <!-- src: DM-N-309#p002; ref: Theorems 16-17; type: compressed -->
- Adding edge $e_0$ ($u$–$v$): never destroys connectivity; if $u,v$ already connected, connectivity unchanged; if not: $x$ connected to $u$ in $G'$ ⇔ to $v$ in $G'$ ⇔ to one of $u,v$ in $G$; any newly connected $x,y$ become connected together with $u,v$ in $G'$. <!-- src: DM-N-310#p001; ref: Theorem 1; type: compressed -->

## Trees

- **Tree** = connected nonempty undirected graph with **no simple circuits**; add edge between existing vertices ⇒ simple circuit; remove edge ⇒ disconnected; leaf (unrooted) = degree-$1$ vertex; $\geqslant 2$ vertices ⇒ $\geqslant 2$ leaves; $n$ vertices ⇒ $n-1$ edges. <!-- src: DM-N-310#p001; ref: Definitions 2, 5, Theorems 3-8; type: compressed -->
- **Six equivalent characterizations** of finite $G$: ① tree; ② connected ∧ $|E|=|V|-1$; ③ no simple circuits ∧ $|E|=|V|-1$; ④ connected ∧ every edge is a cut edge; ⑤ no simple circuits ∧ adding any edge between vertices of $G$ creates one; ⑥ unique simple path between any two vertices. <!-- src: DM-N-302#p001 + DM-N-310#p001 + DM-N-310#p002 + DM-N-316#p001; type: synthesized -->

## Spanning Trees and MST

- **Spanning tree**: subgraph that is a tree containing **every vertex**; graph connected ⇔ spanning tree exists (connected ⇒ exists: repeatedly delete one edge of a simple circuit until vertices = edges + 1). <!-- src: DM-N-316#p001; ref: Definition 1, Theorem 2; type: compressed -->
- **Weighted graph**: each edge gets a (real) number; **MST**: spanning tree with minimum total weight (finite connected weighted graph). <!-- src: DM-N-316#p001; ref: Definitions 3-4; type: compressed -->
- **Prim**: for a finite connected weighted graph, start from a singleton vertex $T_0$; repeatedly add the minimum-weight edge keeping $T_n + e'$ a tree (edge crosses $V_n$ to $V\backslash V_n$, vertex side added); after $|V|-1$ steps, MST. <!-- src: DM-N-316#p001 + DM-N-316#p002; ref: Algorithm 1; type: compressed -->
- **Kruskal**: for a finite connected weighted graph, start from $(V,\varnothing)$; repeatedly add the minimum-weight edge that creates **no simple circuit**; after $|V|-1$ steps, MST. <!-- src: DM-N-316#p001 + DM-N-316#p002; ref: Algorithm 2; type: compressed -->
- Correctness pattern (both): induction — there is always an MST $T^*$ containing the current partial graph; Prim's induction step is the **edge exchange**: a $T^*$-path between $e_{n+1}$'s endpoints must contain an edge $e^*$ leaving $V_n$; $w(e^*)\geqslant w(e_{n+1})$ (choice) and $w(e^*)\leqslant w(e_{n+1})$ ($T^*$ is minimum), so swapping keeps an MST; Kruskal's idea: $e_n$ is "necessary" — lighter edges cannot connect its endpoints without a simple circuit. <!-- src: DM-N-316#p002 + DM-N-316#p003; type: compressed -->

## Rooted Trees

- **Rooted tree** = tree + designated **root** $r$; **level** of $v$ = length of unique simple path $r \to v$; **height** = max level; **parent** of $v\neq r$ = unique neighbour on the $r$–$v$ path, $v$ its **child**; **siblings** = same parent; **ancestors** of $v \neq r$ = vertices on the $r$–$v$ path excluding $v$, including $r$; **descendants** of $v$ = vertices with $v$ as ancestor. <!-- src: DM-N-323#p001; ref: Definitions 1-5; type: compressed -->
- Ancestor/descendant relations are transitive; $u$ is $v$'s ancestor ⇔ a parent chain $w_0=u,\ldots,w_k=v$ exists; the unique simple path between descendants of $u$ stays within $u$'s descendants and $u$. <!-- src: DM-N-323#p001 + DM-N-323#p002; ref: Theorems 6, 9, Corollary 7, Lemmas 8, 10, Corollary 13; type: compressed -->
- Rooted-tree **leaf** = no children (≠ unrooted notion: degree $1$), otherwise **internal vertex**; **subtree** at $v$ = induced subgraph of $v$ + descendants (it is a tree). <!-- src: DM-N-323#p002 + DM-N-310#p001; ref: Definitions 11-12, Theorem 14; type: compressed -->
- **$m$-ary tree（$m$ 叉树）**: every internal vertex has $\leqslant m$ children (binary = 2-ary); height $h$ ⇒ **at most $m^h$ leaves**. <!-- src: DM-N-323#p002; ref: Definition 15, Theorem 16; type: compressed -->

## Depth-First Search（深度优先搜索）

- Procedure: fix a start vertex; **augment a simple path** until stuck; **trace back** to the deepest vertex with an augmentable edge; repeat. Moves are **forward / backward steps**; edge used by a forward move = **tree edge**, otherwise **back edge**. <!-- src: DM-N-323#p003; ref: Algorithm 1, Definition 18; type: compressed -->
- Formal DFS conditions ($k$-th step $v_{k-1}\to v_k$ via $e_k$, start $u$): $v_0=u$; if an unvisited neighbour of $v_{k-1}$ exists, the move **must** be forward; forward steps reach only unvisited vertices; a backward step retraces the forward edge that first entered the current vertex ($v_k=v_{i-1}$, $e_k=e_i$). <!-- src: DM-N-325#p001; type: compressed -->
- Tree edges of a DFS on a connected graph form a **spanning tree** (rooted at the start vertex); a forward step goes to a child. <!-- src: DM-N-325#p001; ref: Theorem 1, Corollary 2; type: compressed -->
- Each $v \neq u$ is a forward step's terminal **exactly once** and a backward step's start **exactly once**; with $n=|V|$, total: $n-1$ forward + $n-1$ backward steps. <!-- src: DM-N-325#p001 + DM-N-325#p002; ref: Lemma 3, Corollaries 5-6; type: compressed -->
- Visited vertices split into three categories: the start vertex / entered (one forward terminal) but not yet left / entered and left (one backward start); a simple path $v_0 \to v_k$ uses only forward edges and passes exactly through the start and the not-yet-left vertices. <!-- src: DM-N-325#p001 + DM-N-325#p002; ref: Lemma 4; type: compressed -->
- Between two visits of $u$ all visited vertices are $u$'s descendants or $u$ itself; a **back edge** always joins a vertex to an ancestor, a descendant, or itself. <!-- src: DM-N-325#p002; ref: Corollary 7, Theorem 8; type: compressed -->
- **Tarjan bridges**: DFS computing $\mathrm{dfn}(u)$ (visit time) and $\mathrm{low}(u) = \min$ of own time, children's $\mathrm{low}$, and $\mathrm{dfn}$ of other neighbours (entering edge $e_0$ excluded); after recursing into child $v$: edge $u$–$v$ is reported as a **bridge** when $\mathrm{low}(v) = \mathrm{dfn}(v)$. <!-- src: DM-N-325#p002; ref: Algorithm 1 (Tarjan); type: compressed -->
