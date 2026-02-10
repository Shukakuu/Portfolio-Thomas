import React, { useRef, useLayoutEffect, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedContentProps {
	children: ReactNode;
	distance?: number;
	direction?: "vertical" | "horizontal";
	reverse?: boolean;
	duration?: number;
	ease?: string | ((progress: number) => number);
	initialOpacity?: number;
	animateOpacity?: boolean;
	scale?: number;
	threshold?: number;
	delay?: number;
	onComplete?: () => void;
	trigger?: "scroll" | "load"; // 🔥 nouveau
}

const AnimatedContent: React.FC<AnimatedContentProps> = ({
	children,
	distance = 100,
	direction = "vertical",
	reverse = false,
	duration = 0.8,
	ease = "power3.out",
	initialOpacity = 0,
	animateOpacity = true,
	scale = 1,
	threshold = 0.1,
	delay = 0,
	onComplete,
	trigger = "scroll", // par défaut : ancien comportement
}) => {
	const ref = useRef<HTMLDivElement>(null);

	const axis = direction === "horizontal" ? "x" : "y";
	const offset = reverse ? -distance : distance;

	const initialTransform = axis === "x" ? `translateX(${offset}px) scale(${scale})` : `translateY(${offset}px) scale(${scale})`;

	useLayoutEffect(() => {
		const el = ref.current;
		if (!el) return;

		const animConfig: gsap.TweenVars = {
			x: axis === "x" ? 0 : undefined,
			y: axis === "y" ? 0 : undefined,
			scale: 1,
			opacity: 1,
			duration,
			ease,
			delay,
			onComplete,
		};

		if (trigger === "scroll") {
			const startPct = (1 - threshold) * 100;

			animConfig.scrollTrigger = {
				trigger: el,
				start: `top ${startPct}%`,
				toggleActions: "play none none none",
				once: true,
			};
		}

		const tween = gsap.to(el, animConfig);

		return () => {
			if (trigger === "scroll") {
				ScrollTrigger.getAll().forEach((t) => t.kill());
			}
			tween.kill();
		};
	}, [axis, distance, reverse, duration, ease, initialOpacity, animateOpacity, scale, threshold, delay, onComplete, trigger]);

	return (
		<div
			ref={ref}
			style={{
				opacity: animateOpacity ? initialOpacity : 1,
				transform: initialTransform,
			}}
		>
			{children}
		</div>
	);
};

export default AnimatedContent;
