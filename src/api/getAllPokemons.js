
const getAllPokemons = async () =>{
    try{

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=9&offeset=0`)
        const data = await response.json()    
        return data

    }catch(e){
      
    }
}

export default getAllPokemons