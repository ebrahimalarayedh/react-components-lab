const WeatherDay = (props) => {
    let { day } = props
    return (
        <h2>{day}</h2>
    )
}

const WeatherData = (props) => {
    let { conditions, time } = props
    return (
        <>
            <p><span>conditions: </span>{conditions}</p>
            <p><span>time: </span>{time}</p>
        </>
    )
}

export {WeatherDay, WeatherData}