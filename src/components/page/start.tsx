import Link from 'next/link';
import { StartPageDateTime } from '@/components/ui/date-time';
import { pagePaths } from '@/const/dict';

export default function Start() {
	return (
		<div className="bg-gradient-to-bl  flex flex-col from-gray-900 items-center justify-around min-h-screen to-slate-700">
			<h1 className="text-[min(8vw,50px)] text-gray-50">シンプルカレンダー</h1>
			<StartPageDateTime />
			<Link
				href={pagePaths['Home']}
				className="bg-blue-700 px-3 py-1 rounded-xl shadow-xl text-[min(6vw,40px)] text-gray-50 hover:bg-blue-500"
			>
				スタート
			</Link>
		</div>
	);
}
