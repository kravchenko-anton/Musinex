import { PlayerAction } from '@/redux/player/player.slice'
import { ThemeAction } from '@/redux/settings/theme.slice'
import * as authActions from './auth/auth.action'

export const rootAction = {
	...authActions,
	...ThemeAction,
	...PlayerAction
}
