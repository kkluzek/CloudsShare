import React, {Component} from 'react';
import MenuHeaderBar from './MenuHeaderBar.js';

export default class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <MenuHeaderBar />
                {/*<MenuUserInfo  />*/}
                {/*<MenuListItem  />*/}
            </div>
        )
    }
}