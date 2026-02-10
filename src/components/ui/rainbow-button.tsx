import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const rainbowButton = cva(
	[
		// base
		"relative inline-flex items-center justify-center gap-2 shrink-0",
		"cursor-pointer select-none",
		"rounded-full outline-none focus-visible:ring-[3px]",
		"text-sm font-medium whitespace-nowrap",
		"disabled:pointer-events-none disabled:opacity-50",
		"text-black dark:text-black", // <-- texte noir (et icônes, via currentColor)
		"[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",

		// blanche + bordure rainbow
		"bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(0,0,0,0.06)_80%,transparent),linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))]",
		"bg-[length:200%] [background-clip:padding-box,border-box,border-box] [background-origin:border-box]",
		"[border:calc(0.125rem)_solid_transparent]",
		"transition-[box-shadow,transform,background-position] duration-300",
		"hover:[background-position:100%]",
	].join(" "),
	{
		variants: {
			size: {
				default: "h-9 px-4 py-2",
				sm: "h-8 px-3 text-xs",
				lg: "h-11 px-8",
				icon: "size-9",
			},
		},
		defaultVariants: {
			size: "default",
		},
	}
);

type RainbowButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof rainbowButton> & {
		asChild?: boolean;
	};

export const RainbowButton = React.forwardRef<HTMLButtonElement, RainbowButtonProps>(({ className, size, asChild = false, ...props }, ref) => {
	const Comp = asChild ? Slot : "button";
	return <Comp ref={ref} data-slot="button" className={cn(rainbowButton({ size }), className)} {...props} />;
});

RainbowButton.displayName = "RainbowButton";
