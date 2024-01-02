import { Suspense } from 'react';
import HomePageCalendar from '@/components/ui/calendar/HomePageCalendar';

export default function Home() {
	return (
		<div className="">
			<Suspense>
				<HomePageCalendar />
			</Suspense>
		</div>
	);
}
