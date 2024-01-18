import type { CalendarState, Holiday } from '@/lib/calendar/types';

/**
 * 一月分のカレンダーの情報を返す関数
 * @param year
 * @param month
 * @returns CalendarState型配列
 */
// export const createMonthArray = async (year: number, month: number): Promise<CalendarState[]> => {
// 	const monthLength = new Date(year, month + 1, 0).getDate(); // 月の日数を取得
// 	const monthArray: CalendarState[] = Array.from({ length: monthLength }, (_, day) => {
// 		return {
// 			date: new Date(year, month, day + 1), // 0からのカウントなので+1する
// 		};
// 	});

// 	const holidays: Holiday[] = await fetchJapaneseHoliday(year, month);
// 	holidays.forEach((holiday) => {
// 		const matchDate = monthArray.find((dayState) => {
// 			return dayState.date.getDate() === holiday.date.getDate();
// 		});
// 		if (matchDate) {
// 			matchDate.holiday = holiday;
// 		}
// 	});

// 	return monthArray;
// };
