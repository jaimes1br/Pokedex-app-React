import { NavLink } from 'react-router-dom'
import './../App.css'

const NavBar = () =>{
    return(
        
        <nav className="navBar">
            
            <div className="NavBar-img">
               <a href='https://pokeapi.co/'>
                    <img 
                        src='https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'
                        alt='Logo PokeApi'/> 
                </a>
            </div>
            
            <div className="navBar-list">
                <ul>
                    <li>
                        <NavLink to='/home'>Pokemons</NavLink>
                    </li>
                </ul>
            </div>
            
            <div className="navBar-heart">
                &#10084;&#65039; 
            </div>
        </nav>
    
    
    )
}


export default NavBar