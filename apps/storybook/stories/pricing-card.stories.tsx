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

const meta = {
	title: "layout/PricingCard",
	component: Card,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

// Pricing tiers data
const PRICING_TIERS = [
	{
		planName: "Basic",
		price: 0,
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
		price: 29,
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
		price: 99,
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

/**
 * Displays three pricing card tiers with the Professional tier highlighted.
 * Each card shows plan name, price, description, features as bullet points, and a subscribe button.
 */
export const Default: Story = {
	render: () => (
		<div className="grid gap-6 md:grid-cols-3 lg:gap-8">
			{PRICING_TIERS.map((tier) => (
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
								{typeof tier.price === "number"
									? `$${tier.price.toFixed(2)}`
									: tier.price}
							</span>
							{typeof tier.price === "number" && tier.price > 0 && (
								<span className="text-muted-foreground">/month</span>
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
			))}
		</div>
	),
};

/**
 * Displays a single Basic pricing card.
 */
export const Basic: Story = {
	render: () => {
		const tier = PRICING_TIERS[0];
		return (
			<Card
				className={`flex flex-col w-96 ${
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
							{typeof tier.price === "number"
								? `$${tier.price.toFixed(2)}`
								: tier.price}
						</span>
						{typeof tier.price === "number" && tier.price > 0 && (
							<span className="text-muted-foreground">/month</span>
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
	},
};

/**
 * Displays a single Professional pricing card (highlighted tier).
 */
export const Professional: Story = {
	render: () => {
		const tier = PRICING_TIERS[1];
		return (
			<Card
				className={`flex flex-col w-96 ${
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
							{typeof tier.price === "number"
								? `$${tier.price.toFixed(2)}`
								: tier.price}
						</span>
						{typeof tier.price === "number" && tier.price > 0 && (
							<span className="text-muted-foreground">/month</span>
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
	},
};

/**
 * Displays a single Enterprise pricing card.
 */
export const Enterprise: Story = {
	render: () => {
		const tier = PRICING_TIERS[2];
		return (
			<Card
				className={`flex flex-col w-96 ${
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
							{typeof tier.price === "number"
								? `$${tier.price.toFixed(2)}`
								: tier.price}
						</span>
						{typeof tier.price === "number" && tier.price > 0 && (
							<span className="text-muted-foreground">/month</span>
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
	},
};
