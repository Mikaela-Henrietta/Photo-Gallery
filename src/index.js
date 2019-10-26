import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router';
import './styles/index.scss';
import 'normalize.css';
import { Provider } from 'react-redux';
import store from "./redux";

ReactDOM.render(<Provider store={store}><Router/></Provider>, document.getElementById('app'));