import React, {Component} from 'react';
import dropboxIcon from "../../img/Dropbox-icon.png";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {actionFetchDB} from "../actions/DropboxFetch";
import Dropbox from 'dropbox';

class FilesPanel extends Component {
    constructor(props){
        super(props);
        this.state = {previous: ""};
    }

    getPrevious(path){
        let {previous} = this.state;
        let result = previous.split("/");
        result.pop();
        result = result.join("/");
        return result;
    }
    download(path){
        console.log("Download");
        const dbx = new Dropbox({accessToken: this.props.token});
        let request = dbx.filesDownload({path});
        request.then((response) => {console.log(response)
            let downloadUrl = URL.createObjectURL(response.fileBlob);
            window.open(downloadUrl, response.name);
        });
    }
    openFolder(path){
            this.setState({
                previous: this.getPrevious()
            });
            const {Dropbox} = this.props;
            this.props.actionFetchDB(this.props.token, path)
    }
    renderFileList(value) {
        if (value['.tag'] === "folder") {
            return <li key={value.id} onDoubleClick={() => this.openFolder(value.path_lower)}
                       className="files-panel__item">
                <i className={"files-panel__icon fa fa-folder"} aria-hidden="true"> </i>{value.name}</li>
        } else {
            return <li key={value.id} onDoubleClick={() => this.download(value.path_lower)} className="files-panel__item">
                <i className={"files-panel__icon fa fa-file"} aria-hidden="true"> </i>{value.name}</li>
        }
    }
    render(){
        return (
            <div className="files-panel">
                <img className="files-panel__drive-icon" src={dropboxIcon} alt=""/>
                <h2 className="files-panel__title">Dropbox</h2>
                <button onClick={() => {
                    this.props.actionFetchDB(this.props.token);
                    this.setState({
                        previous: this.getPrevious()
                    })


                }}><i className="fa fa-arrow-left" aria-hidden="true"> </i></button>
                <div className="clearfix"> </div>
                <ul className="files-panel__list">
                    { this.props.data.entries.map(this.renderFileList.bind(this))}
                </ul>
            </div>
        )
    }
}



function mapDispatchToProps(dispatch){
    return bindActionCreators({actionFetchDB}, dispatch)
}

export default connect(undefined, mapDispatchToProps)(FilesPanel);


