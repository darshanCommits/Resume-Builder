import { SkillSchema } from "@models/resumeTypes";
import { ResumeHeading } from "@ui/misc";

export const Skills = ({ props }: { props: SkillSchema }) => {
	return (
		<section>
			<ResumeHeading heading="skills" />
			<ul className="flex flex-wrap -mb-1 font-bold leading-relaxed text-md -mr-1.6 divide-x">
				{props.map(x => (
					<li className="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">
						{x}
					</li>
				))}
			</ul>
		</section>
	);
};
export default Skills;
