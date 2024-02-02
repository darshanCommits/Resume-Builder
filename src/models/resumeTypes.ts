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

export type ProfileSchema = Website & {
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

export type SkillSchema = {
	name: string;
	level: string;
	description: string;
	keywords: string[];
};

export type ProjectSchema = Date &
	Website & {
		name: string;
		keywords: string[];
		summary: string;
	};

export type ResumeSchema = {
	about: AboutSchema;
	profile: ProfileSchema[];
	experiences: ExperienceSchema[];
	education: EducationSchema[];
	projects: ProjectSchema[];
	skills: SkillSchema[];
};

export type SingleSectionTypes = {
	about: AboutSchema;
	profile: ProfileSchema;
	experiences: ExperienceSchema;
	education: EducationSchema;
	projects: ProjectSchema;
	skills: SkillSchema;
};

// export type SectionSchema<K extends SectionKeys> = K extends keyof ResumeSchema
// 	? ResumeSchema[K]
// 	: never;

export type SectionKeys = keyof ResumeSchema;

export type SingleSectionKeys =
	| "about"
	| "profile"
	| "experiences"
	| "education"
	| "projects"
	| "skills";

export type SectionSchema<K extends SingleSectionKeys> =
	K extends SingleSectionKeys ? ResumeSchema[K] : never;

export type SingleSectionSchema<K extends SingleSectionKeys> =
	K extends keyof SingleSectionTypes ? SingleSectionTypes[K] : never;

export type ArraySectionTypes = Exclude<SectionSchema, AboutSchema>;

export type RefObjectMap<T> = {
	[key: string]: React.RefObject<T>;
};
