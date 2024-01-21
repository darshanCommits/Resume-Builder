import { snakeToTitleCase } from "@utils/utils";

const FormSectionHeading = ({ sec }: { sec: string }) => {
	return <h1 className="text-3xl text-red-500">{snakeToTitleCase(sec)}</h1>;
};

export default FormSectionHeading;
