import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: {
		template: '%s | Simple Calendar',
		default: 'Simple Calendar',
	},
	description:
		'シンプルなカレンダーアプリ、カレンダー機能に加え現在時刻と天気・気温・湿度を表示します',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ja">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
