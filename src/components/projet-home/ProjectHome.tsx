"use client";
import { useRef } from "react";

import StarMessage from "../star-message/StarMessage";
import { Sparkle, Check } from "lucide-react";

export default function ProjectHome() {
	return (
		<div className="project-home-container" id="project-wrapper">
			<StarMessage Icon={Sparkle} iconProps={{ className: "svg" }} text="Mes projets" />
			<h1>Mes derniers projets en 2025</h1>
			<p>Un aperçu des projets que j’ai réalisés au cours de ces dernières années.</p>

			<div className="project-wrapper">
				<div className="project">
					<div className="img-wrapper">
						<img src="project/memories.jpg" />
					</div>
					<div className="text-container">
						<h2>Memories</h2>
					</div>
					<div className="text-container">
						<p>PHP, HTML/CSS, JS, MYSQL</p>
						<p>2024</p>
					</div>
				</div>
				<div className="right">
					<div className="project">
						<div className="img-wrapper">
							<img src="project/organisme.jpg" />
						</div>
						<div className="text-container">
							<h2>Orgenanis'me</h2>
						</div>
						<div className="text-container">
							<p>PHP, HTML/CSS, JS, MYSQL</p>
							<p>2024</p>
						</div>
					</div>
				</div>
			</div>

			<hr style={{ marginTop: "10vh" }} />
		</div>
	);
}
