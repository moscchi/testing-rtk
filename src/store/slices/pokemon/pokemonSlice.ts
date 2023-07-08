import { createSlice } from "@reduxjs/toolkit";

interface SetPokemons {
    payload: {page: number, pokemons: Pokemon[]}
    type: string
}
interface PokemonSlice {
  page: number;
  pokemons: Pokemon[];
  isLoading: boolean;
}
export interface Pokemon {
  name: string;
  url: string;
}
const initialState: PokemonSlice = {
  page: 0,
  pokemons: [],
  isLoading: false,
};
export const pokemonSlice = createSlice({
  name: "Pokemon",
  initialState,
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action: SetPokemons) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.pokemons = action.payload.pokemons;
    },
  },
});

export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;
