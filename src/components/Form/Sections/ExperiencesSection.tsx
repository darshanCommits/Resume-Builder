import useFormState from "@/hooks/useFormState";
import { experiences } from "@data/exampleResume";
import FormSectionWithModal from "@form/FormSectionWithModal";

export const ExperiencesSection = () => {
	const { formValue, setFormValue } = useFormState(experiences[0]);

	return (
		<FormSectionWithModal
			placeholders={experiences}
			sec={"experiences"}
			formValue={formValue}
			setFormValue={setFormValue}
		/>
	);
};

export default ExperiencesSection;
