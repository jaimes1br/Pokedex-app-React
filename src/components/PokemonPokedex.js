import { useParams,NavLink } from "react-router-dom"

import { searchPokemon } from '../api/searchPokemon';
import { useState,useEffect } from "react";

import MyButton from "./Button";
import Colors from "../tools/colors";
import CardNotFoud from "./CardNotFoud";


const PokemonPokedex = () =>{
    const query = useParams()
    const { id } = query
    const [pokedex, setPokedex] = useState([])
    
    const getPokedex = async () =>{
        try{
            const data = await searchPokemon(id)
            setPokedex(data)
        }catch(e) {}

    }
    
    useEffect( () => {
        getPokedex()
    }, [])
    

    if(pokedex === undefined){
        return(
            <CardNotFoud message={'We couldn\'t find your Pokemon,  try another name or id'} buttonOpc={true} />
        )
    }

    if(pokedex.length === 0){
        return null
    }

    const color1 = Colors(pokedex.types[0].type.name);
    const color2 = (pokedex.types[1] === undefined ) ? Colors('default'): Colors(pokedex.types[1].type.name)
    const colors = [color1,color2]
    
    return(
        <div className="containerPokedex">
            <div className="pokedex-btn">
                <NavLink to={`/home`}>  <MyButton name='Back' show={true}/> </NavLink>
            </div>
            <div className="pokedex">
                <div className="pokedex-name">
                    <p>{pokedex.name}</p>
                </div>
                <div className="pokedex-img">
                    <img src={pokedex.sprites.front_default}
                        alt={pokedex.name}
                        style={{background: `radial-gradient(${color2} 33%, ${color1} 33%)`, backgroundSize: '5px 5px' }}
                        />
                </div>
                <div className="pokedex-id">
                    <p>N° {pokedex.id}</p>
                </div>
                <div className="pokedex-type"> 
                    {pokedex.types.map((type,i) => 
                        <div key={(pokedex.id+100) + pokedex.name } style={{color: `${colors[i]}`}}> {type.type.name}</div>
                    )}
                </div>
                <div className="pokedex-stati">
                    {pokedex.stats.map((stat) => 
                        <div className="pokedex-stati-container">
                            <p key={stat.stat.name} > {stat.stat.name} </p>
                            <p key={stat.base_stat}> {stat.base_stat}</p>
                        </div>
                    )}

                </div>

            </div>
        </div>
    )
}


export default PokemonPokedex