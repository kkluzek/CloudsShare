import React, {Component} from 'react';
import oneDriveIcon from "../../img/One-Drive-icon.png";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {actionFetchOD} from "../actions/OneDriveFetch"

class FilesPanel extends Component {
    constructor(props){
        super(props);
        this.state = {previous: "/drive/root"};
    }

    getPrevious(previous){
        if (previous === "/drive/root:" || previous === "/drive/root"){
            return "/drive/root"
        } else {
            let result = previous.split("/");
            result.pop();
            result = result.join("/");
            return result;
        }
    }

    renderFileList(value) {
        const {token, actionFetchOD} = this.props;
        const {name} = value;
        const downloadUrl = value['@microsoft.graph.downloadUrl'];
        const {path} = value.parentReference;
        const encodedName = encodeURIComponent(name);
        const pathToFolder = path + "/" + encodedName;
        if (value.folder) {
            return <li key={value.id} onDoubleClick={() => {
                this.setState({
                    previous: this.getPrevious(pathToFolder)
                });
                actionFetchOD(token, pathToFolder);
            }} className="files-panel__item">
                <i className={"files-panel__icon fa fa-folder"} aria-hidden="true"> </i>{value.name}</li>
        } else {
            return <li key={value.id} onDoubleClick={() => window.open(downloadUrl)} className="files-panel__item">
                <i className={"files-panel__icon fa fa-file"} aria-hidden="true"> </i>{value.name}</li>
        }
    }
    render(){
        const {token, actionFetchOD} = this.props;
        const {previous} = this.state;
        return (
            <div className="files-panel">
                <img className="files-panel__drive-icon" src={oneDriveIcon} alt=""/>
                <h2 className="files-panel__title">One Drive</h2>
                <button onClick={() => {
                    actionFetchOD(token, previous);
                    this.setState({
                        previous: this.getPrevious(previous)
                    });
                }}><i className="fa fa-arrow-left" aria-hidden="true"> </i></button>
                <div className="clearfix"> </div>
                <ul className="files-panel__list">
                    { this.props.data.children.map(this.renderFileList.bind(this))}
                </ul>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({actionFetchOD}, dispatch)
}

export default connect(undefined, mapDispatchToProps)(FilesPanel);


