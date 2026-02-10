"use client";

import { ElementType, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, MotionProps } from "motion/react";
import { cn } from "@/lib/utils";

type CharacterSet = string[] | readonly string[];
const DEFAULT_SET = Object.freeze("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*".split("")) as readonly string[];

const rand = (max: number) => Math.floor(Math.random() * max);

interface HyperTextProps extends MotionProps {
	children: string;
	className?: string;
	duration?: number; // ms
	delay?: number; // ms
	as?: ElementType;
	startOnView?: boolean; // joue 1x quand visible (optionnel)
	animateOnHover?: boolean; // joue à l’entrée souris
	characterSet?: CharacterSet;
}

export function HyperText({
	children,
	className,
	duration = 800,
	delay = 0,
	as: Component = "div",
	startOnView = false,
	animateOnHover = true,
	characterSet = DEFAULT_SET,
	...props
}: HyperTextProps) {
	const MotionComponent = motion.create(Component, { forwardMotionProps: true });

	const [display, setDisplay] = useState<string[]>(() => children.split(""));
	const [isAnimating, setIsAnimating] = useState(false);
	const [armed, setArmed] = useState(true); // armé pour un nouveau hover
	const elRef = useRef<HTMLElement>(null);

	// refs pour stopper net
	const rafRef = useRef<number | null>(null);
	const delayRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const stopNow = () => {
		if (delayRef.current) {
			clearTimeout(delayRef.current);
			delayRef.current = null;
		}
		if (rafRef.current) {
			cancelAnimationFrame(rafRef.current);
			rafRef.current = null;
		}
		setIsAnimating(false);
	};

	const onPointerEnter = () => {
		if (!animateOnHover) return;
		if (!armed || isAnimating) return;
		setArmed(false); // désarme tant que la souris est dessus
		setIsAnimating(true);
	};

	const onPointerLeave = () => {
		// stop immédiat + affiche le texte final lisible
		stopNow();
		setDisplay(children.split(""));
		setArmed(true); // réarme pour le prochain hover
	};

	// start on view (une seule fois)
	useEffect(() => {
		if (!startOnView || !elRef.current) return;
		const obs = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					delayRef.current = setTimeout(() => setIsAnimating(true), delay);
					obs.disconnect();
				}
			},
			{ threshold: 0.15, rootMargin: "-30% 0px -30% 0px" }
		);
		obs.observe(elRef.current);
		return () => obs.disconnect();
	}, [startOnView, delay]);

	// animation scramble
	useEffect(() => {
		if (!isAnimating) return;

		const full = children;
		const max = full.length;
		const start = performance.now();

		// seed aléatoire au début
		setDisplay((prev) => prev.map((ch) => (ch === " " ? ch : characterSet[rand(characterSet.length)])));

		const step = (now: number) => {
			const p = Math.min((now - start) / duration, 1);
			const it = Math.floor(p * max);

			setDisplay((prev) => prev.map((_, i) => (full[i] === " " ? " " : i <= it ? full[i] : characterSet[rand(characterSet.length)])));

			if (p < 1) {
				rafRef.current = requestAnimationFrame(step);
			} else {
				// terminé: on attend une sortie/entrée pour rejouer
				setIsAnimating(false);
				// reste désarmé tant que la souris est dessus
			}
		};

		delayRef.current = setTimeout(() => {
			rafRef.current = requestAnimationFrame(step);
		}, delay);

		return () => stopNow();
	}, [isAnimating, children, duration, delay, characterSet]);

	return (
		<MotionComponent
			ref={elRef}
			className={cn("overflow-hidden py-2 text-4xl font-bold", className)}
			onPointerEnter={onPointerEnter}
			onPointerLeave={onPointerLeave}
			{...props}
		>
			<AnimatePresence>
				{display.map((ch, i) => (
					<motion.span key={i} className={ch === " " ? "w-3 inline-block" : undefined}>
						{ch}
					</motion.span>
				))}
			</AnimatePresence>
		</MotionComponent>
	);
}
