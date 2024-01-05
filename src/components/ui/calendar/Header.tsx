import { CalendarState } from '@/lib/calendar/types';
import WeekDayLabel from '@/components/ui/calendar/WeekDayLabel';
import { weekLength } from '@/const/dict';

export default function CalendarHeader({ date }: CalendarState) {
	return (
		<div>
			<div className="py-3 text-2xl text-center text-gray-50">
				{date.getFullYear()} / {date.getMonth() + 1}
			</div>
			<div className="grid grid-cols-7">
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
