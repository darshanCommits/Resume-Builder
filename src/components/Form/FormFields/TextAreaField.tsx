import { TextAreaFieldProps } from "./sharedType";

export const TextAreaField = ({
	label,
	placeholder,
	value,
	onChange,
	rows,
	cols,
}: TextAreaFieldProps) => (
	<textarea
		name={label}
		value={value}
		placeholder={placeholder}
		onChange={onChange}
		rows={rows}
		cols={cols}
	/>
);
