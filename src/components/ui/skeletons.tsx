import { weekLength } from '@/const/dict';

const shimmer =
	'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

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
			<div>
				{Array.from({ length: 5 }).map((_, index) => {
					return <CalendarLineSkeleton key={index} />;
				})}
			</div>
		</div>
	);
}
