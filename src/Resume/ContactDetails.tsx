import React from "react";

type ContactDetailProps = {
	icon: string;
	content: string;
	link?: string;
};

const ContactDetail: React.FC<ContactDetailProps> = ({
	icon,
	content,
	link = "",
}) => {
	const iconStyle = `text-primary ph ph-bold ${icon || ""}`;

	return (
		<div>
			<i className={iconStyle} />
			{link ? (
				<a
					href={link}
					target="_blank"
					rel="noreferrer"
					className="border-b-2 border-gray-700 hover:border-gray-500"
				>
					{content}
				</a>
			) : (
				<span>{content}</span>
			)}
		</div>
	);
};

export default ContactDetail;
