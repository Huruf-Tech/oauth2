export const apiOrigin =
	import.meta.env.VITE_API_ORIGIN ?? window.location.origin;

export type TOauthApp = {
	name: string;
	description?: string;
	logo?: string;
	homepageURL?: string;
	theme?: Record<string, string>;
};

export const getOauthApp = async (appId?: string): Promise<TOauthApp> => {
	const url = new URL(`/oauthApps/api/${appId || ""}`, apiOrigin);

	const res = await fetch(url, {
		method: "get",
	});

	const data = (await res.json()) as { apps: Array<TOauthApp> };

	return data.apps[0];
};

export const getAuthCapabilities = async (): Promise<string[]> => {
	const url = new URL(`/auth/api/capabilities`, apiOrigin);

	const res = await fetch(url, {
		method: "get",
	});

	const data = (await res.json()) as { capabilities: string[] };

	return data.capabilities;
};
