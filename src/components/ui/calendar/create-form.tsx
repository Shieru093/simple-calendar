export default function EventForm() {
	const handleSubmit = () => {};

	return (
		<form action={handleSubmit}>
			<button type="submit">閉じる</button>
			<label htmlFor="title">タイトル</label>
			<input
				type="text"
				name="title"
			/>
			<label htmlFor="start-date">開始日</label>
			<input
				type="date"
				name="start-date"
			/>
			<label htmlFor="ens-date">終了日</label>
			<input
				type="date"
				name="end-date"
			/>
			<label htmlFor="memo">メモ</label>
			<textarea
				name="memo"
				rows={4}
				cols={30}
			></textarea>
			<button>追加</button>
		</form>
	);
}
