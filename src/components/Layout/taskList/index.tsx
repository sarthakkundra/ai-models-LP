import React from "react";
import TaskItem from "../../taskItem";
import { tasks } from "../../../data";

const TaskList = () => {
	return (
		<section className='bg-[#26252a] min-w-[30%] min-h-[70vh] overflow-scroll resize-x p-4 rounded-xl'>
			<h3 className='text-white font-bold text-xl mb-4'>Today's Tasks</h3>
			{tasks?.map((task) => (
				<TaskItem task={task} />
			))}
		</section>
	);
};

export default TaskList;
