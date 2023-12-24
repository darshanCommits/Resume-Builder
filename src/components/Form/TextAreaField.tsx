import React from "react";
import { TextAreaFieldProps } from "./sharedType";

export const TextareaField: React.FC<TextAreaFieldProps> = ({
	field,
	placeholder,
	value,
	onChange,
	rows,
	cols,
}) => (
	<textarea
		name={field}
		value={value}
		placeholder={placeholder}
		onChange={onChange}
		rows={rows}
		cols={cols}
	/>
);
