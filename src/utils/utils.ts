import exampleResume from "@data/exampleResume";
import {
	ArraySectionTypes,
	RefObjectMap,
	SectionKeyTypes,
	SectionKeys,
} from "@models/resumeTypes";
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

export const isArraySectionKey = (obj: any): obj is ArraySectionKeyTypes =>
	Array.isArray(obj) && obj.every(item => typeof item === "object");

export const modalRefs: RefObjectMap<HTMLDialogElement> = sectionList
	.filter(sec => isRecordArray(exampleResume[sec]))
	.reduce((acc, curr) => {
		acc[curr] = createRef();
		return acc;
	}, {});

export type Props = {
	onChange?: any;
};

export function convertToEmptyObj<T>(obj: T) {
	return Object.entries(obj).reduce((acc, [key, _]) => {
		acc[key] = "";
		return acc;
	}, {} as Record<keyof T, string>);
}

export type SectionWModalProps<T> = {
	sec: SectionKeys;
	placeholders: SectionKeyTypes;
	formValue: Record<keyof T, string>;
	setFormValue: (label: keyof T, value: string) => void;
};

export type SectionWOModalProps<T> = {
	sec: SectionKeys;
	placeholders: ArraySectionTypes;
	formValue: Record<keyof T, string>;
	setFormValue: (label: keyof T, value: string) => void;
};
