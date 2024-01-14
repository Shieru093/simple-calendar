'use client';

import { useEffect, useState } from 'react';
import CalendarLine from '@/components/ui/calendar/line';
import { weekLength } from '@/const/dict';
import { CalendarState } from '@/lib/calendar/types';

export default function CalendarTable({
	calendarData,
	currentDate,
}: {
	calendarData: CalendarState[];
	currentDate: Date;
}) {
	const [weekStarts, setWeekStarts] = useState<Date[]>([]);

	useEffect(() => {
		const year = currentDate.getFullYear();
		const month = currentDate.getMonth();
		const countDate = new Date(year, month, 1); // 現在の月の１日目
		const nextMonth = new Date(year, month + 1, 1); // 次の月の１日目

		// カレンダーの最初の日付を設定
		countDate.setDate(countDate.getDate() - countDate.getDay());

		const newWeekStarts = [];
		while (countDate < nextMonth) {
			newWeekStarts.push(new Date(countDate));
			countDate.setDate(countDate.getDate() + weekLength);
		}

		setWeekStarts(newWeekStarts);
	}, [currentDate]);

	return (
		<div>
			<div>
				{weekStarts.map((weekStart, index) => {
					return (
						<CalendarLine
							key={`${weekStart.toString()}-${index}`}
							calendarData={calendarData}
							currentDate={weekStart}
						/>
					);
				})}
			</div>
		</div>
	);
}
