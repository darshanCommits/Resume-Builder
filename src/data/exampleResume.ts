import {
	AboutSchema,
	EducationSchema,
	ExperienceSchema,
	SocialSchema,
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
	location: "Underground",
	summary: "Making and selling soap from human fat",
};

export const social: SocialSchema[] = [
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
		summary:
			"Orchestrated a revolutionary underground movement, fostering self-discovery through unconventional means.\n\
			 Pioneered an anarchic haven where rules dissolve, empowering individuals to reclaim their primal essence.\n\
			 Crafted soap from human fat, transcending conventional boundaries to redefine societal norms.",
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

export const skills: SkillSchema = ["Fighting", "Soap Making"];

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
	social,
	experiences,
	education,
	skills,
	projects,
};

export default exampleResume;
