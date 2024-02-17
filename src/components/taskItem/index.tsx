import { useState } from "react";
import style from "./index.module.css";

interface IComponentProps {
	task: string;
}
const TaskItem: React.FC<IComponentProps> = ({ task }) => {
	const [isChecked, setIsChecked] = useState(false);

	return (
		<label className='flex items-center space-x-2 my-2'>
			{/* <input
				type='checkbox'
				id='toggleStrikeThrough'
				onChange={() => setIsChecked((s) => !s)}
				className='cursor-pointer'
			/> */}

			<div className={`${style.customCheckbox}`}>
				<input
					type='checkbox'
					id='toggleStrikeThrough'
					className='absolute opacity-0'
					onChange={() => setIsChecked((s) => !s)}
				/>
				<div className={`${style.checkboxBg}`}></div>
			</div>
			<span
				className={`${
					style.strikeThrough
				} transition-colors duration-1000 font-extralight text-white ${
					isChecked ? `${style.animate} text-[#754FFF]` : ""
				}`}>
				{task}
			</span>
		</label>
	);
};

export default TaskItem;
