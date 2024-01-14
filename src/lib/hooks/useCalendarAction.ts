import { weekLength } from '@/const/dict';
import type { CalendarAction, ActionType } from '@/lib/calendar/types';

export const useCalendarAction = ({
	state,
	setState,
	actionType,
}: CalendarAction): (() => void)[] => {
	const prev = () => {
		setState(
			new Date(
				state.getFullYear(),
				actionType.type === 'month' ? state.getMonth() - 1 : state.getMonth(),
				actionType.type === 'month' ? 1 : state.getDate() - weekLength
			)
		);
	};
	const reset = () => setState(new Date());
	const next = () => {
		setState(
			new Date(
				state.getFullYear(),
				actionType.type === 'month' ? state.getMonth() + 1 : state.getMonth(),
				actionType.type === 'month' ? 1 : state.getDate() + weekLength
			)
		);
	};
	const actions: (() => void)[] = [prev, reset, next];
	return actions;
};
