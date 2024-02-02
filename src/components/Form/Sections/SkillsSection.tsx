import { skills } from "@data/exampleResume";
import useFormState from "@/hooks/useFormState";
import FormSectionWithModal from "@form/FormSectionWithModal";

export const SkillSection = () => {
	const { formValue, setFormValue } = useFormState(skills[0]);

	return (
		<FormSectionWithModal
			placeholders={skills}
			sec={"skills"}
			formValues={formValue}
			setFormValue={setFormValue}
		/>
	);
};

export default SkillSection;
