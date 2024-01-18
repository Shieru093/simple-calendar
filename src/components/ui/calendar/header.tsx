import { CalendarState, PrevOrNext, WeekOrMonth } from '@/lib/calendar/types';
import WeekDayLabel from '@/components/ui/calendar/week-day-label';
import { weekLength } from '@/const/dict';
import { ToggleButton } from './buttons';

export default function CalendarHeader({
	dateState,
	setDateState,
	weekOrMonth,
}: {
	dateState: Date;
	setDateState: Function;
	weekOrMonth: WeekOrMonth;
}) {
	const toggles: PrevOrNext[] = ['prev', 'next'];

	return (
		<div>
			<div className="py-3 text-2xl text-center text-gray-50">
				{dateState.getFullYear()} / {dateState.getMonth() + 1}
			</div>
			<div className="flex justify-around text-gray-50">
				{toggles.map((toggle, index) => (
					<ToggleButton
						key={index}
						dateState={dateState}
						setDateState={setDateState}
						weekOrMonth={weekOrMonth}
						prevOrNext={toggle}
					/>
				))}
			</div>
			<div className="grid grid-cols-7 pt-2">
				{Array.from({ length: weekLength }).map((_, index) => (
					<WeekDayLabel
						weekDay={index}
						key={index}
					/>
				))}
			</div>
		</div>
	);
}
