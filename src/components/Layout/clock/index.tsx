import React from "react";
import AnalogClockWrapper from "../../analogClock";
import DigitalClock from "../../digitalClock";

const Clock = () => {
	return (
		<section className='bg-[#7ac3f6] max-w-[268px] min-h-[70vh] ml-12 flex flex-col justify-start items-center'>
			<AnalogClockWrapper />
			<DigitalClock />
		</section>
	);
};

export default Clock;
