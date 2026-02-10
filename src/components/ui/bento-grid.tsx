import type { ComponentPropsWithoutRef, ReactNode, ComponentType } from "react";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
	children: ReactNode;
	className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
	name: string;
	className: string; // pour le placement grid
	background: ReactNode;
	Icon: ComponentType<{ className?: string }>;
	description: string;
	href: string;
	cta: string;
}

export const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
	const cls = ["bento-grid", className].filter(Boolean).join(" ");
	return (
		<div className={cls} {...props}>
			{children}
		</div>
	);
};

export const BentoCard = ({ name, className, background, Icon, description, href, cta, ...props }: BentoCardProps) => {
	const classes = ["bento-card", className].filter(Boolean).join(" ");
	return (
		<div key={name} className={classes} {...props}>
			<div className="bento-card__bg">{background}</div>

			<div className="bento-card__content bento-card__content--lift">
				{/* Icône */}
				<Icon className="bento-card__icon" />

				{/* Titre */}
				<h3 className="bento-card__title">{name}</h3>

				{/* Description */}
				<p className="bento-card__desc">{description}</p>

				{/* Actions (mobile visible) */}
				<div className="bento-card__actions bento-card__actions--mobile">
					<a className="link-btn" href={href}>
						{cta}
						<svg className="link-btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
							<path d="M5 12h14M13 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</a>
				</div>
			</div>

			{/* Actions desktop (hover) */}
			<div className="bento-card__actions">
				<a className="link-btn" href={href}>
					{cta}
					<svg className="link-btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
						<path d="M5 12h14M13 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</a>
			</div>

			<div className="bento-card__overlay" />
		</div>
	);
};
