import { useState, useEffect } from 'react';
import type { ActionType, CalendarState } from '@/lib/calendar/types';
import { createMonthArray, initialCalendarState } from '@/lib/calendar/utils';
import { weekLength } from '@/const/dict';

/** カレンダーの情報を管理する */
export const useCalendarState = (
	date?: Date
): [CalendarState[], Date, ((acType: ActionType) => void)[]] => {
	// 表示する日付を管理
	const [currentDay, setCurrentDay] = useState<Date>(date || new Date());
	// 月の履歴を管理
	const [prevMonth, setPrevMonth] = useState<Date>(date || new Date());

	// 表示している日付の直近３か月（先月、今月、来月）のカレンダーの情報を管理
	const [lastCalendar, setLastCalendar] = useState<CalendarState[]>([]);
	const [currentCalendar, setCurrentCalendar] = useState<CalendarState[]>([]);
	const [nextCalendar, setNextCalendar] = useState<CalendarState[]>([]);

	useEffect(() => {
		const initializeState = async () => {
			const [last, now, next] = await initialCalendarState();
			setLastCalendar(last);
			setCurrentCalendar(now);
			setNextCalendar(next);
		};

		const today = new Date();
		if (
			currentDay.getFullYear() === today.getFullYear() &&
			currentDay.getMonth() === today.getMonth() &&
			currentDay.getDate() === today.getDate()
		) {
			initializeState();
		}

		/** 月を１進める関数 */
		const incrementMonth = async () => {
			const next = await createMonthArray(currentDay.getFullYear(), currentDay.getMonth());
			setCurrentCalendar(nextCalendar);
			setLastCalendar(currentCalendar);
			setNextCalendar(next);
		};
		/** 月を１戻す関数 */
		const decrementMonth = async () => {
			const last = await createMonthArray(currentDay.getFullYear(), currentDay.getMonth() - 1);
			setCurrentCalendar(lastCalendar);
			setNextCalendar(currentCalendar);
			setLastCalendar(last);
		};

		const currentMonthIndex = currentDay.getFullYear() * 12 + currentDay.getMonth();
		const prevMonthIndex = prevMonth.getFullYear() * 12 + prevMonth.getMonth();

		if (currentMonthIndex !== prevMonthIndex) {
			if (currentMonthIndex > prevMonthIndex) {
				incrementMonth();
			}
			if (currentMonthIndex < prevMonthIndex) {
				decrementMonth();
			}
			setPrevMonth(currentDay);
		}

		// 下のコメントで依存関係のwarningを表示しなくする
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentDay]);

	const prev = (actionType: ActionType) => {
		setCurrentDay(
			new Date(
				currentDay.getFullYear(),
				actionType.type === 'month' ? currentDay.getMonth() - 1 : currentDay.getMonth(),
				actionType.type === 'month' ? 1 : currentDay.getDate() - weekLength
			)
		);
	};
	const reset = (actionType: ActionType) => setCurrentDay(new Date());
	const next = (actionType: ActionType) => {
		setCurrentDay(
			new Date(
				currentDay.getFullYear(),
				actionType.type === 'month' ? currentDay.getMonth() + 1 : currentDay.getMonth(),
				actionType.type === 'month' ? 1 : currentDay.getDate() + weekLength
			)
		);
	};
	const actions: ((acType: ActionType) => void)[] = [prev, reset, next];

	return [[...lastCalendar, ...currentCalendar, ...nextCalendar], currentDay, actions];
};
