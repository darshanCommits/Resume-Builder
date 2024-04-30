import {
	AboutSchema,
	EducationSchema,
	ExperienceSchema,
	ProjectSchema,
	SkillSchema,
	SocialSchema,
} from "@models/resumeTypes";
import { create } from "zustand";
import { convertToEmptyObj } from "./useFormState";
import {
	about,
	education,
	experiences,
	projects,
	social,
} from "@data/exampleResume";

type ResumeStore = {
	about: AboutSchema;
	social: SocialSchema;
	experiences: ExperienceSchema;
	education: EducationSchema;
	projects: ProjectSchema;
	skills: SkillSchema;

	// Methods for updating form values
	setAbout: (about: AboutSchema) => void;
	setSocial: (social: SocialSchema) => void;
	setExperiences: (experiences: ExperienceSchema) => void;
	setEducation: (education: EducationSchema) => void;
	setProjects: (projects: ProjectSchema) => void;
	setSkills: (skills: SkillSchema) => void;
};

export const useResumeStore = create<ResumeStore>(set => ({
	about: convertToEmptyObj<"about">(about),
	social: convertToEmptyObj<"social">(social[0]),
	experiences: convertToEmptyObj<"experiences">(experiences[0]),
	education: convertToEmptyObj<"education">(education[0]),
	projects: convertToEmptyObj<"projects">(projects[0]),
	skills: [],

	setAbout: (about: AboutSchema) => set({ about }),
	setSocial: (social: SocialSchema) => set({ social }),
	setExperiences: (experiences: ExperienceSchema) => set({ experiences }),
	setEducation: (education: EducationSchema) => set({ education }),
	setProjects: (projects: ProjectSchema) => set({ projects }),
	setSkills: (skills: SkillSchema) => set({ skills }),
}));
