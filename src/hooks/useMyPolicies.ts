import React from "react";
import { ThunderSDK } from "thunder-sdk";
import { useSearchParams } from "react-router";

type TMyPolicies = Awaited<typeof ThunderSDK.accessControlPolicies.myPolicies>;
let policies: ReturnType<TMyPolicies>;

export function useMyPolicies() {
  const [searchParams] = useSearchParams();

  const tenant = searchParams.get("tenant");

  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<Error | null>(null);
  const [myPolicies, setMyPolicies] = React.useState<
    Awaited<
      typeof policies
    > | null
  >(null);

  React.useEffect(() => {
    setIsLoading(true);
    setError(null);

    policies ??= ThunderSDK.accessControlPolicies.myPolicies({
      axiosConfig: {
        headers: {
          "X-TENANT-ID": tenant,
        },
      },
    });

    void (async () => {
      const response = await policies
        .catch((error) => {
          setError(error);
        })
        .finally(() => setIsLoading(false));

      if (response) setMyPolicies(response);
    })();
  }, [tenant]);

  return {
    isLoading,
    error,
    myPolicies,
  };
}
