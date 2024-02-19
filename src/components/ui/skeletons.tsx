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

export function WeatherOverviewSkelton() {
	return (
		<div className="flex flex-col items-center justify-center pt-8 text-gray-50">
			<div className="bg-gray-600 px-8 py-2 rounded">
				<div className="bg-gray-800 py-1 text-lg text-center rounded">-</div>
				<div className="pt-3 text-3xl text-center">-</div>
				<div className="gap-2 grid grid-cols-2 pb-3 text-center">
					<div>-℃</div>
					<div>-%</div>
				</div>
			</div>
		</div>
	);
}
