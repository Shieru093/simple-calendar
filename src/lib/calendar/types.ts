// カレンダーの動作タイプを定義
export type WeekOrMonth = 'week' | 'month';
export type PrevOrNext = 'prev' | 'next';

/** カレンダーの１日の情報を格納する型 */
export type CalendarState = {
	date: Date;
	holiday?: Holiday;
	schedule?: Schedule[] | Schedule;
};

/** 祝日APIからのデータの受け取り用の型 */
export type CatchHoliday = {
	date: Date;
	name: string;
	type: string;
};

/** 祝日を管理する型 */
export type Holiday = {
	date: Date;
	name: string;
	type: string;
};

/** 予定を管理する型 */
export type Schedule = {
	eventTitle: string;
	eventDate: Date;
	memo: string;
};
