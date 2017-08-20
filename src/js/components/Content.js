import React, {Component} from "react";
import FilesPanels from './FilesPanels';
import Settings from "./Settings";
import {Route} from 'react-router-dom';


export default class Content extends Component {
    render(){
        return (
            <div className="content">
                    <div>
                        <Route exact path="/" component={FilesPanels} />
                        <Route path="/settings" component={Settings} />
                    </div>
            </div>
        )
    }
}