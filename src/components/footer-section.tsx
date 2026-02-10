"use client";
import React, { type ComponentProps, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { FacebookIcon, FrameIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from "lucide-react";

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}
interface FooterSection {
	label: string;
	links: FooterLink[];
}

const footerLinks: FooterSection[] = [];

export function Footer() {
	return (
		<footer className="footer">
			<div className="footer__grid">
				<AnimatedContainer className="footer__brand">
					<div className="icon-ac">
						<p>TC</p>
					</div>
					<p className="footer__copy">© {new Date().getFullYear()} Thomas Culminique. All rights reserved.</p>
				</AnimatedContainer>

				<div className="footer__sections">
					{footerLinks.map((section, index) => (
						<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
							<div className="footer__section">
								<h3 className="footer__sectionTitle">{section.label}</h3>
								<ul className="footer__links">
									{section.links.map((link) => (
										<li key={link.title}>
											<a href={link.href} className="footer__link">
												{link.icon && <link.icon className="footer__linkIcon" />}
												{link.title}
											</a>
										</li>
									))}
								</ul>
							</div>
						</AnimatedContainer>
					))}
				</div>
			</div>
		</footer>
	);
}

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<"div">["className"];
	children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const reduce = useReducedMotion();
	if (reduce) return <div className={className}>{children}</div>;

	return (
		<motion.div
			initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
			whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
