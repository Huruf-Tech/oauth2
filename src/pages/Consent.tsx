import FormCrash from "@/components/FormCrash";
import FormWrapper from "@/components/FormWrapper";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Field, FieldDescription } from "@/components/ui/field";
import { authClient } from "@/lib/auth";
import { cn } from "@/lib/utils";
import { Trans, useTranslation } from "react-i18next";
import { Link, useSearchParams } from "react-router";
import { toast } from "sonner";
import useSWR from "swr";

function Consent() {
	const { t } = useTranslation();
	const [searchParams] = useSearchParams();

	//   const navigate = useNavigate();

	const clientId = searchParams.get("client_id");

	const { data, error } = useSWR("oauth2Client", () =>
		authClient.oauth2.getClient({ query: { client_id: clientId ?? "" } }),
	);

	async function consentAction(action: boolean) {
		const { data, error } = await authClient.oauth2.consent({ accept: action });

		if (error) {
			toast.error(error.message);
			return;
		}

		if (data.redirect) window.location.href = data.uri;
	}

	return (
		<FormWrapper title={t("Authorize access")}>
			<div className={cn("flex flex-col gap-5")}>
				<Card className="relative">
					<FormCrash error={error} />

					<CardHeader>
						<CardTitle className="text-xl">
							{t("Authorize {{app_name}}", {
								app_name: data?.data?.client_name,
							})}
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="font-medium">
							{t("Third-party is requesting access to:")}
						</p>
						<ul className="px-5 py-2 list-disc indent-1">
							{[
								"Your email address, phone number",
								"Your name and avatar",
								"Your organization list and roles",
							].map((access, index) => (
								<li key={index} className="py-1 text-muted-foreground">
									{access}
								</li>
							))}
						</ul>

						<Field orientation={"horizontal"} className="grow w-full">
							<Button
								variant={"outline"}
								className={"grow"}
								onClick={() => consentAction(false)}
							>
								{t("Cancel")}
							</Button>
							<Button className={"grow"} onClick={() => consentAction(true)}>
								{t("Authorize")}
							</Button>
						</Field>
					</CardContent>
					<CardFooter>
						<FieldDescription className="text-center text-xs">
							<Trans i18nKey={"agreement"}>
								By authorize the access, you also agree with our third-party
								apps{" "}
								<a href="#" className="text-primary">
									Terms of Service
								</a>{" "}
								and{" "}
								<a href="#" className="text-primary">
									Privacy Policy
								</a>
								.
							</Trans>
						</FieldDescription>
					</CardFooter>
				</Card>

				<FieldDescription className="px-6 text-center">
					<Trans i18nKey={"useAnotherAccount"}>
						Not you?{" "}
						<Link to="/login" className="text-primary no-underline!">
							Use another account
						</Link>
					</Trans>
				</FieldDescription>
			</div>
		</FormWrapper>
	);
}
export default Consent;
