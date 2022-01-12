import { useState, useEffect } from "react"
import GifGridItem from "./GifGridItem"

const GifGrid = ({category}) => {

    const [images, setImages] = useState([])

    useEffect(() =>{
        getGifs()
    }, [])

    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?api_key=DRQqbttwn6JbSmnPNo1MOyPpyCyVpa0q&q=rick+and+morty&limit=10'
        const resp = await fetch(url)
        const {data} = await resp.json()

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gifs)
        setImages(gifs)
    }

    
    return (
        <div>
            <h3>{category}</h3>
                {images.map(img => {
                    return <GifGridItem img={img} key={img.id}/>
                })}
        </div>
    )
}

export default GifGrid