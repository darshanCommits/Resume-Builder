import FieldSet from "@components/Form/FieldSet";
import { SectionWOModalProps } from "@models/propTypes";
import { Button } from "@ui/Button";
import FormSectionHeading from "@ui/FormSectionHeading";
import Input from "@ui/Input";
import Modal from "./Modal";
import { toggleDialog, modalRefs } from "@utils/utils";
import { SingleSectionKeys } from "@models/resumeTypes";

export function SectionWithModal<T extends SingleSectionKeys>({
	sec,
	placeholders,
	formValues: formValue,
	setFormValue,
	onClick,
}: SectionWOModalProps<T>) {
	return (
		<FieldSet sec={sec}>
			<Modal
				id={sec}
				refs={modalRefs[sec]}
				toggleDialog={() => toggleDialog(modalRefs[sec])}
			>
				<FormSectionHeading sec={sec} />
				{Object.entries(placeholders).map(([label, placeholder]) => (
					<Input
						section={sec}
						name={label}
						key={label}
						type={label === "summary" ? "textarea" : "text"}
						label={label}
						placeholder={placeholder.toString()}
						value={formValue[label as keyof T] || ""}
						onChange={e => {
							setFormValue(label as T, e.target.value);
						}}
					/>
				))}
				<Button className="float-end" type="button" onClick={onClick}>
					Save
				</Button>
			</Modal>
		</FieldSet>
	);
}

export default SectionWithModal;
