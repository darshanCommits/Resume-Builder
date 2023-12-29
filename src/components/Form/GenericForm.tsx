import { useState } from "react";
import { InputField } from "./FormFields/InputField";
import { SelectField } from "./FormFields/SelectField";
import { TextAreaField } from "./FormFields/TextAreaField";
import {
	InputFieldProps,
	SelectFieldProps,
	TextAreaFieldProps,
} from "./FormFields/sharedType";

type valueType = {
	inputType: string;
	placeholder?: string;
	options?: string[];
};

export type GenericFormProps = {
	formFields: {
		[key: string]: valueType;
	};
};

export const camelToTitleCase = (str: string) => {
	const x = str.replace(/_/g, " ");
	return `${x.charAt(0).toUpperCase()}${x.slice(1)} : `;
};

type GenericFieldProps = {
	input: InputFieldProps;
	select: SelectFieldProps;
	textarea: TextAreaFieldProps;
};

const getProps = (label: string, value: valueType): GenericFieldProps => {
	const [formValues, setFormValues] = useState<{ [key: string]: string }>({});
	const CommonProps = {
		label,
		value: formValues[label] || "",
		onChange: (
			e: React.ChangeEvent<
				HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
			>,
		) => {
			setFormValues(prevValues => ({
				...prevValues,
				[label]: e.target.value,
			}));
		},
	};

	return {
		select: {
			...CommonProps,
			options: value.options,
		} as SelectFieldProps,
		input: {
			...CommonProps,
			inputType: value.inputType,
			placeholder: value.placeholder,
		} as InputFieldProps,
		textarea: {
			...CommonProps,
			placeholder: value.placeholder,
			rows: 50,
			cols: 20,
		} as TextAreaFieldProps,
	};
};

export const GenericForm = ({ formFields }: GenericFormProps) => {
	return (
		<>
			{Object.entries(formFields).map(([label, value]) => {
				const props = getProps(label, value);

				return (
					<div key={label}>
						<label className="text-sm" htmlFor={label}>
							{camelToTitleCase(label)}
						</label>

						{conditonalRender(value.inputType, props)}
					</div>
				);
			})}
		</>
	);
};

const conditonalRender = (val: string, props: GenericFieldProps) => {
	switch (val) {
		case "textarea":
			return <TextAreaField {...props.textarea} />;
		case "select":
			return <SelectField {...props.select} />;
		default:
			return <InputField {...props.input} />;
	}
};

export default GenericForm;
