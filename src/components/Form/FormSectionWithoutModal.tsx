import FieldSet from "@components/Form/FieldSet";
import Input from "@ui/Input";
import { SectionWModalProps } from "@utils/utils";

export function SectionWithoutModal<T>({
	sec,
	placeholders,
	formValue,
	setFormValue,
}: SectionWModalProps<T>) {
	return (
		<FieldSet sec={sec}>
			{Object.entries(placeholders).map(([label, placeholder]) => (
				<Input
					section={sec}
					type={label === "summary" ? "textarea" : "text"}
					name={label}
					key={`${sec}__${label}`}
					label={label}
					placeholder={placeholder}
					value={formValue[label as keyof T]}
					onChange={e => {
						setFormValue(label as keyof T, e.target.value);
					}}
				/>
			))}
		</FieldSet>
	);
}

export default SectionWithoutModal;
