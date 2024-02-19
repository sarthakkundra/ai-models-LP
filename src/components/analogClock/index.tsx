// @ts-ignore
import Draggable from "react-draggable";
import AnalogClock from "analog-clock-react";
import ClockBg from "../../assets/clock-bg.svg";

const options = {
	width: "140px",
	border: true,
	borderColor: "#FFFFFF",
	baseColor: "#FFFFFF",
	centerColor: "#3F3DB6",
	centerBorderColor: "#3F3DB6",
	handColors: {
		second: "#3F3DB6",
		minute: "#000000",
		hour: "#000000",
	},
};

const AnalogClockWrapper = () => {
	return (
		// <div draggable='true' className='cursor-move'>
		<>
			<img src={ClockBg} className='absolute h-[70vh]' />
			<Draggable
				axis='y'
				bounds={{ left: 100, top: -20, right: 500, bottom: 300 }}
				// grid={[25, 25]}
			>
				<div className='cursor-move mt-10'>
					<AnalogClock {...options} />
				</div>
			</Draggable>
		</>
		// {/* </div> */}
	);
};

export default AnalogClockWrapper;
