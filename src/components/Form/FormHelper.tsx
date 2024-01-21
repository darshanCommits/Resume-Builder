import { FieldSet } from "@components/Form/FieldSet";
import exampleResume from "@data/exampleResume";
import {
	RefObjectMap,
	SectionKeys,
	SectionKeyTypes,
} from "@models/resumeTypes";
import FormSectionHeading from "@ui/FormSectionHeading";
import Input from "@ui/Input";
import Modal from "@ui/Modal";
import { isRecordArray, toggleDialog } from "@utils/utils";
import { createRef } from "react";

export const sectionList: SectionKeys[] = Object.keys(
	exampleResume,
) as SectionKeys[];

export const getModalRefs = () => {
	const initialModalRefs = sectionList
		.filter(sec => isRecordArray(exampleResume[sec]))
		.reduce((acc, curr) => {
			acc[curr] = createRef();
			return acc;
		}, {});
	return initialModalRefs;
};

export const renderNonArraySection = (
	sec: SectionKeys,
	placeholders: SectionKeyTypes,
) => (
	<section key={sec} id={`form__${sec}`}>
		<FieldSet key={sec} placeholders={placeholders} section={sec} />
	</section>
);

export const renderRecordArraySection = (
	sec: SectionKeys,
	modalRefs: RefObjectMap<HTMLDialogElement>,
) => (
	<section key={sec} id={`form__${sec}`}>
		<FormSectionHeading sec={sec} />
		<button type="button" onClick={() => toggleDialog(modalRefs[sec])}>
			Add new
		</button>
		<Modal
			id={sec}
			ref={modalRefs[sec]}
			toggleDialog={() => toggleDialog(modalRefs[sec])}
		>
			<FieldSet key={sec} placeholders={exampleResume[sec][0]} section={sec} />
		</Modal>
	</section>
);

export const renderStringArraySection = (sec: SectionKeys) => (
	<section key={sec} id={`form__${sec}`}>
		<FormSectionHeading sec={sec} />
		<Input key={sec} placeholder={exampleResume[sec].toString()} type="text" />
	</section>
);
