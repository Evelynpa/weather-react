import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';

import Location from './Location';
import WeatherData from './WeatherData';
import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY } from '../../constant/weathers';
import transformWeather from '../../services/transformWeather';
  

const api_key = 'c267eac20826912e21467e26358bf5cb';
// const city = 'Santiago,scl';
const url = 'http://api.openweathermap.org/data/2.5/';
// const api_weather = `${url}/weather?q=${location}&appid=${api_key}&units=metric`;

// const data1 = {
//   temperature: 32,
//   weatherState: SUN,
//   humidity: 2,
//   wind: '10 m/s',
// }


// const data2 = {
//   temperature: 10,
//   weatherState: SNOW,
//   humidity: 98,
//   wind: '70 m/s',
// }
// ESTE ES UN COPONENTE FUNCIONAL
// const WeatherLocation = () => (
//   <div>
//     <Location city={'Santiago'} />
//     <WeatherData data={data} />
//   </div>
// );

class WeatherLocation extends Component {
  constructor({ city }) {
    super();
    this.state = {//tomar el estado en ese punto del componente
      city,
      data: null,
    }
  }

  // this.setState({
  //   // city: 'Santiago', NO SE USA XQ ES LO MISMO que el inicial
  //   data: data2,
  // })

  componentWillMount = () => {
    // console.log('componentWillMount');
    const {city } = this.state;
    const api_weather = `${url}/weather?q=${city}&appid=${api_key}&units=metric`;
    fetch(api_weather).then(data => {
      //console.log(data);
      return data.json();
    }).then(weather_data => {
      const data = transformWeather(weather_data);
      this.setState({ data });
    })
  }

  // componentDidMount(){
  //   console.log('componentDidMount')
  // }

  // componentWillUpdate(){
  //   console.log('componentWillUpdate')
  // }

  // componentDidUpdate(){
  //   console.log('componentDidUpdate')
  // }

  render = () => {
    const {onWeatherLocationClick} = this.props
    const { city, data } = this.state;
    return (
      <div className = "weatherLocation" onClick = {onWeatherLocationClick}>
        <Location city={city} />
        {data !== null ? <WeatherData data={data} /> : <CircularProgress size={80} thickness={5} />
        }
      </div>
      /* <button onClick={this.handleUpdateClick}>Actualizar</button> */
    )
  }
}

WeatherLocation.propTypes = {
  city: PropTypes.string,
  onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;