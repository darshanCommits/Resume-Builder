import {
	about,
	education,
	experiences,
	projects,
	skills,
	social,
} from "@data/exampleResume";
import { InferFromRecord } from "@models/utilityTypes";

export type AboutSchema = InferFromRecord<typeof about>;
export type SocialSchema = InferFromRecord<typeof social[number]>;
export type ExperienceSchema = InferFromRecord<typeof experiences[number]>;
export type EducationSchema = InferFromRecord<typeof education[number]>;
export type ProjectSchema = InferFromRecord<typeof projects[number]>;
export type SkillSchema = typeof skills;

export type ResumeStore = {
	about: AboutSchema;
	social: SocialSchema[];
	experiences: ExperienceSchema[];
	education: EducationSchema[];
	projects: ProjectSchema[];
	skills: SkillSchema;
};
