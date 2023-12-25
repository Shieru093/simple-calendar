'use client';

import { useEffect } from 'react';

export default function Clock() {
	useEffect(() => {
		setTimeout(() => {}, 1000);
	}, []);

	return <></>;
}
