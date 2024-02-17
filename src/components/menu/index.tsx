import React from "react";
import TaskItem from "../taskItem";
import style from "./index.module.css";

interface IComponentProps {
	menuItems: Array<string>;
}

const Menu: React.FC<IComponentProps> = ({ menuItems }) => {
	return (
		// <div className='bg-red-400 max-w-fit rounded-md flex flex-col justify-center items-start'>
		<div className='absolute right-0 mt-2 py-2 w-48 bg-red-400 rounded shadow-lg z-50'>
			{/* {menuItems.map((item) => ( */}
			{/* // <TaskItem task={item} css={style} /> */}
			<>
				<a
					href='#'
					className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
					Item 1
				</a>
				<a
					href='#'
					className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
					Item 2
				</a>
				<a
					href='#'
					className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
					Item 3
				</a>
			</>
			{/* ))} */}
		</div>
	);
};

export default Menu;
