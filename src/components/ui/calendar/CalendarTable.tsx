'use client';

import CalendarLine from '@/components/ui/calendar/CalendarLine';
import { useSearchParams } from 'next/navigation';

export default function CalendarTable() {
	const searchParams = useSearchParams();
	const year: number = Number(searchParams.get('year')) || new Date().getFullYear();
	const month: number = Number(searchParams.get('month')) || new Date().getMonth();

	const countDate = new Date(year, month, 1); // 現在の月の１日目
	const nextMonth = new Date(year, month + 1, 1); // 次の月の１日目

	// カレンダーの最初の日付を設定
	// １日目から現在の曜日を引いて日曜日の日を取得
	countDate.setDate(countDate.getDate() - countDate.getDay());

	const weekStarts = [];
	while (countDate < nextMonth || (month === 11 && countDate.getMonth() !== 0)) {
		weekStarts.push(new Date(countDate));
		countDate.setDate(countDate.getDate() + 7);
	}

	return (
		<div>
			<div>
				{weekStarts.map((weekStart) => {
					return (
						<CalendarLine
							key={weekStart.toString()}
							date={weekStart}
						/>
					);
				})}
			</div>
		</div>
	);
}
