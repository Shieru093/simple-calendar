import { useState, useEffect } from 'react';
import CalendarCell from '@/components/ui/calendar/Cell';
import { CalendarState } from '@/lib/calendar/types';
import { weekLength } from '@/const/dict';

export default function CalendarLine({ date }: CalendarState) {
	const [dates, setDates] = useState<Date[]>([]);

	useEffect(() => {
		const startOfWeek = date ? new Date(date) : new Date();
		startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());

		const newWeek = [];
		for (let i = 0; i < weekLength; i++) {
			newWeek.push(new Date(startOfWeek));
			startOfWeek.setDate(startOfWeek.getDate() + 1);
		}

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
