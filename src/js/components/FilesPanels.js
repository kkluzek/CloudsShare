import React, {Component} from 'react';
import FilesPanel from "./FilesPanel";

export default class FilesPanels extends Component {
    render(){
        return (
            <div className="files-panels">
                <FilesPanel/>
                <FilesPanel/>
                <FilesPanel/>
                <FilesPanel/>
            </div>
        )
    }
}