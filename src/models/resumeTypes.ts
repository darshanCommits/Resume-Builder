export type TypeOfStudyOptions =
	| "highschool"
	| "bachelors"
	| "masters"
	| "doctorate"
	| "diploma";

type Website = {
	website?: string;
	summary?: string;
};

type Date = {
	date_or_date_range: string;
};

export type AboutSchema = Website & {
	full_name: string;
	headline: string;
	email: string;
	phone: string;
	location: string;
};

export type SocialSchema = Website & {
	network: string;
	username: string;
};

export type ExperienceSchema = Website &
	Date & {
		company: string;
		position: string;
		location: string;
	};

export type EducationSchema = Website &
	Date & {
		institution: string;
		type_of_study: TypeOfStudyOptions;
		area_of_study: string;
		score: string;
	};

export type ProjectSchema = Date &
	Website & {
		name: string;
		keywords: string[];
		summary: string;
	};

export type SkillSchema = string[];

export type ResumeSchema = {
	about: AboutSchema;
	social: SocialSchema[];
	experiences: ExperienceSchema[];
	education: EducationSchema[];
	projects: ProjectSchema[];
	skills: SkillSchema;
};

export type SingleSectionTypes = {
	about: AboutSchema;
	social: SocialSchema;
	experiences: ExperienceSchema;
	education: EducationSchema;
	projects: ProjectSchema;
	skills: SkillSchema;
};

export type SectionKeys = keyof SingleSectionTypes;

export type SingleSectionSchema<T extends SectionKeys> = SingleSectionTypes[T];

export type RefObjectMap<T> = {
	[key: string]: React.RefObject<T>;
};
