import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecasItem from './ForecastItem';
import './style.css';
import WeatherData from './WeatherLocation/WeatherData';
import transformForecast from './../services/transformForecast'

// const days = [
//     'Lunes',
//     'Martes',
//     'Miercoles',
//     'Jueves',
//     'Viernes',
//     'Sabado',
//     'Domingo'
// ];

// const data = {
//     temperature: 10,
//     humidity: 10,
//     weatherState: 'normal',
//     wind: 'normal'
// }

const api_key = 'c267eac20826912e21467e26358bf5cb';
const url = 'http://api.openweathermap.org/data/2.5/forecast';

class ForcastExtended extends Component {
    constructor() {
        super();
        this.state = {
            forecastData: null,
        }
    }

    componentDidMount() {
        this.updateCity(this.props.city)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.city !== this.propscity) {
            this.setState({
                forecastData: null,
            })
            this.updateCity(nextProps.city);
        }
    }

    updateCity = (city) => {
        const url_forecast = `${url}?q=${city}&appid=${api_key}&units=metric`;
        fetch(url_forecast).then(data => (data.json())
        ).then(weather_data => {
            console.log(weather_data);
            const forecastData = transformForecast(weather_data);
            console.log(forecastData)
            this.setState({ forecastData })
        })
    }



    renderForecastItemDays(forecastData) {
        return forecastData.map(forecast => (<ForecasItem key={`${forecast.weekDay}${forecast.hour}`} weekDay={forecast.weekDay} hour={forecast.hour} data={forecast.data}></ForecasItem>
        ))
        // return (
        //     days.map(day => (<ForecasItem key={day} weekDay={day} hour={10} data={data}></ForecasItem>))
        // )
    }
    renderProgress() {
        return (<h3>Cargando pronóstico extendido</h3>)
    }

    render() {
        const { city } = this.props;
        const { forecastData } = this.state;
        return (
            <div><h2 className="forecastTitle">Pronóstico extendido para {city}</h2>
                {forecastData !== null ? this.renderForecastItemDays(forecastData) : this.renderProgress()}
            </div>
        )
    }
}

ForcastExtended.ropTypes = {
    city: PropTypes.string.isRequired
}

export default ForcastExtended;

