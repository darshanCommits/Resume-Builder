import { SectionKeys, SingleSectionSchema } from "@models/resumeTypes";
import { useState } from "react";

export function convertToEmptyObj<
	T extends SectionKeys,
	K extends SingleSectionSchema<T>,
>(obj: K) {
	return Object.entries(obj).reduce((acc, [key, _]) => {
		acc[key] = "";
		return acc;
	}, {}) as K;
}

function getRecordIfArray<
	K extends SectionKeys,
	T extends SingleSectionSchema<K>,
>(value: T): T {
	return Array.isArray(value) ? value[0] : value;
}

function useFormState<T extends SectionKeys, K extends SingleSectionSchema<T>>(
	initialValue: K,
): {
	formValue: K;
	setFormValue: (label: T, value: string) => void;
	resetFormValues: () => void;
} {
	const section: K = Array.isArray(initialValue)
		? initialValue[0]
		: initialValue;

	const [formValue, setValue] = useState<K>(convertToEmptyObj(section));

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
