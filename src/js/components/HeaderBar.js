import React from 'react';
import MenuBar from './MenuBar';
import SearchBar from './SearchBar';


export default function HeaderBar() {
    return (
        <header className="header-bar">
            <MenuBar/>
            <SearchBar/>
        </header>
    )
}