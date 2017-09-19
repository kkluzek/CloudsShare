import React, {Component}  from 'react';
import utils from "../Utils";


export default class OneDriveCallback extends Component{
    componentDidMount(){
        utils.onAuthCallback(this.props.vendor);
    }
    render(){
        return (
            <div></div>
        )
    }
}
