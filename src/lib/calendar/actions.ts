'use server';

import { sql } from '@vercel/postgres';
import { FormSchemaType, formSchema } from './schema';

export async function insertSchedule(formData: FormSchemaType) {
	// フォームのデータを取出す
	const { eventTitle, eventDate, memo } = formSchema.parse({
		eventTitle: formData.eventTitle,
		eventDate: formData.eventDate,
		memo: formData.memo,
	});

	await sql`
    INSERT INTO schedules (event_title, event_date, memo)
    VALUES (${eventTitle}, ${eventDate}, ${memo});
  `;
}
