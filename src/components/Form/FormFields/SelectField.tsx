import { SelectFieldProps } from "./sharedType";

export const SelectField = ({
	label,
	value,
	onChange,
	options,
}: SelectFieldProps) => (
	<select
		name={label}
		value={value}
		onChange={onChange}
		className="flex h-9 w-full rounded border bg-transparent px-3 py-0.5 !text-sm ring-0 ring-offset-transparent transition-colors [appearance:textfield] placeholder:opacity-80 hover:bg-secondary/20 focus:border-primary focus:bg-secondary/20 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none file:border-0 file:bg-transparent file:pt-1 file:text-sm file:font-medium file:text-primary border-border"
	>
		{options.map(x => (
			<option key={x} value={x} className="py-2 bg-[#0D1117]">
				{x}
			</option>
		))}
	</select>
);
