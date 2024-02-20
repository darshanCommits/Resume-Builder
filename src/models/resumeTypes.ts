import {
	about,
	education,
	experiences,
	projects,
	skills,
	social,
} from "@data/exampleResume";

export type InferFromRecord<T extends Record<string, unknown>> = {
	[K in keyof T]: T[K] extends (infer U)[] ? U[] : T[K];
};

export type AboutSchema = InferFromRecord<typeof about>;
export type SocialSchema = InferFromRecord<typeof social[number]>;
export type ExperienceSchema = InferFromRecord<typeof experiences[number]>;
export type EducationSchema = InferFromRecord<typeof education[number]>;
export type ProjectSchema = InferFromRecord<typeof projects[number]>;
export type SkillSchema = typeof skills;

export type ResumeSchema = {
	about: AboutSchema;
	social: SocialSchema[];
	experiences: ExperienceSchema[];
	education: EducationSchema[];
	projects: ProjectSchema[];
	skills: SkillSchema;
};

export type SingleSectionTypes = {
	[K in keyof ResumeSchema]: ResumeSchema[K] extends (infer U)[]
		? U
		: ResumeSchema[K];
};

export type SectionKeys = keyof ResumeSchema;

export type SectionSchema<T extends SectionKeys> = ResumeSchema[T];

export type RefObjectMap<T> = {
	[key: string]: React.RefObject<T>;
};
