'use client';

import { useEffect, useState } from 'react';
import CalendarHeader from '@/components/ui/calendar/header';
import CalendarTable from '@/components/ui/calendar/table';
import type { Holiday } from '@/lib/calendar/types';
import { fetchRecentJapaneseHoliday } from '@/lib/calendar/fetch-api';

export default function CalendarPageCalendar() {
	const [holidays, setHolidays] = useState<Holiday[]>([]);
	const [dateState, setDateState] = useState<Date>(new Date());
	const [isLoading, setIsLoading] = useState(true); // ローディング状態の追跡

	useEffect(() => {
		const initialState = async () => {
			setIsLoading(true); // データ取得前にローディング状態をtrueに
			const recentHoliday = await fetchRecentJapaneseHoliday();
			setHolidays(recentHoliday);
			setIsLoading(false); // データ取得後にローディング状態をfalseに
		};
		initialState();
	}, []);

	// ローディング中はローディング表示またはnullを返す
	if (isLoading) {
		return <div>Loading...</div>; // ここはお好みでカスタマイズしてください
	}

	return (
		<div>
			<div>
				<CalendarHeader
					dateState={dateState}
					setDateState={setDateState}
					weekOrMonth="month"
				/>
			</div>
			<CalendarTable
				dateState={dateState}
				holidays={holidays}
			/>
		</div>
	);
}
