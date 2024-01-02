'use client';

import { useEffect, useState } from 'react';
import CalendarLine from '@/components/ui/calendar/Line';
import { weekLength } from '@/const/dict';
import { CalendarState } from '@/lib/calendar/types';

export default function CalendarTable({ date }: CalendarState) {
	const [weekStarts, setWeekStarts] = useState<Date[]>([]);

	useEffect(() => {
		console.log('log:' + date.toDateString());
		const year = date.getFullYear();
		const month = date.getMonth();
		const countDate = new Date(year, month, 1); // 現在の月の１日目
		const nextMonth = new Date(year, month + 1, 1); // 次の月の１日目

		// カレンダーの最初の日付を設定
		countDate.setDate(countDate.getDate() - countDate.getDay());

		const newWeekStarts = [];
		while (countDate < nextMonth || (month === 11 && countDate.getMonth() !== 0)) {
			newWeekStarts.push(new Date(countDate));
			countDate.setDate(countDate.getDate() + weekLength);
		}

		setWeekStarts(newWeekStarts);
	}, [date]);

	return (
		<div>
			<div>
				{weekStarts.map((weekStart, index) => {
					return (
						<CalendarLine
							key={`${weekStart.toString()}-${index}`}
							date={weekStart}
						/>
					);
				})}
			</div>
		</div>
	);
}
