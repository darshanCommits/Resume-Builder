import { useState } from "react";
import exampleResume from "@/components/exampleResume";
import GenericSection from "./GenericForm";
import { ResumeSchema } from "../resumeTypes";
import Input from "./FormFields/InputField";

type FieldValue = string | number | string[] | Record<string, any>;
type FormTypes = Record<string, FieldValue> | FieldValue[];

const useResumeFormState = (initialState: FormTypes) => {
	const [state, setState] = useState<FormTypes>(initialState);

	const handleChange = (
		section: string,
		fieldName: string,
		value: FieldValue,
	) => {
		setState(prevState => {
			if (section === "hobbies")
				return {
					...prevState,
					[section]: value,
				};
			else if (Array.isArray(prevState)) {
				const updatedSection = [...prevState];
				updatedSection[Number(section)] = {
					...updatedSection[Number(section)],
					[fieldName]: value,
				};
				return updatedSection;
			} else {
				return {
					...prevState,
					[section]: {
						...prevState[section],
						[fieldName]: value,
					},
				};
			}
		});
	};

	return [state, handleChange] as const;
};

const UserForm = () => {
	const [resumeState, handleResumeChange] = useResumeFormState({});
	const sectionList = Object.keys(exampleResume);
	console.table(resumeState);

	return (
		<form className="w-40 flex flex-col gap-5">
			{sectionList
				.filter(section => section !== "hobbies")
				.map(section => (
					<GenericSection
						key={section}
						section={section as keyof ResumeSchema}
						data={exampleResume[section]}
						values={resumeState[section] || ""}
						onChange={handleResumeChange}
					/>
				))}

			<Input
				name="hobbies"
				section="hobbies"
				type="text"
				placeholder={exampleResume.hobbies[0]}
				value={resumeState.hobbies || ""}
				onChange={handleResumeChange}
			/>
		</form>
	);
};

export default UserForm;
