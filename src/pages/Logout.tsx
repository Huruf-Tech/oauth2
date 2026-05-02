import React from "react";
import { authClient } from "@/lib/auth";
import { useSearchParams } from "react-router";
import { useLoading } from "@/contexts/Loading";
import PoweredBy from "@/components/PoweredBy";

function Logout() {
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get("redirect");

  const { setLoading } = useLoading();

  React.useEffect(() => {
    setLoading(true);

    void (async () => {
      try {
        await authClient.signOut();
      } catch {
        // Ignore errors
      }
      window.location.href = redirect || import.meta.env.BASE_URL || "/";
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full h-dvh flex justify-center items-center">
      <div>
        <p>Logging out..</p>
        <br />
        <PoweredBy />
      </div>
    </div>
  );
}

export default Logout;
