import useFormState from "@/hooks/useFormState";
import { about } from "@data/exampleResume";
import FormSectionWithoutModal from "@form/FormSectionWithoutModal";

export const AboutSection = () => {
	const { formValue, setFormValue } = useFormState(about);

	return (
		<FormSectionWithoutModal
			sec={"about"}
			placeholders={about}
			formValue={formValue}
			setFormValue={setFormValue}
		/>
	);
};

export default AboutSection;
