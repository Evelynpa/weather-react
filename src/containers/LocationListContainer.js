import React, { Component } from 'react';
import { connect } from 'react-redux';// para conectar con mis estados
import { setCity } from './../actions';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {

    handlerSelectionLocation = (city) => {
        this.props.setCity(city);
    }
    render() {
        return (
            <div>
                <LocationList cities={this.props.cities} onSelectedLocation={this.handlerSelectionLocation}>
                </LocationList >
            </div>
        )
    }

}

// esta funcion nos deja trabajar con las acciones
const mapDispatchToPropsActions = (dispatch) => ({
    setCity: value => dispatch(setCity(value))
});

export default connect(null, mapDispatchToPropsActions)(LocationListContainer);