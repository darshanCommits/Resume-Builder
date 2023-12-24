import React from "react";
import { InputFieldProps } from "./sharedType";

export const InputField: React.FC<InputFieldProps> = ({
	field,
	placeholder,
	value,
	onChange,
	inputType,
}) => (
	<input
		type={inputType}
		name={field}
		value={value}
		placeholder={placeholder}
		onChange={onChange}
	/>
);
