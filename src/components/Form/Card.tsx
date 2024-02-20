import { IoMdClose } from "react-icons/io";
type CardProps = {
	data:
		| {
				header: string;
				footer: string;
				date: string;
		  }
		| string;
	onClick?: (e: React.MouseEventHandler<SVGElement>) => void;
};

export const Card = ({ data }: CardProps) => {
	const commonStyles = "relative border-red border border-solid";

	return (
		<div className={`${commonStyles} p-3 `}>
			<IoMdClose
				size="20"
				className="absolute right-0 top-0 m-3 cursor-pointer"
				// onClick={e => onClick(e)}
			/>

			{typeof data === "string" && <h3 className="text-md mb-1">{data}</h3>}
			{typeof data !== "string" && (
				<>
					<h3 className="text-md mb-5">{data.header}</h3>
					<span className="text-red-500 font-medium">{data.footer}</span>
					<span className="float-end text-sm mt-2">{data.date}</span>
				</>
			)}
		</div>
	);
};

export default Card;
