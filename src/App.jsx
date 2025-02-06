// src/App.jsx
import './App.css'
import WeatherForecasts from './components/WeatherForecast/WeatherForecast';

const App = () => {

  const weatherForecasts = [
    {
      day: 'Mon',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/day.svg',
      imgAlt: 'sun icon',
      conditions: 'sunny',
      time: 'Morning',
    },
    {
      day: 'Tue',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/night.svg',
      imgAlt: 'moon icon',
      conditions: 'clear',
      time: 'Night',
    },
    {
      day: 'Wed',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/stormy.svg',
      imgAlt: 'clouds with lightning icon',
      conditions: 'stormy',
      time: 'All Day',
    },
    {
      day: 'Thu',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-day.svg',
      imgAlt: 'sun overcast by clouds icon',
      conditions: 'overcast',
      time: 'Evening',
    },
    {
      day: 'Fri',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-night.svg',
      imgAlt: 'moon overcast by clouds icon',
      conditions: 'cloudy',
      time: 'Night',
    },
  ];
  

  return (
    <>
    <h1>Local Weather</h1>
    <section>
    {weatherForecasts.map((aDay)=>{
      return (
        <div key={aDay.day}>
          <WeatherForecasts {...aDay}/>
          {/* day={aDay.day} img={aDay.img} imgAlt={aDay.imgAlt} conditions={aDay.conditions}
          time={aDay.time} */}
        </div>
      )
    })}
    </section>
  </>

  );
}

export default App
