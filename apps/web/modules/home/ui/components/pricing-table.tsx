"use client";

import { Button } from "@workspace/design-system/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@workspace/design-system/components/ui/card";
import { Check } from "lucide-react";
import { PRICING_TIERS } from "../constants";

export const PricingTable = () => {
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
