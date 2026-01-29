import React from "react";
import { getOauthApp, type TOauthApp } from "@/lib/api";

let oauthAppPromise: Promise<TOauthApp>;

export function useOauthApp() {
	const [isLoading, setIsLoading] = React.useState(false);
	const [error, setError] = React.useState<Error | null>(null);
	const [app, setApp] = React.useState<TOauthApp | null>(null);

	React.useEffect(() => {
		setIsLoading(true);
		setError(null);

		oauthAppPromise ??= getOauthApp(import.meta.env.VITE_OAUTH_APP_ID);

		void (async () => {
			const app = await oauthAppPromise
				.catch((error) => {
					setError(error);
				})
				.finally(() => setIsLoading(false));

			if (app) setApp(app);
		})();
	}, []);

	return {
		isLoading,
		error,
		app,
	};
}
