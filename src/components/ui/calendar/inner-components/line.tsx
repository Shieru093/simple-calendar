'use client';

import { useState, useEffect, use } from 'react';
import CalendarCell from '@/components/ui/calendar/inner-components/cell';
import { fetchRecentJapaneseHoliday } from '@/lib/calendar/fetch-api';
import { weekLength } from '@/const/dict';
import type { CalendarState, Holiday, Schedule } from '@/lib/calendar/types';

export default function CalendarLine({
	dateState,
	holidays,
	schedules,
}: {
	dateState: Date;
	holidays: Holiday[];
	schedules: Schedule[];
}) {
	const [weekData, setWeekData] = useState<CalendarState[]>([]);

	// holidays = holidays ?? use(fetchRecentJapaneseHoliday());

	useEffect(() => {
		const startOfWeek = new Date(dateState);
		startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());

		const newWeekData: CalendarState[] = Array.from({ length: weekLength }, (_, i) => {
			const day = new Date(startOfWeek);
			day.setDate(day.getDate() + i);

			const holiday = holidays.find((data) => {
				return (
					data.date.getFullYear() === day.getFullYear() &&
					data.date.getMonth() === day.getMonth() &&
					data.date.getDate() === day.getDate()
				);
			});

			const filteredSchedules = schedules.filter((data) => {
				return (
					data.eventDate.getFullYear() === day.getFullYear() &&
					data.eventDate.getMonth() === day.getMonth() &&
					data.eventDate.getDate() === day.getDate()
				);
			});

			return { date: day, holiday: holiday, schedule: filteredSchedules };
		});

		setWeekData(newWeekData);
	}, [dateState, holidays, schedules]);

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
