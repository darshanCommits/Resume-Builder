import { SectionKeys } from "@models/resumeTypes";
import { modalRefs, toggleDialog } from "@utils/utils";
import { useState } from "react";

function useSavedCards(sec: SectionKeys, resetFormValues: () => void) {
	const [savedCards, setSavedCards] = useState<Record<string, string>[]>([]);

	function addCard(header: string, footer: string, date: string) {
		const card = {
			header,
			footer,
			date,
		};

		setSavedCards([...savedCards, card]); // Store the card in state
		toggleDialog(modalRefs[sec]);
		resetFormValues();

		return card;
	}

	return { savedCards, addCard };
}

export default useSavedCards;
