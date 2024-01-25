import Menu from '@/components/ui/menu';

type Menu = {
	href: string;
	text: string;
};

const menus: Menu[] = [
	{ href: '/home', text: 'ホーム' },
	{ href: '/calendar', text: 'カレンダー' },
];

export default function Menubar() {
	return (
		<nav className="grid grid-cols-2">
			{menus.map((menu, index) => (
				<Menu
					key={index}
					href={menu.href}
					text={menu.text}
				/>
			))}
		</nav>
	);
}
