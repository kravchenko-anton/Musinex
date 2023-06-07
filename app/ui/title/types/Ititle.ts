import { UTextProps } from '@/types/global'
import en from '@/utils/translate/en.json'
import { theme } from '../../../../tailwind.config'

export interface ITitle<T extends boolean> extends UTextProps {
	center?: boolean;
	translate?: T;
	children: T extends true ? keyof typeof en : string;
	size?: number;
	fontFamily?:
		| 'Montserrat_100Thin'
		| 'Montserrat_300Light'
		| 'Montserrat_400Regular'
		| 'Montserrat_500Medium'
		| 'Montserrat_600SemiBold'
		| 'Montserrat_700Bold'
		| 'Montserrat_800ExtraBold'
		| 'Montserrat_900Black'
		| 'Montserrat_900Black_Italic';
	color?: keyof typeof theme.colors;
}
