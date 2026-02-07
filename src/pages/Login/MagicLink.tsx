import { type SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
	Field,
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

function MagicLinkForm() {
	const { t } = useTranslation();

	const { register, handleSubmit, formState, reset } = useForm<
		typeof DefaultForm
	>({
		defaultValues: DefaultForm,
	});

	const onSubmit: SubmitHandler<typeof DefaultForm> = async (data) => {
		const Response = await authClient.signIn.magicLink({
			email: data.email,
			//   callbackURL:
			//     new URL(import.meta.env.BASE_URL, window.location.origin).toString() +
			//     `${window.location.search}`,
			callbackURL: import.meta.env.BASE_URL + "account",
		});

		if (Response.error) toast.error(Response.error.message);
		else {
			reset({ email: "" });
			toast.success(t("A Magic Link has been sent to your mailbox!"));
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<FieldGroup>
				<Field>
					<FieldLabel htmlFor="email">{t("Email")}</FieldLabel>
					<Input
						id="email"
						type="email"
						placeholder="m@example.com"
						autoComplete="email webauthn"
						{...register("email", {
							validate: (value) =>
								isValidEmail(value) ? true : t("Please provide a valid email!"),
						})}
					/>

					<FieldError>{formState.errors.email?.message}</FieldError>
				</Field>
				<Field>
					<Button type="submit">
						{formState.isSubmitting && <Spinner />}
						{t("Login")}
					</Button>
				</Field>
			</FieldGroup>
		</form>
	);
}

export default MagicLinkForm;
