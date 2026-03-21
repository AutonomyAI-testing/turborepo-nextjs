import type { Meta, StoryObj } from "@storybook/react-vite";
import { Check } from "lucide-react";
import { Button } from "@workspace/design-system/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@workspace/design-system/components/ui/card";

const PRICING_TIERS = [
	{
		id: "free",
		name: "Free",
		price: 0,
		billing: null,
		description: "Get started for free",
		highlighted: false,
		ctaText: "Get Started",
		features: [
			"Up to 3 projects",
			"Basic AI features",
			"Community support",
			"1 GB storage",
			"Standard performance",
		],
	},
	{
		id: "pro",
		name: "Pro",
		price: 29,
		billing: "month",
		description: "For professional developers",
		highlighted: true,
		ctaText: "Start Free Trial",
		features: [
			"Unlimited projects",
			"Advanced AI features",
			"Priority support",
			"100 GB storage",
			"High performance",
			"Custom domains",
			"Team collaboration",
		],
	},
	{
		id: "enterprise",
		name: "Enterprise",
		price: 99,
		billing: "month",
		description: "For large teams and organizations",
		highlighted: false,
		ctaText: "Contact Sales",
		features: [
			"Unlimited everything",
			"Custom AI models",
			"24/7 dedicated support",
			"Unlimited storage",
			"Enterprise performance",
			"Advanced security",
			"SSO & SAML",
			"Custom SLA",
		],
	},
];

const PricingTable = () => {
	return (
		<div className="grid gap-6 md:grid-cols-3 lg:gap-8">
			{PRICING_TIERS.map((tier) => (
				<Card
					key={tier.id}
					className={tier.highlighted ? "ring-2 ring-primary md:scale-105" : ""}
				>
					<CardHeader>
						<CardTitle className="text-lg">{tier.name}</CardTitle>
						<div className="mt-2 flex items-baseline gap-1">
							<span className="text-3xl font-bold">${tier.price}</span>
							{tier.billing && (
								<span className="text-muted-foreground text-sm">
									/{tier.billing}
								</span>
							)}
						</div>
						{tier.description && (
							<p className="text-muted-foreground mt-2 text-sm">
								{tier.description}
							</p>
						)}
					</CardHeader>

					<CardContent>
						<ul className="space-y-3">
							{tier.features.map((feature) => (
								<li key={feature} className="flex items-start gap-3">
									<Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
									<span className="text-sm">{feature}</span>
								</li>
							))}
						</ul>
					</CardContent>

					<CardFooter>
						<Button
							className="w-full"
							variant={tier.highlighted ? "default" : "outline"}
						>
							{tier.ctaText}
						</Button>
					</CardFooter>
				</Card>
			))}
		</div>
	);
};

const meta = {
	title: "layout/PricingTable",
	component: () => null,
	render: () => <PricingTable />,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
