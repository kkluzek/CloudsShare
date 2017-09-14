import React, {Component} from 'react';
import FilesPanel from "./FilesPanel";
import {connect} from "react-redux";
import {actionFetchOD} from "../actions/OneDriveFetch";
import {bindActionCreators} from "redux";

class FilesPanels extends Component {
    componentDidMount(){
        const {OneDrive} = this.props;
        if (OneDrive && OneDrive.token) {
            this.props.actionFetchOD(OneDrive.token)
        }
    }

    renderFilePanel(){
        const {OneDrive} = this.props;
        if (OneDrive && OneDrive.response) {
            return <FilesPanel key="OD" token={OneDrive.token} data={OneDrive.response.data}/>
        }
    }

    render(){
        return (
            <div className="files-panels">
                {this.renderFilePanel.call(this)}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {...state}
}

function  mapDispatchToProps(dispatch) {
    return bindActionCreators({actionFetchOD}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FilesPanels);


