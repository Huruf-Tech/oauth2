import React from "react";
import { getOauthApp, type TOauthApp } from "@/lib/api";
import { useSearchParams } from "react-router";

let oauthAppPromise: Promise<TOauthApp>;

export function useOauthApp() {
	const [isLoading, setIsLoading] = React.useState(false);
	const [error, setError] = React.useState<Error | null>(null);
	const [app, setApp] = React.useState<TOauthApp | null>(null);

	const [searchParams] = useSearchParams();

	const appId = searchParams.get("appId");

	React.useEffect(() => {
		setIsLoading(true);
		setError(null);

		oauthAppPromise ??= getOauthApp(appId ?? import.meta.env.VITE_OAUTH_APP_ID);

		void (async () => {
			const app = await oauthAppPromise
				.catch((error) => {
					setError(error);
				})
				.finally(() => setIsLoading(false));

			if (!app) setError(new Error("Oauth app not configured!"));
			else setApp(app);
		})();
	}, [appId]);

	return {
		isLoading,
		error,
		app,
	};
}
