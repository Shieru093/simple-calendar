'use client';

import { useEffect, useState } from 'react';
import CalendarLine from '@/components/ui/calendar/inner-components/line';
import { weekLength } from '@/const/dict';
import type { Holiday, Schedule } from '@/lib/calendar/types';

export default function CalendarTable({
	dateState,
	holidays,
	schedules,
}: {
	dateState: Date;
	holidays: Holiday[];
	schedules: Schedule[];
}) {
	const [weekStarts, setWeekStarts] = useState<Date[]>([]);

	useEffect(() => {
		const year = dateState.getFullYear();
		const month = dateState.getMonth();
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
	}, [dateState, schedules]);

	return (
		<div>
			{weekStarts.map((weekStart, index) => {
				return (
					<CalendarLine
						key={`${weekStart.toString()}-${index}`}
						dateState={weekStart}
						holidays={holidays}
						schedules={schedules}
					/>
				);
			})}
		</div>
	);
}
