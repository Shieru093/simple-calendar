'use client';

import { weekDayChars } from '@/const/dict';

export default function CalendarCell({ date }: { date: Date }) {
	return (
		<div className="text-center text-gray-50">
			<div>{weekDayChars[date.getDay()]}</div>
			<div>{date.getDate()}</div>
		</div>
	);
}
