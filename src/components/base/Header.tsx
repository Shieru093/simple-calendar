import Menubar from '@/components/ui/Menubar';

export default function Header() {
	return (
		<header className="bg-gray-700 text-center">
			<h1 className="text-gray-50 text-[min(9vw,70px)]">シンプルカレンダー</h1>
			<Menubar />
		</header>
	);
}
