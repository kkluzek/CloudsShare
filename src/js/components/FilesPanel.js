import React, {Component} from 'react';
import googleDriveIcon from "../../img/Google-Drive-icon.png";
//import oneDriveIcon from "../../img/One-Drive-icon.png";

const FILE_LIST = [
    {
        id: 1,
        name: "File 1",
        type: "file"
    },
    {
        id: 2,
        name: "Folder 1",
        type: "folder"
    },
    {
        id: 3,
        name: "File 2",
        type: "file"
    },
];

const FILE_LIST_RENDER = FILE_LIST.map( key =>
    <li key={key.id} className="files-panel__item"><i className={"files-panel__icon fa fa-" + key.type } aria-hidden="true"> </i>{key.name}</li>
);
export default class FilesPanel extends Component {
    render(){
        return (
            <div className="files-panel">
                <img className="files-panel__drive-icon" src={googleDriveIcon} alt=""/>
                <h2 className="files-panel__title">Google Drive</h2>
                <div className="clearfix"></div>
                <ul className="files-panel__list">
                    {FILE_LIST_RENDER}
                </ul>
            </div>
        )
    }
}
