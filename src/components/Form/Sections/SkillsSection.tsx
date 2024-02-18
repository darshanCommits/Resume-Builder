import FieldSet from "@components/Form/FieldSet";
import Card from "@form/Card";
import Input from "@ui/Input";
import { useState } from "react";

// export const SkillSection = () => {
// 	const sec = "skills";
// 	const { formValue, setFormValue, resetFormValues } = useFormState<
// 		typeof sec,
// 		SingleSectionSchema<typeof sec>
// 	>(skills[0]);

// 	const { savedCards, addCard } = useSavedCards(sec, resetFormValues);

// 	return (
// 		<>
// 			<FormSectionWithModal
// 				placeholders={skills[0]}
// 				sec={sec}
// 				formValues={formValue}
// 				setFormValue={setFormValue}
// 				onClick={() => {
// 					addCard(formValue.name, formValue.keywords.toString(), "");
// 				}}
// 			/>
// 			{savedCards?.map(x => (
// 				<Card data={x} />
// 			))}
// 		</>
// 	);
// };

const SkillSection = () => {
	const [value, setValue] = useState([]);
	const [inputValue, setInputValue] = useState("");

	const handleInputChange = e => {
		setInputValue(e.target.value);
	};

	const handleAddSkill = () => {
		if (inputValue.trim() !== "") {
			setValue([...value, inputValue.trim()]);
			setInputValue("");
		}
	};

	return (
		<>
			<FieldSet sec="skills">
				<Input
					name="skills"
					placeholder="Fighting, Soap Making"
					type="text"
					className="my-0"
					value={inputValue}
					onChange={handleInputChange}
				/>
				<button type="button" className="mr-auto my-0" onClick={handleAddSkill}>
					Add New
				</button>
			</FieldSet>
			{value?.map(x => (
				<Card data={x} />
			))}
		</>
	);
};

export default SkillSection;
