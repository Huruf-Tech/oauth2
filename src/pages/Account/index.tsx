import { Navigate, Outlet } from "react-router";
import { authClient } from "@/lib/auth";

function Account() {
	const { data, isPending } = authClient.useSession();

	console.log(import.meta.env.BASE_URL);
	if (!data && !isPending) return <Navigate to="/login" />;

	return <Outlet />;
}
export default Account;
