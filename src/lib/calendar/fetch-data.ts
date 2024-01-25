import { db } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import { Schedule } from './types';

export async function fetchAllSchedules(): Promise<Schedule[]> {
	noStore();
	try {
		const client = await db.connect();
		console.log({
			POSTGRES_URL: process.env.POSTGRES_URL,
			POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING,
		});

		const data = await client.sql<Schedule>`
      SELECT *
      FROM schedules
    `;

		const schedules = data.rows;
		console.log(schedules);
		return schedules;
	} catch (error) {
		console.error('db error:', error);
		throw error;
	}
}
