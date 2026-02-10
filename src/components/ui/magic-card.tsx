"use client";

import React, { useCallback, useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import type { MotionStyle } from "motion/react";
import { cn } from "@/lib/utils";

interface MagicCardProps {
	children?: React.ReactNode;
	className?: string;
	gradientSize?: number; // rayon du beam (bordure autour de la souris)
	gradientColor?: string; // couleur du spotlight intérieur
	gradientOpacity?: number; // opacité du spotlight intérieur
	gradientFrom?: string; // couleur A du dégradé de bordure
	gradientTo?: string; // couleur B du dégradé de bordure
	borderWidth?: number; // épaisseur de la bordure
}

export function MagicCard({
	children,
	className,
	gradientSize = 200,
	gradientColor = "#1a1a1aff",
	gradientOpacity = 0.1,
	gradientFrom = "#9E7AFF",
	gradientTo = "#FE8BBB",
	borderWidth = 1,
}: MagicCardProps) {
	const mouseX = useMotionValue(-gradientSize);
	const mouseY = useMotionValue(-gradientSize);

	const reset = useCallback(() => {
		mouseX.set(-gradientSize);
		mouseY.set(-gradientSize);
	}, [gradientSize, mouseX, mouseY]);

	const handlePointerMove = useCallback(
		(e: React.PointerEvent<HTMLDivElement>) => {
			const rect = e.currentTarget.getBoundingClientRect();
			mouseX.set(e.clientX - rect.left);
			mouseY.set(e.clientY - rect.top);
		},
		[mouseX, mouseY]
	);

	useEffect(() => {
		reset();
	}, [reset]);

	useEffect(() => {
		const handleGlobalPointerOut = (e: PointerEvent) => {
			if (!e.relatedTarget) reset();
		};
		const handleVisibility = () => {
			if (document.visibilityState !== "visible") reset();
		};
		window.addEventListener("pointerout", handleGlobalPointerOut);
		window.addEventListener("blur", reset);
		document.addEventListener("visibilitychange", handleVisibility);
		return () => {
			window.removeEventListener("pointerout", handleGlobalPointerOut);
			window.removeEventListener("blur", reset);
			document.removeEventListener("visibilitychange", handleVisibility);
		};
	}, [reset]);

	return (
		<div className={cn("group relative rounded-[inherit]", className)} onPointerMove={handlePointerMove} onPointerLeave={reset} onPointerEnter={reset}>
			{/* Bordure dégradée — invisible par défaut, visible UNIQUEMENT au hover,
          et limitée à une zone autour de la souris */}
			<motion.div
				className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
				style={
					{
						padding: `${borderWidth}px`,
						background: useMotionTemplate`
              radial-gradient(
                ${gradientSize}px circle at ${mouseX}px ${mouseY}px,
                ${gradientFrom},
                ${gradientTo},
                transparent 100%
              )
            `,
						WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
						WebkitMaskComposite: "xor" as any,
						mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",

						maskComposite: "exclude",
						boxSizing: "border-box",
					} as MotionStyle
				}
			/>

			{/* Spotlight intérieur — invisible par défaut, visible au hover */}
			<motion.div
				className="pointer-events-none absolute inset-px rounded-[inherit] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
				style={{
					background: useMotionTemplate`
            radial-gradient(
              ${gradientSize}px circle at ${mouseX}px ${mouseY}px,
              ${gradientColor},
              transparent 100%
            )
          `,
					opacity: gradientOpacity,
					mixBlendMode: "normal",
				}}
			/>

			{/* Contenu */}
			<div className="relative">{children}</div>
		</div>
	);
}
