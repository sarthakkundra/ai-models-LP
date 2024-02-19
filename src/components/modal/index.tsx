import React from "react";
import styles from "./index.module.css";

interface IComponentProps {
	isOpen: boolean;
	setIsOpen: Function;
	children?: any;
}

const Modal: React.FC<IComponentProps> = ({ isOpen, setIsOpen, children }) => {
	if (!isOpen) return null;

	return (
		<div
			className='fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full'
			onClick={() => setIsOpen(false)}>
			<div className={`relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white ${styles.animateBounce}`}>
				<div onClick={(e) => e.stopPropagation()}>
					{children}
          <h3 className="text-black text-lg">Custom Modal</h3>
					<button
						className='absolute top-0 right-0 m-2'
						onClick={() => setIsOpen(false)}>
						Close
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
