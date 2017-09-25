import React, {Component} from 'react';
import {OneDriveFilesPanel, DropboxFilesPanel} from "./FilesPanel";
import {connect} from "react-redux";
import {actionFetchOD} from "../actions/OneDriveFetch";
import {actionFetchDB} from "../actions/DropboxFetch";
import {bindActionCreators} from "redux";


class FilesPanels extends Component {
    componentDidMount(){
        const {OneDrive, Dropbox} = this.props;

        if ( OneDrive && OneDrive.token && !OneDrive.response) {
            this.props.actionFetchOD(OneDrive.token);
        }
        if ( Dropbox && Dropbox.token && !Dropbox.response) {
            this.props.actionFetchDB(Dropbox.token);
        }
    }

    renderODFilePanel(){
        const {OneDrive} = this.props;
        if (OneDrive && OneDrive.response) {
            return <OneDriveFilesPanel key="OD"  token={OneDrive.token} data={OneDrive.response.data}/>;
        }
    }

    renderDBFilePanel(){
        const {Dropbox} = this.props;
        if (Dropbox && Dropbox.response) {
            return <DropboxFilesPanel key="DB"  token={Dropbox.token} data={Dropbox.response}/>
        }
    }

    renderNoDiskInfo(){
        const {OneDrive, Dropbox} = this.props;
        if (!OneDrive.response && !Dropbox.response){
            return <h3>No drive found. Please go to settings</h3>
        }
    }

    render(){
        return (
            <div className="files-panels">
                { this.renderDBFilePanel() }
                { this.renderODFilePanel() }
                { this.renderNoDiskInfo() }
                {/*token={this.props.OneDrive.token} */}
                {/*<oneDriveFilesPanel key="OD2" token={this.props.OneDrive.token} data={this.props.OneDrive.response.data}/>*/}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

function  mapDispatchToProps(dispatch) {
    return bindActionCreators({actionFetchOD, actionFetchDB}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FilesPanels);


