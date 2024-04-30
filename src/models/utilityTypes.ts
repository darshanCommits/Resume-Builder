import { ResumeStore } from "./resumeTypes";

export type InferFromRecord<T extends Record<string, unknown>> = {
	[K in keyof T]: T[K] extends (infer U)[] ? U[] : T[K];
};

export type SingleRecordResume<T extends SectionKeys> = Exclude<
	SingleSectionTypes[T],
	string
>;
export type SingleSectionTypes = {
	[K in keyof ResumeStore]: ResumeStore[K] extends (infer U)[]
		? U
		: ResumeStore[K];
};

export type SectionKeys = keyof ResumeStore;

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
