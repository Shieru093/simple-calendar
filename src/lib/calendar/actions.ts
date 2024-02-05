'use server';

import { RedirectType, permanentRedirect, redirect } from 'next/navigation';
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
		console.error(error);
		return false;
		// return { message: error };
	}
	return true;
	// permanentRedirect('/calendar');
}

export async function updateSchedule(id: number, formData: FormSchemaType) {
	// フォームのデータを取出す
	const { eventTitle, eventDate, memo } = formSchema.parse({
		eventTitle: formData.eventTitle,
		eventDate: formData.eventDate,
		memo: formData.memo,
	});

	try {
		await sql`
			UPDATE schedules
			SET event_title = ${eventTitle}, event_date = ${eventDate}, memo = ${memo}
			WHERE id = ${id};
		`;
	} catch (error) {
		console.error(error);
		return false;
		// return { message: error };
	}
	return true;
}

export async function deleteSchedule(id: number) {
	try {
		await sql`
			UPDATE schedules
			SET	is_delete = true
			WHERE id = ${id}
		`;
	} catch (error) {
		console.error(error);
		return false;
		// return { message: error };
	}
	return true;
}
