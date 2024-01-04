import { configureStore } from '@reduxjs/toolkit'
import { gameReducer } from '../features/gameSlice'

export const store = configureStore({
  reducer: {
    game: gameReducer,
  },
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
