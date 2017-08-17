import React, {Component} from 'react';

const MENU_ITEMS = [
    {
        id: 0,
        name: 'main',
        icon: "home" //Font Awesome icon
    },
    {
        id: 1,
        name: "setting",
        icon: "cog"
    }
];

const MENU_ITEMS_RENDER = MENU_ITEMS.map(
    (key) => <li className="menu-list-items__item" key={key.id}>
                <i className={"menu-list-items__icon fa fa-" + key.icon} aria-hidden="true"></i> {key.name}
             </li>
);

export default class MenuListItems extends Component{
    render(){
        return (
                <ul className="menu-list-items">
                    {MENU_ITEMS_RENDER}
                </ul>
        )
    }
}