---
title: "离散数学 · 数理逻辑 · 速览"
description: "离散数学课程笔记：离散数学 · 数理逻辑 · 速览。"
---

<div class="note-meta"><a href="/courses/discrete-math/">离散数学目录</a><a href="/courses/discrete-math/chapter-02/">阅读详版</a><a href="/downloads/discrete-math/chapter-02-quick.md" download>下载 Markdown</a></div>

Condensed recall index for the full notes in `DM_C2.md`. <!-- src: DM-N-330#p001 + DM-N-511#p003; type: compressed -->

## 1 Translating natural language into logic

| Pattern | Logic shape |
|---|---|
| "Every $A$ is $B$" | $\forall x.\ A(x) \to B(x)$ <!-- src: DM-N-330#p001; type: compressed --> |
| "Some $A$ is $B$" | $\exists x.\ A(x) \land B(x)$ <!-- src: DM-N-330#p001; type: compressed --> |
| "For every $A$ there is some related $B$" | $\forall x.\ (S(x) \to \exists y.\ M(x, y))$ <!-- src: DM-N-330#p001; type: compressed --> |
| Named individual (e.g. "lions") | constant symbol $c_L$: $F(c_L)$, $\neg D(c_L)$ <!-- src: DM-N-330#p001 + DM-N-330#p002; type: compressed --> |
| "There is a unique $x$ with property $F$" | $\exists x.\ ((S(x) \land F(x)) \land \forall y.\ ((S(y) \land F(y)) \to y = x))$ <!-- src: DM-N-330#p002; type: compressed --> |
| "$f$ is injective" | $\forall x. \forall y.\ (f(x) = f(y) \to x = y)$ <!-- src: DM-N-330#p002; type: compressed --> |
| "$f$ is surjective" | $\forall y. \exists x.\ (f(x) = y)$ <!-- src: DM-N-330#p002; type: compressed --> |

## 2 Notation

- $\Phi \vdash \psi$: we can derive the single proposition $\psi$ from the proposition set $\Phi$. <!-- src: DM-N-330#p002; ref: Notation 1; type: compressed -->
- $\varphi \dashv\vdash \psi$ if and only if both $\varphi \vdash \psi$ and $\psi \vdash \varphi$. <!-- src: DM-N-420#p001; ref: Definition 1; type: direct -->

## 3 Propositional proof rules

- **Structural**: ASSUMPTION (if $\varphi \in \Phi$ then $\Phi \vdash \varphi$); WEAKENING (if $\Phi \subseteq \Phi'$ and $\Phi \vdash \psi$ then $\Phi' \vdash \psi$); SUBSTITUTION (if $\Phi \vdash \psi$ and $\Phi, \psi \vdash \chi$ then $\Phi \vdash \chi$). <!-- src: DM-N-413R#p002; ref: Definition 1; type: compressed -->
- **Conjunction**: AND-INTRO $\varphi, \psi \vdash \varphi \land \psi$; AND-ELIM1 $\varphi \land \psi \vdash \varphi$; AND-ELIM2 $\varphi \land \psi \vdash \psi$. Derived: AND-R (if $\Phi \vdash \psi$ and $\Phi \vdash \chi$ then $\Phi \vdash \psi \land \chi$); and-L (if $\Phi, \psi_1, \psi_2 \vdash \chi$ then $\Phi, \psi_1 \land \psi_2 \vdash \chi$, and conversely); and-comm; and-assoc. <!-- src: DM-N-413R#p002 + DM-N-413R#p003 + DM-N-420#p001; type: compressed -->
- **Congruence of $\land$**: if $\Phi, \psi_1 \vdash \psi_2$ and $\Phi, \chi_1 \vdash \chi_2$, then $\Phi, \psi_1 \land \chi_1 \vdash \psi_2 \land \chi_2$. <!-- src: DM-N-420#p002; ref: Theorem 4; type: direct -->
- **Disjunction**: or-intro1 $\varphi \vdash \varphi \lor \psi$; or-intro2 $\psi \vdash \varphi \lor \psi$; or-elim/or-L (if $\Phi, \psi_1 \vdash \chi$ and $\Phi, \psi_2 \vdash \chi$ then $\Phi, \psi_1 \lor \psi_2 \vdash \chi$). Derived: or-R1, or-R2; or-comm; or-assoc. <!-- src: DM-N-420#p002 + DM-N-420#p003; type: compressed -->
- **Laws**: distributivity $\varphi \land (\psi \lor \chi) \dashv\vdash (\varphi \land \psi) \lor (\varphi \land \chi)$ and $\varphi \lor (\psi \land \chi) \dashv\vdash (\varphi \lor \psi) \land (\varphi \lor \chi)$; absorption $\varphi \land (\varphi \lor \psi) \dashv\vdash \varphi$, $\varphi \lor (\varphi \land \psi) \dashv\vdash \varphi$; idempotence $\varphi \land \varphi \dashv\vdash \varphi$, $\varphi \lor \varphi \dashv\vdash \varphi$. <!-- src: DM-N-422#p001; ref: Theorem 1 + Theorem 2 + Theorem 3; type: compressed -->
- **Negation**: CONTRADICTION (if $\Phi \vdash \psi$ and $\Phi \vdash \neg\psi$ then $\Phi \vdash \chi$ — any $\chi$); EXCLUDED-MIDDLE $\vdash \varphi \lor \neg\varphi$; CASE-ANALYSIS (if $\Phi, \neg\varphi \vdash \psi$ and $\Phi, \varphi \vdash \psi$ then $\Phi \vdash \psi$); DOUBLE-NEGATION $\varphi \dashv\vdash \neg\neg\varphi$; DE-MORGAN $\neg(\varphi \land \psi) \dashv\vdash \neg\varphi \lor \neg\psi$, $\neg(\varphi \lor \psi) \dashv\vdash \neg\varphi \land \neg\psi$. <!-- src: DM-N-422#p001; ref: Definition 4 + Theorem 5 + Theorem 7; type: compressed -->
- **CONTRAPOSITION** (all four sign variants): if $\Phi, \psi \vdash \chi$ then $\Phi, \neg\chi \vdash \neg\psi$; if $\Phi, \neg\psi \vdash \chi$ then $\Phi, \neg\chi \vdash \psi$; if $\Phi, \neg\psi \vdash \neg\chi$ then $\Phi, \chi \vdash \psi$; if $\Phi, \psi \vdash \neg\chi$ then $\Phi, \chi \vdash \neg\psi$. <!-- src: DM-N-422#p001; ref: Theorem 6; type: direct -->
- **Implication**: implies-intro (if $\Phi, \varphi \vdash \psi$ then $\Phi \vdash \varphi \to \psi$); modus-ponens $\varphi \to \psi, \varphi \vdash \psi$; transitivity $\varphi \to \psi, \psi \to \chi \vdash \varphi \to \chi$. Two-way laws: $(\varphi \land \psi) \to \chi \dashv\vdash \varphi \to (\psi \to \chi)$; $(\varphi \lor \psi) \to \chi \dashv\vdash (\varphi \to \chi) \land (\psi \to \chi)$; $\varphi \to \psi \dashv\vdash \neg\psi \to \neg\varphi$. <!-- src: DM-N-427#p001; type: compressed -->

## 4 Quantifier rules — watch the side conditions

- **forall-intro**: if $\Phi \vdash \psi(x)$, then $\Phi \vdash \forall x.\ \psi(x)$ — **requires $\Phi$ irrelevant with $x$**. <!-- src: DM-N-506#p001; ref: Definition 1; type: compressed -->
- **forall-elim**: $\forall x. \varphi(x) \vdash \varphi(t)$ — no side condition. <!-- src: DM-N-506#p001; ref: Definition 1; type: compressed -->
- **exists-intro**: $\varphi(t) \vdash \exists x.\varphi(x)$ — no side condition. <!-- src: DM-N-506#p002; ref: Definition 5; type: compressed -->
- **exists-elim**: if $\Phi, \psi(x) \vdash \chi$, then $\Phi, \exists x.\psi(x) \vdash \chi$ — **requires both $\Phi$ and $\chi$ irrelevant with $x$**. <!-- src: DM-N-506#p002; ref: Definition 5; type: compressed -->
- Syntactically precise restatement: "irrelevant with $x$" = "$x$ does not freely occur in"; elimination/introduction use syntactic replacement: FORALL-ELIM $\forall x.\varphi \vdash \varphi[x \mapsto t]$, EXISTS-INTRO $\varphi[x \mapsto t] \vdash \exists x.\varphi$. <!-- src: DM-N-511#p003; ref: Definition 14 + Definition 15; type: compressed -->
- Monotonicity under a quantifier: if $\Phi, \varphi(x) \vdash \psi(x)$ and $\Phi$ is irrelevant with $x$, then $\Phi, \forall x.\varphi(x) \vdash \forall x.\psi(x)$ and $\Phi, \exists x.\varphi(x) \vdash \exists x.\psi(x)$. <!-- src: DM-N-509#p001; ref: Theorem 1; type: compressed -->

## 5 Quantifier facts: two-way vs one-way

Two-way ($\dashv\vdash$):

- $\forall x.\varphi(x) \land \psi(x) \dashv\vdash (\forall x.\varphi(x)) \land (\forall x.\psi(x))$. <!-- src: DM-N-506#p002; ref: Theorem 4; type: direct -->
- $\exists x.\varphi(x) \lor \psi(x) \dashv\vdash (\exists x.\varphi(x)) \lor (\exists x.\psi(x))$. <!-- src: DM-N-506#p002; ref: Theorem 7; type: direct -->
- $\forall x.\forall y.\ \varphi(x, y) \dashv\vdash \forall y.\forall x.\ \varphi(x, y)$; $\exists x.\exists y.\ \varphi(x, y) \dashv\vdash \exists y.\exists x.\ \varphi(x, y)$. <!-- src: DM-N-509#p001; ref: Theorem 2; type: compressed -->
- $\neg\forall x.\varphi(x) \dashv\vdash \exists x.\neg\varphi(x)$; $\neg\exists x.\varphi(x) \dashv\vdash \forall x.\neg\varphi(x)$. <!-- src: DM-N-509#p001; ref: Theorem 3; type: compressed -->
- Restricted domain: $\forall x.\varphi(x) \to \psi(x) \land \chi(x) \dashv\vdash (\forall x.\varphi(x) \to \psi(x)) \land (\forall x.\varphi(x) \to \chi(x))$; $\exists x.\varphi(x) \land (\psi(x) \lor \chi(x)) \dashv\vdash (\exists x.\varphi(x) \land \psi(x)) \lor (\exists x.\varphi(x) \land \chi(x))$. <!-- src: DM-N-509#p001; ref: Theorem 4; type: compressed -->
- Negated restricted domain: $\neg\forall x.\ \varphi(x) \to \psi(x) \dashv\vdash \exists x.\ \varphi(x) \land \neg\psi(x)$; $\neg\exists x.\ \varphi(x) \land \psi(x) \dashv\vdash \forall x.\varphi(x) \to \neg\psi(x)$. <!-- src: DM-N-511#p001; ref: Theorem 2; type: compressed -->
- Exchanging restricted quantifiers (same kind): $\forall x.\varphi(x) \to (\forall y.\psi(y) \to \chi(x, y)) \dashv\vdash \forall y.\psi(y) \to (\forall x.\varphi(x) \to \chi(x, y))$; $\exists x.\varphi(x) \land (\exists y.\psi(y) \land \chi(x, y)) \dashv\vdash \exists y.\psi(y) \land (\exists x.\varphi(x) \land \chi(x, y))$. <!-- src: DM-N-509#p001 + DM-N-511#p001; ref: Theorem 5 (May 9) + Theorem 1 (May 11); type: compressed -->
- Unrelated proposition (all require $\varphi$ irrelevant with $x$): $\varphi \land \forall x.\psi(x) \dashv\vdash \forall x.\ \varphi \land \psi(x)$; $\varphi \lor \forall x.\psi(x) \dashv\vdash \forall x.\ \varphi \lor \psi(x)$; $\varphi \land \exists x.\psi(x) \dashv\vdash \exists x.\ \varphi \land \psi(x)$; $\varphi \lor \exists x.\psi(x) \dashv\vdash \exists x.\ \varphi \lor \psi(x)$; $\varphi \to \forall x.\psi(x) \dashv\vdash \forall x.\ \varphi \to \psi(x)$; vacuous: $\varphi \dashv\vdash \forall x.\varphi$ and $\varphi \dashv\vdash \exists x.\varphi$. <!-- src: DM-N-511#p001; ref: Theorem 3 + Theorem 4 + Theorem 5; type: compressed -->

One-way only ($\vdash$):

- $(\forall x.\varphi(x)) \lor (\forall x.\psi(x)) \vdash \forall x.\varphi(x) \lor \psi(x)$. <!-- src: DM-N-506#p002; ref: Theorem 4; type: direct -->
- $\exists x.\varphi(x) \land \psi(x) \vdash (\exists x.\varphi(x)) \land (\exists x.\psi(x))$. <!-- src: DM-N-506#p002; ref: Theorem 7; type: direct -->
- $\exists x.\forall y.\ \varphi(x, y) \vdash \forall y.\exists x.\ \varphi(x, y)$. <!-- src: DM-N-509#p001; ref: Theorem 2; type: direct -->
- $(\forall x.\varphi(x) \to \psi(x)) \lor (\forall x.\varphi(x) \to \chi(x)) \vdash \forall x.\varphi(x) \to \psi(x) \lor \chi(x)$. <!-- src: DM-N-509#p001; ref: Theorem 4; type: direct -->
- $\exists x.\varphi(x) \land (\psi(x) \land \chi(x)) \vdash (\exists x.\varphi(x) \land \psi(x)) \land (\exists x.\varphi(x) \land \chi(x))$. <!-- src: DM-N-509#p001; ref: Theorem 4; type: direct -->
- $\exists x.\varphi(x) \land (\forall y.\psi(y) \to \chi(x, y)) \vdash \forall y.\psi(y) \to (\exists x.\varphi(x) \land \chi(x, y))$. <!-- src: DM-N-511#p001; ref: Theorem 1; type: direct -->
- Special domain: $\forall x.\neg\varphi(x) \vdash \forall x.\varphi(x) \to \psi(x)$; $\forall x.\neg\varphi(x) \vdash \neg\exists x.\varphi(x) \land \psi(x)$; $\forall x.\psi(x) \vdash \forall x.\varphi(x) \to \psi(x)$; $\forall x.\neg\psi(x), \exists x.\varphi(x) \vdash \neg\forall x.\varphi(x) \to \psi(x)$; $\forall x.\psi(x), \exists x.\varphi(x) \vdash \exists x.\varphi(x) \land \psi(x)$; $\forall x.\neg\psi(x) \vdash \neg\exists x.\varphi(x) \land \psi(x)$. <!-- src: DM-N-511#p001 + DM-N-511#p002; ref: Theorem 6 + Theorem 7; type: compressed -->

## 6 Reading informal proofs: recurring step-to-rule correspondences

- "Given a fixed $\varepsilon > 0$" (proving a universal implication): if $\Phi, P(x) \vdash Q(x)$ then $\Phi \vdash \forall x.\ (P(x) \to Q(x))$. <!-- src: DM-N-330#p003; ref: Example 2; type: compressed -->
- "Let $N = t$" (providing a witness): if $\Phi \vdash P(t)$ then $\Phi \vdash \exists x.\ P(x)$. <!-- src: DM-N-330#p003; ref: Example 2; type: compressed -->
- "Choose an arbitrary ... such that ..." / "we can assume $x = 2x_0$" (using an existential): if $\Phi, P(x) \vdash \psi$, then $\Phi, \exists x.\ P(x) \vdash \psi$. <!-- src: DM-N-330#p004 + DM-N-413R#p001; type: compressed -->
- "Because $A$, $B$" / citing a math fact mid-proof (chaining a lemma): if $\Phi \vdash \psi$ and $\Phi, \psi \vdash \chi$, then $\Phi \vdash \chi$. <!-- src: DM-N-330#p004 + DM-N-413R#p001 + DM-N-413R#p002; type: compressed -->
- "If ..., then we are done. Otherwise ..." (case split): if $\Phi, \varphi \vdash \psi$ and $\Phi, \neg\varphi \vdash \psi$, then $\Phi \vdash \psi$. <!-- src: DM-N-413R#p001; type: compressed -->
- Proving $\neg\exists$: to prove $\neg \exists x.\ (P(x) \land \exists y. (P(y) \land Q(x, y) \land R(x, y)))$, it suffices to derive $\neg R(x, y)$ from $\Phi, P(x), P(y), Q(x, y)$. <!-- src: DM-N-330#p003; ref: Example 3; type: compressed -->

## 7 FOL syntax essentials

- Terms $t$: variables, constants, $f(t_1, t_2, ...)$ — only the listed symbol kinds; e.g. $x+1$, $f(x)+g(y)$, $c_1+c_2$ are **not** terms, while $f(x,y)$, $f(g(c_1))$, $h(f(x), g(c_2))$ are. <!-- src: DM-N-511#p002; ref: Definition 8 + Example 9; type: compressed -->
- Propositions $\phi$: $P(t)$, $Q(t_1, t_2)$, $\phi_1 \land \phi_2$, $\neg\phi$, $\exists x.\phi$, $\forall y.\psi$, ...; e.g. $f(x) < f(x+1)$ and $\forall x.\exists y.\,(x < y)$ are **not** FOL propositions ($<$ is not a listed predicate symbol). <!-- src: DM-N-511#p002; ref: Definition 8 + Example 9; type: compressed -->
- In $\forall x.\phi$ and $\exists x.\phi$ all occurrences of $x$ are **bound**; all other occurrences are **free**. $\phi$ is **open** if it has at least one free variable occurrence, otherwise **closed**. E.g. $\exists y.L(x, y)$ is open ($x$ free), $\forall x.\exists y.L(x, y)$ is closed. <!-- src: DM-N-511#p002 + DM-N-511#p003; ref: Definition 10 + Definition 11 + Example 12; type: compressed -->
- Syntactic replacement $[x_1 \mapsto t_1, ..., x_n \mapsto t_n]$ distributes over $\land$, $\lor$, $\neg$ (the quantifier cases are left elided in the notes). <!-- src: DM-N-511#p003; ref: Definition 13; type: compressed -->

## 8 Cautions

- The two quantifier side conditions are the easiest thing to drop: forall-intro needs $\Phi$ irrelevant with $x$; exists-elim needs **both** $\Phi$ and $\chi$ irrelevant with $x$. <!-- src: DM-N-506#p001 + DM-N-506#p002; type: compressed -->
- Memorize which distribution/swap facts are one-way only (Section 5 above): $\exists\forall \vdash \forall\exists$, $\forall$ over $\lor$, $\exists$ over $\land$, and the mixed restricted-quantifier exchange. <!-- src: DM-N-506#p002 + DM-N-509#p001 + DM-N-511#p001; type: compressed -->
- Several printed proofs and one theorem bullet in the source contain anomalies (e.g. a proof line citing itself, a proof using the wrong target formula, a justification reading "weakening" where the cited lines form a substitution step, and the fourth restricted-domain bullet of the May 9 Theorem 4); `DM_C2.md` corrects the visible statements and preserves the original anomalies in hidden `source-conflict` comments. <!-- src: DM-N-413R#p003 + DM-N-420#p001 + DM-N-420#p003 + DM-N-506#p001 + DM-N-509#p001; type: one-step-inferred -->
