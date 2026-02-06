import { passkeyClient } from "@better-auth/passkey/client";
import { adminClient, magicLinkClient } from "better-auth/client/plugins";
import { oauthProviderClient } from "@better-auth/oauth-provider/client";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
	baseURL: import.meta.env.VITE_API_ORIGIN ?? window.location.origin,
	basePath: "/auth/api",
	plugins: [
		passkeyClient(),
		magicLinkClient(),
		adminClient(),
		oauthProviderClient(),
	],
});
