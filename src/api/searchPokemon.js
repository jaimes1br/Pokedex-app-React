

export const searchPokemon = async (pokemon) =>{

    if(typeof pokemon === 'string'){
        pokemon = pokemon.toLowerCase()
    }

    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        const data = await response.json()    
        return data

    } catch (err){
        console.log('hola')
        console.log(err)
    }
}

