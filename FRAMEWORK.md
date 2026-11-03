# Framework D — A Double-Categorical Axiomatics for Darmok

**Abstract.** Framework D axiomatizes a strict double category whose two axiom systems live in its two constituent 2-categories: monads in the horizontal wind, comonads in the vertical wind, and dialgebraic axioms — lax transformations of double functors — relating two tellings. Bounds are double-categorical limits (tabulators, cotabulators, inverters, coinverters); binding is by companions and conjoints; interaction is a mate-and-pairing calculus extending classical mate theory and Beck's mixed distributive laws. An anti-collapse axiom — non-representability of a companion nerve — excludes the quintet double categories. Rel, Span and Prof are complete non-degenerate models; in Prof both winds are nontrivial.

*Meaning is never stated; it is enacted at a place. "Darmok and Jalad at Tanagra" is not a proposition — it is a square. Accordingly, **no axiom of this framework is an equation between composites of arrows. Every axiom is a cell (a square), and every meta-law is a pasting-coincidence displayed as a square of squares.** The only equalities are the pasting-coincidences themselves and the uniqueness clauses of universal properties.*

---

## 0. The Tamarian legend, and how to read this document

| Tamarian term | Mathematical content |
|---|---|
| **image** | object of the arena 𝔻 |
| **deed** (the temporal wind) | horizontal arrow of 𝔻 |
| **stance** (the contextual wind) | vertical arrow of 𝔻 |
| **utterance** (a metaphor act) | cell of 𝔻 (a square) |
| **Darmok** | the first telling: the double functor F |
| **Jalad** | the second telling: the double functor G |
| **Tanagra** (the meeting place) | tabulator of an axiom cell |
| **Temba, his arms open** (the embrace) | cotabulator of an axiom cell |
| **the Ocean** | the vertical world that no deed's shadow exhausts |
| **the two winds** | the horizontal and vertical axiom systems, bound but never identified |

A sentence of the language — "X and Y at Z" — has exactly the shape of a cell: two deeds (top and bottom edges), two stances (left and right edges), four images (corners). The framework below makes this literal.

**Layer convention.** The document keeps three layers separate in role. The *formal layer* (objects, arrows, cells, functors, representability) is primary: every definition is stated in it, and every result is proved in it. The *interpretive layer* (Darmok, Jalad, Tanagra, Temba, Ocean, Seed, Myth) names the same concepts for commentary — it never replaces the formal term, which always appears first. The *example layer* (relations, spans, distributors, quintets, §2 and §9) witnesses that the axioms have models and non-models.

**Reading paths.** The *formal reader* walks §1, §3–§8. The *example-driven reader* starts with §2, reads the axioms against it, and lands in §9. The *category theorist* may jump to §2.3, §6 and §7, where the interaction calculus is shown to extend classical mate-and-distributive-law theory. All type-checking is kept inline as compact *(Typing.)* paragraphs.

### 0.1 Notation and conventions

| Symbol | Reading |
|---|---|
| $a, b, c, d$ | images (objects of $\mathbb{D}$) |
| $u: a \to b$, $u \circ v$ | deeds; composite (first $u$, then $v$) |
| $f: a \Leftrightarrow c$, $f \circ_v g$ | stances; composite (first $f$, then $g$) |
| $\alpha: (f,g): u \Rightarrow v$ | utterance: a cell with sides $f, g$, deeds $u, v$ |
| $\alpha \odot \beta$ | horizontal pasting of cells (along a shared **stance**) |
| $\alpha \boxtimes \beta$ | vertical pasting of cells (along a shared **deed**) |
| $1_f$, $1_u$ | degenerate cells; also the whiskerings |
| $u_!$, $u^!$ | companion (shadow), conjoint (trace) of a deed $u$ |
| $\mathbb{H}(\mathbb{D})$, $\mathbb{V}(\mathbb{D})$ | the horizontal and vertical winds (§1.2) |

**Order convention.** All compositions are read in diagrammatic order: $f \circ_v g$ means "*first* $f$, *then* $g$" (the upper cell's stance first), and likewise $\alpha \odot \beta$ pastes $\alpha$ on the left, its deed composing *first*: $u \circ u'$ is "$u$, then $u'$". Whiskering follows the same order: $1_x \odot \alpha$ is *pre*-composition, the deed $x$ acting first. Every composite in this document is type-checked in this order. The composition symbols $\circ$ and $\circ_v$ are reserved for arrows; $\odot$ and $\boxtimes$ are reserved for cells.

**Whiskering dot.** The dot $x \cdot y$ means *whiskering in the wind at hand*: horizontal pasting with a degenerate cell inside $\mathbb{H}(\mathbb{D})$ (as in §3.1), vertical pasting with a degenerate cell inside $\mathbb{V}(\mathbb{D})$ (as in §3.2).

**Size.** One Grothendieck universe is fixed throughout; all hom-categories of the running examples and all presheaf values below are locally small; $\mathrm{Dial}(F,G)$ is assumed locally small wherever D5 invokes it. Where smallness matters it is said explicitly (§9.1).

---

## 1. D1 — The Arena

**Framework D** is carried by a strict double category

$$\mathbb{D} = (\mathbb{D}_0,\ \mathbb{H},\ \mathbb{V},\ \text{cells})$$

- **images**: the objects of 𝔻;
- **deeds**: horizontal arrows, written $a \xrightarrow{\ u\ } b$, composed by $\circ$;
- **stances**: vertical arrows, written $a \xLeftrightarrows{\ f\ } c$ (proarrow-like, composed by $\circ_v$);
- **utterances**: cells. A cell $\alpha$ with corners $a,b,c,d$, top deed $u: a \to b$, bottom deed $v: c \to d$, left stance $f: a \Leftrightarrow c$, right stance $g: b \Leftrightarrow d$ is written

```
        a ──u──▶ b
        │        │
        f   α    g
        ▼        ▼
        c ──v──▶ d
```

  and denoted $\alpha: (f, g):\ u \Rightarrow v$. **This square is the axiom-form: everything below is stated in it.**

### 1.1 The two pastings

- **Horizontal pasting** $\odot$ (along a shared stance): $\alpha: (f,g): u \Rightarrow v$ and $\beta: (g,k): u' \Rightarrow v'$ compose to $\alpha \odot \beta: (f,k): u \circ u' \Rightarrow v \circ v'$; only the *outer* stances $f,k$ survive the interface.
- **Vertical pasting** $\boxtimes$ (along a shared deed): $\alpha: (f,g): u \Rightarrow v$ above $\beta: (f',g'): v \Rightarrow w$ compose to $\alpha \boxtimes \beta: (f \circ_v f',\ g \circ_v g'): u \Rightarrow w$; the side stances compose vertically.

Both pastings are strictly associative and unital, and they satisfy the **interchange law** (§7.1). Whiskerings are pastings with degenerate cells: the degenerate cell on a stance $f$ is $1_f: (f,f): 1 \Rightarrow 1$, on a deed $u$ it is $1_u: (1,1): u \Rightarrow u$.

### 1.2 The two constituent 2-categories

- **H(𝔻)** — the *horizontal wind*: 2-cells are cells with trivial stance boundary, $\alpha: (1_a, 1_b): u \Rightarrow v$; hom-composition is vertical pasting; whiskering by deeds is horizontal pasting with $1_u$.
- **V(𝔻)** — the *vertical wind*: 2-cells are cells with trivial deed boundary, $\xi: (m, n): 1_a \Rightarrow 1_c$ between stances $m, n: a \Leftrightarrow c$; hom-composition is horizontal pasting; whiskering by stances is vertical pasting with $1_s$.

**D1 (Arena).** $\mathbb{D}$ is a strict double category. It is *given*, not built from a 2-category: the framework never postulates $\mathbb{D} = Q(K)$ for any 2-category $K$, and its cells are not 2-cells of $\mathbb{H}(\mathbb{D})$ in disguise. **No anti-collapse condition is built into the arena.** Whether $\mathbb{D}$ is quintet-collapsed is not D1's business but a property of the comparison functor of §6.3, demanded — when the full framework is wanted — by D9 (§8), where it is *derived* from the Ocean axiom together with the other clauses. A quintet is a model of D1; D7″ (§6.2, §9.2) is what it fails.

**Remark (strictness, and why it is chosen).** Strictness is a doctrine, not a necessity. In a pseudo double category — horizontal pasting associative and unital up to coherent invertible cells — the twin winds are unchanged (vertical pasting, on which $\mathbb{V}(\mathbb{D})$'s hom-composition rests, stays strict in both settings), but every display of §§3–5 acquires extra coherence pastings: the monad and comonad laws of D2–D3 hold up to displayed invertible cells, the frame axiom of D4 becomes a pasting-coincidence up to an invertible dialgebraic cell, and the universal squares of D5–D6 become biuniversal. D1 stays strict here for exactly one reason: the metaprinciple — *the only equalities are pasting-coincidences and uniqueness clauses* — is then literal. A pseudo version of Framework D is obtained by declaring all constraint cells invertible and adding their pasting-coherences as further displayed squares; nothing else in D2–D9 changes shape.

---

## 2. Running examples

Four double categories accompany the axioms from the start. The first three carry the companion half of the interaction calculus; the fourth is the controlled degenerate case the framework is built to exclude. Their axiom-statuses are verified in §9.

### 2.1 The equipment of relations (Rel)

Images: sets. Deeds: functions. Stances: relations $R \subseteq A \times B$. Cells: a cell $(m, n): u \Rightarrow v$ is the assertion "$(x,y) \in m \Rightarrow (u x, v y) \in n$"; at most one cell per boundary. Consequently **every pasting-coincidence in Rel is automatic** — parallel cells are equal.

- The horizontal wind is trivial: cells force $u = v$; monads of D2 are only identities.
- The vertical wind is the inclusion-poset of relations; comonads of D3 are exactly the coreflexive relations — *parts of an image observed*.
- Companions and conjoints of a function are its graph and opposite graph.
- Ocean stances: any relation that is not a function graph; e.g. the total relation $A \times B$ with $A \neq \emptyset$ and $|B| \geq 2$ (with $A = \emptyset$ there is exactly one deed $A \to B$, and the Ocean presheaf is representable).
- Pairings: $\theta: (s,s): t \Rightarrow t$ says "$t$ preserves $s$".

Status: a complete non-degenerate model (§9.1).

### 2.2 The equipment of spans (Span)

Images: sets. Deeds: functions. Stances: spans $A \leftarrow S_0 \rightarrow B$. Cells: functions between apexes over the boundary (span-maps).

- The horizontal wind is trivial; the vertical wind is the 2-category of spans and span-maps. Comonads of D3 include every *double-legged* span $(E, \pi, \pi)$, with counit $\pi$ and the diagonal comultiplication — *sets over an image, with multiplicity*.
- Companions and conjoints: graph and opposite-graph spans.
- Ocean: the chaotic span $(A \times B, \mathrm{pr}, \mathrm{pr})$ on nonempty $A$ with $|B| \geq 2$ — its Ocean presheaf is constant-singleton while there are at least two deeds $A \to B$.
- Bounds: every binding presheaf is computed by an equalizer in **Set**.

Status: a complete non-degenerate model (§9.1).

### 2.3 The equipment of distributors (Prof)

Images: small categories. Deeds: functors. Stances: distributors (profunctors). Cells: natural families $M(a_0, a_1) \to N(F a_0, G a_1)$.

- The horizontal wind is **Cat**: monads of D2 are classical monads $(T, \eta, \mu)$ on categories; each mates (§7.3) to a comonad of D3 on the representable distributor $A(T-, -)$.
- Companions and conjoints of a functor $u$ are $B(u-, -)$ and $B(-, u-)$ — the representable distributors. The binding adjunction of §7.2 is the classical adjunction $B(u-,-) \dashv B(-,u-)$ in Prof.
- Ocean: a stance whose Ocean presheaf fails to be representable; e.g. on $1 \rightleftharpoons 1$, any set of cardinality $\geq 2$ (its Ocean presheaf has that many elements, while the hom-category has a single cell). Being non-representable *as a distributor* is not the criterion — §6.2's Example 6.2.2 is a distributor represented by no functor whose Ocean presheaf is nevertheless representable.
- The whole interaction calculus of §7 is classical here: mates are the classical mates, and the dictionary of §7.4 is Beck's theory of mixed distributive laws.

Status: a complete non-degenerate model with both winds nontrivial — D6, D7, D7′, D7″ all hold, under the size discipline of §9.1.

### 2.4 Quintet double categories (the degenerate control)

For a 2-category $K$: the quintet $Q(K)$ has deeds and stances both the 1-cells of $K$, and a cell for each 2-cell between composites. Every stance is its own companion; conjoints exist only where $K$ provides inverses. All Ocean presheaves are representable — **D7″ fails in every quintet**. $Q(K)$ is the mirror the framework is built to crack (§6.3).

---

## 3. D2–D3 — The two winds' axioms

### 3.1 D2 — Horizontal axioms: deeds as monads

A **horizontal axiom** on an image $a$ is a monad in the horizontal wind:

$$t = (t: a \to a,\quad \eta: 1_a \Rightarrow t,\quad \mu: t \circ t \Rightarrow t),\qquad \eta,\,\mu \in \mathbb{H}(\mathbb{D}).$$

A deed $t$ accumulates: the unit is the deed at rest, the multiplication is the deed's accomplishment — two performances collapse into one. **Each piece of structure is a square**, never an equation:

**The unit square**

```
        a ──1──▶ a
        │        │
       1a   η   1a
        ▼        ▼
        a ──t──▶ a
```

**The multiplication square**

```
        a ─t∘t─▶ a
        │        │
       1a   μ   1a
        ▼        ▼
        a ──t──▶ a
```

**The laws, as pastings of squares** (the whiskerings $\mu \cdot 1_t$, $1_t \cdot \mu$, $\eta \cdot 1_t$, $1_t \cdot \eta$ are horizontal pastings with degenerate cells on the trivial sides):

*Associativity — the two stacked columns coincide as cells:*

```
   a ─t³→ a        a ─t³→ a
   │ μ·1t │    ≡    │ 1t·μ │
   ▼     ▼          ▼     ▼
   a ─t²→ a        a ─t²→ a
   │  μ  │    ≡    │  μ  │
   ▼     ▼          ▼     ▼
   a ─t─▶ a        a ─t─▶ a
```

*Unitality — the two insertions of the unit square coincide with the degenerate cell $1_t$:*

```
   a ─t─▶ a         a ─t─▶ a
   │ η·1t │    ≡     │ 1t·η │
   ▼     ▼           ▼     ▼
   a ─t²→ a         a ─t²→ a
   │  μ   │    ≡     │  μ   │      (both columns, pasted below with μ, equal 1_t)
   ▼     ▼           ▼     ▼
   a ─t─▶ a         a ─t─▶ a
```

Nothing here is asserted as an equation between composites of deeds: each law is the exhibition of a column of squares whose two pastings coincide.

### 3.2 D3 — Vertical axioms: stances as comonads

A **vertical axiom** on an image $a$ is a comonad in the vertical wind:

$$s = (s: a \Leftrightarrow a,\quad \varepsilon: s \Rightarrow 1_a,\quad \delta: s \Rightarrow s \circ_v s),\qquad \varepsilon,\,\delta \in \mathbb{V}(\mathbb{D}).$$

A stance $s$ refines: the counit discards the observation, the comultiplication duplicates it — the context splits into finer contexts. Note the symmetry with §3.1: horizontal axiom squares have trivial stance boundary; vertical axiom squares have trivial deed boundary. **The two systems are shape-dual but data-independent.**

**The counit square**

```
        a ──1──▶ a
        │        │
        s   ε    1a
        ▼        ▼
        a ──1──▶ a
```

**The comultiplication square**

```
        a ──1────▶ a
        │          │
        s    δ   s∘s
        ▼          ▼
        a ──1────▶ a
```

**The laws, as pastings.** In $\mathbb{V}(\mathbb{D})$, hom-composition is horizontal pasting ($\odot$) and whiskering is vertical pasting ($\boxtimes$) with degenerate cells. The two whiskerings of $\delta$ by $s$ are the stacked squares

```
   δ·s := δ ⊠ 1_s                  s·δ := 1_s ⊠ δ

   a ──1──▶ a                      a ──1──▶ a
   │        │                      │        │
   s   δ    s²                     s  1_s   s
   ▼        ▼                      ▼        ▼
   a ──1──▶ a                      a ──1──▶ a
   │        │                      │        │
   s  1_s   s³                     s   δ    s²
   ▼        ▼                      ▼        ▼
   a ──1──▶ a                      a ──1──▶ a

   (s², s³): 1 ⟹ 1                 (s², s³): 1 ⟹ 1
```

and the two whiskerings of $\varepsilon$ by $s$ are the same stacked displays with $1_s$ and $\varepsilon$ interchanged: $s{\cdot}\varepsilon := 1_s \boxtimes \varepsilon = (s^2, s): 1 \Rightarrow 1$ and $\varepsilon{\cdot}s := \varepsilon \boxtimes 1_s = (s^2, s): 1 \Rightarrow 1$.

*Coassociativity — hom-compose each whiskering of δ with δ on the left; the two composites coincide as cells:*

```
   δ ⊙ (δ·s)   =   δ ⊙ (s·δ)          both sides: (s, s³): 1_a ⟹ 1_a
```

(each side is the 2-wide grid [δ-column | stacked-whisker-column]; the shared column edge is $s^2$).

*Counit–comultiplication — again δ is pasted on the left:*

```
   δ ⊙ (s·ε)  =  1_s  =  δ ⊙ (ε·s)      both composites: (s, s): 1_a ⟹ 1_a
```

*(Typing.)* Pasting $\delta$ (right edge $s^2$) on the left of $s{\cdot}\varepsilon$ (left edge $s^2$) is well-typed, and the outer edges of the composite are $(s, s)$ — exactly the degenerate cell $1_s$. The reversed pasting $(s{\cdot}\varepsilon) \odot \delta$ is *also* well-typed (shared column edge $s$), but its outer edges are $(s^2, s^2)$: a legitimate cell, and *not* the comonad law. All laws are squares and grids, coinciding by display; none is an equation between stances.

---

## 4. D4–D5 — Dialgebraic axioms, the Seed and the Myth

### 4.1 D4 — Cells between two tellings

Fix two strict double functors, **the two tellings**:

$$F, G: \mathbb{A} \rightrightarrows \mathbb{B}$$

($F = $ **Darmok**, the telling in deeds; $G = $ **Jalad**, the telling in stances).

**Definition (dialgebraic axiom; lax convention).** A dialgebraic axiom from $F$ to $G$ is the following data in $\mathbb{B}$:

- **(i) Carriers.** For each image $a$ of $\mathbb{A}$, a stance $\sigma_a: Fa \Leftrightarrow Ga$ — *the relation in which the two tellings of $a$ stand*.
- **(ii) Deed-cells.** For each deed $u: a \to b$ of $\mathbb{A}$, an utterance $\sigma_u: (\sigma_a, \sigma_b): F(u) \Rightarrow G(u)$:

```
       F a ─F(u)─▶ F b
        │          │
       σ_a  σ_u   σ_b
        ▼          ▼
       G a ─G(u)─▶ G b
```

- **(ii′) Functoriality of deed-cells.** $\sigma_{1_a} = 1_{\sigma_a}$, and for composable deeds $u: a \to b$, $u': b \to c$: $\sigma_{u \circ u'} = \sigma_u \odot \sigma_{u'}$ — horizontal pasting along the shared carrier $\sigma_b$; both sides are cells $(\sigma_a, \sigma_c): F(u \circ u') \Rightarrow G(u \circ u')$, using that $F, G$ are strict.
- **(iii) Stance-cells.** For each stance $f: a \Leftrightarrow c$ of $\mathbb{A}$, an utterance with trivial deed boundary

```
       F a ──1──▶ F a
        │          │
      Ff∘σ_c  Θ_f  σ_a∘Gf
        ▼          ▼
       G c ──1──▶ G c
```

- **(iii′) Normality and functoriality of stance-cells.** $\Theta_{1_a} = 1_{\sigma_a}$, and for vertically composable stances $f: a \Leftrightarrow c$ and then $f': c \Leftrightarrow e$:

$\Theta_{f \circ_v f'} \;=\; \big(1_{Ff} \boxtimes \Theta_{f'}\big) \;\odot\; \big(\Theta_f \boxtimes 1_{Gf'}\big)$

  *(Typing.)* $1_{Ff} \boxtimes \Theta_{f'}$ pastes along the shared deed $1_{Fc}$, giving $\big(Ff \circ_v Ff' \circ_v \sigma_e,\ Ff \circ_v \sigma_c \circ_v Gf'\big)$; $\Theta_f \boxtimes 1_{Gf'}$ pastes along $1_{Gc}$, giving $\big(Ff \circ_v \sigma_c \circ_v Gf',\ \sigma_a \circ_v Gf \circ_v Gf'\big)$; the two share the column edge $Ff \circ_v \sigma_c \circ_v Gf'$, and their horizontal composite has the boundary of $\Theta_{f \circ_v f'}$.

- **(iv) Frame axiom.** For each cell $\alpha: (f, g): u \Rightarrow v$ of $\mathbb{A}$ ($f: a \Leftrightarrow c$, $g: b \Leftrightarrow d$, $u: a \to b$, $v: c \to d$), the pasting-coincidence of the two named pastings

$$\mathrm{LHS}(\alpha) := \Theta_f \odot (\sigma_u \boxtimes G\alpha),\qquad \mathrm{RHS}(\alpha) := (F\alpha \boxtimes \sigma_v) \odot \Theta_g,\qquad \mathrm{LHS}(\alpha) = \mathrm{RHS}(\alpha).$$

*(Typing.)* The ingredient utterances have boundaries $\sigma_u: (\sigma_a, \sigma_b): F(u) \Rightarrow G(u)$; $G\alpha: (Gf, Gg): G(u) \Rightarrow G(v)$; $F\alpha: (Ff, Fg): F(u) \Rightarrow F(v)$; $\sigma_v: (\sigma_c, \sigma_d): F(v) \Rightarrow G(v)$; $\Theta_f: (Ff{\circ}_v\sigma_c,\ \sigma_a{\circ}_vGf): 1_{Fa} \Rightarrow 1_{Gc}$; $\Theta_g: (Fg{\circ}_v\sigma_d,\ \sigma_b{\circ}_vGg): 1_{Fb} \Rightarrow 1_{Gd}$. Then $\sigma_u \boxtimes G\alpha$ pastes along the shared deed $G(u)$ and $F\alpha \boxtimes \sigma_v$ along the shared deed $F(v)$; $\Theta_f$ pastes onto the left column of the first (shared edge $\sigma_a{\circ}_vGf$) and $\Theta_g$ onto the right column of the second (shared edge $Fg{\circ}_v\sigma_d$). **Both sides of the frame axiom are utterances with one and the same boundary** $\big(Ff{\circ}_v\sigma_c,\ \sigma_b{\circ}_vGg\big): F(u) \Rightarrow G(v)$; the coincidence is between well-typed parallel cells, and the interchange law is respected at both interfaces.

*(Cross-object rows.)* The top deed of $\Theta_f$ is the identity $1_{Fa}$ on the top row, the bottom deed the identity $1_{Gc}$ on the bottom row; no identification of different images is made, or needed — cells of this shape are exactly the 2-cells of $\mathbb{V}(\mathbb{B})$.

**Remarks (which instances carry content).**

1. **The variance is named: lax.** The carriers read $F \to G$ throughout: $\sigma_u: F(u) \Rightarrow G(u)$ and $\Theta_f: Ff \circ_v \sigma_c \Rightarrow \sigma_a \circ_v Gf$. Reversing every $\sigma_u$ and $\Theta_f$ — equivalently, swapping the two tellings — gives the *oplax* doctrine; D4–D9 are invariant under the swap. When $\mathbb{A}$ has only trivial stances, a dialgebraic axiom is exactly a distributor from $F$ to $G$ (an $F$–$G$ bimodule); in $\mathbb{B} = $ Prof the general notion is a lax natural transformation with distributor components, equivalently a distributor between the cographs of $F$ and $G$.
2. **Degenerate instances are automatic.** At the degenerate cell $1_u$, the frame axiom reduces (via (ii′) and $G(1_u) = 1_{G(u)}$, $F(1_u) = 1_{F(u)}$) to $\sigma_u = \sigma_u$; at the degenerate cell $1_f$ it reduces, via normality, to a triviality. **Functoriality (ii′), by contrast, does not follow from the frame axiom** — the frame axiom at pasted cells presupposes it — and is an independent clause, exactly as the functoriality of a classical transformation's components is.
3. **Pasted instances are derivable.** The frame axiom at a horizontal pasting $\alpha \odot \beta$ follows from its instances at $\alpha$ and $\beta$ together with (ii′), by interchange and the middle-$\Theta$ cancellation; at a vertical pasting $\alpha \boxtimes \beta$ it follows from the instances at $\alpha$ and $\beta$ together with (iii′), by interchange regrouping. It is demanded at all cells for definiteness; only the atomic instances carry content.

**Morphisms of dialgebraic axioms** $\Theta: \sigma \Rightarrow \sigma'$ (same $F, G$): for each $a$, an utterance $\Theta_a: (\sigma_a, \sigma'_a): 1_{Fa} \Rightarrow 1_{Ga}$ with trivial deed boundary, subject to the compatibility pasting $\Theta_a \odot \sigma'_u = \sigma_u \odot \Theta_b$ *(Typing: both sides are cells $(\sigma_a, \sigma'_b): F(u) \Rightarrow G(u)$ — the shared edges are $\sigma'_a$ and $\sigma_b$ respectively)*. Dialgebraic axioms and their morphisms form a category $\mathrm{Dial}(F, G)$; composition is **horizontal pasting** $\Theta_a \odot \Theta'_a$ along the shared carrier $\sigma'_a$ — the hom-composition of $\mathbb{V}(\mathbb{B})$ (§1.2), the same operation the compatibility condition above already uses. *(Typing: the vertical pasting $\Theta_a \boxtimes \Theta'_a$ is ill-typed — it would need the shared deed $1_{Ga} = 1_{Fa}$, which fails as soon as $Fa \neq Ga$; horizontally, the two top deeds are both $1_{Fa}$ and the two bottom deeds both $1_{Ga}$, so the composite is $(\sigma_a, \sigma''_a): 1_{Fa} \Rightarrow 1_{Ga}$.)*

### 4.2 D5 — Seed and Myth

**D5 (Seed and Myth; existence is assumed).** For the framework's designated pair of tellings $F, G$:

- **Seed:** the category $\mathrm{Dial}(F, G)$ has an initial object $\sigma^{\iota}$.
- **Myth:** $\mathrm{Dial}(F, G)$ has a final object $\sigma^{\varphi}$.

D5 is an **existence axiom, not a theorem**: $\mathrm{Dial}(F,G)$ may fail to have either — it can even be empty (§9.3). Where both exist they need not coincide, and their comparison cell is itself a dialgebraic axiom — *the myth-arc of the language*.

**The four names, one thing each.**

- $\sigma^{\iota}$ = **initial object of $\mathrm{Dial}(F,G)$** = **the left universal square** = **Temba-flavored** (colimit-side: every witness flows *out* of the embrace) = **the Seed** — the story before all stories.
- $\sigma^{\varphi}$ = **final object of $\mathrm{Dial}(F,G)$** = **the right universal square** = **Tanagra-flavored** (limit-side: every witness flows *in* to the meeting) = **the Myth** — the completed narrative.

```
     Dial(F,G):   σι ──unique──▶ σ     (every σ; Seed = initial)
                  σ  ──unique──▶ σφ     (every σ; Myth = final)
```

One sentence per equivalence: *initial object* is the universal property of D4-morphisms out of $\sigma^\iota$; *left universal square* is that same property displayed as cells; *Temba-flavored* is its orientation — out-flowing, like the cotabulators of §5; the conjunction of the three is what "Seed" names. Dually for the Myth.

*No Lambek-style fixpoint argument is claimed here: no endofunctor of $\mathrm{Dial}(F,G)$ is constructed, so the Seed's initiality and the Myth's finality are pure existence statements, used as such.*

---

## 5. D6–D7 — Bounds and representability

Bounds are the framework's limit notions: every axiom, treated as a square, has a *meeting place* (tabulator, Tanagra) and an *embrace* (cotabulator, Temba), defined as representing objects of parameterized presheaves.

### 5.1 Carrier bounds (stances and their tabulators)

**Tabulator of a stance $v: a \Leftrightarrow b$ (the Tanagra of $v$).** A bound is a triple $(T,\ p: T \to a,\ q: T \to b,\ \tau)$ with a tabulator square

```
        T ──p──▶ a
        │        │
       1T   τ    v
        ▼        ▼
        T ──q──▶ b
```

i.e. $\tau: (1_T, v): p \Rightarrow q$, universal in the following sense: for any image $X$, the assignment $w \mapsto \big(pw,\ qw,\ 1_w \odot \tau\big)$ is a bijection from deeds $w: X \to T$ to *$v$-boundings at $X$*: triples $(x: X \to a,\ y: X \to b,\ \alpha: (1_X, v): x \Rightarrow y)$.

*Reading:* in Prof, $\mathrm{Tab}(v)$ is the category of elements of $v$; in Rel, the set of pairs standing in the relation; in Span, the apex of $v$. Deeds into Tanagra are exactly ways of inhabiting the stance.

**Cotabulator of a stance $v: a \Leftrightarrow b$ (the Temba of $v$).** A cobound is a tuple $(C,\ i: a \to C,\ j: b \to C,\ \kappa)$ with a cotabulator square

```
        a ──i──▶ C
        │        │
        v   κ   1C
        ▼        ▼
        b ──j──▶ C
```

i.e. $\kappa: (v, 1_C): i \Rightarrow j$, universal: deeds $w: C \to X$ correspond bijectively to *$v$-cobindings*: triples $(x: a \to X,\ y: b \to X,\ \alpha: (v, 1_X): x \Rightarrow y)$, via $w \mapsto (wi,\ wj,\ \kappa \odot 1_w)$.

*Reading:* in Prof, $\mathrm{Cotab}(v)$ is the collage (cograph) of $v$. The embrace has open arms: everything flows out of it.

**D6 (Carrier bounds).** *Every stance $v$ of $\mathbb{D}$ has a tabulator and a cotabulator.* Every context has a meeting place and an embrace; without this, the binding presheaves of §5.3 — which are built from stance-tabulators — cannot exist at all. Bounds of *axiom cells* are a separate demand (D7, §5.5); D6 is the carrier-level demand. In Rel, Span and Prof every stance is bounded (pairs, apexes, categories of elements — and collages dually); in $\mathbb{D}(L)$ the off-diagonal stances have no tabulator, and in $\mathrm{Rel}^+$ the empty relation has none (both §9.2).

### 5.2 Bounds of horizontal axiom cells

Let $\alpha: (1_a, 1_b): u \Rightarrow v$ be a horizontal axiom cell (a deed-cell with trivial stance boundary; e.g. a unit or multiplication square of §3.1).

**Tanagra of $\alpha$ — the meeting where the axiom turns.** For each image $X$ and deed $x: X \to a$, the **whiskered axiom** is the change of base $\alpha_x := 1_x \odot \alpha: (1_X, 1_b): ux \Rightarrow vx$ — the degenerate cell $1_x: (1_X, 1_a): x \Rightarrow x$ bridges the test image $X$ to the axiom's base image $a$, well-typed because the right stance of $1_x$ is the left stance of $\alpha$. Define the **parameterized binding presheaf** on (images, deeds) —

$$\mathrm{Tan}_\alpha(X) \;= \; \Big\{\, \big(x: X \to a,\ \ \xi: (1_X, 1_b): vx \Rightarrow ux\big) \ \ \Bigm\vert\ \ \alpha_x \boxtimes \xi = 1_{ux},\ \ \xi \boxtimes \alpha_x = 1_{vx} \ \Big\}$$

— the set of *two-sided inverses of the whiskered axiom*, with the leg $x$ carried **as data**, in the pattern of §5.1: a deed $h: X \to Y$ acts by $(y, \xi) \mapsto (y \circ h,\ 1_h \odot \xi)$, and whisker-functoriality is associativity of horizontal pasting. The two pasting identities are the stacked displays

```
   X ─ux→ X            X ─vx→ X
   │ α_x  │             │  ξ  │        α_x ⊠ ξ  =  1_{ux}
   ▼     ▼      ⊠       ▼     ▼        (α_x above ξ: the pasted
   X ─vx→ X            X ─ux→ X          column is the degenerate cell)

   X ─vx→ X            X ─ux→ X
   │  ξ  │             │ α_x │          ξ ⊠ α_x  =  1_{vx}
   ▼     ▼      ⊠       ▼     ▼        (ξ above α_x: the pasted
   X ─ux→ X            X ─vx→ X          column is the degenerate cell)
```

i.e. $\mathrm{Tan}_\alpha$ is the presheaf of *inverters of the whiskered axiom*, and **representability means a bijection deeds $w: X \to T$ ↔ bindings at $X$, natural in $X$** — exactly the shape of §5.1's universality. **The tabulator of $\alpha$** is a triple $(T,\ t: T \to a,\ \iota)$, where $\iota: (1_T, 1_b): vt \Rightarrow ut$ is a two-sided inverse of $\alpha_t$, representing $\mathrm{Tan}_\alpha$: deeds $w: X \to T$ correspond to bindings $(x, \xi)$ at $X$ via $w \mapsto (t \circ w,\ 1_w \odot \iota)$. The universal inverse $\iota$ is displayed as the two squares above, at $(T, t)$ in place of $(X, x)$.

*(Grounding.)* The representing triple exhibits $\mathrm{Tab}(\alpha)$ as the **inverter of the cell $\alpha$**: a double-categorical limit in the sense of Grandis–Paré. In Prof this is the classical 2-categorical inverter in **Cat**: the small category of pairs $(a_0,\ \varphi: u a_0 \cong v a_0)$ with its functor to $a$ — factorizations are unique because the inverse of a natural transformation, when it exists, is unique. And the leg $x$ must be *data* for this to be the right limit statement: a presheaf on the slice with the leg fixed would demand that slice hom-sets be truth values — a demand that fails in Prof (§9.1) and is not what a double limit asks.

**Temba of $\alpha$ — the embrace where the axiom turns.** Dually, $\mathrm{Temba}_\alpha$ is defined on under-legs: pairs $\big(c: b \to X,\ \kappa\big)$ with $\kappa: (1_a, 1_X)$ a two-sided inverse of the target-whiskered axiom $\alpha \odot 1_c: uc \Rightarrow vc$ (plus the pasting identities, displayed as above), and **$\mathrm{Cotab}(\alpha)$ represents $\mathrm{Temba}_\alpha$**: the coinverter of $\alpha$ (in Prof, the small localization). Note the duality of legs: Tanagra binds at the *source* side, Temba at the *target* side.

### 5.3 Bounds of cells with arbitrary stance boundary (transported bindings)

Let $\beta: (f, g): u \Rightarrow v$ be any cell of $\mathbb{D}$ (corners $a,b,c,d$) — the stance-cell case $u = v = 1$ covers the D3 squares and the $\Theta_f$ of D4; the general case covers the deed-cells $\sigma_u$ of D4. Define the **binding presheaf of $\beta$** in the §5.1 pattern — at each image $X$, the set of pairs of legs together with a binding cell:

$\mathrm{Tan}_\beta(X) \;=\; \big\{(x: X \to a,\ y: X \to c,\ e) \mid e: (1_X, f): x \Rightarrow y \big\},$

together with the **transported binding**

$$\bar e := e \odot \beta:\ (1_X, g):\ ux \Rightarrow yv.$$

*(Typing.)* $e$'s right stance $f$ matches $\beta$'s left stance $f$; the pasting composes the deeds, so the transported binding pairs the *composite* deeds $ux, yv$ under the target stance $g$. When $u = v = 1$ the binding presheaf is exactly §5.1's binding presheaf of the source stance $f$, with the binding transported to $g$ — the D3 squares and $\Theta_f$-cells are bounded by the tabulators of their source stances, on which D6 insists.

**Tabulator of $\beta$** is the representing object: $\mathrm{Tab}(\beta)$ is the tabulator of the *source stance* $f$ — the meeting where $f$ is inhabited — **equipped with the transported binding $\bar e = e \odot \beta$ for the target stance $g$.** The axiom cell acts on bounds by transport: those who meet under the source stance also meet under the target stance. **Temba of $\beta$** is dual: the cotabulator of the *target stance* $g$, equipped with the transported source-cobinding.

**Consequence (bounds of dialgebraic components).** The bounds of D4's deed-cells $\sigma_u: (\sigma_a, \sigma_b): F(u) \Rightarrow G(u)$ reduce to the tabulators of the *carriers* $\sigma_a$, with binding transported along $\sigma_u$; the bounds of D4's stance-cells $\Theta_f$ reduce to the tabulators of the composite stances $Ff \circ_v \sigma_c$. D7's demand on D4 is therefore precisely: *the carriers and composite stances of every dialgebraic axiom have tabulators* — and, dually, cotabulators, since $\mathrm{Temba}$ demands them too.

### 5.4 Bounds of the Seed and the Myth

Through §5.3 the Seed and the Myth can be *read* as bounds: $\sigma^{\iota}$ flows out — the Temba-flavored reading, every dialgebraic morphism out of it a cobinding — and $\sigma^{\varphi}$ flows in — the Tanagra-flavored reading, every morphism into it a binding. This is a reading of §4.2's definitions, not a second universal property: initiality and finality in $\mathrm{Dial}(F,G)$ are the definitions, and the out-flowing/in-flowing displays exhibit the same unique morphisms.

### 5.5 D7 — Cell bounds are real

**D7 (Cell bounds axiom).** The arena carries **designated axiom classes** — the monads of D2, comonads of D3 and dialgebraic pairs of D4 that count as axioms are fixed data of the framework, not implicitly "all". For **every axiom cell $\alpha$ of the designated classes** — every unit and multiplication square of §3.1 (handled by §5.2), every counit and comultiplication square of §3.2 and every dialgebraic component square of §4.1 (both handled by §5.3) — the binding presheaf $\mathrm{Tan}_\alpha$ **is representable**, and dually so is $\mathrm{Temba}_\alpha$.

This is the non-degeneracy condition proper: it says every axiom has a *meeting place* and an *embrace* as genuine images of the arena. If a single $\mathrm{Tan}_\alpha$ fails to be representable, the axiom $\alpha$ is *unboundable* — the framework still stands, but that axiom casts no shadow in the bound world; the axiomatics is degenerate at $\alpha$. A framework in which all $\mathrm{Tan}_\alpha$ and $\mathrm{Temba}_\alpha$ are representable is called **bound-non-degenerate**.

**Remark (D7's content is deliberately asymmetric).** For any cell $\beta: (f,g): u \Rightarrow v$ with nontrivial stance boundary, the binding presheaf of $\beta$ *is* the binding presheaf of its source stance $f$, and dually its cobinding presheaf *is* that of its target stance $g$ (§5.3): for such cells D7 demands nothing beyond D6 plus transport. The genuinely new content of D7 is concentrated in the horizontal globular axiom cells (§5.2), where it demands real inverters and coinverters. The asymmetry is intended, and the axiom's name should be read accordingly: *cell bounds are real* has its teeth at the globular cells; framed cells inherit their bounds from D6.

---

## 6. D7′–D7″ — Companions, conjoints, and the Ocean

### 6.1 D7′ — The binding axiom, and the framework's three strengths

For a deed $u: a \to b$ define two parameterized presheaves on stance-hom-categories:

$$\kappa_u: \mathbb{V}(a,b)^{op} \to \mathrm{Set},\qquad
\kappa_u(v) = \{\text{cells } (1_a,\, v): 1_a \Rightarrow u\}$$

$$\Upsilon_u: \mathbb{V}(b,a)^{op} \to \mathrm{Set},\qquad
\Upsilon_u(w) = \{\text{cells } (1_a,\, w): u \Rightarrow 1_a\}$$

**D7′ (Binding axiom).** $\kappa_u$ is representable for every deed $u$ (the representing stance $u_!$ is the **companion**, the shadow of the deed), and $\Upsilon_u$ is representable for every deed $u$ (the representing stance $u^!$ is the **conjoint**, the trace of the deed). The universal cells are the conjugate-pair cells of §7.2. In Prof: $u_! = B(u-, -)$ and $u^! = B(-, u-)$; in a quintet, $\kappa_u$ is representable *trivially*, at $u$ itself — the first symptom of collapse (§6.3).

**Status of D7′; the three strengths.** D7 (bounds) and D7′ (binding) are independent demands — limits versus companions — and neither implies the other (§9.2 witnesses both separations). The framework therefore comes in three strengths:

- **minimal Framework D**: D1–D6 with D7 (bounds are real);
- **bound-complete Framework D**: minimal + D7′ (every deed casts a shadow and a trace);
- **non-degenerate Framework D**: bound-complete + D7″ (the Ocean axiom, below).

The mate calculus of §7.3 requires the **full** D7′: the vertical mate of a cell trades on both $u^!$ and $v_!$. The pairing dictionary of §7.4 requires **only companions** — a companion-only framework (a general quintet, where conjoints fail for lack of inverses) retains §7.4 and loses §7.3.

### 6.2 The Ocean presheaf

For a stance $s: a \Leftrightarrow b$, define the **Ocean presheaf**

$$\mathrm{Oce}_s: \mathbb{H}(a,b)^{op} \to \mathrm{Set},\qquad
\mathrm{Oce}_s(u) = \{\text{cells } (1_a,\, s): 1_a \Rightarrow u\}$$

the presheaf of *traces of $s$ along deeds*.

**Definition (shadow).** A stance is a **deed's shadow** if it is vertically isomorphic (an invertible 2-cell of $\mathbb{V}(\mathbb{D})$) to a companion $u_!$. "Ocean" is the interpretive name for a non-shadow stance — *a context that no deed's shadow exhausts*.

**Proposition 6.2.0 (the Ocean is a companion nerve).** Assume D7′, and let $c: \mathbb{H}(a,b) \to \mathbb{V}(a,b)$ be the *companion functor* $u \mapsto u_!$ (a 2-functor on homs, by the conjugate-pair calculus of §7.2). The vertical mate of Proposition 7.3.1, applied to the cells of $\mathrm{Oce}_s(u)$ — which have the form $(1_a, s): 1_a \Rightarrow u$ — is a bijection onto $\mathbb{V}(a,b)(u_!, s)$, natural in $u$: **$\mathrm{Oce}_s \cong \mathbb{V}(a,b)(c(-), s)$, the nerve of the companion functor, evaluated at $s$.** *(Typing: the mate of $\gamma: (1_a, s): 1_a \Rightarrow u$ is $\gamma^\sharp: u_! \Rightarrow s$ — the trace and shadow of the identity deed $1_a$ are the identity stance, so only $u_!$ survives on the left.)* Consequences: Proposition 6.2.1(i) is plain Yoneda — a shadow's nerve is a representable presheaf; the converses of (ii) say *the nerve detects shadows*; D7″ says the nerve is not representable somewhere, and D7″⁺ that it detects non-shadows. **Detection tracks neither density nor vice versa.** In Rel the companion functor is *not* dense — a singleton relation on $|A| \geq 2$ contains no function graph, so is no union of companions — yet the nerve detects shadows there (machine-checked, §9.5). In Prof the functor is not dense either: on $A \to 1$ the only companion is $u_!$, and the canonical density diagram of Example 6.2.2's $s$ is constant at $u_!$ — the comma category $(c \downarrow s)$ has one object and only the identity morphism, so its colimit is $u_! \not\cong s$ — and there the nerve *fails* to detect shadows. The v4 claim that the companion functor is dense in Prof, powering (ii), is withdrawn on both ends: the ordinary fact that distributors are colimits of representable presheaves concerns *all* representables, not the companions of functors $A \to B$ — a different and much smaller collection — and density is neither necessary nor sufficient for detection.

**Proposition 6.2.1 (Ocean representability).**

(i) If $s$ is a shadow, $s \cong w_!$, then $\mathrm{Oce}_s$ is representable (at $w$).
(ii) In Rel and Span the converse holds: representable $\mathrm{Oce}_s$ forces $s$ to be a shadow (machine-checked in both, §9.5). **It fails in Prof**: Example 6.2.2 below is a witnessed non-shadow with representable $\mathrm{Oce}_s$, and the v4 claim of (ii) for Prof is withdrawn.
(iii) In a general bound-complete framework the converse of (i) is **false, not merely open**: the companion nerve need not detect shadows — it fails already in Prof (Example 6.2.2). The Ocean axiom is therefore stated through non-representability, the formulation that does not depend on detection; which frameworks detect shadows is a model-by-model property (Rel and Span do), not a theorem of the axioms.

*Proof sketch.* (i) Pasting with the conjugate cells is a bijection $\{$cells $(1_a, w_!): 1_a \Rightarrow u\}$ $\cong$ $\{$globular cells $w \Rightarrow u\}$: send $\gamma: (1_a, w_!): 1_a \Rightarrow u$ to $\gamma \odot \hat\chi_w$ *(Typing: shared stance $w_!$; composite $(1_a, 1_b): w \Rightarrow u$)*, and back via $\beta \mapsto \chi_w \boxtimes \beta$ *(shared deed $w$; composite $(1_a, w_!): 1_a \Rightarrow u$)*; the round trips collapse by the conjugate-pair axioms ($\chi \odot \hat\chi = 1_w$, $\chi \boxtimes \hat\chi = 1_{w_!}$). Naturality is pasting-naturality; the vertical iso $s \cong w_!$ transports the representation. (ii) In Rel it is Yoneda: $\mathrm{Oce}_s(u)$ is a singleton iff $\mathrm{graph}(u) \subseteq s$ and the hom-categories are discrete, so representability at $w$ forces $s = \mathrm{graph}(w)$ — any element $(x, y) \in s$ off the graph of $w$ yields a second deed whose graph is still inside $s$. In Span, $\mathrm{Oce}_s(u)$ is the set of sections of the left leg with right leg $u$; representability forbids both extra apex elements (they create extra sections) and missing ones (they destroy the unique one), forcing $s$ to be a graph span. The v4 sketch continued: *in Prof, a universal element of $\mathrm{Oce}_s$ is precisely a representation of the distributor* — this is wrong, and Example 6.2.2 is the refutation: a universal element exists there while the distributor is represented by no functor. $\square$

**Example 6.2.2 (the nerve does not detect shadows in Prof).** Let $A$ be the walking arrow $0 \to 1$, $B = 1$, and $u: A \to 1$ the unique functor, whose companion $u_!$ is the constant-singleton distributor. Define $s: A \rightsquigarrow 1$ by $s(0) = \{p, q\}$, $s(1) = \{r\}$, with the structure map of the arrow sending $r \mapsto p$. A natural transformation $u_! \Rightarrow s$ must select $r$ at $1$, and naturality then forces $p$ at $0$: exactly one exists. So $\mathrm{Oce}_s(u) \cong \mathrm{Nat}(u_!, s)$ is a singleton — and since $\mathbb{H}(A, 1) = \mathbf{Cat}(A, 1)$ is the terminal category (one functor, one natural transformation), **$\mathrm{Oce}_s$ is representable**. Yet $s \not\cong u_!$ (the components differ in cardinality) and $u$ is the only functor $A \to 1$: **$s$ is a witnessed non-shadow with a representable Ocean** — precisely what (ii) was meant to exclude, and what D7″⁺ forbids. On this shape the failure is general: $|\mathrm{Nat}(u_!, s)| = |s(1)|$ — the component at $1$ is free, the one at $0$ determined by naturality — so representability is insensitive to the whole source component, and *every* $s$ with singleton target component and larger source component is a detected failure. Machine-checked, together with the density failure above (§9.5).

**A concrete Ocean.** In Rel: the **total relation** $A \times B$ with $A \neq \emptyset$ and $|B| \geq 2$ contains the graphs of at least two deeds, so $\mathrm{Oce}_s$ is constant-singleton while no representing deed exists; and it is *witnessed* — the cell $(1_A, A \times B): 1_A \Rightarrow u$ exists for every deed $u$. (With $A = \emptyset$ there is exactly one deed $A \to B$ and the presheaf is representable — the Ocean needs a nonempty stage.) In Span: the chaotic span $(A \times B, \mathrm{pr}, \mathrm{pr})$ on nonempty $A$ with $|B| \geq 2$ — witnessed by a section cell. In Prof: any set of cardinality $\geq 2$ on $1 \rightleftharpoons 1$ — witnessed by any element.

**D7″ (Ocean axiom — anti-collapse).** There exists a stance $s: a \Leftrightarrow b$ — **the Ocean** — together with a **witness**: a deed $u_0: a \to b$ and a cell $(1_a, s): 1_a \Rightarrow u_0$ — such that $\mathrm{Oce}_s$ is **not** representable.

*(Why the witness is demanded.)* Without it the axiom is cheap: over an empty hom, or for a stance that admits no cells at all, $\mathrm{Oce}_s \equiv \emptyset$ is never representable, and D7″ would hold while blocking collapse nowhere. This is the exact shape of the old $\mathbb{D}(L)$ witness of §9.2 — its oceans are unwitnessed, and it is hereby demoted to witnessing D7′-failure only. The weak, existential form of D7″ (non-representability, no witness demanded) remains of interest as a *variant*; all concrete oceans of the running examples are witnessed (above).

**D7″⁺ (strong Ocean; optional strengthening).** *Every* non-shadow stance is an Ocean ($\mathrm{Oce}_s$ non-representable for every non-shadow $s$). By Proposition 6.2.1(ii) this holds in Rel and Span (machine-checked, §9.5) and **fails in Prof**: Example 6.2.2 is a witnessed non-shadow with representable Ocean. Where it holds it makes non-collapse local — every stance outside the companion sector then witnesses it, not merely some stance — but it is a property of particular models, not a consequence of D1–D7′. A framework may also localize D7″ to a sub-arena: the Ocean may be demanded only over a designated class of images, with collapse controlled there. In nerve terms, D7″⁺ says: *the nerve detects non-shadows*; in Rel and Span the non-representability is witnessed wherever the stance admits cells at all.

### 6.3 The quintet collapse — what D7″ forbids

Given D7′, there is a canonical comparison double functor

$$\iota: Q(\mathbb{H}(\mathbb{D})) \longrightarrow \mathbb{D}$$

from the **quintet double category** of the horizontal wind (its stances are deeds; its cells are globular cells), acting as the identity on images, deeds and globular cells, and sending a deed $u$, qua stance of $Q(\mathbb{H}(\mathbb{D}))$, to its companion $u_!$.

**Proposition 6.3.1 (framing bijection).** Assume companions exist for the deeds $w: a \to c$ and $x: b \to d$. Pasting with the conjugate cells is a bijection

$$\{\text{cells } (w_!, x_!): u \Rightarrow v\} \;\cong\; \{\text{globular cells } u \circ x \Rightarrow w \circ v\}$$

$$\alpha \;\longmapsto\; \chi_w \odot \alpha \odot \hat\chi_x .$$

*(Typing.)* $\chi_w \odot \alpha$ pastes along the shared stance $w_!$ and gives $(1_a, x_!): u \Rightarrow w \circ v$; composing with $\hat\chi_x$ along $x_!$ gives the globular cell $(1_a, 1_d): u \circ x \Rightarrow w \circ v$. The inverse pastes with $\chi, \hat\chi$ in the transposed positions; both round trips are grids collapsing by the conjugate-pair axioms. In Prof the bijection is Yoneda evaluation. $\square$

**Proposition 6.3.2 (collapse propagation).** Call $\mathbb{D}$ **companion-closed** if every vertical composite of companions is a shadow (true in Rel, Span, Prof and quintets; in Prof by Yoneda, composites of representables being representable). In a companion-closed framework: if every cell of $\mathbb{D}$ is a pasting of globular cells with conjugate-pair cells, then every stance of $\mathbb{D}$ is a shadow.

*Proof.* The side stances of such a pasting are vertical composites of identity stances and companions — shadows, by companion-closure. Applying this to the degenerate cell $1_s$, whose side stances are $s$ on both sides, exhibits $s$ as a vertical composite of companions, hence a shadow. $\square$

*The withdrawn converse, and the record.* The v3–v4 version stated the equivalence of (a) *every stance is a shadow* and (b) *every cell is such a pasting*. The direction (a) $\Rightarrow$ (b) is **withdrawn**: its proof needed the isomorphism cells $f \cong w_!$ — which (a), a statement about stances, does not provide — to be themselves pastings of conjugate-pair cells, and shadowhood is a property, not a factorization of the witnessing cells. What survives is the **strict** version: if every stance is *strictly* a companion ($f = w_!$ on the nose), then every cell is such a pasting — a companion-framed cell is the framing bijection of Proposition 6.3.1 applied to a globular cell, i.e. a pasting of conjugate-pair cells with one globular cell, and the isomorphism cells vanish. Equivalently, (a) $\Rightarrow$ (b) holds under the added hypothesis that the witnessing isomorphism cells belong to the sub-double-category generated by globular and conjugate-pair cells. Corollary 8.1 uses only the proven direction.

**The collapse signatures, precisely.** In every bound-complete framework: strictly-all-companions implies all-cells-pastings (Proposition 6.3.1; no closure needed), and — with companion-closure — all-cells-pastings implies all-shadows (Proposition 6.3.2). The strict and pasting readings are thus equivalent in companion-closed frameworks; the up-to-isomorphism reading *every stance a shadow* is not tied to the pasting reading in either direction without the extra hypothesis of §6.3.2, and no such tie is claimed. In a *general* bound-complete framework none of this reverses, and D7″ is therefore stated in the invariant form: *some witnessed* $\mathrm{Oce}_s$ is not representable (§6.2). When $\mathbb{D}$ is quintet-collapsed — $\mathbb{V}(\mathbb{D}) \simeq \mathbb{H}(\mathbb{D})$, monads and comonads in one and the same 2-category, conjoints are right adjoints, mates the classical mates, bounds built from 2-cells alone — the language loses its second dimension: every utterance is a 2-cell in disguise, and "X and Y at Z" collapses to a statement about deeds. **D7″ forbids exactly this.**

---

## 7. D8 — The interaction calculus (derived)

The horizontal and vertical axiom systems do not merge; they are *bound*. The binding is governed by the interaction calculus, in four parts — interchange (§7.1, part of D1), conjugate pairs (§7.2, whose existence is D7′), mates (§7.3, derived) and pairings (§7.4, defined). **None of the four is a new axiom**; §8 and §10 record D8 as a derived calculus, not a demand.

### 7.1 The interchange law

The grid pastes uniquely: for cells $\alpha, \beta$ vertically composable and $\gamma, \delta$ matching them on the right,

```
      ┌──α──┬──γ──┐
      │     │     │
      ├──β──┼──δ──┤          (α ⊠ β) ⊙ (γ ⊠ δ)  =  (α ⊙ γ) ⊠ (β ⊙ δ)
      │     │     │
      └─────┴─────┘
```

Both routes around the grid coincide — the middle-four exchange, exhibited as the 2×2 square of squares. It is the only way the winds compose simultaneously; *four images, one place.* All coherence displays of §§3–5 are instances.

### 7.2 Conjugate pairs: companion and conjoint cells

**Companion of a deed $u: a \to b$** (the shadow): a stance $u_!: a \Leftrightarrow b$ with cells

```
        a ──1──▶ a            a ──u──▶ b
        │        │            │        │
       1a   χ   u!           u!   χ̂   1b
        ▼        ▼            ▼        ▼
        a ──u──▶ b            b ──1──▶ b
```

subject to the two pasting axioms $\chi \odot \hat\chi = 1_u$ (pasting along $u_!$) and $\chi \boxtimes \hat\chi = 1_{u_!}$ (stacking along $u$).

**Conjoint of a deed $u: a \to b$** (the trace): a stance $u^!: b \Leftrightarrow a$ with cells

```
        a ──u──▶ b            b ──1──▶ b
        │        │            │        │
       1a   ψ   u^!          u^!  ψ̂   1b
        ▼        ▼            ▼        ▼
        a ──1──▶ a            a ──u──▶ b
```

subject to $\psi \odot \hat\psi = 1_u$ and $\hat\psi \boxtimes \psi = 1_{u^!}$ (the same two pasting displays, in the conjoint positions).

**Proposition 7.2.1 (the binding adjunction).** The shadow and the trace of any deed are adjoint in the vertical wind: $u_! \dashv u^!$ in $\mathbb{V}(\mathbb{D})$. The unit and counit are explicit pastings:

$$\eta_{\mathrm{bind}} := \chi \boxtimes \psi:\ (1_a,\ u_! \circ_v u^!):\ 1_a \Rightarrow 1_a, \qquad \varepsilon_{\mathrm{bind}} := \hat\psi \boxtimes \hat\chi:\ (u^! \circ_v u_!,\ 1_b):\ 1_b \Rightarrow 1_b.$$

*(Typing.)* $\chi \boxtimes \psi$ stacks along the shared deed $u$; the composite's sides are $1_a \circ_v 1_a = 1_a$ and $u_! \circ_v u^!$. $\hat\psi \boxtimes \hat\chi$ stacks along $u$ from the other side; sides $u^! \circ_v u_!$ and $1_b$. The two triangle identities are pasting-coincidences: each is a grid half of which collapses by $\chi \odot \hat\chi = 1_u$ and $\psi \odot \hat\psi = 1_u$. In Rel the unit is the kernel relation of $u$ and the counit its image relation ($u_! \circ_v u^! = \ker u$, $u^! \circ_v u_! = \mathrm{im}\ u$; machine-checked, §9.5); in Prof this is the classical adjunction $B(u-,-) \dashv B(-,u-)$. $\square$

*This is the rule that binds the axiom systems*: every deed automatically presents a stance-side adjunction, and (by D2) every horizontal axiom cell whiskers along it; by duality of the mate calculus, every vertical axiom cell whiskers along the conjoint-side adjunctions. **The framework forbids the collapse identifications** $u_! = u$ and $u_! = u^!$; the winds communicate only through these cells.

### 7.3 Mate correspondences

**Proposition 7.3.1 (vertical mates).** Assume D7′. For deeds $u: a \to b$, $v: c \to d$ with conjugate pairs and any utterance $\alpha: (m, n): u \Rightarrow v$ with stance-boundary $m: a \Leftrightarrow c$, $n: b \Leftrightarrow d$, the **vertical mate**

$$\alpha^\sharp := \hat\psi_u \boxtimes (\alpha \boxtimes \hat\chi_v):\ (u^! \circ_v m \circ_v v_!,\ n):\ 1_b \Rightarrow 1_d$$

is a 2-cell of $\mathbb{V}(\mathbb{D})(b, d)$, and $\alpha \mapsto \alpha^\sharp$ is a bijection between cells $(m,n): u \Rightarrow v$ and 2-cells $u^! \circ_v m \circ_v v_! \Rightarrow n$.

*(Typing.)* Step 1: $\alpha \boxtimes \hat\chi_v$ stacks along the shared deed $v$ — $\alpha$ above the shadow-cell of $v$ — giving $(m \circ_v v_!,\ n): u \Rightarrow 1_d$. Step 2: $\hat\psi_u \boxtimes (\text{Step 1})$ stacks along the shared deed $u$, giving the displayed composite. Read in diagrammatic order, the composite stance $u^! \circ_v m \circ_v v_!$ threads $b \Leftrightarrow a \Leftrightarrow c \Leftrightarrow d$ — first the trace $u^!: b \Leftrightarrow a$, then the source stance $m: a \Leftrightarrow c$, then the shadow $v_!: c \Leftrightarrow d$ — a stance $b \Leftrightarrow d$, parallel on the right to $n: b \Leftrightarrow d$. The inverse pastes with $\chi_u, \chi_v$ in the transposed positions; both round trips are grids collapsing by the conjugate-pair axioms. In Prof the bijection is Yoneda evaluation. $\square$

**Horizontal mate.** Dually, for cells whose stance-boundary consists of companions ($m = p_!$, $n = q_!$), the adjunctions $p_! \dashv p^!$, $q_! \dashv q^!$ of Proposition 7.2.1 transpose $\alpha$ into a 2-cell of the horizontal wind — the classical mate calculus of $\mathbb{H}(\mathbb{D})$, with its two triangle pastings as the defining squares.

**The double-mate rule.** When both transpositions are available, mating horizontally then vertically coincides with mating vertically then horizontally: the two routes around the mate-pasting square coincide, a further instance of §7.1. **Mates commute with the interchange law.**

**The deed–stance dictionary.** The mate calculus is the framework's translation device:

- the mate of a unit square $\eta$ of a horizontal axiom, through a binding adjunction $u_! \dashv u^!$, is a counit-shaped square of the vertical system, and conversely — *a monad in $\mathbb{H}(\mathbb{D})$ induces a comonad on the companion $t_!$ in $\mathbb{V}(\mathbb{D})$, uniquely* (in Prof: the monad $(T, \eta, \mu)$ induces the comonad on the representable distributor $A(T-,-)$, with counit by precomposing with $\eta$);
- pasting-coincidences are preserved: the mate of an associativity display of §3.1 is a coassociativity display of §3.2 — *a monad law mates to a comonad law*;
- dually, a comonad of D3 on a *companion* stance $s = \bar s_!$ induces not a comonad but a **pointed structure** on the deed $\bar s$ (in Prof: a natural family $x \to \bar s x$); the distributive-law dictionary below therefore pairs pairings with *horizontal* comonads, the formal dual of D2.

*This is the dictionary in which the same myth is told in both winds — without either wind being reduced to the other.*

### 7.4 Pairing cells: "at Tanagra"

**Definition (pairing of a deed $t$ with a stance $s$ on the same image $a$).** A **Tanagra pairing** is an utterance

```
        a ──t──▶ a
        │        │
        s   θ    s
        ▼        ▼
        a ──t──▶ a
```

$\theta: (s, s): t \Rightarrow t$ — the deed enacted *inside* the stance.

**Proposition 7.4.1 (the distributive-law dictionary).** Assume $s$ is a companion, $s = \bar s_!$ for an endo-deed $\bar s$, and only this (conjoint cells are not needed). The framing bijection of Proposition 6.3.1, with $w = x = \bar s$ and $u = v = t$, restricts to a bijection

$$\{\text{pairings } \theta: (\bar s_!, \bar s_!): t \Rightarrow t\} \;\cong\; \{\text{globular cells } t \circ \bar s \Rightarrow \bar s \circ t\},\qquad \theta \;\longmapsto\; \lambda_\theta := \chi_{\bar s} \odot \theta \odot \hat\chi_{\bar s}.$$

If moreover $t$ carries monad structure in $\mathbb{H}(\mathbb{D})$ (a D2 axiom) and $\bar s$ carries comonad structure in $\mathbb{H}(\mathbb{D})$ (a horizontal co-axiom, the formal dual of D2), then under this bijection the pasting-coincidences of $\theta$ with the companion-framed unit, multiplication, counit and comultiplication squares correspond exactly to the four classical coherences of $\lambda_\theta$ as a **mixed distributive law of the monad $t$ over the comonad $\bar s$** (Beck). In Prof this is the classical correspondence verbatim.

**The four coherences, displayed.** Under the bijection, the four pasting-coincidences demanded of a pairing $\theta$ — its coincidences with the companion-framed unit and multiplication squares of $t$ and the companion-framed counit and comultiplication squares of $\bar s$ — transport along the conjugate cells to four pasting-coincidences of the globular cell $\lambda_\theta: t \circ \bar s \Rightarrow \bar s \circ t$ in $\mathbb{H}(\mathbb{D})$. Whiskering is horizontal pasting with the degenerate cell of the whiskering deed: $\eta \cdot \bar s = \eta \odot 1_{\bar s}$ (the deed $\bar s$ last), $\bar s \cdot \eta = 1_{\bar s} \odot \eta$ (the deed $\bar s$ first), and likewise for $\mu, \bar\varepsilon, \bar\delta, \lambda$. These are the diagrams that must commute — the classical mixed distributive-law coherences (Beck; the monad–comonad version in Power–Watanabe), displayed in the framework's own squares:

*Unit — $\lambda_\theta$ against $\eta: 1_a \Rightarrow t$ (both columns of endo-deeds $\bar s \Rightarrow \bar s \circ t$):*

```
   a ──s̄──▶ a         a ──s̄──▶ a
   │ η·s̄ │     ≡     │ s̄·η │
   ▼     ▼           ▼     ▼
   a ─ts̄─▶ a        a ──s̄t─▶ a
   │  λ  │
   ▼     ▼
   a ─s̄t─▶ a
```

*Multiplication — against $\mu: t \circ t \Rightarrow t$ (both columns $t \circ t \circ \bar s \Rightarrow \bar s \circ t$):*

```
   a ─t²s̄→ a        a ─t²s̄→ a
   │ μ·s̄ │    ≡    │ t·λ │
   ▼     ▼          ▼     ▼
   a ─ts̄─▶ a       a ─ts̄t→ a
   │  λ  │          │ λ·t │
   ▼     ▼          ▼     ▼
   a ─s̄t─▶ a       a ─s̄t²→ a
                     │ s̄·μ │
                     ▼     ▼
                     a ─s̄t→ a
```

*Counit — against $\bar\varepsilon: \bar s \Rightarrow 1_a$ (both columns $t \circ \bar s \Rightarrow t$):*

```
   a ─ts̄─▶ a        a ─ts̄─▶ a
   │  λ  │    ≡     │ t·ε̄ │
   ▼     ▼          ▼     ▼
   a ─s̄t─▶ a        a ──t──▶ a
   │ ε̄·t │
   ▼     ▼
   a ──t──▶ a
```

*Comultiplication — against $\bar\delta: \bar s \Rightarrow \bar s \circ \bar s$ (both columns $t \circ \bar s \Rightarrow \bar s \circ \bar s \circ t$):*

```
   a ──ts̄──▶ a       a ──ts̄──▶ a
   │ t·δ̄  │     ≡    │   λ    │
   ▼      ▼          ▼      ▼
   a ─ts̄²─▶ a       a ──s̄t──▶ a
   │ λ·s̄  │          │  δ̄·t  │
   ▼      ▼          ▼      ▼
   a ─s̄ts̄─▶ a       a ─s̄²t──▶ a
   │ s̄·λ  │
   ▼      ▼
   a ─s̄²t─▶ a
```

Every column is well-typed as displayed: pre-whiskering $\bar s \cdot \gamma$ pastes the deed $\bar s$ first, post-whiskering $\gamma \cdot \bar s$ last (§1.2's whiskering as horizontal pasting with degenerate cells). In **Prof** these are the classical coherences verbatim; on one-object arenas they are machine-checked to be consistent and discriminating (§9.5).

*Proof sketch.* The bijection is Proposition 6.3.1; it remains to identify the four transported coincidences. Expand each display along the framing bijection, conjugate cell by conjugate cell: each column pulls back to a pasting of $\theta$ with the companion-framed structure squares, and the coincidence of the two columns of a display is precisely the transported pairing-coincidence for that structure square. Each expansion is a finite pasting computation collapsing by the conjugate-pair axioms and interchange (§7.1); in **Prof**, where the bijection is Yoneda evaluation, the four displays are the classical mixed coherences verbatim. The v4 sentence "none is needed" is withdrawn: the displays above are the formulas. $\square$

**The quintet contrast.** In a quintet double category every stance is a companion with *identity* conjugate cells: the bijection $\theta \leftrightarrow \lambda_\theta$ is then the identity translation, the pairing square is the classical distributive law read through a trivial frame, and the pairing sector collapses onto classical distributive-law theory, adding nothing. The Ocean stances of D7″ — those without companions — are precisely where the translation fails: there, the pairing cell $\theta: (s,s): t \Rightarrow t$ is *strictly more general* than any distributive law — an utterance that no 2-categorical reading can express (a concrete family of such pairings: §9.4).

**Summary of the interaction rules:** interchange composes the winds; conjugate pairs bind them (with $u_! \dashv u^!$ as the binding adjunction); mates translate across the binding; pairings enact both systems at once. None of these rules identifies the winds.

---

## 8. D9 — The Axiom of the Two Winds

**D9 (Non-collapse).** Framework D is **non-degenerate** when all three of the following hold:

1. **Bounds are real** (D7): $\mathrm{Tan}_\alpha$ and $\mathrm{Temba}_\alpha$ are representable for every axiom cell $\alpha$ — every axiom has a Tanagra and a Temba.
2. **The binding exists** (D7′): $\kappa_u$ and $\Upsilon_u$ are representable for every deed $u$ — every deed casts both a shadow and a trace.
3. **The Ocean is deep** (D7″): some *witnessed* stance $s$ has $\mathrm{Oce}_s$ non-representable — some contexts are no deed's shadow.

Clauses 1–2 give the framework enough structure to speak (bounds, companions, conjoints, mates); clause 3 keeps it from saying everything in a single wind. A framework satisfying 1–2 but failing 3 is a quintet mirror: formally double, but every utterance a 2-cell in disguise, both axiom systems mere re-readings of one 2-category, the meeting places mere inserters, the Ocean a canal. Each clause fails somewhere on its own — a quintet fails clause 3, a lattice arena fails clause 2, a nonempty-sets arena fails clause 1 (§9.2) — with one open cell: a witnessed Ocean without companions is not currently known (§9.2).

**Corollary 8.1 (second dimension retained).** In a *companion-closed* framework satisfying clauses 1–2 and the witnessed D7″: **(1)** the comparison $\iota: Q(\mathbb{H}(\mathbb{D})) \to \mathbb{D}$ is not essentially surjective on stances — the Ocean stance is no vertical isomorphism away from any companion, and the companions are exactly $\iota$'s vertical-arrow image; and **(2)** the sub-double-category generated by $\iota$'s image — the pastings of globular and conjugate-pair cells — is proper: not every cell of $\mathbb{D}$ is such a pasting. *Proof sketch.* (1) By D7″ and Proposition 6.2.1(i) contrapositive, the Ocean stance is not a shadow. (2) If every cell were such a pasting, the proven direction of Proposition 6.3.2 would make every stance a shadow, contradicting (1). $\square$ *(Terminology, made precise.)* An earlier version phrased the conclusion as "$\iota$ is not full". Ordinary fullness of a double functor is tested on cells whose boundaries lie in the image; the Ocean stance lies outside the vertical-arrow image altogether, so its cells cannot test fullness in that sense. What the proof gives — and what non-collapse needs — is exhaustion-failure, stated as (1) and (2): the image neither reaches every stance, even up to isomorphism, nor generates every cell.

**Darmok's theorem — the reading, with its exact scope.** In a non-degenerate Framework D, the horizontal axioms (deeds, monads of §3.1) and the vertical axioms (stances, comonads of §3.2) are related by mates and conjugate pairs, but neither generates the other through the interaction calculus: Corollary 8.1's precise content is exhaustion-failure of the quintet image, and §9.4 shows the pairing sector strictly exceeding the companion-based dictionary in Rel. That is the proven sense of *bound but never identified*. A stronger reading — that neither axiom system determines the other, in some formal reconstruction or definability sense — is deliberately **not claimed**: a general independence theorem would need its sense of determination made exact first, and none is on offer here. Meaning arises only at the place where the two winds meet — and the place exists (Tanagra) because $\mathrm{Tan}$ is representable.

---

## 9. Models and counterexamples

### 9.1 Complete non-degenerate models: Rel, Span, and Prof

The consistency question for D9 — whether all three clauses can hold at once — is answered by three fully worked models; in the third, both winds are nontrivial.

**Rel** (§2.1) satisfies D1–D9. D2-axioms are trivial and D3-axioms are the coreflexive relations. D6: every relation has a tabulator (its set of pairs) and a collage; D7: the trivial axiom squares' binding presheaves are carried by identity legs (§5.2), so every designated axiom cell is boundable; D7′: graphs and opposite graphs; D7″: the total relation on $A \neq \emptyset$, $|B| \geq 2$, is a witnessed Ocean; D5 over the terminal arena (below); and all D4-coherences are automatic in Rel, since parallel cells are equal. The framework's warnings are visible here: the horizontal wind is trivial, so this model speaks the vertical language only.

**Span** (§2.2) satisfies D1–D9 as well, with a nontrivial vertical wind: comonads are the double-legged spans $(E, \pi, \pi)$. D6: apex-bounds and collage-bounds; D7: every binding presheaf is computed by equalizers in **Set** (the pasting conditions of span-maps are Set-level equations); D7′: graph spans; D7″: the chaotic span is a witnessed Ocean; D5 over the terminal arena; and here the D4-coherences are computed on apexes and genuinely constrain.

**Prof** (§2.3) is the flagship: **a complete non-degenerate model in which both winds speak** — the gap conceded in earlier versions is closed. Fix a universe of small categories. **D6**: every distributor has a category of elements (tabulator) and a collage (cotabulator), both small. **D7**: the globular axiom squares are natural transformations, and their binding presheaves (§5.2, legs as data) are represented by the classical 2-categorical inverters and coinverters of **Cat**, which exist and stay small — the inverter of $\alpha: u \Rightarrow v$ is the category of pairs $(a_0, \varphi: u a_0 \cong v a_0)$, the coinverter the small localization; stance-cell and dialgebraic-component bounds are categories of elements with transported binding (§5.3). (Had §5.2 been formulated on slices with the leg fixed, these demands would *fail* in Prof — slice hom-sets are not truth values; the legs-as-data pattern is what keeps D7 satisfiable here.) **D7′**: representable distributors. **D7″**: a distributor of cardinality $2$ on $1 \rightleftharpoons 1$ is a witnessed Ocean — $\mathrm{Oce}_s(1_1)$ has two elements, while the hom-category $\mathbb{H}(1,1)$ has exactly one cell. **D5**: over $\mathbb{A} = 1$ (below). The interaction calculus is classical here (§2.3), and the anti-collapse axiom holds: **Prof is a model in which both winds are nontrivial and the language does not reduce to $\mathbb{H}(\mathbb{D}) = $ Cat.**

**What was retracted from the v4 Prof story — and what stands.** Two v4 claims about Prof were too strong and are withdrawn with the counterexample of §6.2 (Example 6.2.2): the detection converse 6.2.1(ii) — a witnessed non-shadow with a *representable* Ocean presheaf exists on the walking arrow over $1$ — and the density of the companion functor. Neither retraction touches the paragraph above: D6, D7, D7′, D7″ and D5 hold in Prof as stated, the witnessed cardinality-$2$ Ocean included, so Prof remains a complete non-degenerate model with both winds nontrivial; what fails is the optional strengthening D7″⁺, now recorded as holding in Rel and Span only.

**D5's witnesses, precisely.** The Seed/Myth claims are made over the terminal arena $\mathbb{A} = 1$ (or any arena with only trivial stances): there $\mathrm{Dial}(F,G)$ is the category of relations (spans, distributors) between the two image sets (categories), and the empty family is initial, the total (chaotic, constant-singleton) family final — genuinely, in Rel, Span and Prof. Over *stanced* arenas the Myth can fail: in Rel with $F = G = \mathrm{Id}$, the chaotic family's $\Theta_f$ would have to witness $f \circ_v (c \times c) \subseteq (a \times a) \circ_v f$ for every stance $f: a \Leftrightarrow c$ — i.e. $\pi_1(f) \neq \emptyset \Rightarrow \pi_2(f) = c$ — which the singleton relation $\{x_0\} \times \{y_0\}$ with $|c| \geq 2$ violates. The failure is a datum, not a defect: over stanced arenas D5 is a genuine restriction on how a Myth can be told. (The Seed is safer: composing with the empty relation always gives the empty relation, so the empty family is a dialgebraic axiom over any arena.)

### 9.2 Independence of D6, D7, D7′ and D7″

| Framework | D6 (carrier bounds) | D7 (cell bounds) | D7′ (binding) | D7″ (witnessed Ocean) | Lesson |
|---|---|---|---|---|---|
| $Q(G)$, $G$ a nontrivial group | ✓ | ✓ | ✓ | ✗ | the quintet mirror: bound and bound-complete, yet collapsed |
| $\mathbb{D}(L)$, $L$ a complete lattice | ✗ | ✓ | ✗ | ✗ (unwitnessed) | cell bounds without carrier bounds — and no *seen* Ocean |
| $\mathrm{Rel}^+$ (Rel on nonempty sets) | ✗ | ✗ | ✓ | ✓ | binding and Ocean without bounds |
| Rel, Span, Prof | ✓ | ✓ | ✓ | ✓ | the complete models of §9.1 |

- **$Q(G)$** ($G$ a group, as a one-object 2-category with trivial 2-cells): companions are trivial and conjoints come from inverses ($u^{-1}u = 1$ supplies the conjoint cells), so D7′ holds; the tabulator of a stance $g$ is $(\bullet, \mathrm{id}, g, \tau)$ and dually, so D6 holds; the trivial axiom squares' binding presheaves are carried by identity legs, so D7 holds; but every stance is its own companion, so all Ocean presheaves are representable. **D7″ ✗** — the mirror is bound, bound-complete, and collapsed.
- **$\mathbb{D}(L)$**: images are the elements of a complete lattice $L$; deeds and stances are independent copies of the order relations; a cell $(m,n): u \Rightarrow v$ exists, uniquely, iff $u = v$ as arrows. Cell bounds hold (the trivial axiom squares' binding presheaves are carried by identity legs, so D7 ✓); but the tabulator of an off-diagonal stance $a < b$ would need a cell $(1_T, s): p \Rightarrow q$, which forces $p = q$ — impossible, since $p: T \to a$ and $q: T \to b$ have different targets — so **D6 ✗**; off-diagonal deeds admit no companions or conjoints, so **D7′ ✗**; and every off-diagonal $\mathrm{Oce}_s \equiv \emptyset$ is *unwitnessed*, so under the witness clause of §6.2 **D7″ ✗** as well. $\mathbb{D}(L)$ shows that cell bounds can hold where carrier bounds and binding fail — and, once the Ocean axiom demands a witness, it no longer witnesses D7″-independence from D7′ (see the open cell below).
- **$\mathrm{Rel}^+$** (the full sub-equipment of Rel on *nonempty* sets): graphs and opposite graphs give D7′; the total relation gives a witnessed D7″; but the tabulator of the empty relation would be the empty set, which $\mathrm{Rel}^+$ excludes — **D6 fails directly**, and with it D7 (the empty coreflexive's counit square is unboundable for the same reason: its bound is the tabulator of the empty relation). Binding and Ocean without bounds.
- **The open cell.** A framework with a *witnessed* Ocean but without companions (D7 ✓ + D7″ ✓ + D7′ ✗) is not currently known. Before the witness clause was added to D7″, $\mathbb{D}(L)$ served as this witness; the tightened axiom leaves the independence of D7″ from D7′ genuinely open. The remaining separations are witnessed: $Q(G)$ (D6–D7′ without D7″), $\mathrm{Rel}^+$ (D7′ + D7″ without D6/D7), and the models of §9.1 (all together).


### 9.3 D5 is not vacuous: an empty Dial

In $\mathbb{D}(L)$ for the diamond lattice $\{\bot, p, q, \top\}$, let $G$ be the lattice automorphism swapping $p \leftrightarrow q$ (a strict double functor), $F = \mathrm{Id}$. A dialgebraic axiom would need a deed-cell at the deed $u: p \to \top$, i.e. a cell $\sigma_u: (\sigma_p, \sigma_\top): u \Rightarrow G(u)$ — but cells exist only between equal deeds, and $G(u): q \to \top \neq u$. Hence $\mathrm{Dial}(F, G) = \emptyset$: **neither Seed nor Myth exists**. D5's existence clauses are genuine restrictions, not formalities.

### 9.4 Pairings beyond distributive laws

In Rel, take $A = \{0,1\}$, the stance $s = A \times A$ (the total relation) and any endo-deed $t: A \to A$. The pairing $\theta: (s,s): t \Rightarrow t$ — "$t$ preserves totality" — exists for *every* $t$: a whole family of pairings. But $s$ is no function graph ($\bar s$ would need $\bar s(0) = 0 = 1$), so by Proposition 7.4.1's hypothesis failure, none of these pairings corresponds to any classical distributive law $\lambda: t \circ \bar s \Rightarrow \bar s \circ t$. The Ocean is exactly where the pairing sector exceeds classical distributive-law theory.

### 9.5 Machine-checked finite instances

The finite and discrete content of this framework — every counterexample, every representability and non-representability claim at finite size, and the pasting-boundary bookkeeping of §§4–7 — has been verified by exhaustive brute-force computation against the conventions of §1. All checks passed:

- **Rel, exhaustively** (all sets, relations and functions with $|A|, |B|, |X| \leq 2$): tabulators and cotabulators represent their (co)binding presheaves; monads are exactly the identities and comonads exactly the coreflexives; the conjugate-pair cells, their pasting composites, and the binding adjunction exist (unit = kernel relation, counit = image relation); $\mathrm{Oce}_s(u) = [\mathrm{graph}(u) \subseteq s]$, the companion nerve verbatim (Proposition 6.2.0); $\mathrm{Oce}_s$ is representable **iff** $s$ is a function graph — Proposition 6.2.1(ii) and D7″⁺ for Rel, edges included ($A = \emptyset$: representable; the total relation: not); the singleton-relation Myth failure and the empty-family Seed survival over stanced arenas; pairings at $\mathrm{graph}(g)$ exist iff $t$ commutes with $g$, while the pairing at $A \times A$ exists for every $t$; companion closure $\mathrm{graph}(v \circ u) = \mathrm{graph}(v) \circ_v \mathrm{graph}(u)$; the frame axiom and functoriality of a dialgebraic axiom ($\sigma = \Delta$, $F = G = \mathrm{Id}$); and the empty relation's tabulator being the empty set, pinpointing $\mathrm{Rel}^+

- **$Q(G)$ for $G = \mathbb{Z}/3$ and $G = S_3$**: $\mathrm{Tab}(g) = (\bullet, \mathrm{id}, g, \tau)$ and dually; companions for every deed, conjoints exactly from inverses, companion $\neq$ conjoint off involutions; every stance its own companion, so all Ocean presheaves are representable (D7″ fails).
- **$\mathbb{D}(L)$ for the diamond lattice**: cell bounds hold at the identity monads; the off-diagonal stance has no tabulator (D6 ✗); no cell $1_p \Rightarrow u$ exists for off-diagonal $u$ (D7′ ✗, oceans unwitnessed, D7″ ✗ under the witness clause); and $\mathrm{Dial}(F,G) = \emptyset$ for the swap (no Seed, no Myth).
- **Prof on finite categories** ($0$, $1$, the walking arrow, the walking iso, the free $0 \to 1 \to 2$; tested against $0, 1, 2, A_2$): the distributor of cardinality $2$ on $1 \rightleftharpoons 1$ is a witnessed, non-representable Ocean; the inverter of a non-invertible $\alpha$ is the empty category, of an invertible $\alpha$ the terminal category, with $\mathrm{Tan} \cong \mathrm{Hom}(-, T)$ as §5.2 demands (legs as data); the tabulator of a distributor $2 \rightleftharpoons 1$ is its category of elements, bindings $\cong$ functors into it.

- **The fourth reviewer's counterexample, verified (Example 6.2.2).** On $A = $ the walking arrow over $1$: for the displayed $s$ ($s(0) = \{p,q\}$, $s(1) = \{r\}$, $r \mapsto p$), $\mathrm{Nat}(u_!, s)$ is a singleton and $\mathbb{H}(A,1)$ is terminal, so $\mathrm{Oce}_s$ is representable while $s$ is a witnessed non-shadow — 6.2.1(ii) and D7″⁺ fail for Prof. The general shape confirmed at $|s(0)|, |s(1)| \leq 2$: $|\mathrm{Nat}(u_!, s)| = |s(1)|$, so every $s$ with singleton target and larger source component is a detected failure; the density claim fails with it — the comma category $(c \downarrow s)$ is the terminal category at $u_!$, whose colimit is $u_! \not\cong s$.

- **6.2.1(ii) retained where it stands, newly machine-checked.** Rel: representable $\mathrm{Oce}_s$ iff $s$ is a function graph (re-verified at $|A|, |B| \leq 2$). Span, exhaustively at $|a|, |b| \leq 2$, apex $\leq 3$: representable iff $s$ is isomorphic to a graph span — extra apex elements create extra sections; displaced or missing ones empty or multiply the presheaf.

- **The four distributive-law coherences of §7.4 (one-object arenas — Prof on monoids).** Endomorphisms, monads and horizontal comonads enumerated exhaustively ($\mathbb{Z}/3$: 3 monads, 3 comonads; $S_3$: 6 and 6). The four displays are **consistent** — law-satisfying cells exist in both arenas, including pairs with non-identity unit and multiplication — and **discriminating**: on $\mathbb{Z}/3$, 18 of 27 natural candidate cells are rejected (the unit law alone already pins $\lambda$ down); on $S_3$, all 36 natural candidates satisfy all four. The cardinality-$2$ Ocean witness on $1 \rightleftharpoons 1$ was re-verified in the same pass.
*Scope, honestly:* this certifies the finite instances — the counterexamples and the local universal properties at the sizes listed — together with the internal consistency of the §1 conventions; it does not substitute for the general proofs of §§5–7, nor for the size-disciplined model claims of §9.1 at unrestricted size.

---

## 10. The axioms at a glance

| # | Axiom | Data | The square | Universal? |
|---|---|---|---|---|
| D1 | Arena | strict double category 𝔻 — given, not built; **no anti-collapse demand** (that is D9's derived business) | the cell $\alpha: (f,g): u \Rightarrow v$ | — |
| D2 | Horizontal axioms: deeds | monad $(t, \eta, \mu)$ in $\mathbb{H}(\mathbb{D})$ | $\eta, \mu$ as squares; laws as pasting columns | — |
| D3 | Vertical axioms: stances | comonad $(s, \varepsilon, \delta)$ in $\mathbb{V}(\mathbb{D})$ | $\varepsilon, \delta$ as squares; laws as pasting grids | — |
| D4 | Dialgebraic axioms (lax) | $\sigma: F \Leftrightarrow G$: carriers $\sigma_a$; deed-cells $\sigma_u$ with functoriality; stance-cells $\Theta_f$ with normality/functoriality | $\sigma_u$, $\Theta_f$ squares; frame axiom $\mathrm{LHS}(\alpha) = \mathrm{RHS}(\alpha)$ | — |
| D5 | Seed and Myth | initial / final object of $\mathrm{Dial}(F,G)$ — *existence assumed* | left / right universal square | ✓ |
| D6 | Carrier bounds | $\mathrm{Tab}$ (Tanagra) / $\mathrm{Cotab}$ (Temba) of **every stance** | $\tau: (1_T, v): p \Rightarrow q$; $\kappa: (v, 1_C): i \Rightarrow j$ | ✓ |
| D7 | Cell bounds are real | representability of $\mathrm{Tan}_\alpha$, $\mathrm{Temba}_\alpha$ for every *designated* axiom cell — teeth at the globular cells; framed cells reduce to D6 by transport (§5.3, §5.5) | inverters / coinverters; transported bindings (§5.2–5.3) | ✓ |
| D7′ | Binding | representability of $\kappa_u, \Upsilon_u$ for every deed | — | ✓ |
| D7″ | The Ocean | some *witnessed* $\mathrm{Oce}_s$ **not** representable | — | — |
| D8 | Interaction calculus — **derived, not an axiom** | interchange (from D1); conjugate pairs (from D7′); mates; pairings $\theta: (s,s): t \Rightarrow t$ | 2×2 grid; $\chi, \hat\chi, \psi, \hat\psi$; mate pastings; pairing squares | — |
| D9 | Two Winds | carrier + cell bounds real; binding exists; Ocean deep (witnessed) — and in companion-closed frameworks the quintet image then neither reaches every stance nor generates every cell (Corollary 8.1) | — | — |

Layers: **minimal** = D1–D6 + D7; **bound-complete** = + D7′; **non-degenerate** = + D7″ (D9).

---

## 11. Positioning and references

**Standard, and where.** Double categories with two constituent 2-categories and the companion/conjoint calculus: Wood (*Abstract proarrows I*, 1982); Shulman (*Framed bicategories and mate-pastings*, 2008); Cruttwell–Shulman (*A unified framework for generalized multicategories*, 2010). Tabulators, cotabulators, inverters and coinverters as double-categorical limits: Grandis–Paré (*Limits in double categories*, 1999). Mates: Kelly–Street (*Review of the elements of 2-categories*, LNM 420, 1974). Distributive laws: Beck (*Distributive laws*, LNM 80, 1969). Monads in Prof and the formal theory of monads: Street (*The formal theory of monads*, 1972). The quintet construction is classical.

Mixed distributive laws of a comonad over a monad: Power–Watanabe (*Combining a monad and a comonad*, TCS 280, 2002).

**New here.** D4's dialgebraic axioms: close cousins of lax transformations of double functors (Cruttwell–Shulman's general framework), but treated as *axioms* — with the frame axiom stated as a pasting-coincidence of named pastings, and with bounds demanded (D6–D7). D5's Seed and Myth as initial/final dialgebraic axioms. D7″ as an anti-collapse axiom via non-representable companion nerves (§6.2), together with the observation that the Ocean presheaf is exactly that nerve. The Prof model of §9.1 — complete, non-degenerate, both winds nontrivial — appears to be new as a model for an anti-collapse axiom, though every ingredient of it is classical.

**Where the contribution is concentrated.** The fourth review's programmatic assessment is adopted: the Ocean/companion-nerve theory of §6.2 is the main candidate for the framework's research contribution, and the v5 sharpening is recorded rather than hidden — the nerve detects shadows in Rel and Span, fails to in Prof (Example 6.2.2), and D7″ is stated through non-representability precisely so that the main results never depend on detection. The mathematical content is readable without the Tamarian vocabulary (§0's layer convention); the contribution should be judged at §6.2.

---

## 12. Version history

### Version 2 changelog

1. **§7.3 (v1), vertical mate formula — type error, corrected.** The mate of $\alpha: (m,n): u \Rightarrow v$ is $\alpha^\sharp: u^! \circ_v m \circ_v v_! \Rightarrow n$; the v1 order did not type-check.
2. **§3.2 (v1), comonad law displays — order errors, corrected.** The counit laws read $\delta \odot (s{\cdot}\varepsilon) = 1_s = \delta \odot (\varepsilon{\cdot}s)$ with $\delta$ pasted on the **left**; the reversed pasting is well-typed but is not the law.
3. **§7.4 (v1), distributive-law direction — corrected** (classical Yoneda evaluation).
4. Strictness remark (§1); order convention; frame-axiom and mate type-checks; base-change and grounding notes; a concrete Ocean (§6.2); diagram hygiene.

### Version 3 changelog

Recorded against the second version, with thanks to the second reviewer:

1. **D4 restated with full typings** (§4.1): the lax convention is named; the frame axiom is an equality of *named* pastings $\mathrm{LHS}(\alpha) = \mathrm{RHS}(\alpha)$; functoriality of deed-cells and normality/functoriality of stance-cells are explicit clauses. It is now recorded that degenerate instances of the frame axiom are automatic given these clauses, while functoriality is independent; pasted instances are derivable.
2. **D5 made genuinely categorical** (§4.2): Seed and Myth are initial/final objects of $\mathrm{Dial}(F,G)$; existence is explicitly *assumed*; the four flavor-names (initial, left universal, Temba-flavored, Seed — and dually) are shown to name one thing each, with a diagram.
3. **Running examples added early** (§2): Rel, Span, Prof, and the quintet control, each spelling out what monads, comonads, companions, conjoints, Oceans and pairings are there. §9 verifies their axiom-statuses.
4. **Propositions numbered** with hypotheses and proof sketches: 6.2.1 (Ocean representability, directions split), 6.3.1 (framing bijection), 6.3.2 (collapse propagation), 7.2.1 (binding adjunction, explicit unit/counit pastings), 7.3.1 (vertical mate bijection), 7.4.1 (distributive-law dictionary). The v2 blanket equivalence of the three collapse signatures is corrected: two coincide in companion-closed frameworks; the third implication is one-way in general (§6.3).
5. **Ocean axiom tightened** (§6.2): the strong variant D7″⁺ (every non-shadow stance is an Ocean) is introduced, verified in the running examples, and the option of localizing D7″ to a sub-arena is noted.
6. **Status of D7′ clarified** (§6.1): minimal / bound-complete / non-degenerate layers; independence of D7, D7′, D7″ witnessed (§9.2); companion-only frameworks retain §7.4 and lose §7.3.
7. **Models and counterexamples** (§9): Rel and Span as complete non-degenerate models (answering the consistency question for D9); $Q(G)$, $\mathbb{D}(L)$, $\mathrm{Rel}^+$ as independence witnesses; an empty $\mathrm{Dial}(F,G)$ (D5 non-vacuous); pairings beyond distributive laws (§9.4).
8. **Navigation**: lexicon, layer convention, reading paths and a notation table consolidated in §0; type-checks normalized as compact *(Typing.)* paragraphs; the anti-collapse principle is stated canonically in D9 and referred to elsewhere; the changelog is kept in-document (as Version history) so the main text remains self-contained.
9. **Two further corrections found while verifying (not in the reviewer's list):**
   - **§7.4 (v2):** "the comonad structure mated from $s$" was wrong: a D3-comonad on a companion stance $s = \bar s_!$ mates to a **pointed structure** on the deed $\bar s$, not a comonad. The dictionary (Proposition 7.4.1) now pairs pairings with *horizontal* comonads — the formal dual of D2 — and the pointed-structure fact is recorded in the deed–stance dictionary.
   - **§5.3–5.4 (v2):** the tabulators of dialgebraic deed-cells (which have nontrivial stance *and* deed boundary) fit neither the §5.2 nor the §5.3 construction as written. §5.3 is generalized to arbitrary cells via transported bindings, and the bounds of D4-components are shown to reduce to tabulators of carriers and composite stances — sharpening the scope of D7.
10. **Declined, with reasons**: full separation of the Tamarian vocabulary from the definitions (kept as aliases under the §0 layer convention — the vocabulary is the document's declared subject); a separate release-notes file (kept in-document for self-containment); wholesale replacement of the composition symbols (kept $\circ, \circ_v, \odot, \boxtimes$, now with a notation table and reserved roles).
11. **Post-write corrections to the v3 text, now on record:** clause (ii′)'s composition order ($\sigma_{u \circ u'} = \sigma_u \odot \sigma_{u'}$) and clause (iii′)'s pasting ($\Theta_{f \circ_v f'} = (1_{Ff} \boxtimes \Theta_{f'}) \odot (\Theta_f \boxtimes 1_{Gf'})$, with its typing note) were corrected after the v3 draft was written, together with a typographical fix; they are recorded here so that the changelog is complete.

---

### Version 4 changelog

Recorded against the third version, with thanks to the third reviewer:

1. **§4.1, $\mathrm{Dial}(F,G)$ composition — type error, corrected.** Composition of morphisms is *horizontal* pasting $\Theta_a \odot \Theta'_a$ along the shared carrier $\sigma'_a$ (the hom-composition of $\mathbb{V}(\mathbb{B})$); the v3 "vertical pasting" was ill-typed, needing $1_{Ga} = 1_{Fa}$.
2. **§9.1, the Myth over stanced arenas — model claim corrected.** The Rel/Span Seed/Myth witnesses are now stated over the terminal arena $\mathbb{A} = 1$; over stanced $\mathbb{A}$ the chaotic family fails the $\Theta_f$-clause ($\pi_1(f) \neq \emptyset \Rightarrow \pi_2(f) = c$; counterexample: a singleton relation with $|c| \geq 2$). The Seed survives stanced arenas (composing with the empty relation gives the empty relation). Prof joins as the third complete model, with D5 witnessed verbatim over $\mathbb{A} = 1$.
3. **§5.2, binding presheaves — definitional correction (the largest fix).** $\mathrm{Tan}_\alpha$ is now a presheaf on (images, deeds) with the leg $x$ *as data*, in the pattern of §5.1 — a two-sided inverse of the whiskered axiom — replacing the v3 slice-based formulation with the leg fixed and a redundant pair $(\xi, \dot\xi)$. The slice formulation was not merely inelegant: it would have made D7 *fail* in Prof (slice hom-sets are not truth values). The corrected definition is what lets §9.1 close Prof's gap.
4. **§9.1, Prof is a complete model with both winds nontrivial.** Under the corrected §5.2: D6 = categories of elements and collages; D7 = 2-categorical inverters/coinverters of **Cat**, small, with the size discipline stated; D7′ = representables; D7″ = a witnessed distributor of cardinality 2 on $1 \rightleftharpoons 1$; D5 over $\mathbb{A} = 1$. The consistency of D9 no longer rests on models with a trivial horizontal wind.
5. **§6.2, witnessed Ocean.** D7″ now demands a witness cell $(1_a, s): 1_a \Rightarrow u_0$; the existential form is demoted to a weak variant. The loophole was real: $\mathbb{D}(L)$'s oceans are all unwitnessed, so its §9.2 row is corrected (D7″ ✗) and the D7″-vs-D7′ independence cell is now recorded as **open**.
6. **§6.2, the Ocean as companion nerve.** New Proposition 6.2.0: $\mathrm{Oce}_s \cong \mathbb{V}(a,b)(u_!, s)$ is the nerve of the companion functor. This reframes 6.2.1(i) as Yoneda and D7″⁺ as "the nerve detects non-shadows". The reviewer's suggestion that the converse be read as *density* of the companion functor is adopted for Prof and **corrected for Rel**, where the functor is not dense (singleton relations are no unions of function graphs) yet the nerve still detects shadows: density is sufficient, not necessary.
7. **D6 made explicit (§5.1).** Carrier bounds — every stance has a tabulator and a cotabulator — were a phantom row in the §10 table; they are now a stated axiom, and D7 is retitled *cell bounds*. Consequences drawn in §9.2: $\mathbb{D}(L)$ fails D6 (off-diagonal tabulators); $\mathrm{Rel}^+$'s sharper witness is adopted — the empty relation's tabulator is the excluded empty set — pinpointing D6 as the failing clause.
8. **D8 demoted to a derived calculus (§7, §10).** Interchange belongs to D1, conjugate pairs to D7′, mates and pairings are derived/defined; §7 is retitled and its "three rules" intro corrected to four parts.
9. **D9, clause 3 and the theorem (§8).** Clause 3 now states the Ocean axiom alone; non-fullness of $\iota$ is derived in the new **Corollary 8.1** under companion-closure + witnessed D7″; "Darmok's theorem" is split into the corollary (provable) and a reading (interpretive).
10. **Nits fixed:** §3.1's undefined "⊡" replaced; the whiskering dot "$\cdot$" defined once (§0.1) as whiskering-in-the-wind-at-hand; §5.3's Consequence retyped ($\sigma_u: F(u) \Rightarrow G(u)$) and extended to cotabulators; §5.4's asserted equivalence softened to a reading; Rel's concrete Ocean needs $A \neq \emptyset$ (and Prof's needs cardinality $\geq 2$); D7's quantification made explicit via designated axiom classes (§5.5); §9.3's lattice elements renamed $p, q$ (no clash with §5.3's legs); size assumptions stated (§0.1); a formal abstract added; references and positioning added (§11).
11. **Declined, with evidence:** the claim that the v3 *file* began and ended with leaked drafting notes — the quoted strings were chat messages, not file content (the file was re-checked: front matter, title, closing line; nothing to remove). The actionable residue is adopted: the post-write v3 corrections are now recorded (Version 3 changelog, item 11).
12. **Finite-instance verification (§9.5).** The finite and discrete claims of §§2, 4–9 were machine-checked by exhaustive brute force against the §1 conventions: Rel exhaustively ($|A|, |B|, |X| \leq 2$), $Q(\mathbb{Z}/3)$ and $Q(S_3)$, the diamond-lattice $\mathbb{D}(L)$, and the Prof instances of §9.1 on finite categories (inverters, the category of elements, the witnessed cardinality-2 Ocean). All 33 checks passed; the record and its scope are stated in §9.5. One reading gained text from the check: in Rel the binding adjunction's unit is the kernel relation and its counit the image relation (§7.2).

---

### Version 5 changelog

Recorded against the fourth version, with thanks to the fourth reviewer. The reviewer's central counterexample was machine-verified before adoption, and every retained claim it touched was re-verified or newly machine-checked in the same pass.

1. **§6.2, Proposition 6.2.1(ii) for Prof — withdrawn; counterexample adopted as Example 6.2.2.** The walking-arrow distributor over $1$ ($s(0) = \{p,q\}$, $s(1) = \{r\}$, $r \mapsto p$) is a witnessed non-shadow with representable Ocean: $\mathrm{Nat}(u_!, s)$ is a singleton, and $\mathbf{Cat}(A,1)$ is terminal. The general shape is machine-verified: $|\mathrm{Nat}(u_!,s)| = |s(1)|$ on this arena — the Ocean presheaf is blind to the source component. (ii) is retained for Rel and Span, with Span newly machine-checked at $|a|, |b| \leq 2$, apex $\leq 3$.
2. **§6.2, the density claim for Prof — withdrawn.** "The companion functor is dense in Prof" is false: for Example 6.2.2's $s$ the canonical comma category $(c \downarrow s)$ is the terminal category at $u_!$, so its colimit is $u_! \not\cong s$. The v4 story "density powers (ii)" is corrected on both ends: density fails in Rel (where detection holds regardless) and in Prof (where detection fails); neither implies the other.
3. **§6.2, clause (iii) strengthened from open to refuted.** "Whether the nerve detects shadows everywhere is open" is now answered negatively: it does not — Prof is the witness. Detection is recorded as a model-by-model property (Rel and Span: yes, machine-checked).
4. **§6.2, D7″⁺ rescoped.** It holds in Rel and Span and fails in Prof (Example 6.2.2); it is a property of particular models, not a consequence of D1–D7′.
5. **§6.3, Proposition 6.3.2 — the equivalence is split.** Proven direction kept: in companion-closed frameworks, all-cells-pastings implies all-shadows. The converse (a) $\Rightarrow$ (b) is withdrawn: it required the isomorphism cells witnessing shadowhood to be pastings of conjugate-pair cells, which shadowhood does not give. The strict version (every stance strictly a companion) is recorded as equivalent to the pasting reading, as is the repair hypothesis (the witnessing isomorphism cells lie in the generated sub-double-category). The "collapse signatures" paragraph is rewritten accordingly; Corollary 8.1's proof now uses only the proven direction.
6. **§8, Corollary 8.1 — restated precisely.** "ι is not full" is replaced by the exact pair: not essentially surjective on stances, and the generated sub-double-category proper; a terminology note records why boundarywise fullness was the wrong notion — the Ocean stance is not in the vertical-arrow image, so fullness was being tested against the wrong notion.
7. **§1.2, D1 — anti-collapse demoted from primitive to derived.** "The comparison functor of §6.3 is required to fail" is removed: a quintet is a model of D1, and the exclusion is D9's derived business — the reviewer's preferred logical order, now the document's.
8. **§5.5, D7's asymmetry made explicit.** For framed cells the binding presheaf is literally the source stance's (§5.3), so D7 there reduces to D6 plus transport; the new content is concentrated at the horizontal globular cells, where inverters and coinverters are demanded. Stated as a design remark.
9. **§7.4, the four Beck coherences displayed.** The unit, multiplication, counit and comultiplication column-coincidences for $\lambda_\theta$ are now four explicit typed displays — the diagrams that must commute; the v4 sentence "none is needed" is withdrawn. Machine-checked on one-object arenas ($\mathbb{Z}/3$: 9 of 27 natural candidates satisfy all four, 18 are rejected; $S_3$: all 36 natural candidates satisfy; law-satisfying cells exist with non-identity unit and multiplication in both). Reference added: Power–Watanabe (§11).
10. **§2.3 and §9.1, Prof's Ocean bullet corrected; §8's reading scoped.** "Ocean: any non-representable distributor" wrongly conflated the distributor's representability with its Ocean presheaf's; corrected, with the cardinality-$2$ witness kept as the example. "Neither determines the other" is now scoped to the proven exhaustion-failure plus §9.4's pairing fact; no general independence theorem is claimed.
11. **Verification code published.** The v5 harness — the Prof counterexample and density failure, Rel and Span detection, the $1 \rightleftharpoons 1$ witness, and the four coherence displays on $\mathbb{Z}/3$ and $S_3$ — is published as a companion code artifact; §9.5 records its results.
12. **Nothing declined.** Every substantive point of the fourth review was adopted, most with machine verification first. The reviewer's own survival list — 6.2.1(i), the Prof consistency model, the witnessed cardinality-$2$ Ocean — was re-checked and confirmed.

---

*Framework D is complete. Its axioms are squares; its laws are pastings; its bounds are representing images; its winds are bound but never identified. Darmok and Jalad at Tanagra.*