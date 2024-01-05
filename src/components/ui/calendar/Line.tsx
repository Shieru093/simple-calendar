import { useState, useEffect } from 'react';
import CalendarCell from '@/components/ui/calendar/Cell';
import { CalendarState } from '@/lib/calendar/types';
import { weekLength } from '@/const/dict';

export default function CalendarLine({ date }: CalendarState) {
	const [dates, setDates] = useState<Date[]>([]);

	useEffect(() => {
		const startOfWeek = new Date(date);
		startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());

		const newWeek: Date[] = Array.from({ length: weekLength }, (_, i) => {
			const day = new Date(startOfWeek);
			day.setDate(day.getDate() + i);
			return day;
		});

		setDates(newWeek);
	}, [date]);

	return (
		<div className="grid grid-cols-7">
			{dates.map((date, index) => {
				return (
					<CalendarCell
						key={index}
						date={date}
					/>
				);
			})}
		</div>
	);
}
