import { useForm } from "react-hook-form";

export const useFormInstance = () => {
	const {
		register,
		formState: { errors },
	} = useForm();

	return { register, errors };
};
