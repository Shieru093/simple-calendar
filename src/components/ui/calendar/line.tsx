'use client';

import { useState, useEffect, use } from 'react';
import CalendarCell from '@/components/ui/calendar/cell';
import type { CalendarState, Holiday } from '@/lib/calendar/types';
import { weekLength } from '@/const/dict';
import { fetchRecentJapaneseHoliday } from '@/lib/calendar/fetch-api';

export default function CalendarLine({
	dateState,
	holidays,
}: {
	dateState: Date;
	holidays: Holiday[];
}) {
	const [weekData, setWeekData] = useState<CalendarState[]>([]);

	// holidays = holidays ?? use(fetchRecentJapaneseHoliday());

	useEffect(() => {
		const startOfWeek = new Date(dateState);
		startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());

		const newWeekData: CalendarState[] = Array.from({ length: weekLength }, (_, i) => {
			const day = new Date(startOfWeek);
			day.setDate(day.getDate() + i);
			const holiday = holidays.find(
				(data) =>
					data.date.getFullYear() === day.getFullYear() &&
					data.date.getMonth() === day.getMonth() &&
					data.date.getDate() === day.getDate()
			);
			return { date: day, holiday: holiday } || { date: day };
		});

		setWeekData(newWeekData);
	}, [dateState, holidays]);

	return (
		<div className="grid grid-cols-7">
			{weekData.map((date, index) => {
				return (
					<CalendarCell
						key={index}
						dateData={date}
					/>
				);
			})}
		</div>
	);
}
