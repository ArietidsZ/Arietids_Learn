---
title: "第五章 图"
description: "数据结构课程笔记：第五章 图。"
---

<div class="note-meta"><a href="/courses/data-structures/">数据结构目录</a><a href="/courses/data-structures/chapter-05-quick/">阅读速览</a><a href="/downloads/data-structures/chapter-05.md" download>下载 Markdown</a></div>

本章知识结构（按大纲范围）：图的概念 → 图的邻接矩阵和邻接表存储 → 图的遍历 → 图遍历的应用（无向图的连通性、欧拉回路、有向图的连通性）→ 最小代价生成树 → 最短路径 → AOV 网和 AOE 网。<!-- src: DS-C5-1#s002 + DS-C5-2#s002 + DS-C5-2-PDF#p002 + DS-C5-2-PDF#p064; type: synthesized -->


## 一、图的概念

### 1.1 引入案例

- **图的应用引入**：上海轨道交通换乘、互联网用户连接等系统中元素间的复杂联系，都可以用图来建模。<!-- src: DS-C5-1#s004 + DS-C5-1#s005; type: synthesized -->


### 1.2 图的定义

- **图表示"多对多"的关系**：在图中，元素用顶点来表示，元素间的关系用顶点间的边表示；元素集合中任意两个元素之间都可能有某种关系，表现为任意两个顶点间都可能有边相连。<!-- src: DS-C5-1#s006 + DS-C5-2#s003; type: direct -->
- **图的形式化定义**：图可以用一个二元组 $G = (V, E)$ 表示，其中 $V$ 是顶点（即元素）的**非空**集合，$E$ 是两个顶点间边（弧）的集合。<!-- src: DS-C5-1#s007 + DS-C5-2#s004; type: direct -->
- **示例有向图 G1**：顶点集 $V = \{A,B,C,D\}$，边集 $E = \{\langle B,A\rangle, \langle A,C\rangle, \langle C,A\rangle, \langle C,D\rangle, \langle D,A\rangle, \langle C,B\rangle\}$。注意 A 与 C 之间存在 $\langle A,C\rangle$ 和 $\langle C,A\rangle$ 两条方向相反的不同有向边。<!-- src: DS-C5-1#s006 + DS-C5-1#s007 + DS-C5-2#s004; type: direct -->

### 1.3 基本术语

- **有向边与有向图**：每一条边带有方向性的边用带尖括号的顶点对表示，称为**有向边**。如 $\langle C,A\rangle$ 表示由 C 射向 A 的有向边，C 称为**弧尾**、A 称为**弧头**（即 ⟨弧尾,弧头⟩，箭头指向弧头）。由顶点集和有向边集合组成的图称为**有向图**（G1 是有向图）。<!-- src: DS-C5-1#s008 + DS-C5-2#s005; type: direct -->
- **无向边与无向图**：无方向性的边用带圆括号的顶点对表示，称为**无向边**，如 $(C,A)$ 表示 C 和 A 之间有条无向边（$(C,A)$ 与 $(A,C)$ 是同一条边）。由顶点集和无向边集合构成的图称为**无向图**。示例无向图 G2：$V = \{A,B,C,D,E\}$，$E = \{(A,C), (A,E), (D,B), (D,A)\}$。<!-- src: DS-C5-1#s009 + DS-C5-2#s006; type: direct -->
- **邻接关系**：图的顶点间有边相连，称顶点间有邻接关系。若 $(v_i,v_j)$ 是一条无向边，则称 $v_i$ 和 $v_j$ 邻接、$v_j$ 和 $v_i$ 邻接，边 $(v_i,v_j)$ 邻接于顶点 $v_i$ 和 $v_j$；若 $\langle v_i,v_j\rangle$ 是条有向边，则称 $v_i$ 邻接到 $v_j$、或 $v_j$ 和 $v_i$ 邻接，边 $\langle v_i,v_j\rangle$ 邻接于顶点 $v_i$ 和 $v_j$。例：边 $\langle C,A\rangle$ 邻接于顶点 C 和 A；边 $(C,A)$ 邻接于顶点 C 和 A。<!-- src: DS-C5-1#s010 + DS-C5-2#s007; type: direct -->
- **出度、入度、度**：有向图中一个顶点的**出度**是指由该顶点射出的有向边的条数，**入度**是射入该顶点的有向边的条数；无向图中一个顶点的**度**是指邻接于该顶点的边的总数。例：G1 中顶点 A 的入度为 3（射入 A 的边 CA、BA、DA）、出度为 1（射出 A 的边 AC）；G2 中顶点 B 的度为 1（邻接边 BD）、顶点 A 的度为 3（邻接边 AC、AE、AD）。<!-- src: DS-C5-1#s011 + DS-C5-2#s008; type: direct -->
- **直接前驱与直接后继**：有向边 $\langle B,A\rangle$ 中 B 可看作是 A 的直接前驱、A 可看作是 B 的直接后继；无向边 $(B,A)$ 中 B 和 A 互为直接前驱、后继。<!-- src: DS-C5-1#s012 + DS-C5-2#s009; type: direct -->
- **图与树的明显不同**：树中除根结点外，每个结点的直接前驱是唯一的（根结点无直接前驱）；而图中顶点的直接前驱不再保证唯一，也可能没有。<!-- src: DS-C5-1#s012 + DS-C5-2#s009; type: direct -->
- **图的两条限制（易错点）**：本章默认的简单图中不能包含同一条边的多个副本（无重边），也不能包含自连边，即 $(j,j)$ 或者 $\langle j,j\rangle$（无自环）。<!-- src: DS-C5-1#s012 + DS-C5-2#s009; type: direct -->
- **完全图**：有 $n$ 个顶点的无向图中，如果任意两个顶点间都有边相连，此时边的条数最多，达到 $C_n^2 = \frac{n(n-1)}{2}$ 条，这样的图称为**无向完全图**；对有向图而言，边的条数最多为 $P_n^2 = n(n-1)$ 条，这样的图称为**有向完全图**。<!-- src: DS-C5-1#s013 + DS-C5-2#s010; type: direct -->
- **权重与网络**：在图的实际应用中，边常带有一定的权重；边上带有权重的有向图、无向图分别被称为**加权有向图**、**加权无向图**，统称为**网络**。<!-- src: DS-C5-1#s014 + DS-C5-2#s011; type: direct -->
- **示例加权无向图 G3**：顶点 $\{A,B,C,D,E,F\}$，共 10 条带权无向边：$(A,C)=6$，$(A,D)=2$，$(A,B)=3$，$(C,D)=1$，$(D,B)=2$，$(C,E)=4$，$(D,E)=3$，$(D,F)=6$，$(B,F)=5$，$(E,F)=5$。该图形状在简单路径例、连通分量例（G5 的分量）中重复使用。<!-- src: DS-C5-1#s014 + DS-C5-1#s018 + DS-C5-2#s011; type: synthesized -->
- **示例加权有向图 G4**：顶点 $\{A,B,C,D,E,F\}$（布局与 G3 相同），共 10 条带权有向边：$\langle A,C\rangle=6$，$\langle A,D\rangle=2$，$\langle A,B\rangle=3$，$\langle D,C\rangle=1$，$\langle D,B\rangle=2$，$\langle C,E\rangle=4$，$\langle E,D\rangle=3$，$\langle D,F\rangle=6$，$\langle F,E\rangle=5$，$\langle F,B\rangle=5$。<!-- src: DS-C5-1#s014 + DS-C5-1#s016 + DS-C5-2#s011; type: synthesized -->

### 1.4 路径与回路

- **路径与路径长度**：对于图中任意二个顶点 $i$ 和 $j$，如果可以从顶点 $i$ 出发经过若干条无向边或者有向边到达顶点 $j$，则称从顶点 $i$ 到顶点 $j$ 之间存在着一条**路径**。路径长度有两种度量：①顶点 $i$ 到 $j$ 之间的无向边或有向边的**条数**；②如果边上有权重，路径长度也可以用路径上所有边的**权重之和**来表示。<!-- src: DS-C5-1#s015 + DS-C5-2#s012; type: direct -->
- **路径的顶点序列表示**：在无向图中，可用顶点序列 $V_0, V_1, \dots, V_{n-1}, V_n$ 表示自 $V_0$ 到 $V_n$ 的长度为 $n$ 的一条路径，该路径由边 $(V_0,V_1), (V_1,V_2), \dots, (V_{n-1},V_n)$ 构成；在有向图中，顶点序列 $V_0, V_1, \dots, V_{m-1}, V_m$ 表示长度为 $m$ 的路径，由有向边 $\langle V_0,V_1\rangle, \dots, \langle V_{m-1},V_m\rangle$ 构成（每对相邻顶点间必须存在相应方向的边）。<!-- src: DS-C5-1#s016 + DS-C5-2#s013; type: direct -->
- **路径长度例（两种度量对照，易错点）**：G2 中顶点序列 C,A,D,B 表示由无向边 $(C,A),(A,D),(D,B)$ 构成的长度为 **3** 的路径（按边数计）；加权有向图 G4 中顶点序列 A,D,C,E 表示由有向边 $\langle A,D\rangle,\langle D,C\rangle,\langle C,E\rangle$ 构成的长度为 **7** 的路径（按权重之和计：$2+1+4=7$）。判断长度前先确认图是否带权。<!-- src: DS-C5-1#s017 + DS-C5-2#s014; type: compressed -->
- **简单路径与简单回路**：如果一条路径上除了第一个顶点和最后一个顶点可能相同之外，其余各顶点都不相同，这样的路径称为**简单路径**；简单路径上如果第一个顶点和最后一个顶点相同，则该路径也称为**简单回路**（简单环）。<!-- src: DS-C5-1#s018 + DS-C5-2#s015; type: direct -->
- **简单路径/简单回路判断例（在 G3 上）**：①序列 A,D,E,F 是简单路径；②序列 A,D,E,F,B,A 是简单路径，也是简单回路；③序列 A,D,C,E,D,B 不是简单路径（D 在中间重复）；④序列 A,D,C,E,D,B,A 是回路但不是简单回路。判断要点：只允许首尾顶点相同，中间任何顶点重复即非简单。<!-- src: DS-C5-1#s019 + DS-C5-2#s016; type: compressed -->

### 1.5 子图

- **子图定义**：假设有两个图 $G = (V,E)$，$G' = (V',E')$，且 $V'$ 是 $V$ 的子集，$E'$ 是 $E$ 中两端点均属于 $V'$ 的边的子集，则称 $G'$ 是 $G$ 的子图。根据定义，$G$ 显然也是 $G$ 自身的子图。<!-- src: DS-C5-1#s020 + DS-C5-2#s017; type: direct -->
- **子图示例**：原图 T 为 6 顶点无向图（与 G3 同形状、无权）。其子图：T1 = 单个孤立顶点 $\{B\}$（零条边也是子图）；T2 = 顶点 $\{A,C,D,B\}$ 加边 $\{A\text{-}C, A\text{-}D, A\text{-}B, D\text{-}B\}$（注意不含原图中的 C-D 边——子图的边集只需是原边集的子集，不必取全）；T3 = 顶点 $\{A,B,C\}$ 加边 $\{A\text{-}B, A\text{-}C\}$。T3 画出的形状（位置）和原图中不同，但不影响 T3 也是 T 的子图——**子图只取决于顶点集和边集的包含关系，与画法无关**。（注：该页正文叙述中 T 与 G 两个名称混用，所指为同一个图。）<!-- src: DS-C5-1#s020 + DS-C5-2#s017; type: compressed -->

### 1.6 连通性

- **连通的定义**：在一个图中，如果顶点 $i$ 和 $j$ 之间有路径存在，称顶点 $i$、$j$ 之间是连通的。<!-- src: DS-C5-1#s021 + DS-C5-2#s018; type: direct -->
- **连通图与连通分量（无向图）**：在一个无向图中，如果任意两个顶点对之间都是连通的，称该无向图 G 是**连通图**；无向图的**极大连通子图**称为**连通分量**。<!-- src: DS-C5-1#s021 + DS-C5-2#s018; type: direct -->
- **连通分量示例（无向图 G5）**：共 11 个顶点，由三部分组成：$\{A,B,C,D,E,F\}$（与 G3 同形状）、$\{G,H,I,J\}$ 构成四边回路、K 为孤立顶点。G5 的连通分量为 3 个：$\{G,H,I,J\}$、$\{A,B,C,D,E,F\}$、$\{K\}$。要点：孤立顶点自身也是一个连通分量；连通分量多于 1 个，故 G5 不是连通图。<!-- src: DS-C5-1#s021 + DS-C5-2#s018; type: compressed -->
- **强连通图与强连通分量（有向图）**：在一个有向图 G 中，如果任意两个顶点 $i,j$ 均可沿有向边从 $i$ 到 $j$ 且从 $j$ 到 $i$，称有向图 G 是**强连通图**；有向图的极大强连通子图，称**强连通分量**。<!-- src: DS-C5-1#s022 + DS-C5-2#s019; type: direct -->
- **强连通分量示例（有向图 G6）**：顶点 $\{A,B,C,D,E,F\}$，有向边 $\{\langle A,C\rangle, \langle A,B\rangle, \langle C,D\rangle, \langle D,A\rangle, \langle C,E\rangle, \langle E,F\rangle, \langle F,E\rangle\}$。G6 的强连通分量为 3 个：$\{A,C,D\}$（构成有向回路 A→C→D→A）、$\{E,F\}$（两条方向相反的边 E→F、F→E）、$\{B\}$（B 只有入边，无法回到其他顶点）。要点：单个顶点可以自成强连通分量；E、F 虽可从 A、C 到达，但无法返回，故不与 $\{A,C,D\}$ 同属一个分量。<!-- src: DS-C5-1#s022 + DS-C5-2#s019; type: compressed -->


## 二、图的存储和操作实现

### 2.1 邻接矩阵

- **引入动机**：按照线性结构和树结构的存储思路，要想找到一个类似的、既能同时存储顶点又能存储表示顶点间关系的边的结构非常困难，因此换个思路——**将顶点和边的存储独立开来**。<!-- src: DS-C5-1#s027 + DS-C5-1#s028; type: compressed -->
- **邻接矩阵表示法（定义）**：顶点由一个一维数组存储，边由一个二维数组（$n$ 行 $n$ 列矩阵 A，$n$ 为顶点个数）存储，其中 $A[i][j]$ 表示顶点 $v_i$ 和 $v_j$ 之间的关系情况，这种存储方式称**邻接矩阵表示法**。<!-- src: DS-C5-1#s028 + DS-C5-1#s029 + DS-C5-2#s024; type: compressed -->
- **有向图邻接矩阵示例 G8**：顶点数组下标 0、1、2、3 依次存放 A、B、C、D；有向边集 $\{A{\to}C, B{\to}A, C{\to}A, C{\to}B, C{\to}D, D{\to}A\}$。G8 的邻接矩阵（行为起点、列为终点）：<!-- src: DS-C5-1#s030; type: direct -->

  |      | 0(A) | 1(B) | 2(C) | 3(D) |
  |------|------|------|------|------|
  | 0(A) | 0 | 0 | 1 | 0 |
  | 1(B) | 1 | 0 | 0 | 0 |
  | 2(C) | 1 | 1 | 0 | 1 |
  | 3(D) | 1 | 0 | 0 | 0 |

  要点：对角线为 0，因为不存在自环。<!-- src: DS-C5-1#s030; type: direct -->

- **无向图邻接矩阵示例 G9**：顶点数组下标 0~4 依次存放 A、B、C、D、E；无向边集 $\{A\text{-}C, A\text{-}D, A\text{-}E, B\text{-}D\}$。G9 的邻接矩阵：<!-- src: DS-C5-1#s031; type: direct -->

  |      | 0(A) | 1(B) | 2(C) | 3(D) | 4(E) |
  |------|------|------|------|------|------|
  | 0(A) | 0 | 0 | 1 | 1 | 1 |
  | 1(B) | 0 | 0 | 0 | 1 | 0 |
  | 2(C) | 1 | 0 | 0 | 0 | 0 |
  | 3(D) | 1 | 1 | 0 | 0 | 0 |
  | 4(E) | 1 | 0 | 0 | 0 | 0 |

- **有向图邻接矩阵的度性质**：某一行中所有 1 的个数，就是相应行顶点的**出度**；某一列中所有 1 的个数，就是相应列顶点的**入度**。<!-- src: DS-C5-1#s032 + DS-C5-2#s025; type: direct -->
- **无向图邻接矩阵的性质**：①某一行中所有 1 的个数或者某一列中所有 1 的个数，就是相应顶点的**度**；②同一条边在邻接矩阵中出现**两次**；③无向图的邻接矩阵以主对角线为轴**对称**，且主对角线全为零；④因此存储无向图时可以只存储它的**上三角矩阵或下三角矩阵**。<!-- src: DS-C5-1#s033 + DS-C5-2#s026; type: direct -->
- **邻接矩阵的空间缺点**：一般来说，边的总数即便远远小于 $n^2$，也需 $n^2$ 个内存单元来存储边的信息，空间消耗大。<!-- src: DS-C5-1#s034; type: direct -->
- **加权邻接矩阵（定义）**：当图中边带有权值时，可以用加权邻接矩阵表示加权有向图或无向图。约定：如果顶点 $i$ 至 $j$ 有一条有向边且它的权值为 $w$，则令 $A[i][j]=w$；如果顶点 $i$ 至 $j$ 没有边相连，则令 $A[i][j]=\infty$；主对角线上的元素依然有 $A[i][i]=0$。<!-- src: DS-C5-1#s035 + DS-C5-2#s027; type: direct -->
- **加权邻接矩阵示例 G10**：顶点下标 0~3 依次存放 A、B、C、D；加权有向边集 $\{A{\to}C\ (8), B{\to}A\ (7), C{\to}A\ (5), C{\to}B\ (2), C{\to}D\ (5), D{\to}A\ (3)\}$。G10 的加权邻接矩阵：<!-- src: DS-C5-1#s035 + DS-C5-2#s027; type: direct -->

  |      | 0(A) | 1(B) | 2(C) | 3(D) |
  |------|------|------|------|------|
  | 0(A) | 0 | ∞ | 8 | ∞ |
  | 1(B) | 7 | 0 | ∞ | ∞ |
  | 2(C) | 5 | 2 | 0 | 5 |
  | 3(D) | 3 | ∞ | ∞ | 0 |

  注意 A 与 C 之间是两条方向相反的边（A→C 权 8 与 C→A 权 5），故 $A[0][2]=8$ 与 $A[2][0]=5$ 不相等，体现有向加权图邻接矩阵一般不对称。<!-- src: DS-C5-2#s027; type: one-step-inferred -->

### 2.2 邻接矩阵的代码实现

- **图类的设计要点**：①模板参数 `verType` 为顶点类型、`edgeType` 为边（权值）类型；②`verts`/`edges` 记录实际顶点数与实际边数，`maxVertex` 为允许的最大顶点数（默认 `DefaultNumVertex`=20）；③`verList` 是一维顶点数组，`edgeMatrix` 是 `edgeType**` 型的二维邻接矩阵；④`noEdge` 是"无边"标志值——普通图中无边通常设为 0，网格图（带权图）中设为一个较大的值（如 MAXNUM）；⑤`directed` 标志图是否有向：1 表示有向图，0 表示无向图；⑥另定义空类 `outOfBound` 作为处理越界情况的异常类。<!-- src: DS-C5-1#s036; type: compressed -->
- **邻接矩阵图类的声明**（跨两页的完整类定义，逐字转写）：<!-- src: DS-C5-1#s036 + DS-C5-1#s037; type: direct -->

<details>
<summary>代码</summary>

```cpp
#define DefaultNumVertex 20 //  默认最大顶点数量为20

//  定义一个类用于表示图的结构
class outOfBound{}; //  异常类，用于处理越界情况

//  定义一个图类，模板类型分别表示顶点类型和边的类型
template <class verType, class edgeType>
class Graph {
private:
    int verts, edges; //  图的实际顶点数和实际边数
    int maxVertex; //  图允许的最大顶点数
    verType *verList; //  存储顶点数据的数组
    edgeType **edgeMatrix; //  存储图的邻接矩阵
    edgeType noEdge; //  表示没有边的标志，通常图中无边设为0，网格图中设为一个较大的值（如MAXNUM）
    bool directed; //  图是否为有向图，1表示有向图，0表示无向图
public:
    Graph(bool direct, edgeType e); //  构造函数：初始化图的结构，direct为是否有向图标志，e为无边标志
    ~Graph(); //  析构函数，释放资源
    int numberOfVertex() const { return verts; } //  返回图中的顶点数
    int numberOfEdge() const { return edges; } //  返回图中的边数
    int getVertex(verType vertex) const; //  返回指定顶点在顶点列表中的下标
    bool existEdge(verType vertex1, verType vertex2) const; //  判断两个顶点之间是否存在边
    void insertVertex(verType vertex); //  插入一个顶点
    void insertEdge(verType vertex1, verType vertex2, edgeType edge); //  插入一条边
    void removeVertex(verType vertex); //  删除一个顶点
    void removeEdge(verType vertex1, verType vertex2); //  删除一条边
    int getFirstNeighbor(verType vertex) const; //  获取指定顶点的第一个邻接点
    int getNextNeighbor(verType vertex1, verType vertex2) const; //  获取指定顶点相对于另一个顶点的下一个邻接点
    void disp() const; //  显示邻接矩阵
};
```

</details>

- **构造函数**（逐字转写）：<!-- src: DS-C5-1#s038; type: direct -->

<details>
<summary>代码</summary>

```cpp
template <class verType, class edgeType> //  构造函数，初始化图的结构
Graph<verType, edgeType>::Graph(bool direct, edgeType e) {
    int i, j;
    directed = direct; //  初始化图的一些属性
    noEdge = e;
    verts = 0; //  当前图的顶点数为0
    edges = 0; //  当前图的边数为0
    maxVertex = DefaultNumVertex; //  最大顶点数设置为默认值

    //  为顶点数组和邻接矩阵分配内存
    verList = new verType[maxVertex];
    edgeMatrix = new edgeType*[maxVertex];

    //  为邻接矩阵的每一行分配内存
    for (i = 0; i < maxVertex; i++)
        edgeMatrix[i] = new edgeType[maxVertex];

    //  初始化邻接矩阵：对角线为0（表示自己与自己的无边），其他位置为noEdge（表示没有边）
    for (i = 0; i < maxVertex; i++) {
        for (j = 0; j < maxVertex; j++) {
            if (i == j) edgeMatrix[i][j] = 0; //  对角线元素为0
            else edgeMatrix[i][j] = noEdge; //  无边设为noEdge标志
        }
    }
}
```

</details>

- **构造函数的初始化约定（要点）**：①邻接矩阵采用"行指针数组 + 逐行分配"的两步动态分配方式：先 `new edgeType*[maxVertex]` 分配行指针数组，再循环为每一行 `new edgeType[maxVertex]`；②矩阵初始化时对角线元素 `edgeMatrix[i][i]=0`（表示自己与自己无边），其余位置设为 `noEdge` 标志——注意对角线是 0 而不是 noEdge；③初始 `verts=0`、`edges=0`，`maxVertex` 取默认值。<!-- src: DS-C5-1#s038; type: compressed -->
- **析构函数与 getVertex**（逐字转写）：<!-- src: DS-C5-1#s039; type: direct -->

<details>
<summary>代码</summary>

```cpp
//  析构函数，释放内存
template <class verType, class edgeType>
Graph<verType, edgeType>::~Graph() {
    int i;
    delete[] verList; //  释放顶点数组
    for (i = 0; i < maxVertex; i++) {
        delete[] edgeMatrix[i]; //  释放每一行的邻接矩阵
    }
    delete[] edgeMatrix; //  释放邻接矩阵
}

//  根据顶点的值返回其在顶点列表中的下标
template <class verType, class edgeType>
int Graph<verType, edgeType>::getVertex(verType vertex) const {
    for (int i = 0; i < verts; i++) {
        if (verList[i] == vertex) return i; //  找到顶点，返回其下标
    }
    return -1; //  如果未找到，返回-1
}
```

</details>

  要点：析构需逐行 `delete[] edgeMatrix[i]` 后再 `delete[] edgeMatrix`（与两步分配对应）；getVertex 在顶点表中线性查找顶点值，找到返回下标，未找到返回 -1。<!-- src: DS-C5-1#s039; type: compressed -->

- **existEdge**（逐字转写）：<!-- src: DS-C5-1#s040; type: direct -->

<details>
<summary>代码</summary>

```cpp
//  判断两个顶点之间是否有边
template <class verType, class edgeType>
bool Graph<verType, edgeType>::existEdge(verType vertex1, verType vertex2) const {
    int i, j;

    //  找到vertex1和vertex2的下标
    for (i = 0; i < verts; i++) {
        if (verList[i] == vertex1) break;
    }
    for (j = 0; j < verts; j++) {
        if (verList[j] == vertex2) break;
    }
    //  如果顶点未找到或它们相同，返回false
    if (i == verts || j == verts || i == j) return false;

    //  判断邻接矩阵中是否有边
    if (edgeMatrix[i][j] == noEdge) return false;

    //  如果存在边，返回true
    return true;
}
```

</details>

- **existEdge 的边界情况（易错点）**：①两个线性循环靠 `break` 跳出，因此用 `i==verts` / `j==verts` 判断"未找到"；②任一顶点未找到、或两顶点相同（`i==j`，自环情形）都直接返回 false；③通过下标查 `edgeMatrix[i][j]`，等于 noEdge 则返回 false，否则返回 true。<!-- src: DS-C5-1#s040; type: compressed -->
- **removeVertex**（逐字转写）：<!-- src: DS-C5-1#s041; type: direct -->

<details>
<summary>代码</summary>

```cpp
template <class verType, class edgeType> //  删除指定的顶点
void Graph<verType, edgeType>::removeVertex(verType vertex) {
    int i, j, k;
    for (i = 0; i < verts; i++) if (verList[i] == vertex) break; //  找到该顶点在顶点列表中的下标
    if (i == verts) return; //  如果顶点未找到，返回

    for (j = i; j < verts - 1; j++) verList[j] = verList[j + 1]; //  在顶点表中删除该顶点，后续顶点前移

    for (j = 0; j < verts; j++) if ((j != i) && (edgeMatrix[i][j] != noEdge)) edges--; //  更新边数：删除与该顶点相关的边

    if (directed) {//  如果是有向图，还需要删除指向该顶点的边
        for (k = 0; k < verts; k++) {
            if ((k != i) && (edgeMatrix[k][i] != noEdge)) edges--; //  删除边时，边数减少
    }}
    for (j = i; j < verts - 1; j++) {//  删除顶点后，更新邻接矩阵，删除该顶点所在的行和列
        for (k = 0; k < verts; k++) edgeMatrix[j][k] = edgeMatrix[j + 1][k];
    }
    for (j = i; j < verts - 1; j++) {
        for (k = 0; k < verts; k++) edgeMatrix[k][j] = edgeMatrix[k][j + 1];
    }
    verts--; //  顶点数减少
}
```

</details>

- **removeVertex 的算法步骤（邻接矩阵版）**：①在顶点表中线性查找目标顶点的下标 $i$，未找到则直接返回；②顶点表中删除该顶点：下标 $i$ 之后的顶点依次前移一位覆盖；③更新边数：扫描矩阵第 $i$ 行，对每个 $j \ne i$ 且 `edgeMatrix[i][j] != noEdge` 的元素 `edges--`；若为有向图，还需扫描第 $i$ 列继续 `edges--` 以扣除指向该顶点的入边——无向图只扫一行即可，因为同一条边在矩阵中虽出现两次但 edges 只计一次；④更新邻接矩阵：删除第 $i$ 行（第 $i+1$ 行起整体上移）和第 $i$ 列（第 $i+1$ 列起整体左移）；⑤最后 `verts--`。<!-- src: DS-C5-1#s041; type: compressed -->

### 2.3 邻接表与逆邻接表

- **邻接表表示法（定义）**：对于无向图，邻接于同一个顶点的所有边形成一条单链表；对于有向图，自同一个顶点出发的所有边形成一条单链表。顶点信息用一个一维数组存储，该数组称为**顶点表**；保存边信息的单链表称为**边表**。一个图由顶点表和边表共同表示，这种方法称为**邻接表表示法**。<!-- src: DS-C5-1#s043 + DS-C5-2#s029; type: direct -->
- **逆邻接表表示法（定义，仅针对有向图）**：射向同一个顶点的所有边形成一条单链表。顶点信息用一维数组存储（顶点表），保存边信息的单链表称为边表，这种方法称为**逆邻接表表示法**。逆邻接表中边结点存放的是边的源顶点下标（字段 `src`），而邻接表中存放的是目标顶点下标（字段 `dest`）。<!-- src: DS-C5-1#s047 + DS-C5-1#s048 + DS-C5-2#s030; type: synthesized -->
- **邻接表与逆邻接表求度的便利性对比（有向图）**：邻接表方便计算**出度**（顶点边表长度即出度），不方便计算入度（需遍历全部边表）；逆邻接表方便计算**入度**，不方便计算出度。<!-- src: DS-C5-1#s044 + DS-C5-1#s048 + DS-C5-2#s031; type: synthesized -->
- **无向图邻接表的空间特点**：每条边存储了 **2 次**（边的两个端点的边表中各有一个边结点）。示例 G13 有 4 条边，邻接表中共有 8 个边结点。<!-- src: DS-C5-1#s045; type: direct -->
- **示例：有向图 G11 的邻接表**（顶点编号 0:A、1:B、2:C、3:D，边集 $\{A{\to}C, B{\to}A, C{\to}A, C{\to}B, C{\to}D, D{\to}A\}$；顶点表字段 data/adj，边结点字段 dest/link）：<!-- src: DS-C5-1#s044 + DS-C5-2#s032; type: compressed -->

  | 下标 | data | 边表（dest 链） |
  |---|---|---|
  | 0 | A | 2 → Λ |
  | 1 | B | 0 → Λ |
  | 2 | C | 0 → 1 → 3 → Λ（C 指向 A、B、D，出度 3） |
  | 3 | D | 0 → Λ |

- **示例：无向图 G13 的邻接表**（顶点编号 0:A、1:B、2:C、3:D、4:E，边集 $\{A\text{-}C, A\text{-}E, A\text{-}D, B\text{-}D\}$）：<!-- src: DS-C5-1#s045; type: compressed -->

  | 下标 | data | 边表（dest 链） |
  |---|---|---|
  | 0 | A | 2 → 4 → 3 → Λ |
  | 1 | B | 3 → Λ |
  | 2 | C | 0 → Λ |
  | 3 | D | 0 → 1 → Λ |
  | 4 | E | 0 → Λ |

  共 8 个边结点，体现每条无向边存储 2 次。<!-- src: DS-C5-1#s045; type: direct -->

- **示例：有向图 G12 的逆邻接表**（与 G11 是同一个图；边结点字段 src/link，src 为边的源顶点下标）：<!-- src: DS-C5-1#s048 + DS-C5-2#s031; type: compressed -->

  | 下标 | data | 边表（src 链） |
  |---|---|---|
  | 0 | A | 1 → 2 → 3 → Λ（B、C、D 射向 A，入度 3） |
  | 1 | B | 2 → Λ |
  | 2 | C | 0 → Λ |
  | 3 | D | 2 → Λ |

- **另外一种邻接表（链式顶点表）**：顶点表不用数组，改用单链表。优点：不需要预估顶点个数，方便插入顶点。结构：head 指针指向顶点链表表头；每个顶点结点含字段 data（顶点数据）、next（指向下一个顶点结点）、adj（指向边表）；此时边结点的 dest 存放的是指向目标顶点结点的**指针**，而非数组下标。示例 G14（与 G13 同构）：顶点链 head → A → B → C → D → E；各顶点边表（⟨X⟩ 表示指向顶点 X 结点的指针）：A: ⟨C⟩→⟨D⟩→⟨E⟩→Λ；B: ⟨D⟩→Λ；C: ⟨A⟩→Λ；D: ⟨A⟩→⟨B⟩→Λ；E: ⟨A⟩→Λ。<!-- src: DS-C5-1#s046; type: compressed -->

### 2.4 邻接表的代码实现

- **存储设计要点**：默认最大顶点数 `DefaultNumVertex`=20；越界用异常类 `outOfBound` 处理。边结点 `edgeNode<edgeType>` 含 `dest`（边的目标顶点下标）、`weight`（边权，如距离/费用）、`link`（指向下一条边）；顶点结点 `verNode<verType,edgeType>` 含 `data`（顶点数据）、`adj`（指向该顶点出发的所有边构成的边表表头）。<!-- src: DS-C5-1#s049 + DS-C5-1#s050 + DS-C5-2#s032; type: synthesized -->
- **基础定义代码**（宏、异常类、边结点与顶点结点结构体，逐字转写）：<!-- src: DS-C5-1#s049 + DS-C5-2#s032; type: direct -->

<details>
<summary>代码</summary>

```cpp
#define DefaultNumVertex 20 // 默认的最大顶点数为20

// 定义一个异常类，用于处理越界情况
class outOfBound {};

// 定义一个表示边的结构体（每条边连接两个顶点）
template <class edgeType>
struct edgeNode {
    int dest; // 边的目标顶点的下标
    edgeType weight; // 边的权重（例如，距离、费用等）
    edgeNode *link; // 指向下一条边的指针（用于链式存储）
};

// 定义一个表示顶点的结构体（每个顶点包含该顶点的数据及其邻接边的链表）
template <class verType, class edgeType>
struct verNode {
    verType data; // 存储顶点的数据（例如，顶点的标签或标识）
    edgeNode<edgeType> *adj; // 指向邻接边的链表（表示从该顶点出发的所有边）
};
```

</details>

- **邻接表版 Graph 类模板声明**（跨两页连续，逐字转写。注：`disp()` 的注释为"显示图的邻接矩阵"，系讲义原文如此，沿用了邻接矩阵版本的注释）：<!-- src: DS-C5-1#s050 + DS-C5-1#s051 + DS-C5-2#s033 + DS-C5-2#s034; type: direct -->

<details>
<summary>代码</summary>

```cpp
// 定义图类，表示一个带有顶点和边的图
template <class verType, class edgeType>
class Graph {
  private:
    bool directed; // 是否为有向图，1表示有向图，0表示无向图
    int verts, edges; // 当前图的实际顶点数和边数
    int maxVertex; // 图中顶点的最大数量
    verNode<verType, edgeType> *verList; // 存储图中顶点的数组，每个顶点包含其数据和邻接边的链表

  public:
    Graph(bool direct); // 构造函数：初始化图结构，direct为是否有向图标志
    ~Graph(); // 析构函数：释放图结构占用的内存
    int numberOfVertex() const { return verts; } // 返回图中的顶点数
    int numberOfEdge() const { return edges; } // 返回图中的边数
    int getVertex(verType vertex) const; // 根据顶点值返回其在顶点数组中的下标
    bool existEdge(verType vertex1, verType vertex2) const; // 判断两个顶点之间是否存在边
    int getFirstNeighbor(verType vertex) const; // 获取顶点的第一个邻接点，如果没有返回-1
    int getNextNeighbor(verType vertex1, verType vertex2) const; // 获取顶点vertex1相对于顶点vertex2的下一个邻接点，如果没有返回-1
    void disp() const; // 显示图的邻接矩阵
    void insertVertex(verType vertex); // 插入一个顶点
    void insertEdge(verType vertex1, verType vertex2, edgeType edge); // 插入一条边，连接vertex1和vertex2
    void removeVertex(verType vertex); // 删除一个顶点
    void removeEdge(verType vertex1, verType vertex2); // 删除一条边，连接vertex1和vertex2
};
```

</details>

- **构造函数**（逐字转写）：<!-- src: DS-C5-1#s052 + DS-C5-2#s035; type: direct -->

<details>
<summary>代码</summary>

```cpp
// 初始化图结构，direct为是否有向图标志
template <class verType, class edgeType>
Graph<verType, edgeType>::Graph(bool direct) {
    // 初始化图的属性
    directed = direct;
    verts = 0;
    edges = 0;
    maxVertex = DefaultNumVertex;

    // 为顶点数组分配空间，每个顶点包含其数据和邻接边链表
    verList = new verNode<verType, edgeType>[maxVertex];
}
```

</details>

- **析构函数**（先逐顶点释放整条边链表，再释放顶点数组，逐字转写）：<!-- src: DS-C5-1#s053 + DS-C5-2#s036; type: direct -->

<details>
<summary>代码</summary>

```cpp
// 析构函数，释放图结构占用的内存
template <class verType, class edgeType>
Graph<verType, edgeType>::~Graph() {
    int i;
    edgeNode<edgeType> *p;

    // 释放所有顶点的邻接边
    for (i = 0; i < verts; i++) {
        // 清理当前顶点的边链表
        while (verList[i].adj) {
            p = verList[i].adj;
            verList[i].adj = p->link;
            delete p; // 删除当前边结点
        }
    }

    // 释放顶点数组
    delete[] verList;
}
```

</details>

- **insertEdge**（逐字转写）：<!-- src: DS-C5-1#s054 + DS-C5-2#s037; type: direct -->

<details>
<summary>代码</summary>

```cpp
template <class verType, class edgeType> // 插入一条边，连接vertex1和vertex2，并指定边的权重
void Graph<verType, edgeType>::insertEdge(verType vertex1, verType vertex2, edgeType edge) {
    int i, j;
    edgeNode<edgeType> *tmp;

    // 查找顶点vertex1和vertex2的下标
    for (i = 0; i < verts; i++) { if (verList[i].data == vertex1) break;}
    for (j = 0; j < verts; j++) { if (verList[j].data == vertex2) break;}
    if ((i == verts) || (j == verts)) return; // 如果顶点未找到，直接返回
    if (i == j) return; // 如果两个顶点相同，则不插入边

    tmp = new edgeNode<edgeType>; // 在顶点i的邻接链表中插入一条边
    tmp->dest = j; // 设置目标顶点为j
    tmp->weight = edge; // 设置边的权重
    tmp->link = verList[i].adj; // 链接到当前顶点的边链表
    verList[i].adj = tmp; // 更新邻接链表
    edges++; // 增加边数

    if (!directed) {// 如果是无向图，则需要在vertex2的邻接链表中也插入一条边
        tmp = new edgeNode<edgeType>;
        tmp->dest = i; // 设置目标顶点为i
        tmp->weight = edge; // 设置边的权重
        tmp->link = verList[j].adj; // 链接到当前顶点的边链表
        verList[j].adj = tmp; // 更新邻接链表
    }
}
```

</details>

- **insertEdge 算法要点（易错点）**：①先按顶点值线性查找两顶点在顶点表中的下标 $i$、$j$，任一未找到直接返回；②两顶点相同（$i==j$，自环）不插入；③新边结点采用**表头插入**：`tmp->link` 指向原表头 `verList[i].adj`，再令 `verList[i].adj = tmp`；④`edges++` 只执行一次（按逻辑边计数）；⑤无向图还需在 vertex2 的边表头部再镜像插入一个 `dest=i`、权重相同的边结点（同一条边两个边结点），但 edges 不再增加。<!-- src: DS-C5-1#s054 + DS-C5-2#s037; type: compressed -->
- **removeVertex**（跨三页连续代码，逐字转写）：<!-- src: DS-C5-1#s055 + DS-C5-1#s056 + DS-C5-1#s057 + DS-C5-2#s038 + DS-C5-2#s039 + DS-C5-2#s040; type: direct -->

<details>
<summary>代码</summary>

```cpp
// 删除指定的顶点
template <class verType, class edgeType>
void Graph<verType, edgeType>::removeVertex(verType vertex) {
    int i, j;
    int count = 0;
    edgeNode<edgeType> *p, *q;

    // 查找顶点在顶点数组中的下标
    for (i = 0; i < verts; i++) {
        if (verList[i].data == vertex) break;
    }

    // 如果顶点未找到，返回
    if (i == verts) return;

    // 删除该顶点的所有邻接边并计数
    p = verList[i].adj;
    while (p) {
        count++; // 计数已删除的边
        verList[i].adj = p->link;
        delete p; // 删除当前边
        p = verList[i].adj;
    }

    // 删除所有包含目标顶点的边（即目标顶点为当前顶点的边）
    for (j = 0; j < verts; j++) {
        p = verList[j].adj;
        q = NULL;
        while (p) {
            if (p->dest == i) break;
            q = p;
            p = p->link;
        }
        if (!p) continue;
        if (!q) verList[j].adj = p->link; // 如果是链表头部，直接更新头指针
        else q->link = p->link; // 否则，删除链表中的节点
        delete p; // 删除目标边
        count++;
    }

    // 更新邻接表中所有目标顶点大于i的边的目标顶点
    for (j = 0; j < verts; j++) {
        p = verList[j].adj;
        while (p) {
            if (p->dest > i) p->dest--; // 更新目标顶点下标
            p = p->link;
        }
    }

    // 更新边数：有向图直接减少count，无向图减少count的一半
    if (directed) edges -= count;
    else edges -= count / 2;

    // 删除顶点：将顶点表中删除的顶点后面的顶点前移
    for (j = i; j < verts - 1; j++) {
        verList[j] = verList[j + 1];
    }

    verts--; // 减少顶点数
}
```

</details>

- **removeVertex 算法五步流程（邻接表版）**：①按顶点值线性查找下标 $i$，未找到直接返回；②删除顶点 $i$ 的整条出边链表，每删一个边结点 `count++`；③遍历其余每个顶点 $j$ 的边表，找到 `dest==i` 的边结点并删除（用前驱指针 q 区分：q 为 NULL 时是表头，直接更新 `verList[j].adj = p->link`，否则 `q->link = p->link`），每删一条 `count++`；④遍历所有边表，把 `dest>i` 的边结点的 dest 减 1（因为顶点表前移后下标整体减小）；⑤更新边数——有向图 `edges -= count`，无向图 `edges -= count/2`；最后把顶点表中 $i$ 之后的顶点整体前移一位，`verts--`。<!-- src: DS-C5-1#s055 + DS-C5-1#s056 + DS-C5-1#s057 + DS-C5-2#s038 + DS-C5-2#s039 + DS-C5-2#s040; type: synthesized -->
- **removeVertex 易错点**：①无向图边数更新是 `edges -= count/2`，因为每条无向边对应 2 个边结点，被删顶点自身边表与各邻居边表中的对应结点各计一次；有向图 count 即为删除的边数（出边+入边），edges 直接减 count。②删除顶点后必须把所有 `dest>i` 的边结点下标减 1，否则顶点表前移后下标失配。③第二阶段对每个顶点 $j$ 的边表只查找并删除第一个 `dest==i` 的边结点（找到即 break）——对无重边的简单图恰好正确。<!-- src: DS-C5-1#s055 + DS-C5-1#s056 + DS-C5-1#s057 + DS-C5-1#s045; type: one-step-inferred -->


## 三、图的遍历

### 3.1 遍历概述

- **图的遍历定义**：对有向图和无向图进行遍历，是按照某种方式逐个访问图中的所有顶点，并且**每个顶点只能被访问一次**。<!-- src: DS-C5-1#s066 + DS-C5-2#s049; type: direct -->
- **最简单的遍历方式（不借用边信息）**：无论采用邻接矩阵还是邻接表存储，顶点都用一个顶点表存储，因此最简单的遍历方式是沿着顶点表循环访问一遍。这种方式完全没有借用边的信息。<!-- src: DS-C5-1#s066 + DS-C5-2#s049; type: direct -->
- **借助边信息实现遍历的两种算法**：深度优先遍历（DFS）和广度优先遍历（BFS）。<!-- src: DS-C5-1#s067 + DS-C5-2#s050; type: direct -->
- **与树遍历的关系**：从某种程度上可以把图的遍历看成二叉树结构遍历的推广。<!-- src: DS-C5-1#s068 + DS-C5-2#s051; type: direct -->
- **图遍历的两点特殊性**：①图中的顶点地位相同，没有类似树结构中那样一个特殊的根结点（遍历可从任一顶点出发）；②根据边信息访问顶点时，任一顶点可能和图中多个其它顶点邻接，可能存在回路，访问一个顶点 u 之后很可能沿着其他路径再次返回 u——因此遍历过程中通常**对已经访问过的顶点加特殊标记**（visited 访问标记）以避免重复访问。<!-- src: DS-C5-1#s069 + DS-C5-1#s070 + DS-C5-2#s052 + DS-C5-2#s053; type: synthesized -->

### 3.2 深度优先遍历（DFS）

#### 算法描述

- **深度优先遍历 DFS**（标准英文为 Depth-First Search；讲义英文标注作 Deep First Search）：访问方式类似于二叉树的**前序访问**。流程：(1) 选中第一个未被访问过的顶点；(2) 访问该顶点、对顶点加已访问标志；(3) 依次从该顶点的未被访问过的第一个、第二个、第三个……邻接顶点出发，依次进行深度优先搜索（即转向步骤 (2)）；(4) 如果还有顶点未被访问过，选中其中一个作为起始顶点，转向步骤 (2)；如果所有的顶点都被访问到，结束。<!-- src: DS-C5-1#s072 + DS-C5-2#s055; type: direct -->
- **示例图 G17（有向图）**：顶点 $\{A,B,C,D,E,F\}$，弧集 $\{\langle A,C\rangle, \langle C,A\rangle, \langle C,B\rangle, \langle C,D\rangle, \langle D,A\rangle, \langle B,A\rangle, \langle B,F\rangle, \langle E,C\rangle\}$（A、C 之间双向各一条弧）。其中 E 只有一条出弧 ⟨E,C⟩ 而没有入弧；F 只有一条入弧 ⟨B,F⟩ 而没有出弧。<!-- src: DS-C5-1#s073 + DS-C5-2#s056; type: direct -->
- **DFS 逐步演示·方法 1（选 A 为出发点，按 Depth=1..4 逐层推进）**：Depth=1 访问 A；Depth=2 沿弧 A→C 访问 C；Depth=3 从 C 出发沿 C→B、C→D 访问 B 和 D；Depth=4 沿 B→F 访问 F（B 的邻接点 A 与 D 的邻接点 A 均已访问）。此时 E 仍未被访问（E 无入弧、从 A 不可达），按步骤 (4)"选剩下的 E"作为新的起始顶点访问之。结果为含两棵树的深度优先生成森林：树 1 为 A→C，C→{B,D}，B→F；树 2 为孤立顶点 E；访问序列 A,C,B,F,D,E。<!-- src: DS-C5-2#s056 + DS-C5-2#s057 + DS-C5-2#s058 + DS-C5-2#s059 + DS-C5-2#s060; type: synthesized -->
- **DFS 逐步演示·方法 2（选 E 为出发点）**：Depth=1 访问 E；Depth=2 沿 E→C 访问 C；Depth=3 从 C 出发沿 C→B、C→D 访问 B 和 D；Depth=4 从 B 出发沿 B→F、B→A 访问 F 和 A（此时 A 尚未被访问，故 A 成为 B 的孩子）。一次出发即访问全部 6 个顶点，得到单棵深度优先生成树：E→C，C→{B,D}，B→{F,A}；访问序列 E,C,B,F,A,D。<!-- src: DS-C5-2#s061 + DS-C5-2#s062 + DS-C5-2#s063 + DS-C5-2#s064; type: synthesized -->
- **性质：同一个图的深度优先遍历结果并不唯一**。讲义即以 G17 的上述两种不同深度遍历结果（从 A 出发与从 E 出发）为例。<!-- src: DS-C5-1#s073 + DS-C5-2#s065; type: direct -->
- **观察（易错点）**：有向图 DFS 一次出发能否访问全部顶点取决于出发点的选取——从 A 出发时 E 不可达，必须再选起点，结果是生成森林；从 E 出发则所有顶点可达，一次遍历即得单棵生成树。同一顶点在不同遍历中可处于生成树的不同位置（如 A 在方法 1 中是根，在方法 2 中是 B 的孩子）。<!-- src: DS-C5-2#s056 + DS-C5-2#s060 + DS-C5-2#s061 + DS-C5-2#s064; type: one-step-inferred -->

#### 递归实现

- **递归算法思想**：图 DFS 的定义和二叉树前序遍历类似（前序遍历：首先访问根结点，然后以左子为根前序遍历左子树，以右子为根前序遍历右子树）。图的深度优先遍历：访问某个顶点，然后再以其第一个邻接点为起始顶点做深度优先遍历，以其第二个邻接点为起始顶点做深度优先遍历，……，以其最后一个邻接点为起始顶点做深度优先遍历。因此图的 DFS 算法可看作二叉树前序遍历的扩展。<!-- src: DS-C5-1#s074 + DS-C5-1#s075 + DS-C5-2#s066 + DS-C5-2#s067; type: synthesized -->
- **递归算法必须处理的两个特殊点**：①图可能不连通——从一个顶点开始做 DFS 可能只能访问到部分顶点，此时需要重新选择尚未访问的顶点再次开始 DFS；②一个顶点可能和其他多个顶点邻接——以它为起始顶点做 DFS 前需检查是否已经访问过，未访问过遍历才能进行。<!-- src: DS-C5-1#s076 + DS-C5-2#s068; type: direct -->
- **回顾：二叉树前序遍历递归算法**（对照模板，逐字转写）：<!-- src: DS-C5-1#s077 + DS-C5-2#s069; type: direct -->

<details>
<summary>代码</summary>

```cpp
template <class elemType>
void BTree<elemType>::PreOrder(Node<elemType> *t) {
	//前序遍历以t为根二叉树递归算法的实现。
  	if (!t) return;
    cout << t->data;
    PreOrder(t->left);
    PreOrder(t->right);
}
```

</details>

- **图 DFS 递归算法核心函数**（邻接表存储，逐字转写；幻灯片红字注：可视作二叉树前序递归算法实现扩展）：<!-- src: DS-C5-1#s078 + DS-C5-2#s070; type: direct -->

<details>
<summary>代码</summary>

```cpp
template <class verType, class edgeType>
void Graph<verType, edgeType>::DFS(int start, bool visited[]) const
{ 
	edgeNode<edgeType> *p;
  	cout<<verList[start].data<<'\t'; 	
	visited[start] = true; 
	p = verList[start].adj;
	while (p){ 
		if (!visited[p->dest]) 
			DFS(p->dest, visited);
    	p = p->link;
	}
}
```

</details>

  要点：先访问 start 并置 `visited[start]=true`，再沿 `verList[start].adj` 的边表逐个检查邻接点 `p->dest`，未访问的递归 DFS，然后 `p=p->link` 继续。<!-- src: DS-C5-1#s078; type: compressed -->

- **图 DFS 递归算法驱动函数**（负责创建并初始化 visited 数组、处理非连通图的多起点，逐字转写）：<!-- src: DS-C5-1#s079 + DS-C5-2#s071; type: direct -->

<details>
<summary>代码</summary>

```cpp
template <class verType, class edgeType>
void Graph<verType, edgeType>::DFS() const { 
  bool *visited; int i;
  visited = new bool[verts]; 
  if (!visited) throw illegalSize();
  for (i=0; i<verts; i++) visited[i]=false;
    for (i=0; i<verts; i++){ 
  	  if (!visited[i]) DFS(i, visited);
  	  cout<<endl; 
    } 
}
```

</details>

  要点：visited 用 new 动态分配，分配失败抛 `illegalSize()`；第二个 for 对每个尚未访问的顶点 i 调用 `DFS(i, visited)`。注意 `cout<<endl` 在第二个 for 的循环体内**无条件执行**，即每次外循环迭代（共 n 次）都输出换行（顶点已访问时输出的是空行），与非递归版中换行恰好每棵 DFS 树一行不同。<!-- src: DS-C5-1#s079; type: compressed -->

- **递归 DFS 时间复杂度**（邻接表存储，$n$ 个顶点、$e$ 条边）：第一个 for 循环初始化 visited 数组，时间为 $O(n)$；第二个 for 循环中每一次循环体的执行都有一个顶点被访检查，一共 $n$ 个顶点，每个顶点又通过 `DFS(int start, bool visited[])` 遍历了它的边表，因此总的时间复杂度为 $O(n+e)$。<!-- src: DS-C5-1#s079 + DS-C5-2#s071; type: direct -->

#### 非递归实现

- **非递归算法思想（与二叉树前序非递归对照）**：二叉树前序非递归——建立一个栈，根结点进栈，反复执行：栈不空则弹出访问，访问结点有右子则右子进栈，有左子则左子进栈（右先进左后进，保证左子树先被访问）。图的 DFS 非递归——建立一个栈，选一个顶点进栈，反复执行：栈不空则弹出访问，把第一个未被访问的邻接点进栈，第二个未被访问的邻接点进栈，……，最后一个未被访问的邻接点进栈。<!-- src: DS-C5-1#s080 + DS-C5-1#s081 + DS-C5-2#s072 + DS-C5-2#s073; type: synthesized -->
- **回顾：二叉树前序遍历非递归算法**（逐字转写）：<!-- src: DS-C5-1#s082 + DS-C5-2#s074; type: direct -->

<details>
<summary>代码</summary>

```cpp
template <class elemType>
void BTree<elemType>::PreOrder() {
	//前序遍历的非递归算法实现
	if (!root) return;
  	Node<elemType> *p;
	seqStack<Node<elemType> *> s;
	s.push(root);
	while (!s.isEmpty()){ 
    	p=s.top(); 
    	s.pop();
    	cout << p->data;
    	if (p->right) s.push(p->right);
    	if (p->left) s.push(p->left);
    }
    cout << endl;
}
```

</details>

- **图 DFS 非递归算法实现**（邻接表存储，栈保存顶点编号 int，跨页连续代码逐字转写）：<!-- src: DS-C5-1#s083 + DS-C5-1#s084 + DS-C5-2#s075 + DS-C5-2#s076 + DS-C5-2#s077; type: direct -->

<details>
<summary>代码</summary>

```cpp
template <class verType, class edgeType>
void Graph<verType, edgeType>::DFS()const { 
  seqStack<int> s;
  edgeNode<edgeType> *p; 
  bool *visited; 
  int i, start;
  //为visited创建动态数组空间，并置初始访问标志为false。
  visited = new bool[verts]; 
  if (!visited) throw illegalSize();
  for (i=0; i<verts; i++) {
  	visited[i]=false;
    }
  //逐一找到未被访问过顶点，做深度优先遍历
  for (i=0; i<verts; i++){ 
  	if (visited[i]) continue;
  	s.push(i);
    	while (!s.isEmpty()) { 
  		start = s.top(); s.pop();
          if (visited[start]) continue;
          cout<<verList[start].data<<'\t';
          visited[start] = true;
  		p = verList[start].adj;
  		while (p) { 
          	if (!visited[p->dest]) s.push(p->dest);
          	p = p->link;
          }
  	}
  	cout<<'\n';
  }
}
```

</details>

  结构要点：栈中保存顶点编号 int；外层 for 逐一找未被访问过的顶点作起点（已访问则 continue）；弹栈后先判 `visited[start]` 已访问则 continue，否则访问、置标志，再把 start 边表中所有未访问的 `p->dest` 依次进栈；每棵 DFS 树结束输出换行。<!-- src: DS-C5-1#s083 + DS-C5-1#s084; type: compressed -->

- **非递归 DFS 时间复杂度**（邻接表存储）：第一个 for 循环初始化 visited 数组，时间 $O(n)$。第二个 for 循环体中嵌套了 while 循环，while 中又嵌套 while，三层循环的循环次数并非相互独立。先看两个 while 嵌套：外层 while 每次循环体的执行访问一个顶点并遍历它的边表，故时间复杂度为 $O(n+e)$；再看外层 for：循环体执行 $n$ 次，但前面循环中访问过的结点将不再进入内部 while 循环，因此打开 for 循环成为串行结构，总的时间复杂度仍为 $O(n+e)$。<!-- src: DS-C5-1#s084 + DS-C5-1#s085 + DS-C5-2#s076 + DS-C5-2#s077; type: synthesized -->
- **易错点**：同一顶点可能被多个顶点邻接而被多次进栈（进栈时只检查当时未访问），因此代码在弹栈后必须再次检查 `if (visited[start]) continue;`，否则同一顶点会被重复访问输出。<!-- src: DS-C5-1#s084 + DS-C5-2#s076; type: one-step-inferred -->

#### 非递归算法的改进

- **改进（邻接表存储）**：栈可以不保存顶点，而是保存**边结点地址**。因为每个顶点射出的所有边都在各自用单链表表示的边表中，不需要把访问顶点的所有相邻顶点进栈，只需要将该顶点在边表中的一条其 dest 顶点未被访问的边结点地址进栈；它出栈时，根据边结点中 link 字段找下一条其 dest 顶点未被访问的边，如果有，将它进栈。这样便可保证同一弧尾顶点的所有邻接点可以被一个个挨着查验过去。<!-- src: DS-C5-1#s086 + DS-C5-1#s087 + DS-C5-2#s078 + DS-C5-2#s079; type: synthesized -->
- **改进（邻接矩阵存储）**：访问完顶点 $i$，可从第 0 列开始逐列检查第 $i$ 行；如果遇到第一个有边且顶点 $j$ 未被访问过，将描述边位置的**两元组 $(i,j)$** 进栈；它出栈时，让第 $i$ 行第 $j$ 列后第一个有边且 $j+m$ 顶点未被访问过的两元组 $(i,j+m)$ 进栈即可。<!-- src: DS-C5-1#s088 + DS-C5-2#s080; type: direct -->

### 3.3 广度优先遍历（BFS）

#### 算法描述

- **广度优先遍历 BFS**（Breadth First Search）：访问方式类似于二叉树的**层次遍历**。流程：(1) 选中第一个未被访问的顶点；(2) 访问该顶点、对顶点置已访问过的标志；(3) 依次对该顶点的未被访问过的第一个、第二个、第三个……第 $m$ 个邻接顶点 $W_1, W_2, W_3, \dots, W_m$ 进行访问且进行标记；(4) 依次对顶点 $W_1, W_2, \dots, W_m$ 转向操作 (3)；(5) 如果还有顶点未被访问，任选其中一个顶点作为起始顶点，转向 (2)；如果所有的顶点都被访问到，遍历结束。（注：幻灯片上末步序号原文误标为"4"、与上一步重复，此处按顺序记为 (5)。）<!-- src: DS-C5-1#s090 + DS-C5-2#s082; type: direct -->
- **示例图 G18（无向图，非连通）**：顶点集 $\{0,1,2,3,4,5,6,7\}$，边集共 9 条：$(0,1)$、$(0,2)$、$(0,3)$、$(0,6)$、$(1,3)$、$(2,6)$、$(3,6)$、$(4,5)$、$(5,7)$；含两个连通分量 $\{0,1,2,3,6\}$ 和 $\{4,5,7\}$。<!-- src: DS-C5-1#s091 + DS-C5-2#s083; type: compressed -->
- **BFS 逐步演示（一）：起始点为 1**（第二连通分量起始点为 7），按层（Breadth=k 表示扩展到生成树第 k 层，起始顶点为第 1 层）推进——Breadth=1：访问 1（及 7）；Breadth=2：访问 1 的全部未访问邻接点 0、3（及 7 的邻接点 5）；Breadth=3：访问 0 的未访问邻接点 2、6（及 5 的未访问邻接点 4）。完整访问序列：1, 0, 3, 2, 6, 7, 5, 4。对应 BFS 生成森林：树 1 为 1→{0,3}、0→{2,6}；树 2 为 7→5、5→4。<!-- src: DS-C5-2#s083 + DS-C5-2#s084 + DS-C5-2#s085 + DS-C5-1#s091; type: synthesized -->
- **BFS 逐步演示（二）：起始点为 6**（第二连通分量起始点为 5）——Breadth=1：访问 6（及 5）；Breadth=2：访问 6 的全部未访问邻接点 2、0、3（及 5 的全部邻接点 4、7）；Breadth=3：访问 0 的未访问邻接点 1。完整访问序列：6, 2, 0, 3, 1, 5, 4, 7。对应 BFS 生成森林：树 1 为 6→{2,0,3}、0→1；树 2 为 5→{4,7}。<!-- src: DS-C5-2#s086 + DS-C5-2#s087 + DS-C5-2#s088 + DS-C5-1#s091; type: synthesized -->
- **性质：同一个图的广度优先遍历结果并不唯一**，讲义即以 G18 的上述两种 BFS 结果（起始点 1 与起始点 6）为例。（注：该页正文原文写作"对 G18 的两种不同的深度遍历结果"，结合图题"(b)/(c) G18 的广度优先遍历"可知"深度"系笔误，实指广度优先遍历。）<!-- src: DS-C5-1#s091 + DS-C5-2#s089; type: direct -->

#### 算法实现

- **BFS 基于队列的算法思想**（和二叉树的层次遍历实现方法类似）：程序首先将所有顶点的访问标志初始化为 false，然后进入外层 for 循环。在外循环中，顺序找未被访问过的顶点作起始顶点，将起始顶点进队，然后反复执行以下循环：顶点出队，如果未访问过，访问之并将它所有未被访问过的邻接点进队，反复循环，直到队空。继续下一轮外循环，直到所有的顶点都被检查过。<!-- src: DS-C5-1#s092 + DS-C5-2#s090; type: direct -->
- **回顾：二叉树层次遍历的算法实现**（对照模板，逐字转写）：<!-- src: DS-C5-1#s093 + DS-C5-2#s091; type: direct -->

<details>
<summary>代码</summary>

```cpp
template <class elemType>
void BTree<elemType>::LevelOrder() {
	//层次遍历二叉树算法的实现。
	seqQueue<Node<elemType> *> que;
	Node<elemType> *p;
  	if (!root) return; //二叉树为空
	que.enQueue(root);
    while (!que.isEmpty()){ 
    	p = que.front(); 
    	que.deQueue();
    	cout << p->data;
    	if (p->left) que.enQueue(p->left);
    	if (p->right)	que.enQueue(p->right);
	}
	cout << endl; 
}
```

</details>

- **图 BFS 算法实现**（Graph 类成员函数，邻接表存储，跨两页连续代码逐字转写。转写说明：函数体左花括号写在 `//广度优先遍历` 注释之后的同一行、`'\t’` 与 `'\n’` 的右弯引号均按幻灯片原样保留）：<!-- src: DS-C5-1#s094 + DS-C5-1#s095 + DS-C5-2#s092 + DS-C5-2#s093; type: direct -->

<details>
<summary>代码</summary>

```cpp
template <class verType, class edgeType>
void Graph<verType, edgeType>::BFS()const//广度优先遍历 { 
  seqQueue<int> q; 
  edgeNode<edgeType> *p;
  bool *visited; 
  int i, start;
  //为visited创建动态数组空间，并置初始访问标志为false。
  visited = new bool[verts];
  if (!visited) throw illegalSize();
  for (i=0; i<verts; i++) visited[i]=false;

  //逐一找到未被访问过顶点，做广度优先遍历
  for (i=0; i<verts; i++){ 
  	if (visited[i]) continue;
  	q.enQueue(i);
    	while (!q.isEmpty()) { 
  		start = q.front(); 
  		q.deQueue();
  		if (visited[start]) continue;
  		cout<<verList[start].data<<'\t’;
  		visited[start] = true;
  		p = verList[start].adj;
    	while (p) {
    		if (!visited[p->dest]) q.enQueue(p->dest);
    		p = p->link;
    	}
  	}
  	cout<<'\n’;
  }
}
```

</details>

- **BFS 实现要点**：①队列 `seqQueue<int>` 中存放的是顶点编号 int（而非顶点本身）；②visited 用 `new bool[verts]` 动态分配，分配失败 `throw illegalSize()`，并先全部初始化为 false；③外层 for 对每个 i 判断 `if (visited[i]) continue`，未访问才入队启动一轮 BFS，从而覆盖非连通图的所有连通分量；④访问操作为输出 `verList[start].data`（'\t' 分隔）并置 `visited[start]=true`，随后沿 `verList[start].adj` 链表把所有未访问邻接点入队；⑤每个连通分量遍历结束输出一个换行。<!-- src: DS-C5-1#s094 + DS-C5-1#s095 + DS-C5-2#s090 + DS-C5-2#s092; type: compressed -->
- **BFS 时间复杂度**（邻接表存储）：外层 for 循环的循环体执行了 $n$ 次，但前面循环中访问过的结点将不再进入内部 while 循环，因此打开 for 循环成为串行结构，总的时间复杂度仍为 $O(n+e)$（$n$ 为顶点数，$e$ 为边数）。<!-- src: DS-C5-1#s095 + DS-C5-2#s093; type: direct -->
- **易错点**：该实现在入队时只检查邻接点未被访问、并不立即置访问标志，因此同一顶点可能被多个先访问的邻接顶点重复入队；故出队后必须再次判断 `if (visited[start]) continue;`，访问时才置 `visited[start]=true`。漏掉出队后的二次检查会导致顶点被重复访问/输出。<!-- src: DS-C5-1#s095 + DS-C5-2#s092; type: one-step-inferred -->

### 3.4 例题：最大岛屿面积（网格上的 DFS 应用）

- **题面**：给你一个大小为 $m \times n$ 的二进制矩阵 grid。岛屿是由一些相邻的 1（代表土地）构成的组合，这里的「相邻」要求两个 1 必须在**水平或者竖直**的四个方向上相邻。你可以假设 grid 的四个边缘都被 0（代表水）包围着。岛屿的面积是岛上值为 1 的单元格的数目。计算并返回 grid 中最大的岛屿面积；如果没有岛屿，则返回面积为 0。<!-- src: DS-C5-2#s094; type: direct -->
- **示例**：示例 1 输入（8×13 矩阵，从幻灯片矩阵图逐格转写）：<!-- src: DS-C5-2#s095; type: direct -->

<details>
<summary>代码</summary>

  ```text
  [[0,0,1,0,0,0,0,1,0,0,0,0,0],
   [0,0,0,0,0,0,0,1,1,1,0,0,0],
   [0,1,1,0,1,0,0,0,0,0,0,0,0],
   [0,1,0,0,1,1,0,0,1,0,1,0,0],
   [0,1,0,0,1,1,0,0,1,1,1,0,0],
   [0,0,0,0,0,0,0,0,0,0,1,0,0],
   [0,0,0,0,0,0,0,1,1,1,0,0,0],
   [0,0,0,0,0,0,0,1,1,0,0,0,0]]
  ```

</details>

  输出：6。解释：答案不应该是 11，因为岛屿只能包含水平或垂直这四个方向上的 1。示例 2 输入：`grid = [[0,0,0,0,0,0,0,0]]`，输出：0（全为水，无岛屿）。<!-- src: DS-C5-2#s095; type: direct -->

- **易错点**：「相邻」仅限水平/竖直四个方向，对角线相邻的 1 不属于同一岛屿——示例 1 中若误把对角相邻的连通块合并会得到 11，正确答案为 6；无岛屿时须返回 0。<!-- src: DS-C5-2#s095; type: compressed -->
- **题解代码**（s096 为递归 DFS 辅助函数 getArea，s097 为主函数 maxAreaOfIsland，逐字转写）：<!-- src: DS-C5-2#s096 + DS-C5-2#s097; type: direct -->

<details>
<summary>代码</summary>

```cpp
int getArea(vector<vector<int>>& grid, int i, int j){
	//由于坐标每次 +1 ，所以判断是否等于数组长度即可
  	if (i == grid.size() || i < 0) return 0;
  	else if (j == grid[0].size() || j < 0) return 0;
  	if (grid[i][j] == 1){
  		grid[i][j] = 0;
        return 1 + getArea(grid, i + 1, j) + getArea(grid, i - 1, j ) + getArea(grid, i, j + 1) + getArea(grid, i, j - 1);
  	}
  	return 0;
}
```

</details>

<details>
<summary>代码</summary>

```cpp
public:
	int maxAreaOfIsland(vector<vector<int>>& grid) {
	int maxArea = 0;
	int area = 0;
    for (int i = 0; i < grid.size(); i++){
    	for (int j = 0; j < grid[0].size(); j++){
    		if (grid[i][j] == 1){
            	//以此为中心，向四周扩散
            	area = getArea(grid, i, j);
            	 //取较大value
            	maxArea = maxArea > area ? maxArea : area; 
            	}
            }
    }
    return maxArea;
}
```

</details>

- **可迁移的一般方法（网格求最大连通块面积）**：①主函数双重 for 枚举每个单元格，遇到 `grid[i][j]==1` 的格子就以此为中心向四周扩散，调用 `getArea(grid,i,j)` 求该岛面积，并用三目运算符取较大值更新 maxArea；②getArea 递归（DFS）结构：先判越界返回 0——由于坐标每次 ±1，越界判断只需 `i == grid.size() || i < 0` 与 `j == grid[0].size() || j < 0`；当前格为 1 时先置 `grid[i][j]=0`（**把访问过的格子改为 0 代替 visited 数组**，避免重复计数和无限递归），返回 1 + 上下左右四个方向递归结果之和；当前格为 0 则返回 0；③该写法会修改原矩阵 grid（按引用传入）。<!-- src: DS-C5-2#s096 + DS-C5-2#s097; type: synthesized -->

## 四、图的连通性

本节大纲范围子专题：无向图的连通性、有向图的连通性、欧拉回路。<!-- src: DS-C5-1#s097 + DS-C5-2#s099; type: compressed -->


### 4.1 无向图的连通性与连通分量

- **判定原理**：如果无向图是连通的，那么选定图中任何一个顶点，从该顶点出发，通过一次遍历（深度优先或广度优先）就能到达图中其他所有顶点。<!-- src: DS-C5-1#s098 + DS-C5-2#s100; type: direct -->
- **计数器方法（求连通性与连通分量）**：在深度优先/广度优先遍历算法实现中增加一个计数器 count，记录外循环体中进入内循环的次数（即从一个未访问顶点重新启动遍历的次数）。根据 count 可判断：count==1 则图连通；count>1 则不连通，count 即连通分量个数；每次启动遍历所访问到的顶点集合就是一个连通分量。<!-- src: DS-C5-1#s099 + DS-C5-2#s101 + DS-C5-1#s101 + DS-C5-1#s102 + DS-C5-2#s103 + DS-C5-2#s104; type: one-step-inferred -->
- **遍历的扩展用途——回路检测线索**：顺着图中边的信息对顶点进行遍历的用途非常广泛。例如在最内部的循环中，如果遇到了 `visited[p->dest]` 为 true，那就意味着图中**可能**出现了回路。（注意原文措辞为"可能"，并非必然。）<!-- src: DS-C5-1#s100 + DS-C5-2#s102; type: direct -->
- **连通性和连通分量算法实现 connected()**（基于 BFS 的连通分量计数，跨两页连续代码逐字转写）：<!-- src: DS-C5-1#s101 + DS-C5-1#s102 + DS-C5-2#s103 + DS-C5-2#s104; type: direct -->

<details>
<summary>代码</summary>

```cpp
template <class verType, class edgeType>
bool Graph<verType, edgeType>::connected()const { 
	//广度优先遍历
	seqQueue<int> q; 
	edgeNode<edgeType> *p;
	bool *visited; 
	int i, start, count=0; //count为计数器
	//为visited创建动态数组空间，并置初始访问标志为false。
	visited = new bool[verts];
	if (!visited) throw illegalSize();
	for (i=0; i<verts; i++) visited[i]=false;

	//逐一找到未被访问过顶点，做广度优先遍历
	for (i=0; i<verts; i++) { 
		if (visited[i]) continue;
		q.enQueue(i); 
		count++; 
		while (!q.isEmpty()){ 
			start = q.front(); 
			q.deQueue();
			if (visited[start]) continue;
			cout<<verList[start].data<<'\t';
			visited[start] = true;
			p = verList[start].adj;
			while (p) { 
				if (!visited[p->dest]) q.enQueue(p->dest);
				p = p->link;
			}
		}
		cout<<'\n';
	}
	if (count==1) return true;
	return false; 
}
```

</details>

- **connected() 实现要点**：外循环对每个未访问顶点入队并 `count++`（即每启动一次新 BFS 计一次数）；内层 BFS 中出队顶点若已访问则 continue（处理重复入队），否则输出该顶点 data、置 visited 为 true、把所有未访问邻接点入队。每完成一个连通分量输出一个换行，即**每行恰好打印一个连通分量的顶点**。最终 count==1 返回 true（连通），否则返回 false（count 即连通分量个数）。<!-- src: DS-C5-1#s101 + DS-C5-1#s102 + DS-C5-2#s103 + DS-C5-2#s104; type: compressed -->

### 4.2 有向图的连通性与强连通分量

- **问题等价性**：有向图的连通性和其强连通分量是同一个问题——当有向图的强连通分量只有一个时，说明它是强连通图；当强连通分量不止一个时，说明它不是强连通图。<!-- src: DS-C5-1#s104 + DS-C5-2#s106; type: direct -->
- **问题的复杂性**：对一个强连通分量来说，要求其中每一对顶点间都有路径可达，例如顶点 $i$ 和 $j$，不光要求从 $i$ 能到 $j$，还要求从 $j$ 能到 $i$（双向可达），故该问题解决起来比较复杂。<!-- src: DS-C5-1#s105 + DS-C5-2#s107; type: compressed -->
- **求强连通分量的算法**（利用有向图的深度优先遍历 DFS，分三步）：(1) 对有向图 G 进行深度优先遍历，按照遍历中**回退顶点的次序**给每个顶点编号——最先回退的顶点编号为 1，其余顶点编号按回退先后逐次增大 1；(2) 将有向图 G 的所有有向边**反向**，构造新的有向图 Gr；(3) 根据步骤 (1) 的编号，选取**未访问过的最大编号顶点**，以该顶点为起始点在 Gr 上进行深度优先遍历；如果没有访问到所有顶点，则从剩余未被访问的顶点中再选取编号最大的顶点作为起始点继续深度优先遍历，如此反复，直至所有顶点都被访问到。<!-- src: DS-C5-1#s106 + DS-C5-1#s107 + DS-C5-1#s108 + DS-C5-2#s108 + DS-C5-2#s109 + DS-C5-2#s110; type: synthesized -->
- **结果的读取方式**：在反向图 Gr 上每一次（以某个未访问的最大编号顶点为起点）深度优先遍历所访问到的顶点集合，恰好构成原有向图 G 的一个强连通分量；在 Gr 上启动 DFS 的次数即为 G 的强连通分量个数。<!-- src: DS-C5-1#s106 + DS-C5-1#s108 + DS-C5-2#s110 + DS-C5-2#s111 + DS-C5-2#s112; type: one-step-inferred -->
- **完整示例（图 G19）**：G19 为有向图，顶点 $\{A,B,C,D,E,F\}$，边集 $\{A{\to}C, C{\to}A, C{\to}B, C{\to}D, D{\to}A, B{\to}A, B{\to}F, E{\to}C\}$（共 8 条边）。**第一步**：从 A 出发对 G19 做 DFS（路径 A→C→B→F，F 无出边先回退；再 C→D；E 单独成树），DFS 树边为 A→C、C→B、B→F、C→D，回退编号为 F=1, B=2, D=3, C=4, A=5, E=6。**第二步**：将 G19 所有边反向得 Gr，边集 $\{C{\to}A, A{\to}C, B{\to}C, D{\to}C, A{\to}D, A{\to}B, F{\to}B, C{\to}E\}$，各顶点保留步骤 1 的编号。**第三步**：在 Gr 上按编号从大到小启动 DFS——先从 E(编号 6) 出发只访问 $\{E\}$（E 在 Gr 中无出边）；再从未访问中编号最大的 A(编号 5) 出发访问 $\{A,B,C,D\}$（树边 A→B、B→C、A→D）；最后从 F(编号 1) 出发访问 $\{F\}$。共启动 3 次 DFS，得到 G19 的 3 个强连通分量 $\{A,B,C,D\}$、$\{E\}$、$\{F\}$，分量个数大于 1，故 G19 不是强连通图。<!-- src: DS-C5-1#s109 + DS-C5-1#s110 + DS-C5-2#s111 + DS-C5-2#s112; type: synthesized -->

### 4.3 欧拉路径与欧拉回路

#### 七桥问题与建模

- **格尼斯堡七桥问题（欧拉回路问题的由来）**：18 世纪东普鲁士的格尼斯堡，一条河流穿城而过，城市除被一分为二外，河中还有两个小岛，河上有七座桥把这些陆地和岛屿联系起来。问题：可否从一个陆地或岛屿出发，一次经过全部七座桥且每座桥只走一遍，最后还能回到出发点？<!-- src: DS-C5-1#s112 + DS-C5-2#s114; type: direct -->
- **欧拉的抽象建模（1736 年，29 岁的欧拉）**：把每个陆地和岛屿用**点**表示，桥梁用点之间的**边**表示，七桥问题被抽象为图结构；问题由此转化为——从图中任意一个点出发，是否存在一条路径，能经过每条边一次且仅经过一次后回到原点。<!-- src: DS-C5-1#s113 + DS-C5-2#s115; type: direct -->
- **七桥问题的抽象图**（含重边的多重图）：顶点 A、B、C、D；边集共 7 条对应七座桥：A-B 两条（重边）、B-C 两条（重边）、A-D 一条、B-D 一条、C-D 一条。<!-- src: DS-C5-1#s113 + DS-C5-2#s115; type: direct -->
- **欧拉的研究结果（三条）**：1）格尼斯堡七桥问题无解；2）针对相关问题给出了欧拉定理；3）创建了新的数学分支——图论。<!-- src: DS-C5-1#s114 + DS-C5-2#s116; type: direct -->
- **七桥问题无解的判定**（由抽象图 + 欧拉定理一步可得）：七桥抽象图中 $\deg(A)=3$、$\deg(B)=5$、$\deg(C)=3$、$\deg(D)=3$，四个顶点的度全为奇数，奇度顶点个数为 4，超过 2 个，由欧拉定理知该图不存在欧拉路径（更不存在欧拉回路），故七桥问题无解。<!-- src: DS-C5-1#s113 + DS-C5-1#s114 + DS-C5-1#s116 + DS-C5-2#s115 + DS-C5-2#s118; type: one-step-inferred -->

#### 基本概念

- **相关概念**：①**欧拉路径**——图中一条经过了每条边一次且仅一次的路径；②**欧拉回路**——起点和终点相同（构成回路）的欧拉路径；③**欧拉图**（简称 E 图）——具有欧拉回路的图；④**半欧拉图**——具有欧拉路径但不具有欧拉回路的图；⑤欧拉回路即"一笔画"问题（幻灯片原文表述为"欧拉回路及一笔画问题"）。<!-- src: DS-C5-1#s115 + DS-C5-2#s117; type: direct -->

#### 欧拉定理

- **欧拉定理**（前提：**无向连通图**，按奇度顶点个数分三种情形）：<!-- src: DS-C5-1#s116 + DS-C5-1#s117 + DS-C5-1#s118 + DS-C5-2#s118 + DS-C5-2#s119 + DS-C5-2#s120; type: synthesized -->
  1. 如果度为奇数的顶点**超过了 2 个**，则欧拉路径不存在。<!-- src: DS-C5-1#s116 + DS-C5-2#s118; type: direct -->
  2. 如果**恰好除两个顶点**的度是奇数而其他顶点的度都是偶数，则从一个度为奇数的顶点出发，一定能找到一条经过每条边一次且仅一次的路径，终止于另外一个度为奇数的顶点（即欧拉路径必以两个奇度顶点为起点和终点）。<!-- src: DS-C5-1#s117 + DS-C5-2#s119; type: direct -->
  3. 如果顶点的度**都是偶数**，则从任意一个顶点出发，都能经过每条边一次且仅一次并回到原来的顶点（即存在欧拉回路，起点可任选）。<!-- src: DS-C5-1#s118 + DS-C5-2#s120; type: direct -->

  注意：**连通**是前提条件，不可省略。<!-- src: DS-C5-1#s116 + DS-C5-2#s118; type: compressed -->

- **欧拉定理的理解和记忆（必要性论证，按"有进必有出"原则）**：假设存在一条欧拉路径，起始于 $u$、终了于 $v$。①因为是连通图，图中其它顶点都是该路径上的中间顶点；②中间顶点是通过一条边进入、通过另外一条边出的，可能多次进出，但有进就有出，故**中间顶点的度必为偶数**；③若 $u$ 和 $v$ 不是同一个顶点：$u$ 顶点多出一条"走出"的边，$v$ 顶点多出一条"进入"的边，$u$ 和 $v$ 若还有其他边则进入和走出的边数一样多，因此 **$u$ 和 $v$ 的度必为奇数**；④若 $u$ 和 $v$ 是同一个顶点（不妨设为 $w$）：按有进必有出的原则，$w$ 的度也为偶数，此时该欧拉路径是一个**欧拉回路**。<!-- src: DS-C5-1#s119 + DS-C5-1#s120 + DS-C5-1#s121 + DS-C5-1#s122 + DS-C5-2#s121 + DS-C5-2#s122 + DS-C5-2#s123 + DS-C5-2#s124; type: synthesized -->

#### 欧拉回路的求解算法

- **求解算法（基于 DFS 的回路拼接法，三步）**：1）任选一个顶点 $v$，从 $v$ 出发开始深度优先搜索，搜索路径上都由**未访问过的边**构成，搜索中将这些边标记为已访问，直到回到顶点 $v$ 且 $v$ 没有尚未被访问的边，此时得到一个回路，作为"当前结果回路"；2）在搜索路径上另外找一个**尚有未访问边的顶点**，从它出发继续如上操作，找到另外一个回路，将该回路拼接（并入）在当前结果回路上该顶点处，形成一个更大的、新的结果回路；3）如果新的结果回路中还有中间某结点有尚未访问的边，回到 2）；如果没有任何中间顶点尚余未访问的边，访问结束，当前结果回路即欧拉回路。要点：访问标记按**边**记（每条边只允许走一次），而不是按顶点记；新回路必须从已有结果回路上仍有未访问边的顶点开始，并在该顶点处拼入。<!-- src: DS-C5-1#s123 + DS-C5-1#s124 + DS-C5-1#s125 + DS-C5-2#s125 + DS-C5-2#s126 + DS-C5-2#s127; type: synthesized -->
- **演示用图 G20**：无向图，顶点 $\{0,1,2,3,4,5\}$，边集共 9 条：$\{(0,1),(0,2),(0,3),(0,4),(1,3),(2,4),(3,4),(3,5),(4,5)\}$。<!-- src: DS-C5-1#s126 + DS-C5-2#s128; type: compressed -->
- **G20 满足欧拉回路存在条件的验证**（由边集一步统计）：$\deg(0)=4$、$\deg(1)=2$、$\deg(2)=2$、$\deg(3)=4$、$\deg(4)=4$、$\deg(5)=2$，所有顶点度均为偶数且图连通，由欧拉定理（情形 3）该图存在欧拉回路，可从任意顶点（例中从 2）出发。<!-- src: DS-C5-1#s126 + DS-C5-2#s128 + DS-C5-1#s118; type: one-step-inferred -->
- **求解例子（在 G20 上执行回路拼接法，四张子图以加粗边表示已访问边）**：第 1 个回路：2->0->4->2（当前结果回路，边 0-2、2-4、0-4）。顶点 0 尚有未访问边，第 2 个回路：0->1->3->0；在顶点 0 处并入，结果：2->0->1->3->0->4->2。此时顶点 3 尚有未访问边，第 3 个回路：3->4->5->3；在第一个 3 处并入，最终欧拉回路：**2->0->1->3->4->5->3->0->4->2**（全部 9 条边每条恰好走一遍，起点终点同为 2）。可迁移要点：每次并入是把新回路整体插入到结果回路中该拼接顶点出现的位置；拼接点必须是当前结果回路上"尚有未访问边"的顶点。<!-- src: DS-C5-1#s126 + DS-C5-2#s128; type: synthesized -->
- **邻接表实现补充**：欧拉回路由一段段路径拼接而成。课件设计私有 `EulerCircuit(start,end)` 用来从某个起点获得一段路径，公有 `EulerCircuit(start)` 负责反复调用私有函数并把各段拼接成完整回路；为方便拼接，回路保存在单链表 `EulerNode{NodeNum,next}` 中。<!-- src: 欧拉回路#s010 + 欧拉回路#s012 + 欧拉回路#s014 + 欧拉回路#s015; type: compressed -->
- **实现关键点**：同一条边不能走两遍，故一条边被访问后要从邻接表中删除；为不破坏原图，先用 `clone()` 复制邻接表，找完回路后再恢复。公有函数先检查每个顶点度数，度为 0 或奇数则输出不存在欧拉回路；随后从起点找第一段回路，在当前回路链表中寻找仍有未访问边的顶点，继续找新路径并把新链表段接入原链表，直到没有剩余边，最后恢复原邻接表并输出、释放链表。<!-- src: 欧拉回路#s011 + 欧拉回路#s013 + 欧拉回路#s015 + 欧拉回路#s016 + 欧拉回路#s017 + 欧拉回路#s018; type: compressed -->
- **不要混淆**：哈密尔顿回路要求通过图中每一个结点一次且仅一次；课件指出哈密尔顿回路是否存在至今没有给出满足该问题的充要条件。<!-- src: 欧拉回路#s019; type: direct -->


## 五、最小代价生成树

### 5.1 基本定义

- **最小代价生成树（Minimum Cost Spanning Tree）**：当无向图中每条边都有权值（长度、时间、代价等）时，该图通常称为网络；若这个无向图连通，并且某个子图满足：包含原网络所有顶点、只包含原网络部分边、该子图连通、在同时满足前三项条件的所有子图中边权和最小，则该子图称为最小代价生成树。<!-- src: DS-C5-2-PDF#p003; type: compressed -->
- **生成树边数**：一个含 $n$ 个顶点的无向连通图，完全图时边数最多为 $\frac{n(n-1)}{2}$，最少为 $n-1$；无向连通图的一棵生成树含有 $n$ 个顶点和 $n-1$ 条边。<!-- src: DS-C5-2-PDF#p004; type: compressed -->
- **本节算法**：讲义给出两类最小代价生成树算法：Prim（普里姆）算法和 Kruscal（克鲁斯卡尔）算法；前者着眼于顶点，后者着眼于边。<!-- src: DS-C5-2-PDF#p005 + DS-C5-2-PDF#p026; type: compressed -->

### 5.2 Prim 算法

- **集合约定**：对无向连通图 $G=\{V,E\}$，用 $W$ 表示尚未并入最小生成树的顶点集合，$U$ 表示最小生成树中的顶点集合，$T$ 表示最小生成树中的边集合。<!-- src: DS-C5-2-PDF#p006; type: direct -->
- **实现数据**：讲义假设图用邻接表存储，定义 `primNode` 记录边的两个端点和权值；`source[i]` 记录顶点 $i$ 到集合 $U$ 的当前最短边来自哪个顶点，`dist[i]` 记录顶点 $i$ 到集合 $U$ 的当前最短距离，`selected[i]` 表示顶点是否已在 $U$ 中，`treeEdges` 记录 $T$ 中每条边。<!-- src: DS-C5-2-PDF#p009 + DS-C5-2-PDF#p013; type: synthesized -->
- **算法流程**：先选择顶点 0 作为第一个进入 $U$ 的顶点；只要进入 $U$ 的顶点个数未达到图中顶点总数，就沿当前选择点的边表检查各边，对未入 $U$ 且 `dist` 大于边权的邻接点刷新 `dist` 与 `source`；随后在所有未入 $U$ 的顶点中选择 `dist` 最小者作为新选择点，把 `source[min]` 到 `min` 的边并入 $T$，并把该顶点并入 $U$。<!-- src: DS-C5-2-PDF#p010 + DS-C5-2-PDF#p011 + DS-C5-2-PDF#p016 + DS-C5-2-PDF#p017; type: synthesized -->
- **示例读法（G21）**：从 A 出发的演示中，算法先把 A 置入 $U$，随后根据当前最短边依次并入 E、D、B、C；最终 $T=\{(A,E),(A,D),(A,B),(E,C)\}$，对应权值为 $1,1,3,3$。<!-- src: DS-C5-2-PDF#p006 + DS-C5-2-PDF#p007 + DS-C5-2-PDF#p008; type: synthesized -->
- **复杂度**：邻接表存储下，外循环每次找到一个选择点，共执行 $n-1$ 次；循环内一部分沿当前选择点边表访问，整体共访问边 $e$ 次，另一部分在 $W$ 中选择 `dist` 最小顶点，整体耗时 $n^2$，故 Prim 算法总时间复杂度为 $O(n^2+n+e)=O(n^2)$，主要依赖顶点数量；讲义提示可用二叉堆优化。<!-- src: DS-C5-2-PDF#p024; type: compressed -->

### 5.3 Kruscal 算法

- **基本思想**：Prim 算法每次找距离集合 $U$ 最近的顶点；Kruscal 算法每次找权值最小的边，并根据这条边是否会使已选择边形成的图产生回路来判断能否加入最小代价生成树。<!-- src: DS-C5-2-PDF#p026; type: compressed -->
- **过程描述**：对无向连通图 $G=\{V,E\}$，开始令 $MST=\{V,\varnothing\}$，此时 $n$ 个顶点各自构成一个连通分量；每次在图 $G$ 中选择当前权值最小的边，若加入后形成回路则放弃，否则并入 $MST$；反复执行，直到 $MST$ 中边数达到 $n-1$。<!-- src: DS-C5-2-PDF#p027; type: compressed -->
- **示例读法**：克鲁斯卡尔算法示例从独立连通分量 $\{A\},\{B\},\{C\},\{D\},\{E\}$ 开始，依次把 $(A,E)$、$(A,D)$ 并入 MST；遇到 $(E,D)$ 时因端点已在同一连通分量中、会形成回路而放弃；随后把 $(C,E)$、$(B,D)$ 并入，最终所有顶点位于同一连通分量。<!-- src: DS-C5-2-PDF#p030; type: compressed -->
- **复杂度**：最小权值边可借助最小化堆实现；若边数为 $e$，建堆为 $O(e)$，每次删除根结点为 $O(\log_2 e)$；检查两个端点连通分量标志为 $O(1)$，合并连通分量标志为 $O(n)$。由于算法可能检查所有边，严格按“所有边都可能从堆中删除”计，删堆项应为 $O(e\log_2 e)$，再加上合并连通分量标志的 $O(n^2)$。讲义原式写作 $O(e)+O((n-1)\log_2 e)+O(n^2)$ 并归为 $O(n^2)$，复习时应注意它与“可能检查所有边”之间不一致。<!-- src: DS-C5-2-PDF#p031 + DS-C5-2-PDF#p032; type: compressed -->

## 六、最短路径

### 6.1 单源最短路径与 Dijkstra 算法

- **单源最短路径问题**：已知加权有向图 $G=\{V,E\}$ 中每条边的权值均为非负值，并指定 $V$ 中一个顶点作为源点；要求从源点出发到达其余各顶点时，路径上各边权值之和最小。讲义给出的常用求解算法是 Dijkstra 算法。<!-- src: DS-C5-2-PDF#p038; type: compressed -->
- **Dijkstra 算法思想**：为每个顶点设置距离标签，表示源点到该顶点的当前最短距离；用集合 $S$ 保存已经确定最短路径的顶点。初始时 $S$ 为空、所有距离标签为无穷大；把源点放入 $S$，源点距离标签设为 0，再以源点为当前顶点循环执行松弛和选点。<!-- src: DS-C5-2-PDF#p039; type: compressed -->
- **松弛与选点**：沿当前顶点射出的边检查每个邻接点 A；若“当前顶点距离标签 + 当前顶点到 A 的边权”小于 A 的距离标签，就刷新 A 的距离标签。之后在 $V-S$ 中找距离标签最小的顶点，将其放入 $S$ 并作为当前顶点；当所有顶点都进入 $S$，各顶点距离标签即源点到该顶点的最短距离。<!-- src: DS-C5-2-PDF#p040 + DS-C5-2-PDF#p041; type: synthesized -->
- **正确性条件**：Dijkstra 是贪心算法，一旦某顶点当前距离标签最小，就将其作为源点到该顶点的最终最短距离；因此算法正确的条件是边上不带负权值。若存在负权边，先确定的顶点后续可能被经由负权边的路径改短，Dijkstra 不再正确。<!-- src: DS-C5-2-PDF#p045 + DS-C5-2-PDF#p047; type: synthesized -->
- **无权图特殊情形**：若图中边无权值，最短路径一般定义为路径经过的边数最少；可把每条边权值视为 1 后使用 Dijkstra，也可从源点出发用 BFS 遍历顶点，顶点被遍历时就是其获得最短距离的机会，其最短距离为直接前驱顶点最短距离加 1。<!-- src: DS-C5-2-PDF#p046; type: direct -->
- **实现要点**：讲义定义 `DijkstraNode`，含 `source`（当前最短路径上的前一顶点）、`dist`（当前最短路径距离）、`selected`（是否已在 $S$ 中）；邻接矩阵实现中先查找起点下标，初始化 `DList`，再反复根据 `min` 顶点发出的边修正相邻顶点距离，并在未选顶点中寻找当前距离标签最小者；若 `min` 仍为 -1，表示图不连通。<!-- src: DS-C5-2-PDF#p048 + DS-C5-2-PDF#p049 + DS-C5-2-PDF#p050 + DS-C5-2-PDF#p051 + DS-C5-2-PDF#p052; type: synthesized -->
- **复杂度**：若图用邻接矩阵存储，Dijkstra 算法时间复杂度为 $O(n^2)$。<!-- src: DS-C5-2-PDF#p052; type: direct -->

### 6.2 顶点对间最短路径与 Floyd 算法

- **所有顶点对最短距离问题**：求任意两个顶点对之间的最短路径，称为所有顶点对之间的最短距离问题；讲义用 Floyd 算法求解。<!-- src: DS-C5-2-PDF#p054; type: direct -->
- **Floyd 算法思想**：对任意顶点对 $\langle i,j\rangle$，尝试在二者之间增加中介顶点 $k$，观察路径 $i\to k\to j$ 是否比原来的 $i\to j$ 更短；若 `dist<i,j> > dist<i,k> + dist<k,j>`，就用 `dist<i,k> + dist<k,j>` 刷新 `dist<i,j>`。<!-- src: DS-C5-2-PDF#p054; type: compressed -->
- **路径恢复**：讲义用 `pre` 记录最短路径中的中介顶点；例如顶点 1 到 2 的最短距离为 3，若 `pre[1][2]=3`，说明路径中增加了 3 作为中介顶点，即路径为 `1->3->2`；继续查看 `pre[1][3]` 和 `pre[3][2]`，若均为 -1，表示两段都是原始边。<!-- src: DS-C5-2-PDF#p057; type: compressed -->
- **实现要点**：邻接矩阵实现中，二维数组 `A[i][j]` 记录顶点 $i$ 到 $j$ 的最短距离，`pre[i][j]` 记录中介顶点；初始化时 `A[i][j]=edgeMatrix[i][j]`、`pre[i][j]=-1`，随后三重循环依次把每个顶点 $k$ 作为可能中介点，若经由 $k$ 更短就刷新 `A[i][j]` 并令 `pre[i][j]=k`。<!-- src: DS-C5-2-PDF#p058 + DS-C5-2-PDF#p059; type: synthesized -->
- **复杂度与负权限制**：Floyd 算法时间代价主要取决于三重迭代计算数组 `A`，时间复杂度为 $O(n^3)$，与把各顶点逐次作为源点、多次调用 Dijkstra 的时间代价相同，但形式更简单；Floyd 允许存在不在负权回路中的负权边，但不允许出现回路中各边权值和为负的负权回路。<!-- src: DS-C5-2-PDF#p060 + DS-C5-2-PDF#p061 + DS-C5-2-PDF#p062 + DS-C5-2-PDF#p063; type: compressed -->

## 七、AOV 网和 AOE 网

### 7.1 AOV 与 AOE 的区别

- **DAG 的两类应用**：有向无环图的应用通常分为 AOV（Activity On Vertex NetWork）网和 AOE（Activity on Edge Network）网。<!-- src: DS-C5-2-PDF#p065; type: direct -->
- **AOV 网**：把活动赋予顶点，顶点间的有向边表示活动发生的先后顺序，表达活动之间的前后关系；典型应用是课程的先修关系。<!-- src: DS-C5-2-PDF#p066 + DS-C5-2-PDF#p068; type: compressed -->
- **AOE 网**：把活动赋予边，顶点表达活动发生后到达的某种状态或事件；某个状态或事件既意味着前面所有活动结束，也意味着后面的活动可以开始；典型应用是工程问题。<!-- src: DS-C5-2-PDF#p066 + DS-C5-2-PDF#p082; type: compressed -->
- **对应问题**：AOV 网对应拓扑排序，AOE 网对应关键路径。<!-- src: DS-C5-2-PDF#p067 + DS-C5-2-PDF#p081; type: direct -->

### 7.2 AOV 网与拓扑排序

- **偏序与全序**：集合 $X$ 上的关系 $R$ 若具有传递性、自反性、反对称性，则称 $R$ 是 $X$ 上的偏序关系；若 $R$ 是偏序关系，且对每个 $a,b\in X$ 必有 $aRb$ 或 $bRa$，则称 $R$ 是 $X$ 上的全序关系。<!-- src: DS-C5-2-PDF#p069; type: direct -->
- **拓扑序列与拓扑排序**：对集合 $X$ 上的偏序关系 $R$，通过补充原本不满足 $R$ 的元素对关系，把偏序关系改变为全序关系，并按全序关系排成线性序列；在线性序列 $a_1,a_2,\dots,a_n$ 中，若偏序关系里 $a_iRa_j$ 必有 $i\le j$，该序列称为拓扑序列，获得拓扑序列的操作称为拓扑排序（Topological Sort）。<!-- src: DS-C5-2-PDF#p070; type: compressed -->
- **课程先修关系建模**：计算机专业部分课程的先修关系可由 DAG 表示，顶点代表课程，有向边表达课程间先修关系，这是一种偏序关系；拓扑排序把课程排成一个线性序列，使先修关系成为这组课程集合上的全序关系，该线性序列就是原图关系的一个拓扑序列。<!-- src: DS-C5-2-PDF#p071 + DS-C5-2-PDF#p072; type: synthesized -->
- **拓扑排序算法**：先在图中找到入度为 0 的顶点，将这些顶点全部入栈；循环判断栈是否为空，非空则弹出顶点。若该顶点射出 $m$ 条有向边，就把这 $m$ 个邻接点的入度各减 1；在入度减一过程中，若某邻接点入度变为 0，则将其进栈。反复执行直到栈空；该方法也可用队列替代栈。<!-- src: DS-C5-2-PDF#p073 + DS-C5-2-PDF#p074; type: synthesized -->
- **性质与用途**：一个 AOV 网的拓扑序列不一定唯一；利用拓扑排序算法可以判断一个有向图是否存在有环。<!-- src: DS-C5-2-PDF#p078; type: direct -->
- **实现与复杂度**：邻接矩阵实现先按列求每个顶点入度，入度为 0 的顶点压栈；处理栈中顶点时输出该顶点，并扫描其射出的边，把邻接点入度减一、减为 0 时压栈。邻接矩阵下时间代价为 $O(n^2)$，若用邻接表存储，时间代价为 $O(n+e)$。<!-- src: DS-C5-2-PDF#p079 + DS-C5-2-PDF#p080; type: compressed -->

### 7.3 AOE 网与关键路径

- **关键路径问题背景**：一个工程通常由若干子工程构成；多数子工程开始前要以前期子工程完成为条件，自身也需要一定时间完成。工程计划需要计算总工期、关键子工程、非关键子工程的时间余量。<!-- src: DS-C5-2-PDF#p083 + DS-C5-2-PDF#p084; type: compressed -->
- **关键活动与关键路径**：关键子工程即关键活动；这些关键活动形成一条或多条从总体工程开始到完工之间的路径，这些路径称为关键路径。所有关键子工程必须在可以开始时马上开始，中间不得拖延工期，否则会影响整个工程工期。<!-- src: DS-C5-2-PDF#p084 + DS-C5-2-PDF#p099; type: synthesized -->
- **求关键活动的四类时间**：先求每个顶点事件的最早发生时间（满足全部前置活动后该事件最早可发生的时刻）和最迟发生时间（不延误总工期时该事件最迟可发生的时刻），再求每个活动的最早开始时间和最迟开始时间；若某活动的最早开始时间与最迟开始时间相同，该活动就是关键活动。<!-- src: DS-C5-2-PDF#p085 + DS-C5-2-PDF#p086 + DS-C5-2-PDF#p087 + DS-C5-2-PDF#p092; type: synthesized -->
- **顶点事件最早发生时间**：若一个顶点有多条边射入，说明该顶点事件必须等从起点经由这些边到达该顶点的全部路径上的活动都完成后才能发生，因此事件的最早发生时间取这些路径消耗时间的最大值。<!-- src: DS-C5-2-PDF#p087; type: compressed -->
- **顶点事件最迟发生时间**：工程终点的最早时间就是工程所需总最短工期；为达到该工期目标，可把这个时间设为终点事件的最迟发生时间，再对其余顶点倒推，获得各顶点事件的最迟发生时间。<!-- src: DS-C5-2-PDF#p092; type: compressed -->
- **活动的最早和最迟开始时间**：对 AOE 网中的活动 $\langle u,v\rangle$，一旦顶点 $u$ 事件发生，由 $u$ 射出的边 $\langle u,v\rangle$ 所表示的活动即可进行，因此该活动最早开始时间为顶点 $u$ 的最早发生时间；该活动最迟进行时间为顶点 $v$ 的最迟发生时间减去边 $\langle u,v\rangle$ 的权值。<!-- src: DS-C5-2-PDF#p098; type: compressed -->
- **示例汇总读法**：示例顶点事件的最早/最迟发生时间表为 C: 0/0，A: 1/2，E: 2/3，B: 6/10，F: 5/5，G: 11/12，D: 9/9，H: 17/17；活动表中 $\langle C,F\rangle$、$\langle F,D\rangle$、$\langle D,H\rangle$ 的最早开始时间与最迟开始时间相等，因此组成关键路径 $C\to F\to D\to H$。<!-- src: DS-C5-2-PDF#p097 + DS-C5-2-PDF#p098 + DS-C5-2-PDF#p099; type: synthesized -->
- **关键路径算法实现数据**：讲义定义 `keyEdge` 保存边的起点 `u`、终点 `v`、权值 `weight`、活动最早开始时间 `early` 和最迟开始时间 `last`；`keyActivity(start,end)` 中使用 `inDegree`、`verEarly`、`verLast`、`edgeEL`，以及两个栈 `s1` 和 `s2`，其中 `s1` 保存入度为 0 的顶点，`s2` 保存确定顶点最早发生时间的顶点顺序。<!-- src: DS-C5-2-PDF#p100 + DS-C5-2-PDF#p101; type: synthesized -->
- **关键路径算法流程**：先计算每个顶点入度并把所有顶点最早发生时间初始化为 0；从起点开始，按拓扑次序更新后继顶点的最早发生时间，并把确定最早发生时间的顶点压入 `s2`；随后把所有顶点最迟发生时间初始化为终点最早发生时间，再按 `s2` 的逆序倒推各顶点最迟发生时间；最后建立 `edgeEL` 边信息数组，令每条边的 `early=verEarly[u]`、`last=verLast[v]-weight`，输出 `early==last` 的边作为关键活动。<!-- src: DS-C5-2-PDF#p102 + DS-C5-2-PDF#p103 + DS-C5-2-PDF#p104 + DS-C5-2-PDF#p105 + DS-C5-2-PDF#p106 + DS-C5-2-PDF#p107; type: synthesized -->
- **关键路径算法复杂度**：邻接矩阵存储时，查找起点和终点下标为 $O(n)$，计算入度、顶点最早发生时间、顶点最迟发生时间、建立边信息均为 $O(n^2)$ 量级，计算活动最早/最迟开始时间与输出关键活动为 $O(e)$；由于简单有向图中 $e=O(n^2)$，这些 $O(e)$ 步不超过 $O(n^2)$ 量级，故总时间代价为 $O(n^2)$。<!-- src: DS-C5-2-PDF#p108; type: compressed -->
