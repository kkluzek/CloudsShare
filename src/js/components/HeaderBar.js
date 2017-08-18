import React, {Component} from 'react';
import MenuBar from './MenuBar';
import SearchBar from './SearchBar';


export default class HeaderBar extends Component{
    render() {
        return (
            <header className="header-bar">
                <MenuBar />
                <SearchBar />
            </header>
        )
    }
}