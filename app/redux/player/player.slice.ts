import { ITrack } from '@/types/player/ITrack'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type PlayerState = {
	songIndex: number
	data: Omit<Required<ITrack>, 'color'>[]
}
export const playerSlice = createSlice({
	name: 'player',
	initialState: [] as Array<PlayerState>,
	reducers: {
		addToPlayer: (state, { payload }: PayloadAction<PlayerState>) => {
			state.length = 0
			state.push.apply(state, [
				{ songIndex: payload.songIndex, data: payload.data }
			])
		},
		changeSongIndex: (state, { payload }: PayloadAction<number>) => {
			state[0].songIndex = payload
		}
	}
})
export const { reducer: playerReducer, actions: PlayerAction } = playerSlice
