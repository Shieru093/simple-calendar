import Link from 'next/link';

export default function Menu({ href, text }: { href: string; text: string }) {
	return (
		<Link
			className="pt-3 text-gray-50 text-[min(4vw,30px)] hover:bg-gray-600"
			href={href}
		>
			{text}
		</Link>
	);
}
