import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { Pokemon, setPokemons, startLoadingPokemons } from "./pokemonSlice"
import { pokemonApi } from "../../../api/pokemonApi";

export const getPokemons = ( page = 0) => {
    return async ( dispatch: Dispatch<AnyAction>, getState: any ) => {
        dispatch( startLoadingPokemons() );
        //TODO: realizar peticion http
        //const resp = await fetch()
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        //const data = await resp.json();
        const resp = await pokemonApi.get(`/pokemon?limit=10&offset=${page*10}`)
        console.log(resp.data);
        
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        dispatch( setPokemons( { pokemons: resp.data.results, page: page +1}) )
    }
}