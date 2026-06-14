import React from "react";

const defaultScheme = ["dark", "light", "system"] as const;

export type TScheme = typeof defaultScheme[number];

export function useColorScheme(scheme?: TScheme | null) {
  let resolvedScheme =
    (scheme ?? localStorage.getItem("theme") ?? "system") as TScheme;

  if (!defaultScheme.includes(resolvedScheme)) resolvedScheme = "system";

  const Scheme = React.useMemo(() => {
    const systemScheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
      ? "dark"
      : "light";
    const selectedScheme = resolvedScheme === "system"
      ? systemScheme
      : resolvedScheme;

    const root = window.document.documentElement;

    root.classList.remove("light", "dark");
    root.classList.add(selectedScheme);

    return selectedScheme;
  }, [resolvedScheme]);

  return { scheme: Scheme };
}
