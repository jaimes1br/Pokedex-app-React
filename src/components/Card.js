import { Link } from "react-router-dom"
import MyButton from "./Button"

import CardNotFoud from "./CardNotFoud"

const Card = ({ pokemon }) => {
    
    if(pokemon === undefined){
        return(
            <CardNotFoud message={'We couldn\'t find your Pokemon,  try another name or id'} buttonOpc={false} />
        )
    }

    if( pokemon.length === 0){
        return null
    }
    return(
        // 
        <div className="card" style={{ width: '20rem' }}>
            <div className="card-img">
                <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
            </div>{/* imagen */}
            <div>
                <div className="card-name">
                    <p>{pokemon.name}</p>  <span>#{pokemon.id}</span> 
                </div>{/* nombre */}
                <div className="card-elements">
                    <Link to={`/pokemon/${pokemon.id}`}> <MyButton name='View'/> </Link>
                </div>{/* detalles*/}
            </div>
            
        </div>
    )
}


export default Card