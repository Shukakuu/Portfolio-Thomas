import { ComponentType, SVGProps } from "react";

type LucideLike = ComponentType<SVGProps<SVGSVGElement>>;

import ShinyText from "@/components/ShinyText";

type StarMessageProps = {
	Icon: LucideLike; // ex: Star, Heart, Bell de lucide-react
	text: string;
	iconProps?: SVGProps<SVGSVGElement>; // ex: { size: 20, className: "text-yellow-500" }
};

export default function StarMessage({ Icon, text, iconProps }: StarMessageProps) {
	return (
		<div className="star-message">
			<Icon {...iconProps} />
			<ShinyText text={text} disabled={false} speed={3} className="text" />
		</div>
	);
}
