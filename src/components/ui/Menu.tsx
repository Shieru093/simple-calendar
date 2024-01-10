import Link from 'next/link';
import { pagePaths } from '@/const/dict';

export default function Menu({ name }: { name: string }) {
	return (
		<Link
			className="pt-3 px-5 text-gray-50 text-[min(4vw,30px)]"
			href={pagePaths[name]}
		>
			{name}
		</Link>
	);
}
