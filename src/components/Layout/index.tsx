import React from "react";
import TaskList from "./taskList";
import Models from "./models";
import Clock from "./clock";
import Footer from "./footer";
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";

const Layout = () => {
	return (
		<section className='max-h-[100vh] overflow-hidden'>
			<div className='flex'>
				<PanelGroup autoSaveId='example' direction='horizontal'>
					<Panel>
						<TaskList />
					</Panel>
					<PanelResizeHandle />
					<Panel>
						<Models />
					</Panel>
					<PanelResizeHandle />
					<Clock />
				</PanelGroup>
			</div>
			<Footer />
		</section>
	);
};

export default Layout;
