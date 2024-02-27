import useFormState from "@/hooks/useFormState";
import FieldSet from "@components/Form/FieldSet";
import { about } from "@data/exampleResume";
import { SectionKeys } from "@models/utilityTypes";
import Input from "@ui/Input";

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
						// @ts-ignore. I can't do this anymore
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
