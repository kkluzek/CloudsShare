import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import oneDriveHOC from "../HOC/oneDriveHOC";
import dropboxHOC from "../HOC/dropboxHOC";
import PropTypes from "prop-types";

//TODO przerobić na HOCa
const FilesPanel = class extends Component {
    constructor(props){
        super(props);
        this.renderFileList = this.renderFileList.bind(this);
        this.state = {previous: ""};
    }

    static getPrevious(path){
        let result = path.split("/");
        result.pop();
        result = result.join("/");
        return result;
    }

    componentWillMount(){
        if(!this.props._HOC){
            throw Error("component 'FilesPanel' require HOC");
        }
    }

    openFolder(path){
        this.setState({
            previous: FilesPanel.getPrevious(path)
        });
        this.props.fetchData(this.props.token, path);
    }


    renderFileList(value) {
        const {downloadValue, downloadFile} = this.props;
        const data = this.props.extractData(value);
        const downloadUrl = data[downloadValue];
        const {name, id} = data;
        const isFolder = this.props.isFolder(data);
        const fullPathToFolder = this.props.fullPathToFolder(data);

        if (isFolder) {
            return <li key={id} onDoubleClick={() => this.openFolder(fullPathToFolder)} className="files-panel__item">
                <i className={"files-panel__icon fa fa-folder"} aria-hidden="true"> </i>{name}</li>
        } else {
            return <li key={id} onDoubleClick={() => downloadFile(downloadUrl)} className="files-panel__item">
                <i className={"files-panel__icon fa fa-file"} aria-hidden="true"> </i>{name}</li>
        }
    }

    render(){
        const {previous} = this.state;
        return (
            <div className="files-panel">
                <img className="files-panel__drive-icon" src={this.props.icon} alt=""/>
                <h2 className="files-panel__title">{this.props.title}</h2>
                {/* TODO add Home button */}
                {/* TODO Log Out button */}
                <button onClick={() => this.openFolder(previous)}><i className="fa fa-arrow-left" aria-hidden="true"> </i></button>
                <div className="clearfix"> </div>
                <ul className="files-panel__list">
                    { this.props.data.map(this.renderFileList) }
                </ul>
            </div>
        )
    }
};


function mapDispatchToProps(dispatch){
    return bindActionCreators({}, dispatch)
}

FilesPanel.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    fetchData: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
    _HOC: PropTypes.bool.isRequired,
    fullPathToFolder: PropTypes.func.isRequired,
    isFolder: PropTypes.func.isRequired,
    downloadFile: PropTypes.func.isRequired,
    downloadValue: PropTypes.string.isRequired,
    extractData: PropTypes.func.isRequired
};

export const OneDriveFilesPanel = oneDriveHOC(connect(undefined, mapDispatchToProps)(FilesPanel));
export const DropboxFilesPanel = dropboxHOC(connect(undefined, mapDispatchToProps)(FilesPanel));