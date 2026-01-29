import { KeyIcon } from "lucide-react";
import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router";
import FormCrash from "@/components/FormCrash";
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
import { useOauthApp } from "@/hooks/useOauthApp";
import { authClient } from "@/lib/auth";
import { authProviders } from "@/lib/providers";
import { cn } from "@/lib/utils";
import CredentialsForm from "./LoginForms/Credentials";

function Login() {
	const { t } = useTranslation();

	const { app, isLoading, error } = useOauthApp();

	return (
		<React.Fragment>
			<title>
				{isLoading
					? "Loading OAuth"
					: error?.message
						? "OAuth Crashed"
						: `Login - ${app?.name}`}
			</title>
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
										([key, { icon, label, invert }]) => (
											<Button
												variant="outline"
												type="button"
												key={key}
												className={"grow"}
												onClick={async () => {
													const Response = await authClient.signIn.social({
														provider: key,
													});
													console.log(Response);
												}}
											>
												<img
													src={icon}
													className={cn(invert && "dark:invert")}
													alt={label}
												/>
												{t("Sign in with {{provider}}", { provider: label })}
											</Button>
										),
									)}
								</div>
							</Field>

							<FieldSeparator>{t("Or continue with")}</FieldSeparator>

							<CredentialsForm />
							{/* <MagicLinkForm /> */}
						</FieldGroup>
						<Field>
							<Button variant={"secondary"}>
								<KeyIcon />
								{t("Sign-in with Passkey")}
							</Button>
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
		</React.Fragment>
	);
}

export default Login;
