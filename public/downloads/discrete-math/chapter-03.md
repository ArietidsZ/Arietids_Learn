# 离散数学 · 集合、关系、函数与基数

> Arietids Learn · 个人课程复习笔记
> 在线阅读：https://learn.arietids.net/courses/discrete-math/chapter-03/

## Notation Used in These Notes

Symbols used throughout these notes:

| Symbol | Meaning |
|---|---|
| $x \in y$ / $x \notin y$ | membership / non-membership <!-- src: DM-N518#p001; type: direct --> |
| $x \subseteq y$ | subset (for any $z$, $z\in x \Rightarrow z\in y$) <!-- src: DM-N518#p001; type: direct --> |
| $x \cup y$, $x \cap y$, $x \setminus y$ | union, intersection, set difference <!-- src: DM-N518#p001; type: direct --> |
| $\varnothing$ | the empty set <!-- src: DM-N518#p001; type: direct --> |
| $\mathcal{P}(x)$ | power set <!-- src: DM-N518#p001; type: direct --> |
| $\bigcup x$ | general (big) union <!-- src: DM-N518#p001; type: direct --> |
| $x \times y$ | Cartesian product <!-- src: DM-N518#p001; type: direct --> |
| $a\,R\,b$ | $(a,b)\in R$ (relation notation) <!-- src: DM-N520#p001; ref: Notation 2; type: direct --> |
| $R^{-1}$, $S\circ R$ | inverse relation, composite relation <!-- src: DM-N520#p001; ref: Definition 4-5; type: direct --> |
| $[a]_R$ | equivalence class of $a$ under $R$ <!-- src: DM-N520#p002; ref: Definition 10; type: direct --> |
| $A \leqslant B$ | $A$ is dominated by $B$: there is an **injection** $A\to B$ <!-- src: DM-N603#p002; ref: Definition 2; type: direct --> |
| $A \approx B$ | $A$ is **equinumerous** to $B$: there is a **bijection** $A\to B$ <!-- src: DM-N603#p002; ref: Definition 3; type: direct --> |
| $A \not\approx B$ | $A$ is not equinumerous to $B$ <!-- src: DM-N615#p001; ref: Theorem 1; type: direct --> |
| $B^A = (A\to B)$, $2^A=(A\to\{0,1\})$, $A^2=A\times A$ | function-space / product shorthand <!-- src: DM-N608#p001; ref: Notation 2; type: direct --> |

---

## 1. Naive Set Theory (朴素集合论)

<!-- src: DM-N518 -->

### 1.1 Basic constructions

- An element of a set can itself be a set. <!-- src: DM-N518#p001; type: direct -->
- **Membership**: $x\in y$ means "$x$ is an element of $y$". <!-- src: DM-N518#p001; type: direct -->
- **Equality (extensionality)**: $x=y$ iff for any $z$, $z\in x \Leftrightarrow z\in y$. <!-- src: DM-N518#p001; type: direct -->
- **Subset**: $x\subseteq y$ iff for any $z$, if $z\in x$ then $z\in y$. <!-- src: DM-N518#p001; type: direct -->
- $x=y$ iff $x\subseteq y$ and $y\subseteq x$. <!-- src: DM-N518#p001; type: direct -->
- **Union**: $z\in x\cup y \Leftrightarrow z\in x \text{ or } z\in y$. <!-- src: DM-N518#p001; type: direct -->
- **Intersection**: $z\in x\cap y \Leftrightarrow z\in x \text{ and } z\in y$. <!-- src: DM-N518#p001; type: direct -->
- **Set-theoretic difference**: $z\in x\setminus y \Leftrightarrow z\in x \text{ and } z\notin y$. <!-- src: DM-N518#p001; type: direct -->
- **Empty set**: $\varnothing$ satisfies "for any $z$, $z\notin\varnothing$". <!-- src: DM-N518#p001; type: direct -->
- **Enumerated set**: $x\in\{a_1,a_2,a_3\} \Leftrightarrow x=a_1 \text{ or } x=a_2 \text{ or } x=a_3$. <!-- src: DM-N518#p001; type: direct -->
- **Set-builder**: $x\in\{y \mid y^2-3y+2=0\} \Leftrightarrow x^2-3x+2=0$. <!-- src: DM-N518#p001; type: direct -->
- **Power set (幂集)**: $y\in\mathcal{P}(x) \Leftrightarrow y\subseteq x$. <!-- src: DM-N518#p001; type: direct -->
- **General union**: $y\in\bigcup x \Leftrightarrow$ there exists $z$ such that $z\in x$ and $y\in z$. <!-- src: DM-N518#p001; type: direct -->
- **Indexed union**: $y\in\bigcup_{i=0}^{+\infty} x_i \Leftrightarrow$ there exists $i\in\mathbb{N}$ such that $y\in x_i$. <!-- src: DM-N518#p001; type: direct -->
- **Indexed intersection**: $y\in\bigcap_{i=0}^{+\infty} x_i \Leftrightarrow$ for any $i\in\mathbb{N}$, $y\in x_i$. <!-- src: DM-N518#p001; type: direct -->
- **Ordered pairs**: $(x,y)$. <!-- src: DM-N518#p001; type: direct -->
- **Equality of pairs**: $(x,y)=(u,v) \Leftrightarrow x=u \text{ and } y=v$. <!-- src: DM-N518#p001; type: direct -->
- **Cartesian product**: $x\times y = \{(u,v)\mid u\in x \text{ and } v\in y\}$. <!-- src: DM-N518#p001; type: direct -->

### 1.2 Example 1 — monotonicity of $\mathcal{P}$, $\bigcup$ and $A=\bigcup\mathcal{P}(A)$

Claims: (a) if $A\subseteq B$ then $\mathcal{P}(A)\subseteq\mathcal{P}(B)$; (b) if $A\subseteq B$ then $\bigcup A\subseteq\bigcup B$; (c) $A=\bigcup\mathcal{P}(A)$. <!-- src: DM-N518#p001ex1; type: direct -->

- **(a) Method**: take an arbitrary element $X\in\mathcal{P}(A)$, so $X\subseteq A$; since $A\subseteq B$, $X\subseteq B$, hence $X\in\mathcal{P}(B)$. <!-- src: DM-N518#p001ex1; type: compressed -->
- **(b) Method**: take $x\in\bigcup A$; there is $Y\in A$ with $x\in Y$; since $A\subseteq B$, $Y\in B$, so $x\in\bigcup B$. <!-- src: DM-N518#p002ex1; type: compressed -->
- **(c) Method**: $(\subseteq)$ for $x\in A$, the singleton $\{x\}\subseteq A$ so $\{x\}\in\mathcal{P}(A)$, and $x\in\{x\}$ gives $x\in\bigcup\mathcal{P}(A)$. $(\supseteq)$ for $x\in\bigcup\mathcal{P}(A)$ there is $Y\in\mathcal{P}(A)$ with $x\in Y$; $Y\subseteq A$ so $x\in A$. <!-- src: DM-N518#p002ex1; type: compressed -->
- **Transferable pattern**: prove set equality $S=T$ by the two inclusions $S\subseteq T$ and $T\subseteq S$; prove an inclusion by taking an arbitrary element and unfolding the membership definitions. <!-- src: DM-N518#p001ex1 + DM-N518#p002ex1; type: synthesized -->

### 1.3 Example 2 — $\mathcal{P}$ over $\cap$, and $\times$ over $\bigcup$

Claims: (a) $\mathcal{P}(A)\cap\mathcal{P}(B)=\mathcal{P}(A\cap B)$; (b) $A\times\bigcup B = \bigcup\{A\times X \mid X\in B\}$. <!-- src: DM-N518#p002ex2; type: direct -->

- **(a)** $(\subseteq)$ $X\in\mathcal{P}(A)\cap\mathcal{P}(B)$ gives $X\subseteq A$ and $X\subseteq B$, so every $a\in X$ lies in $A\cap B$, hence $X\subseteq A\cap B$, i.e. $X\in\mathcal{P}(A\cap B)$. $(\supseteq)$ $X\subseteq A\cap B$ gives $X\subseteq A$ and $X\subseteq B$. <!-- src: DM-N518#p002ex2; type: compressed; note: 原文 (⇒) 起手笔误 P(A)∩P(A)、(⇐) 收尾笔误 X∈P(A∩B),此处按语义订正为 P(A)∩P(B) -->
- **(b)** $(\subseteq)$ for $(a,x)\in A\times\bigcup B$, $x\in\bigcup B$ gives some $X\in B$ with $x\in X$, so $(a,x)\in A\times X$; the key step is $A\times X\in\{A\times X\mid X\in B\}$, hence $(a,x)\in\bigcup\{A\times X\mid X\in B\}$. $(\supseteq)$ reverse: an element of the big union lies in some $A\times X$ with $X\in B$, write it as $(a,x)$ with $a\in A$, $x\in X\subseteq\bigcup B$. <!-- src: DM-N518#p002ex2; type: compressed; note: 原文该关键步多写一个 ⋃(写成 A×X∈⋃{A×X|X∈B}),应为 ∈{A×X|X∈B},此处按语义订正 -->

---

## 2. Binary Relations

<!-- src: DM-N520 -->

### 2.1 Definition

- **Definition**: subsets of $A\times B$ are **binary relations from $A$ to $B$**; subsets of $A\times A$ are also called **binary relations on $A$**. <!-- src: DM-N520#p001; ref: Definition 1; type: direct -->
- **Notation**: write $a\,R\,b$ for $(a,b)\in R$. <!-- src: DM-N520#p001; ref: Notation 2; type: direct -->

### 2.2 Properties of a relation $R$ on $A$

- **reflexive on $A$** (自反性): $\forall a\in A.\ (a\,R\,a)$. <!-- src: DM-N520#p001; ref: Definition 3; type: direct -->
- **symmetric** (对称性): $\forall a,b\in A.\ \text{if } a\,R\,b \text{ then } b\,R\,a$. <!-- src: DM-N520#p001; ref: Definition 3; type: direct -->
- **antisymmetric** (反对称性): $\forall a,b\in A.\ \text{if } a\,R\,b \text{ and } b\,R\,a \text{ then } a=b$. <!-- src: DM-N520#p001; ref: Definition 3; type: direct -->
- **transitive** (传递性): $\forall a,b,c\in A.\ \text{if } a\,R\,b \text{ and } b\,R\,c \text{ then } a\,R\,c$. <!-- src: DM-N520#p001; ref: Definition 3; type: direct -->

### 2.3 Operators

- **Inverse**: if $R\subseteq A\times B$, then $R^{-1}=\{(x,y)\in B\times A \mid y\,R\,x\}$. <!-- src: DM-N520#p001; ref: Definition 4; type: direct -->
- **Composition**: if $R\subseteq A\times B$ and $S\subseteq B\times C$, then $S\circ R := \{(x,z)\in A\times C \mid \exists y\,(x\,R\,y \wedge y\,S\,z)\}$. <!-- src: DM-N520#p001; ref: Definition 5; type: direct -->
- **Theorem 6**: $(R^{-1})^{-1}=R$; $(S\circ R)^{-1}=R^{-1}\circ S^{-1}$; $R\circ(S\circ T)=(R\circ S)\circ T$ (associativity). <!-- src: DM-N520#p001; ref: Theorem 6; type: direct -->
- **Theorem 7**: $R\circ(S\cup T)=(R\circ S)\cup(R\circ T)$. <!-- src: DM-N520#p001; ref: Theorem 7; type: direct -->
- **Theorem 8 (characterizations)**, with $I_A:=\{(a,b)\in A\times A\mid a=b\}$: <!-- src: DM-N520#p001; ref: Theorem 8; type: direct -->
  - $R$ reflexive on $A$ iff $I_A\subseteq R$. <!-- src: DM-N520#p001; ref: Theorem 8; type: direct -->
  - $R$ symmetric iff $R=R^{-1}$. <!-- src: DM-N520#p001; ref: Theorem 8; type: direct -->
  - $R$ transitive iff $R\circ R\subseteq R$. <!-- src: DM-N520#p001; ref: Theorem 8; type: direct -->
  - $R$ antisymmetric iff $R\cap R^{-1}\subseteq I_A$. <!-- src: DM-N520#p001; ref: Theorem 8; type: direct -->

---

## 3. Equivalence Relations, Classes, and Partitions

<!-- src: DM-N520#p002 + DM-N525 -->

### 3.1 Equivalence relations and classes

- **Definition**: $R\subseteq A\times A$ is an **equivalence relation on $A$** if it is reflexive, symmetric, and transitive. <!-- src: DM-N520#p002; ref: Definition 9; type: direct -->
- **Equivalence class**: for an equivalence relation $R$ on $A$ and $a\in A$, $[a]_R:=\{b\in A\mid a\,R\,b\}$; $a$ is a **representative element** of $[a]_R$. <!-- src: DM-N520#p002; ref: Definition 10; type: direct -->
- **Theorem 11**: for an equivalence relation $R$ and $a,b\in A$, $\ a\,R\,b \Leftrightarrow [a]_R=[b]_R$. <!-- src: DM-N520#p002; ref: Theorem 11; type: direct -->
  - $(\Rightarrow)$ for any $c$, $c\in[a]_R \Leftrightarrow a\,R\,c \Leftrightarrow b\,R\,c \Leftrightarrow c\in[b]_R$ (middle step uses $a\,R\,b$ with symmetry+transitivity). <!-- src: DM-N520#p002; ref: Theorem 11; type: compressed -->
  - $(\Leftarrow)$ by reflexivity $b\in[b]_R=[a]_R$, hence $a\,R\,b$. <!-- src: DM-N520#p002; ref: Theorem 11; type: compressed -->
- **Theorem 12**: for an equivalence relation $R$ and $a,b\in A$, $\ a\,R\,b \Leftrightarrow [a]_R\cap[b]_R\neq\varnothing$. <!-- src: DM-N520#p002; ref: Theorem 12; type: direct -->
  - $(\Rightarrow)$ $a\,R\,b$ gives $[a]_R=[b]_R$, and $a\in[a]_R$ so the (equal) class is nonempty. <!-- src: DM-N520#p002; ref: Theorem 12; type: compressed -->
  - $(\Leftarrow)$ if $c\in[a]_R\cap[b]_R$, then $a\,R\,c$ and $b\,R\,c$, so $[a]_R=[c]_R=[b]_R$, hence $a\,R\,b$. <!-- src: DM-N520#p002; ref: Theorem 12; type: compressed -->

### 3.2 Partitions

- **Partition**: $P\subseteq\mathcal{P}(A)$ is a **partition of $A$** if (i) $\forall B\in P.\ B\neq\varnothing$; (ii) $\forall B,B'\in P.\ \text{if } B\neq B' \text{ then } B\cap B'=\varnothing$ (pairwise disjoint); (iii) $\bigcup P=A$. <!-- src: DM-N525#p001; ref: Definition 1; type: direct -->
- **Theorem 2 (partition $\Rightarrow$ equivalence relation)**: if $P$ is a partition of $A$, then $R=\{(a,b)\in A\times A\mid \exists B\in P.\ a\in B \text{ and } b\in B\}$ is an equivalence relation on $A$, and $P$ is exactly the set of all equivalence classes of $R$, i.e. $P=\{[a]_R\mid a\in A\}$. <!-- src: DM-N525#p001; ref: Theorem 2; type: direct -->
  - reflexive: each $a\in A$ lies in some $B\in P$ (since $\bigcup P=A$), so $a\,R\,a$. <!-- src: DM-N525#p001; ref: Theorem 2; type: compressed -->
  - symmetric: from the symmetric form of $R$'s definition. <!-- src: DM-N525#p001; ref: Theorem 2; type: compressed -->
  - transitive: $a\,R\,b$ and $b\,R\,c$ give blocks $B_1,B_2\in P$ with $a,b\in B_1$ and $b,c\in B_2$; blocks of a partition are identical or disjoint, and $b\in B_1\cap B_2$ forces $B_1=B_2$, so $a\,R\,c$. <!-- src: DM-N525#p001; ref: Theorem 2; type: compressed -->
  - $P=\{[a]_R\}$: each block $B\in P$ is nonempty, pick $a\in B$, then $B=[a]_R$; conversely each $a\in A$ lies in some block $B$ and $[a]_R=B$. <!-- src: DM-N525#p001; ref: Theorem 2; type: compressed -->

---

## 4. Closures: Transitive and Reflexive-Transitive

<!-- src: DM-N601#p001 + DM-N601#p002 -->

### 4.1 Transitive closure (传递闭包)

- **Definition 1 (universal/order-theoretic form)**: for a relation $R$ on $A$, $R'$ is the transitive closure of $R$ if (i) $R\subseteq R'$; (ii) $R'$ is transitive; (iii) for every $T$, if $R\subseteq T$ and $T$ is transitive, then $R'\subseteq T$. (I.e. $R'$ is the **smallest** transitive relation containing $R$.) <!-- src: DM-N601#p001; ref: Definition 1; type: direct -->
- **Definition 2 (constructive form)**: $R^n$ is the $n$-fold composition of $R$, and $R^+$ is the transitive closure: <!-- src: DM-N601#p001; ref: Definition 2; type: direct -->
  - $R^1 \triangleq R$; <!-- src: DM-N601#p001; ref: Definition 2; type: direct -->
  - $R^{n+1} \triangleq R^n\circ R$; <!-- src: DM-N601#p001; ref: Definition 2; type: direct -->
  - $R^+ \triangleq \bigcup_{n\in\mathbb{Z}^+} R^n$. <!-- src: DM-N601#p001; ref: Definition 2; type: direct -->
  - Remark (原文): the textbook writes $R^*$, but it should generally be written $R^+$. <!-- src: DM-N601#p001; ref: Definition 2; type: direct -->
- **Theorem 3**: the two definitions above are equivalent. <!-- src: DM-N601#p001; ref: Theorem 3; type: direct -->

Supporting lemmas:

- **Lemma 4 (monotonicity of $\circ$)**: if $R_1\subseteq R_1'$ and $R_2\subseteq R_2'$, then $R_1\circ R_2\subseteq R_1'\circ R_2'$. <!-- src: DM-N601#p001; ref: Lemma 4; type: direct -->
- **Lemma 5**: if $R_n\subseteq T$ for every $n$, then $\bigcup_n R_n\subseteq T$ (stated for an arbitrary indexed family $\{R_n\}$; later instantiated with $R_n=R^n$). <!-- src: DM-N601#p001; ref: Lemma 5; type: direct -->
- **Lemma 6**: $R\subseteq R^+$. <!-- src: DM-N601#p001; ref: Lemma 6; type: direct -->
- **Lemma 7**: $R^n\circ R^m = R^{n+m}$. <!-- src: DM-N601#p001; ref: Lemma 7; type: direct -->
- **Lemma 8**: $R^+$ is transitive. Proof: $a\,R^+\,b$ and $b\,R^+\,c$ give $n,m$ with $a\,R^n\,b$ and $b\,R^m\,c$; then $a\,R^{n+m}\,c$ (Lemma 7), so $a\,R^+\,c$. <!-- src: DM-N601#p001; ref: Lemma 8; type: direct -->
- **Lemma 9**: if $R\subseteq T$ and $T$ is transitive, then $R^+\subseteq T$. Proof by induction: $R^1\subseteq T$; if $R^n\subseteq T$ then $R^{n+1}=R^n\circ R\subseteq T\circ T\subseteq T$ (transitivity); hence $R^+=\bigcup_{n\in\mathbb{Z}^+}R^n\subseteq T$. <!-- src: DM-N601#p001 + DM-N601#p002; ref: Lemma 9; type: direct -->
- **Lemma 10**: there is at most one least relation that is a superset of $R$ and is transitive. <!-- src: DM-N601#p002; ref: Lemma 10; type: direct -->
- Adding these lemmas together proves Theorem 3. <!-- src: DM-N601#p002; type: direct -->

### 4.2 Reflexive transitive closure (自反传递闭包)

- **Definition 11 (universal form)**: $R'$ is the reflexive transitive closure of $R$ if (i) $R\subseteq R'$; (ii) $R'$ transitive; (iii) $R'$ reflexive; (iv) for every $T$, if $R\subseteq T$, $T$ transitive and $T$ reflexive, then $R'\subseteq T$. (原文该普遍形用 $R'$ 记闭包,构造形 $R^*$ 见 Definition 12。) <!-- src: DM-N601#p002; ref: Definition 11; type: direct -->
- **Definition 12 (constructive form)**: $R^0\triangleq I_A=\{(a,a)\mid a\in A\}$, and $R^*\triangleq\bigcup_{n\in\mathbb{N}}R^n$ (so the index starts at $0$, adding the identity for reflexivity). <!-- src: DM-N601#p002; ref: Definition 12; type: direct -->
- **Theorem 13**: the two definitions of the reflexive transitive closure are equivalent. <!-- src: DM-N601#p002; ref: Theorem 13; type: direct -->

---

## 5. Functions

<!-- src: DM-N601#p002 + DM-N601#p003 -->

### 5.1 Definition

- **Definition (function)**: a relation $F\subseteq A\times B$ is a **function** from $A$ into $B$ iff (i) $\forall x\in A.\ \exists y.\ (x\,F\,y)$ (totality), and (ii) $\forall x\forall y\forall y'.\ (\text{if } x\,F\,y \text{ and } x\,F\,y' \text{ then } y=y')$ (single-valuedness). $A$ is the **domain**, $B$ the **codomain**. <!-- src: DM-N601#p002; ref: Definition 14; type: direct -->
- **Notation**: write $F:A\to B$ for a function from $A$ into $B$; $F(x)$ is the unique element with $(x,F(x))\in F$. <!-- src: DM-N601#p002; ref: Notation 15-16; type: direct -->
- **Theorem 17 (function extensionality)**: for $F,G:A\to B$, $\ F=G \Leftrightarrow \forall x\in A.\ F(x)=G(x)$. <!-- src: DM-N601#p002; ref: Theorem 17; type: direct -->
- **Theorem 18 (composition is a function)**: for $F:B\to C$ and $G:A\to B$, $F\circ G$ is a function and $(F\circ G)(x)=F(G(x))$ for all $x\in A$. <!-- src: DM-N601#p002; ref: Theorem 18; type: direct -->

### 5.2 Special classes of functions

For $f:A\to B$: <!-- src: DM-N601#p003; ref: Definition 19; type: direct -->

- **one-to-one / injection (单射)**: $\forall a,a'\in A.\ \text{if } f(a)=f(a') \text{ then } a=a'$. <!-- src: DM-N601#p003; ref: Definition 19; type: direct -->
- **onto / surjection (满射)**: $\forall b\in B.\ \exists a\in A.\ f(a)=b$. <!-- src: DM-N601#p003; ref: Definition 19; type: direct -->
- **bijection (one-to-one correspondence, 双射)**: both an injection and a surjection. <!-- src: DM-N601#p003; ref: Definition 19; type: direct -->
- **Theorem 20 (composition)**, for $F:B\to C$, $G:A\to B$: <!-- src: DM-N601#p003; ref: Theorem 20; type: direct -->
  - $F,G$ injections $\Rightarrow F\circ G$ injection. <!-- src: DM-N601#p003; ref: Theorem 20; type: direct -->
  - $F,G$ surjections $\Rightarrow F\circ G$ surjection. <!-- src: DM-N601#p003; ref: Theorem 20; type: direct -->
  - $F\circ G$ injection $\Rightarrow G$ injection (only the inner map is forced). <!-- src: DM-N601#p003; ref: Theorem 20; type: direct -->
  - $F\circ G$ surjection $\Rightarrow F$ surjection (only the outer map is forced). <!-- src: DM-N601#p003; ref: Theorem 20; type: direct -->
- **Theorem 21**: if $F:A\to B$ is a bijection, then $F^{-1}\subseteq B\times A$ is also a bijection. <!-- src: DM-N601#p003; ref: Theorem 21; type: direct -->

---

## 6. The Schröder–Bernstein Theorem

<!-- src: DM-N603#p001 -->

- **Theorem 1 (Schröder–Bernstein)**: if $f:A\to B$ and $g:B\to A$ are both injections, then there is a bijection from $A$ into $B$. <!-- src: DM-N603#p001; ref: Theorem 1; type: direct -->
- **Key construction** (the transferable idea — "back-and-forth chasing through $g$'s non-image"): <!-- src: DM-N603#p001; type: compressed -->
  - $C_0=\{a\in A\mid \forall b\in B.\ g(b)\neq a\}$ — the elements of $A$ outside the range of $g$. <!-- src: DM-N603#p001; type: direct -->
  - $D_0=\{f(a)\mid a\in C_0\}$. <!-- src: DM-N603#p001; type: direct -->
  - $C_1=\{a\in A\setminus C_0 \mid \forall b\in B\setminus D_0.\ g(b)\neq a\}$; one shows $C_1=\{g(b)\mid b\in D_0\}$. <!-- src: DM-N603#p001; type: direct -->
  - $D_1=\{f(a)\mid a\in C_1\}$, and in general $C_{n+1}=\{a\in A\setminus\bigcup_{i=0}^n C_i \mid \forall b\in B\setminus\bigcup_{i=0}^n D_i.\ g(b)\neq a\}$, $D_{n+1}=\{f(a)\mid a\in C_{n+1}\}$, with $C_{n+1}=\{g(b)\mid b\in D_n\}$. <!-- src: DM-N603#p001; type: compressed -->
  - Define <!-- src: DM-N603#p001; type: direct -->
    $$
    h(a)=\begin{cases} f(a), & a\in\bigcup_{i=0}^{\infty} C_i\\ b \text{ s.t. } g(b)=a, & a\in A\setminus\bigcup_{i=0}^{\infty} C_i\end{cases}
    $$
    
- **Why $h$ is a bijection**: <!-- src: DM-N603#p001; type: compressed -->
  - injection (three cases): both in the $\bigcup C_i$ branch — then $f(a_1)=f(a_2)$ so $a_1=a_2$ ($f$ injective); mixed branch — if $a_1\in A\setminus\bigcup_i C_i$ and $a_2\in C_n$, then $f(a_2)\in D_n$ and $g(f(a_2))\in C_{n+1}$, so $a_1=g(h(a_1))=g(h(a_2))=g(f(a_2))\in C_{n+1}$, a contradiction (so no collision across branches); both in the complement branch — then $g(h(a_1))=a_1$ and $g(h(a_2))=a_2$ give $a_1=a_2$. <!-- src: DM-N603#p001; type: compressed -->
  - surjection: if $b\in D_n$ there is $a\in C_n$ with $f(a)=b$; if $b\in B\setminus\bigcup_i D_i$, set $a=g(b)$, which must lie in $A\setminus\bigcup_i C_i$ (otherwise $a\in C_n$ forces $b\in D_n$, contradiction), and then $h(a)=b$. <!-- src: DM-N603#p001; type: compressed -->

---

## 7. Equinumerosity and Cardinal Comparison

<!-- src: DM-N603#p002 + DM-N608#p001 -->

### 7.1 Definitions

- **Domination**: $A\leqslant B$ if there exists an **injection** from $A$ into $B$. <!-- src: DM-N603#p002; ref: Definition 2; type: direct -->
- **Equinumerosity**: $A\approx B$ if there exists a **bijection** from $A$ into $B$. <!-- src: DM-N603#p002; ref: Definition 3; type: direct -->

### 7.2 Basic facts

- **Theorem 4**: $[0,1]\approx[0,1)$. Proof 1: by Schröder–Bernstein. Proof 2: explicit bijection $f(x)=x/2$ if $x\in\{1,\tfrac12,\tfrac14,\tfrac18,\dots\}$, and $f(x)=x$ otherwise (shift the dyadic chain to drop the endpoint $1$). <!-- src: DM-N603#p002; ref: Theorem 4; type: direct -->
- **Theorem 5**: $\mathbb{N}\approx\mathbb{N}\times\mathbb{N}$. <!-- src: DM-N603#p002; ref: Theorem 5; type: direct -->
- **Theorem 6 ($\approx$ behaves like an equivalence relation)**: $A\approx A$; if $A\approx B$ then $B\approx A$; if $A\approx B$ and $B\approx C$ then $A\approx C$. <!-- src: DM-N603#p002; ref: Theorem 6; type: direct -->
- **Theorem 7 (products)**: $A\times B\approx B\times A$; if $A_1\approx A_2$ and $B_1\approx B_2$ then $A_1\times B_1\approx A_2\times B_2$. <!-- src: DM-N603#p002; ref: Theorem 7; type: direct -->
  - constructions: $F(a,b)=(b,a)$ is the swap bijection; for the second part, bijections $f:A_1\to A_2$, $g:B_1\to B_2$ give $h(x,y)=(f(x),g(y))$. <!-- src: DM-N603#p002; ref: Theorem 7; type: compressed -->
- **Corollary 8**: $\mathbb{N}\approx\mathbb{Q}$ and $\mathbb{N}\times\mathbb{N}\times\mathbb{N}\approx\mathbb{N}$. <!-- src: DM-N603#p002; ref: Corollary 8; type: direct -->
  - via $\mathbb{N}\leqslant\mathbb{Q}\leqslant\mathbb{Z}^+\times\mathbb{Z}\approx\mathbb{N}\times\mathbb{N}\approx\mathbb{N}$, and $(\mathbb{N}\times\mathbb{N})\times\mathbb{N}\approx\mathbb{N}\times\mathbb{N}\approx\mathbb{N}$ (Schröder–Bernstein turns the $\leqslant$-chain into $\approx$). <!-- src: DM-N603#p002; ref: Corollary 8; type: direct -->

### 7.3 Equinumerosity of function spaces (N608)

**Theorem 1** collects the function-space identities (here $(A\to B)$ is the set of all functions from $A$ to $B$): <!-- src: DM-N608#p001; ref: Theorem 1; type: direct -->

- if $A_1\approx A_2$ and $B_1\approx B_2$, then $(A_1\to B_1)\approx(A_2\to B_2)$; <!-- src: DM-N608#p001; ref: Theorem 1; type: direct -->
- if $A_1\leqslant A_2$ and $B_1\leqslant B_2$, then $(A_1\to B_1)\leqslant(A_2\to B_2)$ when $B_2\neq\varnothing$; if $B_2=\varnothing$, this conclusion also holds except in the edge case $A_1=\varnothing$ and $A_2\neq\varnothing$. <!-- src: DM-N608#p001; ref: Theorem 1; type: direct -->
- **currying**: $((A\times B)\to C)\approx(A\to(B\to C))$; <!-- src: DM-N608#p001; ref: Theorem 1; type: direct -->
- **pairing**: $(A\to B\times C)\approx(A\to B)\times(A\to C)$; <!-- src: DM-N608#p001; ref: Theorem 1; type: direct -->
- $(\{0,1\}\to A)\approx A\times A$; <!-- src: DM-N608#p001; ref: Theorem 1; type: direct -->
- if $A\approx B$, then $\mathcal{P}(A)\approx\mathcal{P}(B)$; <!-- src: DM-N608#p001; ref: Theorem 1; type: direct -->
- $(A\to\{0,1\})\approx\mathcal{P}(A)$. <!-- src: DM-N608#p001; ref: Theorem 1; type: direct -->

Proof techniques (the transferable bijection constructions): <!-- src: DM-N608#p001; ref: Theorem 1; type: compressed -->

- relabel domain/codomain by $H(h)=g\circ h\circ f^{-1}$ (uses $f,g$ bijections). <!-- src: DM-N608#p001; ref: Theorem 1; type: compressed -->
- for the $\leqslant$ version with $B_2\neq\varnothing$, pick $b\in B_2$ and extend outside $f[A_1]$, using injectivity of $f$ (well-definedness) and $g$ (injectivity of $H$); the $B_2=\varnothing$ case must be checked separately as above. <!-- src: DM-N608#p001; ref: Theorem 1; type: compressed -->
- currying via $H(f)(a)(b)=f(a,b)$; pairing via $H(f,g)(a)=(f(a),g(a))$; $(\{0,1\}\to A)\approx A\times A$ via $H(f)=(f(0),f(1))$; power-set monotonicity ($A\approx B$ by a bijection $f$ $\Rightarrow \mathcal{P}(A)\approx\mathcal{P}(B)$) via $H(X)=\{f(a)\mid a\in X\}$; and $(A\to\{0,1\})\approx\mathcal{P}(A)$ via the indicator map $H(f)=\{a\in A\mid f(a)=1\}$. <!-- src: DM-N608#p001; ref: Theorem 1; type: compressed -->
- **Notation**: $A^2:=A\times A$, $A^3:=A\times A\times A$, …; $2^A:=(A\to\{0,1\})$ and $B^A:=(A\to B)$. <!-- src: DM-N608#p001; ref: Notation 2; type: direct -->

---

## 8. Countable Sets

<!-- src: DM-N603#p002 + DM-N603#p003 -->

- **Definition**: a set $A$ is **countable** if it is equinumerous to $\mathbb{N}$ ($A\approx\mathbb{N}$). <!-- src: DM-N603#p002; ref: Definition 9; type: direct -->
- **Example 10 (countable sets)**: $\mathbb{N}$; $\mathbb{Z}^+$; $\mathbb{Z}$; $\{n\in\mathbb{N}\mid n \text{ is even}\}$; $\mathbb{N}\times\mathbb{N}$; $\mathbb{N}\times\mathbb{N}\times\mathbb{N}$; $\mathbb{Q}$. <!-- src: DM-N603#p002 + DM-N603#p003; ref: Example 10; type: direct -->
- **Theorem 11**: the set of finite sequences of natural numbers is countable. <!-- src: DM-N603#p003; ref: Theorem 11; type: direct -->
- **Corollary 12**: each of the following is countable — the set of strings (of finite length); the set of integer arithmetic expressions; the set of polynomials with integer coefficients (整系数多项式); the set of algebraic numbers (代数数,整系数多项式的根). <!-- src: DM-N603#p003; ref: Corollary 12; type: direct -->

---

## 9. Uncountable Sets and Cantor's Theorem

<!-- src: DM-N615#p001 + DM-N615#p002 -->

- **Theorem 1 (Cantor's Theorem)**: for any set $X$, $\ X\not\approx\mathcal{P}(X)$. <!-- src: DM-N615#p001; ref: Theorem 1; type: direct -->
  - **Proof by contradiction (Cantor's diagonal argument)**: suppose $\theta:X\to\mathcal{P}(X)$ is a bijection. Define $Y:=\{x\in X\mid x\notin\theta(x)\}\in\mathcal{P}(X)$. Let $y$ be the unique element with $\theta(y)=Y$. Then $y\in Y \Rightarrow y\notin\theta(y)=Y$, and $y\notin Y \Rightarrow y\in\theta(y)=Y$ — contradiction. <!-- src: DM-N615#p001; ref: Theorem 1; type: direct -->
- **Theorem 2**: $(A\to\{0,1\})\approx\mathcal{P}(A)$. Proof: $F(f)=\{a\in A\mid f(a)=1\}$ is a bijection (injective because $f$ is determined by which points map to $1$; surjective because any $X\subseteq A$ is hit by its indicator function). <!-- src: DM-N615#p001; ref: Theorem 2; type: direct -->
- **Corollary 3**: $\mathcal{P}(\mathbb{N})$ is uncountable; $(\mathbb{N}\to\{0,1\})$ is uncountable. <!-- src: DM-N615#p001; ref: Corollary 3; type: direct -->
- **Theorem 4**: the set of infinite sequences of natural numbers is uncountable. <!-- src: DM-N615#p001; ref: Theorem 4; type: direct -->
  - Proof: an infinite sequence of naturals is a function $\mathbb{N}\to\mathbb{N}$, and $2^{\mathbb{N}}\leqslant\mathbb{N}^{\mathbb{N}}\leqslant(2^{\mathbb{N}})^{\mathbb{N}}\approx 2^{\mathbb{N}\times\mathbb{N}}\approx 2^{\mathbb{N}}$, so $\mathbb{N}^{\mathbb{N}}\approx 2^{\mathbb{N}}$ is uncountable. <!-- src: DM-N615#p002; ref: Theorem 4; type: direct -->
- **Theorem 5**: $\mathbb{R}\approx 2^{\mathbb{N}}$. <!-- src: DM-N615#p002; ref: Theorem 5; type: direct -->
- **Corollary 6**: $(0,1)\approx[0,1]\approx 2^{\mathbb{N}}$. <!-- src: DM-N615#p002; ref: Corollary 6; type: direct -->
- **Theorem 7**: $(\mathbb{R}\to\mathbb{R})\approx 2^{2^{\mathbb{N}}}$. <!-- src: DM-N615#p002; ref: Theorem 7; type: direct -->
  - Proof: $\mathbb{R}^{\mathbb{R}}\approx(2^{\mathbb{N}})^{2^{\mathbb{N}}}\approx 2^{\mathbb{N}\times 2^{\mathbb{N}}}$, and $2^{2^{\mathbb{N}}}\leqslant 2^{\mathbb{N}\times 2^{\mathbb{N}}}\leqslant 2^{2^{\mathbb{N}}\times 2^{\mathbb{N}}}\approx 2^{(2^{\mathbb{N}})^2}\leqslant 2^{(2^{\mathbb{N}})^{\mathbb{N}}}\approx 2^{2^{\mathbb{N}\times\mathbb{N}}}\approx 2^{2^{\mathbb{N}}}$. <!-- src: DM-N615#p002; ref: Theorem 7; type: direct -->
- **Theorem 8**: the set of continuous functions from $\mathbb{R}$ into $\mathbb{R}$ is equinumerous with $\mathbb{R}$. <!-- src: DM-N615#p002; ref: Theorem 8; type: direct -->

---

## 10. Set Theory as a Mathematical Foundation

<!-- src: DM-N617#p001 + DM-N617#p002. Slogan: "Everything is a set!" -->

### 10.1 Ordered pairs as sets

- **Definition 1 (ordered pairs as sets)**: $(x,y)$ can be encoded as $\{\{x\},\{x,y\}\}$. <!-- src: DM-N617#p001; ref: Definition 1; type: direct -->
- The encoding is sound because of: <!-- src: DM-N617#p001; type: direct -->
- **Theorem 2**: for any sets $x,y,u,v$, if $\{\{x\},\{x,y\}\}=\{\{u\},\{u,v\}\}$ then $x=u$ and $y=v$. <!-- src: DM-N617#p001; ref: Theorem 2; type: direct -->

### 10.2 Natural numbers as sets

- **Example 3 (natural numbers as sets)**: each natural number is encoded as the set of all smaller ones. <!-- src: DM-N617#p001; ref: Example 3; type: compressed -->

| $n$ | as a set | $=\{0,\dots,n-1\}$ |
|---|---|---|
| $0$ | $\{\}$ | $\{\}$ <!-- src: DM-N617#p001; ref: Example 3; type: direct --> |
| $1$ | $\{\{\}\}$ | $\{0\}$ <!-- src: DM-N617#p001; ref: Example 3; type: direct --> |
| $2$ | $\{\{\},\{\{\}\}\}$ | $\{0,1\}$ <!-- src: DM-N617#p001; ref: Example 3; type: direct --> |
| $3$ | $\{\{\},\{\{\}\},\{\{\},\{\{\}\}\}\}$ | $\{0,1,2\}$ <!-- src: DM-N617#p001; ref: Example 3; type: direct --> |

- **Definition 4 (inductive set)**: a set $x$ is **inductive** iff $\varnothing\in x$ and $\forall y(\text{if } y\in x \text{ then } y\cup\{y\}\in x)$. <!-- src: DM-N617#p001; ref: Definition 4; type: direct -->
- **Definition 5 ($\mathbb{N}$)**: $\mathbb{N}$ is the **smallest inductive set**: (i) $\mathbb{N}$ is inductive; (ii) for any inductive set $x$, $\mathbb{N}\subseteq x$. <!-- src: DM-N617#p001; ref: Definition 5; type: direct -->
- **Theorem 6 (existence of $\mathbb{N}$)**: there exists a set $x$ that is inductive and is contained in every inductive set. <!-- src: DM-N617#p001; ref: Theorem 6; type: direct -->
- **Theorem 7 (uniqueness of $\mathbb{N}$)**: any two sets that are inductive and contained in every inductive set are equal. <!-- src: DM-N617#p001; ref: Theorem 7; type: direct -->

### 10.3 Defining natural-number arithmetic

- **Definition 8 (addition)**: the sum of $n,m\in\mathbb{N}$ is $r$ iff $(n,m,r)\in T$, where $T\subseteq\mathbb{N}\times\mathbb{N}\times\mathbb{N}$ is the **least** set such that <!-- src: DM-N617#p002; ref: Definition 8; type: direct -->
  - $\forall n.\ ((n,0,n)\in T)$ — base case $n+0=n$; <!-- src: DM-N617#p002; ref: Definition 8; type: direct -->
  - $\forall n\forall m\forall r.\ (\text{if } (n,m,r)\in T, \text{ then } (n,\, m\cup\{m\},\, r\cup\{r\})\in T)$ — successor step on the **second** argument (using $m\cup\{m\}$ as $m+1$, i.e. $n+(m+1)=(n+m)+1$). <!-- src: DM-N617#p002; ref: Definition 8; type: direct -->

### 10.4 Defining transitive closures (as sets)

- **Definition 9**: for any relation $R$ on $A$ (i.e. $R\subseteq A\times A$), write $(a,b)\in R^n$ iff $(a,b,n)\in T$, where $T\subseteq A\times A\times\mathbb{N}$ is the least set such that <!-- src: DM-N617#p002; ref: Definition 9; type: direct -->
  - $\forall a\forall b\,(\text{if } a\,R\,b, \text{ then } (a,b,1)\in T)$; <!-- src: DM-N617#p002; ref: Definition 9; type: direct -->
  - $\forall n\forall a\forall b\forall c\,(\text{if } a\,R\,b \text{ and } (b,c,n)\in T, \text{ then } (a,c,n\cup\{n\})\in T)$. <!-- src: DM-N617#p002; ref: Definition 9; type: direct -->
- **Definition 10**: for any relation $R$ on $A$, $R^+=\bigcup_{n\in\mathbb{Z}^+}R^n$ is the set $\{(a,b)\in A\times A\mid \exists n((a,b,n)\in T)\}$, obtained by the axiom of separation from the $T$ above. <!-- src: DM-N617#p002; ref: Definition 10; type: direct -->

### 10.5 Establishing $\mathbb{Z}$, $\mathbb{Q}$ and $\mathbb{R}$ in set theory

- $\mathbb{Z}\approx(\mathbb{N}\times\{0,1\})\setminus\{(0,0)\}$, so $\mathbb{Z}$ can be defined accordingly. <!-- src: DM-N617#p002; type: direct -->
- $\mathbb{Q}\approx\{(n,m)\in\mathbb{Z}\times(\mathbb{N}\setminus\{0\})\mid n \text{ and } m \text{ are coprime to each other}\}$, so $\mathbb{Q}$ can be defined accordingly. <!-- src: DM-N617#p002; type: direct -->
- **Definition 11 (Dedekind cut)**: $(X,Y)\in\mathcal{P}(\mathbb{Q})\times\mathcal{P}(\mathbb{Q})$ is a Dedekind cut of rationals if $X\neq\varnothing$; $Y\neq\varnothing$; $X\cap Y=\varnothing$; $X\cup Y=\mathbb{Q}$; $\forall x\in X.\ \forall y\in Y.\ (x<y)$; and $Y$ has no least element, i.e. $\forall y\in Y.\ \exists y'\in Y.\ (y'<y)$. <!-- src: DM-N617#p002; ref: Definition 11; type: direct -->
- **Theorem 12**: if $D$ is the set of Dedekind cuts of rationals, then $D\approx\mathbb{R}$; so $\mathbb{R}$ can be defined accordingly. <!-- src: DM-N617#p002; ref: Theorem 12; type: direct -->
- Alternative construction of $\mathbb{R}$ via Cauchy sequences: <!-- src: DM-N617#p002; type: direct -->
- **Definition 13 (Cauchy sequence)**: $l:\mathbb{N}\to\mathbb{Q}$ is a Cauchy sequence if for any rational $\varepsilon>0$ there exists $N$ such that for any $m,n>N$, $|l(n)-l(m)|<\varepsilon$. <!-- src: DM-N617#p002; ref: Definition 13; type: direct -->
- **Definition 14**: $R_C=\{(l_1,l_2)\mid \text{for any rational } \varepsilon>0 \text{ there exists } N \text{ such that for any } n>N,\ |l_1(n)-l_2(n)|<\varepsilon\}$ is a relation between Cauchy sequences of rationals. <!-- src: DM-N617#p002; ref: Definition 14; type: direct -->
- **Theorem 15**: $R_C$ is an equivalence relation on Cauchy sequences of rationals. <!-- src: DM-N617#p002; ref: Theorem 15; type: direct -->
- **Theorem 16**: $\mathbb{R}\approx\{[l]_{R_C}\mid l \text{ is a Cauchy sequence of rationals}\}$. <!-- src: DM-N617#p002; ref: Theorem 16; type: direct -->
- Finally, since $\mathbb{C}\approx\mathbb{R}\times\mathbb{R}$, $\mathbb{C}$ can be defined accordingly. <!-- src: DM-N617#p002; type: direct -->

---

## 11. Problems of Naive Set Theory and Their Fixing

<!-- src: DM-N617#p003 -->

### 11.1 Russell's paradox

- Consider $A=\{a\mid a\notin a\}$. Then $\forall x(x\in A \Leftrightarrow x\notin x)$, so $A\in A \Leftrightarrow A\notin A$ — a contradiction. <!-- src: DM-N617#p003; type: direct -->

### 11.2 Fixing the problems — primitive constructions of sets

- **Definition 17 (primitive constructions)**: <!-- src: DM-N617#p003; ref: Definition 17; type: direct -->
  - **Separation**: for any set $A$ and property $P$, $\{a\in A\mid P(a)\}$ is a set, with $\forall x(x\in\{a\in A\mid P(a)\} \Leftrightarrow x\in A \text{ and } P(x))$. <!-- src: DM-N617#p003; ref: Definition 17; type: direct -->
  - For an arbitrary property $P$, $\{a\mid P(a)\}$ is **not** guaranteed to be a set (this is what blocks Russell's paradox). <!-- src: DM-N617#p003; ref: Definition 17; type: direct -->
  - $\varnothing$ is a set, $\forall x(x\notin\varnothing)$. <!-- src: DM-N617#p003; ref: Definition 17; type: direct -->
  - **Pairing**: for any sets $x,y$, $\{x,y\}$ is a set, $\forall z(z\in\{x,y\} \Leftrightarrow z=x \text{ or } z=y)$. <!-- src: DM-N617#p003; ref: Definition 17; type: direct -->
  - **Union**: for any set $x$, $\bigcup x$ is a set, $\forall y(y\in\bigcup x \Leftrightarrow \exists z(z\in x \text{ and } y\in z))$. <!-- src: DM-N617#p003; ref: Definition 17; type: direct -->
  - **Power set**: for any set $x$, $\mathcal{P}(x)$ is a set, $\forall y(y\in\mathcal{P}(x) \Leftrightarrow y\subseteq x)$. <!-- src: DM-N617#p003; ref: Definition 17; type: direct -->
- **Theorem 18**: $x\cup y$ is a set, since $x\cup y=\bigcup\{x,y\}$. <!-- src: DM-N617#p003; ref: Theorem 18; type: direct -->
- **Theorem 19**: $x\cap y$ is a set, since $x\cap y=\{a\in x\mid a\in y\}$. <!-- src: DM-N617#p003; ref: Theorem 19; type: direct -->
- **Theorem 20**: $\{x\}$ is a set, since $\{x\}=\{x,x\}$. <!-- src: DM-N617#p003; ref: Theorem 20; type: direct -->
- **Corollary 21**: $0=\{\}$, $1=\{\{\}\}$, $2=\{\{\},\{\{\}\}\}$ are all sets; and if $x$ is a set, $x\cup\{x\}$ is also a set. <!-- src: DM-N617#p003; ref: Corollary 21; type: direct -->
- **Theorem 22**: $x\times y$ is a set, since $x\times y=\{a\in\mathcal{P}(\mathcal{P}(x\cup y))\mid \exists u\in x\,\exists v\in y.\ a=\{\{u\},\{u,v\}\}\}$. <!-- src: DM-N617#p003; ref: Theorem 22; type: direct -->
