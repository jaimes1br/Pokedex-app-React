
import { Field, Formik, Form, ErrorMessage } from 'formik';
import { useState } from 'react';


import { searchPokemon } from './../api/searchPokemon';
import MyButton from './Button';
import Card from './Card';

const validate = (value) =>{
    const errors = {}

    if(!value.search){ //si es vacio
        errors.search = 'Use a valid name or id'
    }

    return errors

}


const Search = () => {
    
    // pokemons todo el arreglo de pokemones
    // setPokemon para cambiar el estado y mostrar solo uno
    const [pokemons, setPokemon] = useState([])
    

    
    return(
        <div className='container-first'>
            <div className='formulario'>
                <Formik
                initialValues = { {search: ''} }
                validate={validate}
                onSubmit={async ({ search }) => {
                    const data = await searchPokemon(search)
                    setPokemon(data);
                }}>
                <Form>
                    <Field type='text'name='search' clas='true' className='inputSearch' place='true' placeholder="Name or Id"/>
                    <MyButton name='Search' type='submit' show={true}/>
                    <div className='errorMessage'>
                        <p><ErrorMessage name='search'/></p>
                    </div>

                </Form>
                </Formik>
            </div>
            

            <div className='container-card'>
                <Card pokemon={pokemons}></Card>
            </div>
            
        </div> //contenedor para tener el formulario y la card
    )
}


export default Search