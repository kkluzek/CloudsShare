import React, {Component}  from 'react';


function onAuthCallback(){
    let authInfo = getAuthInfoFromUrl();
    let token = authInfo["access_token"];
    let expiry = parseInt(authInfo["expires_in"], 10);
    if (token)
    {
        window.opener.onAuthenticated(token, expiry, window);
    }
}


function getAuthInfoFromUrl() {
    if (window.location.hash) {
        let authResponse = window.location.hash.substring(1);
        let authInfo = JSON.parse(
            '{' + authResponse.replace(/([^=]+)=([^&]+)&?/g, '"$1":"$2",').slice(0,-1) + '}',
            function(key, value) { return key === "" ? value : decodeURIComponent(value); });
        return authInfo;
    }
    else {
        alert("failed to receive auth token");
    }
}

export default class OneDriveCallback extends Component{
    componentDidMount(){
        onAuthCallback()
    }
    render(){
        return (
            <div></div>
        )
    }
}