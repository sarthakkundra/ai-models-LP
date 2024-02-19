import React from "react";
import TaskItem from "../../taskItem";
import { tasks } from "../../../data";

const TaskList = () => {
	return (
		<section className='bg-[#26252a] min-w-[285px] p-8 h-[70vh] overflow-auto resize-x rounded-xl'>
			<h3 className='text-white font-bold text-xl mb-6'>Today's Tasks</h3>
			{tasks?.map((task) => (
				<TaskItem task={task} shouldStrikethrough />
			))}
		</section>
	);
};

export default TaskList;
