import { ForwardedRef, ReactNode, forwardRef } from "react";
import { IoMdClose } from "react-icons/io";

type ModalProps = {
	toggleDialog: (ref: ForwardedRef<HTMLDialogElement>) => void;
	children: ReactNode;
};

const Modal = forwardRef<HTMLDialogElement, ModalProps>(
	({ children, toggleDialog }, ref) => {
		return (
			<dialog
				ref={ref}
				className="fixed inset-0 text-white bg-black bg-opacity-100 p-4 max-w-[80%]"
			>
				<button
					type="button"
					onClick={() => toggleDialog(ref)}
					className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
				>
					<IoMdClose size="32" />
				</button>
				{children}
			</dialog>
		);
	},
);

export default Modal;
