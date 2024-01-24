import { SectionKeys } from "@models/resumeTypes";
import { snakeToTitleCase } from "@utils/utils";

type InputProps = {
	name: string;
	label?: string;
	value: string;
	type: "text" | "textarea";
	placeholder: string;
	section: SectionKeys;
	onChange?: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => void;
};

export const Input = ({ name, label, type, section, ...props }: InputProps) => {
	const commonStyles = "w-full border bg-transparent p-3";
	return (
		<label className="text-sm">
			{label && `${snakeToTitleCase(label)}:`}
			{type === "textarea" ? (
				<textarea className={`h-28 resize-none ${commonStyles}`} {...props} />
			) : (
				<input className={`h-9 ${commonStyles}`} {...props} />
			)}
		</label>
	);
};

export default Input;
