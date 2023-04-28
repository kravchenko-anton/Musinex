import { useColorScheme } from 'nativewind'
import { FC, PropsWithChildren, useEffect } from 'react'
import { useTypedSelector } from '../hook/useTypedSelector'

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
	const { setColorScheme } = useColorScheme()
	const selector = useTypedSelector((state) => state.theme)
	useEffect(() => {
		setColorScheme(selector)
	}, [])
	return <>
		{children}
	</>
}

export default ThemeProvider