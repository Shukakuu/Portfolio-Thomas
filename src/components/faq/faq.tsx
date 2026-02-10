"use client";
import { useEffect, useState } from "react";
import StarMessage from "../star-message/StarMessage";
import { Sparkle, Check, Notebook, BriefcaseBusiness } from "lucide-react";
import Silk from "../Silk";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BorderBeam } from "@/components/ui/border-beam";
import { MagicCard } from "@/components/ui/magic-card";

const items = [
	{
		id: "1",
		title: "Depuis quand est-ce que je développe ?",
		content:
			"J'ai eu l'occasion de découvrir le développement web en 2022 lors d'un de mes stages. J'ai donc continuer en autodidacte car ça me plaisait vraiment de créer des projets de A à Z à mon image.",
	},
	{
		id: "2",
		title: "Quels langages de programmation je maîtrise ?",
		content:
			"J'aime travailler avec Javascript et CSS pour mes interfaces web dynamiques, côté back-end, je suis à l'aise avec PHP et en apprentissage de Node.js. J'ai aussi des connaissances en Python pour créer des outils d'automatisation.",
	},
	{
		id: "3",
		title: "Quelles sont mes objectifs plus tard ?",
		content:
			"Plus tard, j'aimerais travailler dans le domaine de l'informatique embarqué, en particulier dans des organismes d'état pour contribuer à la sureté nationale.",
	},
	{
		id: "4",
		title: "Quels sont mes objectif pour 2026 ?",
		content:
			"Pour 2026 j'aimerais finir ce portfolio et trouver une alternances afin d'effectuer une réorientation vers un BTS SIO option SISR car c'est une filière plus concrète et me forger une expérience plus solide grâce à l'alternance.",
	},
];

export default function Faq() {
	return (
		<div className="faq-container">
			<StarMessage Icon={Sparkle} iconProps={{ className: "svg" }} text="FAQ" />
			<h1>Des questions ?</h1>
			<div className="faq">
				<div className="left">
					<div className="acc-section">
						<Accordion type="single" collapsible className="acc">
							{items.map((item) => (
								<MagicCard className="acc-item" gradientFrom="#ffa94070" gradientTo="#9c40ff52">
									<AccordionItem value={item.id} key={item.id}>
										<AccordionTrigger className="acc-trigger">
											<div className="acc-wrap">
												<p className="first">0{item.id}.</p>
												{item.title}
											</div>
										</AccordionTrigger>

										<AccordionContent className="acc-content">{item.content}</AccordionContent>
									</AccordionItem>
								</MagicCard>
							))}
						</Accordion>
					</div>
				</div>
				<div className="right">
					<div className="card">
						<div className="review-avatar">
							<div className="review-avatar">
								<Notebook className="svg2" />
							</div>
						</div>
						<h2>Frameworks</h2>
						<p>Je maîtrise plusieurs frameworks modernes comme React.js et Next.js.</p>
						<BorderBeam duration={8} size={100} colorFrom="#ffaa40" colorTo="#9c40ff" borderWidth={1} />
					</div>

					<div className="card">
						<div className="review-avatar">
							<BriefcaseBusiness className="svg2" />
						</div>
						<h2>Certifications</h2>
						<p>Je possède plusieurs certifications, comme Pass Ton Hack et Cisco NetaCad.</p>
						<BorderBeam duration={8} size={100} colorFrom="#ffaa40" colorTo="#9c40ff" borderWidth={1} />
					</div>
				</div>
			</div>
			<hr style={{ marginTop: "10vh" }} />
		</div>
	);
}
