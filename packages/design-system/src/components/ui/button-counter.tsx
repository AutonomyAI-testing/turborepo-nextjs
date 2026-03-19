'use client';

import { useState } from 'react';
import { Button } from './button';
import { cn } from '@workspace/design-system/lib/utils';
import type { ComponentProps } from 'react';

type ButtonCounterProps = Omit<ComponentProps<'div'>, 'children'> & {
  /**
   * Initial count value
   * @default 0
   */
  initialValue?: number;
  /**
   * Callback when count changes
   */
  onCountChange?: (count: number) => void;
};

/**
 * ButtonCounter - A clean, modern counter component with increment, decrement, and reset controls.
 * Features a display of the current count with three action buttons styled with Tailwind CSS.
 *
 * @example
 * ```tsx
 * <ButtonCounter initialValue={5} onCountChange={(count) => console.log(count)} />
 * ```
 */
export const ButtonCounter = ({
  initialValue = 0,
  onCountChange,
  className,
  ...props
}: ButtonCounterProps) => {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    onCountChange?.(newCount);
  };

  const handleDecrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    onCountChange?.(newCount);
  };

  const handleReset = () => {
    setCount(initialValue);
    onCountChange?.(initialValue);
  };

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-8 rounded-lg border border-border bg-card p-8 shadow-sm',
        className
      )}
      data-slot="button-counter"
      {...props}
    >
      {/* Count Display */}
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
          Count
        </span>
        <div className="text-6xl font-bold text-primary">{count}</div>
      </div>

      {/* Control Buttons */}
      <div className="flex gap-3">
        <Button
          onClick={handleDecrement}
          variant="outline"
          size="lg"
          className="min-w-[120px]"
        >
          Decrease
        </Button>
        <Button
          onClick={handleIncrement}
          variant="default"
          size="lg"
          className="min-w-[120px]"
        >
          Increase
        </Button>
      </div>

      {/* Reset Button */}
      <Button
        onClick={handleReset}
        variant="secondary"
        size="default"
        className="min-w-[120px]"
      >
        Reset
      </Button>
    </div>
  );
};
