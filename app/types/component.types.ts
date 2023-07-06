import {
	ImageProps,
	PressableProps,
	ScrollViewProps,
	TextProps,
	ViewProps
} from 'react-native'

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

export type UScrollViewType = Pick<
	ScrollViewProps,
	| 'scrollEnabled'
	| 'keyboardDismissMode'
	| 'refreshControl'
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
