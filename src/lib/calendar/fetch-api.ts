import type { CatchHoliday, Holiday } from '@/lib/calendar/types';

export async function fetchJapaneseHoliday(year: number, month: number): Promise<Holiday[]> {
	try {
		const reqDate = new Date(year, month, 1);
		const reqYear = reqDate.getFullYear();
		const reqMonth = reqDate.getMonth() + 1;
		const res = await fetch(
			`http://api.national-holidays.jp/${reqYear.toString()}/${reqMonth
				.toString()
				.padStart(2, '0')}`
		);
		if (!res.ok) {
			// 404エラーで、かつエラーメッセージが "not_found" の場合、祝日がないと解釈する
			if (res.status === 404) {
				const responseBody = await res.json();
				if (responseBody.error === 'not_found') {
					return []; // 空の祝日リストを返す
				}
			}
			throw new Error('HTTP error, status = ' + res.status);
		}
		const catchHolidays: CatchHoliday[] = await res.json();
		console.log(catchHolidays);

		const holidays: Holiday[] = catchHolidays.map((catchHoliday) => ({
			date: new Date(catchHoliday.date),
			name: catchHoliday.name,
			type: catchHoliday.type,
		}));
		return holidays;
	} catch (error) {
		console.error('接続エラー:', error);
		throw error;
	}
}

export async function fetchRecentJapaneseHoliday(): Promise<Holiday[]> {
	try {
		const res = await fetch('http://api.national-holidays.jp/recent');
		console.log(res.status);
		if (!res.ok) {
			throw new Error('HTTP error, status = ' + res.status);
		}
		const catchHolidays: CatchHoliday[] = await res.json();
		console.log(catchHolidays);

		const holidays: Holiday[] = catchHolidays.map((catchHoliday) => ({
			date: new Date(catchHoliday.date),
			name: catchHoliday.name,
			type: catchHoliday.type,
		}));
		return holidays;
	} catch (error) {
		console.error('接続エラー:', error);
		throw error;
	}
}
