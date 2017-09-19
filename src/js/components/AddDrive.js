import React, {Component} from 'react';
import oneDriveIcon from "../../img/One-Drive-icon.png";
import dropboxIcon from "../../img/Dropbox-icon.png";
import {actionAddODToken} from '../actions/OneDriveToken';
import {actionAddDBToken} from "../actions/DropboxToken";
// eslint-disable-next-line t
import {bindActionCreators} from 'redux';
// eslint-disable-next-line t
import {connect} from 'react-redux';
import utils from "../Utils";
const year = 31536000;//seconds

class AddDrive extends Component {
    componentDidMount() {
        let expiration = new Date();
        document.addEventListener("OneDrive", (e) => {
            expiration.setTime(expiration.getTime() + e.detail.expiry * 1000);
            this.props.actionAddODToken(e.detail.token, expiration);
        });
        document.addEventListener("Dropbox", (e) => {
            expiration.setTime(expiration.getTime() + year);
            this.props.actionAddDBToken(e.detail.token, expiration);
        });
    }


    render(){
        return (
            <div>
                <button onClick={() => utils.challengeForAuth("OneDrive")} className="add-drive__btn btn btn-light"><img className="add-drive__btn-icon" src={oneDriveIcon} alt="OneDrive Icon"/><span className="add-drive__btn-text">OneDrive</span>
                </button>
                <button onClick={() => utils.challengeForAuth("Dropbox")} className="add-drive__btn btn btn-light"><img className="add-drive__btn-icon" src={dropboxIcon} alt="OneDrive Icon"/><span className="add-drive__btn-text">Dropbox</span>
                </button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return state
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({actionAddODToken, actionAddDBToken}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDrive);





