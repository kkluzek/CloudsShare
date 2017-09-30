import React, {Component} from 'react';
import oneDriveHOC from "../HOC/oneDriveHOC";
import dropboxHOC from "../HOC/dropboxHOC";
import PropTypes from "prop-types";

const FilesPanel = class extends Component {
    constructor(props) {
        super(props);
        this.renderFileList = this.renderFileList.bind(this);
        this.state = {previous: ""};
    }

    static getPrevious(path) {
        let result = path.split("/");
        result.pop();
        result = result.join("/");
        return result;
    }

    componentWillMount() {
        if (!this.props._HOC) {
            throw Error("component 'FilesPanel' require HOC");
        }
    }

    openFolder(path) {
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
                <i className={"files-panel__icon fa fa-folder"} aria-hidden="true"> </i><span
                className="files-panel__label">{name}</span></li>
        } else {
            return <li key={id} onDoubleClick={() => downloadFile(downloadUrl)} className="files-panel__item">
                <i className={"files-panel__icon fa fa-file"} aria-hidden="true"> </i><span
                className="files-panel__label">{name}</span></li>
        }
    }

    render() {
        const {previous} = this.state;
        return (
            <div className="files-panel">
                <img className="files-panel__drive-icon" src={this.props.icon} alt=""/>
                <h2 className="files-panel__title">{this.props.title}</h2>
                <div className="files-panel__btns">
                    <button className="btn btn-light files-panel__btn" onClick={() => this.openFolder(previous)}><i
                        className="fa fa-arrow-left" aria-hidden="true"> </i></button>
                    <button className="btn btn-light files-panel__btn" onClick={() => this.openFolder("")}><i
                        className="fa fa-home" aria-hidden="true"> </i></button>
                    <button className="btn btn-light files-panel__btn" onClick={() => this.props.logout()}><i
                        className="fa fa-ban" aria-hidden="true"> </i></button>

                </div>
                <div className="clearfix"> </div>
                <ul className="files-panel__list">
                    {this.props.data.map(this.renderFileList)}
                </ul>
            </div>
        )
    }
};

FilesPanel.propTypes = {
    _HOC: PropTypes.bool.isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    downloadValue: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    fullPathToFolder: PropTypes.func.isRequired,
    fetchData: PropTypes.func.isRequired,
    downloadFile: PropTypes.func.isRequired,
    isFolder: PropTypes.func.isRequired,
    extractData: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired
};

export const OneDriveFilesPanel = oneDriveHOC(FilesPanel);
export const DropboxFilesPanel = dropboxHOC(FilesPanel);