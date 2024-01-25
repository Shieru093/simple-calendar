const { db } = require('@vercel/postgres');

async function dropScheduleTable(client) {
	try {
		const dropTable = await client.sql`
      DROP TABLE  schedules;
    `;
		console.log('table is dropped');

		return { dropTable };
	} catch (error) {
		console.error('drop table error:', error);
		throw error;
	}
}

async function main() {
	const client = await db.connect();

	await dropScheduleTable(client);

	await client.end();
}

main().catch((err) => {
	console.error('An error occurred while attempting to seed the database:', err);
});
