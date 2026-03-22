import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@workspace/design-system/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@workspace/design-system/components/ui/card";
import { Toggle } from "@workspace/design-system/components/ui/toggle";
import { useState } from "react";

// Mock PricingToggle component - recreated from apps/web/modules/home/ui/components/pricing-toggle.tsx
const PricingToggle = ({
	isAnnual: controlledIsAnnual,
	onBillingPeriodChange,
}: {
	isAnnual?: boolean;
	onBillingPeriodChange?: (isAnnual: boolean) => void;
}) => {
	const [uncontrolledIsAnnual, setUncontrolledIsAnnual] = useState(false);

	const isAnnual =
		controlledIsAnnual !== undefined ? controlledIsAnnual : uncontrolledIsAnnual;

	const handleToggle = (newState: boolean) => {
		if (controlledIsAnnual === undefined) {
			setUncontrolledIsAnnual(newState);
		}
		onBillingPeriodChange?.(newState);
	};

	return (
		<div className="flex items-center justify-center gap-4">
			<span
				className={`text-sm font-medium transition-colors ${
					!isAnnual
						? "text-foreground"
						: "text-muted-foreground"
				}`}
			>
				Monthly
			</span>

			<Toggle
				pressed={isAnnual}
				onPressedChange={handleToggle}
				aria-label="Switch between monthly and annual billing"
				className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
			/>

			<div className="flex items-center gap-2">
				<span
					className={`text-sm font-medium transition-colors ${
						isAnnual
							? "text-foreground"
							: "text-muted-foreground"
					}`}
				>
					Annual
				</span>
				{isAnnual && (
					<span className="inline-block rounded-full bg-green-500/10 px-2 py-1 text-xs font-semibold text-green-600 dark:text-green-400">
						Save 20%
					</span>
				)}
			</div>
		</div>
	);
};

// Mock pricing data with annual discount calculation
const getPricingTiers = (isAnnual: boolean) => {
	return [
		{
			planName: "Basic",
			monthlyPrice: 0,
			description: "Perfect for getting started",
			features: [
				"5 projects",
				"Basic analytics",
				"Community support",
				"1GB storage",
				"Email notifications",
			],
			isHighlighted: false,
		},
		{
			planName: "Professional",
			monthlyPrice: 29,
			description: "Most popular for teams",
			features: [
				"Unlimited projects",
				"Advanced analytics",
				"Priority support",
				"50GB storage",
				"Email & SMS notifications",
				"API access",
				"Custom integrations",
			],
			isHighlighted: true,
		},
		{
			planName: "Enterprise",
			monthlyPrice: 99,
			description: "For large organizations",
			features: [
				"Unlimited projects",
				"Custom analytics",
				"24/7 dedicated support",
				"Unlimited storage",
				"Email & SMS notifications",
				"Advanced API access",
				"Custom integrations",
				"SLA guarantee",
			],
			isHighlighted: false,
		},
	];
};

// Mock PricingTable component to replace Clerk's PricingTable
const PricingTable = ({ isAnnual }: { isAnnual: boolean }) => {
	const tiers = getPricingTiers(isAnnual);

	return (
		<div className="grid gap-6 md:grid-cols-3 lg:gap-8">
			{tiers.map((tier) => {
				const displayPrice = tier.monthlyPrice;
				const finalPrice = isAnnual && tier.monthlyPrice > 0
					? Math.round(displayPrice * 0.8 * 12)
					: displayPrice;
				const pricePerMonth = isAnnual && tier.monthlyPrice > 0
					? Math.round(displayPrice * 0.8)
					: displayPrice;

				return (
					<Card
						key={tier.planName}
						className={`flex flex-col ${
							tier.isHighlighted ? "border-primary shadow-md" : ""
						}`}
					>
						<CardHeader>
							<CardTitle>{tier.planName}</CardTitle>
							{tier.description && (
								<CardDescription>{tier.description}</CardDescription>
							)}
						</CardHeader>

						<CardContent className="flex-1 space-y-6">
							<div className="flex items-baseline gap-2">
								<span className="text-4xl font-bold">
									{tier.monthlyPrice === 0
										? "$0.00"
										: isAnnual
											? `$${finalPrice}`
											: `$${pricePerMonth.toFixed(2)}`}
								</span>
								{tier.monthlyPrice > 0 && (
									<span className="text-muted-foreground">
										{isAnnual ? "/year" : "/month"}
									</span>
								)}
							</div>

							<div className="space-y-3">
								<p className="text-sm font-semibold text-muted-foreground">
									Features:
								</p>
								<ul className="space-y-2">
									{tier.features.map((feature, index) => (
										<li
											key={index}
											className="flex items-start gap-2 text-sm"
										>
											<span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
											<span>{feature}</span>
										</li>
									))}
								</ul>
							</div>
						</CardContent>

						<CardFooter>
							<Button
								className="w-full"
								variant={tier.isHighlighted ? "default" : "outline"}
								onClick={() => console.log(`Subscribe to ${tier.planName}`)}
							>
								Subscribe
							</Button>
						</CardFooter>
					</Card>
				);
			})}
		</div>
	);
};

const meta = {
	title: "layout/PricingPage",
	component: () => null,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
	},
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Full pricing page with billing period toggle and pricing cards.
 * The toggle switches between monthly and annual billing, with a 20% discount applied to annual plans.
 */
export const Default: Story = {
	render: () => {
		const [isAnnual, setIsAnnual] = useState(false);

		return (
			<div className="mx-auto flex w-full max-w-3xl flex-col">
				<section className="space-y-6 pt-[16vh] 2xl:pt-48">
					<div className="flex flex-col items-center">
						{/* Logo placeholder - using SVG symbol to avoid Next.js Image */}
						<svg
							alt="Vibe"
							className="hidden md:block"
							height={50}
							width={50}
							viewBox="0 0 50 50"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle cx="25" cy="25" r="23" fill="currentColor" />
							<text
								x="25"
								y="30"
								textAnchor="middle"
								fill="white"
								fontSize="20"
								fontWeight="bold"
							>
								V
							</text>
						</svg>
					</div>
					<h1 className="text-center font-bold text-xl md:text-3xl">Pricing</h1>
					<p className="text-center text-muted-foreground text-sm md:text-base">
						Choose the plan that best fits your needs.
					</p>
					<div className="flex justify-center py-6">
						<PricingToggle
							isAnnual={isAnnual}
							onBillingPeriodChange={setIsAnnual}
						/>
					</div>
					<PricingTable isAnnual={isAnnual} />
				</section>
			</div>
		);
	},
};

/**
 * Pricing page with monthly billing selected.
 */
export const Monthly: Story = {
	render: () => {
		return (
			<div className="mx-auto flex w-full max-w-3xl flex-col">
				<section className="space-y-6 pt-[16vh] 2xl:pt-48">
					<div className="flex flex-col items-center">
						<svg
							alt="Vibe"
							className="hidden md:block"
							height={50}
							width={50}
							viewBox="0 0 50 50"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle cx="25" cy="25" r="23" fill="currentColor" />
							<text
								x="25"
								y="30"
								textAnchor="middle"
								fill="white"
								fontSize="20"
								fontWeight="bold"
							>
								V
							</text>
						</svg>
					</div>
					<h1 className="text-center font-bold text-xl md:text-3xl">Pricing</h1>
					<p className="text-center text-muted-foreground text-sm md:text-base">
						Choose the plan that best fits your needs.
					</p>
					<div className="flex justify-center py-6">
						<PricingToggle isAnnual={false} onBillingPeriodChange={() => {}} />
					</div>
					<PricingTable isAnnual={false} />
				</section>
			</div>
		);
	},
};

/**
 * Pricing page with annual billing selected, showing 20% discount.
 */
export const Annual: Story = {
	render: () => {
		return (
			<div className="mx-auto flex w-full max-w-3xl flex-col">
				<section className="space-y-6 pt-[16vh] 2xl:pt-48">
					<div className="flex flex-col items-center">
						<svg
							alt="Vibe"
							className="hidden md:block"
							height={50}
							width={50}
							viewBox="0 0 50 50"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle cx="25" cy="25" r="23" fill="currentColor" />
							<text
								x="25"
								y="30"
								textAnchor="middle"
								fill="white"
								fontSize="20"
								fontWeight="bold"
							>
								V
							</text>
						</svg>
					</div>
					<h1 className="text-center font-bold text-xl md:text-3xl">Pricing</h1>
					<p className="text-center text-muted-foreground text-sm md:text-base">
						Choose the plan that best fits your needs.
					</p>
					<div className="flex justify-center py-6">
						<PricingToggle isAnnual={true} onBillingPeriodChange={() => {}} />
					</div>
					<PricingTable isAnnual={true} />
				</section>
			</div>
		);
	},
};
