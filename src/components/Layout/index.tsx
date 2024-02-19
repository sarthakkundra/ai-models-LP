import TaskList from "./taskList";
import Models from "./models";
import Clock from "./clock";
import Footer from "./footer";

const Layout = () => {
	return (
		<section className='max-h-[100vh] overflow-hidden'>
			<div className='flex justify-center py-2 gap-x-2 max-w-[80%] m-auto'>
				<TaskList />
				<Models />
				<Clock />
			</div>
			<Footer />
		</section>
	);
};

export default Layout;
