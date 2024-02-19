import { useEffect, useState } from "react";

const DigitalClock = () => {
	const [time, setTime] = useState<string>("00:00");

	const updateTime = () => {
		const time = new Date();
		let hour: string | number = time.getHours();
		let mins: string | number = time.getMinutes();
		let am_pm = "AM";

		if (hour >= 12) {
			if (hour > 12) hour -= 12;
			am_pm = "PM";
		} else if (hour == 0) {
			hour = 12;
			am_pm = "AM";
		}

		hour = hour < 10 ? "0" + hour : hour;
		mins = mins < 10 ? "0" + mins : mins;

		const currentTime = hour + ":" + mins + " " + am_pm;
		setTime(currentTime);
	};

	useEffect(() => {
		const intervalId = setInterval(updateTime, 3600);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	return (
		<div id='digital-clock' className='z-10 mt-2'>
			<h1 className='text-[32px] font-light text-white mt-2'>{time}</h1>
		</div>
	);
};

export default DigitalClock;
