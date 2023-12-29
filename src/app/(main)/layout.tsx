import Header from '@/components/base/Header';
export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-gradient-to-bl from-gray-900 min-h-screen to-slate-700">
			<Header />
			{children}
		</div>
	);
}
