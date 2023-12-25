export default function ActionButton({ button }: { button: { text: string; action: () => void } }) {
	return (
		<button
			id="button"
			onClick={button.action}
		>
			{button.text}
		</button>
	);
}
