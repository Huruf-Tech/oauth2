import {
  St as e,
  W as t,
  _ as n,
  at as r,
  p as i,
  wt as a,
  yt as o,
} from "./useAppBranding-Ccx5799K.js";
import { o as s } from "./index-BcavIC1s.js";
import { t as c } from "./BrandLogo-ovqYMF5i.js";
import { t as l } from "./auth-B5T-3LCZ.js";
var u = a(e(), 1),
  d = t();
function f() {
  let { t: e } = r(),
    [t] = o(),
    a = t.get(`redirect`);
  return (
    u.useEffect(() => {
      (async () => {
        try {
          await l.signOut();
        } catch {}
        window.location.replace(i(a) ?? n(`/login`));
      })();
    }, [a]),
    (0, d.jsxs)(`div`, {
      className: `flex min-h-svh flex-col items-center justify-center gap-5`,
      children: [
        (0, d.jsx)(`title`, { children: e(`Signing out…`) }),
        (0, d.jsx)(c, { className: `size-12 rounded-2xl` }),
        (0, d.jsxs)(`div`, {
          className: `flex items-center gap-2 text-sm text-muted-foreground`,
          children: [(0, d.jsx)(s, {}), e(`Signing you out…`)],
        }),
      ],
    })
  );
}
export { f as default };
