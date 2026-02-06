import { Navigate, Outlet } from "react-router";
import { authClient } from "@/lib/auth";
import { shouldRedirect } from "@/lib/utils";

function Account() {
	const { data, isPending } = authClient.useSession();

	if (!data && !isPending)
		return <Navigate to={"/login" + window.location.search} />;

	if (!shouldRedirect()) return <Outlet />;
}
export default Account;
