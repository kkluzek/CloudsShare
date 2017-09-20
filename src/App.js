import React, { Component } from 'react';
import './App.scss';
import Menu from './js/components/Menu';
import HeaderBar from './js/components/HeaderBar';
import Content from './js/components/Content';
import {BrowserRouter} from 'react-router-dom';

import {Provider} from "react-redux";
import reducers from "./js/reducers";

import utils from "./js/Utils";

import { createStore, applyMiddleware } from "redux";

import OneDrive from "./js/middlewares/OneDrive";
import Dropbox from "./js/middlewares/Dropbox";
import logger from "redux-logger";

import {save, load} from "redux-localstorage-simple";

const createStoreWithMiddleware = applyMiddleware(OneDrive, Dropbox, logger, save())(createStore);

class App extends Component {
  //  TODO poprawić warningi
  render() {
    return (
        <Provider store={createStoreWithMiddleware(reducers, load())}>
        <div className="App">
            <HeaderBar />
            <BrowserRouter>
                <div className="body">
                    <Menu />
                    <Content />
                </div>
            </BrowserRouter>
        </div>
        </Provider>
    )
  }
}
/// to fire from Authorization popup window
window.onAuthenticated = utils.onAuthenticated;
export default App;
