import React, { useEffect } from 'react';

const Mouse = () => {
	const cursor = document.querySelector('.cursor');
	useEffect = () => {
		window.addEventListener('mousemove', (e) => {
			cursor.style.top = e.y + 'px';
			cursor.style.left = e.x + 'px';
			document.querySelectorAll('.hover').forEach((link) => {
				link.addEventListener('mouseover', () => {
					cursor.classList.add('hovered');
				});
			});
		});
	};
	return <div></div>;
};

export default Mouse;
