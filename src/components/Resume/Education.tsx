import { EducationSchema } from "@models/resumeTypes";
import { ResumeHeading, ResumeSummary } from "@ui/misc";
import React from "react";

const Education: React.FC<{ props: EducationSchema[] }> = ({ props }) => {
	return (
		<section className="break-inside-avoid">
			<ResumeHeading heading="education" />
			{props.map(props => (
				<section className="break-inside-avoid">
					<div className="flex flex-col gap-2 items-end float-right font-semibold text-gray-600 ">
						{props.score}
						<a href={`https://${props.website}`}>{props.website}</a>
					</div>

					<header className="mb-2">
						<h3 className="text-lg font-semibold text-gray-700 ">
							{props.institution}
						</h3>

						<p className="text-gray-500 text-md">
							{`${props.date_or_date_range} | ${props.type_of_study} | ${props.area_of_study}`}
						</p>
					</header>

					{props.summary && <ResumeSummary content={props.summary} />}
				</section>
			))}
		</section>
	);
};

export default Education;
