import React, {Component} from 'react';
import dropboxIcon from "../../img/Dropbox-icon.png";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {actionFetchDB} from "../actions/DropboxFetch";
import Dropbox from 'dropbox';

//TODO przerobić na HOCa
class FilesPanel extends Component {
    constructor(props){
        super(props);
        this.renderFileList = this.renderFileList.bind(this);
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
        /// value.metadata from search or value from fetch
        let data = value.metadata || value;
        if (data['.tag'] === "folder") {
            return <li key={data.id} onDoubleClick={() => this.openFolder(data.path_lower)}
                       className="files-panel__item">
                <i className={"files-panel__icon fa fa-folder"} aria-hidden="true"> </i>{data.name}</li>
        } else {
            return <li key={data.id} onDoubleClick={() => this.download(data.path_lower)} className="files-panel__item">
                <i className={"files-panel__icon fa fa-file"} aria-hidden="true"> </i>{data.name}</li>
        }
    }
    render(){
        let SearchOrFetch = null;
        if (this.props.data.entries){ // fetch data
            SearchOrFetch = this.props.data.entries.map(this.renderFileList);
        } else { // else seatch
            SearchOrFetch = this.props.data.matches.map(this.renderFileList);
        }
        return (
            <div className="files-panel">
                <img className="files-panel__drive-icon" src={dropboxIcon} alt=""/>

                <h2 className="files-panel__title">Dropbox</h2>
                {
                    /* TODO przycisk do home*/
                }
                {/* TODO przycisk wylogowania*/}
                <button onClick={() => {
                    this.props.actionFetchDB(this.props.token);
                    this.setState({
                        previous: this.getPrevious()
                    })


                }}><i className="fa fa-arrow-left" aria-hidden="true"> </i></button>
                <div className="clearfix"> </div>
                <ul className="files-panel__list">
                    {SearchOrFetch}
                </ul>
            </div>
        )
    }
}



function mapDispatchToProps(dispatch){
    return bindActionCreators({actionFetchDB}, dispatch)
}

export default connect(undefined, mapDispatchToProps)(FilesPanel);


