export default function ModalBase<T>({
	children,
	setState,
}: {
	children: React.ReactNode;
	setState: (state: T | undefined) => void;
}) {
	return (
		<div
			onClick={(e) => {
				e.stopPropagation();
				setState(undefined);
			}}
			className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
		>
			<div
				onClick={(e) => {
					e.stopPropagation();
				}}
				className="border-4 border-gray-700 bg-gray-800 p-5 rounded-lg"
			>
				{children}
			</div>
		</div>
	);
}
