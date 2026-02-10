// src/components/SmoothScroll.tsx
"use client";
import React, { useEffect, useRef } from "react";
import Lenis from "lenis";

type Props = { children: React.ReactNode };

// ✦ Réglages faciles à tweaker
const DURATION = 0.7; // 0.7–1.0 = subtil
const END_ZONE = 700; // px avant le bas où on freine
const MIN_FACTOR = 0.35; // 0.25–0.45 = frein + ou -

export default function SmoothScroll({ children }: Props) {
	const rafId = useRef<number | null>(null);

	useEffect(() => {
		// Respecte les préférences d’accessibilité : pas de scroll custom
		if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) {
			return;
		}

		const virtualScroll = (e: any): boolean => {
			const max = document.documentElement.scrollHeight - window.innerHeight;
			const y = window.scrollY;
			const distToEnd = Math.max(0, max - y);

			// 1 → natif, MIN_FACTOR → fort freinage
			const factor = distToEnd >= END_ZONE ? 1 : Math.max(MIN_FACTOR, distToEnd / END_ZONE);
			e.deltaY *= factor;
			return true; // appliquer le lissage
		};

		const lenis = new Lenis({
			duration: DURATION,
			easing: (t: number) => 1 - Math.pow(1 - t, 3), // easeOutCubic = smooth mais “normal”
			gestureOrientation: "vertical",
			smoothWheel: true, // fluide à la molette
			syncTouch: true, // sur mobile, comportement proche du natif
			virtualScroll, // freinage de fin
		});

		const raf = (time: number) => {
			lenis.raf(time);
			rafId.current = requestAnimationFrame(raf);
		};
		rafId.current = requestAnimationFrame(raf);

		return () => {
			if (rafId.current) cancelAnimationFrame(rafId.current);
			lenis.destroy();
		};
	}, []);

	return <>{children}</>;
}
