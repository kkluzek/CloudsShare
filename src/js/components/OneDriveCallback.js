import {Component} from 'react';
import {onAuthCallback} from "../Utils";

export default class OneDriveCallback extends Component {
    componentDidMount() {
        onAuthCallback(this.props.vendor);
    }

    render() {
        return null;
    }
}
