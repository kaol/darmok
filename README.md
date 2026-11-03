# Darmok — Framework D

**Framework D: A Double-Categorical Axiomatics for Darmok** — version 5.

Framework D axiomatizes a strict double category whose two axiom systems live in its two
constituent 2-categories: monads in the horizontal wind, comonads in the vertical wind, and
dialgebraic axioms relating two tellings. Every axiom is a cell; every meta-law is a
pasting-coincidence. Rel, Span and Prof are complete non-degenerate models.

## Contents

- [`FRAMEWORK.md`](FRAMEWORK.md) — the framework document (v5, including the §12 version changelog)
- [`verification/harness.ts`](verification/harness.ts) — self-contained brute-force verifier for the document's finite claims (§9.5)

## Verification

Every finite claim of v5 was machine-verified before writing (the Prof counterexample of
Example 6.2.2, Rel and Span detection, the Beck coherence displays on Z/3 and S3, and the
cardinality-2 distributor witness). The harness has no dependencies and runs under any
ES2020+ runtime; it prints an `ALL CHECKS PASSED` report.
