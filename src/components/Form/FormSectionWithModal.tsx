import FieldSet from "@components/Form/FieldSet";
import { Button } from "@ui/Button";
import FormSectionHeading from "@ui/FormSectionHeading";
import Input from "@ui/Input";
import { SectionWOModalProps, modalRefs, toggleDialog } from "@utils/utils";
import Modal from "./Modal";

export function SectionWithModal<T>({
	sec,
	placeholders,
	formValue,
	setFormValue,
}: SectionWOModalProps<T>) {
	const bruh = Object.entries(placeholders[0]).forEach(
		([label, placeholder]) => {
			// console.table(formValue[label]);
			// console.log();
		},
	);

	return (
		<FieldSet sec={sec}>
			<Modal
				id={sec}
				refs={modalRefs[sec]}
				toggleDialog={() => toggleDialog(modalRefs[sec])}
			>
				<FormSectionHeading sec={sec} />
				{Object.entries(placeholders[0]).map(([label, placeholder]) => (
					<Input
						section={sec}
						name={label}
						key={label}
						type={label === "summary" ? "textarea" : "text"}
						label={label}
						placeholder={placeholder.toString()}
						value={formValue[label as keyof T] || ""}
						onChange={e => {
							setFormValue(label as keyof T, e.target.value);
						}}
					/>
				))}
				<Button className="float-end" type="button">
					Save
				</Button>
			</Modal>
		</FieldSet>
	);
}

export default SectionWithModal;
