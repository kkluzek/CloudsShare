import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {actionFetchOD} from "../actions/OneDriveFetch";
import oneDriveIcon from "../../img/One-Drive-icon.png";


function oneDriveHOC(WrappedComponent){
    class OneDrive extends Component{


        searchOrFetch(){
            const {data} = this.props;
            if (data.children){
                return data.children;
            } else {
                return data.value;
            }
        }

        static downloadFile(downloadUrl){
            window.open(downloadUrl);
        }

        static fullPathToFolder(data){
            return data.parentReference.path +"/" + data.name;
        }

        static isFolder(data){
            return data.folder;
        }

        static extractData(value){
            return value;
        }

        render(){
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
            return (
                <WrappedComponent {...this.props} {...newProps}/>
            )
        }
    }
    function mapStateToProps(state){
        return state;
    }

    function mapDispatchToProps(dispatch) {
        return bindActionCreators({actionFetchOD}, dispatch)
    }
    return connect(mapStateToProps, mapDispatchToProps)(OneDrive);
}

export default oneDriveHOC;