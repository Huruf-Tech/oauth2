import { CircleAlertIcon, RefreshCcw } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Outlet, useLocation, useSearchParams } from "react-router";
import HurufLogo from "@/assets/huruf-logo.png";
import {
	Alert,
	AlertAction,
	AlertDescription,
	AlertTitle,
} from "./components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { Button } from "./components/ui/button";
import { Skeleton } from "./components/ui/skeleton";
import { type TScheme, useColorScheme } from "./hooks/useColorScheme";
import { useFavicon } from "./hooks/useFavicon";
import { useLanguage } from "./hooks/useLanguage";
import { useOauthApp } from "./hooks/useOauthApp";
import { applyThemeVars } from "./lib/utils";

function App() {
	const { t } = useTranslation();
	const Location = useLocation();
	const [searchParams] = useSearchParams();
	const { isLoading, app, error } = useOauthApp();

	const appName = app?.name ?? "Huruf Tech";
	const logo = app?.logo ?? HurufLogo;

	useFavicon(app?.logo);
	useColorScheme(searchParams.get("theme") as TScheme);
	useLanguage(searchParams.get("lng"));

	React.useEffect(() => {
		if (app?.theme) applyThemeVars(app.theme);
	}, [app]);

	return (
		<div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10 bg-linear-to-t from-primary/10 to-transparent to-30% h-full">
			<title>
				{isLoading
					? "Loading OAuth"
					: error?.message
						? "OAuth Crashed"
						: `${app?.name} | ${Location.pathname}`}
			</title>
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
				{error ? (
					<Alert variant="error" className="py-1 px-2">
						<CircleAlertIcon className="fill-destructive stroke-background" />
						<AlertTitle className="text-destructive text-sm">
							{error?.name}
						</AlertTitle>
						<AlertDescription className="text-destructive text-xs">
							{error?.message}
						</AlertDescription>
						<AlertAction>
							<Button
								size="icon-xs"
								variant={"outline"}
								onClick={() => window.location.reload()}
							>
								<RefreshCcw />
							</Button>
						</AlertAction>
					</Alert>
				) : null}

				<Outlet />
			</div>

			<div className="flex flex-col items-center justify-center">
				<p className="dark:text-white text-xs">{t("Powered by")}</p>
				<img src={HurufLogo} className="w-14" alt="Huruf tech" />
			</div>
		</div>
	);
}
export default App;
