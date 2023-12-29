const x = <T>(placeholder: T, inputType = "text") => {
	return {
		inputType,
		placeholder,
	};
};

export const about = {
	full_name: x("Tyler Durden"),
	headline: x("Tyler durden is ...."),
	email: x("tyler@durden.soap", "email"),
	website: x("tylersoaps.com"),
	phone: x("555-063-1999", "tel"),
	location: x("Tyler Durden"),
};

export const profile = {
	network: x("LinkedIn"),
	username: x("tylerd"),
	website: x("https://linkedin.com/in/tylerd/"),
};

export const education = {
	summary: x("Learnt how to make soaps and... explosives"),
	date_or_date_range: x("1999"),
	institution: x("Fight Club University"),
	score: x("A+"),
	type_of_study: {
		inputType: "select",
		options: ["Diploma", "Highschool"],
	},
	area_of_study: x("Soap Making"),
	website: x("https://fightclub.org"),
};

export const experience = {
	company: x("Fight Club"),
	summary: x("Started an underground boxing club"),
	date_or_date_range: x("1999"),
	position: x("Founder"),
	website: x("https://fightclub.org"),
	location: x("Paper Street Soap Company Basement"),
};

export const project = {
	date_or_date_range: x("1999"),
	website: x("https://fightclub.org"),
	name: x("Project Mayhem"),
	summary: x("The Things we own, End up owning you."),
	keywords: x("chemistry, manufacturing"),
};

export const skill = {
	name: x("Fighting"),
	level: x("5", "number"),
	keywords: x("boxing, martial arts"),
	description: x("Expert fighter and founder of Fight Club"),
};

export const awards = {
	website: x("https://fightclub.org"),
	summary: x("Awarded for starting Fight Club"),
	date_or_date_range: x("1999"),
	title: x("Fight Club Founder"),
	awarder: x("Fight Club"),
};

export const certificates = {
	date_or_date_range: x("1999"),
	website: x("https://fightclub.org"),
	name: x("Soap Making"),
	issuer: x("Fight Club"),
};

export const hobbies = x("Fighting, Making Soap, Sewing Wounds");

export const languages = {
	name: x("English"),
	level: x(5, "number"),
	description: x("Native speaker"),
};
