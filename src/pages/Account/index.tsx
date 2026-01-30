import { Navigate, Outlet } from "react-router";
import { authClient } from "@/lib/auth";

function Account() {
	const { data, isPending } = authClient.useSession();
	if (!data && !isPending) return <Navigate to="/login" />;

	return (
		<>
			<Outlet />
		</>
	);
}
export default Account;
