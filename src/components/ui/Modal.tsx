import { ConfirmPopup } from "@/App";
import { ReactNode, useEffect } from "react";
import { IoMdClose } from "react-icons/io";

type ModalProps = {
	open: boolean;
	onClose: () => void;
	children: ReactNode;
};

const Modal = ({ open, children, onClose }: ModalProps) => {
	useEffect(() => {
		const handleEscapeKey = (e: KeyboardEvent) => {
			if (e.key !== "Escape") return;
			onClose();
		};

		if (open) document.addEventListener("keydown", handleEscapeKey);

		return () => {
			document.removeEventListener("keydown", handleEscapeKey);
		};
	}, [onClose]);

	if (!open) return null;
	return (
		<>
			{open && <div className="fixed inset-0 bg-black bg-opacity-70" />}
			<dialog
				id="myModal"
				open={open}
				onClose={onClose}
				className="fixed inset-0 text-white bg-black bg-opacity-100 p-4 max-w-[80%]"
			>
				<button
					type="button"
					onClick={onClose}
					className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
				>
					<IoMdClose size="32" />
				</button>
				{children}
			</dialog>
		</>
	);
};

// export const Example = () => {
// 	const [isOpen, setModalOpen] = useState(false);

// 	return (
// 		<>
// 			<button type="button" onClick={() => setModalOpen(true)}>
// 				Open Modal
// 			</button>

// 			<Dialog open={isOpen} onClose={() => setModalOpen(false)}>
// 				<h1 className="text-3xl text-red-500">{snakeToTitleCase("about")}</h1>
// 				<FieldSet placeholders={exampleResume.about} section="about" />
// 			</Dialog>
// 		</>
// 	);
// };

export default Modal;
