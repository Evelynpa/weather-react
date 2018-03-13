import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { createStore } from 'redux'
import LocationListContainer from './containers/LocationListContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
// import ForcastExtended from './components/ForecastExtended';
// import { setCity } from './actions';
import './App.css';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';

const cities = [
  'Buenos Aires,ar',
  'Bogotá,col',
  'Santiago,scl',
  'Ciudad de México,mx',
  'Madrid, es',
  'Roma,it',
  'Rio de Janeiro,br'
];



class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <Col xs={12}>
              <AppBar title='Weather Location' />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationListContainer cities={cities}></LocationListContainer>
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className="detail">
                 <ForecastExtendedContainer></ForecastExtendedContainer>
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
      //   <MuiThemeProvider>
      //   <div className="App">
      //   <LocationList cities = {cities}
      //   onSelectedLocation = {this.handlerSelectionLocation}>
      //   </LocationList >
      //   </div>
      // </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  setCity: PropTypes.func.isRequired,
}


export default App;
