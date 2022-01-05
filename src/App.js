import { Route, Routes,  useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';

import getAllPokemons from '../src/api/getAllPokemons';

import NavBar from './components/Navbar';
import Footer from './components/Footer'
import Search from './components/Search'
import AllPokemons from './components/AllPokemons'
import PokemonPokedex from './components/PokemonPokedex'
import CardNotFoud from './components/CardNotFoud';

import './App.css';


const Redirect = ({ to }) => {
  let navigate = useNavigate()
  useEffect(() => {
      navigate(to)
  })

  return null
}


function App() {

  const [pokemons, setPokemons] = useState([])

  const getPokemons = async () => {
    try{
      const data = await getAllPokemons();
      setPokemons(data.results)
    }catch(e){}
  } 


  useEffect(  () =>{
    getPokemons()
  },[])
  
  return (
    <div>
      <NavBar/>
      <section>
            <Routes>
                <Route path="/" element={<Redirect path="/" to="/home" />} />
                <Route
                    path="/home"
                    element={ 
                      <div>
                        <Search/>
                        <AllPokemons pokemons={pokemons}/> 
                      </div>}/>
                <Route
                    path="/pokemon/:id"
                    element={<PokemonPokedex/>}/>
                <Route 
                    path="*"
                    element={ <div className='notFound'>
                        <CardNotFoud message={'404 Page not Found'} buttonOpc={true} />
                     </div>} />               
                      
            </Routes>
        </section>

      
      <Footer/> 
    </div>
  );
}

export default App;
