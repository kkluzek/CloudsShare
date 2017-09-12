import React, { Component } from 'react';
import './App.scss';
import Menu from './js/components/Menu';
import HeaderBar from './js/components/HeaderBar';
import Content from './js/components/Content';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from  'redux';

import {Provider} from "react-redux";
import reducers from "./js/reducers";

const Store = createStore(reducers);

class App extends Component {
  render() {
    return (
        <Provider store={ Store }>
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
