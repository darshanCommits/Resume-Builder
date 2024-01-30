import { convertToEmptyObj } from "@utils/utils";
import { useState } from "react";

export function useFormState<T extends Record<string, string | string[]>>(
	initialValue: T,
) {
	const [formValue, setValue] = useState(convertToEmptyObj(initialValue));

	const setFormValue = (label: keyof T, inputValue: string) => {
		setValue(prevValue => ({
			...prevValue,
			[label]: inputValue,
		}));
	};

	const resetFormValue = () => {
		setValue(convertToEmptyObj(initialValue));
	};

	return { formValue, setFormValue, resetFormValue } as const;
}

export default useFormState;
