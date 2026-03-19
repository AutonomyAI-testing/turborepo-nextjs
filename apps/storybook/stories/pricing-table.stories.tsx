import type { Meta, StoryObj } from "@storybook/react-vite";
import { PricingTable } from "../../web/modules/home/ui/components/pricing-table";

/**
 * A pricing table component that displays multiple pricing tiers with features,
 * descriptions, and call-to-action buttons. Used for displaying subscription plans.
 */
const meta = {
	title: "home/PricingTable",
	component: PricingTable,
	tags: ["autodocs"],
	parameters: {
		layout: "padded",
	},
} satisfies Meta<typeof PricingTable>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Default pricing table with three tiers: Free, Pro, and Enterprise.
 * The Pro tier is highlighted as the most popular option.
 */
export const Default: Story = {};

/**
 * Custom pricing tiers with different configurations.
 */
export const CustomTiers: Story = {
	args: {
		tiers: [
			{
				name: "Starter",
				price: "$9",
				description: "Perfect for small teams",
				features: [
					"Up to 10 projects",
					"Basic analytics",
					"Email support",
				],
				cta: {
					label: "Get Started",
				},
			},
			{
				name: "Business",
				price: "$49",
				description: "For growing businesses",
				features: [
					"Unlimited projects",
					"Advanced analytics",
					"Priority support",
					"Custom integrations",
				],
				cta: {
					label: "Start Trial",
				},
				highlighted: true,
			},
		],
	},
};

/**
 * Single tier display.
 */
export const SingleTier: Story = {
	args: {
		tiers: [
			{
				name: "Professional",
				price: "$99",
				description: "Everything you need",
				features: [
					"Unlimited projects",
					"Advanced AI features",
					"24/7 support",
					"Custom branding",
					"API access",
				],
				cta: {
					label: "Get Started",
				},
				highlighted: true,
			},
		],
	},
};
