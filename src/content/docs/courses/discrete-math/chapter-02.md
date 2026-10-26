---
title: "离散数学 · 数理逻辑"
description: "离散数学课程笔记：离散数学 · 数理逻辑。"
---

<div class="note-meta"><a href="/courses/discrete-math/">离散数学目录</a><a href="/courses/discrete-math/chapter-02-quick/">阅读速览</a><a href="/downloads/discrete-math/chapter-02.md" download>下载 Markdown</a></div>

Course handouts: *Discrete Math*, Qinxiang Cao — notes of Mar 30, Apr 13, Apr 20, Apr 22, Apr 27, May 6, May 9, May 11 (2026). Topics: translating natural language into logic, single-step proofs, interpreting informal proofs, a formal proof system for propositional logic, first-order quantifier rules and derived properties, and the syntax of first-order logic. <!-- src: DM-N-330#p001 + DM-N-413R#p001 + DM-N-420#p001 + DM-N-422#p001 + DM-N-427#p001 + DM-N-506#p001 + DM-N-509#p001 + DM-N-511#p001; type: synthesized -->

## 1 From Natural Language Propositions to Logic Expressions

- **Universal statement.**
  - Natural language: *In this class, every student in this class has already studied calculus.*
  - Predicate symbols: $S(t)$ = "$t$ is a student in this class"; $C(t)$ = "$t$ has already studied calculus".
  - Logic expression: $\forall x.\ S(x) \to C(x)$. <!-- src: DM-N-330#p001; type: direct -->

- **Existential statement.**
  - Natural language: *Some US students in this class have visited Mexico.*
  - Predicate symbols: $U(t)$ = "$t$ is a US student in this class"; $M(t)$ = "$t$ has visited Mexico".
  - Logic expression: $\exists x.\ U(x) \land M(x)$. <!-- src: DM-N-330#p001; type: direct -->

- **Nested quantifiers.**
  - Natural language: *For every student in SAI, a research mentor will be assigned to him or her from his or her first year.*
  - Predicate symbols: $S(t)$ = "$t$ is a student in SAI"; $M(t_1, t_2)$ = "$t_2$ is the research mentor of $t_1$".
  - Logic expression: $\forall x.\ (S(x) \to \exists y.\ M(x, y))$. <!-- src: DM-N-330#p001; type: direct -->

- **Constant symbols (lions).**
  - Natural language: *Lions are fierce. Lions do not drink coffee. Some fierce creatures do not drink coffee.*
  - Constant symbol $c_L$ = "lions"; predicate symbols: $F(t)$ = "$t$ is fierce"; $D(t)$ = "$t$ drink coffee".
  - Logic expressions: $F(c_L)$; $\neg D(c_L)$; $\exists x.\ F(x) \land \neg D(x)$. <!-- src: DM-N-330#p001 + DM-N-330#p002; type: direct -->

- **Uniqueness.**
  - Natural language: *In this class, there is a unique student who got full marks in the final exam.*
  - Predicate symbols: $S(t)$ = "$t$ is a student in this class"; $F(t)$ = "$t$ got full marks in the final exam".
  - Logic expression: $\exists x.\ ((S(x) \land F(x)) \land \forall y.\ ((S(y) \land F(y)) \to y = x))$. <!-- src: DM-N-330#p002; type: direct -->

- **Injectivity.** *The function $f$ is injective* (function symbol $f(t)$ = "the value of function $f$ at $t$"): $\forall x. \forall y.\ (f(x) = f(y) \to x = y)$. <!-- src: DM-N-330#p002; type: direct -->

- **Surjectivity.** *The function $f$ is surjective*: $\forall y. \exists x.\ (f(x) = y)$. <!-- src: DM-N-330#p002; type: direct -->

## 2 Single-Step Proofs

- **Notation.** If $\Phi$ is a set of propositions and $\psi$ is one single proposition, we write $\Phi \vdash \psi$ representing: we can derive $\psi$ from $\Phi$. <!-- src: DM-N-330#p002; ref: Notation 1; type: direct -->

Single-step proof patterns (the connective word driving each step is highlighted in red in the original): <!-- src: DM-N-330#p002; type: compressed -->

| Assumption | Conclusion | Logic |
|---|---|---|
| $T$ is a tree, i.e. connected **and** has no simple loop | $T$ is connected | $p \land q \vdash p$ <!-- src: DM-N-330#p002; type: direct --> |
| $u$ is $v$'s descendant | $u$ is in the subtree at $v$, i.e. $u$ is either $v$ itself **or** $v$'s descendant | $p \vdash p \lor q$ <!-- src: DM-N-330#p002; type: direct --> |
| (none) | $\pi^e$ is a rational number or a irrational number | $\vdash p \lor \neg p$ <!-- src: DM-N-330#p002; type: direct --> |
| Every human being is mortal | Socrates is mortal | $\forall x.\ M(x) \vdash M(c)$ <!-- src: DM-N-330#p002; type: direct --> |
| Two is an even prime number | There exists an even prime number | $E(c) \land P(c) \vdash \exists x.\ (E(x) \land P(x))$ <!-- src: DM-N-330#p002; type: direct --> |

## 3 Interpreting Informal Proofs

### 3.1 A limit proof and its logical anatomy

**Example.** Proof of $\forall \varepsilon > 0, \exists N, \forall n > N, \left|\frac{1}{n}\right| < \varepsilon$:

*Given a fixed $\varepsilon > 0$* ⟨red⟩*, let $N = \left[\frac{1}{\varepsilon}\right] + 1$* ⟨blue⟩*, then for any $n > N$,*

$$
\left|\frac{1}{n}\right| = \frac{1}{n} < \frac{1}{N} < \frac{1}{\frac{1}{\varepsilon}} = \varepsilon.
$$


*Qed.* (In the original the first phrase is printed in red and the second in blue; the analyses below refer to these colors.) <!-- src: DM-N-330#p003; ref: Example 2; type: direct -->

**Analysis A (the red phrase).**

- At the beginning, the proof target is:
  - Assumptions: all math theorems (we call it $\Phi$).
  - Conclusion: $\forall \varepsilon$, if $\varepsilon > 0$, then $\exists N, \forall n > N, \left|\frac{1}{n}\right| < \varepsilon$ — which can be formulated by $\forall x.\ (P(x) \to Q(x))$.
- After the red phrase, the proof target is:
  - Assumptions: all math theorems (we call it $\Phi$) and $\varepsilon > 0$ (formulated as $P(x)$).
  - Conclusion: $\exists N, \forall n > N, \left|\frac{1}{n}\right| < \varepsilon$ (formulated as $Q(x)$).
- Logic: If $\Phi, P(x) \vdash Q(x)$ then $\Phi \vdash \forall x.\ (P(x) \to Q(x))$. <!-- src: DM-N-330#p003; ref: Example 2, Analysis A; type: direct -->

**Analysis B (the blue phrase).**

- Before the blue phrase, the proof target is:
  - Assumptions: all math theorems and $\varepsilon > 0$ (we call them $\Phi$).
  - Conclusion: $\exists N, \forall n > N, \left|\frac{1}{n}\right| < \varepsilon$ (formulated as $\exists x. P(x)$).
- After the blue phrase, the proof target is:
  - Assumptions: all math theorems and $\varepsilon > 0$ (we call them $\Phi$).
  - Conclusion: $\forall n > \left[\frac{1}{\varepsilon}\right] + 1, \left|\frac{1}{n}\right| < \varepsilon$ (formulated as $P(t)$).
- Logic: If $\Phi \vdash P(t)$ then $\Phi \vdash \exists x.\ P(x)$. <!-- src: DM-N-330#p003; ref: Example 2, Analysis B; type: direct -->

### 3.2 A negated-existence proof and its logical anatomy

**Example.** Proof of:

$$
\neg\ \exists x \in \mathbb{N}.\ \exists y \in \mathbb{N}.\ \gcd(x, y) = 1 \text{ and } x^2 = 2y^2.
$$


(The word "and" is printed as the English word in the source statement, not as $\land$.)

*Suppose there exists $x \in \mathbb{N}$ and $y \in \mathbb{N}$ s.t. $x^2 = 2y^2$* ⟨red⟩. *Thus, $x$ must be an even number* ⟨blue⟩ *and* *we can assume $x = 2x_0$* ⟨red⟩. *Now, we have $y^2 = 2x_0^2$. Thus, $y$ must be an even number too and we can assume $y = 2y_0$. Therefore, $\gcd(x, y) \neq 1$. Qed.* <!-- src: DM-N-330#p003; ref: Example 3; type: direct -->

Step-by-step analysis (each proof step paired with the logic rule it instantiates; colors match the marked phrases):

- **Proof step** ⟨red, the "Suppose" sentence⟩: In order to prove $\neg\ \exists x \in \mathbb{N}.\ \exists y \in \mathbb{N}.\ \gcd(x, y) = 1$ and $x^2 = 2y^2$, it suffices to prove that if $x \in \mathbb{N}$, $y \in \mathbb{N}$ and $x^2 = 2y^2$ then $\gcd(x, y) \neq 1$.
  - Logic: If $\Phi, P(x), P(y), Q(x, y) \vdash \neg R(x, y)$, then $\Phi \vdash \neg \exists x.\ (P(x) \land \exists y. (P(y) \land Q(x, y) \land R(x, y)))$. <!-- src: DM-N-330#p003; ref: Example 3; type: direct -->
- **Proof step** ⟨blue⟩: If $x^2 = 2y^2$, then $x$ is an even number. *The sentence itself is a math fact.*
  - Logic (considering its role in the whole proof): If $\Phi \vdash \psi$ and $\Phi, \psi \vdash \chi$, then $\Phi \vdash \chi$. <!-- src: DM-N-330#p003 + DM-N-330#p004; ref: Example 3; type: direct -->
- **Proof step** ⟨red, "we can assume $x = 2x_0$"⟩: Because there exists $x_0 \in \mathbb{N}$ s.t. $x = 2x_0$, we can use $x_0$ to represent this natural number in later proofs.
  - Logic: If $\Phi, P(x) \vdash \psi$, then $\Phi, \exists x.\ P(x) \vdash \psi$. *(Printed with no explicit side condition.)* <!-- src: DM-N-330#p004; ref: Example 3; type: direct -->

### 3.3 Quiz: a segment of Prim algorithm's correctness proof

**Quiz.** Here is an segment of Prim algorithm's correctness proof. Assuming there exists a minimum spanning tree $T^*$ such that $T_n$ is a subgraph of $T^*$, we need to show that there also exists a minimum spanning tree (maybe different from $T^*$) such that $T_{n+1}$ is a subgraph of it.

- Choose an arbitrary minimum spanning tree $T^*$ such that $T_n$ is a subgraph of $T^*$.
- If $T_{n+1}$ is a subgraph of $T^*$, then we are done. Otherwise, we can always change an edge in $T^*$ so that $T_{n+1}$ is a subgraph of $T^*$. Here is how to change the edge.
  - Since $T_{n+1}$ is not a subgraph of $T^*$, $e_{n+1}$ (which connects $u_{n+1}$ and $v_{n+1}$) is not an edge in $T^*$. Because $T^*$ is a spanning tree, there is a path in $T^*$ between $u_{n+1}$ and $v_{n+1}$. On this path, there must be an edge $e^*$ leaving $V_n$.
  - $w(e^*) = w(e_{n+1})$.
  - So, $T^* \setminus \{e^*\} \cup \{e_{n+1}\}$ is another minimum spanning tree.
  - Besides, $T_{n+1}$ is a subgraph of $T^* \setminus \{e^*\} \cup \{e_{n+1}\}$.

Please describe the logic behind each step. <!-- src: DM-N-413R#p001; type: direct -->

**Answer (each proof step paired with the logic rule it instantiates):**

- Proof step: Choose an arbitrary minimum spanning tree $T^*$ such that $T_n$ is a subgraph of $T^*$.
  - Logic: If $\Phi, P(x) \vdash \psi$, then $\Phi, \exists x.\ P(x) \vdash \psi$.
- Proof step: If $T_{n+1}$ is a subgraph of $T^*$, then ... . Otherwise, ... .
  - Logic: If $\Phi, \varphi \vdash \psi$ and $\Phi, \neg\varphi \vdash \psi$, then $\Phi \vdash \psi$.
- Proof step: We can always change an edge in $T^*$ so that $T_{n+1}$ is a subgraph of $T^*$.
  - Describe the proof strategy afterwards.
- Proof step: Since $T_{n+1}$ is not a subgraph of $T^*$, $e_{n+1}$ (which connects $u_{n+1}$ and $v_{n+1}$) is not an edge in $T^*$.
  - Logic: If $\Phi \vdash \psi$ and $\Phi, \psi \vdash \chi$, then $\Phi \vdash \chi$. <!-- src: DM-N-413R#p001; type: direct -->
- Proof step: Because $T^*$ is a spanning tree, there is a path in $T^*$ between $u_{n+1}$ and $v_{n+1}$.
  - Logic (1): If $\Phi \vdash \psi$ and $\Phi, \psi \vdash \chi$, then $\Phi \vdash \chi$.
  - Logic (2): If $\Phi, P(x) \vdash \psi$, then $\Phi, \exists x.\ P(x) \vdash \psi$.
- Proof step: On this path, there must be an edge $e^*$ leaving $V_n$.
  - Logic (1): If $\Phi \vdash \psi$ and $\Phi, \psi \vdash \chi$, then $\Phi \vdash \chi$.
  - Logic (2): If $\Phi, P(x) \vdash \psi$, then $\Phi, \exists x.\ P(x) \vdash \psi$.
- Proof step: $w(e^*) = w(e_{n+1})$.
  - Logic: If $\Phi \vdash \psi$ and $\Phi, \psi \vdash \chi$, then $\Phi \vdash \chi$. <!-- src: DM-N-413R#p001 + DM-N-413R#p002; type: direct -->

## 4 Propositional Logic

- **Notation ($\dashv\vdash$).** We write $\varphi \dashv\vdash \psi$ if and only if both $\varphi \vdash \psi$ and $\psi \vdash \varphi$. <!-- src: DM-N-420#p001; ref: Definition 1; type: direct -->

### 4.1 Structural rules

- **ASSUMPTION**: if $\varphi \in \Phi$, then $\Phi \vdash \varphi$.
- **WEAKENING**: if $\Phi \subseteq \Phi'$ and $\Phi \vdash \psi$, then $\Phi' \vdash \psi$.
- **SUBSTITUTION**: if $\Phi \vdash \psi$ and $\Phi, \psi \vdash \chi$ then $\Phi \vdash \chi$. <!-- src: DM-N-413R#p002; ref: Definition 1; type: direct -->

**Example.** Prove the following derivations using ASSUMPTION, WEAKENING and SUBSTITUTION.

- $\varphi \vdash \varphi$.
- If $\varphi \vdash \psi$ and $\psi \vdash \chi$, then $\varphi \vdash \chi$.
- If $\Phi, \varphi \vdash \psi$ and $\Phi, \psi \vdash \chi$, then $\Phi, \varphi \vdash \chi$. <!-- src: DM-N-413R#p002; ref: Example 2; type: direct -->

Proof of $\varphi \vdash \varphi$:

- (1) $\varphi \vdash \varphi$ (by ASSUMPTION). <!-- src: DM-N-413R#p002; ref: Proof of Example 2; type: direct -->

Proof of: if $\varphi \vdash \psi$ and $\psi \vdash \chi$, then $\varphi \vdash \chi$:

- (1) $\varphi \vdash \psi$ (hypothesis).
- (2) $\psi \vdash \chi$ (hypothesis).
- (3) $\varphi, \psi \vdash \chi$ (WEAKENING and (2)).
- (4) $\varphi \vdash \chi$ (SUBSTITUTION and (1) and (3)). <!-- src: DM-N-413R#p002; ref: Proof of Example 2; type: direct -->

Proof of: if $\Phi, \varphi \vdash \psi$ and $\Phi, \psi \vdash \chi$, then $\Phi, \varphi \vdash \chi$:

- (1) $\Phi, \varphi \vdash \psi$ (hypothesis).
- (2) $\Phi, \psi \vdash \chi$ (hypothesis).
- (3) $\Phi, \varphi, \psi \vdash \chi$ (WEAKENING and (2)).
- (4) $\Phi, \varphi \vdash \chi$ (SUBSTITUTION and (1) and (3)). <!-- src: DM-N-413R#p002; ref: Proof of Example 2; type: direct -->

### 4.2 Conjunction

Primitive rules:

- **AND-INTRO**: $\varphi, \psi \vdash \varphi \land \psi$.
- **AND-ELIM1**: $\varphi \land \psi \vdash \varphi$.
- **AND-ELIM2**: $\varphi \land \psi \vdash \psi$. <!-- src: DM-N-413R#p002; ref: Definition 3; type: direct -->

**Example.** Prove the following derivations.

- **AND-R**: If $\Phi \vdash \psi$ and $\Phi \vdash \chi$, then $\Phi \vdash \psi \land \chi$.
- If $\Phi \vdash \psi \land \chi$, then $\Phi \vdash \psi$.
- If $\Phi \vdash \psi \land \chi$, then $\Phi \vdash \chi$.
- If $\Phi, \psi_1 \land \psi_2 \vdash \chi$, then $\Phi, \psi_1, \psi_2 \vdash \chi$.
- If $\Phi, \psi_1 \vdash \chi$, $\Phi, \psi_1 \land \psi_2 \vdash \chi$.
- If $\Phi, \psi_2 \vdash \chi$, $\Phi, \psi_1 \land \psi_2 \vdash \chi$. *(The last two bullets are printed without the word "then".)* <!-- src: DM-N-413R#p002 + DM-N-413R#p003; ref: Example 4; type: direct -->

Proof of AND-R:

- (1) $\psi, \chi \vdash \psi \land \chi$ (AND-INTRO).
- (2) $\Phi, \psi, \chi \vdash \psi \land \chi$ (WEAKENING and (1)).
- (3) $\Phi \vdash \chi$ (hypothesis).
- (4) $\Phi, \psi \vdash \chi$ (WEAKENING and (3)).
- (5) $\Phi, \psi \vdash \psi \land \chi$ (SUBSTITUTION and (2) and (4)).
- (6) $\Phi \vdash \psi$ (hypothesis).
- (7) $\Phi \vdash \psi \land \chi$ (SUBSTITUTION and (5) and (6)). <!-- src: DM-N-413R#p003; ref: Proof of Example 4; type: direct -->

Proof of: if $\Phi \vdash \psi \land \chi$, then $\Phi \vdash \psi$:

- (1) $\Phi \vdash \psi \land \chi$ (hypothesis).
- (2) $\psi \land \chi \vdash \psi$ (AND-ELIM1).
- (3) $\Phi, \psi \land \chi \vdash \psi$ (WEAKENING and (2)).
- (4) $\Phi \vdash \psi$ (SUBSTITUTION and (1) and (3)).

For "If $\Phi \vdash \psi \land \chi$, then $\Phi \vdash \chi$": Similar. <!-- src: DM-N-413R#p003; ref: Proof of Example 4; type: direct -->

Proof of: if $\Phi, \psi_1 \land \psi_2 \vdash \chi$, then $\Phi, \psi_1, \psi_2 \vdash \chi$:

- (1) $\psi_1, \psi_2 \vdash \psi_1 \land \psi_2$ (AND-INTRO).
- (2) $\Phi, \psi_1, \psi_2 \vdash \psi_1 \land \psi_2$ (WEAKENING and (1)).
- (3) $\Phi, \psi_1 \land \psi_2 \vdash \chi$ (hypothesis).
- (4) $\Phi, \psi_1, \psi_2, \psi_1 \land \psi_2 \vdash \chi$ (WEAKENING and (3)).
- (5) $\Phi, \psi_1, \psi_2 \vdash \chi$ (SUBSTITUTION and (2) and (4)). *(No proofs are printed for the last two bullets of the example.)* <!-- src: DM-N-413R#p003; ref: Proof of Example 4; type: direct -->

Derived theorems (note: **and-L** is the converse direction of the fourth bullet above):

- **and-L**: If $\Phi, \psi_1, \psi_2 \vdash \chi$, then $\Phi, \psi_1 \land \psi_2 \vdash \chi$.
- **and-comm**: $\varphi \land \psi \dashv\vdash \psi \land \varphi$.
- **and-assoc**: $(\varphi \land \psi) \land \chi \dashv\vdash \varphi \land (\psi \land \chi)$. <!-- src: DM-N-420#p001; ref: Theorem 2; type: direct -->

Proof of and-L:

- (1) $\Phi, \psi_1, \psi_2 \vdash \chi$ (hypothesis).
- (2) $\psi_1 \land \psi_2 \vdash \psi_1$ (and-elim1).
- (3) $\Phi, \psi_1 \land \psi_2 \vdash \psi_1$ (weakening and (2)).
- (4) $\psi_1 \land \psi_2 \vdash \psi_2$ (and-elim2).
- (5) $\Phi, \psi_1 \land \psi_2, \psi_1 \vdash \psi_2$ (weakening and (4)).
- (6) $\Phi, \psi_1 \land \psi_2, \psi_1, \psi_2 \vdash \chi$ (weakening and (1)).
- (7) $\Phi, \psi_1 \land \psi_2, \psi_1 \vdash \chi$ (substitution and (5) and (6)).
- (8) $\Phi, \psi_1 \land \psi_2 \vdash \chi$ (substitution and (3) and (7)). <!-- src: DM-N-420#p001; ref: Proof of Theorem 2 (and-L); type: direct -->

Proof of and-comm — it suffices to prove: $\varphi \land \psi \vdash \psi \land \varphi$:

- (1) $\varphi \land \psi \vdash \psi$ (and-elim2).
- (2) $\varphi \land \psi \vdash \varphi$ (and-elim1).
- (3) $\varphi \land \psi \vdash \psi \land \varphi$ (and-R and (1) and (2)). <!-- src: DM-N-420#p001; ref: Proof of Theorem 2 (and-comm); type: direct -->

Proof of and-assoc, from left to right (only this direction is shown):

- (1) $\varphi, \psi, \chi \vdash \varphi$ (assumption).
- (2) $(\varphi \land \psi), \chi \vdash \varphi$ (and-L and (1)).
- (3) $(\varphi \land \psi) \land \chi \vdash \varphi$ (and-L and (2)).
- (4) $\varphi, \psi, \chi \vdash \psi$ (assumption). 
- (5) $(\varphi \land \psi), \chi \vdash \psi$ (and-L and (4)).
- (6) $(\varphi \land \psi) \land \chi \vdash \psi$ (and-L and (5)).
- (7) $(\varphi \land \psi) \land \chi \vdash \chi$ (and-elim2).
- (8) $(\varphi \land \psi) \land \chi \vdash (\psi \land \chi)$ (and-R and (6) and (7)).
- (9) $(\varphi \land \psi) \land \chi \vdash \varphi \land (\psi \land \chi)$ (and-R and (3) and (8)). <!-- src: DM-N-420#p001 + DM-N-420#p002; ref: Proof of Theorem 2 (and-assoc); type: direct -->

Congruence of $\land$ with respect to $\vdash$:

- **Example.** If $\psi_1 \vdash \psi_2$ and $\chi_1 \vdash \chi_2$, then $\psi_1 \land \chi_1 \vdash \psi_2 \land \chi_2$.

  Proof:
  - (1) $\psi_1 \vdash \psi_2$ (hypothesis).
  - (2) $\psi_1, \chi_1 \vdash \psi_2$ (weakening and (1)).
  - (3) $\chi_1 \vdash \chi_2$ (hypothesis).
  - (4) $\psi_1, \chi_1 \vdash \chi_2$ (weakening and (3)).
  - (5) $\psi_1, \chi_1 \vdash \psi_2 \land \chi_2$ (and-R and (2) and (4)).
  - (6) $\psi_1 \land \chi_1 \vdash \psi_2 \land \chi_2$ (and-L and (5)). <!-- src: DM-N-420#p002; ref: Example 3; type: direct -->

- **Theorem.** If $\Phi, \psi_1 \vdash \psi_2$ and $\Phi, \chi_1 \vdash \chi_2$, then $\Phi, \psi_1 \land \chi_1 \vdash \psi_2 \land \chi_2$.

  Proof:
  - (1) $\Phi, \psi_1 \vdash \psi_2$ (hypothesis).
  - (2) $\Phi, \psi_1, \chi_1 \vdash \psi_2$ (weakening and (1)).
  - (3) $\Phi, \chi_1 \vdash \chi_2$ (hypothesis).
  - (4) $\Phi, \psi_1, \chi_1 \vdash \chi_2$ (weakening and (3)).
  - (5) $\Phi, \psi_1, \chi_1 \vdash \psi_2 \land \chi_2$ (and-R and (2) and (4)).
  - (6) $\Phi, \psi_1 \land \chi_1 \vdash \psi_2 \land \chi_2$ (and-L and (5)).

  *(In the printed proof every occurrence of $\Phi$ is typeset in red: this proof is the previous example's proof with the extra premise set $\Phi$ carried through every line.)* <!-- src: DM-N-420#p002; ref: Theorem 4; type: direct -->

### 4.3 Disjunction

Primitive rules:

- **or-intro1**: $\varphi \vdash \varphi \lor \psi$.
- **or-intro2**: $\psi \vdash \varphi \lor \psi$.
- **or-elim (or-L)**: if $\Phi, \psi_1 \vdash \chi$ and $\Phi, \psi_2 \vdash \chi$, then $\Phi, \psi_1 \lor \psi_2 \vdash \chi$. <!-- src: DM-N-420#p002; ref: Definition 5; type: direct -->

Derived rules:

- **or-R1**: If $\Phi \vdash \psi$, then $\Phi \vdash \psi \lor \chi$.
- **or-R2**: If $\Phi \vdash \chi$, then $\Phi \vdash \psi \lor \chi$. <!-- src: DM-N-420#p002; ref: Example 6; type: direct -->

Proof of or-R1 (no proof of or-R2 is shown):

- (1) $\Phi \vdash \psi$ (hypothesis).
- (2) $\psi \vdash \psi \lor \chi$ (or-intro1).
- (3) $\Phi, \psi \vdash \psi \lor \chi$ (weakening and (2)).
- (4) $\Phi \vdash \psi \lor \chi$ (substitution and (1) and (3)). <!-- src: DM-N-420#p002 + DM-N-420#p003; ref: Proof of Example 6 (or-R1); type: direct -->

Derived theorems:

- **or-comm**: $\varphi \lor \psi \dashv\vdash \psi \lor \varphi$.
- **or-assoc**: $(\varphi \lor \psi) \lor \chi \dashv\vdash \varphi \lor (\psi \lor \chi)$. <!-- src: DM-N-420#p003; ref: Theorem 7; type: direct -->

Proof of or-comm — it suffices to prove: $\varphi \lor \psi \vdash \psi \lor \varphi$ (no proof of or-assoc is shown):

- (1) $\psi \vdash \psi \lor \varphi$ (or-intro1).
- (2) $\varphi \vdash \psi \lor \varphi$ (or-intro2).
- (3) $\varphi \lor \psi \vdash \psi \lor \varphi$ (or-elim and (2) and (1)). <!-- src: DM-N-420#p003; ref: Proof of Theorem 7 (or-comm); type: direct -->

### 4.4 Distributivity, absorption, idempotence

- **Distributivity:**
  - $\varphi \land (\psi \lor \chi) \dashv\vdash (\varphi \land \psi) \lor (\varphi \land \chi)$.
  - $\varphi \lor (\psi \land \chi) \dashv\vdash (\varphi \lor \psi) \land (\varphi \lor \chi)$. <!-- src: DM-N-422#p001; ref: Theorem 1; type: direct -->
- **Absorption:**
  - $\varphi \land (\varphi \lor \psi) \dashv\vdash \varphi$.
  - $\varphi \lor (\varphi \land \psi) \dashv\vdash \varphi$. <!-- src: DM-N-422#p001; ref: Theorem 2; type: direct -->
- **Idempotence:**
  - $\varphi \land \varphi \dashv\vdash \varphi$.
  - $\varphi \lor \varphi \dashv\vdash \varphi$. <!-- src: DM-N-422#p001; ref: Theorem 3; type: direct -->

### 4.5 Negation

Primitive rules:

- **CONTRADICTION**: If $\Phi \vdash \psi$ and $\Phi \vdash \neg\psi$, then $\Phi \vdash \chi$.
- **EXCLUDED-MIDDLE**: $\vdash \varphi \lor \neg\varphi$. <!-- src: DM-N-422#p001; ref: Definition 4; type: direct -->

Derived theorems:

- **CASE-ANALYSIS**: If $\Phi, \neg\varphi \vdash \psi$ and $\Phi, \varphi \vdash \psi$, then $\Phi \vdash \psi$.
- **DOUBLE-NEGATION**: $\varphi \dashv\vdash \neg\neg\varphi$. <!-- src: DM-N-422#p001; ref: Theorem 5; type: direct -->
- **CONTRAPOSITION** (four forms):
  - If $\Phi, \psi \vdash \chi$, then $\Phi, \neg\chi \vdash \neg\psi$.
  - If $\Phi, \neg\psi \vdash \chi$, then $\Phi, \neg\chi \vdash \psi$.
  - If $\Phi, \neg\psi \vdash \neg\chi$, then $\Phi, \chi \vdash \psi$.
  - If $\Phi, \psi \vdash \neg\chi$, then $\Phi, \chi \vdash \neg\psi$. <!-- src: DM-N-422#p001; ref: Theorem 6; type: direct -->
- **DE-MORGAN**:
  - $\neg(\varphi \land \psi) \dashv\vdash \neg\varphi \lor \neg\psi$.
  - $\neg(\varphi \lor \psi) \dashv\vdash \neg\varphi \land \neg\psi$. <!-- src: DM-N-422#p001; ref: Theorem 7; type: direct -->

### 4.6 Implication

Primitive rules (stated twice in the notes; the elimination rule is named "implies-elim (Modus Ponens)" the first time and "modus-ponens" the second time):

- **implies-intro**: If $\Phi, \varphi \vdash \psi$, then $\Phi \vdash \varphi \to \psi$.
- **implies-elim** (*Modus Ponens*): $\varphi \to \psi, \varphi \vdash \psi$. <!-- src: DM-N-427#p001; ref: Definition 1 + Definition 3; type: compressed -->

**Example.** Prove: $\vdash \varphi \to \varphi$.

Formal proof:

- (1) $\varphi \vdash \varphi$ (assumption).
- (2) $\vdash \varphi \to \varphi$ (implies-intro on (1)). <!-- src: DM-N-427#p001; ref: Example 2 + Example 4; type: compressed -->

**Transitivity of implication** — proof of $\varphi \to \psi, \psi \to \chi \vdash \varphi \to \chi$:

- (1) $\varphi \to \psi, \varphi \vdash \psi$ (modus-ponens).
- (2) $\varphi \to \psi, \psi \to \chi, \varphi \vdash \psi$ (weakening and (1)).
- (3) $\psi \to \chi, \psi \vdash \chi$ (modus-ponens).
- (4) $\varphi \to \psi, \psi \to \chi, \varphi, \psi \vdash \chi$ (weakening and (3)).
- (5) $\varphi \to \psi, \psi \to \chi, \varphi \vdash \chi$ (substitution and (2) and (4)).
- (6) $\varphi \to \psi, \psi \to \chi \vdash \varphi \to \chi$ (implies-intro and (5)). <!-- src: DM-N-427#p001; type: direct -->

Derived theorems (all two-way):

- $(\varphi \land \psi) \to \chi \dashv\vdash \varphi \to (\psi \to \chi)$.
- $(\varphi \lor \psi) \to \chi \dashv\vdash (\varphi \to \chi) \land (\psi \to \chi)$.
- $\varphi \to \psi \dashv\vdash \neg\psi \to \neg\varphi$. <!-- src: DM-N-427#p001; ref: Theorem 5; type: direct -->

## 5 First-Order Logic: Quantifier Rules

### 5.1 Universal quantifier

- **forall-intro**: If $\Phi \vdash \psi(x)$, then $\Phi \vdash \forall x.\ \psi(x)$ ($\Phi$ is irrelevant with $x$).
- **forall-elim**: $\forall x. \varphi(x) \vdash \varphi(t)$. <!-- src: DM-N-506#p001; ref: Definition 1; type: direct -->

**Example.** Prove: $\forall x.(\varphi(x) \to \psi(x)), \forall x.\varphi(x) \vdash \forall x.\psi(x)$.

Formal proof:

- (1) $\forall x.\varphi(x) \vdash \varphi(x)$ (forall-elim).
- (2) $\forall x.(\varphi(x) \to \psi(x)), \forall x.\varphi(x) \vdash \varphi(x)$ (weakening and (1)).
- (3) $\forall x.(\varphi(x) \to \psi(x)) \vdash \varphi(x) \to \psi(x)$ (forall-elim).
- (4) $\forall x.(\varphi(x) \to \psi(x)), \forall x.\varphi(x), \varphi(x) \vdash \varphi(x) \to \psi(x)$ (weakening and (3)).
- (5) $\varphi(x) \to \psi(x), \varphi(x) \vdash \psi(x)$ (modus-ponens).
- (6) $\forall x.(\varphi(x) \to \psi(x)), \forall x.\varphi(x), \varphi(x) \to \psi(x), \varphi(x) \vdash \psi(x)$ (weakening and (5)).
- (7) $\forall x.(\varphi(x) \to \psi(x)), \forall x.\varphi(x), \varphi(x) \vdash \psi(x)$ (substitution and (4), (6)).
- (8) $\forall x.(\varphi(x) \to \psi(x)), \forall x.\varphi(x) \vdash \psi(x)$ (substitution and (2), (7)). 
- (9) $\forall x.(\varphi(x) \to \psi(x)), \forall x.\varphi(x) \vdash \forall x.\psi(x)$ (forall-intro and (8)). <!-- src: DM-N-506#p001; ref: Example 2; type: direct -->

**Example.** Prove: $\forall x.(\varphi(x) \to \psi(x)), \forall x.\varphi(f(x)) \vdash \forall x.\psi(f(x))$. 

Formal proof:

- (1) $\forall x.\varphi(f(x)) \vdash \varphi(f(x))$ (forall-elim).
- (2) $\forall x.(\varphi(x) \to \psi(x)), \forall x.\varphi(f(x)) \vdash \varphi(f(x))$ (weakening and (1)).
- (3) $\forall x.(\varphi(x) \to \psi(x)) \vdash \varphi(f(x)) \to \psi(f(x))$ (forall-elim).
- (4) $\forall x.(\varphi(x) \to \psi(x)), \forall x.\varphi(f(x)), \varphi(f(x)) \vdash \varphi(f(x)) \to \psi(f(x))$ (weakening and (3)).
- (5) $\varphi(f(x)) \to \psi(f(x)), \varphi(f(x)) \vdash \psi(f(x))$ (modus-ponens).
- (6) $\forall x.(\varphi(x) \to \psi(x)), \forall x.\varphi(f(x)), \varphi(f(x)) \to \psi(f(x)), \varphi(f(x)) \vdash \psi(f(x))$ (weakening and (5)).
- (7) $\forall x.(\varphi(x) \to \psi(x)), \forall x.\varphi(f(x)), \varphi(f(x)) \vdash \psi(f(x))$ (substitution and (4), (6)).
- (8) $\forall x.(\varphi(x) \to \psi(x)), \forall x.\varphi(f(x)) \vdash \psi(f(x))$ (substitution and (2), (7)). 
- (9) $\forall x.(\varphi(x) \to \psi(x)), \forall x.\varphi(f(x)) \vdash \forall x.\psi(f(x))$ (forall-intro and (8)). <!-- src: DM-N-506#p001 + DM-N-506#p002; ref: Example 3; type: direct -->

### 5.2 Existential quantifier

- **exists-intro**: $\varphi(t) \vdash \exists x.\varphi(x)$.
- **exists-elim**: If $\Phi, \psi(x) \vdash \chi$, then $\Phi, \exists x.\psi(x) \vdash \chi$ ($\Phi$ and $\chi$ are irrelevant with $x$). <!-- src: DM-N-506#p002; ref: Definition 5; type: direct -->

**Example.** Prove: $\exists x.\varphi(x), \forall x.(\varphi(x) \to \psi(x)) \vdash \exists x.\psi(x)$.

Formal proof:

- (1) $\forall x.(\varphi(x) \to \psi(x)) \vdash \varphi(x) \to \psi(x)$ (forall-elim).
- (2) $\varphi(x), \forall x.(\varphi(x) \to \psi(x)) \vdash \varphi(x) \to \psi(x)$ (weakening and (1)).
- (3) $\varphi(x) \to \psi(x), \varphi(x) \vdash \psi(x)$ (modus-ponens).
- (4) $\varphi(x), \forall x.(\varphi(x) \to \psi(x)), \varphi(x) \to \psi(x) \vdash \psi(x)$ (weakening and (3)).
- (5) $\varphi(x), \forall x.(\varphi(x) \to \psi(x)) \vdash \psi(x)$ (substitution and (2), (4)).
- (6) $\psi(x) \vdash \exists x.\psi(x)$ (exists-intro).
- (7) $\varphi(x), \forall x.(\varphi(x) \to \psi(x)), \psi(x) \vdash \exists x.\psi(x)$ (weakening and (6)).
- (8) $\varphi(x), \forall x.(\varphi(x) \to \psi(x)) \vdash \exists x.\psi(x)$ (substitution and (5) and (7)).
- (9) $\exists x.\varphi(x), \forall x.(\varphi(x) \to \psi(x)) \vdash \exists x.\psi(x)$ (exists-elim and (8)). <!-- src: DM-N-506#p002; ref: Example 6; type: direct -->

### 5.3 Distribution of quantifiers over conjunction and disjunction

- $\forall x.\varphi(x) \land \psi(x) \dashv\vdash (\forall x.\varphi(x)) \land (\forall x.\psi(x))$ — two-way.
- $(\forall x.\varphi(x)) \lor (\forall x.\psi(x)) \vdash \forall x.\varphi(x) \lor \psi(x)$ — one-way only. <!-- src: DM-N-506#p002; ref: Theorem 4; type: direct -->
- $(\exists x.\varphi(x)) \lor (\exists x.\psi(x)) \dashv\vdash \exists x.\varphi(x) \lor \psi(x)$ — two-way.
- $\exists x.\varphi(x) \land \psi(x) \vdash (\exists x.\varphi(x)) \land (\exists x.\psi(x))$ — one-way only. <!-- src: DM-N-506#p002; ref: Theorem 7; type: direct -->

## 6 Quantifier Properties

### 6.1 Basic properties

- If $\Phi, \varphi(x) \vdash \psi(x)$ and $\Phi$ is irrelevant with $x$, then $\Phi, \forall x.\varphi(x) \vdash \forall x.\psi(x)$.
- If $\Phi, \varphi(x) \vdash \psi(x)$ and $\Phi$ is irrelevant with $x$, then $\Phi, \exists x.\varphi(x) \vdash \exists x.\psi(x)$. <!-- src: DM-N-509#p001; ref: Theorem 1; type: direct -->

### 6.2 Nested quantifiers

- $\forall x.\forall y.\ \varphi(x, y) \dashv\vdash \forall y.\ \forall x.\ \varphi(x, y)$.
- $\exists x.\exists y.\ \varphi(x, y) \dashv\vdash \exists y.\ \exists x.\ \varphi(x, y)$.
- $\exists x.\forall y.\ \varphi(x, y) \vdash \forall y.\ \exists x.\ \varphi(x, y)$ — one-way only. <!-- src: DM-N-509#p001; ref: Theorem 2; type: direct -->

### 6.3 Negated quantifiers

- $\neg\forall x.\varphi(x) \dashv\vdash \exists x.\neg\varphi(x)$.
- $\neg\exists x.\varphi(x) \dashv\vdash \forall x.\neg\varphi(x)$. <!-- src: DM-N-509#p001; ref: Theorem 3; type: direct -->

### 6.4 Quantifier with restricted domain

Distribution over the restricted body (unparenthesized sides scope as $\forall x.(\varphi(x) \to (\psi(x) \land \chi(x)))$ etc.):

- $\forall x.\varphi(x) \to \psi(x) \land \chi(x) \dashv\vdash (\forall x.\varphi(x) \to \psi(x)) \land (\forall x.\varphi(x) \to \chi(x))$.
- $(\forall x.\varphi(x) \to \psi(x)) \lor (\forall x.\varphi(x) \to \chi(x)) \vdash \forall x.\varphi(x) \to \psi(x) \lor \chi(x)$ — one-way only.
- $\exists x.\varphi(x) \land (\psi(x) \lor \chi(x)) \dashv\vdash (\exists x.\varphi(x) \land \psi(x)) \lor (\exists x.\varphi(x) \land \chi(x))$.
- $\exists x.\varphi(x) \land (\psi(x) \land \chi(x)) \vdash (\exists x.\varphi(x) \land \psi(x)) \land (\exists x.\varphi(x) \land \chi(x))$ — one-way only. <!-- src: DM-N-509#p001; ref: Theorem 4; type: direct -->

Exchanging two restricted-domain quantifiers (the first two bullets appear in both handouts; the third only in the May 11 notes):

- $\forall x.\varphi(x) \to (\forall y.\psi(y) \to \chi(x, y)) \dashv\vdash \forall y.\psi(y) \to (\forall x.\varphi(x) \to \chi(x, y))$.
- $\exists x.\varphi(x) \land (\exists y.\psi(y) \land \chi(x, y)) \dashv\vdash \exists y.\psi(y) \land (\exists x.\varphi(x) \land \chi(x, y))$.
- $\exists x.\varphi(x) \land (\forall y.\psi(y) \to \chi(x, y)) \vdash \forall y.\psi(y) \to (\exists x.\varphi(x) \land \chi(x, y))$ — one-way only. <!-- src: DM-N-509#p001 + DM-N-511#p001; ref: Theorem 5 (May 9) + Theorem 1 (May 11); type: synthesized -->

Negated restricted-domain quantifiers:

- $\neg\forall x.\ \varphi(x) \to \psi(x) \dashv\vdash \exists x.\ \varphi(x) \land \neg\psi(x)$.
- $\neg\exists x.\ \varphi(x) \land \psi(x) \dashv\vdash \forall x.\varphi(x) \to \neg\psi(x)$. <!-- src: DM-N-511#p001; ref: Theorem 2; type: direct -->

### 6.5 Quantifier with unrelated proposition

All four require the side condition that $\varphi$ is irrelevant with $x$:

- $\varphi \land \forall x.\psi(x) \dashv\vdash \forall x.\ \varphi \land \psi(x)$ (if $\varphi$ is irrelevant with $x$).
- $\varphi \lor \forall x.\psi(x) \dashv\vdash \forall x.\ \varphi \lor \psi(x)$ (if $\varphi$ is irrelevant with $x$).
- $\varphi \land \exists x.\psi(x) \dashv\vdash \exists x.\ \varphi \land \psi(x)$ (if $\varphi$ is irrelevant with $x$).
- $\varphi \lor \exists x.\psi(x) \dashv\vdash \exists x.\ \varphi \lor \psi(x)$ (if $\varphi$ is irrelevant with $x$). <!-- src: DM-N-511#p001; ref: Theorem 3; type: direct -->

Vacuous quantification:

- If $\varphi$ is irrelevant with $x$, $\varphi \dashv\vdash \forall x.\varphi$.
- If $\varphi$ is irrelevant with $x$, $\varphi \dashv\vdash \exists x.\varphi$. <!-- src: DM-N-511#p001; ref: Theorem 4; type: direct -->

Unrelated antecedent:

- $\varphi \to \forall x.\psi(x) \dashv\vdash \forall x.\ \varphi \to \psi(x)$ (if $\varphi$ is irrelevant with $x$). <!-- src: DM-N-511#p001; ref: Theorem 5; type: direct -->

### 6.6 Quantifier with special domain

Empty-domain style entailments (all one-way $\vdash$):

- $\forall x.\neg\varphi(x) \vdash \forall x.\varphi(x) \to \psi(x)$.
- $\forall x.\neg\varphi(x) \vdash \neg\exists x.\varphi(x) \land \psi(x)$. <!-- src: DM-N-511#p001; ref: Theorem 6; type: direct -->
- $\forall x.\psi(x) \vdash \forall x.\varphi(x) \to \psi(x)$.
- $\forall x.\neg\psi(x), \exists x.\varphi(x) \vdash \neg\forall x.\varphi(x) \to \psi(x)$.
- $\forall x.\psi(x), \exists x.\varphi(x) \vdash \exists x.\varphi(x) \land \psi(x)$.
- $\forall x.\neg\psi(x) \vdash \neg\exists x.\varphi(x) \land \psi(x)$. <!-- src: DM-N-511#p001 + DM-N-511#p002; ref: Theorem 7; type: direct -->

## 7 Syntax of First-Order Logic

### 7.1 Symbols, terms and propositions

- Variables symbols: $x$, $y$, $z$, ...
- Constants symbols: $c_1$, $c_2$, ...
- Function symbols: $f$, $g$, $h$, ...
- Predicate symbols: $P$, $Q$, $R$, ...
- Terms ($t$): $x$, $y$, $z$, ..., $c_1$, $c_2$, ..., $f(t_1, t_2, ...)$, ...
- Proposition ($\phi$): $P(t)$, $Q(t_1, t_2)$, $\phi_1 \land \phi_2$, $\neg\phi$, $\exists x.\phi$, $\forall y.\psi$, ... <!-- src: DM-N-511#p002; ref: Definition 8; type: direct -->

**Quiz.** If $x, y, z, \ldots$ are variable symbols, $c_0, c_1, \ldots$ are constant symbols, $f, g, \ldots$ are function symbols, and $P, Q, R, \ldots$ are predicate symbols, then: 

- which of the following are first order logic terms?
  - $x+1$, $x+y$, $f(x,y)$, $f(x)+g(y)$
  - $c_1+c_2$, $f(g(c_1))$, $h(f(x), g(c_2))$
- which of the following are first order logic propositions?
  - $P(x)$, $Q(f(c_0))$, $f(x) < f(x+1)$, $R(x,y) \land R(y,x)$
  - $\forall x.\exists y.\,(x < y)$, $\forall x.\forall y.\,(R(x,y) \lor R(y,x))$ <!-- src: DM-N-511#p002; ref: Example 9; type: direct -->

Answer: terms — $f(x,y)$, $f(g(c_1))$ and $h(f(x), g(c_2))$; propositions — $P(x)$, $Q(f(c_0))$, $R(x,y) \land R(y,x)$ and $\forall x.\forall y.\,(R(x,y) \lor R(y,x))$. <!-- src: DM-N-511#p002; ref: Example 9; type: direct -->

### 7.2 Free and bound occurrences; open and closed propositions

- **Free occurrence and bound occurrence.** Assume $x$ is a variable symbol. In $\forall x.\phi$ and $\exists x.\phi$, all occurrences of $x$ are called **bound** occurrences. All other occurrences of $x$ are **free** occurrences. <!-- src: DM-N-511#p002; ref: Definition 10; type: direct -->
- **Open proposition and closed proposition.** A FOL proposition $\phi$ is **open** if it contains at least one free occurrence of variables. Otherwise, $\phi$ is called a **closed** proposition. <!-- src: DM-N-511#p002; ref: Definition 11; type: direct -->

**Example.** If $L$ is a binary predicate symbol and $f$ is a unary function symbol:

- $x$ freely occurs in $L(x, f(x))$;
- $x$ and $y$ freely occur in $L(x, y)$;
- $x$ does not freely occur in $\forall x.L(x, f(x))$;
- $x$ freely occurs in $\exists y.L(x, y)$;
- $y$ does not freely occur in $\exists y.L(x, y)$;
- neither $x$ nor $y$ does freely occur in $\forall x.\exists y.L(x,y)$;
- $L(x, f(x))$ is open;
- $\forall x.L(x, f(x))$ is closed;
- $L(x, y)$ is open;
- $\exists y.L(x, y)$ is open;
- $\forall x.\exists y.L(x, y)$ is closed. <!-- src: DM-N-511#p002 + DM-N-511#p003; ref: Example 12; type: direct -->

### 7.3 Syntactic replacement

- $(\varphi \land \psi)[x_1 \mapsto t_1, ..., x_n \mapsto t_n] = \varphi[x_1 \mapsto t_1, ..., x_n \mapsto t_n] \land \psi[x_1 \mapsto t_1, ..., x_n \mapsto t_n]$.
- $(\varphi \lor \psi)[x_1 \mapsto t_1, ..., x_n \mapsto t_n] = \varphi[x_1 \mapsto t_1, ..., x_n \mapsto t_n] \lor \psi[x_1 \mapsto t_1, ..., x_n \mapsto t_n]$.
- $(\neg\varphi)[x_1 \mapsto t_1, ..., x_n \mapsto t_n] = \neg\varphi[x_1 \mapsto t_1, ..., x_n \mapsto t_n]$.
- $(\forall x.\varphi)[x_1 \mapsto t_1, ..., x_n \mapsto t_n] = ...$
- $(\exists x.\varphi)[x_1 \mapsto t_1, ..., x_n \mapsto t_n] = ...$

(The two quantifier cases are literally left as "$= ...$" in the notes.) <!-- src: DM-N-511#p003; ref: Definition 13; type: direct -->

### 7.4 Quantifier rules, restated with syntactic precision

- **FORALL-INTRO**: If $\Phi \vdash \psi$ and $x$ does not freely occur in $\Phi$, then $\Phi \vdash \forall x.\ \psi$.
- **FORALL-ELIM**: $\forall x.\varphi \vdash \varphi[x \mapsto t]$. <!-- src: DM-N-511#p003; ref: Definition 14; type: direct -->
- **EXISTS-INTRO**: $\varphi[x \mapsto t] \vdash \exists x.\varphi$.
- **EXISTS-ELIM**: If $\Phi, \psi \vdash \chi$ and $x$ does not freely occur in $\Phi$ or $\chi$, then $\Phi, \exists x.\psi \vdash \chi$. <!-- src: DM-N-511#p003; ref: Definition 15; type: direct -->

These restate the quantifier rules of Section 5 with the informal side condition "$\Phi$ is irrelevant with $x$" made precise as "$x$ does not freely occur in $\Phi$ (or $\chi$)", and instantiation/generalization expressed via syntactic replacement $\varphi[x \mapsto t]$. <!-- src: DM-N-506#p001 + DM-N-506#p002 + DM-N-511#p003; type: one-step-inferred -->
