'use client';

import { useEffect, useState } from 'react';

function getNextDayRemainingTime(): number {
	const now: Date = new Date();
	const nextDay: Date = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
	return nextDay.getTime() - now.getTime();
}

const dayNames = ['日', '月', '火', '水', '木', '金', '土'];

export function StartPageDateTime() {
	const [now, setNow] = useState<Date>(new Date());
	useEffect(() => {
		const timer = setInterval(() => {
			setNow(new Date());
		}, 1000);
		return () => clearInterval(timer);
	}, []);
	return (
		<div className="flex flex-col text-center">
			<time className="text-[min(24vw,160px)] text-gray-50">
				{now.getHours().toString()}:{now.getMinutes().toString().padStart(2, '0')}
			</time>
			<time className="text-[min(8vw,50px)] text-gray-50">
				{now.getMonth()}/{now.getDate()}({dayNames[now.getDay()]})
			</time>
		</div>
	);
}

// export function StartPageDate() {
// 	const [date, setDate] = useState<Date>(new Date());

// 	useEffect(() => {
// 		const timeout: number = getNextDayRemainingTime();
// 		const timer = setTimeout(() => {
// 			setDate(new Date());
// 		}, timeout);
// 		return () => clearTimeout(timer);
// 	}, [date]);

// 	return (
// 		<div>
// 			{date.getMonth()}/{date.getDate()}({dayNames[date.getDay()]})
// 		</div>
// 	);
// }

// export function StartPageTime() {
// 	const [time, setTime] = useState<Date>(new Date());
// 	useEffect(() => {
// 		const timer = setInterval(() => {
// 			setTime(new Date());
// 		}, 1000);
// 		return () => clearInterval(timer);
// 	}, []);

// 	return (
// 		<div>
// 			{time.getHours().toString()}:{time.getMinutes().toString().padStart(2, '0')}
// 		</div>
// 	);
// }
