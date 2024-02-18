import React from "react";
import DropdownMenu from "../../dropdownMenu";
import ModelCard from "../../modelCard";
import { modelsData } from "../../../data";
import ModelList from "../../modelList";

const Models = () => {
	return (
		<section className=' flex-1 bg-[#201F23] h-[71vh] max-w-[648px] no-scrollbar overflow-auto resize-y rounded-xl'>
			<div className='sticky top-0 bg-[#201F23] p-4'>
				<h3 className='text-white font-bold text-xl mb-4'>AI Models</h3>
				<div className='flex justify-start gap-x-2'>
					<DropdownMenu heading='Model' />
					<DropdownMenu heading='Model' />
					<DropdownMenu heading='Model' />
				</div>
				<div className='flex justify-start items-center gap-x-2 mt-12'>
					<h3 className='text-white min-w-[40%]'>Model</h3>
					<h3 className='text-white min-w-[80px]'>Versions</h3>
					<h3 className='text-white min-w-[80px]'>License</h3>
					<h3 className='text-white min-w-[80px]'>Contributors</h3>
					<h3 className='text-white min-w-[80px] ml-6'>Rating</h3>
				</div>
			</div>
			<ModelList />
		</section>
	);
};

export default Models;
