export type CalendarState = {
	date: Date;
	holiday?: Holiday;
	schedule?: Schedule[] | Schedule;
};

export type CalendarAction = {
	state: Date;
	setState: (date: Date) => void;
	actionType: ActionType;
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

export type ActionType = {
	type: 'month' | 'week';
};
