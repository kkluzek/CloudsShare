import React from 'react';
import avatar from "../../img/avatar.png";

export default function MenuUserInfo() {
    return (
        <div className="menu-user-info">
            <img src={avatar} alt="avatar" className="menu-user-info__avatar"/>
            <h2 className="menu-user-info__name">Konrad</h2>
        </div>
    );
}