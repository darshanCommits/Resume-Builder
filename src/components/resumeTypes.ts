export type TypeOfStudyOptions =
	| "highschool"
	| "bachelors"
	| "masters"
	| "doctorate"
	| "dimploma";

export type WebsiteInfo = {
	website?: string;
	summary?: string;
};

export type DateInfo = {
	date_or_date_range?: string;
};

export type BasicSchema = WebsiteInfo & {
	full_name: string;
	headline: string;
	email: string;
	phone: string;
	location: string;
};

export type ProfileSchema = WebsiteInfo & {
	network: string;
	username: string;
};

export type ExperienceSchema = WebsiteInfo &
	DateInfo & {
		company: string;
		position: string;
		location: string;
	};

export type EducationSchema = WebsiteInfo &
	DateInfo & {
		institution: string;
		type_of_study: TypeOfStudyOptions;
		area_of_study: string;
		score: string;
	};

export type LanguageSchema = {
	name: string;
	level: number;
	description: string;
};

export type SkillSchema = LanguageSchema & {
	keywords: string[];
};

export type AwardSchema = WebsiteInfo &
	DateInfo & {
		title: string;
		awarder: string;
	};

export type CertificateSchema = DateInfo &
	WebsiteInfo & {
		name: string;
		issuer: string;
	};

export type ProjectSchema = DateInfo &
	WebsiteInfo & {
		name: string;
		keywords: string[];
		summary: string;
	};

export type ResumeSchema = {
	about: BasicSchema;
	profile: ProfileSchema;
	experiences: ExperienceSchema[];
	education: EducationSchema[];
	projects: ProjectSchema[];
	skills: SkillSchema[];
	languages: LanguageSchema[];
	awards: AwardSchema[];
	certificates: CertificateSchema[];
	hobbies: string[];
};

export type SectionKeyType = keyof ResumeSchema; // gets the keys of the ResumeSchema

export type SectionInferFn = <TSection extends SectionKeyType>(
	section: TSection,
) => ResumeSchema[TSection];
