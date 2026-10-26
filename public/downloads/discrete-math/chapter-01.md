# 离散数学 · 图论

> Arietids Learn · 个人课程复习笔记
> 在线阅读：https://learn.arietids.net/courses/discrete-math/chapter-01/

## 1 Graphs and Basic Definitions

### 1.1 Graph

- **Graph**: a *graph* is an ordered pair $(V, E)$ where $V$ is a set of **vertices** and $E$ is a set of **edges**. <!-- src: DM-N-302#p001; ref: Definition 1; type: direct -->
- Every edge has two vertices associated with it, called its **endpoints**; these two vertices can be different or identical; an edge is said to **connect** its endpoints. <!-- src: DM-N-302#p001; ref: Definition 1; type: direct -->
- Remark: $V$ and $E$ can be infinite, but the course focuses on finite cases. <!-- src: DM-N-302#p001; type: direct -->

### 1.2 Different kinds of graphs

Graphs are classified along three axes: <!-- src: DM-N-302#p002; type: compressed -->

- **Directed / Undirected**; <!-- src: DM-N-302#p002; type: direct -->
- with or without **multiple edges**（重边，a.k.a. parallel edges，平行边）; <!-- src: DM-N-302#p002; type: direct -->
- with or without **loops**（自环）. <!-- src: DM-N-302#p002; type: direct -->

## 2 Degree

### 2.1 Adjacency, incidence, neighbourhood, degree (undirected)

- **Adjacency**: if $G=(V,E)$ is an undirected graph, two vertices $u,v \in V$ are **adjacent** (or **neighbours**) in $G$ if there is an edge $e \in E$ such that the endpoints of $e$ are $u, v$. <!-- src: DM-N-302#p002; ref: Definition 2; type: direct -->
- **Incidence**: if the endpoints of an edge $e$ are $u, v$, then $e$ is **incident** with $u, v$. <!-- src: DM-N-302#p002; ref: Definition 2; type: direct -->
- **Neighbourhood**: $\mathcal{N}(v)$ is the set of all neighbours of $v$; for a vertex set $A \subseteq V$, $\mathcal{N}(A) := \bigcup_{v \in A} \mathcal{N}(v)$. <!-- src: DM-N-302#p002; ref: Definition 3; type: direct -->
- **Degree（度）**: for an undirected graph $G=(V,E)$, the **degree** of a vertex $v \in V$ is the number of edges incident with it, **where a loop associated with $\{v,v\}$ contributes twice** to the degree of $v$: <!-- src: DM-N-302#p002; ref: Definition 4; type: direct -->

$$
\deg(v) = \big|\{e \mid v \text{ is } e\text{'s first endpoint}\}\big| + \big|\{e \mid v \text{ is } e\text{'s second endpoint}\}\big| = \sum_{v \text{ is } e\text{'s first endpoint}} 1 + \sum_{v \text{ is } e\text{'s second endpoint}} 1
$$


<!-- src: DM-N-302#p002; ref: Definition 4; type: direct -->

### 2.2 The Handshaking Theorem（握手定理）

- **Handshaking Theorem**: if $G=(V,E)$ is a **finite undirected** graph, then $2 \cdot |E| = \sum_{v \in V} \deg(v)$. <!-- src: DM-N-302#p002; ref: Theorem 5; type: direct -->
- Proof idea (double counting by exchanging summation order — in the first two lines the inner sums run over edges $e$, after the exchange the inner sums run over vertices $v$): <!-- src: DM-N-302#p002; ref: Theorem 5; type: compressed -->

$$
\sum_{v \in V} \deg(v) = \sum_{v \in V}\Big(\sum_{\mathrm{first}(e)=v} 1 + \sum_{\mathrm{second}(e)=v} 1\Big) = \sum_{v}\sum_{\mathrm{first}(e)=v} 1 + \sum_{v}\sum_{\mathrm{second}(e)=v} 1 = \sum_{e}\sum_{\mathrm{first}(e)=v} 1 + \sum_{e}\sum_{\mathrm{second}(e)=v} 1 = \sum_e 1 + \sum_e 1 = 2 \cdot |E|
$$


<!-- src: DM-N-302#p002; ref: Theorem 5; type: compressed -->

- **Corollary**: an undirected graph has an **even number of vertices of odd degree**. <!-- src: DM-N-302#p002; ref: Corollary 6; type: direct -->

### 2.3 Directed edges, in-degree and out-degree

- **Directed edges**: if $G=(V,E)$ is a directed graph and $e \in E$ is from $u$ to $v$, then: $u$ is **adjacent to** $v$, and $v$ is **adjacent from** $u$; $u$ is the **initial** vertex of the edge, while $v$ is the **terminal** (or **end**) vertex of the edge. <!-- src: DM-N-302#p002; ref: Definition 7; type: direct -->
- **In-degree / out-degree**: if $G=(V,E)$ is a directed graph and $v \in V$: <!-- src: DM-N-302#p002; ref: Definition 8; type: direct -->
  - $\deg^-(v) := |\{e \in E \mid e \text{ is associated with } (u',v') \text{ and } v = v'\}|$ (**in-degree**); <!-- src: DM-N-302#p002; ref: Definition 8; type: direct -->
  - $\deg^+(v) := |\{e \in E \mid e \text{ is associated with } (u',v') \text{ and } v = u'\}|$ (**out-degree**). <!-- src: DM-N-302#p002; ref: Definition 8; type: direct -->
- **Degree sum of directed graphs**: if $G=(V,E)$ is a finite directed graph, then $|E| = \sum_{v \in V} \deg^+(v) = \sum_{v \in V} \deg^-(v)$. <!-- src: DM-N-302#p002; ref: Theorem 9; type: direct -->

## 3 Paths and Circuits

- **Path (undirected)**: for an undirected graph $G=(V,E)$ and $u,v \in V$, a **path** of length $n$ ($n \geqslant 0$) from $u$ to $v$ in $G$ is a finite sequence $e_1,\ldots,e_n$ of edges in $E$ such that there exists a finite sequence of vertices $u = x_0,\ x_1,\ \ldots,\ x_{n-1},\ x_n = v$ such that the endpoints of each $e_i$ are $x_{i-1}, x_i$. <!-- src: DM-N-302#p003; ref: Definition 10; type: direct -->
- The path $e_1,\ldots,e_n$ is **simple** if it does not contain duplicate edges. The path **traverses** these edges and **passes through** the vertices $x_1,\ \ldots,\ x_{n-1}$. <!-- src: DM-N-302#p003; ref: Definition 10; type: direct -->
- **Notation**: we write the path $e_1,\ldots,e_n$ as $x_0, x_1, \ldots, x_{n-1}, x_n$ if $G$ is simple. <!-- src: DM-N-302#p003; ref: Notation 11; type: direct -->
- **Circuit (undirected)**: a path of **positive** length from $u$ to $u$ is a **circuit**. The circuit is **simple** if it does not contain duplicate edges. <!-- src: DM-N-302#p003; ref: Definition 12; type: direct -->
- **Path (directed)**: for a directed graph $G=(V,E)$ and $u,v \in V$, a **path** of length $n$ ($n \geqslant 0$) from $u$ to $v$ is a finite sequence $e_1,\ldots,e_n$ of edges in $E$ such that there exists a finite sequence of vertices $u = x_0,\ x_1,\ \ldots,\ x_{n-1},\ x_n = v$ such that each $e_i$ is **from $x_{i-1}$ to $x_i$**; *simple*, *traverses* and *passes through* are defined in the same way as in the undirected case. <!-- src: DM-N-302#p003; ref: Definition 13; type: compressed -->
- **Notation**: we write the path $e_1,\ldots,e_n$ as $x_0, x_1, \ldots, x_{n-1}, x_n$ if $G$ is a simple directed graph. <!-- src: DM-N-302#p003; ref: Notation 14; type: direct -->
- **Circuit (directed)**: a path of **positive** length from $u$ to $u$ is a **circuit**; it is **simple** if it does not contain duplicate edges. <!-- src: DM-N-302#p003; ref: Definition 15; type: direct -->

## 4 Connectivity of Undirected Graphs

### 4.1 Connected vertices and connected graphs

- **Connected vertices**: in an undirected graph $G=(V,E)$, two vertices $u, v \in V$ are **connected** if there is a path from $u$ to $v$ in $G$. <!-- src: DM-N-309#p001; ref: Definition 1; type: direct -->
- Basic properties of connectivity in an undirected graph $G=(V,E)$: <!-- src: DM-N-309#p001; ref: Theorem 2; type: direct -->
  - for any $u \in V$, $u$ is connected to itself;
  - for any $u, v \in V$, if $u$ is connected to $v$, then $v$ is connected to $u$;
  - for any $u, v, w \in V$, if $u$ is connected to $v$ and $v$ is connected to $w$, then $u$ is connected to $w$.
- **Connected graph（连通图）**: an undirected graph $G=(V,E)$ is **connected** if every pair of vertices in $V$ is connected; otherwise it is **disconnected**. <!-- src: DM-N-309#p001; ref: Definition 3; type: direct -->

### 4.2 Subgraphs and connected components

- **Subgraph（子图）**: a **subgraph** of a graph $G=(V,E)$ is a graph $G'=(V',E')$ such that (i) $V' \subseteq V$ and (ii) $E' \subseteq E$. A subgraph $G'$ of $G$ is **proper** if $G \neq G'$. <!-- src: DM-N-309#p001; ref: Definition 4; type: direct -->
- A path induces a connected subgraph: if $G=(V,E)$ is an undirected graph and $e_1, e_2, \ldots, e_n$ is a path in $G$ from $u$ to $v$ that traverses $u = x_0, x_1, \ldots, x_{n-1}, x_n = v$, then $G'=(V',E')$ with $V' = \{x_0, x_1, \ldots, x_n\}$ and $E' = \{e_1, \ldots, e_n\}$ is a connected subgraph of $G$. <!-- src: DM-N-309#p001; ref: Theorem 5; type: compressed -->
- Union of overlapping connected subgraphs: if $G=(V,E)$ is an undirected graph, $G'=(V',E')$ and $G''=(V'',E'')$ are two connected subgraphs of $G$, and $V' \cap V'' \neq \varnothing$, then $(V' \cup V'',\ E' \cup E'')$ is also a connected subgraph of $G$. <!-- src: DM-N-309#p001; ref: Theorem 6; type: compressed -->
- **Induced subgraph（导出子图）**: for $W \subseteq V$, the subgraph **induced** by $W$ consists of all the vertices from $W$ and all the edges from $E$ whose endpoints both lie in $W$. <!-- src: DM-N-309#p001; ref: Definition 7; type: direct -->
- **Connected component（连通块）**: a **connected component** of an undirected graph $G$ is a connected subgraph of $G$ that is **not a proper subgraph of another connected subgraph** of $G$. <!-- src: DM-N-309#p001; ref: Definition 8; type: direct -->
- **Structure of connected components**: if $G$ is a nonempty undirected graph, then $G$'s connected components are **induced subgraphs** of $V$'s subsets of the form $\{v \in V : v \text{ is connected to } u\}$ for some $u \in V$. <!-- src: DM-N-309#p001; ref: Theorem 9; type: direct -->
- Proof structure (two directions, four obligations): <!-- src: DM-N-309#p002; ref: Theorem 9; type: compressed -->
  - 1\) Suppose $G'=(V',E')$ is a connected component of $G$: (1a) prove that if $u \in V'$, then $V' = \{v \in V : v \text{ is connected to } u\}$; (1b) prove that $E'$ are all edges between two vertices in $V'$.
  - 2\) Suppose $V' = \{v \in V : v \text{ is connected to } u\}$ and $E'$ are all edges between two vertices in $V'$: (2a) prove that $G'=(V',E')$ is a connected graph; (2b) prove that $G'$ is not a proper subgraph of another connected subgraph of $G$.

## 5 Reachability of Directed Graphs

- **Strongly-connected directed graph（强连通图）**: a directed graph $G=(V,E)$ is **strongly connected** if for every pair of vertices $(u,v)$, there is a path from $u$ to $v$ **and** a path from $v$ to $u$. <!-- src: DM-N-309#p002; ref: Definition 10; type: direct -->
- **Strongly-connected component（强连通块）**: a **strongly-connected component** of a directed graph $G$ is a strongly-connected subgraph of $G$ that is not a proper subgraph of another strongly-connected subgraph of $G$. <!-- src: DM-N-309#p002; ref: Definition 11; type: direct -->
- **Reachability**: a vertex $v \in V$ is **reachable** from $u \in V$ if there is at least a path from $u$ to $v$ in $G$. <!-- src: DM-N-309#p002; ref: Definition 12; type: direct -->
- **Mutual reachability**: two vertices $u, v \in V$ are **mutually reachable** if there are paths both from $u$ to $v$ and from $v$ to $u$ in $G$. <!-- src: DM-N-309#p002; ref: Definition 13; type: direct -->
- Basic properties of mutual reachability in a directed graph $G$: <!-- src: DM-N-309#p002; ref: Theorem 14; type: direct -->
  - for any $u \in V$, $u$ and itself are mutually reachable;
  - for any $u, v \in V$, if $u$ and $v$ are mutually reachable, then $v$ and $u$ are mutually reachable;
  - for any $u, v, w \in V$, if $u$ and $v$ are mutually reachable, and $v$ and $w$ are mutually reachable, then $u$ and $w$ are mutually reachable.
- **Structure of strongly-connected components**: given a nonempty directed graph $G$, its strongly-connected components are **induced subgraphs** of $V$'s subsets of the form $\{v \in V : v \text{ is mutually reachable from } u\}$ for some $u \in V$. <!-- src: DM-N-309#p002; ref: Theorem 15; type: direct -->
- **Reachability between components is uniform**: if $G'=(V',E')$ and $G''=(V'',E'')$ are two strongly-connected components of $G$, then for any $u_1, u_2 \in V'$ and $v_1, v_2 \in V''$: $v_1$ is reachable from $u_1$ iff $v_2$ is reachable from $u_2$. <!-- src: DM-N-309#p002; ref: Theorem 16; type: direct -->
- **Circuits live inside one component**: if $e_1, e_2, \ldots, e_n$ is a circuit of a directed graph $G$ passing through $x_1, x_2, \ldots, x_n$, then $e_1, \ldots, e_n$ and $x_1, \ldots, x_n$ belong to the same strongly connected component. <!-- src: DM-N-309#p002; ref: Theorem 17; type: direct -->

## 6 Connectivity against Edge Addition / Removal

- Setting: $G=(V,E)$ and $G'=(V, E \cup \{e_0\})$ are two undirected graphs, where $e_0 \notin E$ is an additional edge connecting $u$ and $v$. Then: <!-- src: DM-N-310#p001; ref: Theorem 1; type: direct -->
  - For any $x, y \in V$: if $x$ and $y$ are connected in $G$, then $x$ and $y$ are still connected in $G'$ (adding an edge never destroys connectivity).
  - If $u$ **is** connected to $v$ in $G$, then: for any $x$ and $y$, $x$ and $y$ are connected in $G$ **iff** $x$ and $y$ are connected in $G'$.
  - If $u$ is **not** connected to $v$ in $G$, then:
    - for any $x \in V$: $x$ is connected to $u$ in $G'$, iff $x$ is connected to $v$ in $G'$, iff $x$ is connected to one of $u$ and $v$ in $G$;
    - for any $x$ and $y$: if $x$ and $y$ are not connected in $G$ but they are connected in $G'$, then $x$, $y$, $u$ and $v$ are all connected in $G'$.

## 7 Trees

### 7.1 Definition and basic properties

- **Tree**: a **tree** is a **connected (nonempty) undirected graph without simple circuits**. <!-- src: DM-N-310#p001; ref: Definition 2; type: direct -->
- **Adding an edge**: if adding an edge between vertices of a tree, the new graph will have a simple circuit. <!-- src: DM-N-310#p001; ref: Theorem 3; type: compressed -->
- **Removing an edge**: if removing an edge from a tree, the new graph will be unconnected. <!-- src: DM-N-310#p001; ref: Theorem 4; type: direct -->
- **Leaf (in an unrooted tree)**: a vertex is a **leaf** in a tree if its degree is $1$. <!-- src: DM-N-310#p001; ref: Definition 5; type: direct -->
- If a tree has at least two vertices, then it has at least one leaf; moreover it has at least two leaves. <!-- src: DM-N-310#p001; ref: Theorem 6 + Corollary 7; type: compressed -->
- **Edge count**: a tree with $n$ vertices has $n-1$ edges. <!-- src: DM-N-310#p001; ref: Theorem 8; type: direct -->
- An undirected graph **with no simple circuit** is a tree if adding an arbitrary edge between vertices of the graph generates a simple circuit in the new graph. <!-- src: DM-N-310#p001; ref: Theorem 9; type: compressed -->
- A **connected** undirected graph is a tree if removing any edge makes the new graph disconnected. <!-- src: DM-N-310#p001; ref: Theorem 10; type: direct -->

### 7.2 Equivalent characterizations of trees

All statements below about a finite undirected graph $G=(V,E)$ are equivalent: <!-- src: DM-N-302#p001 + DM-N-310#p001 + DM-N-310#p002 + DM-N-316#p001; type: synthesized -->

- $G$ is a tree, i.e. $G$ is connected but contains no simple circuits.
- $G$ is connected and $|E| = |V| - 1$.
- $G$ contains no simple circuits and $|E| = |V| - 1$.
- $G$ is connected, but every edge in $E$ is a cut edge.
- $G$ contains no simple circuits, and adding any edge between vertices of $G$ generates a simple circuit.
- There is a unique simple path between any two of $G$'s vertices.

## 8 Spanning Trees and Minimum Spanning Trees

### 8.1 Spanning trees

- **Spanning tree**: a **spanning tree** of an undirected graph $G$ is a subgraph of $G$ that is a tree **containing every vertex of $G$**. <!-- src: DM-N-316#p001; ref: Definition 1; type: direct -->
- **Existence**: an undirected graph is connected **if and only if** it has a spanning tree. <!-- src: DM-N-316#p001; ref: Theorem 2; type: direct -->
- Proof: <!-- src: DM-N-316#p001; ref: Theorem 2; type: compressed -->
  - ($\Leftarrow$) If a spanning tree exists, then there is a path in the spanning tree between any two vertices, so the graph is connected.
  - ($\Rightarrow$) Suppose $G_0 = G$ is connected. If $G_0$ contains a simple circuit, remove one edge from the simple circuit, generating $G_1$; $G_1$ must still be connected. Repeat this process to construct $G_2, G_3, \ldots$; the number of edges keeps decreasing, so there must be a natural number $k$ such that the number of vertices of $G_k$ is one more than its edges — that $G_k$ must be a tree.

### 8.2 Weighted graphs and minimum spanning trees

- **Weighted undirected graph**: a graph $G = (V,E)$ with a function that assigns to each edge a (real) number. <!-- src: DM-N-316#p001; ref: Definition 3; type: direct -->
- **Minimum spanning tree**: for a **connected weighted** graph $G$, a **minimum spanning tree** of $G$ is a spanning tree whose sum of all weights in the tree is the minimum among all spanning trees. <!-- src: DM-N-316#p001; ref: Definition 4; type: direct -->

### 8.3 Prim's Algorithm

- Construct a minimum spanning tree of a finite connected weighted graph $G=(V,E)$ according to the following steps: <!-- src: DM-N-316#p001 + DM-N-316#p002; ref: Algorithm 1; type: compressed -->
  1. Choose the initial tree $T_0 = (V_0, E_0)$ as an arbitrary **singleton vertex with no edges**.
  2. Construct $T_{n+1}$ from $T_n$ by adding an edge $e_{n+1}$ with **minimum weight** among all remaining edges $e'$ satisfying that the graph $T_n$ added with $e'$ **is a tree**.
  3. Finally $T_{|V|-1}$ is a minimum spanning tree.
- **Key step** — find $e_{n+1}$ such that: <!-- src: DM-N-316#p002; type: direct -->
  - $e_{n+1}$ connects two vertices $u_{n+1}$ and $v_{n+1}$, one of which (suppose it is $u_{n+1}$) is in $V_n$ and the other ($v_{n+1}$) is in $V \backslash V_n$;
  - if there are more than one minimum weighted edges, choose an arbitrary one;
  - $T_{n+1} = (V_{n+1}, E_{n+1})$ where $V_{n+1} = V_n \cup \{v_{n+1}\}$ and $E_{n+1} = E_n \cup \{e_{n+1}\}$.
- **Correctness proof**: by induction on $n$ that **there exists a minimum spanning tree $T^*$ such that $T_n$ is a subgraph of $T^*$**. <!-- src: DM-N-316#p002; type: direct -->
  - When $n = 0$: choose an arbitrary minimum spanning tree as $T^*$.
  - When $n = |V|-1$: if there exists a minimum spanning tree $T^*$ such that $T_{|V|-1}$ is a subgraph of $T^*$, then $T^*$ must be $T_{|V|-1}$ itself — done.
  - Induction step: assume there exists a minimum spanning tree $T^*$ such that $T_n$ is a subgraph of $T^*$; show there also exists a minimum spanning tree (maybe different from $T^*$) such that $T_{n+1}$ is a subgraph of it. <!-- src: DM-N-316#p002; type: direct -->
    - Choose an arbitrary minimum spanning tree $T^*$ such that $T_n$ is a subgraph of $T^*$. If $T_{n+1}$ is a subgraph of $T^*$, we are done.
    - Otherwise (**edge exchange**): $e_{n+1}$ is not an edge in $T^*$. Because $T^*$ is a spanning tree, there is a path in $T^*$ between $u_{n+1}$ and $v_{n+1}$. On this path, there must be an edge $e^*$ **leaving $V_n$** ($e^*$ connects a vertex in $V_n$ and a vertex in $V \backslash V_n$) — otherwise there would be a path in $T_n$ between $u_{n+1}$ and $v_{n+1}$, which contradicts the fact that $T_n$ is a tree.
    - Because of the choice of $e_{n+1}$: $w(e^*) \geqslant w(e_{n+1})$. On the other hand, $T^* \backslash \{e^*\} \cup \{e_{n+1}\}$ is a tree; because $T^*$ is a minimum spanning tree: $w(e^*) \leqslant w(e_{n+1})$.
    - Thus, changing $e^*$ to $e_{n+1}$ in $T^*$ gives another minimum spanning tree containing $T_{n+1}$ as a subgraph.

### 8.4 Kruskal's Algorithm

- Construct a minimum spanning tree of a finite connected weighted graph $G=(V,E)$ according to the following steps: <!-- src: DM-N-316#p001 + DM-N-316#p002; ref: Algorithm 2; type: compressed -->
  1. Choose the initial graph $G_0 = (V, E_0)$ where $E_0 = \varnothing$.
  2. Construct $G_{n+1}$ from $G_n$ by adding an edge $e_{n+1}$ with **minimum weight** among all remaining edges $e'$ satisfying that the graph $G_n$ added with $e'$ **has no simple circuit**. (If more than one edge $e'$ has minimum weight, pick an arbitrary one.)
  3. Finally, $G_{|V|-1}$ is a minimum spanning tree.
- Here, $G_{n+1} = (V, E_{n+1})$ where $E_{n+1} = E_n \cup \{e_{n+1}\}$. <!-- src: DM-N-316#p003; type: direct -->
- **Correctness proof's main idea**: $e_n$ is "necessary" — assume it connects $u_n$ and $v_n$; all edges with less weight than $e_n$ are not enough to connect $u_n$ and $v_n$, or else there will be a simple circuit in the new graph. <!-- src: DM-N-316#p003; type: direct -->
- Formal proof: by induction on $n$ that there exists a minimum spanning tree $T^*$ such that $G_n$ is a subgraph of $T^*$. <!-- src: DM-N-316#p003; type: direct -->

## 9 Rooted Trees

### 9.1 Basic definitions

- **Rooted tree**: a **rooted tree** is a tree with a designated vertex (as the **root**). <!-- src: DM-N-323#p001; ref: Definition 1; type: direct -->
- **Level and height**: in a rooted tree $G=(V,E)$ with root $r$: the **level** of a vertex $v$ is the length of the unique simple path from $r$ to $v$; the **height** of the tree is the maximal level of its vertices. <!-- src: DM-N-323#p001; ref: Definition 2; type: direct -->
- **Parent and child**: the **parent** of a vertex $v \neq r$ is the unique vertex $u$ such that $\{u,v\} \in E$ and this edge appears on the unique simple path between $r$ and $v$; $v$ is called a **child** of $u$. <!-- src: DM-N-323#p001; ref: Definition 3; type: direct -->
- **Siblings**: vertices $u, v$ are **siblings** if they have the same parent. <!-- src: DM-N-323#p001; ref: Definition 4; type: direct -->
- **Ancestors and descendants**: the **ancestors** of a vertex $v \neq r$ are the vertices on the simple path from $r$ to $v$, **excluding $v$ but including $r$**; the **descendants** of a vertex $v$ are all vertices that have $v$ as one of their ancestors. <!-- src: DM-N-323#p001; ref: Definition 5; type: direct -->

### 9.2 Structural theorems

- **Ancestor transitivity**: in a rooted tree $G$, if $u$ is an ancestor of $v$ and $v$ is an ancestor of $w$, then $u$ is also an ancestor of $w$. <!-- src: DM-N-323#p001; ref: Theorem 6; type: direct -->
  - Proof sketch: let the simple path from $v$ to the root be $v = x_n, x_{n-1}, \ldots, x_0 = r$ and the one from $w$ to the root be $w = y_m, y_{m-1}, \ldots, y_0 = r$. By definition $u = x_i$ for some $0 \leqslant i < n$ and $v = y_j$ for some $0 \leqslant j < m$. Then $v = y_j, y_{j-1}, \ldots, y_0 = r$ is also a simple path from $v$ to the root, so by uniqueness $j = n$ and $x_n = y_n, x_{n-1} = y_{n-1}, \ldots, x_0 = y_0$. Hence $u = x_i = y_i$ with $0 \leqslant i < n < m$, i.e. $u$ is $w$'s ancestor. <!-- src: DM-N-323#p001; ref: Theorem 6; type: compressed -->
- **Descendant transitivity**: if $u$ is a descendant of $v$ and $v$ is a descendant of $w$, then $u$ is also a descendant of $w$. <!-- src: DM-N-323#p001; ref: Corollary 7; type: direct -->
- **Path extension lemma**: in a rooted tree $G$, if $u$ is the parent of $v$ and $u = x_n, x_{n-1}, \ldots, x_0$ is the simple path from $u$ to the root, then $v, u = x_n, x_{n-1}, \ldots, x_0$ is the simple path from $v$ to the root. <!-- src: DM-N-323#p001; ref: Lemma 8; type: direct -->
  - Proof sketch: let $v = y_m, y_{m-1}, \ldots, y_0$ be the simple path from $v$ to the root; by definition $u = y_{m-1}$, so $y_{m-1}, \ldots, y_0$ is the simple path from $u$ to the root, i.e. $n = m-1$ and $x_n = y_n, \ldots, x_0 = y_0$. <!-- src: DM-N-323#p002; ref: Lemma 8; type: compressed -->
- **Ancestors as parent-chains**: <!-- src: DM-N-323#p002; ref: Theorem 9; type: direct -->
  - if $u$ is $v$'s ancestor in $G$, then there exist $w_0, w_1, \ldots, w_k$ s.t. $w_0 = u$, $w_k = v$, and $w_0$ is $w_1$'s parent, $w_1$ is $w_2$'s parent, etc.;
  - conversely, if $w_0, w_1, \ldots, w_k$ satisfy $w_0 = u$, $w_k = v$ and $w_0$ is $w_1$'s parent, $w_1$ is $w_2$'s parent, etc., then $u$ is $v$'s ancestor in $G$.
- **Paths inside a subtree**: in a rooted tree $G$, if $v$ is a descendant of $u$, then the unique simple path from $v$ to $u$ only passes through $u$'s descendants and $u$. <!-- src: DM-N-323#p002; ref: Lemma 10; type: direct -->
  - Proof sketch: the simple path from $v$ to the root is $v = x_n, \ldots, x_0 = r$ with $u = x_m$ for some $0 \leqslant m < n$, so the simple path from $v$ to $u$ is $v = x_n, x_{n-1}, \ldots, x_m = u$; for any $i$ with $m < i \leqslant n$, $x_i, x_{i-1}, \ldots, x_0 = r$ is a subpath and hence the unique simple path from $x_i$ to the root; since $u = x_m$ is on this path, $x_i$ is a descendant of $u$. <!-- src: DM-N-323#p002; ref: Lemma 10; type: compressed -->
- **Corollary**: in a rooted tree $G$, if $v_1$ and $v_2$ are both $u$'s descendants, the unique simple path from $v_1$ to $v_2$ only passes through $u$'s descendants and $u$. <!-- src: DM-N-323#p002; ref: Corollary 13; type: direct -->

### 9.3 Leaves, subtrees, m-ary trees

- **Leaf / internal vertex (rooted-tree context)**: in a rooted tree, a vertex is a **leaf** if it has **no children**; otherwise it is an **internal vertex**. <!-- src: DM-N-323#p002; ref: Definition 11; type: direct -->
- Note the two different leaf notions in this course: in an **unrooted** tree a leaf is a vertex of degree $1$; in a **rooted** tree a leaf is a vertex with no children. <!-- src: DM-N-310#p001 + DM-N-323#p002; type: synthesized -->
- **Subtree**: the **subtree** at a vertex $v$ is the induced subgraph of the vertex set consisting of the vertex $v$ (as its root) and all the descendants of $v$. <!-- src: DM-N-323#p002; ref: Definition 12; type: direct -->
- For any rooted tree $G=(V,E)$ and $v \in V$, the subtree at vertex $v$ is a tree. <!-- src: DM-N-323#p002; ref: Theorem 14; type: direct -->
- **$m$-ary trees（$m$ 叉树）**: a rooted tree $G$ is **$m$-ary** if every internal vertex has **at most $m$ children**; $G$ is **binary** if it is $2$-ary. <!-- src: DM-N-323#p002; ref: Definition 15; type: direct -->
- **Leaf bound**: an $m$-ary tree of height $h$ has **at most $m^h$ leaves**. <!-- src: DM-N-323#p002; ref: Theorem 16; type: direct -->

## 10 Depth-First Search（深度优先搜索）

### 10.1 The DFS procedure (informal)

- **DFS algorithm**: <!-- src: DM-N-323#p003; ref: Algorithm 1; type: direct -->
  - Step 1: Fix an arbitrary starting vertex.
  - Step 2: Continuously **augment a simple path** until no edge is augmentable.
  - Step 3: **Trace back** to the deepest vertex from which some edge is augmentable and go back to Step 2.
- Example graph used to illustrate DFS (11 vertices $a, b, \ldots, k$; edges read off the figure): $\{a,c\}, \{b,c\}, \{c,e\}, \{d,e\}, \{d,f\}, \{e,f\}, \{f,g\}, \{f,h\}, \{g,h\}, \{h,i\}, \{h,k\}, \{j,k\}$. <!-- src: DM-N-323#p003g1; ref: Example 17; type: direct -->

### 10.2 Describing a DFS process; tree edges and back edges

- To describe a DFS process: we can say the $k$-th **move** is from vertex $u$ to vertex $v$ through edge $e$ as a **forward / backward step**; we can also say the $k$-th **forward move**. <!-- src: DM-N-323#p003; type: direct -->
- **Tree edge / back edge**: in one DFS process, if there is a forward move through $e$, then $e$ is called a **tree edge**; otherwise $e$ is called a **back edge**. <!-- src: DM-N-323#p003; ref: Definition 18; type: direct -->

### 10.3 Formal definition of a DFS process

Given an undirected graph $G=(V,E)$ and a start point $u$, a DFS process (with $s$ steps) must satisfy the following conditions (assuming that the $k$-th step is from $v_{k-1}$ to vertex $v_k$ through edge $e_k$): <!-- src: DM-N-325#p001; type: direct -->

- $v_0 = u$.
- If there exists $e \in E$ and $w \in V$ s.t. $w \notin \{v_0, v_1, \ldots, v_{k-1}\}$ and $e$ connects $v_{k-1}$ and $w$, then the $k$-th move **must be forward** (i.e. go forward whenever an unvisited neighbour exists).
- If the $k$-th move is a forward step, then $v_k \notin \{v_0, v_1, \ldots, v_{k-1}\}$ (forward steps only visit new vertices).
- If the $k$-th move is a backward step and $v_{k-1} = v_i$, where $i \leqslant k-1$ and the $i$-th step is forward, then $v_k = v_{i-1}$ and $e_k = e_i$ (a backward step retraces the forward edge that first entered the current vertex).

### 10.4 Properties of DFS

- **DFS yields a spanning tree**: all tree edges of a DFS process of a connected undirected graph $G$ form a **spanning tree** of $G$. <!-- src: DM-N-325#p001; ref: Theorem 1; type: direct -->
  - Proof scratch: 1) all vertices appear — if $v$ did not, we could construct a counterexample from a path connecting $u$ and $v$; 2) this subgraph is a tree — by induction over the steps, the subgraph with $\{v_0, v_1, \ldots, v_k\}$ and $\{e_1, e_2, \ldots, e_k\}$ is a tree, proved by case analysis on whether the $k$-th step is forward or backward. <!-- src: DM-N-325#p001; ref: Theorem 1; type: compressed -->
  - Usually, we treat this tree as a **rooted tree** (the starting vertex is the root). <!-- src: DM-N-325#p001; type: direct -->
- A forward step is from a vertex to **one of its children** (in the DFS tree). <!-- src: DM-N-325#p001; ref: Corollary 2; type: direct -->
- Every vertex $v \neq u$ appears as a **forward step's terminal exactly once** in a DFS process of a connected undirected graph $G$ starting from $u$. <!-- src: DM-N-325#p001; ref: Lemma 3; type: direct -->
- **Visited-vertices invariant**: for a **connected undirected** graph $G=(V,E)$ and a DFS process of $G$ with $s$ steps ($k$-th step from $v_{k-1}$ to $v_k$ through $e_k$) and every $k \leqslant s$, the set of "visited vertices" $\{v_0, v_1, \ldots, v_k\}$ can be divided into three categories: <!-- src: DM-N-325#p001; ref: Lemma 4; type: direct -->
  - the starting vertex;
  - the vertices which appear as exactly one forward step's termination and as **no** backward step's starting point in the first $k$ steps;
  - the vertices which appear as exactly one forward step's termination and as **exactly one** backward step's starting point in the first $k$ steps.
- Moreover, one simple path from $v_0$ to $v_k$ satisfies the following properties (proof by induction over $k$): <!-- src: DM-N-325#p001 + DM-N-325#p002; ref: Lemma 4; type: direct -->
  - it contains only forward edges: $e_{n_1}, e_{n_2}, \ldots, e_{n_l}$, where $1 \leqslant n_1 < n_2 < \cdots < n_l \leqslant k$;
  - it passes through vertices $v_{n_1-1},\ v_{n_1} = v_{n_2-1},\ v_{n_2} = v_{n_3-1},\ \ldots,\ v_{n_{l-1}} = v_{n_l-1},\ v_{n_l} = v_k$;
  - $\{v_0, v_{n_1}, v_{n_2}, \ldots, v_{n_l}\}$ are exactly all vertices in the first two categories above.
- Every vertex $v \neq u$ appears as a **backward step's starting point exactly once** in a DFS process of a connected undirected graph $G$ starting from $u$. <!-- src: DM-N-325#p002; ref: Corollary 5; type: direct -->
- A DFS process of a connected undirected graph with $n=|V|$ contains **$n-1$ forward steps and $n-1$ backward steps**. <!-- src: DM-N-325#p002; ref: Corollary 6; type: compressed -->
- Between two visits of $u$: if $G=(V,E)$ is a **connected undirected** graph and a DFS process of $G$ contains $s$ steps with the $k$-th step from $v_{k-1}$ to $v_k$ through $e_k$, and $v_i = v_j = u$ with $i < j$, then $v_k$ is $u$'s descendant or $u$ itself for every $i < k < j$. <!-- src: DM-N-325#p002; ref: Corollary 7; type: direct -->
- **Back edge theorem**: a back edge is always from a vertex to one of its ancestors, one of its descendants, or itself. <!-- src: DM-N-325#p002; ref: Theorem 8; type: direct -->
  - Proof: consider an edge from $u$ to $v$. If one of them is the root, the statement is obviously true. Otherwise, consider the backward steps leaving $u$ and leaving $v$; suppose the backward step leaving $u$ is earlier. Then, right at the time of leaving $u$, $v$ must be visited (or else a forward step should happen). Since a backward step from $v$ had not yet happened, $v$ must be $u$'s ancestor. <!-- src: DM-N-325#p002; ref: Theorem 8; type: compressed -->

### 10.5 Tarjan's Algorithm for Finding Bridges

<!-- src: DM-N-325#p002; ref: Algorithm 1 (Tarjan's Algorithm for Finding Bridges); type: direct -->

```text
Tarjan_Bridge(u, e0):
    time = time + 1;
    dfn(u) = time;
    low(u) = time;
    for every e ≠ e0 which is incident with u and another vertex v:
        if dfn(v) is uninitialized, then
            recursively run Tarjan_Bridge(v, e);
            low(u) = min(low(u), low(v));
            if (low(v) = dfn(v)) then the edge connecting u and v is a bridge;
        else
            low(u) = min(low(u), dfn(v));
```

- The recursion excludes the entering edge $e_0$ itself when scanning the edges incident with $u$; $\mathrm{dfn}(u)$ records the visiting time of $u$, and $\mathrm{low}(u)$ is updated by children's $\mathrm{low}$ values (after recursive calls) and by $\mathrm{dfn}(v)$ of already-visited neighbours; the bridge test is $\mathrm{low}(v) = \mathrm{dfn}(v)$. <!-- src: DM-N-325#p002; ref: Algorithm 1; type: compressed -->
