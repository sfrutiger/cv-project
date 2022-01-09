import React, { Component } from 'react'
import EditInfoForm from '../components/EditInfoForm'

import '../styles/GeneralInfo.css';

class GeneralInfo extends Component {

    constructor(){
        super();
        this.state = {
            formOpen: true
        }
    }

    toggleForm(){
        this.state.formOpen ? this.setState({formOpen: false}) : this.setState({formOpen: true});
    };

    render() {
        const firstName = this.props.state.firstName;
        const lastName = this.props.state.lastName;
        return (
            <div className='generalInfoContainer'>
                <h2>{firstName} {lastName}</h2>
                <p>{this.props.state.email}</p>
                <p>{this.props.state.phone}</p>
                <button onClick={() => this.toggleForm()}>Edit</button>
                {this.state.formOpen &&<EditInfoForm state = {this.props.state} onInfoChange={this.props.onInfoChange}/>}
            </div>
        )
    }
}

export default GeneralInfo