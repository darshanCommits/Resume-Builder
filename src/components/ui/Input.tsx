import { SectionKeys } from "@models/resumeTypes";
import { snakeToTitleCase } from "@utils/utils";

type InputProps<T extends string> = {
	name: string;
	label?: T;
	value: string;
	type: "text" | "textarea";
	placeholder: string;
	section: SectionKeys;
	onChange?: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => void;
};

export function Input<T extends string>({
	name,
	label,
	type,
	section,
	...props
}: InputProps<T>) {
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
}

export default Input;
