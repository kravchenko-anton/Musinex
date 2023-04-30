import { useColorScheme } from 'nativewind'
import { useEffect } from 'react'
import { useTypedSelector } from '../hook/useTypedSelector'

const ThemeProvider = () => {
	const { setColorScheme } = useColorScheme()
	const selector = useTypedSelector(state => state.theme)
	useEffect(() => {
		setColorScheme(selector)
	}, [])
	return null
}

export default ThemeProvider
