'use client';

import { useEffect, useState } from 'react';
import { weekDayChars } from '@/const/dict';

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
				{now.getMonth()}/{now.getDate()}({weekDayChars[now.getDay()]})
			</time>
		</div>
	);
}
