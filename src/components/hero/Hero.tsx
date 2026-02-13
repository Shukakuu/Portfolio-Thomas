"use client";
import { useEffect, useState } from "react";
import LanguageCarousel from "../language/LanguageCarousel";
import { File, Search, Settings, Github, ArrowUpRight } from "lucide-react";

import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { TypingAnimation } from "@/components/ui/typing-animation";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { BellIcon, CalendarIcon, FileTextIcon, GlobeIcon, InputIcon } from "@radix-ui/react-icons";

const features = [
	{
		Icon: FileTextIcon,
		name: "Save your files",
		description: "We automatically save your files as you type.",
		href: "/",
		cta: "Learn more",
		background: "",
		className: "lg-row-start-1 lg-row-end-4 lg-col-start-2 lg-col-end-3",
	},
	{
		Icon: InputIcon,
		name: "Full text search",
		description: "Search through all your files in one place.",
		href: "/",
		cta: "Learn more",
		background: "",
		className: "lg-col-start-1 lg-col-end-2 lg-row-start-1 lg-row-end-3",
	},
	{
		Icon: GlobeIcon,
		name: "Multilingual",
		description: "Supports 100+ languages and counting.",
		href: "/",
		cta: "Learn more",
		background: "",
		className: "lg-col-start-1 lg-col-end-2 lg-row-start-3 lg-row-end-4",
	},
	{
		Icon: CalendarIcon,
		name: "Calendar",
		description: "Use the calendar to filter your files by date.",
		href: "/",
		cta: "Learn more",
		background: "",
		className: "lg-col-start-3 lg-col-end-3 lg-row-start-1 lg-row-end-2",
	},
	{
		Icon: BellIcon,
		name: "Notifications",
		description: "Get notified when someone shares a file or mentions you in a comment.",
		href: "/",
		cta: "Learn more",
		background: "",
		className: "lg-col-start-3 lg-col-end-3 lg-row-start-2 lg-row-end-4",
	},
];

export default function Hero() {
	return (
		<div className="hero-container">
			<div className="top">
				<div className="left">
					<div className="top-button">
						<a href="https://github.com/Shukakuu">
							<RainbowButton>
								<Github /> Github <ArrowUpRight />
							</RainbowButton>
						</a>
					</div>

					<div className="welcome-container">
						<TypingAnimation startOnView loop typeSpeed={150} pauseDelay={3000} className="h2">
							Enchanté,
						</TypingAnimation>
						<img src="/hand.png" alt="hand" />
					</div>

					<h1>
						Thomas <br />
						<span className="purple">Culminique</span>
					</h1>

					<div className="desc">
						<p>
							Actuellement en BTS CIEL, je me passionne pour l'informatique orientée réseaux et le développement. 
							Je vous invite, à travers ce portfolio, à découvrir mes compétences et mes projets d'apprentissage.
						</p>
					</div>
				</div>

				<div className="right"></div>
			</div>

			<div className="bottom">
				<hr />
				<LanguageCarousel />
				<hr />
			</div>
		</div>
	);
}
