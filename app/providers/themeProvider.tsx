import { useTypedSelector } from '@/hook/useTypedSelector'
import { useColorScheme } from 'nativewind'
import { useEffect } from 'react'

const ThemeProvider = () => {
	const { setColorScheme } = useColorScheme()
	const selector = useTypedSelector(state => state.theme)
	useEffect(() => {
		setColorScheme(selector)
	}, [])
	return null
}

export default ThemeProvider
