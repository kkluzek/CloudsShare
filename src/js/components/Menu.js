import React from 'react';
import MenuUserInfo from './MenuUserInfo';
import MenuListItems from './MenuListItems';

export default function Menu() {
    return (
        <div id="menu" className="menu menu--hide">
            <MenuUserInfo/>
            <MenuListItems/>
        </div>
    )
}

