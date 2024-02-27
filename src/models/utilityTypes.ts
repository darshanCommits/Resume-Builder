import { ResumeSchema } from "./resumeTypes";

export type InferFromRecord<T extends Record<string, unknown>> = {
	[K in keyof T]: T[K] extends (infer U)[] ? U[] : T[K];
};

export type SingleRecordResume<T extends SectionKeys> = Exclude<
	SingleSectionTypes[T],
	string
>;
export type SingleSectionTypes = {
	[K in keyof ResumeSchema]: ResumeSchema[K] extends (infer U)[]
		? U
		: ResumeSchema[K];
};

export type SectionKeys = keyof ResumeSchema;

export type RefObjectMap<T> = {
	[key: string]: React.RefObject<T>;
};

export type SavedCard =
	| {
			header: string;
			footer: string;
			date: string;
	  }
	| string;
