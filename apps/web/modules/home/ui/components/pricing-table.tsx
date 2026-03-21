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

type PricingTier = {
	name: string;
	price: number;
	description: string;
	features: string[];
	cta: string;
	highlighted?: boolean;
};

const PRICING_DATA: PricingTier[] = [
	{
		name: "Free",
		price: 0,
		description: "Perfect for getting started",
		features: [
			"Up to 3 projects",
			"Basic analytics",
			"Community support",
			"1GB storage",
		],
		cta: "Get Started",
	},
	{
		name: "Pro",
		price: 29,
		description: "For growing teams",
		features: [
			"Unlimited projects",
			"Advanced analytics",
			"Priority support",
			"100GB storage",
			"Team collaboration",
			"Custom domain",
		],
		cta: "Start Free Trial",
		highlighted: true,
	},
	{
		name: "Enterprise",
		price: 99,
		description: "For large organizations",
		features: [
			"Unlimited projects",
			"Advanced analytics",
			"24/7 dedicated support",
			"Unlimited storage",
			"Team collaboration",
			"Custom integrations",
			"SLA guarantee",
		],
		cta: "Contact Sales",
	},
];

export const PricingTable = () => {
	return (
		<div className="w-full">
			<div className="grid gap-6 md:grid-cols-3 md:gap-4 lg:gap-6">
				{PRICING_DATA.map((tier) => (
					<Card
						key={tier.name}
						className={`flex flex-col ${
							tier.highlighted
								? "border-primary/50 bg-primary/5 md:scale-105 md:shadow-lg"
								: ""
						}`}
					>
						<CardHeader>
							<CardTitle>{tier.name}</CardTitle>
							<CardDescription>{tier.description}</CardDescription>
						</CardHeader>

						<CardContent className="flex-1">
							<div className="mb-6 flex items-baseline gap-1">
								<span className="text-4xl font-bold">${tier.price}</span>
								{tier.price > 0 && (
									<span className="text-muted-foreground text-sm">/month</span>
								)}
							</div>

							<ul className="space-y-3">
								{tier.features.map((feature) => (
									<li key={feature} className="flex items-start gap-3 text-sm">
										<span className="mt-1 text-primary">✓</span>
										<span>{feature}</span>
									</li>
								))}
							</ul>
						</CardContent>

						<CardFooter>
							<Button
								className="w-full"
								variant={tier.highlighted ? "default" : "outline"}
							>
								{tier.cta}
							</Button>
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	);
};
