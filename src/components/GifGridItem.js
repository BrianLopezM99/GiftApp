const GifGridItem = ({img}) => {

    return (
        <div>
            <img src={img.url} alt={img.title}/>
            <p>{img.title}</p>
        </div>
    )
}

export default GifGridItem
