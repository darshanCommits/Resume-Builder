import { useState } from "react";
import formFields from "./generateFromSchema/BasicInfo";
import FormField from "./FormFields/FormField";

export const UserForm = () => {
	const [formValues, setFormValues] = useState<{ [key: string]: string }>({});

	const handleChange = (
		fieldName: string,
		e:
			| React.ChangeEvent<HTMLTextAreaElement>
			| React.ChangeEvent<HTMLSelectElement>
			| React.ChangeEvent<HTMLInputElement>,
	) => {
		setFormValues(prevValues => ({
			...prevValues,
			[fieldName]: e.target.value, // this is the same syntax as useState's type info
		}));
	};

	return (
		<form>
			{Object.entries(formFields).map(([key, value]) => (
				<FormField
					type="input"
					inputType={value.type}
					key={key}
					field={key}
					placeholder={value.placeholder}
					value={formValues[key] || ""}
					onChange={e => handleChange(key, e)}
				/>
			))}
		</form>
	);
};

export default UserForm;
