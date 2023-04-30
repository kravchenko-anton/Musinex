export function randomBeautifulColor(saturation: number, lightness: number) {
	const hue = Math.floor(Math.random() * 365)
	return `hsl(${hue},${saturation}%,${lightness}%)`
}
