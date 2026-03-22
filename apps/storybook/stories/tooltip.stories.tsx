import type { Meta, StoryObj } from "@storybook/react-vite";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@workspace/design-system/components/ui/tooltip";
import { Plus } from "lucide-react";

/**
 * A popup that displays information related to an element when the element
 * receives keyboard focus or the mouse hovers over it.
 */
const meta = {
	title: "ui/Tooltip",
	component: TooltipContent,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
	},
	argTypes: {
		side: {
			options: ["top", "bottom", "left", "right"],
			control: {
				type: "radio",
			},
		},
		variant: {
			options: ["default", "secondary", "destructive", "muted"],
			control: {
				type: "radio",
			},
		},
		children: {
			control: "text",
		},
		showArrow: {
			control: "boolean",
		},
	},
	args: {
		side: "top",
		variant: "default",
		children: "Add to library",
		showArrow: true,
	},
	render: (args) => (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<button className="p-2 rounded border border-gray-300 hover:bg-gray-100">
						<Plus className="h-4 w-4" />
					</button>
				</TooltipTrigger>
				<TooltipContent {...args} />
			</Tooltip>
		</TooltipProvider>
	),
} satisfies Meta<typeof TooltipContent>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the tooltip, showing all placement options, variants, and arrow toggle.
 */
export const Default: Story = {
	render: () => (
		<TooltipProvider>
			<div className="flex flex-wrap gap-12 p-8">
				{/* Placement variations */}
				<div className="flex flex-col gap-4">
					<h3 className="font-semibold text-sm">Placements</h3>
					
					{/* Top placement */}
					<Tooltip>
						<TooltipTrigger asChild>
							<button className="px-3 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300">Top</button>
						</TooltipTrigger>
						<TooltipContent side="top">Tooltip at top</TooltipContent>
					</Tooltip>
					
					{/* Bottom placement */}
					<Tooltip>
						<TooltipTrigger asChild>
							<button className="px-3 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300">Bottom</button>
						</TooltipTrigger>
						<TooltipContent side="bottom">Tooltip at bottom</TooltipContent>
					</Tooltip>
					
					{/* Left placement */}
					<Tooltip>
						<TooltipTrigger asChild>
							<button className="px-3 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300">Left</button>
						</TooltipTrigger>
						<TooltipContent side="left">Tooltip at left</TooltipContent>
					</Tooltip>
					
					{/* Right placement */}
					<Tooltip>
						<TooltipTrigger asChild>
							<button className="px-3 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300">Right</button>
						</TooltipTrigger>
						<TooltipContent side="right">Tooltip at right</TooltipContent>
					</Tooltip>
				</div>
				
				{/* Variant styles */}
				<div className="flex flex-col gap-4">
					<h3 className="font-semibold text-sm">Variants</h3>
					
					{/* Default variant */}
					<Tooltip>
						<TooltipTrigger asChild>
							<button className="px-3 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300">Default</button>
						</TooltipTrigger>
						<TooltipContent side="top" variant="default">Default tooltip</TooltipContent>
					</Tooltip>
					
					{/* Secondary variant */}
					<Tooltip>
						<TooltipTrigger asChild>
							<button className="px-3 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300">Secondary</button>
						</TooltipTrigger>
						<TooltipContent side="top" variant="secondary">Secondary tooltip</TooltipContent>
					</Tooltip>
					
					{/* Destructive variant */}
					<Tooltip>
						<TooltipTrigger asChild>
							<button className="px-3 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300">Destructive</button>
						</TooltipTrigger>
						<TooltipContent side="top" variant="destructive">Delete action</TooltipContent>
					</Tooltip>
					
					{/* Muted variant */}
					<Tooltip>
						<TooltipTrigger asChild>
							<button className="px-3 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300">Muted</button>
						</TooltipTrigger>
						<TooltipContent side="top" variant="muted">Muted info</TooltipContent>
					</Tooltip>
				</div>
				
				{/* Arrow toggle */}
				<div className="flex flex-col gap-4">
					<h3 className="font-semibold text-sm">Arrow Options</h3>
					
					{/* With arrow */}
					<Tooltip>
						<TooltipTrigger asChild>
							<button className="px-3 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300">With Arrow</button>
						</TooltipTrigger>
						<TooltipContent side="top" showArrow={true}>Has arrow</TooltipContent>
					</Tooltip>
					
					{/* Without arrow */}
					<Tooltip>
						<TooltipTrigger asChild>
							<button className="px-3 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300">No Arrow</button>
						</TooltipTrigger>
						<TooltipContent side="top" showArrow={false}>No arrow here</TooltipContent>
					</Tooltip>
				</div>
			</div>
		</TooltipProvider>
	),
};

/**
 * Use the `bottom` side to display the tooltip below the element.
 */
export const Bottom: Story = {
	args: {
		side: "bottom",
	},
};

/**
 * Use the `left` side to display the tooltip to the left of the element.
 */
export const Left: Story = {
	args: {
		side: "left",
	},
};

/**
 * Use the `right` side to display the tooltip to the right of the element.
 */
export const Right: Story = {
	args: {
		side: "right",
	},
};

/**
 * Use the `secondary` variant for a secondary style with border.
 */
export const Secondary: Story = {
	args: {
		side: "top",
		variant: "secondary",
	},
};

/**
 * Use the `destructive` variant for destructive actions or alerts.
 */
export const Destructive: Story = {
	args: {
		side: "top",
		variant: "destructive",
		children: "Delete action",
	},
};

/**
 * Use the `muted` variant for subtle, less emphasized information.
 */
export const Muted: Story = {
	args: {
		side: "top",
		variant: "muted",
		children: "Muted info",
	},
};

/**
 * Tooltip without an arrow.
 */
export const NoArrow: Story = {
	args: {
		side: "top",
		showArrow: false,
	},
};
