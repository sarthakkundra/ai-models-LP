import React from "react";
import TaskList from "./taskList";
import Models from "./models";
import Clock from "./clock";
import Footer from "./footer";

const Layout = () => {
	return (
		<section className='max-h-[100vh] overflow-hidden'>
			<div className='flex'>
				<TaskList />
				<Models />
				<Clock />
			</div>
			<Footer />
		</section>
	);
};

export default Layout;
