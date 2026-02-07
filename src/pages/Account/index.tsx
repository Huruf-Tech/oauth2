import { Navigate, Outlet } from "react-router";
import { authClient } from "@/lib/auth";

function Account() {
	const { data, isPending } = authClient.useSession();

	if (data && !isPending) {
		if (new URLSearchParams(window.location.search).has("client_id")) {
			// eslint-disable-next-line react-hooks/immutability
			window.location.href =
				new URL(
					"/auth/api/oauth2/authorize",
					import.meta.env.VITE_API_ORIGIN,
				).toString() + window.location.search;

			return;
		}

		return <Navigate to={"/" + window.location.search} />;
	} else if (!data && !isPending)
		return <Navigate to={"/login" + window.location.search} />;

	return <Outlet />;
}

export default Account;
