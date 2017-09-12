import React, {Component} from 'react';
import oneDriveIcon from "../../img/One-Drive-icon.png";
import PropTypes from 'prop-types';
import * as boundActionCreators from '../actions';
// eslint-disable-next-line t
import {bindActionCreators} from 'redux';
// eslint-disable-next-line t
import {connect} from 'react-redux';

class AddDrive extends Component {
    componentDidMount() {

        document.addEventListener("getToken", (e) => {
            let expiration = new Date();
            expiration.setTime(expiration.getTime() + e.detail.expiry * 1000);
            this.props.actionAddODToken(e.detail.token, expiration);
        });
    }
    componentWillReceiveProps(nextProps){

    }
    handleClick(){
        challengeForAuth();
    }

    render(){
        return (
        <div className="add-drive">
            <h3>Add new drive</h3>
            <button onClick={this.handleClick} className="add-drive__btn btn btn-light"><img className="add-drive__btn-icon" src={oneDriveIcon} alt="OneDrive Icon"/><span className="add-drive__btn-text">OneDrive</span>
            </button>
            <button onClick={() => console.log(this.props.ODTokens)} className="add-drive__btn btn btn-light"><img className="add-drive__btn-icon" src={oneDriveIcon} alt="OneDrive Icon"/><span className="add-drive__btn-text">PROPS</span>
            </button>
        </div>
        )
    }
}

function mapStateToProps(state){
    return {ODTokens: state.ODTokens}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({...boundActionCreators}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDrive);

function onAuthenticated(token,expiry, authWindow) {
    if (token) {
            authWindow.close();
        var selectionFired = new CustomEvent("getToken",{ detail: {token: token, expiry: expiry}});
        document.dispatchEvent(selectionFired);
        }
}

//this is necessary to open function from a child window
window.onAuthenticated = onAuthenticated;



        function challengeForAuth() {
            let appInfo = {
                clientId: "144a6c1e-ef29-4128-972f-a3acb7b43da6",
                redirectUri: "http://localhost:3000/onedrivecallback",
                scopes: "user.read files.read files.read.all sites.read.all",
                authServiceUri: "https://login.microsoftonline.com/common/oauth2/v2.0/authorize"
            };
            let url =
                appInfo.authServiceUri +
                "?client_id=" + appInfo.clientId +
                "&response_type=token" +
                "&redirect_uri=" + encodeURIComponent(appInfo.redirectUri) +
                "&scope=" + encodeURIComponent(appInfo.scopes);

            function popup(url) {
                let width = 525,
                    height = 525,
                    screenX = window.screenX,
                    screenY = window.screenY,
                    outerWidth = window.outerWidth,
                    outerHeight = window.outerHeight;

                let left = screenX + Math.max(outerWidth - width, 0) / 2;
                let top = screenY + Math.max(outerHeight - height, 0) / 2;

                let features = [
                    "width=" + width,
                    "height=" + height,
                    "top=" + top,
                    "left=" + left,
                    "status=no",
                    "resizable=yes",
                    "toolbar=no",
                    "menubar=no",
                    "scrollbars=yes"];
                let popup = window.open(url, "oauth", features.join(","));
                if (!popup) {
                    alert("failed to pop up auth window");
                }

                popup.focus();
            }

            popup(url);
        }

        challengeForAuth.propTypes = {
            clientId: PropTypes.string.isRequired,
            redirectUri: PropTypes.string.isRequired,
            scopes: PropTypes.string,
            authServiceUri: PropTypes.string.isRequired
        }



