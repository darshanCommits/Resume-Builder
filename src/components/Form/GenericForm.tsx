import { ReactNode } from "react";
import { ResumeSchema } from "@/components/resumeTypes";
import { FieldSet, snakeToTitleCase } from "./FormFields/InputField";
type GenericRecord = Record<string, string>;

export const GenericSection = ({
	section,
	children,
	data,
}: {
	section: keyof ResumeSchema;
	data: GenericRecord | GenericRecord[];
	children?: ReactNode;
}) => {
	return (
		<section>
			<h1 className="text-xl text-red-500">{snakeToTitleCase(section)}</h1>
			<FieldSet section={section} data={Array.isArray(data) ? data[0] : data} />
			{children}
		</section>
	);
};

export default GenericSection;
