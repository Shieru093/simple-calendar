import Link from 'next/link';
import styles from '@/components/ui/Button/button.module.css';

export default function LinkButton({ text, link }: { text: string; link: string }) {
	return (
		<Link
			className={styles.button}
			href={link}
		>
			{text}
		</Link>
	);
}
