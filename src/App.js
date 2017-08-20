import React, { Component } from 'react';
import './App.scss';
import Menu from './js/components/Menu';
import HeaderBar from './js/components/HeaderBar';
import Content from './js/components/Content';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <div className="App">
            <HeaderBar />
            <BrowserRouter>
                <div className="body">
                    <Menu />
                    <Content />
                </div>
            </BrowserRouter>
        </div>
    )
  }
}
export default App;
