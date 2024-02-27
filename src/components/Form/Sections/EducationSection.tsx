import useFormState from "@/hooks/useFormState";
import useSavedCards from "@/hooks/useSavedCards";
import { education } from "@data/exampleResume";
import Card from "@form/Card";
import FormSectionWithModal from "@form/FormSectionWithModal";

export function EducationSection() {
	const sec = "education";
	const { formValue, setFormValue, resetFormValues } =
		useFormState<typeof sec>(education);

	const { savedCards, addCard } = useSavedCards(sec, resetFormValues);

	return (
		<>
			<FormSectionWithModal
				placeholders={education}
				sec={sec}
				formValues={formValue}
				setFormValue={setFormValue}
				onClick={() => {
					addCard(
						formValue.institution,
						formValue.area_of_study,
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

export default EducationSection;
