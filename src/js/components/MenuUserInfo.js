import React, {Component} from 'react';
import avatar from "../../img/avatar.png";

export default class MenuUserInfo extends Component {
    render(){
        // language=JSX Harmony
        return (
            <div className="menu-user-info">
                <img src={avatar} alt="avatar" className="menu-user-info__avatar" />
                <h2 className="menu-user-info__name">Konrad</h2>
            </div>
        );
    }
}