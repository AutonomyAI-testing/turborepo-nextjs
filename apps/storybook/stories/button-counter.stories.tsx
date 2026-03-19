import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonCounter } from "@workspace/design-system/components/ui/button-counter";

/**
 * A clean, modern counter component with increment, decrement, and reset controls.
 * Features a display of the current count with three action buttons.
 */
const meta = {
	title: "ui/ButtonCounter",
	component: ButtonCounter,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	argTypes: {
		initialValue: {
			control: { type: "number" },
			description: "Initial count value",
		},
		onCountChange: {
			action: "countChanged",
			description: "Callback when count changes",
		},
	},
	args: {
		initialValue: 0,
	},
} satisfies Meta<typeof ButtonCounter>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default counter starting at 0.
 */
export const Default: Story = {};

/**
 * Counter starting with a custom initial value.
 */
export const WithInitialValue: Story = {
	args: {
		initialValue: 10,
	},
};

/**
 * Counter starting with a negative initial value.
 */
export const NegativeStart: Story = {
	args: {
		initialValue: -5,
	},
};
