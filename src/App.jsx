
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pokemons from "./Pages/Pokemons.jsx";
import Countries from "./Pages/Countries.jsx";
import PokemonsProvider from './context/pokemonsContext.jsx';
import CountriesProvider from './context/countriesContext.jsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pokemons" element={<PokemonsProvider> <Pokemons /> </PokemonsProvider>} />
        <Route path="/countries" element={<CountriesProvider> <Countries /> </CountriesProvider>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
