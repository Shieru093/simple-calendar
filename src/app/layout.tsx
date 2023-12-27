import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';

const noto_sans_jp = Noto_Sans_JP({ subsets: ['latin'] });

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
			<body className={noto_sans_jp.className}>{children}</body>
		</html>
	);
}
