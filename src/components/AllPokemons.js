import { NavLink } from "react-router-dom"

import MyButton from "./Button"

const AllPokemons = ({ pokemons }) =>{
    
    return(
        
        <div className='container-all'>
           {pokemons.map((pokemon,i) => 
                <div className="container_pokemon" key={pokemon.name}>
                    <div>
                        <img 
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${(i + 1)}.png`}
                            alt={pokemon.name}/>
                        <div className="container_pokemon-btn">
                        <NavLink to={`/pokemon/${(i + 1 )}`}> <MyButton name='View' mod='small-card' show={true}/> </NavLink>
                        </div> 
                    </div>
                </div>       
           )}
           
          
        </div>
    
    )
}


export default AllPokemons