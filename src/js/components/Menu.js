import React, {Component} from 'react';
import MenuUserInfo from './MenuUserInfo';
import MenuListItems from './MenuListItems';

export default class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <MenuUserInfo  />
                <MenuListItems  />
            </div>
        )
    }
}