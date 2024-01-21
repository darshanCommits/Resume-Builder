import { SectionKeys, SectionKeyTypes } from "@models/resumeTypes";
import Input from "@ui/Input";
import FormSectionHeading from "@ui/FormSectionHeading";

export const FieldSet = ({
	placeholders,
	section,
}: {
	placeholders: SectionKeyTypes;
	section: SectionKeys;
}) => {
	return (
		<fieldset>
			<FormSectionHeading sec={section} />
			{Object.entries(placeholders).map(([label, placeholder]) => (
				<Input
					key={label}
					type={label === "summary" ? "textarea" : "text"}
					label={label}
					placeholder={placeholder}
				/>
			))}
		</fieldset>
	);
};
