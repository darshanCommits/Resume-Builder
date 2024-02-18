import { SkillSchema } from "@models/resumeTypes";
import { ResumeHeading } from "@ui/misc";

export const Skills = ({ props }: { props: SkillSchema }) => {
	return (
		<section>
			<ResumeHeading heading="skills" />
			<ul className="grid grid-cols-3 text-md w-5/6 ">
				{props.map(x => (
					<li
						key={x}
						className="font-[500] text-gray-800 print:font-normal print:bg-white print:border-inset"
					>
						{x}
					</li>
				))}
			</ul>
		</section>
	);
};
export default Skills;
