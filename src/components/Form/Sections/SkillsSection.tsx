import FieldSet from "@components/Form/FieldSet";
import Card from "@form/Card";
import Input from "@ui/Input";
import { useState } from "react";

const SkillSection = () => {
	const [skillStack, setSkillStack] = useState<string[]>([]);
	const [value, setValue] = useState("");

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setValue(e.target.value);
	};

	const handleAddSkill = () => {
		if (value.trim() === "") return; // to check if the value is not null
		setSkillStack([...skillStack, value.trim()]);
		setValue(""); // to reset the input
	};

	return (
		<>
			<FieldSet sec="skills">
				<Input
					name="skills"
					placeholder="Fighting, Soap Making"
					type="text"
					className="my-0"
					value={value}
					onChange={handleInputChange}
				/>
				<button type="button" className="mr-auto my-0" onClick={handleAddSkill}>
					Add New
				</button>
			</FieldSet>
			{skillStack?.map(x => (
				<Card data={x} />
			))}
		</>
	);
};

export default SkillSection;
