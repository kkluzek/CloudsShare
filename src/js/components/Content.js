import React, {Component} from "react";
import FilesPanels from './FilesPanels';
import Settings from "./Settings";
import {Route} from 'react-router-dom';
import OneDriveCallback from "./OneDriveCallback";

export default class Content extends Component {
    render(){
        return (
            <div className="content">
                    <div>
                        <Route exact path="/" component={FilesPanels} />
                        <Route path="/settings" component={Settings} />
                        <Route path="/ODcallback" component={() => (<OneDriveCallback vendor="OneDrive"/>)} />
                        <Route path="/DBcallback" component={() => (<OneDriveCallback vendor="Dropbox"/>)} />
                    </div>
            </div>
        )
    }
}

