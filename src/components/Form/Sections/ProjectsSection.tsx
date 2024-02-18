import useFormState from "@/hooks/useFormState";
import useSavedCards from "@/hooks/useSavedCards";
import { projects } from "@data/exampleResume";
import Card from "@form/Card";
import FormSectionWithModal from "@form/FormSectionWithModal";
import { SingleSectionSchema } from "@models/resumeTypes";

export const ProjectSection = () => {
	const sec = "projects";
	const { formValue, setFormValue, resetFormValues } = useFormState<
		typeof sec,
		SingleSectionSchema<typeof sec>
	>(projects[0]);

	const { savedCards, addCard } = useSavedCards(sec, resetFormValues);

	return (
		<>
			<FormSectionWithModal
				placeholders={projects[0]}
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
