import { projects } from "@data/exampleResume";
import FormSectionWithModal from "@form/FormSectionWithModal";
import useFormState from "@/hooks/useFormState";

export const ProjectSection = () => {
	const { formValue, setFormValue } = useFormState(projects[0]);

	return (
		<FormSectionWithModal
			placeholders={projects}
			sec={"projects"}
			formValue={formValue}
			setFormValue={setFormValue}
		/>
	);
};

export default ProjectSection;
