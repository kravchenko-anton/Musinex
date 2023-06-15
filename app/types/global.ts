import { Ionicons } from '@expo/vector-icons'
import { ImageProps, PressableProps, ScrollViewProps, TextProps, ViewProps } from 'react-native'
import en from '../utils/translate/en.json'

export type ITranslateTypes = keyof typeof en | string

export type UViewProps = Pick<
	ViewProps,
	'className' | 'style' | 'onLayout' | 'pointerEvents' | 'onMagicTap'
>

export type UPressableProps = Pick<
	PressableProps,
	| 'onLayout'
	| 'pointerEvents'
	| 'onPress'
	| 'disabled'
	| 'onBlur'
	| 'onFocus'
	| 'onMagicTap'
	| 'style'
	| 'className'
	| 'onLongPress'
>

export type UTextProps = Pick<
	TextProps,
	| 'style'
	| 'onPress'
	| 'className'
	| 'onMagicTap'
	| 'onTextLayout'
	| 'onLayout'
	| 'disabled'
	| 'onLongPress'
	| 'numberOfLines'
>

export type UImageProps = Pick<
	ImageProps,
	| 'blurRadius'
	| 'onLoad'
	| 'resizeMode'
	| 'resizeMethod'
	| 'progressiveRenderingEnabled'
	| 'onProgress'
	| 'borderRadius'
	| 'fadeDuration'
	| 'defaultSource'
	| 'style'
	| 'className'
	| 'onError'
>

export type UScrollViewProps = Pick<
	ScrollViewProps,
	| 'scrollEnabled'
	| 'keyboardDismissMode'
	| "refreshControl"
	| 'onScrollAnimationEnd'
	| 'onScroll'
	| 'scrollToOverflowEnabled'
	| 'renderToHardwareTextureAndroid'
	| 'contentContainerStyle'
	| 'style'
	| 'horizontal'
	| 'decelerationRate'
	| 'pointerEvents'
	| 'className'
	| 'showsVerticalScrollIndicator'
	| 'showsHorizontalScrollIndicator'
	| 'onScrollBeginDrag'
	| 'onLayout'
	| 'onContentSizeChange'
	| 'onMomentumScrollEnd'
	| 'onMomentumScrollBegin'
	| 'onScrollEndDrag'
	| 'onScrollToTop'
	| 'onTouchEnd'
	| 'onTouchMove'
	| 'onTouchStart'
>

export type IconType = keyof typeof Ionicons.glyphMap
export type CatalogProps = {
	id: number
}
export type Style = UViewProps['style']
