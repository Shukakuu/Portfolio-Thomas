"use client";
import { useRef } from "react";
import { motion } from "motion/react";
import { TerminalIcon, type TerminalIconHandle } from "@/components/ui/terminal";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function TerminalButton() {
	const termRef = useRef<TerminalIconHandle>(null);

	return (
		<div className="window-button">
			<Dialog>
				<DialogTrigger>
					<motion.button
						type="button"
						className="button"
						whileTap={{ scale: 0.72 }} // shrink rapide au clic
						onClick={() => {
							termRef.current?.startAnimation(); // relance l’anim si tu veux
						}}
					>
						<TerminalIcon ref={termRef} className="svg" />
					</motion.button>
				</DialogTrigger>

				<DialogContent>
					<DialogHeader>
						<DialogTitle>En construction...</DialogTitle>
						<DialogDescription>Cette option est en cours de développement.</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		</div>
	);
}
