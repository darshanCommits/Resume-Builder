import React from "react";
import { SelectFieldProps } from "./sharedType";

export const SelectField: React.FC<SelectFieldProps> = ({
	field,
	value,
	onChange,
	options,
}) => (
	<div>
		<select name={field} value={value} onChange={onChange}>
			{options.map(option => (
				<option key={option} value={option}>
					{option}
				</option>
			))}
		</select>
	</div>
);
