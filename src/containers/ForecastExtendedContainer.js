import React, { Component } from 'react';
import { connect } from 'react-redux';
import ForcastExtended from './../components/ForecastExtended';

class ForecastExtendedContainer extends Component {
    render() {
        return (
            this.props.city === null ? null : <ForcastExtended city={this.props.city}></ForcastExtended>
        )
    }
}

const mapStateProps = (state) => ({
    city: state.city
})

export default connect(mapStateProps, null)(ForecastExtendedContainer);