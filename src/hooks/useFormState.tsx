import {
	SectionKeys,
	SectionSchema,
	SingleSectionTypes,
} from "@models/resumeTypes";
import { useState } from "react";

export function convertToEmptyObj<
	T extends SectionKeys,
	K extends SingleSectionTypes[T],
>(obj: K) {
	return Object.entries(obj).reduce((acc, [key, _]) => {
		// @ts-ignore. I am done with this.
		acc[key] = "";
		return acc;
	}, {}) as K;
}

function getRecordIfArray<K>(value: K) {
	return (
		Array.isArray(value) ? value[0] : value
	) as SingleSectionTypes[SectionKeys];
}

function useFormState<T extends SectionKeys, K extends SectionSchema<T>>(
	initialValue: K,
): {
	formValue: SingleSectionTypes[T];
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
		formValue,
		setFormValue,
		resetFormValues,
	} as const;
}

export default useFormState;
