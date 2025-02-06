const WeatherIcon = (props)=>{
    let {img, imgAlt} = props
    return (
        <img src={img} alt={imgAlt} />

        
    )
}

export default WeatherIcon