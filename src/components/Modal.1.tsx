import React, { useEffect } from "react";
import "tailwindcss/tailwind.css"; // Import the Tailwind CSS styles

interface DialogProps {
	open: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = ({ open, children, onClose }) => {
	useEffect(() => {
		const handleEscapeKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				onClose();
			}
		};

		if (open) {
			document.addEventListener("keydown", handleEscapeKey);
		}

		// Cleanup function to remove the event listener
		return () => {
			document.removeEventListener("keydown", handleEscapeKey);
		};
	}, [open, onClose]);

	return (
		<dialog
			id="myModal"
			className={`fixed inset-0 ${open ? "" : "hidden"}`} // Tailwind classes for fixed position and visibility
			onClose={onClose}
		>
			<div className="flex items-center justify-center min-h-screen">
				<div className="bg-white p-4 rounded shadow-md">
					<button
						type="button"
						onClick={onClose}
						className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
					>
						close
					</button>
					{children}
				</div>
			</div>
		</dialog>
	);
};

export default Dialog;
