import React from "react";
import FilesPanels from './FilesPanels';
import {Route} from 'react-router-dom';
import OneDriveCallback from "./OneDriveCallback";
import AddOneDrive from "./AddDrive";

export default function Content() {
    return (
        <div id="content" className="content">
            <Route exact path="/" component={FilesPanels}/>
            <Route path="/settings" component={AddOneDrive}/>
            <Route path="/ODcallback" component={() => (<OneDriveCallback vendor="OneDrive"/>)}/>
            <Route path="/DBcallback" component={() => (<OneDriveCallback vendor="Dropbox"/>)}/>
        </div>
    )
}

