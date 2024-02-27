import { SectionKeys } from "@models/InferFromRecord";
import { snakeToTitleCase } from "@utils/utils";
import { ReactNode } from "react";

type Props = {
	sec: SectionKeys;
	children: ReactNode;
};

export function FieldSet({ sec, children }: Props) {
	return (
		<fieldset id={`form__${sec}`} key={sec}>
			<legend className="text-3xl text-red-500">{snakeToTitleCase(sec)}</legend>
			{children}
		</fieldset>
	);
}

export default FieldSet;
