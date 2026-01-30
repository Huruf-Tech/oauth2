import React from "react";
import { Outlet, useSearchParams } from "react-router";
import { Toaster } from "sonner";
import { type TScheme, useColorScheme } from "./hooks/useColorScheme";
import { useFavicon } from "./hooks/useFavicon";
import { useLanguage } from "./hooks/useLanguage";
import { useOauthApp } from "./hooks/useOauthApp";
import { applyThemeVars } from "./lib/utils";

function App() {
	const [searchParams] = useSearchParams();
	const { app } = useOauthApp();

	useFavicon(app?.logo);
	const { scheme } = useColorScheme(searchParams.get("theme") as TScheme);
	useLanguage(searchParams.get("lng"));

	React.useEffect(() => {
		if (app?.theme) applyThemeVars(app.theme);
	}, [app]);

	return (
		<div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10 bg-linear-to-t from-primary/10 to-transparent to-40% h-full">
			<Outlet />

			<Toaster
				theme={scheme}
				position="top-center"
				toastOptions={{
					className: "!items-start !gap-3 !rounded-4xl !p-3",
					classNames: {
						icon: "[&>svg]:!size-6 [&>svg]:mt-3",
						title: "!text-lg",
						description: "!text-sm !text-muted-foreground",
						actionButton: "!p-4 !h-6 !rounded-full capitalize",
					},
				}}
			/>
		</div>
	);
}
export default App;
