import { Navigate, Outlet, useSearchParams } from "react-router";
import { authClient } from "@/lib/auth";

function Account() {
	const { data, isPending } = authClient.useSession();
	const [searchParams] = useSearchParams();

	if (!data && !isPending)
		return <Navigate to={"/login" + window.location.search} />;

	const redirect_uri = searchParams.get("redirect_uri");

	if (redirect_uri) {
		return <Navigate to={redirect_uri} />;
	}

	return <Outlet />;
}
export default Account;
