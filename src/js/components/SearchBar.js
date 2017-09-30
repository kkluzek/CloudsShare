import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {dropboxFindFiles} from "../actions/dropboxFindFiles";
import {oneDriveFindFiles} from "../actions/oneDriveFindFiles";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static isEmpty(obj) {
        return Object.keys(obj).length === 0 || obj === null || obj === undefined
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        const {OneDrive, Dropbox} = this.props;
        if (!SearchBar.isEmpty(Dropbox)) {
            this.props.actionFindDB(this.props.Dropbox.token, this.state.value);
        }
        if (!SearchBar.isEmpty(OneDrive)) {
            this.props.actionFindOD(this.props.OneDrive.token, this.state.value);
        }

        this.setState({value: ''});

    }

    render() {
        return (
            <div className="search-bar">
                <form action="" className="search-bar__form" onSubmit={this.handleSubmit}>
                    <input className="search-bar__input" type="text" value={this.state.value}
                           onChange={this.handleChange} placeholder="Wyszukaj na dyskach..."/>
                    <button className="search-bar__button">
                        <i className="fa fa-search"> </i>
                    </button>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({actionFindDB: dropboxFindFiles, actionFindOD: oneDriveFindFiles}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
