export type CalendarState = {
	date: Date;
	holiday?: Holiday[] | Holiday;
	schedule?: Date[] | Date;
};

export type CalendarAction = {
	type: 'prev' | 'next' | 'reset';
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
