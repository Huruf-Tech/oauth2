import React from "react";
import { useTranslation } from "react-i18next";
import { Outlet, useSearchParams } from "react-router";
import HurufLogo from "@/assets/huruf-logo.png";
import FormSkeleton from "./components/LoadingSkeleton";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { Skeleton } from "./components/ui/skeleton";
import { type TScheme, useColorScheme } from "./hooks/useColorScheme";
import { useFavicon } from "./hooks/useFavicon";
import { useLanguage } from "./hooks/useLanguage";
import { useOauthApp } from "./hooks/useOauthApp";
import { applyThemeVars } from "./lib/utils";

function App() {
	const { t } = useTranslation();
	const [searchParams] = useSearchParams();
	const { isLoading, app } = useOauthApp();

	const appName = app?.name ?? "Huruf Tech";
	const logo = app?.logo ?? HurufLogo;

	useFavicon(app?.logo);
	useColorScheme(searchParams.get("theme") as TScheme);
	useLanguage(searchParams.get("lng"));

	React.useEffect(() => {
		if (app?.theme) applyThemeVars(app.theme);
	}, [app]);

	return (
		<div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10 bg-linear-to-t from-primary/10 to-transparent to-40% h-full">
			<div className="flex w-full max-w-sm flex-col gap-3">
				<div className="flex items-center gap-3 self-center">
					<Avatar className="rounded-xl size-16 bg-transparent">
						{isLoading ? (
							<Skeleton className="w-16 h-16" />
						) : (
							<a href={app?.homepageURL}>
								<AvatarImage src={logo} alt={appName} />
								<AvatarFallback>
									<AvatarImage src={HurufLogo} alt={"Huruf tech"} />
								</AvatarFallback>
							</a>
						)}
					</Avatar>
				</div>

				{isLoading ? <FormSkeleton /> : <Outlet />}
			</div>

			<div className="flex flex-col items-center justify-center">
				<p className="dark:text-white text-xs">{t("Powered by")}</p>
				<img src={HurufLogo} className="w-14" alt="Huruf tech" />
			</div>
		</div>
	);
}
export default App;
