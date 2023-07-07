import { PlayerTypes } from '@/utils/player/player.types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type PlayerState = {
	data: Omit<Required<PlayerTypes>, 'color'>[]
}
export const playerSlice = createSlice({
	name: 'history',
	initialState: [] as Array<PlayerState>,
	reducers: {
		addToHistory: (state, { payload }: PayloadAction<PlayerState>) => {
			state.length = 0
			state.push.apply(state, [{ data: payload.data }])
		}
	}
})
export const { reducer: historyReducer, actions: HistoryAction } = playerSlice
