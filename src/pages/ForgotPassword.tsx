import { type SubmitHandler, useForm } from "react-hook-form";
import { Trans, useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
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
	FieldError,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { authClient } from "@/lib/auth";
import { isValidEmail } from "@/lib/utils";

const DefaultForm = {
	email: "",
};

function ForgotPassword() {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const { register, handleSubmit, formState } = useForm<typeof DefaultForm>({
		defaultValues: DefaultForm,
	});

	const onSubmit: SubmitHandler<typeof DefaultForm> = async (data) => {
		const Response = await authClient.requestPasswordReset({
			email: data.email,
		});

		if (Response.error === null) navigate("/");
		else toast.error(Response.error.message);
	};

	return (
		<FormWrapper title={t("Forgot password")}>
			<Card>
				<CardHeader className="text-center">
					<CardTitle className="text-xl">{t("Forgot password")}</CardTitle>
					<CardDescription>
						{t("Enter your information below to submit the request")}
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit(onSubmit)}>
						<FieldGroup>
							<Field>
								<FieldLabel htmlFor="email">{t("Email")}</FieldLabel>
								<Input
									id="email"
									type="email"
									placeholder="m@example.com"
									{...register("email", {
										validate: (value) =>
											isValidEmail(value)
												? true
												: t("Please provide a valid email!"),
									})}
								/>
								<FieldDescription>
									{t("We'll use this email to recover your account.")}
								</FieldDescription>

								<FieldError>{formState.errors.email?.message}</FieldError>
							</Field>

							<FieldGroup>
								<Field>
									<Button type="submit">
										{formState.isSubmitting && <Spinner />}
										{t("Submit request")}
									</Button>
									<FieldDescription className="px-6 text-center">
										<Trans i18nKey={"goBackToSignIn"}>
											Go back to <Link to="/">Sign in</Link>
										</Trans>
									</FieldDescription>
								</Field>
							</FieldGroup>
						</FieldGroup>
					</form>
				</CardContent>
			</Card>
		</FormWrapper>
	);
}

export default ForgotPassword;
