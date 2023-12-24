type TypeOfStudyOptions =
	| "highschool"
	| "bachelors"
	| "masters"
	| "doctorate"
	| "dimploma";

type InputRange<T extends number> = {
	level: T;
};

type WebsiteInfo = {
	website?: string;
	summary?: string;
};

type DateInfo = {
	date_or_date_range?: Date;
};

type BasicSchema = {
	full_name: string;
	headline?: string;
	email?: string;
	website?: string;
	phone?: string;
	location?: string;
	summary?: string;
};

type ProfileSchema = WebsiteInfo & {
	network: string;
	username: string;
};

type ExperienceSchema = WebsiteInfo &
	DateInfo & {
		company: string;
		position: string;
		location: string;
	};

type EducationSchema = WebsiteInfo &
	DateInfo & {
		institution: string;
		type_of_study: TypeOfStudyOptions;
		area_of_study: string;
		score?: string;
	};

type LanguageSchema = {
	name: string;
	level: InputRange<5>; // input element range
	description?: string;
};

type SkillSchema = LanguageSchema & {
	keywords: string[];
};

type AwardSchema = WebsiteInfo &
	DateInfo & {
		title: string;
		awarder: string;
	};

type CertificateSchema = DateInfo &
	WebsiteInfo & {
		name: string;
		issuer: string;
	};

type ProjectSchema = DateInfo &
	WebsiteInfo & {
		name: string;
		keywords: string[];
	};

type HobbiesSchema = string[];

type ResumeSchema = {
	about: BasicSchema;
	profile: ProfileSchema;
	experiences: ExperienceSchema[];
	educations: EducationSchema[];
	languages: LanguageSchema[];
	skills: SkillSchema[];
	awards: AwardSchema[];
	certificates: CertificateSchema[];
	projects: ProjectSchema[];
	hobbies: HobbiesSchema;
};
