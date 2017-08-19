import React, { Component } from 'react';
import './App.scss';
import Menu from './js/components/Menu';
import HeaderBar from './js/components/HeaderBar';
import Content from './js/components/Content';

class App extends Component {
  render() {
    return (
        <div className="App">
            <HeaderBar />
            <div className="body">
                <Menu />
                <Content />
            </div>
        </div>
    )
  }
}
export default App;
