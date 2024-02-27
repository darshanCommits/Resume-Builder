import { SectionKeys } from "@models/InferFromRecord";
import { snakeToTitleCase } from "@utils/utils";

type InputProps<T> = {
	name: string | T;
	type: "text" | "textarea";
	label?: T;
	value?: string;
	className?: string;
	placeholder?: string;
	section?: SectionKeys;
	onChange?: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => void;
};

export function Input<T extends string>({
	name,
	label,
	type,
	section,
	className,
	...props
}: InputProps<T>) {
	const commonStyles = `w-full border bg-transparent p-3 ${className}`;
	return (
		<label className="text-sm">
			{label && `${snakeToTitleCase(label)}:`}
			{type === "textarea" ? (
				<textarea
					className={`h-28 resize-none no-scrollbar ${commonStyles}`}
					{...props}
				/>
			) : (
				<input className={`h-9 ${commonStyles}`} {...props} />
			)}
		</label>
	);
}

export default Input;
