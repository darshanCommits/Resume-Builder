export type TypeOfStudyOptions =
	| "bachelors"
	| "dimploma"
	| "doctorate"
	| "highschool"
	| "masters";

export type WebsiteInfo = {
	summary?: string;
	website?: string;
};

export type DateInfo = {
	date_or_date_range?: string;
};

export type BasicSchema = WebsiteInfo & {
	email: string;
	full_name: string;
	headline: string;
	location: string;
	phone: string;
};

export type ProfileSchema = WebsiteInfo & {
	network: string;
	username: string;
};

export type ExperienceSchema = WebsiteInfo &
	DateInfo & {
		company: string;
		location: string;
		position: string;
	};

export type EducationSchema = WebsiteInfo &
	DateInfo & {
		area_of_study: string;
		institution: string;
		score: string;
		type_of_study: TypeOfStudyOptions;
	};

export type LanguageSchema = {
	description: string;
	level: number;
	name: string;
};

export type SkillSchema = LanguageSchema & {
	keywords: string[];
};

export type AwardSchema = WebsiteInfo &
	DateInfo & {
		awarder: string;
		title: string;
	};

export type CertificateSchema = DateInfo &
	WebsiteInfo & {
		issuer: string;
		name: string;
	};

export type ProjectSchema = DateInfo &
	WebsiteInfo & {
		keywords: string[];
		name: string;
		summary: string;
	};

export type ResumeSchema = {
	about: BasicSchema;
	awards: AwardSchema[];
	certificates: CertificateSchema[];
	education: EducationSchema[];
	experiences: ExperienceSchema[];
	hobbies: string[];
	languages: LanguageSchema[];
	profile: ProfileSchema;
	projects: ProjectSchema[];
	skills: SkillSchema[];
};
