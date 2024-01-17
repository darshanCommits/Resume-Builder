import { ResumeSchema } from "@/components/resumeTypes";
import { HTMLInputTypeAttribute, ReactNode } from "react";
import Input from "./FormFields/InputField";
import { snakeToTitleCase } from "./FormFields/snakeToTitleCase";

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

type SectionProps = {
	data: ResumeSchema[keyof ResumeSchema];
	section: keyof ResumeSchema;
	onChange: (
		section: keyof ResumeSchema,
		fieldName: string,
		value: string,
	) => void;
	values: any;
	children?: ReactNode;
};

export const GenericSection = ({
	data,
	section,
	onChange,
	values,
	children,
}: SectionProps) => {
	return (
		<fieldset>
			<legend className="text-xl text-red-500">
				{snakeToTitleCase(section)}:
			</legend>

			{Object.entries(Array.isArray(data) ? data[0] : data)
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
				))}
			{children}
		</fieldset>
	);
};

export default GenericSection;
