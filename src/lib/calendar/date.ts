import type { Holiday } from '@/lib/calendar/types';

export async function fetchJapaneseHoliday(year: number, month: number): Promise<Holiday[]> {
	try {
		if (month < 1 || month > 12) {
			throw new Error('月が範囲外です');
		}
		const res = await fetch(
			`http://api.national-holidays.jp/${year.toString()}-${month.toString().padStart(2, '0')}`
		);
		const holidays: Holiday[] = await res.json();
		return holidays;
	} catch (error) {
		console.error('接続エラー:', error);
		throw new Error('祝日の取得に失敗しました');
	}
}
