import { ForwardedRef, ReactNode, forwardRef } from "react";
import { IoMdClose } from "react-icons/io";

type ModalProps = {
	toggleDialog: (ref: ForwardedRef<HTMLDialogElement>) => void;
	children: ReactNode;
	id: string;
};

const Modal = forwardRef<HTMLDialogElement, ModalProps>(
	({ children, toggleDialog, id }, ref) => {
		return (
			<dialog
				id={id}
				ref={ref}
				className=" text-white bg-[#0D1117] bg-opacity-3/4 border border-white border-solid backdrop:bg-black/60  p-4 max-w-3/5 min-w-80 w-4/5"
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
