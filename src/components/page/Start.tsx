import { StartPageDateTime } from '@/components/ui/DateTime';
import Link from 'next/link';

export default function Start() {
	return (
		<div className="bg-gradient-to-bl  flex flex-col from-gray-900 items-center justify-center min-h-screen to-slate-700">
			<h1 className="pb-5 text-5xl text-gray-50">シンプルカレンダー</h1>
			<StartPageDateTime />
			<Link
				href="/calendar"
				className="bg-blue-700 px-3 py-1 rounded-xl shadow-xl text-3xl text-gray-50 hover:bg-blue-500"
			>
				スタート
			</Link>
		</div>
	);
}
