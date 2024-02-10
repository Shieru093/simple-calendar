import clsx from 'clsx';
import { weekDayChars } from '@/const/dict';

export default function WeekDayLabel({ weekDay }: { weekDay: number }) {
	return (
		<div
			className={clsx('text-center', {
				'text-red-600': weekDay === 0,
				'text-blue-600': weekDay === 6,
				'text-gray-50': weekDay > 0 && weekDay < 6,
			})}
		>
			{weekDayChars[weekDay]}
		</div>
	);
}
