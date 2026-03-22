"use client";

import { Button } from "@workspace/design-system/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@workspace/design-system/components/ui/card";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export const Counter = () => {
	const [count, setCount] = useState(0);

	const increment = () => setCount((prev) => prev + 1);
	const decrement = () => setCount((prev) => prev - 1);
	const reset = () => setCount(0);

	return (
		<Card className="w-full max-w-sm">
			<CardHeader>
				<CardTitle>Counter</CardTitle>
				<CardDescription>Simple counter with increment and decrement</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col items-center gap-8">
				<div className="text-6xl font-bold text-primary">{count}</div>
				<div className="flex gap-3">
					<Button
						onClick={decrement}
						size="lg"
						variant="outline"
						className="gap-2"
					>
						<Minus className="size-5" />
						Decrement
					</Button>
					<Button
						onClick={increment}
						size="lg"
						className="gap-2"
					>
						<Plus className="size-5" />
						Increment
					</Button>
				</div>
				<Button
					onClick={reset}
					size="sm"
					variant="ghost"
					className="w-full"
				>
					Reset
				</Button>
			</CardContent>
		</Card>
	);
};
