import {
  St as e,
  W as t,
  _ as n,
  at as r,
  ct as i,
  h as a,
  lt as o,
  r as s,
  t as c,
  wt as l,
  yt as u,
} from "./useAppBranding-Ccx5799K.js";
import { E as d, T as f, r as p, t as m } from "./AuthLayout-BojYykZe.js";
import {
  a as h,
  i as g,
  n as _,
  o as v,
  r as y,
  t as b,
} from "./OtpInput-9oRoZBwq.js";
import {
  a as x,
  i as S,
  n as C,
  r as w,
  t as T,
} from "./PasswordInput-CDmL9NSC.js";
import { t as E } from "./mail-check-CoRjbsgd.js";
import { t as D } from "./mail-Hy99jpg2.js";
import {
  C as O,
  D as k,
  E as A,
  Hr as j,
  S as M,
  b as N,
  l as P,
  o as F,
  w as I,
  x as L,
  y as R,
} from "./index-BcavIC1s.js";
import { t as z } from "./auth-B5T-3LCZ.js";
import { n as B, t as V } from "./navigation-Dd1cx1bO.js";
import { r as H, t as U } from "./index.esm-CU_oB_nc.js";
import { a as W, n as G, t as K } from "./SocialButtons-EaCn0YSx.js";
import { t as q } from "./useOnLogin-BKWNOQuI.js";
var J = s(`clipboard-paste`, [
    [`path`, { d: `M11 14h10`, key: `1w8e9d` }],
    [`path`, { d: `M16 4h2a2 2 0 0 1 2 2v1.344`, key: `1e62lh` }],
    [`path`, { d: `m17 18 4-4-4-4`, key: `z2g111` }],
    [
      `path`,
      {
        d: `M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113`,
        key: `bjbb7m`,
      },
    ],
    [
      `rect`,
      { x: `8`, y: `2`, width: `8`, height: `4`, rx: `1`, key: `ublpy` },
    ],
  ]),
  Y = l(e(), 1),
  X = t();
function Z({ onTwoFactor: e }) {
  let { t } = r(),
    n = q(),
    [o] = u(),
    [s, c] = Y.useState(),
    {
      control: l,
      register: d,
      handleSubmit: f,
      formState: p,
    } = H({
      defaultValues: {
        email: o.get(`email`) ?? ``,
        password: ``,
        rememberMe: !0,
      },
    });
  return (0, X.jsx)(`form`, {
    onSubmit: f(async (r) => {
      c(void 0);
      let { data: i, error: a } = await z.signIn.email(r);
      if (a) {
        a.status === 403
          ? c(r.email)
          : j.error(a.message ?? t(`Invalid email or password`));
        return;
      }
      i.twoFactorRedirect ? e() : n();
    }),
    noValidate: !0,
    children: (0, X.jsxs)(M, {
      className: `gap-5`,
      children: [
        s && (0, X.jsx)(Q, { email: s }),
        (0, X.jsxs)(R, {
          children: [
            (0, X.jsx)(O, { htmlFor: `email`, children: t(`Email`) }),
            (0, X.jsx)(P, {
              id: `email`,
              type: `email`,
              placeholder: `you@example.com`,
              autoComplete: `username webauthn`,
              "aria-invalid": !!p.errors.email || void 0,
              ...d(`email`, {
                validate: (e) => a(e) || t(`Please provide a valid email!`),
              }),
            }),
            (0, X.jsx)(L, { children: p.errors.email?.message }),
          ],
        }),
        (0, X.jsxs)(R, {
          children: [
            (0, X.jsxs)(`div`, {
              className: `flex items-center justify-between`,
              children: [
                (0, X.jsx)(O, { htmlFor: `password`, children: t(`Password`) }),
                (0, X.jsx)(i, {
                  to: B(`/reset-password`, { omit: V }),
                  viewTransition: !0,
                  className: `text-sm text-muted-foreground hover:text-foreground`,
                  children: t(`Forgot password?`),
                }),
              ],
            }),
            (0, X.jsx)(T, {
              id: `password`,
              autoComplete: `current-password webauthn`,
              "aria-invalid": !!p.errors.password || void 0,
              ...d(`password`, { required: t(`Password is required!`) }),
            }),
            (0, X.jsx)(L, { children: p.errors.password?.message }),
          ],
        }),
        (0, X.jsx)(U, {
          name: `rememberMe`,
          control: l,
          render: ({ field: e }) =>
            (0, X.jsxs)(R, {
              orientation: `horizontal`,
              children: [
                (0, X.jsx)(_, {
                  id: `rememberMe`,
                  checked: e.value,
                  onCheckedChange: e.onChange,
                }),
                (0, X.jsx)(A, {
                  htmlFor: `rememberMe`,
                  className: `font-normal`,
                  children: t(`Keep me signed in`),
                }),
              ],
            }),
        }),
        (0, X.jsxs)(k, {
          type: `submit`,
          size: `lg`,
          disabled: p.isSubmitting,
          children: [p.isSubmitting && (0, X.jsx)(F, {}), t(`Sign in`)],
        }),
      ],
    }),
  });
}
function Q({ email: e }) {
  let { t } = r(),
    { state: n, resend: i } = W();
  return (0, X.jsxs)(y, {
    variant: `warning`,
    children: [
      (0, X.jsx)(v, {}),
      (0, X.jsx)(h, { children: t(`Verify your email to continue`) }),
      (0, X.jsxs)(g, {
        children: [
          n === `sent`
            ? t(`We sent a new verification link to {{email}}.`, { email: e })
            : t(`Check your inbox for the verification link.`),
          n !== `sent` &&
            (0, X.jsxs)(k, {
              variant: `link`,
              size: `sm`,
              className: `h-auto p-0 text-foreground`,
              onClick: () => i(e),
              disabled: n === `sending`,
              children: [
                n === `sending` && (0, X.jsx)(F, {}),
                t(`Resend verification email`),
              ],
            }),
        ],
      }),
    ],
  });
}
function $() {
  let { t: e } = r(),
    [t] = u(),
    [i, o] = Y.useState(),
    {
      register: s,
      handleSubmit: c,
      formState: l,
    } = H({ defaultValues: { email: t.get(`email`) ?? `` } });
  return i
    ? (0, X.jsxs)(`div`, {
        className: `flex flex-col items-center gap-4 rounded-xl border bg-card p-6 text-center animate-in fade-in zoom-in-95`,
        children: [
          (0, X.jsx)(`div`, {
            className: `flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary`,
            children: (0, X.jsx)(E, { className: `size-5` }),
          }),
          (0, X.jsxs)(`div`, {
            className: `flex flex-col gap-1`,
            children: [
              (0, X.jsx)(`h2`, {
                className: `font-semibold`,
                children: e(`Check your inbox`),
              }),
              (0, X.jsx)(`p`, {
                className: `text-sm text-muted-foreground`,
                children: e(
                  `We sent a sign-in link to {{email}}. It expires shortly.`,
                  { email: i },
                ),
              }),
            ],
          }),
          (0, X.jsx)(k, {
            variant: `ghost`,
            size: `sm`,
            onClick: () => o(void 0),
            children: e(`Use a different email`),
          }),
        ],
      })
    : (0, X.jsx)(`form`, {
        onSubmit: c(async ({ email: e }) => {
          let { error: t } = await z.signIn.magicLink({
            email: e,
            callbackURL: n(B(`/account`, { omit: V })),
            errorCallbackURL: n(B(`/login`, { omit: V })),
          });
          t ? j.error(t.message) : o(e);
        }),
        noValidate: !0,
        children: (0, X.jsxs)(M, {
          className: `gap-5`,
          children: [
            (0, X.jsxs)(R, {
              children: [
                (0, X.jsx)(O, { htmlFor: `magic-email`, children: e(`Email`) }),
                (0, X.jsx)(P, {
                  id: `magic-email`,
                  type: `email`,
                  placeholder: `you@example.com`,
                  autoComplete: `email`,
                  "aria-invalid": !!l.errors.email || void 0,
                  ...s(`email`, {
                    validate: (t) => a(t) || e(`Please provide a valid email!`),
                  }),
                }),
                (0, X.jsx)(L, { children: l.errors.email?.message }),
              ],
            }),
            (0, X.jsxs)(k, {
              type: `submit`,
              size: `lg`,
              disabled: l.isSubmitting,
              children: [
                l.isSubmitting && (0, X.jsx)(F, {}),
                e(`Email me a sign-in link`),
              ],
            }),
          ],
        }),
      });
}
function ee({ onCancel: e }) {
  let { t } = r(),
    [n, i] = Y.useState(!1);
  return (0, X.jsxs)(`div`, {
    className: `flex flex-col gap-5`,
    children: [
      n ? (0, X.jsx)(ne, {}) : (0, X.jsx)(te, {}),
      (0, X.jsxs)(`div`, {
        className: `flex items-center justify-between gap-3 border-t pt-4`,
        children: [
          (0, X.jsx)(k, {
            variant: `link`,
            size: `sm`,
            className: `px-0`,
            onClick: e,
            children: t(`Back to sign in`),
          }),
          (0, X.jsx)(k, {
            variant: `link`,
            size: `sm`,
            className: `px-0`,
            onClick: () => i((e) => !e),
            children: t(n ? `Use authenticator app` : `Use a backup code`),
          }),
        ],
      }),
    ],
  });
}
function te() {
  let { t: e } = r(),
    t = q(),
    [n, i] = Y.useState(``),
    [a, o] = Y.useState(!1),
    [s, c] = Y.useState(!1),
    [l, u] = Y.useState(!1),
    d = async (n) => {
      if (n.length !== 6 || s) return;
      c(!0);
      let { error: r } = await z.twoFactor.verifyTotp({
        code: n,
        trustDevice: a,
      });
      if ((c(!1), r)) {
        (u(!0), i(``), j.error(r.message ?? e(`Invalid code`)));
        return;
      }
      t();
    };
  return (0, X.jsx)(`form`, {
    onSubmit: (e) => {
      (e.preventDefault(), d(n));
    },
    children: (0, X.jsxs)(M, {
      className: `gap-5`,
      children: [
        (0, X.jsx)(b, {
          value: n,
          invalid: l,
          disabled: s,
          onChange: (e) => {
            (u(!1), i(e));
          },
          onComplete: d,
        }),
        (0, X.jsxs)(R, {
          orientation: `horizontal`,
          className: `justify-center`,
          children: [
            (0, X.jsx)(_, {
              id: `trustDevice`,
              checked: a,
              onCheckedChange: o,
            }),
            (0, X.jsx)(A, {
              htmlFor: `trustDevice`,
              className: `font-normal`,
              children: e(`Trust this device for 30 days`),
            }),
          ],
        }),
        (0, X.jsxs)(k, {
          type: `submit`,
          size: `lg`,
          disabled: s || n.length !== 6,
          children: [s && (0, X.jsx)(F, {}), e(`Verify`)],
        }),
      ],
    }),
  });
}
function ne() {
  let { t: e } = r(),
    t = q(),
    {
      register: n,
      handleSubmit: i,
      setValue: a,
      formState: o,
    } = H({ defaultValues: { code: `` } });
  return (0, X.jsx)(`form`, {
    onSubmit: i(async ({ code: n }) => {
      let { error: r } = await z.twoFactor.verifyBackupCode({
        code: n.trim(),
        disableSession: !1,
      });
      if (r) {
        j.error(r.message ?? e(`Invalid backup code`));
        return;
      }
      t();
    }),
    noValidate: !0,
    children: (0, X.jsxs)(M, {
      className: `gap-5`,
      children: [
        (0, X.jsxs)(R, {
          children: [
            (0, X.jsx)(O, {
              htmlFor: `backup-code`,
              children: e(`Backup code`),
            }),
            (0, X.jsxs)(C, {
              children: [
                (0, X.jsx)(x, {
                  id: `backup-code`,
                  autoComplete: `off`,
                  autoFocus: !0,
                  placeholder: `XXXXX-XXXXX`,
                  className: `font-mono`,
                  "aria-invalid": !!o.errors.code || void 0,
                  ...n(`code`, { required: e(`Backup code is required!`) }),
                }),
                (0, X.jsx)(w, {
                  align: `inline-end`,
                  children: (0, X.jsxs)(S, {
                    "aria-label": e(`Paste`),
                    onClick: async () => {
                      try {
                        a(
                          `code`,
                          (await navigator.clipboard.readText()).trim(),
                          { shouldValidate: !0 },
                        );
                      } catch {
                        j.error(e(`Clipboard access was denied`));
                      }
                    },
                    children: [(0, X.jsx)(J, {}), e(`Paste`)],
                  }),
                }),
              ],
            }),
            (0, X.jsx)(L, { children: o.errors.code?.message }),
            (0, X.jsx)(N, {
              children: e(`Each backup code can only be used once.`),
            }),
          ],
        }),
        (0, X.jsxs)(k, {
          type: `submit`,
          size: `lg`,
          disabled: o.isSubmitting,
          children: [o.isSubmitting && (0, X.jsx)(F, {}), e(`Verify`)],
        }),
      ],
    }),
  });
}
var re = new Set([`AUTH_CANCELLED`, `ERROR_CEREMONY_ABORTED`]);
function ie() {
  let { t: e } = r(),
    { appName: t } = c(),
    { has: n, isLoading: a } = p(),
    [s] = u(),
    { data: l, isPending: d } = z.useSession(),
    h = G(),
    g = n(`email`),
    _ = n(`magicLink`),
    [v, y] = Y.useState(`password`),
    b = v === `password` && !g && _ ? `magicLink` : v,
    x = s.get(`error`);
  if (
    (Y.useEffect(() => {
      x &&
        j.error(e(`Sign in failed`), {
          description: x.replaceAll(`_`, ` `).toLowerCase(),
        });
    }, [x, e]),
    !d && l && !s.has(`addAccount`))
  )
    return (0, X.jsx)(o, { to: B(`/account`, { omit: V }), replace: !0 });
  if (b === `twoFactor`)
    return (0, X.jsx)(m, {
      title: e(`Two-step verification`),
      heading: e(`Two-step verification`),
      description: e(
        `Enter the 6-digit code from your authenticator app to finish signing in.`,
      ),
      children: (0, X.jsx)(ee, { onCancel: () => y(`password`) }),
    });
  let S = g || _;
  return (0, X.jsx)(m, {
    title: e(`Sign in`),
    heading: s.has(`addAccount`) ? e(`Add another account`) : e(`Welcome back`),
    description: e(`Sign in to continue to {{name}}`, { name: t }),
    footer:
      n(`signup`) &&
      (0, X.jsxs)(X.Fragment, {
        children: [
          e(`Don't have an account?`),
          ` `,
          (0, X.jsx)(i, {
            to: B(`/signup`, { omit: V }),
            viewTransition: !0,
            className: `font-medium text-foreground underline-offset-4 hover:underline`,
            children: e(`Create one`),
          }),
        ],
      }),
    children: (0, X.jsxs)(`div`, {
      className: `flex flex-col gap-5`,
      children: [
        (0, X.jsx)(K, {}),
        n(`passkey`) && (0, X.jsx)(ae, {}),
        S &&
          (h.length > 0 || n(`passkey`)) &&
          (0, X.jsx)(I, { children: e(`or`) }),
        b === `magicLink`
          ? (0, X.jsx)($, {})
          : g
            ? (0, X.jsx)(Z, { onTwoFactor: () => y(`twoFactor`) })
            : null,
        g &&
          _ &&
          (0, X.jsxs)(k, {
            variant: `ghost`,
            className: `text-muted-foreground`,
            onClick: () => y(b === `magicLink` ? `password` : `magicLink`),
            children: [
              b === `magicLink` ? (0, X.jsx)(f, {}) : (0, X.jsx)(D, {}),
              e(
                b === `magicLink`
                  ? `Sign in with password instead`
                  : `Email me a sign-in link instead`,
              ),
            ],
          }),
        !a &&
          !S &&
          h.length === 0 &&
          !n(`passkey`) &&
          (0, X.jsx)(`p`, {
            className: `rounded-xl border border-dashed p-6 text-center text-sm text-muted-foreground`,
            children: e(`No sign-in methods are enabled for this app.`),
          }),
        (0, X.jsx)(oe, {}),
      ],
    }),
  });
}
function ae() {
  let { t: e } = r(),
    t = q(),
    [n, i] = Y.useState(!1);
  return (
    Y.useEffect(() => {
      let e = !1;
      return (
        (async () => {
          if (
            !(await window.PublicKeyCredential?.isConditionalMediationAvailable?.()) ||
            e
          )
            return;
          let { error: n } = await z.signIn.passkey({ autoFill: !0 });
          !n && !e && t();
        })().catch(() => {}),
        () => {
          e = !0;
        }
      );
    }, [t]),
    (0, X.jsxs)(k, {
      variant: `outline`,
      size: `lg`,
      onClick: async () => {
        i(!0);
        let { error: e } = await z.signIn.passkey();
        if ((i(!1), e)) {
          re.has(e.code ?? ``) || j.error(e.message);
          return;
        }
        t();
      },
      disabled: n,
      children: [
        n ? (0, X.jsx)(F, {}) : (0, X.jsx)(d, {}),
        e(`Sign in with a passkey`),
      ],
    })
  );
}
function oe() {
  let { t: e } = r(),
    { app: t } = c();
  if (!t?.termsURL && !t?.privacyURL) return null;
  let n = (e, t) =>
    (0, X.jsx)(`a`, {
      href: e,
      target: `_blank`,
      rel: `noreferrer`,
      className: `text-foreground underline underline-offset-4`,
      children: t,
    });
  return (0, X.jsxs)(`p`, {
    className: `text-center text-xs text-balance text-muted-foreground`,
    children: [
      e(`By continuing, you agree to the`),
      ` `,
      t.termsURL && n(t.termsURL, e(`Terms of Service`)),
      t.termsURL &&
        t.privacyURL &&
        (0, X.jsxs)(X.Fragment, { children: [` `, e(`and`), ` `] }),
      t.privacyURL && n(t.privacyURL, e(`Privacy Policy`)),
      `.`,
    ],
  });
}
export { ie as default };
