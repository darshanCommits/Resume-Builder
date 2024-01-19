import { RefObject } from "react";

export const capitalize = (word: string) =>
	word.charAt(0).toUpperCase() + word.slice(1);

export const snakeToTitleCase = (str: string) =>
	str.replaceAll("_", " ").split(" ").map(capitalize).join(" ");

export const toggleDialog = (dialogRef: RefObject<HTMLDialogElement>) => {
	if (!dialogRef.current) return;

	dialogRef.current.open
		? dialogRef.current.close()
		: dialogRef.current.showModal();
};
