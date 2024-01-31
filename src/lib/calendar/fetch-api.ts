import type { CatchHoliday, Holiday } from '@/lib/calendar/types';

/** 直近の祝日を取得する */
export async function fetchRecentJapaneseHoliday(): Promise<Holiday[]> {
	try {
		const res = await fetch('https://api.national-holidays.jp/recent');
		if (!res.ok) {
			throw new Error('HTTP error, status = ' + res.status);
		}
		const catchHolidays: CatchHoliday[] = await res.json();

		// データを使える形式に変換
		const holidays: Holiday[] = catchHolidays.map((catchHoliday) => ({
			date: new Date(catchHoliday.date),
			name: catchHoliday.name,
			type: catchHoliday.type,
		}));

		return holidays;
	} catch (error) {
		console.error('接続エラー:', error);
		return [];
	}
}
