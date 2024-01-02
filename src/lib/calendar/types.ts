export interface CalendarState {
	date: Date;
}

export type CalendarAction = {
	type: 'prev' | 'next' | 'reset';
};
