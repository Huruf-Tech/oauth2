import {
	BrickWallShieldIcon,
	InfoIcon,
	KeyIcon,
	MailIcon,
	MessagesSquareIcon,
	RefreshCcwIcon,
} from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { ActionSheetRef } from "@/registry/ActionSheet";
import Item from "./Item";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Field } from "./ui/field";
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
} from "./ui/input-otp";
import { Label } from "./ui/label";
import { Radio, RadioGroup } from "./ui/radio-group";
import {
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetPanel,
	SheetTitle,
} from "./ui/sheet";
import { Spinner } from "./ui/spinner";

type TMethod = "passkey" | "sms" | "2-step" | "email";

function Verification() {
	const { t } = useTranslation();

	return (
		<>
			<SheetHeader>
				<SheetTitle className="text-xl">
					{t("Verification required")}
				</SheetTitle>
				<SheetDescription>
					{t(
						"To make changes to your account, verify your identity using one of the options below.",
					)}
				</SheetDescription>
			</SheetHeader>
			<VerificationMethod />
		</>
	);
}

function VerificationMethod() {
	const { t } = useTranslation();
	const [method, setMethod] = React.useState<TMethod>("passkey");

	const [step, setStep] = React.useState(0);

	return step === 0 ? (
		<>
			<SheetPanel>
				<RadioGroup
					className="gap-1"
					defaultValue={method}
					onValueChange={setMethod}
				>
					{[
						{
							icon: KeyIcon,
							label: "Passkey",
							value: "passkey",
							recommended: true,
						},
						{
							icon: BrickWallShieldIcon,
							label: "2-Step authenticator",
							value: "2-step",
						},
						{
							icon: MessagesSquareIcon,
							label: "Sms",
							value: "sms",
						},
						{
							icon: MailIcon,
							label: "Email",
							value: "email",
						},
					].map((item, index) => (
						<Item key={index} className="bg-muted">
							<Label className="grow">
								<div className="flex items-center gap-3 w-full">
									<item.icon />
									<div className="flex items-center gap-3 w-full">
										<h3 className="font-medium">{t(item.label)}</h3>

										{item.recommended && <Badge>{t("Recommended")}</Badge>}
									</div>

									<Radio value={item.value} />
								</div>
							</Label>
						</Item>
					))}
				</RadioGroup>
			</SheetPanel>

			<SheetFooter variant="bare">
				<Button
					variant={"outline"}
					onClick={() => ActionSheetRef.current?.trigger("verification", false)}
				>
					{t("Cancel")}
				</Button>
				<Button onClick={() => setStep(1)}>{t("Submit")}</Button>
			</SheetFooter>
		</>
	) : (
		<ConfirmVerification method={method} />
	);
}

function ConfirmVerification({ method }: { method: TMethod }) {
	const { t } = useTranslation();

	return (
		<>
			<SheetPanel>
				{method === "email" ? (
					<>
						<p className="text-sm text-muted-foreground">
							{t("We've sent a verification link to:")}
						</p>
						<p>{"abdullahkhan@yahoo.com"}</p>
						<Button variant={"link"} className="px-0 text-primary">
							<RefreshCcwIcon />
							{t("Resend link")}
						</Button>

						<div className="flex items-start gap-2 bg-muted p-2 rounded-md text-muted-foreground">
							<InfoIcon />
							<p className="text-sm">
								{t(
									"Make sure to open the link in another tab on the same browser and device.",
								)}
							</p>
						</div>
					</>
				) : ["2-step", "sms"].includes(method) ? (
					<Field className="gap-3">
						<div className="w-full flex flex-col items-center">
							<InputOTP maxLength={6} id="otp-verification" required>
								<InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl">
									<InputOTPSlot index={0} />
									<InputOTPSlot index={1} />
									<InputOTPSlot index={2} />
								</InputOTPGroup>
								<InputOTPSeparator className="mx-2" />
								<InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl">
									<InputOTPSlot index={3} />
									<InputOTPSlot index={4} />
									<InputOTPSlot index={5} />
								</InputOTPGroup>
							</InputOTP>
						</div>
						{method === "sms" && (
							<div className="flex justify-between gap-2">
								<p className="text-sm text-muted-foreground">
									{t("Didn't receive the code?")}
								</p>
								<Button variant="outline" size="xs">
									<RefreshCcwIcon />
									{t("Resend Code")}
								</Button>
							</div>
						)}
					</Field>
				) : (
					<div className="flex flex-col gap-2 grow w-full min-h-20 items-center justify-center">
						<Spinner className="size-4" />
						<p className="text-sm text-muted-foreground">{t("Loading...")}</p>
					</div>
				)}
			</SheetPanel>

			<SheetFooter variant="bare">
				<Button
					variant={"outline"}
					onClick={() => ActionSheetRef.current?.trigger("verification", false)}
				>
					{t("Cancel")}
				</Button>
				<Button>{t("Choose another option")}</Button>
			</SheetFooter>
		</>
	);
}

export default Verification;
