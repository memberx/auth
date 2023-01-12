import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPlayer } from '../api/types';

interface IPlayerState {
  player: IPlayer | null;
}

const initialState: IPlayerState = {
  player: null,
};

export const playerSlice = createSlice({
  initialState,
  name: 'playerSlice',
  reducers: {
    logout: () => initialState,
    setPlayer: (state, action: PayloadAction<IPlayer>) => {
      state.player = action.payload;
    },
  },
});

export default playerSlice.reducer;

export const { logout, setPlayer } = playerSlice.actions;