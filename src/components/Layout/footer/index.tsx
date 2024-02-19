import React, { useState, useRef } from "react";
import Modal from "../../modal";
import KidInPool from "../../../assets/kid-in-pool.svg";
import Radar from "../../../assets/radar.gif";
import DropdownMenu from "../../dropdownMenu";
import PurpleFloater from "../../../assets/purple-floater.svg";
import Resizer from "../../../assets/resizer.svg";

const Footer = () => {
	const purpleGradientRef = useRef(null);
	const [resizerPos, setResizerPos] = useState("0");
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<footer className='w-full max-h-[224px] bg-[#212025] resize-y overflow-auto no-scrollbar flex justify-between absolute bottom-0 p-8'>
			<div className='flex'>
				<img src={KidInPool} className='h-[160px] relative' />
				<div
					ref={purpleGradientRef}
					className='bg-gradient-to-r from-violet-500 to-fuchsia-500 h-[160px] w-16 absolute bottom-[32px] opacity-80 resize-x overflow-auto max-w-[464px] rounded-lg'
					// onMouseMove={() => {
					// 	console.log(resizerPos);
					// 	setResizerPos(`${purpleGradientRef?.current?.offsetWidth}`);
					// }}
				>
					{/* <img
						src={Resizer}
						className={`absolute bottom-[28%] overflow-auto`}
						// style={{ left: `${resizerPos}px` }}
					/> */}
				</div>
				<img src={Radar} className='w-[160px] h-[162px] ml-16' />
			</div>
			<div className='flex flex-col justify-center items-start'>
				<DropdownMenu heading='Select Item' isPrimaryDropdown />
				<div className='flex flex-row-reverse w-full'>
					<img src={PurpleFloater} className='mt-11 cursor-pointer' onClick={() => setIsModalOpen(true)}/>
				</div>
			</div>
			<Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}/>
		</footer>
	);
};

export default Footer;
