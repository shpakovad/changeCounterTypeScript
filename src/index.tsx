import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import store from "./redux/store";
import {IState} from "./types/types";




let state:IState;
 state={
    maxValue: 0,
    minValue: 0,
    counter: "Enter value and press 'Set'",
    isButtonInc: true,
    numberNewColor: false,
    errorMax: false,
    errorMin: false,
    isButtonSet: false,
    isButtonReset: true,
    currentDisplaySettings: true,
    currentDisplay: false,
    isCounterSet: false
};


ReactDOM.render(
    <Provider store={store}>
    <App state={state}/>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
