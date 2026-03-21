export type PricingTier = {
	id: string;
	name: string;
	price: number;
	billing: string | null;
	description?: string;
	highlighted: boolean;
	ctaText: string;
	features: string[];
};
