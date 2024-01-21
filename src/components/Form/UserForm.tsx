import {
	getModalRefs,
	renderNonArraySection,
	renderRecordArraySection,
	renderStringArraySection,
	sectionList,
} from "@components/Form/FormHelper";
import exampleResume from "@data/exampleResume";
import { RefObjectMap } from "@models/resumeTypes";
import { isRecordArray, isStringArray } from "@utils/utils";
import { useState } from "react";

export const UserForm = () => {
	const [modalRefs, _] =
		useState<RefObjectMap<HTMLDialogElement>>(getModalRefs);

	return (
		<aside className="bg-[#0D1117] text-white p-4 h-full">
			<form className="w-52 flex flex-col gap-5">
				{sectionList.map(section => {
					if (!Array.isArray(exampleResume[section]))
						return renderNonArraySection(section, exampleResume[section]);

					if (isRecordArray(exampleResume[section]))
						return renderRecordArraySection(section, modalRefs);

					if (isStringArray(exampleResume[section]))
						return renderStringArraySection(section);

					return null;
				})}
			</form>
		</aside>
	);
};

export default UserForm;
