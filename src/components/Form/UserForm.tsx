import AboutSection from "@form/Sections/AboutSection";
import ExperiencesSection from "@form/Sections/ExperiencesSection";
import EducationSection from "@form/Sections/EducationSection";
import ProjectsSection from "@form/Sections/ProjectsSection";
import SkillsSection from "@form/Sections/SkillsSection";

const UserForm = () => {
	return (
		<aside className="bg-[#0D1117] text-white p-4 h-full">
			<form className="w-52 flex flex-col gap-5">
				<ExperiencesSection />
				<AboutSection />
				<EducationSection />
			</form>
		</aside>
	);
};

export default UserForm;
