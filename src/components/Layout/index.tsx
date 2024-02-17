import React from "react";
import TaskList from "./taskList";
import Models from "./models";
import Clock from "./clock";
import Footer from "./footer";

const Layout = () => {
	return (
		<section className='max-h-[100vh]'>
			<div className='flex gap-x-2'>
				<TaskList />
				<Models />
				<Clock />
			</div>
			<Footer />
		</section>
	);
};

export default Layout;
