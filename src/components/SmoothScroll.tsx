"use client";
import React, { useEffect, useRef } from "react";
import Lenis from "lenis";

type Props = { children: React.ReactNode };

export default function SmoothScroll({ children }: Props) {
	const rafId = useRef<number | null>(null);

	useEffect(() => {
		if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) return;

		const lenis = new Lenis({
			// 1. Durée plus courte pour la réactivité
			duration: 1.2, 
			// 2. Easing "Quart" : démarrage rapide, fin très douce
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
			orientation: "vertical",
			gestureOrientation: "vertical",
			smoothWheel: true,
			// On évite de toucher au deltaY manuellement pour garder la précision du hardware
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