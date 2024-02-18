import useFormState from "@/hooks/useFormState";
import useSavedCards from "@/hooks/useSavedCards";
import Card from "@form/Card";
import { SingleSectionSchema } from "@models/resumeTypes";
import { social } from "@data/exampleResume";
import FormSectionWithModal from "@form/FormSectionWithModal";

export const SocialSection = () => {
	const sec = "social";
	const { formValue, setFormValue, resetFormValues } = useFormState<
		typeof sec,
		SingleSectionSchema<typeof sec>
	>(social[0]);

	const { savedCards, addCard } = useSavedCards(sec, resetFormValues);

	return (
		<>
			<FormSectionWithModal
				placeholders={social[0]}
				sec={sec}
				formValues={formValue}
				setFormValue={setFormValue}
				onClick={() => {
					addCard(formValue.network, formValue.username, "");
				}}
			/>
			{savedCards?.map(x => (
				<Card data={x} />
			))}
		</>
	);
};

export default SocialSection;
