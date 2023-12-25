import LinkButton from '@/components/ui/Button/LinkButton';
export default function Start() {
	return (
		<div>
			<LinkButton
				text="start"
				link={'/calendar'}
			/>
		</div>
	);
}
