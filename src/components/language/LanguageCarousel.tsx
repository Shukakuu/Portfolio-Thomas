"use client";
import LogoLoop from "@/components/LogoLoop";
import { SiReact, SiNextdotjs, SiPhp, SiMysql, SiTypescript, SiHtml5, SiCss3, SiPython, SiNodedotjs, SiDotnet, SiC, SiCplusplus } from "react-icons/si";

export const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiPhp />, title: "PHP", href: "https://www.php.net" },
    { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/docs/Web/HTML" },
    { node: <SiCss3 />, title: "CSS3", href: "https://developer.mozilla.org/docs/Web/CSS" },
    { node: <SiPython />, title: "Python", href: "https://www.python.org" },
    { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiC />, title: "C", href: "https://en.wikipedia.org/wiki/C_(programming_language)" },
    { node: <SiCplusplus />, title: "C++", href: "https://isocpp.org" },
];

export default function LanguageCarousel() {
    return (
        <div className="LanguageCarousel-container">
            <div className="LanguageCarousel">
                <div style={{ position: "relative", overflow: "hidden" }}>
                    <LogoLoop
                        logos={techLogos}
                        speed={60}
                        direction="left"
                        logoHeight={48}
                        gap={40}
                        pauseOnHover
                        scaleOnHover
                        fadeOut
                        fadeOutColor="#090909"
                        ariaLabel="Technology partners"
                    />
                </div>
            </div>
        </div>
    );
}