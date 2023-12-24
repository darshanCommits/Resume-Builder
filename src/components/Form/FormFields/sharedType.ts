import React from "react";

type BaseFieldProps = {
	field: string;
	placeholder: string;
	value: string;
};

export type InputFieldProps = BaseFieldProps & {
	type: "input";
	inputType: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type TextAreaFieldProps = BaseFieldProps & {
	type: "textarea";
	onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
	rows: number;
	cols: number;
};

export type SelectFieldProps = BaseFieldProps & {
	type: "options";
	options: string[]; // Options for the dropdown
	onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export type FormFieldProps =
	| InputFieldProps
	| TextAreaFieldProps
	| SelectFieldProps;
