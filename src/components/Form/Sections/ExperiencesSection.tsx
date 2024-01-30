import useFormState from "@/hooks/useFormState";
import { experiences } from "@data/exampleResume";
import Card from "@form/Card";
import FormSectionWithModal from "@form/FormSectionWithModal";
import { toggleDialog, modalRefs } from "@utils/utils";
import { ReactNode, useState } from "react";

export const ExperiencesSection = () => {
	const { resetFormValue, formValue, setFormValue } = useFormState(
		experiences[0],
	);

	const [savedCards, setSavedCard] = useState<Record<string, string>[]>([]); // State to store the card
	const sec = "experiences";

	function addCard(header: string, footer: string, date: string) {
		const card = {
			header,
			footer,
			date,
		};

		setSavedCard([...savedCards, card]); // Store the card in state
		resetFormValue();
		toggleDialog(modalRefs[sec]);

		return card;
	}

	return (
		<>
			<FormSectionWithModal
				placeholders={experiences}
				sec={sec}
				formValue={formValue}
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
		// here I want to render
	);
};

export default ExperiencesSection;
