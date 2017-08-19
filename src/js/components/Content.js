import React, {Component} from "react";
import FilesPanels from './FilesPanels';
//import {BrowserRouter, Route, Link} from 'react-router-dom';

export default class Content extends Component {
    render(){
        return (
            <div className="content">
                {/*<BrowserRouter>*/}

                {/*</BrowserRouter>*/}
                <FilesPanels />
            </div>
        )
    }
}