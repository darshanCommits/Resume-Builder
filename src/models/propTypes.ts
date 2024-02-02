import { SectionKeys, SingleSectionSchema } from "@models/resumeTypes";

export type SectionProps<
	T extends SectionKeys,
	K extends SingleSectionSchema<T>,
> = {
	sec: T;
	formValues: K;
	placeholders: K;
	setFormValue: (label: T, value: string) => void;
};
