import { ArraySectionTypes, SectionKeyTypes, SectionKeys } from "./resumeTypes";

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
	onClick?: () => void;
};
