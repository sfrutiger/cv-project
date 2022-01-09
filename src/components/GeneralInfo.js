import React, { Component } from 'react'
import { GlobalContext} from '../context/GlobalState'
import EditInfoForm from '../components/EditInfoForm'

import '../styles/GeneralInfo.css';

class GeneralInfo extends Component {
    static contextType = GlobalContext;

    constructor(){
        super();
        this.state = {
            formOpen: false
        }
    }

    toggleForm(){
        this.state.formOpen ? this.setState({formOpen: false}) : this.setState({formOpen: true});
    };

    render() {
        return (
            <div className='generalInfoContainer'>
                <h2>{this.context.info.firstName} {this.context.info.lastName}</h2>
                <p>{this.context.info.email}</p>
                <p>{this.context.info.phone}</p>
                <button onClick={() => this.toggleForm()}>Edit</button>
                {this.state.formOpen &&<EditInfoForm />}
            </div>
        )
    }
}

export default GeneralInfo