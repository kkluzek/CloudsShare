import React, {Component} from 'react';

export default class MenuHeaderBar extends Component{
    render() {
        return (
            <header className="menu-header-bar">
                <a href="/" className="menu-header-bar__link">
                    <i className="fa fa-cloud menu-header-bar__logo" aria-hidden="true"></i>
                    <h1 className="menu-header-bar__name">Cloud Share</h1>
                </a>
                <button className="menu-header-bar__menu-button">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </button>
                <div className="clearfix"></div>
            </header>
        )
    }
}