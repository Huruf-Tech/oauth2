import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

type ThemeVars = Record<`--${string}`, string>;

export function applyThemeVars(vars: ThemeVars) {
	const root = document.documentElement;
	for (const [k, v] of Object.entries(vars)) {
		root.style.setProperty(k, v);
	}
}
