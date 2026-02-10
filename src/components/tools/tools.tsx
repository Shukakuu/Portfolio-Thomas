"use client";
import { useRef } from "react";

import StarMessage from "../star-message/StarMessage";
import { Sparkle, Check } from "lucide-react";

export default function Tools() {
	return (
		<div className="tools-container">
			<StarMessage
				Icon={Sparkle}
				iconProps={{ className: "svg" }}
				text="Outils / logiciels
utilisé"
			/>
			<div className="tools-wrapper">
				<div className="left">
					<div className="title-tmr">
						<h1>Mes outils / logiciels maitrisés</h1>
						<p>
							Toutes ces connaissances ont été acquises de différentes façons. Elles ont été acquises durant mes études en Bac Pro Système Numérique/BTS CIEL et d'autres par ma propre
							initiative en essayant de mettre en place des solutions dans divers projets créer par mes soins.
						</p>
					</div>
				</div>
				<div className="right">
					<div className="badge-container">
						<div className="badge">
							<div className="icon">
								<Check className="svg" size={13} />
							</div>
							<p>Visual Studio</p>
						</div>

						<div className="badge">
							<div className="icon">
								<Check className="svg" size={13} />
							</div>
							<p>Visual Studio Code</p>
						</div>

						<div className="badge">
							<div className="icon">
								<Check className="svg" size={13} />
							</div>
							<p>PyCharm</p>
						</div>

						<div className="badge">
							<div className="icon">
								<Check className="svg" size={13} />
							</div>
							<p>Git</p>
						</div>

						<div className="badge">
							<div className="icon">
								<Check className="svg" size={13} />
							</div>
							<p>Github</p>
						</div>

						<div className="badge">
							<div className="icon">
								<Check className="svg" size={13} />
							</div>
							<p>Photoshop</p>
						</div>

						<div className="badge">
							<div className="icon">
								<Check className="svg" size={13} />
							</div>
							<p>CapCut</p>
						</div>

						<div className="badge">
							<div className="icon">
								<Check className="svg" size={13} />
							</div>
							<p>Virtual Box</p>
						</div>

						<div className="badge">
							<div className="icon">
								<Check className="svg" size={13} />
							</div>
							<p>Figma</p>
						</div>

						<div className="badge">
							<div className="icon">
								<Check className="svg" size={13} />
							</div>
							<p>Fedora/Debian</p>
						</div>
					</div>
				</div>
			</div>
			<hr style={{ marginTop: "6vh" }} />
		</div>
	);
}
