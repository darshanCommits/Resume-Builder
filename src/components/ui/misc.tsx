import { snakeToTitleCase } from "@utils/utils";

export const ResumeHeading = ({ heading }: { heading: string }) => (
	<h2 className="text-xl font-bold text-gray-800 print:font-normal">
		{snakeToTitleCase(heading)}
	</h2>
);

export const ResumeHr = () => (
	<hr className="border-gray-600 border-solid border rounded-full my-2" />
);

export type LinkType = "Phone" | "Email" | "Website";
export const getCorrectLink = (name: LinkType, link: string) => {
	if (name === "Phone") return `tel:${link}`;
	if (name === "Email") return `mailto:${link}`;
	if (name === "Website") return `https://${link}`;
};

export const ResumeLink = ({
	name,
	link,
}: { name: LinkType; link: string }) => {
	return (
		<a href={getCorrectLink(name, link)}>
			<span className="font-semibold text-gray-600  transition duration-100 ease-in group-hover:text-gray-700 print:text-black">
				{link}
			</span>
		</a>
	);
};

export const ResumeSummary = ({ content }: { content: string }) => {
	const contentArray = content.split("\n");

	return (
		<>
			{contentArray.length <= 1 && (
				<p className="pl-3 font-normal text-gray-700 text-md inline-block w-4/6">
					{content}
				</p>
			)}
			{contentArray.length > 1 && (
				<ol className="pl-3 font-normal text-gray-700 text-md list-disc w-4/5">
					{contentArray.map(point => (
						<li>{point}</li>
					))}
				</ol>
			)}
		</>
	);
};
