import { useState, useEffect } from 'react';
import CalendarCell from '@/components/ui/calendar/cell';
import type { CalendarState } from '@/lib/calendar/types';
import { weekLength } from '@/const/dict';

export default function CalendarLine({
	calendarData,
	currentDate,
}: {
	calendarData: CalendarState[];
	currentDate: Date;
}) {
	const [weekData, setWeekData] = useState<CalendarState[]>([]);

	useEffect(() => {
		const startOfWeek = new Date(currentDate);
		startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());

		const newWeekData: CalendarState[] = Array.from({ length: weekLength }, (_, i) => {
			const day = new Date(startOfWeek);
			day.setDate(day.getDate() + i);
			return (
				calendarData.find(
					(data) =>
						data.date.getFullYear() === day.getFullYear() &&
						data.date.getMonth() === day.getMonth() &&
						data.date.getDate() === day.getDate()
				) || { date: new Date(day) }
			);
		});

		setWeekData(newWeekData);
	}, [currentDate]);

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
