// import { WindowHeight, WindowWidth } from '@/utils/screen'
// import { useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated'
//
// export const useSongAnimation = (isOpen: boolean) => {
// // 	const topBarAnimation = useAnimatedStyle(() => {
// // 		return {
// // 			height: withTiming(isOpen	? WindowHeight * 0.77 : 130, {
// // duration: 600			}),
// // 		}
// // 	})
// // 	const ImageAnimation = useAnimatedStyle(() => {
// // 		return {
// // 			height: withTiming(isOpen ? 0 : WindowWidth * 0.8, {
// // 				duration: 800			}),
// // 			width: withTiming(isOpen ? 0 : WindowWidth * 0.8, {
// // 				duration: 800,
// // 			}),
// // 			opacity: withTiming(isOpen ? 0 : 1, {
// // 				duration: 800
// // 			}),
// // 			display: isOpen ? "none" : "flex",
// // 		}
// // 	})
// 	const useDropDownContentAnimation = useAnimatedStyle(() => {
// 		return {
// 			height: withTiming(isOpen ?
// 				WindowHeight * 0.6
// 				: 0, {
// 				duration: 600}),
// 			opacity: withTiming(isOpen ? 1 : 0, {
// 				duration: 700
// 			}),
// 		}
// 	})
// 	const opacityAnimation = useAnimatedStyle(() => {
// 		return {
// 			opacity: withTiming(isOpen ? 1 : 0, {
// 				duration: 700
// 			}),
// 			display: isOpen ? "flex" : "none",
// 		}
// 	})
// 	const MinusOpacityAnimation = useAnimatedStyle(() => {
// 		return {
// 			opacity: withTiming(isOpen ? 0 : 1, {
// 				duration: 700
// 			}),
// 		}
// 	})
// 	const BottomMenuAnimation = useAnimatedStyle(() => {
// 		return {
// 			height: withTiming(isOpen ? 200 : 280, {
// 				duration: 500,
// 			})
// 		}
// 	})
// 	const IconAnimation = useAnimatedStyle(() => {
// 		return {
// 			transform: [
// 				{
// 					rotate: withSpring(isOpen ? '180deg' : '0deg', {
// 						damping: 20,
// 						stiffness: 90
// 					})
// 				}
// 			]
// 		}
// 	})
//
// 	return { topBarAnimation,BottomMenuAnimation, IconAnimation, useDropDownContentAnimation, ImageAnimation, opacityAnimation, MinusOpacityAnimation }
// }