import { Link } from "react-router-dom"
import MyButton from "./Button"



const CardNotFoud = ( { message, buttonOpc}) =>{
   
    return(
        <div className="divNotFound">
            <h1>{message}</h1>
            <img 
                src="https://i.pinimg.com/236x/bb/65/ac/bb65acb8eced7c4a1fbce90916211e80--sticker-vinyl-car-decals.jpg"
                alt="silueta"/>
            <Link to={`/home`}> <MyButton name={'Go Home'} show={buttonOpc}/> </Link>
        </div>
    )
}


export default CardNotFoud


