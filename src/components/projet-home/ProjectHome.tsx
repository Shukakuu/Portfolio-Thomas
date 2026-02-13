"use client";
import { useRef } from "react";

import StarMessage from "../star-message/StarMessage";
import { Sparkle, Check } from "lucide-react";

export default function ProjectHome() {
	return (
		<div className="project-home-container" id="project-wrapper">
			<StarMessage Icon={Sparkle} iconProps={{ className: "svg" }} text="Mes projets" />
			<h1>Mes derniers projets</h1>
			<p>Un aperçu des projets que j’ai réalisé au cours de ces dernières années.</p>

			<div className="project-wrapper">
				<div className="project">
					<div className="img-wrapper">
						<img src="project/lhn.jpg" />
					</div>
					<div className="text-container">
						<h2>LHN NUMÉRIQUE ENGAGÉ</h2>
					</div>
					<div className="text-container">
						<p>REACT, TypeScript, CSS, Javascript</p>
						<p>2026</p>
					</div>
				</div>
				<div className="right">
					<div className="project">
						<div className="img-wrapper">
							<img src="project/next.jpg" />
						</div>
						<div className="text-container">
							<h2>Votre projet</h2>
						</div>
						<div className="text-container">
							<p>Si vous avez confiance en mon travail, n'hésitez pas à me contacter pour discuter de votre projet !</p>
							<p></p>
						</div>
					</div>
				</div>
			</div>

			<hr style={{ marginTop: "10vh" }} />
		</div>
	);
}
