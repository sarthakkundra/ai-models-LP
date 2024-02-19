import AnalogClockWrapper from "../../analogClock";
import DigitalClock from "../../digitalClock";

const Clock = () => {
	return (
		<section className='max-w-[268px] h-[70vh] ml-14 flex flex-col justify-start items-center'>
			<AnalogClockWrapper />
			<DigitalClock />
		</section>
	);
};

export default Clock;
