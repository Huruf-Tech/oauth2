import {
  St as e,
  W as t,
  _t as n,
  at as r,
  ct as i,
  it as a,
  lt as o,
  t as s,
  wt as c,
} from "./useAppBranding-Ccx5799K.js";
import { r as l, t as u } from "./AuthLayout-BojYykZe.js";
import { t as d } from "./StatusMessage-EPzb-x4r.js";
import { Br as f, D as p, o as m } from "./index-BcavIC1s.js";
import { t as h } from "./auth-B5T-3LCZ.js";
var g = c(e(), 1),
  _ = t();
function v() {
  let { t: e } = r(),
    { _id: t } = n(),
    { app: c, appName: v } = s(),
    { has: y } = l(),
    { data: b, isPending: x } = h.useSession(),
    [S, C] = g.useState({ status: `joining` }),
    w = g.useRef(!1);
  if (
    (g.useEffect(() => {
      !b ||
        !t ||
        w.current ||
        ((w.current = !0),
        a.tenantMembers
          .create({ body: { invite: t }, axiosConfig: { silent: !0 } })
          .then(() => C({ status: `joined` }))
          .catch((e) => C({ status: `failed`, message: f(e) })));
    }, [b, t]),
    !x && !b)
  ) {
    let e = encodeURIComponent(window.location.pathname);
    return (0, _.jsx)(o, {
      to: `${y(`signup`) ? `/signup` : `/login`}?redirect=${e}`,
      replace: !0,
    });
  }
  return (0, _.jsx)(u, {
    title: e(`Join workspace`),
    children:
      S.status === `joining`
        ? (0, _.jsxs)(`div`, {
            className: `flex flex-col items-center gap-3 py-6 text-center`,
            children: [
              (0, _.jsx)(m, { className: `size-6` }),
              (0, _.jsx)(`p`, {
                className: `text-sm text-muted-foreground`,
                children: e(`Accepting your invitation…`),
              }),
            ],
          })
        : S.status === `joined`
          ? (0, _.jsx)(d, {
              tone: `success`,
              title: e(`You're in!`),
              description: e(`You've joined the workspace on {{name}}.`, {
                name: v,
              }),
              action: (0, _.jsx)(p, {
                size: `lg`,
                render: (0, _.jsx)(i, { to: `/account`, replace: !0 }),
                children: e(`Go to your account`),
              }),
            })
          : (0, _.jsx)(d, {
              tone: `error`,
              title: e(`We couldn't add you`),
              description: e(
                `This invitation may have expired, been revoked, or been sent to a different email address.`,
              ),
              action: (0, _.jsxs)(`div`, {
                className: `flex flex-col gap-2`,
                children: [
                  (0, _.jsx)(`p`, {
                    className: `text-xs text-muted-foreground`,
                    children: S.message,
                  }),
                  (0, _.jsx)(p, {
                    size: `lg`,
                    variant: `outline`,
                    render: (0, _.jsx)(i, { to: `/account`, replace: !0 }),
                    children: e(`Go to your account`),
                  }),
                  c?.supportEmail &&
                    (0, _.jsx)(p, {
                      size: `lg`,
                      variant: `ghost`,
                      render: (0, _.jsx)(`a`, {
                        href: `mailto:${c.supportEmail}`,
                      }),
                      children: e(`Contact support`),
                    }),
                ],
              }),
            }),
  });
}
export { v as default };
