import React from "react";
import { useTranslation } from "react-i18next";
import HurufLogo from "@/assets/huruf-logo.png";
import { useCapabilities } from "@/hooks/useCapabilities";
import { useOauthApp } from "@/hooks/useOauthApp";
import FormSkeleton from "./LoadingSkeleton";
import PoweredBy from "./PoweredBy";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Skeleton } from "./ui/skeleton";

function FormWrapper({
	children,
	title,
}: {
	children: React.ReactNode;
	title: string;
}) {
	const { t } = useTranslation();
	const { isLoading, app, error } = useOauthApp();
	const { isLoading: capLoading } = useCapabilities();

	const appName = app?.name ?? "Huruf Tech";
	const logo = app?.logo ?? HurufLogo;

	const loading = isLoading || capLoading;

	return (
		<div className="flex w-full max-w-sm flex-col gap-3">
			<title>
				{loading
					? t("Loading OAuth")
					: error?.message
						? t("OAuth Crashed")
						: `${title} - ${app?.name}`}
			</title>

			<div className="flex items-center gap-3 self-center">
				<Avatar className="rounded-xl size-16 bg-transparent">
					{loading ? (
						<Skeleton className="w-16 h-16" />
					) : (
						<a href={app?.homepageURL}>
							<AvatarImage src={logo} alt={appName} />
							<AvatarFallback>
								<AvatarImage src={HurufLogo} alt={"Huruf tech"} />
							</AvatarFallback>
						</a>
					)}
				</Avatar>
			</div>

			{loading ? <FormSkeleton /> : children}

			<PoweredBy />
		</div>
	);
}

export default FormWrapper;
