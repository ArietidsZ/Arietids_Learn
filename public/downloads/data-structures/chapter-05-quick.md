# 第五章 图 · 速览

> Arietids Learn · 个人课程复习笔记
> 在线阅读：https://learn.arietids.net/courses/data-structures/chapter-05-quick/

## 概念速记

- **图** $G=(V,E)$：$V$ 顶点非空集合，$E$ 边（弧）集合；图表示"多对多"关系。<!-- src: DS-C5-1#s006 + DS-C5-1#s007 + DS-C5-2#s003 + DS-C5-2#s004; type: compressed -->
- **有向边** $\langle C,A\rangle$（尖括号，C 弧尾、A 弧头）；**无向边** $(C,A)$（圆括号，与 $(A,C)$ 同一条边）。<!-- src: DS-C5-1#s008 + DS-C5-1#s009 + DS-C5-2#s005 + DS-C5-2#s006; type: compressed -->
- **度**：无向图＝邻接边总数；有向图分**出度**（射出）/**入度**（射入）。邻接＝顶点间有边相连。<!-- src: DS-C5-1#s010 + DS-C5-1#s011 + DS-C5-2#s007 + DS-C5-2#s008; type: compressed -->
- **图的限制**：本章默认简单图无重边、无自环 $(j,j)$/$\langle j,j\rangle$；树中除根外直接前驱唯一，图中顶点的直接前驱不保证唯一，也可能没有。<!-- src: DS-C5-1#s012 + DS-C5-2#s009; type: compressed -->
- **完全图**边数上界：无向 $C_n^2=\frac{n(n-1)}{2}$；有向 $P_n^2=n(n-1)$。<!-- src: DS-C5-1#s013 + DS-C5-2#s010; type: compressed -->
- **网络**＝边带权重的图（加权有向图/加权无向图统称）。<!-- src: DS-C5-1#s014 + DS-C5-2#s011; type: compressed -->
- **路径长度**两种度量：无权图按**边数**；带权图可按**权重之和**（先看是否带权再计算）。<!-- src: DS-C5-1#s015 + DS-C5-1#s017 + DS-C5-2#s012 + DS-C5-2#s014; type: compressed -->
- **简单路径/简单回路**：除首尾可相同外其余顶点都不相同；首尾相同的简单路径＝简单回路。中间任何顶点重复即非简单。<!-- src: DS-C5-1#s018 + DS-C5-1#s019 + DS-C5-2#s015 + DS-C5-2#s016; type: compressed -->
- **子图**：$V'\subseteq V$，$E'$ 取 $E$ 中两端点均属于 $V'$ 的边的子集（边集不必取全、与画法无关；G 是自身的子图）。<!-- src: DS-C5-1#s020 + DS-C5-2#s017; type: compressed -->
- **连通分量**＝无向图的**极大**连通子图（孤立顶点自成一个分量）；**强连通分量**＝有向图的**极大强连通子图**，要求每对顶点**双向可达**，单顶点可自成强连通分量。<!-- src: DS-C5-1#s021 + DS-C5-1#s022 + DS-C5-2#s018 + DS-C5-2#s019; type: compressed -->


## 存储结构对照

| 结构 | 适用 | 关键字段 | 要点 |
|---|---|---|---|
| 邻接矩阵 | 有向/无向 | 一维顶点数组 + 二维矩阵 | 有向：行=出度、列=入度；无向：对称、对角全 0，可只存上/下三角；边少时浪费（恒占 $n^2$ 单元） <!-- src: DS-C5-1#s029 + DS-C5-1#s032 + DS-C5-1#s033 + DS-C5-1#s034 + DS-C5-2#s024; type: compressed --> |
| 加权邻接矩阵 | 网络 | $A[i][j]=w$ / $\infty$（无边）/ 对角 $0$ | 有向加权矩阵一般不对称 <!-- src: DS-C5-1#s035 + DS-C5-2#s027; type: compressed --> |
| 邻接表 | 有向/无向 | 顶点表 data/adj + 边结点 dest/weight/link | 出度＝边表长度（方便）；无向图每条边存 2 次 <!-- src: DS-C5-1#s043 + DS-C5-1#s044 + DS-C5-1#s045 + DS-C5-2#s029; type: compressed --> |
| 逆邻接表 | 仅有向 | 边结点存 src | 方便求入度、不便求出度 <!-- src: DS-C5-1#s047 + DS-C5-1#s048 + DS-C5-2#s030 + DS-C5-2#s031; type: compressed --> |


## 实现要点（C++）

- **邻接矩阵版**：矩阵两步动态分配（行指针数组→逐行）；初始化**对角线 0、其余 noEdge**；existEdge 用 `i==verts` 判"未找到"、`i==j` 返 false；removeVertex＝顶点表前移＋扫第 $i$ 行减边数（有向再扫第 $i$ 列）＋矩阵删行删列＋`verts--`。<!-- src: DS-C5-1#s038 + DS-C5-1#s040 + DS-C5-1#s041; type: compressed -->
- **邻接表版**：insertEdge **头插法**，无向图镜像插两个结点但 `edges++` 仅一次；removeVertex 五步——删自身边链（计数）→摘各表中 `dest==i` 结点→**所有 `dest>i` 的下标减 1**→有向 `edges-=count`、无向 `edges-=count/2`→顶点表前移。<!-- src: DS-C5-1#s054 + DS-C5-1#s055 + DS-C5-1#s056 + DS-C5-1#s057 + DS-C5-2#s037 + DS-C5-2#s038 + DS-C5-2#s039 + DS-C5-2#s040; type: compressed -->

## 图的遍历

- **共同前提**：顶点无根、地位相同；可能有回路 → 必须用 **visited 标记**防重复访问；非连通图需外层循环逐一选未访问顶点再启动。两种遍历结果都**不唯一**（如 G17 两种 DFS、G18 两种 BFS）。<!-- src: DS-C5-1#s069 + DS-C5-1#s070 + DS-C5-1#s073 + DS-C5-1#s091 + DS-C5-2#s052 + DS-C5-2#s053; type: compressed -->
- **DFS**（类比二叉树**前序**）：访问顶点→置标记→依次对未访问邻接点递归。非递归用**栈**存顶点编号；**弹栈后必须再判 `if (visited[start]) continue;`**（同一顶点可被多次进栈）。改进：栈改存边结点地址（邻接表）或 $(i,j)$ 二元组（邻接矩阵）。<!-- src: DS-C5-1#s072 + DS-C5-1#s078 + DS-C5-1#s081 + DS-C5-1#s083 + DS-C5-1#s084 + DS-C5-1#s086 + DS-C5-1#s088 + DS-C5-2#s055; type: compressed -->
- **BFS**（类比二叉树**层次遍历**）：用**队列**存顶点编号；出队后同样需二次判 visited，访问后将所有未访问邻接点入队（入队时不置标记）。<!-- src: DS-C5-1#s090 + DS-C5-1#s092 + DS-C5-1#s094 + DS-C5-1#s095 + DS-C5-2#s082 + DS-C5-2#s090; type: compressed -->
- **复杂度**：邻接表存储下 DFS（递归/非递归）与 BFS 均为 $O(n+e)$（每顶点访问一次＋每边表扫一遍）。<!-- src: DS-C5-1#s079 + DS-C5-1#s085 + DS-C5-1#s095 + DS-C5-2#s071 + DS-C5-2#s077 + DS-C5-2#s093; type: compressed -->

- **例题·最大岛屿面积（网格 DFS）**：主函数双重 for 枚举格子，遇 1 调 getArea 四向递归求面积、三目取最大；**把访问过的格子置 0 代替 visited**；「相邻」只算水平/竖直四方向（对角不算，示例答案 6 而非 11）；无岛返回 0。<!-- src: DS-C5-2#s094 + DS-C5-2#s095 + DS-C5-2#s096 + DS-C5-2#s097; type: compressed -->

## 图的连通性

- **无向图连通性**：在 DFS/BFS 外循环加计数器 count（每启动一次新遍历 +1）——count==1 连通；count>1 不连通且 count＝连通分量个数，每轮访问的顶点集＝一个分量。内层遇 `visited[p->dest]==true` 提示**可能**有回路。<!-- src: DS-C5-1#s098 + DS-C5-1#s099 + DS-C5-1#s100 + DS-C5-2#s100 + DS-C5-2#s101 + DS-C5-2#s102; type: compressed -->
- **有向图强连通分量（三步 DFS 法）**：①对 G 做 DFS，按**回退次序**编号（最先回退＝1）；②所有边**反向**得 Gr；③在 Gr 上反复"选未访问的**最大编号**顶点做 DFS"——每次 DFS 访问的顶点集＝一个强连通分量。例 G19：回退编号 F=1,B=2,D=3,C=4,A=5,E=6 → Gr 上三次 DFS 得 $\{E\}$、$\{A,B,C,D\}$、$\{F\}$，故非强连通图。<!-- src: DS-C5-1#s106 + DS-C5-1#s107 + DS-C5-1#s108 + DS-C5-1#s109 + DS-C5-1#s110 + DS-C5-2#s108 + DS-C5-2#s111 + DS-C5-2#s112; type: compressed -->
- **欧拉概念**：欧拉路径＝每条边恰走一次；首尾相同→欧拉回路（即"一笔画"）；有欧拉回路→欧拉图（E 图）；只有欧拉路径→半欧拉图。<!-- src: DS-C5-1#s115 + DS-C5-2#s117; type: compressed -->
- **欧拉定理**（前提：**无向连通图**，按奇度顶点数分类）：>2 个奇度顶点→无欧拉路径；恰 2 个→存在以两奇度顶点为起终点的欧拉路径；全偶→任意起点存在欧拉回路。记忆：路径"有进必有出"→中间顶点度必偶、起终点（不同时）度必奇。七桥问题四顶点度 3,5,3,3 全奇→无解。<!-- src: DS-C5-1#s116 + DS-C5-1#s117 + DS-C5-1#s118 + DS-C5-1#s119 + DS-C5-1#s120 + DS-C5-1#s121 + DS-C5-1#s122 + DS-C5-2#s115 + DS-C5-2#s118; type: compressed -->
- **欧拉回路求解（回路拼接法）**：任选 v 沿**未访问边** DFS 回到 v 得首个回路→从结果回路上尚有未访问边的顶点再搜一个回路并**在该顶点处并入**→重复至无未访问边。标记按**边**记。例 G20（度全偶）：2->0->4->2 ⊕ 0->1->3->0 ⊕ 3->4->5->3 ⇒ **2->0->1->3->4->5->3->0->4->2**。<!-- src: DS-C5-1#s123 + DS-C5-1#s124 + DS-C5-1#s125 + DS-C5-1#s126 + DS-C5-2#s128; type: compressed -->
- **欧拉实现**：私有 `EulerCircuit(start,end)` 找一段路径，公有函数用 `EulerNode{NodeNum,next}` 单链表拼接各段；访问边后从邻接表删除，用 `clone()` 备份并在输出前恢复原图；链表中若某顶点仍有未访问边，就以该顶点为起点生成新段并接入原链表。<!-- src: 欧拉回路#s010 + 欧拉回路#s011 + 欧拉回路#s012 + 欧拉回路#s014 + 欧拉回路#s017 + 欧拉回路#s018; type: compressed -->


## 图的应用算法

- **最小代价生成树**：带权无向连通图的子图，含原网络全部顶点、部分边、保持连通，且在满足这些条件的子图中边权和最小；生成树含 $n$ 个顶点和 $n-1$ 条边。<!-- src: DS-C5-2-PDF#p003 + DS-C5-2-PDF#p004; type: compressed -->
- **Prim**：着眼于顶点，用 $U$ 存已入树顶点、$W$ 存未入树顶点、$T$ 存树边；维护 `source/dist/selected/treeEdges`，每轮先用当前选择点松弛未入 $U$ 的邻接点，再选 `dist` 最小顶点并入 $U$ 和 $T$；邻接表实现仍为 $O(n^2)$。<!-- src: DS-C5-2-PDF#p006 + DS-C5-2-PDF#p009 + DS-C5-2-PDF#p010 + DS-C5-2-PDF#p011 + DS-C5-2-PDF#p024; type: compressed -->
- **Kruscal**：着眼于边，初始 $MST=\{V,\varnothing\}$ 且每个顶点自成连通分量；每次取当前最小边，若加入会成回路则放弃，否则并入 MST，直到边数达到 $n-1$；讲义原式写作 $O(e)+O((n-1)\log_2 e)+O(n^2)$ 并归为 $O(n^2)$，但若按“可能检查所有边并从堆中删除”严格计，删堆项应为 $O(e\log_2 e)$。<!-- src: DS-C5-2-PDF#p026 + DS-C5-2-PDF#p027 + DS-C5-2-PDF#p031 + DS-C5-2-PDF#p032; type: compressed -->
- **Dijkstra**：单源最短路径，前提是加权有向图边权非负；维护距离标签和已确定集合 $S$，反复松弛当前顶点出边，再从 $V-S$ 选距离标签最小者加入 $S$。它是贪心算法，负权边会破坏正确性；邻接矩阵实现为 $O(n^2)$。<!-- src: DS-C5-2-PDF#p038 + DS-C5-2-PDF#p039 + DS-C5-2-PDF#p040 + DS-C5-2-PDF#p041 + DS-C5-2-PDF#p045 + DS-C5-2-PDF#p052; type: compressed -->
- **无权最短路径**：边无权值时，可把每条边权都看作 1 后用 Dijkstra，也可从源点做 BFS；顶点被遍历时获得最短距离，其距离为直接前驱顶点距离加 1。<!-- src: DS-C5-2-PDF#p046; type: compressed -->
- **Floyd**：所有顶点对最短路径；若 `dist<i,j> > dist<i,k> + dist<k,j>`，用经由 $k$ 的路径刷新，并用 `pre[i][j]` 记录中介顶点以恢复路径；时间复杂度 $O(n^3)$。Floyd 允许负权边，但不允许负权回路。<!-- src: DS-C5-2-PDF#p054 + DS-C5-2-PDF#p057 + DS-C5-2-PDF#p058 + DS-C5-2-PDF#p059 + DS-C5-2-PDF#p060 + DS-C5-2-PDF#p061; type: compressed -->
- **AOV / AOE**：AOV（Activity On Vertex Network）把活动放在顶点上，边表示活动先后关系，典型应用是课程先修；AOE（Activity on Edge Network）把活动放在边上，顶点表示事件/状态，典型应用是工程问题。AOV 对应拓扑排序，AOE 对应关键路径。<!-- src: DS-C5-2-PDF#p065 + DS-C5-2-PDF#p066 + DS-C5-2-PDF#p067 + DS-C5-2-PDF#p082; type: compressed -->
- **拓扑排序**：先把所有入度为 0 的顶点入栈/队列；每弹出一个顶点，就把它射出的邻接点入度减 1，减到 0 时入栈/队列。拓扑序列不唯一；可用来判断有向图是否有环。邻接矩阵 $O(n^2)$，邻接表 $O(n+e)$。<!-- src: DS-C5-2-PDF#p073 + DS-C5-2-PDF#p074 + DS-C5-2-PDF#p078 + DS-C5-2-PDF#p079 + DS-C5-2-PDF#p080; type: compressed -->
- **关键路径**：先求顶点事件最早/最迟发生时间，再求活动最早/最迟开始时间；活动 $\langle u,v\rangle$ 的最早开始时间为 $ve(u)$，最迟开始时间为 $vl(v)-w(u,v)$，二者相等则为关键活动，关键活动组成从起点到终点的一条或多条关键路径。<!-- src: DS-C5-2-PDF#p085 + DS-C5-2-PDF#p086 + DS-C5-2-PDF#p087 + DS-C5-2-PDF#p092 + DS-C5-2-PDF#p098 + DS-C5-2-PDF#p099; type: compressed -->
- **关键路径实现**：`keyActivity` 用 `verEarly/verLast` 存顶点事件最早/最迟发生时间，用 `edgeEL` 存活动边的 `early/last`；先按拓扑次序正推最早时间，再按逆序倒推最迟时间，最后输出 `early==last` 的边。邻接矩阵实现总时间代价为 $O(n^2)$。<!-- src: DS-C5-2-PDF#p100 + DS-C5-2-PDF#p101 + DS-C5-2-PDF#p102 + DS-C5-2-PDF#p103 + DS-C5-2-PDF#p104 + DS-C5-2-PDF#p105 + DS-C5-2-PDF#p106 + DS-C5-2-PDF#p107 + DS-C5-2-PDF#p108; type: compressed -->

## 高频易错点清单

1. 路径长度：带权图按权和、无权图按边数，勿混用。<!-- src: DS-C5-1#s017 + DS-C5-2#s014; type: compressed -->
2. 邻接矩阵初始化：对角线是 **0**，其余才是 noEdge。<!-- src: DS-C5-1#s038; type: compressed -->
3. 邻接表删顶点：`dest>i` 的下标必须减 1；无向图 `edges -= count/2`。<!-- src: DS-C5-1#s056 + DS-C5-1#s057 + DS-C5-2#s040; type: compressed -->
4. DFS/BFS 非递归：出栈/出队后必须**再次**检查 visited（同一顶点可能重复入栈/入队）。<!-- src: DS-C5-1#s084 + DS-C5-1#s095 + DS-C5-2#s076 + DS-C5-2#s092; type: compressed -->
5. 欧拉定理前提"无向**连通**图"不可省略；标记按边而非按顶点。<!-- src: DS-C5-1#s116 + DS-C5-1#s123 + DS-C5-2#s118 + DS-C5-2#s125; type: compressed -->
6. 强连通分量第三步在**反向图 Gr** 上、按编号**从大到小**选起点，勿在原图上做。<!-- src: DS-C5-1#s108 + DS-C5-2#s110; type: compressed -->
7. Dijkstra 只适用于非负权边；遇负权边时，贪心确定的顶点距离可能后来被改短。<!-- src: DS-C5-2-PDF#p045 + DS-C5-2-PDF#p047; type: compressed -->
8. Floyd 可以处理不在负权回路中的负权边，但不能处理边权和为负的回路。<!-- src: DS-C5-2-PDF#p061 + DS-C5-2-PDF#p062 + DS-C5-2-PDF#p063; type: compressed -->
9. 拓扑排序结果不唯一；“入度为 0 的顶点”可用栈也可用队列保存，不同选择会影响输出序列。<!-- src: DS-C5-2-PDF#p074 + DS-C5-2-PDF#p078; type: compressed -->
10. AOV 顶点是活动、边是先后关系；AOE 边是活动、顶点是事件/状态，二者不要混用。<!-- src: DS-C5-2-PDF#p066 + DS-C5-2-PDF#p082; type: compressed -->
11. 关键活动判定看活动的最早开始时间是否等于最迟开始时间，不是只看顶点最早/最迟时间是否相等。<!-- src: DS-C5-2-PDF#p086 + DS-C5-2-PDF#p098 + DS-C5-2-PDF#p099; type: compressed -->
