import { ResumeSchema } from "@/components/resumeTypes";
import { snakeToTitleCase } from "@utils/utils";
import { HTMLInputTypeAttribute } from "react";

type InputProps = {
	name: string;
	value: string;
	type: HTMLInputTypeAttribute;
	placeholder: string;
	section: keyof ResumeSchema;
	onChange: (
		secion: keyof ResumeSchema,
		fieldName: string,
		value: string,
	) => void;
};

const Input = ({
	value = "",
	onChange,
	section,
	name,
	...props
}: InputProps) => {
	const inputStyles = "h-9 w-full border bg-transparent px-3";

	return (
		<label className="text-sm">
			{`${snakeToTitleCase(name.toString())}:`}

			<input
				{...props}
				className={inputStyles}
				onChange={e => onChange(section, name, e.target.value)}
				value={value}
			/>
		</label>
	);
};

export default Input;
