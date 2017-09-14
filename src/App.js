import React, { Component } from 'react';
import './App.scss';
import Menu from './js/components/Menu';
import HeaderBar from './js/components/HeaderBar';
import Content from './js/components/Content';
import {BrowserRouter} from 'react-router-dom';

import {Provider} from "react-redux";
import reducers from "./js/reducers";

import { createStore, applyMiddleware } from "redux";

import Async from "./js/middlewares/async";

const createStoreWithMiddleware = applyMiddleware(Async)(createStore);

class App extends Component {
  render() {
    return (
        <Provider store={createStoreWithMiddleware(reducers)}>
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
export default App;
