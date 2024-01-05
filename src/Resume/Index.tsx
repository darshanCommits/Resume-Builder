import { ResumeSchema, SectionInferFn } from "@/components/resumeTypes";
import ResumeAbout from "./ResumeAbout";

const Resume = ({ resume }: { resume: ResumeSchema }) => {
	const getSection: SectionInferFn = section => resume[section];

	return (
		<>
			<ResumeAbout {...getSection("about")} />
		</>
	);
};

export default Resume;
