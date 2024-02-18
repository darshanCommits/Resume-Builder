import { FaLinkedin } from "react-icons/fa";
import { AboutSchema } from "@models/resumeTypes";
import { ResumeLink } from "@ui/misc";

export const About = ({ props }: { props: AboutSchema }) => {
	return (
		<section className="break-inside-avoid">
			<ul className="float-right flex flex-col items-end">
				<ResumeLink name={"Email"} link={props.email} />
				{props.website && <ResumeLink name={"Website"} link={props.website} />}
				<ResumeLink name={"Phone"} link={props.phone} />
			</ul>
			<header className="w-full ">
				<div className="flex flex-col gap-1">
					<h1 className="text-4xl font-bold text-gray-800">
						{props.full_name}
						<sub className="text-sm text-gray-700">from {props.location}</sub>
					</h1>
					<h2 className="text-2xl font-semibold text-gray-700 flex items-center gap-2">
						{props.headline}
						<FaLinkedin />
					</h2>
				</div>
			</header>
			<p className="w-4/6 text-gray-700 text-md pl-3">{props.summary}</p>
		</section>
	);
};

export default About;
