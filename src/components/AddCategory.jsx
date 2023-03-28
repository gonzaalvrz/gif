import { React, useState } from 'react'

export default function AddCategory({onNewCategory}) {

    const [inputValue, setInputValue] = useState('')
    
   /*  Permite capturar lo que se escribe en el input */
    const onInputChange = ({ target }) => {
        console.log(target.value);
        setInputValue(target.value)
    }
    
    /* envia lo que se escribe en el input */
    const onSubmit = (event) => {
        event.preventDefault()
    /* Deja enviar lo escrito si solo se escribe más de una letra */
        if (inputValue.trim().length <= 1) return;
    /* Agrega lo escrito a la lista */
        /* setCategories( categories=> [inputValue, ... categories]) */
        onNewCategory( inputValue.trim() )
    /* Deja el iput vacio despues dar enter */
        setInputValue('')
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder='Buscar'
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
