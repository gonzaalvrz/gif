import { React, useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

export default function GifExpertApp() {

    const [categories, setCategories] = useState([])

    const onAddCategory = ( NewCategory) => {
        console.log(NewCategory)
        if( categories.includes(NewCategory)) return;
        setCategories([NewCategory, ...categories])
    }

    
    return (
        <>
            <div><h1>Aplicación de Gif</h1></div>
            <div>
                <h2>Lista</h2>
                <AddCategory // setCategories={setCategories}
                    onNewCategory={onAddCategory}
                />
                <ul>{
                    categories.map(c => {
                        return <li key={c}><GifGrid category={c}/></li>
                    })
                }</ul>
            </div>

        </>
    )
}
