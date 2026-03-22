'use client';

import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cn } from '@workspace/design-system/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import type * as React from 'react';

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  );
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

const tooltipContentVariants = cva(
  'fade-in-0 zoom-in-95 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) animate-in text-balance rounded-md text-xs data-[state=closed]:animate-out',
  {
    variants: {
      variant: {
        default: 'bg-primary px-3 py-1.5 text-primary-foreground',
        secondary: 'bg-secondary px-3 py-1.5 text-secondary-foreground border border-secondary/30',
        destructive: 'bg-destructive px-3 py-1.5 text-white',
        muted: 'bg-muted px-3 py-1.5 text-muted-foreground border border-muted/30',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

interface TooltipContentProps
  extends React.ComponentProps<typeof TooltipPrimitive.Content>,
    VariantProps<typeof tooltipContentVariants> {
  showArrow?: boolean;
  arrowClassName?: string;
}

function TooltipContent({
  className,
  variant,
  sideOffset = 4,
  showArrow = true,
  arrowClassName,
  children,
  ...props
}: TooltipContentProps) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        className={cn(tooltipContentVariants({ variant }), className)}
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        {...props}
      >
        {children}
        {showArrow && (
          <TooltipPrimitive.Arrow
            className={cn(
              'z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]',
              variant === 'default' && 'bg-primary fill-primary',
              variant === 'secondary' && 'bg-secondary fill-secondary',
              variant === 'destructive' && 'bg-destructive fill-destructive',
              variant === 'muted' && 'bg-muted fill-muted',
              arrowClassName
            )}
          />
        )}
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider, tooltipContentVariants };
export type { TooltipContentProps };
