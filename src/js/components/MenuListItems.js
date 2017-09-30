import React from 'react';
import {NavLink} from 'react-router-dom';
import {toggleMenu} from "../Utils";

const MENU_ITEMS = [
    {
        id: 0,
        name: 'main',
        icon: "home", //Font Awesome icon
        link: "/" //link to page
    },
    {
        id: 1,
        name: "setting",
        icon: "cog",
        link: "/settings"
    }
];


const MENU_ITEMS_RENDER = MENU_ITEMS.map(
    (key) => <NavLink onClick={() => toggleMenu()} key={key.id} className="menu-list-items__item" activeClassName="menu-list-items__item--active"
                      exact to={key.link}>
        <li>
            <i className={"menu-list-items__icon fa fa-" + key.icon} aria-hidden="true"> </i>
            {key.name}
        </li>
    </NavLink>
);

export default function MenuListItems() {
    return (
        <ul className="menu-list-items">
            {MENU_ITEMS_RENDER}
        </ul>
    )
}