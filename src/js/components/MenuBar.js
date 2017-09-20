import React, {Component} from 'react';

export default class MenuBar extends Component{
    render() {
        //TODO todo
        return (
            <div className="menu-bar">
                <a href="/" className="menu-bar__link">
                    <i className="fa fa-cloud menu-bar__logo" aria-hidden="true"></i>
                    <h1 className="menu-bar__name">Cloud Share</h1>
                </a>
                {/*TODO chowanie menu*/}
                <button className="menu-bar__menu-button">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </button>
                <div className="clearfix"></div>
            </div>
        )
    }
}