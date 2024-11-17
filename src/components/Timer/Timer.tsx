import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
// import { FiRefreshCcw } from "react-icons/fi";

type TimerProps = {};

const Timer: React.FC<TimerProps> = () => {
	const [time, setTime] = useState<number>(() => {
		const savedTime = localStorage.getItem("remainingTime");
		return savedTime ? parseInt(savedTime, 10) : 3600;
	});

	const router = useRouter();

	const formatTime = (time: number): string => {
		const hours = Math.floor(time / 3600);
		const minutes = Math.floor((time % 3600) / 60);
		const seconds = time % 60;

		return `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${
			seconds < 10 ? "0" + seconds : seconds
		}`;
	};

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTime((prevTime) => {
				if (prevTime <= 0) {
					clearInterval(intervalId); 
					setTime(3600); //WIP: comment later
					router.push("/thankyou"); 
					return 0;
				}
				const updatedTime = prevTime - 1;
				localStorage.setItem("remainingTime", updatedTime.toString()); 
				return updatedTime;
			});
		}, 1000);

		return () => clearInterval(intervalId);
	}, [router]);

	useEffect(() => {
		
		return () => {
			localStorage.setItem("remainingTime", time.toString());
		};
	}, [time]);

	return (
		<div className="flex items-center space-x-2 bg-dark-fill-3 p-1.5 cursor-pointer rounded hover:bg-dark-fill-2">
			<div>{formatTime(time)}</div>
			{/* <FiRefreshCcw
				onClick={() => {
					setTime(3600); // Reset the timer
				}}
			/> */}
		</div>
	);
};

export default Timer;
