import React from 'react';

export default function MenuBar() {
    return (
        <div className="menu-bar">
            <a href="/" className="menu-bar__link">
                <i className="fa fa-cloud menu-bar__logo" aria-hidden="true"> </i>
                <h1 className="menu-bar__name">Cloud Share</h1>
            </a>
            <button className="menu-bar__menu-button"
                    onClick={() => document.getElementById("menu").classList.toggle("menu--hide")}>
                <i className="fa fa-bars" aria-hidden="true"> </i>
            </button>
            <div className="clearfix"> </div>
        </div>
    )
}