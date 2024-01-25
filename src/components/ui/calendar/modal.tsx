import { useContext } from 'react';
import { ModalContext } from './calendar-page-calendar';

export const Modal = ({ children }: { children: React.ReactNode }) => {
	const setModalParam = useContext(ModalContext);
	return (
		<div
			onClick={() => setModalParam(undefined)}
			className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
		>
			<div className="border-4 border-gray-700 bg-gray-800 p-5 rounded-lg">{children}</div>
		</div>
	);
};
