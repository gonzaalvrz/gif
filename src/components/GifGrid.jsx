import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'
import GifItem from './GifItem'

export default function GifGrid({category}) {

    const [images, setImages] = useState([])

    const getImages= async() => {
        const newImages = await getGifs(category)
        setImages(newImages)
    }
   useEffect(()=>{
    getImages()
   }, [])
    
  return (
    <>
      <h3>{category}</h3>
      <div className='card-grid'>
        {
            images.map((image) => (
                <GifItem key={image.id} {...image}/>
            ))
        }
      </div>
    </>
  )
}
