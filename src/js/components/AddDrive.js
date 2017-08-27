import React, {Component} from 'react';
import oneDriveIcon from "../../img/One-Drive-icon.png";


export default class AddDrive extends Component {
    render(){
        return (
        <div className="add-drive">
            <h3>Add new drive</h3>
            <button className="add-drive__btn btn btn-light"><img className="add-drive__btn-icon" src={oneDriveIcon} alt="OneDrive Icon"/><span className="add-drive__btn-text">OneDrive</span>
            </button>
        </div>
        )
    }
}
