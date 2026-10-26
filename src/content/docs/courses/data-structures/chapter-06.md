---
title: "第六章 查找"
description: "数据结构课程笔记：第六章 查找。"
---

<div class="note-meta"><a href="/courses/data-structures/">数据结构目录</a><a href="/courses/data-structures/chapter-06-quick/">阅读速览</a><a href="/downloads/data-structures/chapter-06.md" download>下载 Markdown</a></div>

<!-- src: DS-C6#s001; type: direct -->

## 查找的基本概念与静态查找

### 章引入：查找的生活实例

#### 引入视频（查找）

- 章首嵌入视频，封面字幕："其实，查找不仅存在于计算机世界里，在我们的日常生活中也无处不在"。 <!-- src: DS-C6#s002; type: direct -->

#### 实例1：图书馆的书籍查找

- 场景：在图书馆找一本特定的书（如《C++ Primer》）；书籍按类别和编号整理，可通过查询图书馆的索引目录快速找到书籍的位置，而不需要一本一本地翻找。 <!-- src: DS-C6#s003; type: direct -->
- 查找过程三步：①查阅索引（在图书馆索引系统中查找"C++ Primer"）→ ②获取书籍位置（索引系统告知该书位于编程类某个书架上的某一层）→ ③直接取书（直接走向该位置拿到书籍）。 <!-- src: DS-C6#s003; type: direct -->

#### 实例2：电话号码查询（电话簿）

- 场景：电话簿按姓名的字母顺序排列了大量人的电话号码，要找某个朋友（如"张三"）的电话号码。 <!-- src: DS-C6#s004; type: direct -->
- 查找过程：①翻开电话簿，按字母顺序找到"张"这一页 → ②在"张"姓的列表中快速找到"张三" → ③读取电话号。 <!-- src: DS-C6#s004; type: direct -->

#### 实例3：超市的商品条形码查询

- 场景：结账柜台收银员用扫码枪扫描商品条形码以获取价格和信息；所有商品的条形码和价格信息预先存储在超市的数据库中。 <!-- src: DS-C6#s005; type: direct -->
- 查找过程：①扫描商品条形码 → ②在数据库中查找匹配的条形码 → ③返回商品的价格和信息，然后进行结算。 <!-- src: DS-C6#s005; type: direct -->

#### 实例结论：什么是静态查找

- 图书馆例中书籍位置固定不变、每次查找步骤一样、查询效率较高，这类似于静态查找（Static Searching），其特点：数据集合是固定的（书籍位置不会频繁变动）；查找操作是高效的（通过索引可以快速找到目标）。 <!-- src: DS-C6#s006; type: direct -->
- 电话簿例中内容不会频繁变动（大部分人的号码是固定的），且因电话簿按字母排序可用二分查找快速找到目标，是典型的静态查找——因为数据集是固定的、查找操作是核心任务。 <!-- src: DS-C6#s006; type: direct -->

### 静态查找的基本概念

- 静态查找表：内存中的一组数据相对稳定、鲜有变化，就说这组数据是静态的，它被称为静态查找表。 <!-- src: DS-C6#s007; type: direct -->
- 静态数据的存储仅需朝着有利于查找的目标来完成，最便利的存储方式是顺序存储，相应的查找技术称静态查找技术。 <!-- src: DS-C6#s007; type: direct -->
- 对于用数组实现顺序存储的一组数据，若用户给出一个待查找的值，简单而直观的方法是对这组数据挨个查找，即顺序查找。 <!-- src: DS-C6#s007; type: direct -->

### 第六章内容结构（目录）

- 全章大纲范围：静态查找（顺序查找、折半查找、插值查找、分块查找）、动态查找、二叉查找树、平衡二叉查找树、外部查找、哈希查找。 <!-- src: DS-C6#s008 + DS-C6#s023 + DS-C6EH2#s038; type: compressed -->


### 1.1 顺序查找

#### 哨兵位方法

- 常用方法：把 0 下标位置设置成一个哨兵位。当要查找数据 x 时，首先将 x 存入哨兵位，然后从 n 下标开始向前一直找到 0 下标；假设下标 m 的数据是要查找的 x，则 m 大于 0 时表示查找成功，m 等于 0 时表示查找不成功。 <!-- src: DS-C6#s009; type: direct -->
- 加哨兵位的好处：避免了逐个检查数组元素时还要首先检测下标是否越界，用浪费一个空间的方式换取时间，提高了效率。 <!-- src: DS-C6#s009; type: direct -->
- 示意图：一个 10 格的顺序表，最左侧 0 号单元留空、标注"哨兵"，其余单元依次存放 19、21、30、81、7、11、13、88、67（非有序数据）；表下方箭头由表尾指向表头，表示查找方向是从后向前扫描。 <!-- src: DS-C6#s009g1; type: compressed -->

#### 顺序查找动画解析（在已排序表中查找 1）

- 设定：给定已排序的数据列表 1、5、9、15、22、30、37、45、50、60（依次占据下标 1~10），查找数字 1 的所在位置；查找前先把目标值 1 放入 0 号哨兵单元（图中以单独方格加左向箭头标注"哨兵"）。 <!-- src: DS-C6#s010; type: direct -->
- 扫描过程：从最后一个元素开始向前逐个比较，依次检查 60→50→45→37→30→22→15→9→5（每帧高亮当前被比较单元，均不等于 1），最后比较到首元素 1 时命中，查找成功（命中位置下标为 1，大于 0）。此例目标位于表的第一个位置，是查找成功时比较次数最多的情形，共比较 n=10 次。 <!-- src: DS-C6#s010-s019 + DS-C6#s022; type: synthesized -->

#### 哨兵作用讲解视频

- 嵌入视频"哨兵的作用"，封面字幕："既然哨兵能起到兜底的作用，那它究竟为我们的代码带来了多大的好处呢"。 <!-- src: DS-C6#s020; type: direct -->

#### 顺序查找代码（哨兵法，C++）

<details>
<summary>代码</summary>

```cpp
template<class KEY, class OTHER>
struct SET
{
    KEY key;
    OTHER other;
};

// 顺序查找（哨兵法）
template<class KEY, class OTHER>
int seqSearch(SET<KEY, OTHER> data[], int size, const KEY& x)
{
    data[0].key = x;  // 设置哨兵
    int i;
    for (i = size; data[i].key != x; --i);
    return i;
}
```

</details>
<!-- src: DS-C6#s021c1; type: direct -->
- 代码要点：查找表元素类型为模板结构 SET（关键字 key + 其他信息 other）；先执行 data[0].key = x 设置哨兵，再用空体 for 循环从下标 size 起向前比较（循环条件 data[i].key != x，循环体为空，仅 --i），循环中无需任何越界判断；返回的 i 大于 0 即查找成功的位置，等于 0 即查找失败。 <!-- src: DS-C6#s021 + DS-C6#s009; type: synthesized -->

#### 顺序查找性能分析

- 查找不成功时：待查找元素不存在，从 n 下标一直比到 0 下标（哨兵处停止），元素比较次数为 $n+1$。 <!-- src: DS-C6#s022; type: direct -->
- 查找成功时：查倒数第一个元素比较 1 次，倒数第二个比较 2 次，以此类推，查第一个元素比较 n 次；若每个位置上的元素被查找的概率相同（均为 $1/n$），平均查找时间即数学期望：$(1+2+3+\cdots+n)\times(1/n) = (n+1)/2$。 <!-- src: DS-C6#s022; type: direct -->
- 结论：无论查找成功与否，顺序查找的时间复杂度均为 $O(n)$。 <!-- src: DS-C6#s022; type: direct -->

### 1.2 折半查找（二分查找）

#### 基本思想

- 前提：当元素序列有序时，可以使用比顺序查找更高效的查找方法——折半查找法。 <!-- src: DS-C6#s024; type: direct -->
- 查找过程：首先比较中间位置元素，比较成功则查找结束；比较不成功时分两种情况：1) 待查找元素小于中间位置元素，在前半段用同样方法继续查找，特殊地，若前半段没有了（长度为 0），说明不存在待查找元素；2) 待查找元素大于中间位置元素，在后半段用同样方法继续查找，特殊地，若后半段没有了，也说明不存在待查找元素。 <!-- src: DS-C6#s024; type: direct -->

#### 二分查找动画演示（有序表 {1,5,9,15,22,30,37,45,50,60} 中查找 37）

- 演示过程（下标从 1 开始，区间 [low, high]，mid 取中间位置）：
  1. low=1, high=10, mid=5：a[5]=22 < 37，转入后半段，low=6；
  2. low=6, high=10, mid=8：a[8]=45 > 37，转入前半段，high=7；
  3. low=6, high=7, mid=6：a[6]=30 < 37，low=7；
  4. low=7, high=7, mid=7：a[7]=37 == 37，找到目标数字。共 4 次比较。 <!-- src: DS-C6#s025-s029; type: compressed -->

#### 二分查找代码

<details>
<summary>代码</summary>

```cpp
template<class KEY, class OTHER>
int binarySearch(SET<KEY, OTHER> data[], int size, const KEY& x){
    int low = 1, high = size, mid;
    while (low <= high){
        mid = (low + high) / 2;
        if (x == data[mid].key) return mid;
        if (x < data[mid].key)  high = mid - 1;
        else  low = mid + 1;}
    return 0;  }
```

</details>
<!-- src: DS-C6#s030c1; type: direct -->
- 代码约定：表元素从下标 1 开始存放（low 初值为 1，high 初值为 size），查找成功返回下标 mid，查找失败返回 0。 <!-- src: DS-C6#s030c1; type: compressed -->

#### 二分查找的树分析（视频页）

- 该页为嵌入视频，PDF 仅显示封面帧，封面可见字幕："为什么最多只需要四次呢"。 <!-- src: DS-C6#s031g1; type: direct -->

#### 折半查找性能分析

- 查找成功时：最少比较次数为 1，最多比较次数为 $\log_2 n$ 量级（具体次数需按 $n$ 和取中点方式取整，例如最坏成功比较常写作 $\lfloor\log_2 n\rfloor+1$）；查找不成功也是 $\log_2 n$ 量级。故算法时间复杂度为 $O(\log_2 n)$。 <!-- src: DS-C6#s032; type: direct -->
- $\log_2 n$ 级别比 $n$ 级好很多，如当 $n=1024$ 时，$\log_2 n$ 只有 10。 <!-- src: DS-C6#s032; type: direct -->

### 1.3 插值查找

#### 思想、公式与适用条件

- 思想：折半查找每次简单地找中间位置；插值查找是根据待查元素值和两个端点（即最大、最小元素值）的距离来计算或估算下次查找的位置：$mid = low + (high - low)\cdot\dfrac{x - a[low]}{a[high] - a[low]}$。 <!-- src: DS-C6#s034; type: direct -->
- 性能：理想的插值查找的时间复杂度为 $O(1)$。 <!-- src: DS-C6#s034; type: direct -->
- 插值查找的条件：不仅数据是有序的，而且这组数据值的分布是均匀的。例如一组值 {1,3,5,7,9,11,13,15,17}（有序且分布非常均匀，下标从 0 起），查找 11 只需计算 $mid = 0 + (8-0)(11-1)/(17-1) = 5$，便可直接得到 11 的下标位置。 <!-- src: DS-C6#s034ex1; type: direct -->

#### 插值公式（视频页）

- 该页为嵌入视频，PDF 仅显示封面帧，封面可见字幕："虽然折半查找已经非常高效"。 <!-- src: DS-C6#s035g1; type: direct -->

#### 插值查找代码

<details>
<summary>代码</summary>

```cpp
template<class KEY, class OTHER>
int interpolationSearch(SET<KEY, OTHER> data[], int size, const KEY& x){
    int low = 1, high = size, pos;
    while (low <= high && x >= data[low].key && x <= data[high].key){
        if (data[high].key == data[low].key) break;
        pos = low + ((x - data[low].key) * (high - low) / (data[high].key - data[low].key));
        if (data[pos].key == x) return pos;
        if (data[pos].key < x)  low = pos + 1;
        else high = pos - 1;}
    return 0;}
```

</details>
<!-- src: DS-C6#s036c1; type: direct -->
- 代码要点：与二分查找相比，循环条件额外要求 x 落在 [data[low].key, data[high].key] 范围内；当 data[high].key == data[low].key 时直接 break（此时插值公式分母为 0，无法计算位置）；查找失败返回 0。 <!-- src: DS-C6#s036c1; type: one-step-inferred -->

#### 插值查找的适用性讨论

- 不是均匀分布但知道了分布函数时，也能通过计算定积分的方式找到具体的位置；但需注意定积分要求连续函数，而且如果计算复杂、其速度远低于逐个查找时，此方法并不实用。 <!-- src: DS-C6#s037; type: direct -->
- 仅知道大致分布时，"也采用了"（原文如此）比简单折半法更快的方式找到待查元素的位置，如查英文字典。 <!-- src: DS-C6#s037; type: direct -->
- 注意：当位置计算很复杂、一次计算可能比多次的数据访问更耗时时，该方法就不占优势了。 <!-- src: DS-C6#s037; type: direct -->

### 1.4 分块查找

#### 提出动机与定义

- 动机：折半查找虽具有好的性能，但要求顺序存储时按照关键字排序，这在元素动态变化时耗时较多；顺序存储虽然也可以应对元素的动态变化，但查找效率低。综合两者提出了分块查找方法。 <!-- src: DS-C6#s039; type: direct -->
- 定义：分块查找是把一个大的线性表分解成若干块，块中数据可以无序、任意存放，但块间必须有序。 <!-- src: DS-C6#s039; type: direct -->

#### 索引表与查找过程

- 要建立一个索引表：把每块中最大关键字值作为索引表的关键字，从小到大顺序存放在一个辅助数组中。 <!-- src: DS-C6#s040; type: direct -->
- 查找时：先在索引表中折半查找，确定要找的元素所在的块；然后在块中采用顺序查找，即可找到对应的元素。 <!-- src: DS-C6#s040; type: direct -->
- 适用场景：一般适用于数据量很大、无法一次调入内存的情况。 <!-- src: DS-C6#s040; type: direct -->

#### 分块查找动画演示（查找 45）

- 示例结构：三个块依次为 (5,1,9)、(22,15,30)、(45,37,50)，块内无序、块间有序；索引表由各块最大关键字组成，为 {9,30,50}（题干原文为"给定一个已排序的数据列表"，原文如此，图中块内数据实际无序）。 <!-- src: DS-C6#s041g1; type: compressed -->
- 演示过程：先在索引表中查找，45 不超过 50 且大于 30，确定目标在索引项 50 对应的第三块（动画高亮索引项 50）；随后在第三块内顺序比较，动画依次高亮 50、37、45，比较到 45 时命中，查找成功。 <!-- src: DS-C6#s041-s045; type: compressed -->

#### 分块查找时间复杂度分析

- 分块查找只要求索引表是有序的，块内元素不需要有序，因此特别适合于元素动态变化的情况：当增加或减少元素时，只需将该元素调整到所在的块即可。 <!-- src: DS-C6#s046; type: direct -->
- 分块查找可以有两种方式：① 索引文件顺序查找 + 块内顺序查找；② 索引文件折半查找 + 块内顺序查找。 <!-- src: DS-C6#s046; type: direct -->
- 性能结论：在时间复杂度上，分块查找的速度虽然不如折半查找算法，但比顺序查找算法快得多。 <!-- src: DS-C6#s046; type: direct -->

### 向动态查找的过渡

#### 动态查找表与存储方式

- 数据不稳定、频繁地插入、删除时，称这组数据是动态的，数据集合被称为动态查找表；相应的查找技术称为动态查找技术。 <!-- src: DS-C6#s048; type: direct -->
- 动态数据的存储既要有利于数据的查找操作，也要有利于数据的插入、删除操作，故一般采用链式存储。 <!-- src: DS-C6#s048; type: direct -->

## 二叉查找树

### 二叉查找树的定义

- 定义：对二叉树中的每个结点而言，其左子树上的**所有结点**都比它小，其右子树上的**所有结点**都比它大。<!-- src: DS-C6#s050; type: direct -->
- 为简化起见，假设数据序列中没有元素相等的情况。<!-- src: DS-C6#s050; type: direct -->
- 正例（一棵二叉查找树）：根 80；左子 40（左孩子 30、右孩子 50，其中 30 的右孩子为 35）；右子 150（左孩子 100、右孩子 200）。<!-- src: DS-C6#s051g1; type: direct -->
- **常见错误**：以为"任一结点，左孩子比它小，右孩子比它大"即可。反例：根 80，40 的右孩子为 90（局部满足 90>40，但 90 在 80 的左子树中却大于 80），150 的左孩子为 10（局部满足 10<150，但 10 在 80 的右子树中却小于 80）——定义要求的是**整棵子树**上所有结点与祖先的大小关系，而不仅是父子局部关系。<!-- src: DS-C6#s051g2; type: compressed -->

### 二叉查找树类的定义

- 集合结构 SET 与动态查找表的抽象类 dynamicSearchTable：

<details>
<summary>代码</summary>

```cpp
template<class KEY, class OTHER>
struct SET
{
    KEY key;
    OTHER other;
};

template<class KEY, class OTHER>
class dynamicSearchTable
{
public:
    virtual SET<KEY, OTHER>* find(const KEY& x) const = 0;
    virtual void insert(const SET<KEY, OTHER>& x) = 0;
    virtual void remove(const KEY& x) = 0;
    virtual ~dynamicSearchTable() {}
};
```

</details>
<!-- src: DS-C6#s052c1; type: direct -->

- BinarySearchTree 类继承自 dynamicSearchTable，公有接口为构造/析构、find、insert、remove；私有部分含结点结构 BinaryNode、根指针 root 及各操作的递归辅助函数：

<details>
<summary>代码</summary>

```cpp
template<class KEY, class OTHER>
class BinarySearchTree : public dynamicSearchTable<KEY, OTHER>
{
public:
    BinarySearchTree();  // 构造函数
    ~BinarySearchTree(); // 析构函数
    SET<KEY, OTHER>* find(const KEY& x) const; // 查找操作，返回与给定键匹配的元素
    void insert(const SET<KEY, OTHER>& x);     // 插入操作，将元素插入到树中
    void remove(const KEY& x);                 // 删除操作，从树中删除与给定键匹配的元素
private:
    struct BinaryNode // 二叉树节点结构
    {
        SET<KEY, OTHER> data; // 节点存储的数据
        BinaryNode* left;     // 左子节点指针
        BinaryNode* right;    // 右子节点指针
        // 构造函数，初始化节点的数据和子节点指针
        BinaryNode(const SET<KEY, OTHER>& thedata, BinaryNode* lt = NULL, BinaryNode* rt = NULL)
            : data(thedata), left(lt), right(rt) {
        }
    };

    BinaryNode* root; // 根节点指针

    // 插入操作的辅助函数，用于递归地在树中插入元素
    void insert(const SET<KEY, OTHER>& x, BinaryNode*& t);
    // 删除操作的辅助函数，用于递归地在树中删除元素
    void remove(const KEY& x, BinaryNode*& t);
    // 查找操作的辅助函数，用于递归地在树中查找元素
    SET<KEY, OTHER>* find(const KEY& x, BinaryNode* t) const;
    // 清空树的辅助函数，用于递归地销毁树中的节点
    void makeEmpty(BinaryNode* t);
};
```

</details>
<!-- src: DS-C6#s053c1; type: direct -->

### 二叉查找树的查找

#### 查找过程演示

- 示例树：根 80；左子 40（孩子 30、50，30 的右孩子 35）；右子 150（孩子 100、200）。任务：分别查找 50、150。<!-- src: DS-C6#s055g1; type: direct -->
- 查找 50 的过程：与根 80 对比，50 比 80 小，进入 80 的左子树 → 与 40 对比，50 比 40 大（课件文字写作"比 80 大"，原文如此），进入 40 的右子树 → 到达结点 50，找到 50。共 3 次结点访问。<!-- src: DS-C6#s056-s058; type: synthesized -->
- 查找 150 的过程：与根 80 对比，150 比 80 大，进入 80 的右子树 → 到达结点 150，找到 150。共 2 次结点访问。<!-- src: DS-C6#s059-s060; type: synthesized -->
- 注：s056–s060 的动画帧中，150 的右孩子结点显示为"80"，与 s055 同一树中的"200"不一致（原文如此）。<!-- src: DS-C6#s056-s060; type: direct -->

#### 查找的递归方法

- 递归方法步骤：①根为空，查找失败；②否则和根结点值比较，相同则查找成功；③不相同但比根结点值小，在以其左子为根的二叉查找树中继续查找；④不相同但比根结点值大，在以其右子为根的二叉查找树中继续查找。<!-- src: DS-C6#s061; type: direct -->

<details>
<summary>代码</summary>

```cpp
// 公共查找接口，从根节点开始查找
template<class KEY, class OTHER>
SET<KEY, OTHER>* BinarySearchTree<KEY, OTHER>::find(const KEY& x) const
{
    return find(x, root); // 调用私有辅助函数，从根节点开始查找
}

// 私有查找辅助函数，递归查找元素
template<class KEY, class OTHER>
SET<KEY, OTHER>* BinarySearchTree<KEY, OTHER>::find(const KEY& x, BinaryNode* t) const
{
    if (t == NULL) // 如果当前节点为空，返回空指针
        return NULL;
    if (x == t->data.key) // 如果找到匹配键，返回对应的数据指针
        return &(t->data);
    else if (x < t->data.key) // 如果键小于当前节点键，递归查找左子树
        return find(x, t->left);
    else // 如果键大于当前节点键，递归查找右子树
        return find(x, t->right);
}
```

</details>
<!-- src: DS-C6#s062c1; type: direct -->

#### 查找的非递归方法

- 非递归方法步骤：①以根为当前结点；②如果当前结点不为空，待查结点和当前结点比较：值相等则查找成功；比当前结点值小，设其左子为当前结点；比当前结点值大，设其右子为当前结点；③反复如此，直到当前结点为空（查找失败）。<!-- src: DS-C6#s063; type: direct -->

<details>
<summary>代码</summary>

```cpp
template<class KEY, class OTHER>
SET<KEY, OTHER>* BinarySearchTree<KEY, OTHER>::find(const KEY& x, BinaryNode* t) const
{
    // 若当前结点为空，返回空指针
    if (t == NULL)
        return NULL;
    // 初始化当前结点为根结点
    BinaryNode* p = t;
    // 开始循环查找
    while(p)
    {
        // 若待查键值与当前结点键值相等，返回对应的集合对象地址
        if (x == p->data.key)   return &(p->data);
        // 若待查键值小于当前结点键值，向左子树查找
        else if (x < p->data.key)  p = p->left;
        // 若待查键值大于当前结点键值，向右子树查找
        else  p = p->right;
    }
    // 若当前结点为空，查找失败，退出循环，返回空指针
    return NULL;
}
```

</details>
<!-- src: DS-C6#s064c1; type: direct -->

- 代码要点：循环中以 `p` 表示当前结点，比较和返回均使用 `p->data`；`p` 逐步移向左/右子树，直到空指针表示查找失败。<!-- src: DS-C6#s064c1; type: direct -->

#### 查找性能

- （嵌入视频，封面帧字幕）"刚才我们体验了二叉查找树的高效查找，那么它的效率究竟由什么决定呢"。<!-- src: DS-C6#s065; type: direct -->
- 时间复杂度：从根开始逐层比较，比较次数最多为二叉树的高度，故查找时间复杂度为**二叉树高度**。<!-- src: DS-C6#s066; type: direct -->
- 这能说明二叉查找树的性能是对数级别的吗？**不能**，因为二叉查找树可能**不平衡**；在最坏的请况（原文如此）下，二叉查找树会退化为一个**单链表**，时间复杂度是 O(N)。<!-- src: DS-C6#s066; type: direct -->
- 平均性能（前提：n 个结点的二叉查找树"可能有 n 种形态"（原文如此，此处的 n 种指按根结点的秩划分的 n 种等概率情况）且各形态出现概率相等；设 $P(n)$ 为查找 n 个结点的二叉查找树的平均查找时间），有：<!-- src: DS-C6#s067; type: direct -->

$$
P(n) = \frac{1}{n}\sum_{i=0}^{n-1}\Big[\,1 + (P(i)+1)\,i + (P(n-i-1)+1)(n-i-1)\,\Big] \le 2\left(1+\frac{1}{n}\right)\ln n \approx 1.38\log n
$$


  即等概率形态假设下平均查找时间为对数级别。<!-- src: DS-C6#s067; type: direct -->

### 二叉查找树的插入

#### 插入的递归思路与执行实例

- 递归思路：①如果当前树为空，插入值作为树的根节点，返回；②如果插入值小于根节点，插入到左子树；如果大于根节点，插入到右子树；本实现中相等时不插入重复键。<!-- src: DS-C6#s069 + DS-C6#s070c1; type: synthesized -->
- 执行实例（插入值为 280 的结点；初始树：根 122，左子 99（右孩子 110），右子 250（右孩子 300）；T 为当前子树指针，f 为其父结点指针，初始 f=null、T 指向根 122）：280>122，f 移到 122、T 移到 250 → 280>250，f 移到 250、T 移到 300 → 280<300，f 移到 300、T 为空 → 在 300 的左孩子空位处新建结点 280。最终 280 成为 300 的左孩子。<!-- src: DS-C6#s069g1; type: compressed -->

#### 插入的递归实现

<details>
<summary>代码</summary>

```cpp
template<class KEY, class OTHER>
void BinarySearchTree<KEY, OTHER>::insert(const SET<KEY, OTHER>& x)
{
    insert(x, root);
}

template<class KEY, class OTHER>
void BinarySearchTree<KEY, OTHER>::insert(const SET<KEY, OTHER>& x, BinaryNode*& t)
{
    if (t == NULL)
        t = new BinaryNode(x, NULL, NULL);
    else if (x.key < t->data.key)
        insert(x, t->left);
    else if (t->data.key < x.key)
        insert(x, t->right);
}
```

</details>
<!-- src: DS-C6#s070c1; type: direct -->

- 注意：私有的 insert 函数的第二个形式参数是一个**指向结点的指针的非常量引用**（`BinaryNode*& t`）；这个引用符号**不能省略**——正是这个引用，使得新插入的结点和它的父结点之间关联了起来。<!-- src: DS-C6#s070; type: direct -->
- 该实现中键值相等时两个 else if 均不成立，不做任何操作（不插入重复键）。<!-- src: DS-C6#s070c1; type: one-step-inferred -->

#### 插入的非递归实现

<details>
<summary>代码</summary>

```cpp
template<class KEY, class OTHER>
void BinarySearchTree<KEY, OTHER>::insert(const SET<KEY, OTHER>& x, BinaryNode*& t)
{
    // 使用双指针法替代递归，定位插入位置
    BinaryNode** p = &t;  // 指向当前节点指针的地址
    while (*p != NULL) {
        if (x.key < (*p)->data.key)
            p = &(*p)->left;  // 移动到左子树
        else if ((*p)->data.key < x.key)
            p = &(*p)->right; // 移动到右子树
        else
            return;  // 遇到重复键值直接返回（保持原树不变）
    }
    // 在找到的空位置插入新节点
    *p = new BinaryNode(x, NULL, NULL);
}
```

</details>
<!-- src: DS-C6#s071c1; type: direct -->

#### 插入性能

- 时间复杂度：为找到合适的插入位置，需要从根开始逐层比较；本质上还是在查找，查找中比较次数最多为二叉树的高度，故插入的时间复杂度为**二叉树高度**；平均性能分析同查找（等概率形态假设下约 1.38·log n 级别）。<!-- src: DS-C6#s072 + DS-C6#s067; type: synthesized -->

### 二叉查找树的删除

#### 删除的基本要求与示例树

- 删除操作的基本要求：从二叉查找树中删除结点后，剩余结构必须依然保持为二叉查找树。<!-- src: DS-C6#s074; type: direct -->
- 贯穿删除演示的示例树结构（用于分别删除 35、30、40）：根 80；80 的左子 40、右子 150；40 的左子 30、右子 50；30 的右子 35；150 的左子 100、右子 200。<!-- src: DS-C6#s074g1; type: direct -->

#### 三种删除情况

- 第一种：待删除结点为叶子。释放待删除结点空间，父子链置为空。<!-- src: DS-C6#s079; type: direct -->
- 第二种：待删除结点有唯一孩子。用唯一孩子替代待删除结点位置，释放待删除结点空间。<!-- src: DS-C6#s079; type: direct -->
- 第三种：待删除结点有两个孩子。在右子树中找到最左侧结点，即右子树中的最小结点，作为替身。用替身的元素替换待删除结点的元素，将问题转为在其右子树中删除替身结点（该替身无左子）。<!-- src: DS-C6#s079; type: direct -->
- 删除叶子演示（情况 a）：在示例树中删除叶子结点 35，直接删除即可，删除后依然为一棵查找树；结果树为 80（左 40：左 30、右 50；右 150：左 100、右 200）。<!-- src: DS-C6#s075g1; type: compressed -->
- 删除单孩子结点演示（情况 b）：在示例树中删除只有一个孩子的结点 30，用其唯一孩子结点 35 替代删除位置上的结点；结果树为 80（左 40：左 35、右 50；右 150：左 100、右 200）。<!-- src: DS-C6#s076g1; type: compressed -->

#### 替身结点（删除有两个孩子的结点）

- 替身结点的两种选取方式：①左子树上的最大结点，即从左子出发一路沿右子树找下去；②或右子树上的最小结点，即从右子出发一路沿左子树找下去。<!-- src: DS-C6#s077; type: direct -->
- 找到替身后，操作最后变为删除替身结点。替身结点最多只有一个孩子，问题由此转化为前两种删除情况。<!-- src: DS-C6#s077; type: direct -->
- 双孩子删除演示：标题为「删除叶子结点 40」（原文如此，40 实际有两个孩子 30 和 50）。在示例树中删除结点 40：其左子树最大结点为 35（从 30 向右找到），以 35 作替身替换 40 的值并删除原 35 结点，结果树为 80（左 35：左 30、右 50；右 150：左 100、右 200），仍为二叉查找树。<!-- src: DS-C6#s077g1; type: compressed -->

#### 删除的递归方法描述

- 递归删除流程：①根为空，删除结束；②否则和根结点值比较，相同则实施三种删除；③不相同但比根结点值小，在以其左子为根的二叉查找树中继续删除；④不相同但比根结点值大，在以其右子为根的二叉查找树中继续删除。<!-- src: DS-C6#s078; type: direct -->

#### 删除的递归实现代码

- 递归实现（对外接口 + 内部递归函数；双孩子情况取右子树最小值结点作后继替换，再递归删除后继）：

<details>
<summary>代码</summary>

```cpp
// 对外接口：删除键值为x的节点
template<class KEY, class OTHER>
void BinarySearchTree<KEY, OTHER>::remove(const KEY& x)
{
    remove(x, root);  // 调用内部递归函数处理
}

// 内部递归函数：删除指定子树中键值为x的节点
template<class KEY, class OTHER>
void BinarySearchTree<KEY, OTHER>::remove(const KEY& x, BinaryNode*& t)
{
    if (t == NULL) return;  // 空节点直接返回

    if (x < t->data.key)
        remove(x, t->left);  // 向左子树递归
    else if (t->data.key < x)
        remove(x, t->right);  // 向右子树递归
    else if (t->left != NULL && t->right != NULL)  // 有两个子节点
    {
        // 找到右子树最小值节点
        BinaryNode* tmp = t->right;
        while (tmp->left != NULL)
            tmp = tmp->left;

        t->data = tmp->data;  // 用后继节点替换当前节点
        remove(t->data.key, t->right);  // 递归删除右子树中的后继节点
    }
    else  // 叶子节点或只有一个子节点
    {
        BinaryNode* oldNode = t;  // 保存旧节点
        t = (t->left != NULL) ? t->left : t->right;  // 提升子节点
        delete oldNode;  // 删除旧节点
    }
}
```

</details>
<!-- src: DS-C6#s080c1; type: direct -->

#### 删除的非递归实现代码

- 非递归实现（Step 1 查找待删结点及其父结点；Step 2 双孩子情况找右子树最小结点 tmp 及其父 gp，替换数据后由 gp 绕过 tmp；Step 3 零或一个孩子情况由父结点直接接上孩子，删根时需更新 root）：

<details>
<summary>代码</summary>

```cpp
template<class KEY, class OTHER>
void BinarySearchTree<KEY, OTHER>::remove(const KEY& x)
{
    BinaryNode* current = root;
    BinaryNode* parent = nullptr;

    // Step 1: 查找要删除的节点及其父节点
    while (current != nullptr && current->data.key != x)
    {
        parent = current;
        if (x < current->data.key)
            current = current->left;
        else
            current = current->right;
    }

    if (current == nullptr)
        return; // 节点不存在，直接返回

    // Step 2: 处理有两个子节点的情况
    if (current->left != nullptr && current->right != nullptr)
    {
        // 找到右子树中的最小节点（即后继节点）
        BinaryNode* tmp = current->right;
        BinaryNode* gp = current; // tmp的父节点

        // 一直向左走，直到找到最小节点
        while (tmp->left != nullptr)
        {
            gp = tmp;
            tmp = tmp->left;
        }

        // 替换当前节点的数据为后继节点的数据
        current->data = tmp->data;

        // 调整gp的指针，绕过tmp节点
        if (gp->left == tmp)
            gp->left = tmp->right;
        else
            gp->right = tmp->right;

        delete tmp; // 删除tmp节点
    }
    else
    {
        // Step 3: 处理零个或一个子节点的情况
        BinaryNode* child = (current->left != nullptr) ? current->left : current->right;

        if (parent == nullptr)
            root = child; // 删除的是根节点
        else
        {
            if (current == parent->left)
                parent->left = child;
            else
                parent->right = child;
        }

        delete current;
    }
}
```

</details>
<!-- src: DS-C6#s081c1 + DS-C6#s082c1; type: direct -->

#### 删除的时间复杂度

- 为找到待删除结点，需要从根开始逐层比较。<!-- src: DS-C6#s083; type: direct -->
- 如果待删除结点是叶子或者只有一个孩子：删除本身的时间为常量阶，查找时间最多为树的高度。<!-- src: DS-C6#s083; type: direct -->
- 如果待删除结点有两个孩子：需继续向下找替身结点，找到替身并替换待删除结点的值后，又回到待删除结点位置向下删除替身结点，时间最多为树高的两倍。<!-- src: DS-C6#s083; type: direct -->
- 删除的平均性能分析与前述查找/插入的平均性能分析相同。<!-- src: DS-C6#s083; type: direct -->


### 二叉查找树的问题：引出平衡操作

- 二叉查找树的查找、插入、删除时间复杂度均为二叉树的高度。如果该二叉树形态极端，是单支树（每个结点只有一个孩子），二叉树的高度等于结点的个数，三种操作的时间复杂度都达到 O(n)。<!-- src: DS-C6#s092; type: direct -->
- 如何解决？需要引入平衡操作（由此引出平衡二叉查找树/AVL 树：定义、查找、插入、删除）。<!-- src: DS-C6#s092 + DS-C6#s093; type: synthesized -->

## 平衡二叉树（AVL树）

### 查找专题中的位置（回顾页）

- 查找专题大纲范围包含：静态查找、动态查找、二叉查找树、平衡二叉查找树、外部查找、哈希查找。 <!-- src: DS-C6EH1#s003; type: direct -->


### AVL 树的定义与查找

#### 平衡因子与 AVL 树定义

- 结点的平衡因子（BF）：一个结点的平衡因子等于其左子树的高度减去其右子树的高度。 <!-- src: DS-C6#s094 + DS-C6EH1#s002; type: synthesized -->
- 如果一棵二叉树中所有结点的平衡因子的绝对值不超过 1（即只取 -1、0、1 三种情况），这棵二叉树就称为平衡二叉树；AVL 树要求每个结点的平衡因子 ∈ {-1, 0, 1}，以保证查找效率接近 $O(\log n)$。 <!-- src: DS-C6#s094 + DS-C6EH1#s002; type: synthesized -->
- 平衡二叉树的目标是限制二叉树的高度。 <!-- src: DS-C6#s094; type: direct -->
- 本课件约定 BF = 左子树高 − 右子树高，故左侧偏高时 BF 为正（如 +2 对应左子树过高）。 <!-- src: DS-C6#s094 + DS-C6#s116; type: synthesized -->

#### 平衡与"最矮"的关系（三个对照示例）

- 示例 (a) 非平衡二叉树：根 80(BF=1)，左子 40(BF=2)、右子 150(BF=1)；40 的左子 30(BF=-1)，30 的右子 35(BF=0)；150 的左子 100(BF=0)。结点 40 的 BF=2 超出范围，故整树不平衡。 <!-- src: DS-C6#s095g1; type: direct -->
- 示例 (b) 平衡二叉树但非最矮：根 80(BF=1)，左 40(BF=1)、右 150(BF=1)；40 的左 30(BF=-1)、右 50(BF=0)；30 的右子 35(BF=0)；150 的左子 100(BF=0)。所有 BF∈{-1,0,1}，是平衡树，但树高并非最矮。 <!-- src: DS-C6#s095g2; type: direct -->
- 示例 (c) 最矮但非平衡二叉树：根 80(BF=0)，左 40(BF=1)、右 150(BF=2)；40 的左 30(BF=-1)、右 50(BF=0)；30 的右子 35(BF=0)；150 的左子 100(BF=-1)，100 的右子 105(BF=0)。150 的 BF=2，最矮但不平衡。 <!-- src: DS-C6#s096g1; type: direct -->
- 结论：平衡二叉查找树并不能直接和树高最矮划等号，但平衡二叉查找树已经接近于最矮了。 <!-- src: DS-C6#s096; type: direct -->

#### AVL 的查找特性（视频页）

- 该页为嵌入视频，封面帧字幕："了解了如何验证AVL树后，我们来看看它的结点结构是如何设计的"。 <!-- src: DS-C6#s097; type: direct -->

#### AVL 树类的定义

- 基础结构：SET 为集合结构（键 + 其他数据），dynamicSearchTable 为动态查找表的抽象类（纯虚 find/insert/remove）。 <!-- src: DS-C6#s098; type: direct -->

<details>
<summary>代码</summary>

```cpp
template<class KEY, class OTHER>
struct SET
{
    KEY key;
    OTHER other;
};

template<class KEY, class OTHER>
class dynamicSearchTable
{
public:
    virtual SET<KEY, OTHER>* find(const KEY& x) const = 0;
    virtual void insert(const SET<KEY, OTHER>& x) = 0;
    virtual void remove(const KEY& x) = 0;
    virtual ~dynamicSearchTable() {}
};
```

</details>
<!-- src: DS-C6#s098c1; type: direct -->

- AvlTree 继承 dynamicSearchTable；结点 AvlNode 在数据与左右子指针之外多存一个 height（高度）字段，新建结点高度默认 1。 <!-- src: DS-C6#s099; type: compressed -->

<details>
<summary>代码</summary>

```cpp
template<class KEY, class OTHER>
class AvlTree : public dynamicSearchTable<KEY, OTHER> {
    struct AvlNode { // AVL树节点结构（数据、左右子节点、高度）
        SET<KEY, OTHER> data;
        AvlNode* left;
        AvlNode* right;
        int height;
        // 节点构造函数（数据、左子、右子、高度）
        AvlNode(const SET<KEY, OTHER>& element, AvlNode* lt, AvlNode* rt, int h = 1)
            : data(element), left(lt), right(rt), height(h) {}
    };

    AvlNode* root; // 树根节点指针

public:
    AvlTree() : root(NULL) {} // 空树构造
    ~AvlTree() { makeEmpty(root); } // 析构释放内存

    // 查找键x对应元素 | 插入元素x | 删除键x元素
    SET<KEY, OTHER>* find(const KEY& x) const override;
    void insert(const SET<KEY, OTHER>& x) override;
    void remove(const KEY& x) override;

private:
    // 递归插入（带平衡维护） | 递归删除（返回删除后树的高度是否不变）
    void insert(const SET<KEY, OTHER>& x, AvlNode*& t);
    bool remove(const KEY& x, AvlNode*& t);
    // 获取节点高度（NULL返回0） | LL右旋 | RR左旋
    int height(AvlNode* t) const { return t ? t->height : 0; }
    void LL(AvlNode*& t);
    void RR(AvlNode*& t);
    // LR双旋 | RL双旋 | 返回a/b最大值
    void LR(AvlNode*& t);
    void RL(AvlNode*& t);
    int max(int a, int b) const { return a > b ? a : b; }
    // 删除后平衡调整（subTree指示方向，返回树的高度是否不变） | 递归释放子树
    bool adjust(AvlNode*& t, int subTree);
    void makeEmpty(AvlNode*& t) {
        if (t) { makeEmpty(t->left); makeEmpty(t->right); delete t; t = NULL; }
    }
};
```

</details>
<!-- src: DS-C6#s099c1 + DS-C6#s100c1; type: direct -->

- 私有接口要点：height(t) 对 NULL 返回 0；LL 为右旋（左子树过高时用）、RR 为左旋，LR/RL 为双旋；adjust 用于删除后的平衡调整（subTree 指示方向，返回树的高度是否不变）。 <!-- src: DS-C6#s100; type: compressed -->

#### AVL 树的查找

- AVL 树的查找过程同普通（二叉）查找树一模一样：小往左、大往右、相等即命中。 <!-- src: DS-C6#s102; type: direct -->
- 查找代码（注意：这里采用的是非递归实现）：

<details>
<summary>代码</summary>

```cpp
template<class KEY, class OTHER>
SET<KEY, OTHER>* AvlTree<KEY, OTHER>::find(const KEY& x) const {
    AvlNode* t = root; // 初始化查找指针
    while (t != NULL && t->data.key != x) { // 遍历子树直到匹配或空节点
        if (x < t->data.key) // 比较键值决定查找方向
            t = t->left;     // 键小则左子树继续
        else
            t = t->right;    // 键大则右子树继续
    }
    if (t == NULL)         // 判断查找结果
        return NULL;       // 未找到返回空指针
    return &(t->data);     // 找到则返回数据地址
}
```

</details>
<!-- src: DS-C6#s103c1; type: direct -->

### AVL 树的插入与失衡调整

#### 插入引起的平衡因子变化

- 当元素插入到 AVL 树中时，就可能打破原有的平衡。 <!-- src: DS-C6#s105; type: direct -->
- 新插入结点的平衡因子为 0，其影响一路自下而上往祖先结点传导：
  - 如果传导来自于左子树，说明左子树高度增加了 1，父结点平衡因子加 1；
  - 如果传导来自于右子树，说明右子树高度增加了 1，父结点平衡因子减 1。 <!-- src: DS-C6#s105; type: direct -->
- "插入时平衡因子变化规律"页为嵌入视频，封面帧字幕："既然AVL树的极佳查找效率来源于严格的高度平衡"。 <!-- src: DS-C6#s106; type: direct -->

#### 插入后平衡因子变化示例

- 基准树：根 80(BF=1)，左 40(BF=1)、右 150(BF=1)；40 的左 30(BF=-1)、右 50(BF=0)；30 的右子 35(BF=0)；150 的左子 100(BF=0)。 <!-- src: DS-C6#s107g1; type: direct -->
- (a) 插入结点 38（作为 35 的右孩子，沿 R 方向）：35 的 BF 由 0 变 -1，向上传导后 30 变 -2、40 变 2、80 变 2（图中以红色标出这些超出范围的平衡因子）；150、100、50 不变。体现"来自右子树减 1、来自左子树加 1"的逐层传导。 <!-- src: DS-C6#s107g2; type: direct -->
- (b) 插入结点 200（作为 150 的右孩子）：150 的 BF 由 1 变 0（图中红色标出），子树高度未变，传导就此停止，80 保持 BF=1，其余结点全部不变。 <!-- src: DS-C6#s107g3; type: direct -->

#### 平衡因子变化的传导规律

- 父结点平衡因子变化后，如果结果变为 0：说明原本左右子树一边高、一边低，现在低的长高了，变得和高的一样；以父结点为根的子树高度没有变化，自下而上的传导行为停止，祖父及更上层祖先结点的平衡因子保持不变。 <!-- src: DS-C6#s108; type: direct -->
- 父结点平衡因子变化后，如果结果变为非 0：依然按照"传导来自左子树加 1、右子树减 1"的原则向祖父结点传导，直到某一层祖先结点的平衡因子变为 0、+2 或者 -2、或者到达根结点。 <!-- src: DS-C6#s108; type: direct -->

#### 冲突结点

- 二叉查找树中一旦有一个结点的平衡因子不在 -1、0、1 的范围内，二叉树就不再平衡。在向上的传导过程中，平衡因子第一个超过 -1、0、1 范围的结点称为冲突结点。 <!-- src: DS-C6#s109; type: direct -->
- 一旦发现冲突结点，暂停沿祖先向上的传导，先对二叉树在冲突结点附近实施调整，直到它变得平衡。 <!-- src: DS-C6#s109; type: direct -->

#### 冲突结点调整示例（插入 42，LL 型）

- (a) 初始平衡树：根 80(BF=1)，左 40(BF=-1)、右 150(BF=0)；40 的左 30(BF=0)、右 50(BF=1)；50 的左子 45(BF=0)；150 的左 100(BF=0)、右 200(BF=0)。 <!-- src: DS-C6#s110g1; type: direct -->
- (b) 插入 42（作为 45 的左孩子）后失衡：45 的 BF 变 1，50 的 BF 变 2，50 即冲突结点（图中红色高亮）；从冲突结点 50 出发，插入路径两条边均标 L（50→45、45→42），即 LL 型；传导在冲突结点处暂停，40 仍标 -1，80 标 -1（原文如此）。 <!-- src: DS-C6#s110g2; type: direct -->
- (c) 调整后恢复平衡：45 上升取代 50 成为 40 的右孩子，42、50 分别为 45 的左、右孩子（三个参与调整的结点图中均为红色），45/42/50 的 BF 均为 0；调整后 40 的 BF=-1，80 的 BF=1，其余结点不变。 <!-- src: DS-C6#s110g3; type: direct -->
- "AVL树LL型旋转"页为嵌入视频，封面帧字幕："为了更直观地理解LL型旋转的精妙，我们来看一个具体的执行过程"。 <!-- src: DS-C6#s111; type: direct -->

#### 四种失衡类型与 LL 型旋转

- 冲突结点和来自插入方向的子结点、孙子结点关系分 4 种类型（LL、RR、LR、RL 型），各自有对应的处理方式：LL 型右旋、RR 型左旋、LR 型先左旋再右旋、RL 型先右旋再左旋。 <!-- src: DS-C6#s112 + DS-C6EH1#s002; type: synthesized -->
- LL 型一般形态（图 (a)"LL型调整：右旋（+掉落重插）"）：冲突结点 A（BF=2）的左孩子为 B（BF=1）；新结点插入在 B 的左子树 BL 中（BL 高 $h$，图中以 X 标记新插入位置），B 的右子树 BR 与 A 的右子树 AR 高度均为 $h-1$。 <!-- src: DS-C6#s112g1; type: direct -->
- LL 型做一次"上臂右旋"即可：B 成为子树新根，A 成为 B 的右孩子；B 原来的右子树 BR 改挂为 A 的左子树；旋转后 BL（高 $h$）仍为 B 的左子树，BR、AR（均高 $h-1$）分别为 A 的左、右子树，A 与 B 的平衡因子均变为 0，子树重新平衡。 <!-- src: DS-C6#s112g1; type: compressed -->
- 记忆口诀（原文红字）："如何记忆：丢了孩子打110；110口诀：右旋插到右子之左"——即 LL 失衡右旋时，被"挤掉"的子树（B 的右子树）插到右子（A）之左。 <!-- src: DS-C6#s112; type: direct -->

#### LL 调整动画演示（依次插入 30, 20, 10）

- 演示过程（动画序列合成）：
  1. 依次插入 30、20、10 构造二叉树。插入 30 后只有一个结点，树是平衡的。
  2. 插入 20（成为 30 的左孩子）：树依然平衡，左高一层，30 的 BF=+1。
  3. 插入 10（成为 20 的左孩子）：出现 LL 型失衡——结点 30 的左子树太高，平衡因子 BF=+2。
  4. 对结点 30 执行右旋：20 成为根，左孩子 10、右孩子 30，所有结点平衡因子 BF∈{-1, 0, +1}，恢复平衡。 <!-- src: DS-C6#s113-s117; type: compressed -->

#### LL 调整代码

- 实现要点：取左孩子 tl 为新根，原根的左指针接管 tl 的右子树，tl 的右指针指向原根；先更新原根高度、再更新新根高度（新根高度的计算用到了 height(t)，即更新后的原根高度），最后让引用 t 指向新根。 <!-- src: DS-C6#s118; type: compressed -->

<details>
<summary>代码</summary>

```cpp
template<class KEY, class OTHER>
void AvlTree<KEY, OTHER>::LL(AvlNode*& t) { // LL右旋（左子树过高）
    AvlNode* tl = t->left;            // 记录当前根节点的左子节点
    t->left = tl->right;              // 将左子节点的右子树挂到当前根的左子位置
    tl->right = t;                    // 将原根节点作为左子节点的右子树
    t->height = max(height(t->left), height(t->right)) + 1; // 更新原根节点高度
    tl->height = max(height(tl->left), height(t)) + 1;      // 更新新根节点高度
    t = tl;                           // 根节点指向新的平衡子树
}
```

</details>
<!-- src: DS-C6#s118c1; type: direct -->

#### RR 型调整（左单旋）

- RR 型失衡形态：危机结点 A 的平衡因子由 -1 变为 -2，其右孩子 B 的平衡因子为 -1；A 的左子树 AL 高 $h-1$，B 的左子树 BL 高 $h-1$，新结点插入到 B 的右子树 BR（高 $h$）中。 <!-- src: DS-C6#s119g1; type: direct -->
- 调整方法：与 LL 型类似，RR 型做一次"上臂左旋"即可：B 升为新根（BF=0），A 成为 B 的左孩子（BF=0），B 原来的左子树 BL 改挂为 A 的右孩子；旋转后 AL、BL 高 $h-1$，BR 高 $h$，子树恢复插入前高度。 <!-- src: DS-C6#s119 + DS-C6#s119g1; type: compressed -->
- 课件口诀（编号110）："左旋插入左子之右"。 <!-- src: DS-C6#s119; type: direct -->
- RR 调整动画演示（依次插入 10、20、30 构造 AVL 树）：①只有结点 10，树平衡；②插入 20 成为 10 的右孩子，树仍平衡，右高一层，结点 10 的 BF=-1；③插入 30 成为 20 的右孩子，结点 10 的右子树太高，BF=-2，出现 RR 型失衡；④对结点 10 执行左旋，得到 20 为根、10 与 30 为左右孩子的树，此时所有结点平衡因子 BF∈{-1, 0, +1}。 <!-- src: DS-C6#s120-s124; type: compressed -->
- RR 调整代码：

<details>
<summary>代码</summary>

```cpp
template<class KEY, class OTHER>
void AvlTree<KEY, OTHER>::RR(AvlNode*& t) { // RR左旋（右子树过高）
    AvlNode* tr = t->right;           // 记录当前根节点的右子节点
    t->right = tr->left;              // 将右子节点的左子树挂到当前根的右子位置
    tr->left = t;                     // 将原根节点作为右子节点的左子树
    t->height = max(height(t->left), height(t->right)) + 1; // 更新原根节点高度
    tr->height = max(height(tr->right), height(t)) + 1;     // 更新新根节点高度
    t = tr;                           // 根节点指向新的平衡子树
}
```

</details>
<!-- src: DS-C6#s125c1; type: direct -->

#### LR/RL 型失衡与双旋转

- 视频《AVL树LR型旋转》：封面可见字幕"前面我们看到的单次旋转"。 <!-- src: DS-C6#s126; type: direct -->
- LR 和 RL 问题通过双旋转解决，即两次单旋转：先对危机结点的儿子和孙子进行一次单旋转，使孙子变成（危机结点的）儿子；然后是危机结点和新的儿子进行一次单旋转。 <!-- src: DS-C6#s127; type: direct -->
- 双旋转示意（危机结点 A，左孩子 L，L 的右孩子 E，E 带子树 1、2）：第一次单旋转后 E 升为 A 的左孩子、L 变为 E 的左孩子（子树 1 挂在 L 下、子树 2 挂在 E 下）；第二次单旋转后 E 成为该子树的根，L、A 分别为其左、右孩子，子树 1、2 分列其下。 <!-- src: DS-C6#s127g1; type: compressed -->
- LR 问题形态：危机结点 A 的平衡因子由 +1 变为 +2，左孩子 B 的平衡因子由 0 变为 -1；B 的左子树 BL 高 $h-1$，A 的右子树 AR 高 $h-1$，新结点插入到 B 的右子树（高 $h$）中。 <!-- src: DS-C6#s128g1; type: direct -->
- 有一个结点被插入到 B 的右子树，这一事实保证了 B 的右子树不会是空的；可以假定 B 的右子树为 C，它由一个根和两棵子树 CL、CR 组成（子树当然可能是空的）。 <!-- src: DS-C6#s128; type: direct -->
- LR 旋转可以看成由两个单旋转组成：先对 B 执行 RR 型旋转，再对 A 执行 LL 型旋转。 <!-- src: DS-C6#s129; type: direct -->
- LR 旋转结果：C 成为该子树的根，B 为其左孩子（带子树 BL、CL），A 为其右孩子（带子树 CR、AR），其中 BL 与 AR 高均为 $h-1$；该调整保持了树的有序性，也保持了原先（插入前）的高度。 <!-- src: DS-C6#s129 + DS-C6#s129g1; type: compressed -->
- LR 调整实例（括号表示左右子树层级）：树 14(5(2(1,3),9), 28(18,60)) 中插入 4（成为 3 的右孩子）后，危机结点 A=5、其左孩子 B=2、B 的右子树根 C=3；先对 2 执行 RR 旋转：3 上升为 5 的左孩子，2 带子树 1 成为 3 的左孩子，4 为 3 的右孩子；再对 5 执行 LL 旋转，调整后为 14(3(2(1,-),5(4,9)), 28(18,60))。可迁移要点：插入点落在危机结点"左孩子的右子树"即判定为 LR 型，旋转围绕孙子结点 C 进行，C 最终上升为局部根。 <!-- src: DS-C6#s130ex1; type: compressed -->
- LR 和 RL 调整代码（直接复用两个单旋转）：

<details>
<summary>代码</summary>

```cpp
template<class KEY, class OTHER>
void AvlTree<KEY, OTHER>::LR(AvlNode*& t) { // 左右双旋
    RR(t->left); // 先对左子树进行RR旋转
    LL(t);       // 再对当前节点进行LL旋转
}

template<class KEY, class OTHER>
void AvlTree<KEY, OTHER>::RL(AvlNode*& t) { // 右左双旋
    LL(t->right); // 先对右子树进行LL旋转
    RR(t);        // 再对当前节点进行RR旋转
}
```

</details>
<!-- src: DS-C6#s131c1; type: direct -->

#### AVL 插入总结与 insert 实现

- AVL 插入总结（用递归实现）：要在 AVL 树 T 中插入一个键值为 X 的结点，递归地将它插入到 T 的某棵合适的子树（记做 $T_{LR}$）中；如果插入后 $T_{LR}$ 的高度没有改变，就完成了操作；否则根据 X 和 T 及 $T_{LR}$ 中的键值选择单旋转或是双旋转（以 T 为根），然后操作结束——因为原来的高度和旋转后的高度是一样的。 <!-- src: DS-C6#s132; type: direct -->
- 视频《AVL树的插入操作》：封面可见字幕"既然我们已经知道了如何运用旋转技巧来修复失衡"。 <!-- src: DS-C6#s133; type: direct -->
- AVL 树 insert 函数的实现（失衡类型判定：插入左子树后左高 2，再按 X 与左孩子键值比较区分 LL/LR；插入右子树后右高 2，按 X 与右孩子键值比较区分 RR/RL）：

<details>
<summary>代码</summary>

```cpp
template<class KEY, class OTHER>
void AvlTree<KEY, OTHER>::insert(const SET<KEY, OTHER>& x) {
    insert(x, root); // 公共插入接口，从根节点开始插入
}

template<class KEY, class OTHER>
void AvlTree<KEY, OTHER>::insert(const SET<KEY, OTHER>& x, AvlNode*& t) {
    if (t == NULL) // 找到插入位置，创建新节点
        t = new AvlNode(x, NULL, NULL);
    else if (x.key < t->data.key) { // 插入左子树
        insert(x, t->left);
        if (height(t->left) - height(t->right) == 2) { // 检测左子树失衡
            if (x.key < t->left->data.key) // 插入左子树左侧：LL型失衡
                LL(t); // 右单旋平衡
            else // 插入左子树右侧：LR型失衡
                LR(t); // 左右双旋平衡
        }
    }
    else if (x.key > t->data.key) { // 插入右子树
        insert(x, t->right);
        if (height(t->right) - height(t->left) == 2) { // 检测右子树失衡
            if (x.key > t->right->data.key) // 插入右子树右侧：RR型失衡
                RR(t); // 左单旋平衡
            else // 插入右子树左侧：RL型失衡
                RL(t); // 右左双旋平衡
        }
    }
    t->height = max(height(t->left), height(t->right)) + 1; // 更新当前节点高度
}
```

</details>
<!-- src: DS-C6#s134c1; type: direct -->

### AVL 树的删除（5.4）

#### 总体流程与回溯调整原则

- AVL 树删除的总体流程：首先在 AVL 树上（按二叉查找树方式）删除结点 x，然后调整平衡。 <!-- src: DS-C6#s136; type: direct -->
- 示意图"删除C后的调整"：根 A 左侧为链 A—L—B（L 为 A 的左孩子，B 为 L 的左孩子），右孩子为 C；删除 C 后 A 左高失衡，对 A 做一次（LL 型）右旋，L 成为新根，B、A 分别为其左、右孩子。 <!-- src: DS-C6#s136g1; type: compressed -->
- 与插入操作一样，失衡结点存在于被删结点到根结点的路径上；删除一个结点后，必须沿着到根结点的路径向上回溯，随时调整路径上结点的平衡度。 <!-- src: DS-C6#s137; type: direct -->
- 删除操作没有插入操作那么"幸运"：插入时最多只需要调整一个结点；而删除时无法保证子树在平衡调整后的高度不变——只有当某个结点的高度在删除前后保持不变，才无需继续调整。 <!-- src: DS-C6#s137; type: direct -->
- 递归的删除函数有一个布尔型返回值：返回 true 表示子树高度不变，调整停止；返回 false 表示需继续调整。 <!-- src: DS-C6#s137; type: direct -->
- 视频《AVL树的删除与旋转操作》：封面可见字幕"现在，让我们通过一个具体的例子，来直观感受一下这套删除与修复的机制"。 <!-- src: DS-C6#s138; type: direct -->

#### 删除后的五种情况（前提：删除发生在 P 的左子树，导致左子树矮了一层）

| 情况 | P原平衡因子 | 删除后形态 | 处理 | 高度变化与是否继续向上 |
|---|---|---|---|---|
| 情况1 | 0 | BF变-1（左h-1、右h） | 没有失衡，不用调整 | 高度没变，不影响P的父结点平衡性，不用检查父结点 |
| 情况2 | +1 | BF变0（左右均h） | 没有失衡，不用调整 | 高度变矮，可能影响P的父结点平衡度，需继续检查父结点 |
| 情况3 | -1（变-2） | 左子树h-2；右孩子的左子树h-2、右子树h-1 | 失衡，对P进行一次RR旋转 | 高度变矮，需检查P的父结点平衡性 |
| 情况4 | -1（变-2） | 左子树h-2；右孩子的左子树h-1、右子树h-2 | 失衡，对P进行一次RL旋转 | 高度变矮，需检查P的父结点平衡性 |
| 情况5 | -1（变-2） | 左子树h-2；右孩子的左右子树均h-1 | 失衡，RR或RL旋转都可以，RR旋转简单 | 高度没变，不用检查P的父结点平衡性 |

<!-- src: DS-C6#s139 + DS-C6#s140; type: synthesized -->

#### 调整实例（删除发生在左子树）

- 删除 2（初始树 14(7(5(2,-),9(-,10)), 28(18,60))）：原来结点 5 左高右低，属于情况 2；删除 2 后结点 5 的平衡因子变为 0，以 5 为根的子树矮了一层，会影响结点 7 的平衡度，所以继续往上调整；对结点 7 而言正好属于情况 1，只修改 7 的平衡因子，调整结束。结果为 14(7(5,9(-,10)), 28(18,60))。 <!-- src: DS-C6#s141ex1; type: compressed -->
- 继续删除 5：结点 7 属于情况 3，对 7 执行 RR 旋转（9 上升，7、10 成为其左右孩子）；7 平衡了但该子树矮了一层，继续往上调整；对结点 14 而言正好属于情况 2——本身平衡但子树矮了一层，本需继续往上，但 14 已是根结点，调整结束。结果为 14(9(7,10), 28(18,60))。易错点：旋转修复局部失衡后子树仍可能变矮，必须继续向上检查直到某结点高度不变或到达根。 <!-- src: DS-C6#s142ex1; type: compressed -->

#### 删除总结

- 结点删除方式同二叉查找树；在删除了叶结点或只有一个孩子的结点后，子树变矮，返回 false。 <!-- src: DS-C6#s143; type: direct -->
- 每次递归调用后检查返回值：如果是 true，直接返回 true；否则分 5 种情况进行处理。 <!-- src: DS-C6#s143; type: direct -->
- 视频《AVL树的删除操作》：封面可见字幕"了解了插入操作的完美闭环后，我们再来看看相对更复杂的删除操作"。 <!-- src: DS-C6#s144; type: direct -->

#### remove 与 adjust 函数实现

- remove 函数的实现（返回 true 表示子树高度不变无需再调整；度为 2 的结点用右子树最小结点即后继替代后递归删除后继）：

<details>
<summary>代码</summary>

```cpp
template<class KEY, class OTHER>
bool AvlTree<KEY, OTHER>::remove(const KEY& x, AvlNode*& t) {
    if (t == NULL) // 未找到待删节点（返回true表示无需调整）
        return true;

    if (x == t->data.key) { // 找到目标节点
        if (t->left == NULL || t->right == NULL) { // 度为0或1的节点
            AvlNode* oldNode = t; // 保存旧节点
            t = (t->left != NULL) ? t->left : t->right; // 用非空子树接替
            delete oldNode; // 释放内存
            return false; // 子树高度变矮了，上层需要检查平衡并做可能的旋转
        }
        else { // 度为2的节点（找后继替代）
            AvlNode* tmp = t->right; // 从右子树找最小节点
            while (tmp->left != NULL) tmp = tmp->left; // 找最左节点
            t->data = tmp->data; // 复制后继数据
            if (remove(tmp->data.key, t->right)) // 递归删除后继节点
                return true; // 右子树高度没变，当前树高度也就不变
            return adjust(t, 1); // 右子树变矮了，从右子树方向调整
        }
    }
    if (x < t->data.key) { // 左子树递归删除
        if (remove(x, t->left)) // 递归删除左子树
            return true;
        return adjust(t, 0); // 左子树删除后的平衡调整
    }
    else { // 右子树递归删除
        if (remove(x, t->right)) // 递归删除右子树
            return true;
        return adjust(t, 1); // 右子树删除后的平衡调整
    }
}

template<class KEY, class OTHER>
void AvlTree<KEY, OTHER>::remove(const KEY& x) {
    remove(x, root); // 公共删除接口：调用私有删除函数，从根节点开始
}
```

</details>
<!-- src: DS-C6#s145c1 + DS-C6#s146c1; type: direct -->

- adjust 函数的实现（参数 subTree：1 表示删除发生在右子树方向，0 表示左子树方向；返回 true 表示高度不变可停止，false 表示需继续向上调整）：

<details>
<summary>代码</summary>

```cpp
template<class KEY, class OTHER>
bool AvlTree<KEY, OTHER>::adjust(AvlNode*& t, int subTree) {
    if (subTree) { // 右子树调整（删除发生在右子树）
        if (height(t->left) - height(t->right) == 1) return true; // 删除后仍然平衡，且高度未变
        if (height(t->right) == height(t->left)) { // 节点的高度减少了 1
            --t->height; // 高度降低
            return false; // 通知上层需继续向上调整
        }
        if (height(t->left->right) > height(t->left->left)) { // 判断是 LR 型还是 LL 型（必定是 2）
            LR(t); // LR型
            return false; // 需继续调整
        }
        LL(t); // LL型失衡（右旋）
        return height(t->right) != height(t->left); // 判断旋转后是否等高，不等则继续向上调整
    }
    else { // 左子树调整（删除发生在左子树）
        if (height(t->right) - height(t->left) == 1) return true; // 已平衡
        if (height(t->right) == height(t->left)) { // 节点的高度减少了 1
            --t->height; // 高度降低
            return false; // 需继续调整
        }
        if (height(t->right->left) > height(t->right->right)) { // RL型失衡
            RL(t); // 右左双旋
            return false; // 需继续调整
        }
        RR(t); // RR型失衡（左旋）
        return height(t->right) != height(t->left); // 判断是否仍需调整
    }
}
```

</details>
<!-- src: DS-C6#s147c1 + DS-C6#s148c1; type: direct -->

- 对称分支要点：删除发生在左子树时，若调整后左右子树等高，则当前结点高度减 1，返回 false 通知上层继续检查。 <!-- src: DS-C6#s148c1; type: one-step-inferred -->

### AVL 树的局限性

- AVL 树的局限：AVL 树对平衡性要求很高，左右子树高度只能相差 1，这就很容易在插入、删除时打破平衡、引起调整；尤其删除时调整可能是一连串的。 <!-- src: DS-C6#s150 + DS-C6EH1#s005; type: synthesized -->


## 外部查找与B树

### 外部查找概述

- 本章查找专题总览：静态查找、动态查找、二叉查找树、平衡二叉查找树、外部查找（本块主题）、哈希查找。 <!-- src: DS-C6EH1#s069; type: direct -->


- 外部查找的视频引言字幕：掌握了内存中的查找结构后，我们面临的挑战进一步升级。 <!-- src: DS-C6#s213; type: direct -->

#### 为什么需要外部查找：背景与索引文件

- 前面各种查找（顺序、二分、BST、AVL 等）都基于数据元素能够全部载入内存来讨论其存储结构和算法。 <!-- src: DS-C6#s214 + DS-C6EH1#s070; type: synthesized -->


- 实际应用中数据量往往很大，存储在外存储器上的文件中，无法一次性载入内存；数据常按写入时间的先后顺序存储。为了加快查找速度，**建立索引文件**是最普遍的做法。 <!-- src: DS-C6#s214 + DS-C6EH1#s070; type: synthesized -->
- 索引文件通常按关键字顺序存储"关键字 + 所属数据在原始文件中的地址"的对应关系；查找时先在索引文件中按关键字查找，找到待查关键字后，通过对应地址信息到数据文件读取目标数据。 <!-- src: DS-C6#s214 + DS-C6EH1#s070; type: synthesized -->

#### 主存储器与外存储器

- 主存储器（内存）：存储正在运行的程序代码及处理数据。 <!-- src: DS-C6#s215 + DS-C6EH1#s071; type: synthesized -->
- 外存储器：用于存储长期保存的信息；常用外存储器有磁盘、磁带、光盘、U盘等。优点：价格低廉、存储量大、永久保存；缺点：访问速度慢。 <!-- src: DS-C6#s215 + DS-C6EH1#s071; type: synthesized -->
- 注意：在考虑（设计）处理外存储器上数据的算法时，重点应该考虑**如何减少访问次数**。 <!-- src: DS-C6#s215 + DS-C6EH1#s071; type: synthesized -->

#### 外存储器的访问

- 外存储器中的信息**以文件为单位**；每个文件在内存有一个缓冲区，存放正在处理的文件中的数据（对应 C++ 的 `ifstream in;`）。 <!-- src: DS-C6#s216 + DS-C6EH1#s072; type: synthesized -->
- 外存储器**以数据块为单位**与内存交换信息；当程序需要处理外存储器中的某个数据时，将包含该数据的数据块整块读入缓冲区进行处理。 <!-- src: DS-C6#s216 + DS-C6EH1#s072; type: synthesized -->

#### 磁带与磁盘

- 磁带：一种典型的顺序存取的设备；图示为一条被竖线分隔成一段段数据块的长条带状结构。 <!-- src: DS-C6#s217 + DS-C6#s217g1 + DS-C6EH1#s073 + DS-C6EH1#s073g1; type: synthesized -->
- 磁盘：既支持顺序存取也支持随机存取。磁盘结构术语：磁道——存储信息的场所；扇区——磁道划分成扇区，存储一个数据块；柱面——不同盘片的同一磁道。 <!-- src: DS-C6#s217 + DS-C6EH1#s073; type: synthesized -->
- 磁盘结构图：盘片组结构由主轴串起（串接）多张盘片，各盘片表面是同心圆磁道，上下盘片纵向对齐的同一磁道构成柱面，每个盘面配读写头（主课件图示为"每个盘面配读写头"，EH 图示表述为"每张盘片配有读写头"，两处表述粒度不同）。 <!-- src: DS-C6#s217g3 + DS-C6EH1#s073g2; type: synthesized -->
- 盘面示意图标注：跨多条磁道的楔形区域为扇面；两个及以上的扇区构成簇。 <!-- src: DS-C6#s217g2; type: direct -->
- 外部查找采用的索引结构：B树、B+树。 <!-- src: DS-C6EH1#s074; type: direct -->

### B树的概念与定义

#### B树的作用与引入

- B树提供外存中的随机查找，是存储在外存储器上的动态查找表。 <!-- src: DS-C6EH1#s075; type: direct -->
- 引入问题：能否与内存一样，采用二叉查找树？ <!-- src: DS-C6EH1#s075; type: direct -->

#### 直观的概念：二叉查找树用于外存的代价

- 前提假设：共1000万条记录；机器一秒钟可执行2500万条指令，或进行6次磁盘访问。 <!-- src: DS-C6EH1#s076; type: direct -->
- 最坏情况（非平衡二叉查找树）：树有线性深度，需1000万次磁盘访问，约需 $10{,}000{,}000/6/3600 \approx 463$ 小时。 <!-- src: DS-C6EH1#s076; type: direct -->
- 平均情况：一次成功查找需 $1.38\log N$ 次磁盘访问；$\log 10{,}000{,}000$ 接近 24，故平均查找约需 32（$=1.38\times 24$）次磁盘访问，约5秒。 <!-- src: DS-C6EH1#s076; type: direct -->
- 典型情况：随机构造的树中某些结点深度会是平均深度的三倍，于是需约100次磁盘访问，即约16秒。 <!-- src: DS-C6EH1#s076; type: direct -->

#### 解决方法与B树的概念

- 目标：把磁盘访问次数降低到一个很小的常数（如3或4）；在查找树中，访问次数与查找树的高度成正比。 <!-- src: DS-C6EH1#s077; type: direct -->
- 方法：增加树的分叉就能降低树的高度，即采用M叉查找树；M叉查找树的最佳高度为 $\log_M N$。 <!-- src: DS-C6EH1#s077; type: direct -->
- B树的概念：B树是一棵平衡的M叉查找树（多路查找树），是索引存储中的索引结构；记录可按添加到文件中的次序存放在数据区中。 <!-- src: DS-C6EH1#s077 + DS-C6EH2#s005; type: synthesized -->

#### B树的定义（m阶）

- 一棵 m 阶 B 树或者为空，或者满足以下条件（每个结点包含多个关键字且关键字有序，有 s 个儿子的结点关键字数为 s−1，即子树数等于关键字数 +1）：
  1. 根结点要么是叶子，要么至少有2个儿子，至多有 m 个儿子；
  2. 除根结点和叶子结点之外，每个结点的儿子个数 s 满足 $\lceil m/2 \rceil \le s \le m$；
  3. 有 s 个儿子的非叶结点具有 $n = s-1$ 个关键字，结点的数据信息为 $(n, A_0, (K_1, R_1), A_1, (K_2, R_2), A_2, \ldots, (K_n, R_n), A_n)$；
  4. 所有叶子结点都出现在同一层上（深度相同），并且不带信息（这些结点不存在，指向这些结点的指针为空）。 <!-- src: DS-C6EH1#s078 + DS-C6EH2#s005; type: synthesized -->
- 结点字段含义：$n$ 为关键字个数；$K_1, K_2, \ldots, K_n$ 为结点关键字且 $K_1 < K_2 < \cdots < K_n$；$A_0$ 为B树中小于 $K_1$ 的结点的地址；$R_j$ 为关键字值等于 $K_j$（$1 \le j \le n$）的数据记录在硬盘中的地址；$A_j$ 为B树中大于 $K_j$ 且小于 $K_{j+1}$（$1 \le j \le n-1$）的结点的地址；$A_n$ 为B树中大于 $K_n$ 的结点的地址。 <!-- src: DS-C6EH1#s078t1; type: direct -->
- 与磁盘的对应：一次磁盘读写可以读入磁盘上的一个块；B树设计中可将一个磁盘块作为一个B树的结点。 <!-- src: DS-C6EH1#s078; type: direct -->

### B树的查找

#### 5阶B树示例与查找

- 示例：一棵5阶B树，结点记法为 (n, K1, K2, …)，n 为关键字个数：
  - 根结点a：(1, 55)；
  - 第2层：结点b (2, 13, 31) 与另一结点 (2, 70, 77)；
  - 第3层（最底层非叶结点，自左至右）：(2, 6, 8)、(2, 19, 24)、结点f (4, 37, 40, 52, 54)、(2, 67, 69)、(2, 71, 76)、(3, 80, 82, 83)；
  - 第4层全部是标记为 F 的空叶位置（结点不存在，指针为空）。 <!-- src: DS-C6EH1#s079g1; type: direct -->
- 查找过程与二叉查找树相似，从根结点开始逐层向下，在结点内按关键字区间选择对应子树指针下行（课件列出查找 55、13、71、25 四个例子；以下命中层级与路径据上述树结构推出）：55 在根（第1层）命中；13 在第2层结点 b 命中；71 经根（>55 走右）到第2层 (2,70,77)（70<71<77 走中间指针）再到第3层结点 (2,71,76) 才命中（K₁=71）；查找 25 经根（<55 走左）到结点 b，在 b 中 13<25<31 走中间子树指针进入第3层 (2,19,24)，再因 25>24 落到该结点最右的空叶 F，查找失败（不经过结点 f；结点 f 是 b 中关键字 >31 才进入的右子树）。 <!-- src: DS-C6EH1#s079 + DS-C6EH1#s079g1 + DS-C6EH2#s005; type: one-step-inferred -->
- 由于结点可能驻留在磁盘，每下行一层就是一次磁盘 IO，所以减少树的高度至关重要。 <!-- src: DS-C6EH2#s005; type: direct -->

### B树的插入

#### 插入规则（根最少有2个子树）

- 与二叉查找树类似，插入总是在最底层（的非叶结点）。 <!-- src: DS-C6EH1#s080; type: direct -->
- 步骤：首先在 m 阶B树上进行查找操作，确定新插入关键字 key 在最底层非叶结点的插入位置，将 key 和记录的存储地址按序插入到最底层上的某个结点。 <!-- src: DS-C6EH1#s080; type: direct -->
- 若被插入结点的关键字个数 ≤ m−1，插入操作结束（如在5阶示例树中插入10）。 <!-- src: DS-C6EH1#s080; type: direct -->
- 若该结点原有的关键字个数已经等于 m−1，必须分裂成两个结点（如插入39）。 <!-- src: DS-C6EH1#s080; type: direct -->

#### 分裂示例：在5阶示例树中插入39

- 过程：
  1. 39 按序插入最底层结点f，f 的关键字数超出规定（原文写作"关键字树超出规定"，原文如此），变成 37、39、40、52、54（5个，超过 m−1=4）；
  2. 分裂结点f为 f1{37, 39} 和 f2{52, 54}，把中间的 40 提到（放入）父结点b；
  3. 结果：结点b 由 (2, 13, 31) 变为 (3, 13, 31, 40)，其子树由3个增为4个；根 (1, 55) 及树的其余部分不变，所有空叶仍在同一层。 <!-- src: DS-C6EH1#s081-s082; type: synthesized -->
- 可迁移要点：分裂把超员结点的关键字一分为二（前半、后半各成一个结点），居中（中间）关键字上移到父结点，父结点相应增加一个关键字和一个子树指针；若父结点也因此超过关键字上限，可能触发递归分裂，分裂沿路径向上传播。 <!-- src: DS-C6EH1#s082 + DS-C6EH2#s005; type: synthesized -->
- 插入复杂度约为 2 × 树高度（前提：每次分裂涉及写回，分裂可能沿路径向上传播）。 <!-- src: DS-C6EH2#s005; type: direct -->

#### 课堂练习：依次插入 10,20,5,6,30,7,17 构造5阶B树

- 题目：从空树开始依次插入 10, 20, 5, 6, 30, 7, 17，构造5阶B树（m=5，每结点关键字上限 m−1=4）。 <!-- src: DS-C6EH1#s083; type: direct -->
- 演示帧中结点框内最左侧的红色数字为该结点当前关键字个数 n。 <!-- src: DS-C6EH1#s084-s090; type: direct -->
- 逐步构造过程（动画帧合成）：
  1. 插入10：单结点 (1: 10)；
  2. 插入20：(2: 10, 20)；
  3. 插入5：按序插入，(3: 5, 10, 20)；
  4. 插入6：(4: 5, 6, 10, 20)，关键字数已达上限4；
  5. 插入30：结点超员（5, 6, 10, 20, 30 共5个），触发分裂——居中关键字10上移成为新根 (1: 10)，左儿子 (2: 5, 6)，右儿子 (2: 20, 30)，树由一层变为两层；
  6. 插入7：进入左儿子，未满，直接按序插入得 (3: 5, 6, 7)；
  7. 插入17：进入右儿子，未满，直接按序插入得 (3: 17, 20, 30)。
  最终树：根 (10)，左儿子 (5, 6, 7)，右儿子 (17, 20, 30)。 <!-- src: DS-C6EH1#s084-s090; type: synthesized -->
- 关键判断与易错点：5阶B树每结点最多 m−1=4 个关键字，插入第5个关键字时才分裂，不要把上限误当作 m=5；分裂上移的是排序后居中的那个关键字（此处 5,6,10,20,30 的中位 10）；分裂后续插入若目标结点未满则不再分裂。 <!-- src: DS-C6EH1#s082 + DS-C6EH1#s088; type: synthesized -->

### B树的删除

#### 删除规则

- B树的删除类似于二叉查找树的删除操作，同样采用"替身"的方法：替身为右子树最左面的关键字（后继）或左子树最右面的关键字（前驱）；删除内部（中间层）关键字时先用替身覆盖，再转化为删除最底层的替身关键字。 <!-- src: DS-C6#s219 + DS-C6EH2#s007 + DS-C6EH2#s005; type: synthesized -->
- 删除最底层的关键字，计有以下几种情况：
  - 若删除关键字之后，结点的关键字个数仍满足B树结点的定义，删除结束；
  - 若删除后关键字个数小于下限：① 向结点的左或右兄弟结点借一个关键字过来；② 若该结点的左、右兄弟结点的关键字个数都正好为下限，则执行合并结点的操作。 <!-- src: DS-C6#s219 + DS-C6EH2#s007; type: synthesized -->
- 原则：**先借后合并**。 <!-- src: DS-C6#s219 + DS-C6EH2#s007; type: synthesized -->

#### 删除示例：初始树与图示约定

- 图示约定：每个结点框内显示为"n, k1, k2, …"，首位（第一个数字）n 是该结点的关键字个数；最底层关键字结点之下统一挂一层标记为 F 的失败结点（外部结点），底层结点的各指针均指向 F，全部 F 在同一层。 <!-- src: DS-C6#s220g1 + DS-C6EH2#s008g1; type: synthesized -->
- 示例初始 B 树（三层关键字结点 + 失败层）：
  - 根 结点a：(1: 55)；
  - 第二层：结点b (3: 13, 31, 40)，右侧结点 (2: 70, 77)；
  - 最底层（左→右）：b 的孩子依次为 (2: 6, 8)、(2: 19, 24)、结点f1 (2: 37, 39)、结点f2 (2: 52, 54)；右侧结点的孩子依次为 (2: 67, 69)、(2: 71, 76)、(3: 80, 82, 83)。 <!-- src: DS-C6#s220g1 + DS-C6EH2#s008g1; type: synthesized -->
- 示例中失衡判定：非根结点的关键字数下限为 2、上限为 4（对应 M=5 的B树）；结点删除后仅剩 1 个关键字即低于下限失去平衡，需借或合并；兄弟恰有 2 个关键字时"正好为下限"、不能外借。 <!-- src: DS-C6#s220-s225 + DS-C6EH2#s008-s016; type: one-step-inferred -->

#### 情况一：直接删除（删除 80）

- 80 在最底层结点 (3: 80, 82, 83) 中，直接删除后结点变为 (2: 82, 83)，关键字个数仍满足定义，没有违反平衡，删除结束。 <!-- src: DS-C6#s220 + DS-C6EH2#s008; type: synthesized -->

#### 情况二：替身 + 合并（删除 31）

- 删除 31 的完整过程（动画序列）：
  1. 31 位于内部（非最底层）结点b (3: 13, 31, 40) 中，找其右子树的最左关键字 37 作为替身覆盖 31，b 变为 (3: 13, 37, 40)；问题转化为在最底层结点f1中删除 37。 <!-- src: DS-C6#s220 + DS-C6#s222 + DS-C6EH2#s008-s012; type: synthesized -->
  2. f1 删除 37 后只剩 (1: 39)，关键字个数小于下限，失衡；其左兄弟 (2: 19, 24) 与右兄弟f2 (2: 52, 54) 的关键字个数都正好为下限，无法借，只能（必须）合并。 <!-- src: DS-C6#s222 + DS-C6#s219 + DS-C6EH2#s008-s012; type: synthesized -->
  3. 方案一·和左兄弟合并：父结点b中的分隔关键字 37 下移，f1 与左兄弟 (19, 24) 合并为 (4: 19, 24, 37, 39)，b 降为 (2: 13, 40)。 <!-- src: DS-C6#s221 + DS-C6EH2#s008-s012; type: synthesized -->
  4. 方案二·和右兄弟合并：父结点b中的分隔关键字 40 下移，f1 与右兄弟f2 (52, 54) 合并为 (4: 39, 40, 52, 54)，b 降为 (2: 13, 37)。两种合并方向均可行。 <!-- src: DS-C6#s223 + DS-C6EH2#s008-s012; type: synthesized -->
  5. 合并的本质：父结点中两兄弟之间的分隔关键字下移进入合并结点，父结点关键字数减一（本例父结点仍满足下限，调整结束）。 <!-- src: DS-C6EH2#s008-s012; type: compressed -->
  6. 课件按方案一（和左兄弟合并）的结果继续后续删除。 <!-- src: DS-C6#s224 + DS-C6EH2#s008-s012; type: synthesized -->

#### 情况三：借关键字/领养（删除 52）

- 在删除 31（左合并）后的树上再删除 52：52 所在结点f (2: 52, 54) 删除后只剩 (1: 54)，失去平衡；其左兄弟 (4: 19, 24, 37, 39) 关键字数高于下限，可"从左兄弟领养一个"。 <!-- src: DS-C6#s225-s226 + DS-C6EH2#s012-s013; type: synthesized -->
- 领养（借）的做法是经过父结点中转：父结点b中的分隔关键字 40 下移补入（进入）结点f，左兄弟的最大关键字 39 上移到父结点顶替其位置。结果：结点f = (2: 40, 54)，左兄弟 = (3: 19, 24, 37)，父结点b = (2: 13, 39)，平衡恢复，删除结束。 <!-- src: DS-C6#s225-s226 + DS-C6EH2#s013-s014; type: synthesized -->

#### 情况四：合并向上传播、树高减一（删除 67）

- 删除 67 的完整过程（动画序列）：
  1. 67 所在底层结点 (2: 67, 69) 删除后只剩 (1: 69)，失衡；其右兄弟 (2: 71, 76) 正好为下限不能借（兄弟无富余关键字），故和右兄弟合并：父结点 (2: 70, 77) 中的分隔关键字 70 下移，合并为 (4: 69, 70, 71, 76)；父结点降为 (1: 77)——父亲结点失衡。 <!-- src: DS-C6#s227 + DS-C6EH2#s013-s016; type: synthesized -->
  2. 上层父结点 (1: 77) 本身低于下限而失衡，其左兄弟b (2: 13, 39) 正好为下限不能借，于是和其左兄弟合并：根结点a中的分隔关键字 55 下移，合并为 (4: 13, 39, 55, 77)。 <!-- src: DS-C6#s228 + DS-C6EH2#s013-s016; type: synthesized -->
  3. 根结点a失去唯一关键字 55 后为空，被撤除（删去原根），**B树减少一层**，合并所得结点 (4: 13, 39, 55, 77) 成为新根，下挂全部底层结点。 <!-- src: DS-C6#s228 + DS-C6EH2#s013-s016; type: synthesized -->
- 删除 67 后的最终树：根 (4: 13, 39, 55, 77)；最底层 5 个结点依次为 (2: 6, 8)、(3: 19, 24, 37)、(2: 40, 54)、(4: 69, 70, 71, 76)、(3: 80, 82, 83)。 <!-- src: DS-C6EH2#s016g1; type: direct -->

#### 删除小结（可迁移要点）

- 删除内部（中间层）关键字一律先用替身转化为最底层删除；删后不足下限时按"先借后合并"判断：先尝试借——左或右兄弟有富余关键字时，经父结点中转（父分隔关键字下移、兄弟端点关键字上移）；左、右兄弟都为下限才合并（父分隔关键字下移并入合并结点）；合并会使父结点关键字数减一，失衡可能逐层向上传播，传播到根且根被掏空时整棵B树高度减一（最坏情况）。 <!-- src: DS-C6#s219 + DS-C6#s227-s228 + DS-C6EH2#s007 + DS-C6EH2#s008-s016; type: synthesized -->

### M的选择（B树结点与磁盘块）

- 将一个磁盘块作为一个B树的结点。设（假设）一个块的容量为 max 字节，每个键占用 key 个字节。 <!-- src: DS-C6#s229 + DS-C6EH2#s017; type: synthesized -->
- 在一棵 M 阶B树中，一个结点最多可有 $M-1$ 个键，结点总数据量须满足：【$(M-1) \times key$ + M 个分支的地址 + $(M-1)$ 个关键字对应记录的存储地址】$< max$，M 的取值由该容量约束决定。 <!-- src: DS-C6#s229 + DS-C6EH2#s017 + DS-C6EH2#s017g1; type: synthesized -->
- 结点的存储格式：$(n, A_0, (K_1, R_1), A_1, (K_2, R_2), A_2, \ldots, (K_n, R_n), A_n)$；图中箭头标注：$K_i$（关键字）对应"$(M-1) \times key$"中的键，$A_i$（分支/子树地址）对应"M 个分支的地址"，$R_i$（关键字对应记录的存储地址）对应"$(M-1)$ 个关键字对应记录的存储地址"。 <!-- src: DS-C6#s229 + DS-C6#s229g1 + DS-C6EH2#s017g1; type: synthesized -->

## B+树

### 动机与索引顺序文件

- B树可以提供随机查找，可用于索引文件；但如果要按序访问文件的所有记录，则时间上是灾难性的。 <!-- src: DS-C6#s231 + DS-C6EH2#s019; type: synthesized -->
- B+树是既能提供随机查找、也能提供顺序访问的存储结构；叶子结点中才有 data，其他层皆为索引。 <!-- src: DS-C6#s231 + DS-C6EH2#s019; type: synthesized -->
- 索引顺序文件：既能支持每个记录的随机访问，又能支持对整个文件按关键字次序访问的文件。 <!-- src: DS-C6#s231 + DS-C6EH2#s019; type: synthesized -->

### 定义与平衡条件

- B+树是满足某些平衡条件的M叉树。M阶的B+树具有以下性质： <!-- src: DS-C6#s232 + DS-C6EH2#s020; type: synthesized -->
  - 数据记录被存贮在叶子中；
  - 非叶子结点至多保存 $M-1$ 个键来引导查找，键 $i$ 表示子树 $i+1$ 中键的最小值；
  - 根或者是叶子，或者是有 2 到 $M$ 个儿子；
  - 除根之外所有的非叶结点的儿子数为 $\lceil M/2 \rceil$ 到 $M$ 之间——这保证了B+树不会退化成二叉树；
  - 所有的叶子都在同一层上，并且对于某个 $L$，每个叶子要有 $\lceil L/2 \rceil$ 到 $L$ 个数据项；所有的叶子结点连成一个单链表。 <!-- src: DS-C6#s232 + DS-C6EH2#s020; type: synthesized -->

### 5阶B+树示例（磁盘块结点）

- 每个结点是一个磁盘块；本例 $M=5$，$L=5$。 <!-- src: DS-C6#s233 + DS-C6EH2#s021; type: synthesized -->
- 示例树结构（3 层）：根索引结点为 [35|50|64]（4 个儿子）；第二层索引结点依次为 [8|15|23|30]、[41|46]、[55|60]、[70|79]；叶子层共 14 个数据块（叶结点）按关键字升序存放数据：{1,3,5}、{8,9,11}、{15,16,18,19,21}、{23,25,26,27}、{30,31,32,33,34}、{35,38,40}、{41,42,43,44,45}、{46,47,48}、{50,51,52,53}、{55,57,59}、{60,61,62}、{64,66,68}、{70,73,77}、{79,81,82}；相邻叶子之间有从左到右的指针依次链接，连成单链表。 <!-- src: DS-C6#s233g1 + DS-C6EH2#s021g1; type: synthesized -->

### B+树的查找

- 查找过程五步： <!-- src: DS-C6#s234 + DS-C6EH2#s022; type: synthesized -->
  1. 从根节点出发：查找起始于根节点；
  2. 关键字比较：将给定关键字与当前节点中各关键字依次比较，判断目标关键字在这些关键字中的位置（比哪些大、比哪些小）；
  3. 向下移动判断：根据大小关系，找到比目标关键字大的第一个关键字，沿着该关键字对应的指针进入子节点继续查找；
  4. 重复操作：重复步骤 2 和 3，直到到达叶子节点；
  5. 查找结果判断：在叶子节点中查找关键字，找到则查找成功并返回对应的数据地址等信息；未找到则查找失败。
- 关键点：B+树的查找必须走到叶子结点才能判定成败（数据地址只在叶子中）。 <!-- src: DS-C6EH2#s022; type: compressed -->

### L 和 M 的选择

- 设计原则：一个磁盘块存放一个结点能使 IO 效率最高。假设一个块的容量为 8,192 字节。 <!-- src: DS-C6#s235 + DS-C6EH2#s023; type: synthesized -->
- M 的选择：设每个键占 32 字节，$M$ 阶B树中非叶结点可有 $M-1$ 个键，键共 $32(M-1)$ 字节；每个分支是另一磁盘块的块号，设分支大小 4 字节，$M$ 个分支占 $4M$ 字节；故一个非叶子结点总需 $36M-32$ 字节。令 $36M-32 \le 8192$，$M$ 的最大值是 228，于是选择 $M=228$。 <!-- src: DS-C6#s235 + DS-C6EH2#s023; type: synthesized -->
- L 的选择：假如每条数据记录 256 字节，则一块可存 $8192/256=32$ 条记录，所以 $L$ 取 32；每个叶子有 16 到 32 条数据记录。 <!-- src: DS-C6#s235 + DS-C6EH2#s023; type: synthesized -->

### B+树的插入

- 总流程：从树根开始查找应该插入的叶结点。 <!-- src: DS-C6#s236 + DS-C6EH2#s024; type: synthesized -->
  - 叶结点不满：把新项插入叶子，重新调整该叶子中数据的顺序；
  - 叶子已经装满：通过分裂该叶子，形成两个半满的叶子来插入新的项，并更新父节点；
  - 如果父亲的儿子数量已经满了，就继续分裂父亲；最坏情况要分裂根——这就是为什么根节点允许只有两个孩子。 <!-- src: DS-C6#s236 + DS-C6EH2#s024; type: synthesized -->
- 插入示例（5 阶、$L=5$，连续插入 7、41、22 的动画序列；以下按插入动画起始帧的数据描述）： <!-- src: DS-C6#s237-s239 + DS-C6EH2#s025-s027; type: synthesized -->
  1. 插入 7（叶不满）：定位到最左叶 {1,3,5}，未满，直接插入得 {1,3,5,7}。代价为 3 次读磁盘 + 1 次写磁盘（沿树高读根、索引、叶各一次，写回叶一次）。 <!-- src: DS-C6#s237g1 + DS-C6EH2#s025g1; type: synthesized -->
  2. 插入 41（叶满，分裂叶）：目标叶 {40,42,43,44,45} 已满（5 项，$L=5$），分裂为 {40,41,42} 和 {43,44,45} 两个半满叶子，父索引结点由 [40|46] 变为 [40|43|46]（新增键 43）。分裂结点多出了两次磁盘访问时间，但这种情况不会经常发生。 <!-- src: DS-C6#s238g1 + DS-C6EH2#s026g1; type: synthesized -->
  3. 插入 22（叶满且父也满，分裂向上传播）：目标叶 {15,16,18,19,21} 已满，分裂为 {15,16,18} 和 {19,21,22}；其父索引结点 [8|15|23|30] 的儿子数已满（5 个），随之分裂为 [8|15]（儿子 {1,3,5,7}{8,9,11}{15,16,18}）与 [23|30]（儿子 {19,21,22}{23,25,26,27}{30,31,32,33,34}），键 19 上移插入根，根由 [35|50|64] 变为 [19|35|50|64]。本次共 5 次磁盘写操作。 <!-- src: DS-C6#s239g1 + DS-C6EH2#s027g1; type: synthesized -->

### B+树的删除

- 删除操作首先查找到要删除的项，然后删除它。如果此时它所在叶子的元素数量正好满足要求的最小值，删除该项就会使它低于最小值，处理策略： <!-- src: DS-C6#s240 + DS-C6EH2#s028; type: synthesized -->
  - 如果邻居不是最少的情况，就从邻居借一个过来（领养）；
  - 如果邻居也处于最少的情况，就把两个结点合并成一个满的结点。此时父亲失去一个儿子；若引起父亲的儿子数少于最小值，对父亲使用同样策略，这个过程一直向上过滤到根。如果在此过程中根只剩下一个儿子，就把根删除，让它的儿子作为新的树根——这是唯一能使B+树变矮的情况。 <!-- src: DS-C6#s240 + DS-C6EH2#s028; type: synthesized -->
- 删除示例（接插入示例后的树，连续删除 32、16、22 的动画序列；示例树为根-索引-叶三层结构）： <!-- src: DS-C6#s241-s244 + DS-C6EH2#s029-s032; type: synthesized -->
  1. 删除 32（直接删除）：所在叶 {30,31,32,33,34} 有 5 项，删除后 {30,31,33,34} 剩 4 项，仍不低于最小值要求（$\lceil 5/2 \rceil = 3$），直接删除即可，树结构不变。 <!-- src: DS-C6#s241-s242 + DS-C6EH2#s029-s030; type: synthesized -->
  2. 删除 16（合并向上传播）：所在叶 {15,16,18} 已处于最少（3 项），删除后剩 {15,18}，低于最小值；其左邻叶 {8,9,11} 也处于最少状态，两叶合并为满叶 {8,9,11,15,18}。其父索引结点 [8|15] 因此只剩 2 个儿子（低于最小值），其兄弟索引结点 [23|30] 也只有 3 个儿子（最少），两个索引结点合并为 [8|19|23|30]（5 个儿子）；根因此失去一个儿子，由 [19|35|50|64] 降为 [35|50|64]（仅减少一个关键字、一个子树指针），整棵树仍为三层（根-索引-叶），根未被删除、树高未变。 <!-- src: DS-C6#s243g1 + DS-C6EH2#s031g1; type: synthesized -->
  3. 删除 22（领养）：所在叶 {19,21,22} 处于最少，删除后剩 {19,21}，低于最小值；此时兄弟有富余，可从左兄弟或从右兄弟领养（图中同时标注了"从左兄弟领养"这一方向选项）。图示采用从右兄弟领养：从 {23,25,26,27} 借出最小元素 23，该叶变为 {19,21,23}，右兄弟变为 {25,26,27}，父结点中对应分隔键由 23 更新为 25（索引结点变为 [8|19|25|30]）。 <!-- src: DS-C6#s244g1 + DS-C6EH2#s032g1; type: synthesized -->

### B+树的时间效益

- 对于 $N$ 个记录的数据集，最坏情况下有 $2N/L$ 个叶结点（都半满），最坏情况下树的深度为 $\log_{\lceil M/2 \rceil}(2N/L)$。 <!-- src: DS-C6#s245 + DS-C6EH2#s033; type: synthesized -->
- 一般 3–4 层的索引就能容纳很大的数据量。 <!-- src: DS-C6#s245 + DS-C6EH2#s033; type: synthesized -->
- 课件据此给出的经验数据：查找至多需要 5 次读磁盘；插入和删除比查找多一次写磁盘；如果需要结点的分裂或归并，至多再需要 4 次写磁盘。但分裂或归并是很少发生的，均摊到每个操作时可以忽略不计。 <!-- src: DS-C6#s245 + DS-C6EH2#s033; type: synthesized -->

### B树和B+树的比较

- 查找时间：B树的关键字和对应数据记录地址信息可能分布在（包括非叶子结点在内的）任何结点中，查找可能停止在任何一层，时间消耗小于等于树的高度，最差为树的高度；B+树由于关键字和对应数据记录地址关系全部存储在叶子结点中，查找必须从根到达叶子结点，时间消耗一定是树的高度。 <!-- src: DS-C6#s246 + DS-C6EH2#s034; type: synthesized -->
- 插入/删除时间：因B树和B+树中的查找时间不同而不同，但B树和B+树的插入、删除最差时间消耗都是树高度的 2 倍。 <!-- src: DS-C6#s246 + DS-C6EH2#s034; type: synthesized -->

### B+树便于按序遍历（叶子链表）

- 实现方式：用一个指针变量（头指针）保存第一个叶子结点的地址，每个叶子结点尾部增加一个指针指向右边相邻叶子结点的地址，最右一个叶子结点中的该指针指向空，这样便形成一个单链表。当需要按关键字大小顺序遍历原始数据文件中的所有数据时，顺着头指针访问单链表，便能实现原始数据的顺序遍历任务。 <!-- src: DS-C6#s247 + DS-C6EH2#s035; type: synthesized -->

### B+树规模计算（结点 = 磁盘块的设计）

- 设计原则：计算机读写磁盘通常一次为一个磁盘块；为提高磁盘访问效率，B+树中一个结点可以设计为一个磁盘块大小。 <!-- src: DS-C6EH2#s036; type: direct -->
- 假设条件：磁盘块大小 4KB（$4 \times 1024$ 字节）；数据记录中关键字 16 字节；每个原始数据 200 字节；磁盘块号 4 字节；一个整数 4 字节；原始数据文件中每个数据记录的地址 4 字节。 <!-- src: DS-C6EH2#s036; type: direct -->
- 中间结点的 M：按前述 M 阶 B+树定义，非叶中间结点最多 $M$ 个分支、$M-1$ 个关键字，再加关键字个数（一个整数），有 $16(M-1) + 4M + 4 \le 4 \times 1024$，得 $M \le 205$；因此中间结点最多 204 个关键字、最多 205 个分支。 <!-- src: DS-C6EH2#s036; type: direct -->
- 叶子结点的 L：每个叶子（数据结点）最多 $L$ 个数据记录、加上一个指向下一个数据结点的指针，有 $200L + 4 \le 4 \times 1024$，得 $L=20$，即叶子结点上可以有 $[10, 20]$ 个数据记录。 <!-- src: DS-C6EH2#s037; type: direct -->
- 结论：通常情况下 $L$ 远小于 $M$。 <!-- src: DS-C6EH2#s037; type: direct -->

## 哈希查找

### 基本概念

#### 哈希法（散列法）

- 哈希法也称散列法：不用按大小比较的办法，直接根据所求结点的关键字值 KEY 计算存储位置；理想/平均情况下查找可达 $O(1)$，但最坏情况会受冲突、装填因子和冲突解决方法影响而退化；**它不支持有关有序操作**。 <!-- src: DS-C6#s250 + DS-C6EH2#s039 + DS-C6EH2#s042 + DS-C6EH2#s050; type: synthesized -->
- 本部分内容组织：基本概念、哈希函数、冲突解决、哈希表类的实现。 <!-- src: DS-C6#s250 + DS-C6EH2#s039; type: synthesized -->
- 引入视频封面字幕："刚才我们见识了B加树在范围查询上无与伦比的统治力"。 <!-- src: DS-C6#s249; type: direct -->

#### 直接用关键字作下标的方案（理想情形）

- 假设所有数据元素的关键字都是较小的非负整数（0 到 65535），可用一个简单数组 a 实现集合（查找）操作： <!-- src: DS-C6#s251 + DS-C6EH2#s040; type: synthesized -->
  - 初始化：将下标为 0 到 65535 的数组 a 初始化为一个特殊的、表示单元为空的值；
  - insert(i)：将 i 存放到 a[i.key] 中；
  - find(i)：取出 a[i.key] 的值；
  - remove(i)：将 a[i.key] 重新设为空值。 <!-- src: DS-C6#s251 + DS-C6EH2#s040; type: synthesized -->
- 在上述假设下，每种操作的时间很明显是个常量。 <!-- src: DS-C6#s251 + DS-C6EH2#s040; type: synthesized -->

#### 方案的缺陷与解决思路

- 缺陷一：若关键字是 32 位整数而非 16 位整数，数组 a 必须能保存 40 亿个项，这是不实际的。 <!-- src: DS-C6#s252 + DS-C6EH2#s041; type: synthesized -->
- 缺陷二：若关键字不是整数而是字符串（有时甚至是更一般的信息），它们不能用来作为数组的下标。 <!-- src: DS-C6#s252 + DS-C6EH2#s041; type: synthesized -->
- 解决方案：
  - 问题一：用一个将大数字映射成较小的、更容易管理的数字的函数来达到目的；将一个项映射成一个较小下标的函数称为散列函数（hash function）；
  - 问题二：能将字符串解释为一个整数。 <!-- src: DS-C6#s252 + DS-C6EH2#s041; type: synthesized -->

### 哈希函数

#### 定义与选择标准

- 每个结点在表中的存储位置由一个函数 H 确定：该函数以结点的关键字值为参数，计算出该关键字对应结点的存储位置，称为哈希函数。 <!-- src: DS-C6#s253 + DS-C6EH2#s043; type: synthesized -->
- 哈希函数的值域为 $0 \sim m-1$（$m$ 为表的规模）。 <!-- src: DS-C6#s253 + DS-C6EH2#s043; type: synthesized -->
- 哈希函数的选择标准：① 计算速度快；② 散列地址尽可能均匀，使得冲突机会尽可能的少。 <!-- src: DS-C6#s253 + DS-C6EH2#s043; type: synthesized -->
- 常用的哈希函数共五种：1 直接地址法、2 除留余数法（列表页原文作"除留取余法"、后文标题作"除留余数法"，两套课件相同，原文如此）、3 数字分析法、4 平方取中法、5 折叠法。 <!-- src: DS-C6#s254 + DS-C6EH2#s044; type: synthesized -->

#### 直接地址法

- 形式：$H(key) = key$ 或 $H(key) = a \times key + b$。 <!-- src: DS-C6#s255 + DS-C6EH2#s045; type: synthesized -->
- 例：关键字集合 {100, 400, 600, 200, 800, 900}：取 H(x)=key（原文如此，x 与 key 记号混用）需要 901 个单元；取 H(x)=x/100 只需要 10 个单元——说明选取合适的线性变换可大幅压缩表空间。 <!-- src: DS-C6#s255ex1 + DS-C6EH2#s045ex1; type: synthesized -->

#### 除留余数法

- 形式：$H(key) = key\ \mathrm{MOD}\ p$ 或 $H(key) = key\ \mathrm{MOD}\ p + c$，其中 **p 为小于等于 m 的素数**。如 m = 1024，则取 p = 1019。 <!-- src: DS-C6#s256 + DS-C6EH2#s046; type: synthesized -->
- 这是最常用的方法，余数总在 $0 \sim p-1$ 之间。 <!-- src: DS-C6#s256 + DS-C6EH2#s046; type: synthesized -->
- 选取 p 为质数的理由（反例说明）：
  - 设 key 值都为奇数、选 p 为偶数，则 $H(key) = key\ \mathrm{MOD}\ p$ 的结果全为奇数，一半单元被浪费掉；
  - 设 key 值都为 5 的倍数、选 p 为 95，则结果只能是 0、5、10、15、……、90，4/5 的单元被浪费掉。 <!-- src: DS-C6#s256 + DS-C6EH2#s046; type: synthesized -->

#### 数字分析法

- 思想：对关键字集合中的所有关键字，分析每一位上数字分布，取数字分布均匀的位作为地址的组成部分。 <!-- src: DS-C6#s257 + DS-C6EH2#s047; type: synthesized -->
- 例：7 个 7 位关键字（按列①~⑦排列）3470524、3491587、3482596、3485570、3486505、3498558、3479571：第 1、2、5 列各关键字数字完全相同（恒为 3、4、5），对区分不同的关键字完全没有意义；第 3 列意义较小；于是可以只选择第 4、6、7 三列的值组成散列地址。 <!-- src: DS-C6#s257g1 + DS-C6EH2#s047g1; type: synthesized -->

#### 平方取中法

- 适用前提：关键字中各位的分布都比较均匀，但关键字的值域比数组规模大。做法：将关键字平方后，取其结果的中间各位作为散列函数值；由于中间各位和每一位数字都有关系，因此均匀分布的可能性较大。 <!-- src: DS-C6#s258 + DS-C6EH2#s048; type: synthesized -->
- 例：4731 × 4731 = 22,382,361；中间部分究竟选取几位依赖于散列表的单元总数：若散列表共 100 个单元，可选最中间的部分（第 4、5 位），关键字 4731 的散列地址可选为 82。 <!-- src: DS-C6#s258ex1 + DS-C6EH2#s048ex1; type: synthesized -->

#### 折叠法

- 适用前提：关键字相当长，以至于和散列表的单元总数相比大得多。做法：选取一个长度后，将关键字按此长度分组相加。 <!-- src: DS-C6#s259 + DS-C6EH2#s049; type: synthesized -->
- 例：关键字值为 542 242 241，按 3 位折叠：542+242+241=1025，抛弃进位，得到散列结果为 25。 <!-- src: DS-C6#s259ex1 + DS-C6EH2#s049ex1; type: synthesized -->

### 冲突问题与解决方法

#### 冲突（碰撞）的概念

- 要选择一个一一对应的哈希函数很困难，一般的哈希函数都是多对一的；当两个以上的关键字映射到同一个存储单元时，称为**冲突（碰撞）**。 <!-- src: DS-C6#s261 + DS-C6EH2#s051 + DS-C6EH2#s061; type: synthesized -->
- 引入视频封面字幕："刚才我们提到要极力避免多个包裹抢占同一个储物柜的尴尬情况"。 <!-- src: DS-C6#s260; type: direct -->

#### 冲突解决方法的分类

- **闭散列表**：利用本散列表中的空余单元，包括线性探测法、二次探测法、再次散列法。 <!-- src: DS-C6#s261 + DS-C6EH2#s051 + DS-C6EH2#s061 + DS-C6EH2#s063; type: synthesized -->
- **开散列表**：将碰撞的结点存放在散列表外的各自的线性表中（链接法）。 <!-- src: DS-C6#s261 + DS-C6EH2#s051 + DS-C6EH2#s061 + DS-C6EH2#s065; type: synthesized -->

#### 线性探测法

- 基本规则：当散列发生冲突时，探测下一个单元，直到发现一个空单元。 <!-- src: DS-C6#s263 + DS-C6EH2#s052; type: synthesized -->
- 引入视频封面字幕："了解了找空位的基本机制后"。 <!-- src: DS-C6#s262; type: direct -->
- 例：规模为 11 的散列表，散列函数 $H(key) = key\ \mathrm{MOD}\ 11$，依次插入 17、12、23、60、29、38：
  - 插入过程：17→6、12→1、60→5、29→7 直接入位；23 MOD 11 = 1 与 12 冲突，探测下一格放入 2 号单元；38 MOD 11 = 5 与 60 冲突，连续探测 6（被 17 占）、7（被 29 占）均被占，最终放入 8 号单元。
  - 最终表布局（下标 0~10）：

    | 下标 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
    |---|---|---|---|---|---|---|---|---|---|---|---|
    | 内容 | 空 | 12 | 23 | 空 | 空 | 60 | 17 | 29 | 38 | 空 | 空 |

  <!-- src: DS-C6#s263g1 + DS-C6#s263ex1 + DS-C6EH2#s052ex1 + DS-C6EH2#s052g1; type: synthesized -->

#### 删除和查找：迟删除

- 删除问题：一般来讲，删除某一元素先要找到该元素，然后把该空间的内容清空；但这样就给查找带来了问题，某些元素会查不到（清空的单元会中断/打断后续元素的探测链）。解决方案是采用**迟删除**：不真正删除元素，而是做一个删除标记。 <!-- src: DS-C6#s264 + DS-C6EH2#s053; type: synthesized -->
- 线性探测下的查找过程（伪代码）：
  1. 计算 addr = H(key)；
  2. while (addr 的内容非空 && 不等于要查找的键) ++addr；
  3. if (addr 内容为空) 没有找到 else 找到。 <!-- src: DS-C6#s264 + DS-C6EH2#s053; type: synthesized -->

### 闭散列表类的定义与实现

#### 设计要点

- 散列表必须支持的三个操作：插入、查找和删除。 <!-- src: DS-C6#s265 + DS-C6EH2#s054; type: synthesized -->
- 散列表的用户在使用散列表时必须提供一个函数，从数据元素中提取出关键字字段并把它转换成整型数；为此类中需要一个**数据成员 key，它是一个指向函数的指针**（参数是散列表的关键字，返回值是整型数）。 <!-- src: DS-C6#s265 + DS-C6EH2#s054 + DS-C6EH2#s056c1; type: synthesized -->
- 如果关键字类型可转换为整型数，可以直接用关键字本身；非整型关键字应由用户提供转换函数。key 仍需要值，于是设置一个缺省函数（defaultKey 直接返回该整型数本身）。 <!-- src: DS-C6#s265 + DS-C6#s267c1 + DS-C6EH2#s054 + DS-C6EH2#s056c1; type: synthesized -->
- 闭散列表用一个数组实现，数组的大小由用户定义散列表时指定。 <!-- src: DS-C6#s266 + DS-C6EH2#s055; type: synthesized -->
- 由于闭散列表中的删除是用迟删除的方法实现的，每个数组元素除了保存对应的数据元素之外，还必须保存一个数组元素的状态；因此必须定义数组元素的类型（结点类 node：data + state）。 <!-- src: DS-C6#s266 + DS-C6#s267c1 + DS-C6EH2#s055; type: synthesized -->

#### 闭散列表类定义

- 结点状态约定：state 取 0 表示 empty（空）、1 表示 active（活动）、2 表示 deleted（已删除，即迟删除标记）；结点构造时 state 初始化为 0。表规模缺省值为 101；构造函数第二个参数为提取关键字的函数指针，缺省为 defaultKey。 <!-- src: DS-C6#s267c1 + DS-C6EH2#s056c1; type: synthesized -->

<details>
<summary>代码</summary>

```cpp
template <class KEY, class OTHER>
class closeHashTable:public dynamicSearchTable<KEY, OTHER> {
private:
    struct node {                  //散列表的结点类
        SET <KEY, OTHER>  data;
        int    state;              //0 -- empty   1 -- active   2 – deleted
        node() {state = 0;}
    };
    node *array;
    int  size;
    int (*key)(const KEY &x);  // 数据成员key：指向函数的指针，
                               //参数是散列表的关键字，返回值是一个整型数
    static int defaultKey(const KEY &x) {return x;}
public:
    closeHashTable(int length = 101, int (*f)(const KEY &x) = defaultKey) ;
    ~closeHashTable() {delete [] array;}
    SET<KEY, OTHER> *find(const KEY &x) const;
    void insert(const SET<KEY, OTHER> &x);
    void remove(const KEY &x) ;
};
```

</details>
<!-- src: DS-C6#s267c1 + DS-C6EH2#s056c1; type: synthesized -->

#### 构造函数

<details>
<summary>代码</summary>

```cpp
template <class KEY, class OTHER>
closeHashTable<KEY, OTHER>::closeHashTable (int length, int (*f)(const KEY  &x) )
{
    size = length;
    array = new node[size];
    key = f;
}
```

</details>
<!-- src: DS-C6#s268c1 + DS-C6EH2#s057c1; type: synthesized -->

- 构造函数做三件事：记录表规模 size、按 size 动态申请结点数组（各单元 state 经 node 构造自动置 0 即空）、保存用户提供的关键字提取函数指针。 <!-- src: DS-C6#s268c1 + DS-C6#s267c1 + DS-C6EH2#s057c1; type: synthesized -->
- 模板参数约定：构造函数实现应与类定义保持双模板参数 `<KEY, OTHER>` 一致。 <!-- src: DS-C6#s267c1 + DS-C6#s268c1 + DS-C6EH2#s057c1; type: one-step-inferred -->

#### insert 函数的实现

<details>
<summary>代码</summary>

```cpp
template <class KEY, class OTHER>
void closeHashTable<KEY, OTHER>::insert(const SET<KEY, OTHER> &x)
{
    int initPos, pos ;
    initPos = pos = key(x.key) % size;
    do {
        if (array[pos].state != 1) {       // 找到空单元
            array[pos].data = x;
            array[pos].state = 1;
            return;
        }
        pos = (pos+1) % size;
    } while (pos != initPos);
}
```

</details>
<!-- src: DS-C6#s269c1 + DS-C6EH2#s058c1; type: synthesized -->

- 要点：从初始散列位置 initPos = key(x.key) % size 开始线性探测，用 pos = (pos+1) % size 回绕；判断 `state != 1` 即认为找到可用单元——空单元（0）和迟删除单元（2）都可被插入重用，写入后置 state=1；探测回到起点 initPos（绕表一圈）时循环结束。 <!-- src: DS-C6#s269c1 + DS-C6EH2#s058c1; type: synthesized -->

#### remove 函数的实现

<details>
<summary>代码</summary>

```cpp
template <class KEY, class OTHER>
void closeHashTable<KEY, OTHER>::remove(const KEY &x)
{      int initPos, pos ;
    initPos = pos = key(x) % size;
    do {
        if (array[pos].state == 0) return;
        if (array[pos].state == 1 && array[pos].data.key == x) {  // 找到，删除
            array[pos].state = 2;
            return;
        }
        pos = (pos+1) % size;
    } while (pos != initPos);
}
```

</details>
<!-- src: DS-C6#s270c1 + DS-C6EH2#s059c1; type: synthesized -->

- 要点：沿探测链查找，遇到 state==0（真空单元）即终止，说明元素不存在，直接返回；找到（state==1 且关键字相等）时只把 state 置 2（迟删除标记），不清除数据。 <!-- src: DS-C6#s270c1 + DS-C6EH2#s059c1; type: synthesized -->

#### find 函数的实现

<details>
<summary>代码</summary>

```cpp
template <class KEY, class OTHER>
SET<KEY, OTHER> *closeHashTable<KEY, OTHER>::find(const KEY &x) const
{       int initPos, pos ;
    initPos = pos = key(x) % size;
    do {
        if (array[pos].state == 0) return NULL;     // 没有找到
        if (array[pos].state == 1 && array[pos].data.key == x)    // 找到
            return &(array[pos].data);
        pos = (pos+1) % size;
    } while (pos != initPos);
    return NULL;
}
```

</details>
<!-- src: DS-C6#s271c1 + DS-C6EH2#s060c1; type: synthesized -->

- 要点：探测中遇 state==0 返回 NULL 判定失败；只有 state==1 且关键字相等才算找到（state==2 的迟删除单元不匹配但也不中断探测链，被跳过、继续向后探测），找到时返回该单元中 `data` 成员的地址；若绕表一圈仍未命中，也应返回 NULL。 <!-- src: DS-C6#s271c1 + DS-C6EH2#s060c1; type: synthesized -->

### 二次探测法

- 引入视频封面字幕："刚才探讨了线性探测中因为冲突顺延排布引发的删除漏洞"（本页为"二次探测法"视频页封面帧）。 <!-- src: DS-C6#s272; type: direct -->
- 二次探测法的地址序列：发生冲突时依次探测 $(k+1^2)\bmod m$, $(k+2^2)\bmod m$, $(k+3^2)\bmod m$, …（k 为初始散列地址，m 为表长；实际地址需对表长取模）。 <!-- src: DS-C6#s273 + DS-C6EH2#s062; type: synthesized -->
- 二次探测法需要回答的问题：①是否能保证每次探测到的是新单元？②是否能保证当表没有满时一定能插入？③地址的计算量是否太大？（DS-C6 原文在"需要回答的问题"下列为①②③三问；EH2 s062 把这三问分作两条项目符号排版——第一条含前两问、第二条含第三问，并未声明"只有两个问题"。） <!-- src: DS-C6#s273 + DS-C6EH2#s062; type: synthesized -->
- 定理：如果采用二次探测法，并且表的大小是一个素数，那么，如果表至少有一半是空的，新的元素总能被插入；而且，在插入过程中，没有一个单元被探测两次。（前提：表长为素数 + 表至少一半为空） <!-- src: DS-C6#s273 + DS-C6EH2#s062; type: synthesized -->
- 定理：不需要昂贵的乘法和除法就能实现二次探测法。 <!-- src: DS-C6#s273 + DS-C6EH2#s062; type: synthesized -->

### 再次散列法（双散列）

- 引入视频封面字幕："虽然二次探测缓解了线性探测的数据扎堆问题"（本页为"再次散列法"视频页封面帧）。 <!-- src: DS-C6#s274; type: direct -->
- 再次散列法使用两个散列函数 hash1 和 hash2：hash1 用来计算探测序列的起始地址；hash2 用来计算下一个探测位置的步长。 <!-- src: DS-C6#s275 + DS-C6EH2#s064; type: synthesized -->
- 采用第二个散列函数：第 i 次碰撞时，地址增量为 $f(i) = i \times hash2(x)$。 <!-- src: DS-C6#s275 + DS-C6EH2#s064; type: synthesized -->
- hash2 的选择非常重要：建议采用 $hash2(x) = R - (x \bmod R)$，其中 R 是小于表长的一个素数。 <!-- src: DS-C6#s275 + DS-C6EH2#s064; type: synthesized -->
- 设表长为 M、插入元素为 x，再次散列法的探测序列为：$hash1(x)$, $(hash1(x)+hash2(x)) \bmod M$, $(hash1(x)+2 \times hash2(x)) \bmod M$, …。 <!-- src: DS-C6#s275 + DS-C6EH2#s064; type: synthesized -->

### 开散列表（链地址法）

#### 基本思想与结构

- 开散列表是将所有散列到同一地址的元素链成一个单链表，因此需要定义一个单链表中的结点类。 <!-- src: DS-C6#s276 + DS-C6EH2#s066; type: synthesized -->
- 采用不带头结点的单链表。 <!-- src: DS-C6#s276 + DS-C6EH2#s066; type: synthesized -->
- 散列表保存在一个数组中，数组的每个元素是一个指针，指向对应单链表的首地址。 <!-- src: DS-C6#s276 + DS-C6EH2#s066; type: synthesized -->
- 开散列表的行为除构造函数、析构函数之外，还支持插入、删除和查找操作。 <!-- src: DS-C6#s276 + DS-C6EH2#s066; type: synthesized -->
- 结构示意图（按图转写）：左侧为竖排的指针数组，大多数单元为空指针（∧）；两个非空单元各自指向一条单链表，分别为 K1→K2→K3∧ 与 K4→K5→K6∧；图中标注这两条链各为"同义链，同一散列地址"，即同一条链上的元素具有相同的散列地址。 <!-- src: DS-C6#s276g1 + DS-C6EH2#s066g1; type: synthesized -->

#### 开散列表类的定义

<details>
<summary>代码</summary>

```cpp
template <class KEY, class OTHER>
class openHashTable:public dynamicSearchTable<KEY, OTHER> {
private:
    struct node { //开散列表中链表的结点类
        SET<KEY, OTHER>  data;
        node    *next;
        node (const SET<KEY, OTHER> &d, node *n = NULL)
        { data = d;  next = n; }
        node () {next = NULL;}
    };
    node **array;//指针数组
    int  size;
    int (*key)(const KEY &x);
    static int defaultKey(const KEY &x) { return x; }
public:
    openHashTable(int length = 101, int (*f)(const KEY &x) = defaultKey);
    ~openHashTable() ;
    SET<KEY, OTHER> *find(const KEY &x) const;
    void insert(const SET<KEY, OTHER> &x);
    void remove(const KEY &x) ;
};
```

</details>
<!-- src: DS-C6#s277c1 + DS-C6#s278c1 + DS-C6EH2#s067c1 + DS-C6EH2#s068c1; type: synthesized -->

- 类定义要点：私有成员包括结点类 node（数据域 data 与指针域 next，提供带参/无参两个构造函数）、指针数组 array（node**）、表长 size、把关键字转换为整数的函数指针 key，以及静态缺省函数 defaultKey（对可转换为 int 的关键字直接返回自身；其他关键字需提供自定义转换函数）；构造函数缺省表长为 101，缺省关键字转换函数为 defaultKey。 <!-- src: DS-C6#s277 + DS-C6#s278 + DS-C6EH2#s067 + DS-C6EH2#s068; type: synthesized -->

#### 构造函数

<details>
<summary>代码</summary>

```cpp
template <class KEY, class OTHER>
openHashTable<KEY, OTHER>::openHashTable (int length,  int (*f)(const KEY  &x) )
{
    size = length;
    array = new node*[size];
    key = f;
    for (int i = 0; i < size; ++i) array[i] = NULL;
}
```

</details>
<!-- src: DS-C6#s279c1 + DS-C6EH2#s069c1; type: synthesized -->

- 构造逻辑：记录表长、申请指针数组空间、保存关键字转换函数，并把数组所有单元初始化为 NULL（所有链表为空）。 <!-- src: DS-C6#s279 + DS-C6EH2#s069; type: synthesized -->

#### 析构函数

- 析构函数不仅要释放存放散列表的数组的空间，还要释放每个单链表中所有结点的空间。 <!-- src: DS-C6#s280 + DS-C6EH2#s070; type: synthesized -->

<details>
<summary>代码</summary>

```cpp
template <class KEY, class OTHER>
openHashTable<KEY, OTHER>::~openHashTable()
{
    node *p, *q;
    for (int i = 0; i< size; ++i) {
        p = array[i];
        while (p!=NULL) { q= p->next; delete p; p = q; } ;
    }
    delete [] array;
}
```

</details>
<!-- src: DS-C6#s280c1 + DS-C6EH2#s070c1; type: synthesized -->

#### insert 函数的实现

<details>
<summary>代码</summary>

```cpp
template <class KEY, class OTHER>
void openHashTable<KEY, OTHER>::insert(const SET<KEY, OTHER> &x)
{
    int pos ;
    node *p;
    pos = key(x.key) % size;
    array[pos] = new node(x, array[pos]);
}
```

</details>
<!-- src: DS-C6#s281c1 + DS-C6EH2#s071c1; type: synthesized -->

- insert 逻辑：先用 key(x.key) % size 计算散列地址 pos，然后将新结点以头插法插入对应单链表的表头（新结点的 next 指向原链表首结点）。代码中声明的局部变量 `node *p;` 未被使用（原文如此）。 <!-- src: DS-C6#s281 + DS-C6EH2#s071; type: synthesized -->

#### remove 函数的实现

<details>
<summary>代码</summary>

```cpp
template <class KEY, class OTHER>
void openHashTable<KEY, OTHER>::remove(const KEY &x)
{
    int  pos ;
    node *p, *q;
    pos = key(x) % size;
    if (array[pos] == NULL) return;
    p = array[pos];
    if (array[pos]->data.key == x) {                          // 删除第一个节点
        array[pos] = p->next;    delete p;    return;	   }
    while (p->next != NULL && !(p->next->data.key == x) ) p = p->next;
    if (p->next != NULL) {
        q = p->next;   p->next = q->next;   delete q;    }
}
```

</details>
<!-- src: DS-C6#s282c1 + DS-C6EH2#s072c1; type: synthesized -->

- remove 逻辑分三种情形：①计算散列地址，若该槽链表为空直接返回；②若待删元素是链表第一个结点，修改 array[pos] 指向次结点（表头指针后移）后删除该结点；③否则沿链查找待删结点的前驱 p，若找到（p->next != NULL）则用 q 暂存待删结点，绕过并 delete。由于单链表不带头结点，删除首结点需特殊处理。 <!-- src: DS-C6#s282 + DS-C6EH2#s072; type: synthesized -->

#### find 函数的实现

<details>
<summary>代码</summary>

```cpp
template <class KEY, class OTHER>
SET<KEY, OTHER> *openHashTable<KEY, OTHER> ::find(const KEY &x) const
{
    int pos ;
    node *p;
    pos = key(x) % size;
    p = array[pos];
    while (p != NULL && !(p->data.key == x) ) p = p->next;
    if (p == NULL) return NULL;
    else return &(p->data);
}
```

</details>
<!-- src: DS-C6#s283c1 + DS-C6EH2#s073c1; type: synthesized -->

- find 逻辑：计算散列地址 pos 后，沿 array[pos] 所指单链表顺序比较各结点的关键字；找到则返回结点中 `data` 成员的地址，链表走完仍未找到返回 NULL。 <!-- src: DS-C6#s283 + DS-C6EH2#s073; type: synthesized -->

### 课堂练习：闭散列表线性探测的插入与查找

- 题型设定：闭散列表地址空间 [0,5]，散列函数 $H(x) = x \bmod 6$，采用线性探测再散列解决冲突，依次插入 12, 36, 41, 52, 40，求插入后的散列表及查找 40 的比较次数。 <!-- src: DS-C6EH2#s074ex1; type: compressed -->
- 一般方法（插入）：逐个元素计算初始地址 H(x)；若该位置已被占用，则按线性探测向后逐格找（到表尾回绕到 0），放入第一个空单元。 <!-- src: DS-C6EH2#s074ex1; type: compressed -->
- 插入结果表： <!-- src: DS-C6EH2#s074t1; type: direct -->

  | 地址 | 0 | 1 | 2 | 3 | 4 | 5 |
  |---|---|---|---|---|---|---|
  | 元素 | 12 | 36 | 40 | 空 | 52 | 41 |

- 一般方法（查找与计数）：从 H(x) 开始，每检查一个位置算一次比较；不匹配则线性探测下一位置（含回绕），直到匹配或遇到空单元。查找 40 的过程：H(40)=4，检查位置 4（元素 52，不匹配）→位置 5（41，不匹配）→位置 0（12，不匹配）→位置 1（36，不匹配）→位置 2（40，匹配），共比较 5 次。 <!-- src: DS-C6EH2#s074ex1; type: direct -->
- 易错点：探测到表尾（位置 5）后必须回绕到位置 0 继续；比较次数包括初始地址那一次在内的每一次位置检查。 <!-- src: DS-C6EH2#s074ex1; type: compressed -->

## 本章小结

### 查找的基本概念

- 查找是在一组具有松散关系的元素集合中进行的。 <!-- src: DS-C6#s284 + DS-C6EH2#s075; type: synthesized -->

### 静态查找

- 静态查找：在很少进行插入、删除的一组数据中进行的查找。静态查找的数据集合最简单的存储方法是顺序存储；顺序存储时，若元素无序，可采用顺序查找，时间复杂度 $O(n)$；若元素有序，可采用折半查找，时间复杂度 $O(\log_2 n)$。 <!-- src: DS-C6#s284 + DS-C6EH2#s075; type: synthesized -->

### 动态查找

- 动态查找：在频繁进行插入、删除的一组数据中进行的查找，合适的存储方式是二叉查找树。二叉查找树在平衡的情况下，查找时间达 $O(\log_2 n)$，和有序表的折半查找时间消耗一样。 <!-- src: DS-C6#s285 + DS-C6EH2#s076; type: synthesized -->


### 外存查找：B 树与 B+ 树

- 对于数据量很大、数据只能存储在外存储器上的情况，可以利用多路查找树（如 B 树、B+ 树）为原始数据文件建立索引文件。 <!-- src: DS-C6#s286 + DS-C6EH2#s077; type: synthesized -->
- B 树：所有的关键字都分布在非叶子结点中，每个关键字在所有结点中只出现一次；每个关键字对应的原始数据记录地址附着在关键字后；叶子结点为空结点。 <!-- src: DS-C6#s286 + DS-C6EH2#s077; type: synthesized -->
- B+ 树：仅其中一些关键字分别分布在非叶子结点中，很多关键字在所有结点中不只出现一次；所有关键字及其对应的原始数据记录地址都分布在各个叶子结点中。相比而言 B+ 树比 B 树规模小，且支持按照关键字大小从小到大顺序遍历，故 B+ 树在建立索引文件时更加常用。 <!-- src: DS-C6#s286 + DS-C6EH2#s077; type: synthesized -->

### 哈希方法

- 以上方法都是基于关键字的比较，致力于减少关键字的比较次数；哈希方法试图完全摆脱关键字的比较，希望通过一个函数将关键字直接映射到哈希表中的某个地址上去。 <!-- src: DS-C6#s287 + DS-C6EH2#s078; type: synthesized -->
- 常见的哈希函数：直接寻址法（对关键字进行简单线性变换获得地址）、数据分析法（分析并抽取数据中某些位）、平方取中法（将数据自身变化如平方后再取某些中间位）、折叠法（将长关键字序列折叠相加后再分析处理）。 <!-- src: DS-C6#s287 + DS-C6EH2#s078; type: synthesized -->
- 理想的哈希函数是将不同的关键字映射到不同的地址上，但综合考虑到哈希表的负载因子，这样的函数比较难找，通常找到的哈希函数都会造成一定程度的冲突。常见的冲突解决办法有线性探测法、二次探测法和链地址法。 <!-- src: DS-C6#s288 + DS-C6EH2#s079; type: synthesized -->
