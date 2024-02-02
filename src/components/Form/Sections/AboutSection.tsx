import useFormState from "@/hooks/useFormState";
import { about } from "@data/exampleResume";
import SectionWOModal from "@form/FormSectionWithoutModal";

export const AboutSection = () => {
	const { formValue, setFormValue } = useFormState(about);

	return (
		<SectionWOModal
			sec={"about"}
			placeholders={about}
			formValues={formValue}
			setFormValue={setFormValue}
		/>
	);
};

export default AboutSection;
