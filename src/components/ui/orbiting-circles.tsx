"use client";
import React from "react";
import { cn } from "@/lib/utils";

type Props = {
	className?: string;
	children?: React.ReactNode;
	reverse?: boolean;
	duration?: number;
	radius?: number;
	iconSize?: number;
	speed?: number;
	path?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export function OrbitingCircles({
	className,
	children,
	reverse = false,
	duration = 20,
	radius = 160,
	iconSize = 30,
	speed = 1,
	path = false,
	...props
}: Props) {
	const count = React.Children.count(children) || 1;
	const dur = duration / Math.max(0.001, speed);

	return (
		<div
			className={cn(
				// ➜ wrapper sans espace, collé aux bords du parent
				"absolute inset-0 m-0 p-0 leading-none",
				className
			)}
			{...props}
		>
			{path && (
				// ➜ path centré, concentrique
				<svg className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" width={radius * 2} height={radius * 2}>
					<circle cx={radius} cy={radius} r={radius} fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth={1.5} shapeRendering="geometricPrecision" />
				</svg>
			)}

			{React.Children.map(children, (child, i) => {
				const angle = (360 / count) * i;
				return (
					<div
						// ➜ chaque orbiteur part du centre, zéro marge
						className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit"
						style={
							{
								"--duration": dur,
								"--radius": radius,
								"--angle": angle,
								"--icon-size": `${iconSize}px`,
								animationDirection: reverse ? "reverse" : "normal",
							} as React.CSSProperties
						}
					>
						<div className="flex size-[var(--icon-size)] items-center justify-center">
							{React.isValidElement(child) ? React.cloneElement(child as any, { size: iconSize }) : child}
						</div>
					</div>
				);
			})}
		</div>
	);
}
