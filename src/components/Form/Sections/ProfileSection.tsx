import useFormState from "@/hooks/useFormState";
import useSavedCards from "@/hooks/useSavedCards";
import { social } from "@data/exampleResume";
import Card from "@form/Card";
import FormSectionWithModal from "@form/FormSectionWithModal";

export const SocialSection = () => {
	const sec = "social";
	const { formValue, setFormValue, resetFormValues } =
		useFormState<typeof sec>(social);

	const { savedCards, addCard } = useSavedCards(sec, resetFormValues);

	return (
		<>
			<FormSectionWithModal
				placeholders={social}
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
