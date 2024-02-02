import {
	SingleSectionSchema,
	SectionKeys,
	SingleSectionKeys,
} from "./resumeTypes";

export type SectionWModalProps<T extends SingleSectionKeys> = {
	sec: SectionKeys;
	placeholders: SingleSectionSchema<T>;
	formValue: Record<keyof T, string>;
	setFormValue: (label: keyof T, value: string) => void;
};

export type SectionWOModalProps<T extends SingleSectionKeys> = {
	sec: SectionKeys;
	placeholders: SingleSectionSchema<T>;
	formValues: SingleSectionSchema<T>;
	setFormValue: (label: T, value: string) => void;
	onClick?: () => void;
};
