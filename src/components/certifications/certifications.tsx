"use client";

import type { FC, ComponentType } from "react";

import StarMessage from "../star-message/StarMessage";
import { Sparkle, Shield, Scale } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { SiReact, SiExpress } from "react-icons/si";
import { FaUserSecret } from "react-icons/fa";

const reviews = [
	{
		name: "ANSSI",
		username: "@secnum",
		body: "Le MOOC officiel de l’ANSSI. (SecNumAcadémie)",
		Icon: Shield,
	},
	{
		name: "CNIL",
		username: "@atelierRGPD",
		body: "Formation gratuite de la CNIL pour maîtriser le RGPD. (Atelier RGPD)",
		Icon: Scale,
	},
	{
		name: "Full-Stack Node.js",
		username: "@nodejsFS",
		body: "Formation dev Full-Stack Node.js Express et MongoDB. (OpenClassrooms)",
		Icon: SiExpress,
	},
	{
		name: "Pass Ton Hack",
		username: "@pentestOC",
		body: "Formation aux bases du hacking réalisée par ©Airbus Defence et Space Cyber 2025. (Place 104/812).",
		Icon: FaUserSecret,
	},
	{
		name: "Débutez avec React",
		username: "@reactBeginner",
		body: "Introduction à React JS. (OpenClassrooms)",
		Icon: SiReact,
	},
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

type ReviewCardProps = {
	Icon?: ComponentType<{ className?: string }>;
	name: string;
	username: string;
	body: string;
};

const ReviewCard: FC<ReviewCardProps> = ({ Icon, name, username, body }) => {
	return (
		<figure className="review-card">
			<div className="review-header">
				<div className="review-avatar">
					<div className="review-avatar">{Icon && <Icon className="svg" />}</div>
				</div>

				<div className="review-meta">
					<figcaption className="review-name">{name}</figcaption>
				</div>
			</div>
			<blockquote className="review-body">{body}</blockquote>
		</figure>
	);
};

export default function Certifications() {
	return (
		<div className="certifications-container">
			<StarMessage Icon={Sparkle} iconProps={{ className: "svg" }} text="Mes certifications" />
			<h1>Les certifications que je possède</h1>
			<p>Un aperçu des certifications que j'ai obtenu au cours de ces dernières années.</p>

			<div className="reviews-scroller">
				<Marquee pauseOnHover className="marquee-row" style={{ ["--duration" as any]: "60s" }}>
					{firstRow.map((review) => (
						<ReviewCard key={review.username} {...review} />
					))}
				</Marquee>

				<Marquee reverse pauseOnHover className="marquee-row" style={{ ["--duration" as any]: "60s" }}>
					{secondRow.map((review) => (
						<ReviewCard key={review.username} {...review} />
					))}
				</Marquee>

				<div className="reviews-fade-left"></div>
				<div className="reviews-fade-right"></div>
			</div>
		</div>
	);
}
