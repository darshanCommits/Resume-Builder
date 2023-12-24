import React from "react";
import { InputField } from "./InputField";
import { SelectField } from "./SelectField";
import { TextareaField } from "./TextAreaField";
import { FormFieldProps } from "./sharedType";

export const FormField: React.FC<FormFieldProps> = (props: FormFieldProps) => {
	const camelToTitleCase = (str: string) => {
		const x = str.replace(/_/g, " ");
		return `${x.charAt(0).toUpperCase()}${x.slice(1)} :`;
	};

	return (
		<div key={props.field} className="grid place-content-around">
			<label htmlFor={props.field}>{camelToTitleCase(props.field)}</label>

			{props.type === "textarea" && <TextareaField {...props} />}
			{props.type === "input" && <InputField {...props} />}
			{props.type === "options" && <SelectField {...props} />}
		</div>
	);
};

export default FormField;
