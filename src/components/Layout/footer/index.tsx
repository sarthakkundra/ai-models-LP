import React from "react";
import KidInPool from "../../../assets/kid-in-pool.svg";

const Footer = () => {
	return (
		<footer className='min-w-full min-h-[50%] bg-[#26252a] resize-y overflow-auto no-scrollbar'>
			<img src={KidInPool} className='h-[160px] relative' />
			<div className='bg-gradient-to-r from-violet-500 to-fuchsia-500 h-[160px] w-16 absolute bottom-[-2.6%] opacity-80 resize-x overflow-auto max-w-[464px] rounded-lg' />
		</footer>
	);
};

export default Footer;
