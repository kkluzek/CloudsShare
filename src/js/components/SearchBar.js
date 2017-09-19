import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {actionFindDB} from "../actions/DropboxFind";
import {actionFindOD} from "../actions/OneDriveFind";

 class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {value: ""};

         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({value: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.actionFindDB(this.props.Dropbox.token, this.state.value);
        this.props.actionFindOD(this.props.OneDrive.token, this.state.value);
        this.setState({value: ''});

    }
    render(){
        return (
            <div className="search-bar">
                <form action="" className="search-bar__form" onSubmit={this.handleSubmit}>
                    <input className="search-bar__input" type="text" value={this.state.value} onChange={this.handleChange}/>
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
     return bindActionCreators({actionFindDB, actionFindOD}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
