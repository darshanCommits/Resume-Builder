import useFormState from "@/hooks/useFormState";
import useSavedCards from "@/hooks/useSavedCards";
import { experiences } from "@data/exampleResume";
import Card from "@form/Card";
import FormSectionWithModal from "@form/FormSectionWithModal";
import { SectionSchema } from "@models/resumeTypes";

export function ExperiencesSection() {
	const sec = "experiences";

	const { formValue, setFormValue, resetFormValues } = useFormState<
		typeof sec,
		SectionSchema<typeof sec>
	>(experiences);

	const { savedCards, addCard } = useSavedCards(sec, resetFormValues);

	return (
		<>
			<FormSectionWithModal
				placeholders={experiences}
				sec={sec}
				formValues={formValue}
				setFormValue={setFormValue}
				onClick={() => {
					addCard(
						formValue.position,
						formValue.company,
						formValue.date_or_date_range,
					);
				}}
			/>
			{savedCards?.map(x => (
				<Card data={x} />
			))}
		</>
	);
}

export default ExperiencesSection;
