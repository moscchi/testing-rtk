import { useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slices/pokemon/thunks'
import { pokemonSlice } from './store/slices/pokemon/pokemonSlice';
import { AppDispatch, RootState } from './store/store';

function App() {
	const dispatch = useDispatch<AppDispatch>();
  const { isLoading, page, pokemons } = useSelector((state: RootState) => state.pokemon)
  useEffect(() => {
    dispatch(getPokemons())
  }, [])

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <span> Loading: { isLoading ? 'true':'False'}</span>
      <ul>
        { pokemons.map(pokemon => (<li>{pokemon.name}</li>))}
      </ul>
      <button 
         disabled={isLoading}
        onClick={() => {
          dispatch(getPokemons(page+1))
        }} 
      >
        Next
      </button>
    </>
  )
}

export default App
