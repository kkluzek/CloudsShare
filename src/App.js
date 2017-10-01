import React from 'react';
import './App.scss';
import Menu from './js/components/Menu';
import HeaderBar from './js/components/HeaderBar';
import Content from './js/components/Content';
import {BrowserRouter} from 'react-router-dom';

import {Provider} from "react-redux";
import reducers from "./js/reducers";

import {onAuthenticated} from "./js/Utils";

import {applyMiddleware, createStore} from "redux";

import OneDrive from "./js/middlewares/OneDrive";
import Dropbox from "./js/middlewares/Dropbox";
import logger from "redux-logger";

import {load, save} from "redux-localstorage-simple";

const createStoreWithMiddleware = applyMiddleware(OneDrive, Dropbox, logger, save())(createStore);

function App() {
    return (
        <Provider store={createStoreWithMiddleware(reducers, load())}>
            <div id="App">
                <HeaderBar/>
                <BrowserRouter basename="/clouds">
                    <div className="body">
                        <Menu/>
                        <Content/>
                    </div>
                </BrowserRouter>
            </div>
        </Provider>
    )
}

/// to fire from Authorization popup window
window.onAuthenticated = onAuthenticated;
export default App;
