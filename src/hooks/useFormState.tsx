import { ResumeStore } from "@models/resumeTypes";
import { SectionKeys, SingleRecordResume } from "@models/utilityTypes";

import { useState } from "react";

type useFormStateType<T extends SectionKeys> = {
	formValue: SingleRecordResume<T>;
	setFormValue: (label: T, value: string) => void;
	resetFormValues: () => void;
};

export function convertToEmptyObj<T extends SectionKeys>(
	obj: SingleRecordResume<T>,
) {
	return Object.entries(obj).reduce((acc, [key, _]) => {
		// @ts-ignore. help me type this correctly;
		acc[key] = "";
		return acc;
	}, {} as SingleRecordResume<T>);
}

function getRecordIfArray<T extends SectionKeys>(value: ResumeStore[T]) {
	return (Array.isArray(value) ? value[0] : value) as SingleRecordResume<T>;
}

function useFormState<T extends SectionKeys>(
	initialValue: ResumeStore[T],
): useFormStateType<T> {
	const section = getRecordIfArray(initialValue);
	const [formValue, setValue] = useState(convertToEmptyObj(section));

	const setFormValue = (label: T, value: string) => {
		setValue(prevValue => ({
			...prevValue,

			[label]: value,
		}));
	};

	const resetFormValues = () => {
		setValue(convertToEmptyObj(section));
	};

	return {
		formValue,
		setFormValue,
		resetFormValues,
	} as const;
}

export default useFormState;
