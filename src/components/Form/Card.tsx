import { IoMdClose } from "react-icons/io";
type CardProps = {
	data: Record<string, string>;
	onClick?: (e: React.MouseEventHandler<SVGElement>) => void;
};

export const Card = ({ data, onClick }: CardProps) => {
	return (
		<div className="relative border-red border border-solid p-3 h-24 ">
			<IoMdClose
				size="20"
				className="absolute right-0 top-0 m-3 cursor-pointer"
				onClick={e => onClick(e)}
			/>
			<h3 className="text-md mb-5">{data.header}</h3>
			<span className="text-red-500 font-medium">{data.footer}</span>
			<span className="float-end text-sm mt-2">{data.date}</span>
		</div>
	);
};

export default Card;
