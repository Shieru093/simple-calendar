'use client';

import { weekLength } from '@/const/dict';
import { PrevOrNext, WeekOrMonth } from '@/lib/calendar/types';

export function ToggleButton({
	dateState,
	setDateState,
	weekOrMonth,
	prevOrNext,
}: {
	dateState: Date;
	setDateState: Function;
	weekOrMonth: WeekOrMonth;
	prevOrNext: PrevOrNext;
}) {
	const handleClick = () => {
		const newDateState = new Date(dateState);
		if (weekOrMonth === 'month') {
			newDateState.setMonth(
				prevOrNext === 'prev' ? dateState.getMonth() - 1 : dateState.getMonth() + 1
			);
		} else if (weekOrMonth === 'week') {
			newDateState.setDate(
				prevOrNext === 'prev' ? dateState.getDate() - weekLength : dateState.getDate() + weekLength
			);
		}
		setDateState(newDateState);
	};

	return (
		<button
			onClick={handleClick}
			className="bg-orange-500 border-2 border-orange-400 px-3 rounded-md text-gray-50"
		>
			{prevOrNext}
		</button>
	);
}
