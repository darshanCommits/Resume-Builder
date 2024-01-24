import { profile } from "@data/exampleResume";
import FormSectionWithModal from "./FormSectionWithModal";

export const ProfileSection = ({ onChange }) => {
	return (
		<FormSectionWithModal
			onChange={onChange}
			placeholders={profile}
			sec={"profile"}
		/>
	);
};

export default ProfileSection;
