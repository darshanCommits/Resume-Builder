import useFormState from "@/hooks/useFormState";
import useSavedCards from "@/hooks/useSavedCards";
import { projects } from "@data/exampleResume";
import Card from "@form/Card";
import FormSectionWithModal from "@form/FormSectionWithModal";

export const ProjectSection = () => {
	const sec = "projects";
	const { formValue, setFormValue, resetFormValues } =
		useFormState<typeof sec>(projects);

	const { savedCards, addCard } = useSavedCards(sec, resetFormValues);

	return (
		<>
			<FormSectionWithModal
				placeholders={projects}
				sec={sec}
				formValues={formValue}
				setFormValue={setFormValue}
				onClick={() => {
					addCard(
						formValue.name,
						formValue.summary,
						formValue.date_or_date_range,
					);
				}}
			/>
			{savedCards?.map(x => (
				<Card data={x} />
			))}
		</>
	);
};

export default ProjectSection;
