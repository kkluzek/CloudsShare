import PropTypes from 'prop-types';

let utils = {};
let location = window.location;

utils.onAuthenticated =  function(options) {
    if (options.token) {
        options.window.close();
        /// event send to AddDrive.componentDidMount
        let tokenGot = new CustomEvent(options.type,{ detail: {...options}});
        document.dispatchEvent(tokenGot);
    }
};

utils.getAuthInfoFromUrl = function() {
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
};

utils.onAuthCallback = function(type){
    let options = {};
    let authInfo = getAuthInfoFromUrl();
    options.token = authInfo["access_token"];
    options.expiry = parseInt(authInfo["expires_in"], 10);
    options.type = type;
    options.window = window;
    if (options.token)
    {
        window.opener.onAuthenticated(options);
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
}



utils.challengeForAuth = function(type = "Error") {
    let appOneDriveInfo = {
        clientId: "144a6c1e-ef29-4128-972f-a3acb7b43da6",
        redirectUri: location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '')+"/ODcallback",
        scopes: "user.read files.read files.read.all sites.read.all",
        authServiceUri: "https://login.microsoftonline.com/common/oauth2/v2.0/authorize"
    };

    let appDropboxInfo = {
        authServiceUri: "https://www.dropbox.com/oauth2/authorize",
        redirectUri: location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '')+"/DBcallback",
        clientId: "ph4wr4t62mh20rw",
    };


    /// visit https://apps.dev.microsoft.com to find info
    let urlOneDrive =
        appOneDriveInfo.authServiceUri +
        "?client_id=" + appOneDriveInfo.clientId +
        "&response_type=token" +
        "&redirect_uri=" + encodeURIComponent(appOneDriveInfo.redirectUri) +
        "&scope=" + encodeURIComponent(appOneDriveInfo.scopes);


    /// visit https://www.dropbox.com/developers/apps/ to find info
    let urlDropbox =
        appDropboxInfo.authServiceUri +
        "?client_id=" + appDropboxInfo.clientId +
        "&response_type=token" +
        "&redirect_uri=" + encodeURIComponent(appDropboxInfo.redirectUri);

    let url;
    switch(type) {
        case "Dropbox":
            url = urlDropbox;
            break;
        case "OneDrive":
            url = urlOneDrive;
            break;
        default:
            throw Error("Inknow type");
    }


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

utils.challengeForAuth.propTypes = {
    clientId: PropTypes.string.isRequired,
    redirectUri: PropTypes.string.isRequired,
    scopes: PropTypes.string,
    authServiceUri: PropTypes.string.isRequired
}

export default utils;
