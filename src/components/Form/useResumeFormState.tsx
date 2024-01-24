import { useState } from "react";
import exampleResume from "../exampleResume";
import { ResumeSchema } from "../resumeTypes";
export type FieldValue = string | number | string[] | Record<string, string>;

export type FormState = Record<string, FieldValue>;

export type FormSection = FieldValue & {
	[key: string]: FieldValue;
};

export type FormTypes = Record<string, FieldValue> | FieldValue[];

export function isFormState(state: any): state is FormState {
	return state && !Array.isArray(state);
}

function updateState<T extends FormState | FormSection[]>(
	prevState: T,
	section: keyof ResumeSchema,
	fieldName: string,
	value: string,
): T {
	if (section === ("hobbies" as keyof ResumeSchema)) {
		return {
			...prevState,
			[section]: value,
		};
	}

	if (isFormState(prevState)) {
		return {
			...prevState,
			[section]: {
				...(prevState[section] as FormSection),
				[fieldName]: value,
			},
		} as T;
	}

	const updatedSection = [...prevState] as FormSection[];
	updatedSection[Number(section)] = {
		...updatedSection[Number(section)],
		[fieldName]: value,
	};

	return updatedSection as T;
}

export function useResumeFormState(initialState: FormState | FormSection[]) {
	const [state, setState] = useState<FormTypes>(initialState);

	const handleChange = (
		section: keyof ResumeSchema,
		fieldName: string,
		value: string,
	) => {
		setState(prevState =>
			updateState(prevState as FormSection, section, fieldName, value),
		);
	};

	return [state, handleChange] as const;
}
