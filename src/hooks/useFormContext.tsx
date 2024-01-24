import { getModalRefs } from "@components/Form/FormHelper";
import exampleResume from "@data/exampleResume";
import { ReactNode, createContext, useContext, useState } from "react";

const FormContext = createContext({});

export const FormProvider = ({ children }: { children: ReactNode }) => {
	const [formData, setFormData] = useState(exampleResume);
	const [modalRefs, _] = useState(getModalRefs);

	const updateFormData = newData => {
		setFormData(prevData => ({
			...prevData,
			...newData,
		}));
	};

	return (
		<FormContext.Provider value={{ formData, updateFormData, modalRefs }}>
			{children}
		</FormContext.Provider>
	);
};

export const useFormContext = () => {
	return useContext(FormContext);
};
