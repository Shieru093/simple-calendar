'use server';

import { redirect } from 'next/navigation';
import { sql } from '@vercel/postgres';
import { type FormSchemaType, formSchema } from '@/lib/calendar/schema';

export async function insertSchedule(formData: FormSchemaType) {
	// フォームのデータを取出す
	const { eventTitle, eventDate, memo } = formSchema.parse({
		eventTitle: formData.eventTitle,
		eventDate: formData.eventDate,
		memo: formData.memo,
	});

	try {
		await sql`
			INSERT INTO schedules (event_title, event_date, memo)
			VALUES (${eventTitle}, ${eventDate}, ${memo});
		`;
	} catch (error) {
		return { message: error };
	}

	redirect('/calendar');
}
