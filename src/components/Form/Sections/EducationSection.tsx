import { education } from "@data/exampleResume";
import useFormState from "@/hooks/useFormState";
import FormSectionWithModal from "@form/FormSectionWithModal";

export const EducationSection = () => {
	const { formValue, setFormValue } = useFormState(education[0]);

	return (
		<FormSectionWithModal
			placeholders={education}
			sec={"education"}
			formValue={formValue}
			setFormValue={setFormValue}
		/>
	);
};

export default EducationSection;
