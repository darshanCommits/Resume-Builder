import React from "react";

type BaseFieldProps = {
	label: string;
	placeholder?: string;
	value: string;
};

export type InputFieldProps = BaseFieldProps & {
	inputType: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type TextAreaFieldProps = BaseFieldProps & {
	onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
	rows: number;
	cols: number;
};

export type SelectFieldProps = BaseFieldProps & {
	options: string[];
	onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};
