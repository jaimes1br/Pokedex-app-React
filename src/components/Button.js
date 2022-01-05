

const MyButton = ({ name, mod , show,...props }) =>{
        
    const view = show === false ? 'btnHidden' : 'btnVisible'

    return(
        <button className={`btn-pokedex ${mod} ${view}`} {...props}>{name}</button>
    )
}

export default MyButton