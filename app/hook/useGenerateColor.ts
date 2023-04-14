export const generateColor = () => {
	const randomColor = Math.floor(Math.random() * 1647721)
		.toString(16)
		.padStart(6, '0');
	return `#${randomColor}`;
};
