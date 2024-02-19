import { useState } from "react";
import style from "./index.module.css";

interface IComponentProps {
	task: string;
	css?: any;
	shouldStrikethrough?: boolean;
}
const TaskItem: React.FC<IComponentProps> = ({ task, shouldStrikethrough }) => {
	// const style = css ? css : styles;

	const [isChecked, setIsChecked] = useState(false);

	return (
		<label
			className={`flex items-center space-x-2 my-2 ${
				!shouldStrikethrough ? "hover:bg-[#26252A]" : ""
			}`}>
			<div className={`${style.customCheckbox}`}>
				<input
					type='checkbox'
					id='toggleStrikeThrough'
					className='absolute opacity-0'
					onChange={() => setIsChecked((s) => !s)}
				/>
				<div className={`${style.checkboxBg}`}></div>
			</div>
			<div>
				<span
					className={`${
						shouldStrikethrough ? style.strikeThrough : null
					} transition-all duration-400 text-white cursor-pointer text-[16px] font-light ${
						isChecked ? `${style.animate} text-[#754FFF]` : ""
					}
					${!shouldStrikethrough ? "hover:ml-1" : ""}
					`}
					style={isChecked && shouldStrikethrough ? { color: "#754FFF" } : {}}>
					{task}
				</span>
			</div>
		</label>
	);
};

export default TaskItem;
