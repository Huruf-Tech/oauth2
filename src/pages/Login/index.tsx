import { KeyIcon } from "lucide-react";
import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { Link, Navigate, useNavigate } from "react-router";
import FormCrash from "@/components/FormCrash";
import FormWrapper from "@/components/FormWrapper";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Field,
	FieldDescription,
	FieldGroup,
	FieldSeparator,
} from "@/components/ui/field";
import { useCapabilities } from "@/hooks/useCapabilities";
import { useOauthApp } from "@/hooks/useOauthApp";
import { authClient } from "@/lib/auth";
import { authProviders } from "@/lib/providers";
import { cn } from "@/lib/utils";
import CredentialsForm from "./Credentials";
import MagicLinkForm from "./MagicLink";

function Login() {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const { error } = useOauthApp();

	const { capabilities } = useCapabilities();

	const [showMagicLink, setShowMagicLink] = React.useState(false);

	const magicLink = React.useMemo(
		() => capabilities?.includes("magicLink"),
		[capabilities],
	);

	const passkey = React.useMemo(
		() => capabilities?.includes("magicLink"),
		[capabilities],
	);

	React.useEffect(() => {
		if (magicLink) setShowMagicLink(true);
	}, [magicLink]);

	const { data, isPending } = authClient.useSession();
	if (data && !isPending) return <Navigate to="/" />;

	return (
		<FormWrapper title={t("Login")}>
			<div className={cn("flex flex-col gap-5")}>
				<Card className="relative">
					<FormCrash error={error} />

					<CardHeader className="text-center">
						<CardTitle className="text-xl">{t("Welcome back")}</CardTitle>
						<CardDescription>
							{t("Login securely with your desired option")}
						</CardDescription>
					</CardHeader>
					<CardContent>
						<FieldGroup className="pb-2">
							<Field>
								<div className="flex gap-3 flex-wrap">
									{Object.entries(authProviders).map(
										([key, { icon, label, invert }]) =>
											capabilities?.includes(key) ? (
												<Button
													variant="outline"
													type="button"
													key={key}
													className={"grow"}
													onClick={async () => {
														const Response = await authClient.signIn.social({
															provider: key,
															callbackURL: window.location.href,
														});

														if (Response.error === null) navigate("/");
													}}
												>
													<img
														src={icon}
														className={cn(invert && "dark:invert")}
														alt={label}
													/>
													{t("Sign in with {{provider}}", { provider: label })}
												</Button>
											) : null,
									)}
								</div>
							</Field>

							<FieldSeparator>{t("Or continue with")}</FieldSeparator>

							<Field>
								{showMagicLink ? <MagicLinkForm /> : <CredentialsForm />}

								{magicLink && (
									<Button
										type="button"
										variant={"outline"}
										onClick={() => setShowMagicLink(!showMagicLink)}
									>
										{t(
											showMagicLink
												? "Sign-in with Credentials"
												: "Sign-in with Magic Link",
										)}
									</Button>
								)}
							</Field>
						</FieldGroup>
						<Field>
							{passkey && (
								<Button
									variant={"secondary"}
									onClick={async () => await authClient.signIn.passkey()}
								>
									<KeyIcon />
									{t("Sign-in with Passkey")}
								</Button>
							)}
							<FieldDescription className="text-center">
								<Trans i18nKey={"noAccount"}>
									Don't have an account? <Link to="/signup">Sign up</Link>
								</Trans>
							</FieldDescription>
						</Field>
					</CardContent>
				</Card>
				<FieldDescription className="px-6 text-center">
					<Trans i18nKey={"agreement"}>
						By clicking continue, you agree to our{" "}
						<a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
					</Trans>
				</FieldDescription>
			</div>
		</FormWrapper>
	);
}

export default Login;
