import React, {Component} from 'react';

export default class SearchBar extends Component {
    render(){
        return (
            <div className="search-bar">
                <form action="" className="search-bar__form">
                    <input className="search-bar__input" type="text"/>
                    <button className="search-bar__button">
                        <i className="fa fa-search"> </i>
                    </button>
                </form>
            </div>
        )
    }
}