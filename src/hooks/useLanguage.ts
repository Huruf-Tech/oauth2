import i18n from "i18next";
import React from "react";

export function useLanguage(lng?: string | null) {
	const language = lng ?? "en";
	const HTMLElement = document.querySelector("html");

	const currentLanguage = React.useMemo(() => {
		HTMLElement?.setAttribute(
			"dir",
			["en", "fr", "de", "es", "it", "pl"].includes(language) ? "ltr" : "rtl",
		);

		if (language === i18n.language) return;

		void i18n.changeLanguage(language);
	}, [language, HTMLElement]);

	return currentLanguage;
}
