import React, {Component} from 'react';
import {DropboxFilesPanel, OneDriveFilesPanel} from "./FilesPanel";
import {connect} from "react-redux";
import {oneDriveFetchFiles} from "../actions/oneDriveFetchFiles";
import {dropboxFetchFiles} from "../actions/dropboxFetchFiles";
import {bindActionCreators} from "redux";
import {isEmptyObj} from "../Utils";


class FilesPanels extends Component {
    componentDidMount() {
        const {OneDrive, Dropbox} = this.props;

        if (OneDrive && OneDrive.token && !OneDrive.response) {
            this.props.actionFetchOD(OneDrive.token);
        }
        if (Dropbox && Dropbox.token && !Dropbox.response) {
            this.props.actionFetchDB(Dropbox.token);
        }
    }

    renderODFilePanel() {
        const {OneDrive} = this.props;
        if (OneDrive && OneDrive.response) {
            return <OneDriveFilesPanel key="OD" token={OneDrive.token} data={OneDrive.response.data}/>;
        }
    }

    renderDBFilePanel() {
        const {Dropbox} = this.props;
        if (Dropbox && Dropbox.response) {
            return <DropboxFilesPanel key="DB" token={Dropbox.token} data={Dropbox.response}/>
        }
    }

    renderNoDiskInfo() {
        const {OneDrive, Dropbox} = this.props;
        if (isEmptyObj(OneDrive) && isEmptyObj(Dropbox)) {
            return <h3>No drive found. Please go to settings</h3>
        }
    }

    render() {
        return (
            <div id="files-panels" className="files-panels">
                {this.renderDBFilePanel()}
                {this.renderODFilePanel()}
                {this.renderNoDiskInfo()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({actionFetchOD: oneDriveFetchFiles, actionFetchDB: dropboxFetchFiles}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FilesPanels);
