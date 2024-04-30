import FieldSet from "@components/Form/FieldSet";
import { ResumeStore } from "@models/resumeTypes";
import { SectionKeys, SingleSectionTypes } from "@models/utilityTypes";
import { Button } from "@ui/Button";
import FormSectionHeading from "@ui/FormSectionHeading";
import Input from "@ui/Input";
import { modalRefs, toggleDialog } from "@utils/utils";
import Modal from "./Modal";

function SectionWithModal<T extends SectionKeys>({
	sec,
	placeholders,
	formValues,
	setFormValue,
	onClick,
}: {
	sec: T;
	placeholders: ResumeStore[T];
	formValues: SingleSectionTypes[T];
	setFormValue: (label: T, value: string) => void;
	onClick?: () => void;
}) {
	const directPlaceholders = Array.isArray(placeholders)
		? placeholders[0]
		: placeholders;

	return (
		<FieldSet sec={sec}>
			<Modal
				id={sec}
				refs={modalRefs[sec]}
				toggleDialog={() => toggleDialog(modalRefs[sec])}
			>
				<FormSectionHeading sec={sec} />
				{Object.entries(directPlaceholders).map(([label, placeholder]) => {
					return (
						<Input
							section={sec}
							name={label}
							key={`${sec}__${label}`}
							type={(label as string) === "summary" ? "textarea" : "text"}
							label={label || ""}
							placeholder={placeholder.toString()}
							// @ts-ignore. I am done with this.
							value={formValues[label] || ""}
							onChange={e => {
								setFormValue(label as T, e.target.value);
							}}
						/>
					);
				})}
				<Button className="float-end" type="button" onClick={onClick}>
					Save
				</Button>
			</Modal>
		</FieldSet>
	);
}

export default SectionWithModal;
