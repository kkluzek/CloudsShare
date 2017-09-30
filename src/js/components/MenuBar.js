import React from 'react';
import {toggleMenu} from '../Utils';

export default function MenuBar() {


    return (
        <div className="menu-bar">
            <a href="/" className="menu-bar__link">
                <i className="fa fa-cloud menu-bar__logo" aria-hidden="true"> </i>
                <h1 className="menu-bar__name">Cloud Share</h1>
            </a>
            <button className="menu-bar__menu-button"
                    onClick={() => toggleMenu()}>
                <i className="fa fa-bars" aria-hidden="true"> </i>
            </button>
        </div>
    )
}