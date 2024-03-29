import {
	about,
	education,
	experiences,
	projects,
	skills,
} from "@data/exampleResume";
import { ResumeHr } from "@ui/misc";

import About from "@components/Resume/About";
import Education from "@components/Resume/Education";
import Experience from "@components/Resume/Experience";
import Projects from "@components/Resume/Projects";
import Skills from "@components/Resume/Skills";

const Resume = () => {
	return (
		<main className="p-8 overflow-auto h-screen">
			<About props={about} />
			<ResumeHr />

			<Experience props={experiences} />
			<ResumeHr />

			<Projects props={projects} />
			<ResumeHr />

			<Education props={education} />
			<ResumeHr />

			<Skills props={skills} />
		</main>
	);
};

export default Resume;
