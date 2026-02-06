import Item from "@/components/Item";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useOauthApp } from "@/hooks/useOauthApp";
import { authClient } from "@/lib/auth";
import {
	AsteriskSquareIcon,
	BrickWallShieldIcon,
	CheckCircle2,
	KeyIcon,
} from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import useSWR from "swr";

function Security() {
	const { t } = useTranslation();

	const { app } = useOauthApp();

	//   const { data, isLoading } = useSWR(
	//     "oauth2Clients",
	//     () =>
	//       new Promise((resolve, reject) => {
	//         authClient.passkey
	//           .listUserPasskeys()
	//           .then(({ data, error }) => {
	//             if (error) reject(error);

	//             resolve(data);
	//           })
	//           .catch(reject);
	//       }),
	//   );

	const { data, isLoading, mutate } = useSWR("oauthPasskeyList", () =>
		authClient.passkey.listUserPasskeys(),
	);

	const SecurityMethods = React.useMemo(
		() => [
			{
				icon: BrickWallShieldIcon,
				label: "2-step verification",
				value: "2step",
				orientation: "vertical",
				content: (
					<Badge
						className={
							"bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-500"
						}
					>
						<CheckCircle2 className="fill-green-500 stroke-background" />
						{t("On since Nov 23, 2021")}
					</Badge>
				),
			},
			{
				icon: KeyIcon,
				label: "Passkeys & security keys",
				value: "passkey",
				content: isLoading ? (
					<Skeleton className="w-30 h-5" />
				) : (
					t(data?.data?.length ? "{{count}} passkeys" : "No passkey setup", {
						count: data?.data?.length ?? 0,
					})
				),
				right: () => {
					return (
						<Button
							onClick={async () => {
								try {
									const passkeyName = app?.name ?? "no name";
									const { data: passkeyData, error } =
										await authClient.passkey.addPasskey({
											name: passkeyName,
											authenticatorAttachment: "cross-platform",
										});

									if (!error) {
										const { error } =
											await authClient.passkey.verifyRegistration({
												name: passkeyName,
												response: passkeyData,
											});

										if (error) throw error;

										mutate();
									} else throw error;
								} catch (error) {
									toast.error((error as Error).message);
								}
							}}
						>
							{t("Setup")}
						</Button>
					);
				},
			},
			{
				icon: AsteriskSquareIcon,
				label: "Password",
				value: "changePassword",
				content: t("Last changed {{date}}", {
					date: "Sept 13, 2023",
				}),
			},
		],
		[t, data, isLoading, app, mutate],
	);

	return (
		<div className="flex flex-col gap-5 items-start w-full h-full px-3 max-w-lg mx-auto">
			<div className="flex flex-col gap-2">
				<h3 className="text-xl font-medium">{t("Security & sign-in")}</h3>
				<p className="text-sm text-muted-foreground">
					{t("Add an extra layer of security on your account")}
				</p>
			</div>

			{/* list */}
			<div className="flex flex-col gap-1 grow w-full">
				{SecurityMethods.map((item, index) => (
					<Item key={index}>
						<div className="flex items-center gap-3">
							<item.icon />
							<div className="flex flex-col">
								<h3 className="font-medium">{t(item.label)}</h3>
								{typeof item.content === "string" ? (
									<p className="text-sm text-muted-foreground">
										{item.content}
									</p>
								) : (
									item.content
								)}
							</div>
						</div>

						{item.right?.()}
					</Item>
				))}
			</div>
		</div>
	);
}
export default Security;
