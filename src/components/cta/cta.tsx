"use client";
import { useState } from "react";
import StarMessage from "../star-message/StarMessage";
import { Sparkle } from "lucide-react";
import Silk from "../Silk";
import ContactModal from "./ContactModal";
import LanguageCarousel from "../language/LanguageCarousel";

						<LanguageCarousel />

export default function Cta() {
	const [open, setOpen] = useState(false);
	return (
		<div className="cta-container" id="contact-container">
			<div className="cta">
				<div className="cta-bg">
					<Silk speed={3} scale={1} color="#633e83ff" noiseIntensity={1.5} rotation={0} />
				</div>

				<div className="cta-content">
					<div className="center">
						<StarMessage Icon={Sparkle} iconProps={{ className: "svg" }} text="REALISER VOS PROJETS" />
					</div>
					<div className="center">
						<h1>Une idée dont vous voudriez me parler?</h1>
					</div>
					<div className="center">
						<button className="animated-button" onClick={() => setOpen(true)}>
							<span>Me contacter</span>
							<span></span>
						</button>
					</div>
					{open && <ContactModal onClose={() => setOpen(false)} />}
				</div>
			</div>
		</div>
	);
}
