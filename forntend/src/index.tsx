import React from 'react';
import ReactDOM from 'react-dom';
import './resource/css/index.css';
import Toptree from "./home/Toptree";
import * as serviceWorker from './resource/ts/serviceWorker';


ReactDOM.render(<Toptree />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
