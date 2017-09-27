import React from 'react';
import AddOneDrive from "./AddDrive";

export default function Settings() {
    return (
        <div className="settings">
            <div className="add-drive">
                <h3>Add new drive</h3>
                <AddOneDrive/>
            </div>
        </div>
    )
}
