import clsx from "clsx";

interface Props {
	variant?:
		| "display"
		| "h1"
		| "h2"
		| "h3"
		| "h4"
		| "h5"
		| "lead"
		| "body-lg"
		| "body-base"
		| "body-sm"
		| "caption1"
		| "caption2"
		| "caption3"
		| "caption4";
	component?: "h1" | "h2" | "h3" | "h4" | "h5" | "div" | "p" | "span";
	theme?: "black" | "gray" | "white" | "primary" | "secondary";
	weight?: "regular" | "medium";
	className?: string;
	children: React.ReactNode;
}

export const Typography = ({
	variant = "h3",
	component: Component = "div",
	theme = "black",
	weight = "regular",
	className,
	children,
}: Props) => {
	let varientStyles: string = "",
		colorStyles: string = "";

	switch (variant) {
		case "display":
			varientStyles = "text-8xl";
			break;
		case "h1":
			varientStyles = "text-7xl";
			break;
		case "h2":
			varientStyles = "text-6xl";
			break;
		case "h3": //****Default****
			varientStyles = "text-5xl";
			break;
		case "h4":
			varientStyles = "text-4xl";
			break;
		case "h5":
			varientStyles = "text-3xl";
			break;
		case "lead":
			varientStyles = "text-2xl";
			break;
		case "body-lg":
			varientStyles = "text-lg";
			break;
		case "body-base":
			varientStyles = "text-base";
			break;
		case "body-sm":
			varientStyles = "text-sm";
			break;
		case "caption1":
			varientStyles = "text-caption1";
			break;
		case "caption2":
			varientStyles = "text-caption2";
			break;
		case "caption3":
			varientStyles = "text-caption3";
			break;
		case "caption4":
			varientStyles = "text-caption4";
			break;
	}

	switch (theme) {
		case "black": //***Default***
			colorStyles = "text-gray";
			break;
		case "gray":
			colorStyles = "text-gray-700";
			break;
		case "white":
			colorStyles = "text-white";
			break;
		case "primary":
			colorStyles = "text-primary";
			break;
		case "secondary":
			colorStyles = "text-secondary";
			break;
	}

	return (
		<Component
			className={clsx(
				varientStyles,
				colorStyles,
				weight === "medium" && "font-medium",
				className,
			)}
		>
			{children}
		</Component>
	);
};