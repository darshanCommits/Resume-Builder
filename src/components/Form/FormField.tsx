type inputElement = "textarea" | "input";

interface FormFieldProps {
	type: inputElement;
	field: string;
	inputType: string;
	placeholder: string;
	// index: number;
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormField = ({
	field,
	inputType,
	placeholder,
	value,
	onChange,
}: FormFieldProps) => {
	const camelToTitleCase = (str: string) => {
		const x = str.replace(/_/g, " ");
		return `${x.charAt(0).toUpperCase()}${x.slice(1)}`;
	};

	return (
		<div key={field} className="grid place-content-around ">
			<label htmlFor={field} className="">
				{camelToTitleCase(field)}:
			</label>
			{inputType === "textarea" ? (
				<textarea
					name={field}
					value={value}
					placeholder={placeholder}
					onChange={e => onChange(e.target.value)}
					rows={4}
					cols={50}
				/>
			) : (
				<input
					type={inputType}
					name={field}
					value={value}
					placeholder={placeholder}
					onChange={e => onChange(e.target.value)}
				/>
			)}{" "}
		</div>
	);
};

export default FormField;
