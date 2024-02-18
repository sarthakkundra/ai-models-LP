import React from "react";
import KidInPool from "../../../assets/kid-in-pool.svg";
import Radar from "../../../assets/radar.gif";
import DropdownMenu from "../../dropdownMenu";
import PurpleFloater from "../../../assets/purple-floater.svg";

const Footer = () => {
	return (
		<footer className='w-full max-h-[224px] bg-[#212025] resize-y overflow-auto no-scrollbar flex justify-between absolute bottom-0 p-8'>
			<img src={KidInPool} className='h-[160px] relative' />
			<div className='bg-gradient-to-r from-violet-500 to-fuchsia-500 h-[160px] w-16 absolute bottom-[32px] opacity-80 resize-x overflow-auto max-w-[464px] rounded-lg' />
			<img src={Radar} className='w-[160px] h-[162px]' />
			<div className='flex flex-col justify-center items-start'>
				<DropdownMenu heading='Select Item' isPrimaryDropdown />
				<div className='flex flex-row-reverse w-full'>
					<img src={PurpleFloater} className='mt-11 cursor-pointer' />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
