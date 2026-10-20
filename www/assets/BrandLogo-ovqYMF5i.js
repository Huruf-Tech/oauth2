import {
  B as e,
  C as t,
  E as n,
  I as r,
  O as i,
  St as a,
  U as o,
  W as s,
  b as c,
  f as l,
  k as u,
  o as d,
  t as f,
  w as p,
  wt as m,
} from "./useAppBranding-Ccx5799K.js";
var h = m(a()),
  g = s(),
  _ = `/auth/assets/huruf-logo-DZY2c4zY.png`,
  v = h.createContext(void 0);
function y() {
  let e = h.useContext(v);
  if (e === void 0) throw Error(i(13));
  return e;
}
var b = { imageLoadingStatus: () => null },
  x = h.forwardRef(function (e, t) {
    let { className: r, render: i, style: a, ...o } = e,
      [s, c] = h.useState(`idle`),
      l = { imageLoadingStatus: s },
      u = h.useMemo(
        () => ({ imageLoadingStatus: s, setImageLoadingStatus: c }),
        [s, c],
      ),
      d = n(`span`, e, {
        state: l,
        ref: t,
        props: o,
        stateAttributesMapping: b,
      });
    return (0, g.jsx)(v.Provider, { value: u, children: d });
  });
function S(e, { referrerPolicy: t, crossOrigin: n }) {
  let [i, a] = h.useState(`idle`);
  return (
    o(() => {
      if (!e) return (a(`error`), r);
      let i = !0,
        o = new window.Image(),
        s = (e) => () => {
          i && a(e);
        };
      return (
        a(`loading`),
        (o.onload = s(`loaded`)),
        (o.onerror = s(`error`)),
        t && (o.referrerPolicy = t),
        (o.crossOrigin = n ?? null),
        (o.src = e),
        o.complete && a(o.naturalWidth > 0 ? `loaded` : `error`),
        () => {
          i = !1;
        }
      );
    }, [e, n, t]),
    i
  );
}
var C = { ...b, ...t },
  w = h.forwardRef(function (e, t) {
    let {
        className: r,
        render: i,
        onLoadingStatusChange: a,
        referrerPolicy: s,
        crossOrigin: l,
        style: d,
        ...f
      } = e,
      m = y(),
      g = S(e.src, { referrerPolicy: s, crossOrigin: l }),
      _ = g === `loaded`,
      { mounted: v, transitionStatus: b, setMounted: x } = p(_),
      w = h.useRef(null),
      T = u((e) => {
        (a?.(e), m.setImageLoadingStatus(e));
      });
    (o(() => {
      g !== `idle` && T(g);
    }, [g, T]),
      c({
        open: _,
        ref: w,
        onComplete() {
          _ || x(!1);
        },
      }));
    let E = n(`img`, e, {
      state: { imageLoadingStatus: g, transitionStatus: b },
      ref: [t, w],
      props: f,
      stateAttributesMapping: C,
      enabled: v,
    });
    return v ? E : null;
  }),
  T = h.forwardRef(function (t, r) {
    let { className: i, render: a, delay: o, style: s, ...c } = t,
      { imageLoadingStatus: l } = y(),
      [u, d] = h.useState(o === void 0),
      f = e();
    return (
      h.useEffect(
        () => (o !== void 0 && f.start(o, () => d(!0)), f.clear),
        [f, o],
      ),
      n(`span`, t, {
        state: { imageLoadingStatus: l },
        ref: r,
        props: c,
        stateAttributesMapping: b,
        enabled: l !== `loaded` && u,
      })
    );
  });
function E({ className: e, ...t }) {
  return (0, g.jsx)(x, {
    className: d(
      `inline-flex size-8 shrink-0 select-none items-center justify-center overflow-hidden rounded-full bg-background align-middle font-medium text-xs`,
      e,
    ),
    "data-slot": `avatar`,
    ...t,
  });
}
function D({ className: e, ...t }) {
  return (0, g.jsx)(w, {
    className: d(`size-full object-cover`, e),
    "data-slot": `avatar-image`,
    ...t,
  });
}
function O({ className: e, ...t }) {
  return (0, g.jsx)(T, {
    className: d(
      `flex size-full items-center justify-center rounded-full bg-muted`,
      e,
    ),
    "data-slot": `avatar-fallback`,
    ...t,
  });
}
function k({ className: e, ...t }) {
  return (0, g.jsx)(`div`, {
    className: d(
      `animate-skeleton rounded-sm [--skeleton-highlight:--alpha(var(--color-white)/64%)] [background:linear-gradient(120deg,transparent_40%,var(--skeleton-highlight),transparent_60%)_var(--color-muted)_0_0/200%_100%_fixed] dark:[--skeleton-highlight:--alpha(var(--color-white)/4%)]`,
      e,
    ),
    "data-slot": `skeleton`,
    ...t,
  });
}
function A({ className: e, showName: t = !1 }) {
  let { app: n, isLoading: r, appName: i } = f(),
    a =
      n?.icon ??
      n?.logo ??
      (n ? void 0 : `/auth/assets/huruf-logo-DZY2c4zY.png`);
  return r
    ? (0, g.jsxs)(`div`, {
        className: `flex items-center gap-2.5`,
        children: [
          (0, g.jsx)(k, { className: d(`size-9 rounded-xl`, e) }),
          t && (0, g.jsx)(k, { className: `h-4 w-24` }),
        ],
      })
    : (0, g.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-2.5`,
        children: [
          (0, g.jsxs)(E, {
            className: d(
              `size-9 rounded-xl bg-transparent ring-1 ring-foreground/8`,
              e,
            ),
            children: [
              a && (0, g.jsx)(D, { src: a, alt: i }),
              (0, g.jsx)(O, {
                className: `rounded-[inherit] bg-primary text-sm font-semibold text-primary-foreground`,
                children: l(n?.name),
              }),
            ],
          }),
          t &&
            (0, g.jsx)(`span`, {
              className: `truncate text-[15px] font-semibold tracking-tight`,
              children: i,
            }),
        ],
      });
}
export { D as a, O as i, k as n, _ as o, E as r, A as t };
