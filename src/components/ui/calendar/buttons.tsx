'use client';

import { ModalContext } from '@/components/page/calendar';
import { useContext } from 'react';
import { weekLength } from '@/const/dict';
import type { PrevOrNext, WeekOrMonth } from '@/lib/calendar/types';

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

export function AddScheduleButton() {
	const setModalParam = useContext(ModalContext);

	return (
		<button
			onClick={() => {
				setModalParam(new Date());
			}}
			className="bg-sky-600 border-2 border-slate-500 py-0.5 rounded-lg text-[min(6vw,22px)] text-gray-50 w-4/5 hover:bg-sky-700 hover:text-gray-200"
		>
			予定の追加
		</button>
	);
}

export function ModalCloseButton({ setModalParam }: { setModalParam: Function }) {
	return (
		<button
			type="button"
			onClick={() => {
				setModalParam(undefined);
			}}
			className="bg-gray-600 px-3 rounded-2xl text-gray-50 hover:bg-gray-700"
		>
			閉じる
		</button>
	);
}

export function ModelActionButton({
	action,
	color,
	text,
}: {
	action: Function;
	color: string;
	text: string;
}) {
	return (
		<button
			type="button"
			onClick={(e) => {
				e.stopPropagation();
				action();
			}}
			className={`bg-${color}-700 px-3 py-1 rounded-lg text-gray-50`}
		>
			{text}
		</button>
	);
}
