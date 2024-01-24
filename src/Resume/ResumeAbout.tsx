import { BasicSchema } from "@/components/resumeTypes";
import React from "react";
import ContactDetail from "./ContactDetails";

const ResumeSummary: React.FC<{ summary: string }> = ({ summary }) => (
	<section id="summary">
		<h4 className="mb-2 border-b pb-0.5 text-sm font-bold">Summary</h4>
		<div className="columns-1">
			<p>{summary}</p>
		</div>
	</section>
);

const ResumeHeader: React.FC<{ fullName: string; headline: string }> = ({
	fullName,
	headline,
}) => (
	<header>
		<p className="text-2xl font-bold">{fullName}</p>
		<p className="text-base">{headline}</p>
	</header>
);

const ResumeAbout: React.FC<BasicSchema> = ({
	fullName,
	email,
	headline,
	location,
	phone,
	website,
	summary,
}) => {
	return (
		<article className="space-y-2">
			{fullName && headline && <ResumeHeader {...{ fullName, headline }} />}

			<section className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm">
				{location && <ContactDetail icon="ph-map-pin " content={location} />}

				{phone && (
					<ContactDetail
						icon="ph-phone "
						content={phone}
						link={`tel:${phone}`}
					/>
				)}

				{email && (
					<ContactDetail
						icon="ph-at"
						content={email}
						link={`mailto:${email}`}
					/>
				)}

				{website && (
					<ContactDetail icon="ph-link" content={website} link={website} />
				)}
			</section>

			{summary && <ResumeSummary {...{ summary }} />}
		</article>
	);
};

export default ResumeAbout;
