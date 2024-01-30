import {
	AboutSchema,
	EducationSchema,
	ExperienceSchema,
	ProfileSchema,
	ProjectSchema,
	ResumeSchema,
	SkillSchema,
} from "@models/resumeTypes";

export const about: AboutSchema = {
	full_name: "Tyler Durden",
	headline: "Soap Salesman",
	email: "tyler@fightclub.com",
	website: "www.fightclub.com",
	phone: "555-1999",
	location: "Paper Street Soap Company",
	summary: "Making and selling soap from human fat",
};

export const profile: ProfileSchema[] = [
	{
		network: "Fight Club",
		username: "tylerd",
		website: "https://linkedin.com/in/tylerdurden",
	},
];

export const experiences: ExperienceSchema[] = [
	{
		position: "Founder",
		company: "Fight Club",
		date_or_date_range: "1999",
		website: "www.fightclub.com",
		location: "Paper Street Soap Company Basement",
		summary: "Started an underground boxing club",
	},
];

export const education: EducationSchema[] = [
	{
		institution: "Fight Club",
		type_of_study: "diploma",
		date_or_date_range: "1999",
		score: "A+",
		website: "www.fightclub.com",
		area_of_study: "Soap Making",
		summary: "Learned how to make soap and explosives",
	},
];

export const skills: SkillSchema[] = [
	{
		name: "Fighting",
		level: "5",
		keywords: ["boxing", "martial arts"],
		description: "Expert fighter and founder of Fight Club",
	},
	{
		name: "Soap Making",
		level: "5",
		keywords: ["chemistry", "manufacturing"],
		description: "Expert soap maker using human fat",
	},
];

export const projects: ProjectSchema[] = [
	{
		name: "Project Mayhem",
		date_or_date_range: "1999",
		summary: "The Things we own, End up owning you.",
		website: "www.fightclub.com",
		keywords: ["chemistry", "manufacturing"],
	},
];

export const exampleResume: ResumeSchema = {
	about,
	profile,
	experiences,
	education,
	skills,
	projects,
};

export default exampleResume;
