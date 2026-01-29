import { type SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { isValidEmail } from "@/lib/utils";

const DefaultForm = {
	email: "",
};

function MagicLinkForm() {
	const { t } = useTranslation();
	const { register, handleSubmit, formState } = useForm<typeof DefaultForm>({
		defaultValues: DefaultForm,
	});

	const onSubmit: SubmitHandler<typeof DefaultForm> = (data) =>
		console.log(data);

	return (
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
									? false
									: t("Please provide a valid email!"),
						})}
					/>

					<FieldError>{formState.errors.email?.message}</FieldError>
				</Field>
				<Field>
					<Button type="submit">
						{formState.isSubmitting && <Spinner />}
						{t("Sign-in with Magic Link")}
					</Button>
				</Field>
			</FieldGroup>
		</form>
	);
}

export default MagicLinkForm;
