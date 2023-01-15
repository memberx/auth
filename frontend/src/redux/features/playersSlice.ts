import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPlayers } from '../api/types';

interface IPlayersState {
  players: IPlayers | null;
}

const initialState: IPlayersState = {
    players: null,
};

export const playersSlice = createSlice({
  initialState,
  name: 'playersSlice',
  reducers: {
    logout: () => initialState,
    setPlayers: (state, action: PayloadAction<IPlayers>) => {
      console.log('setting players', action.payload);
      state.players = action.payload;
    },
  },
});

export default playersSlice.reducer;

export const { logout, setPlayers } = playersSlice.actions;
