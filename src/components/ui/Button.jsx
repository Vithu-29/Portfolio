import React from "react";
import { cn } from "../../utils";

const buttonVariants = {
	default: "bg-primary text-popover hover:bg-primary/90",
	outline: "border border-input bg-background hover:bg-muted hover:text-accent-foreground",
	secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
	ghost: "hover:bg-muted/60 hover:text-accent-foreground",
	link: "text-primary underline-offset-4 hover:underline",
};

const buttonSizes = {
	default: "h-10 px-4 py-2",
	sm: "h-9 rounded-md px-3",
	lg: "h-11 rounded-md px-8",
	icon: "h-10 w-10",
};

export default function Button({ className, variant = "default", size = "default", asChild = false, children, ...props }) {
	const Comp = asChild ? React.cloneElement(children, props) : "button";

	if (asChild) {
		return React.cloneElement(children, {
			className: cn(
				"inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cusor-pointer",
				buttonVariants[variant],
				buttonSizes[size],
				className
			),
			...props,
		});
	}

	return (
		<button
			className={cn(
				"inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
				buttonVariants[variant],
				buttonSizes[size],
				className
			)}
			{...props}
		>
			{children}
		</button>
	);
}