import Item from "@/components/Item";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth";
import { getInitials } from "@/lib/utils";
import {
	FlagIcon,
	GlobeIcon,
	MonitorSmartphoneIcon,
	SmartphoneIcon,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import useSWR from "swr";

function OAuth() {
	const { t } = useTranslation();

	const { data } = useSWR("oauth2Clients", () =>
		authClient.oauth2.getClients(),
	);

	return (
		<div className="flex flex-col gap-5 items-start w-full h-full px-3 max-w-lg mx-auto">
			<div className="flex items-center justify-between gap-3 w-full">
				<div className="flex flex-col gap-2">
					<h3 className="text-xl font-medium">{t("OAuth2")}</h3>
					<p className="text-sm text-muted-foreground">
						{t("Manage your oauth2 clients")}
					</p>
				</div>

				<Button
					variant={"secondary"}
					onClick={async () => {
						const { data, error } = await authClient.oauth2.createClient({
							type: "web",
							client_name: "test client",
							redirect_uris: ["https://google.com"],
							token_endpoint_auth_method: "none",
						});

						console.log(data, error);
					}}
				>
					{t("Create client")}
				</Button>
			</div>

			<div className="flex flex-col gap-1 w-full">
				{data?.data
					?.map((v) => ({
						logo: (
							<div className="relative">
								<Avatar className="size-14 border">
									<AvatarImage src={v.logo_uri} alt={v.client_name} />
									<AvatarFallback className="text-xl">
										{getInitials(v.client_name)}
									</AvatarFallback>
								</Avatar>

								<span className="absolute -bottom-1 -right-1 flex items-center justify-center size-7 rounded-full p-1 bg-background">
									{v.type === "native" ? (
										<SmartphoneIcon />
									) : v.type === "web" ? (
										<GlobeIcon />
									) : (
										<MonitorSmartphoneIcon />
									)}
								</span>
							</div>
						),
						label: v.client_name ?? "N/A",
						value: `*******${v.client_id?.slice(-10)}`,
						right: () => (
							<div className="flex items-center gap-3">
								<FlagIcon className="size-4 fill-muted-foreground stroke-muted-foreground" />
							</div>
						),
					}))
					.map((item, index) => (
						<Item key={index}>
							<div className="flex items-center gap-3">
								{item.logo}
								<div className="flex flex-col">
									<h3 className="capitalize font-medium">{t(item.label)}</h3>
									{item.value ? (
										<p className="text-sm text-muted-foreground">
											{item.value}
										</p>
									) : null}
								</div>
							</div>

							{item.right?.()}
						</Item>
					))}
			</div>
		</div>
	);
}
export default OAuth;
