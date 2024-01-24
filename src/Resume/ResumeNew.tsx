import { ResumeSchema } from "@models/resumeTypes";

const sectionStyle = {
	marginBottom: "20px",
	paddingBottom: "10px",
	borderBottom: "1px solid #000",
};

const headingStyle = {
	fontSize: "18px",
	fontWeight: "bold",
	marginBottom: "5px",
};

const contentStyle = {
	fontSize: "12px",
	marginBottom: "10px",
};

const ResumeSection = ({ title, items, renderContent }) => (
	<div style={sectionStyle}>
		<h2 style={headingStyle}>{title}</h2>
		{items.map((item, index) => (
			<div key={index} style={contentStyle}>
				{renderContent(item)}
			</div>
		))}
	</div>
);

const ResumePDF = ({
	about,
	profile,
	experiences,
	education,
	projects,
	skills,
	languages,
	awards,
	certificates,
	hobbies,
}: ResumeSchema) => {
	const aboutSectionStyle = {
		marginBottom: "30px",
	};

	const summaryStyle = {
		fontWeight: "bold",
	};

	const profileSectionStyle = {
		marginBottom: "30px",
	};

	const renderAboutSection = () => (
		<div style={{ ...sectionStyle, ...aboutSectionStyle }}>
			<p>{about.full_name}</p>
			<p>{about.headline}</p>
			<p>{about.email}</p>
			<p>{about.website}</p>
			<p>{about.phone}</p>
			<p>{about.location}</p>
			<p style={summaryStyle}>Summary</p>
			<p>{about.summary}</p>
		</div>
	);

	const renderProfileSection = profileItem => (
		<div key={profileItem.network}>
			<p>{profileItem.network}</p>
			<p>{profileItem.username}</p>
			<p>{profileItem.website}</p>
		</div>
	);

	const renderExperiencesSection = experience => (
		<div key={experience.company}>
			<p>{experience.date_or_date_range}</p>
			<p>{experience.company}</p>
			<p>{experience.position}</p>
			<p>{experience.location}</p>
			<p>{experience.summary}</p>
		</div>
	);

	const renderEducationSection = educationItem => (
		<div key={educationItem.institution}>
			<p>{educationItem.date_or_date_range}</p>
			<p>{educationItem.institution}</p>
			<p>{educationItem.type_of_study}</p>
			<p>{educationItem.area_of_study}</p>
			<p>{educationItem.score}</p>
			<p>{educationItem.summary}</p>
		</div>
	);

	const renderLanguagesSection = language => (
		<div key={language.name}>
			<p>{language.name}</p>
			<p>{language.level}</p>
			<p>{language.description}</p>
		</div>
	);

	const renderSkillsSection = skill => (
		<div key={skill.name}>
			<p>{skill.name}</p>
			<p>{skill.level}</p>
			<p>{skill.keywords.join(", ")}</p>
			<p>{skill.description}</p>
		</div>
	);

	const renderAwardsSection = award => (
		<div key={award.title}>
			<p>{award.date_or_date_range}</p>
			<p>{award.title}</p>
			<p>{award.awarder}</p>
			<p>{award.summary}</p>
		</div>
	);

	const renderCertificatesSection = certificate => (
		<div key={certificate.name}>
			<p>{certificate.date_or_date_range}</p>
			<p>{certificate.name}</p>
			<p>{certificate.issuer}</p>
		</div>
	);

	const renderProjectsSection = project => (
		<div key={project.name}>
			<p>{project.date_or_date_range}</p>
			<p>{project.name}</p>
			<p>{project.keywords.join(", ")}</p>
			<p>{project.summary}</p>
		</div>
	);

	const renderHobbiesSection = (hobby, index) => <p key={index}>{hobby}</p>;

	return (
		<div>
			{renderAboutSection()}
			<hr />

			<ResumeSection
				title="Profiles"
				items={profile}
				renderContent={renderProfileSection}
				sectionStyle={profileSectionStyle}
			/>
			<hr />

			<ResumeSection
				title="Experiences"
				items={experiences}
				renderContent={renderExperiencesSection}
			/>
			<hr />

			<ResumeSection
				title="Education"
				items={education}
				renderContent={renderEducationSection}
			/>
			<hr />

			<ResumeSection
				title="Languages"
				items={languages}
				renderContent={renderLanguagesSection}
			/>
			<hr />

			<ResumeSection
				title="Skills"
				items={skills}
				renderContent={renderSkillsSection}
			/>
			<hr />

			<ResumeSection
				title="Awards"
				items={awards}
				renderContent={renderAwardsSection}
			/>
			<hr />

			<ResumeSection
				title="Certificates"
				items={certificates}
				renderContent={renderCertificatesSection}
			/>
			<hr />

			<ResumeSection
				title="Projects"
				items={projects}
				renderContent={renderProjectsSection}
			/>
			<hr />

			<ResumeSection
				title="Hobbies"
				items={hobbies}
				renderContent={renderHobbiesSection}
			/>
		</div>
	);
};

export default ResumePDF;
