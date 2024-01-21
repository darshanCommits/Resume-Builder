import { snakeToTitleCase } from "@utils/utils";

type InputProps = {
	label?: string;
	type: "text" | "textarea";
	placeholder: string;
};

export const Input = ({ label, type, ...props }: InputProps) => {
	const commonStyles = "w-full border bg-transparent p-3";

	return (
		<label className="text-sm">
			{label && `${snakeToTitleCase(label)}:`}
			{type === "textarea" ? (
				<textarea className={`h-40 resize-none ${commonStyles}`} {...props} />
			) : (
				<input className={`h-9 ${commonStyles}`} type={type} {...props} />
			)}
		</label>
	);
};

export default Input;
