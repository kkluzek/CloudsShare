import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {oneDriveFetchFiles} from "../actions/oneDriveFetchFiles";
import oneDriveIcon from "../../img/One-Drive-icon.png";
import oneDriveLogout from "../actions/oneDriveLogout";


function oneDriveHOC(WrappedComponent) {
    class OneDrive extends Component {
        static downloadFile(downloadUrl) {
            window.open(downloadUrl);
        }

        static fullPathToFolder(data) {
            return data.parentReference.path + "/" + data.name;
        }

        static isFolder(data) {
            return data.folder;
        }

        static extractData(value) {
            return value;
        }

        searchOrFetch() {
            const {data} = this.props;
            if (data.children) {
                return data.children;
            } else {
                return data.value;
            }
        }

        render() {
            const newProps = {};
            newProps.fetchData = this.props.actionFetchOD;
            newProps.data = this.searchOrFetch();
            newProps.icon = oneDriveIcon;
            newProps.title = "One Drive";
            newProps._HOC = true;
            newProps.downloadFile = OneDrive.downloadFile;
            newProps.fullPathToFolder = OneDrive.fullPathToFolder;
            newProps.isFolder = OneDrive.isFolder;
            newProps.extractData = OneDrive.extractData;
            newProps.downloadValue = "@microsoft.graph.downloadUrl";
            newProps.logout = this.props.oneDriveLogout;
            return (
                <WrappedComponent {...this.props} {...newProps}/>
            )
        }
    }

    function mapStateToProps(state) {
        return state;
    }

    function mapDispatchToProps(dispatch) {
        return bindActionCreators({actionFetchOD: oneDriveFetchFiles, oneDriveLogout}, dispatch)
    }

    return connect(mapStateToProps, mapDispatchToProps)(OneDrive);
}

export default oneDriveHOC;