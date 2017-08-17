import React, {Component} from 'react';
import MenuHeaderBar from './MenuHeaderBar';
import MenuUserInfo from './MenuUserInfo';
import MenuListItems from './MenuListItems';

export default class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <MenuHeaderBar />
                <MenuUserInfo  />
                <MenuListItems  />
            </div>
        )
    }
}