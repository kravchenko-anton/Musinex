
 export function generateRandomBeautifulHexColor():	string {
	const beautifulColors = [
"#F18805", "#016FB9", "#EF6F6C",	"#F2C078", "#F2E394", "#D96459", "#8C4646", "#E6B89C",   "#4281A4", "#A4D4B4", "#9DC88D", "#F2EE8D", "#1F2041", "#FFC857", "#119DA4", "#19647E", "#C44536", "#197278",  "#5F0F40","#3D3A4B","#1985A1", "#2B2D42","#5FAD56","#F2C14E", "#F78154", "#4D9078", '#2D3047', "#1B998B", "#7A28CB", "#3A445D", "#247BA0", "#6E8894", "#67597A", "#496F5D", "#5863F8", "#141B41", "#9C528B", "#FF3864", "#613F75", "#5C6D70", "#BB4430", "#2FBF71",  "#548687", "#473144"
	
	];
	
	const randomIndex = Math.floor(Math.random() * beautifulColors.length)
	return beautifulColors[randomIndex]
}