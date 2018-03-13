import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({humidity, wind}) => (
    <div>
     <span className = 'weatherextraInfo'>{`Humedad: ${humidity} % -`}</span>
     <span className = 'weatherextraInfo'>{`Viento:  ${wind}`}</span>
    </div>
)

WeatherExtraInfo.propTypes = {
    humidity : PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}

export default WeatherExtraInfo;