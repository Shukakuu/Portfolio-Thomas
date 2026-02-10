"use client";
import { useEffect, useState } from "react";
import { HyperText } from "@/components/ui/hyper-text";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function Navbar({ active = 1 }: { active?: number }) {
	const [scrolled, setScrolled] = useState(false);
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const onScroll = () => {
			const y = window.scrollY || document.documentElement.scrollTop;
			setScrolled(y > 10);

			const doc = document.documentElement;
			const total = doc.scrollHeight - doc.clientHeight;
			const pct = total > 0 ? Math.min(100, Math.max(0, (y / total) * 100)) : 0;
			setProgress(pct);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<div className="header-container">
			<header>
				<div className="icon-ac">
					<p>TC</p>
				</div>
				<div className="list-nav">
					<div className="nav">
						{active === 1 ? <div className="dot"></div> : null}
						<HyperText className={active === 1 ? "active-nav-text" : "nav-text"} animateOnHover duration={1200}>
							Accueil
						</HyperText>
					</div>
					<div className="nav">
						<a href="#project-wrapper">
							{active === 2 ? <div className="dot"></div> : null}
							<HyperText className={active === 2 ? "active-nav-text" : "nav-text"} animateOnHover duration={1200}>
								Projet
							</HyperText>
						</a>
					</div>
					<div className="nav">
						<a href="#contact-container">
							{active === 3 ? <div className="dot"></div> : null}
							<HyperText className={active === 3 ? "active-nav-text" : "nav-text"} animateOnHover duration={1200}>
								Contact
							</HyperText>
						</a>
					</div>
				</div>
				<div className="theme-icon">
					<Dialog>
						<DialogTrigger>
							<div style={{ pointerEvents: "none" }}>
								<AnimatedThemeToggler />
							</div>
						</DialogTrigger>

						<DialogContent>
							<DialogHeader>
								<DialogTitle>En construction...</DialogTitle>
								<DialogDescription>Cette option est en cours de développement.</DialogDescription>
							</DialogHeader>
						</DialogContent>
					</Dialog>
				</div>
			</header>
		</div>
	);
}
