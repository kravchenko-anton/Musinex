import { PressableProps, TextProps, ViewProps } from 'react-native'
import en from '../utils/translate/en.json'

export type ITranslateTypes = keyof typeof en | string

export type UViewProps = Pick<ViewProps, 'className' | "style" | 'onLayout'
	| "pointerEvents" | 'onMagicTap'>

export type UPressableProps = Pick<PressableProps, 'onLayout' | 'pointerEvents' | 'onPress' |
'disabled' | 'onBlur' | 'onFocus' | "onMagicTap" | 'style' | 'className' | 'onLongPress'>

export type UTextProps  = Pick<TextProps, 'style' | 'onPress' | 'className' | 'onMagicTap' | 'onTextLayout' | 'onLayout' | 'disabled' | 'onLongPress' | 'numberOfLines'>