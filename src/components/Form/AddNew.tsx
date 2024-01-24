import { ReactNode, useEffect } from "react";

type ModalProps = {
	show: boolean;
	title: ReactNode;
	content: ReactNode;
	onClose: () => void;
};

const Modal = (props: ModalProps) => {
	if (!props.show) return null;

	useEffect(() => {
		const isEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") props.onClose();
		};

		document.body.addEventListener("keydown", isEscape);

		return () => {
			document.body.removeEventListener("keydown", isEscape);
		};
	}, [props.onClose]);

	return (
		<div className="modal bg-black bg-opacity-50 fixed inset-0">
			<div className="modal-content w-80 bg-white">
				<div className="modal-header p-2">
					<h4 className="modal-title m-0">{props.title}</h4>
				</div>
			</div>

			<div className="modal-body p-2 border-t-2 border-b-2 border-gray-50">
				{props.content}
			</div>

			<div className="modal-footer p-2">
				<button type="button" className="button" onClick={props.onClose}>
					Close
				</button>
			</div>
		</div>
	);
};

export default Modal;
