export const capitalize = (str: string) =>
	str.charAt(0).toUpperCase() + str.slice(1);

export const snakeToTitleCase = (str: string) =>
	str.replaceAll("_", " ").split(" ").map(capitalize).join(" ");
