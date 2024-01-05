import exampleResume from "../exampleResume";

const arrayOfResumeSections = Object.keys(
	exampleResume,
) as (keyof typeof exampleResume)[];

type keyAsUnion = typeof arrayOfResumeSections[number];

const getSection = (section: keyAsUnion) => exampleResume[section];

const bruh = getSection("about");

console.log(bruh);
