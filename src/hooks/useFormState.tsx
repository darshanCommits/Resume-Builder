import { SectionKeys, SingleSectionSchema } from "@models/resumeTypes";
import { useState } from "react";

export function convertToEmptyObj<
	T extends SectionKeys,
	K extends SingleSectionSchema<T>,
>(obj: K) {
	return Object.entries(obj).reduce((acc, [key, _]) => {
		// @ts-ignore. I am done with this.
		acc[key] = "";
		return acc;
	}, {}) as K;
}

function getRecordIfArray<
	T extends SectionKeys,
	K extends SingleSectionSchema<T>,
>(value: K) {
	return (Array.isArray(value) ? value[0] : value) as K;
}

function useFormState<T extends SectionKeys, K extends SingleSectionSchema<T>>(
	initialValue: K,
): {
	formValue: K;
	setFormValue: (label: T, value: string) => void;
	resetFormValues: () => void;
} {
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
		formValue: getRecordIfArray(formValue),
		setFormValue,
		resetFormValues,
	} as const;
}

export default useFormState;
