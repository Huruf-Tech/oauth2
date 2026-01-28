import { EyeIcon, EyeOffIcon } from "lucide-react";
import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router";
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
	FieldLabel,
	FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@/components/ui/input-group";
import { Skeleton } from "@/components/ui/skeleton";
import { useOauthApp } from "@/hooks/useOauthApp";
import { cn } from "@/lib/utils";

function Login() {
	const { isLoading, error } = useOauthApp();

	const { t } = useTranslation();
	const [showPassword, setShowPassword] = React.useState(false);

	return isLoading ? (
		<LoginFormSkeleton />
	) : (
		<div className={cn("flex flex-col gap-6")}>
			<Card className="relative">
				{!!error?.message && (
					<div className="absolute top-0 left-0 right-0 bottom-0 bg-background/50" />
				)}

				<CardHeader className="text-center">
					<CardTitle className="text-xl">{t("Welcome back")}</CardTitle>
					<CardDescription>
						{t("Login securely with your desired option")}
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form>
						<FieldGroup>
							<Field>
								<Button variant="outline" type="button">
									<span className="flex items-center justify-center p-1 size-6 rounded-full">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											className="fill-black dark:fill-white"
										>
											<path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
										</svg>
									</span>
									{t("Sign in with Apple")}
								</Button>
								<Button variant="outline" type="button">
									<span className="flex items-center justify-center p-1 size-6">
										<svg
											viewBox="0 0 40 40"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											className="size-6"
										>
											<g clipPath="url(#clip0_710_6221)">
												<path
													d="M29.6 20.2273C29.6 19.5182 29.5364 18.8364 29.4182 18.1818H20V22.05H25.3818C25.15 23.3 24.4455 24.3591 23.3864 25.0682V27.5773H26.6182C28.5091 25.8364 29.6 23.2727 29.6 20.2273Z"
													fill="#4285F4"
												/>
												<path
													d="M20 30C22.7 30 24.9636 29.1045 26.6181 27.5773L23.3863 25.0682C22.4909 25.6682 21.3454 26.0227 20 26.0227C17.3954 26.0227 15.1909 24.2636 14.4045 21.9H11.0636V24.4909C12.7091 27.7591 16.0909 30 20 30Z"
													fill="#34A853"
												/>
												<path
													d="M14.4045 21.9C14.2045 21.3 14.0909 20.6591 14.0909 20C14.0909 19.3409 14.2045 18.7 14.4045 18.1V15.5091H11.0636C10.3864 16.8591 10 18.3864 10 20C10 21.6136 10.3864 23.1409 11.0636 24.4909L14.4045 21.9Z"
													fill="#FBBC04"
												/>
												<path
													d="M20 13.9773C21.4681 13.9773 22.7863 14.4818 23.8227 15.4727L26.6909 12.6045C24.9591 10.9909 22.6954 10 20 10C16.0909 10 12.7091 12.2409 11.0636 15.5091L14.4045 18.1C15.1909 15.7364 17.3954 13.9773 20 13.9773Z"
													fill="#E94235"
												/>
											</g>
											<defs>
												<clipPath id="clip0_710_6221">
													<rect
														width="20"
														height="20"
														fill="white"
														transform="translate(10 10)"
													/>
												</clipPath>
											</defs>
										</svg>
									</span>
									{t("Sign in with Google")}
								</Button>
							</Field>
							<FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
								{t("Or continue with")}
							</FieldSeparator>
							<Field>
								<FieldLabel htmlFor="email">{t("Email")}</FieldLabel>
								<Input
									id="email"
									type="email"
									placeholder="m@example.com"
									required
								/>
							</Field>
							<Field>
								<div className="flex items-center">
									<FieldLabel htmlFor="password">{t("Password")}</FieldLabel>
									<a
										href="#"
										className="ml-auto text-sm underline-offset-4 hover:underline"
									>
										{t("Forgot your password?")}
									</a>
								</div>
								<InputGroup>
									<InputGroupInput
										id="password"
										type={showPassword ? "text" : "password"}
										required
									/>
									<InputGroupAddon align="inline-end">
										<Button
											size="icon-sm"
											variant="ghost"
											onClick={() => setShowPassword(!showPassword)}
										>
											{!showPassword ? <EyeIcon /> : <EyeOffIcon />}
										</Button>
									</InputGroupAddon>
								</InputGroup>
							</Field>
							<Field>
								<Button type="submit">{t("Login")}</Button>
								<FieldDescription className="text-center">
									<Trans i18nKey={"noAccount"}>
										Don't have an account? <Link to="/signup">Sign up</Link>
									</Trans>
								</FieldDescription>
							</Field>
						</FieldGroup>
					</form>
				</CardContent>
			</Card>
			<FieldDescription className="px-6 text-center">
				<Trans i18nKey={"agreement"}>
					By clicking continue, you agree to our{" "}
					<a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
				</Trans>
			</FieldDescription>
		</div>
	);
}

export default Login;

function LoginFormSkeleton() {
	return (
		<div className={cn("flex flex-col gap-6")}>
			<Card className="relative">
				<div className="flex flex-col gap-2 items-center justify-center">
					<Skeleton className="w-30 h-7" />
					<Skeleton className="w-50 h-5" />
				</div>
				<CardContent>
					<form>
						<FieldGroup>
							<Field>
								<Skeleton className="w-50 h-8" />
								<Skeleton className="w-50 h-8" />
							</Field>
							<FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
								<Skeleton className="w-30 h-5" />
							</FieldSeparator>
							<Field>
								<Skeleton className="max-w-18 h-5" />
								<Skeleton className="w-full h-8" />
							</Field>
							<Field>
								<div className="flex justify-between items-center">
									<Skeleton className="w-full max-w-18 h-5" />
									<Skeleton className="w-full max-w-18 h-5" />
								</div>
								<Skeleton className="w-full h-8" />
							</Field>
							<Field>
								<Skeleton className="w-full h-8" />

								<Skeleton className="w-40 max-w-40 h-5 mx-auto" />
							</Field>
						</FieldGroup>
					</form>
				</CardContent>
			</Card>

			<Skeleton className="w-50 max-w-50 h-5 mx-auto" />
		</div>
	);
}
