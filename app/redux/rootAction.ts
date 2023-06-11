import { PlayerAction } from '@/redux/player/playerSlice'
import { ThemeAction } from '@/redux/settings/themeSlice'
import * as authActions from './auth/authAction'

export const rootAction = {
	...authActions,
	...ThemeAction,
	...PlayerAction
}
