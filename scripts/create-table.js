const { db } = require('@vercel/postgres');
const { schedules } = require('../src/lib/first-data.js');

async function createScheduleTable(client) {
	try {
		const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS schedules(
				id SERIAL PRIMARY KEY,
        event_title VARCHAR(20) NOT NULL,
        event_date DATE NOT NULL,
        memo VARCHAR(150),
        is_delete BOOLEAN DEFAULT FALSE
      );
    `;
		console.log('table is created');

		console.log(schedules);
		const insertSchedules = await Promise.all(
			schedules.map(
				(schedule) => client.sql`
				INSERT INTO schedules (event_title, event_date, memo)
				VALUES (${schedule.eventTitle}, ${schedule.eventDate}, ${schedule.memo});
			`
			)
		);

		return {
			createTable,
			schedules: insertSchedules,
		};
	} catch (error) {
		console.error('create table error:', error);
		throw error;
	}
}

async function main() {
	const client = await db.connect();

	await createScheduleTable(client);

	await client.end();
}

main().catch((err) => {
	console.error('An error occurred while attempting to seed the database:', err);
});
