import { EyeIcon, EyeOffIcon } from "lucide-react";
import React, { useId } from "react";
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
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@/components/ui/input-group";

function Signup() {
	const id = useId();
	const [showPassword, setShowPassword] = React.useState(false);

	const checkStrength = (pass: string) => {
		const requirements = [
			{ regex: /.{8,}/, text: "At least 8 characters" },
			{ regex: /[0-9]/, text: "At least 1 number" },
			{ regex: /[a-z]/, text: "At least 1 lowercase letter" },
			{ regex: /[A-Z]/, text: "At least 1 uppercase letter" },
		];

		return requirements.map((req) => ({
			met: req.regex.test(pass),
			text: req.text,
		}));
	};

	const strength = checkStrength("");

	const strengthScore = React.useMemo(() => {
		return strength.filter((req) => req.met).length;
	}, [strength]);

	const getStrengthColor = (score: number) => {
		if (score === 0) return "bg-border";
		if (score <= 1) return "bg-red-500";
		if (score <= 2) return "bg-orange-500";
		if (score === 3) return "bg-amber-500";
		return "bg-emerald-500";
	};

	const getStrengthText = (score: number) => {
		if (score === 0) return "Enter a password";
		if (score <= 2) return "Weak password";
		if (score === 3) return "Medium password";
		return "Strong password";
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Create an account</CardTitle>
				<CardDescription>
					Enter your information below to create your account
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form>
					<FieldGroup>
						<Field>
							<FieldLabel htmlFor="name">Full Name</FieldLabel>
							<Input id="name" type="text" placeholder="John Doe" required />
						</Field>
						<Field>
							<FieldLabel htmlFor="email">Email</FieldLabel>
							<Input
								id="email"
								type="email"
								placeholder="m@example.com"
								required
							/>
							<FieldDescription>
								We&apos;ll use this to contact you. We will not share your email
								with anyone else.
							</FieldDescription>
						</Field>
						<Field>
							<FieldLabel htmlFor="password">Password</FieldLabel>
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
							<FieldDescription>
								Must be at least 8 characters long.
							</FieldDescription>

							<div
								aria-label="Password strength"
								aria-valuemax={4}
								aria-valuemin={0}
								aria-valuenow={strengthScore}
								className="mt-3 mb-4 h-1 w-full overflow-hidden rounded-full bg-border"
								role="progressbar"
								tabIndex={-1}
							>
								<div
									className={`h-full ${getStrengthColor(strengthScore)} transition-all duration-500 ease-out`}
									style={{ width: `${(strengthScore / 4) * 100}%` }}
								/>
							</div>
							{/* Password strength description */}
							<p
								className="mb-2 font-medium text-foreground text-sm"
								id={`${id}-description`}
							>
								{getStrengthText(strengthScore)}. Must contain:
							</p>
						</Field>

						<Field>
							<FieldLabel htmlFor="confirmPassword">
								Confirm Password
							</FieldLabel>
							<InputGroup>
								<InputGroupInput
									id="confirmPassword"
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
							<FieldDescription>Please confirm your password.</FieldDescription>
						</Field>
						<FieldGroup>
							<Field>
								<Button type="submit">Create Account</Button>
								<Button variant="outline" type="button">
									Sign up with Google
								</Button>
								<FieldDescription className="px-6 text-center">
									Already have an account? <a href="#">Sign in</a>
								</FieldDescription>
							</Field>
						</FieldGroup>
					</FieldGroup>
				</form>
			</CardContent>
		</Card>
	);
}

export default Signup;
