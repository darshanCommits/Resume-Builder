import { ResumeSchema } from "@models/resumeTypes";
import { snakeToTitleCase } from "@utils/utils";
import { HTMLInputTypeAttribute } from "react";

type InputProps = {
	name: string;
	type: HTMLInputTypeAttribute;
	placeholder: string;
	section: keyof ResumeSchema;
};

const Input = ({ section, name, ...props }: InputProps) => {
	const inputStyles = "h-9 w-full border bg-transparent px-3";

	return (
		<label className="text-sm">
			{`${snakeToTitleCase(name.toString())}:`}
			<input {...props} className={inputStyles} />
		</label>
	);
};

export const FieldSet = ({
	placeholders,
	section,
}: {
	placeholders: Record<string, string>;
	section: keyof ResumeSchema;
}) => {
	return (
		<fieldset>
			{Object.entries(placeholders)
				.filter(([key]) => key !== "summary")
				.map(([key, placeholder]) => (
					<Input
						section={section}
						key={key}
						name={key}
						type={key}
						placeholder={String(placeholder)}
					/>
				))}
		</fieldset>
	);
};

export default Input;
