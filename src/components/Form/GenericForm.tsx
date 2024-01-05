import { ReactNode } from "react";
import { ResumeSchema } from "@/components/resumeTypes";
import { RenderMultiInput, snakeToTitleCase } from "./FormFields/InputField";
type GenericRecord = Record<string, string>;

export const GenericSection = ({
	section,
	children,
	...props
}: {
	section: keyof ResumeSchema;
	data: GenericRecord | GenericRecord[];
	onChange: (section: string, fieldName: string, value: string) => void;
	values: Record<string, string>;
	children?: ReactNode;
}) => {
	return (
		<section>
			<h1 className="text-xl text-red-500">{snakeToTitleCase(section)}</h1>
			<RenderMultiInput
				{...props}
				section={section}
				data={Array.isArray(props.data) ? props.data[0] : props.data}
			/>
			{children}
		</section>
	);
};

export default GenericSection;
