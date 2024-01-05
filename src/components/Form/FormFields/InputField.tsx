import { ResumeSchema } from "@/components/resumeTypes";
import { HTMLInputTypeAttribute } from "react";

type InputProps = {
	name: string;
	value: string;
	type: HTMLInputTypeAttribute;
	placeholder: string;
	section: keyof ResumeSchema;
	onChange: (secion: string, fieldName: string, value: string) => void;
};

export const snakeToTitleCase = (str: string) =>
	str
		.replaceAll("_", " ")
		.split(" ")
		.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");

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

export const RenderMultiInput = ({
	data,
	section,
	values,
	onChange,
}: {
	data: Record<string, string>;
	section: keyof ResumeSchema;
	values: Record<string, string>;
	onChange: (section: string, value: string, fieldName?: string) => void;
}) => {
	const getType = (name: string): HTMLInputTypeAttribute => {
		switch (name) {
			case "phone":
				return "tel";
			case "email":
				return "email";
			default:
				return "text";
		}
	};

	return Object.entries(data)
		.filter(([key]) => key !== "summary")
		.map(([key, placeholder]) => (
			<Input
				section={section}
				key={key}
				name={key}
				value={values[key]}
				type={getType(key)}
				onChange={onChange}
				placeholder={String(placeholder)}
			/>
		));
};

export default Input;
