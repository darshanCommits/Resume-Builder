import { ExperienceSchema } from "@models/resumeTypes";
import { ResumeHeading, ResumeSummary } from "@ui/misc";

export const Experience = ({ props }: { props: ExperienceSchema[] }) => {
	return (
		<section className="break-inside-avoid flex-col flex gap-2">
			<ResumeHeading heading="experience" />
			{props.map(experience => (
				<section
					key={experience.date_or_date_range}
					className="break-inside-avoid"
				>
					<div className="font-semibold text-gray-600 float-right flex flex-col items-end">
						{experience.location}
					</div>
					<header className="mb-2">
						<h3 className="text-lg font-bold text-gray-700 print:font-normal">
							{`${experience.position} at `}
							<a
								href={`https://${experience.website}`}
								className="text-gray-700 hover:underline hover:text-gray-800 transition-all"
							>
								{experience.company}
							</a>
						</h3>
						<p className="text-gray-500 text-md">
							{experience.date_or_date_range}
						</p>
					</header>

					{experience.summary && <ResumeSummary content={experience.summary} />}
				</section>
			))}
		</section>
	);
};
export default Experience;
