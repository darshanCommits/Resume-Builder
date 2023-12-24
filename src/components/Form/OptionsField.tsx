import React from "react";
import { OptionsFieldProps } from "./sharedType";

export const OptionsField: React.FC<OptionsFieldProps> = ({
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
