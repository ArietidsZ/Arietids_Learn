# 离散数学 · 集合、关系、函数与基数 · 速览

> Arietids Learn · 个人课程复习笔记
> 在线阅读：https://learn.arietids.net/courses/discrete-math/chapter-03-quick/

## Sets (N518)

- Core constructions by their defining equivalence: $z\in x\cup y \Leftrightarrow (z\in x \text{ or } z\in y)$; $z\in x\cap y \Leftrightarrow (z\in x \text{ and } z\in y)$; $z\in x\setminus y \Leftrightarrow (z\in x \text{ and } z\notin y)$; $y\in\mathcal{P}(x)\Leftrightarrow y\subseteq x$; $y\in\bigcup x \Leftrightarrow \exists z(z\in x \wedge y\in z)$. <!-- src: DM-N518#p001; type: compressed -->
- $x=y \Leftrightarrow (x\subseteq y \text{ and } y\subseteq x)$ (extensionality); pair $(x,y)=(u,v)\Leftrightarrow x=u\wedge y=v$; $x\times y=\{(u,v)\mid u\in x, v\in y\}$. <!-- src: DM-N518#p001; type: compressed -->
- Key identities (proved by double inclusion): $\mathcal{P}(A)\cap\mathcal{P}(B)=\mathcal{P}(A\cap B)$; $A=\bigcup\mathcal{P}(A)$; $A\times\bigcup B=\bigcup\{A\times X\mid X\in B\}$; monotonicity $A\subseteq B\Rightarrow \mathcal{P}(A)\subseteq\mathcal{P}(B)$ and $\bigcup A\subseteq\bigcup B$. <!-- src: DM-N518#p001ex1 + DM-N518#p002ex2; type: compressed -->
- Method: prove $S=T$ via $S\subseteq T$ and $T\subseteq S$; prove inclusion by taking an arbitrary element and unfolding membership. <!-- src: DM-N518#p001ex1; type: synthesized -->

## Relations (N520)

- Relation on $A$ = subset of $A\times A$; $a\,R\,b \Leftrightarrow (a,b)\in R$. Properties: reflexive $\forall a.\,aRa$; symmetric; antisymmetric $aRb\wedge bRa\Rightarrow a=b$; transitive. <!-- src: DM-N520#p001; ref: Definition 1-3; type: compressed -->
- Operators: $R^{-1}=\{(x,y)\mid y\,R\,x\}$; $S\circ R=\{(x,z)\mid \exists y(xRy\wedge ySz)\}$. Facts: $(S\circ R)^{-1}=R^{-1}\circ S^{-1}$; $\circ$ associative; $R\circ(S\cup T)=(R\circ S)\cup(R\circ T)$. <!-- src: DM-N520#p001; ref: Definition 4-5, Theorem 6-7; type: compressed -->
- **Theorem 8 (characterizations)**, $I_A=\{(a,a)\}$: reflexive $\Leftrightarrow I_A\subseteq R$; symmetric $\Leftrightarrow R=R^{-1}$; transitive $\Leftrightarrow R\circ R\subseteq R$; antisymmetric $\Leftrightarrow R\cap R^{-1}\subseteq I_A$. <!-- src: DM-N520#p001; ref: Theorem 8; type: direct -->

## Equivalence relations & partitions (N520–N525)

- Equivalence relation = reflexive + symmetric + transitive; class $[a]_R=\{b\mid aRb\}$. <!-- src: DM-N520#p002; ref: Definition 9-10; type: direct -->
- $aRb \Leftrightarrow [a]_R=[b]_R \Leftrightarrow [a]_R\cap[b]_R\neq\varnothing$. <!-- src: DM-N520#p002; ref: Theorem 11-12; type: compressed -->
- Partition of $A$: nonempty, pairwise disjoint blocks with $\bigcup P=A$. Each partition induces an equivalence relation ("same block"), whose classes are exactly the blocks. <!-- src: DM-N525#p001; ref: Definition 1, Theorem 2; type: compressed -->

## Closures (N601)

- **Transitive closure**: two equivalent definitions — (universal) smallest transitive $R'\supseteq R$; (constructive) $R^+=\bigcup_{n\in\mathbb{Z}^+}R^n$ with $R^1=R$, $R^{n+1}=R^n\circ R$. <!-- src: DM-N601#p001; ref: Definition 1-2, Theorem 3; type: compressed -->
- Key lemmas: $R^n\circ R^m=R^{n+m}$; $R^+$ transitive; if $R\subseteq T$ and $T$ transitive then $R^+\subseteq T$ (induction $R^{n+1}=R^n\circ R\subseteq T\circ T\subseteq T$). <!-- src: DM-N601#p001; ref: Lemma 7-9; type: compressed -->
- **Reflexive transitive closure**: $R^*=\bigcup_{n\in\mathbb{N}}R^n$ with $R^0=I_A$ (= add the identity). <!-- src: DM-N601#p002; ref: Definition 11-12; type: compressed -->

## Functions (N601)

- $F:A\to B$ is a relation that is total ($\forall x\,\exists y\,xFy$) and single-valued; $F(x)$ = the unique image. $F=G \Leftrightarrow \forall x.\,F(x)=G(x)$. <!-- src: DM-N601#p002; ref: Definition 14, Theorem 17; type: compressed -->
- $(F\circ G)(x)=F(G(x))$. injection $f(a)=f(a')\Rightarrow a=a'$; surjection $\forall b\,\exists a.\,f(a)=b$; bijection = both. <!-- src: DM-N601#p002 + DM-N601#p003; ref: Theorem 18, Definition 19; type: compressed -->
- Composition ($F:B\to C$, $G:A\to B$): $F,G$ inj $\Rightarrow F\circ G$ inj; $F,G$ surj $\Rightarrow F\circ G$ surj; $F\circ G$ inj $\Rightarrow G$ inj; $F\circ G$ surj $\Rightarrow F$ surj. Bijection $\Rightarrow F^{-1}$ bijection. <!-- src: DM-N601#p003; ref: Theorem 20-21; type: direct -->

## Schröder–Bernstein (N603)

- Injections $f:A\to B$, $g:B\to A$ $\Rightarrow$ a bijection $A\to B$. <!-- src: DM-N603#p001; ref: Theorem 1; type: direct -->
- Construction: $C_0=A\setminus\mathrm{ran}(g)$, $C_{n+1}=\{g(b)\mid b\in D_n\}$, $D_n=f[C_n]$; set $h=f$ on $\bigcup C_i$, $h=g^{-1}$ off it. Injectivity needs three cases (both in $\bigcup C_i$, mixed, both off). <!-- src: DM-N603#p001; type: compressed -->

## Equinumerosity (N603, N608)

- $A\leqslant B$: injection exists; $A\approx B$: bijection exists. $\approx$ is reflexive/symmetric/transitive. <!-- src: DM-N603#p002; ref: Definition 2-3, Theorem 6; type: compressed -->
- $[0,1]\approx[0,1)$; $\mathbb{N}\approx\mathbb{N}\times\mathbb{N}\approx\mathbb{Q}$; $\mathbb{N}\times\mathbb{N}\times\mathbb{N}\approx\mathbb{N}$. Products: $A\times B\approx B\times A$; $A_1\approx A_2$ and $B_1\approx B_2 \Rightarrow A_1\times B_1\approx A_2\times B_2$. <!-- src: DM-N603#p002; ref: Theorem 4-7, Corollary 8; type: compressed -->
- Function-space identities ($2^A=(A\to\{0,1\})$, $B^A=(A\to B)$): currying $((A\times B)\to C)\approx(A\to(B\to C))$; pairing $(A\to B\times C)\approx(A\to B)\times(A\to C)$; $(\{0,1\}\to A)\approx A\times A$; $(A\to\{0,1\})\approx\mathcal{P}(A)$ (indicator map); $A\approx B\Rightarrow\mathcal{P}(A)\approx\mathcal{P}(B)$. <!-- src: DM-N608#p001; ref: Theorem 1, Notation 2; type: compressed -->

## Countable / Uncountable (N603, N615)

- Countable := $\approx\mathbb{N}$. Countable: $\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{N}^k$, finite sequences/strings of naturals, integer polynomials, algebraic numbers. <!-- src: DM-N603#p002 + DM-N603#p003; ref: Definition 9, Theorem 11, Corollary 12; type: compressed -->
- **Cantor**: $X\not\approx\mathcal{P}(X)$ (diagonal $Y=\{x\mid x\notin\theta(x)\}$). $(A\to\{0,1\})\approx\mathcal{P}(A)$, so $\mathcal{P}(\mathbb{N})$, $\mathbb{N}^{\mathbb{N}}\approx 2^{\mathbb{N}}$ are uncountable. <!-- src: DM-N615#p001 + DM-N615#p002; ref: Theorem 1-4, Corollary 3; type: compressed -->
- Continuum: $\mathbb{R}\approx 2^{\mathbb{N}}\approx(0,1)\approx[0,1]$; $(\mathbb{R}\to\mathbb{R})\approx 2^{2^{\mathbb{N}}}$; continuous $\mathbb{R}\to\mathbb{R}$ functions $\approx\mathbb{R}$. <!-- src: DM-N615#p002; ref: Theorem 5-8, Corollary 6; type: compressed -->

## Set theory as foundation (N617)

- Everything is a set: pair $(x,y)=\{\{x\},\{x,y\}\}$ (sound by pair-equality theorem); naturals $0=\{\}$, $n+1=n\cup\{n\}$; $\mathbb{N}$ = smallest inductive set (inductive: $\varnothing\in x$, $y\in x\Rightarrow y\cup\{y\}\in x$); exists and is unique. <!-- src: DM-N617#p001; ref: Definition 1-5, Theorem 2,6,7; type: compressed -->
- Addition by least $T\subseteq\mathbb{N}^3$: base $(n,0,n)$ ($n+0=n$), step $(n,m,r)\Rightarrow(n,m\cup\{m\},r\cup\{r\})$ (recursion on 2nd arg). Transitive closure similarly via least $T\subseteq A\times A\times\mathbb{N}$. <!-- src: DM-N617#p002; ref: Definition 8-10; type: compressed -->
- $\mathbb{Z}\approx(\mathbb{N}\times\{0,1\})\setminus\{(0,0)\}$; $\mathbb{Q}\approx$ coprime pairs $(n,m)\in\mathbb{Z}\times(\mathbb{N}\setminus\{0\})$; $\mathbb{R}$ = Dedekind cuts ($D\approx\mathbb{R}$) or Cauchy-sequence classes; $\mathbb{C}\approx\mathbb{R}\times\mathbb{R}$. <!-- src: DM-N617#p002; ref: Definition 11-14, Theorem 12,15,16; type: compressed -->

## Naive set theory's problem & fix (N617)

- **Russell's paradox**: $A=\{a\mid a\notin a\}\Rightarrow A\in A\Leftrightarrow A\notin A$. <!-- src: DM-N617#p003; type: direct -->
- Fix = restrict comprehension to **separation** $\{a\in A\mid P(a)\}$ (a set), while bare $\{a\mid P(a)\}$ is **not** guaranteed a set. Primitives: $\varnothing$, pairing $\{x,y\}$, union $\bigcup x$, power set $\mathcal{P}(x)$. Derived as sets: $x\cup y=\bigcup\{x,y\}$, $x\cap y=\{a\in x\mid a\in y\}$, $\{x\}=\{x,x\}$, $x\times y\subseteq\mathcal{P}(\mathcal{P}(x\cup y))$. <!-- src: DM-N617#p003; ref: Definition 17, Theorem 18-22, Corollary 21; type: compressed -->
