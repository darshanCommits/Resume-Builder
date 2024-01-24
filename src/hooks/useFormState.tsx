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

	return { formValue, setFormValue } as const;
}

export default useFormState;
