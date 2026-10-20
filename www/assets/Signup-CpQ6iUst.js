import {
  St as e,
  W as t,
  _ as n,
  at as r,
  ct as i,
  h as a,
  t as o,
  wt as s,
} from "./useAppBranding-Ccx5799K.js";
import { r as c, t as l } from "./AuthLayout-BojYykZe.js";
import { t as u } from "./PasswordInput-CDmL9NSC.js";
import { t as d } from "./mail-check-CoRjbsgd.js";
import { n as f, t as p } from "./PasswordStrength-DkHf8DYV.js";
import {
  C as m,
  D as h,
  Hr as g,
  S as _,
  l as v,
  o as y,
  w as b,
  x,
  y as S,
} from "./index-BcavIC1s.js";
import { t as C } from "./auth-B5T-3LCZ.js";
import { n as w, t as T } from "./navigation-Dd1cx1bO.js";
import { r as E } from "./index.esm-CU_oB_nc.js";
import { a as D, n as O, t as k } from "./SocialButtons-EaCn0YSx.js";
import { t as A } from "./useOnLogin-BKWNOQuI.js";
var j = s(e(), 1),
  M = t();
function N() {
  let { t: e } = r(),
    { appName: t } = o(),
    { has: s, isLoading: D } = c(),
    N = O(),
    F = A(),
    [I, L] = j.useState(),
    {
      register: R,
      handleSubmit: z,
      formState: B,
      watch: V,
    } = E({
      defaultValues: {
        fname: ``,
        lname: ``,
        email: ``,
        password: ``,
        confirmPassword: ``,
      },
    }),
    H = V(`password`),
    U = async (e) => {
      let { data: t, error: r } = await C.signUp.email({
        name: [e.fname, e.lname]
          .map((e) => e.trim())
          .filter(Boolean)
          .join(` `),
        email: e.email,
        password: e.password,
        callbackURL: n(w(`/account`, { omit: T })),
      });
      if (r) {
        g.error(r.message);
        return;
      }
      t?.token ? F() : L(e.email);
    },
    W = (0, M.jsxs)(M.Fragment, {
      children: [
        e(`Already have an account?`),
        ` `,
        (0, M.jsx)(i, {
          to: w(`/login`, { omit: T }),
          viewTransition: !0,
          className: `font-medium text-foreground underline-offset-4 hover:underline`,
          children: e(`Sign in`),
        }),
      ],
    });
  return I
    ? (0, M.jsx)(l, {
        title: e(`Verify your email`),
        footer: W,
        children: (0, M.jsxs)(`div`, {
          className: `flex flex-col items-center gap-4 text-center`,
          children: [
            (0, M.jsx)(`div`, {
              className: `flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary`,
              children: (0, M.jsx)(d, { className: `size-6` }),
            }),
            (0, M.jsxs)(`div`, {
              className: `flex flex-col gap-1.5`,
              children: [
                (0, M.jsx)(`h1`, {
                  className: `text-2xl font-semibold`,
                  children: e(`Check your inbox`),
                }),
                (0, M.jsx)(`p`, {
                  className: `text-sm text-muted-foreground`,
                  children: e(
                    `We sent a verification link to {{email}}. Open it to activate your account.`,
                    { email: I },
                  ),
                }),
              ],
            }),
            (0, M.jsx)(P, { email: I }),
          ],
        }),
      })
    : !D && !s(`signup`)
      ? (0, M.jsx)(l, {
          title: e(`Sign up`),
          heading: e(`Sign up is disabled`),
          description: e(
            `New accounts can't be created for {{name}} right now. Ask an administrator for an invitation.`,
            { name: t },
          ),
          footer: W,
          children: null,
        })
      : (0, M.jsx)(l, {
          title: e(`Create account`),
          heading: e(`Create your account`),
          description: e(`Get started with {{name}} in less than a minute.`, {
            name: t,
          }),
          footer: W,
          children: (0, M.jsxs)(`div`, {
            className: `flex flex-col gap-5`,
            children: [
              (0, M.jsx)(k, { mode: `signup` }),
              N.length > 0 &&
                s(`email`) &&
                (0, M.jsx)(b, { children: e(`or`) }),
              s(`email`) &&
                (0, M.jsx)(`form`, {
                  onSubmit: z(U),
                  noValidate: !0,
                  children: (0, M.jsxs)(_, {
                    className: `gap-5`,
                    children: [
                      (0, M.jsxs)(`div`, {
                        className: `grid grid-cols-2 gap-3`,
                        children: [
                          (0, M.jsxs)(S, {
                            children: [
                              (0, M.jsx)(m, {
                                htmlFor: `fname`,
                                children: e(`First name`),
                              }),
                              (0, M.jsx)(v, {
                                id: `fname`,
                                autoComplete: `given-name`,
                                placeholder: `Jane`,
                                "aria-invalid": !!B.errors.fname || void 0,
                                ...R(`fname`, {
                                  validate: (t) =>
                                    !!t.trim() || e(`First name is required!`),
                                }),
                              }),
                              (0, M.jsx)(x, {
                                children: B.errors.fname?.message,
                              }),
                            ],
                          }),
                          (0, M.jsxs)(S, {
                            children: [
                              (0, M.jsx)(m, {
                                htmlFor: `lname`,
                                children: e(`Last name`),
                              }),
                              (0, M.jsx)(v, {
                                id: `lname`,
                                autoComplete: `family-name`,
                                placeholder: `Doe`,
                                ...R(`lname`),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, M.jsxs)(S, {
                        children: [
                          (0, M.jsx)(m, {
                            htmlFor: `email`,
                            children: e(`Email`),
                          }),
                          (0, M.jsx)(v, {
                            id: `email`,
                            type: `email`,
                            autoComplete: `email`,
                            placeholder: `you@example.com`,
                            "aria-invalid": !!B.errors.email || void 0,
                            ...R(`email`, {
                              validate: (t) =>
                                a(t) || e(`Please provide a valid email!`),
                            }),
                          }),
                          (0, M.jsx)(x, { children: B.errors.email?.message }),
                        ],
                      }),
                      (0, M.jsxs)(S, {
                        children: [
                          (0, M.jsx)(m, {
                            htmlFor: `password`,
                            children: e(`Password`),
                          }),
                          (0, M.jsx)(u, {
                            id: `password`,
                            autoComplete: `new-password`,
                            "aria-invalid": !!B.errors.password || void 0,
                            ...R(`password`, { validate: f(e) }),
                          }),
                          (0, M.jsx)(x, {
                            children: B.errors.password?.message,
                          }),
                          (0, M.jsx)(p, { password: H }),
                        ],
                      }),
                      (0, M.jsxs)(S, {
                        children: [
                          (0, M.jsx)(m, {
                            htmlFor: `confirmPassword`,
                            children: e(`Confirm password`),
                          }),
                          (0, M.jsx)(u, {
                            id: `confirmPassword`,
                            autoComplete: `new-password`,
                            "aria-invalid":
                              !!B.errors.confirmPassword || void 0,
                            ...R(`confirmPassword`, {
                              validate: (t) =>
                                t === H || e(`Passwords don't match`),
                            }),
                          }),
                          (0, M.jsx)(x, {
                            children: B.errors.confirmPassword?.message,
                          }),
                        ],
                      }),
                      (0, M.jsxs)(h, {
                        type: `submit`,
                        size: `lg`,
                        disabled: B.isSubmitting,
                        children: [
                          B.isSubmitting && (0, M.jsx)(y, {}),
                          e(`Create account`),
                        ],
                      }),
                    ],
                  }),
                }),
            ],
          }),
        });
}
function P({ email: e }) {
  let { t } = r(),
    { state: n, resend: i } = D();
  return (0, M.jsxs)(h, {
    variant: `outline`,
    onClick: () => i(e),
    disabled: n !== `idle`,
    children: [
      n === `sending` && (0, M.jsx)(y, {}),
      t(n === `sent` ? `Email sent` : `Resend email`),
    ],
  });
}
export { N as default };
