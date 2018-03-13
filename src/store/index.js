import { createStore } from 'redux';
import {city} from './../reducers/city';

const initialState = {
    city: 'Santiago,scl',
}

// vincular plugin redux devtools con nuestra aplicacion
export const store = createStore(city, initialState,// funcion pura es reducers
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);