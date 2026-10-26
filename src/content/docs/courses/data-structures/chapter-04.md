---
title: "数据结构 第四章 树"
description: "数据结构课程笔记：数据结构 第四章 树。"
---

<div class="note-meta"><a href="/courses/data-structures/">数据结构目录</a><a href="/courses/data-structures/chapter-04-quick/">阅读速览</a><a href="/downloads/data-structures/chapter-04.md" download>下载 Markdown</a></div>

## 1. 树

### 树的引入

- 本节由一段嵌入视频引入(封面帧仅可见开场问候字幕),视频完整内容未在课件文字中给出。<!-- src: DS-C4#s003; type: direct -->
- 家族图谱是典型的树形层次结构:祖父 → 伯父/父亲/叔叔 → 堂兄/兄/我/弟/堂弟 → 儿子 → 孙子,上下层体现辈分(前驱—后继)关系。<!-- src: DS-C4#s004g1; type: compressed -->
- 文件系统也是树形结构的现实实例:Windows 文件系统(我的电脑 → C:\、D:\;C:\ 下有 Documents and Settings、Windows、Program Files,D:\ 下有 Program Files、dataStructure)与 Unix 文件系统(如 flink-table-common → src → main/test → java → org → apache → flink → table → api、descriptors、factories 等多级目录)。<!-- src: DS-C4#s005g1; type: compressed -->

### 树的定义

- **树结构(直观描述)**: 在一个元素集合中,如果元素呈上下层次关系,对一个结点而言,上层元素为其直接前驱且直接前驱唯一,下层元素为其直接后继且直接后继可以有多个,这样的结构就是**树结构**。<!-- src: DS-C4#s006; type: direct -->
- **树的定义(递归)**: 树是有限个 $(n>0)$ 元素组成的集合。在这个集合中:① 有一个结点称为**根**;② 如果有其他的结点,这些结点又被分为若干个**互不相交的非空子集**,每个子集又是一棵树,称为**根的子树**;③ 每个子树都有自己的根,子树的根称为树根结点的孩子结点。注意定义的前提是 $n>0$。<!-- src: DS-C4#s006; type: direct -->

#### 结点间的关系术语

- 树的结点关系术语借用了家族亲缘关系的称呼。<!-- src: DS-C4#s007; type: compressed -->
- **孩子结点(子结点)**: 一个结点的子树的根称为该结点的孩子结点或子结点。<!-- src: DS-C4#s008; type: direct -->
- **父结点**: 反之,相对于孩子结点,该结点称为父结点。<!-- src: DS-C4#s009; type: direct -->
- **祖父结点**: 父结点的父结点称为祖父结点。<!-- src: DS-C4#s010; type: direct -->
- **祖先结点**: 根到树中某个结点的路径上经过的所有结点(包括根结点),都称为这个结点的祖先结点。<!-- src: DS-C4#s011; type: direct -->
- **子孙结点**: 相对地,这些结点称为祖先结点的子孙结点。<!-- src: DS-C4#s012; type: direct -->
- **兄弟结点**: 同一父结点的结点互为兄弟结点。<!-- src: DS-C4#s013; type: direct -->
- 课件示例树(贯穿本节,以高亮颜色逐页演示术语):根为 A;B、C、D 是 A 的孩子,三者互为兄弟;E、F 是 C 的孩子;G、I 是 D 的孩子;H 是 G 的孩子。图中演示:A、D 是 I 的祖先结点(根 A 到 I 的路径经过 A、D);相应地 D、I 等是 A 的子孙结点。<!-- src: DS-C4#s008-s013; type: synthesized -->

#### 度与叶子结点

- **度**: 树中每个结点拥有的孩子结点的个数称为该结点的**度**;度为 0 的结点称**叶子结点**或**终端结点**;度不为 0 的结点称**非叶子结点**或**非终端结点**或**中间结点**。示例树中 A 的度为 3,H 的度为 0、是叶子结点。<!-- src: DS-C4#s014; type: direct -->
- **树的度**: 树的度是树中每个结点的度的最大值。<!-- src: DS-C4#s015; type: direct -->

#### 层次与高度

- **层次**: 树中结点具有层次关系。根的层次数通常规定为 1,其余结点的层次数是其父结点的层次数加 1。<!-- src: DS-C4#s015; type: direct -->
- **树的高度**: 树中所有结点的层次数的最大值就是树的高度。示例树各结点分布在第 1~4 层,高度为 4。<!-- src: DS-C4#s015; type: direct -->
- 提醒:高度是**从顶到底**来数的。<!-- src: DS-C4#s015n; type: direct -->

#### 有序树与无序树

- **有序树**: 对树中的任意一个结点,如果其孩子结点都被规定了一定的顺序(如谁是第一个孩子、谁是第二个孩子等),这棵树就称有序树;如果结点的孩子没有规定顺序,称为**无序树**。<!-- src: DS-C4#s016; type: direct -->

#### 森林

- **森林 (Forest)**: 两棵及以上的树称为森林。课件示例为两棵树构成的森林:第一棵根 A(孩子 B、C,C 的孩子 E、F),第二棵根 D(孩子 G、I,G 的孩子 H)。<!-- src: DS-C4#s017; type: compressed -->

#### 前驱与后继视角

- 在树中,父结点可以看作是孩子结点的**直接前驱**、孩子结点可以看作是父结点的**直接后继**;直接前驱是**唯一**的、直接后继可以有**多个**。<!-- src: DS-C4#s018; type: direct -->

### 树的抽象数据类型

- **数据及关系**: 有限 $(n>0)$ 个**相同类型**的元素组成的集合。其中一个元素称为根;如果还有其余元素,则这些元素被分为若干个互不相交的非空子集,每个子集是一棵子树,每个子树有自己的根,子树的根是树根的孩子。<!-- src: DS-C4#s019; type: direct -->
- **操作**(共 9 个,按前提/结果描述):

| 操作 | 前提 | 结果 |
| --- | --- | --- |
| Constructor | 已知结点的数据元素值和结点间树形关系 | 创建一棵树 <!-- src: DS-C4#s019; type: direct --> |
| Deconstructor | 已知一棵树 | 销毁一棵树 <!-- src: DS-C4#s019; type: direct --> |
| GetRoot | 已知一棵树 | 得到树的根结点 <!-- src: DS-C4#s020; type: direct --> |
| FirstChild | 已知树中的某一结点 p | 得到结点 p 的第一个儿子结点 <!-- src: DS-C4#s020; type: direct --> |
| NextChild | 已知树中的某一结点 p 和它的一个儿子结点 u | 得到结点 p 的儿子结点 u 右侧的第一个儿子结点 v <!-- src: DS-C4#s020; type: direct --> |
| Search | 已知关键字 key | 返回具有关键字 key 的结点 <!-- src: DS-C4#s020; type: direct --> |
| InsertChild | 已知某结点 p 及新结点的数据值 value | 据 value 值创建一个新结点 q,将其作为 p 的下一个儿子插入 <!-- src: DS-C4#s021; type: direct --> |
| DeleteChild | 已知某结点 p 及它的儿子结点的序号 k | 删除结点 p 的第 k 个儿子结点 <!-- src: DS-C4#s021; type: direct --> |
| Traverse | 一棵树 | 访问树中每一结点,且每个结点只访问一次 <!-- src: DS-C4#s021; type: direct --> |

### 树的物理结构

- **顺序结构存树?** 顺序结构中元素值的存储容易,但元素间的层次关系需要在存储元素的分量中附加表明其父子关系的信息(每个结点除存元素值外还存父子关系信息)。由于树中每个结点的孩子个数都不一样,结点结构中难以确定设置几个字段来保存孩子结点的地址信息:预留多了浪费空间,预留少了无法增加孩子结点,故用顺序结构**不经济**。<!-- src: DS-C4#s022; type: compressed -->
- 示意图(顺序存后继表): 树为结点 0 的孩子是 1、2,结点 2 的孩子是 3;用 Nodes 数组存结点 {0,1,2,3},Successors 数组对应存后继列表 List1={1,2}、List2=NULL、List3={3}、List4=NULL。<!-- src: DS-C4#s022g1; type: compressed -->


- **父结点下标数组法**: 考虑到每一个节点只能有唯一的父节点,为了节省空间,可以由下至上考虑,不直接存储所有的后继节点,而是用一个数组存储**父节点的下标**。同一示例树的 Parent 数组为 {-1, 0, 0, 2}(根结点 0 的父下标记为 -1)。<!-- src: DS-C4#s023; type: compressed -->
- 父结点数组法的**缺点**: 如果想要找到一个节点的子节点,需要遍历整个数组,在 $O(N)$ 的时间复杂度之内完成。<!-- src: DS-C4#s023; type: direct -->
- **链式结构存树?** 因每个结点的地址不连续,更要通过设置附加的字段来指明父子关系,显然它也存在着结点中孩子指针个数不好预估的问题。<!-- src: DS-C4#s024; type: direct -->
- 结论: **没有合适的物理存储做基础,树的基本操作就无从谈起**。<!-- src: DS-C4#s024; type: direct -->

## 2. 二叉树

### 二叉树的定义

- **二叉树**是有限个($n \geq 0$)结点的集合: 它或者为空,或者有一个结点作为根结点,其余结点分成左右两个互不相交的子集作为根结点的左右子树,每个子树又是一棵二叉树(递归定义)。<!-- src: DS-C4#s026; type: direct -->
- 图示三种形态: 空二叉树(NULL)、只有一个根结点的二叉树、一般二叉树(根 0,左子 1,右子 2,结点 2 又有左子 3 与右子 4,以 2 为根的子树本身也是一棵二叉树)。<!-- src: DS-C4#s026g1; type: compressed -->
- **二叉树和树是两种完全不同的结构,二叉树不是一棵特殊的树**。<!-- src: DS-C4#s027; type: direct -->
- 区别一(结点个数): 二叉树中结点个数**可以为 0**,允许一棵空二叉树存在,这是作为工具能更方便地使用;而树中结点个数**不能为 0,必须至少是 1**。<!-- src: DS-C4#s027; type: direct -->
- 定位差异: 树是生活中实际存在的结构类型(如文件系统、族谱,不会要求最多只有两个分支);二叉树更多地是作为一种工具(计算机系统中,左右子树两个分支可以与 0/1 结合)。<!-- src: DS-C4#s027; type: compressed -->
- 区别二(孩子的左右): 二叉树中左右孩子要明确指出是左还是右,即便只有一个孩子,也要指明它是左子还是右子;有序树中孩子只是进行了排序,没有左右之分,当某个结点只有一个孩子时,只能说明它是大孩子,不需要确定其是左是右。<!-- src: DS-C4#s028; type: direct -->
- 反例图: 根 0 带一个左孩子 1 与根 0 带一个右孩子 1,是**两棵不同的二叉树**;但对于树来说这两种是**等价**的(同一棵树)。<!-- src: DS-C4#s028g1; type: compressed -->

### 特殊的二叉树

- **满二叉树**: 如果一棵 $k$ 层二叉树中每一层结点数量都达到了最大值(这个值为 $2^{k-1}$),该二叉树称为满二叉树。<!-- src: DS-C4#s029; type: direct -->
- **完全二叉树**: 如果一棵二叉树有 $k$ 层,其中前 $k-1$ 层都是满的,第 $k$ 层可能缺少一些结点,但缺少的结点是自右向左的(逐层从上到下从左到右遍历不会跳过任何一个节点),这样的二叉树称为完全二叉树。<!-- src: DS-C4#s029; type: direct -->
- 反例图: 根 0 有左子 1、右子 2;若 3 是 1 的左孩子,则为完全二叉树;若 3 是 1 的**右**孩子(1 缺左孩子),则**不是**完全二叉树(按层遍历会跳过空位)。<!-- src: DS-C4#s029g1; type: compressed -->

### 二叉树的性质

#### 性质 1

- **性质 1**: 一棵非空二叉树的第 $i$ 层上最多有 $2^{i-1}$ 个结点($i \geq 1$)。<!-- src: DS-C4#s031; type: direct -->
- 证明(数学归纳法): 当 $i=1$ 时,二叉树在这一层要么为空,要么只有一个根结点,即最多为 $2^{1-1}=2^0=1$ 个结点,命题成立;假设 $i=k$ 时命题成立,只需要让第 $k$ 层的 $2^{k-1}$ 个结点每人各生两个孩子,第 $k+1$ 层结点数就能达到最大: $2 \times 2^{k-1} = 2^k$ 个,即 $i=k+1$ 时命题也成立。性质 1 得证。<!-- src: DS-C4#s031; type: direct -->

#### 性质 2

- **性质 2**: 一棵高度为 $k$ 的二叉树,最多具有 $2^k - 1$ 个结点。<!-- src: DS-C4#s032; type: direct -->
- 证明: 要使高度为 $k$ 的二叉树结点总数最多,每一层上结点个数须达到最多。据性质 1,第 $i$ 层的结点数最多为 $2^{i-1}$,故 $k$ 层二叉树中结点总数 $N$ 最多为:

$$
N = \sum_{i=1}^{k} 2^{i-1} = 2^k - 1
$$


<!-- src: DS-C4#s032; type: direct -->
- 备注: 该求和即**等比数列求和**。<!-- src: DS-C4#s032n; type: direct -->

#### 性质 3

- **性质 3**: 对于一棵非空二叉树,如果叶子结点个数为 $n_0$,度数为 2 的结点个数为 $n_2$,则有: $n_0 = n_2 + 1$。<!-- src: DS-C4#s033; type: direct -->
- 证明思路(从边的角度,图中分别以向上箭头和向下箭头表示两种数边方式): 设 $n_0, n_1, n_2$ 分别表示度为 0、1、2 的结点的数量。**自下向上**考虑边的数量: 除了根结点,每个结点都有且只有一个向上的边,所以总边数 $= n_0 + n_1 + n_2 - 1$;**自上向下**考虑边的数量: 总边数 $= 2n_2 + n_1$。<!-- src: DS-C4#s033; type: compressed -->
- 完整证明: 设结点总数为 $n$、度为 0 的结点有 $n_0$ 个、度为 1 的结点有 $n_1$ 个、度为 2 的结点有 $n_2$ 个,则有 $n = n_0 + n_1 + n_2$。从下往上看,二叉树中除了根结点,每个结点向上都通过唯一的分支和父结点相连,所以二叉树中共有 $n-1$ 条分支;从上往下看,每个结点都通过向下的分支和孩子结点相连,度为 1 的结点向下发出 1 个分支,度为 2 的结点向下发出 2 个分支,故 $n - 1 = 1 \times n_1 + 2 \times n_2$。两式结合得: $n_0 = n_2 + 1$。<!-- src: DS-C4#s034; type: direct -->

#### 性质 4

- **性质 4**: 具有 $n$ 个结点的完全二叉树的高度 $k = \lfloor \log_2 n \rfloor + 1$。<!-- src: DS-C4#s035; type: direct -->
- 证明: 假设一棵完全二叉树的高度为 $k$,则前 $k-1$ 层满,第 $k$ 层最少有 1 个结点、最多有 $2^{k-1}$ 个。又由性质 2,高度为 $k$ 的二叉树最多有 $2^k - 1$ 个结点、高度为 $k-1$ 的二叉树最多有 $2^{k-1} - 1$ 个结点,故结点总数应满足 $2^{k-1} \leq n \leq 2^k - 1$,即 $2^{k-1} \leq n < 2^k$。对各项取对数得 $k-1 \leq \log_2 n < k$;因 $k$ 是整数,故 $k-1 = \lfloor \log_2 n \rfloor$,即 $k = \lfloor \log_2 n \rfloor + 1$。<!-- src: DS-C4#s035; type: direct -->

#### 性质 5

- **性质 5**: 如果对一棵有 $n$ 个结点的完全二叉树中的所有结点按层次自上而下、每一层自左而右依次对其编号,若根结点的编号为 1,则编号为 $i$ 的结点($1 \leq i \leq n$)有以下性质:
  1. 如果 $i = 1$,该结点是二叉树的根结点;
  2. 如果 $i > 1$,其父亲结点的编号为 $\lfloor \frac{i}{2} \rfloor$;
  3. 如果 $2i > n$,编号为 $i$ 的结点无左儿子;否则,其左儿子的编号为 $2i$;
  4. 如果 $2i+1 > n$,编号为 $i$ 的结点无右儿子;否则,其右儿子的编号为 $2i+1$。<!-- src: DS-C4#s036; type: direct -->
- 证明(数学归纳法,先证 (3)(4)):
  - **边界**: 当 $i=1$ 时(根结点),根的左子编号为 2、右子编号为 3,结论成立。<!-- src: DS-C4#s037; type: direct -->
  - **证明存在**: 设 $i=k$ 时,其左子存在且编号为 $2k$、右子存在且编号为 $2k+1$,则编号为 $k+1$ 的结点因 $k+1 \leq 2k$ 就一定存在。<!-- src: DS-C4#s037; type: direct -->
  - **证明左右儿子结点的编号**: 如果编号为 $k+1$ 的结点有左子,左子一定紧挨着编号为 $k$ 的结点的右子,下标即为 $2k+1+1 = 2(k+1)$;如果编号为 $k+1$ 的结点又有右子,则其编号为其左子编号加一,为 $2(k+1)+1$。<!-- src: DS-C4#s037; type: direct -->
  - **结点是否存在的判定**: 在完全二叉树中,$n$ 个结点是从 1 开始连续编号的,结点的编号最大为 $n$;当某个结点存在,其编号必不大于 $n$,如果大于 $n$ 就说明该结点不存在。<!-- src: DS-C4#s037; type: direct -->
  - **父结点编号公式的推导**: 根据结论 (3),如果一个结点是某个结点 $j$ 的左子,则其编号有 $2j$ 和 $j$ 的关系;根据结论 (4),如果一个结点是某个结点 $j$ 的右子,则其编号有 $2j+1$ 和 $j$ 的关系,故如果一个非根结点的编号是 $i$,其父结点的编号就是 $\lfloor \frac{i}{2} \rfloor$,得证(原文写"性质5(1)得证")。<!-- src: DS-C4#s038; type: direct -->
- 示例图: 完全二叉树按层次编号 B(1)、C(2)、D(3)、G(4)、E(5)、F(6)、A(7)、S(8)、K(9),可逐一验证编号 $i$ 与 $2i$、$2i+1$、$\lfloor i/2 \rfloor$ 的父子对应关系。<!-- src: DS-C4#s038g1; type: compressed -->

### 二叉树的基本操作

- **构造类**: 在内存中创建一棵二叉树。<!-- src: DS-C4#s039; type: direct -->
- **属性类**: 判二叉树空、获取根结点、求以某结点为根的二叉树中的结点个数和高度。<!-- src: DS-C4#s039; type: direct -->
- **数据操纵类**: 对二叉树的整体删除。对于二叉树结点的插入、删除操作,因不知其具体意义和要求,将它放到有实际插入、删除意义的后续章节中讲解(本节暂不讲数据操纵)。<!-- src: DS-C4#s039 + DS-C4#s039n; type: synthesized -->
- **遍历类**: 按前序、中序、后序、层次遍历二叉树的操作。遍历类操作非常重要,在下一节中详细讨论。<!-- src: DS-C4#s039; type: direct -->

### 二叉树的存储

- 基本思想:类似于线性表的存储结构,二叉树有两种存储方式——①**顺序存储**(数组,下标);②**链式存储**(结构体,指针)。<!-- src: DS-C4#s041; type: compressed -->
- Notes 提示:算法 + 数据结构 = 程序。<!-- src: DS-C4#s040n; type: direct -->

### 二叉树的顺序存储

#### Naive Idea:逐字段记录每个节点

- Naive Idea:二叉树中每个节点需要的信息为四项——节点的值(Value)、父节点(Parent Index)、左子(Left Index)、右子(Right Index),把所有节点按行存入一张表(数组),用下标 Index 标识节点,无对应节点处填 -1。<!-- src: DS-C4#s042; type: compressed -->
- 示例(树:A 为根,左子 B、右子 C;B 的孩子为 D、E,C 的孩子为 F、G;表中红色 -1 表示无效值):<!-- src: DS-C4#s042t1 + DS-C4#s043t1; type: synthesized -->

| Index | Value | Parent Index | Left Index | Right Index |
| --- | --- | --- | --- | --- |
| 0 | A <!-- src: DS-C4#s042t1; type: direct --> | -1 | … | 1 |
| 1 | C <!-- src: DS-C4#s042t1; type: direct --> | 0 | 2 | 3 |
| 2 | F <!-- src: DS-C4#s042t1; type: direct --> | 1 | -1 | -1 |
| 3 | G <!-- src: DS-C4#s042t1; type: direct --> | 1 | -1 | -1 |
| … | … | … | … | … |

- Naive Idea 的**缺点**:①每个节点需要存储很多信息,且信息中出现了**冗余**——比如由父节点可以找到子节点,但是子节点又存储了父节点的信息;②出现了很多**无效的值(-1)**,如叶子节点(左、右子均为 -1)和根节点(父节点为 -1)。<!-- src: DS-C4#s043; type: direct -->

#### 回想二叉树的下标性质

- **性质5**:如果对一棵有 $n$ 个结点的完全二叉树中的所有结点按层次自上而下、每一层自左而右依次对其编号。若根结点的编号为 1,则编号为 $i$ 的结点($1 \le i \le n$),有以下性质:<!-- src: DS-C4#s044; type: direct -->
  - (3)如果 $2i > n$,编号为 $i$ 的结点无左儿子;否则,其左儿子的编号为 $2i$。<!-- src: DS-C4#s044; type: direct -->
  - (4)如果 $2i+1 > n$,编号为 $i$ 的结点无右儿子;否则,其右儿子的编号为 $2i+1$。<!-- src: DS-C4#s044; type: direct -->
- 配图为编号 1–7 的满二叉树(1 的孩子为 2、3;2 的孩子为 4、5;3 的孩子为 6、7),直观展示编号规则。<!-- src: DS-C4#s044g1; type: compressed -->

#### 根据下标性质的顺序存储(利用 index 来表示父子关系)

- 方法:只用**一个一维数组**,不再显式存储父/左/右指针,而是**利用数组下标(index)来表示父子关系**。演示过程(以树 A 为根、B 为左子、C 为右子、D 为 B 的右子为例):<!-- src: DS-C4#s045-s050; type: synthesized -->
  1. 根结点 Root(A)放在下标 $1$ 处,下标 $0$ 不用;<!-- src: DS-C4#s045-s046; type: synthesized -->
  2. 下标为 $i$ 的结点,其左儿子放在 $2i$,右儿子放在 $2i+1$(如根 $i=1$:Left→2,Right→3);<!-- src: DS-C4#s046; type: compressed -->
  3. B 是 A($i=1$)的左子,放入下标 $2\times 1 = 2i = 2$;<!-- src: DS-C4#s048; type: compressed -->
  4. C 是 A($i=1$)的右子,放入下标 $2\times 1 + 1 = 2i+1 = 3$;<!-- src: DS-C4#s049; type: compressed -->
  5. D 是 B($i=2$)的右子,放入下标 $2\times 2 + 1 = 2i+1 = 5$;B 无左子,下标 4 留空——非完全二叉树会在数组中留下空洞。<!-- src: DS-C4#s050; type: synthesized -->
- Notes 助记:教师备注「我是二分之你」——结合本页演示的下标关系,可解读为由孩子下标除以 2(取下整)即得父结点下标。<!-- src: DS-C4#s050n; type: one-step-inferred -->

#### 课堂练习(牛刀小试)

- 题目:用数组存储以下二叉树——结点 1 为根,左子 2、右子 3;2 只有右子 4;3 只有左子 5;4 只有右子 6。<!-- src: DS-C4#s051ex1; type: direct -->
- 一般方法:根放下标 1,逐结点套用"左子 $2i$、右子 $2i+1$"规则,得各结点下标:1→1,2→2,3→3,4→$2\times2+1=5$,5→$2\times3=6$,6→$2\times5+1=11$;数组中其余位置(0、4、7、8、9、10)空置,体现非完全二叉树顺序存储的空间浪费。<!-- src: DS-C4#s051ex1 + DS-C4#s044; type: one-step-inferred -->

#### 顺序存储的优缺点分析

- **优点**:使用数组下标来表明节点关系,只需要**一个一维数组**表示树,需要存储的信息更少。<!-- src: DS-C4#s052; type: direct -->
- **缺点**:如果树退化成了**一条链**(每个结点只有一个孩子,如 A→B→C→D 的右斜链),那么每个节点计算左右节点均需要用下标计算 $2i$ 或者 $2i+1$,空间复杂度最坏情况为 $O(2^n)$。(注:课件此条版面标签误写为"优点",内容实为缺点。)<!-- src: DS-C4#s052; type: compressed -->

### 二叉树的链式存储

- 本节由一段嵌入视频引入(封面字幕:"既然理解了二叉树的数学性质"),视频完整内容未在课件文字中给出。<!-- src: DS-C4#s053; type: direct -->
- 链式存储有**两种形式:标准形式,广义标准形式**。<!-- src: DS-C4#s054 + DS-C4#s055; type: synthesized -->
- **标准形式**:每个结点为三个域 `Left | Data | Right`,Left、Right 分别指向左、右孩子结点,空指针记为 ∧。示例:树 A(左子 L、右子 C),L 的孩子为 B、E,C 仅有右子 D,D 仅有左子 W;对应链式结构中 B、E、W 的左右指针均为 ∧,C 的左指针为 ∧,D 的右指针为 ∧。<!-- src: DS-C4#s054g1; type: compressed -->
- **广义标准形式**:在标准形式基础上每个结点增加父指针,即四个域 `Left | Data | Right | Parent`;除根结点的 Parent 为 ∧ 外,其余结点的 Parent 指向其父结点。<!-- src: DS-C4#s055g1; type: compressed -->
- **为何通常多用标准形式**:因为求结点的父结点的概率并不大,在标准形式中也依然能求得一个结点的父结点。如求值为 x 的结点的父结点,可以通过遍历逐个检查哪个结点的孩子结点为 x,这个结点就是 x 的父结点。<!-- src: DS-C4#s056; type: direct -->
- **标准形式的链式存储形式最为直观**;Notes 概括其特点为"最小化、完备"。<!-- src: DS-C4#s056 + DS-C4#s056n; type: synthesized -->

### 二叉树的遍历

- 本节讨论的前提:二叉树已经构建好(先讲遍历等操作,后讲二叉树的构建)。<!-- src: DS-C4#s057n; type: direct -->
- **遍历**: 对结构中每个数据元素进行访问且每个元素**只访问一次**;它是一种最常见的操作,各种数据结构的基本操作很多都可以以遍历为基础得以实现。<!-- src: DS-C4#s058; type: direct -->
- **分析二叉树的特点**(遍历需面对的问题):
  1. 二叉树中一个结点**有两个直接后继结点**;<!-- src: DS-C4#s058; type: direct -->
  2. 上述后继节点是**区分左节点和右节点**的;<!-- src: DS-C4#s058; type: direct -->
  3. 链接实现中,二叉树的节点通常**不会存储父节点**的信息。<!-- src: DS-C4#s058; type: direct -->
  由此引出两个问题:访问根后接下来遍历谁(左子还是右子)?遍历到其中一个子节点之后怎么返回父节点?<!-- src: DS-C4#s058g1; type: compressed -->
- **递归与遍历的关系**: 回忆二叉树的性质——以二叉树中**任一节点的子节点**为根节点的**子树**,也是一棵二叉树。该性质带有很明显的**递归含义**:遍历一棵二叉树,等同于遍历根节点,以及根节点下方的两棵子树。因此,正确理解递归对于理解二叉树的遍历是很重要的。<!-- src: DS-C4#s059; type: compressed -->
- **遍历的分类**: 根据对根节点以及两棵子树的遍历顺序分类,可分为三类:**前序遍历、中序遍历、后序遍历**;另有一种特殊的遍历——**层次遍历**——从上至下、从左至右遍历二叉树的节点。<!-- src: DS-C4#s060; type: direct -->
- **四种遍历的定义**:
  - **前序遍历**: 如果二叉树为空,遍历操作为空。否则,先访问根结点,然后前序遍历根的左子树,再前序遍历根的右子树。可简记为:"**根左右**"。<!-- src: DS-C4#s061; type: direct -->
  - **中序遍历**: 如果二叉树为空,遍历操作为空。否则,先中序遍历根的左子树,然后访问根结点,最后中序遍历根的右子树。可简记为:"**左根右**"。<!-- src: DS-C4#s061; type: direct -->
  - **后序遍历**: 如果二叉树为空,遍历操作为空。否则,先后序遍历根的左子树,然后后序遍历根的右子树,最后访问根结点。可简记为:"**左右根**"。<!-- src: DS-C4#s061; type: direct -->
  - **层次遍历**: 如果二叉树为空,遍历操作为空。否则,从第一层开始,从上而下,逐层访问每一层结点。对同一层结点,自左向右逐一访问。<!-- src: DS-C4#s061; type: direct -->
- **遍历示例**: 设二叉树为——根 B;B 的左子为 L、右子为 C;L 有唯一子结点 S;C 的左子为 F、右子为 D;D 有唯一子结点 G;G 的左子为 I、右子为 H(由中序序列可定:S 为 L 的右子,G 为 D 的左子)。<!-- src: DS-C4#s062g1; type: one-step-inferred -->

  | 遍历方式 | 序列 |
  | --- | --- |
  | 前序遍历 | B, L, S, C, F, D, G, I, H <!-- src: DS-C4#s062; type: direct --> |
  | 中序遍历 | L, S, B, F, C, I, G, H, D <!-- src: DS-C4#s062; type: direct --> |
  | 后序遍历 | S, L, F, I, H, G, D, C, B <!-- src: DS-C4#s062; type: direct --> |
  | 层次遍历 | B, L, C, S, F, D, G, I, H <!-- src: DS-C4#s062; type: direct --> |

- **思考**: 对于一般的有序树,上面提到的四种遍历中,没有中序遍历,为什么?<!-- src: DS-C4#s063; type: direct -->

### 二叉树的前序遍历

- **前序遍历**: 如果二叉树为空,遍历操作为空。否则,先访问根结点,然后递归地前序遍历根的左子树,再前序遍历根的右子树。可简记为:"**根左右**"。<!-- src: DS-C4#s064; type: direct -->
- 例:二叉树为根 A,左子 B(B 的左子为 D),右子 C(C 的左子 E、右子 F),其前序遍历序列为 **ABDCEF**。<!-- src: DS-C4#s064g1; type: compressed -->
- 对前序遍历的定义是一种**递归的形式**;用递归来实现前序遍历非常直观、简单,只需要将定义换成具体的、用高级语言书写的语句就可以了。<!-- src: DS-C4#s065; type: direct -->

<details>
<summary>代码</summary>

```cpp
template <class T, T NULL_VALUE>
void BinaryTree<T, NULL_VALUE>::_pre_order(Node<T, NULL_VALUE> *t) {
  if (t != nullptr) {       // 递归终止条件:遍历到空结点时结束
    cout << t->data << " "; // 输出结点的数据值
    _pre_order(t->left);    // 遍历左子树
    _pre_order(t->right);   // 遍历右子树
  }
}
```

</details>
<!-- src: DS-C4#s065c1; type: one-step-inferred -->


### 二叉树的中序遍历

- **中序遍历**: 如果二叉树为空,遍历操作为空。否则,先递归中序遍历根的左子树,访问根结点,然后再中序遍历根的右子树。可简记为:"**左根右**"。<!-- src: DS-C4#s066; type: direct -->
- 例:同上例二叉树(根 A、左子 B(左子 D)、右子 C(左子 E、右子 F)),其中序遍历序列为 **DBAECF**。<!-- src: DS-C4#s066g1; type: compressed -->
- 对中序遍历的定义同样是一种**递归的形式**;用递归来实现中序遍历非常直观、简单,只需要将定义换成具体的、用高级语言书写的语句就可以了。<!-- src: DS-C4#s067; type: direct -->

<details>
<summary>代码</summary>

```cpp
template <class T, T NULL_VALUE>
void BinaryTree<T, NULL_VALUE>::_in_order(Node<T, NULL_VALUE> *t) {
  // 递归结束条件
  if (t == nullptr)
    return;

  _in_order(t->left);     // 递归左子树
  cout << t->data << " "; // 输出当前节点
  _in_order(t->right);    // 递归右子树
}
```

</details>
<!-- src: DS-C4#s067c1; type: one-step-inferred -->


### 二叉树的后序遍历

- **后序遍历**: 如果二叉树为空,遍历操作为空。否则,先递归后序遍历根的左子树,再后序遍历根的右子树,最后访问根结点。可简记为:"**左右根**"。<!-- src: DS-C4#s068; type: direct -->
- 例:同上例二叉树(根 A、左子 B(左子 D)、右子 C(左子 E、右子 F)),其后序遍历序列为 **DBEFCA**。<!-- src: DS-C4#s068g1; type: compressed -->
- 对后序遍历的定义依然是一种**递归的形式**;用递归来实现后序遍历非常直观、简单,只需要将定义换成具体的、用高级语言书写的语句就可以了。<!-- src: DS-C4#s069; type: direct -->

<details>
<summary>代码</summary>

```cpp
template <class T, T NULL_VALUE>
void BinaryTree<T, NULL_VALUE>::_post_order(Node<T, NULL_VALUE> *t) {
  // 递归结束条件
  if (t == nullptr)
    return;

  _post_order(t->left);   // 递归左子树
  _post_order(t->right);  // 递归右子树
  cout << t->data << " "; // 输出当前节点
}
```

</details>
<!-- src: DS-C4#s069c1; type: direct -->

### 二叉树前序遍历的非递归算法

- **分析**: 在前面的章节《栈与队列》中,我们介绍了用栈模拟递归的方式。因此要将递归算法改写为非递归,需要从函数调用的角度考虑如何**用栈保存"调用信息"**。<!-- src: DS-C4#s070; type: direct -->
- **算法思想**:
  1. 如果根为空,遍历结束。否则**建立一个结点栈**,先将**根进栈**;<!-- src: DS-C4#s070-s071; type: synthesized -->
  2. 反复进行以下操作,**直到栈空**:出栈、访问;如果其有右子,**右子压栈**;如果其有左子,**左子压栈**。<!-- src: DS-C4#s070-s071; type: synthesized -->
- **先压右子、后压左子的原因**: 前序遍历先左后右,而栈的访问是先进后出——后压栈左子,因此之后先弹栈(访问)左子。<!-- src: DS-C4#s071; type: direct -->
- **核心思想(动画演示合成)**: 借助一个结点栈(Stack)代替递归。示例树:A 为根,A 的左孩子为 B、右孩子为 C;B 只有左孩子 D;C 的左孩子为 E、右孩子为 F。演示过程(栈内自顶向下列出,输出序列逐步累积):
  1. 根 A 主动进栈,栈:A;
  2. 弹出 A 并访问(输出 A),先压入右孩子 C、再压入左孩子 B,栈:B、C;
  3. 弹出 B 并访问(输出 A B),B 无右孩子,压入左孩子 D,栈:D、C;
  4. 弹出 D 并访问(输出 A B D),D 无孩子,栈:C;
  5. 弹出 C 并访问(输出 A B D C),先压入右孩子 F、再压入左孩子 E,栈:E、F;
  6. 弹出 E 并访问(输出 A B D C E),栈:F;
  7. 弹出 F 并访问,栈空,遍历结束,最终前序序列为 A B D C E F。<!-- src: DS-C4#s072-s083; type: synthesized -->
- **入栈顺序规律**: 每弹出并访问一个结点,按"先右孩子、后左孩子"的顺序将存在的孩子入栈,使左孩子位于栈顶、先被弹出处理,从而保证"根—左—右"的前序次序。<!-- src: DS-C4#s083c1; type: one-step-inferred -->
- **动画双色含义**: 动画中每个结点用两种不同颜色标记——浅色表示结点刚被压入栈(第一次被触及),深色表示结点出栈并被访问(第二次被触及);这里的"两次"应理解为入栈/出栈等处理状态,不是前序遍历定义中的输出访问两次。<!-- src: DS-C4#s072-s083 + DS-C4#s085 + DS-C4#s086n; type: synthesized -->
- **原文代码(前序遍历非递归实现)**:

<details>
<summary>代码</summary>

```cpp
template <class T, T NULL_VALUE>
void BinaryTree<T, NULL_VALUE>::_pre_order(Node<T, NULL_VALUE> *t) {
  // 初始化前序遍历栈
  stack<Node<T, NULL_VALUE> *> s;
  s.push(t);
  // 开始前序遍历
  while (!s.empty()) {
    // 获取栈顶元素并弹出
    Node<T, NULL_VALUE> *p = s.top();
    s.pop();
    cout << p->data << " ";

    if (p->right != nullptr) // 右节点存在则入栈
      s.push(p->right);
    if (p->left != nullptr) // 左节点存在则入栈
      s.push(p->left);
  }
}
```

</details>

<!-- src: DS-C4#s083c1; type: direct -->

- 边界提醒: 课件文字算法先说明"如果根为空,遍历结束",但上面的原文代码直接 `s.push(t)` 并在循环中解引用 `p`;若直接复用,应先判断 `t == nullptr` 或保证调用前根非空。<!-- src: DS-C4#s070-s071 + DS-C4#s083c1; type: one-step-inferred -->

### 二叉树前序遍历非递归算法分析

- **正确性论证(为何能完成遍历)**:
  - 第一层结点:根主动进栈;<!-- src: DS-C4#s084; type: direct -->
  - 根出栈时将其所有子结点(即第二层结点)都带入栈中;类似地,第二层结点出栈时会将第三层结点带入栈中,最后每层结点都有进栈机会;<!-- src: DS-C4#s084; type: direct -->
  - 每个结点都是由其父结点被访问时带入栈中,而每个结点的父结点唯一,故每个结点进栈的机会只有一次;<!-- src: DS-C4#s084; type: direct -->
  - 每个进栈元素出栈时都会被访问到;<!-- src: DS-C4#s084; type: direct -->
  - 因此,按照此算法能完成遍历的任务(每个结点恰好被访问一次,不重不漏)。<!-- src: DS-C4#s084 + DS-C4#s085; type: synthesized -->

### 二叉树前序遍历非递归算法复杂度分析

- **复杂度推导**: ① 每次循环都从栈中弹出并访问一个结点;② 当整个循环结束时,每个结点都被访问且只访问一次,因此循环次数为 $n$。故算法的时间复杂度就是 $O(n)$。<!-- src: DS-C4#s085; type: compressed -->

### 二叉树中序遍历的非递归算法

- **与前序非递归的关键区别**: 前序遍历先输出当前节点,之后递归左右子树的时候已经与当前节点无关了,因此可以直接将当前节点弹栈;但中序遍历在访问完左节点之后,要回到当前节点并访问,然后再继续访问右节点。因此每个节点需要访问两次——第一次通过该节点访问左节点,第二次访问节点本身以及右节点。<!-- src: DS-C4#s086; type: direct -->
- **flag 的引入**: 由于每个节点要被访问两次,需要引入一个 flag(标志),来记录节点是第几次被访问。<!-- src: DS-C4#s086; type: direct -->
- **算法步骤**:
  1. 如果根为空,遍历结束;否则建立一个结点栈,先将根进栈;<!-- src: DS-C4#s087; type: direct -->
  2. 反复进行以下操作,直到栈空:出栈,如果出栈元素的标志为 0,将标志加 1,再次将其压入栈中,如果其有左子,将左子压入栈中;如果出栈元素的标志为 1,访问,如果其有右子,将右子压入栈中。<!-- src: DS-C4#s087; type: direct -->
- **注意(边界约定)**: 上述操作假定标志数组的初始值为 0,因此忽略了将标志位设为 0 的一步。<!-- src: DS-C4#s087; type: direct -->
- **flag 取值的含义**: flag = 0 表示第一次访问(还未处理其左子树),flag = 1 表示第二次访问(左子树已处理完,可以输出该结点)。<!-- src: DS-C4#s086 + DS-C4#s088-s107; type: synthesized -->
- **演示用例与过程**(示例树:根 A,A 的左孩子 B、右孩子 C;B 的左孩子 D;C 的左孩子 E、右孩子 F):初始将根 A 以 flag 0 入栈;弹出 A(flag 0)→ A 以 flag 1 重新入栈、左孩子 B 以 flag 0 入栈;弹出 B(flag 0)→ B 以 flag 1 重新入栈、左孩子 D 以 flag 0 入栈;弹出 D(flag 0)→ D 以 flag 1 重新入栈(D 无左孩子);弹出 D(flag 1)→ 输出 D(无右孩子);弹出 B(flag 1)→ 输出 B(无右孩子);弹出 A(flag 1)→ 输出 A,右孩子 C 以 flag 0 入栈;弹出 C(flag 0)→ C 以 flag 1 重新入栈、左孩子 E 以 flag 0 入栈;弹出 E(flag 0)→ E 以 flag 1 重新入栈;弹出 E(flag 1)→ 输出 E;弹出 C(flag 1)→ 输出 C,右孩子 F 以 flag 0 入栈;弹出 F(flag 0)→ F 以 flag 1 重新入栈;弹出 F(flag 1)→ 输出 F;栈空结束。最终中序序列为 D B A E C F。<!-- src: DS-C4#s088-s107; type: synthesized -->
- **看图易错点(Notes 提醒)**: 演示动画中,栈里结点的颜色与右侧二叉树结点的颜色含义不同——栈中的颜色表示 flag 标志位(浅色 = flag 0 第一次访问,深色 = flag 1 第二次访问),右侧二叉树上的颜色只表示当前正在处理哪一个结点,二者不可混淆。<!-- src: DS-C4#s088n-s107n; type: synthesized -->

### 二叉树中序遍历非递归算法实现

- 实现分两部分:先准备需要用到的栈,并将根节点入栈(标志位设为 0);再循环处理直至栈空。代码中用结点栈 `s` 与标志栈 `flag` 同步进出,lambda `push_node` 把结点与其标志一起入栈。<!-- src: DS-C4#s108 + DS-C4#s109; type: synthesized -->

<details>
<summary>代码</summary>

```cpp
template <class T, T NULL_VALUE>
void BinaryTree<T, NULL_VALUE>::_in_order(Node<T, NULL_VALUE> *t) {
  // 初始化中序遍历栈
  stack<Node<T, NULL_VALUE> *> s;
  stack<int> flag; // 标记是第几次访问
  auto push_node = [&s, &flag](Node<T, NULL_VALUE> *p, int f) {
    s.push(p);    // 当前节点入栈
    flag.push(f); // 标记入栈
  };
  push_node(t, 0); // 根节点入栈，设置标志位为0

  // 开始中序遍历
  while (!s.empty()) {
    Node<T, NULL_VALUE> *p = s.top();
    int f = flag.top();
    s.pop();
    flag.pop();
    if (f == 0) {             // 如果当前是第一次访问
      push_node(p, 1);        // 标记为第二次访问
      if (p->left != nullptr) // 若左节点存在则入栈
        push_node(p->left, 0);
    } else {                   // 如果当前是第二次访问
      cout << p->data << " ";  // 输出当前节点
      if (p->right != nullptr) // 若右节点存在则入栈
        push_node(p->right, 0);
    }
  }
}
```

</details>
<!-- src: DS-C4#s108c1 + DS-C4#s109c1; type: direct -->

- 边界提醒: 课件步骤同样先给出"如果根为空,遍历结束"的前提,但上面的原文代码直接 `push_node(t, 0)`;若 `t == nullptr`,后续会在访问 `p->left` 等成员时解引用空指针,因此直接复用时应先判空或保证根非空。<!-- src: DS-C4#s087 + DS-C4#s108c1 + DS-C4#s109c1; type: one-step-inferred -->

### 二叉树中序遍历非递归算法复杂度分析

- 每次循环中都是弹出一个结点;结点标志为 0 时,反手将其再次压栈;结点标志为 1 时,直接访问。<!-- src: DS-C4#s110; type: direct -->
- 二叉树中的每个结点都进入过栈中,且结点标志为 0 时经历过一次循环操作,标志由 0 变 1;结点标志为 1 时也经历过一次循环操作,直接访问。故对每个结点执行过两次循环操作,总的循环次数为 $2n$。<!-- src: DS-C4#s110; type: direct -->
- **结论**: 算法的时间复杂度为 $O(n)$。<!-- src: DS-C4#s110; type: direct -->

### 二叉树后序遍历非递归算法分析

- 与中序遍历类似,后序遍历也需要在访问完子树之后回到当前节点输出,但是次数不同——后序遍历中每个节点**需要访问三次**:第一次通过该节点**访问左节点**,第二次通过该节点**访问右节点**,最后一次**访问节点本身**。<!-- src: DS-C4#s111; type: direct -->
- 因此 flag 标志位一共有**三种状态**,记录节点是**第几次被访问**(对比:中序非递归只需两种状态)。<!-- src: DS-C4#s111 + DS-C4#s112; type: synthesized -->
- 标志栈中结点的状态含义:**0** 表示结点首次进栈;**1** 表示结点出栈过一次,已经考虑过左子;**2** 表示结点出栈过两次,已经考虑过右子。<!-- src: DS-C4#s112; type: direct -->
- 弹栈处理规则:栈中弹出的结点,若标志位为 0,将其标志改为 1 并反手将该结点再次压入栈中,如果该结点有左子,随即将其左子压入栈中;若标志位为 1,将其标志改为 2 并反手将该结点再次压入栈中,如果该结点有右子,随即将其右子压入栈中;若标志位为 2,就可以直接进行访问了。<!-- src: DS-C4#s112; type: direct -->

### 二叉树后序遍历非递归算法实现

准备需要用到的栈(结点栈 + 标志栈),将根节点入栈后循环处理:<!-- src: DS-C4#s113; type: compressed -->

<details>
<summary>代码</summary>

```cpp
template <class T, T NULL_VALUE>
void BinaryTree<T, NULL_VALUE>::_post_order(Node<T, NULL_VALUE> *t) {
  // 初始化后序遍历栈
  stack<Node<T, NULL_VALUE> *> s;
  stack<int> flag; // 标记是第几次访问
  auto push_node = [&s, &flag](Node<T, NULL_VALUE> *p, int f) {
    s.push(p);    // 当前节点入栈
    flag.push(f); // 标记入栈
  };
  push_node(t, 0); // 根节点入栈，设置标志位为0
  // 开始后序遍历
  while (!s.empty()) {
    Node<T, NULL_VALUE> *p = s.top();
    int f = flag.top();
    s.pop();
    flag.pop();
    if (f == 0) {             // 如果当前是第一次访问
      push_node(p, 1);        // 标记为已访问一次
      if (p->left != nullptr) // 若左节点存在则入栈
        push_node(p->left, 0);
    } else if (f == 1) {       // 如果当前是第二次访问
      push_node(p, 2);         // 标记为已访问两次
      if (p->right != nullptr) // 若右节点存在则入栈
        push_node(p->right, 0);
    } else                    // 如果当前是第三次访问
      cout << p->data << " "; // 输出当前节点
  }
}
```

</details>
<!-- src: DS-C4#s113c1 + DS-C4#s114c1; type: synthesized -->

- 边界提醒: 后序非递归代码与中序非递归代码一样,原文直接 `push_node(t, 0)`;若可能处理空树,需要先判空或保证根非空,否则会在 `p->left`/`p->right` 处解引用空指针。<!-- src: DS-C4#s113c1 + DS-C4#s114c1; type: one-step-inferred -->

### 二叉树后序遍历非递归算法复杂度分析

- 在压栈过程中,只有根结点是主动压入栈中的(压栈时标志置为 0);其他结点都是在父结点弹出栈时被首次压入栈中的,这些首次压入栈中的结点标志置为 0。<!-- src: DS-C4#s115; type: direct -->
- 非递归算法中,每一节点的标志位均从 0 自增至 2,因此循环的次数变为 $3n$,算法的时间复杂度依然为 $O(n)$。<!-- src: DS-C4#s115; type: direct -->

### 二叉树的层次遍历

- **层次遍历**:从上到下逐层访问,每一层从左到右逐个访问每个结点。<!-- src: DS-C4#s116; type: direct -->
- 例:二叉树中 A 为根,A 的左、右孩子为 B、C,B 只有左孩子 D,C 的左、右孩子为 E、F,则其层次遍历序列为 ABCDEF。<!-- src: DS-C4#s116g1; type: compressed -->

### 二叉树层次遍历算法分析

- 思路与前序遍历非递归算法类似,只是把辅助工具由**栈换为队列**:用一个队列完全接管结点,由它的进、出队顺序来决定结点的访问次序。<!-- src: DS-C4#s117; type: direct -->
- 一个节点访问完成之后,后续便不再需要访问这个节点了,因此**不需要 flag 记录状态**(对比:中序、后序非递归算法需要 flag;前序非递归同样不需要)。<!-- src: DS-C4#s117; type: one-step-inferred -->
- 层次遍历算法步骤:
  1) 如果二叉树为空,遍历操作为空。否则,将根结点进队;
  2) 反复循环进行以下操作,直到队空:队首结点出队、访问,如果该结点有左子,左子进队;如果该结点有右子,右子进队。<!-- src: DS-C4#s118; type: direct -->
- 正确性要点:层次遍历**先左后右**,队列访问**先进先出**——先进队左子,因此之后先出队(访问)左子。<!-- src: DS-C4#s119; type: direct -->

### 二叉树层次遍历的非递归算法(动画演示)

以上面 A(B,C)、B(D,−)、C(E,F) 的例树演示队列工作过程(队列从队头到队尾;动画中树上亮青色高亮表示当前正在处理的结点(初始帧为刚入队的根结点 A,其后各帧为当前出队并访问的结点),浅色表示其刚进队的孩子,队列下方逐步给出已访问的输出序列):<!-- src: DS-C4#s120-s127; type: synthesized -->

| 步骤 | 操作 | 队列(队头→队尾) | 已访问输出 |
| --- | --- | --- | --- |
| 初始 | 根结点 A 进队 | A | (空) |
| 1 | A 出队访问,左子 B、右子 C 进队 | B C | A |
| 2 | B 出队访问,左子 D 进队(B 无右子) | C D | A B |
| 3 | C 出队访问,左子 E、右子 F 进队 | D E F | A B C |
| 4 | D 出队访问(无孩子) | E F | A B C D |
| 5 | E 出队访问(无孩子) | F | A B C D E |
| 6 | F 出队访问,队空,遍历结束 | (空) | A B C D E F |

<!-- src: DS-C4#s120-s127; type: synthesized -->

### 二叉树层次遍历算法实现

<details>
<summary>代码</summary>

```cpp
template <class T, T NULL_VALUE> void BinaryTree<T, NULL_VALUE>::levelOrder() {
  // 若根节点为空，直接返回
  if (root == nullptr)
    return;
  // 使用队列来逐层输出二叉树的结点数据值
  queue<Node<T, NULL_VALUE> *> q;
  q.push(root); // 根节点入队
  while (!q.empty()) {
    // 获取队首元素并出队
    auto p = q.front();
    q.pop();
    cout << p->data << " "; // 输出当前结点的数据值
    if (p->left != nullptr) // 左孩子结点入队
      q.push(p->left);
    if (p->right != nullptr) // 右孩子结点入队
      q.push(p->right);
  }
  cout << endl;
}
```

</details>
<!-- src: DS-C4#s128c1; type: direct -->

### 二叉树层次遍历算法复杂度分析

- 一共 $n$ 个节点,每个节点仅**进队一次、出队一次**,时间复杂度为 $O(n)$。<!-- src: DS-C4#s129; type: direct -->

### 二叉树的非递归算法总结

- 本节配有总结视频(嵌入页面),PDF 封面帧仅可见一句字幕:"既然递归是利用系统栈自动帮我们记忆路径";视频完整内容未在课件文字中给出。<!-- src: DS-C4#s130; type: direct -->

### 标准存储的二叉树类中属性的定义

- Node 结点定义中将 `BinaryTree<T, NULL_VALUE>` 声明为 friend class,以允许二叉树类访问结点的私有成员。<!-- src: DS-C4#s132c1; type: compressed -->
- 结点私有成员:数据域 `data`、左右孩子指针 `left`/`right`,以及两个供线索二叉树中序遍历使用的标志 `leftFlag`、`rightFlag`(将在后续介绍):flag 为 0 时 left/right 为左/右孩子结点,为 1 时分别为前驱/后继线索;两个构造函数均把 flag 初始化为 0、孩子指针默认 nullptr。<!-- src: DS-C4#s132c1; type: compressed -->

<details>
<summary>代码</summary>

```cpp
template <class T, T NULL_VALUE> class BinaryTree;
template <class T, T NULL_VALUE> class Node {
  friend class BinaryTree<T, NULL_VALUE>; // 允许访问私有成员

private:
  T data;
  Node *left, *right;
  // 以下两个flag供线索二叉树中序遍历使用，将在后续介绍
  int leftFlag; // 用于标识是否线索，0时left为左孩子结点，1时为前驱线索
  int rightFlag; // 用于标识是否线索，0时right为右孩子结点，1时为后继线索

public:
  Node() : left(nullptr), right(nullptr), leftFlag(0), rightFlag(0) {}
  Node(const T &e, Node *L = nullptr, Node *R = nullptr)
      : data(e), left(L), right(R), leftFlag(0), rightFlag(0) {}
};
```

</details>
<!-- src: DS-C4#s132c1; type: direct -->

### 标准存储的二叉树类中公有方法与私有工具方法的定义

- 类唯一的属性是私有的根指针 `root`;公有方法包括:默认构造(root 置 nullptr)、由 vector 构造二叉树、析构函数(调用 delTree)、isEmpty(root == nullptr 时返回 true)、getRoot,以及 size(结点个数)、height(高度)、delTree(删除二叉树)和四种遍历输出 preOrder / inOrder / postOrder / levelOrder。<!-- src: DS-C4#s133c1; type: compressed -->
- 私有工具方法均以带参数(以 t 为根)的形式实现递归:`_size`、`_height`、`_del_tree`、`_pre_order`、`_in_order`、`_post_order`。<!-- src: DS-C4#s134c1; type: compressed -->

<details>
<summary>代码</summary>

```cpp
template <class T, T NULL_VALUE> class BinaryTree {
private:
  Node<T, NULL_VALUE> *root;

public:
  BinaryTree() : root(nullptr) {}
  BinaryTree(const std::vector<T> &v); // 由vector构造二叉树
  ~BinaryTree() { delTree(); }         // 析构函数
  bool isEmpty() { return (root == nullptr); } // 二叉树为空返回true，反之false
  Node<T, NULL_VALUE> *getRoot() { return root; }

  int size();        // 求二叉树的结点个数
  int height();      // 求二叉树的高度
  void delTree();    // 删除二叉树
  void preOrder();   // 按前序遍历输出二叉树的结点的数据值
  void inOrder();    // 按中序遍历输出二叉树的结点的数据值
  void postOrder();  // 按后序遍历输出二叉树的结点的数据值
  void levelOrder(); // 按层次遍历输出二叉树的结点的数据值

private:
  int _size(Node<T, NULL_VALUE> *t); // 求以t为根的二叉树的结点个数。
  int _height(Node<T, NULL_VALUE> *t); // 求以t为根的二叉树的高度。
  void _del_tree(Node<T, NULL_VALUE> *t); // 删除以t为根的二叉树

  // 按前序遍历输出以t为根的二叉树的结点的数据值
  void _pre_order(Node<T, NULL_VALUE> *t);
  // 按中序遍历输出以t为根的二叉树的结点的数据值
  void _in_order(Node<T, NULL_VALUE> *t);
  // 按后序遍历输出以t为根的二叉树的结点的数据值
  void _post_order(Node<T, NULL_VALUE> *t);
};
```

</details>
<!-- src: DS-C4#s133c1 + DS-C4#s134c1; type: synthesized -->

### 二叉树的构造方法

- 构造分两种情况:1) 构造一棵空的二叉树——属性 root = nullptr;2) 建立一棵非空二叉树(基于层次遍历序列)。<!-- src: DS-C4#s135; type: direct -->
- 注意:这里不讨论插入、删除等操作,而空二叉树无法验证其各种类操作,故要建立非空二叉树。<!-- src: DS-C4#s135; type: direct -->
- 设计构造接口的思路——回忆层次遍历算法:队首结点出队、访问,如果该结点**有左子,左子进队**;如果该结点**有右子,右子进队**。<!-- src: DS-C4#s136-s137; type: synthesized -->
- 反过来做"层次构造":队首结点出队、加入二叉树中,如果该结点有左子,出队下一元素作为左子;如果该结点有右子,出队下一元素作为右子,直至队列为空。对完全二叉树而言,直接将层次遍历的结果作为输入,反过来做一次"层次构造",即可构造出一棵完全二叉树。<!-- src: DS-C4#s138; type: compressed -->
- 对于更一般的二叉树,可以借助"空值"(NULL_VALUE)将其"补全"成一棵**完全二叉树**:图示中结点 1 缺右孩子,用一个取值为 -1 的虚线结点(即 NULL_VALUE)占位补全。<!-- src: DS-C4#s139g1; type: compressed -->
- 补全后的层次序列(含空值占位)即可作为构造函数的输入,如图示树对应 0,1,2,3,-1,4,5。<!-- src: DS-C4#s139g1; type: one-step-inferred -->

### 二叉树构造函数的实现

- 第一步:若输入 vector 为空,返回空二叉树;否则准备需要用到的队列,创建根结点(v[0])并将根结点入队。<!-- src: DS-C4#s140c1; type: compressed -->

<details>
<summary>代码</summary>

```cpp
template <class T, T NULL_VALUE>
BinaryTree<T, NULL_VALUE>::BinaryTree(const std::vector<T> &v) {
  // 若vector为空，返回空二叉树
  if (v.empty()) {
    root = nullptr;
    return;
  }

  // 使用队列来逐节点构造二叉树
  queue<Node<T, NULL_VALUE> *> q;
  root = new Node<T, NULL_VALUE>(v[0]);
  q.push(root);
```

</details>
<!-- src: DS-C4#s140c1; type: direct -->

- 第二步:遍历输入向量,逐一创建孩子节点——循环变量 i 从 1 开始、每次 i += 2,每轮取队首结点 p 出队,v[i] 非空值则创建为 p 的左孩子并进队,v[i+1] 非空值则创建为 p 的右孩子并进队。<!-- src: DS-C4#s141c1; type: compressed -->

<details>
<summary>代码</summary>

```cpp
  for (int i = 1; i < v.size(); i += 2) {
    // 获取队首当前操作节点
    Node<T, NULL_VALUE> *p = q.front();
    q.pop();

    // 查看输入数据是否为空值，若不是则构造左右孩子结点
    if (v[i] != NULL_VALUE) {
      p->left = new Node<T, NULL_VALUE>(v[i]);
      q.push(p->left);
    }
    // 注意输入可能没有末尾的NULL_VALUE，所以需要判断是否越界
    if (i + 1 < v.size() && v[i + 1] != NULL_VALUE) {
      p->right = new Node<T, NULL_VALUE>(v[i + 1]);
      q.push(p->right);
    }
  }
```

</details>
<!-- src: DS-C4#s141c1; type: direct -->

- 易错点:输入可能没有末尾的 NULL_VALUE,所以取 v[i+1] 之前需要判断 `i + 1 < v.size()` 是否越界。<!-- src: DS-C4#s141c1; type: direct -->
- 由代码可见:输入中的 NULL_VALUE 只占用序列位置,不创建结点、也不进队。<!-- src: DS-C4#s141c1; type: one-step-inferred -->

### 二叉树构造算法分析

- 二叉树的第一层结点(根)是主动进队的。<!-- src: DS-C4#s142; type: direct -->
- 根出队时,创建并链接了根的孩子(第二层的所有结点),并使得第二层结点全部进队。<!-- src: DS-C4#s142; type: direct -->
- 当第二层结点逐个出队时,又创建并链接了第三层的所有结点。<!-- src: DS-C4#s142; type: direct -->
- 如此这般,所有层的结点得以创建并链接在父结点的左或者右孩子链上。<!-- src: DS-C4#s142; type: direct -->

### 二叉树属性类成员函数

- 求属性的两个操作:函数 size 和 height。<!-- src: DS-C4#s143; type: direct -->
- **size 操作**:如果二叉树为空,返回 0,否则返回根的个数 1 加上根的左、右子树中结点个数。<!-- src: DS-C4#s143; type: direct -->
- **height 操作**:如果二叉树为空,返回 0,否则返回根的高度 1 加上根的左、右子树高度中的最大值。<!-- src: DS-C4#s143; type: direct -->
- 递归算法逻辑简单明了、代码较短,不容易出错。<!-- src: DS-C4#s143; type: direct -->

### 简化对外接口

- 从类的属性中可以看出,root 为私有成员,故带参数的 size 的递归函数并不方便外部函数调用,故该递归函数设置为私有;不带参数的 size 函数,虽不利于递归,但有利于外部函数调用,故设置为公有;公有成员函数 size 可以通过调用私有成员函数 size 得以实现。<!-- src: DS-C4#s144; type: compressed -->

<details>
<summary>代码</summary>

```cpp
template <class T, T NULL_VALUE>
int BinaryTree<T, NULL_VALUE>::
    _size(Node<T, NULL_VALUE> *t);

template <class T, T NULL_VALUE>
int BinaryTree<T, NULL_VALUE>::
    size();
```

</details>
<!-- src: DS-C4#s144c1; type: direct -->

- `_size` 与 `_height` 的递归实现:空结点返回 0;`_size` 返回 1 加左右子树结点数之和;`_height` 分别递归求左右子树高度 hl、hr,返回二者最大值加 1;公有的 size()/height() 仅以 root 为实参调用对应私有递归函数。<!-- src: DS-C4#s145c1; type: compressed -->

<details>
<summary>代码</summary>

```cpp
template <class T, T NULL_VALUE>
int BinaryTree<T, NULL_VALUE>::_size(Node<T, NULL_VALUE> *t) {
  if (t == nullptr) // 遍历到空结点，返回0
    return 0;
  return 1 + _size(t->left) + _size(t->right); // 递归求解
}

template <class T, T NULL_VALUE>
int BinaryTree<T, NULL_VALUE>::_height(Node<T, NULL_VALUE> *t) {
  if (t == nullptr) // 遍历到空结点，返回0
    return 0;
  int hl = _height(t->left);              // 递归求解左子树高度
  int hr = _height(t->right);             // 递归求解右子树高度
  return (hl > hr) ? (hl + 1) : (hr + 1); // 返回左右子树高度的最大值加1
}

template <class T, T NULL_VALUE> int BinaryTree<T, NULL_VALUE>::size() {
  return _size(root); // 调用私有递归函数求二叉树的结点个数
}
template <class T, T NULL_VALUE> int BinaryTree<T, NULL_VALUE>::height() {
  return _height(root); // 调用私有递归函数求二叉树的高度
}
```

</details>
<!-- src: DS-C4#s145c1; type: direct -->

### 二叉树数据操作类成员函数

- `_del_tree` 删除以 t 为根的二叉树:递归终止条件是遍历到空结点;先递归删除左子树,再递归删除右子树,最后 delete 当前结点;公有 delTree 调用 `_del_tree(root)` 后把 root 置空(root = nullptr)。<!-- src: DS-C4#s146c1; type: compressed -->

<details>
<summary>代码</summary>

```cpp
template <class T, T NULL_VALUE>
void BinaryTree<T, NULL_VALUE>::_del_tree(Node<T, NULL_VALUE> *t) {
  if (t == nullptr) // 递归终止条件，遍历到空结点
    return;

  _del_tree(t->left);  // 递归删除左子树
  _del_tree(t->right); // 递归删除右子树
  delete t;            // 删除当前结点
}

template <class T, T NULL_VALUE> void BinaryTree<T, NULL_VALUE>::delTree() {
  _del_tree(root);
  root = nullptr; // 删除二叉树后，根节点置空
}
```

</details>
<!-- src: DS-C4#s146c1; type: direct -->

## 3. 遍历序列确定二叉树

### 遍历序列确定二叉树:基本结论

- **完全二叉树**: 已知一棵完全二叉树的层次遍历,**能唯一确定**这个完全二叉树(回忆二叉树的构造)。<!-- src: DS-C4#s148; type: direct -->
- **满二叉树**: 已知一棵满二叉树的前序、中序、后序遍历之一,**能唯一确定**这棵满二叉树(满二叉树是特殊的完全二叉树)。<!-- src: DS-C4#s148; type: direct -->
- **一般二叉树**: 已知一个一般二叉树的前序、中序、后序遍历之一,**不能唯一确定**这棵二叉树。<!-- src: DS-C4#s148; type: direct -->
- **反例(单一前序序列)**: 一棵树以 A 为根、B 为左孩子、C 为右孩子;另一棵树是 A—B—C 的单支(链状)树;两棵树的前序遍历序列均为 ABC,故无法区分。<!-- src: DS-C4#s148g1; type: compressed -->
- 当知道了一棵二叉树的结点前序、中序、后序遍历序列,用两个不同序列**可能**可以唯一地确定这棵二叉树:<!-- src: DS-C4#s149; type: direct -->

| 序列组合 | 能否唯一确定一棵二叉树 |
| --- | --- |
| 前序 + 中序 | 能唯一确定 <!-- src: DS-C4#s149; type: direct --> |
| 后序 + 中序 | 能唯一确定 <!-- src: DS-C4#s149; type: direct --> |
| 前序 + 后序 | **不能**唯一确定 <!-- src: DS-C4#s149; type: direct --> |

- **反例(前序+后序)**: 一棵树中 B 是 A 的左孩子,另一棵树中 B 是 A 的右孩子;两棵树的前序遍历均为 AB,后序遍历均为 BA,无法确定是哪一棵二叉树。<!-- src: DS-C4#s150g1; type: compressed -->

### 例:由前序和中序序列确定二叉树

已知一棵二叉树的前序和中序序列为:<!-- src: DS-C4#s151ex1; type: direct -->

- 前序序列: B、L、S、C、F、D、G、I、H <!-- src: DS-C4#s151ex1; type: direct -->
- 中序序列: L、S、B、F、C、I、G、H、D <!-- src: DS-C4#s151ex1; type: direct -->

构造过程(对应课件分步图 (a)–(f)):<!-- src: DS-C4#s151-s152; type: synthesized -->

1. 前序第一个元素 B 为整棵树的根;中序中 B 之前的 L、S 构成左子树,B 之后的 F、C、I、G、H、D 构成右子树(右子树的前序为 C、F、D、G、I、H)——图 (a)。<!-- src: DS-C4#s151-s152; type: synthesized -->
2. 左子树前序首元素 L 为左子树的根,剩余结点 S 为其孩子——图 (b);中序中 S 在 L 之后,故 S 为 L 的右孩子。<!-- src: DS-C4#s151-s152; type: one-step-inferred -->
3. 右子树前序首元素 C 为该子树的根;中序中 F 在 C 之前,为 C 的左孩子;I、G、H、D 在 C 之后,构成 C 的右子树(其前序为 D、G、I、H)——图 (c)。<!-- src: DS-C4#s151-s152; type: synthesized -->
4. 该子树前序首元素 D 为根,剩余结点 G、I、H 构成其子树——图 (d);中序中 I、G、H 均在 D 之前,故为 D 的左子树。<!-- src: DS-C4#s151-s152; type: one-step-inferred -->
5. 前序首元素 G 为该子树的根;中序中 I 在 G 之前、H 在 G 之后,故 I 为 G 的左孩子、H 为 G 的右孩子——图 (e)。<!-- src: DS-C4#s151-s152; type: synthesized -->
6. 最终二叉树——图 (f): B 为根,L 为左孩子、C 为右孩子;S 为 L 的右孩子(按中序 S 在 L 之后;注意课件图 (f) 把 S 画在 L 的左下方,疑为绘图笔误,按序列推导应为右孩子);F 为 C 的左孩子、D 为 C 的右孩子;G 为 D 的孩子(按中序划分为左孩子,图中亦画在 D 左下方);I、H 分别为 G 的左、右孩子。<!-- src: DS-C4#s152g1; type: one-step-inferred -->

### 算法思想

- 两个序列分别存放在**前序数组**和**中序数组**中。<!-- src: DS-C4#s153 + DS-C4#s154; type: synthesized -->
- 由前序数组定出根结点值后,在中序数组找到根结点值所在的位置,由此找到了前序和中序序列中根的左子树下标范围,同样也找到了右子树的下标范围。接下来**递归左右子树下标范围**即可确定该二叉树。<!-- src: DS-C4#s153 + DS-C4#s154; type: synthesized -->
- 图示符号: 前序序列的当前下标范围记为 $[pl, pr]$,根结点值位于 $pl$ 处;中序序列的当前下标范围记为 $[ml, mr]$,根结点值在中序中的位置记为 $pos$。<!-- src: DS-C4#s154g1; type: compressed -->

### 算法实现

第一部分——检查输入合法性(输入序列不为空且长度相同;两个序列中元素相同且不出现重复元素):<!-- src: DS-C4#s155; type: compressed -->

<details>
<summary>代码</summary>

```cpp
template <class T, T NULL_VALUE>
void BinaryTree<T, NULL_VALUE>::buildTreePreIn(const std::vector<T> &pre,
                                               const std::vector<T> &in) {
  // 确认输入序列不为空且长度相同
  if (pre.empty() || in.empty() || pre.size() != in.size())
    return;
  // 确认两个序列中元素相同且不出现重复元素
  unordered_set<T> pre_set(pre.begin(), pre.end());
  unordered_set<T> in_set(in.begin(), in.end());
  if (pre_set != in_set || pre_set.size() != pre.size())
    return;
```

</details>
<!-- src: DS-C4#s155c1; type: direct -->

第二部分——使用前序和中序序列构造二叉树(定义匿名函数用于递归):<!-- src: DS-C4#s156; type: compressed -->

<details>
<summary>代码</summary>

```cpp
  // 使用前序和中序序列构造二叉树
  // 定义匿名函数用于递归
  function<Node<T, NULL_VALUE> *(int, int, int, int)> build =
      [&](int pre_l, int pre_r, int in_l, int in_r) -> Node<T, NULL_VALUE> * {
    if (pre_l > pre_r || in_l > in_r) // 递归终止条件
      return nullptr;
    // 使用前序序列第一个元素构造根节点
    Node<T, NULL_VALUE> *root = new Node<T, NULL_VALUE>(pre[pre_l]);
    int i = in_l; // 在中序序列中找到根节点的位置
    while (i <= in_r && in[i] != pre[pre_l])
      ++i;
    int left_size = i - in_l; // 左子树的结点个数
    root->left = build(pre_l + 1, pre_l + left_size, in_l, i - 1); // 递归左子
    root->right = build(pre_l + left_size + 1, pre_r, i + 1, in_r); // 递归右子
    return root;
  };
  // 构造二叉树
  root = build(0, pre.size() - 1, 0, in.size() - 1);
```

</details>
<!-- src: DS-C4#s156c1; type: direct -->

算法要点:

- **递归终止条件**: `pre_l > pre_r` 或 `in_l > in_r` 时返回 `nullptr`。<!-- src: DS-C4#s156c1; type: compressed -->
- 每层递归: 用前序序列第一个元素 `pre[pre_l]` 构造根结点;在中序序列中(从 `in_l` 起线性查找)找到根结点的位置 `i`;`left_size = i - in_l` 即左子树的结点个数;再按下标范围分别递归构造左子(`build(pre_l + 1, pre_l + left_size, in_l, i - 1)`)和右子(`build(pre_l + left_size + 1, pre_r, i + 1, in_r)`)。<!-- src: DS-C4#s156c1; type: compressed -->

### 后序+中序确定二叉树(信息互补 vs 信息重叠)

- 例: 假如已知一棵二叉树的后序和中序序列为——后序序列: S、L、F、I、H、G、D、C、B;中序序列: L、S、B、F、C、I、G、H、D。<!-- src: DS-C4#s157ex1; type: direct -->
- 原来在前序中找根的任务,就交给了后序序列。<!-- src: DS-C4#s157; type: direct -->
- 两个序列在找根时方法不同: 在**前序序列中根位于最前面**,而**后序序列中根位于最后面**。<!-- src: DS-C4#s157; type: direct -->
- 无论根在前、在后,两者提供的信息都是一致的,都能和中序遍历提供的信息**互补**,因此(后序+中序)也能唯一地确定一棵二叉树。<!-- src: DS-C4#s157; type: direct -->
- 前序+后序不能唯一确定的原因: 从前序序列获得的信息从后序序列中也能获知,而从前序序列得不到的信息,从后序序列中也无从获知,反之亦然——这两个序列提供的信息**是重叠的**而不是互补的。<!-- src: DS-C4#s158; type: direct -->

## 4. 最优二叉树

### 最优二叉树

- **路径长度**: 二叉树中任意两个结点间的路径长度为其路径上的分支总数。<!-- src: DS-C4#s160; type: direct -->
- **加权路径长度(WPL)**: 二叉树的加权路径长度为指从根结点到各个叶子结点的路径长度乘以该叶子的权值之和,记为: <!-- src: DS-C4#s160; type: direct -->

$$
WPL=\sum_{k=1}^{n} w_k L_k
$$


<!-- src: DS-C4#s160; type: direct -->
- 式中 $WPL$ 表示加权路径长度、$n$ 为叶子结点的个数、$w_k$ 为第 $k$ 个叶子的权值、$L_k$ 为根到第 $k$ 个叶子的路径长度。<!-- src: DS-C4#s160; type: direct -->
- 对同一组带权的叶子结点 $\{(A,10),\ (B,20),\ (C,30)\}$,不同的二叉树的形态会使得其带权路径长度不同: 图(a)中 A 为根的孩子(路径长度 1),B、C 路径长度为 2,$WPL=10\times1+20\times2+30\times2=110$;图(b)中 C 为根的孩子(路径长度 1),B、A 路径长度为 2,$WPL=30\times1+20\times2+10\times2=90$。<!-- src: DS-C4#s161 + DS-C4#s161g1; type: compressed -->
- **最优二叉树定义**: 当一组叶子的权值确定后(假设分别为 $\{w_1, w_2, \cdots, w_n\}$),考虑将这些叶子以何种策略挂在一棵二叉树上(即这棵二叉树是怎样的形态)才能使其带权路径 $WPL$ 达到最小;把能使 $WPL$ 达到最小的二叉树,称为**最优二叉树**。<!-- src: DS-C4#s162; type: direct -->
- 构造最优二叉树采用**贪心策略**: 权值越大,越靠近根。<!-- src: DS-C4#s162; type: direct -->
- 示例: 对一组带权结点 $U=\{(A,3),\ (B,8),\ (C,10),\ (D,12),\ (E,50),\ (F,4)\}$,其一棵最优二叉树的形态为: 权值最大的 E(50) 是根的孩子(路径长度 1);B(8)、C(10)、D(12) 的路径长度为 3;权值最小的 A(3)、F(4) 路径长度为 4,且 A 与 F 互为兄弟、C 与 D 互为兄弟。<!-- src: DS-C4#s163g1; type: direct -->

### 哈夫曼算法

- 哈夫曼算法就是利用了**权值越大,越靠近根**的思想,逐步比较结点的权值,构造出了哈夫曼树;哈夫曼树是**一棵最优二叉树**。<!-- src: DS-C4#s164; type: direct -->
- 本小节配有一段嵌入讲解视频(封面字幕:"具体来说,我们将构造过程总结为四个标准步骤"),视频完整内容未在课件文字中给出。<!-- src: DS-C4#s165; type: direct -->
- **哈夫曼算法的具体步骤**(输入: 给定的一个带权结点集合 $U$):
  1. 如果 $U$ 中只有一个结点,操作结束,否则转向第 2 步;
  2. 在集合中选取两个权值最小的结点 $x$、$y$,构造一个新的结点 $z$,新结点 $z$ 的权值为结点 $x$、$y$ 的权值之和;在集合 $U$ 中删除结点 $x$ 和 $y$ 并加入新结点 $z$,然后转向第 1 步。<!-- src: DS-C4#s164; type: direct -->

#### 哈夫曼算法构造示例

- 例: 对一组带权结点 $U=\{(A,3),\ (B,8),\ (C,10),\ (D,12),\ (E,50),\ (F,4)\}$,按照哈夫曼算法构造一棵最优二叉树。动画中点划线框表示当前集合 $U$ 中的结点;每次合并产生的新子树画在框外右侧,新结点与其左右孩子间的分支以蓝色标出;合并完成后新结点作为子树之根回到集合 $U$ 中,被合并的两个结点从 $U$ 中删除。<!-- src: DS-C4#s166-s175; type: synthesized -->
- 每步选取 $U$ 中权值最小的两个结点合并,过程如下(图中每次合并均把权值较小者画为左孩子):<!-- src: DS-C4#s166-s182; type: synthesized -->

| 步骤 | 选取的两个最小权结点 | 新结点(权值=两者之和) | 合并后集合 $U$ 的内容 |
|---|---|---|---|
| 初始 | — | — | A(3), B(8), C(10), D(12), E(50), F(4) <!-- src: DS-C4#s166-s167; type: synthesized --> |
| 1 | A(3)、F(4) | $T_1$(7),左孩子 A、右孩子 F | $T_1$(7), B(8), C(10), D(12), E(50) <!-- src: DS-C4#s168-s169; type: synthesized --> |
| 2 | $T_1$(7)、B(8) | $T_2$(15),左孩子 $T_1$、右孩子 B | $T_2$(15), C(10), D(12), E(50) <!-- src: DS-C4#s170-s171; type: synthesized --> |
| 3 | C(10)、D(12) | $T_3$(22),左孩子 C、右孩子 D | $T_2$(15), $T_3$(22), E(50) <!-- src: DS-C4#s172-s173; type: synthesized --> |
| 4 | $T_2$(15)、$T_3$(22) | $T_4$(37),左孩子 $T_2$、右孩子 $T_3$ | $T_4$(37), E(50) <!-- src: DS-C4#s174-s175; type: synthesized --> |
| 5 | $T_4$(37)、E(50) | $T_5$(87),左孩子 $T_4$、右孩子 E | $T_5$(87) —— $U$ 中只剩一个结点,操作结束 <!-- src: DS-C4#s176-s182; type: synthesized --> |

- 构造中共产生五个中间结点($T_5(87)$ 即整棵哈夫曼树的根),动画演示了把各中间结点代表的子树自顶向下逐层"代回"拼装成完整树的过程: 先单独画出 $T_5,T_4,T_3,T_2,T_1$ 五棵两层小树,再依次将 $T_4$、$T_3$、$T_2$、$T_1$ 替换为其实际子树。最终树形为: 根 $T_5(87)$ 的左子为 $T_4(37)$、右子为叶子 $E(50)$;$T_4$ 的左子为 $T_2(15)$、右子为 $T_3(22)$;$T_2$ 的左子为 $T_1(7)$、右子为叶子 $B(8)$;$T_3$ 的左、右子为叶子 $C(10)$、$D(12)$;$T_1$ 的左、右子为叶子 $A(3)$、$F(4)$。末帧去掉 $T_1\sim T_5$ 标号,中间结点圆圈留空、仅在旁标注权值。<!-- src: DS-C4#s176-s182; type: synthesized -->

### 哈夫曼算法的最优性(哈夫曼算法构造出的二叉树一定是一个最优二叉树吗?)

- **定理4-1**: 设 $T$ 为带权 $w_1\le w_2\le\cdots\le w_t$ 的一组结点集合构成的**最优二叉树**,则: 1) 带权 $w_1$、$w_2$ 对应的叶子节点 $v_{w_1}$、$v_{w_2}$ 是**兄弟节点**;2) 以叶子 $v_{w_1}$、$v_{w_2}$ 为儿子结点的**中间结点**,其**路径长度最长**。<!-- src: DS-C4#s183; type: direct -->
- **定理4-2**: 设 $T$ 为带权 $w_1\le w_2\le\cdots\le w_t$ 的一组结点集合构成的**最优二叉树**,若将以带权 $w_1$ 和 $w_2$ 的叶子为儿子的内部结点改为带权 $w_1+w_2$ 的叶子,得到一棵新树 $T_1$,则 $T_1$ 也是最优二叉树。<!-- src: DS-C4#s183; type: direct -->

### 哈夫曼算法的实现

- 二叉树采用**链接存储法**: 哈夫曼结点之间通过指针连接。<!-- src: DS-C4#s184; type: direct -->
- **哈夫曼结点(叶子、中间结点)HuffmanNode** 包含 **4 个字段**: `data` 为结点的值;`weight` 为结点的权值;`left` 和 `right` 为结点的左、右孩子。初始时,所有节点的左右孩子均**初始化为空指针**。<!-- src: DS-C4#s184; type: direct -->
- 实现步骤: <!-- src: DS-C4#s185; type: direct -->
  1. 首先根据给定的集合创建所有的节点,并放入一个 vector 中;
  2. 遍历 vector 取出两个权值最小的节点(假设为 node1 和 node2);
  3. 创建一个新的中间节点 new_node,其 weight 为 node1->weight + node2->weight,data 可以为空或任意值(因为中间节点不存储实际数据);
  4. 将 new_node 的 left 指向 node1,right 指向 node2;
  5. 将 new_node 重新放入 vector 中,若 vector 元素数量大于 1,回到第 2 步;重复上述步骤,直到算法结束,**最后一个节点就是哈夫曼树的根节点**。<!-- src: DS-C4#s185; type: direct -->

<details>
<summary>代码</summary>

```cpp
// 构建哈夫曼树
HuffmanNode *buildHuffmanTree(vector<HuffmanNode *> &nodes) {
  while (nodes.size() > 1) {
    // 找到权值最小的两个节点
    auto [min1, min2] = findMinTwoNodes(nodes);
    // 创建新的中间节点
    HuffmanNode *new_node =
        new HuffmanNode('\0', min1->weight + min2->weight, min1, min2);
    // 从 vector 中移除 min1 和 min2
    nodes.erase(remove(nodes.begin(), nodes.end(), min1), nodes.end());
    nodes.erase(remove(nodes.begin(), nodes.end(), min2), nodes.end());
    // 将新节点加入 vector
    nodes.push_back(new_node);
  }
  // 返回哈夫曼树的根节点
  return nodes.empty() ? nullptr : nodes[0];
}
```

</details>
<!-- src: DS-C4#s186c1; type: direct -->

<details>
<summary>代码</summary>

```cpp
// 找到 vector 中权值最小的两个节点
static pair<HuffmanNode *, HuffmanNode *>
findMinTwoNodes(vector<HuffmanNode *> &nodes) {
  // 两个指针，分别指向权值最小的两个节点
  HuffmanNode *min1 = nullptr, *min2 = nullptr;
  int min_weight1 = INT_MAX, min_weight2 = INT_MAX;
  // 遍历 vector，找到权值最小的两个节点
  for (auto node : nodes) {
    if (node->weight < min_weight1) {
      min_weight2 = min_weight1; // 将原来的 min1 节点变为 min2 节点
      min2 = min1;
      min_weight1 = node->weight; // 更新 min1 节点（min1节点比min2节点更小）
      min1 = node;
    } else if (node->weight < min_weight2) {
      min_weight2 = node->weight; // 更新 min2 节点
      min2 = node;
    }
  }
  return {min1, min2};
}
```

</details>
<!-- src: DS-C4#s187c1; type: direct -->

### 哈夫曼算法复杂度分析

- 时间复杂度分析: 1) 读入并创建 $n$ 个叶子结点,时间消耗 $O(n)$;2) 执行了 $n-1$ 次创建新的中间结点操作,每次创建要在当前候选集合(规模为 $O(n)$)中找到权值最小的两个元素,时间耗费为 $O(n)$。算法总的**时间复杂度为 $O(n^2)$**。<!-- src: DS-C4#s188; type: compressed -->
- 在后面学习了**堆**之后,可以将"找到权值最小的两个元素"这一步的时间复杂度降到 $O(\log n)$,这样总的时间复杂度可以降到 $O(n\log n)$。<!-- src: DS-C4#s188; type: direct -->

### 哈夫曼编码

- 本小节配有一段嵌入讲解视频(封面字幕:"既然我们已经掌握了最优二叉树的构造方法"),视频完整内容未在课件文字中给出。<!-- src: DS-C4#s189; type: direct -->
- 一般来说,字符编码采用**等长策略**,即每个字符的二进制编码长度一样。在通讯业务中,希望传送的编码越短越好: 高频传送的字符希望其编码尽可能短,低频字因为不常用可以比较长些。<!-- src: DS-C4#s190; type: compressed -->
- **前缀编码**: 在一个字符集中,字符的编码可以不等长,但**任何一个字符的编码不得是另外一个编码的前缀**。如 a 编码 110,其前缀 1、11 不得是任何字符编码,同样以 110 为前缀的编码也不得出现。**哈夫曼编码是一种前缀编码**。<!-- src: DS-C4#s190; type: direct -->
- 易错点: 之所以任何一个字符的编码不得是另外一个编码的前缀,是因为这样会造成**解码的多义性**。<!-- src: DS-C4#s190n; type: direct -->
- 引例: 若传送业务中只有 4 种不同字符 A、B、C、D,用等长编码可使用长度为 2 的编码,分别是 00、01、10、11;如果字符 A 使用频率很高、字符 D 使用频率很低,就可以采用将 D 的编码位数拉长、换取 A 的编码位数缩短的策略来缩短总的字符传送量。按此思路编码由等长变为不等长,而**哈夫曼树**就可以用来构造这样的**不等长编码**。<!-- src: DS-C4#s191; type: compressed -->
- **求编码方法**: 对哈夫曼树中的所有结点求哈夫曼编码,只需要**从根开始遍历**,如果**向左**则在字符串上加上**一个 0**,**向右**则加上**一个 1**,直到遍历到**叶子结点**为止。<!-- src: DS-C4#s192; type: direct -->
- 示例树(上述 $U$ 构造的哈夫曼树)中各叶子的哈夫曼编码如下;图中中间结点同样标有编码($T_4$: 0、$T_2$: 00、$T_3$: 01、$T_1$: 000)。<!-- src: DS-C4#s192g1; type: compressed -->

| 叶子 | 权值 | 编码 |
| --- | --- | --- |
| A | 3 | 0000 |
| F | 4 | 0001 |
| B | 8 | 001 |
| C | 10 | 010 |
| D | 12 | 011 |
| E | 50 | 1 |

<!-- src: DS-C4#s192g1; type: compressed -->

- 压缩效果: 用等长编码,为**表示 6 个元素需要用三位编码**,即待传输短文中有 $n$ 个字符就需要 $3n$ 位才能代表这篇短文;使用哈夫曼编码后,$n$ 个字符所需要的总位数为 $n\times\left(4\times\frac{3}{87}+4\times\frac{4}{87}+3\times\frac{8}{87}+3\times\frac{10}{87}+3\times\frac{12}{87}+1\times\frac{50}{87}\right)=\frac{168}{87}n$,显然它连 $2n$ 都不到,大大减少了通讯中的传输量。<!-- src: DS-C4#s195; type: compressed -->

### 求哈夫曼编码的算法实现

<details>
<summary>代码</summary>

```cpp
// 打印哈夫曼编码
void printHuffmanCodes(HuffmanNode *root, string code) {
  if (!root)
    return;

  // 如果是叶子节点，输出编码
  if (!root->left && !root->right) {
    cout << root->data << ": " << code << endl;
  }

  // 递归遍历左子树和右子树
  printHuffmanCodes(root->left, code + "0");
  printHuffmanCodes(root->right, code + "1");
}
```

</details>
<!-- src: DS-C4#s193c1; type: direct -->

### 求哈夫曼编码的算法复杂度分析

- 每一个节点只会在算法中**被遍历到一次**,而哈夫曼树的构建过程一共会**添加 $n-1$ 个中间节点**,故总共的节点数量为 $2n-1$,从而总时间复杂度为 $O(n)$。<!-- src: DS-C4#s194; type: direct -->

## 5. 树和森林

### 树和森林的存储方式

- 本节配有一段嵌入讲解视频(封面字幕:"大家好,今天我们深入探讨树的物理存储结构与二叉树的奥秘"),视频完整内容未在课件文字中给出。<!-- src: DS-C4#s198; type: direct -->
- 树和森林有两种常用存储方式:**双亲表示法**——顺序存储;**孩子兄弟法**——二叉树存储。<!-- src: DS-C4#s197; type: direct -->
- 常用**孩子兄弟表示法**,这样二叉树基本操作都可利用上。<!-- src: DS-C4#s197; type: direct -->

### 树的孩子兄弟表示法

- 每个结点除了保存数据,还保存了指向该结点的**最大孩子**和**最大弟弟**的指针。<!-- src: DS-C4#s199; type: direct -->
- 结点结构含三个字段:data 字段保存了结点数据、firstchild 字段保存了最大孩子的指针、nextsibling 字段保存了最大弟弟的指针;图示中字段从左到右排列为 firstchild、data、nextsubling(图示标签原文如此,应为 nextsibling,系课件笔误;同页正文文字中拼写正确)。<!-- src: DS-C4#s199 + DS-C4#s199g1; type: compressed -->
- 为了方便,有时称 firstchild 为结点的**左分支**或**左子**,称 nextsibling 为**右分支**或**右子**。<!-- src: DS-C4#s199; type: direct -->
- 示例:树 (a) 中根 A 的孩子为 B、C、D,C 的孩子为 E、F,D 的孩子为 G、I,G 的孩子为 H;按孩子兄弟法得到的对应二叉树 (b) 为:A 左子 B;B 右子 C;C 左子 E、右子 D;E 右子 F;D 左子 G;G 左子 H、右子 I。<!-- src: DS-C4#s200g1; type: compressed -->

### 森林的孩子兄弟表示法

- 每棵树按照孩子兄弟法存储后,再将每棵树的根视作兄弟,一个接一个地链在**最小哥哥的右分支**上。<!-- src: DS-C4#s201; type: direct -->
- 示例:森林 (a) 由三棵树组成——第一棵 A(孩子 B、C;C 的孩子 E、F),第二棵 D(孩子 G、I;G 的孩子 H),第三棵 J(孩子 K);对应二叉树 (b) 为:A 为根,A 左子 B、右子 D;B 右子 C;C 左子 E;E 右子 F;D 左子 G、右子 J;G 左子 H、右子 I;J 左子 K。<!-- src: DS-C4#s201g1; type: compressed -->

### 树转化成对应的二叉树

- 树的根就是二叉树的根。<!-- src: DS-C4#s202; type: direct -->
- 对树中每个结点,保留其到最大孩子的分支;对其余孩子,删除其到父结点的分支,逐个降级,增加其左侧哥哥到它的右分支,将它链到最小哥哥结点的右分支上去。<!-- src: DS-C4#s202; type: direct -->
- 图示要点:被删除的"父结点—非长子"分支(如 A—C、A—D、C—F、D—I)在图中以 × 标记;新增的"哥哥—弟弟"右分支(如 B—C、C—D、E—F、G—I)在对应二叉树中以加粗线标出。<!-- src: DS-C4#s202g1; type: compressed -->

### 森林转化成对应的二叉树


- 步骤:① 将森林中的每棵树转换为对应的二叉树,每棵二叉树的根就是它对应树的根;② 将每棵树的根看作兄弟,即二叉树的根为兄弟;③ 将第一棵二叉树的根作为森林对应的二叉树的根,其余二叉树的根由其最小的哥哥结点用 nextsibling 字段连接。<!-- src: DS-C4#s203; type: compressed -->
- 示例(与"森林的孩子兄弟表示法"同一森林):转换时各树内部"父—非长子"分支(A—C、C—F、D—I)以 × 标记删除;对应二叉树中新增的兄弟右分支(A—D、B—C、D—J、G—I、E—F)以加粗线标出,其中 A—D、D—J 即各树根之间的 nextsibling 连接。<!-- src: DS-C4#s204g1; type: compressed -->

### 将二叉树转换成树或森林

- **树、森林和对应的二叉树之间的关系是一一对应的**。<!-- src: DS-C4#s205; type: direct -->
- 转换方法:二叉树的根即第一棵树的根;断开每个结点的 nextsibling 发出的分支,将右分支上结点上移至连续右分支的最上层。如果该上层结点有父结点,右分支结点作为该父结点的次子建立其间的分支;如果该上层结点无父结点,右分支结点作为一棵新树的根结点。<!-- src: DS-C4#s205; type: direct -->
- 示例:对二叉树(A 左子 B、右子 D;B 右子 C;C 左子 E;E 右子 F;D 左子 G、右子 J;G 左子 H、右子 I;J 左子 K),断开图中以 × 标记的 nextsibling 分支(A—D、B—C、E—F、G—I、D—J),得到对应森林:A(孩子 B、C;C 的孩子 E、F)、D(孩子 G、I;G 的孩子 H)、J(孩子 K);该例与前述"森林转化成二叉树"的示例互逆。<!-- src: DS-C4#s206g1; type: compressed -->

### 树的遍历

- 有序树的遍历有三种方式:**前序遍历、后序遍历和层次遍历**。<!-- src: DS-C4#s207; type: direct -->
- 前序遍历访问完根结点后再逐个从左到右先序遍历其子树;后序遍历从左到右逐个后序遍历完其所有子树后再访问根。<!-- src: DS-C4#s207; type: direct -->
- 根有多个孩子,显然**无法定义中序遍历**。<!-- src: DS-C4#s207; type: direct -->

### 树的前序遍历和后序遍历

- **前序遍历**:① 如果根结点为空,遍历操作为空,否则访问根结点;② 从左到右,逐个前序遍历以根结点的孩子为根的子树。<!-- src: DS-C4#s208; type: direct -->
- **后序遍历**:① 如果根结点为空,遍历操作为空,否则从左到右,逐个后序遍历以根结点的孩子为根的子树;② 访问根结点。<!-- src: DS-C4#s208; type: direct -->
- 示例(树:A 的孩子 B、C、D;C 的孩子 E、F;D 的孩子 G、I;G 的孩子 H):前序遍历为 A、B、C、E、F、D、G、H、I,是孩子兄弟法对应二叉树的**前序遍历**;后序遍历为 B、E、F、C、H、G、I、D、A,是孩子兄弟法对应二叉树的**中序遍历**。<!-- src: DS-C4#s209; type: compressed -->
- 有趣的是:**树的先根遍历就是对应二叉树的先序遍历;树的后根遍历就是对应二叉树的中序遍历**。<!-- src: DS-C4#s210; type: direct -->

### 森林的遍历

- **前序遍历**:① 如果森林为空,遍历操作为空;② 访问第一棵树的根结点;③ 前序遍历第一棵树中根结点的所有子树形成的森林;④ 从左到右同样方式依次访问第二棵、第三棵、直至所有树。<!-- src: DS-C4#s211; type: direct -->
- **后序遍历**(相当于从左到右,对每棵树中序遍历):① 如果森林为空,遍历操作为空;② 中序遍历第一棵树中根的子树形成的森林;③ 访问第一棵树的根结点;④ 从左到右同样方式依次访问第二棵、第三棵、直至所有树。<!-- src: DS-C4#s211 + DS-C4#s212; type: one-step-inferred -->
- 示例(森林:第一棵树 B 的孩子为 L、E、X;第二棵树 C 的孩子为 F;第三棵树 D 的孩子为 G、H,H 的孩子为 I、U、W;对应二叉树:B 为根,B 左子 L、右子 C;L 右子 E;E 右子 X;C 左子 F、右子 D;D 左子 G;G 右子 H;H 左子 I;I 右子 U;U 右子 W):前序遍历为 B、L、E、X、C、F、D、G、H、I、U、W,是孩子兄弟法对应二叉树的**前序遍历**;后序遍历为 L、E、X、B、F、C、G、I、U、W、H、D,是孩子兄弟法对应二叉树的**中序遍历**。<!-- src: DS-C4#s212; type: compressed -->
- 有趣的是:**森林的先序遍历就是对应二叉树的先序遍历;森林的中序遍历就是对应二叉树的中序遍历**(此处"中序遍历"即前页所称森林的"后序遍历")。<!-- src: DS-C4#s213 + DS-C4#s211; type: synthesized -->

### 树和森林的基本操作分析

- 树形结构中**遍历操作是基础**:既然对树和森林的遍历都可以转换为对应二叉树的遍历,只要掌握了二叉树的基本操作和算法思路,就能找到树和森林中问题的解决方法。<!-- src: DS-C4#s214; type: direct -->
- 例(内存中有一个用二叉树表示的一棵树):
  - **求树的高度**:可以利用二叉树的前序遍历,访问一个结点时,左子的层次为父结点层次加一,右子的层次和父结点的一样的方法来处理。<!-- src: DS-C4#s214; type: direct -->
  - **求森林中树有几棵**:可以在二叉树中顺着根,一路右子计数过去,便可解决。<!-- src: DS-C4#s214; type: direct -->

### 思考题:已知一棵树的前序遍历和后序遍历,能否唯一决定一棵树?

- **答案:在结点标识可区分(无重复)的前提下,可以**。<!-- src: DS-C4#s216; type: one-step-inferred -->
- 原因:一棵树的前序遍历序列即其对应孩子兄弟二叉树的前序遍历;一棵树的后序遍历序列即其对应孩子兄弟二叉树的中序遍历;而已知二叉树的前序和中序遍历可以唯一确定这棵二叉树;根据这棵二叉树又能唯一对应一棵树。故答案是:可以!<!-- src: DS-C4#s215-s216; type: compressed -->

## 6. 优先级队列

### 基本的优先级队列

- **优先级队列**: 结点之间的关系是由结点的优先级决定的,而不是由入队的先后次序决定;优先级高的先出队,优先级低的后出队。<!-- src: DS-C4#s218; type: direct -->
- 优先级队列的**接口(Interface)与普通的队列相同**。<!-- src: DS-C4#s218; type: direct -->

### 优先级队列的简单实现

- 思路: 利用现有的队列结构,处理优先级有两种方法。<!-- src: DS-C4#s219; type: direct -->
- **第一种方案**: 入队时,按照优先级在队列中寻找合适的位置,将新入队的元素插入在此位置;出队操作的实现保持不变。入队操作的时间复杂度是 $O(N)$,出队操作的时间复杂度是 $O(1)$。<!-- src: DS-C4#s219; type: compressed -->
- **第二种方案**: 入队操作的实现保持不变,将新入队的元素放在队列尾;但出队时,在整个队列中查找优先级最高的元素,让它出队。入队操作的时间复杂度是 $O(1)$,出队操作的时间复杂度是 $O(N)$。<!-- src: DS-C4#s219; type: compressed -->

### 二叉堆

- **堆的定义**: 堆是一棵**完全二叉树**,且每个有孩子的结点 $i$ 对所有存在的孩子满足下述关系之一: $k_i \le k_{2i}$、$k_i \le k_{2i+1}$(最小堆);或者 $k_i \ge k_{2i}$、$k_i \ge k_{2i+1}$(最大堆),其中不存在的孩子不参与比较,下标是树按层次遍历的次序。<!-- src: DS-C4#s221; type: one-step-inferred -->
- 满足父结点不大于其存在孩子的称为**最小堆**。例如: 层次序列 {2,3,4,5,7,10,23,29,60} 是最小堆。<!-- src: DS-C4#s221; type: one-step-inferred -->
- 满足父结点不小于其存在孩子的称为**最大堆**。例如: 层次序列 {12,7,8,4,6,5,3,1} 是最大堆。<!-- src: DS-C4#s221; type: one-step-inferred -->
- **二叉堆的特性**:
  - **结构性**: 符合完全二叉树的结构。<!-- src: DS-C4#s221; type: direct -->
  - **有序性**: 满足父节点小于子节点(最小化堆)或父节点大于子节点(最大化堆)。<!-- src: DS-C4#s221; type: direct -->
- 原文此页写"以下的讨论都以最大化堆为例",但后续插入/删除操作的讲解实际均以**最小堆**为例。<!-- src: DS-C4#s221 + DS-C4#s225-s240; type: one-step-inferred -->

### 二叉堆的存储

- 由于二叉堆是完全二叉树,可以采用**顺序存储**;二叉堆的有序性可以很容易地通过下标来反映。<!-- src: DS-C4#s222; type: direct -->
- 例: 最小堆 {2,3,4,5,7,10,23,29,60} 的顺序存储(下标 0 的单元不用,根存放在下标 1 处):<!-- src: DS-C4#s222g1; type: compressed -->

| Index | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Value | (空)<!-- src: DS-C4#s222t1; type: direct --> | 2 | 3 | 4 | 5 | 7 | 10 | 23 | 29 | 60 |

### 基于二叉堆的优先级队列

- 如果**数值越小,优先级越高**,则可以用一个**最小堆**存储优先级队列。<!-- src: DS-C4#s223; type: direct -->
- 在最小堆中,**最小元素是根元素**,而根结点永远存放在**数组的下标为 1 的元素**中。<!-- src: DS-C4#s223; type: direct -->
- 各操作的实现思路:
  - **获取队头元素**: 返回下标为 1 的数组元素值。<!-- src: DS-C4#s223; type: direct -->
  - **出队操作**: 删除下标为 1 的数组元素中的值;调整剩下的元素,以保持堆的有序性。<!-- src: DS-C4#s223; type: direct -->
  - **入队操作**: 在数组的末尾添加一个元素;添加后调整元素的位置,以保持堆的有序性。<!-- src: DS-C4#s223; type: direct -->
- **优先级队列类**: 数据成员——用一个动态数组;成员函数——实现队列类的所有操作。<!-- src: DS-C4#s223; type: direct -->

### 优先级队列类的定义

<details>
<summary>代码</summary>

```cpp
template <typename T> class PriorityQueue {
private:
  std::vector<T> data = std::vector<T>(1); // 0th index is unused

public:
  PriorityQueue() = default;
  PriorityQueue(const std::vector<T> &elements);
  // Insert an element into the priority queue
  void push(const T &value);
  // Remove and return the minimum element (root of the heap)
  T pop();
  // Get the minimum element without removing it
  T top() const;
  // Check if the priority queue is empty
  bool empty() const;
  // Get the size of the priority queue
  size_t size() const;
};
```

</details>
<!-- src: DS-C4#s224c1; type: one-step-inferred -->

### 在最小堆中插入一个新元素(push 操作)

- 堆的插入是**在具有最大序号的元素之后**插入新的元素或结点,否则将违反堆的结构性。<!-- src: DS-C4#s225; type: direct -->
- 如果新元素放入后,没有违反堆的有序性,那么操作结束。否则,让该节点向父节点移动,直到满足有序性或到达根节点。<!-- src: DS-C4#s225; type: direct -->
- 新节点的向上移动称为**向上过滤(percolate up)**。<!-- src: DS-C4#s225; type: direct -->

#### 最小堆中插入元素的过程(演示)

本小节配有嵌入视频《二叉堆入队操作》(封面字幕:"咱们先来剖析入队操作 push 的实现细节"),视频完整内容未在课件文字中给出。<!-- src: DS-C4#s226; type: direct -->

以向最小堆 {2,3,4,5,7,10,23,29,60} 插入元素 1 为例(图中虚线圆圈表示新元素所在的"空洞"位置):<!-- src: DS-C4#s227-s230; type: synthesized -->

1. 根据**完全二叉树**的性质,将元素 1 放置在二叉堆的**最后**作为**空洞**(成为结点 7 的孩子)。<!-- src: DS-C4#s227; type: compressed -->
2. 将空洞元素与**父结点**比较,看是否需要向上过滤: 1 < 7,与 7 交换,空洞上移一层(7 下移)。<!-- src: DS-C4#s228; type: synthesized -->
3. 继续过滤: 1 < 3,与 3 交换,空洞再上移一层(3 下移)。<!-- src: DS-C4#s229; type: synthesized -->
4. 继续过滤,直到找到正确的位置: 1 < 2,与 2 交换,1 到达根结点,过滤结束;最终堆的层次序列为 {1,2,4,5,3,10,23,29,60,7}。<!-- src: DS-C4#s230; type: synthesized -->

#### 最小堆中插入元素的算法

<details>
<summary>代码</summary>

```cpp
  // Insert an element into the priority queue
  void push(const T &value) {
    data.push_back(value);
    heapify_up(data.size() - 1);
  }

  // Helper function to maintain the heap property (heapify up)
  void heapify_up(int index) {
    while (index > 1 && data[index] < data[parent(index)]) {
      std::swap(data[index], data[parent(index)]);
      index = parent(index);
    }
  }
```

</details>
<!-- src: DS-C4#s231c1; type: direct -->

#### 插入算法的时间复杂度

- **最坏情况**是对数的,$O(\log N)$,即完全二叉树的高度。<!-- src: DS-C4#s232; type: direct -->
- **平均情况**,过滤会提前结束: 有资料表明,平均是 2.6 次比较,因此元素平均上移 1.6 层;平均意义上,入队操作的时间复杂度为 $O(1)$。<!-- src: DS-C4#s232; type: direct -->

### 最小堆中删除元素(pop 操作)

- 当最小元素被删除时,在**根**上出现了一个空结点;堆的大小比以前小 1,堆的结构性告诉我们,**最后一个结点应该删掉**。<!-- src: DS-C4#s233; type: direct -->
- 如果最后一项可以放在此空结点中,就把它放进去;然而,这通常是**不可能**的。<!-- src: DS-C4#s233; type: direct -->
- 做法: 把某些项放入空结点,然后移动空结点。<!-- src: DS-C4#s233; type: direct -->
- **与插入的区别**在于: 对 DeQueue 操作,空结点(hole)是**往下移动**(向下过滤)。<!-- src: DS-C4#s233; type: direct -->

#### 最小堆中删除元素的过程(演示)

以删除最小堆 {1,2,4,5,3,10,23,29,60,7} 的根(最小元素 1)为例(虚线圆圈表示空洞):<!-- src: DS-C4#s234-s237; type: synthesized -->

1. **删除根节点**,在根上留下一个**空洞**;同时按结构性,最后一个结点(7)应被删掉。<!-- src: DS-C4#s234; type: compressed -->
2. 将**最后一个节点**(7)放置在空洞(根)上,以保持**完全二叉树**的性质。<!-- src: DS-C4#s235; type: compressed -->
3. 查找当前结点(根节点)的两个孩子,选择**三个节点中较小的**,若不是当前节点,则**交换位置**: 7 与孩子 2、4 比较,最小者为 2,故 2 上移、空洞(7)下移到原 2 的位置。<!-- src: DS-C4#s236; type: synthesized -->
4. **继续该操作,直到该操作无法继续进行**——即节点不存在孩子(**叶子节点**)或者当前节点比**两个孩子都小**: 7 与孩子 5、3 比较,3 上移,7 落到叶子位置,结束;最终堆的层次序列为 {2,3,4,5,7,10,23,29,60}。<!-- src: DS-C4#s237; type: synthesized -->

#### 最小堆中删除元素的算法

<details>
<summary>代码</summary>

```cpp
  // Remove and return the minimum element (root of the heap)
  T pop() {
    if (data.size() <= 1) {
      throw std::out_of_range("PriorityQueue is empty");
    }
    T minValue = data[1];

    // Replace root with last element
    data[1] = data.back();
    data.pop_back();

    // Adjust the heap to maintain the heap property if necessary
    if (data.size() > 1) {
      heapify_down(1);
    }
    return minValue;
  }
```

</details>
<!-- src: DS-C4#s238c1; type: one-step-inferred -->

<details>
<summary>代码</summary>

```cpp
  // Helper function to maintain the heap property (heapify down)
  void heapify_down(int index) {
    int size = data.size();
    while ((index << 1) < size) {
      int child = index << 1; // Left child
      // Check if right child exists and is less than left child
      if (child + 1 < size && data[child + 1] < data[child]) {
        child++;
      }

      // If the current node is less than or equal to the least child,
      // we're done. Otherwise, swap with the least child and continue down
      // the heap
      if (data[index] <= data[child]) {
        break;
      }
      std::swap(data[index], data[child]);
      index = child;
    }
  }
```

</details>
<!-- src: DS-C4#s239c1; type: direct -->

- 边界情况: 队列为空(`data.size() <= 1`)时 pop 抛出 `std::out_of_range("PriorityQueue is empty")` 异常;删除后若堆中仍有元素(`data.size() > 1`)才执行向下过滤。<!-- src: DS-C4#s238c1; type: one-step-inferred -->


#### 删除算法的时间复杂度

- 因为树有对数的深度,在**最坏情况下,pop 是一个对数时间的操作**。<!-- src: DS-C4#s240; type: direct -->
- 根据堆的有序性,堆中最后一个结点的值一般都是比较大的。因此,向下过滤很少有提前一或二层结束的,所以 **pop 操作平均也是对数时间**。<!-- src: DS-C4#s240; type: direct -->

### 建堆

- **建堆问题**: 将 $N$ 个元素构造成堆,可以看成 $N$ 次连续插入,其时间应该是在 $O(N\log N)$ 时间内完成。<!-- src: DS-C4#s241; type: compressed -->
- **关键观察**: 在构造过程中,我们并不关心每个元素加入后堆的状态,我们关心的是 $N$ 个元素全部加入后的最后状态,最后的状态是要保证堆的有序性;至于中间过程中的有序性是否成立并不重要。有了这个前提后,我们能将构造堆的时间复杂度降到 $O(N)$。<!-- src: DS-C4#s241; type: direct -->

### 建堆过程

- **利用堆的递归定义(递归思路)**: 如果函数 buildHeap 可以将一棵完全二叉树调整为一个堆,那么,只要对左子堆和右子堆递归调用 buildHeap,至此能保证除了根结点外,其余的地方都建立起了堆的有序性;然后对根结点调用 heapify_down,以创建堆的有序性。<!-- src: DS-C4#s242; type: direct -->
- **非递归实现**: 如果以逆向层次的次序对结点调用 heapify_down,那么在 heapify_down(i) 被处理时,所有结点 i 的子孙都已经调用过 heapify_down。<!-- src: DS-C4#s242; type: direct -->
- **注意(易错点)**: 不需要对叶结点执行 heapify_down(因为即使调用也不会带来任何变化),因此是从编号最大的非叶结点开始。<!-- src: DS-C4#s242; type: direct -->

#### 建堆过程示例(最小堆)

对层次序为 40, 20, 60, 15, 30, 25, 10, 35, 45, 50, 55 的 11 个元素建最小堆的演示(图中蓝色高亮表示当前 heapify_down 正在处理/下沉的结点):<!-- src: DS-C4#s243-s252; type: synthesized -->

1. 先将所有节点按照顺序组织成一棵完全二叉树(此时不保证堆序)。<!-- src: DS-C4#s243g1; type: one-step-inferred -->
2. 从序号最大的非叶子节点开始调用 heapify_down:结点 30(孩子 50、55)和结点 15(孩子 35、45)都没有违反最小堆的定义,因此不做操作直接返回。<!-- src: DS-C4#s244-s245; type: synthesized -->
3. 对 60 为根节点的子树的根节点做 heapify_down:60(孩子 25、10)与较小孩子 10 交换,60 下沉为叶结点。<!-- src: DS-C4#s246-s247; type: synthesized -->
4. 继续下一个节点:对 20 做 heapify_down,与较小孩子 15 交换。<!-- src: DS-C4#s248-s249; type: synthesized -->
5. 继续直到根节点位置:对根 40 做 heapify_down,40 先与 10 交换,再与 25 交换沉至叶层,建堆完成,最终最小堆的层次序为 10, 15, 25, 20, 30, 40, 60, 35, 45, 50, 55。<!-- src: DS-C4#s250-s252; type: synthesized -->

### 建堆总结

- 自下往上调整每一个子堆;在调整每个堆时,假设除根以外,所有节点满足堆的定义;根结点的调整和删除时一样,可以通过调用 heapify_down 实现。<!-- src: DS-C4#s253; type: compressed -->

### 建堆的代码实现(构造函数之一)

构造函数之一:传入一个包含优先级队列中所有元素的数组。<!-- src: DS-C4#s254; type: direct -->

<details>
<summary>代码</summary>

```cpp
  PriorityQueue(const std::vector<T> &elements) {
    // The first element is unused has been initialized with
    // `std::vector<T> data = std::vector<T>(1);`
    for (const auto &element : elements)
      data.push_back(element);
    // Heapify the entire vector from the last non-leaf node down to the root
    for (int i = data.size() / 2; i > 0; --i)
      heapify_down(i);
  }
```

</details>
<!-- src: DS-C4#s254c1; type: direct -->

- 代码要点:下标 0 的元素不使用(data 已用 `std::vector<T>(1)` 初始化);先把所有元素依次 push_back 进 data,再从 `data.size() / 2` 开始递减到根(i > 0),对整个 vector 逐个调用 heapify_down。注:课件代码注释称该起点为"最后一个非叶结点",但当元素个数 $N$ 为奇数时 `data.size()/2` $=(N+1)/2$ 实为第一个叶结点(对叶结点调用 heapify_down 是空操作,结果仍正确);课件 s244 的 11 元素演示即从下标 5 的结点 30 开始,而非 i=6。<!-- src: DS-C4#s254c1 + DS-C4#s244; type: one-step-inferred -->

### 建堆的时间复杂度分析

- "高度"为 $h$ 的节点(以叶节点为 0),在 heapify_down 中交换的最大次数是 $h$。<!-- src: DS-C4#s255; type: direct -->
- 建堆的时间是所有节点的调整时所需交换次数之和,即所有节点的高度之和;由此可以推导出:建堆的时间是 O(N) 的。<!-- src: DS-C4#s255; type: compressed -->
- **定理**: 对于一棵高度为 h,包含了 $N = 2^{h+1} - 1$ 个结点的满二叉树,结点的高度和为 $N - h - 1$。<!-- src: DS-C4#s256; type: direct -->
- **证明(错位相减)**: 高度为 h 的结点有一个,高度为 h-1 的结点有 2 个,高度为 h-2 的结点有 $2^2$ 个,高度为 h-i 的节点有 $2^i$ 个。因此,所有节点的高度和为:<!-- src: DS-C4#s256; type: direct -->

$$
s = \sum_{i=0}^{h} 2^i (h-i) = h + 2(h-1) + 4(h-2) + 8(h-3) + 16(h-4) + \cdots + 2^{h-1}(1)
$$


$$
2s = 2h + 4(h-1) + 8(h-2) + 16(h-3) + \cdots + 2^h(1)
$$


$$
2s - s = -h + [2h - 2(h-1)] + [4(h-1) - 4(h-2)] + \cdots + 2^{h-1} + 2^h = -h + 2 + 4 + 8 + \cdots + 2^{h-1} + 2^h = (2^{h+1} - 1) - (h+1) = N - h - 1
$$


<!-- src: DS-C4#s256; type: direct -->

### 小结

- **树**: 是讨论的第一种非线性结构。树中要求元素个数大于零,元素之间呈现出上下层之间一对多的层次关系。鉴于树物理存储上的一系列难题,转而讨论另外一种更简单的非线性结构:二叉树。<!-- src: DS-C4#s257; type: direct -->
- **二叉树**: 二叉树中元素个数大于等于零,每个结点最多有两个孩子,且每个孩子都有明确的左右子之分。二叉树中某个结点即便只有一个儿子,也一定要明确它是左儿子还是右儿子,而不是像有序树一样说它是第一个孩子。综上两个原因,不能简单地说二叉树就是一棵有序树,它们是二种不同的数据结构。<!-- src: DS-C4#s257; type: direct -->
- **二叉树的地位**: 现实生活中能直观对应到二叉树结构的数据是极少的,它更多地可看作是一种和现实生活中无物对应、虚构出来的数据结构;但以它为工具,却可以解决很多实际数据的存储和处理问题,如本章中树和森林的孩子兄弟表示法,以及后续章节的二叉查找树、堆排序等都可以利用二叉树来解决。<!-- src: DS-C4#s258; type: direct -->
- **优先级队列**: 是程序设计中常用的一个工具;本章介绍了一种优先级队列的优秀的实现方法:二叉堆;还介绍了优先级队列的一个重要应用,即多服务台的排队系统的模拟。<!-- src: DS-C4#s259; type: compressed -->
