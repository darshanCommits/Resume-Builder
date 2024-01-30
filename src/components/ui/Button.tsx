import { ReactNode } from "react";

interface ButtonProps {
	children: ReactNode;
	type?: "button" | "submit" | "reset" | undefined;
	className?: string;
	onClick?: () => void;
}

export const Button = ({ type, children, className, onClick }: ButtonProps) => {
	return (
		<button
			type={type}
			className={`px-3 py-1 border border-white bg-transparent ${className}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
