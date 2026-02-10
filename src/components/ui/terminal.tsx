"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { cn } from "@/lib/utils";

export interface TerminalIconHandle {
	startAnimation: () => void;
	stopAnimation: () => void;
}

interface TerminalIconProps extends HTMLAttributes<HTMLDivElement> {
	size?: number;
	autoStart?: boolean; // default: true
}

const lineVariants: Variants = {
	normal: { opacity: 1 },
	animate: {
		opacity: [1, 0, 1],
		transition: { duration: 0.8, repeat: Infinity, ease: "linear" },
	},
};

const TerminalIcon = forwardRef<TerminalIconHandle, TerminalIconProps>(({ className, size = 28, autoStart = true, ...props }, ref) => {
	const controls = useAnimation();
	const isControlledRef = useRef(false);

	useImperativeHandle(ref, () => {
		isControlledRef.current = true;
		return {
			startAnimation: () => controls.start("animate"),
			stopAnimation: () => controls.start("normal"),
		};
	});

	// ➜ animation en continu au mount (si pas contrôlé par ref)
	useEffect(() => {
		if (autoStart && !isControlledRef.current) {
			controls.start("animate");
		}
	}, [autoStart, controls]);

	return (
		<div className={cn(className)} {...props}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={size}
				height={size}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor" /* mets color via CSS: .yourClass { color:#000 } */
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<polyline points="4 17 10 11 4 5" />
				<motion.line x1="12" x2="20" y1="19" y2="19" variants={lineVariants} animate={controls} initial="normal" />
			</svg>
		</div>
	);
});

TerminalIcon.displayName = "TerminalIcon";

export { TerminalIcon };
