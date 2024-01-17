import exampleResume from "@/components/exampleResume";
import { useState } from "react";
import { ResumeSchema } from "../resumeTypes";
import Modal from "./AddNew";
import Input from "./FormFields/InputField";
import GenericSection from "./GenericForm";
import { useResumeFormState } from "./useResumeFormState";

const UserForm = () => {
	const [resumeState, handleResumeChange] = useResumeFormState({});
	const sectionList = Object.keys(exampleResume) as Array<keyof ResumeSchema>;
	const [show, setShow] = useState(false);

	return (
		<form className="w-40 flex flex-col gap-5">
			{sectionList
				.filter(section => section !== "hobbies")
				.map(section => (
					<GenericSection
						key={section}
						section={section}
						data={exampleResume[section]}
						values={resumeState[section] || ""}
						onChange={handleResumeChange}
					/>
				))}
			<button type="button" onClick={_ => setShow(true)}>
				Show Modal
			</button>

			<Modal
				show={show}
				onClose={() => setShow(false)}
				title="about"
				content={
					<GenericSection
						data={exampleResume.about}
						onChange={handleResumeChange}
						section="about"
						values={resumeState.about}
					/>
				}
			/>

			<Input
				name="hobbies"
				section="hobbies"
				type="text"
				placeholder={exampleResume.hobbies[0]}
				value={resumeState?.hobbies || ""}
				onChange={handleResumeChange}
			/>
		</form>
	);
};

export default UserForm;
