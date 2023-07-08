import { PlayerTypes } from '@/utils/player/player.types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type PlayerState = Omit<Required<PlayerTypes>, 'color'>
export const playerSlice = createSlice({
	name: 'history',
	initialState: [] as Array<PlayerState>,
	reducers: {
		addToHistory: (state, { payload }: PayloadAction<PlayerState>) => {
			const exist = state.find(e => e.title === payload.title) || false
			if (exist) return
			state.unshift(payload)
		},
		clearHistory: state => {
			state.length = 0
		}
	}
})
export const { reducer: historyReducer, actions: HistoryAction } = playerSlice
