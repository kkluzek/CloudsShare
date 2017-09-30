import React, {Component} from 'react';
import oneDriveIcon from "../../img/One-Drive-icon.png";
import dropboxIcon from "../../img/Dropbox-icon.png";
import {oneDriveAddToken} from '../actions/oneDriveAddToken';
import {dropboxAddToken} from "../actions/dropboxAddToken";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {challengeForAuth, isEmptyObj} from "../Utils";

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
    static isLogin(obj){
        return !isEmptyObj(obj) &&  <i className="fa fa-check" style={{color: '#90D751'}} aria-hidden="true"> </i>
    }

    render() {
        return (
            <div className="add-drive">
                <h3>Add new drive</h3>
                <div className="add-drive__btns">
                    <button onClick={() => challengeForAuth("OneDrive")} className="add-drive__btn btn btn-light">
                        <img
                            className="add-drive__btn-icon" src={oneDriveIcon} alt="OneDrive Icon"/><span
                        className="add-drive__btn-text">OneDrive {AddDrive.isLogin(this.props.OneDrive)}</span>
                    </button>
                    <button onClick={() => challengeForAuth("Dropbox")} className="add-drive__btn btn btn-light">
                        <img
                            className="add-drive__btn-icon" src={dropboxIcon} alt="OneDrive Icon"/><span
                        className="add-drive__btn-text">Dropbox {AddDrive.isLogin(this.props.Dropbox)}</span>
                    </button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({actionAddODToken: oneDriveAddToken, actionAddDBToken: dropboxAddToken}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDrive);