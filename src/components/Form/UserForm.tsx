import AboutSection from "@form/Sections/AboutSection";
import ExperiencesSection from "@form/Sections/ExperiencesSection";
import EducationSection from "@form/Sections/EducationSection";
import ProjectsSection from "@form/Sections/ProjectsSection";
import SkillSection from "@form/Sections/SkillsSection";
import SocialSection from "./Sections/ProfileSection";

const UserForm = () => {
	return (
		<form className="flex flex-col gap-5">
			<AboutSection />
			<EducationSection />
			<ExperiencesSection />
			<SocialSection />
			<ProjectsSection />
			<SkillSection />
		</form>
	);
};

export default UserForm;
