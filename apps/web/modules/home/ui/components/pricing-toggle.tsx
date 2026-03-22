"use client";

import { Toggle } from "@workspace/design-system/components/ui/toggle";
import { useState } from "react";

export type PricingToggleProps = {
	/** Callback when billing period changes */
	onBillingPeriodChange?: (isAnnual: boolean) => void;
	/** Controlled state for annual billing */
	isAnnual?: boolean;
};

export const PricingToggle = ({
	onBillingPeriodChange,
	isAnnual: controlledIsAnnual,
}: PricingToggleProps) => {
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
