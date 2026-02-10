"use client";
import "./page.css";

import GradualBlur from "../components/GradualBlur";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Glow from "@/components/ui/glow";
import { Footer } from "@/components/footer-section";
import TerminalButton from "@/components/terminal-button/Terminal-Button";
import ProjectHome from "@/components/projet-home/ProjectHome";
import Tools from "@/components/tools/tools";
import Background from "@/components/background/background";

import Cta from "@/components/cta/cta";
import Certifications from "@/components/certifications/certifications";
import Faq from "@/components/faq/faq";
import BottomShadowOverlay from "@/components/BottomShadowOverlay";
import AlertContainer from "@/components/alert-container/alert-container";

// <GradualBlur target="page" position="top" height="6rem" strength={2} divCount={5} curve="bezier" exponential={true} opacity={1} zIndex={2001} />
export default function Page() {
	return (
		<div>
			<Navbar />
			<TerminalButton />

			<AlertContainer />

			<GradualBlur target="page" position="top" height="6rem" strength={2} divCount={5} curve="bezier" exponential={true} opacity={1} zIndex={1000} />
			<div className="main-window">
				<Hero />
			</div>
			<ProjectHome />
			<Tools />
			<Background />
			<Faq />
			<Cta />
			<Certifications />

			<div className="footer-container">
				<Footer />
			</div>
			<BottomShadowOverlay height={70} opacity={0.6} rgb="9 9 9" zIndex={60} />
		</div>
	);
}
