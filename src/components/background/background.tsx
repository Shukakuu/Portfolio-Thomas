"use client";
import { useRef } from "react";
import StarMessage from "../star-message/StarMessage";
import { Sparkle } from "lucide-react";
import { DottedMap } from "@/components/ui/dotted-map";
import { Building2, Calendar } from "lucide-react";

const markers = [
    { lat: 48.8566, lng: 2.3522, size: 0.3 }, // Paris
];

const experiences = [
    {
        title: "Stage 2nd Bac Pro SN",
        company: "Witt Groupe France",
        period: "2022 - 2023",
        description: "Durant ces deux stages, j'ai pu m'initier au développement web avec HTML et CSS, ainsi qu'au support informatique en aidant les employés à résoudre leurs problèmes techniques.",
        technologies: ["HTML", "CSS", "Support Informatique"],
    },
    {
        title: "Stage 1ère Bac Pro SN",
        company: "Wolf Dog Production",
        period: "2023 - 2024",
        description: "Durant ce stage de 5 semaines, j'ai principalement fait de la convertion d'une application de Angular vers React JS",
        technologies: ["Wordpress", "Serveur NAS", "Production Audiovisuelle"],
    },
    {
        title: "Stage Terminal Bac Pro SN",
        company: "SQL Partner",
        period: "2024",
        description: "J'ai pu avoir l'occasion de travailler sur le site web de l'entreprise, en réalisant la page contact et un questionnaire intelligent en PHP et Javascript",
        technologies: ["Wordpress", "JavaScript", "PHP"],
    },
    {
        title: "BTS CIEL",
        company: "Lycée UFA Heinrich Nessel",
        period: "2025 - 2026",
    },
    {
        title: "Baccalauréat Professionnel Système Numérique Option C Réseau Informatique et Systèmes Communicants",
        company: "Lycée Gutenberg",
        period: "2022 - 2025",
    },
];

export default function Background() {
    return (
        <div className="mybackground-container">
            <StarMessage Icon={Sparkle} iconProps={{ className: "svg" }} text="Parcours" />
            <div className="title-tmr">
                <h1>Mon parcours</h1>
            </div>
            <div className="mybackground">
                <div className="left">
                    <div className="tl-container">
                        <div 
                            className="tl tl-scrollable"
                            style={{
                                maxHeight: '70vh',
                                overflowY: 'auto',
                                overflowX: 'hidden',
                                paddingRight: '10px',
                                position: 'relative',
                                zIndex: 1,
                            }}
                        >
                            {/* ligne verticale */}
                            <div className="tl-line" />
                            {experiences.map(({ company, description, period, technologies, title }, index) => (
                                <div key={`${company}-${period}`} className="tl-item">
                                    {/* point */}
                                    <div className="tl-dot" />
                                    {/* contenu */}
                                    <div className="tl-content">
                                        <div className="tl-head">
                                            <div className="tl-head__avatar">
                                                <Building2 className="tl-head__icon" aria-hidden="true" />
                                            </div>
                                            <span className="tl-company">{company}</span>
                                        </div>
                                        <div>
                                            <h3 className="tl-title">{title}</h3>
                                            <div className="tl-period">
                                                <Calendar className="tl-period__icon" />
                                                <span>{period}</span>
                                            </div>
                                        </div>
                                        {technologies && (
                                            <>
                                                <p className="tl-desc">{description}</p>
                                                <div className="tl-badges">
                                                    {technologies.map((tech) => (
                                                        <span key={tech} className="tl-badge">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="map-shell">
                        <div className="radial-bg" />
                        <DottedMap markers={markers} />
                    </div>
                </div>
            </div>
            <hr style={{ marginTop: "6vh" }} />
        </div>
    );
}