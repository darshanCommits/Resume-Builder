import { ResumeSchema } from "@models/resumeTypes";

export const exampleResume: ResumeSchema = {
	about: {
		full_name: "Tyler Durden",
		headline: "Soap Salesman",
		email: "tyler@fightclub.com",
		website: "www.fightclub.com",
		phone: "555-1999",
		location: "Paper Street Soap Company",
		summary: "Making and selling soap from human fat",
	},

	profile: [
		{
			network: "Fight Club",
			username: "tylerd",
			website: "https://linkedin.com/in/tylerdurden",
		},
	],

	experiences: [
		{
			website: "www.fightclub.com",
			date_or_date_range: "1999",
			company: "Fight Club",
			position: "Founder",
			location: "Paper Street Soap Company Basement",
			summary: "Started an underground boxing club",
		},
	],

	education: [
		{
			website: "www.fightclub.com",
			date_or_date_range: "1999",
			institution: "Fight Club",
			type_of_study: "dimploma",
			area_of_study: "Soap Making",
			score: "A+",
			summary: "Learned how to make soap and explosives",
		},
	],

	languages: [
		{
			name: "English",
			level: 5,
			description: "Native speaker",
		},
	],

	skills: [
		{
			name: "Fighting",
			level: 5,
			keywords: ["boxing", "martial arts"],
			description: "Expert fighter and founder of Fight Club",
		},
		{
			name: "Soap Making",
			level: 5,
			keywords: ["chemistry", "manufacturing"],
			description: "Expert soap maker using human fat",
		},
	],

	awards: [
		{
			website: "www.fightclub.com",
			date_or_date_range: "1999",
			title: "Fight Club Founder",
			awarder: "Fight Club",
			summary: "Awarded for starting Fight Club",
		},
	],

	certificates: [
		{
			date_or_date_range: "1999",
			website: "www.fightclub.com",
			name: "Soap Making",
			issuer: "Fight Club",
		},
	],

	projects: [
		{
			date_or_date_range: "1999",
			website: "www.fightclub.com",
			name: "Project Mayhem",
			keywords: ["chemistry", "manufacturing"],
			summary: "The Things we own, End up owning you.",
		},
	],

	hobbies: ["Fighting", "Making Soap", "Sewing Wounds"],
} as const;

export default exampleResume;
