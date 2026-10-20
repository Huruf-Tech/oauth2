import {
  B as e,
  C as t,
  E as n,
  F as r,
  H as i,
  N as a,
  O as o,
  P as s,
  R as c,
  St as l,
  U as u,
  V as d,
  W as f,
  at as p,
  b as m,
  j as h,
  k as g,
  n as _,
  o as v,
  r as y,
  rt as b,
  t as x,
  wt as S,
  x as C,
  xt as w,
  z as T,
} from "./useAppBranding-Ccx5799K.js";
import {
  $ as E,
  $n as D,
  $t as O,
  An as k,
  Ar as A,
  At as j,
  Bn as M,
  Bt as N,
  Cn as P,
  Cr as F,
  D as ee,
  Dn as I,
  Dr as L,
  Dt as R,
  En as z,
  Er as B,
  Et as V,
  Fn as te,
  Fr as ne,
  Ft as H,
  Gn as re,
  Gt as U,
  Ht as W,
  In as ie,
  Ir as ae,
  It as oe,
  Jt as se,
  Kn as G,
  Kt as ce,
  Lr as le,
  Lt as ue,
  M as de,
  Mr as K,
  Mt as fe,
  Nr as pe,
  Nt as me,
  On as q,
  Or as J,
  Ot as he,
  Pr as ge,
  Pt as _e,
  Qn as ve,
  Qt as ye,
  Rr as be,
  Rt as xe,
  Sn as Se,
  Sr as Ce,
  T as we,
  Tr as Te,
  Tt as Ee,
  Ut as De,
  Vn as Oe,
  Vt as ke,
  Wn as Ae,
  Wt as je,
  Xn as Me,
  Xt as Ne,
  Yn as Pe,
  Yt as Fe,
  Z as Ie,
  Zn as Le,
  Zt as Re,
  _n as ze,
  _r as Be,
  _t as Ve,
  an as He,
  ar as Ue,
  at as We,
  bn as Ge,
  br as Ke,
  bt as qe,
  c as Je,
  cn as Ye,
  cr as Xe,
  dn as Ze,
  dr as Qe,
  dt as $e,
  en as et,
  er as tt,
  fn as nt,
  fr as rt,
  ft as it,
  gn as at,
  gr as ot,
  gt as st,
  hn as ct,
  ht as lt,
  in as ut,
  ir as dt,
  it as ft,
  j as pt,
  jr as Y,
  jt as mt,
  kr as ht,
  kt as gt,
  ln as _t,
  lr as vt,
  mn as yt,
  mt as bt,
  n as xt,
  nn as St,
  nr as X,
  on as Ct,
  or as wt,
  pn as Tt,
  pr as Et,
  pt as Dt,
  qn as Ot,
  qt as kt,
  r as At,
  rn as jt,
  rr as Mt,
  s as Nt,
  sn as Pt,
  sr as Ft,
  t as It,
  tn as Lt,
  tr as Rt,
  tt as zt,
  un as Bt,
  ur as Vt,
  vn as Ht,
  vr as Ut,
  vt as Wt,
  wr as Gt,
  wt as Kt,
  xn as qt,
  xr as Jt,
  xt as Yt,
  yn as Xt,
  yt as Zt,
  z as Qt,
  zr as $t,
  zt as en,
} from "./index-BcavIC1s.js";
import { n as tn, o as nn, t as rn } from "./BrandLogo-ovqYMF5i.js";
var Z = S(l()),
  an = S(w(), 1);
function on(e, t) {
  return t != null && !Xe(t) ? 0 : typeof e == `function` ? e() : e;
}
function sn(e, t, n) {
  let r = on(e, n);
  return typeof r == `number` ? r : r?.[t];
}
function cn(e) {
  return typeof e == `function` ? e() : e;
}
function ln(e, t) {
  return t || e === `click` || e === `mousedown`;
}
function un(e) {
  return e?.includes(`mouse`) && e !== `mousedown`;
}
function dn(t, n = {}) {
  let {
      enabled: i = !0,
      event: a = `click`,
      toggle: o = !0,
      ignoreMouse: s = !1,
      stickIfOpen: l = !0,
      touchOpenDelay: u = 0,
      reason: d = Ot,
    } = n,
    f = `rootStore` in t ? t.rootStore : t,
    p = f.context.dataRef,
    m = Z.useRef(void 0),
    h = c(),
    g = e(),
    _ = Z.useMemo(() => {
      function e(e, t, n, r) {
        let i = q(d, t, n);
        e && r === `touch` && u > 0
          ? g.start(u, () => {
              f.setOpen(!0, i);
            })
          : f.setOpen(e, i);
      }
      function t(e, t, n) {
        let r = p.current.openEvent,
          i = f.select(`domReferenceElement`) !== t;
        return (e && i) || !e || !o ? !0 : r && l ? !n(r.type) : !1;
      }
      return {
        onPointerDown(e) {
          m.current = e.pointerType;
        },
        onMouseDown(n) {
          let r = m.current,
            i = n.nativeEvent,
            o = f.select(`open`);
          if (n.button !== 0 || a === `click` || (Xe(r, !0) && s)) return;
          let c = t(
              o,
              n.currentTarget,
              (e) => e === `click` || e === `mousedown`,
            ),
            l = Mt(i);
          if (D(l)) {
            e(c, i, l, r);
            return;
          }
          let u = n.currentTarget;
          h.request(() => {
            e(c, i, u, r);
          });
        },
        onClick(n) {
          if (a === `mousedown-only`) return;
          let r = m.current;
          if (a === `mousedown` && r) {
            m.current = void 0;
            return;
          }
          (Xe(r, !0) && s) ||
            e(
              t(
                f.select(`open`),
                n.currentTarget,
                (e) =>
                  e === `click` ||
                  e === `mousedown` ||
                  e === `keydown` ||
                  e === `keyup`,
              ),
              n.nativeEvent,
              n.currentTarget,
              r,
            );
        },
        onKeyDown() {
          m.current = void 0;
        },
      };
    }, [p, a, s, d, f, l, o, h, g, u]);
  return Z.useMemo(() => (i ? { reference: _ } : r), [i, _]);
}
function fn(e, t, n) {
  let { reference: r, floating: i } = e,
    a = ze(t),
    o = Ye(t),
    s = Bt(o),
    c = at(t),
    l = a === `y`,
    u = r.x + r.width / 2 - i.width / 2,
    d = r.y + r.height / 2 - i.height / 2,
    f = r[s] / 2 - i[s] / 2,
    p;
  switch (c) {
    case `top`:
      p = { x: u, y: r.y - i.height };
      break;
    case `bottom`:
      p = { x: u, y: r.y + r.height };
      break;
    case `right`:
      p = { x: r.x + r.width, y: d };
      break;
    case `left`:
      p = { x: r.x - i.width, y: d };
      break;
    default:
      p = { x: r.x, y: r.y };
  }
  switch (Pt(t)) {
    case `start`:
      p[o] -= f * (n && l ? -1 : 1);
      break;
    case `end`:
      p[o] += f * (n && l ? -1 : 1);
      break;
  }
  return p;
}
async function pn(e, t) {
  t === void 0 && (t = {});
  let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e,
    {
      boundary: c = `clippingAncestors`,
      rootBoundary: l = `viewport`,
      elementContext: u = `floating`,
      altBoundary: d = !1,
      padding: f = 0,
    } = He(t, e),
    p = ct(f),
    m = o[d ? (u === `floating` ? `reference` : `floating`) : u],
    h = Ge(
      await i.getClippingRect({
        element:
          ((await (i.isElement == null ? void 0 : i.isElement(m))) ?? !0)
            ? m
            : m.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(o.floating))),
        boundary: c,
        rootBoundary: l,
        strategy: s,
      }),
    ),
    g =
      u === `floating`
        ? { x: n, y: r, width: a.floating.width, height: a.floating.height }
        : a.reference,
    _ = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(o.floating)),
    v = ((await (i.isElement == null ? void 0 : i.isElement(_))) &&
      (await (i.getScale == null ? void 0 : i.getScale(_)))) || { x: 1, y: 1 },
    y = Ge(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: o,
            rect: g,
            offsetParent: _,
            strategy: s,
          })
        : g,
    );
  return {
    top: (h.top - y.top + p.top) / v.y,
    bottom: (y.bottom - h.bottom + p.bottom) / v.y,
    left: (h.left - y.left + p.left) / v.x,
    right: (y.right - h.right + p.right) / v.x,
  };
}
var mn = 50,
  hn = async (e, t, n) => {
    let {
        placement: r = `bottom`,
        strategy: i = `absolute`,
        middleware: a = [],
        platform: o,
      } = n,
      s = o.detectOverflow ? o : { ...o, detectOverflow: pn },
      c = await (o.isRTL == null ? void 0 : o.isRTL(t)),
      l = await o.getElementRects({ reference: e, floating: t, strategy: i }),
      { x: u, y: d } = fn(l, r, c),
      f = r,
      p = 0,
      m = {};
    for (let n = 0; n < a.length; n++) {
      let h = a[n];
      if (!h) continue;
      let { name: g, fn: _ } = h,
        {
          x: v,
          y,
          data: b,
          reset: x,
        } = await _({
          x: u,
          y: d,
          initialPlacement: r,
          placement: f,
          strategy: i,
          middlewareData: m,
          rects: l,
          platform: s,
          elements: { reference: e, floating: t },
        });
      ((u = v ?? u),
        (d = y ?? d),
        (m[g] = { ...m[g], ...b }),
        x &&
          p < mn &&
          (p++,
          typeof x == `object` &&
            (x.placement && (f = x.placement),
            x.rects &&
              (l =
                x.rects === !0
                  ? await o.getElementRects({
                      reference: e,
                      floating: t,
                      strategy: i,
                    })
                  : x.rects),
            ({ x: u, y: d } = fn(l, f, c))),
          (n = -1)));
    }
    return { x: u, y: d, placement: f, strategy: i, middlewareData: m };
  },
  gn = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: `flip`,
        options: e,
        async fn(t) {
          var n;
          let {
              placement: r,
              middlewareData: i,
              rects: a,
              initialPlacement: o,
              platform: s,
              elements: c,
            } = t,
            {
              mainAxis: l = !0,
              crossAxis: u = !0,
              fallbackPlacements: d,
              fallbackStrategy: f = `bestFit`,
              fallbackAxisSideDirection: p = `none`,
              flipAlignment: m = !0,
              ...h
            } = He(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          let g = at(r),
            _ = ze(o),
            v = at(o) === o,
            y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)),
            b = d || (v || !m ? [yt(o)] : Ze(o)),
            x = p !== `none`;
          !d && x && b.push(...Tt(o, m, p, y));
          let S = [o, ...b],
            C = await s.detectOverflow(t, h),
            w = [],
            T = i.flip?.overflows || [];
          if ((l && w.push(C[g]), u)) {
            let e = _t(r, a, y);
            w.push(C[e[0]], C[e[1]]);
          }
          if (
            ((T = [...T, { placement: r, overflows: w }]),
            !w.every((e) => e <= 0))
          ) {
            let e = (i.flip?.index || 0) + 1,
              t = S[e];
            if (
              t &&
              (!(u === `alignment` && _ !== ze(t)) ||
                T.every((e) =>
                  ze(e.placement) === _ ? e.overflows[0] > 0 : !0,
                ))
            )
              return {
                data: { index: e, overflows: T },
                reset: { placement: t },
              };
            let n = T.filter((e) => e.overflows[0] <= 0).sort(
              (e, t) => e.overflows[1] - t.overflows[1],
            )[0]?.placement;
            if (!n)
              switch (f) {
                case `bestFit`: {
                  let e = T.filter((e) => {
                    if (x) {
                      let t = ze(e.placement);
                      return t === _ || t === `y`;
                    }
                    return !0;
                  })
                    .map((e) => [
                      e.placement,
                      e.overflows
                        .filter((e) => e > 0)
                        .reduce((e, t) => e + t, 0),
                    ])
                    .sort((e, t) => e[1] - t[1])[0]?.[0];
                  e && (n = e);
                  break;
                }
                case `initialPlacement`:
                  n = o;
                  break;
              }
            if (r !== n) return { reset: { placement: n } };
          }
          return {};
        },
      }
    );
  };
function _n(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function vn(e) {
  return Se.some((t) => e[t] >= 0);
}
var yn = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: `hide`,
        options: e,
        async fn(t) {
          let { rects: n, platform: r } = t,
            { strategy: i = `referenceHidden`, ...a } = He(e, t);
          switch (i) {
            case `referenceHidden`: {
              let e = _n(
                await r.detectOverflow(t, {
                  ...a,
                  elementContext: `reference`,
                }),
                n.reference,
              );
              return {
                data: { referenceHiddenOffsets: e, referenceHidden: vn(e) },
              };
            }
            case `escaped`: {
              let e = _n(
                await r.detectOverflow(t, { ...a, altBoundary: !0 }),
                n.floating,
              );
              return { data: { escapedOffsets: e, escaped: vn(e) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  bn = new Set([`left`, `top`]);
async function xn(e, t) {
  let { placement: n, platform: r, elements: i } = e,
    a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)),
    o = at(n),
    s = Pt(n),
    c = ze(n) === `y`,
    l = bn.has(o) ? -1 : 1,
    u = a && c ? -1 : 1,
    d = He(t, e),
    {
      mainAxis: f,
      crossAxis: p,
      alignmentAxis: m,
    } = typeof d == `number`
      ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
      : {
          mainAxis: d.mainAxis || 0,
          crossAxis: d.crossAxis || 0,
          alignmentAxis: d.alignmentAxis,
        };
  return (
    s && typeof m == `number` && (p = s === `end` ? m * -1 : m),
    c ? { x: p * u, y: f * l } : { x: f * l, y: p * u }
  );
}
var Sn = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: `offset`,
        options: e,
        async fn(t) {
          var n;
          let { x: r, y: i, placement: a, middlewareData: o } = t,
            s = await xn(t, e);
          return a === o.offset?.placement &&
            (n = o.arrow) != null &&
            n.alignmentOffset
            ? {}
            : { x: r + s.x, y: i + s.y, data: { ...s, placement: a } };
        },
      }
    );
  },
  Cn = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: `shift`,
        options: e,
        async fn(t) {
          let { x: n, y: r, placement: i, platform: a } = t,
            {
              mainAxis: o = !0,
              crossAxis: s = !1,
              limiter: c = {
                fn: (e) => {
                  let { x: t, y: n } = e;
                  return { x: t, y: n };
                },
              },
              ...l
            } = He(e, t),
            u = { x: n, y: r },
            d = await a.detectOverflow(t, l),
            f = ze(at(i)),
            p = nt(f),
            m = u[p],
            h = u[f];
          if (o) {
            let e = p === `y` ? `top` : `left`,
              t = p === `y` ? `bottom` : `right`,
              n = m + d[e],
              r = m - d[t];
            m = jt(n, m, r);
          }
          if (s) {
            let e = f === `y` ? `top` : `left`,
              t = f === `y` ? `bottom` : `right`,
              n = h + d[e],
              r = h - d[t];
            h = jt(n, h, r);
          }
          let g = c.fn({ ...t, [p]: m, [f]: h });
          return {
            ...g,
            data: { x: g.x - n, y: g.y - r, enabled: { [p]: o, [f]: s } },
          };
        },
      }
    );
  },
  wn = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t,
            { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = He(e, t),
            u = { x: n, y: r },
            d = ze(i),
            f = nt(d),
            p = u[f],
            m = u[d],
            h = He(s, t),
            g =
              typeof h == `number`
                ? { mainAxis: h, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...h };
          if (c) {
            let e = f === `y` ? `height` : `width`,
              t = a.reference[f] - a.floating[e] + g.mainAxis,
              n = a.reference[f] + a.reference[e] - g.mainAxis;
            p < t ? (p = t) : p > n && (p = n);
          }
          if (l) {
            let e = f === `y` ? `width` : `height`,
              t = bn.has(at(i)),
              n =
                a.reference[d] -
                a.floating[e] +
                ((t && o.offset?.[d]) || 0) +
                (t ? 0 : g.crossAxis),
              r =
                a.reference[d] +
                a.reference[e] +
                (t ? 0 : o.offset?.[d] || 0) -
                (t ? g.crossAxis : 0);
            m < n ? (m = n) : m > r && (m = r);
          }
          return { [f]: p, [d]: m };
        },
      }
    );
  },
  Tn = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: `size`,
        options: e,
        async fn(t) {
          var n, r;
          let { placement: i, rects: a, platform: o, elements: s } = t,
            { apply: c = () => {}, ...l } = He(e, t),
            u = await o.detectOverflow(t, l),
            d = at(i),
            f = Pt(i),
            p = ze(i) === `y`,
            { width: m, height: h } = a.floating,
            g,
            _;
          d === `top` || d === `bottom`
            ? ((g = d),
              (_ =
                f ===
                ((await (o.isRTL == null ? void 0 : o.isRTL(s.floating)))
                  ? `start`
                  : `end`)
                  ? `left`
                  : `right`))
            : ((_ = d), (g = f === `end` ? `top` : `bottom`));
          let v = h - u.top - u.bottom,
            y = m - u.left - u.right,
            b = Xt(h - u[g], v),
            x = Xt(m - u[_], y),
            S = !t.middlewareData.shift,
            C = b,
            w = x;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (w = y),
            (r = t.middlewareData.shift) != null && r.enabled.y && (C = v),
            S && !f)
          ) {
            let e = Ht(u.left, 0),
              t = Ht(u.right, 0),
              n = Ht(u.top, 0),
              r = Ht(u.bottom, 0);
            p
              ? (w = m - 2 * (e !== 0 || t !== 0 ? e + t : Ht(u.left, u.right)))
              : (C =
                  h - 2 * (n !== 0 || r !== 0 ? n + r : Ht(u.top, u.bottom)));
          }
          await c({ ...t, availableWidth: w, availableHeight: C });
          let T = await o.getDimensions(s.floating);
          return m !== T.width || h !== T.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function En(e) {
  let t = Jt(e),
    n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0,
    i = K(e),
    a = i ? e.offsetWidth : n,
    o = i ? e.offsetHeight : r,
    s = qt(n) !== a || qt(r) !== o;
  return (s && ((n = a), (r = o)), { width: n, height: r, $: s });
}
function Dn(e) {
  return Y(e) ? e : e.contextElement;
}
function On(e) {
  let t = Dn(e);
  if (!K(t)) return ut(1);
  let n = t.getBoundingClientRect(),
    { width: r, height: i, $: a } = En(t),
    o = (a ? qt(n.width) : n.width) / r,
    s = (a ? qt(n.height) : n.height) / i;
  return (
    (!o || !Number.isFinite(o)) && (o = 1),
    (!s || !Number.isFinite(s)) && (s = 1),
    { x: o, y: s }
  );
}
var kn = ut(0);
function An(e) {
  let t = ht(e);
  return !le() || !t.visualViewport
    ? kn
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function jn(e, t, n) {
  return (t === void 0 && (t = !1), !n || (t && n !== ht(e)) ? !1 : t);
}
function Mn(e, t, n, r) {
  (t === void 0 && (t = !1), n === void 0 && (n = !1));
  let i = e.getBoundingClientRect(),
    a = Dn(e),
    o = ut(1);
  t && (r ? Y(r) && (o = On(r)) : (o = On(e)));
  let s = jn(a, n, r) ? An(a) : ut(0),
    c = (i.left + s.x) / o.x,
    l = (i.top + s.y) / o.y,
    u = i.width / o.x,
    d = i.height / o.y;
  if (a) {
    let e = ht(a),
      t = r && Y(r) ? ht(r) : r,
      n = e,
      i = Gt(n);
    for (; i && r && t !== n; ) {
      let e = On(i),
        t = i.getBoundingClientRect(),
        r = Jt(i),
        a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x,
        o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
      ((c *= e.x),
        (l *= e.y),
        (u *= e.x),
        (d *= e.y),
        (c += a),
        (l += o),
        (n = ht(i)),
        (i = Gt(n)));
    }
  }
  return Ge({ width: u, height: d, x: c, y: l });
}
function Nn(e, t) {
  let n = B(e).scrollLeft;
  return t ? t.left + n : Mn(F(e)).left + n;
}
function Pn(e, t) {
  let n = e.getBoundingClientRect();
  return { x: n.left + t.scrollLeft - Nn(e, n), y: n.top + t.scrollTop };
}
function Fn(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: i } = e,
    a = i === `fixed`,
    o = F(r),
    s = t ? ae(t.floating) : !1;
  if (r === o || (s && a)) return n;
  let c = { scrollLeft: 0, scrollTop: 0 },
    l = ut(1),
    u = ut(0),
    d = K(r);
  if ((d || (!d && !a)) && ((Te(r) !== `body` || ge(o)) && (c = B(r)), d)) {
    let e = Mn(r);
    ((l = On(r)), (u.x = e.x + r.clientLeft), (u.y = e.y + r.clientTop));
  }
  let f = o && !d && !a ? Pn(o, c) : ut(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
    y: n.y * l.y - c.scrollTop * l.y + u.y + f.y,
  };
}
function In(e) {
  return Array.from(e.getClientRects());
}
function Ln(e) {
  let t = F(e),
    n = B(e),
    r = e.ownerDocument.body,
    i = Ht(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    a = Ht(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight),
    o = -n.scrollLeft + Nn(e),
    s = -n.scrollTop;
  return (
    Jt(r).direction === `rtl` && (o += Ht(t.clientWidth, r.clientWidth) - i),
    { width: i, height: a, x: o, y: s }
  );
}
var Rn = 25;
function zn(e, t) {
  let n = ht(e),
    r = F(e),
    i = n.visualViewport,
    a = r.clientWidth,
    o = r.clientHeight,
    s = 0,
    c = 0;
  if (i) {
    ((a = i.width), (o = i.height));
    let e = le();
    (!e || (e && t === `fixed`)) && ((s = i.offsetLeft), (c = i.offsetTop));
  }
  let l = Nn(r);
  if (l <= 0) {
    let e = r.ownerDocument,
      t = e.body,
      n = getComputedStyle(t),
      i =
        (e.compatMode === `CSS1Compat` &&
          parseFloat(n.marginLeft) + parseFloat(n.marginRight)) ||
        0,
      o = Math.abs(r.clientWidth - t.clientWidth - i);
    o <= Rn && (a -= o);
  } else l <= Rn && (a += l);
  return { width: a, height: o, x: s, y: c };
}
function Bn(e, t) {
  let n = Mn(e, !0, t === `fixed`),
    r = n.top + e.clientTop,
    i = n.left + e.clientLeft,
    a = K(e) ? On(e) : ut(1);
  return {
    width: e.clientWidth * a.x,
    height: e.clientHeight * a.y,
    x: i * a.x,
    y: r * a.y,
  };
}
function Vn(e, t, n) {
  let r;
  if (t === `viewport`) r = zn(e, n);
  else if (t === `document`) r = Ln(F(e));
  else if (Y(t)) r = Bn(t, n);
  else {
    let n = An(e);
    r = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
  }
  return Ge(r);
}
function Hn(e, t) {
  let n = J(e);
  return n === t || !Y(n) || pe(n)
    ? !1
    : Jt(n).position === `fixed` || Hn(n, t);
}
function Un(e, t) {
  let n = t.get(e);
  if (n) return n;
  let r = L(e, [], !1).filter((e) => Y(e) && Te(e) !== `body`),
    i = null,
    a = Jt(e).position === `fixed`,
    o = a ? J(e) : e;
  for (; Y(o) && !pe(o); ) {
    let t = Jt(o),
      n = A(o);
    (!n && t.position === `fixed` && (i = null),
      (
        a
          ? !n && !i
          : (!n &&
              t.position === `static` &&
              i &&
              (i.position === `absolute` || i.position === `fixed`)) ||
            (ge(o) && !n && Hn(e, o))
      )
        ? (r = r.filter((e) => e !== o))
        : (i = t),
      (o = J(o)));
  }
  return (t.set(e, r), r);
}
function Wn(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: i } = e,
    a = [
      ...(n === `clippingAncestors`
        ? ae(t)
          ? []
          : Un(t, this._c)
        : [].concat(n)),
      r,
    ],
    o = Vn(t, a[0], i),
    s = o.top,
    c = o.right,
    l = o.bottom,
    u = o.left;
  for (let e = 1; e < a.length; e++) {
    let n = Vn(t, a[e], i);
    ((s = Ht(n.top, s)),
      (c = Xt(n.right, c)),
      (l = Xt(n.bottom, l)),
      (u = Ht(n.left, u)));
  }
  return { width: c - u, height: l - s, x: u, y: s };
}
function Gn(e) {
  let { width: t, height: n } = En(e);
  return { width: t, height: n };
}
function Kn(e, t, n) {
  let r = K(t),
    i = F(t),
    a = n === `fixed`,
    o = Mn(e, !0, a, t),
    s = { scrollLeft: 0, scrollTop: 0 },
    c = ut(0);
  function l() {
    c.x = Nn(i);
  }
  if (r || (!r && !a))
    if (((Te(t) !== `body` || ge(i)) && (s = B(t)), r)) {
      let e = Mn(t, !0, a, t);
      ((c.x = e.x + t.clientLeft), (c.y = e.y + t.clientTop));
    } else i && l();
  a && !r && i && l();
  let u = i && !r && !a ? Pn(i, s) : ut(0);
  return {
    x: o.left + s.scrollLeft - c.x - u.x,
    y: o.top + s.scrollTop - c.y - u.y,
    width: o.width,
    height: o.height,
  };
}
function qn(e) {
  return Jt(e).position === `static`;
}
function Jn(e, t) {
  if (!K(e) || Jt(e).position === `fixed`) return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return (F(e) === n && (n = n.ownerDocument.body), n);
}
function Yn(e, t) {
  let n = ht(e);
  if (ae(e)) return n;
  if (!K(e)) {
    let t = J(e);
    for (; t && !pe(t); ) {
      if (Y(t) && !qn(t)) return t;
      t = J(t);
    }
    return n;
  }
  let r = Jn(e, t);
  for (; r && ne(r) && qn(r); ) r = Jn(r, t);
  return r && pe(r) && qn(r) && !A(r) ? n : r || Ce(e) || n;
}
var Xn = async function (e) {
  let t = this.getOffsetParent || Yn,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: Kn(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function Zn(e) {
  return Jt(e).direction === `rtl`;
}
var Qn = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Fn,
  getDocumentElement: F,
  getClippingRect: Wn,
  getOffsetParent: Yn,
  getElementRects: Xn,
  getClientRects: In,
  getDimensions: Gn,
  getScale: On,
  isElement: Y,
  isRTL: Zn,
};
function $n(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function er(e, t) {
  let n = null,
    r,
    i = F(e);
  function a() {
    var e;
    (clearTimeout(r), (e = n) == null || e.disconnect(), (n = null));
  }
  function o(s, c) {
    (s === void 0 && (s = !1), c === void 0 && (c = 1), a());
    let l = e.getBoundingClientRect(),
      { left: u, top: d, width: f, height: p } = l;
    if ((s || t(), !f || !p)) return;
    let m = Ct(d),
      h = Ct(i.clientWidth - (u + f)),
      g = Ct(i.clientHeight - (d + p)),
      _ = Ct(u),
      v = {
        rootMargin: -m + `px ` + -h + `px ` + -g + `px ` + -_ + `px`,
        threshold: Ht(0, Xt(1, c)) || 1,
      },
      y = !0;
    function b(t) {
      let n = t[0].intersectionRatio;
      if (n !== c) {
        if (!y) return o();
        n
          ? o(!1, n)
          : (r = setTimeout(() => {
              o(!1, 1e-7);
            }, 1e3));
      }
      (n === 1 && !$n(l, e.getBoundingClientRect()) && o(), (y = !1));
    }
    try {
      n = new IntersectionObserver(b, { ...v, root: i.ownerDocument });
    } catch {
      n = new IntersectionObserver(b, v);
    }
    n.observe(e);
  }
  return (o(!0), a);
}
function tr(e, t, n, r) {
  r === void 0 && (r = {});
  let {
      ancestorScroll: i = !0,
      ancestorResize: a = !0,
      elementResize: o = typeof ResizeObserver == `function`,
      layoutShift: s = typeof IntersectionObserver == `function`,
      animationFrame: c = !1,
    } = r,
    l = Dn(e),
    u = i || a ? [...(l ? L(l) : []), ...(t ? L(t) : [])] : [];
  u.forEach((e) => {
    (i && e.addEventListener(`scroll`, n, { passive: !0 }),
      a && e.addEventListener(`resize`, n));
  });
  let d = l && s ? er(l, n) : null,
    f = -1,
    p = null;
  o &&
    ((p = new ResizeObserver((e) => {
      let [r] = e;
      (r &&
        r.target === l &&
        p &&
        t &&
        (p.unobserve(t),
        cancelAnimationFrame(f),
        (f = requestAnimationFrame(() => {
          var e;
          (e = p) == null || e.observe(t);
        }))),
        n());
    })),
    l && !c && p.observe(l),
    t && p.observe(t));
  let m,
    h = c ? Mn(e) : null;
  c && g();
  function g() {
    let t = Mn(e);
    (h && !$n(h, t) && n(), (h = t), (m = requestAnimationFrame(g)));
  }
  return (
    n(),
    () => {
      var e;
      (u.forEach((e) => {
        (i && e.removeEventListener(`scroll`, n),
          a && e.removeEventListener(`resize`, n));
      }),
        d?.(),
        (e = p) == null || e.disconnect(),
        (p = null),
        c && cancelAnimationFrame(m));
    }
  );
}
var nr = Sn,
  rr = Cn,
  ir = gn,
  ar = Tn,
  or = yn,
  sr = wn,
  cr = (e, t, n) => {
    let r = new Map(),
      i = { platform: Qn, ...n },
      a = { ...i.platform, _c: r };
    return hn(e, t, { ...i, platform: a });
  },
  lr = typeof document < `u` ? Z.useLayoutEffect : function () {};
function ur(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == `function` && e.toString() === t.toString()) return !0;
  let n, r, i;
  if (e && t && typeof e == `object`) {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!ur(e[r], t[r])) return !1;
      return !0;
    }
    if (((i = Object.keys(e)), (n = i.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
    for (r = n; r-- !== 0; ) {
      let n = i[r];
      if (!(n === `_owner` && e.$$typeof) && !ur(e[n], t[n])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function dr(e) {
  return typeof window > `u`
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function fr(e, t) {
  let n = dr(e);
  return Math.round(t * n) / n;
}
function pr(e) {
  let t = Z.useRef(e);
  return (
    lr(() => {
      t.current = e;
    }),
    t
  );
}
function mr(e) {
  e === void 0 && (e = {});
  let {
      placement: t = `bottom`,
      strategy: n = `absolute`,
      middleware: r = [],
      platform: i,
      elements: { reference: a, floating: o } = {},
      transform: s = !0,
      whileElementsMounted: c,
      open: l,
    } = e,
    [u, d] = Z.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [f, p] = Z.useState(r);
  ur(f, r) || p(r);
  let [m, h] = Z.useState(null),
    [g, _] = Z.useState(null),
    v = Z.useCallback((e) => {
      e !== S.current && ((S.current = e), h(e));
    }, []),
    y = Z.useCallback((e) => {
      e !== C.current && ((C.current = e), _(e));
    }, []),
    b = a || m,
    x = o || g,
    S = Z.useRef(null),
    C = Z.useRef(null),
    w = Z.useRef(u),
    T = c != null,
    E = pr(c),
    D = pr(i),
    O = pr(l),
    k = Z.useCallback(() => {
      if (!S.current || !C.current) return;
      let e = { placement: t, strategy: n, middleware: f };
      (D.current && (e.platform = D.current),
        cr(S.current, C.current, e).then((e) => {
          let t = { ...e, isPositioned: O.current !== !1 };
          A.current &&
            !ur(w.current, t) &&
            ((w.current = t),
            an.flushSync(() => {
              d(t);
            }));
        }));
    }, [f, t, n, D, O]);
  lr(() => {
    l === !1 &&
      w.current.isPositioned &&
      ((w.current.isPositioned = !1), d((e) => ({ ...e, isPositioned: !1 })));
  }, [l]);
  let A = Z.useRef(!1);
  (lr(
    () => (
      (A.current = !0),
      () => {
        A.current = !1;
      }
    ),
    [],
  ),
    lr(() => {
      if ((b && (S.current = b), x && (C.current = x), b && x)) {
        if (E.current) return E.current(b, x, k);
        k();
      }
    }, [b, x, k, E, T]));
  let j = Z.useMemo(
      () => ({ reference: S, floating: C, setReference: v, setFloating: y }),
      [v, y],
    ),
    M = Z.useMemo(() => ({ reference: b, floating: x }), [b, x]),
    N = Z.useMemo(() => {
      let e = { position: n, left: 0, top: 0 };
      if (!M.floating) return e;
      let t = fr(M.floating, u.x),
        r = fr(M.floating, u.y);
      return s
        ? {
            ...e,
            transform: `translate(` + t + `px, ` + r + `px)`,
            ...(dr(M.floating) >= 1.5 && { willChange: `transform` }),
          }
        : { position: n, left: t, top: r };
    }, [n, s, M.floating, u.x, u.y]);
  return Z.useMemo(
    () => ({ ...u, update: k, refs: j, elements: M, floatingStyles: N }),
    [u, k, j, M, N],
  );
}
var hr = (e, t) => {
    let n = nr(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  gr = (e, t) => {
    let n = rr(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  _r = (e, t) => ({ fn: sr(e).fn, options: [e, t] }),
  vr = (e, t) => {
    let n = ir(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  yr = (e, t) => {
    let n = ar(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  br = (e, t) => {
    let n = or(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  };
function xr(e) {
  let { open: t = !1, onOpenChange: n, elements: r = {} } = e,
    a = en(),
    o = fe() != null,
    s = i(
      () =>
        new qe({
          open: t,
          transitionStatus: void 0,
          onOpenChange: n,
          referenceElement: r.reference ?? null,
          floatingElement: r.floating ?? null,
          triggerElements: new Dt(),
          floatingId: a,
          syncOnly: !1,
          nested: o,
        }),
    ).current;
  return (
    u(() => {
      let e = { open: t, floatingId: a };
      (r.reference !== void 0 &&
        ((e.referenceElement = r.reference),
        (e.domReferenceElement = Y(r.reference) ? r.reference : null)),
        r.floating !== void 0 && (e.floatingElement = r.floating),
        s.update(e));
    }, [t, a, r.reference, r.floating, s]),
    (s.context.onOpenChange = n),
    (s.context.nested = o),
    s
  );
}
function Sr(e = {}) {
  let { nodeId: t, externalTree: n } = e,
    r = xr(e),
    i = e.rootContext || r,
    a = i.useState(`referenceElement`),
    o = i.useState(`floatingElement`),
    s = i.useState(`domReferenceElement`),
    c = i.useState(`open`),
    l = i.useState(`floatingId`),
    [d, f] = Z.useState(null),
    [p, m] = Z.useState(void 0),
    [h, g] = Z.useState(void 0),
    _ = Z.useRef(null),
    v = me(n),
    y = Z.useMemo(
      () => ({ reference: a, floating: o, domReference: s }),
      [a, o, s],
    ),
    b = mr({ ...e, elements: { ...y, ...(d && { reference: d }) } }),
    x = Y(p) ? p : null,
    S = h === void 0 ? i.state.floatingElement : h;
  (i.useSyncedValue(`referenceElement`, p ?? null),
    i.useSyncedValue(`domReferenceElement`, p === void 0 ? s : x),
    i.useSyncedValue(`floatingElement`, S));
  let C = Z.useCallback(
      (e) => {
        let t = Y(e)
          ? {
              getBoundingClientRect: () => e.getBoundingClientRect(),
              getClientRects: () => e.getClientRects(),
              contextElement: e,
            }
          : e;
        (f(t), b.refs.setReference(t));
      },
      [b.refs],
    ),
    w = Z.useCallback(
      (e) => {
        ((Y(e) || e === null) && ((_.current = e), m(e)),
          (Y(b.refs.reference.current) ||
            b.refs.reference.current === null ||
            (e !== null && !Y(e))) &&
            b.refs.setReference(e));
      },
      [b.refs, m],
    ),
    T = Z.useCallback(
      (e) => {
        (g(e), b.refs.setFloating(e));
      },
      [b.refs],
    ),
    E = Z.useMemo(
      () => ({
        ...b.refs,
        setReference: w,
        setFloating: T,
        setPositionReference: C,
        domReference: _,
      }),
      [b.refs, w, T, C],
    ),
    D = Z.useMemo(() => ({ ...b.elements, domReference: s }), [b.elements, s]),
    O = Z.useMemo(
      () => ({
        ...b,
        dataRef: i.context.dataRef,
        open: c,
        onOpenChange: i.setOpen,
        events: i.context.events,
        floatingId: l,
        refs: E,
        elements: D,
        nodeId: t,
        rootStore: i,
      }),
      [b, E, D, t, i, c, l],
    );
  return (
    u(() => {
      s && (_.current = s);
    }, [s]),
    u(() => {
      i.context.dataRef.current.floatingContext = O;
      let e = v?.nodesRef.current.find((e) => e.id === t);
      e && (e.context = O);
    }),
    Z.useMemo(
      () => ({ ...b, context: O, refs: E, elements: D, rootStore: i }),
      [b, E, D, O, i],
    )
  );
}
var Cr = Be && Ut;
function wr(t, n = {}) {
  let { enabled: r = !0, delay: i } = n,
    a = `rootStore` in t ? t.rootStore : t,
    { events: o, dataRef: s } = a.context,
    c = Z.useRef(!1),
    l = Z.useRef(null),
    u = Z.useRef(!0),
    d = e();
  (Z.useEffect(() => {
    let e = a.select(`domReferenceElement`);
    if (!r) return;
    let t = ht(e);
    function n() {
      let e = a.select(`domReferenceElement`);
      !a.select(`open`) && K(e) && e === Rt(Et(e)) && (c.current = !0);
    }
    function i() {
      u.current = !0;
    }
    function o() {
      u.current = !1;
    }
    return I(
      Ke(t, `blur`, n),
      Cr && Ke(t, `keydown`, i, !0),
      Cr && Ke(t, `pointerdown`, o, !0),
    );
  }, [a, r]),
    Z.useEffect(() => {
      if (!r) return;
      function e(e) {
        if (e.reason === `trigger-press` || e.reason === `escape-key`) {
          let e = a.select(`domReferenceElement`);
          Y(e) && ((l.current = e), (c.current = !0));
        }
      }
      return (
        o.on(`openchange`, e),
        () => {
          o.off(`openchange`, e);
        }
      );
    }, [o, r, a]));
  let f = Z.useMemo(() => {
    function e() {
      ((c.current = !1), (l.current = null));
    }
    return {
      onMouseLeave() {
        e();
      },
      onFocus(t) {
        let n = t.currentTarget;
        if (c.current) {
          if (l.current === n) return;
          e();
        }
        let r = Mt(t.nativeEvent);
        if (Y(r)) {
          if (Cr && !t.relatedTarget) {
            if (!u.current && !D(r)) return;
          } else if (!tt(r)) return;
        }
        let o = Le(t.relatedTarget, a.context.triggerElements),
          { nativeEvent: s, currentTarget: f } = t,
          p = typeof i == `function` ? i() : i;
        if ((a.select(`open`) && o) || p === 0 || p === void 0) {
          a.setOpen(!0, q(re, s, f));
          return;
        }
        d.start(p, () => {
          c.current || a.setOpen(!0, q(re, s, f));
        });
      },
      onBlur(t) {
        e();
        let n = t.relatedTarget,
          r = t.nativeEvent,
          i =
            Y(n) &&
            n.hasAttribute(ke(`focus-guard`)) &&
            n.getAttribute(`data-type`) === `outside`;
        d.start(0, () => {
          let e = a.select(`domReferenceElement`),
            t = Rt(Et(e));
          (!n && t === e) ||
            X(s.current.floatingContext?.refs.floating.current, t) ||
            X(e, t) ||
            i ||
            Le(n ?? t, a.context.triggerElements) ||
            a.setOpen(!1, q(re, r));
        });
      },
    };
  }, [s, i, a, d]);
  return Z.useMemo(() => (r ? { reference: f, trigger: f } : {}), [r, f]);
}
var Tr = class e {
    constructor() {
      ((this.pointerType = void 0),
        (this.interactedInside = !1),
        (this.handler = void 0),
        (this.blockMouseMove = !0),
        (this.performedPointerEventsMutation = !1),
        (this.pointerEventsScopeElement = null),
        (this.pointerEventsReferenceElement = null),
        (this.pointerEventsFloatingElement = null),
        (this.restTimeoutPending = !1),
        (this.openChangeTimeout = new T()),
        (this.restTimeout = new T()),
        (this.handleCloseOptions = void 0));
    }
    static create() {
      return new e();
    }
    dispose = () => {
      (this.openChangeTimeout.clear(), this.restTimeout.clear());
    };
    disposeEffect = () => this.dispose;
  },
  Er = new WeakMap();
function Dr(e) {
  if (!e.performedPointerEventsMutation) return;
  let t = e.pointerEventsScopeElement;
  (t &&
    Er.get(t) === e &&
    (e.pointerEventsScopeElement?.style.removeProperty(`pointer-events`),
    e.pointerEventsReferenceElement?.style.removeProperty(`pointer-events`),
    e.pointerEventsFloatingElement?.style.removeProperty(`pointer-events`),
    Er.delete(t)),
    (e.performedPointerEventsMutation = !1),
    (e.pointerEventsScopeElement = null),
    (e.pointerEventsReferenceElement = null),
    (e.pointerEventsFloatingElement = null));
}
function Or(e, t) {
  let { scopeElement: n, referenceElement: r, floatingElement: i } = t,
    a = Er.get(n);
  (a && a !== e && Dr(a),
    Dr(e),
    (e.performedPointerEventsMutation = !0),
    (e.pointerEventsScopeElement = n),
    (e.pointerEventsReferenceElement = r),
    (e.pointerEventsFloatingElement = i),
    Er.set(n, e),
    (n.style.pointerEvents = `none`),
    (r.style.pointerEvents = `auto`),
    (i.style.pointerEvents = `auto`));
}
function kr(e) {
  let t = e.context.dataRef.current,
    n = i(() => t.hoverInteractionState ?? Tr.create()).current;
  return (
    (t.hoverInteractionState ||= n),
    d(t.hoverInteractionState.disposeEffect),
    t.hoverInteractionState
  );
}
function Ar(t, n = {}) {
  let { enabled: r = !0, closeDelay: i = 0, nodeId: a } = n,
    o = `rootStore` in t ? t.rootStore : t,
    s = o.useState(`open`),
    c = o.useState(`floatingElement`),
    l = o.useState(`domReferenceElement`),
    { dataRef: d } = o.context,
    f = me(),
    p = fe(),
    m = kr(o),
    h = e(),
    _ = g(() => ln(d.current.openEvent?.type, m.interactedInside)),
    v = g(() => un(d.current.openEvent?.type)),
    y = g(() => {
      Dr(m);
    });
  (u(() => {
    s ||
      ((m.pointerType = void 0),
      (m.restTimeoutPending = !1),
      (m.interactedInside = !1),
      y());
  }, [s, m, y]),
    Z.useEffect(() => y, [y]),
    u(() => {
      if (
        r &&
        s &&
        m.handleCloseOptions?.blockPointerEvents &&
        v() &&
        Y(l) &&
        c
      ) {
        let e = l,
          t = c,
          n = Et(c),
          r = f?.nodesRef.current.find((e) => e.id === p)?.context?.elements
            .floating;
        r && (r.style.pointerEvents = ``);
        let i =
            m.pointerEventsScopeElement === t
              ? null
              : m.pointerEventsScopeElement,
          a = r === t ? null : r;
        return (
          Or(m, {
            scopeElement:
              m.handleCloseOptions?.getScope?.() ??
              i ??
              a ??
              e.closest(`[data-rootownerid]`) ??
              n.body,
            referenceElement: e,
            floatingElement: t,
          }),
          () => {
            y();
          }
        );
      }
    }, [r, s, l, c, m, v, f, p, y]),
    Z.useEffect(() => {
      if (!r) return;
      function e() {
        return !!(f && p && W(f.nodesRef.current, p).length > 0);
      }
      function t(e) {
        let t = sn(i, `close`, m.pointerType),
          n = () => {
            (o.setOpen(!1, q(G, e)), f?.events.emit(`floating.closed`, e));
          };
        t
          ? m.openChangeTimeout.start(t, n)
          : (m.openChangeTimeout.clear(), n());
      }
      function n(e) {
        let t = Mt(e);
        if (!Me(t)) {
          m.interactedInside = !1;
          return;
        }
        m.interactedInside = t?.closest(`[aria-haspopup]`) != null;
      }
      function s() {
        (m.openChangeTimeout.clear(),
          h.clear(),
          f?.events.off(`floating.closed`, u),
          y());
      }
      function l(n) {
        if (e() && f) {
          f.events.on(`floating.closed`, u);
          return;
        }
        if (Le(n.relatedTarget, o.context.triggerElements)) return;
        let r = d.current.floatingContext?.nodeId ?? a,
          i = n.relatedTarget;
        if (
          !(
            f &&
            r &&
            Y(i) &&
            W(f.nodesRef.current, r, !1).some((e) =>
              X(e.context?.elements.floating, i),
            )
          )
        ) {
          if (m.handler) {
            m.handler(n);
            return;
          }
          (y(), _() || t(n));
        }
      }
      function u(t) {
        !f ||
          !p ||
          e() ||
          h.start(0, () => {
            (f.events.off(`floating.closed`, u),
              o.setOpen(!1, q(G, t)),
              f.events.emit(`floating.closed`, t));
          });
      }
      let g = c;
      return I(
        g && Ke(g, `mouseenter`, s),
        g && Ke(g, `mouseleave`, l),
        g && Ke(g, `pointerdown`, n, !0),
        () => {
          f?.events.off(`floating.closed`, u);
        },
      );
    }, [r, c, o, d, i, a, _, y, m, f, p, h]));
}
var jr = { current: null };
function Mr(e, t = {}) {
  let {
      enabled: n = !0,
      delay: r = 0,
      handleClose: i = null,
      mouseOnly: a = !1,
      restMs: o = 0,
      move: s = !0,
      triggerElementRef: c = jr,
      externalTree: l,
      isActiveTrigger: u = !0,
      getHandleCloseContext: d,
      isClosing: f,
      shouldOpen: p,
    } = t,
    m = `rootStore` in e ? e.rootStore : e,
    { dataRef: h, events: _ } = m.context,
    v = me(l),
    y = kr(m),
    b = Z.useRef(!1),
    x = z(i),
    S = z(r),
    C = z(o),
    w = z(n),
    T = z(p),
    E = z(f),
    D = g(() => ln(h.current.openEvent?.type, y.interactedInside)),
    O = g(() => T.current?.() !== !1),
    k = g((e, t, n) => {
      let r = m.context.triggerElements;
      if (r.hasElement(t)) return !e || !X(e, t);
      if (!Y(n)) return !1;
      let i = n;
      return r.hasMatchingElement((e) => X(e, i)) && (!e || !X(e, i));
    }),
    A = g(() => {
      y.handler &&=
        (Et(m.select(`domReferenceElement`)).removeEventListener(
          `mousemove`,
          y.handler,
        ),
        void 0);
    }),
    j = g(() => {
      Dr(y);
    });
  return (
    u && (y.handleCloseOptions = x.current?.__options),
    Z.useEffect(() => A, [A]),
    Z.useEffect(() => {
      if (!n) return;
      function e(e) {
        e.open
          ? (b.current = !1)
          : ((b.current = e.reason === G),
            A(),
            y.openChangeTimeout.clear(),
            y.restTimeout.clear(),
            (y.blockMouseMove = !0),
            (y.restTimeoutPending = !1));
      }
      return (
        _.on(`openchange`, e),
        () => {
          _.off(`openchange`, e);
        }
      );
    }, [n, _, y, A]),
    Z.useEffect(() => {
      if (!n) return;
      function e(e, t = !0) {
        let n = sn(S.current, `close`, y.pointerType);
        n
          ? y.openChangeTimeout.start(n, () => {
              (m.setOpen(!1, q(G, e)), v?.events.emit(`floating.closed`, e));
            })
          : t &&
            (y.openChangeTimeout.clear(),
            m.setOpen(!1, q(G, e)),
            v?.events.emit(`floating.closed`, e));
      }
      let t = c.current ?? (u ? m.select(`domReferenceElement`) : null);
      if (!Y(t)) return;
      function r(e) {
        if (
          (y.openChangeTimeout.clear(),
          (y.blockMouseMove = !1),
          a && !Xe(y.pointerType))
        )
          return;
        let t = cn(C.current),
          n = sn(S.current, `open`, y.pointerType),
          r = Mt(e),
          i = e.currentTarget ?? null,
          o = m.select(`domReferenceElement`),
          s = i;
        if (Y(r) && !m.context.triggerElements.hasElement(r)) {
          for (let e of m.context.triggerElements.elements())
            if (X(e, r)) {
              s = e;
              break;
            }
        }
        Y(i) &&
          Y(o) &&
          !m.context.triggerElements.hasElement(i) &&
          X(i, o) &&
          (s = o);
        let c = s == null ? !1 : k(o, s, r),
          l = m.select(`open`),
          u = E.current?.() ?? m.select(`transitionStatus`) === `ending`,
          d = !l && u && b.current,
          f = !c && Y(s) && Y(o) && X(o, s) && d,
          p = t > 0 && !n,
          h = (c && (l || d)) || f,
          g = !l || c;
        if (h) {
          O() && m.setOpen(!0, q(G, e, s));
          return;
        }
        p ||
          (n
            ? y.openChangeTimeout.start(n, () => {
                g && O() && m.setOpen(!0, q(G, e, s));
              })
            : g && O() && m.setOpen(!0, q(G, e, s)));
      }
      function i(t) {
        if (D()) {
          j();
          return;
        }
        A();
        let n = Et(m.select(`domReferenceElement`));
        (y.restTimeout.clear(), (y.restTimeoutPending = !1));
        let r = h.current.floatingContext ?? d?.();
        if (!Le(t.relatedTarget, m.context.triggerElements)) {
          if (x.current && r) {
            m.select(`open`) || y.openChangeTimeout.clear();
            let i = c.current;
            ((y.handler = x.current({
              ...r,
              tree: v,
              x: t.clientX,
              y: t.clientY,
              onClose() {
                (j(),
                  A(),
                  w.current &&
                    !D() &&
                    i === m.select(`domReferenceElement`) &&
                    e(t, !0));
              },
            })),
              n.addEventListener(`mousemove`, y.handler),
              y.handler(t));
            return;
          }
          (y.pointerType !== `touch` ||
            !X(m.select(`floatingElement`), t.relatedTarget)) &&
            e(t);
        }
      }
      return s
        ? I(
            Ke(t, `mousemove`, r, { once: !0 }),
            Ke(t, `mouseenter`, r),
            Ke(t, `mouseleave`, i),
          )
        : I(Ke(t, `mouseenter`, r), Ke(t, `mouseleave`, i));
    }, [A, j, h, S, m, n, x, y, u, k, D, a, s, C, c, v, w, d, E, O]),
    Z.useMemo(() => {
      if (!n) return;
      function e(e) {
        y.pointerType = e.pointerType;
      }
      return {
        onPointerDown: e,
        onPointerEnter: e,
        onMouseMove(e) {
          let { nativeEvent: t } = e,
            n = e.currentTarget,
            r = m.select(`domReferenceElement`),
            i = m.select(`open`),
            o = k(r, n, e.target);
          if (a && !Xe(y.pointerType)) return;
          if (i && o && y.handleCloseOptions?.blockPointerEvents) {
            let e = m.select(`floatingElement`);
            e &&
              Or(y, {
                scopeElement:
                  y.handleCloseOptions?.getScope?.() ?? n.ownerDocument.body,
                referenceElement: n,
                floatingElement: e,
              });
          }
          let s = cn(C.current);
          if (
            (i && !o) ||
            s === 0 ||
            (!o &&
              y.restTimeoutPending &&
              e.movementX ** 2 + e.movementY ** 2 < 2)
          )
            return;
          y.restTimeout.clear();
          function c() {
            if (((y.restTimeoutPending = !1), D())) return;
            let e = m.select(`open`);
            !y.blockMouseMove && (!e || o) && O() && m.setOpen(!0, q(G, t, n));
          }
          y.pointerType === `touch`
            ? an.flushSync(() => {
                c();
              })
            : o && i
              ? c()
              : ((y.restTimeoutPending = !0), y.restTimeout.start(s, c));
        },
      };
    }, [n, y, D, k, a, m, C, O])
  );
}
var Nr = `Escape`;
function Pr(e, t, n) {
  switch (e) {
    case `vertical`:
      return t;
    case `horizontal`:
      return n;
    default:
      return t || n;
  }
}
function Fr(e, t) {
  return Pr(
    t,
    e === `ArrowUp` || e === `ArrowDown`,
    e === `ArrowLeft` || e === `ArrowRight`,
  );
}
function Ir(e, t, n) {
  return (
    Pr(t, e === `ArrowDown`, n ? e === `ArrowLeft` : e === `ArrowRight`) ||
    e === `Enter` ||
    e === ` ` ||
    e === ``
  );
}
function Lr(e, t, n) {
  return Pr(t, n ? e === Ue : e === wt, e === dt);
}
function Rr(e, t, n, r) {
  return t === `both` || (t === `horizontal` && r && r > 1)
    ? e === Nr
    : Pr(t, n ? e === wt : e === Ue, e === Ft);
}
function zr(e, t) {
  let {
      listRef: n,
      activeIndex: r,
      onNavigate: i = () => {},
      enabled: a = !0,
      selectedIndex: o = null,
      allowEscape: s = !1,
      loopFocus: l = !1,
      nested: d = !1,
      rtl: f = !1,
      virtual: p = !1,
      focusItemOnOpen: m = `auto`,
      focusItemOnHover: h = !0,
      openOnArrowKeyDown: _ = !0,
      disabledIndices: v = void 0,
      orientation: y = `vertical`,
      parentOrientation: b,
      cols: x = 1,
      id: S,
      resetOnPointerLeave: C = !0,
      externalTree: w,
    } = t,
    T = `rootStore` in e ? e.rootStore : e,
    E = T.useState(`open`),
    D = T.useState(`floatingElement`),
    k = T.useState(`domReferenceElement`),
    A = T.context.dataRef,
    j = Pe(D),
    M = ve(k),
    P = z(j),
    F = fe(),
    ee = me(w),
    I = Z.useRef(m),
    L = Z.useRef(o ?? -1),
    R = Z.useRef(null),
    B = Z.useRef(!0),
    V = g((e) => {
      i(L.current === -1 ? null : L.current, e);
    }),
    ne = Z.useRef(V),
    H = Z.useRef(!!D),
    re = Z.useRef(E),
    U = Z.useRef(!1),
    W = Z.useRef(!1),
    ie = Z.useRef(null),
    ae = z(v),
    oe = z(E),
    G = z(o),
    ce = z(C),
    le = c(),
    ue = c(),
    de = g(() => {
      function e(e) {
        p
          ? ee?.events.emit(`virtualfocus`, e)
          : (ie.current = N(e, { sync: U.current, preventScroll: !0 }));
      }
      let t = n.current[L.current],
        r = W.current;
      (t && e(t),
        (U.current ? (e) => e() : (e) => le.request(e))(() => {
          let i = n.current[L.current] || t;
          i &&
            (t || e(i),
            be &&
              (r || !B.current) &&
              i.scrollIntoView?.({ block: `nearest`, inline: `nearest` }));
        }));
    });
  (u(() => {
    A.current.orientation = y;
  }, [A, y]),
    u(() => {
      a &&
        (E && D
          ? ((L.current = o ?? -1),
            I.current && o != null && ((W.current = !0), V()))
          : H.current && ((L.current = -1), ne.current()));
    }, [a, E, D, o, V]),
    u(() => {
      if (a) {
        if (!E) {
          U.current = !1;
          return;
        }
        if (D)
          if (r == null) {
            if (((U.current = !1), G.current != null)) return;
            if (
              (H.current && ((L.current = -1), de()),
              (!re.current || !H.current) &&
                I.current &&
                (R.current != null || (I.current === !0 && R.current == null)))
            ) {
              let e = 0,
                t = () => {
                  n.current[0] == null
                    ? (e < 2 && (e ? (e) => ue.request(e) : queueMicrotask)(t),
                      (e += 1))
                    : ((L.current =
                        R.current == null || Ir(R.current, y, f) || d
                          ? O(n)
                          : ye(n)),
                      (R.current = null),
                      V());
                };
              t();
            }
          } else Lt(n.current, r) || ((L.current = r), de(), (W.current = !1));
      }
    }, [a, E, D, r, G, d, n, y, f, V, de, ue]),
    u(() => {
      if (!a || D || !ee || p || !H.current) return;
      let e = ee.nodesRef.current,
        t = e.find((e) => e.id === F)?.context?.elements.floating,
        n = Rt(Et(D)),
        r = e.some((e) => e.context && X(e.context.elements.floating, n));
      t && !r && B.current && t.focus({ preventScroll: !0 });
    }, [a, D, ee, F, p]),
    u(() => {
      ((ne.current = V), (re.current = E), (H.current = !!D));
    }),
    u(() => {
      E || ((R.current = null), (I.current = m));
    }, [E, m]));
  let pe = r != null,
    J = g((e) => {
      if (!oe.current) return;
      let t = n.current.indexOf(e.currentTarget);
      t !== -1 && (L.current !== t || r !== t) && ((L.current = t), V(e));
    }),
    he = g(
      () =>
        b ??
        ee?.nodesRef.current.find((e) => e.id === F)?.context?.dataRef?.current
          .orientation,
    ),
    ge = g(() => O(n, ae.current)),
    _e = g((e) => {
      if (
        ((B.current = !1),
        (U.current = !0),
        e.which === 229 || (!oe.current && e.currentTarget === P.current))
      )
        return;
      if (d && Rr(e.key, y, f, x)) {
        (Fr(e.key, he()) || Qe(e),
          T.setOpen(!1, q(Oe, e.nativeEvent)),
          K(k) && (p ? ee?.events.emit(`virtualfocus`, k) : k.focus()));
        return;
      }
      let t = L.current,
        r = O(n, v),
        i = ye(n, v);
      if (
        (M ||
          (e.key === `Home` && (Qe(e), (L.current = r), V(e)),
          e.key === `End` && (Qe(e), (L.current = i), V(e))),
        x > 1)
      ) {
        let t = Array.from({ length: n.current.length }, () => ({
            width: 1,
            height: 1,
          })),
          a = kt(t, x, !1),
          o = a.findIndex((e) => e != null && !St(n.current, e, v)),
          s = a.reduce(
            (e, t, r) => (t != null && !St(n.current, t, v) ? r : e),
            -1,
          ),
          c =
            a[
              Re(
                a.map((e) => (e == null ? null : n.current[e])),
                {
                  event: e,
                  orientation: y,
                  loopFocus: l,
                  rtl: f,
                  cols: x,
                  disabledIndices: Ne(
                    [
                      ...((typeof v == `function` ? null : v) ||
                        n.current.map((e, t) =>
                          St(n.current, t, v) ? t : void 0,
                        )),
                      void 0,
                    ],
                    a,
                  ),
                  minIndex: o,
                  maxIndex: s,
                  prevIndex: Fe(
                    L.current > i ? r : L.current,
                    t,
                    a,
                    x,
                    e.key === `ArrowDown`
                      ? `bl`
                      : e.key === (f ? `ArrowLeft` : `ArrowRight`)
                        ? `tr`
                        : `tl`,
                  ),
                  stopEvent: !0,
                },
              )
            ];
        if ((c != null && ((L.current = c), V(e)), y === `both`)) return;
      }
      if (Fr(e.key, y)) {
        if (
          (Qe(e),
          E && !p && Rt(e.currentTarget.ownerDocument) === e.currentTarget)
        ) {
          ((L.current = Ir(e.key, y, f) ? r : i), V(e));
          return;
        }
        (Ir(e.key, y, f)
          ? l
            ? t >= i
              ? s && t !== n.current.length
                ? (L.current = -1)
                : ((U.current = !1), (L.current = r))
              : (L.current = se(n.current, {
                  startingIndex: t,
                  disabledIndices: v,
                }))
            : (L.current = Math.min(
                i,
                se(n.current, { startingIndex: t, disabledIndices: v }),
              ))
          : l
            ? t <= r
              ? s && t !== -1
                ? (L.current = n.current.length)
                : ((U.current = !1), (L.current = i))
              : (L.current = se(n.current, {
                  startingIndex: t,
                  decrement: !0,
                  disabledIndices: v,
                }))
            : (L.current = Math.max(
                r,
                se(n.current, {
                  startingIndex: t,
                  decrement: !0,
                  disabledIndices: v,
                }),
              )),
          Lt(n.current, L.current) && (L.current = -1),
          V(e));
      }
    }),
    be = Z.useMemo(
      () => ({
        onFocus(e) {
          ((U.current = !0), J(e));
        },
        onClick: ({ currentTarget: e }) => e.focus({ preventScroll: !0 }),
        onMouseMove(e) {
          ((U.current = !0), (W.current = !1), h && J(e));
        },
        onPointerLeave(e) {
          if (!oe.current || !B.current || e.pointerType === `touch`) return;
          U.current = !0;
          let t = e.relatedTarget;
          if (
            !(!h || n.current.includes(t)) &&
            ce.current &&
            (ie.current?.(), (ie.current = null), (L.current = -1), V(e), !p)
          ) {
            let e = P.current,
              t = Rt(Et(e));
            e && X(e, t) && e.focus({ preventScroll: !0 });
          }
        },
      }),
      [J, oe, P, h, n, V, ce, p],
    ),
    xe = Z.useMemo(
      () => p && E && pe && { "aria-activedescendant": `${S}-${r}` },
      [p, E, pe, S, r],
    ),
    Se = Z.useMemo(
      () => ({
        "aria-orientation": y === `both` ? void 0 : y,
        ...(M ? {} : xe),
        onKeyDown(e) {
          if (e.key === `Tab` && e.shiftKey && E && !p) {
            let t = Mt(e.nativeEvent);
            if (t && !X(P.current, t)) return;
            (Qe(e), T.setOpen(!1, q(te, e.nativeEvent)), K(k) && k.focus());
            return;
          }
          _e(e);
        },
        onPointerMove() {
          B.current = !0;
        },
      }),
      [xe, _e, P, y, M, T, E, p, k],
    ),
    Ce = Z.useMemo(() => {
      function e(e) {
        T.setOpen(!0, q(Oe, e.nativeEvent, e.currentTarget));
      }
      function t(e) {
        m === `auto` && vt(e.nativeEvent) && (I.current = !p);
      }
      function n(e) {
        ((I.current = m),
          m === `auto` && Vt(e.nativeEvent) && (I.current = !0));
      }
      return {
        onKeyDown(t) {
          let n = T.select(`open`);
          B.current = !1;
          let r = t.key.startsWith(`Arrow`),
            i = Lr(t.key, he(), f),
            a = Fr(t.key, y),
            o = (d ? i : a) || t.key === `Enter` || t.key.trim() === ``;
          if (p && n) return _e(t);
          if (!(!n && !_ && r)) {
            if (o) {
              let e = Fr(t.key, he());
              R.current = d && e ? null : t.key;
            }
            if (d) {
              i && (Qe(t), n ? ((L.current = ge()), V(t)) : e(t));
              return;
            }
            a &&
              (G.current != null && (L.current = G.current),
              Qe(t),
              !n && _ ? e(t) : _e(t),
              n && V(t));
          }
        },
        onFocus(e) {
          T.select(`open`) && !p && ((L.current = -1), V(e));
        },
        onPointerDown: n,
        onPointerEnter: n,
        onMouseDown: t,
        onClick: t,
      };
    }, [_e, m, ge, d, V, T, _, y, he, f, G, p]),
    we = Z.useMemo(() => ({ ...xe, ...Ce }), [xe, Ce]);
  return Z.useMemo(
    () => (a ? { reference: we, floating: Se, item: be, trigger: Ce } : {}),
    [a, we, Se, Ce, be],
  );
}
function Br(t, n) {
  let {
      listRef: r,
      elementsRef: i,
      activeIndex: a,
      onMatch: o,
      onTyping: s,
      enabled: c = !0,
      resetMs: l = 750,
      selectedIndex: d = null,
    } = n,
    f = `rootStore` in t ? t.rootStore : t,
    p = f.useState(`open`),
    m = e(),
    h = Z.useRef(``),
    _ = Z.useRef(d ?? a ?? -1),
    v = Z.useRef(null),
    y = g((e) => {
      function t(e) {
        let t = i?.current[e];
        return !t || et(t);
      }
      function n(e, n, r = 0) {
        if (e.length === 0) return -1;
        let i = ((r % e.length) + e.length) % e.length,
          a = n.toLocaleLowerCase();
        for (let n = 0; n < e.length; n += 1) {
          let r = (i + n) % e.length;
          if (!(!e[r]?.toLocaleLowerCase().startsWith(a) || !t(r))) return r;
        }
        return -1;
      }
      let c = r.current;
      if (
        (h.current.length > 0 && e.key === ` ` && (Qe(e), s?.(!0)),
        h.current.length > 0 &&
          h.current[0] !== ` ` &&
          n(c, h.current) === -1 &&
          e.key !== ` ` &&
          s?.(!1),
        c == null || e.key.length !== 1 || e.ctrlKey || e.metaKey || e.altKey)
      )
        return;
      p && e.key !== ` ` && (Qe(e), s?.(!0));
      let u = h.current === ``;
      (u && (_.current = d ?? a ?? -1),
        c.every((e) =>
          e ? e[0]?.toLocaleLowerCase() !== e[1]?.toLocaleLowerCase() : !0,
        ) &&
          h.current === e.key &&
          ((h.current = ``), (_.current = v.current)),
        (h.current += e.key),
        m.start(l, () => {
          ((h.current = ``), (_.current = v.current), s?.(!1));
        }));
      let f = ((u ? (d ?? a ?? -1) : _.current) ?? 0) + 1,
        g = n(c, h.current, f);
      g === -1
        ? e.key !== ` ` && ((h.current = ``), s?.(!1))
        : (o?.(g), (v.current = g));
    }),
    b = g((e) => {
      let t = e.relatedTarget,
        n = f.select(`domReferenceElement`),
        r = f.select(`floatingElement`);
      X(n, t) ||
        X(r, t) ||
        (m.clear(), (h.current = ``), (_.current = v.current), s?.(!1));
    });
  (u(() => {
    (!p && d !== null) ||
      (m.clear(), (v.current = null), h.current !== `` && (h.current = ``));
  }, [p, d, m]),
    u(() => {
      p && h.current === `` && (_.current = d ?? a ?? -1);
    }, [p, d, a]));
  let x = Z.useMemo(() => ({ onKeyDown: y, onBlur: b }), [y, b]);
  return Z.useMemo(() => (c ? { reference: x, floating: x } : {}), [c, x]);
}
var Vr = 0.1,
  Hr = Vr * Vr,
  Q = 0.5;
function Ur(e, t, n, r, i, a) {
  return r >= t != a >= t && e <= ((i - n) * (t - r)) / (a - r) + n;
}
function Wr(e, t, n, r, i, a, o, s, c, l) {
  let u = !1;
  return (
    Ur(e, t, n, r, i, a) && (u = !u),
    Ur(e, t, i, a, o, s) && (u = !u),
    Ur(e, t, o, s, c, l) && (u = !u),
    Ur(e, t, c, l, n, r) && (u = !u),
    u
  );
}
function Gr(e, t, n) {
  return e >= n.x && e <= n.x + n.width && t >= n.y && t <= n.y + n.height;
}
function Kr(e, t, n, r, i, a) {
  return (
    e >= Math.min(n, i) &&
    e <= Math.max(n, i) &&
    t >= Math.min(r, a) &&
    t <= Math.max(r, a)
  );
}
function qr(e = {}) {
  let { blockPointerEvents: t = !1 } = e,
    n = new T(),
    r = ({
      x: e,
      y: t,
      placement: r,
      elements: i,
      onClose: a,
      nodeId: o,
      tree: s,
    }) => {
      let c = r?.split(`-`)[0],
        l = !1,
        u = null,
        d = null,
        f = typeof performance < `u` ? performance.now() : 0;
      function p(e, t) {
        let n = performance.now(),
          r = n - f;
        if (u === null || d === null || r === 0)
          return ((u = e), (d = t), (f = n), !1);
        let i = e - u,
          a = t - d,
          o = i * i + a * a,
          s = r * r * Hr;
        return ((u = e), (d = t), (f = n), o < s);
      }
      function m() {
        (n.clear(), a());
      }
      return function (r) {
        n.clear();
        let a = i.domReference,
          u = i.floating;
        if (!a || !u || c == null || e == null || t == null) return;
        let { clientX: d, clientY: f } = r,
          h = Mt(r),
          g = r.type === `mouseleave`,
          _ = X(u, h),
          v = X(a, h);
        if (_ && ((l = !0), !g)) return;
        if (v && ((l = !1), !g)) {
          l = !0;
          return;
        }
        if (g && Y(r.relatedTarget) && X(u, r.relatedTarget)) return;
        function y() {
          return !!(s && W(s.nodesRef.current, o).length > 0);
        }
        function b() {
          y() || m();
        }
        if (y()) return;
        let x = a.getBoundingClientRect(),
          S = u.getBoundingClientRect(),
          C = e > S.right - S.width / 2,
          w = t > S.bottom - S.height / 2,
          T = S.width > x.width,
          E = S.height > x.height,
          D = (T ? x : S).left,
          O = (T ? x : S).right,
          k = (E ? x : S).top,
          A = (E ? x : S).bottom;
        if (
          (c === `top` && t >= x.bottom - 1) ||
          (c === `bottom` && t <= x.top + 1) ||
          (c === `left` && e >= x.right - 1) ||
          (c === `right` && e <= x.left + 1)
        ) {
          b();
          return;
        }
        let j = !1;
        switch (c) {
          case `top`:
            j = Kr(d, f, D, x.top + 1, O, S.bottom - 1);
            break;
          case `bottom`:
            j = Kr(d, f, D, S.top + 1, O, x.bottom - 1);
            break;
          case `left`:
            j = Kr(d, f, S.right - 1, A, x.left + 1, k);
            break;
          case `right`:
            j = Kr(d, f, x.right - 1, A, S.left + 1, k);
            break;
          default:
        }
        if (j) return;
        if (l && !Gr(d, f, x)) {
          b();
          return;
        }
        if (!g && p(d, f)) {
          b();
          return;
        }
        let M = !1;
        switch (c) {
          case `top`: {
            let n = T ? Q / 2 : Q * 4,
              r = T || C ? e + n : e - n,
              i = T ? e - n : C ? e + n : e - n,
              a = t + Q + 1,
              o = C || T ? S.bottom - Q : S.top,
              s = C ? (T ? S.bottom - Q : S.top) : S.bottom - Q;
            M = Wr(d, f, r, a, i, a, S.left, o, S.right, s);
            break;
          }
          case `bottom`: {
            let n = T ? Q / 2 : Q * 4,
              r = T || C ? e + n : e - n,
              i = T ? e - n : C ? e + n : e - n,
              a = t - Q,
              o = C || T ? S.top + Q : S.bottom,
              s = C ? (T ? S.top + Q : S.bottom) : S.top + Q;
            M = Wr(d, f, r, a, i, a, S.left, o, S.right, s);
            break;
          }
          case `left`: {
            let n = E ? Q / 2 : Q * 4,
              r = E || w ? t + n : t - n,
              i = E ? t - n : w ? t + n : t - n,
              a = e + Q + 1,
              o = w || E ? S.right - Q : S.left,
              s = w ? (E ? S.right - Q : S.left) : S.right - Q;
            M = Wr(d, f, o, S.top, s, S.bottom, a, r, a, i);
            break;
          }
          case `right`: {
            let n = E ? Q / 2 : Q * 4,
              r = E || w ? t + n : t - n,
              i = E ? t - n : w ? t + n : t - n,
              a = e - Q,
              o = w || E ? S.left + Q : S.right,
              s = w ? (E ? S.left + Q : S.right) : S.left + Q;
            M = Wr(d, f, a, r, a, i, o, S.top, s, S.bottom);
            break;
          }
          default:
        }
        M ? l || n.start(40, b) : b();
      };
    };
  return ((r.__options = { ...e, blockPointerEvents: t }), r);
}
var $ = f();
function Jr(e) {
  let t = Z.useRef(``),
    n = Z.useCallback(
      (n) => {
        n.defaultPrevented ||
          ((t.current = n.pointerType), e(n, n.pointerType));
      },
      [e],
    );
  return {
    onClick: Z.useCallback(
      (n) => {
        if (n.detail === 0) {
          e(n, `keyboard`);
          return;
        }
        (`pointerType` in n ? e(n, n.pointerType) : e(n, t.current),
          (t.current = ``));
      },
      [e],
    ),
    onPointerDown: n,
  };
}
function Yr(e, t) {
  let n = Z.useRef(e),
    r = g(t);
  (u(() => {
    n.current !== e && r(n.current);
  }, [e, r]),
    u(() => {
      n.current = e;
    }, [e]));
}
function Xr(e, t) {
  let { onClick: n, onPointerDown: r } = Jr(
    g((n, r) => {
      (typeof e == `function` ? e() : e) || t(r || (ot ? `touch` : ``));
    }),
  );
  return Z.useMemo(() => ({ onClick: n, onPointerDown: r }), [n, r]);
}
function Zr(e) {
  let [t, n] = Z.useState(null),
    r = Xr(e, n);
  return (
    Yr(e, (t) => {
      t && !e && n(null);
    }),
    Z.useMemo(() => ({ openMethod: t, triggerProps: r }), [t, r])
  );
}
var Qr = y(`check`, [[`path`, { d: `M20 6 9 17l-5-5`, key: `1gmf2c` }]]),
  $r = y(`fingerprint-pattern`, [
    [`path`, { d: `M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4`, key: `1nerag` }],
    [`path`, { d: `M14 13.12c0 2.38 0 6.38-1 8.88`, key: `o46ks0` }],
    [`path`, { d: `M17.29 21.02c.12-.6.43-2.3.5-3.02`, key: `ptglia` }],
    [`path`, { d: `M2 12a10 10 0 0 1 18-6`, key: `ydlgp0` }],
    [`path`, { d: `M2 16h.01`, key: `1gqxmh` }],
    [`path`, { d: `M21.8 16c.2-2 .131-5.354 0-6`, key: `drycrb` }],
    [`path`, { d: `M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2`, key: `1tidbn` }],
    [`path`, { d: `M8.65 22c.21-.66.45-1.32.57-2`, key: `13wd9y` }],
    [`path`, { d: `M9 6.8a6 6 0 0 1 9 5.2v2`, key: `1fr1j5` }],
  ]),
  ei = y(`key-round`, [
    [
      `path`,
      {
        d: `M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z`,
        key: `1s6t7t`,
      },
    ],
    [
      `circle`,
      { cx: `16.5`, cy: `7.5`, r: `.5`, fill: `currentColor`, key: `w0ekpg` },
    ],
  ]),
  ti = y(`languages`, [
    [`path`, { d: `m5 8 6 6`, key: `1wu5hv` }],
    [`path`, { d: `m4 14 6-6 2-3`, key: `1k1g8d` }],
    [`path`, { d: `M2 5h12`, key: `or177f` }],
    [`path`, { d: `M7 2h1`, key: `1t2jsx` }],
    [`path`, { d: `m22 22-5-10-5 10`, key: `don7ne` }],
    [`path`, { d: `M14 18h6`, key: `1m8k6r` }],
  ]),
  ni = y(`monitor`, [
    [
      `rect`,
      { width: `20`, height: `14`, x: `2`, y: `3`, rx: `2`, key: `48i651` },
    ],
    [`line`, { x1: `8`, x2: `16`, y1: `21`, y2: `21`, key: `1svkeh` }],
    [`line`, { x1: `12`, x2: `12`, y1: `17`, y2: `21`, key: `vw1qmm` }],
  ]),
  ri = y(`moon`, [
    [
      `path`,
      {
        d: `M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401`,
        key: `kfwtm`,
      },
    ],
  ]),
  ii = y(`shield-check`, [
    [
      `path`,
      {
        d: `M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,
        key: `oel41y`,
      },
    ],
    [`path`, { d: `m9 12 2 2 4-4`, key: `dzmm74` }],
  ]),
  ai = y(`sun`, [
    [`circle`, { cx: `12`, cy: `12`, r: `4`, key: `4exip2` }],
    [`path`, { d: `M12 2v2`, key: `tus03m` }],
    [`path`, { d: `M12 20v2`, key: `1lh1kg` }],
    [`path`, { d: `m4.93 4.93 1.41 1.41`, key: `149t6j` }],
    [`path`, { d: `m17.66 17.66 1.41 1.41`, key: `ptbguv` }],
    [`path`, { d: `M2 12h2`, key: `1t8f8n` }],
    [`path`, { d: `M20 12h2`, key: `1q8mjw` }],
    [`path`, { d: `m6.34 17.66-1.41 1.41`, key: `1m8zz5` }],
    [`path`, { d: `m19.07 4.93-1.41 1.41`, key: `1shlcs` }],
  ]);
function oi({ className: e }) {
  let { t } = p(),
    { app: n, isLoading: r } = x();
  return r || n?.hidePoweredBy
    ? null
    : (0, $.jsxs)(`a`, {
        href: `https://huruftech.com`,
        target: `_blank`,
        rel: `noreferrer`,
        className: v(
          `inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground`,
          e,
        ),
        children: [
          t(`Powered by`),
          (0, $.jsx)(`img`, {
            src: nn,
            className: `h-4.5 w-auto`,
            alt: `Huruf Tech`,
          }),
        ],
      });
}
var si = Z.createContext(void 0);
function ci(e) {
  let t = Z.useContext(si);
  if (t === void 0 && !e) throw Error(o(33));
  return t;
}
var li = Z.createContext(void 0);
function ui(e) {
  let t = Z.useContext(li);
  if (t === void 0 && !e) throw Error(o(36));
  return t;
}
var di = Z.createContext(void 0);
function fi(e = !0) {
  let t = Z.useContext(di);
  if (t === void 0 && !e) throw Error(o(25));
  return t;
}
function pi(e) {
  let {
      closeOnClick: t,
      highlighted: n,
      id: r,
      nodeId: i,
      store: a,
      typingRef: o,
      itemRef: s,
      itemMetadata: c,
    } = e,
    { events: l } = a.useState(`floatingTreeRoot`),
    u = fi(!0),
    d = u !== void 0;
  return Z.useMemo(
    () => ({
      id: r,
      role: `menuitem`,
      tabIndex: n ? 0 : -1,
      onKeyDown(e) {
        e.key === ` ` && o?.current && e.preventDefault();
      },
      onMouseMove(e) {
        i && l.emit(`itemhover`, { nodeId: i, target: e.currentTarget });
      },
      onClick(e) {
        t && l.emit(`close`, { domEvent: e, reason: M });
      },
      onMouseUp(e) {
        if (u) {
          let t = u.initialCursorPointRef.current;
          if (
            ((u.initialCursorPointRef.current = null),
            (d &&
              t &&
              Math.abs(e.clientX - t.x) <= 1 &&
              Math.abs(e.clientY - t.y) <= 1) ||
              (d && !Be && e.button === 2))
          )
            return;
        }
        s.current &&
          a.context.allowMouseUpTriggerRef.current &&
          (!d || e.button === 2) &&
          (!c || c.type === `regular-item`) &&
          s.current.click();
      },
    }),
    [t, n, r, l, i, a, o, s, u, d, c],
  );
}
var mi = { type: `regular-item` };
function hi(e) {
  let {
      closeOnClick: t,
      disabled: n = !1,
      highlighted: r,
      id: i,
      store: o,
      typingRef: s = o.context.typingRef,
      nativeButton: c,
      itemMetadata: l,
      nodeId: u,
    } = e,
    d = Z.useRef(null),
    { getButtonProps: f, buttonRef: p } = E({
      disabled: n,
      focusableWhenDisabled: !0,
      native: c,
      composite: !0,
    }),
    m = pi({
      closeOnClick: t,
      highlighted: r,
      id: i,
      nodeId: u,
      store: o,
      typingRef: s,
      itemRef: d,
      itemMetadata: l,
    }),
    g = Z.useCallback(
      (e) =>
        a(
          m,
          {
            onMouseEnter() {
              l.type === `submenu-trigger` && l.setActive();
            },
          },
          e,
          f,
        ),
      [m, f, l],
    ),
    _ = h(d, p);
  return Z.useMemo(() => ({ getItemProps: g, itemRef: _ }), [g, _]);
}
var gi = Z.createContext({
  register: () => {},
  unregister: () => {},
  subscribeMapChange: () => () => {},
  elementsRef: { current: [] },
  nextIndexRef: { current: 0 },
});
function _i() {
  return Z.useContext(gi);
}
var vi = (function (e) {
  return (
    (e[(e.None = 0)] = `None`),
    (e[(e.GuessFromOrder = 1)] = `GuessFromOrder`),
    e
  );
})({});
function yi(e = {}) {
  let {
      label: t,
      metadata: n,
      textRef: r,
      indexGuessBehavior: i,
      index: a,
    } = e,
    {
      register: o,
      unregister: s,
      subscribeMapChange: c,
      elementsRef: l,
      labelsRef: d,
      nextIndexRef: f,
    } = _i(),
    p = Z.useRef(-1),
    [m, h] = Z.useState(
      a ??
        (i === vi.GuessFromOrder
          ? () => {
              if (p.current === -1) {
                let e = f.current;
                ((f.current += 1), (p.current = e));
              }
              return p.current;
            }
          : -1),
    ),
    g = Z.useRef(null),
    _ = Z.useCallback(
      (e) => {
        if (
          ((g.current = e), m !== -1 && e !== null && ((l.current[m] = e), d))
        ) {
          let n = t !== void 0;
          d.current[m] = n ? t : (r?.current?.textContent ?? e.textContent);
        }
      },
      [m, l, d, t, r],
    );
  return (
    u(() => {
      if (a != null) return;
      let e = g.current;
      if (e)
        return (
          o(e, n),
          () => {
            s(e);
          }
        );
    }, [a, o, s, n]),
    u(() => {
      if (a == null)
        return c((e) => {
          let t = g.current ? e.get(g.current)?.index : null;
          t != null && h(t);
        });
    }, [a, c, h]),
    Z.useMemo(() => ({ ref: _, index: m }), [m, _])
  );
}
var bi = Z.createContext(void 0);
function xi() {
  let e = Z.useContext(bi);
  if (e === void 0) throw Error(o(31));
  return e;
}
var Si = Z.forwardRef(function (e, t) {
    let { render: r, className: i, style: a, ...o } = e,
      [s, c] = Z.useState(void 0),
      l = n(`div`, e, {
        ref: t,
        props: { role: `group`, "aria-labelledby": s, ...o },
      });
    return (0, $.jsx)(bi.Provider, { value: c, children: l });
  }),
  Ci = Z.forwardRef(function (e, t) {
    let { render: r, className: i, style: a, id: o, ...s } = e,
      c = Ie(o),
      l = xi();
    return (
      u(
        () => (
          l(c),
          () => {
            l(void 0);
          }
        ),
        [l, c],
      ),
      n(`div`, e, { ref: t, props: { id: c, role: `presentation`, ...s } })
    );
  }),
  wi = Z.forwardRef(function (e, t) {
    let {
        render: r,
        className: i,
        id: a,
        label: o,
        nativeButton: s = !1,
        disabled: c = !1,
        closeOnClick: l = !0,
        style: u,
        ...d
      } = e,
      f = yi({ label: o }),
      p = ci(!0),
      m = Ie(a),
      { store: h } = ui(),
      g = h.useState(`isActive`, f.index),
      _ = h.useState(`itemProps`),
      { getItemProps: v, itemRef: y } = hi({
        closeOnClick: l,
        disabled: c,
        highlighted: g,
        id: m,
        store: h,
        nativeButton: s,
        nodeId: p?.context.nodeId,
        itemMetadata: mi,
      });
    return n(`div`, e, {
      state: { disabled: c, highlighted: g },
      props: [_, d, v],
      ref: [y, t, f.ref],
    });
  }),
  Ti = Z.createContext(void 0);
function Ei(e) {
  let t = Z.useContext(Ti);
  if (t === void 0 && !e) throw Error(o(69));
  return t;
}
function Di(e) {
  return e === `starting` ? oe : r;
}
var Oi = { ...ft, ...t },
  ki = Z.forwardRef(function (e, t) {
    let { render: r, className: i, style: a, finalFocus: o, ...s } = e,
      { store: c } = ui(),
      { side: l, align: u } = ci(),
      d = Ei(!0) != null,
      f = c.useState(`open`),
      p = c.useState(`transitionStatus`),
      h = c.useState(`popupProps`),
      g = c.useState(`mounted`),
      _ = c.useState(`instantType`),
      v = c.useState(`activeTriggerElement`),
      y = c.useState(`parent`),
      b = c.useState(`lastOpenChangeReason`),
      x = c.useState(`rootId`),
      S = c.useState(`floatingRootContext`),
      C = c.useState(`floatingTreeRoot`),
      w = c.useState(`closeDelay`),
      T = c.useState(`activeTriggerElement`),
      E = c.useState(`hoverEnabled`),
      D = c.useState(`disabled`),
      O = y.type === `context-menu`;
    (m({
      open: f,
      ref: c.context.popupRef,
      onComplete() {
        f && c.context.onOpenChangeComplete?.(!0);
      },
    }),
      Z.useEffect(() => {
        function e(e) {
          c.setOpen(!1, q(e.reason, e.domEvent));
        }
        return (
          C.events.on(`close`, e),
          () => {
            C.events.off(`close`, e);
          }
        );
      }, [C.events, c]),
      Ar(S, { enabled: E && !D && !O && y.type !== `menubar`, closeDelay: w }));
    let k = Z.useCallback(
        (e) => {
          c.set(`popupElement`, e);
        },
        [c],
      ),
      A = n(`div`, e, {
        state: {
          transitionStatus: p,
          side: l,
          align: u,
          open: f,
          nested: y.type === `menu`,
          instant: _,
        },
        ref: [t, c.context.popupRef, k],
        stateAttributesMapping: Oi,
        props: [
          h,
          {
            onKeyDown(e) {
              d && Qt.has(e.key) && e.stopPropagation();
            },
          },
          Di(p),
          s,
          { "data-rootownerid": x },
        ],
      }),
      j = y.type === void 0 || O;
    return (
      (v || (y.type === `menubar` && b !== `outside-press`)) && (j = !0),
      (0, $.jsx)(he, {
        context: S,
        modal: O,
        disabled: !g,
        returnFocus: o === void 0 ? j : o,
        initialFocus: y.type !== `menu`,
        restoreFocus: !0,
        externalTree: y.type === `menubar` ? void 0 : C,
        previousFocusableElement: T,
        nextFocusableElement:
          y.type === void 0 ? c.context.triggerFocusTargetRef : void 0,
        beforeContentFocusGuardRef:
          y.type === void 0 ? c.context.beforeContentFocusGuardRef : void 0,
        children: A,
      })
    );
  }),
  Ai = Z.createContext(void 0);
function ji() {
  let e = Z.useContext(Ai);
  if (e === void 0) throw Error(o(32));
  return e;
}
var Mi = Z.forwardRef(function (e, t) {
    let { keepMounted: n = !1, ...r } = e,
      { store: i } = ui();
    return i.useState(`mounted`) || n
      ? (0, $.jsx)(Ai.Provider, {
          value: n,
          children: (0, $.jsx)(H, { ref: t, ...r }),
        })
      : null;
  }),
  Ni = (e) => ({
    name: `arrow`,
    options: e,
    async fn(t) {
      let {
          x: n,
          y: r,
          placement: i,
          rects: a,
          platform: o,
          elements: s,
          middlewareData: c,
        } = t,
        {
          element: l,
          padding: u = 0,
          offsetParent: d = `real`,
        } = He(e, t) || {};
      if (l == null) return {};
      let f = ct(u),
        p = { x: n, y: r },
        m = Ye(i),
        h = Bt(m),
        g = await o.getDimensions(l),
        _ = m === `y`,
        v = _ ? `top` : `left`,
        y = _ ? `bottom` : `right`,
        b = _ ? `clientHeight` : `clientWidth`,
        x = a.reference[h] + a.reference[m] - p[m] - a.floating[h],
        S = p[m] - a.reference[m],
        C = d === `real` ? await o.getOffsetParent?.(l) : s.floating,
        w = s.floating[b] || a.floating[h];
      (!w || !(await o.isElement?.(C))) && (w = s.floating[b] || a.floating[h]);
      let T = x / 2 - S / 2,
        E = w / 2 - g[h] / 2 - 1,
        D = Math.min(f[v], E),
        O = Math.min(f[y], E),
        k = D,
        A = w - g[h] - O,
        j = w / 2 - g[h] / 2 + T,
        M = jt(k, j, A),
        N =
          !c.arrow &&
          Pt(i) != null &&
          j !== M &&
          a.reference[h] / 2 - (j < k ? D : O) - g[h] / 2 < 0,
        P = N ? (j < k ? j - k : j - A) : 0;
      return {
        [m]: p[m] + P,
        data: {
          [m]: M,
          centerOffset: j - M - P,
          ...(N && { alignmentOffset: P }),
        },
        reset: N,
      };
    },
  }),
  Pi = (e, t) => ({ ...Ni(e), options: [e, t] }),
  Fi = {
    name: `hide`,
    async fn(e) {
      let { width: t, height: n, x: r, y: i } = e.rects.reference,
        a = t === 0 && n === 0 && r === 0 && i === 0;
      return {
        data: {
          referenceHidden: (await br().fn(e)).data?.referenceHidden || a,
        },
      };
    },
  },
  Ii = { sideX: `left`, sideY: `top` },
  Li = {
    name: `adaptiveOrigin`,
    async fn(e) {
      let {
          x: t,
          y: n,
          rects: { floating: r },
          elements: { floating: i },
          platform: a,
          strategy: o,
          placement: s,
        } = e,
        c = ht(i),
        l = c.getComputedStyle(i);
      if (!(l.transitionDuration !== `0s` && l.transitionDuration !== ``))
        return { x: t, y: n, data: Ii };
      let u = await a.getOffsetParent?.(i),
        d = { width: 0, height: 0 };
      if (o === `fixed` && c?.visualViewport)
        d = { width: c.visualViewport.width, height: c.visualViewport.height };
      else if (u === c) {
        let e = Et(i);
        d = {
          width: e.documentElement.clientWidth,
          height: e.documentElement.clientHeight,
        };
      } else (await a.isElement?.(u)) && (d = await a.getDimensions(u));
      let f = at(s),
        p = t,
        m = n;
      (f === `left` && (p = d.width - (t + r.width)),
        f === `top` && (m = d.height - (n + r.height)));
      let h = f === `left` ? `right` : Ii.sideX,
        g = f === `top` ? `bottom` : Ii.sideY;
      return { x: p, y: m, data: { sideX: h, sideY: g } };
    },
  };
function Ri(e, t, n) {
  let r = e === `inline-start` || e === `inline-end`;
  return {
    top: `top`,
    right: r ? (n ? `inline-start` : `inline-end`) : `right`,
    bottom: `bottom`,
    left: r ? (n ? `inline-end` : `inline-start`) : `left`,
  }[t];
}
function zi(e, t, n) {
  let { rects: r, placement: i } = e;
  return {
    side: Ri(t, at(i), n),
    align: Pt(i) || `center`,
    anchor: { width: r.reference.width, height: r.reference.height },
    positioner: { width: r.floating.width, height: r.floating.height },
  };
}
function Bi(e) {
  let {
      anchor: t,
      positionMethod: n = `absolute`,
      side: r = `bottom`,
      sideOffset: i = 0,
      align: a = `center`,
      alignOffset: o = 0,
      collisionBoundary: s,
      collisionPadding: c = 5,
      sticky: l = !1,
      arrowPadding: d = 5,
      disableAnchorTracking: f = !1,
      inline: p,
      keepMounted: m = !1,
      floatingRootContext: h,
      mounted: _,
      collisionAvoidance: v,
      shiftCrossAxis: y = !1,
      nodeId: b,
      adaptiveOrigin: x,
      lazyFlip: S = !1,
      externalTree: C,
    } = e,
    [w, T] = Z.useState(null);
  !_ && w !== null && T(null);
  let E = v.side || `flip`,
    D = v.align || `flip`,
    O = v.fallbackAxisSide || `end`,
    k = typeof t == `function` ? t : void 0,
    A = g(k),
    j = k ? A : t,
    M = z(t),
    N = z(_),
    P = $t() === `rtl`,
    F =
      w ||
      {
        top: `top`,
        right: `right`,
        bottom: `bottom`,
        left: `left`,
        "inline-end": P ? `left` : `right`,
        "inline-start": P ? `right` : `left`,
      }[r],
    ee = a === `center` ? F : `${F}-${a}`,
    I = c,
    L = +(r === `bottom`),
    R = +(r === `top`),
    B = +(r === `right`),
    V = +(r === `left`);
  typeof I == `number`
    ? (I = { top: I + L, right: I + V, bottom: I + R, left: I + B })
    : (I &&= {
        top: (I.top || 0) + L,
        right: (I.right || 0) + V,
        bottom: (I.bottom || 0) + R,
        left: (I.left || 0) + B,
      });
  let te = {
      boundary: s === `clipping-ancestors` ? `clippingAncestors` : s,
      padding: I,
    },
    ne = Z.useRef(null),
    H = z(i),
    re = z(o),
    U = typeof i == `function` ? 0 : i,
    W = typeof o == `function` ? 0 : o,
    ie = [];
  (p && ie.push(p),
    ie.push(
      hr(
        (e) => {
          let t = zi(e, r, P),
            n = typeof H.current == `function` ? H.current(t) : H.current,
            i = typeof re.current == `function` ? re.current(t) : re.current;
          return { mainAxis: n, crossAxis: i, alignmentAxis: i };
        },
        [U, W, P, r],
      ),
    ));
  let ae = D === `none` && E !== `shift`,
    oe = !ae && (l || y || E === `shift`),
    se =
      E === `none`
        ? null
        : vr({
            ...te,
            padding: {
              top: I.top + 1,
              right: I.right + 1,
              bottom: I.bottom + 1,
              left: I.left + 1,
            },
            mainAxis: !y && E === `flip`,
            crossAxis: D === `flip` ? `alignment` : !1,
            fallbackAxisSideDirection: O,
          }),
    G = ae
      ? null
      : gr(
          (e) => {
            let t = Et(e.elements.floating).documentElement;
            return {
              ...te,
              rootBoundary: y
                ? { x: 0, y: 0, width: t.clientWidth, height: t.clientHeight }
                : void 0,
              mainAxis: D !== `none`,
              crossAxis: oe,
              limiter:
                l || y
                  ? void 0
                  : _r((e) => {
                      if (!ne.current) return {};
                      let { width: t, height: n } =
                          ne.current.getBoundingClientRect(),
                        r = ze(at(e.placement)),
                        i = r === `y` ? t : n,
                        a = r === `y` ? I.left + I.right : I.top + I.bottom;
                      return { offset: i / 2 + a / 2 };
                    }),
            };
          },
          [te, l, y, I, D],
        );
  (E === `shift` || D === `shift` || a === `center`
    ? ie.push(G, se)
    : ie.push(se, G),
    ie.push(
      yr({
        ...te,
        apply({
          elements: { floating: e },
          availableWidth: t,
          availableHeight: n,
          rects: r,
        }) {
          if (!N.current) return;
          let i = e.style;
          (i.setProperty(`--available-width`, `${t}px`),
            i.setProperty(`--available-height`, `${n}px`));
          let a = ht(e).devicePixelRatio || 1,
            { x: o, y: s, width: c, height: l } = r.reference,
            u = (Math.round((o + c) * a) - Math.round(o * a)) / a,
            d = (Math.round((s + l) * a) - Math.round(s * a)) / a;
          (i.setProperty(`--anchor-width`, `${u}px`),
            i.setProperty(`--anchor-height`, `${d}px`));
        },
      }),
      Pi(
        (e) => ({
          element: ne.current || Et(e.elements.floating).createElement(`div`),
          padding: d,
          offsetParent: `floating`,
        }),
        [d],
      ),
      {
        name: `transformOrigin`,
        fn(e) {
          let {
              elements: t,
              middlewareData: n,
              placement: a,
              rects: o,
              y: s,
            } = e,
            c = at(a),
            l = ze(c),
            u = ne.current,
            d = n.arrow?.x || 0,
            f = n.arrow?.y || 0,
            p = u?.clientWidth || 0,
            m = u?.clientHeight || 0,
            h = d + p / 2,
            g = f + m / 2,
            _ = Math.abs(n.shift?.y || 0),
            v = o.reference.height / 2,
            y = typeof i == `function` ? i(zi(e, r, P)) : i,
            b = _ > y,
            x = {
              top: `${h}px calc(100% + ${y}px)`,
              bottom: `${h}px ${-y}px`,
              left: `calc(100% + ${y}px) ${g}px`,
              right: `${-y}px ${g}px`,
            }[c],
            S = `${h}px ${o.reference.y + v - s}px`;
          return (
            t.floating.style.setProperty(
              `--transform-origin`,
              oe && l === `y` && b ? S : x,
            ),
            {}
          );
        },
      },
      Fi,
      x,
    ),
    u(() => {
      !_ &&
        h &&
        h.update({
          referenceElement: null,
          floatingElement: null,
          domReferenceElement: null,
          positionReference: null,
        });
    }, [_, h]));
  let ce = Z.useMemo(
      () => ({
        elementResize: !f && typeof ResizeObserver < `u`,
        layoutShift: !f && typeof IntersectionObserver < `u`,
      }),
      [f],
    ),
    {
      refs: le,
      elements: ue,
      x: de,
      y: K,
      middlewareData: fe,
      update: pe,
      placement: me,
      context: q,
      isPositioned: J,
      floatingStyles: he,
    } = Sr({
      rootContext: h,
      open: m ? _ : void 0,
      placement: ee,
      middleware: ie,
      strategy: n,
      whileElementsMounted: m ? void 0 : (...e) => tr(...e, ce),
      nodeId: b,
      externalTree: C,
    }),
    { sideX: ge, sideY: _e } = fe.adaptiveOrigin || Ii,
    ve = J ? n : `fixed`,
    ye = Z.useMemo(() => {
      let e = x ? { position: ve, [ge]: de, [_e]: K } : { position: ve, ...he };
      return (J || (e.opacity = 0), e);
    }, [x, ve, ge, de, _e, K, he, J]),
    be = Z.useRef(null);
  (u(() => {
    if (!_) return;
    let e = M.current,
      t = typeof e == `function` ? e() : e,
      n = (Vi(t) ? t.current : t) || null;
    n !== be.current && (le.setPositionReference(n), (be.current = n));
  }, [_, le, j, M]),
    Z.useEffect(() => {
      if (!_) return;
      let e = M.current;
      typeof e != `function` &&
        Vi(e) &&
        e.current !== be.current &&
        (le.setPositionReference(e.current), (be.current = e.current));
    }, [_, le, j, M]),
    Z.useEffect(() => {
      if (m && _ && ue.domReference && ue.floating)
        return tr(ue.domReference, ue.floating, pe, ce);
    }, [m, _, ue, pe, ce]));
  let xe = at(me),
    Se = Ri(r, xe, P),
    Ce = Pt(me) || `center`,
    we = !!fe.hide?.referenceHidden;
  u(() => {
    S && _ && J && T(xe);
  }, [S, _, J, xe]);
  let Te = Z.useMemo(
      () => ({ position: `absolute`, top: fe.arrow?.y, left: fe.arrow?.x }),
      [fe.arrow],
    ),
    Ee = fe.arrow?.centerOffset !== 0;
  return Z.useMemo(
    () => ({
      positionerStyles: ye,
      arrowStyles: Te,
      arrowRef: ne,
      arrowUncentered: Ee,
      side: Se,
      align: Ce,
      physicalSide: xe,
      anchorHidden: we,
      refs: le,
      context: q,
      isPositioned: J,
      update: pe,
    }),
    [ye, Te, ne, Ee, Se, Ce, xe, we, le, q, J, pe],
  );
}
function Vi(e) {
  return e != null && `current` in e;
}
function Hi(e) {
  let { children: t, elementsRef: n, labelsRef: r, onMapChange: a } = e,
    o = g(a),
    s = Z.useRef(0),
    c = i(Wi).current,
    l = i(Ui).current,
    [d, f] = Z.useState(0),
    p = Z.useRef(d),
    m = g((e, t) => {
      (l.set(e, t ?? null), (p.current += 1), f(p.current));
    }),
    h = g((e) => {
      (l.delete(e), (p.current += 1), f(p.current));
    }),
    _ = Z.useMemo(() => {
      let e = new Map();
      return (
        Array.from(l.keys())
          .filter((e) => e.isConnected)
          .sort(Gi)
          .forEach((t, n) => {
            let r = l.get(t) ?? {};
            e.set(t, { ...r, index: n });
          }),
        e
      );
    }, [l, d]);
  (u(() => {
    if (typeof MutationObserver != `function` || _.size === 0) return;
    let e = new MutationObserver((e) => {
      let t = new Set(),
        n = (e) => (t.has(e) ? t.delete(e) : t.add(e));
      (e.forEach((e) => {
        (e.removedNodes.forEach(n), e.addedNodes.forEach(n));
      }),
        t.size === 0 && ((p.current += 1), f(p.current)));
    });
    return (
      _.forEach((t, n) => {
        n.parentElement && e.observe(n.parentElement, { childList: !0 });
      }),
      () => {
        e.disconnect();
      }
    );
  }, [_]),
    u(() => {
      (p.current === d &&
        (n.current.length !== _.size && (n.current.length = _.size),
        r && r.current.length !== _.size && (r.current.length = _.size),
        (s.current = _.size)),
        o(_));
    }, [o, _, n, r, d]),
    u(
      () => () => {
        n.current = [];
      },
      [n],
    ),
    u(
      () => () => {
        r && (r.current = []);
      },
      [r],
    ));
  let v = g(
    (e) => (
      c.add(e),
      () => {
        c.delete(e);
      }
    ),
  );
  u(() => {
    c.forEach((e) => e(_));
  }, [c, _]);
  let y = Z.useMemo(
    () => ({
      register: m,
      unregister: h,
      subscribeMapChange: v,
      elementsRef: n,
      labelsRef: r,
      nextIndexRef: s,
    }),
    [m, h, v, n, r, s],
  );
  return (0, $.jsx)(gi.Provider, { value: y, children: t });
}
function Ui() {
  return new Map();
}
function Wi() {
  return new Set();
}
function Gi(e, t) {
  let n = e.compareDocumentPosition(t);
  return n & Node.DOCUMENT_POSITION_FOLLOWING ||
    n & Node.DOCUMENT_POSITION_CONTAINED_BY
    ? -1
    : n & Node.DOCUMENT_POSITION_PRECEDING ||
        n & Node.DOCUMENT_POSITION_CONTAINS
      ? 1
      : 0;
}
function Ki(
  e,
  t,
  {
    styles: r,
    transitionStatus: i,
    props: a,
    refs: o,
    hidden: s,
    inert: c = !1,
  },
) {
  let l = { ...r };
  return (
    c && (l.pointerEvents = `none`),
    n(`div`, e, {
      state: t,
      ref: o,
      props: [{ role: `presentation`, hidden: s, style: l }, Di(i), a],
      stateAttributesMapping: ft,
    })
  );
}
var qi = 20;
function Ji(e, t, n, r) {
  let [i, a] = Z.useState(!1);
  (u(() => {
    if (!e || !t || n == null) {
      a(!1);
      return;
    }
    let r = Et(n).documentElement.clientWidth,
      i = n.offsetWidth;
    a(r > 0 && i > 0 && i >= r - qi);
  }, [e, t, n]),
    rt(e && (!t || i), r));
}
var Yi = Z.forwardRef(function (t, n) {
    let {
        anchor: r,
        positionMethod: i = `absolute`,
        className: a,
        render: o,
        side: s,
        align: c,
        sideOffset: l = 0,
        alignOffset: d = 0,
        collisionBoundary: f = `clipping-ancestors`,
        collisionPadding: p = 5,
        arrowPadding: m = 5,
        sticky: h = !1,
        disableAnchorTracking: g = !1,
        collisionAvoidance: _ = ue,
        style: v,
        ...y
      } = t,
      { store: b } = ui(),
      x = ji(),
      S = fi(!0),
      w = b.useState(`parent`),
      T = b.useState(`floatingRootContext`),
      E = b.useState(`floatingTreeRoot`),
      D = b.useState(`mounted`),
      O = b.useState(`open`),
      k = b.useState(`modal`),
      A = b.useState(`openMethod`),
      j = b.useState(`activeTriggerElement`),
      M = b.useState(`transitionStatus`),
      N = b.useState(`positionerElement`),
      P = b.useState(`instantType`),
      F = b.useState(`hasViewport`),
      ee = b.useState(`lastOpenChangeReason`),
      I = b.useState(`floatingNodeId`),
      L = b.useState(`floatingParentNodeId`),
      R = T.useState(`domReferenceElement`),
      z = Z.useRef(null),
      B = C(N, !1, !1),
      V = r,
      te = l,
      ne = d,
      H = c,
      re = _;
    w.type === `context-menu` &&
      ((V = r ?? w.context?.anchor),
      (H ??= `start`),
      !s &&
        H !== `center` &&
        ((ne = t.alignOffset ?? 2), (te = t.sideOffset ?? -5)));
    let U = s,
      W = H;
    w.type === `menu`
      ? ((U ??= `inline-end`),
        (W ??= `start`),
        (re = t.collisionAvoidance ?? xe))
      : w.type === `menubar` && ((U ??= `bottom`), (W ??= `start`));
    let ie = w.type === `context-menu`,
      ae = Bi({
        anchor: V,
        floatingRootContext: T,
        positionMethod: S ? `fixed` : i,
        mounted: D,
        side: U,
        sideOffset: te,
        align: W,
        alignOffset: ne,
        arrowPadding: ie ? 0 : m,
        collisionBoundary: f,
        collisionPadding: p,
        sticky: h,
        nodeId: I,
        keepMounted: x,
        disableAnchorTracking: g,
        collisionAvoidance: re,
        shiftCrossAxis: ie && !(`side` in re && re.side === `flip`),
        externalTree: E,
        adaptiveOrigin: F ? Li : void 0,
      });
    (Z.useEffect(() => {
      function e(e) {
        e.open &&
          (e.parentNodeId === I && b.set(`hoverEnabled`, !1),
          e.nodeId !== I &&
            e.parentNodeId === b.select(`floatingParentNodeId`) &&
            b.setOpen(!1, q(Ae)));
      }
      return (
        E.events.on(`menuopenchange`, e),
        () => {
          E.events.off(`menuopenchange`, e);
        }
      );
    }, [b, E.events, I]),
      Z.useEffect(() => {
        if (b.select(`floatingParentNodeId`) == null) return;
        function e(e) {
          if (e.open || e.nodeId !== b.select(`floatingParentNodeId`)) return;
          let t = e.reason ?? `sibling-open`;
          b.setOpen(!1, q(t));
        }
        return (
          E.events.on(`menuopenchange`, e),
          () => {
            E.events.off(`menuopenchange`, e);
          }
        );
      }, [E.events, b]));
    let oe = e();
    (Z.useEffect(() => {
      O || oe.clear();
    }, [O, oe]),
      Z.useEffect(() => {
        function e(e) {
          if (!(!O || e.nodeId !== b.select(`floatingParentNodeId`)))
            if (e.target && j && j !== e.target) {
              let e = b.select(`closeDelay`);
              e > 0
                ? oe.isStarted() ||
                  oe.start(e, () => {
                    b.setOpen(!1, q(Ae));
                  })
                : b.setOpen(!1, q(Ae));
            } else oe.clear();
        }
        return (
          E.events.on(`itemhover`, e),
          () => {
            E.events.off(`itemhover`, e);
          }
        );
      }, [E.events, O, j, b, oe]),
      Z.useEffect(() => {
        let e = {
          open: O,
          nodeId: I,
          parentNodeId: L,
          reason: b.select(`lastOpenChangeReason`),
        };
        E.events.emit(`menuopenchange`, e);
      }, [E.events, O, b, I, L]),
      u(() => {
        let e = R,
          t = z.current;
        if ((e && (z.current = e), t && e && e !== t)) {
          b.set(`instantType`, void 0);
          let e = new AbortController();
          return (
            B(() => {
              b.set(`instantType`, `trigger-change`);
            }, e.signal),
            () => {
              e.abort();
            }
          );
        }
      }, [R, B, b]));
    let se = {
        open: O,
        side: ae.side,
        align: ae.align,
        anchorHidden: ae.anchorHidden,
        nested: w.type === `menu`,
        instant: P,
      },
      G = w.type === `menubar` && w.context.modal;
    Ji(O && (G || (k && ee !== `trigger-hover`)), A === `touch`, N, j);
    let ce = Ki(t, se, {
        styles: ae.positionerStyles,
        transitionStatus: M,
        props: y,
        refs: [n, b.useStateSetter(`positionerElement`)],
        hidden: !D,
        inert: !O,
      }),
      le =
        D &&
        w.type !== `menu` &&
        ((w.type !== `menubar` && k && ee !== `trigger-hover`) ||
          (w.type === `menubar` && w.context.modal)),
      K = null;
    return (
      w.type === `menubar`
        ? (K = w.context.contentElement)
        : w.type === void 0 && (K = j),
      (0, $.jsxs)(si.Provider, {
        value: ae,
        children: [
          le &&
            (0, $.jsx)(pt, {
              ref:
                w.type === `context-menu` || w.type === `nested-context-menu`
                  ? w.context.internalBackdropRef
                  : null,
              inert: de(!O),
              cutout: K,
            }),
          (0, $.jsx)(gt, {
            id: I,
            children: (0, $.jsx)(Hi, {
              elementsRef: b.context.itemDomElements,
              labelsRef: b.context.itemLabels,
              children: ce,
            }),
          }),
        ],
      })
    );
  }),
  Xi = Z.createContext(null);
function Zi(e) {
  let t = Z.useContext(Xi);
  if (t === null && !e) throw Error(o(5));
  return t;
}
var Qi = {
    ...it,
    disabled: V(
      (e) =>
        (e.parent.type === `menubar` && e.parent.context.disabled) ||
        e.disabled,
    ),
    modal: V(
      (e) =>
        (e.parent.type === void 0 || e.parent.type === `context-menu`) &&
        (e.modal ?? !0),
    ),
    openMethod: V((e) => e.openMethod),
    allowMouseEnter: V((e) => e.allowMouseEnter),
    stickIfOpen: V((e) => e.stickIfOpen),
    parent: V((e) => e.parent),
    rootId: V((e) =>
      e.parent.type === `menu`
        ? e.parent.store.select(`rootId`)
        : e.parent.type === void 0
          ? e.rootId
          : e.parent.context.rootId,
    ),
    activeIndex: V((e) => e.activeIndex),
    isActive: V((e, t) => e.activeIndex === t),
    hoverEnabled: V((e) => e.hoverEnabled),
    instantType: V((e) => e.instantType),
    lastOpenChangeReason: V((e) => e.openChangeReason),
    floatingTreeRoot: V((e) =>
      e.parent.type === `menu`
        ? e.parent.store.select(`floatingTreeRoot`)
        : e.floatingTreeRoot,
    ),
    floatingNodeId: V((e) => e.floatingNodeId),
    floatingParentNodeId: V((e) => e.floatingParentNodeId),
    itemProps: V((e) => e.itemProps),
    closeDelay: V((e) => e.closeDelay),
    hasViewport: V((e) => e.hasViewport),
    keyboardEventRelay: V((e) => {
      if (e.keyboardEventRelay) return e.keyboardEventRelay;
      if (e.parent.type === `menu`)
        return e.parent.store.select(`keyboardEventRelay`);
    }),
  },
  $i = class e extends Yt {
    constructor(e) {
      (super(
        { ...ea(), ...e },
        {
          positionerRef: Z.createRef(),
          popupRef: Z.createRef(),
          typingRef: { current: !1 },
          itemDomElements: { current: [] },
          itemLabels: { current: [] },
          allowMouseUpTriggerRef: { current: !1 },
          triggerFocusTargetRef: Z.createRef(),
          beforeContentFocusGuardRef: Z.createRef(),
          onOpenChangeComplete: void 0,
          triggerElements: new Dt(),
        },
        Qi,
      ),
        (this.unsubscribeParentListener = this.observe(`parent`, (e) => {
          if ((this.unsubscribeParentListener?.(), e.type === `menu`)) {
            let t = e.store.select(`rootId`),
              n = e.store.select(`floatingTreeRoot`),
              r = e.store.select(`keyboardEventRelay`);
            ((this.unsubscribeParentListener = e.store.subscribe(() => {
              let i = e.store.select(`rootId`),
                a = e.store.select(`floatingTreeRoot`),
                o = e.store.select(`keyboardEventRelay`);
              (t === i && n === a && r === o) ||
                ((t = i), (n = a), (r = o), this.notifyAll());
            })),
              (this.context.allowMouseUpTriggerRef =
                e.store.context.allowMouseUpTriggerRef));
            return;
          }
          (e.type !== void 0 &&
            (this.context.allowMouseUpTriggerRef =
              e.context.allowMouseUpTriggerRef),
            (this.unsubscribeParentListener = null));
        })));
    }
    setOpen(e, t) {
      this.state.floatingRootContext.context.events.emit(`setOpen`, {
        open: e,
        eventDetails: t,
      });
    }
    static useStore(t, n) {
      let r = i(() => new e(n)).current;
      return t ?? r;
    }
    unsubscribeParentListener = null;
  };
function ea() {
  return {
    ...$e(),
    disabled: !1,
    modal: !0,
    openMethod: null,
    allowMouseEnter: !1,
    stickIfOpen: !0,
    parent: { type: void 0 },
    rootId: void 0,
    activeIndex: null,
    hoverEnabled: !0,
    instantType: void 0,
    openChangeReason: null,
    floatingTreeRoot: new _e(),
    floatingNodeId: void 0,
    floatingParentNodeId: null,
    itemProps: r,
    keyboardEventRelay: void 0,
    closeDelay: 0,
    hasViewport: !1,
  };
}
var ta = Z.createContext(void 0);
function na() {
  return Z.useContext(ta);
}
var ra = Kt(function (t) {
  let {
      children: n,
      open: i,
      onOpenChange: o,
      onOpenChangeComplete: c,
      defaultOpen: l = !1,
      disabled: d = !1,
      modal: f,
      loopFocus: p = !0,
      orientation: m = `vertical`,
      actionsRef: h,
      closeParentOnEsc: _ = !1,
      handle: v,
      triggerId: y,
      defaultTriggerId: b = null,
      highlightItemOnHover: x = !0,
    } = t,
    S = fi(!0),
    C = ui(!0),
    w = Zi(!0),
    T = na(),
    E = Z.useMemo(
      () =>
        T && C
          ? { type: `menu`, store: C.store }
          : w
            ? { type: `menubar`, context: w }
            : S && !C
              ? { type: `context-menu`, context: S }
              : { type: void 0 },
      [S, C, w, T],
    ),
    D = $i.useStore(v?.store, {
      open: l,
      openProp: i,
      activeTriggerId: b,
      triggerIdProp: y,
      parent: E,
    });
  (be(() => {
    i === void 0 &&
      D.state.open === !1 &&
      l === !0 &&
      D.update({ open: !0, activeTriggerId: b });
  }),
    D.useControlledProp(`openProp`, i),
    D.useControlledProp(`triggerIdProp`, y),
    D.useContextCallback(`onOpenChangeComplete`, c));
  let O = en(),
    k = en(),
    A = D.useState(`floatingTreeRoot`),
    M = mt(A),
    N = fe(),
    P = D.useState(`open`),
    F = D.useState(`activeTriggerElement`),
    ee = D.useState(`positionerElement`),
    I = D.useState(`hoverEnabled`),
    L = D.useState(`disabled`),
    z = D.useState(`lastOpenChangeReason`),
    B = D.useState(`parent`),
    V = D.useState(`activeIndex`),
    te = D.useState(`payload`),
    ne = D.useState(`floatingParentNodeId`),
    H = Z.useRef(null),
    re = Z.useRef(B.type !== `context-menu`),
    U = e(),
    W = Z.useRef(!0),
    ae = e(),
    oe = ne != null,
    { openMethod: se, triggerProps: G } = Zr(P);
  (D.useSyncedValues({
    disabled: d,
    modal: B.type === void 0 ? f : void 0,
    openMethod: se,
    rootId: O,
  }),
    lt(D));
  let { forceUnmount: ce } = st(P, D, () => {
    D.update({ allowMouseEnter: !1, stickIfOpen: !0 });
  });
  (u(() => {
    S && !C
      ? D.update({
          parent: { type: `context-menu`, context: S },
          floatingNodeId: M,
          floatingParentNodeId: N,
        })
      : C && D.update({ floatingNodeId: M, floatingParentNodeId: N });
  }, [S, C, M, N, D]),
    Z.useEffect(() => {
      if ((P || (H.current = null), B.type === `context-menu`)) {
        if (!P) {
          (U.clear(), (re.current = !1));
          return;
        }
        U.start(500, () => {
          re.current = !0;
        });
      }
    }, [U, P, B.type]),
    u(() => {
      !P && !I && D.set(`hoverEnabled`, !0);
    }, [P, I, D]));
  let le = g((e, t) => {
      let n = t.reason;
      if (
        (P === e && t.trigger === F && z === n) ||
        ((t.preventUnmountOnClose = () => {
          D.set(`preventUnmountingOnClose`, !0);
        }),
        !e && t.trigger == null && (t.trigger = F ?? void 0),
        o?.(e, t),
        t.isCanceled)
      )
        return;
      D.state.floatingRootContext.dispatchOpenChange(e, t);
      let r = t.event;
      if (
        e === !1 &&
        r?.type === `click` &&
        r.pointerType === `touch` &&
        !W.current
      )
        return;
      if (!e && V !== null) {
        let e = D.context.itemDomElements.current[V];
        queueMicrotask(() => {
          e?.setAttribute(`tabindex`, `-1`);
        });
      }
      e && n === `trigger-focus`
        ? ((W.current = !1),
          ae.start(300, () => {
            W.current = !0;
          }))
        : ((W.current = !0), ae.clear());
      let i =
          (n === `trigger-press` || n === `item-press`) &&
          r.detail === 0 &&
          r?.isTrusted,
        a = !e && (n === `escape-key` || n == null),
        s = { open: e, openChangeReason: n };
      H.current = t.event ?? null;
      let c = t.trigger?.id ?? null;
      ((c || e) &&
        ((s.activeTriggerId = c), (s.activeTriggerElement = t.trigger ?? null)),
        D.update(s),
        B.type === `menubar` &&
        (n === `trigger-focus` ||
          n === `focus-out` ||
          n === `trigger-hover` ||
          n === `list-navigation` ||
          n === `sibling-open`)
          ? D.set(`instantType`, `group`)
          : i || a
            ? D.set(`instantType`, i ? `click` : `dismiss`)
            : D.set(`instantType`, void 0));
    }),
    ue = Zt({
      popupStore: D,
      floatingId: k,
      nested: N != null,
      onOpenChange: le,
    }),
    de = ue.context.events;
  Z.useEffect(() => {
    let e = ({ open: e, eventDetails: t }) => le(e, t);
    return (
      de.on(`setOpen`, e),
      () => {
        de?.off(`setOpen`, e);
      }
    );
  }, [de, le]);
  let K = Z.useCallback(() => {
    D.setOpen(!1, q(ie));
  }, [D]);
  Z.useImperativeHandle(h, () => ({ unmount: ce, close: K }), [ce, K]);
  let pe;
  (B.type === `context-menu` && (pe = B.context),
    Z.useImperativeHandle(pe?.positionerRef, () => ee, [ee]),
    Z.useImperativeHandle(pe?.actionsRef, () => ({ setOpen: le }), [le]));
  let me = R(ue, {
      enabled: !L,
      bubbles: { escapeKey: _ && B.type === `menu` },
      outsidePress() {
        return B.type !== `context-menu` || H.current?.type === `contextmenu`
          ? !0
          : re.current;
      },
      externalTree: oe ? A : void 0,
    }),
    J = $t(),
    he = Z.useCallback(
      (e) => {
        D.select(`activeIndex`) !== e && D.set(`activeIndex`, e);
      },
      [D],
    ),
    ge = zr(ue, {
      enabled: !L,
      listRef: D.context.itemDomElements,
      activeIndex: V,
      nested: B.type !== void 0,
      loopFocus: p,
      orientation: m,
      parentOrientation: B.type === `menubar` ? B.context.orientation : void 0,
      rtl: J === `rtl`,
      disabledIndices: s,
      onNavigate: he,
      openOnArrowKeyDown: B.type !== `context-menu`,
      externalTree: oe ? A : void 0,
      focusItemOnHover: x,
    }),
    _e = Z.useCallback(
      (e) => {
        D.context.typingRef.current = e;
      },
      [D],
    ),
    ve = Br(ue, {
      listRef: D.context.itemLabels,
      elementsRef: D.context.itemDomElements,
      activeIndex: V,
      resetMs: 500,
      onMatch: (e) => {
        P && e !== V && D.set(`activeIndex`, e);
      },
      onTyping: _e,
    });
  Ve(D, {
    floatingRootContext: ue,
    activeTriggerProps: Z.useMemo(() => {
      let e = a(
        ve.reference,
        ge.reference,
        me.reference,
        {
          onMouseMove() {
            D.set(`allowMouseEnter`, !0);
          },
        },
        G,
      );
      return ((e[`aria-haspopup`] = `menu`), (e[`aria-expanded`] = P), e);
    }, [D, ve.reference, ge.reference, me.reference, G, P]),
    inactiveTriggerProps: Z.useMemo(() => {
      let e = a(ge.trigger, me.trigger, G);
      return ((e[`aria-haspopup`] = `menu`), (e[`aria-expanded`] = !1), e);
    }, [ge.trigger, me.trigger, G]),
    popupProps: Z.useMemo(
      () =>
        a(
          bt,
          {
            id: k,
            role: `menu`,
            "aria-labelledby": F?.id,
            onMouseMove() {
              (D.set(`allowMouseEnter`, !0),
                B.type === `menu` && D.set(`hoverEnabled`, !1));
            },
            onClick() {
              D.select(`hoverEnabled`) && D.set(`hoverEnabled`, !1);
            },
            onKeyDown(e) {
              let t = D.select(`keyboardEventRelay`);
              t && !e.isPropagationStopped() && t(e);
            },
          },
          ve.floating,
          ge.floating,
          me.floating,
        ),
      [F, k, B.type, D, ve.floating, ge.floating, me.floating],
    ),
    itemProps: ge.item ?? r,
  });
  let ye = Z.useMemo(() => ({ store: D, parent: E }), [D, E]),
    xe = (0, $.jsx)(li.Provider, {
      value: ye,
      children: typeof n == `function` ? n({ payload: te }) : n,
    });
  return B.type === void 0 || B.type === `context-menu`
    ? (0, $.jsx)(j, { externalTree: A, children: xe })
    : xe;
});
function ia(e) {
  let t = e.getBoundingClientRect(),
    n = ht(e),
    r = n.getComputedStyle(e, `::before`),
    i = n.getComputedStyle(e, `::after`);
  if (!(r.content !== `none` || i.content !== `none`)) return t;
  let a = parseFloat(r.width) || 0,
    o = parseFloat(r.height) || 0,
    s = parseFloat(i.width) || 0,
    c = parseFloat(i.height) || 0,
    l = Math.max(t.width, a, s),
    u = Math.max(t.height, o, c),
    d = l - t.width,
    f = u - t.height;
  return {
    left: t.left - d / 2,
    right: t.right + d / 2,
    top: t.top - f / 2,
    bottom: t.bottom + f / 2,
  };
}
function aa(e = {}) {
  let {
      highlightItemOnHover: t,
      highlightedIndex: n,
      onHighlightedIndexChange: r,
    } = zt(),
    { ref: i, index: a } = yi(e),
    o = n === a,
    s = Z.useRef(null),
    c = h(i, s);
  return {
    compositeProps: Z.useMemo(
      () => ({
        tabIndex: o ? 0 : -1,
        onFocus() {
          r(a);
        },
        onMouseMove() {
          let e = s.current;
          if (!t || !e) return;
          let n = e.hasAttribute(`disabled`) || e.ariaDisabled === `true`;
          !o && !n && e.focus();
        },
      }),
      [o, r, a, t],
    ),
    compositeRef: c,
    index: a,
  };
}
function oa(e) {
  let {
      render: t,
      className: i,
      style: a,
      state: o = r,
      props: c = s,
      refs: l = s,
      metadata: u,
      stateAttributesMapping: d,
      tag: f = `div`,
      ...p
    } = e,
    { compositeProps: m, compositeRef: h } = aa({ metadata: u });
  return n(f, e, {
    state: o,
    ref: [...l, h],
    props: [m, ...c, p],
    stateAttributesMapping: d,
  });
}
function sa(e) {
  if (K(e) && e.hasAttribute(`data-rootownerid`))
    return e.getAttribute(`data-rootownerid`) ?? void 0;
  if (!pe(e)) return sa(J(e));
}
function ca(e, t) {
  let n = Z.useRef(null);
  function r(t) {
    (an.flushSync(() => {
      e.setOpen(!1, q(te, t.nativeEvent, t.currentTarget));
    }),
      U(n.current)?.focus());
  }
  function i(n) {
    let r = e.select(`positionerElement`);
    if (r && ce(n, r)) e.context.beforeContentFocusGuardRef.current?.focus();
    else {
      an.flushSync(() => {
        e.setOpen(!1, q(te, n.nativeEvent, n.currentTarget));
      });
      let i = je(e.context.triggerFocusTargetRef.current || t.current);
      for (; i !== null && X(r, i); ) {
        let e = i;
        if (((i = De(i)), i === e)) break;
      }
      i?.focus();
    }
  }
  return {
    preFocusGuardRef: n,
    handlePreFocusGuardFocus: r,
    handleFocusTargetFocus: i,
  };
}
function la(e) {
  let { enabled: t = !0, mouseDownAction: n, open: i } = e,
    a = Z.useRef(!1);
  return Z.useMemo(
    () =>
      t
        ? {
            onMouseDown: (e) => {
              ((n === `open` && !i) || (n === `close` && i)) &&
                ((a.current = !0),
                Et(e.currentTarget).addEventListener(
                  `click`,
                  () => {
                    a.current = !1;
                  },
                  { once: !0 },
                ));
            },
            onClick: (e) => {
              a.current && ((a.current = !1), e.preventBaseUIHandler());
            },
          }
        : r,
    [t, n, i],
  );
}
var ua = 2,
  da = Ee(function (t, i) {
    let {
        render: s,
        className: c,
        style: l,
        disabled: u = !1,
        nativeButton: d = !0,
        id: f,
        openOnHover: p,
        delay: m = 100,
        closeDelay: h = 0,
        handle: _,
        payload: v,
        ...y
      } = t,
      b = ui(!0),
      x = _?.store ?? b?.store;
    if (!x) throw Error(o(85));
    let S = Ie(f),
      C = x.useState(`isTriggerActive`, S),
      w = x.useState(`floatingRootContext`),
      T = x.useState(`isOpenedByTrigger`, S),
      D = x.useState(`triggerPopupId`, S),
      O = Z.useRef(null),
      A = pa(),
      j = zt(!0),
      M = me(),
      N = Z.useMemo(() => M ?? new _e(), [M]),
      { registerTrigger: F, isMountedByThisTrigger: ee } = Wt(S, O, x, {
        payload: v,
        closeDelay: h,
        parent: A,
        floatingTreeRoot: N,
        floatingNodeId: mt(N),
        floatingParentNodeId: fe(),
        keyboardEventRelay: j?.relayKeyboardEvent,
      }),
      I = A.type === `menubar`,
      L = x.useState(`disabled`),
      R = u || L || (I && A.context.disabled),
      { getButtonProps: z, buttonRef: B } = E({ disabled: R, native: d });
    Z.useEffect(() => {
      !T &&
        A.type === void 0 &&
        (x.context.allowMouseUpTriggerRef.current = !1);
    }, [x, T, A.type]);
    let V = Z.useRef(null),
      te = e(),
      ne = g((e) => {
        if (!V.current) return;
        (te.clear(), (x.context.allowMouseUpTriggerRef.current = !1));
        let t = e.target;
        if (
          X(V.current, t) ||
          X(x.select(`positionerElement`), t) ||
          t === V.current ||
          (t != null && sa(t) === x.select(`rootId`))
        )
          return;
        let n = ia(V.current);
        (e.clientX >= n.left - ua &&
          e.clientX <= n.right + ua &&
          e.clientY >= n.top - ua &&
          e.clientY <= n.bottom + ua) ||
          N.events.emit(`close`, { domEvent: e, reason: k });
      });
    Z.useEffect(() => {
      T &&
        x.select(`lastOpenChangeReason`) === `trigger-hover` &&
        Et(V.current).addEventListener(`mouseup`, ne, { once: !0 });
    }, [T, ne, x]);
    let H = I && A.context.hasSubmenuOpen,
      re = Mr(w, {
        enabled:
          (p ?? H) && !R && A.type !== `context-menu` && (!I || (H && !ee)),
        handleClose: qr({ blockPointerEvents: !I }),
        mouseOnly: !0,
        move: !1,
        restMs: A.type === void 0 ? m : void 0,
        delay: { close: h },
        triggerElementRef: O,
        externalTree: N,
        isActiveTrigger: C,
        isClosing: () => x.select(`transitionStatus`) === `ending`,
      }),
      U = fa(T, x.select(`lastOpenChangeReason`)),
      W = dn(w, {
        enabled: !R && A.type !== `context-menu`,
        event: T && I ? `click` : `mousedown`,
        toggle: !0,
        ignoreMouse: !1,
        stickIfOpen: A.type === void 0 ? U : !1,
      }),
      ie = wr(w, { enabled: !R && H }),
      ae = la({ open: T, enabled: I, mouseDownAction: `open` }),
      oe = Z.useMemo(
        () => a(ie.reference, W.reference),
        [ie.reference, W.reference],
      ),
      se = x.useState(`triggerProps`, ee),
      {
        preFocusGuardRef: G,
        handlePreFocusGuardFocus: ce,
        handleFocusTargetFocus: le,
      } = ca(x, O),
      ue = { disabled: R, open: T },
      de = [V, i, B, F, O],
      K = [
        oe,
        re ?? r,
        se,
        {
          "aria-haspopup": `menu`,
          "aria-controls": D,
          id: S,
          onMouseDown: (e) => {
            x.select(`open`) ||
              (te.start(200, () => {
                x.context.allowMouseUpTriggerRef.current = !0;
              }),
              Et(e.currentTarget).addEventListener(`mouseup`, ne, {
                once: !0,
              }));
          },
        },
        I ? { role: `menuitem` } : {},
        ae,
        y,
        z,
      ],
      pe = n(`button`, t, {
        enabled: !I,
        stateAttributesMapping: We,
        state: ue,
        ref: de,
        props: K,
      });
    return I
      ? (0, $.jsx)(oa, {
          tag: `button`,
          render: s,
          className: c,
          style: l,
          state: ue,
          refs: de,
          props: K,
          stateAttributesMapping: We,
        })
      : T
        ? (0, $.jsxs)(Z.Fragment, {
            children: [
              (0, $.jsx)(P, { ref: G, onFocus: ce }, `${S}-pre-focus-guard`),
              (0, $.jsx)(Z.Fragment, { children: pe }, S),
              (0, $.jsx)(
                P,
                { ref: x.context.triggerFocusTargetRef, onFocus: le },
                `${S}-post-focus-guard`,
              ),
            ],
          })
        : (0, $.jsx)(Z.Fragment, { children: pe }, S);
  });
function fa(t, n) {
  let r = e(),
    [i, a] = Z.useState(!1);
  return (
    u(() => {
      t && n === `trigger-hover`
        ? (a(!0),
          r.start(500, () => {
            a(!1);
          }))
        : t || (r.clear(), a(!1));
    }, [t, n, r]),
    i
  );
}
function pa() {
  let e = fi(!0),
    t = ui(!0),
    n = Zi(!0);
  return Z.useMemo(
    () =>
      n
        ? { type: `menubar`, context: n }
        : e && !t
          ? { type: `context-menu`, context: e }
          : { type: void 0 },
    [e, t, n],
  );
}
function ma({ ...e }) {
  return (0, $.jsx)(ra, { "data-slot": `dropdown-menu`, ...e });
}
function ha({ ...e }) {
  return (0, $.jsx)(da, { "data-slot": `dropdown-menu-trigger`, ...e });
}
function ga({
  align: e = `start`,
  alignOffset: t = 0,
  side: n = `bottom`,
  sideOffset: r = 4,
  className: i,
  ...a
}) {
  return (0, $.jsx)(Mi, {
    children: (0, $.jsx)(Yi, {
      className: `isolate z-50 outline-none`,
      align: e,
      alignOffset: t,
      side: n,
      sideOffset: r,
      children: (0, $.jsx)(ki, {
        "data-slot": `dropdown-menu-content`,
        className: v(
          `data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 bg-popover text-popover-foreground min-w-32 rounded-lg p-1 shadow-md ring-1 duration-100 data-[side=inline-start]:slide-in-from-end-2 data-[side=inline-end]:slide-in-from-start-2 z-50 max-h-(--available-height) w-(--anchor-width) origin-(--transform-origin) overflow-x-hidden overflow-y-auto outline-none data-closed:overflow-hidden`,
          i,
        ),
        ...a,
      }),
    }),
  });
}
function _a({ ...e }) {
  return (0, $.jsx)(Si, { "data-slot": `dropdown-menu-group`, ...e });
}
function va({ className: e, inset: t, ...n }) {
  return (0, $.jsx)(Ci, {
    "data-slot": `dropdown-menu-label`,
    "data-inset": t,
    className: v(
      `text-muted-foreground px-1.5 py-1 text-xs font-medium data-[inset]:ps-8`,
      e,
    ),
    ...n,
  });
}
function ya({ className: e, inset: t, variant: n = `default`, ...r }) {
  return (0, $.jsx)(wi, {
    "data-slot": `dropdown-menu-item`,
    "data-inset": t,
    "data-variant": n,
    className: v(
      `focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:text-destructive not-data-[variant=destructive]:focus:**:text-accent-foreground gap-1.5 rounded-md px-1.5 py-1 text-sm [&_svg:not([class*='size-'])]:size-4 group/dropdown-menu-item relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-[inset]:ps-8 [&_svg]:pointer-events-none [&_svg]:shrink-0`,
      e,
    ),
    ...r,
  });
}
function ba({ className: e, ...t }) {
  return (0, $.jsx)(we, {
    "data-slot": `dropdown-menu-separator`,
    className: v(`bg-border -mx-1 my-1 h-px`, e),
    ...t,
  });
}
var xa = (e) =>
    ![`false`, `0`, `off`, `no`].includes((e ?? ``).trim().toLowerCase()),
  Sa = {
    oauthApps: xa(void 0),
    apiKeys: xa(void 0),
    members: xa(void 0),
    connectedAccounts: xa(void 0),
    deviceSessions: xa(void 0),
    profileEditing: xa(void 0),
    themeSwitcher: xa(void 0),
    languageSwitcher: xa(void 0),
  },
  Ca = [
    { value: `light`, label: `Light`, icon: ai },
    { value: `dark`, label: `Dark`, icon: ri },
    { value: `system`, label: `System`, icon: ni },
  ];
function wa() {
  let { t: e } = p(),
    { scheme: t, resolved: n, setScheme: r } = At(),
    i = n === `dark` ? ri : ai;
  return (0, $.jsxs)(ma, {
    children: [
      (0, $.jsx)(ha, {
        render: (0, $.jsx)(ee, {
          variant: `ghost`,
          size: `icon-sm`,
          "aria-label": e(`Change theme`),
        }),
        children: (0, $.jsx)(i, {}),
      }),
      (0, $.jsx)(ga, {
        align: `end`,
        className: `w-36`,
        children: Ca.map((n) =>
          (0, $.jsxs)(
            ya,
            {
              onClick: () => r(n.value),
              children: [
                (0, $.jsx)(n.icon, {}),
                e(n.label),
                t === n.value && (0, $.jsx)(Qr, { className: `ms-auto` }),
              ],
            },
            n.value,
          ),
        ),
      }),
    ],
  });
}
function Ta() {
  let { t: e } = p(),
    { language: t, changeLanguage: n } = xt();
  return (0, $.jsxs)(ma, {
    children: [
      (0, $.jsx)(ha, {
        render: (0, $.jsx)(ee, {
          variant: `ghost`,
          size: `icon-sm`,
          "aria-label": e(`Change language`),
        }),
        children: (0, $.jsx)(ti, {}),
      }),
      (0, $.jsx)(ga, {
        align: `end`,
        className: `w-36`,
        children: It.map((e) =>
          (0, $.jsxs)(
            ya,
            {
              onClick: () => n(e.code),
              children: [
                e.label,
                t.startsWith(e.code) &&
                  (0, $.jsx)(Qr, { className: `ms-auto` }),
              ],
            },
            e.code,
          ),
        ),
      }),
    ],
  });
}
function Ea() {
  return !Sa.languageSwitcher && !Sa.themeSwitcher
    ? null
    : (0, $.jsxs)(`div`, {
        className: `flex items-center gap-0.5`,
        children: [
          Sa.languageSwitcher && (0, $.jsx)(Ta, {}),
          Sa.themeSwitcher && (0, $.jsx)(wa, {}),
        ],
      });
}
function Da() {
  let { data: e, error: t, isLoading: n } = _(`auth-capabilities`, b),
    r = Z.useCallback((t) => !!e?.includes(t), [e]);
  return { isLoading: n, error: t ?? null, capabilities: e ?? null, has: r };
}
function Oa({
  title: e,
  heading: t,
  description: n,
  media: r,
  footer: i,
  children: a,
}) {
  let { t: o } = p(),
    { app: s, isLoading: c, error: l, appName: u } = x(),
    { isLoading: d } = Da(),
    f = c || d;
  return (0, $.jsxs)(`div`, {
    className: `grid min-h-svh w-full lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]`,
    children: [
      (0, $.jsx)(`title`, { children: f ? o(`Loading…`) : `${e} · ${u}` }),
      (0, $.jsxs)(`div`, {
        className: `relative isolate flex min-h-svh flex-col px-5 py-5 sm:px-10`,
        children: [
          (0, $.jsx)(`div`, {
            "aria-hidden": !0,
            className: `pointer-events-none absolute inset-x-0 top-0 -z-1 h-80 bg-[radial-gradient(60%_100%_at_50%_0%,color-mix(in_oklch,var(--primary)_16%,transparent),transparent)] lg:hidden`,
          }),
          (0, $.jsxs)(`header`, {
            className: `flex items-center justify-between gap-3`,
            children: [
              s?.homepageURL
                ? (0, $.jsx)(`a`, {
                    href: s.homepageURL,
                    className: `rounded-lg`,
                    children: (0, $.jsx)(rn, { showName: !0 }),
                  })
                : (0, $.jsx)(rn, { showName: !0 }),
              (0, $.jsx)(Ea, {}),
            ],
          }),
          (0, $.jsx)(`main`, {
            className: `flex flex-1 items-center justify-center py-10`,
            children: (0, $.jsx)(`div`, {
              className: `w-full max-w-[380px] animate-in fade-in slide-in-from-bottom-2 duration-500`,
              children: l
                ? (0, $.jsx)(Ma, { error: l })
                : f
                  ? (0, $.jsx)(Na, {})
                  : (0, $.jsxs)($.Fragment, {
                      children: [
                        r &&
                          (0, $.jsx)(`div`, { className: `mb-6`, children: r }),
                        (t || n) &&
                          (0, $.jsxs)(`div`, {
                            className: `mb-7 flex flex-col gap-1.5`,
                            children: [
                              t &&
                                (0, $.jsx)(`h1`, {
                                  className: `text-2xl font-semibold`,
                                  children: t,
                                }),
                              n &&
                                (0, $.jsx)(`p`, {
                                  className: `text-sm text-pretty text-muted-foreground`,
                                  children: n,
                                }),
                            ],
                          }),
                        a,
                        i &&
                          (0, $.jsx)(`div`, {
                            className: `mt-6 text-center text-sm text-muted-foreground`,
                            children: i,
                          }),
                      ],
                    }),
            }),
          }),
          (0, $.jsxs)(`footer`, {
            className: `flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-xs text-muted-foreground`,
            children: [(0, $.jsx)(ka, {}), (0, $.jsx)(oi, {})],
          }),
        ],
      }),
      (0, $.jsx)(`aside`, {
        className: `hidden p-3 lg:block`,
        children: (0, $.jsx)(Aa, {}),
      }),
    ],
  });
}
function ka({ className: e }) {
  let { t } = p(),
    { app: n, appName: r } = x(),
    i = new Date().getFullYear();
  return (0, $.jsxs)(`nav`, {
    className: v(`flex flex-wrap items-center gap-x-4 gap-y-1`, e),
    children: [
      (0, $.jsxs)(`span`, { children: [`© `, i, ` `, r] }),
      n?.termsURL &&
        (0, $.jsx)(`a`, {
          className: `hover:text-foreground`,
          href: n.termsURL,
          children: t(`Terms`),
        }),
      n?.privacyURL &&
        (0, $.jsx)(`a`, {
          className: `hover:text-foreground`,
          href: n.privacyURL,
          children: t(`Privacy`),
        }),
    ],
  });
}
function Aa() {
  let { t: e } = p(),
    { app: t, appName: n } = x(),
    { has: r } = Da(),
    i = n,
    a = [
      r(`passkey`) && { icon: $r, label: e(`Passkeys`) },
      r(`2fa`) && { icon: ii, label: e(`2-step verification`) },
      { icon: ei, label: e(`Single sign-on`) },
    ].filter(Boolean);
  return (0, $.jsxs)(`div`, {
    className: `relative isolate flex h-full flex-col justify-between overflow-hidden rounded-[28px] bg-primary p-10 text-primary-foreground`,
    children: [
      (0, $.jsx)(`div`, {
        "aria-hidden": !0,
        className: `absolute inset-0 -z-1 bg-[radial-gradient(80%_60%_at_100%_0%,color-mix(in_oklch,white_28%,transparent),transparent_60%),radial-gradient(70%_60%_at_0%_100%,color-mix(in_oklch,black_35%,transparent),transparent_70%)]`,
      }),
      (0, $.jsx)(`div`, {
        "aria-hidden": !0,
        className: `absolute inset-0 -z-1 bg-[radial-gradient(color-mix(in_oklch,white_22%,transparent)_1px,transparent_1px)] mask-[radial-gradient(70%_60%_at_70%_30%,black,transparent)] bg-size-[20px_20px]`,
      }),
      (0, $.jsx)(`div`, {
        "aria-hidden": !0,
        className: `absolute -end-24 top-1/3 -z-1 size-96 rounded-full border border-white/15`,
      }),
      (0, $.jsx)(`div`, {
        "aria-hidden": !0,
        className: `absolute -end-48 top-1/4 -z-1 size-[34rem] rounded-full border border-white/10`,
      }),
      (0, $.jsxs)(`span`, {
        className: `inline-flex w-fit items-center gap-2 rounded-full bg-white/12 px-3 py-1 text-xs font-medium ring-1 ring-white/20 backdrop-blur`,
        children: [
          (0, $.jsx)(ii, { className: `size-3.5` }),
          e(`Secure sign-in`),
        ],
      }),
      (0, $.jsx)(ja, { name: i }),
      (0, $.jsxs)(`div`, {
        className: `flex max-w-md flex-col gap-5`,
        children: [
          (0, $.jsx)(`h2`, {
            className: `text-4xl leading-[1.1] font-semibold text-balance`,
            children: e(`One account for everything {{name}}.`, { name: i }),
          }),
          t?.description &&
            (0, $.jsx)(`p`, {
              className: `text-base text-pretty opacity-80`,
              children: t.description,
            }),
          (0, $.jsx)(`ul`, {
            className: `flex flex-wrap gap-2`,
            children: a.map((e) =>
              (0, $.jsxs)(
                `li`,
                {
                  className: `inline-flex items-center gap-1.5 rounded-full bg-black/10 px-3 py-1.5 text-sm ring-1 ring-white/15`,
                  children: [
                    (0, $.jsx)(e.icon, { className: `size-4 opacity-90` }),
                    e.label,
                  ],
                },
                e.label,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
function ja({ name: e }) {
  let { t } = p();
  return (0, $.jsxs)(`div`, {
    "aria-hidden": !0,
    className: `mx-auto w-full max-w-xs rotate-[-4deg] rounded-2xl bg-white/14 p-4 shadow-2xl shadow-black/20 ring-1 ring-white/25 backdrop-blur-md transition-transform duration-700 hover:rotate-0`,
    children: [
      (0, $.jsxs)(`div`, {
        className: `flex items-center gap-3`,
        children: [
          (0, $.jsx)(`div`, {
            className: `flex size-10 items-center justify-center rounded-xl bg-white/20`,
            children: (0, $.jsx)($r, { className: `size-5` }),
          }),
          (0, $.jsxs)(`div`, {
            className: `flex flex-col`,
            children: [
              (0, $.jsx)(`span`, {
                className: `text-sm font-semibold`,
                children: t(`Verified`),
              }),
              (0, $.jsx)(`span`, {
                className: `text-xs opacity-75`,
                children: t(`Signed in to {{name}}`, { name: e }),
              }),
            ],
          }),
          (0, $.jsx)(`span`, {
            className: `ms-auto flex size-6 items-center justify-center rounded-full bg-white text-primary`,
            children: (0, $.jsx)(ii, { className: `size-3.5` }),
          }),
        ],
      }),
      (0, $.jsxs)(`div`, {
        className: `mt-4 flex flex-col gap-2`,
        children: [
          (0, $.jsx)(`span`, {
            className: `h-2 w-4/5 rounded-full bg-white/25`,
          }),
          (0, $.jsx)(`span`, {
            className: `h-2 w-3/5 rounded-full bg-white/15`,
          }),
        ],
      }),
    ],
  });
}
function Ma({ error: e }) {
  let { t } = p();
  return (0, $.jsxs)(`div`, {
    className: `flex flex-col items-center gap-4 rounded-2xl border bg-card p-8 text-center shadow-xs/5`,
    children: [
      (0, $.jsx)(`div`, {
        className: `flex size-11 items-center justify-center rounded-xl bg-destructive/10 text-destructive`,
        children: (0, $.jsx)(Je, { className: `size-5` }),
      }),
      (0, $.jsxs)(`div`, {
        className: `flex flex-col gap-1`,
        children: [
          (0, $.jsx)(`h1`, {
            className: `font-semibold`,
            children: t(`We can't reach the server`),
          }),
          (0, $.jsx)(`p`, {
            className: `text-sm break-words text-muted-foreground`,
            children: e.message,
          }),
        ],
      }),
      (0, $.jsxs)(ee, {
        variant: `outline`,
        onClick: () => window.location.reload(),
        children: [(0, $.jsx)(Nt, {}), t(`Try again`)],
      }),
    ],
  });
}
function Na() {
  return (0, $.jsxs)(`div`, {
    className: `flex flex-col gap-6`,
    children: [
      (0, $.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [
          (0, $.jsx)(tn, { className: `h-7 w-44` }),
          (0, $.jsx)(tn, { className: `h-4 w-64` }),
        ],
      }),
      (0, $.jsx)(tn, { className: `h-10 w-full` }),
      (0, $.jsx)(tn, { className: `h-10 w-full` }),
      (0, $.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [
          (0, $.jsx)(tn, { className: `h-4 w-16` }),
          (0, $.jsx)(tn, { className: `h-10 w-full` }),
        ],
      }),
      (0, $.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [
          (0, $.jsx)(tn, { className: `h-4 w-20` }),
          (0, $.jsx)(tn, { className: `h-10 w-full` }),
        ],
      }),
      (0, $.jsx)(tn, { className: `h-10 w-full` }),
    ],
  });
}
export {
  Br as A,
  oi as C,
  Qr as D,
  $r as E,
  xr as M,
  Qn as N,
  Zr as O,
  dn as P,
  yi as S,
  ei as T,
  Hi as _,
  Sa as a,
  Ei as b,
  _a as c,
  ba as d,
  ha as f,
  Ki as g,
  Ji as h,
  Ea as i,
  zr as j,
  Yr as k,
  ya as l,
  ia as m,
  ka as n,
  ma as o,
  oa as p,
  Da as r,
  ga as s,
  Oa as t,
  va as u,
  Bi as v,
  ii as w,
  vi as x,
  Di as y,
};
