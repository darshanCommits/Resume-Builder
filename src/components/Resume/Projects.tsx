import { ProjectSchema } from "@models/resumeTypes";
import { ResumeHeading, ResumeSummary } from "@ui/misc";
import { snakeToTitleCase } from "@utils/utils";

export const Projects = ({ props }: { props: ProjectSchema[] }) => {
	return (
		<section className="flex-col flex gap-2">
			<ResumeHeading heading="projects" />
			{props.map(project => {
				return (
					<section key={project.date_or_date_range}>
						{project.keywords && (
							<ul className="pl-3 font-semibold text-gray-600 text-md float-right flex flex-col items-end">
								{project.keywords.map(keyword => (
									<li key={keyword}>{snakeToTitleCase(keyword)}</li>
								))}
							</ul>
						)}
						<header className="mb-2">
							<h3 className="text-lg text-gray-700 print:font-normal">
								{project.website && (
									<a
										href={`https://${project.website}`}
										className="text-gray-700 hover:underline hover:text-gray-800 transition-all font-bold"
									>
										{project.name}
									</a>
								)}
							</h3>
							<p className="text-gray-500 text-md">
								{project.date_or_date_range}
							</p>
						</header>
						<ResumeSummary content={project.summary} />
					</section>
				);
			})}
		</section>
	);
};

export default Projects;
