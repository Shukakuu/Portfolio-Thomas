import * as React from "react";
import { cn } from "@/lib/utils";

type AlertProps = React.ComponentProps<"div"> & {
	variant?: "default" | "destructive";
};

function Alert({ className, variant = "default", ...props }: AlertProps) {
	return <div data-slot="alert" role="alert" className={cn("alert", variant === "destructive" && "alert--destructive", className)} {...props} />;
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
	return <div data-slot="alert-title" className={cn("alert__title", className)} {...props} />;
}

function AlertDescription({ className, ...props }: React.ComponentProps<"div">) {
	return <div data-slot="alert-description" className={cn("alert__description", className)} {...props} />;
}

export { Alert, AlertTitle, AlertDescription };
