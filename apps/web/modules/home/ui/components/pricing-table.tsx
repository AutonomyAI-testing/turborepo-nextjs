"use client";

import { Button } from "@workspace/design-system/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@workspace/design-system/components/ui/card";
import { CheckIcon } from "lucide-react";

type PricingTier = {
	name: string;
	price: string;
	description: string;
	features: string[];
	cta: {
		label: string;
		href?: string;
		onClick?: () => void;
	};
	highlighted?: boolean;
};

const PRICING_TIERS: PricingTier[] = [
	{
		name: "Free",
		price: "$0",
		description: "For individuals getting started",
		features: [
			"Up to 5 projects",
			"Basic AI assistance",
			"Community support",
			"Standard templates",
		],
		cta: {
			label: "Get Started",
		},
	},
	{
		name: "Pro",
		price: "$29",
		description: "For growing teams and projects",
		features: [
			"Unlimited projects",
			"Advanced AI features",
			"Priority email support",
			"Custom templates",
			"Team collaboration",
			"API access",
		],
		cta: {
			label: "Start Free Trial",
		},
		highlighted: true,
	},
	{
		name: "Enterprise",
		price: "Custom",
		description: "For large-scale deployments",
		features: [
			"Everything in Pro",
			"Dedicated support",
			"Custom integrations",
			"SLA guarantee",
			"Advanced security",
			"On-premise option",
		],
		cta: {
			label: "Contact Sales",
		},
	},
];

type PricingTableProps = {
	/** Array of pricing tiers to display. Defaults to PRICING_TIERS if not provided. */
	tiers?: PricingTier[];
	/** Callback fired when a CTA button is clicked. Receives the tier name to identify which plan was selected. */
	onCtaClick?: (tierName: string) => void;
};

export const PricingTable = ({
	tiers = PRICING_TIERS,
	onCtaClick,
}: PricingTableProps) => {
	return (
		<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
			{/* Tiers are typically stable/pre-defined, so using tier.name as key is safe */}
			{tiers.map((tier) => (
				<Card
					key={tier.name}
					className={`relative flex flex-col transition-all ${
						tier.highlighted
							? "md:scale-105 border-primary shadow-lg"
							: "hover:shadow-md"
					}`}
				>
					{tier.highlighted && (
						<div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground rounded-t-xl px-3 py-1 text-xs font-semibold text-center">
							Most Popular
						</div>
					)}
					<CardHeader className={tier.highlighted ? "pt-12" : ""}>
						<CardTitle className="text-2xl">{tier.name}</CardTitle>
						<CardDescription>{tier.description}</CardDescription>
						<div className="mt-4">
							<span className="text-4xl font-bold">{tier.price}</span>
							{/* Only show /month suffix for plans with numeric pricing */}
							{tier.price !== "Custom" && (
								<span className="text-muted-foreground text-sm">/month</span>
							)}
						</div>
					</CardHeader>

					<CardContent className="flex-1">
						<ul className="space-y-3">
							{tier.features.map((feature) => (
								<li key={feature} className="flex items-start gap-3">
									<CheckIcon className="size-5 shrink-0 text-primary mt-0.5" />
									<span className="text-sm">{feature}</span>
								</li>
							))}
						</ul>
					</CardContent>

					<CardFooter>
						<Button
							className="w-full"
							variant={tier.highlighted ? "default" : "outline"}
							onClick={() => onCtaClick?.(tier.name)}
						>
							{tier.cta.label}
						</Button>
					</CardFooter>
				</Card>
			))}
		</div>
	);
};
