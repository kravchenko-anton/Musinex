export type colorsType = {
	silver: "#E5E5E5";
	charcoal: "#888888";
	dark: "#000";
	primary: "#32B47D";
	midnight: "#101010";
	twilight: "#1B2021";
	dusk: "#202020";
	white: "#fff";
	crimson: "#DC3F41";
	sunshine: "#FFBE0B";
	transparent: "transparent";
}
export type lineColorType = "#E5E5E5" | "#888888" | "#000" | "#32B47D" | "#101010" | "#1B2021" | "#202020" | "#fff" | "#DC3F41" | "#FFBE0B" | "transparent"
export interface ColorProps {
	color?:  lineColorType
}