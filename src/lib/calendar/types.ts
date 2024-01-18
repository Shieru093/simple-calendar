export type WeekOrMonth = 'week' | 'month';
export type PrevOrNext = 'prev' | 'next';

export type CalendarState = {
	date: Date;
	holiday?: Holiday;
	schedule?: Schedule[] | Schedule;
};

export type CatchHoliday = {
	date: Date;
	name: string;
	type: string;
};

export type Holiday = {
	date: Date;
	name: string;
	type: string;
};

export type Schedule = {
	date: Date;
	name: string;
};
