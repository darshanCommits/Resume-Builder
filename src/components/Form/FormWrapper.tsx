import GenericForm, { GenericFormProps } from "./GenericForm";

export const FormWrapper = ({
	name,
	formFields,
}: GenericFormProps & { name: string }) => {
	return (
		<section>
			<h1 className="text-xl text-red-500">{name}</h1>
			<GenericForm formFields={formFields} />
		</section>
	);
};

export default FormWrapper;
