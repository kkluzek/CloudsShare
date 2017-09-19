import React, {Component} from 'react';
import AddOneDrive from "./AddDrive";

export default class Settings extends Component{
    render(){
        return (
            <div className="settings">
                <div className="add-drive">
                    <h3>Add new drive</h3>
                    <AddOneDrive />
                </div>
            </div>
        )
    }
}
