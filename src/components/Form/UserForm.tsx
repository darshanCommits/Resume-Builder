import { useState } from "react";
import { FormField } from "./FormField";
import { formFields } from "./FormUtils";

export const UserForm = () => {
	const [formValues, setFormValues] = useState<{ [key: string]: string }>({});

	const handleChange = (fieldName: string, value: string) => {
		setFormValues(prevValues => ({
			...prevValues,
			[fieldName]: value,
		}));
	};

	return (
		<form>
			{Object.entries(formFields).map(([key, value]) => (
				<FormField
					type="input"
					field={key}
					inputType={value.type}
					placeholder={value.placeholder}
					value={formValues[key] || ""}
					onChange={e => handleChange(key, e.target.value)}
					// index={i}
					key={key}
				/>
			))}
		</form>
	);
};

export default UserForm;
