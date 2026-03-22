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
import type { ReactNode } from "react";

export type PricingCardProps = {
	planName: string;
	price: number | string;
	description?: string;
	features: string[];
	onSubscribe?: () => void;
	isHighlighted?: boolean;
	buttonText?: string;
	children?: ReactNode;
};

export const PricingCard = ({
	planName,
	price,
	description,
	features,
	onSubscribe,
	isHighlighted = false,
	buttonText = "Subscribe",
	children,
}: PricingCardProps) => {
	return (
		<Card
			className={`flex flex-col ${isHighlighted ? "border-primary shadow-md" : ""}`}
		>
			<CardHeader>
				<CardTitle>{planName}</CardTitle>
				{description && (
					<CardDescription>{description}</CardDescription>
				)}
			</CardHeader>

			<CardContent className="flex-1 space-y-6">
				<div className="flex items-baseline gap-2">
					<span className="text-4xl font-bold">
						{typeof price === "number"
							? `$${price.toFixed(2)}`
							: price}
					</span>
					{typeof price === "number" && (
						<span className="text-muted-foreground">/month</span>
					)}
				</div>

				<div className="space-y-3">
					<p className="text-sm font-semibold text-muted-foreground">
						Features:
					</p>
					<ul className="space-y-2">
						{features.map((feature, index) => (
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

				{children && <div>{children}</div>}
			</CardContent>

			<CardFooter>
				<Button
					className="w-full"
					variant={isHighlighted ? "default" : "outline"}
					onClick={onSubscribe}
				>
					{buttonText}
				</Button>
			</CardFooter>
		</Card>
	);
};
