"use client";
import { useEffect, useState } from "react";
import StarMessage from "../star-message/StarMessage";
import { Sparkle, Check } from "lucide-react";
import Silk from "../Silk";

import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import AnimatedContent from "../AnimatedContent";

export default function AlertContainer() {
	return (
		<div className="alert-container-wrapper">
			<AnimatedContent
				trigger="load"
				distance={150}
				direction="vertical"
				reverse={false}
				duration={1.2}
				ease="bounce.out"
				initialOpacity={0}
				animateOpacity
				scale={1.1}
				threshold={0.2}
				delay={0}
			>
				<Alert variant="destructive">
					<AlertCircleIcon />
					<AlertTitle>En construction...</AlertTitle>
					<AlertDescription>
						<p>Ce portfollio est en cours de développement.</p>
					</AlertDescription>
				</Alert>
			</AnimatedContent>
		</div>
	);
}
