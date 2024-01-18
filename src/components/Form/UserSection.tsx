import exampleResume from "@/components/exampleResume";
import { useForm } from "react-hook-form";
import { ResumeSchema } from "../resumeTypes";
import Input from "./FormFields/InputField";
import GenericSection from "./GenericForm";

const UserForm = () => {
	const { register } = useForm<ResumeSchema>();
	const sectionList = Object.keys(exampleResume);

	return (
		<form className="w-40 flex flex-col gap-5">
			{sectionList
				.filter(section => section !== "hobbies")
				.map(section => (
					<GenericSection
						key={section}
						section={section as keyof ResumeSchema}
						data={exampleResume[section]}
						{...register("about")}
					/>
				))}

			<Input
				name="hobbies"
				section="hobbies"
				type="text"
				placeholder={exampleResume.hobbies[0]}
			/>
		</form>
	);
};

export default UserForm;
