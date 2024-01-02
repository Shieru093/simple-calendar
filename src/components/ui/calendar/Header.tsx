import { CalendarState } from '@/lib/calendar/types';
import WeekDayLabel from './WeekDayLabel';
import { weekLength } from '@/const/dict';

export default function CalendarHeader({ date }: CalendarState) {
	const weekDays = Array.from({ length: weekLength }, (_, index) => index);
	return (
		<div>
			<div className="py-3 text-2xl text-center text-gray-50">
				{date.getFullYear()} / {date.getMonth() + 1}
			</div>
			<div className="grid grid-cols-7">
				{weekDays.map((weekDay, index) => (
					<WeekDayLabel
						weekDay={weekDay}
						key={index}
					/>
				))}
			</div>
		</div>
	);
}
