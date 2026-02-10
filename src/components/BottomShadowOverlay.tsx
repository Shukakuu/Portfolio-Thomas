// src/components/BottomShadowOverlay.tsx
"use client";
import React from "react";

type BottomShadowOverlayProps = {
	/** Hauteur de l’ombre (px) */
	height?: number;
	/** Opacité 0–1 (0.4 par défaut) */
	opacity?: number;
	/** Couleur de base (CSS color). Ex: "0 0 0" (noir), "17 24 39" (slate-900) */
	rgb?: string;
	/** z-index (50 par défaut) */
	zIndex?: number;
	/** Blur optionnel en px (0 par défaut) */
	blur?: number;
	/** Classes additionnelles si besoin */
	className?: string;
};

export default function BottomShadowOverlay({
	height = 96, // ~24rem Tailwind: h-24
	opacity = 0.4, // douceur par défaut
	rgb = "0 0 0", // noir
	zIndex = 50,
	blur = 0,
	className,
}: BottomShadowOverlayProps) {
	return (
		<div
			aria-hidden="true"
			className={className}
			style={{
				position: "fixed",
				left: 0,
				right: 0,
				bottom: 0,
				height,
				pointerEvents: "none",
				zIndex,
				// dégradé du bas (opaque) vers le haut (transparent)
				background: `linear-gradient(to top, rgb(${rgb} / ${opacity}) 0%, transparent 100%)`,
				filter: blur ? `blur(${blur}px)` : undefined,
			}}
		/>
	);
}
