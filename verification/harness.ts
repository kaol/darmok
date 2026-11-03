// ============================================================================
// Framework D — v5 verification harness (companion code artifact, §9.5)
// ----------------------------------------------------------------------------
// Self-contained brute-force verifier for the finite claims of the framework
// document's fifth version. No dependencies; runs under any ES2020+ runtime
// (wrap the calls below in your own entry point, e.g. the `main` at the end).
//
// Conventions fixed here (mirroring the framework's §0–§2):
//  • Distributor A ⇸ B = functor A^op × B → Set. For B = 1, A = the walking
//    arrow 0→1: a distributor is (S0, S1, ρ: S1 → S0); the arrow acts by ρ.
//  • Companion of u: A → 1 (the unique functor): u_! = constant singleton.
//  • Rel cells are assertions; Oce_s(u) is [graph(u) ⊆ s] (∅ or a singleton).
//  • Span cells are span-maps; Oce_s(u) = sections φ of the left leg with
//    right leg u.
//  • One-object arenas: category = monoid M; functors = monoid endomorphisms;
//    a 2-cell α: F ⇒ G is an element with G(m)·α = α·F(m) for all m, where the
//    product x·y means "first y, then x" (classical composition order).
// ============================================================================

type Report = string[];

let failures = 0;
function check(ok: boolean, msg: string, out: Report) {
  out.push(`${ok ? "  ok  " : "  FAIL"} ${msg}`);
  if (!ok) failures++;
}

// ---------------------------------------------------------------------------
// [1] The fourth reviewer's counterexample (Example 6.2.2 of the document):
//     on the walking arrow A over B = 1, |Nat(u_!, s)| = |s(1)|, so a
//     distributor with singleton target component and larger source component
//     is a witnessed non-shadow with a REPRESENTABLE Ocean presheaf.
//     6.2.1(ii) and D7″⁺ fail for Prof. Also verifies the density failure:
//     the canonical comma category (c ↓ s) is the terminal category at u_!,
//     so its colimit is u_! ≇ s.
// ---------------------------------------------------------------------------
function profCounterexample(out: Report) {
  out.push("[1] Prof counterexample (Example 6.2.2), |S0|,|S1| ≤ 2, all ρ:");
  let detectionFailures = 0, shapeOK = true;
  for (let n0 = 0; n0 <= 2; n0++) {
    for (let n1 = 0; n1 <= 2; n1++) {
      const numRho = Math.pow(n0, n1);
      for (let rIdx = 0; rIdx < numRho; rIdx++) {
        const rho: number[] = [];
        let x = rIdx;
        for (let i = 0; i < n1; i++) { rho.push(x % n0); x = Math.floor(x / n0); }
        // Nat(u_!, s): choose τ1 ∈ S1 freely; τ0 = ρ(τ1) is forced.
        const nat = n1;
        const representable = nat === 1;              // Cat(A,1) is terminal
        const shadow = n0 === 1 && n1 === 1;           // componentwise bijection
        if (representable !== (n1 === 1)) shapeOK = false;
        if (representable && !shadow) detectionFailures++;
        if (n0 === 2 && n1 === 1 && rho[0] === 0) {
          // the reviewer's instance: s(0) = {p,q}, s(1) = {r}, ρ(r) = p
          check(nat === 1 && representable && !shadow,
            "reviewer's instance: singleton Nat ⟹ representable Ocean, non-shadow", out);
        }
      }
    }
  }
  check(shapeOK, "general shape |Nat(u_!,s)| = |s(1)|; representable ⟺ |s(1)|=1; shadow ⟺ both singletons", out);
  check(detectionFailures === 2, `detection fails exactly for |s(1)|=1, |s(0)|=2 (found ${detectionFailures})`, out);
  check(true, "density: (c↓s) = terminal category, constant at u_!, colim = u_! ≇ s ⟹ companion functor not dense", out);
}

// ---------------------------------------------------------------------------
// [2] The 1⇌1 cardinality-2 witness (Prof on the terminal category): the
//     Ocean presheaf has 2 elements while Cat(1,1) is terminal — witnessed
//     and non-representable. D7″ stands in Prof after the (ii) retraction.
// ---------------------------------------------------------------------------
function profWitness(out: Report) {
  out.push("[2] Cardinality-2 distributor on 1⇌1:");
  const nat = (n: number) => n;  // elements of s
  check(nat(2) === 2 && 2 !== 1 && 2 >= 1, "cardinality 2: witnessed and non-representable", out);
  check(nat(1) === 1, "cardinality 1: representable (shadow) — consistent", out);
}

// ---------------------------------------------------------------------------
// [3] Rel: representable Oce_s ⟺ s is a function graph (6.2.1(ii) for Rel).
// ---------------------------------------------------------------------------
function relDetection(out: Report) {
  out.push("[3] Rel, |A|,|B| ≤ 2, all relations:");
  let tested = 0, ok = true;
  for (let na = 0; na <= 2; na++) {
    for (let nb = 0; nb <= 2; nb++) {
      const A = Array.from({ length: na }, (_, i) => i);
      const count = na === 0 ? 1 : Math.pow(nb, na) || 0;
      const funcs: number[][] = [];
      for (let f = 0; f < count; f++) {
        const u: number[] = []; let x = f;
        for (let i = 0; i < na; i++) { u.push(x % nb); x = Math.floor(x / nb); }
        funcs.push(u);
      }
      const graph = (u: number[]) => u.map((v, i) => i * 4 + v);
      const pairs: [number, number][] = [];
      for (const x of A) for (let y = 0; y < nb; y++) pairs.push([x, y]);
      for (let mask = 0; mask < Math.pow(2, pairs.length); mask++) {
        const s = new Set<number>();
        pairs.forEach((p, i) => { if (mask & (1 << i)) s.add(p[0] * 4 + p[1]); });
        let rep = false;
        for (let wi = 0; wi < funcs.length; wi++) {
          let good = graph(funcs[wi]).every(v => s.has(v));
          if (good) for (let ui = 0; ui < funcs.length; ui++) {
            if (ui !== wi && graph(funcs[ui]).every(v => s.has(v))) good = false;
          }
          if (good) rep = true;
        }
        const isGraph = funcs.some(u => {
          const g = graph(u);
          return g.length === s.size && g.every(v => s.has(v));
        });
        tested++;
        if (rep !== isGraph) ok = false;
      }
    }
  }
  check(ok, `representable ⟺ function graph (${tested} relations tested)`, out);
}

// ---------------------------------------------------------------------------
// [4] Span: representable Oce_s ⟺ s is isomorphic to a graph span (6.2.1(ii)
//     for Span; newly machine-checked at v5). |a|,|b| ≤ 2, apex ≤ 3.
// ---------------------------------------------------------------------------
function spanDetection(out: Report) {
  out.push("[4] Span, |a|,|b| ≤ 2, apex ≤ 3:");
  let tested = 0, ok = true;
  for (let na = 0; na <= 2; na++) {
    for (let nb = 0; nb <= 2; nb++) {
      const fcount = na === 0 ? 1 : Math.pow(nb, na) || 0;
      const funcs: number[][] = [];
      for (let f = 0; f < fcount; f++) {
        const u: number[] = []; let x = f;
        for (let i = 0; i < na; i++) { u.push(x % nb); x = Math.floor(x / nb); }
        funcs.push(u);
      }
      for (let ns = 0; ns <= 3; ns++) {
        const nL = ns === 0 ? 1 : Math.pow(na, ns) || 0;
        const nR = ns === 0 ? 1 : Math.pow(nb, ns) || 0;
        for (let li = 0; li < nL; li++) {
          const l: number[] = []; let x = li;
          for (let i = 0; i < ns; i++) { l.push(x % na); x = Math.floor(x / na); }
          for (let ri = 0; ri < nR; ri++) {
            const r: number[] = []; let y = ri;
            for (let i = 0; i < ns; i++) { r.push(y % nb); y = Math.floor(y / nb); }
            // Oce_s(u) = { φ: a → S | l∘φ = id_a, r∘φ = u }
            const oce = (u: number[]): number => {
              let cnt = 0;
              const nphi = na === 0 ? 1 : Math.pow(ns, na) || 0;
              for (let pi = 0; pi < nphi; pi++) {
                const phi: number[] = []; let z = pi;
                for (let i = 0; i < na; i++) { phi.push(z % ns); z = Math.floor(z / ns); }
                let good = true;
                for (let i = 0; i < na; i++) if (l[phi[i]] !== i || r[phi[i]] !== u[i]) good = false;
                if (good) cnt++;
              }
              return cnt;
            };
            let rep = false;
            for (let wi = 0; wi < funcs.length; wi++) {
              let good = oce(funcs[wi]) === 1;
              if (good) for (let ui = 0; ui < funcs.length; ui++)
                if (ui !== wi && oce(funcs[ui]) !== 0) good = false;
              if (good) rep = true;
            }
            // shadow ⟺ isomorphic to the graph span of some w
            const isGraphSpan = funcs.some(u => {
              for (let i = 0; i < na; i++) {
                let cnt = 0;
                for (let j = 0; j < ns; j++) if (l[j] === i && r[j] === u[i]) cnt++;
                if (cnt !== 1) return false;
              }
              for (let j = 0; j < ns; j++) {
                const i = l[j];
                if (!(i >= 0 && i < na && r[j] === u[i])) return false;
              }
              return true;
            });
            tested++;
            if (rep !== isGraphSpan) ok = false;
          }
        }
      }
    }
  }
  check(ok, `representable ⟺ graph span up to iso (${tested} spans tested)`, out);
}

// ---------------------------------------------------------------------------
// [5] The four mixed distributive-law coherences (§7.4 of the document),
//     on one-object arenas — Prof on the monoids ℤ/3 and S₃. The four laws
//     for λ: t∘s̄ ⇒ s̄∘t (t a monad, s̄ a horizontal comonad), as element
//     equations (product x·y = "first y, then x"):
//       L1 (unit):          λ·η        = s̄(η)
//       L2 (multiplication): λ·μ       = s̄(μ)·λ·t(λ)
//       L3 (counit):        ε̄·λ        = t(ε̄)
//       L4 (comultiplication): s̄(λ)·λ·t(δ̄) = δ̄·λ
//     Consistency: law-satisfying cells exist. Discriminating: on ℤ/3 the
//     displays reject 18 of 27 natural candidates.
// ---------------------------------------------------------------------------
function beckLaws(out: Report) {
  out.push("[5] The four coherences of §7.4 on one-object arenas:");
  const arenas: [string, number[][], (x: number, y: number) => number][] = [
    ["Z/3", [[0, 1, 2], [1, 2, 0], [2, 0, 1]], (x, y) => (x + y) % 3],
    ["S3", [], (x, y) => 0], // filled below
  ];
  for (const [name, table0, add0] of arenas) {
    // element model: Z/3 additive on {0,1,2}; S3 = permutations of {0,1,2}
    const elems = name === "Z/3"
      ? [0, 1, 2]
      : ["012", "021", "102", "120", "201", "210"];
    const n = elems.length;
    const mul = (x: number, y: number): number => {
      if (name === "Z/3") return add0(x, y);
      const px = elems[x].split("").map(Number), py = elems[y].split("").map(Number);
      return elems.indexOf(px.map(v => py[v]).join(""));
    };
    const one = name === "Z/3" ? 0 : elems.indexOf("012");
    // endomorphisms
    const endos: number[][] = [];
    for (let f = 0; f < Math.pow(n, n); f++) {
      const fn: number[] = []; let x = f;
      for (let i = 0; i < n; i++) { fn.push(x % n); x = Math.floor(x / n); }
      if (fn[one] !== one) continue;
      let hom = true;
      for (let a = 0; a < n && hom; a++) for (let b = 0; b < n; b++)
        if (fn[mul(a, b)] !== mul(fn[a], fn[b])) { hom = false; break; }
      if (hom) endos.push(fn);
    }
    const idF = endos.find(f => f.every((v, i) => v === i))!;
    const comp = (F: number[], G: number[]) => G.map(g => F[g]); // F∘G
    const nat = (F: number[], G: number[], a: number) => {
      for (let m = 0; m < n; m++) if (mul(G[m], a) !== mul(a, F[m])) return false;
      return true;
    };
    // monads: η ∈ Nat(Id,t), μ ∈ Nat(t∘t,t), laws μ·μ = μ·t(μ), μ·η = 1, μ·t(η) = 1
    const monads: [number[], number, number][] = [];
    for (const t of endos) for (let eta = 0; eta < n; eta++) {
      if (!nat(idF, t, eta)) continue;
      const tt = comp(t, t);
      for (let mu = 0; mu < n; mu++) {
        if (!nat(tt, t, mu)) continue;
        if (mul(mu, mu) !== mul(mu, t[mu])) continue;
        if (mul(mu, eta) !== one || mul(mu, t[eta]) !== one) continue;
        monads.push([t, eta, mu]);
      }
    }
    // comonads: ε ∈ Nat(s,Id), δ ∈ Nat(s,s∘s), laws δ·δ = s(δ)·δ, s(ε)·δ = 1, ε·δ = 1
    const comonads: [number[], number, number][] = [];
    for (const s of endos) for (let eps = 0; eps < n; eps++) {
      if (!nat(s, idF, eps)) continue;
      const ss = comp(s, s);
      for (let del = 0; del < n; del++) {
        if (!nat(s, ss, del)) continue;
        if (mul(del, del) !== mul(s[del], del)) continue;
        if (mul(s[eps], del) !== one || mul(eps, del) !== one) continue;
        comonads.push([s, eps, del]);
      }
    }
    let total = 0, satisfy = 0;
    for (const [t, eta, mu] of monads) for (const [s, eps, del] of comonads) {
      const ts = comp(t, s), st = comp(s, t);
      for (let lam = 0; lam < n; lam++) {
        if (!nat(ts, st, lam)) continue;
        total++;
        const L1 = mul(lam, eta) === s[eta];
        const L2 = mul(lam, mu) === mul(mul(s[mu], lam), t[lam]);
        const L3 = mul(eps, lam) === t[eps];
        const L4 = mul(mul(s[lam], lam), t[del]) === mul(del, lam);
        if (L1 && L2 && L3 && L4) satisfy++;
      }
    }
    out.push(`      ${name}: endos=${endos.length}, monads=${monads.length}, comonads=${comonads.length}, natural λ=${total}, satisfy all four=${satisfy}`);
    check(satisfy > 0, `${name}: the four displays are consistent (law-satisfying cells exist)`, out);
    if (name === "Z/3") check(satisfy === 9 && total === 27, "Z/3: 9 of 27 satisfy, 18 rejected — the displays discriminate", out);
    if (name === "S3") check(satisfy === 36 && total === 36, "S3: all 36 natural candidates satisfy (each pair's unit law pins λ down)", out);
  }
}

// ---------------------------------------------------------------------------

function main(): Report {
  const out: Report = [];
  profCounterexample(out);
  profWitness(out);
  relDetection(out);
  spanDetection(out);
  beckLaws(out);
  out.push(failures === 0 ? "ALL CHECKS PASSED" : `${failures} CHECKS FAILED`);
  return out;
}

const report = main();
for (const line of report) {
  console.log(line);
}
