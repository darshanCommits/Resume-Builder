import {
	SectionKeys,
	SingleSectionKeys,
	SingleSectionSchema,
} from "@models/resumeTypes";
import { useState } from "react";

export type Keys<T> = T extends (infer U)[] ? keyof U : keyof T;

export function convertToEmptyObj<T extends SingleSectionKeys>(
	obj: SingleSectionSchema<T>,
) {
	return Object.entries(obj).reduce((acc, [key, _]) => {
		acc[key] = "";
		return acc;
	}, {}) as SingleSectionSchema<T>;
}

function getRecordIfArray<K extends SingleSectionKeys>(
	value: SingleSectionSchema<K>,
): SingleSectionSchema<K> {
	return Array.isArray(value) ? value[0] : value;
}

function useFormState<K extends SectionKeys>(
	initialValue: SingleSectionSchema<K>,
): {
	formValue: SingleSectionSchema<K>;
	setFormValue: (label: K, value: string) => void;
	resetFormValues: () => void;
} {
	const section: SingleSectionSchema<K> = Array.isArray(initialValue)
		? initialValue[0]
		: initialValue;

	const [formValue, setValue] = useState<SingleSectionSchema<K>>(
		convertToEmptyObj(section),
	);

	const setFormValue = (label: K, value: string) => {
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
