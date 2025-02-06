import './WeatherForecast.css'
import WeatherIcon from './WeatherIcon'
import {WeatherDay, WeatherData} from './WeatherData'
// import WeatherDay from './WeatherDay'



function WeatherForecasts(props){
    let {day, img, imgAlt, conditions, time} = props

    return (
        <>
            <div className="weather">
                <WeatherDay day={day} />
                <WeatherIcon img={img} imgAlt={imgAlt} />
                <WeatherData conditions={conditions} time={time} />
            </div>

        </>
    )
}



export default WeatherForecasts