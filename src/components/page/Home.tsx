import { Suspense } from 'react';
import HomePageCalendar from '@/components/ui/calendar/home-page-calendar';

export default function Home() {
	return (
		<div className="">
			<Suspense>
				<HomePageCalendar />
			</Suspense>
		</div>
	);
}
