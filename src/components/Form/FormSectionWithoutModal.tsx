import FieldSet from "@components/Form/FieldSet";
import { SectionProps } from "@models/propTypes";
import { SectionKeys, SingleSectionSchema } from "@models/resumeTypes";
import Input from "@ui/Input";

export function SectionWOModal<
	T extends SectionKeys,
	K extends SingleSectionSchema<T>,
>({ sec, placeholders, formValues, setFormValue }: SectionProps<T, K>) {
	return (
		<FieldSet sec={sec}>
			{Object.entries(placeholders).map(([label, placeholder]) => {
				return (
					<Input
						section={sec}
						type={label === "summary" ? "textarea" : "text"}
						name={label}
						key={`${sec}__${label}`}
						label={label}
						placeholder={placeholder.toString()}
						// @ts-ignore. I am done with this.
						value={formValues[label]}
						onChange={e => {
							setFormValue(label as T, e.target.value);
						}}
					/>
				);
			})}
		</FieldSet>
	);
}

export default SectionWOModal;
