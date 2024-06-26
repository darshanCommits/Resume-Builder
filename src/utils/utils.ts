import exampleResume from "@data/exampleResume";
import { RefObjectMap, SectionKeys } from "@models/utilityTypes";
import { RefObject, createRef } from "react";

export const capitalize = (word: string) =>
	word.charAt(0).toUpperCase() + word.slice(1);

export const snakeToTitleCase = (str: string) =>
	str.replaceAll("_", " ").split(" ").map(capitalize).join(" ");

export const sectionList: SectionKeys[] = Object.keys(
	exampleResume,
) as SectionKeys[];

export const toggleDialog = (ref: RefObject<HTMLDialogElement>) => {
	if (!ref.current) return;

	ref.current.open ? ref.current.close() : ref.current.showModal();
};

export const isStringArray = (value: unknown): value is string[] =>
	Array.isArray(value) && value.every(item => typeof item === "string");

export const isRecordArray = (
	value: unknown,
): value is Record<string, unknown>[] =>
	Array.isArray(value) &&
	value.every(item => typeof item === "object" && item !== null);

export const modalRefs: RefObjectMap<HTMLDialogElement> = sectionList
	.filter(sec => isRecordArray(exampleResume[sec]))
	.reduce((acc, curr) => {
		// @ts-ignore. I am done with this.
		acc[curr] = createRef();
		return acc;
	}, {});
