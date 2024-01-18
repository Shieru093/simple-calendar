'use client';

import { Suspense, useEffect, useState } from 'react';
import CalendarHeader from '@/components/ui/calendar/header';
import CalendarLine from '@/components/ui/calendar/line';
import { Holiday } from '@/lib/calendar/types';
import { CalendarLineSkeleton } from '../skeletons';
import { fetchRecentJapaneseHoliday } from '@/lib/calendar/fetch-api';

export default function HomePageCalendar() {
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
			<CalendarHeader
				dateState={dateState}
				setDateState={setDateState}
				weekOrMonth="month"
			/>
			<Suspense fallback={<CalendarLineSkeleton />}>
				<CalendarLine
					dateState={dateState}
					holidays={holidays}
				/>
			</Suspense>
		</div>
	);
}
