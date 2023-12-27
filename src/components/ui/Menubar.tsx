import Menu from '@/components/ui/Menu';

const menus = ['Home', 'Calendar', 'Weather', 'Settings'];

export default function Menubar() {
	return (
		<nav className="flex justify-around">
			{menus.map((menu) => {
				return (
					<Menu
						key={menu}
						name={menu}
					/>
				);
			})}
		</nav>
	);
}
