import useFormState from "@/hooks/useFormState";
import { about } from "@data/exampleResume";
import FieldSet from "@components/Form/FieldSet";
import Input from "@ui/Input";
import { SectionKeys } from "@models/resumeTypes";

export const AboutSection = () => {
	const sec = "about";
	const { formValue, setFormValue } = useFormState(about);

	return (
		<FieldSet sec={sec}>
			{Object.entries(about).map(([label, placeholder]) => {
				return (
					<Input
						section={sec}
						type={label === "summary" ? "textarea" : "text"}
						name={label}
						key={`${sec}__${label}`}
						label={label}
						placeholder={placeholder.toString()}
						// @ts-ignore. I am done with this.
						value={formValue[label]}
						onChange={e => {
							setFormValue(label as SectionKeys, e.target.value);
						}}
					/>
				);
			})}
		</FieldSet>
	);
};

export default AboutSection;
