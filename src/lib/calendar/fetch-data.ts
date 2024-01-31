'use server';

import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import { CatchSchedule, Schedule } from '@/lib/calendar/types';

export async function fetchAllSchedules(): Promise<Schedule[]> {
	noStore();
	try {
		const data = await sql<CatchSchedule>`
      SELECT event_title, event_date, memo
      FROM schedules
			WHERE is_delete = false
    `;

		const catchSchedules = data.rows;
		const schedules: Schedule[] = catchSchedules.map((catchSchedule) => ({
			eventTitle: catchSchedule.event_title,
			eventDate: new Date(catchSchedule.event_date), // 日付型に変換
			memo: catchSchedule.memo,
		}));
		return schedules;
	} catch (error) {
		console.error('db error:', error);
		return [];
	}
}
