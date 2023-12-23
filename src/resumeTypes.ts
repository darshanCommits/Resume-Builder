type Range<T extends number> = {
	level: T;
};

type Textarea = {
	cols: number;
	rows: number;
};

type WebsiteInfo = {
	website?: string;
	summary?: Textarea;
};

type DateInfo = {
	date_or_date_range?: Date;
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
		type_of_study: string; // datalist element
		area_of_study: string;
		score?: string;
	};

type LanguageSchema = {
	name: string;
	level: Range<5>; // input element range
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

type HobbieSchema = {
	name: string[];
};
