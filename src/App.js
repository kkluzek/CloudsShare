import React, { Component } from 'react';
import './App.scss';
import Menu from './js/components/Menu';
import HeaderBar from './js/components/HeaderBar';

class App extends Component {
  render() {
    return (
        <div className="App">
            <HeaderBar />
            <Menu />
        </div>
    )
  }
}
export default App;
