import { FieldSet } from "@components/Form/FormFields/InputField";
import exampleResume from "@data/exampleResume";
import Modal from "@ui/Modal";
import { snakeToTitleCase, toggleDialog } from "@utils/utils";
import { useRef } from "react";

const App = () => {
	const dialogRef = useRef<HTMLDialogElement>(null);

	return (
		<main className="bg-[#0D1117] text-white p-4 h-full">
			<button type="button" onClick={() => toggleDialog(dialogRef)}>
				Open Modal
			</button>
			<Modal toggleDialog={() => toggleDialog(dialogRef)} ref={dialogRef}>
				<h1 className="text-3xl text-red-500">{snakeToTitleCase("about")}</h1>
				<FieldSet placeholders={exampleResume.about} section="about" />
			</Modal>
		</main>
	);
};

export default App;
