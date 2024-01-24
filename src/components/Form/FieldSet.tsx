import { snakeToTitleCase } from "@utils/utils";

export function FieldSet({ sec, children }) {
	return (
		<fieldset id={`form__${sec}`} key={sec}>
			<legend className="text-3xl text-red-500">{snakeToTitleCase(sec)}</legend>
			{children}
		</fieldset>
	);
}

export default FieldSet;
