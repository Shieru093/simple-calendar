import { weekLength } from '@/const/dict';

export function CalendarCellSkeleton() {
	return (
		<div className="border pt-1 pb-8">
			<div className="text-center text-gray-50">-</div>
		</div>
	);
}

export function CalendarLineSkeleton() {
	return (
		<div className="grid grid-cols-7">
			{Array.from({ length: weekLength }).map((_, index) => {
				return <CalendarCellSkeleton key={index} />;
			})}
		</div>
	);
}

export function CalendarTableSkeleton() {
	return (
		<div>
			{Array.from({ length: 5 }).map((_, index) => {
				return <CalendarLineSkeleton key={index} />;
			})}
		</div>
	);
}
